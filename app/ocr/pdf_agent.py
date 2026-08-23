import logging
from datetime import datetime, timezone
from typing import Any, Dict, List, TypedDict

from langgraph.graph import END, StateGraph

from app.db.client import get_supabase_client
from app.ocr.pdf_extractor import PDFExtractor

logger = logging.getLogger("portpulse.ocr.agent")

# Predefined terminal reports if none found in raw payload
JNPT_TERMINAL_PDFS = [
    {"terminal": "BMCT", "url": "https://www.jnport.gov.in/uploads/berthing_report/pdf/17/Berthing_Sheet_20_AUG_2026.pdf"},
    {"terminal": "APMT Mumbai", "url": "https://www.jnport.gov.in/uploads/berthing_report/pdf/16/APMT_Berthing_Report_-_20-Aug-2026.pdf"},
    {"terminal": "NSFT Terminal", "url": "https://www.jnport.gov.in/uploads/berthing_report/pdf/15/Daily_Berthing_Report_20_8_2026.pdf"},
    {"terminal": "NSICT", "url": "https://www.jnport.gov.in/uploads/berthing_report/pdf/13/BERTHING_CT.pdf"},
    {"terminal": "NSIGT", "url": "https://www.jnport.gov.in/uploads/berthing_report/pdf/14/BERTHING_GT.pdf"},
]


class PDFAgentState(TypedDict):
    port_id: str
    scraper_id: str
    port_db_id: str
    pdf_targets: List[Dict[str, str]]
    extracted_records: List[Dict[str, Any]]
    total_records: int
    errors: List[str]


def node_collect_pdf_urls(state: PDFAgentState) -> Dict[str, Any]:
    """Node 1: Collect terminal PDF URLs from recent scrape logs or defaults."""
    supabase = get_supabase_client()
    pdf_targets: List[Dict[str, str]] = []
    seen_urls = set()

    # Always include all major container terminal PDFs for JNPT / Mundra
    if "jnpt" in state["port_id"].lower():
        for t in JNPT_TERMINAL_PDFS:
            if t["url"] not in seen_urls:
                seen_urls.add(t["url"])
                pdf_targets.append(t)
    elif "mundra" in state["port_id"].lower():
        mundra_t = {
            "terminal": "Mundra Port (APSEZ)",
            "url": "https://www.adaniports.com/-/media/Project/Ports/PortsAndTerminals/Mundra-Documents/Berthing-Report/Latest_Berthing-Report_Mundra.pdf",
        }
        seen_urls.add(mundra_t["url"])
        pdf_targets.append(mundra_t)
    elif "felixstowe" in state["port_id"].lower() or "gbfxt" in state["port_id"].lower():
        felix_t = {
            "terminal": "Port of Felixstowe Marine Notice",
            "url": "https://www.portoffelixstowe.co.uk/wp-content/uploads/2024/06/Marine-Safety-Management-Plan-2024-2027.pdf",
        }
        seen_urls.add(felix_t["url"])
        pdf_targets.append(felix_t)

    try:
        res = (
            supabase.table("vessel_logs")
            .select("terminal_report_pdf_url, terminal_name")
            .eq("scraper_id", state["scraper_id"])
            .not_.is_("terminal_report_pdf_url", "null")
            .execute()
        )
        for row in res.data or []:
            url = (row.get("terminal_report_pdf_url") or "").strip()
            term = (row.get("terminal_name") or "Main Terminal").strip()
            if url and url not in seen_urls and url.startswith("http"):
                seen_urls.add(url)
                pdf_targets.append({"terminal": term, "url": url})
    except Exception as e:
        logger.warning(f"⚠️ Could not query vessel_logs for PDF URLs: {e}")

    logger.info(f"📑 [PDFAgent] Collected {len(pdf_targets)} PDF targets to process for {state['port_id']}")
    return {"pdf_targets": pdf_targets}


from concurrent.futures import ThreadPoolExecutor, as_completed


