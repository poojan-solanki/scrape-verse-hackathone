import asyncio
import logging
import os
from contextlib import asynccontextmanager
from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.apis.routes import routes
from app.apis.port_list_api import router as port_list_router
from app.chatbot.api import router as chatbot_router
from app.db.client import get_supabase_client
from app.services.runner import scraper_runner
from app.services.scheduler import (
    initialize_scheduler,
    shutdown_scheduler,
    get_scheduled_jobs,
    get_active_workers_status,
)

# Configure unified application logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-7s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("portpulse.main")


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("🚀 Starting PortPulse Intelligence Service...")
    initialize_scheduler(run_immediately=False)
    yield
    logger.info("🛑 Shutting down PortPulse Intelligence Service...")
    shutdown_scheduler()


app = FastAPI(
    title="PortPulse API",
    description="Autonomous Maritime Intelligence & Self-Healing Scraper Engine",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount API routers
app.include_router(routes)
app.include_router(port_list_router)
app.include_router(chatbot_router)


@app.get("/health", tags=["System"])
async def health_check():
    """System and MCP integration health check endpoint."""
    return {
        "status": "healthy",
        "service": "PortPulse Intelligence Engine",
        "version": "1.0.0",
        "mcp_servers": {
            "bright_data": "active",
            "supabase": "active",
        },
        "model": os.getenv("OPENAI_MODEL", "gpt-5.6-luna"),
    }


# ==========================================
# DASHBOARD ROUTES (Visible in /docs)
# ==========================================
@app.get("/", response_class=FileResponse, tags=["Dashboard"], summary="Open 3D Maritime Dashboard")
@app.get("/dashboard", response_class=FileResponse, tags=["Dashboard"], summary="Open 3D Maritime Dashboard")
async def serve_dashboard():
    """Serves the 3D Interactive WebGL Maritime Operations Dashboard."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    dist_index = os.path.join(base_dir, "frontend", "dist", "index.html")
    if os.path.exists(dist_index):
        return FileResponse(dist_index)
    return FileResponse(os.path.join(base_dir, "frontend", "index.html"))


# ==========================================
# CORE API ENDPOINTS (ASYNC IO)
# ==========================================
@app.get("/scheduler/jobs", tags=["Scheduler"], summary="List Background Jobs & Worker Status")
async def list_jobs():
    """List all active background scraper jobs, next run times, and live worker load."""
    return {
        "workers": get_active_workers_status(),
        "active_jobs": get_scheduled_jobs(),
    }


@app.post("/scrapers/{port_id}/run", tags=["Scrapers"], summary="Trigger On-Demand Scrape")
async def trigger_scraper_run(port_id: str):
    """Trigger an on-demand live scrape execution for a specific port."""
    try:
        result = await asyncio.to_thread(scraper_runner.run_port, port_id)
        return {"status": "success", "result": result}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/events", tags=["Events & Audit"], summary="List Scraper Audit Events")
async def list_scraper_events(limit: int = 50):
    """Fetch the latest scraper execution and self-healing audit events from Supabase."""
    def _fetch():
        supabase = get_supabase_client()
        return (
            supabase.table("scraper_events")
            .select("*, scrapers(name, target_url)")
            .order("created_at", desc=True)
            .limit(limit)
            .execute()
        )
    events = await asyncio.to_thread(_fetch)
    return {
        "total_events": len(events.data),
        "events": events.data,
    }


@app.get("/events/healing", tags=["Events & Audit"], summary="List AI Self-Healing Timeline")
async def list_healing_events(limit: int = 20):
    """Fetch dedicated AI self-healing event timeline with LangGraph execution traces."""
    def _fetch():
        supabase = get_supabase_client()
        return (
            supabase.table("scraper_events")
            .select("*, scrapers(name, target_url)")
            .like("event_type", "healing_%")
            .order("created_at", desc=True)
            .limit(limit)
            .execute()
        )
    events = await asyncio.to_thread(_fetch)
    return {
        "total_healing_events": len(events.data),
        "events": events.data,
    }


def _resolve_unlocode(slug: str) -> Optional[str]:
    """Robust resolver using PortRegistry and DB fuzzy matching."""
    if not slug:
        return None
    from app.ports.registry import port_registry
    scraper = port_registry.get(slug)
    if scraper:
        return scraper.metadata.unlocode
    
    clean = slug.strip().lower()
    unlocode_map = {
        "jnpt": "INNSA", "innsa": "INNSA", "jnpa": "INNSA", "in_jnpa": "INNSA",
        "mundra": "INMUN", "inmun": "INMUN",
        "felixstowe": "GBFXT", "gbfxt": "GBFXT", "portoffelixstowe": "GBFXT", "gb_felixstowe": "GBFXT",
    }
    if clean in unlocode_map:
        return unlocode_map[clean]

    try:
        sb = get_supabase_client()
        p = sb.table("ports").select("unlocode").eq("id", clean).execute()
        if p.data:
            return p.data[0]["unlocode"]
    except Exception:
        pass
    return None


# ==========================================
# PORT VESSEL INTELLIGENCE ENDPOINTS (ASYNC)
# ==========================================
@app.get("/port/{slug}/vessels", tags=["Ports"], summary="Fetch Live Vessel Manifest for Port")
@app.get("/api/ports/{slug}/vessels", tags=["Ports"], summary="Fetch Live Vessel Manifest for Port")
async def get_port_vessels(slug: str):
    """Returns the latest vessel manifest snapshot for the given port slug."""
    unlocode = _resolve_unlocode(slug)
    if not unlocode:
        raise HTTPException(status_code=404, detail=f"Port with slug '{slug}' not found")

    from app.db.client import get_latest_vessel_logs
    return await asyncio.to_thread(get_latest_vessel_logs, unlocode)


# ==========================================
# AI SUMMARY & PDF INTELLIGENCE ENDPOINTS (ASYNC)
# ==========================================
@app.get("/port/{slug}/summary", tags=["AI Intelligence"], summary="Fetch Latest AI Port Situation Report")
async def get_port_summary(slug: str):
    """Returns the latest AI-generated situational summary for a port linked to the newest scraper run."""
    unlocode = _resolve_unlocode(slug)
    if not unlocode:
        raise HTTPException(status_code=404, detail=f"Unknown port slug: '{slug}'")

    def _fetch_summary():
        supabase = get_supabase_client()
        port_res = supabase.table("ports").select("id, name, unlocode").eq("unlocode", unlocode).execute()
        if not port_res.data:
            return None, None, None

        port_id = port_res.data[0]["id"]
        port_name = port_res.data[0]["name"]

        try:
            res = (
                supabase.table("port_summaries")
                .select("*")
                .eq("port_id", port_id)
                .order("generated_at", desc=True)
                .limit(1)
                .execute()
            )
            if res.data:
                return port_name, res.data[0], None
        except Exception as e:
            logger.warning(f"⚠️ Could not fetch from port_summaries table: {e}")

        return port_name, None, None

    port_name, summary_data, err = await asyncio.to_thread(_fetch_summary)
    if port_name is None:
        raise HTTPException(status_code=404, detail=f"Port with UN/LOCODE '{unlocode}' not registered")

    return {
        "port_slug": slug,
        "port_name": port_name,
        "summary": summary_data,
    }


@app.get("/port/{slug}/pdf-intelligence", tags=["PDF Intelligence"], summary="Fetch Latest PDF OCR Vessel Records")
async def get_pdf_intelligence(slug: str):
    """Returns deep vessel records extracted via OCR from official terminal PDF reports."""
    unlocode = _resolve_unlocode(slug)
    if not unlocode:
        raise HTTPException(status_code=404, detail=f"Unknown port slug: '{slug}'")

    def _fetch_ocr():
        supabase = get_supabase_client()
        port_res = supabase.table("ports").select("id, name").eq("unlocode", unlocode).execute()
        if not port_res.data:
            return None, 0, []

        port_id = port_res.data[0]["id"]

        try:
            latest_row = (
                supabase.table("pdf_vessel_logs")
                .select("extracted_at")
                .eq("port_id", port_id)
                .order("extracted_at", desc=True)
                .limit(1)
                .execute()
            )

            if not latest_row.data:
                return None, 0, []

            latest_ts = latest_row.data[0]["extracted_at"]

            records_res = (
                supabase.table("pdf_vessel_logs")
                .select("*")
                .eq("port_id", port_id)
                .eq("extracted_at", latest_ts)
                .order("terminal_name")
                .execute()
            )

            return latest_ts, len(records_res.data or []), records_res.data or []
        except Exception as e:
            logger.warning(f"⚠️ Could not fetch from pdf_vessel_logs table: {e}")
            return None, 0, []

    latest_ts, count, records = await asyncio.to_thread(_fetch_ocr)
    return {
        "port_slug": slug,
        "extracted_at": latest_ts,
        "total": count,
        "records": records,
    }


# Static assets mounting for React + Vite Frontend
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
dist_dir = os.path.join(BASE_DIR, "frontend", "dist")
dist_assets = os.path.join(dist_dir, "assets")

if os.path.exists(dist_assets):
    app.mount("/assets", StaticFiles(directory=dist_assets), name="assets")

if os.path.exists(dist_dir):
    app.mount("/", StaticFiles(directory=dist_dir, html=True), name="frontend_dist")
else:
    app.mount("/", StaticFiles(directory=os.path.join(BASE_DIR, "frontend"), html=True), name="frontend_raw")
