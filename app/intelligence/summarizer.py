import json
import logging
import os
from collections import Counter
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from openai import OpenAI

logger = logging.getLogger("portpulse.intelligence.summarizer")


def generate_port_summary(
    port_name: str,
    vessels: List[Dict[str, Any]],
    pdf_records: Optional[List[Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Generates an AI-powered port situational intelligence summary using OpenAI GPT-4o."""
    pdf_recs = pdf_records or []
    now_utc = datetime.now(timezone.utc)
    time_str = now_utc.strftime("%Y-%m-%d %H:%M UTC")

    # Aggregate key statistics
    total_count = len(vessels)
    berth_active = [
        v for v in vessels
        if v.get("berth_number") and str(v.get("berth_number", "")).upper() not in ("ANCHORAGE", "EXPECTED", "SAILED")
    ]
    anchorage = [
        v for v in vessels
        if str(v.get("berth_number", "")).upper() == "ANCHORAGE"
    ]
    expected = [
        v for v in vessels
        if str(v.get("berth_number", "")).upper() == "EXPECTED"
    ]

    commodities = [v.get("commodity") for v in vessels if v.get("commodity")]
    comm_counts = dict(Counter(commodities).most_common(4))

    terminals = list(set([v.get("terminal_name") for v in vessels if v.get("terminal_name")]))

    # Fallback template if OpenAI is not available
    fallback_summary = (
        f"📊 **OPERATIONAL STATUS**:\n"
        f"{port_name} is operating with {total_count} total tracked vessels as of {time_str}. "
        f"{len(berth_active)} vessels are currently berthed across {len(terminals)} active terminals, "
        f"with {len(anchorage)} vessels holding at anchorage and {len(expected)} inbound expected.\n\n"
        f"🚢 **PRIMARY COMMODITIES & TRAFFIC**:\n"
        f"Dominant cargo types: {', '.join([f'{k} ({v})' for k, v in comm_counts.items()]) if comm_counts else 'Containerized & General Cargo'}. "
        f"Active terminals include {', '.join(terminals[:3]) if terminals else 'Main Port Terminals'}.\n\n"
        f"⚠️ **CONGESTION & BERTHING ADVISORY**:\n"
        f"Anchorage queue is currently at {len(anchorage)} vessels. "
        f"Estimated average port turnaround is nominal with continuous berthing cycles."
    )

    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key:
        logger.info("ℹ️ OPENAI_API_KEY not configured. Using deterministic high-fidelity port summary.")
        return {
            "summary_text": fallback_summary,
            "vessel_count": total_count,
            "pdf_record_count": len(pdf_recs),
            "generated_at": now_utc.isoformat(),
        }

    try:
        client = OpenAI(api_key=api_key)

        system_prompt = (
            "You are PortPulse AI, an elite maritime intelligence officer. "
            "Given real-time vessel telemetry and OCR terminal data, produce a crisp, executive situational summary. "
            "Structure the response cleanly with these exact markdown sections:\n"
            "1. 🚢 **OPERATIONAL STATUS** (2-3 sentences on overall traffic volume and terminal load)\n"
            "2. ⚓ **KEY VESSEL MOVEMENTS** (3-4 bullet points highlighting high-volume vessels, LOA size, or berths)\n"
            "3. ⚠️ **CONGESTION & BERTHING ADVISORY** (2 bullets analyzing anchorage wait times, turnaround risk, or delays)\n\n"
            "Keep your tone authoritative, concise, and operational. Never invent vessel names."
        )

        sample_vessels = [
            {
                "name": v.get("vessel_name"),
                "berth": v.get("berth_number"),
                "terminal": v.get("terminal_name"),
                "commodity": v.get("commodity"),
                "etc": v.get("expected_completion_at"),
            }
            for v in vessels[:25]
        ]

        sample_pdf = [
            {
                "name": p.get("vessel_name"),
                "terminal": p.get("terminal_name"),
                "loa": p.get("loa"),
                "imp_bal": p.get("imp_bal"),
                "exp_bal": p.get("exp_bal"),
                "draft": p.get("max_draft"),
            }
            for p in pdf_recs[:15]
        ]

        user_content = (
            f"Port: {port_name}\n"
            f"Timestamp: {time_str}\n"
            f"Total Vessels Tracked: {total_count} (Active Berth: {len(berth_active)}, Anchorage Queue: {len(anchorage)}, Expected: {len(expected)})\n"
            f"Commodity Breakdown: {json.dumps(comm_counts)}\n"
            f"Active Terminals: {json.dumps(terminals)}\n\n"
            f"Live Telemetry Vessels (Sample):\n{json.dumps(sample_vessels, indent=2)}\n\n"
            f"Terminal PDF OCR Manifests (Sample):\n{json.dumps(sample_pdf, indent=2)}"
        )

        model_name = os.getenv("OPENAI_MODEL", "gpt-5.6-luna")
        
        create_kwargs: Dict[str, Any] = {
            "model": model_name,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content},
            ],
            "max_completion_tokens": 1500,
        }
        
        try:
            response = client.chat.completions.create(**create_kwargs)
        except Exception:
            # Fallback for legacy models that expect max_tokens
            create_kwargs.pop("max_completion_tokens", None)
            create_kwargs["max_tokens"] = 1500
            response = client.chat.completions.create(**create_kwargs)

        summary_text = response.choices[0].message.content.strip()
        return {
            "summary_text": summary_text,
            "vessel_count": total_count,
            "pdf_record_count": len(pdf_recs),
            "generated_at": now_utc.isoformat(),
        }

    except Exception as e:
        logger.error(f"❌ [Summarizer] OpenAI summary generation error: {e}. Falling back.")
        return {
            "summary_text": fallback_summary,
            "vessel_count": total_count,
            "pdf_record_count": len(pdf_recs),
            "generated_at": now_utc.isoformat(),
        }
