# 🚢 PortPulse Master Task List

- `[x]` **Phase 1: Environment & Foundation Setup** 🏗️
  - `[x]` Setup Python environment & dependencies (`fastapi`, `supabase`, `pydantic`, `httpx`).
  - `[x]` Initialize Supabase database tables (`ports`, `scrapers`, `vessel_logs`, `scraper_events`).
  - `[x]` Seed the 7 master Indian ports into the `ports` table.
  - `[x]` Build `app/ports/base.py` (Universal schema and Base interface).
  - `[x]` Build `app/ports/registry.py` (Dynamic port discovery & registry).
  - `[x]` Create dynamic API router discovery in `main.py` and `app/apis/routes.py`.
  - `[x]` Build global `GET /port-list` API endpoint returning all ports and health status.

- `[/]` **Phase 2: Port Scrapers & Ingestion APIs** ⚓
  - `[x]` **Port 1: JNPT (Nhava Sheva)**
    - `[x]` Write Bright Data interaction & parser code for all 8 terminals.
    - `[x]` Ingest JNPT data into Supabase `vessel_logs`.
    - `[x]` Build dedicated API `GET /port/jnpt`.
  - `[x]` **Port 2: Mundra Port (APSEZ)**
    - `[x]` Write Bright Data interaction & parser code for all tables (Berthed, Anchorage, Expected, Sailed).
    - `[x]` Ingest 100+ Mundra records into Supabase `vessel_logs`.
    - `[x]` Build dedicated API `GET /port/mundra` with summary aggregations.
  - `[ ]` **Port 3: Deendayal Port (Kandla)**
    - `[ ]` Write Bright Data scraper (`deendayalport.gov.in`).
    - `[ ]` Ingest data and build `GET /port/kandla`.
  - `[ ]` **Port 4: Chennai Port**
    - `[ ]` Write Bright Data scraper & build API.
  - `[ ]` **Port 5: Kamarajar Port (Ennore)**
    - `[ ]` Write Bright Data scraper & build API.
  - `[ ]` **Port 6: Visakhapatnam Port (Vizag)**
    - `[ ]` Write Bright Data scraper & build API.
  - `[ ]` **Port 7: Cochin Port (Vallarpadam ICTT)**
    - `[ ]` Write Bright Data scraper & build API.

- `[ ]` **Phase 3: Automated Scraper Engine & Scheduler** ⚙️
  - `[ ]` Setup background scheduler (`APScheduler` or similar) to run scrapers every 1-4 hours automatically.
  - `[ ]` Implement health monitor (Anomaly detection and self-healing trigger logs).

- `[ ]` **Phase 4: Interactive Dashboard UI** 🎨 (Suit-Up Track)
  - `[ ]` Create Glassmorphic Dark Dashboard layout (`ui/index.html` + `ui/style.css`).
  - `[ ]` Implement Port Selection Grid mapping to `/port-list` API.
  - `[ ]` Implement interactive Live Berthing Tables mapping to individual port APIs.
  - `[ ]` Add 1-Click CSV/JSON Data Export functionality for the hackathon requirement.

- `[ ]` **Phase 5: Intelligence Chatbot & PDF OCR** 🤖 *(Parked for later)*
  - `[ ]` Create `port_documents` Supabase table.
  - `[ ]` Build PDF extractor using `pdfplumber` for official tariff and berthing reports.
  - `[ ]` Connect Groq LLM Agent to query live DB and PDF documents via `POST /api/chat`.
