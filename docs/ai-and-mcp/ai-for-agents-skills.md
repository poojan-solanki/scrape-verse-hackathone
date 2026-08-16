# Bright Data skills for coding agents

> **Official Source**: [https://docs.brightdata.com/ai/for-agents/skills](https://docs.brightdata.com/ai/for-agents/skills)
> **Category**: `ai-and-mcp`

---

Install Bright Data skills (1000+ scrapers) into your AI coding agent for best-practice API usage, working scripts and embedded product knowledge instantly.

## What are Skills?

Skills are **reusable instruction sets** - defined in `SKILL.md` files - that extend your coding agent's capabilities with Bright Data APIs. Each skill gives your agent embedded best practices, parameter knowledge, and runnable shell scripts it can execute directly.

Install Bright Data skills and your agent immediately knows:

* Which API to call for search, scraping, or structured data extraction
* How to authenticate and structure requests correctly
* How to handle pagination, errors, and edge cases
* Real scripts it can invoke to take action

Skills are part of the [open agent skills ecosystem](https://github.com/vercel-labs/skills) and work across 40+ coding agents. Bright Data's skills are hosted at [github.com/brightdata/skills](https://github.com/brightdata/skills).

***

## Which skills are available

<CardGroup>
  <Card title="Search" icon="magnifying-glass" href="https://github.com/brightdata/skills">
    Search Google and get structured JSON results with titles, links, and descriptions. Supports pagination. Powered by the Bright Data SERP API.
  </Card>

  <Card title="Scrape" icon="unlock" href="https://github.com/brightdata/skills">
    Scrape any webpage as clean markdown with automatic bot detection bypass, CAPTCHA solving, and JavaScript rendering. Powered by the Web Unlocker API.
  </Card>

  <Card title="Data Feeds" icon="database" href="https://github.com/brightdata/skills">
    Extract structured data from 40+ websites - Amazon, LinkedIn, Instagram, TikTok, YouTube, eBay, Walmart, and more - with automatic polling.
  </Card>

  <Card title="Bright Data MCP" icon="server" href="https://github.com/brightdata/skills">
    Orchestrate 60+ MCP tools for search, scraping, structured extraction, and browser automation in a single integration.
  </Card>

  <Card title="Best Practices" icon="star" href="https://github.com/brightdata/skills/tree/main/skills/bright-data-best-practices">
    Production-ready API reference for coding agents. Covers Web Unlocker, SERP API, Scrapers, and Browser API - with an API selection guide, auth patterns, and code examples in Python and JavaScript.
  </Card>
</CardGroup>

***

## Quick Start

<Steps>
  <Step title="Prerequisites">
    Install the required CLI tools and set your Bright Data credentials:

    ```bash theme={null}
    # macOS
    brew install curl jq

    # Ubuntu / Debian
    sudo apt-get install curl jq
    ```

    ```bash theme={null}
    export BRIGHTDATA_API_KEY="your-api-key"
    export BRIGHTDATA_UNLOCKER_ZONE="your-zone-name"
    ```

    Get your API key from the [Bright Data user settings page](https://brightdata.com/cp/setting/users). To create a Web Unlocker zone, see the [Web Unlocker quickstart](/scraping-automation/web-unlocker/quickstart).
  </Step>

  <Step title="Install with npx skills">
    Use the `npx skills` CLI to install Bright Data skills into your agent:

    ```bash theme={null}
    # Install all skills (auto-detects your installed agents)
    npx skills add brightdata/skills

    # Install to a specific agent only
    npx skills add brightdata/skills -a claude-code
    npx skills add brightdata/skills -a cursor

    # Install a specific skill only
    npx skills add brightdata/skills --skill search
    npx skills add brightdata/skills --skill scrape
    npx skills add brightdata/skills --skill data-feeds
    npx skills add brightdata/skills --skill bright-data-best-practices

    # Install globally (available across all your projects)
    npx skills add brightdata/skills -g
    ```

    The CLI detects which agents you have installed and places skill files in the correct directories automatically.
  </Step>

  <Step title="Use the skills in your agent">
    Once installed, your agent can run the skills directly:

    ```bash theme={null}
    # Search Google
    bash skills/search/scripts/search.sh "your query" [page]

    # Scrape a URL as clean markdown
    bash skills/scrape/scripts/scrape.sh "https://example.com"

    # Extract structured data (run without args to see all 40+ dataset types)
    bash skills/data-feeds/scripts/datasets.sh

    # With a specific dataset type and URL
    bash skills/data-feeds/scripts/datasets.sh amazon_product "https://amazon.com/dp/ASIN"
    bash skills/data-feeds/scripts/datasets.sh linkedin_person_profile "https://linkedin.com/in/username"
    ```
  </Step>
</Steps>

***

## Installation per agent

<Tabs>
  <Tab title="Claude Code">
    ```bash theme={null}
    npx skills add brightdata/skills -a claude-code
    ```

    Skills are installed into `.claude/skills/` in your project (or `~/.claude/skills/` with `-g` for global). Claude Code discovers them automatically on the next session.

    To verify installation:

    ```bash theme={null}
    npx skills list -a claude-code
    ```
  </Tab>

  <Tab title="Cursor">
    ```bash theme={null}
    npx skills add brightdata/skills -a cursor
    ```

    Skills land in `.cursor/skills/` in your project. Cursor Composer picks them up automatically. Reference them in chat:

    ```text theme={null}
    Use the scrape skill to extract content from https://example.com
    ```
  </Tab>

  <Tab title="Windsurf">
    ```bash theme={null}
    npx skills add brightdata/skills -a windsurf
    ```

    Windsurf's Cascade reads skills from `.windsurf/skills/` and loads them into its context automatically.
  </Tab>

  <Tab title="All agents at once">
    ```bash theme={null}
    # Install to every agent you have installed
    npx skills add brightdata/skills --all

    # Non-interactive (CI/CD friendly)
    npx skills add brightdata/skills --all -y
    ```

    The CLI auto-detects all installed agents and distributes the skill files to each one.
  </Tab>

  <Tab title="Manual / any agent">
    Clone the repo and reference the `SKILL.md` files directly:

    ```bash theme={null}
    git clone https://github.com/brightdata/skills.git
    ```

    Each skill's `SKILL.md` is plain markdown - inject it into any agent's system prompt, RAG index, or context window:

    ```bash theme={null}
    cat skills/search/SKILL.md                      # Paste into system prompt
    cat skills/scrape/SKILL.md
    cat skills/data-feeds/SKILL.md
    cat skills/bright-data-best-practices/SKILL.md  # API selection + best practices
    ```
  </Tab>
</Tabs>

***

## How skills are structured

Each Bright Data skill follows the standard skill format:

```text theme={null}
skills/
├── search/
│   ├── SKILL.md              # Instructions + metadata - loaded by the agent
│   └── scripts/
│       └── search.sh         # Executable script the agent can run
├── scrape/
│   ├── SKILL.md
│   └── scripts/
│       └── scrape.sh
├── data-feeds/
│   ├── SKILL.md
│   └── scripts/
│       ├── datasets.sh       # Dataset wrapper (40+ types)
│       └── fetch.sh          # Core polling + response handling
├── bright-data-mcp/
│   ├── SKILL.md
│   └── references/           # MCP tool reference docs
└── bright-data-best-practices/
    ├── SKILL.md              # API selection guide + auth patterns + code examples
    └── references/
        ├── web-unlocker.md   # Full Web Unlocker reference
        ├── serp-api.md       # Full SERP API reference (Google, Bing, Maps, Trends...)
        ├── scrapers.md       # Scrapers reference (100+ platforms)
        └── browser-api.md    # Browser API reference (CDP functions, geo, CAPTCHA)
```

`SKILL.md` contains YAML frontmatter with a `name` and `description`, followed by structured instructions that tell the agent when and how to use the skill.

***

## Data Feeds coverage

The Data Feeds skill supports structured extraction from 40+ platforms across four categories:

<CardGroup>
  <Card title="E-Commerce" icon="cart-shopping">
    Amazon (products, reviews, search), Walmart, eBay, Best Buy, Etsy, Home Depot, Zara, Google Shopping
  </Card>

  <Card title="Professional Networks" icon="briefcase">
    LinkedIn (profiles, companies, jobs, posts), Crunchbase, ZoomInfo
  </Card>

  <Card title="Social Media" icon="share-nodes">
    Instagram, TikTok, Facebook, X/Twitter, YouTube, Reddit
  </Card>

  <Card title="Other" icon="globe">
    Google Maps reviews, Yahoo Finance, Zillow, Booking.com, GitHub, App Stores
  </Card>
</CardGroup>

***

## Managing your skills

```bash theme={null}
# List all installed skills
npx skills list

# Check for updates
npx skills check

# Update all skills to latest
npx skills update

# Remove a skill
npx skills remove brightdata/skills
```

***

<Tip>
  For the richest agent setup, combine skills with the [Bright Data MCP Server](/ai/mcp-server/overview). Skills give your agent embedded knowledge and runnable scripts; the MCP server gives it live web access with 60+ tools - all without leaving your coding environment.
</Tip>

<Info>
  New skills are added regularly. Star the [GitHub repository](https://github.com/brightdata/skills) to stay updated.
</Info>
