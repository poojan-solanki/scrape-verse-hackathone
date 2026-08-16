# Bright Data CLI

> **Official Source**: [https://docs.brightdata.com/cli/overview](https://docs.brightdata.com/cli/overview)
> **Category**: `ai-and-mcp`

---

Scrape websites, search the web, extract structured data from 40+ platforms, and manage your Bright Data account from the terminal.

<Card title="Get Started in 60 Seconds" icon="rocket" href="/cli/installation">
  Install the CLI, log in once, and start scraping - CAPTCHAs, anti-bot protections, and JavaScript rendering are handled automatically.
</Card>

## What can you do with the CLI?

<CardGroup>
  <Card title="Scrape any website" icon="globe">
    Get clean markdown, HTML, JSON, or screenshots from any URL - anti-bot bypass and JS rendering included.
  </Card>

  <Card title="Search the web" icon="magnifying-glass">
    Query Google, Bing, or Yandex and get structured results with organic listings, ads, and People Also Ask.
  </Card>

  <Card title="Discover with AI" icon="wand-magic-sparkles">
    AI-powered web discovery - find, rank, and extract content by intent with relevance scoring.
  </Card>

  <Card title="Extract structured data" icon="table">
    Pull product details, profiles, reviews, and more from 40+ platforms like Amazon, LinkedIn, Instagram, and TikTok.
  </Card>

  <Card title="Control a browser" icon="window-maximize">
    Navigate, click, type, screenshot, and read pages using a real remote browser session with persistent state.
  </Card>

  <Card title="Power up AI agents" icon="robot">
    Install skills or add the Bright Data MCP server into Claude Code, Cursor, Codex, and other AI coding agents.
  </Card>

  <Card title="Manage zones & budget" icon="gauge">
    List proxy zones, inspect configurations, and monitor account balance and per-zone costs.
  </Card>

  <Card title="Automate with pipes" icon="pipe-section">
    JSON output, file export, and pipe-friendly design make it easy to chain commands and build workflows.
  </Card>
</CardGroup>

## What the CLI looks like

```bash theme={null}
# Scrape a page as clean markdown
brightdata scrape https://news.ycombinator.com

# Search Google and get structured results
brightdata search "best web scraping tools 2025"

# AI-powered discovery with relevance ranking
brightdata discover "AI trends" --intent "Prioritize institutional reports for VC research"

# Extract an Amazon product as JSON
brightdata pipelines amazon_product "https://amazon.com/dp/B09V3KXJPB" --format json

# Control a remote browser session
brightdata browser open https://example.com
brightdata browser snapshot --compact

# Add Bright Data MCP server to your coding agent
brightdata add mcp
```

<Tip>
  The CLI alias `bdata` is available as a shorthand - e.g., `bdata scrape https://example.com`.
</Tip>

## How it works

The Bright Data CLI wraps the full Bright Data web data platform into simple terminal commands. Under the hood, it:

1. **Authenticates once** via OAuth, device flow, or API key - credentials are stored locally and never need to be entered again
2. **Auto-provisions zones** (`cli_unlocker`, `cli_browser`) on first login so you can start immediately
3. **Routes requests** through Bright Data's infrastructure, handling CAPTCHAs, bot detection, IP rotation, and JavaScript rendering
4. **Returns clean output** - formatted tables in the terminal, or structured JSON/CSV/markdown for automation

## Explore CLI resources

<CardGroup>
  <Card title="Installation" icon="download" href="/cli/installation">
    Install the CLI and authenticate with Bright Data.
  </Card>

  <Card title="Commands" icon="code" href="/cli/commands">
    Full reference for every command, flag, and option.
  </Card>

  <Card title="Usage Examples" icon="book-open" href="/cli/examples">
    Real-world workflows and recipes for common tasks.
  </Card>

  <Card title="FAQs" icon="question" href="/cli/faqs">
    Answers to common questions and troubleshooting tips.
  </Card>
</CardGroup>

<Check>
  **Zero configuration required.** After a one-time `brightdata login`, every command works out of the box - no tokens to manage, no zones to create, no proxies to configure.
</Check>
