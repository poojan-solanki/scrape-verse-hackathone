export interface Port {
  id: string;
  name: string;
  full_name?: string;
  unlocode: string;
  country: string;
  state?: string;
  latitude: number;
  longitude: number;
  website_url?: string;
  operator_type?: string;
  status?: string;
}

export interface VesselRecord {
  id?: string;
  vessel_name: string;
  berth_number?: string | null;
  terminal_name?: string | null;
  commodity?: string | null;
  berthed_at?: string | null;
  expected_completion_at?: string | null;
  scraped_at?: string | null;
  terminal_report_pdf_url?: string | null;
  loa?: number | null;
  draft?: number | null;
  status?: "BERTH" | "ANCHORAGE" | "EXPECTED" | "SAILED";
}

export interface PDFVesselRecord {
  id?: string;
  port_id?: string;
  terminal_name: string;
  vessel_name: string;
  via_number?: string | null;
  loa?: number | null;
  berth_number?: string | null;
  berthing_side?: string | null;
  alongside_date?: string | null;
  alongside_time?: string | null;
  ops_commenced?: string | null;
  ops_completed?: string | null;
  imp_bal?: number | null;
  exp_bal?: number | null;
  max_draft?: number | null;
  status?: string;
  pdf_url?: string | null;
  extracted_at?: string;
}

export interface PortSummary {
  id?: string;
  port_id?: string;
  summary_text: string;
  vessel_count: number;
  pdf_record_count: number;
  generated_at: string;
}

export interface ScraperStatus {
  id: string;
  collector_id?: string;
  name: string;
  health_status: "healthy" | "degraded" | "failing";
  health_score: number;
  last_run_at?: string;
  last_success_at?: string;
}

export interface MCPToolCall {
  server: string;
  tool: string;
  args?: Record<string, any>;
  status?: string;
}

export interface ChatMessage {
  id?: string;
  role: "user" | "assistant";
  content: string;
  tools_called?: MCPToolCall[];
  timestamp?: string;
}

export interface ChatResponse {
  reply: string;
  history: { role: string; content: string }[];
  tools_called: MCPToolCall[];
}