def node_extract_all_pdfs(state: PDFAgentState) -> Dict[str, Any]:
    """Node 2: Runs parallel 2-stage OCR extraction on all discovered PDF targets concurrently."""
    extractor = PDFExtractor()
    all_records: List[Dict[str, Any]] = []
    errors: List[str] = list(state.get("errors") or [])
    targets = state.get("pdf_targets", [])

    if not targets:
        return {"extracted_records": [], "total_records": 0, "errors": []}

    def _process_target(target: Dict[str, str]) -> tuple:
        url = target["url"]
        term = target["terminal"]
        try:
            res = extractor.extract(url, term)
            recs = res.get("records", [])
            for r in recs:
                r["extraction_stage"] = res.get("stage", 1)
                r["health_score"] = res.get("health_score", 0.0)
                r["pdf_url"] = url
            return recs, None
        except Exception as e:
            err_msg = f"Failed extracting {term} ({url}): {e}"
            logger.error(f"❌ [PDFAgent] {err_msg}")
            return [], err_msg

    # Parallel asynchronous extraction across all terminal PDFs
    max_workers = min(len(targets), 6)
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(_process_target, t): t for t in targets}
        for future in as_completed(futures):
            recs, err = future.result()
            if recs:
                all_records.extend(recs)
            if err:
                errors.append(err)

    logger.info(f"✨ [PDFAgent] Extracted total {len(all_records)} vessel records in parallel across {len(targets)} PDFs")
    return {"extracted_records": all_records, "total_records": len(all_records), "errors": errors}


def node_persist_records(state: PDFAgentState) -> Dict[str, Any]:
    """Node 3: Persist structured PDF vessel records into Supabase pdf_vessel_logs."""
    records = state.get("extracted_records", [])
    if not records:
        return {}

    supabase = get_supabase_client()
    now_iso = datetime.now(timezone.utc).isoformat()
    rows_to_insert = []

    for r in records:
        rows_to_insert.append({
            "port_id": state["port_db_id"],
            "scraper_id": state["scraper_id"],
            "terminal_name": r.get("terminal_name"),
            "pdf_url": r.get("pdf_url"),
            "extracted_at": now_iso,
            "extraction_stage": r.get("extraction_stage", 1),
            "health_score": r.get("health_score", 0.0),
            "vessel_name": r.get("vessel_name"),
            "via_number": r.get("via_number"),
            "loa": r.get("loa"),
            "berth_number": r.get("berth_number"),
            "berthing_side": r.get("berthing_side"),
            "alongside_date": r.get("alongside_date"),
            "alongside_time": r.get("alongside_time"),
            "ops_commenced": r.get("ops_commenced"),
            "ops_completed": r.get("ops_completed"),
            "imp_bal": r.get("imp_bal"),
            "exp_bal": r.get("exp_bal"),
            "max_draft": r.get("max_draft"),
            "status": r.get("status") or "BERTH_ACTIVE",
            "raw_payload": r,
        })

    try:
        supabase.table("pdf_vessel_logs").insert(rows_to_insert).execute()
        logger.info(f"💾 [PDFAgent] Successfully persisted {len(rows_to_insert)} PDF vessel records to Supabase")
    except Exception as e:
        logger.error(f"❌ [PDFAgent] Failed saving to pdf_vessel_logs: {e}")

    return {}


def create_pdf_agent_graph():
    """Compiles the LangGraph orchestration graph for PDF OCR extraction."""
    graph = StateGraph(PDFAgentState)
    graph.add_node("collect_pdf_urls", node_collect_pdf_urls)
    graph.add_node("extract_all_pdfs", node_extract_all_pdfs)
    graph.add_node("persist_records", node_persist_records)

    graph.set_entry_point("collect_pdf_urls")
    graph.add_edge("collect_pdf_urls", "extract_all_pdfs")
    graph.add_edge("extract_all_pdfs", "persist_records")
    graph.add_edge("persist_records", END)

    return graph.compile()


def run_pdf_ocr_agent(port_id: str, scraper_id: str, port_db_id: str) -> Dict[str, Any]:
    """Public interface to trigger the PDF OCR extraction agent.
    
    NOTE: Graph is compiled fresh per invocation (not as a module-level singleton)
    to avoid asyncio event loop conflicts when called from FastAPI threadpool workers.
    """
    logger.info(f"🚀 [PDFAgent] Starting PDF OCR agent for port '{port_id}'...")
    initial_state: PDFAgentState = {
        "port_id": port_id,
        "scraper_id": scraper_id,
        "port_db_id": port_db_id,
        "pdf_targets": [],
        "extracted_records": [],
        "total_records": 0,
        "errors": [],
    }
    # Compile fresh graph per call — avoids asyncio CancelledError in threadpool
    graph = create_pdf_agent_graph()
    return graph.invoke(initial_state)

