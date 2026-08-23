from typing import Any, Dict, List, Optional
from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.chatbot.agent import run_maritime_agent

router = APIRouter(prefix="/chat", tags=["AI Chatbot"])


class ChatMessage(BaseModel):
    role: str = Field(..., description="'user' or 'assistant'")
    content: str = Field(..., description="Message content")


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, description="User query or instruction")
    history: List[ChatMessage] = Field(default_factory=list, description="Prior conversation messages")


class ChatResponse(BaseModel):
    reply: str
    history: List[Dict[str, Any]]
    tools_called: List[Dict[str, Any]] = Field(
        default_factory=list,
        description="List of MCP tools executed by the LangGraph agent during this turn",
    )


@router.post("/", response_model=ChatResponse, summary="Interact with Adaptive Maritime AI Chatbot (LangGraph + MCP)")
async def chat_endpoint(payload: ChatRequest):
    """
    Conversational endpoint powered by LangGraph & GPT-5.6-Luna connected dynamically to:
    - Bright Data MCP Server (search_engine, scrape_as_markdown, live_scrape)
    - Supabase MCP Server (query_vessels, get_terminal_ocr, get_port_summary, execute_sql)
    """
    history_dicts = [{"role": m.role, "content": m.content} for m in payload.history]
    result = await run_maritime_agent(
        conversation_history=history_dicts,
        user_message=payload.message,
    )
    return ChatResponse(
        reply=result["reply"],
        history=result["updated_history"],
        tools_called=result.get("tools_called", []),
    )
