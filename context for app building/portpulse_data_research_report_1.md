# PortPulse — Comprehensive Data Research Report
> **Live Crawled Ports:** JNPT (jnport.gov.in) · Mundra Port (adaniports.com)  
> **Date:** August 19, 2026 | **Status:** Actionable, Build-Ready

---

## The Core Question: What Is the One Impactful Area?

Before listing data types, let's answer this: **Who suffers most from information scattered across port websites?**

The answer from both the crawl and domain reality is: **Importers and Exporters — specifically their CHA (Customs House Agents) and Logistics Operations Teams.**

Every single day, these people must manually:
1. Open 3–4 different government PDF links to check if charges have changed
2. Check if their containers have exceeded "free days" (after which ground rent/demurrage starts ticking)
3. Monitor if a vessel has berthed yet and when it will complete
4. Read PDF circulars to find out about new waivers, surcharges, or holiday schedules

**This is the killer use case: "Container Charge & Free-Day Intelligence"**

> A user enters their shipping line + container number → PortPulse tells them:
> *"Your container arrived at JNPT BMCT on Aug 17. Today is Day 3. Free days: 4. Tomorrow demurrage starts at ₹1,200/day. Current JNPA SOR (May 2026) applies. Ground rent waiver extended till Aug 20 — you still have 1 free day under the circular."*

This saves money **directly and immediately.** That is the most impactful thing for real users.

---

## Section 1: Live Data Audit — What Each Port Website Actually Publishes

### 1.1 JNPT (jnport.gov.in) — Government Port
**Full crawl completed. 100% of data is publicly accessible.**

| Data Page | URL | Format | Update Frequency |
|-----------|-----|--------|-----------------|
| Daily Berthing Report | `/page/daily-berthing-report/...` | **Live HTML Table** | Real-time, every day |
| Daily Performance Report | `/page/daily-performance-report/...` | **PDF** | Daily |
| ICD Daily Report | (linked from above) | **PDF** | Daily |
| Monthly Performance | `/page/monthly-performance-report/...` | PDF | Monthly |
| NLDS Dwell Time Reports | `/page/-nlds-report/...` | **PDF** (monthly archives up to Jun 2026) | Monthly |
| Operating Performance Profile | `/page/operating-performance-profile/...` | **HTML tables + text** | Monthly/Annual |
| Window (Vessel) Schedule | `/page/window-schedule/...` | **PDF** | Regularly |
| Circular & Trade Notices | `/page/circular-and-trade-notices/...` | **List of PDFs** | As issued (live) |
| JNPA Schedule of Rates (SOR) | `/page/jnpa-sor/...` | **PDF** (current: May 2026–Apr 2027) | Annual |
| Terminal SOR | `/page/terminal-sor/...` | PDF | Annual |
| Press Releases | `/page/press-release/...` | HTML + PDF | As issued |
| Port Holidays | `/page/port-holidays/...` | HTML | Annual |
| Tariff Calculator | `/page/tariff-calculator/...` | Interactive Web Form | Live |

**Key live fields from Daily Berthing Table (actual values scraped Aug 18, 2026):**
```
Terminal | Berth No. | VIA No. | Vessel Name          | Commodity   | Berthed On           | Expected Completion
---------|-----------|---------|----------------------|-------------|----------------------|----------------------
NSFT     | CB-01     | S1214   | CMA CGM LA SCALA     | CONTAINER   | 17-08-2026 14:15:00  | 18-08-2026 15:00:00
NSFT     | CB-02     | S1159   | TSS AMBER            | CONTAINER   | 17-08-2026 23:00:00  | 18-08-2026 16:30:00
NSICT    | CB-04     | S1178   | ZHONG GU CHONG QING  | CONTAINER   | 16-08-2026 07:54:00  | 18-08-2026 08:00:00
NSIGT    | CB-06     | S1272   | WAN HAI 623          | CONTAINER   | 18-08-2026 03:12:00  | 19-08-2026 11:00:00
APMT     | APMT-1    | S1281   | NYK VESTA            | CONTAINER   | 17-08-2026 14:30:00  | 19-08-2026 12:00:00
BMCT     | BMCT-04   | S1208   | CSCL MARS            | CONTAINER   | 16-08-2026 16:12:00  | 19-08-2026 11:00:00
BMCT     | BMCT-05   | S1275   | MSC MARIA LESLIE     | CONTAINER   | 17-08-2026 17:24:00  | 19-08-2026 11:00:00
NSDT     | CCB-S     | S6772   | BOONYA NAREE         | CEMENT      | 17-08-2026 22:36:00  | 20-08-2026 07:02:00
NSDT     | NSD-02    | S6739   | TAKAPUNA             | ELECTRIC CARS| 16-08-2026 08:54:00 | 19-08-2026 06:00:00
BPCL     | LB-01     | S6732   | PARAMITA             | VAM         | 17-08-2026 12:06:00  | 18-08-2026 05:45:00
JJLT     | LB-03     | S6782   | DAWN MANSAROVAR      | NFO         | 17-08-2026 21:42:00  | 20-08-2026 04:12:00
```

