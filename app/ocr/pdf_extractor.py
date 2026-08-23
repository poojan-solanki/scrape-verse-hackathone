import base64
import io
import json
import logging
import os
import re
from typing import Any, Dict, List, Optional

import httpx
import pdfplumber
import pypdfium2 as pdfium
from openai import OpenAI

logger = logging.getLogger("portpulse.ocr.extractor")

# ── Blacklisted exact names that are headers/categories, NOT real vessels ──
_GARBAGE_VESSEL_NAMES = {
    "TIDE TABLE", "TIDE", "TIDAL", "TIDES",
    "TOTAL", "GRAND TOTAL", "SUB TOTAL", "SUBTOTAL",
    "VESSEL", "VESSELS", "VESSEL NAME", "VESSELS NAME", "SHIP", "SHIPS",
    "PAGE", "DATE", "TIME", "REMARKS", "NOTE", "NOTES", "NIL", "N/A", "NA",
    "SL NO", "SR NO", "S.NO", "S NO", "SL.NO", "SR.NO", "SR.", "NO.", "NO",
    "SUMMARY", "REPORT", "HEADER", "FOOTER",
    "TERMINAL", "AMCT", "AICTPL", "ACMTPL", "APMT", "BMCT", "NSFT", "NSICT", "NSIGT",
    "RAIL COMPANY", "BERTH", "BERTHING", "ANCHORAGE", "EXPECTED", "SAILED", "ALONGSIDE",
    "CONTAINER", "CONTAINERS", "DRY BULK", "LIQUID BULK", "BREAK BULK", "CARGO",
    "IMPORT", "EXPORT", "BALANCE", "OPERATIONS", "COMMENCED", "COMPLETED",
    "VIA", "VIA NO", "VIA NUMBER", "ROTATION", "ROTATION NO",
}

# Substrings that indicate the entry is a header, yard metric, or logistics company
_GARBAGE_SUBSTRINGS = [
    "VESSELS ON BERTH", "VESSELS SAILED", "VESSELS EXPECTED",
    "VESSELs ON BERTH", "VESSELs SAILED", "VESSELs EXPECTED",
    "CFS PENDENCY", "PENDENCY TEUS", "PENDENCY",
    "ADANI LOGISTICS", "ADANI PORTS",
    "CONTAINER CORPORATION", "CONTAINER RAIL ROAD",
    "GATEWAY DISTRIPARKS", "HASTI PETRO",
    "HIND TERMINALS", "INTERNATIONAL CARGO TERMINALS",
    "JOSHI KONOIKE", "NAVKAR CORPORATION",
    "PIPAVAV RAILWAY", "PRISTINE MEGA",
    "CENTRAL WAREHOUSING",
    "LOGISTICS LTD", "LOGISTICS LIMITED",
    "TRANSPORT AND INFRASTRUCTURE",
    "CORPORATION LIMITED", "CORPORATION LTD",
    "PRIVATE LIMITED", "PVT LTD", "PVT. LTD",
    "ACTUAL ACTUAL", "DAILY BERTHING",
    "BERTHING REPORT", "BERTHING SHEET",
]

# Regex patterns for non-vessel tokens
_GARBAGE_PATTERNS = [
    re.compile(r"^\d+$"),                                 # Pure numbers (e.g. "204", "26", "1")
    re.compile(r"^\d{1,2}[-/]\w{3}[-/]\d{2,4}$"),         # Dates like 19-Aug-26 or 20-Aug-2026
    re.compile(r"^\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}$"),     # Numeric dates like 20/08/2026
    re.compile(r"^[A-Z]\d{3,5}$"),                        # Berth/tide codes like L0008, H0632, L1241
    re.compile(r"^\d+(\.\d+)?$"),                         # Pure floats like 12.5
    re.compile(r"^[A-Z]{1,2}\d{1,2}$"),                   # Short codes like B2, CT1
    re.compile(r"^\d{1,2}:\d{2}"),                        # Times like 14:30
    re.compile(r"^(MON|TUE|WED|THU|FRI|SAT|SUN)", re.I),  # Day names
]


