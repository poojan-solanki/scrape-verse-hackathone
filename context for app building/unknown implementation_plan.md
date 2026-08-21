# PortPulse Dashboard Implementation Plan

This plan outlines the architecture and steps required to build PortPulse, a comprehensive web dashboard for monitoring port congestion (starting with JNPT), featuring an interactive map, a chatbot, and a self-healing data pipeline powered by Bright Data.

## Goal
To build a premium web application where users can visualize live port congestion on a map and interact with an intelligent chatbot to query real-time port metrics (e.g., yard fullness, rail backlog, vessel wait times).

## User Review Required
> [!IMPORTANT]
> Please review the chosen tech stack below. If you prefer a different frontend framework (e.g., Vite instead of Next.js) or a specific styling library (e.g., Tailwind CSS instead of vanilla CSS as per aesthetics guidelines), please let me know.

## Open Questions
> [!WARNING]
> 1. **Chatbot LLM**: Do you have a preferred LLM API (e.g., OpenAI, Anthropic, Gemini) we should use for the chatbot's brain? 
> 2. **Map Provider**: We plan to use Leaflet for the interactive map since it's open-source and easy to integrate. Does this work for you?
> 3. **Design Aesthetics**: Do you prefer a dark mode or light mode theme for the dashboard?

## Proposed Architecture & Changes

---

### 1. Data Ingestion Pipeline (The Scraper)
The backend pipeline will be responsible for extracting and storing data.
- **Bright Data Scraper Studio**: We will configure a scraper to extract the HTML berthing table and PDF report URLs from JNPT. This fulfills the hackathon's "self-healing" requirement.
- **Python Processor (`scraper_pipeline.py`)**: A script to trigger the Bright Data scraper, download the PDFs, use `PyMuPDF` to parse the operational metrics, and save them into the database.
- **Database (`portpulse.db`)**: SQLite database to store:
  - `Vessels` (Name, Voyage, Arrival, Berthing Time)
  - `PortMetrics` (Yard TEUs, Rail Pendency, Congestion Score)

#### [NEW] `backend/pipeline.py`
#### [NEW] `backend/database.py`

---

### 2. Backend API (FastAPI)
A lightweight Python API to serve data to the frontend and handle chatbot queries.
- **Endpoints**:
  - `GET /api/ports`: Returns location and congestion score for the map.
  - `GET /api/vessels`: Returns the list of currently berthed vessels.
  - `POST /api/chat`: Receives user messages from the frontend chatbot, queries the SQLite DB using an LLM, and returns the response.

#### [NEW] `backend/main.py`
#### [NEW] `backend/chatbot.py`

---

### 3. Frontend Web Application (Next.js)
A modern, rich web interface built with React (Next.js).
- **Styling**: Premium, sleek dark mode design using Vanilla CSS (or Tailwind if requested) with glassmorphism and smooth micro-animations.
- **Map Component**: Interactive Leaflet map showing port locations. Clicking a port shows its metrics and docked vessels.
- **Chatbot Component**: A slide-out or floating chat interface to "Talk to PortPulse".
- **Metrics Dashboard**: Visual cards showing key stats (Yard Capacity, Rail Backlog).

#### [NEW] `frontend/package.json`
#### [NEW] `frontend/app/page.tsx`
#### [NEW] `frontend/app/components/Map.tsx`
#### [NEW] `frontend/app/components/Chatbot.tsx`
#### [NEW] `frontend/app/globals.css`

## Verification Plan

### Automated Tests
- Run Python unit tests to ensure the PDF extraction parses the correct numbers.
- Verify the FastAPI endpoints return the correct JSON structure.

### Manual Verification
- Start the Next.js development server and verify the map loads correctly.
- Test the chatbot by asking "What is the current yard inventory at JNPT?" and ensuring it returns the live data from the SQLite DB.
- Ensure the Bright Data Scraper Studio pipeline successfully triggers and updates the database.