**PDF Documents Found at JNPT (examples, all scrapeable):**
- `SOR_w_e_f_01_05_2026_including_MBPA.pdf` — Current Schedule of Rates (369KB)
- `JNPA_SOR_effective_01_May_2025.pdf` — Previous year SOR (1.1MB)
- `Trade_Notice_9_6_2026.pdf` — 50% Ground Rent Waiver on imports > 8 days
- `Trade_Notice_-_Grant_of_Interim_Waiver_of_Administartive_and_Supervision_Charges_on_Electricity_Charges.pdf`
- Monthly: `NLDS_Report_June_2026.pdf`, `NLDS_REPORT_May_2026.pdf`, etc.
- Daily: `Daily_Status_Report_18-08-2026.pdf`, `ICD_DAILY_REPORT_18-AUG-2026.pdf`
- Terminal-specific: `APMT_Berthing_Report_-_18-Aug-2026.pdf`, `BERTHING-CT.pdf` (NSICT), `Berthing_Sheet_18_AUG_2026.pdf` (BMCT)

---

### 1.2 Mundra Port (adaniports.com) — Private Commercial Port
**Full crawl completed.**

| Data Page | URL | Format | Notes |
|-----------|-----|--------|-------|
| **Vessel Schedule** | `/ports-and-terminals/mundra-port/vesselschedule` | **Web Page / PDF** | Key page — contains arrival/departure schedule |
| **Vessel Berthing Report** | `/-/media/project/.../latest_berthing-report_mundra.pdf` | **Direct PDF link** | Updated regularly |
| Container Tracking | Modal on main page (CT2, CT3, CT4, T2 terminals) | Web Form | Requires container# |
| Port Overview | `/Ports-and-Terminals/Mundra-Port` | HTML | Static info |

**Key facts about Mundra:**
- India's **largest commercial port** by volume
- **4 container terminals**, combined capacity **7.5 million TEUs**
- **35+ shipping line services** operate from Mundra
- Handles: Containers, Bulk (Fertilizer, Agri, Steel), Crude Oil (VLCC), Liquid (4.63 Lakh KL tank farm), RO-RO (Automobiles), Project Cargo
- Mundra provides a **direct PDF berthing report link** — this is directly downloadable

---

## Section 2: The 7 Data Categories to Collect

Based on the live crawl, here is every data type worth scraping, ranked by user impact:

### Category 1: Vessel Berthing & Schedule [HIGHEST IMPACT - DAILY]
**What it is:** Which vessel is at which berth right now, when it berthed, and when it will finish.  
**Why users need it:** Freight forwarders, CHAs, importers need to know if their vessel has berthed to start tracking free-day countdown. This data is currently on JNPT website but users don't check it routinely.

**Scraper targets:**
- JNPT: `https://www.jnport.gov.in/page/daily-berthing-report/...` (HTML table, daily)
- JNPT: Terminal PDFs (APMT, BMCT, NSICT reports — direct PDF links change daily)
- Mundra: `/-/media/project/ports/portsandterminals/mundra-documents/berthing-report/latest_berthing-report_mundra.pdf`

**Fields to extract:**
```
vessel_name, terminal, berth_no, via_number, commodity, 
berthed_timestamp, expected_completion_timestamp, 
port_id, scraped_at
```

---

### Category 2: Trade Circulars & Notices [HIGH IMPACT — IRREGULAR]
**What it is:** Official notifications about charge waivers, new rules, fee changes, operational disruptions.  
**Why users need it:** These PDFs contain information that directly affects how much an importer pays. Example: "Ground rent waiver extended for all import containers to Aug 20, 2026." A user who doesn't know about this pays ₹1,200/day unnecessarily.