def _is_valid_vessel_name(name: str) -> bool:
    """Strict vessel name validation to filter out tide table entries, headers, numbers, and yard metrics."""
    if not name:
        return False

    clean = name.strip()
    clean_upper = clean.upper()

    # Reject if too short (< 3 chars) or too long (> 50 chars — e.g. text blobs/pendency tables)
    if len(clean) < 3 or len(clean) > 50:
        return False

    # Reject pure numbers / digits (e.g. "204", "26")
    if clean.isdigit() or clean.replace(".", "", 1).isdigit():
        return False

    # Reject if in known blacklist
    if clean_upper in _GARBAGE_VESSEL_NAMES:
        return False

    # Reject if matches blacklisted substrings
    for sub in _GARBAGE_SUBSTRINGS:
        if sub in clean_upper:
            return False

    # Reject regex patterns
    for pat in _GARBAGE_PATTERNS:
        if pat.match(clean_upper):
            return False

    # Reject if too many words (> 6 words — ship names are typically 1-4 words)
    words = clean.split()
    if len(words) > 6:
        return False

    # Must contain at least 2 letters
    letter_count = sum(1 for c in clean if c.isalpha())
    if letter_count < 2:
        return False

    # Must contain at least one word with 3+ alphabetic characters
    has_real_word = any(len(w) >= 3 and w.isalpha() for w in words)
    if not has_real_word:
        if not any(len(w) >= 2 and w.isalpha() for w in words):
            return False

    return True


def _is_vessel_table(table: List[List[Optional[str]]]) -> bool:
    """Check if a table is likely a vessel/berthing table vs a tide/summary/yard table."""
    if not table or len(table) < 2:
        return False

    for row in table[:5]:
        row_text = " ".join([str(c or "").lower() for c in row])
        if any(kw in row_text for kw in ("vessel", "ship name", "vessel name")):
            if any(bad in row_text for bad in ("tide", "tidal", "high water", "low water", "pendency", "rake", "cfs")):
                return False
            return True

    return False


