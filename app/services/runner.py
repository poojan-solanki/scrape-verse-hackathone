import json
import logging
import subprocess
import threading
from datetime import datetime, timezone
from typing import Any, Dict, List
from app.db.client import get_supabase_client
from app.health.contracts import validate_raw_records
from app.ports.base import BasePortScraper
from app.ports.registry import port_registry
from app.agent.healer_graph import run_self_healing_agent

logger = logging.getLogger("portpulse.runner")


class ScraperRunner:
    """Orchestrates scraper execution, validation, autonomous self-healing, and DB persistence."""

    def __init__(self):
        self._supabase = None

    @property
    def supabase(self):
        if self._supabase is None:
            self._supabase = get_supabase_client()
        return self._supabase

    def run_port(self, port_id: str) -> Dict[str, Any]:
        """Triggers the Bright Data scraper CLI, validates data, and auto-heals if broken."""
        scraper: BasePortScraper = port_registry.get(port_id)
        if not scraper:
            logger.error(f"❌ Port scraper '{port_id}' not found in registry")
            raise ValueError(f"Port scraper '{port_id}' not found in registry")

        meta = scraper.metadata
        collector_id = meta.collector_id or f"c_{port_id}_berthing"
        logger.info(f"🚀 [Runner] Launching Bright Data CLI for {meta.name} ({collector_id})...")

        cmd = ["bdata", "scraper", "run", collector_id, meta.target_url, "--json"]

        try:
            proc = subprocess.run(cmd, capture_output=True, text=True, shell=True, timeout=180)
            if proc.returncode != 0:
                logger.warning(f"⚠️ [Runner] CLI exited with code {proc.returncode}. Triggering Self-Healing Agent...")
                return run_self_healing_agent(port_id, [], [f"CLI Error: {proc.stderr}"])

            raw_data = json.loads(proc.stdout) if proc.stdout else []
            logger.info(f"📥 [Runner] Received {len(raw_data)} raw records from Bright Data CLI")
            return self.ingest_records(port_id, raw_data)
        except Exception as e:
            logger.warning(f"⚠️ [Runner] Execution error ({e}). Launching Self-Healing Agent...")
            return run_self_healing_agent(port_id, [], [str(e)])

    def ingest_records(self, port_id: str, raw_data: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Parses raw items with strict Pydantic validation; triggers AI self-healing on failure."""
        scraper: BasePortScraper = port_registry.get(port_id)
        if not scraper:
            raise ValueError(f"Port scraper '{port_id}' not found in registry")

        metadata = scraper.metadata
        batch_timestamp = datetime.now(timezone.utc).isoformat()
        logger.info(f"🔄 Ingesting {len(raw_data)} raw items for {metadata.name}...")

        # 1. Strict Pydantic Schema Validation
        report = validate_raw_records(raw_data)
        logger.info(
            f"📊 Health Score: {report.health_score}% | Valid Records: {len(report.valid_records)} | Null Rate: {report.null_rate}"
        )

        # 2. AUTONOMOUS HEALING TRIGGER
        if not report.is_valid:
            logger.warning(
                f"🚨 [Runner] Data Quality Breach for {metadata.name} (Health: {report.health_score}%). "
                f"Triggering LangGraph Autonomous Self-Healing Agent..."
            )
            healing_result = run_self_healing_agent(port_id, raw_data, report.errors)
            return {
                "port_name": metadata.name,
                "status": "SELF_HEALING_TRIGGERED",
                "healing_result": healing_result,
            }

        # 3. Lookup Port ID
        port_res = self.supabase.table("ports").select("id").eq("unlocode", metadata.unlocode).single().execute()
        if not port_res.data:
            raise ValueError(f"Port with UN/LOCODE '{metadata.unlocode}' not found in database")
        db_port_id = port_res.data["id"]

        # 4. Upsert Scraper Record in Supabase
        scraper_payload = {
            "port_id": db_port_id,
            "collector_id": metadata.collector_id or f"c_{port_id}_berthing",
            "name": f"{metadata.name} Berthing Scraper",
            "target_url": metadata.target_url,
            "data_category": "vessel_berthing",
            "schedule_cron": metadata.schedule_cron,
            "health_status": "healthy",
            "health_score": report.health_score,
            "last_run_at": batch_timestamp,
            "last_success_at": batch_timestamp,
        }

        existing = self.supabase.table("scrapers").select("id").eq("port_id", db_port_id).execute()
        db_scraper_id = (
            self.supabase.table("scrapers").update(scraper_payload).eq("id", existing.data[0]["id"]).execute().data[0]["id"]
            if existing.data
            else self.supabase.table("scrapers").insert(scraper_payload).execute().data[0]["id"]
        )

        # 5. Insert Validated Vessel Logs
        batch = [
            {**r.model_dump(), "port_id": db_port_id, "scraper_id": db_scraper_id, "scraped_at": batch_timestamp}
            for r in report.valid_records
        ]
        self.supabase.table("vessel_logs").insert(batch).execute()
        logger.info(f"💾 Persisted {len(report.valid_records)} strict vessel records into Supabase")

        # 6. Log Success Event
        self.supabase.table("scraper_events").insert({
            "scraper_id": db_scraper_id,
            "event_type": "run_success",
            "health_score_before": report.health_score,
            "records_received": len(report.valid_records),
            "null_fields": report.missing_fields,
            "details": {"port": metadata.name, "records_count": len(report.valid_records)},
            "created_at": batch_timestamp,
        }).execute()

        # 7 & 8. Launch PDF OCR + AI Summary in background daemon thread
        # (These can take 30-90s; we must not block the HTTP response)
        vessel_dicts = [r.model_dump() for r in report.valid_records]

        def _background_intelligence(port_id_: str, scraper_id_: str, port_db_id_: str,
                                     port_name_: str, vessels_: list) -> None:
            """Runs PDF OCR extraction and AI summary generation in background thread."""
            pdf_extracted_records = []
            try:
                from app.ocr.pdf_agent import run_pdf_ocr_agent
                pdf_res = run_pdf_ocr_agent(
                    port_id=port_id_,
                    scraper_id=scraper_id_,
                    port_db_id=port_db_id_,
                )
                pdf_extracted_records = pdf_res.get("extracted_records", [])
            except Exception as pdf_err:
                logger.warning(f"⚠️ [Runner/BG] PDF OCR failed: {pdf_err}")

            try:
                from app.intelligence.summarizer import generate_port_summary
                summary = generate_port_summary(
                    port_name=port_name_,
                    vessels=vessels_,
                    pdf_records=pdf_extracted_records,
                )
                # Use fresh Supabase client in background thread
                bg_supabase = get_supabase_client()
                bg_supabase.table("port_summaries").insert({
                    "port_id": port_db_id_,
                    "scraper_id": scraper_id_,
                    "summary_text": summary["summary_text"],
                    "vessel_count": summary["vessel_count"],
                    "pdf_record_count": summary["pdf_record_count"],
                    "generated_at": summary["generated_at"],
                }).execute()
                logger.info(f"📋 [Runner/BG] AI summary persisted for {port_name_}")
            except Exception as sum_err:
                logger.warning(f"⚠️ [Runner/BG] AI summary failed: {sum_err}")

        bg_thread = threading.Thread(
            target=_background_intelligence,
            args=(port_id, db_scraper_id, db_port_id, metadata.name, vessel_dicts),
            daemon=True,
            name=f"intelligence-{port_id}",
        )
        bg_thread.start()
        logger.info(f"🧵 [Runner] Intelligence pipeline started in background thread (PDF OCR + AI Summary)")

        return {
            "port_name": metadata.name,
            "records_extracted": len(report.valid_records),
            "health_score": report.health_score,
            "health_status": "healthy",
            "sample_vessels": [r.vessel_name for r in report.valid_records[:5]],
            "ai_summary": "Generating in background...",
        }

    # Backward-compatible alias
    run_scraper = ingest_records


# Singleton instance
scraper_runner = ScraperRunner()
