// =========================================================================
// PortPulse — National Maritime Vessel Traffic & Berthing Intelligence
// =========================================================================

let allPorts = [];
let currentPort = null;
let currentPortSlug = "jnpt";
let currentPortData = null;
let currentTab = "all";
let globeWorld = null;

// Official Terminal PDF Direct Links for JNPA Terminals
const jnpaTerminalPdfs = [
  { name: "BMCT Report", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/17/Berthing_Sheet_20_AUG_2026.pdf" },
  { name: "APMT Mumbai", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/16/APMT_Berthing_Report_-_20-Aug-2026.pdf" },
  { name: "NSFT Terminal", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/15/Daily_Berthing_Report_20_8_2026.pdf" },
  { name: "NSICT Report", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/13/BERTHING_CT.pdf" },
  { name: "NSIGT Report", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/14/BERTHING_GT.pdf" },
  { name: "BPCL Liquid", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/18/Daily_Report_20_Aug_26.pdf" },
  { name: "NSDT Bulk", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/19/Bulk_Terminal_Daily_Report_AUG_19_08_2026.pdf" },
];

document.addEventListener("DOMContentLoaded", () => {
  initGlobe();
  loadPortList();
  loadHealingEvents();
  setupEventListeners();
  if (window.lucide) window.lucide.createIcons();
});

// =========================================================================
// 1. 3D WEBGL GLOBE INITIALIZATION (FULL-SCREEN VIEWPORT)
// =========================================================================
function initGlobe() {
  const container = document.getElementById("globeViz");
  if (!container || typeof Globe === "undefined") return;

  globeWorld = Globe()(container)
    .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
    .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundColor("#020617") // Deep Slate 950
    .atmosphereColor("#00f2fe")
    .atmosphereAltitude(0.20)
    .showAtmosphere(true)
    
    // Crisp 2D Circular Dots / Points on Earth Surface (NO 3D cylinders)
    .pointLat(d => parseFloat(d.latitude))
    .pointLng(d => parseFloat(d.longitude))
    .pointColor(() => "#00f2fe")
    .pointAltitude(0.01)       // Flat point on earth surface
    .pointRadius(0.35)         // Small crisp circular point marker
    .pointResolution(32)
    
    // Pulsing Radar Rings on the water surface at each port location
    .ringLat(d => parseFloat(d.latitude))
    .ringLng(d => parseFloat(d.longitude))
    .ringColor(() => (t) => `rgba(0, 242, 254, ${Math.max(0, 1 - t)})`)
    .ringMaxRadius(2.2)
    .ringPropagationSpeed(1.2)
    .ringRepeatPeriod(900)
    
    // Custom Rich Hover Popup on Port Coordinates
    .pointLabel(d => createPortTooltipHtml(d))
    
    // On Click: Smooth Zoom Camera & Open Slide-Over Side Panel
    .onPointClick(port => {
      openPortSidePanel(port);
    });

  // Position camera centered over Indian Subcontinent & Arabian Sea
  globeWorld.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2.1 }, 1200);

  // Smooth gentle auto-rotation
  globeWorld.controls().autoRotate = true;
  globeWorld.controls().autoRotateSpeed = 0.35;
  
  // Resize handler
  window.addEventListener("resize", () => {
    if (globeWorld) {
      globeWorld.width(window.innerWidth);
      globeWorld.height(window.innerHeight);
    }
  });
}

// =========================================================================
// 2. CUSTOM HOVER TOOLTIP HTML BUILDER
// =========================================================================
function createPortTooltipHtml(port) {
  const opType = port.operator_type || "Port Authority";
  const state = port.state || "India";
  const country = port.country || "India";
  const fullName = port.full_name || port.name;
  const website = port.website_url || "#";
  const displayUrl = website.replace(/^https?:\/\/(www\.)?/, "");

  return `
    <div class="port-tooltip-card">
      <div class="flex items-center justify-between gap-2">
        <h4 class="text-base font-bold text-white tracking-wide">${port.name}</h4>
        <span class="px-2 py-0.5 text-xs font-mono font-bold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">${port.unlocode || 'IND'}</span>
      </div>
      
      <div class="text-[11px] text-slate-400 font-medium capitalize mt-0.5">
        ${opType} • ${state}, ${country}
      </div>

      <div class="text-xs text-slate-200 mt-2.5 pt-2 border-t border-slate-700/60">
        <span class="text-slate-400 text-[10px] uppercase font-semibold block mb-0.5">Port Authority / Agency</span>
        <span class="text-slate-100 font-medium">${fullName}</span>
      </div>

      ${website !== '#' ? `
      <div class="mt-2 pt-2 border-t border-slate-700/60 flex items-center gap-1.5 text-xs">
        <span class="text-slate-400 text-[10px] uppercase font-semibold shrink-0">Official Portal:</span>
        <a href="${website}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-200 underline font-medium truncate" onclick="event.stopPropagation()">
          ${displayUrl} ↗
        </a>
      </div>` : ''}

      <div class="mt-2.5 pt-1.5 text-[10px] text-cyan-400/80 font-mono text-right flex items-center justify-end gap-1">
        <span>⚡ Click point to open berthing manifest</span>
      </div>
    </div>
  `;
}

// =========================================================================
// 3. LOAD MASTER PORT LIST FROM API
// =========================================================================
async function loadPortList() {
  try {
    const res = await fetch("/port-list");
    const data = await res.json();
    allPorts = data.ports || [];

    // Filter ports with valid coordinates and bind to Globe (points & radar rings)
    const validCoordPorts = allPorts.filter(p => p.latitude && p.longitude);
    if (globeWorld && validCoordPorts.length > 0) {
      globeWorld.pointsData(validCoordPorts);
      globeWorld.ringsData(validCoordPorts);
    }

    renderQuickPortSwitcher(allPorts);
  } catch (err) {
    console.error("Failed to load ports from /port-list:", err);
  }
}

// Render quick switcher pills in the top navbar
function renderQuickPortSwitcher(ports) {
  const container = document.getElementById("quickPortSwitcher");
  if (!container) return;

  container.innerHTML = ports.map(p => {
    const slug = getPortSlug(p);
    return `
      <button class="port-pill px-2.5 py-1 rounded-lg text-xs font-semibold transition-all text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-1"
              id="pill-${p.unlocode}"
              onclick="onQuickPortClick('${p.id}')">
        <span>${p.name.split(' ')[0]}</span>
        <span class="text-[10px] font-mono text-cyan-400/70">(${p.unlocode})</span>
      </button>
    `;
  }).join("");
}

function onQuickPortClick(portId) {
  const port = allPorts.find(p => p.id === portId);
  if (port) {
    openPortSidePanel(port);
  }
}

function getPortSlug(port) {
  if (port.unlocode === "INNSA") return "jnpt";
  if (port.unlocode === "INMUN") return "mundra";
  if (port.unlocode === "INKAN" || port.unlocode === "INIXY") return "kandla";
  return port.name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// =========================================================================
// 4. OPEN SLIDE-OVER SIDE PANEL & ZOOM TO PORT COORDINATE
// =========================================================================
async function openPortSidePanel(port) {
  currentPort = port;
  currentPortSlug = getPortSlug(port);

  // 1. Zoom 3D Globe camera smoothly to the coordinate
  if (globeWorld && port.latitude && port.longitude) {
    globeWorld.pointOfView({
      lat: parseFloat(port.latitude),
      lng: parseFloat(port.longitude),
      altitude: 1.25
    }, 1400);
    // Pause auto-rotation to focus on port
    globeWorld.controls().autoRotate = false;
  }

  // 2. Highlight quick switcher pill
  document.querySelectorAll(".port-pill").forEach(el => {
    el.classList.remove("bg-cyan-500/20", "text-cyan-300", "border", "border-cyan-500/30");
  });
  const activePill = document.getElementById(`pill-${port.unlocode}`);
  if (activePill) {
    activePill.classList.add("bg-cyan-500/20", "text-cyan-300", "border", "border-cyan-500/30");
  }

  // 3. Populate Side Panel Header Metadata
  document.getElementById("panelPortName").innerText = port.name;
  document.getElementById("panelFullName").innerText = port.full_name || port.name;
  document.getElementById("panelUnlocode").innerText = port.unlocode || "IND";
  document.getElementById("panelOperatorType").innerText = (port.operator_type || "Port Authority").toUpperCase();
  document.getElementById("panelStateCountry").innerHTML = `
    <i data-lucide="map-pin" class="w-3 h-3 text-cyan-400"></i> ${port.state || 'India'}, ${port.country || 'India'}
  `;

  const webLink = document.getElementById("panelWebsiteUrl");
  if (port.website_url) {
    webLink.href = port.website_url;
    webLink.innerText = port.website_url.replace(/^https?:\/\/(www\.)?/, "");
    webLink.parentElement.style.display = "flex";
  } else {
    webLink.parentElement.style.display = "none";
  }

  // 4. Render Quick Terminal PDF Reports Bar (if JNPT)
  const pdfsBar = document.getElementById("panelTerminalPdfsBar");
  if (pdfsBar) {
    if (port.unlocode === "INNSA") {
      pdfsBar.style.display = "flex";
      pdfsBar.innerHTML = `
        <span class="text-slate-400 font-semibold text-[10px] uppercase shrink-0 mr-1">Terminal Reports:</span>
        ${jnpaTerminalPdfs.map(p => `
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" 
             class="px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:text-white font-mono text-[10px] transition-all flex items-center gap-1"
             onclick="event.stopPropagation()">
            <i data-lucide="file-text" class="w-2.5 h-2.5"></i>
            <span>${p.name} ↗</span>
          </a>
        `).join("")}
      `;
    } else {
      pdfsBar.style.display = "none";
      pdfsBar.innerHTML = "";
    }
  }

  // 5. Slide-in the panel (remove translate-x-full)
  const panel = document.getElementById("portSidePanel");
  panel.classList.remove("translate-x-full");

  // Re-render Lucide icons
  if (window.lucide) window.lucide.createIcons();

  // 6. Fetch vessel data from backend API
  await fetchPortVessels(currentPortSlug);
}

function closePortSidePanel() {
  const panel = document.getElementById("portSidePanel");
  panel.classList.add("translate-x-full");

  // Reset 3D Globe camera out slightly and resume gentle rotation
  if (globeWorld) {
    globeWorld.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2.1 }, 1200);
    globeWorld.controls().autoRotate = true;
  }

  document.querySelectorAll(".port-pill").forEach(el => {
    el.classList.remove("bg-cyan-500/20", "text-cyan-300", "border", "border-cyan-500/30");
  });
}

// =========================================================================
// 5. FETCH LIVE PORT VESSELS & POPULATE MANIFEST (OPTION B)
// =========================================================================
async function fetchPortVessels(slug) {
  const tbody = document.getElementById("vesselsTableBody");
  tbody.innerHTML = `
    <tr>
      <td colspan="6" class="py-12 text-center text-slate-400">
        <div class="inline-flex items-center gap-2 text-xs font-mono">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin text-cyan-400"></i>
          <span>Synchronizing port berthing database...</span>
        </div>
      </td>
    </tr>
  `;
  if (window.lucide) window.lucide.createIcons();

  try {
    const res = await fetch(`/port/${slug}`);
    if (!res.ok) {
      currentPortData = { port: currentPort.name, vessels: [], total_vessels: 0 };
      renderEmptyPortState();
      return;
    }

    currentPortData = await res.json();
    renderVesselsTable();
    updateTabCounts();

    const lastScrapedStr = currentPortData.last_scraped_at || currentPortData.scraped_at;
    const scrapedAtText = lastScrapedStr 
      ? `Last Scraped: ${new Date(lastScrapedStr).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`
      : "Synced from Port Authority Live Berthing Telemetry";
    document.getElementById("panelLastScrapedAt").innerText = scrapedAtText;
    document.getElementById("panelVesselCountFooter").innerText = `${currentPortData.total_vessels || 0} Vessels Recorded`;
  } catch (err) {
    console.warn(`No live vessel endpoint found for ${slug}:`, err);
    currentPortData = { port: currentPort.name, vessels: [], total_vessels: 0 };
    renderEmptyPortState();
  }
}

function renderEmptyPortState() {
  const tbody = document.getElementById("vesselsTableBody");
  tbody.innerHTML = `
    <tr>
      <td colspan="6" class="py-12 text-center text-slate-400">
        <div class="flex flex-col items-center justify-center gap-2">
          <i data-lucide="anchor" class="w-6 h-6 text-slate-500"></i>
          <p class="text-xs font-semibold text-slate-300">Port Gateway Registered & Ready</p>
          <p class="text-[11px] text-slate-500 max-w-xs">Click "Sync Telemetry" above to synchronize live berthing, jetty, and anchorage manifests for this port.</p>
        </div>
      </td>
    </tr>
  `;
  updateTabCounts();
  if (window.lucide) window.lucide.createIcons();
}

// Render dynamic vessels table with Option B (Clickable PDF Links)
function renderVesselsTable() {
  const tbody = document.getElementById("vesselsTableBody");
  if (!tbody || !currentPortData) return;

  let vessels = currentPortData.vessels || [];
  const query = (document.getElementById("vesselSearchInput").value || "").toLowerCase().trim();

  // Apply tab filter
  if (currentTab === "berth") {
    vessels = vessels.filter(v => v.berth_number && !["ANCHORAGE", "EXPECTED", "SAILED"].includes(v.berth_number.toUpperCase()));
  } else if (currentTab === "anchorage") {
    vessels = vessels.filter(v => (v.berth_number || "").toUpperCase() === "ANCHORAGE");
  } else if (currentTab === "expected") {
    vessels = vessels.filter(v => (v.berth_number || "").toUpperCase() === "EXPECTED");
  }

  // Apply search filter
  if (query) {
    vessels = vessels.filter(v => 
      (v.vessel_name || "").toLowerCase().includes(query) ||
      (v.commodity || "").toLowerCase().includes(query) ||
      (v.berth_number || "").toLowerCase().includes(query) ||
      (v.terminal_name || "").toLowerCase().includes(query)
    );
  }

  if (vessels.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-500 text-xs">
          No vessels match current filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = vessels.map(v => {
    const isAnchorage = (v.berth_number || "").toUpperCase() === "ANCHORAGE";
    const isExpected = (v.berth_number || "").toUpperCase() === "EXPECTED";
    
    let statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">BERTH ACTIVE</span>`;
    if (isAnchorage) {
      statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">ANCHORAGE WAITING</span>`;
    } else if (isExpected) {
      statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">EXPECTED INBOUND</span>`;
    }

    const etcFormatted = v.expected_completion_at 
      ? new Date(v.expected_completion_at).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
      : "—";

    // Option B: Official Terminal Report PDF Link Badge
    const pdfUrl = v.terminal_report_pdf_url;
    const pdfButtonHtml = pdfUrl ? `
      <a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:text-white font-mono text-[10px] transition-all" 
         onclick="event.stopPropagation()" title="Open official terminal daily report PDF">
        <i data-lucide="file-text" class="w-2.5 h-2.5"></i>
        <span>Report PDF ↗</span>
      </a>
    ` : '';

    return `
      <tr class="hover:bg-slate-800/40 transition-colors">
        <td class="py-2.5 px-3">
          <div class="font-bold text-white flex items-center gap-1.5">
            <span class="text-slate-400">🚢</span>
            <span>${v.vessel_name}</span>
          </div>
        </td>
        <td class="py-2.5 px-3">
          <span class="font-mono text-cyan-400 font-bold">${v.berth_number || 'N/A'}</span>
        </td>
        <td class="py-2.5 px-3">
          <div class="text-slate-300 font-medium">${v.terminal_name || 'Main Terminal'}</div>
          ${pdfButtonHtml}
        </td>
        <td class="py-2.5 px-3">
          <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] border border-slate-700">${v.commodity || 'Containerized / Bulk'}</span>
        </td>
        <td class="py-2.5 px-3 font-mono text-slate-300 text-[11px]">${etcFormatted}</td>
        <td class="py-2.5 px-3">${statusBadge}</td>
      </tr>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

function updateTabCounts() {
  if (!currentPortData || !currentPortData.vessels) {
    document.getElementById("countAll").innerText = 0;
    document.getElementById("countBerth").innerText = 0;
    document.getElementById("countAnchorage").innerText = 0;
    document.getElementById("countExpected").innerText = 0;
    return;
  }
  const all = currentPortData.vessels;
  const berth = all.filter(v => v.berth_number && !["ANCHORAGE", "EXPECTED", "SAILED"].includes(v.berth_number.toUpperCase())).length;
  const anchorage = all.filter(v => (v.berth_number || "").toUpperCase() === "ANCHORAGE").length;
  const expected = all.filter(v => (v.berth_number || "").toUpperCase() === "EXPECTED").length;

  document.getElementById("countAll").innerText = all.length;
  document.getElementById("countBerth").innerText = berth;
  document.getElementById("countAnchorage").innerText = anchorage;
  document.getElementById("countExpected").innerText = expected;
}

// =========================================
// 6. CSV & JSON MANIFEST EXPORT
// =========================================
function exportJson() {
  if (!currentPortData || !currentPortData.vessels) return;
  const blob = new Blob([JSON.stringify(currentPortData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portpulse_${currentPortSlug}_manifest.json`;
  a.click();
}

function exportCsv() {
  if (!currentPortData || !currentPortData.vessels) return;
  const vessels = currentPortData.vessels;
  const headers = ["vessel_name", "berth_number", "terminal_name", "commodity", "expected_completion_at", "berthed_at", "terminal_report_pdf_url"];
  
  let csvContent = headers.join(",") + "\n";
  vessels.forEach(v => {
    const row = headers.map(h => `"${(v[h] || "").toString().replace(/"/g, '""')}"`);
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portpulse_${currentPortSlug}_manifest.csv`;
  a.click();
}

// =========================================
// 7. TELEMETRY & AUDIT EVENT FEED
// =========================================
async function loadHealingEvents() {
  try {
    const res = await fetch("/events?limit=10");
    const data = await res.json();
    const container = document.getElementById("eventsListContainer");
    if (!container) return;

    const events = data.events || [];
    if (events.length === 0) {
      container.innerHTML = `<div class="text-xs text-slate-400 p-3">All port telemetry feeds operating with 100% data integrity.</div>`;
      return;
    }

    container.innerHTML = events.map(ev => {
      const isHeal = (ev.event_type || "").includes("healing");
      const badgeClass = isHeal ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      const sName = ev.scrapers ? ev.scrapers.name : "Port Telemetry Feed";
      const timeStr = new Date(ev.created_at).toLocaleTimeString();

      return `
        <div class="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="text-base">${isHeal ? '🛡️' : '✅'}</span>
            <div>
              <div class="font-bold text-white">${sName}</div>
              <div class="text-[11px] text-slate-400 capitalize">${(ev.event_type || '').replace('_', ' ')} • ${ev.records_received || 0} records synced</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold border ${badgeClass}">
              ${ev.health_score_before || 100}% INTEGRITY
            </span>
            <span class="font-mono text-slate-500 text-[10px]">${timeStr}</span>
          </div>
        </div>
      `;
    }).join("");
  } catch (err) {
    console.error("Failed to load audit events:", err);
  }
}

// =========================================
// 8. EVENT LISTENERS
// =========================================
function setupEventListeners() {
  // Close Side Panel Button
  document.getElementById("btnCloseSidePanel").addEventListener("click", closePortSidePanel);

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.remove("active", "bg-cyan-500", "text-slate-950", "font-bold");
        b.classList.add("bg-slate-800", "text-slate-300", "font-medium");
      });
      btn.classList.add("active", "bg-cyan-500", "text-slate-950", "font-bold");
      btn.classList.remove("bg-slate-800", "text-slate-300", "font-medium");
      
      currentTab = btn.getAttribute("data-tab");
      renderVesselsTable();
    });
  });

  // Search input
  const searchInput = document.getElementById("vesselSearchInput");
  if (searchInput) searchInput.addEventListener("input", () => renderVesselsTable());

  // Export buttons
  document.getElementById("btnExportJson").addEventListener("click", exportJson);
  document.getElementById("btnExportCsv").addEventListener("click", exportCsv);

  // Sync Telemetry Button
  document.getElementById("btnRunScrapeNow").addEventListener("click", async () => {
    const btn = document.getElementById("btnRunScrapeNow");
    btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Syncing...`;
    btn.disabled = true;
    if (window.lucide) window.lucide.createIcons();

    try {
      await fetch(`/scrapers/in_${currentPortSlug}/run`, { method: "POST" });
      await fetchPortVessels(currentPortSlug);
      await loadHealingEvents();
    } catch (e) {
      console.error("Telemetry sync error:", e);
    } finally {
      btn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Sync Telemetry`;
      btn.disabled = false;
      if (window.lucide) window.lucide.createIcons();
    }
  });

  // Telemetry Modal toggle
  const telemetryModal = document.getElementById("telemetryModal");
  document.getElementById("btnOpenTelemetry").addEventListener("click", () => {
    telemetryModal.classList.remove("hidden");
    loadHealingEvents();
  });
  document.getElementById("btnCloseTelemetry").addEventListener("click", () => {
    telemetryModal.classList.add("hidden");
  });
  telemetryModal.addEventListener("click", (e) => {
    if (e.target === telemetryModal) telemetryModal.classList.add("hidden");
  });
}
