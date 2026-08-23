# 🌊 PortPulse: Autonomous Self-Healing Maritime Intelligence

> **Built for the WeMakeDevs × Bright Data Hackathon: "Into the Scrape-Verse"**  
> *Turning messy, fragmented global port data into real-time, clean maritime intelligence using Bright Data Scraper Studio, an autonomous LangGraph self-healing engine, and an interactive 3D geospatial dashboard.*

[![Live Demo](https://img.shields.io/badge/Live_Demo-portpulse--production.up.railway.app-blueviolet?style=for-the-badge&logo=railway)](https://portpulse-production.up.railway.app)
[![Bright Data](https://img.shields.io/badge/Scraper_Studio-Bright_Data-blue?style=for-the-badge&logo=databricks)](https://brightdata.com)
[![LangGraph](https://img.shields.io/badge/Self--Healing-LangGraph-orange?style=for-the-badge)](https://langchain.com)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Three.js](https://img.shields.io/badge/3D_Globe-Three.js-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![Supabase](https://img.shields.io/badge/Database-Supabase_PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)

🔗 **Live Deployment:** [https://portpulse-production.up.railway.app](https://portpulse-production.up.railway.app)

---

## 💡 The Problem & Why We Built This

Ever tried tracking commercial cargo ships across different global ports? It is honestly chaotic.

Global trade relies completely on maritime shipping, but every major port does whatever it wants with its data. Some use dynamic React/Angular single-page apps, others publish outdated HTML tables, and some literally dump daily berthing manifests into PDFs on obscure government servers. 

To make matters worse, as soon as a port updates their website layout or CSS classes, traditional web scrapers break instantly without anyone noticing until cargo sits delayed.

We built **PortPulse** to fix this entire pipeline from end to end:
1. **Scrape live port telemetry reliably** using custom **Bright Data Scraper Studio Collectors**.
2. **Auto-heal broken scrapers** using a **LangGraph agentic state machine** that diagnoses DOM shifts and rewrites extraction prompts without human intervention.
3. **Parse unstructured PDF gate manifests** using multimodal vision & OCR pipelines.
4. **Display everything in an interactive 3D Command Center** with live vessel logs, AI situation reports, and an AI maritime copilot.

---

## 🏗️ Architecture & How It Works

We built PortPulse with a strict **Open-Closed Principle (OCP)** architecture — **open for extension, closed for modification**. 

Here is how data flows through the entire system:

```mermaid
flowchart TD
    subgraph INGESTION["1. Data Ingestion"]
        BD["🌐 Bright Data Scraper Studio<br/><b>Custom Scraper Collectors</b>"]
    end

    subgraph VALIDATION["2. Deterministic Quality Gate"]
        BD -->|Live Web Telemetry| PYD["🛡️ Pydantic Health Contract<br/><code>StrictVesselRecord</code> Validation"]
        PYD --> CHK{"Health Score<br/>&ge; 80%?"}
    end

    subgraph PERSISTENCE["3. Ingestion & Command Center"]
        CHK -->|✅ Healthy| SB[("🗄️ Supabase PostgreSQL<br/><code>vessel_logs</code> & <code>port_summaries</code>")]
        SB --> API["⚡ FastAPI Async Engine<br/><i>(REST Endpoints & Dynamic Routing)</i>"]
        API --> UI["🌍 3D Maritime Command Center<br/><i>(React 18 + Three.js + Globe.gl)</i>"]
    end

    subgraph HEALING["4. Autonomous Agentic Self-Healing"]
        CHK -->|❌ Broken DOM / Zero Records| LG["🤖 LangGraph Self-Healing Agent"]
        LG --> D1["1. Inspect Failed Payload & Golden Records"]
        D1 --> D2["2. Plain-Language Prompt Re-Synthesis"]
        D2 --> D3["3. Patch Collector via Bright Data API"]
        D3 --> D4["4. Retest & Quarantine Approval Gate"]
        D4 -.->|Patched Scraper Re-run| BD
    end

    classDef default fill:#0f172a,stroke:#38bdf8,stroke-width:1.5px,color:#f8fafc;
    classDef success fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#f8fafc;
    classDef healing fill:#451a03,stroke:#fb923c,stroke-width:2px,color:#f8fafc;
    classDef check fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#f8fafc;

    class BD,API,UI default;
    class SB success;
    class CHK check;
    class LG,D1,D2,D3,D4 healing;
```

---

## ⚡ Super Easy to Extend: Add a New Port in 30 Seconds!

Because of our modular port registry, adding a new seaport takes literally **one Python file** without touching the core scraper engine, database code, or frontend UI:

```python
# app/ports/rotterdam.py
from app.ports.base import BasePortScraper, PortMetadata, VesselRecord

class RotterdamScraper(BasePortScraper):
    @property
    def metadata(self) -> PortMetadata:
        return PortMetadata(
            port_id="nl_rotterdam",
            name="Port of Rotterdam",
            unlocode="NLRTM",
            collector_id="c_custom_rotterdam_collector",
            target_url="https://www.portofrotterdam.com/en/shipping",
            schedule_cron="*/30 * * * *"
        )

    def parse_raw_data(self, raw_items):
        return [VesselRecord(...) for item in raw_items]

# app/ports/registry.py
port_registry.register(RotterdamScraper())
```

Once you register the scraper:
- 🕒 APScheduler automatically schedules the cron jobs.
- 🛡️ Pydantic validates incoming vessel schema & assigns a health score.
- 🚀 REST endpoints like `/port/rotterdam/vessels` and `/port/rotterdam/summary` go live instantly.
- 🌐 The port automatically appears on the 3D globe and frontend selector with full telemetry!

---

## 🛰️ Active Bright Data Scraper Studio Collectors

We built and verified custom scrapers in **Bright Data Scraper Studio** to extract live shipping manifests:

| Port Name | UN/LOCODE | Region | Bright Data Collector ID | Target Portal |
|---|---|---|---|---|
| **JNPA (Nhava Sheva)** | `INNSA` | India (Maharashtra) | `c_mszumjcx12i1k1ydb8` | JNPA Live Berthing Portal |
| **Mundra Port** | `INMUN` | India (Gujarat) | `c_mt03ofjt15cu3ojzx6` | APSEZ Schedule Hub |
| **Port of Felixstowe** | `GBFXT` | United Kingdom (Suffolk) | `c_mt60nosg1yqb8hzqks` | Ocean Live Shipping Marine Portal |

---

## 🤖 The Autonomous Self-Healing Magic

What happens when a port changes its webpage layout?

1. **Quality Check**: Every scrape gets validated against strict Pydantic rules. We calculate an exact **Health Score (0–100%)** based on required fields (`vessel_name`, `terminal_name`, `berth_number`, timestamps).
2. **Auto-Trigger**: If the health score drops below **80%** or returns zero records, the scraper is flagged and handed over to our **LangGraph Agent**.
3. **Diagnosis**: LangGraph compares the broken output against historical "Golden Records" to figure out which CSS selectors or table layouts changed.
4. **Prompt Synthesis & Patch**: The agent generates an updated extraction prompt and patches the scraper via the **Bright Data API**.
5. **Retest & Deploy**: If the patched collector recovers above 80% health on retest, it gets automatically promoted back to production. Otherwise, it safely isolates into quarantine with an audit log in Supabase.

---

## 🖥️ The Dashboard: 3D Maritime Command Center

We wanted the UI to look and feel like a modern aerospace/maritime operations center:

- 🌍 **Interactive 3D Globe**: Rendered in Three.js and Globe.gl showing real-time port coordinates, beacon pulses, and active vessel counts.
- 🚢 **Live Vessel Manifest**: Search and filter ships by *At Berth*, *Anchorage*, and *Expected Arrival*, complete with LOA, Gross Tonnage, and agent details.
- 📑 **Multimodal PDF Agent**: Extracts structured logs directly from official port authority PDF bulletins and daily reports.
- 📊 **AI Situation Reports**: Synthesizes terminal congestion, estimated turnaround delays, and berthing density using LLM reasoning.
- 💬 **PortPulse Copilot (RAG Chat)**: A smart maritime chatbot grounded in live Supabase telemetry to answer operational queries (e.g. *"What container vessels are currently docked at Felixstowe Berths 8&9?"*).

---

## 📦 Sample Structured Output (JSON)

Here is what our normalized pipeline produces from messy port websites:

```json
[
  {
    "vessel_name": "OOCL WISDOM",
    "terminal_name": "Berths 8&9",
    "berth_number": "Berths 8&9",
    "via_number": null,
    "commodity": "Containers (TEU)",
    "berthed_at": "2026-08-19T19:19:00Z",
    "expected_completion_at": "2026-08-23T19:45:00Z",
    "terminal_report_pdf_url": "https://www.portoffelixstowe.co.uk/company-information/marine/",
    "raw_payload": {
      "nationality": "Hong Kong",
      "gross_tonnage": "234,361",
      "overall_length": "400m",
      "last_port": "Singapore",
      "next_port": "Zeebrugge",
      "ships_agent": "OOCL"
    }
  }
]
```

---

## 🛠️ Tech Stack

- **Scraping & Data Extraction**: [Bright Data Scraper Studio](https://brightdata.com), Bright Data CLI (`bdata`), Web Unlocker
- **Agentic AI & Healing**: [LangGraph](https://github.com/langchain-ai/langgraph), [LangChain](https://github.com/langchain-ai/langchain), OpenAI GPT-4o, Pydantic v2
- **Backend**: FastAPI, Astral `uv`, Supabase (PostgreSQL), APScheduler, HTTPX, PyPDF
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Three.js, Globe.gl, Lucide Icons, Framer Motion, Zustand
- **Deployment**: Railway (Multi-stage Docker with `uv` + Node builder)

---

## 🚀 Running Locally

### 1. Backend Setup
```bash
# Clone the repository
git clone https://github.com/poojan-solanki/PortPulse.git
cd PortPulse

# Install dependencies using Astral uv (or pip)
uv sync # or pip install -r requirements.txt

# Create your .env file
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
BRIGHTDATA_API_TOKEN=your_brightdata_token

# Start FastAPI server & cron engine
python main.py
```
*Backend runs locally at `http://localhost:8000` (Swagger docs at `http://localhost:8000/docs`).*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs locally at `http://localhost:5173`.*

---

## 🏆 Hackathon Tracks Targeted

- 🥇 **Web-Slinger Track (Grand Prize)**: Deep integration of Bright Data Scraper Studio collectors, autonomous LangGraph self-healing, and end-to-end maritime intelligence pipeline.
- 🎨 **Suit-Up Track (Best UI)**: Sleek, responsive dark-mode command center featuring an interactive 3D Three.js globe, glassmorphic styling, and AI situation insights.
- 🧠 **Spider-Sense Track (Best Clean Code)**: Open-Closed SOLID architecture, modular port registry pattern, strict Pydantic validation contracts, and clean TypeScript state management.

---

⭐ **Built with passion for the WeMakeDevs × Bright Data Hackathon!**
