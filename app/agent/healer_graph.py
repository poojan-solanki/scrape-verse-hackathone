import json
import logging
import os
import subprocess
from datetime import datetime, timezone
from typing import Any, Dict, List, TypedDict

from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_groq import ChatGroq
from langgraph.graph import END, StateGraph

from app.db.client import get_supabase_client
from app.health.contracts import validate_raw_records
from app.ports.registry import port_registry

load_dotenv()
logger = logging.getLogger("portpulse.agent.healer")


class HealingState(TypedDict):
    port_id: str
    collector_id: str
    port_name: str
    target_url: str
    raw_broken_items: List[Dict[str, Any]]
    validation_errors: List[str]
    golden_records: List[Dict[str, Any]]
    diagnosed_issue: str
    synthesized_prompt: str
    retest_records: List[Dict[str, Any]]
    retest_health: float
    approval_status: str
    retry_count: int


def _call_groq_or_fallback(prompt_context: str, fallback_prompt: str) -> str:
    """Invokes Groq LLM with fallback to deterministic prompt."""
    api_key = os.getenv("GROQ_API_KEY", "").strip()
    if api_key:
        try:
            llm = ChatGroq(model="llama-3.3-70b-versatile", api_key=api_key, temperature=0.1)
            sys_msg = SystemMessage(content="You are an expert Web Scraping AI. Output ONLY a concise, surgical refactoring prompt (under 300 chars) for Bright Data scraper heal.")
            res = llm.invoke([sys_msg, HumanMessage(content=prompt_context)])
            return res.content.strip().replace('"', '')
        except Exception as e:
            logger.warning(f"Groq LLM call failed ({e}), using rule fallback.")
    return fallback_prompt


# ===================== LANGGRAPH NODES =====================

def node_diagnose(state: HealingState) -> Dict[str, Any]:
    """Node 1: Diagnose issue and fetch past golden records from Supabase."""
    supabase = get_supabase_client()
    golden = supabase.table("vessel_logs").select("vessel_name, terminal_name, berth_number, commodity").eq("port_id", state["port_id"]).limit(2).execute().data or []
    issue = "ZERO_RECORDS" if not state.get("raw_broken_items") else f"SCHEMA_ERRORS: {state.get('validation_errors', ['Null values'])[:2]}"
    logger.info(f"🕵️ [Agent] Diagnosis for {state['port_name']}: {issue}")
    return {"golden_records": golden, "diagnosed_issue": issue}


def node_synthesize(state: HealingState) -> Dict[str, Any]:
    """Node 2: Synthesize repair prompt using Groq LLM."""
    ctx = f"Port: {state['port_name']}\nURL: {state['target_url']}\nIssue: {state['diagnosed_issue']}\nGolden Sample: {json.dumps(state.get('golden_records', []))}"
    fallback = f"The vessel table structure at {state['target_url']} changed. Re-detect selectors for vessel_name, berth_number, terminal_name, commodity."
    prompt = _call_groq_or_fallback(ctx, fallback)
    logger.info(f"🧠 [Agent] Synthesized Prompt: '{prompt}'")
    return {"synthesized_prompt": prompt}


def node_heal_cli(state: HealingState) -> Dict[str, Any]:
    """Node 3: Trigger `bdata scraper heal` via CLI."""
    logger.info(f"⚡ [Agent] Triggering 'bdata scraper heal {state['collector_id']}'...")
    subprocess.run(["bdata", "scraper", "heal", state["collector_id"], state["synthesized_prompt"]], capture_output=True, text=True, shell=True)
    return {}


def node_verify(state: HealingState) -> Dict[str, Any]:
    """Node 4: Re-test healed collector and evaluate strict health."""
    cmd = ["bdata", "scraper", "run", state["collector_id"], state["target_url"], "--json"]
    proc = subprocess.run(cmd, capture_output=True, text=True, shell=True)
    raw_items = json.loads(proc.stdout) if (proc.returncode == 0 and proc.stdout) else []
    report = validate_raw_records(raw_items)
    logger.info(f"🧪 [Agent] Re-test Health: {report.health_score}% | Valid: {report.is_valid}")
    return {"retest_records": raw_items, "retest_health": report.health_score}


def node_promote(state: HealingState) -> Dict[str, Any]:
    """Node 5: Approve to production if health >= 80%, else retry or quarantine."""
    supabase = get_supabase_client()
    ts = datetime.now(timezone.utc).isoformat()
    health = state.get("retest_health", 0.0)

    if health >= 80.0:
        logger.info(f"🚀 [Agent] Health score {health}% passed. Approving to production...")
        subprocess.run(["bdata", "scraper", "approve", state["collector_id"]], capture_output=True, text=True, shell=True)
        
        # Ingest healed records
        report = validate_raw_records(state.get("retest_records", []))
        if report.valid_records:
            batch = [{**r.model_dump(), "port_id": state["port_id"], "scraped_at": ts} for r in report.valid_records]
            supabase.table("vessel_logs").insert(batch).execute()

        supabase.table("scraper_events").insert({
            "event_type": "healing_auto_healed", "health_score_before": health,
            "records_received": len(report.valid_records),
            "details": {"port": state["port_name"], "prompt": state.get("synthesized_prompt"), "status": "APPROVED"},
            "created_at": ts
        }).execute()
        return {"approval_status": "approved_to_prod"}

    if state.get("retry_count", 0) < 1:
        return {"approval_status": "retry", "retry_count": state.get("retry_count", 0) + 1}

    logger.error(f"🛑 [Agent] Quarantining scraper {state['collector_id']} after retries.")
    supabase.table("scraper_events").insert({
        "event_type": "healing_quarantined", "health_score_before": health,
        "details": {"port": state["port_name"], "status": "QUARANTINED"}, "created_at": ts
    }).execute()
    return {"approval_status": "quarantined"}


# ===================== LANGGRAPH GRAPH =====================

def create_healer_graph():
    graph = StateGraph(HealingState)
    graph.add_node("diagnose", node_diagnose)
    graph.add_node("synthesize", node_synthesize)
    graph.add_node("heal_cli", node_heal_cli)
    graph.add_node("verify", node_verify)
    graph.add_node("promote", node_promote)

    graph.set_entry_point("diagnose")
    graph.add_edge("diagnose", "synthesize")
    graph.add_edge("synthesize", "heal_cli")
    graph.add_edge("heal_cli", "verify")
    graph.add_edge("verify", "promote")
    graph.add_conditional_edges("promote", lambda s: "synthesize" if s.get("approval_status") == "retry" else END, {"synthesize": "synthesize", END: END})

    return graph.compile()


healer_graph = create_healer_graph()


def run_self_healing_agent(port_id: str, raw_broken_items: List[Dict[str, Any]], validation_errors: List[str]) -> Dict[str, Any]:
    """Public execution trigger for the LangGraph Autonomous Self-Healing Agent."""
    scraper = port_registry.get(port_id)
    if not scraper:
        raise ValueError(f"Port scraper '{port_id}' not found in registry")

    meta = scraper.metadata
    init_state: HealingState = {
        "port_id": port_id, "collector_id": meta.collector_id or f"c_{port_id}_berthing",
        "port_name": meta.name, "target_url": meta.target_url,
        "raw_broken_items": raw_broken_items, "validation_errors": validation_errors,
        "golden_records": [], "diagnosed_issue": "", "synthesized_prompt": "",
        "retest_records": [], "retest_health": 0.0, "approval_status": "in_progress", "retry_count": 0
    }
    return healer_graph.invoke(init_state)
