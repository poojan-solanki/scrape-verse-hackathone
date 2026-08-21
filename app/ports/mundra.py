from typing import Any, Dict, List
from app.ports.base import BasePortScraper, PortMetadata, VesselRecord, parse_date_to_iso


class MundraScraper(BasePortScraper):
    """Port 2: Mundra Port (Adani Ports / APSEZ) Scraper Module."""

    @property
    def metadata(self) -> PortMetadata:
        return PortMetadata(
            port_id="in_mundra",
            name="Mundra Port",
            full_name="Adani Ports and Special Economic Zone (APSEZ)",
            unlocode="INMUN",
            collector_id="c_mt03ofjt15cu3ojzx6",
            country="India",
            state="Gujarat",
            latitude=22.7441,
            longitude=69.7049,
            website_url="https://www.adaniports.com/ports-and-terminals/mundra-port",
            target_url="https://www.adaniports.com/ports-and-terminals/mundra-port/vesselschedule",
            schedule_cron="*/30 * * * *",
            bdata_create_prompt="Extract all vessel schedule tables (Berth, Anchorage, Expected, Sailed).",
        )

    def parse_raw_data(self, raw_items: List[Dict[str, Any]]) -> List[VesselRecord]:
        records: List[VesselRecord] = []
        for item in raw_items:
            vessel_name = (item.get("vessel_name") or item.get("vessels_name") or "").strip()
            if not vessel_name:
                continue

            raw_completion = (
                item.get("expected_completion_timestamp")
                or item.get("etc")
                or item.get("expected_time_of_completion")
                or item.get("eta")
            )

            records.append(
                VesselRecord(
                    vessel_name=vessel_name,
                    terminal_name=(item.get("terminal_name") or item.get("sbu_name") or "APSEZ Mundra").strip() or None,
                    berth_number=(item.get("berth_number") or item.get("berth_no") or "").strip() or None,
                    via_number=(item.get("via_number") or item.get("operation_type") or "").strip() or None,
                    commodity=(item.get("commodity") or item.get("cargo") or "").strip() or None,
                    berthed_at=parse_date_to_iso(item.get("berthed_at") or item.get("ata")),
                    expected_completion_at=parse_date_to_iso(raw_completion),
                    terminal_report_pdf_url="https://www.adaniports.com/-/media/Project/Ports/PortsAndTerminals/Mundra-Documents/Berthing-Report/Latest_Berthing-Report_Mundra.pdf",
                    raw_payload=item,
                )
            )
        return records
