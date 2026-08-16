# Command reference

> **Official Source**: [https://docs.brightdata.com/cli/commands](https://docs.brightdata.com/cli/commands)
> **Category**: `ai-and-mcp`

---

Reference for every Bright Data CLI command across 4 areas (scrape, search, pipelines and config), with flags, global options and copy-paste examples.

## Global options

These flags work with any command:

| Flag                  | Description                       |
| --------------------- | --------------------------------- |
| `-k, --api-key <key>` | Override API key for this request |
| `--timing`            | Show request timing info          |
| `-v, --version`       | Show CLI version                  |

***

## `brightdata login`

Authenticate with Bright Data. Opens the browser for OAuth by default.

| Flag                     | Description                                   |
| ------------------------ | --------------------------------------------- |
| `-k, --api-key <key>`    | Use API key directly (skips browser)          |
| `-c, --customer-id <id>` | Bright Data account ID (optional)             |
| `-d, --device`           | Use device flow for SSH/headless environments |

```bash theme={null}
brightdata login                        # Browser OAuth (recommended)
brightdata login --device               # Headless/SSH environments
brightdata login --api-key <key>        # Direct API key
```

<Tip>
  On first login, the CLI automatically creates `cli_unlocker` and `cli_browser` proxy zones and sets sensible defaults.
</Tip>

***

## `brightdata logout`

Clear stored credentials.

```bash theme={null}
brightdata logout
```

***

## `brightdata scrape <url>`

Scrape any URL using Bright Data's Web Unlocker. Handles CAPTCHAs, JavaScript rendering, and anti-bot protections automatically.

| Flag                  | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `-f, --format <fmt>`  | `markdown` (default), `html`, `screenshot`, `json`         |
| `--country <code>`    | ISO country code for geo-targeting (e.g. `us`, `de`, `jp`) |
| `--zone <name>`       | Web Unlocker zone name                                     |
| `--mobile`            | Use a mobile user agent                                    |
| `--async`             | Submit async, return a snapshot ID                         |
| `-o, --output <path>` | Write output to file                                       |
| `--json`              | Force JSON output                                          |
| `--pretty`            | Pretty-print JSON output                                   |

<CodeGroup>
  ```bash Markdown (default) theme={null}
  brightdata scrape https://news.ycombinator.com
  ```

  ```bash HTML theme={null}
  brightdata scrape https://example.com -f html
  ```

  ```bash JSON with geo-targeting theme={null}
  brightdata scrape https://amazon.com -f json --country us -o product.json
  ```

  ```bash Screenshot theme={null}
  brightdata scrape https://example.com -f screenshot -o page.png
  ```

  ```bash Async mode theme={null}
  brightdata scrape https://example.com --async
  ```

  ```bash Pipe to markdown reader theme={null}
  brightdata scrape https://docs.github.com | glow -
  ```
</CodeGroup>

***

## `brightdata search <query>`

Search Google, Bing, or Yandex via Bright Data's SERP API. Google returns structured JSON with organic results, ads, People Also Ask, and related searches. Bing and Yandex return markdown by default.

| Flag                  | Description                                   |
| --------------------- | --------------------------------------------- |
| `--engine <name>`     | `google` (default), `bing`, `yandex`          |
| `--country <code>`    | Localized results (e.g. `us`, `de`)           |
| `--language <code>`   | Language code (e.g. `en`, `fr`)               |
| `--page <n>`          | Page number, 0-indexed (default: `0`)         |
| `--type <type>`       | `web` (default), `news`, `images`, `shopping` |
| `--device <type>`     | `desktop`, `mobile`                           |
| `--zone <name>`       | SERP zone name                                |
| `-o, --output <path>` | Write output to file                          |
| `--json`              | Force JSON output                             |
| `--pretty`            | Pretty-print JSON output                      |

<CodeGroup>
  ```bash Basic search theme={null}
  brightdata search "typescript best practices"
  ```

  ```bash Localized search theme={null}
  brightdata search "restaurants berlin" --country de --language de
  ```

  ```bash News search theme={null}
  brightdata search "AI regulation" --type news
  ```

  ```bash Pagination theme={null}
  brightdata search "web scraping" --page 1
  ```

  ```bash Extract URLs with jq theme={null}
  brightdata search "open source scraping" --json | jq -r '.organic[].link'
  ```

  ```bash Bing search theme={null}
  brightdata search "bright data pricing" --engine bing
  ```
</CodeGroup>

***

## `brightdata discover <query>`

AI-powered web discovery. Submit a query with optional intent, and Bright Data finds, ranks, and optionally extracts full-page content for each result.

| Flag                        | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `--intent <text>`           | AI intent to evaluate and rank result relevance      |
| `--country <code>`          | ISO country code (default: `US`)                     |
| `--city <name>`             | City for localized results (e.g. `"New York"`)       |
| `--language <code>`         | Language code (default: `en`)                        |
| `--num-results <n>`         | Number of results to return                          |
| `--filter-keywords <words>` | Comma-separated keywords that must appear in results |
| `--include-content`         | Include full page content (markdown) in each result  |
| `--no-remove-duplicates`    | Keep duplicate results                               |
| `--start-date <date>`       | Only content updated from date (`YYYY-MM-DD`)        |
| `--end-date <date>`         | Only content updated until date (`YYYY-MM-DD`)       |
| `--timeout <seconds>`       | Polling timeout (default: `600`)                     |
| `-o, --output <path>`       | Write output to file                                 |
| `--json` / `--pretty`       | JSON output (raw / indented)                         |

<CodeGroup>
  ```bash Basic discovery theme={null}
  brightdata discover "AI trends"
  ```

  ```bash With AI intent for relevance ranking theme={null}
  brightdata discover "AI trends" \
    --intent "Prioritize institutional reports for VC research"
  ```

  ```bash Include full page content theme={null}
  brightdata discover "AI trends" --include-content --num-results 5
  ```

  ```bash Geo-targeted with date range theme={null}
  brightdata discover "best restaurants" --country US --city "New York" \
    --start-date 2025-01-01 --end-date 2025-12-31
  ```

  ```bash Filter by keywords theme={null}
  brightdata discover "generative AI SaaS" --filter-keywords "revenue,SaaS"
  ```

  ```bash JSON output to file theme={null}
  brightdata discover "AI trends" --num-results 10 --pretty -o results.json
  ```
</CodeGroup>

<Tip>
  For best results with `--intent`, use a structured formula: describe your persona, what to prioritize, the depth of analysis, and what to exclude. See the [Discover API reference](/api-reference/discover) for detailed guidance.
</Tip>

***

## `brightdata pipelines <type> [params...] [options]`

Extract structured data from 40+ platforms. Triggers an async collection job, polls until results are ready, and returns the data.

| Flag                  | Description                                |
| --------------------- | ------------------------------------------ |
| `--format <fmt>`      | `json` (default), `csv`, `ndjson`, `jsonl` |
| `--timeout <seconds>` | Polling timeout (default: `600`)           |
| `-o, --output <path>` | Write output to file                       |
| `--json`              | Force JSON output                          |
| `--pretty`            | Pretty-print JSON output                   |

```bash theme={null}
# List all available pipeline types
brightdata pipelines list
```

<CodeGroup>
  ```bash LinkedIn profile theme={null}
  brightdata pipelines linkedin_person_profile "https://linkedin.com/in/username"
  ```

  ```bash Amazon product theme={null}
  brightdata pipelines amazon_product "https://amazon.com/dp/B09V3KXJPB"
  ```

  ```bash Amazon search theme={null}
  brightdata pipelines amazon_product_search "laptop" "https://amazon.com"
  ```

  ```bash Instagram profile theme={null}
  brightdata pipelines instagram_profiles "https://instagram.com/username"
  ```

  ```bash YouTube comments theme={null}
  brightdata pipelines youtube_comments "https://youtube.com/watch?v=..." 50
  ```

  ```bash CSV export theme={null}
  brightdata pipelines amazon_product "https://amazon.com/dp/..." --format csv -o product.csv
  ```
</CodeGroup>

### Supported platforms

<AccordionGroup>
  <Accordion title="E-Commerce" icon="cart-shopping">
    | Type                     | Platform               | Parameters               |
    | ------------------------ | ---------------------- | ------------------------ |
    | `amazon_product`         | Amazon product page    | `<url>`                  |
    | `amazon_product_reviews` | Amazon reviews         | `<url>`                  |
    | `amazon_product_search`  | Amazon search results  | `<keyword> <domain_url>` |
    | `walmart_product`        | Walmart product page   | `<url>`                  |
    | `walmart_seller`         | Walmart seller profile | `<url>`                  |
    | `ebay_product`           | eBay listing           | `<url>`                  |
    | `bestbuy_products`       | Best Buy               | `<url>`                  |
    | `etsy_products`          | Etsy                   | `<url>`                  |
    | `homedepot_products`     | Home Depot             | `<url>`                  |
    | `zara_products`          | Zara                   | `<url>`                  |
    | `google_shopping`        | Google Shopping        | `<url>`                  |
  </Accordion>

  <Accordion title="Professional Networks" icon="briefcase">
    | Type                       | Platform               | Parameters                       |
    | -------------------------- | ---------------------- | -------------------------------- |
    | `linkedin_person_profile`  | LinkedIn person        | `<url>`                          |
    | `linkedin_company_profile` | LinkedIn company       | `<url>`                          |
    | `linkedin_job_listings`    | LinkedIn jobs          | `<url>`                          |
    | `linkedin_posts`           | LinkedIn posts         | `<url>`                          |
    | `linkedin_people_search`   | LinkedIn people search | `<url> <first_name> <last_name>` |
    | `crunchbase_company`       | Crunchbase             | `<url>`                          |
    | `zoominfo_company_profile` | ZoomInfo               | `<url>`                          |
  </Accordion>

  <Accordion title="Social Media" icon="hashtag">
    | Type                            | Platform             | Parameters             |
    | ------------------------------- | -------------------- | ---------------------- |
    | `instagram_profiles`            | Instagram profiles   | `<url>`                |
    | `instagram_posts`               | Instagram posts      | `<url>`                |
    | `instagram_reels`               | Instagram reels      | `<url>`                |
    | `instagram_comments`            | Instagram comments   | `<url>`                |
    | `facebook_posts`                | Facebook posts       | `<url>`                |
    | `facebook_marketplace_listings` | Facebook Marketplace | `<url>`                |
    | `facebook_company_reviews`      | Facebook reviews     | `<url> [num_reviews]`  |
    | `facebook_events`               | Facebook events      | `<url>`                |
    | `tiktok_profiles`               | TikTok profiles      | `<url>`                |
    | `tiktok_posts`                  | TikTok posts         | `<url>`                |
    | `tiktok_shop`                   | TikTok shop          | `<url>`                |
    | `tiktok_comments`               | TikTok comments      | `<url>`                |
    | `x_posts`                       | X (Twitter) posts    | `<url>`                |
    | `youtube_profiles`              | YouTube channels     | `<url>`                |
    | `youtube_videos`                | YouTube videos       | `<url>`                |
    | `youtube_comments`              | YouTube comments     | `<url> [num_comments]` |
    | `reddit_posts`                  | Reddit posts         | `<url>`                |
  </Accordion>

  <Accordion title="Maps, Reviews & Other" icon="map-location-dot">
    | Type                        | Platform                | Parameters           |
    | --------------------------- | ----------------------- | -------------------- |
    | `google_maps_reviews`       | Google Maps reviews     | `<url> [days_limit]` |
    | `google_play_store`         | Google Play             | `<url>`              |
    | `apple_app_store`           | Apple App Store         | `<url>`              |
    | `github_repository_file`    | GitHub repository files | `<url>`              |
    | `yahoo_finance_business`    | Yahoo Finance           | `<url>`              |
    | `zillow_properties_listing` | Zillow                  | `<url>`              |
    | `booking_hotel_listings`    | Booking.com             | `<url>`              |
  </Accordion>
</AccordionGroup>

<Tip>
  Run `brightdata pipelines list` in your terminal to see all available types at any time.
</Tip>

***

## `brightdata scraper`

Build, run, and maintain custom [Bright Data Scraper Studio](/datasets/scraper-studio/build-with-the-cli) scrapers from the terminal. Each scraper is identified by a Collector ID (a `c_*` string) that stays stable across runs and self-healing.

### `brightdata scraper create <url> <description>`

Build a scraper from a natural-language description using Bright Data's AI Agent. Returns a Collector ID.

```bash theme={null}
brightdata scraper create https://news.ycombinator.com \
  "Extract top stories: title, url, points, author, comment count"
```

AI generation typically takes 5 to 15 minutes and can run up to 25 minutes on complex targets.

### `brightdata scraper run <collector_id> [url]`

Run a scraper on one or more URLs and return the data. The CLI tries real-time mode first and falls back to batch mode automatically when a run exceeds the real-time page-load limit.

| Flag                  | Description              |
| --------------------- | ------------------------ |
| `-o, --output <path>` | Write output to file     |
| `--json`              | Force JSON output        |
| `--pretty`            | Pretty-print JSON output |

```bash theme={null}
brightdata scraper run c_mpohus372o5tmid1jk https://news.ycombinator.com --pretty
```

### `brightdata scraper heal <collector_id> <prompt>`

Fix an existing scraper in place via AI self-healing. The Collector ID does not change. By default, `heal` stops at an approval gate and returns `status: "awaiting_approval"` with a `preview_result`.

| Flag                  | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `--url <url>`         | Verify target woven into the next-step hint. Not sent to the heal call |
| `--auto-approve`      | Approve automatically at the gate and poll through to `done`           |
| `--timeout <seconds>` | Polling timeout (default: `600`)                                       |
| `--max-retries <n>`   | Max retries on the AI-Flow concurrent-job 429 cap (default: `4`)       |
| `--no-retry`          | Fail immediately on 429 instead of waiting through the cap             |
| `-o, --output <path>` | Write output to file                                                   |
| `--json` / `--pretty` | JSON output (raw / indented)                                           |

```bash theme={null}
brightdata scraper heal c_mpohus372o5tmid1jk \
  "The price field returns null since the redesign. Re-capture price and currency." \
  --url https://example.com/product/1
```

### `brightdata scraper approve <collector_id>`

Commit a heal that is awaiting approval, or reject it with `--reject`.

| Flag                  | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `--reject`            | Reject the proposed fix instead of approving it        |
| `--url <url>`         | Verify target woven into the next-step hint on success |
| `--timeout <seconds>` | Polling timeout (default: `600`)                       |
| `-o, --output <path>` | Write output to file                                   |
| `--json` / `--pretty` | JSON output                                            |

```bash theme={null}
brightdata scraper approve c_mpohus372o5tmid1jk --url https://example.com/product/1
brightdata scraper approve c_mpohus372o5tmid1jk --reject
```

<Tip>
  The self-healing flow is run, inspect, `heal`, `approve`, re-run. See the [Scraper Studio CLI quickstart](/datasets/scraper-studio/build-with-the-cli) for a full walkthrough. `scraper heal` and `scraper approve` were added in CLI v0.3.1.
</Tip>

***

## `brightdata status <job-id>`

Check the status of an async snapshot job (from `--async` scrapes or pipeline collections).

| Flag                  | Description                      |
| --------------------- | -------------------------------- |
| `--wait`              | Poll until the job completes     |
| `--timeout <seconds>` | Polling timeout (default: `600`) |
| `-o, --output <path>` | Write output to file             |
| `--json` / `--pretty` | JSON output                      |

```bash theme={null}
brightdata status s_abc123xyz
brightdata status s_abc123xyz --wait --pretty
brightdata status s_abc123xyz --wait --timeout 300
```

***

## `brightdata browser`

Control a real browser session powered by Bright Data's [Scraping Browser](/scraping-automation/scraping-browser). A lightweight local daemon holds the browser connection open between commands, giving you persistent state without reconnecting on every call.

```bash theme={null}
brightdata browser <subcommand> [options]
```

### Global flags

These flags work with every `browser` subcommand:

| Flag                  | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| `--session <name>`    | Session name for running multiple isolated sessions in parallel (default: `default`) |
| `--country <code>`    | Geo-target by ISO country code. On `open`, changing country reconnects the browser   |
| `--zone <name>`       | Scraping Browser zone (default: `cli_browser`)                                       |
| `--timeout <ms>`      | IPC command timeout in milliseconds (default: `30000`)                               |
| `--idle-timeout <ms>` | Daemon auto-shutdown after idle (default: `600000` / 10 min)                         |
| `--json` / `--pretty` | JSON output                                                                          |
| `-o, --output <path>` | Write output to file                                                                 |

### Subcommands

<AccordionGroup>
  <Accordion title="browser open" icon="globe">
    Navigate to a URL. Starts the daemon and browser session automatically if not already running.

    ```bash theme={null}
    brightdata browser open <url>
    brightdata browser open https://amazon.com --country us --session shop
    ```

    | Flag                  | Description                                                                         |
    | --------------------- | ----------------------------------------------------------------------------------- |
    | `--country <code>`    | Geo-targeting. Reconnects the browser if the country changes on an existing session |
    | `--zone <name>`       | Browser zone name                                                                   |
    | `--idle-timeout <ms>` | Daemon idle timeout for this session                                                |
  </Accordion>

  <Accordion title="browser snapshot" icon="camera">
    Capture the page as a text accessibility tree. This is the primary way AI agents read page content - far more token-efficient than raw HTML.

    Each interactive element gets a `ref` (e.g. `e1`, `e2`) that you pass to `click`, `type`, `fill`, and other interaction commands.

    ```bash theme={null}
    brightdata browser snapshot
    brightdata browser snapshot --compact          # Interactive elements + ancestors only
    brightdata browser snapshot --interactive      # Interactive elements as a flat list
    brightdata browser snapshot --depth 3          # Limit tree depth
    brightdata browser snapshot --selector "main"  # Scope to a CSS subtree
    ```

    **Example output:**

    ```text theme={null}
    Page: Example Domain
    URL: https://example.com

    - heading "Example Domain" [level=1]
    - paragraph "This domain is for use in illustrative examples."
    - link "More information..." [ref=e1]
    ```

    | Flag               | Description                                                                     |
    | ------------------ | ------------------------------------------------------------------------------- |
    | `--compact`        | Only interactive elements and their ancestors (70-90% fewer tokens)             |
    | `--interactive`    | Only interactive elements, as a flat list                                       |
    | `--depth <n>`      | Limit tree depth                                                                |
    | `--selector <sel>` | Scope snapshot to elements matching a CSS selector                              |
    | `--wrap`           | Wrap output in content boundaries (useful for AI agent prompt injection safety) |
  </Accordion>

  <Accordion title="browser screenshot" icon="image">
    Capture a PNG screenshot of the current viewport.

    ```bash theme={null}
    brightdata browser screenshot
    brightdata browser screenshot ./result.png
    brightdata browser screenshot --full-page -o page.png
    brightdata browser screenshot --base64
    ```

    | Flag          | Description                                                |
    | ------------- | ---------------------------------------------------------- |
    | `[path]`      | Where to save the PNG (default: temp directory)            |
    | `--full-page` | Capture the full scrollable page, not just the viewport    |
    | `--base64`    | Output base64-encoded PNG data instead of saving to a file |
  </Accordion>

  <Accordion title="browser click / type / fill" icon="hand-pointer">
    Interact with elements using their snapshot `ref` values.

    ```bash theme={null}
    # Click an element
    brightdata browser click e3

    # Type text into a field (clears first by default)
    brightdata browser type e5 "search query"
    brightdata browser type e5 " more text" --append    # Append to existing value
    brightdata browser type e5 "search query" --submit  # Press Enter after typing

    # Fill a form field directly (no keyboard simulation)
    brightdata browser fill e2 "user@example.com"

    # Select a dropdown option by visible label
    brightdata browser select e4 "United States"

    # Check / uncheck a checkbox or radio button
    brightdata browser check e7
    brightdata browser uncheck e7

    # Hover over an element
    brightdata browser hover e2
    ```

    | Flag (for `type`) | Description                                          |
    | ----------------- | ---------------------------------------------------- |
    | `--append`        | Append to existing value using key-by-key simulation |
    | `--submit`        | Press Enter after typing                             |
  </Accordion>

  <Accordion title="browser scroll" icon="arrows-up-down">
    Scroll the viewport or scroll an element into view.

    ```bash theme={null}
    brightdata browser scroll                          # Scroll down 300px (default)
    brightdata browser scroll --direction up
    brightdata browser scroll --direction down --distance 600
    brightdata browser scroll --ref e10                # Scroll element into view
    ```

    | Flag                | Description                                           |
    | ------------------- | ----------------------------------------------------- |
    | `--direction <dir>` | `up`, `down`, `left`, `right` (default: `down`)       |
    | `--distance <px>`   | Pixels to scroll (default: `300`)                     |
    | `--ref <ref>`       | Scroll this element into view instead of the viewport |
  </Accordion>

  <Accordion title="browser get text / get html" icon="code">
    Get text or HTML content from the page or a specific element.

    ```bash theme={null}
    # Text content
    brightdata browser get text            # Full page text
    brightdata browser get text "h1"       # Text of the first h1
    brightdata browser get text "#price"   # Text inside #price

    # HTML content
    brightdata browser get html              # Full page outer HTML
    brightdata browser get html ".product"   # innerHTML of .product
    ```
  </Accordion>

  <Accordion title="browser network / cookies / status" icon="network-wired">
    Inspect session state.

    ```bash theme={null}
    # HTTP requests captured since last navigation
    brightdata browser network

    # Cookies for the active session
    brightdata browser cookies

    # Current session state
    brightdata browser status
    brightdata browser status --session shop --pretty

    # List all active sessions
    brightdata browser sessions
    ```
  </Accordion>

  <Accordion title="browser back / forward / reload" icon="rotate">
    Navigation controls.

    ```bash theme={null}
    brightdata browser back
    brightdata browser forward
    brightdata browser reload
    ```
  </Accordion>

  <Accordion title="browser close" icon="xmark">
    Close a session and stop its daemon.

    ```bash theme={null}
    brightdata browser close                    # Close the default session
    brightdata browser close --session shop     # Close a named session
    brightdata browser close --all              # Close all active sessions
    ```
  </Accordion>
</AccordionGroup>

<Note>
  Element `ref` values (e.g. `e1`, `e3`) are re-assigned on every `snapshot` call. After navigating or clicking, take a fresh snapshot before using refs again.
</Note>

***

## `brightdata zones`

List and inspect Bright Data proxy zones.

```bash theme={null}
brightdata zones                        # List all active zones
brightdata zones info <name>            # Full details for a zone
brightdata zones --json -o zones.json   # Export as JSON
brightdata zones info my_zone --pretty  # Pretty-print zone info
```

***

## `brightdata budget`

View account balance and per-zone cost/bandwidth. Read-only.

| Subcommand    | Description                            |
| ------------- | -------------------------------------- |
| *(none)*      | Quick account balance                  |
| `balance`     | Balance + pending charges              |
| `zones`       | Cost & bandwidth table for all zones   |
| `zone <name>` | Detailed cost & bandwidth for one zone |

| Flag                  | Description                                      |
| --------------------- | ------------------------------------------------ |
| `--from <datetime>`   | Start of date range (e.g. `2024-01-01T00:00:00`) |
| `--to <datetime>`     | End of date range                                |
| `--json` / `--pretty` | JSON output                                      |

```bash theme={null}
brightdata budget
brightdata budget balance
brightdata budget zones
brightdata budget zone my_zone
brightdata budget zones --from 2024-01-01T00:00:00 --to 2024-02-01T00:00:00
```

***

## `brightdata config`

View and manage CLI configuration.

| Subcommand          | Description        |
| ------------------- | ------------------ |
| *(none)*            | Show all config    |
| `get <key>`         | Get a single value |
| `set <key> <value>` | Set a value        |

| Config Key              | Description                                 |
| ----------------------- | ------------------------------------------- |
| `default_zone_unlocker` | Default zone for `scrape` and `search`      |
| `default_zone_serp`     | Override zone for `search` only             |
| `default_format`        | Default output format: `markdown` or `json` |
| `api_url`               | Override API base URL                       |

```bash theme={null}
brightdata config
brightdata config set default_zone_unlocker my_zone
brightdata config set default_format json
brightdata config get default_zone_unlocker
```

***

## `brightdata init`

Interactive setup wizard. Walks through authentication, zone selection, and default configuration.

| Flag                  | Description                  |
| --------------------- | ---------------------------- |
| `--skip-auth`         | Skip the authentication step |
| `-k, --api-key <key>` | Provide API key directly     |

```bash theme={null}
brightdata init
```

***

## `brightdata skill`

Install Bright Data AI agent skills into coding agents (Claude Code, Cursor, Copilot, etc.).

| Subcommand   | Description                                        |
| ------------ | -------------------------------------------------- |
| `add`        | Interactive picker - choose skills + target agents |
| `add <name>` | Install a specific skill directly                  |
| `list`       | List all available skills                          |

Available skills: `search`, `scrape`, `data-feeds`, `bright-data-mcp`, `bright-data-best-practices`

```bash theme={null}
brightdata skill add              # Interactive picker
brightdata skill add scrape       # Direct install
brightdata skill list             # See what's available
```

***

## `brightdata add mcp`

Add the Bright Data MCP server to Claude Code, Cursor, or Codex. Uses the API key stored by `brightdata login`.

```bash theme={null}
brightdata add mcp                               # Interactive agent + scope prompts
brightdata add mcp --agent claude-code --global
brightdata add mcp --agent claude-code,cursor --project
brightdata add mcp --agent codex --global
```

| Flag               | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `--agent <agents>` | Comma-separated targets: `claude-code`, `cursor`, `codex` |
| `--global`         | Install to the agent's global config file                 |
| `--project`        | Install to the current project's config file              |

### Config file locations

| Agent       | Global path                                   | Project path            |
| ----------- | --------------------------------------------- | ----------------------- |
| Claude Code | `~/.claude.json`                              | `.claude/settings.json` |
| Cursor      | `~/.cursor/mcp.json`                          | `.cursor/mcp.json`      |
| Codex       | `$CODEX_HOME/mcp.json` or `~/.codex/mcp.json` | Not supported           |

The command writes the MCP server entry under `mcpServers["bright-data"]`. Existing config is preserved - only the `bright-data` key is added or replaced.

<Warning>
  `brightdata add mcp` uses the API key stored by `brightdata login`. It does not read `BRIGHTDATA_API_KEY` or the `--api-key` flag, so run `brightdata login` first.
</Warning>