**What we found live:**
- 40+ trade circulars on JNPT, archived since 2011
- Current active ones include: 50% ground rent waiver, electricity charge waiver, dwell time charge extensions for Middle East containers
- JNPT publishes both **HTML lists** (title, date, PDF link) AND the **PDF files themselves**

**Scraper targets:**
- JNPT: `https://www.jnport.gov.in/page/circular-and-trade-notices/...` (HTML list → extract PDF links)
- Then: **OCR/parse each PDF** (see Section 4)

**Fields to extract:**
```
title, published_date, expiry_date, circular_type (general/traffic/tariff),
pdf_url, pdf_text (via OCR), port_id, scraped_at
```

---

### Category 3: Schedule of Rates (SOR) / Tariff [HIGH IMPACT — ANNUAL]
**What it is:** The official price list for every single port service — container handling, ground rent, storage, wharfage, etc.  
**Why users need it:** Importers, exporters, shipping agents need to know exact charge rates for cost calculation. The current JNPT SOR runs May 2026–April 2027.

**Scraper targets:**
- JNPT: `https://www.jnport.gov.in/page/jnpa-sor/...` (list of PDFs → download + OCR)
- JNPT: `https://www.jnport.gov.in/page/terminal-sor/...` (terminal-specific rates)

**Fields to extract (post-OCR):**
```
charge_name, cargo_type, rate_amount, rate_unit (per TEU/per day/per MT),
currency, effective_from, effective_to, port_id
```

---

### Category 4: Dwell Time & Congestion Metrics [HIGH IMPACT — MONTHLY]
**What it is:** Independent audits of how long containers actually sit inside the port, CFS, and ICD.  
**Why users need it:** Logistics managers benchmark their operations. Companies using JNPT vs Mundra can compare average dwell times.

**Scraper targets:**
- JNPT: NLDS monthly PDFs (Jun 2026, May 2026, etc.) — direct PDF links already discovered
- NLDSL: `https://nldsl.in/our_services.aspx?mpgid=10&pgid1=11&pgidtrail=71` (LDB Analytics Reports)

**Fields (post-OCR):**
```
port_id, month, year, 
avg_port_dwell_time_hours (import), avg_port_dwell_time_hours (export),
avg_cfs_dwell_time_hours, avg_icd_transit_hours,
rail_turnaround_hours
```

---

### Category 5: Port Holidays & Operational Calendar [MEDIUM IMPACT — ANNUAL]
**What it is:** Days when port gates, customs offices, or terminals are closed.  
**Why users need it:** Planning shipment arrivals or delivery on a port holiday results in demurrage. Very few users check this proactively.

**Scraper targets:**
- JNPT: `https://www.jnport.gov.in/page/port-holidays/...` (HTML page)
- Each terminal may publish its own holiday list

**Fields:**
```
port_id, holiday_date, holiday_name, scope (full_closure/restricted_ops)
```

---

### Category 6: Performance & Throughput Statistics [MEDIUM IMPACT — MONTHLY]
**What it is:** TEU volumes handled per terminal, total tonnage, ship turnaround averages.  
**Why users need it:** Terminal operators, shipping lines, logistics planners use this for capacity planning and benchmarking.

**Scraper targets:**
- JNPT: `/page/operating-performance-profile/...` (HTML tables — already fully scraped)
- JNPT: `/page/performance-highlights/...`
- JNPT: Monthly PDF performance reports

**Fields:**
```
port_id, terminal_name, period_month, period_year,
teu_volume_total, teu_import, teu_export, teu_transhipment,
tonnage_total_mt, avg_ship_turnaround_hours
```

---

### Category 7: Press Releases / Advisories [LOWER PRIORITY — IRREGULAR]
**What it is:** Major announcements — new terminal openings, policy changes, infrastructure updates.  
**Why users need it:** Long-term planning and awareness.

**Scraper targets:**
- JNPT: `/page/press-release/...` (HTML list)

**Fields:**
```
port_id, title, published_date, summary_text, pdf_url
```

---

## Section 3: The PDF OCR Pipeline

Many critical documents (SOR tariffs, NLDS reports, daily status reports, trade circulars) are PDFs.  
Here is the pipeline to process them **without any LLM:**

