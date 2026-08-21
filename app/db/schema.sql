-- ==========================================================
-- PortPulse Database Schema (Supabase / PostgreSQL)
-- ==========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Ports Master Table
CREATE TABLE IF NOT EXISTS ports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    full_name TEXT,
    unlocode TEXT UNIQUE,
    country TEXT DEFAULT 'India',
    state TEXT,
    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),
    website_url TEXT,
    operator_type TEXT DEFAULT 'government',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Scrapers Registry Table (Bright Data Collector Mapping)
CREATE TABLE IF NOT EXISTS scrapers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    port_id UUID REFERENCES ports(id) ON DELETE CASCADE,
    collector_id TEXT UNIQUE,
    name TEXT NOT NULL,
    target_url TEXT NOT NULL,
    data_category TEXT NOT NULL DEFAULT 'vessel_berthing',
    schedule_cron TEXT DEFAULT '0 */4 * * *',
    health_status TEXT DEFAULT 'healthy',
    health_score NUMERIC DEFAULT 100.0,
    last_run_at TIMESTAMPTZ,
    last_success_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Vessel Berthing Logs Table
CREATE TABLE IF NOT EXISTS vessel_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    port_id UUID REFERENCES ports(id) ON DELETE CASCADE,
    scraper_id UUID REFERENCES scrapers(id) ON DELETE SET NULL,
    vessel_name TEXT NOT NULL,
    terminal_name TEXT,
    berth_number TEXT,
    via_number TEXT,
    commodity TEXT,
    berthed_at TIMESTAMPTZ,
    expected_completion_at TIMESTAMPTZ,
    actual_completion_at TIMESTAMPTZ,
    berth_duration_hours NUMERIC,
    terminal_report_pdf_url TEXT,
    raw_payload JSONB,
    scraped_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Scraper Self-Healing & Event Logs Table
CREATE TABLE IF NOT EXISTS scraper_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scraper_id UUID REFERENCES scrapers(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL,
    health_score_before NUMERIC,
    records_received INTEGER DEFAULT 0,
    null_fields TEXT[],
    details JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Indexes for Fast Queries
CREATE INDEX IF NOT EXISTS idx_vessel_logs_port_id ON vessel_logs(port_id);
CREATE INDEX IF NOT EXISTS idx_vessel_logs_scraped_at ON vessel_logs(scraped_at DESC);
CREATE INDEX IF NOT EXISTS idx_scrapers_port_id ON scrapers(port_id);
CREATE INDEX IF NOT EXISTS idx_scraper_events_scraper_id ON scraper_events(scraper_id);
CREATE INDEX IF NOT EXISTS idx_scraper_events_created_at ON scraper_events(created_at DESC);
