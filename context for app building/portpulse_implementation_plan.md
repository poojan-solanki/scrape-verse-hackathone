# PortPulse - Complete Implementation Plan
Everything discussed in conversation 22937e55 about what needs to be built.

---

## The One-Line Definition

PortPulse is an autonomous maritime intelligence platform that uses self-healing Bright Data scrapers + a LangGraph AI agent to continuously extract real-time port congestion data from fragmented global and Indian port authority websites, and presents it on an interactive 3D globe dashboard with a financial risk engine and AI route optimizer - so supply chain managers can reroute cargo BEFORE costly demurrage penalties hit.

---

## Target Users

| User | Their Job | The Problem We Solve |
|------|-----------|----------------------|
| Supply Chain & Logistics Manager | Manages overseas container shipments (e.g. Best Buy, Zara, Tata) | Prevents 50k+ demurrage by alerting congestion 4-7 days before ships arrive |
| Freight Forwarder / Cargo Broker | Routes client containers across global ports | Real-time data to recommend optimal diversion ports (e.g. Seattle > LA) |
| Port Terminal Operator | Monitors berth utilization | Benchmarking dwell times against competitor ports |

---

## The 4 Dashboard Modules (What the UI Must Show)

### Module 1: Geographic Radar - 3D WebGL Globe
Library: Globe.gl (lightweight, WebGL-based, perfect for hackathon)
What it shows:
- Interactive 3D Earth in dark mode
- Glowing port rings color-coded by congestion:
  - GREEN = < 1 day wait (Normal)
  - YELLOW = 1-3 days wait (Moderate)
  - RED = 3+ days wait (Severe)
- Live GPS pins for all major vessels at sea (from AISstream.io WebSocket)
- Animated shipping lanes showing active trade routes
- Click any port -> opens detail panel with full port metrics

### Module 2: Financial Penalty Risk Engine
What it shows:
- Total Cargo Value at Risk: ,450,000
- Active Accruing Demurrage Fines: ,200 / day
- Projected End-of-Week Penalty: ,000
- Alert card: "14 containers delayed >72h at LA Pier 400"
- Color-coded risk badges per port

### Module 3: AI Route Optimizer
What it does:
- User selects origin -> destination (e.g. Shanghai -> Los Angeles)
- System shows: current route risk level + days of delay
- AI-suggested alternative (e.g. "-> Port of Oakland, 1.2 day wait, saves 4 days & ,000")
- 1-click "Generate Diversion Notice" button

### Module 4: 7-Day Congestion Trends + AI Root Cause Advisory
What it shows:
- Time-series chart per port (dwell time trend over 7 days)
- AI-extracted plain-English root cause per alert:
  - "LA Pier 400: Labor shortage at rail ramp causing 48h turnaround delay (Scraped from Maersk advisory)"
  - "Rotterdam Euromax: Scheduled dredging Feb 14-18 causing 12h berth delays"
- Self-Healing Health Badge: "Scraper Studio Collector: 100% Operational (Auto-healed 2h ago)"

---

## Data Sources to Scrape

### Tier 1 - Global Ports (Bright Data Scraper Studio)
| Port | URL | Data to Extract |
|------|-----|-----------------|
| Port of Los Angeles | portoflosangeles.org | Container dwell time (0-4d, 5-8d, 9+d buckets), vessels at berth, rail dwell |
| Port of Long Beach | polb.com/operations | Terminal activity, container track-and-trace, TEU volumes |
| Port of Rotterdam | portofrotterdam.com | Anchorage/waiting times for seagoing vessels, berth turnaround |

### Tier 2 - Indian Ports (Bright Data Scraper Studio)
| Port | URL | Data to Extract |
|------|-----|-----------------|
| JNPT / Nhava Sheva | ldb.co.in (Logistics Data Bank) | Container dwell times, transit efficiency metrics |
| Mundra Port | adaniports.com/ports/mundra-port | Vessel berthing schedules, expected arrivals, departures |
| Chennai Port | ldb.co.in | Port dwell times |
| Sagar Setu | nlpmarine.gov.in | National Logistics Portal vessel & cargo tracking |

### Tier 3 - Carrier Advisories (Bright Data Scraper Studio)
| Carrier | URL | Data to Extract |
|---------|-----|-----------------|
| Maersk | maersk.com/news/advisories | Service disruption alerts, strike/weather/canal news |
| Hapag-Lloyd | hapag-lloyd.com | Fleet map advisories, port omissions |

### Tier 4 - Live Vessel GPS (Free WebSocket API - NO scraping needed)
| Source | URL | Method |
|--------|-----|--------|
| AISstream.io (RECOMMENDED) | aisstream.io | Free WebSocket stream, API key required, real-time lat/lng for all global vessels |
| VesselAPI (backup) | vesselapi.com | REST API, free tier |

