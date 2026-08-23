-- ==========================================================
-- PortPulse Schema V2 Updates (Supabase / PostgreSQL)
-- ==========================================================

-- 1. PDF Vessel Logs Table (Extracted from terminal PDF reports via OCR)
CREATE TABLE IF NOT EXISTS pdf_vessel_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    port_id UUID REFERENCES ports(id) ON DELETE CASCADE,
    scraper_id UUID REFERENCES scrapers(id) ON DELETE CASCADE,
    terminal_name TEXT,
    pdf_url TEXT,
    extracted_at TIMESTAMPTZ DEFAULT NOW(),
    extraction_stage INTEGER DEFAULT 1,  -- 1=pdfplumber, 2=GPT-4o Vision
    health_score NUMERIC DEFAULT 0.0,
    vessel_name TEXT,
    via_number TEXT,
    loa NUMERIC,
    berth_number TEXT,
    berthing_side TEXT,
    alongside_date TEXT,
    alongside_time TEXT,
    ops_commenced TEXT,
    ops_completed TEXT,
    imp_bal INTEGER,
    exp_bal INTEGER,
    max_draft NUMERIC,
    status TEXT,
    raw_payload JSONB
);

CREATE INDEX IF NOT EXISTS idx_pdf_vessel_logs_scraper_id ON pdf_vessel_logs(scraper_id);
CREATE INDEX IF NOT EXISTS idx_pdf_vessel_logs_port_id ON pdf_vessel_logs(port_id);
CREATE INDEX IF NOT EXISTS idx_pdf_vessel_logs_extracted_at ON pdf_vessel_logs(extracted_at DESC);

-- 2. Port Intelligence Summaries (AI-generated per scraper run)
CREATE TABLE IF NOT EXISTS port_summaries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    port_id UUID REFERENCES ports(id) ON DELETE CASCADE,
    scraper_id UUID REFERENCES scrapers(id) ON DELETE CASCADE,
    summary_text TEXT NOT NULL,
    vessel_count INTEGER DEFAULT 0,
    pdf_record_count INTEGER DEFAULT 0,
    generated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_port_summaries_port_id ON port_summaries(port_id);
CREATE INDEX IF NOT EXISTS idx_port_summaries_scraper_id ON port_summaries(scraper_id);
CREATE INDEX IF NOT EXISTS idx_port_summaries_generated_at ON port_summaries(generated_at DESC);
