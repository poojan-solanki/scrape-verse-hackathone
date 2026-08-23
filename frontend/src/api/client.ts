import { ChatMessage, ChatResponse, PDFVesselRecord, Port, PortSummary, VesselRecord } from "../types";

const BASE_URL = "";

export const DEFAULT_PORTS: Port[] = [
  {
    id: "3be5c768-cfd4-4456-96d5-ee7f64c54b0b",
    name: "JNPA (Nhava Sheva)",
    full_name: "Jawaharlal Nehru Port Authority (JNPA)",
    unlocode: "INNSA",
    country: "India",
    state: "Maharashtra",
    latitude: 18.9500,
    longitude: 72.9500,
    website_url: "https://www.jnport.gov.in",
    operator_type: "Port Authority (Trust)",
    status: "active",
  },
  {
    id: "aa346ff1-8c7e-4a8c-9ad4-445295852f8d",
    name: "Mundra Port (APSEZ)",
    full_name: "Adani Ports and Special Economic Zone",
    unlocode: "INMUN",
    country: "India",
    state: "Gujarat",
    latitude: 22.7400,
    longitude: 69.7000,
    website_url: "https://www.adaniports.com",
    operator_type: "Private (APSEZ)",
    status: "active",
  },
  {
    id: "edc8c940-2fa3-4c7f-ada4-eab570dc7977",
    name: "Port of Felixstowe",
    full_name: "Port of Felixstowe (Hutchison Ports UK)",
    unlocode: "GBFXT",
    country: "United Kingdom",
    state: "Suffolk",
    latitude: 51.9566,
    longitude: 1.3060,
    website_url: "https://www.portoffelixstowe.co.uk",
    operator_type: "Hutchison Ports UK",
    status: "active",
  },
];

export async function fetchPorts(): Promise<Port[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/ports`);
    if (!res.ok) throw new Error("Failed to fetch ports");
    const data = await res.json();
    const list = Array.isArray(data) ? data : data.ports || [];
    return list.length > 0 ? list : DEFAULT_PORTS;
  } catch (err) {
    console.warn("Using fallback port registry:", err);
    return DEFAULT_PORTS;
  }
}

export async function fetchPortVessels(slug: string): Promise<{
  port: string;
  unlocode: string;
  last_scraped_at: string | null;
  total_vessels: number;
  vessels: VesselRecord[];
}> {
  const res = await fetch(`${BASE_URL}/port/${slug}/vessels`);
  if (!res.ok) {
    // Try api/ports route
    const fallback = await fetch(`${BASE_URL}/api/ports/${slug}/vessels`);
    if (!fallback.ok) throw new Error(`Failed to fetch vessels for ${slug}`);
    return fallback.json();
  }
  return res.json();
}

export async function fetchPortSummary(slug: string): Promise<{
  port_slug: string;
  port_name: string;
  summary: PortSummary | null;
}> {
  const res = await fetch(`${BASE_URL}/port/${slug}/summary`);
  if (!res.ok) throw new Error(`Failed to fetch summary for ${slug}`);
  return res.json();
}

export async function fetchPDFIntelligence(slug: string): Promise<{
  port_slug: string;
  total: number;
  extracted_at?: string;
  records: PDFVesselRecord[];
}> {
  const res = await fetch(`${BASE_URL}/port/${slug}/pdf-intelligence`);
  if (!res.ok) throw new Error(`Failed to fetch PDF intelligence for ${slug}`);
  return res.json();
}

export async function sendChatMessage(
  message: string,
  history: ChatMessage[]
): Promise<ChatResponse> {
  const res = await fetch(`${BASE_URL}/chat/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      history: history.map((h) => ({ role: h.role, content: h.content })),
    }),
  });
  if (!res.ok) throw new Error("Failed to communicate with PortPulse Copilot");
  return res.json();
}

export async function triggerLiveScraper(portId: string): Promise<{
  status: string;
  records_extracted: number;
  health_score: number;
  message?: string;
}> {
  const res = await fetch(`${BASE_URL}/scrapers/${portId}/run`, {
    method: "POST",
  });
  if (!res.ok) throw new Error(`Scraper execution failed for ${portId}`);
  return res.json();
}

export async function fetchSystemHealth(): Promise<Record<string, any>> {
  const res = await fetch(`${BASE_URL}/health`);
  if (!res.ok) return { status: "offline" };
  return res.json();
}