---

## The Agentic Core - LangGraph Architecture

### State Schema
class PortPulseAgentState(TypedDict):
    messages: list           # Conversation history
    target_url: str          # Port authority URL to scrape
    user_intent: str         # e.g. "Track LA port dwell times hourly"
    docs_context: str        # Snippets from local docs/ research
    crafted_prompt: str      # Engineered prompt for bdata CLI
    collector_id: str        # Bright Data collector ID (e.g. "c_abc123")
    test_output: dict        # Preview data from test run
    health_status: str       # "healthy" | "degraded" | "healed" | "failed"
    schedule_cron: str       # e.g. "0 * * * *" for hourly

### Node 1: Intent & URL Extractor
- Input: User natural language prompt
- Output: target_url, user_intent, schedule_cron
- Logic: LLM extracts the specific port site, what data is needed, and how often

### Node 2: Docs Researcher Agent
- Tools used:
  - grep_docs(query, category) - searches local docs/ markdown files
  - read_doc_section(file_path, start_line, end_line) - reads targeted doc chunks
- Output: docs_context - relevant Bright Data API flags, worker types, best practices
- Why: Agent reads our offline Bright Data docs to know which worker type to use (browser vs request)

### Node 3: Scraper Studio Prompt Engineer
- Input: user_intent + docs_context
- Output: crafted_prompt - a high-density, schema-aware extraction prompt
- Example: "Extract from {url}: average_berth_wait_time_days (numeric), vessels_at_anchor (int), congestion_status (text). Return as JSON array. Use browser worker for dynamic charts."

### Node 4: CLI Deployer & Registration
- Action: Runs bdata scraper create <url> "<crafted_prompt>" --name "portpulse-la-dwell"
- Output: Captures collector_id from CLI stdout
- Saves: collector_id, target_url, schedule_cron to SQLite DB

### Node 5 (Async): Health Monitor & Self-Healing
- Triggers: Every time a scheduled scraper run completes
- Logic:
  1. Check returned JSON for null fields or 0-record responses
  2. If health_score < 50%: fire bdata scraper heal <collector_id>
  3. After heal: fire bdata scraper approve <collector_id>
  4. Log to healing_logs table with timestamp, reason, diff summary
- UI: Shows live "Self-Healing Event Log" feed in dashboard

---

## The bdata CLI Commands (Core Integration)

  npm install -g @brightdata/cli
  bdata login
  bdata scraper create "https://portoflosangeles.org/business/stats" "Extract: average_berth_wait_days, vessels_at_anchor, rail_dwell_hours, congestion_status" --name "portpulse-la-dwell-v1"
  bdata scraper run c_abc123def
  bdata scraper heal c_abc123def
  bdata scraper approve c_abc123def

---

## Database Schema (SQLite via SQLModel)

Table: port_scrapers
  id, name, port_name, target_url, collector_id (unique), schedule_cron, status, created_at

Table: port_data
  id, scraper_id, port_name, vessels_at_anchor, average_berth_wait_time_days, rail_container_dwell_hours, congestion_status, operational_advisory, scraped_at

Table: scraper_runs
  id, scraper_id, status (success/failed/healed), record_count, duration_ms, run_at

Table: healing_logs
  id, scraper_id, reason, health_score_before, heal_triggered_at, approved_at

---

## Backend API (FastAPI) - Endpoints to Build

  GET  /api/ports              - List all ports with latest congestion data
  GET  /api/ports/{port_id}    - Single port detail + 7-day trend
  GET  /api/vessels/live       - Proxy AISstream.io WebSocket data
  POST /api/scrapers/create    - Trigger agent to create new scraper
  POST /api/scrapers/{id}/run  - Manually trigger a scraper run
  POST /api/scrapers/{id}/heal - Manually trigger self-healing
  GET  /api/scrapers           - List all scrapers with health status
  GET  /api/healing-logs       - Recent self-healing events
  GET  /api/risk-engine        - Computed financial risk metrics
  SSE  /api/agent/stream       - Server-Sent Events for agent chat UI
  GET  /api/data/export        - Download scraped data as CSV/JSON

---

## Frontend UI - Glassmorphic Dark Dashboard (HTML + Vanilla CSS + JS)

Layout concept:
  Top bar: PortPulse logo, LIVE indicator, Export, Add Port
  Left half: Globe.gl 3D Earth (ships + port rings)
  Right half: Risk Engine cards, Route Optimizer, Congestion Charts
  Bottom: Port status card grid (LA / Rotterdam / JNPT / Singapore)
  Bottom row: AI Agent Chat panel | Self-Healing Event Log

