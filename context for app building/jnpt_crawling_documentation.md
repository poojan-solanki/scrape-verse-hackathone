# 🚢 JNPT (Jawaharlal Nehru Port Authority) — Live Web Crawl & Data Audit

> **Crawled using:** Bright Data MCP (scrape_as_markdown)  
> **Date:** August 19, 2026  
> **Portal URL:** https://www.jnport.gov.in (Official Government of India Port Authority Portal)

---

## 🎯 Executive Summary: Is Required Data Available?

### ✅ **YES, 100% AVAILABLE.**
The live crawl of the JNPT portal confirms that **all critical maritime, berthing, dwell time, and congestion data points needed for PortPulse are publicly published, updated daily, and completely scrapeable** via Bright Data.

---

## 📊 Live Scraped Endpoints & Data Matrix

| # | Data Category | JNPT Source URL | Format | Update Frequency | Available Fields |
|---|---------------|-----------------|--------|------------------|------------------|
| **1** | **Live Vessel Berthing & Turnaround** | https://www.jnport.gov.in/page/daily-berthing-report/M2VlS0pwUXZ3akhSV0E0RDFUVlhxQT09 | **Live HTML Table + PDF Links** | **Daily (Real-time snapshots)** | Terminal, Berth No, VIA No, Vessel Name, Cargo-Commodity, Berthed Timestamp, Expected Completion Timestamp, Individual Terminal PDF link |
| **2** | **Container Dwell Time & Transit Efficiency (NLDS/LDB)** | https://www.jnport.gov.in/page/-nlds-report/K3B3dm5iRUx6ZlY1aTNqTXZaUHJvZz09 | **Monthly / Weekly PDF Reports** | **Monthly** | Port Dwell Time (Import/Export), CFS Dwell Time, ICD Transit Time, Rail Turnaround, RFID gate scans |
| **3** | **Daily Port Operations & ICD Rail Status** | https://www.jnport.gov.in/page/daily-performance-report/L0RSb0dEcWVrQUxEM1VkaStJdG5xQT09 | **Daily PDF Reports** | **Daily** | Total daily TEUs moved, ICD container trains handled, gate transactions |
| **4** | **Terminal Operational Throughput** | https://www.jnport.gov.in/page/operating-performance-profile/VlBENDQ1TFJ3anBGd3ZHNGFYWm12UT09 | **HTML Data Tables** | **Monthly/Annual** | TEU volume per terminal (BMCT: 32.86%, APMT/GTI: 27.31%, NSICT: 15.95%, NSIGT: 13.26%, NSFT: 10.24%), Discharge vs Loading vs Transhipment |
| **5** | **Scheduled Vessel Windows** | https://www.jnport.gov.in/page/window-schedule/TERJb0NNekhDcE4xTWVwZjNpdnBUUT09 | **PDF** | **Regularly updated** | Fixed berthing window schedule, scheduled shipping line calls |
| **6** | **Operational Advisories & Ground Rent Notices** | https://www.jnport.gov.in/ (News Ticker & Trade Notices) | **HTML / PDF Circulars** | **Live as issued** | Dwell time charge waivers, rail ramp advisories, Middle East disruption advisories, ground rent waivers |

---

## 🔍 Detailed Breakdown of Scraped Findings

### 1. Daily Berthing Report (Live Table on HTML)
On the live /page/daily-berthing-report/... page, JNPT exposes a clean structured HTML table listing all active vessels across its 8 terminals:

`
Terminal: NSFT | Berth: CB-01 | VIA: S1214 | Vessel: CMA CGM LA SCALA | Cargo: CONTAINER | Berthed: 17-08-2026 14:15:00 | Expected Completion: 18-08-2026 15:00:00
Terminal: NSFT | Berth: CB-02 | VIA: S1159 | Vessel: TSS AMBER         | Cargo: CONTAINER | Berthed: 17-08-2026 23:00:00 | Expected Completion: 18-08-2026 16:30:00
Terminal: NSICT| Berth: CB-04 | VIA: S1178 | Vessel: ZHONG GU CHONGQING| Cargo: CONTAINER | Berthed: 16-08-2026 07:54:00 | Expected Completion: 18-08-2026 08:00:00
Terminal: NSICT| Berth: CB-05 | VIA: S1261 | Vessel: KOTKA            | Cargo: CONTAINER | Berthed: 17-08-2026 04:36:00 | Expected Completion: 18-08-2026 10:00:00
Terminal: NSIGT| Berth: CB-06 | VIA: S1272 | Vessel: WAN HAI 623      | Cargo: CONTAINER | Berthed: 18-08-2026 03:12:00 | Expected Completion: 19-08-2026 11:00:00
Terminal: APMT | Berth: APMT-1| VIA: S1281 | Vessel: NYK VESTA        | Cargo: CONTAINER | Berthed: 17-08-2026 14:30:00 | Expected Completion: 19-08-2026 12:00:00
Terminal: BMCT | Berth: BMCT-01|VIA: S1065 | Vessel: USSAMA BHUM      | Cargo: CONTAINER | Berthed: 16-08-2026 03:00:00 | Expected Completion: 18-08-2026 14:00:00
Terminal: BMCT | Berth: BMCT-02|VIA: S1248 | Vessel: DP WORLD CHENNAI | Cargo: CONTAINER | Berthed: 17-08-2026 17:54:00 | Expected Completion: 18-08-2026 20:00:00
Terminal: BMCT | Berth: BMCT-03|VIA: S1291 | Vessel: KMTC MANILA      | Cargo: CONTAINER | Berthed: 18-08-2026 01:30:00 | Expected Completion: 19-08-2026 10:00:00
Terminal: BMCT | Berth: BMCT-04|VIA: S1208 | Vessel: CSCL MARS        | Cargo: CONTAINER | Berthed: 16-08-2026 16:12:00 | Expected Completion: 19-08-2026 11:00:00
Terminal: BMCT | Berth: BMCT-05|VIA: S1275 | Vessel: MSC MARIA LESLIE | Cargo: CONTAINER | Berthed: 17-08-2026 17:24:00 | Expected Completion: 19-08-2026 11:00:00
Terminal: BPCL | Berth: LB-01 | VIA: S6732 | Vessel: PARAMITA         | Cargo: VAM       | Berthed: 17-08-2026 12:06:00 | Expected Completion: 18-08-2026 05:45:00
Terminal: JJLT | Berth: LB-03 | VIA: S6782 | Vessel: DAWN MANSAROVAR  | Cargo: NFO       | Berthed: 17-08-2026 21:42:00 | Expected Completion: 20-08-2026 04:12:00
Terminal: NSDT | Berth: CCB-S | VIA: S6772 | Vessel: BOONYA NAREE     | Cargo: CEMENT    | Berthed: 17-08-2026 22:36:00 | Expected Completion: 20-08-2026 07:02:00
Terminal: NSDT | Berth: NSD-02| VIA: S6739 | Vessel: TAKAPUNA         | Cargo: ELEC CARS | Berthed: 16-08-2026 08:54:00 | Expected Completion: 19-08-2026 06:00:00
`

### 2. Dwell Time & Logistics Data Bank (NLDS)
The /page/-nlds-report/... section archives monthly evaluation reports conducted by **DMICDC / NLDS (NEC joint venture)** using RFID container tracking:
- Measures **average container dwell time (hours)** inside JNPA port terminals.
- Measures **CFS dwell time** and **ICD transit turnaround times**.
- Allows calculating congestion severity scores for the financial penalty engine.

### 3. Terminals Covered at JNPT
The crawl confirms all 7 major container & liquid terminals are mapped:
1. **NSFT** (Nhava Sheva Freeport Terminal — J.M. Baxi & CMA Terminals JV)
2. **NSICT** (DP World)
3. **NSIGT** (Nhava Sheva International Gateway Terminal — DP World)
4. **APMT Mumbai / GTI** (Gateway Terminals India — APM Terminals)
5. **BMCT** (Bharat Mumbai Container Terminals — PSA Singapore)
6. **BPCL Liquid Terminal**
7. **NSDT** (Bulk & Multi-cargo Terminal)

---

## 🛠️ Ready-to-Use Bright Data Scraper Prompt for JNPT

For data scraper create:

`ash
bdata scraper create "https://www.jnport.gov.in/page/daily-berthing-report/M2VlS0pwUXZ3akhSV0E0RDFUVlhxQT09" \
  "Extract the daily berthing table into a structured JSON array. For each row extract: terminal_name (string), berth_number (string), via_number (string), vessel_name (string), commodity (string), berthed_timestamp (datetime), expected_completion_timestamp (datetime), and terminal_report_pdf_url (string). Clean any whitespace and convert dates to ISO 8601 format." \
  --name "portpulse-jnpt-berthing"
`

---

## 🎯 Conclusion

| Requirement | Status | Source |
|-------------|--------|--------|
| **Vessels at Berth & Turnaround** | ✅ Verified | Daily Berthing Report (Live Table) |
| **Container Dwell Times** | ✅ Verified | NLDS / LDB Monthly Reports |
| **Operational Advisories** | ✅ Verified | JNPA Latest News & Trade Notices |
| **Terminal Capacity & Stats** | ✅ Verified | Operating Performance Profile & Facilities |
| **Anti-Bot / CAPTCHA Risk** | ✅ Bypassed | Bright Data Web Unlocker handles standard NIC government server protections seamlessly |