```
 ┌──────────────────────────────────────────────────────────────────────┐
 │                     PDF PROCESSING PIPELINE                           │
 │                                                                        │
 │  Step 1: Scraper discovers PDF URL from page (HTML link)              │
 │          → Stores: pdf_url, title, published_date, port_id            │
 │                                                                        │
 │  Step 2: Downloader fetches the PDF bytes via Bright Data             │
 │          (bypasses any auth/bot-protection on .gov.in servers)        │
 │                                                                        │
 │  Step 3: PyMuPDF (fitz) extracts text from PDF                        │
 │          - If PDF has embedded text → extract directly (no OCR needed)│
 │          - If PDF is a scanned image → use Tesseract OCR              │
 │                                                                        │
 │  Step 4: Regex / Pattern Extractor parses the raw text               │
 │          - For SOR: extract rows with charge name + ₹ amount          │
 │          - For trade notices: extract effective dates + charge names   │
 │          - For NLDS: extract dwell time numbers by regex              │
 │          → Stores: structured rows in Supabase tables                 │
 │                                                                        │
 │  Step 5: Raw PDF text stored in full in `pdf_documents` table         │
 │          (JSONB field: `raw_text`) for future re-parsing              │
 └──────────────────────────────────────────────────────────────────────┘
```

**Libraries needed (Python, no LLM):**
```
pymupdf         # PDF text extraction (fastest, most reliable)
pytesseract     # OCR for scanned PDFs (fallback)
Pillow          # Image conversion for Tesseract
pdfplumber      # Table extraction from PDFs (great for SOR tables)
camelot-py      # Alternative table extractor from PDFs
httpx           # Downloading PDFs async
```

---

## Section 4: Pure Traditional Scraper Architecture (No LLM)

This is the architecture you described — **no AI in the scraper pipeline.** Clean, deterministic, predictable.

```
                        PORTPULSE SCRAPER ARCHITECTURE
                        ================================

  ┌─────────────────────────────────────────────────────────────────────┐
  │                    BRIGHT DATA SCRAPER STUDIO                        │
  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
  │  │  Scraper 1   │  │  Scraper 2   │  │  Scraper 3   │   ...        │
  │  │  JNPT Berth  │  │ JNPT Circu.  │  │ Mundra Berth │              │
  │  │  (HTML Table)│  │ (PDF Links)  │  │ (PDF Direct) │              │
  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘              │
  └─────────┼─────────────────┼──────────────────┼──────────────────────┘
            │ JSON Payload     │ JSON Payload      │ JSON Payload
            ▼                 ▼                   ▼
  ┌─────────────────────────────────────────────────────────────────────┐
  │                    FASTAPI BACKEND SERVER                            │
  │                                                                      │
  │  POST /webhook/scraper-result  (receives data from Bright Data)     │
  │                                                                      │
  │  ┌────────────────────────────────────────────────────────────────┐ │
  │  │               DATA VALIDATION LAYER                            │ │
  │  │  - Pydantic models validate structure of incoming JSON         │ │
  │  │  - Check: are required fields null? count of records = 0?      │ │
  │  │  - Health Score = (non-null fields / total expected fields)×100│ │
  │  │                                                                │ │
  │  │  IF health_score >= 80% → SAVE to Supabase → Done             │ │
  │  │  IF health_score < 80%  → TRIGGER self-heal (see below)       │ │
  │  └────────────────────────────────────────────────────────────────┘ │
  │                                                                      │
  │  ┌────────────────────────────────────────────────────────────────┐ │
  │  │               SCHEDULER (APScheduler)                          │ │
  │  │  - JNPT Berthing:     every 4 hours  (0 */4 * * *)            │ │
  │  │  - JNPT Circulars:    every 12 hours (0 */12 * * *)           │ │
  │  │  - Mundra Schedule:   every 6 hours  (0 */6 * * *)            │ │
  │  │  - NLDS Reports:      1st of month   (0 9 1 * *)              │ │
  │  │  - Port Holidays:     once yearly    (0 9 1 1 *)              │ │
  │  └────────────────────────────────────────────────────────────────┘ │
  └─────────────────────────────────────────────────────────────────────┘
            │                             │
            ▼ (on success)               ▼ (on failure / null data)
  ┌──────────────────┐         ┌──────────────────────────────────────┐
  │  Supabase DB     │         │  SELF-HEAL TRIGGER                   │
  │  - vessel_logs   │         │  bdata scraper heal <collector_id>   │
  │  - circulars     │         │  bdata scraper approve <collector_id>│
  │  - tariff_rates  │         │  → Log event in scraper_events table │
  │  - dwell_metrics │         │  → Retry scrape after 15 minutes     │
  │  - holidays      │         │  → Alert via POST /api/healing-log   │
  │  - scraper_events│         └──────────────────────────────────────┘
  └──────────────────┘
```

