from typing import Any, Dict, List
from app.ports.base import BasePortScraper, PortMetadata, VesselRecord, parse_date_to_iso


class FelixstoweScraper(BasePortScraper):
    """Port: Port of Felixstowe (Hutchison Ports UK / GBFXT) Scraper Module."""

    @property
    def metadata(self) -> PortMetadata:
        return PortMetadata(
            port_id="gb_felixstowe",
            name="Port of Felixstowe",
            full_name="Port of Felixstowe (Hutchison Ports UK)",
            unlocode="GBFXT",
            collector_id="c_mt60nosg1yqb8hzqks",
            country="United Kingdom",
            state="Suffolk",
            latitude=51.9566,
            longitude=1.3060,
            website_url="https://www.portoffelixstowe.co.uk",
            target_url="https://ocean.portoffelixstowe.co.uk/shipping",
            schedule_cron="*/30 * * * *",
            bdata_create_prompt=(
                "Extract Port of Felixstowe vessel shipping schedules including Trinity Terminal, "
                "Berths 8&9, and Dooley Ro-Ro Terminal with ETA, ETD, and berth allocations."
            ),
        )

    def parse_raw_data(self, raw_items: List[Dict[str, Any]]) -> List[VesselRecord]:
        records: List[VesselRecord] = []
        for item in raw_items:
            # Check if nested under vessel_schedules array or flat object
            vessel_name = (
                item.get("vessel_name")
                or item.get("vessel")
                or item.get("ship_name")
                or ""
            ).strip()
            if not vessel_name:
                continue

            raw_berthed = (
                item.get("berthed_at")
                or item.get("arrival_datetime")
                or item.get("berthed_timestamp")
                or item.get("ata")
            )
            raw_completion = (
                item.get("expected_completion_at")
                or item.get("estimated_departure_datetime")
                or item.get("expected_completion_timestamp")
                or item.get("etc")
                or item.get("etd")
            )

            terminal_str = (item.get("terminal_name") or item.get("terminal") or "Trinity Terminal").strip()
            berth_str = (item.get("berth_number") or item.get("berth_no") or item.get("berth") or terminal_str).strip()
            commodity_str = (item.get("commodity") or ("Ro-Ro (Trailers)" if "roro" in terminal_str.lower() else "Containers (TEU)")).strip()

            records.append(
                VesselRecord(
                    vessel_name=vessel_name.upper(),
                    terminal_name=terminal_str or None,
                    berth_number=berth_str or None,
                    via_number=(item.get("via_number") or item.get("voyage_no") or item.get("lloyds_no") or "").strip() or None,
                    commodity=commodity_str or None,
                    berthed_at=parse_date_to_iso(raw_berthed),
                    expected_completion_at=parse_date_to_iso(raw_completion),
                    terminal_report_pdf_url=(item.get("terminal_report_pdf_url") or "https://www.portoffelixstowe.co.uk/company-information/marine/").strip() or None,
                    raw_payload=item,
                )
            )
        return records
