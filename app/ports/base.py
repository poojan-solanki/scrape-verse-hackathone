from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional, Tuple
from dateutil import parser as date_parser
from pydantic import BaseModel, Field


from datetime import timezone

def parse_date_to_iso(date_str: Optional[str]) -> Optional[str]:
    """Robust ISO-8601 date parsing leveraging python-dateutil with day-first support."""
    if not date_str or str(date_str).strip() in ("", "null", "None", "-"):
        return None
    try:
        dt = date_parser.parse(str(date_str).strip(), dayfirst=True)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        else:
            dt = dt.astimezone(timezone.utc)
        return dt.isoformat().replace("+00:00", "Z")
    except (ValueError, TypeError):
        return None


class VesselRecord(BaseModel):
    """Normalized vessel berthing record standard across all Indian ports."""
    vessel_name: str
    terminal_name: Optional[str] = None
    berth_number: Optional[str] = None
    via_number: Optional[str] = None
    commodity: Optional[str] = None
    berthed_at: Optional[str] = None
    expected_completion_at: Optional[str] = None
    terminal_report_pdf_url: Optional[str] = None
    raw_payload: Optional[Dict[str, Any]] = Field(default_factory=dict)


class PortMetadata(BaseModel):
    """Metadata definition for a port."""
    port_id: str
    name: str
    full_name: str
    unlocode: str
    collector_id: Optional[str] = None
    country: str = "India"
    state: str
    latitude: float
    longitude: float
    website_url: str
    target_url: str
    schedule_cron: str = "*/30 * * * *"
    bdata_create_prompt: str


class BasePortScraper(ABC):
    """Abstract Base Class for all individual Port Scrapers."""

    @property
    @abstractmethod
    def metadata(self) -> PortMetadata:
        pass

    @abstractmethod
    def parse_raw_data(self, raw_items: List[Dict[str, Any]]) -> List[VesselRecord]:
        pass

    def validate_health(self, records: List[VesselRecord]) -> Tuple[float, List[str]]:
        """Deterministic Health Score Validator (0.0 to 100.0)."""
        if not records:
            return 0.0, ["ALL_RECORDS_EMPTY"]

        critical_fields = ["vessel_name", "terminal_name", "berth_number"]
        total_checks = len(records) * len(critical_fields)
        missing = [f for r in records for f in critical_fields if not getattr(r, f, None)]
        health_score = max(0.0, round((1.0 - (len(missing) / total_checks)) * 100.0, 1))
        return health_score, list(set(missing))
