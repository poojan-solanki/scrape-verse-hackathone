# Into the Scrape-Verse — Hackathon Overview

> **Official Source**: [https://www.wemakedevs.org/hackathons/scrape-verse](https://www.wemakedevs.org/hackathons/scrape-verse)
> **Organizer**: WeMakeDevs in collaboration with Bright Data
> **Dates**: August 17–23, 2026
> **Location**: Online from anywhere (or in-person on August 22 in San Francisco)
> **Teams**: Solo or up to 4 people
> **Total Prizes**: $15,000 in prizes

---

## The Challenge

> *"You write a scraper, it works, and a week later the site changes its layout and everything breaks quietly. Build one that repairs itself instead, run it from your coding agent, and spend the week turning the data into something real."*

Build a **self-healing web scraper** using **Bright Data Scraper Studio** and turn live structured web data into a real product or application.

---

## Key Highlights

- **Mandatory Tool**: Bright Data Scraper Studio (custom scraper required; pre-built library scrapers alone do not qualify).
- **Free Credits**: Every participant gets **$50 in Bright Data credits** (enter promo code `wemakedevs` in the billing section of your profile).
- **AI Coding Agents**: Permitted and encouraged (e.g., Claude Code, Cursor, Codex, Antigravity) as long as you understand and explain the architecture and decisions.
- **Data Policy**: Must scrape publicly available data only. No login-protected, paywalled, personal, or restricted data.

---

## Prize Tracks ($15,000 Total)

### 1. Web-Slinger Track (Grand Prize) — Best Use of Bright Data
- **Prize**: **NVIDIA DGX Spark** (Personal AI Supercomputer) or **$5,000 cash** to the winning team.
- **Criteria**: The submission that gets the most out of the platform: the scraper designed in Scraper Studio, how it was driven from your coding agent/CLI/API, what it did when the site changed under it (self-healing), and what the structured output went on to power.

### 2. Suit-Up Track — Best UI
- **Prize**: **Apple iPad to EVERY member** of the winning team.
- **Criteria**: The project that looks and feels finished. Data is only useful once someone can read and interact with it cleanly.

### 3. Spider-Sense Track — Best Clean Code
- **Prize**: **Keychron Mechanical Keyboard to EVERY member** of the winning team.
- **Criteria**: Readable, structured, well-architected, and robustly handled at the edges. A repository any engineer could pick up and understand.

### 4. Registration Raffle
- **Prize**: **Iron Man MK5 Helmet (Black Edition, Voice Controlled)**.
- **Criteria**: Drawn randomly from all valid registrations. No project submission required to win.

### 5. Extra Perks & Credits
- **$2,500 Bright Data Credits**: Split across top teams to keep collectors running after the event.
- **Swag Boxes**: For 10 participants who share what they are building on social media and tag `@WeMakeDevs`.

---

## How the Self-Healing Concept Works

```
01. The page shifts:
    A class is renamed, a field moves, or the layout redesigns.

02. The scraper notices:
    Extraction returns empty / null where it used to return a value.

03. The logic repairs:
    Scraper Studio rewrites the extraction logic from a plain-language description.

04. The data keeps flowing:
    The collector (e.g., c_8f2a91) continues running with the same ID, so downstream apps never break.
```

---

## Project Ideas Suggested by Organizers

1. **Price and Inventory Intelligence**: Track prices, availability, discounts, and product changes across regional stores or specialized marketplaces.
2. **Documentation to RAG**: Convert dynamic documentation sites into structured data for citation-backed question-answering systems.
3. **Competitive Intelligence**: Monitor product pages, changelogs, release notes, company directories, or public announcements for meaningful changes.
4. **Market Research**: Collect listings, reviews, public company info, or industry data and turn it into a searchable research platform.
5. **Developer Trend Tracker**: Analyze public activity from developer communities, package registries, product directories, or tech websites.
6. **Scraper Health Monitor**: Validate scraper output, detect missing fields, track failures, and trigger repair/review workflows.

---

## Judging Criteria (Weighted Equally)

1. **Potential Impact**: Does the project solve a clear and useful problem?
2. **Creativity and Innovation**: Does the project approach web-data collection in an original way?
3. **Technical Excellence**: Is the implementation complete, reliable, and well structured?
4. **Use of Scraper Studio**: Is Bright Data Scraper Studio central to the project?
5. **Reliability and Self-Healing**: Does the project account for website changes, missing data, or extraction failures?
6. **Presentation**: Does the demo clearly explain the problem, scraper workflow, structured output, and final product?