**On-Demand Scraping:**
```
POST /api/scrapers/{collector_id}/run
→ Calls: bdata scraper run <collector_id>
→ Returns: job_id to poll status
```

---

## Section 5: Complete Supabase Database Schema

### Table: `ports`
```sql
CREATE TABLE ports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,                    -- 'JNPT', 'Mundra Port'
  full_name TEXT,                        -- 'Jawaharlal Nehru Port Authority'
  unlocode TEXT UNIQUE,                  -- 'INNSA', 'INMUN'
  country TEXT DEFAULT 'India',
  city TEXT,
  latitude NUMERIC(9,6),
  longitude NUMERIC(9,6),
  operator_type TEXT,                    -- 'government', 'private'
  website_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `scrapers`
```sql
CREATE TABLE scrapers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  collector_id TEXT UNIQUE,              -- Bright Data collector ID
  name TEXT,                             -- 'jnpt-berthing-table'
  target_url TEXT NOT NULL,
  data_category TEXT NOT NULL,           -- 'vessel_berthing', 'circulars', 'tariff', etc.
  scrape_type TEXT DEFAULT 'html',       -- 'html', 'pdf_link_list', 'pdf_direct'
  schedule_cron TEXT,                    -- '0 */4 * * *'
  health_status TEXT DEFAULT 'healthy',  -- 'healthy', 'degraded', 'healed', 'failed'
  last_run_at TIMESTAMPTZ,
  last_success_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `vessel_logs`
```sql
CREATE TABLE vessel_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  scraper_id UUID REFERENCES scrapers(id),
  vessel_name TEXT NOT NULL,
  terminal_name TEXT,                    -- 'NSFT', 'BMCT', 'APMT', etc.
  berth_number TEXT,                     -- 'CB-01', 'BMCT-04'
  via_number TEXT,                       -- Voyage IA number e.g. 'S1214'
  commodity TEXT,                        -- 'CONTAINER', 'CEMENT', 'LIQUID'
  berthed_at TIMESTAMPTZ,
  expected_completion_at TIMESTAMPTZ,
  actual_completion_at TIMESTAMPTZ,      -- filled in retrospectively
  berth_duration_hours NUMERIC,          -- computed: actual - berthed
  terminal_report_pdf_url TEXT,
  raw_payload JSONB,                     -- full raw JSON from Bright Data
  scraped_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `pdf_documents`
```sql
CREATE TABLE pdf_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  scraper_id UUID REFERENCES scrapers(id),
  doc_type TEXT NOT NULL,                -- 'circular', 'sor', 'nlds_report', 'daily_status', 'press_release', 'holiday'
  title TEXT,
  pdf_url TEXT UNIQUE,                   -- original PDF URL
  published_date DATE,
  expiry_date DATE,
  file_size_kb INTEGER,
  ocr_status TEXT DEFAULT 'pending',     -- 'pending', 'done', 'failed'
  raw_text TEXT,                         -- full extracted text via PyMuPDF
  parsed_data JSONB,                     -- structured data extracted via regex
  scraped_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `tariff_rates`  ← **The killer table for Container Charge Intelligence**
```sql
CREATE TABLE tariff_rates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  pdf_document_id UUID REFERENCES pdf_documents(id),
  charge_name TEXT NOT NULL,             -- 'Ground Rent', 'Wharfage', 'THC'
  cargo_type TEXT,                       -- 'Container', 'Bulk', 'Liquid'
  container_size TEXT,                   -- '20ft', '40ft', 'N/A'
  container_status TEXT,                 -- 'Import', 'Export', 'Transhipment'
  rate_amount NUMERIC,
  rate_currency TEXT DEFAULT 'INR',
  rate_unit TEXT,                        -- 'per TEU', 'per day', 'per MT'
  free_days INTEGER,                     -- Number of free days before this charge starts
  effective_from DATE,
  effective_to DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `trade_circulars`
```sql
CREATE TABLE trade_circulars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  pdf_document_id UUID REFERENCES pdf_documents(id),
  circular_type TEXT,                    -- 'general', 'traffic', 'tariff', 'operational'
  title TEXT NOT NULL,
  published_date DATE,
  effective_from DATE,
  expiry_date DATE,
  affects_charge TEXT,                   -- 'ground_rent', 'wharfage', 'reefer', 'storage'
  waiver_percentage NUMERIC,             -- e.g. 50 for 50% waiver
  summary_text TEXT,                     -- extracted from PDF
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `dwell_metrics`
```sql
CREATE TABLE dwell_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  pdf_document_id UUID REFERENCES pdf_documents(id),
  period_month INTEGER,
  period_year INTEGER,
  metric_type TEXT,                      -- 'port_dwell', 'cfs_dwell', 'icd_transit', 'rail_turnaround'
  cargo_direction TEXT,                  -- 'import', 'export'
  value_hours NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `scraper_events`  ← **For self-healing demo**
```sql
CREATE TABLE scraper_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  scraper_id UUID REFERENCES scrapers(id),
  event_type TEXT NOT NULL,              -- 'run_success', 'null_detected', 'heal_triggered', 'heal_approved', 'retry_success'
  health_score_before NUMERIC,           -- 0-100
  records_received INTEGER,
  null_fields TEXT[],                    -- array of field names that were null
  error_message TEXT,
  heal_collector_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: `port_holidays`
