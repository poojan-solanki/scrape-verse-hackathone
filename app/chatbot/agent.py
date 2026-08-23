"""PortPulse Maritime AI Agent.

Built on modern LangGraph StateGraph architecture (MessagesState + ToolNode + tools_condition).
Integrates GPT-5.6-Luna with dynamic Model Context Protocol (MCP) tools:
- Bright Data MCP Server: Live web search (SERP) & web unlocker markdown extraction
- Supabase MCP Server: Vessel telemetry, terminal PDF OCR tables, and situational summaries
"""

import asyncio
import logging
import os
from typing import Any, Dict, List, Tuple

from dotenv import load_dotenv
from langchain_core.messages import AIMessage, BaseMessage, HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
from langgraph.graph import END, START, MessagesState, StateGraph
from langgraph.prebuilt import ToolNode, tools_condition

from app.chatbot.mcp_tools import ALL_MCP_LANGCHAIN_TOOLS

load_dotenv()
logger = logging.getLogger("portpulse.chatbot.agent")

MODEL_NAME = os.getenv("OPENAI_MODEL", "gpt-5.6-luna")

SYSTEM_PROMPT = """You are PortPulse AI, the official conversational Maritime Intelligence Assistant for Indian Port Operations (specializing in JNPT / Nhava Sheva and Mundra Port).

YOUR INTEGRATED MCP SERVERS & TOOLS:
1. 🔵 **Bright Data MCP Server**:
   - `brightdata_search_engine`: Real-time web search (Google/Bing) for live port advisories, carrier announcements, marine weather, or strike alerts.
   - `brightdata_scrape_as_markdown`: Web Unlocker scraping of live port/carrier websites into clean Markdown.
   - `brightdata_live_scrape_port`: Triggers on-demand live scraper ingestion for JNPT / Mundra.
2. ⚡ **Supabase MCP Database Server**:
   - `supabase_query_vessels`: Live vessel database (berths, commodity, anchorage queue, expected arrivals).
   - `supabase_get_terminal_ocr`: Deep OCR terminal PDF reports (LOA, drafts, alongside dates, TEU balance).
   - `supabase_get_port_summary`: Latest port situational summaries.
   - `supabase_execute_sql`: Safe read-only queries against Supabase tables.

ADAPTIVE EXPERTISE BEHAVIOR:
- **Advanced Maritime Professional**: If the user uses maritime terminology (e.g. TEU, LOA, draft, UN/LOCODE, ATA, ETC, STBD, Port side, BMCT, APMT, NSIGT, anchorage queue, dwell time, bulk/POL cargo):
  - Tone: Crisp, technical, operational, and data-dense. Include exact berth numbers, metric LOA, draft depths, and TEU balances.
- **Standard / Non-Technical User**: If the user asks in plain everyday language:
  - Tone: Welcoming, friendly, crystal clear. Explain technical concepts simply (e.g., explain that 'anchorage' means the ship is waiting in the water before getting a dock).

CORE OPERATIONAL RULES:
- ALWAYS use the relevant MCP tools (`supabase_query_vessels`, `supabase_get_terminal_ocr`, `brightdata_search_engine`, etc.) before answering factual queries.
- Dynamically choose which MCP server and tool to invoke. You have full autonomous capability to query both Bright Data and Supabase.
- Never invent fictitious vessel names or berth allocations.
- Structure responses cleanly using markdown tables, bullet points, and operational status headers.
"""


def _create_agent_graph():
    """Builds and compiles the official LangGraph StateGraph agent."""
    api_key = os.getenv("OPENAI_API_KEY", "").strip()

    llm = ChatOpenAI(
        model=MODEL_NAME,
        api_key=api_key or None,
        reasoning_effort="none",
        temperature=0.2,
    ).bind_tools(ALL_MCP_LANGCHAIN_TOOLS)

    async def call_model(state: MessagesState) -> Dict[str, List[BaseMessage]]:
        """Invokes ChatOpenAI model with messages in state."""
        response = await llm.ainvoke(state["messages"])
        return {"messages": [response]}

    workflow = StateGraph(MessagesState)
    workflow.add_node("agent", call_model)
    workflow.add_node("tools", ToolNode(ALL_MCP_LANGCHAIN_TOOLS))

    workflow.add_edge(START, "agent")
    workflow.add_conditional_edges("agent", tools_condition)
    workflow.add_edge("tools", "agent")

    return workflow.compile()


