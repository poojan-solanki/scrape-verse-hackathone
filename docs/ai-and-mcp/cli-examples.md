# Usage examples

> **Official Source**: [https://docs.brightdata.com/cli/examples](https://docs.brightdata.com/cli/examples)
> **Category**: `ai-and-mcp`

---

Real-world workflows and recipes for the Bright Data CLI (1000+ scrapers), from 1-line scrapes returning clean markdown to scheduled pipelines feeding LLMs.

## How to scrape with the CLI

### Get clean content from any website

```bash theme={null}
# Clean markdown - great for reading or feeding to LLMs
brightdata scrape https://news.ycombinator.com

# Save to file
brightdata scrape https://docs.python.org/3/tutorial/ -o python-tutorial.md

# Get raw HTML for parsing
brightdata scrape https://example.com -f html -o page.html
```

### How to scrape with geo-targeting

```bash theme={null}
# See Amazon prices as a US customer
brightdata scrape https://amazon.com/dp/B09V3KXJPB --country us

# Scrape a German news site from Germany
brightdata scrape https://spiegel.de --country de

# Mobile user agent for mobile-optimized pages
brightdata scrape https://example.com --mobile
```

### How to take screenshots

```bash theme={null}
# Full-page screenshot
brightdata scrape https://example.com -f screenshot -o homepage.png

# Screenshot from a specific country
brightdata scrape https://amazon.co.uk -f screenshot --country gb -o uk-amazon.png
```

***

## How to run search workflows

### Basic web search

```bash theme={null}
# Google search with formatted table output
brightdata search "best web scraping tools 2025"

# Get raw JSON for processing
brightdata search "typescript best practices" --json

# Pretty-print for inspection
brightdata search "AI startups" --pretty
```

### Localized and specialized search

```bash theme={null}
# Local restaurant search from Germany, in German
brightdata search "restaurants berlin" --country de --language de

# News-only results
brightdata search "AI regulation 2025" --type news

# Shopping results
brightdata search "wireless headphones" --type shopping

# Image search
brightdata search "mountain landscape wallpaper" --type images
```

### Pagination

```bash theme={null}
# First page (default)
brightdata search "web scraping tutorials"

# Second page
brightdata search "web scraping tutorials" --page 1

# Third page
brightdata search "web scraping tutorials" --page 2
```

***

## How to run discovery workflows

### How to run AI-powered research

```bash theme={null}
# Basic discovery with formatted table output
brightdata discover "AI trends"

# With AI intent for targeted relevance ranking
brightdata discover "AI trends" \
  --intent "Prioritize institutional reports for VC research"

# Include full page content for each result
brightdata discover "AI trends" --include-content --num-results 5
```

### How to discover with geo-targeting

```bash theme={null}
# Local results with date filtering
brightdata discover "best restaurants" --country US --city "New York" \
  --start-date 2025-01-01 --end-date 2025-12-31

# Filter results by required keywords
brightdata discover "generative AI SaaS" --filter-keywords "revenue,SaaS"
```

### Export discovery results

```bash theme={null}
# Save as JSON
brightdata discover "AI trends" --num-results 10 --pretty -o results.json

# Pipe-friendly - redirected stdout outputs JSON automatically
brightdata discover "AI trends" --include-content --num-results 3 > results.json
```

***

## How to run browser workflows

### Navigate and read pages

```bash theme={null}
# Open a page and read its content
brightdata browser open https://example.com
brightdata browser snapshot

# Compact snapshot for AI agents (70-90% fewer tokens)
brightdata browser snapshot --compact

# Scope to a specific section
brightdata browser snapshot --selector "main"
```

### Interact with pages

```bash theme={null}
# Open a page
brightdata browser open https://example.com

# Read the page structure
brightdata browser snapshot --compact

# Click, type, and submit using refs from the snapshot
brightdata browser click e3
brightdata browser type e5 "search query" --submit

# Get updated snapshot after interaction
brightdata browser snapshot --compact

# Take a screenshot for visual verification
brightdata browser screenshot ./result.png

# Clean up
brightdata browser close
```

### How to compare multiple sessions

```bash theme={null}
# Open the same page from different countries
brightdata browser open https://amazon.com --session us --country us
brightdata browser open https://amazon.com --session de --country de

# Capture both snapshots
brightdata browser snapshot --session us --json > us.json
brightdata browser snapshot --session de --json > de.json

# Close all sessions
brightdata browser close --all
```

### Extract content from dynamic pages

```bash theme={null}
# Navigate to a page that requires JavaScript
brightdata browser open https://example.com/dashboard

# Get text content from specific elements
brightdata browser get text "#total-revenue"
brightdata browser get text ".summary-table"

# Get HTML for parsing
brightdata browser get html ".product-grid"

# Check network requests
brightdata browser network
```

***

## Structured data extraction

### How to extract e-commerce data

```bash theme={null}
# Amazon product details
brightdata pipelines amazon_product "https://amazon.com/dp/B09V3KXJPB"

# Amazon product reviews
brightdata pipelines amazon_product_reviews "https://amazon.com/dp/B09V3KXJPB"

# Amazon search - requires keyword + domain
brightdata pipelines amazon_product_search "wireless headphones" "https://amazon.com"

# Walmart product
brightdata pipelines walmart_product "https://walmart.com/ip/123456"

# Export as CSV
brightdata pipelines amazon_product "https://amazon.com/dp/B09V3KXJPB" --format csv -o product.csv
```

### Social media profiles

```bash theme={null}
# LinkedIn person
brightdata pipelines linkedin_person_profile "https://linkedin.com/in/username"

# LinkedIn company
brightdata pipelines linkedin_company_profile "https://linkedin.com/company/bright-data"

# Instagram profile
brightdata pipelines instagram_profiles "https://instagram.com/username"

# TikTok profile
brightdata pipelines tiktok_profiles "https://tiktok.com/@username"
```

### Reviews and comments

```bash theme={null}
# Google Maps reviews - last 7 days
brightdata pipelines google_maps_reviews "https://maps.google.com/maps/place/..." 7

# YouTube comments - top 50
brightdata pipelines youtube_comments "https://youtube.com/watch?v=dQw4w9WgXcQ" 50

# Facebook company reviews - 25 reviews
brightdata pipelines facebook_company_reviews "https://facebook.com/company" 25

# Instagram comments
brightdata pipelines instagram_comments "https://instagram.com/p/ABC123"
```

***

## Piping and automation

The CLI is designed to be pipe-friendly. When stdout is not a TTY, colors and spinners are automatically disabled.

### Chain search → scrape

```bash theme={null}
# Search Google, extract the first URL, then scrape it
brightdata search "best python frameworks 2025" --json \
  | jq -r '.organic[0].link' \
  | xargs brightdata scrape
```

### Scrape and read in terminal

```bash theme={null}
# Pipe markdown output to a terminal reader
brightdata scrape https://docs.github.com | glow -

# Or use less
brightdata scrape https://docs.github.com | less
```

### Export to CSV for analysis

```bash theme={null}
# Amazon product data to CSV
brightdata pipelines amazon_product "https://amazon.com/dp/B09V3KXJPB" --format csv > product.csv

# LinkedIn jobs to CSV
brightdata pipelines linkedin_job_listings "https://linkedin.com/jobs/view/123" --format csv -o jobs.csv
```

### Extract specific fields with jq

```bash theme={null}
# Get just the titles and prices from Amazon search
brightdata pipelines amazon_product_search "laptop" "https://amazon.com" \
  | jq '[.[] | {title, price: .final_price}]'

# Get just organic result URLs from search
brightdata search "web scraping" --json | jq -r '.organic[].link'
```

### Async jobs for heavy workloads

```bash theme={null}
# Submit an async scrape
JOB_ID=$(brightdata scrape https://heavy-page.com --async --json | jq -r '.snapshot_id')

# Do other work...

# Check back later
brightdata status $JOB_ID --wait --pretty
```

***

## How to manage your account

### Monitor costs

```bash theme={null}
# Quick balance check
brightdata budget

# Detailed balance with pending charges
brightdata budget balance

# Cost breakdown by zone
brightdata budget zones

# Specific zone in a date range
brightdata budget zone cli_unlocker --from 2024-01-01T00:00:00 --to 2024-02-01T00:00:00
```

### Manage configuration

```bash theme={null}
# View current config
brightdata config

# Set default output to JSON
brightdata config set default_format json

# Use a custom zone for scraping
brightdata config set default_zone_unlocker my_custom_zone

# Override SERP zone
brightdata config set default_zone_serp my_serp_zone
```

***

## AI agent integration

### Add the MCP server to your coding agent

```bash theme={null}
# Interactive - choose agent and scope
brightdata add mcp

# Add to Claude Code globally
brightdata add mcp --agent claude-code --global

# Add to multiple agents at once
brightdata add mcp --agent claude-code,cursor --project

# Add to Codex
brightdata add mcp --agent codex --global
```

### Install skills into coding agents

```bash theme={null}
# Interactive picker - choose skills and target agents
brightdata skill add

# Install the scraping skill into your agent
brightdata skill add scrape

# Install search capabilities
brightdata skill add search

# See all available skills
brightdata skill list
```

<Tip>
  Skills are pre-packaged bundles of prompts and configuration that teach AI coding agents how to use Bright Data effectively. See [Skills](/ai/for-agents/skills) for more details.
</Tip>

***

## Supported environment variables

Override any stored configuration with environment variables:

| Variable                     | Purpose                                                |
| ---------------------------- | ------------------------------------------------------ |
| `BRIGHTDATA_API_KEY`         | API key (skips login entirely)                         |
| `BRIGHTDATA_UNLOCKER_ZONE`   | Default Web Unlocker zone                              |
| `BRIGHTDATA_SERP_ZONE`       | Default SERP zone                                      |
| `BRIGHTDATA_POLLING_TIMEOUT` | Polling timeout in seconds                             |
| `BRIGHTDATA_BROWSER_ZONE`    | Default Scraping Browser zone (default: `cli_browser`) |

```bash theme={null}
# Use in CI/CD without login
BRIGHTDATA_API_KEY=your_key brightdata scrape https://example.com

# Override timeout for large pipeline jobs
BRIGHTDATA_POLLING_TIMEOUT=1200 brightdata pipelines amazon_product "https://amazon.com/dp/..."
```
