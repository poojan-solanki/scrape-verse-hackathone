import logging
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.apis.routes import routes
from app.apis.port_list_api import router as port_list_router
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


# ==========================================
# DASHBOARD ROUTES (Visible in /docs)
# ==========================================
@app.get("/", response_class=FileResponse, tags=["Dashboard"], summary="Open 3D Maritime Dashboard")
@app.get("/dashboard", response_class=FileResponse, tags=["Dashboard"], summary="Open 3D Maritime Dashboard")
def serve_dashboard():
    """Serves the 3D Interactive WebGL Maritime Operations Dashboard."""
    index_path = os.path.join(os.getcwd(), "frontend", "index.html")
    return FileResponse(index_path)


# ==========================================
# CORE API ENDPOINTS
# ==========================================
@app.get("/scheduler/jobs", tags=["Scheduler"], summary="List Background Jobs & Worker Status")
def list_jobs():
    """List all active background scraper jobs, next run times, and live worker load."""
    return {
        "workers": get_active_workers_status(),
        "active_jobs": get_scheduled_jobs(),
    }


@app.post("/scrapers/{port_id}/run", tags=["Scrapers"], summary="Trigger On-Demand Scrape")
def trigger_scraper_run(port_id: str):
    """Trigger an on-demand live scrape execution for a specific port."""
    try:
        result = scraper_runner.run_port(port_id)
        return {"status": "success", "result": result}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/events", tags=["Events & Audit"], summary="List Scraper Audit Events")
def list_scraper_events(limit: int = 50):
    """Fetch the latest scraper execution and self-healing audit events from Supabase."""
    supabase = get_supabase_client()
    events = (
        supabase.table("scraper_events")
        .select("*, scrapers(name, target_url)")
        .order("created_at", desc=True)
        .limit(limit)
        .execute()
    )
    return {
        "total_events": len(events.data),
        "events": events.data,
    }


@app.get("/events/healing", tags=["Events & Audit"], summary="List AI Self-Healing Timeline")
def list_healing_events(limit: int = 20):
    """Fetch dedicated AI self-healing event timeline with LangGraph execution traces."""
    supabase = get_supabase_client()
    events = (
        supabase.table("scraper_events")
        .select("*, scrapers(name, target_url)")
        .like("event_type", "healing_%")
        .order("created_at", desc=True)
        .limit(limit)
        .execute()
    )
    return {
        "total_healing_events": len(events.data),
        "events": events.data,
    }


# Static assets (CSS/JS) mounted at /static
app.mount("/static", StaticFiles(directory="frontend"), name="static")
# Fallback mount for direct root asset requests (e.g. /style.css, /app.js)
app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