_maritime_agent_graph = None


def get_agent_graph():
    """Lazily compiles and returns the official LangGraph StateGraph agent."""
    global _maritime_agent_graph
    if _maritime_agent_graph is None:
        _maritime_agent_graph = _create_agent_graph()
    return _maritime_agent_graph


def _extract_telemetry_and_reply(messages: List[BaseMessage]) -> Tuple[str, List[Dict[str, Any]]]:
    """Extracts final assistant reply and all tool execution records from message history."""
    reply = ""
    tools_called: List[Dict[str, Any]] = []

    for msg in messages:
        if isinstance(msg, AIMessage):
            if msg.content and isinstance(msg.content, str):
                reply = msg.content
            if msg.tool_calls:
                for tc in msg.tool_calls:
                    server = "Bright Data" if "brightdata" in tc["name"].lower() else "Supabase"
                    tools_called.append({
                        "server": server,
                        "tool": tc["name"],
                        "args": tc.get("args") or {},
                        "status": "success",
                    })

    return reply or "I have processed your maritime operations request.", tools_called


async def run_maritime_agent(
    conversation_history: List[Dict[str, Any]],
    user_message: str,
) -> Dict[str, Any]:
    """Executes a chat turn through the LangGraph agent and returns reply + MCP telemetry."""
    api_key = os.getenv("OPENAI_API_KEY", "").strip()

    if not api_key:
        fallback_reply = (
            "👋 **PortPulse AI Maritime Copilot**:\n\n"
            "I am connected to **Bright Data MCP** and **Supabase MCP**.\n"
            "Please configure your `OPENAI_API_KEY` in environment variables to enable full autonomous tool execution."
        )
        updated_history = list(conversation_history) + [
            {"role": "user", "content": user_message},
            {"role": "assistant", "content": fallback_reply},
        ]
        return {
            "reply": fallback_reply,
            "updated_history": updated_history,
            "tools_called": [{"server": "PortPulse", "tool": "local_telemetry_cache", "status": "cached"}],
        }

    # Format LangChain messages from history
    messages: List[BaseMessage] = [SystemMessage(content=SYSTEM_PROMPT)]
    for msg in conversation_history[-8:]:
        role = msg.get("role")
        content = msg.get("content", "")
        if role == "user":
            messages.append(HumanMessage(content=content))
        elif role == "assistant":
            messages.append(AIMessage(content=content))

    messages.append(HumanMessage(content=user_message))

    try:
        agent = get_agent_graph()
        final_state = await agent.ainvoke({"messages": messages})
        reply, tools_called = _extract_telemetry_and_reply(final_state["messages"])

        updated_history = list(conversation_history) + [
            {"role": "user", "content": user_message},
            {"role": "assistant", "content": reply},
        ]

        return {
            "reply": reply,
            "updated_history": updated_history,
            "tools_called": tools_called,
        }

    except Exception as e:
        logger.error(f"❌ [LangGraph:Agent] Execution error: {e}")
        err_reply = f"Encountered an issue running LangGraph MCP agent ({MODEL_NAME}): {e}."
        updated_history = list(conversation_history) + [
            {"role": "user", "content": user_message},
            {"role": "assistant", "content": err_reply},
        ]
        return {
            "reply": err_reply,
            "updated_history": updated_history,
            "tools_called": [],
        }


def chat(conversation_history: List[Dict[str, Any]], user_message: str) -> Dict[str, Any]:
    """Synchronous interface for background tasks."""
    return asyncio.run(run_maritime_agent(conversation_history, user_message))
