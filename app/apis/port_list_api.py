from fastapi import APIRouter
from app.db.client import get_supabase_client

router = APIRouter()


@router.get("/port-list")
@router.get("/api/ports")
@router.get("/ports")
def get_port_list():
    """Fetch all ports and their metadata/health status from Supabase."""
    try:
        supabase = get_supabase_client()
        res = supabase.table("ports").select("*, scrapers(*)").order("name").execute()
        return {
            "total_ports": len(res.data),
            "ports": res.data,
        }
    except Exception as e:
        return {
            "total_ports": 0,
            "ports": [],
            "error": str(e)
        }
