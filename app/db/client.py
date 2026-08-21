import os
from datetime import datetime, timedelta
from typing import Any, Dict, Optional
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")


def get_supabase_client() -> Client:
    """Returns an authenticated Supabase client."""
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in .env")
    return create_client(SUPABASE_URL, SUPABASE_KEY)


def get_latest_vessel_logs(unlocode: str) -> Dict[str, Any]:
    """
    Fetches all vessel records from the most recent scrape batch for a given port.
    Preserves historical logs while returning only the active latest snapshot.
    """
    supabase = get_supabase_client()
    port = supabase.table("ports").select("id, name, unlocode").eq("unlocode", unlocode).single().execute()
    if not port.data:
        return {"port": None, "unlocode": unlocode, "last_scraped_at": None, "total_vessels": 0, "vessels": []}

    port_id = port.data["id"]

    # 1. Find the timestamp of the latest scrape run
    latest_run = (
        supabase.table("vessel_logs")
        .select("scraped_at")
        .eq("port_id", port_id)
        .order("scraped_at", desc=True)
        .limit(1)
        .execute()
    )

    if not latest_run.data:
        return {
            "port": port.data["name"],
            "unlocode": unlocode,
            "last_scraped_at": None,
            "total_vessels": 0,
            "vessels": [],
        }

    latest_str = latest_run.data[0]["scraped_at"]

    # 2. Query all vessels belonging to this latest scrape batch (1-minute window)
    try:
        clean_ts = latest_str.replace("Z", "+00:00")
        dt = datetime.fromisoformat(clean_ts)
        batch_start = (dt - timedelta(minutes=1)).isoformat()

        logs = (
            supabase.table("vessel_logs")
            .select("*")
            .eq("port_id", port_id)
            .gte("scraped_at", batch_start)
            .order("berth_number")
            .execute()
        )
    except Exception:
        # Fallback to direct equality
        logs = (
            supabase.table("vessel_logs")
            .select("*")
            .eq("port_id", port_id)
            .eq("scraped_at", latest_str)
            .order("berth_number")
            .execute()
        )

    return {
        "port": port.data["name"],
        "unlocode": unlocode,
        "last_scraped_at": latest_str,
        "total_vessels": len(logs.data),
        "vessels": logs.data,
    }
