from typing import Any, Dict, List, Optional
from dateutil import parser as date_parser
from pydantic import BaseModel, Field, field_validator, model_validator


class StrictVesselRecord(BaseModel):
    """Strict vessel record standard across all Indian ports."""
    vessel_name: str = Field(..., min_length=2)
    terminal_name: Optional[str] = None
    berth_number: Optional[str] = None
    via_number: Optional[str] = None
    commodity: Optional[str] = None
    berthed_at: Optional[str] = None
    expected_completion_at: Optional[str] = None
    terminal_report_pdf_url: Optional[str] = None
    raw_payload: Optional[Dict[str, Any]] = Field(default_factory=dict)

    @model_validator(mode="before")
    @classmethod
    def normalize_keys(cls, data: Any) -> Any:
        """Pydantic pre-validator: Maps multi-source HTML key synonyms automatically."""
        if not isinstance(data, dict):
            return data
        return {
            "vessel_name": data.get("vessel_name") or data.get("vessel") or data.get("vessels_name") or data.get("ship_name") or "",
            "terminal_name": data.get("terminal_name") or data.get("terminal") or data.get("sbu_name"),
            "berth_number": data.get("berth_number") or data.get("berth_no") or data.get("berth"),
            "via_number": data.get("via_number") or data.get("operation_type") or data.get("imp_or_exp"),
            "commodity": data.get("commodity") or data.get("cargo"),
            "berthed_at": data.get("berthed_timestamp") or data.get("berthed_at") or data.get("ata"),
            "expected_completion_at": data.get("expected_completion_timestamp") or data.get("etc") or data.get("expected_completion") or data.get("eta"),
            "terminal_report_pdf_url": data.get("terminal_report_pdf_url"),
            "raw_payload": data,
        }

    @field_validator("vessel_name")
    @classmethod
    def validate_vessel_name(cls, v: str) -> str:
        cleaned = str(v).strip()
        if cleaned.upper() in {"NULL", "N/A", "NONE", "VACANT", "-", "UNKNOWN", "UNDEFINED"} or len(cleaned) < 2:
            raise ValueError(f"Invalid vessel placeholder: '{v}'")
        return cleaned

    @field_validator("berthed_at", "expected_completion_at")
    @classmethod
    def validate_dates(cls, v: Optional[str]) -> Optional[str]:
        if not v or str(v).strip() in ("", "null", "None", "-"):
            return None
        try:
            from datetime import timezone
            dt = date_parser.parse(str(v).strip(), dayfirst=True)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            else:
                dt = dt.astimezone(timezone.utc)
            return dt.isoformat().replace("+00:00", "Z")
        except (ValueError, TypeError):
            return None


class ValidationReport(BaseModel):
    """Validation report with deterministic health scoring."""
    is_valid: bool
    total_records: int
    health_score: float
    valid_records: List[StrictVesselRecord]
    errors: List[str]
    missing_fields: List[str]
    null_rate: float


def validate_raw_records(raw_items: List[Dict[str, Any]]) -> ValidationReport:
    """Validates raw items using Pydantic, computing health scores and error traces."""
    if not raw_items:
        return ValidationReport(
            is_valid=False, total_records=0, health_score=0.0,
            valid_records=[], errors=["Zero records received"], missing_fields=["all"], null_rate=1.0
        )

    valid_records, errors = [], []
    critical_fields = ["vessel_name", "terminal_name", "berth_number"]

    for idx, item in enumerate(raw_items):
        try:
            valid_records.append(StrictVesselRecord.model_validate(item))
        except Exception as e:
            errors.append(f"Row {idx}: {str(e)}")

    total_checks = len(raw_items) * len(critical_fields)
    missing = [f for r in valid_records for f in critical_fields if not getattr(r, f, None)]
    missing_count = len(missing) + (len(errors) * len(critical_fields))
    null_rate = round(missing_count / max(1, total_checks), 3)
    health_score = max(0.0, round((1.0 - null_rate) * 100.0, 1))

    return ValidationReport(
        is_valid=(health_score >= 80.0 and len(valid_records) > 0),
        total_records=len(raw_items),
        health_score=health_score,
        valid_records=valid_records,
        errors=errors,
        missing_fields=list(set(missing)),
        null_rate=null_rate,
    )