class PDFExtractor:
    """Two-stage OCR and table extraction pipeline for maritime terminal berthing reports."""

    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY", "").strip()
        self.openai_client = OpenAI(api_key=api_key) if api_key else None
        self.logger = logger

    def download_pdf(self, url: str) -> bytes:
        """Downloads PDF bytes from the given URL."""
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        with httpx.Client(timeout=30.0, follow_redirects=True, headers=headers) as client:
            response = client.get(url)
            if response.status_code != 200:
                raise ValueError(f"PDF download failed with status {response.status_code} for {url}")
            return response.content

    def extract(self, pdf_url: str, terminal_name: Optional[str] = None) -> Dict[str, Any]:
        """Extracts structured vessel records from a terminal PDF using 2-stage OCR pipeline."""
        term_name = terminal_name or "Unknown Terminal"
        self.logger.info(f"📄 [PDFExtractor] Processing PDF for '{term_name}': {pdf_url}")

        try:
            pdf_bytes = self.download_pdf(pdf_url)
        except Exception as e:
            self.logger.error(f"❌ [PDFExtractor] Failed to download PDF {pdf_url}: {e}")
            return {
                "stage": 0,
                "records": [],
                "health_score": 0.0,
                "terminal_name": term_name,
                "error": str(e),
            }

        # Stage 1: pdfplumber heuristic table extraction
        stage1_result = self._stage1_pdfplumber(pdf_bytes, term_name)
        records_s1 = stage1_result.get("records", [])
        health_s1 = stage1_result.get("health_score", 0.0)

        # Require high health AND at least 2 valid records with actual berth/LOA data
        has_usable_records = len(records_s1) >= 2 and any(r.get("berth_number") or r.get("loa") for r in records_s1)

        if health_s1 >= 85.0 and has_usable_records:
            self.logger.info(
                f"✅ [PDFExtractor] Stage 1 (pdfplumber) succeeded with health {health_s1}% ({len(records_s1)} records)"
            )
            return stage1_result

        # Stage 2: OpenAI Vision AI Extraction
        self.logger.info(
            f"🔄 [PDFExtractor] Stage 1 insufficient (Health: {health_s1}%, Records: {len(records_s1)}). "
            f"Activating Stage 2 (OpenAI Vision)..."
        )
        stage2_result = self._stage2_openai_vision(pdf_bytes, term_name)
        records_s2 = stage2_result.get("records", [])

        if records_s2 and stage2_result.get("health_score", 0.0) > 0:
            return stage2_result

        # If Stage 2 also had 0 records, return best effort from Stage 1
        return stage1_result if records_s1 else stage2_result

    def _stage1_pdfplumber(self, pdf_bytes: bytes, terminal_name: str) -> Dict[str, Any]:
        """Stage 1: Extract tables natively using pdfplumber."""
        all_records: List[Dict[str, Any]] = []
        try:
            with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
                for page_idx, page in enumerate(pdf.pages):
                    tables = page.extract_tables()
                    for table in tables:
                        if not _is_vessel_table(table):
                            continue

                        if table and len(table) > 1:
                            records = self._parse_table_to_records(table, terminal_name)
                            all_records.extend(records)
        except Exception as e:
            self.logger.warning(f"⚠️ [PDFExtractor] pdfplumber stage error: {e}")

        health = self._compute_health(all_records)
        return {
            "stage": 1,
            "records": all_records,
            "health_score": health,
            "terminal_name": terminal_name,
        }

    def _parse_table_to_records(self, table: List[List[Optional[str]]], terminal_name: str) -> List[Dict[str, Any]]:
        """Parses a 2D raw extracted table list into structured vessel records."""
        if not table or len(table) < 2:
            return []

        # Find header row
        header_idx = -1
        col_map: Dict[int, str] = {}

        for idx, row in enumerate(table[:5]):
            row_str = " ".join([str(c or "").lower() for c in row])
            if "vessel" in row_str or "ship" in row_str or "berth" in row_str:
                header_idx = idx
                break

        if header_idx == -1:
            return []

        header_row = table[header_idx]
        for c_idx, col in enumerate(header_row):
            if not col:
                continue
            col_clean = str(col).lower().replace("\n", " ").replace("_", " ").strip()

            if "vessel" in col_clean or "ship" in col_clean:
                col_map[c_idx] = "vessel_name"
            elif "via" in col_clean:
                col_map[c_idx] = "via_number"
            elif "loa" in col_clean:
                col_map[c_idx] = "loa"
            elif "berth" in col_clean:
                col_map[c_idx] = "berth_number"
            elif "side" in col_clean:
                col_map[c_idx] = "berthing_side"
            elif "alongside" in col_clean or "allongside" in col_clean:
                col_map[c_idx] = "alongside_date"
            elif "commence" in col_clean:
                col_map[c_idx] = "ops_commenced"
            elif "complete" in col_clean:
                col_map[c_idx] = "ops_completed"
            elif "imp" in col_clean:
                col_map[c_idx] = "imp_bal"
            elif "exp" in col_clean:
                col_map[c_idx] = "exp_bal"
            elif "draft" in col_clean:
                col_map[c_idx] = "max_draft"

        if "vessel_name" not in col_map.values():
            return []

        records: List[Dict[str, Any]] = []
        for row in table[header_idx + 1:]:
            if not row or not any(row):
                continue

            rec: Dict[str, Any] = {
                "terminal_name": terminal_name,
                "vessel_name": None,
                "via_number": None,
                "loa": None,
                "berth_number": None,
                "berthing_side": None,
                "alongside_date": None,
                "alongside_time": None,
                "ops_commenced": None,
                "ops_completed": None,
                "imp_bal": None,
                "exp_bal": None,
                "max_draft": None,
                "status": "BERTH_ACTIVE",
                "raw_payload": {},
            }

            for c_idx, val in enumerate(row):
                if c_idx in col_map and val:
                    key = col_map[c_idx]
                    val_str = str(val).strip().replace("\n", " ")
                    if key in ("loa", "max_draft"):
                        try:
                            rec[key] = float(val_str.replace("m", "").strip())
                        except ValueError:
                            rec[key] = None
                    elif key in ("imp_bal", "exp_bal"):
                        try:
                            rec[key] = int(val_str.replace(",", "").strip())
                        except ValueError:
                            rec[key] = None
                    else:
                        rec[key] = val_str

            v_name = (rec["vessel_name"] or "").strip()

            # Strict validation
            if _is_valid_vessel_name(v_name):
                has_supporting_data = any([
                    rec["berth_number"],
                    rec["loa"],
                    rec["max_draft"],
                    rec["imp_bal"],
                    rec["exp_bal"],
                    rec["alongside_date"],
                ])
                if has_supporting_data:
                    records.append(rec)

        return records

    def _stage2_openai_vision(self, pdf_bytes: bytes, terminal_name: str) -> Dict[str, Any]:
        """Stage 2: Render PDF pages to high-res images and extract with OpenAI Vision AI."""
        if not self.openai_client:
            self.logger.warning("⚠️ [PDFExtractor] OpenAI API key not configured; skipping Stage 2 Vision.")
            return {"stage": 2, "records": [], "health_score": 0.0, "terminal_name": terminal_name}

        try:
            doc = pdfium.PdfDocument(pdf_bytes)
            if len(doc) == 0:
                return {"stage": 2, "records": [], "health_score": 0.0, "terminal_name": terminal_name}

            # Take page 0 (and page 1 if Mundra or len <= 2) for maximum focus and zero token overflow
            pages_to_render = 2 if "mundra" in terminal_name.lower() or len(doc) <= 2 else 1
            max_pages = min(len(doc), pages_to_render)
            image_contents = []

            for page_idx in range(max_pages):
                page = doc[page_idx]
                bitmap = page.render(scale=1.4)
                pil_image = bitmap.to_pil()

                buffer = io.BytesIO()
                pil_image.save(buffer, format="PNG")
                img_b64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

                image_contents.append({
                    "type": "image_url",
                    "image_url": {"url": f"data:image/png;base64,{img_b64}"},
                })

            prompt_text = (
                f"Extract all real vessel/ship berthing records from this daily report for terminal: {terminal_name} into a JSON array.\n\n"
                "JSON format rules:\n"
                "- Each object must have keys: vessel_name (string), berth_number (string or null), loa (number or null), "
                "max_draft (number or null), alongside_date (string or null), imp_bal (integer or null), exp_bal (integer or null), status (string).\n"
                "- ONLY extract real cargo/container ships (e.g. 'MSC MELISSA', 'BF HAMBURG', 'EVER LENIENT', 'CELSIUS EDINBURGH', 'MUMBAI BRIDGE', etc.).\n"
                "- DO NOT extract tide tables (e.g. 'TIDE TABLE', 'L0008', 'H0632'), CFS yard pendency summaries, or railway rake statistics.\n"
                "Return ONLY the valid JSON array without any markdown fences, explanation, or commentary."
            )

            model_name = os.getenv("OPENAI_MODEL", "gpt-5.6-luna")

            create_kwargs: Dict[str, Any] = {
                "model": model_name,
                "messages": [
                    {
                        "role": "user",
                        "content": [
                            {"type": "text", "text": prompt_text},
                            *image_contents,
                        ],
                    }
                ],
                "max_completion_tokens": 4000,
            }

            try:
                response = self.openai_client.chat.completions.create(**create_kwargs)
            except Exception as e_model:
                self.logger.warning(f"⚠️ [PDFExtractor] max_completion_tokens failed ({e_model}), trying max_tokens fallback...")
                create_kwargs.pop("max_completion_tokens", None)
                create_kwargs["max_tokens"] = 4000
                response = self.openai_client.chat.completions.create(**create_kwargs)

            content = response.choices[0].message.content or ""
            content_clean = content.strip()

            # Robust JSON bracket slicing
            bracket_start = content_clean.find("[")
            bracket_end = content_clean.rfind("]")
            if bracket_start != -1 and bracket_end != -1 and bracket_end > bracket_start:
                content_clean = content_clean[bracket_start:bracket_end + 1]

            if not content_clean or content_clean in ("", "null", "[]"):
                self.logger.warning("⚠️ [PDFExtractor] Vision AI returned empty content.")
                return {"stage": 2, "records": [], "health_score": 0.0, "terminal_name": terminal_name}

            try:
                raw_records = json.loads(content_clean)
            except json.JSONDecodeError as parse_err:
                self.logger.warning(f"⚠️ [PDFExtractor] JSON parse failed: {parse_err}. Raw snippet: {content_clean[:200]}")
                raw_records = []

            if not isinstance(raw_records, list):
                raw_records = []

            # Filter through strict validation
            filtered_records = []
            for r in raw_records:
                if isinstance(r, dict):
                    r["terminal_name"] = terminal_name
                    v_name = (r.get("vessel_name") or "").strip()
                    if _is_valid_vessel_name(v_name):
                        filtered_records.append(r)
                    else:
                        self.logger.debug(f"⏭️ [PDFExtractor] Vision record filtered: '{v_name}'")

            health = self._compute_health(filtered_records)
            self.logger.info(f"✨ [PDFExtractor] Vision AI successfully extracted {len(filtered_records)} records (Health: {health}%)")
            return {
                "stage": 2,
                "records": filtered_records,
                "health_score": health,
                "terminal_name": terminal_name,
            }
        except Exception as e:
            self.logger.error(f"❌ [PDFExtractor] Stage 2 Vision AI extraction error: {e}")
            return {"stage": 2, "records": [], "health_score": 0.0, "terminal_name": terminal_name, "error": str(e)}

    def _compute_health(self, records: List[Dict[str, Any]]) -> float:
        """Computes deterministic data health percentage for extracted PDF records."""
        if not records:
            return 0.0

        total_fields = 0
        filled_fields = 0
        core_keys = ["vessel_name", "berth_number", "loa", "max_draft"]

        for r in records:
            v_name = (r.get("vessel_name") or "").strip()
            if not _is_valid_vessel_name(v_name):
                continue

            for key in core_keys:
                total_fields += 1
                val = r.get(key)
                if val is not None and str(val).strip():
                    filled_fields += 1

        if total_fields == 0:
            return 0.0

        score = (filled_fields / total_fields) * 100.0
        return round(score, 1)
