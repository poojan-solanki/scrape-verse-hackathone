from fastapi import APIRouter
from app.db.client import get_supabase_client

router = APIRouter()
supabase = get_supabase_client()


@router.get("/port-list")
def get_port_list():
    """Fetch all ports and their metadata/health status from Supabase."""
    res = supabase.table("ports").select("*, scrapers(*)").order("name").execute()
    return {
        "total_ports": len(res.data),
        "ports": res.data,
    }