```sql
CREATE TABLE port_holidays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  port_id UUID REFERENCES ports(id),
  holiday_date DATE NOT NULL,
  holiday_name TEXT,
  operations_status TEXT DEFAULT 'closed', -- 'closed', 'restricted'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(port_id, holiday_date)
);
```

---

## Section 6: The Scraper Build Plan Per Port

### Scraper Set 1: JNPT (4 Scrapers)
| # | Name | Target URL | Type | Cron | Priority |
|---|------|-----------|------|------|----------|
| 1 | `jnpt-vessel-berthing` | Daily Berthing Report HTML page | HTML Table | `0 */4 * * *` | P1 |
| 2 | `jnpt-trade-circulars` | Circular & Trade Notices page | HTML list → PDF list | `0 8,20 * * *` | P1 |
| 3 | `jnpt-sor-tariff` | JNPA SOR page | HTML list → PDF | `0 9 1 5 *` (annually) | P2 |
| 4 | `jnpt-nlds-dwell` | NLDS Report page | HTML list → PDF | `0 9 2 * *` (monthly) | P2 |

### Scraper Set 2: Mundra Port (2 Scrapers)
| # | Name | Target URL | Type | Cron | Priority |
|---|------|-----------|------|------|----------|
| 5 | `mundra-vessel-schedule` | `/ports-and-terminals/mundra-port/vesselschedule` | HTML/PDF | `0 */6 * * *` | P1 |
| 6 | `mundra-berthing-report` | Direct PDF: `latest_berthing-report_mundra.pdf` | PDF Direct | `0 */6 * * *` | P1 |

### Total: 6 Bright Data Scrapers = 6 Collector IDs in Supabase

---

## Section 7: Self-Healing Flow (Backend Server Logic — No LLM)

```python
# pseudocode — app/services/health_monitor.py

def validate_scraper_result(collector_id: str, data: list[dict]) -> dict:
    """Pure deterministic health check. No AI."""
    
    required_fields = SCRAPER_REQUIRED_FIELDS[collector_id]
    # e.g. for jnpt-vessel-berthing: ['vessel_name', 'terminal_name', 'berthed_at']
    
    if len(data) == 0:
        health_score = 0
        null_fields = ['ALL_RECORDS_MISSING']
    else:
        null_counts = {f: sum(1 for r in data if not r.get(f)) for f in required_fields}
        null_score = sum(null_counts.values()) / (len(data) * len(required_fields))
        health_score = round((1 - null_score) * 100, 1)
        null_fields = [f for f, c in null_counts.items() if c > 0]
    
    return {
        "health_score": health_score, 
        "null_fields": null_fields, 
        "record_count": len(data)
    }

async def process_incoming_result(collector_id: str, data: list[dict]):
    result = validate_scraper_result(collector_id, data)
    
    if result["health_score"] >= 80:
        # Save to Supabase
        await save_to_db(collector_id, data)
        await log_event(collector_id, "run_success", result)
    else:
        # Trigger self-heal
        await log_event(collector_id, "null_detected", result)
        subprocess.run(["bdata", "scraper", "heal", collector_id])
        await asyncio.sleep(30)
        subprocess.run(["bdata", "scraper", "approve", collector_id])
        await log_event(collector_id, "heal_triggered", result)
        # Schedule retry in 15 minutes
        scheduler.add_job(retry_scrape, 'date', 
                          run_date=datetime.now() + timedelta(minutes=15),
                          args=[collector_id])
```
