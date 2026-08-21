from fastapi import APIRouter
from app.db.client import get_latest_vessel_logs

router = APIRouter()


@router.get("/mundra")
def get_mundra_vessels():
    """Fetch the latest Mundra berthing snapshot with category breakdowns."""
    data = get_latest_vessel_logs("INMUN")
    vessels = data.get("vessels", [])

    berthed = [v for v in vessels if v.get("berth_number") not in ["ANCHORAGE", "EXPECTED", "SAILED"]]
    anchorage = [v for v in vessels if v.get("berth_number") == "ANCHORAGE"]
    expected = [v for v in vessels if v.get("berth_number") == "EXPECTED"]

    data["summary"] = {
        "at_berth": len(berthed),
        "at_anchorage": len(anchorage),
        "expected_inbound": len(expected),
    }
    return data
