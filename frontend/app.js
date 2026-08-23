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
  setupChatbot();
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

  // 7. Fetch AI Port Intelligence Summary
  await fetchPortSummary(currentPortSlug);
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

// Fetch AI Port Intelligence Summary
async function fetchPortSummary(slug) {
  const banner = document.getElementById("portSummaryBanner");
  const summaryText = document.getElementById("summaryText");
  const summaryTs = document.getElementById("summaryTimestamp");
  if (!banner || !summaryText) return;

  try {
    const res = await fetch(`/port/${slug}/summary`);
    if (!res.ok) {
      banner.classList.add("hidden");
      return;
    }
    const data = await res.json();
    if (data.summary && data.summary.summary_text) {
      summaryText.innerHTML = formatMarkdown(data.summary.summary_text);
      if (data.summary.generated_at) {
        summaryTs.innerText = new Date(data.summary.generated_at).toLocaleString("en-US", {
          month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
        });
      }
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  } catch (e) {
    console.warn("AI summary fetch error:", e);
    banner.classList.add("hidden");
  }
}

let currentPdfData = [];

// Fetch deep OCR records from terminal berthing PDFs
async function fetchPdfIntelligence(slug) {
  try {
    const res = await fetch(`/port/${slug}/pdf-intelligence`);
    if (!res.ok) {
      currentPdfData = [];
      return;
    }
    const data = await res.json();
    currentPdfData = data.records || [];
  } catch (e) {
    console.warn("PDF OCR fetch error:", e);
    currentPdfData = [];
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

// Render dynamic vessels table with Option B (Clickable PDF Links) + PDF OCR Mode
async function renderVesselsTable() {
  const tbody = document.getElementById("vesselsTableBody");
  const thead = document.getElementById("vesselsTableHead");
  if (!tbody || !currentPortData) return;

  const query = (document.getElementById("vesselSearchInput").value || "").toLowerCase().trim();

  // === SPECIAL TAB: DEEP PDF OCR MANIFEST ===
  if (currentTab === "pdf_ocr") {
    if (thead) {
      thead.innerHTML = `
        <tr>
          <th class="py-2.5 px-3">Vessel Name</th>
          <th class="py-2.5 px-3">LOA (Length)</th>
          <th class="py-2.5 px-3">Berth / Side</th>
          <th class="py-2.5 px-3">Terminal</th>
          <th class="py-2.5 px-3">Ops Window</th>
          <th class="py-2.5 px-3">Container Bal (Imp / Exp)</th>
          <th class="py-2.5 px-3">Draft</th>
        </tr>
      `;
    }

    if (!currentPdfData || currentPdfData.length === 0) {
      await fetchPdfIntelligence(currentPortSlug);
    }

    let pdfRecs = currentPdfData || [];
    if (query) {
      pdfRecs = pdfRecs.filter(r =>
        (r.vessel_name || "").toLowerCase().includes(query) ||
        (r.terminal_name || "").toLowerCase().includes(query) ||
        (r.berth_number || "").toLowerCase().includes(query)
      );
    }

    if (pdfRecs.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="py-10 text-center text-slate-400">
            <div class="flex flex-col items-center gap-2">
              <i data-lucide="file-text" class="w-6 h-6 text-purple-400"></i>
              <p class="text-xs font-semibold text-slate-200">No PDF OCR Manifests Processed Yet</p>
              <p class="text-[11px] text-slate-500 max-w-sm">Click "Sync Telemetry" to run the 2-stage OCR extraction pipeline on official terminal PDFs.</p>
            </div>
          </td>
        </tr>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    tbody.innerHTML = pdfRecs.map(r => {
      const loaBadge = r.loa ? `<span class="px-1.5 py-0.5 rounded font-mono text-[10px] bg-slate-800 text-cyan-300 border border-slate-700">${r.loa}m</span>` : '<span class="text-slate-500">—</span>';
      const draftBadge = r.max_draft ? `<span class="px-1.5 py-0.5 rounded font-mono text-[10px] bg-slate-800 text-amber-300 border border-slate-700">${r.max_draft}m</span>` : '<span class="text-slate-500">—</span>';
      const sideText = r.berthing_side ? ` (${r.berthing_side})` : '';
      const impExpText = (r.imp_bal !== null || r.exp_bal !== null)
        ? `<div class="font-mono text-[11px]"><span class="text-emerald-400">⬇ ${r.imp_bal || 0}</span> / <span class="text-blue-400">⬆ ${r.exp_bal || 0}</span> TEU</div>`
        : '<span class="text-slate-500">—</span>';

      return `
        <tr class="hover:bg-purple-950/20 transition-colors">
          <td class="py-2.5 px-3">
            <div class="font-bold text-white flex items-center gap-1.5">
              <span class="text-purple-400">📑</span>
              <span>${r.vessel_name}</span>
            </div>
            ${r.via_number ? `<div class="text-[10px] text-slate-500 font-mono">VIA: ${r.via_number}</div>` : ''}
          </td>
          <td class="py-2.5 px-3">${loaBadge}</td>
          <td class="py-2.5 px-3 font-mono text-cyan-400 font-bold">${r.berth_number || 'N/A'}${sideText}</td>
          <td class="py-2.5 px-3 text-slate-300 font-medium">${r.terminal_name || 'Terminal'}</td>
          <td class="py-2.5 px-3 text-[10px] font-mono text-slate-400">
            <div>Start: ${r.ops_commenced || '—'}</div>
            <div>End: ${r.ops_completed || '—'}</div>
          </td>
          <td class="py-2.5 px-3">${impExpText}</td>
          <td class="py-2.5 px-3">${draftBadge}</td>
        </tr>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // === STANDARD TELEMETRY TABLE ===
  if (thead) {
    thead.innerHTML = `
      <tr>
        <th class="py-2.5 px-3">Vessel Name</th>
        <th class="py-2.5 px-3">Berth / Jetty</th>
        <th class="py-2.5 px-3">Terminal & Official PDF</th>
        <th class="py-2.5 px-3">Cargo Type</th>
        <th class="py-2.5 px-3">Est. Completion (ETC)</th>
        <th class="py-2.5 px-3">Status</th>
      </tr>
    `;
  }

  let vessels = currentPortData.vessels || [];

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

// =========================================
// 9. ADAPTIVE MARITIME AI CHATBOT (COPILOT)
// =========================================
let chatHistory = [];

function setupChatbot() {
  const btnOpen = document.getElementById("btnOpenChat");
  const btnClose = document.getElementById("btnCloseChat");
  const chatPanel = document.getElementById("chatPanel");
  const btnSend = document.getElementById("btnSendChat");
  const chatInput = document.getElementById("chatInput");

  if (!btnOpen || !chatPanel) return;

  btnOpen.addEventListener("click", () => {
    chatPanel.classList.toggle("hidden");
    if (!chatPanel.classList.contains("hidden") && chatHistory.length === 0) {
      appendBotMessage(
        "👋 **Welcome to PortPulse Maritime AI Copilot!**\n\n" +
        "I am connected directly to live Indian port telemetry (JNPT & Mundra) and deep terminal PDF OCR manifests.\n\n" +
        "How can I assist your operations today? You can ask about:\n" +
        "• Specific vessel berthing locations & expected completion\n" +
        "• Anchorage waiting queues & congestion\n" +
        "• Terminal container TEU balances & draft depths\n" +
        "• Operational situation summaries"
      );
    }
  });

  if (btnClose) {
    btnClose.addEventListener("click", () => chatPanel.classList.add("hidden"));
  }

  if (btnSend && chatInput) {
    btnSend.addEventListener("click", sendChatMessage);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }
}

async function sendChatMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;

  input.value = "";
  appendUserMessage(msg);
  appendTypingIndicator();

  try {
    const res = await fetch("/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: msg,
        history: chatHistory.map(h => ({ role: h.role, content: h.content })),
      }),
    });

    removeTypingIndicator();

    if (!res.ok) {
      appendBotMessage("⚠️ Maritime agent connection issue. Please try again.");
      return;
    }

    const data = await res.json();
    chatHistory = data.history || [];
    appendBotMessage(data.reply);
  } catch (err) {
    removeTypingIndicator();
    console.error("Chat error:", err);
    appendBotMessage("⚠️ Network error communicating with PortPulse Copilot.");
  }
}

window.sendQuickPrompt = function (promptText) {
  const input = document.getElementById("chatInput");
  if (input) {
    input.value = promptText;
    sendChatMessage();
  }
};

function appendUserMessage(text) {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "flex justify-end";
  msgDiv.innerHTML = `
    <div class="bg-cyan-500/20 border border-cyan-500/40 text-cyan-100 rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[85%] font-sans text-xs shadow-md">
      ${escapeHtml(text)}
    </div>
  `;
  container.appendChild(msgDiv);
  scrollChatToBottom();
}

function appendBotMessage(markdownText) {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const formattedHtml = formatMarkdown(markdownText);
  const msgDiv = document.createElement("div");
  msgDiv.className = "flex items-start gap-2 justify-start";
  msgDiv.innerHTML = `
    <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-white text-[10px] shrink-0 mt-0.5 shadow-sm">
      <i data-lucide="bot" class="w-3.5 h-3.5"></i>
    </div>
    <div class="bg-slate-800/90 border border-slate-700/80 text-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%] font-sans text-xs leading-relaxed shadow-md">
      ${formattedHtml}
    </div>
  `;
  container.appendChild(msgDiv);
  if (window.lucide) window.lucide.createIcons();
  scrollChatToBottom();
}

function appendTypingIndicator() {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  const ind = document.createElement("div");
  ind.id = "chatTypingIndicator";
  ind.className = "flex items-center gap-2 text-slate-400 text-[11px] font-mono pl-8";
  ind.innerHTML = `
    <i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin text-cyan-400"></i>
    <span>PortPulse AI analyzing port database...</span>
  `;
  container.appendChild(ind);
  if (window.lucide) window.lucide.createIcons();
  scrollChatToBottom();
}

function removeTypingIndicator() {
  const ind = document.getElementById("chatTypingIndicator");
  if (ind) ind.remove();
}

function scrollChatToBottom() {
  const container = document.getElementById("chatMessages");
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// Utility: Lightweight Markdown Formatter
function formatMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
  // Code
  html = html.replace(/`(.*?)`/g, '<code class="bg-slate-950 px-1 py-0.5 rounded text-cyan-300 font-mono text-[10px]">$1</code>');
  // Bullet points
  html = html.replace(/^\s*[•\-]\s+(.*)$/gm, '<li class="ml-3 list-disc">$1</li>');
  // Line breaks
  html = html.replace(/\n\n/g, '<div class="h-2"></div>');
  html = html.replace(/\n/g, '<br>');

  return html;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}
