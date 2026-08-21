from fastapi import APIRouter
from app.db.client import get_latest_vessel_logs

router = APIRouter()


@router.get("/jnpt")
def get_jnpt_vessels():
    """Fetch the latest JNPT berthing snapshot from Supabase."""
    return get_latest_vessel_logs("INNSA")