JavaScript files needed:
  globe.js          - Globe.gl init, port pins + ship dots from AISstream.io
  risk-engine.js    - Financial penalty calculations from port dwell data
  route-optimizer.js - Dropdown origin/destination + AI recommendation
  congestion-chart.js - Chart.js 7-day trend per port
  port-cards.js     - Grid of port status cards with color-coded badges
  agent-chat.js     - SSE-based streaming chat with agent thought steps
  healing-log.js    - Live feed of self-healing events

---

## Python Dependencies (pyproject.toml)

  langgraph
  langchain-groq
  fastapi
  uvicorn
  sqlmodel
  apscheduler
  httpx
  websockets
  python-dotenv

## Environment Variables (.env)
  GROQ_API_KEY=gsk_...
  BRIGHTDATA_API_KEY=...
  AISSTREAM_API_KEY=...

---

## Demo Video Script (3 minutes - The Hero Moment)

[0:00-0:30] Open Dashboard
  - Show 3D globe with live ship dots and glowing port rings
  - Pan to congestion panel: "LA is at 4.8 days - SEVERE"
  - Show financial risk: "42 ships waiting globally,  cargo at risk"

[0:30-1:00] Agent Creates a New Scraper
  - Type in chat: "Track JNPT Nhava Sheva dwell times every 2 hours"
  - Show agent logs: Node 1 -> Node 2 (reading docs) -> Node 3 (crafting prompt) -> Node 4 (bdata scraper create)
  - Show new scraper appearing in registry with collector ID c_jnpt_001

[1:00-1:45] THE SELF-HEALING HERO MOMENT
  - Dashboard shows JNPT data flowing normally: "3.2 days wait, Moderate"
  - Simulate port website changing its HTML -> data returns null
  - System shows alert: "JNPT: berth_wait_time returned null. Health Score: 18%"
  - Agent auto-fires: bdata scraper heal c_jnpt_001 -> bdata scraper approve c_jnpt_001
  - Data resumes: JNPT card returns to green -> "0 downtime, repaired in 45 seconds"

[1:45-2:30] AI Route Optimizer
  - Select: Shanghai -> Port of Los Angeles
  - AI responds: "Divert to Port of Seattle. LA: 4.8 day wait. Seattle: 1.1 day wait. Saves 3.7 days and ~,000 in demurrage."

[2:30-3:00] India Focus
  - Show JNPT + Mundra data from LDB + Adani Ports
  - "Indian port data was impossible to scrape without breaking - Bright Data self-healing makes this reliable"

---

## File Structure

  app/
    agent/
      graph.py          LangGraph state machine
      nodes.py          Node 1-5 implementations
      state.py          PortPulseAgentState TypedDict
      prompts.py        System prompts for each node
    tools/
      doc_tools.py      grep_docs(), read_doc_section()
      cli_tools.py      bdata create/run/heal/approve subprocess wrappers
      ais_tools.py      AISstream.io WebSocket client
    db/
      database.py       SQLite connection & session
      models.py         SQLModel table definitions
    services/
      health_monitor.py Anomaly detection + healing trigger
      scheduler.py      APScheduler cron jobs
    api/
      main.py           FastAPI app + middleware
      routes.py         All API endpoints
    ports/
      jnpt.py           JNPT-specific scraper config (EMPTY - needs implementation)
      mundra.py
      los_angeles.py
  ui/
    index.html          Main dashboard
    app.js              Globe.gl + Chart.js + Agent chat
    style.css           Glassmorphic dark design

---

## Build Priority Order

PRIORITY 1 - Must Have (Hackathon Qualification)
  [ ] bdata CLI working (login + scraper create)
  [ ] LangGraph Node 1 (Intent Extractor) + Node 4 (CLI Deploy) - minimal working path
  [ ] SQLite DB with port_scrapers + port_data tables
  [ ] At least 1 working Bright Data scraper (JNPT via LDB or Port of LA)
  [ ] Self-healing: health check -> bdata scraper heal -> bdata scraper approve
  [ ] FastAPI serving data at /api/ports
  [ ] Basic dashboard showing port congestion cards

PRIORITY 2 - Strong Submission
  [ ] Globe.gl with port pins + live AISstream.io ship dots
  [ ] 3 port scrapers running (LA + Rotterdam + JNPT)
  [ ] Maersk advisory scraper (for root cause AI extraction via Groq)
  [ ] Financial risk engine calculations
  [ ] Agent chat panel with SSE streaming

PRIORITY 3 - Win the Grand Prize
  [ ] AI Route Optimizer (Groq LLM decision)
  [ ] 7-day trend charts per port (Chart.js)
  [ ] Self-healing event log in the UI
  [ ] CSV/JSON data export
  [ ] Indian port data (LDB + Adani Ports Mundra)
  [ ] Polished glassmorphic dark UI
