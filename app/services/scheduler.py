import logging
import threading
import time
from datetime import datetime, timezone
from typing import Any, Dict, List
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor
from apscheduler.triggers.cron import CronTrigger
from apscheduler.triggers.interval import IntervalTrigger

from app.ports.registry import port_registry
from app.services.runner import scraper_runner

logger = logging.getLogger("portpulse.scheduler")

MAX_WORKERS = 10
executors = {
    "default": ThreadPoolExecutor(max_workers=MAX_WORKERS)
}
job_defaults = {
    "coalesce": True,
    "max_instances": 1,
    "misfire_grace_time": 300,
}

scheduler = BackgroundScheduler(executors=executors, job_defaults=job_defaults)

_worker_lock = threading.Lock()
_active_workers: Dict[str, float] = {}


def get_active_workers_status() -> Dict[str, Any]:
    """Returns current active worker counts and running port list."""
    with _worker_lock:
        return {
            "active_worker_count": len(_active_workers),
            "max_worker_capacity": MAX_WORKERS,
            "running_ports": list(_active_workers.keys()),
        }


def execute_port_scrape_job(port_id: str):
    """Worker thread job: Tracks execution duration, active pool load, and logs completion."""
    with _worker_lock:
        _active_workers[port_id] = time.time()
        active_count = len(_active_workers)

    scraper = port_registry.get(port_id)
    port_name = scraper.metadata.name if scraper else port_id
    t_start = time.time()

    logger.info(f"⚡ [Worker: {port_id}] ⏳ STARTED scraping '{port_name}' | (Active workers: {active_count}/{MAX_WORKERS})")

    try:
        res = scraper_runner.run_port(port_id)
        duration = round(time.time() - t_start, 2)
        records = res.get("records_extracted", 0)
        health = res.get("health_score", 100.0)

        with _worker_lock:
            _active_workers.pop(port_id, None)
            remaining = len(_active_workers)

        logger.info(
            f"✅ [Worker: {port_id}] 🏁 FINISHED '{port_name}' in {duration}s | "
            f"Extracted: {records} vessels | Health: {health}% | (Active workers: {remaining}/{MAX_WORKERS})"
        )
    except Exception as e:
        duration = round(time.time() - t_start, 2)
        with _worker_lock:
            _active_workers.pop(port_id, None)
            remaining = len(_active_workers)

        logger.error(
            f"❌ [Worker: {port_id}] 💥 FAILED '{port_name}' after {duration}s: {e} | "
            f"(Active workers: {remaining}/{MAX_WORKERS})"
        )


def initialize_scheduler(default_interval_minutes: int = 30, run_immediately: bool = False):
    """Auto-discovers all registered ports in port_registry and registers scheduled jobs."""
    if scheduler.running:
        return

    now = datetime.now(timezone.utc)
    all_scrapers = port_registry.list_all()

    for scraper in all_scrapers:
        meta = scraper.metadata
        job_id = f"job_{meta.port_id}"

        # Standard 30-minute interval trigger
        trigger = IntervalTrigger(minutes=default_interval_minutes)

        job = scheduler.add_job(
            func=execute_port_scrape_job,
            args=[meta.port_id],
            trigger=trigger,
            next_run_time=now if run_immediately else None,
            id=job_id,
            name=f"Scrape {meta.name}",
            replace_existing=True,
        )
        next_run_str = job.next_run_time.strftime("%Y-%m-%d %H:%M:%S UTC") if job.next_run_time else "Calculated on start"
        logger.info(f"📅 [Scheduler] Registered job for {meta.name} (Next Run: {next_run_str})")

    scheduler.start()
    logger.info(f"🚀 [Scheduler] PortPulse Parallel Scheduler started with {MAX_WORKERS} worker pool.")


def get_scheduled_jobs() -> List[Dict[str, Any]]:
    """Returns a list of all active scheduled jobs and their next run times."""
    jobs = []
    for job in scheduler.get_jobs():
        jobs.append({
            "job_id": job.id,
            "name": job.name,
            "next_run_time": job.next_run_time.strftime("%Y-%m-%d %H:%M:%S UTC") if job.next_run_time else None,
            "trigger": str(job.trigger),
        })
    return jobs


def shutdown_scheduler():
    """Stops the scheduler gracefully."""
    if scheduler.running:
        scheduler.shutdown(wait=False)
        logger.info("🛑 [Scheduler] PortPulse Background Scheduler stopped.")
