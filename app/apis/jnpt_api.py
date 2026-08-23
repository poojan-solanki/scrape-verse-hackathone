from fastapi import APIRouter
from app.db.client import get_latest_vessel_logs

router = APIRouter()


@router.get("/jnpt")
@router.get("/jnpa")
def get_jnpt_vessels():
    """Fetch the latest JNPA (Nhava Sheva) berthing snapshot from Supabase."""
    return get_latest_vessel_logs("INNSA")
