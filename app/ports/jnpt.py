from typing import Any, Dict, List
from app.ports.base import BasePortScraper, PortMetadata, VesselRecord, parse_date_to_iso


class JNPTScraper(BasePortScraper):
    """Port 1: JNPA (Jawaharlal Nehru Port Authority / Nhava Sheva) Scraper Module."""

    @property
    def metadata(self) -> PortMetadata:
        return PortMetadata(
            port_id="in_jnpa",
            name="JNPA (Nhava Sheva)",
            full_name="Jawaharlal Nehru Port Authority (JNPA)",
            unlocode="INNSA",
            collector_id="c_mszumjcx12i1k1ydb8",
            country="India",
            state="Maharashtra",
            latitude=18.9499,
            longitude=72.9511,
            website_url="https://www.jnport.gov.in",
            target_url="https://www.jnport.gov.in/page/daily-berthing-report/M2VlS0pwUXZ3akhSV0E0RDFUVlhxQT09",
            schedule_cron="*/30 * * * *",
            bdata_create_prompt="Extract the daily berthing table into structured JSON with all terminal rows.",
        )

    def parse_raw_data(self, raw_items: List[Dict[str, Any]]) -> List[VesselRecord]:
        records: List[VesselRecord] = []
        for item in raw_items:
            vessel_name = (item.get("vessel_name") or item.get("vessel") or item.get("ship_name") or "").strip()
            if not vessel_name:
                continue

            raw_berthed = item.get("berthed_timestamp") or item.get("berthed_on") or item.get("berthed_at")
            raw_completion = item.get("expected_completion_timestamp") or item.get("expected_completion")

            records.append(
                VesselRecord(
                    vessel_name=vessel_name,
                    terminal_name=(item.get("terminal_name") or item.get("terminal") or "").strip() or None,
                    berth_number=(item.get("berth_number") or item.get("berth_no") or item.get("berth") or "").strip() or None,
                    via_number=(item.get("via_number") or item.get("via_no") or "").strip() or None,
                    commodity=(item.get("commodity") or item.get("cargo") or "").strip() or None,
                    berthed_at=parse_date_to_iso(raw_berthed),
                    expected_completion_at=parse_date_to_iso(raw_completion),
                    terminal_report_pdf_url=(item.get("terminal_report_pdf_url") or "").strip() or None,
                    raw_payload=item,
                )
            )
        return records
