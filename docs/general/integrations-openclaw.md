# Set up Bright Data with OpenClaw

> **Official Source**: [https://docs.brightdata.com/integrations/openclaw](https://docs.brightdata.com/integrations/openclaw)
> **Category**: `general`

---

Give your OpenClaw AI agent real-time web search, bot-bypass scraping, browser automation, and 50+ structured data tools powered by Bright Data.

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

[OpenClaw](https://openclaw.ai/) is a self-hosted AI assistant gateway that connects messaging apps like WhatsApp, Telegram, Discord, and iMessage to AI coding agents. It features a plugin system that lets you extend your agent with new tools and capabilities.

The **Bright Data plugin for OpenClaw** brings the full power of Bright Data's web data infrastructure directly into your OpenClaw agent. Install once, and your agent gains:

* **Real-time web search** via Google, Bing, and Yandex with geo-targeting
* **Bot-bypass scraping** through Web Unlocker, which handles CAPTCHAs, JS rendering, and rate limits automatically
* **Full browser automation** via a real Chromium instance routed through Bright Data's residential proxy network
* **50+ structured data tools** for Amazon, LinkedIn, Instagram, TikTok, YouTube, Reddit, and more

<Note>
  The plugin registers **66 tools** across five categories: search, scrape, batch operations, browser automation, and structured web data.
</Note>

## Steps to Get Started

<Steps>
  <Step title="Prerequisites">
    * [OpenClaw](https://openclaw.ai/) installed and running
    * A [Bright Data account](https://brightdata.com) with an API key
    * Node.js 22+ (managed by OpenClaw)
  </Step>

  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Plugin">
    Install the plugin using the OpenClaw CLI:

    ```bash theme={null}
    openclaw plugins install @brightdata/brightdata-plugin
    ```

    Verify the installation:

    ```bash theme={null}
    openclaw plugins inspect brightdata
    ```

    You should see the plugin ID `brightdata` along with all registered tools.
  </Step>

  <Step title="Configure Your API Key">
    Choose one of the following methods to provide your Bright Data API key:

    <Tabs>
      <Tab title="Environment Variable (recommended for local dev)">
        ```bash theme={null}
        export BRIGHTDATA_API_TOKEN=your_token_here
        ```
      </Tab>

      <Tab title="OpenClaw Config (recommended for persistent setups)">
        ```bash theme={null}
        openclaw config set plugins.entries.brightdata.config.webSearch.apiKey your_token_here
        ```
      </Tab>
    </Tabs>

    <Tip>
      The plugin automatically creates two proxy zones on first use: `mcp_unlocker` (Web Unlocker) and `mcp_browser` (Browser API). No manual zone setup is required.
    </Tip>

    To use existing zones instead:

    ```bash theme={null}
    export BRIGHTDATA_UNLOCKER_ZONE=my_existing_zone
    export BRIGHTDATA_BROWSER_ZONE=my_existing_browser_zone
    ```
  </Step>

  <Step title="Enable the Plugin">
    Enable the plugin and restart the gateway:

    ```bash theme={null}
    openclaw plugins enable brightdata
    openclaw gateway restart
    ```

    <Note>
      If the plugin tools are not being exposed to your agent, you may need to explicitly allow plugin tools:

      ```bash theme={null}
      openclaw config set tools.alsoAllow '["group:plugins"]'
      ```
    </Note>
  </Step>

  <Step title="Start Using the Tools">
    Your OpenClaw agent now has access to all 66 Bright Data tools. Try these example prompts:

    ```text Search the web theme={null}
    Use the brightdata_search tool to search for "latest AI news" and return the top 5 results.
    ```

    ```text Scrape a webpage theme={null}
    Use the brightdata_scrape tool on https://example.com and summarize the page in 3 bullets.
    ```

    ```text Automate a browser theme={null}
    Use brightdata_browser_navigate to open https://example.com, then use brightdata_browser_get_text to return the visible page text.
    ```

    ```text Get structured data theme={null}
    Use brightdata_amazon_product to get details for https://www.amazon.com/dp/B0D2Q9397Y
    ```
  </Step>
</Steps>

## Available Tools

### How to search the web

| Tool                      | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `brightdata_search`       | Search Google, Bing, or Yandex with geo-targeting. Returns structured results with pagination support. |
| `brightdata_search_batch` | Run up to 5 search queries in parallel. Partial failures are returned inline.                          |

**Parameters for `brightdata_search`:**

| Parameter      | Type                                 | Description                                 |
| -------------- | ------------------------------------ | ------------------------------------------- |
| `query`        | `string`                             | **Required.** Search query                  |
| `engine`       | `"google"` \| `"bing"` \| `"yandex"` | Search engine (default: `google`)           |
| `count`        | `number`                             | Results to return, 1-10                     |
| `cursor`       | `string`                             | Pagination cursor for next page             |
| `geo_location` | `string`                             | 2-letter ISO country code (e.g. `us`, `de`) |

### Scrape

| Tool                      | Description                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `brightdata_scrape`       | Fetch any page through Web Unlocker. Works on bot-protected sites, JS-rendered pages, and geo-restricted content. |
| `brightdata_scrape_batch` | Scrape up to 5 URLs in parallel with the same extraction options.                                                 |

**Parameters for `brightdata_scrape`:**

| Parameter     | Type                                 | Description                             |
| ------------- | ------------------------------------ | --------------------------------------- |
| `url`         | `string`                             | **Required.** HTTP/HTTPS URL to scrape  |
| `extractMode` | `"markdown"` \| `"text"` \| `"html"` | Output format (default: `markdown`)     |
| `maxChars`    | `number`                             | Maximum characters to return (min: 100) |

### How to automate the browser

Full Chromium browser control routed through Bright Data's residential proxy network. Sessions idle-timeout after 10 minutes.

| Tool                                  | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| `brightdata_browser_navigate`         | Navigate to a URL with optional country routing        |
| `brightdata_browser_snapshot`         | Capture an ARIA snapshot with interactive element refs |
| `brightdata_browser_click`            | Click an element by its snapshot ref                   |
| `brightdata_browser_type`             | Type into a field by ref (optional Enter to submit)    |
| `brightdata_browser_fill_form`        | Fill multiple form fields in a single operation        |
| `brightdata_browser_screenshot`       | Take a viewport or full-page screenshot                |
| `brightdata_browser_get_html`         | Get current page HTML                                  |
| `brightdata_browser_get_text`         | Get current page text content                          |
| `brightdata_browser_scroll`           | Scroll to the bottom of the page                       |
| `brightdata_browser_scroll_to`        | Scroll to a specific element by ref                    |
| `brightdata_browser_wait_for`         | Wait for an element to become visible                  |
| `brightdata_browser_network_requests` | List network requests since page load                  |
| `brightdata_browser_go_back`          | Navigate back                                          |
| `brightdata_browser_go_forward`       | Navigate forward                                       |

### Structured Web Data (50+ Platforms)

Each tool accepts a `url` or `keyword` and returns clean, typed JSON. No scraping or parsing required.

<AccordionGroup>
  <Accordion title="E-commerce (10 tools)">
    | Tool                                | Data                             |
    | ----------------------------------- | -------------------------------- |
    | `brightdata_amazon_product`         | Product details, pricing, specs  |
    | `brightdata_amazon_product_reviews` | Customer reviews and ratings     |
    | `brightdata_amazon_product_search`  | Search results with rankings     |
    | `brightdata_walmart_product`        | Product details and availability |
    | `brightdata_walmart_seller`         | Seller profile and metrics       |
    | `brightdata_ebay_product`           | Listing details and bids         |
    | `brightdata_homedepot_products`     | Product catalog and pricing      |
    | `brightdata_zara_products`          | Fashion catalog data             |
    | `brightdata_etsy_products`          | Handmade and vintage listings    |
    | `brightdata_bestbuy_products`       | Electronics catalog and deals    |
  </Accordion>

  <Accordion title="Professional Networks (7 tools)">
    | Tool                                  | Data                         |
    | ------------------------------------- | ---------------------------- |
    | `brightdata_linkedin_person_profile`  | Full person profile          |
    | `brightdata_linkedin_company_profile` | Company overview and stats   |
    | `brightdata_linkedin_job_listings`    | Open positions with details  |
    | `brightdata_linkedin_posts`           | Post content and engagement  |
    | `brightdata_linkedin_people_search`   | People search results        |
    | `brightdata_crunchbase_company`       | Funding, investors, founders |
    | `brightdata_zoominfo_company_profile` | Company intelligence data    |
  </Accordion>

  <Accordion title="Social Media (17 tools)">
    **Instagram**

    | Tool                            | Data                        |
    | ------------------------------- | --------------------------- |
    | `brightdata_instagram_profiles` | Profile stats and bio       |
    | `brightdata_instagram_posts`    | Post content and engagement |
    | `brightdata_instagram_reels`    | Reel metadata and views     |
    | `brightdata_instagram_comments` | Comment threads             |

    **Facebook**

    | Tool                                       | Data                         |
    | ------------------------------------------ | ---------------------------- |
    | `brightdata_facebook_posts`                | Post content and reactions   |
    | `brightdata_facebook_marketplace_listings` | Marketplace items            |
    | `brightdata_facebook_company_reviews`      | Page reviews and ratings     |
    | `brightdata_facebook_events`               | Event details and attendance |

    **TikTok**

    | Tool                         | Data                      |
    | ---------------------------- | ------------------------- |
    | `brightdata_tiktok_profiles` | Creator profile and stats |
    | `brightdata_tiktok_posts`    | Video content and metrics |
    | `brightdata_tiktok_shop`     | TikTok Shop product data  |
    | `brightdata_tiktok_comments` | Comment threads           |

    **X (Twitter)**

    | Tool                         | Data                     |
    | ---------------------------- | ------------------------ |
    | `brightdata_x_posts`         | Post content and metrics |
    | `brightdata_x_profile_posts` | Profile post history     |

    **YouTube & Reddit**

    | Tool                          | Data                      |
    | ----------------------------- | ------------------------- |
    | `brightdata_youtube_profiles` | Channel stats and info    |
    | `brightdata_youtube_videos`   | Video details and metrics |
    | `brightdata_youtube_comments` | Comment threads           |
    | `brightdata_reddit_posts`     | Post content and scores   |
  </Accordion>

  <Accordion title="Maps, Shopping & Apps (4 tools)">
    | Tool                             | Data                         |
    | -------------------------------- | ---------------------------- |
    | `brightdata_google_maps_reviews` | Location reviews and ratings |
    | `brightdata_google_shopping`     | Shopping results and prices  |
    | `brightdata_google_play_store`   | App details and reviews      |
    | `brightdata_apple_app_store`     | App details and reviews      |
  </Accordion>

  <Accordion title="Finance, News & Code (3 tools)">
    | Tool                                | Data                        |
    | ----------------------------------- | --------------------------- |
    | `brightdata_yahoo_finance_business` | Company financials and news |
    | `brightdata_github_repository_file` | Repository file contents    |
  </Accordion>

  <Accordion title="Real Estate & Travel (2 tools)">
    | Tool                                   | Data                            |
    | -------------------------------------- | ------------------------------- |
    | `brightdata_zillow_properties_listing` | Property listings and estimates |
    | `brightdata_booking_hotel_listings`    | Hotel listings and pricing      |
  </Accordion>

  <Accordion title="AI Insights (3 tools)">
    | Tool                                | Data                 |
    | ----------------------------------- | -------------------- |
    | `brightdata_chatgpt_ai_insights`    | ChatGPT responses    |
    | `brightdata_grok_ai_insights`       | Grok responses       |
    | `brightdata_perplexity_ai_insights` | Perplexity responses |
  </Accordion>
</AccordionGroup>

## Web Search Provider Integration

The plugin also registers as an OpenClaw **web search provider**. To set Bright Data as your default search provider:

```bash theme={null}
openclaw config set tools.web.search.provider brightdata
```

Once set, any generic web search your agent performs will route through Bright Data's search infrastructure.

## Which settings to configure

All settings can be provided via environment variable or OpenClaw config. Environment variables take priority.

| Setting         | Environment Variable       | OpenClaw Config Path                                                | Default                      |
| --------------- | -------------------------- | ------------------------------------------------------------------- | ---------------------------- |
| API Key         | `BRIGHTDATA_API_TOKEN`     | `plugins.entries.brightdata.config.webSearch.apiKey`                | **required**                 |
| Base URL        | `BRIGHTDATA_BASE_URL`      | `plugins.entries.brightdata.config.webSearch.baseUrl`               | `https://api.brightdata.com` |
| Unlocker Zone   | `BRIGHTDATA_UNLOCKER_ZONE` | `plugins.entries.brightdata.config.webSearch.unlockerZone`          | `mcp_unlocker`               |
| Browser Zone    | `BRIGHTDATA_BROWSER_ZONE`  | `plugins.entries.brightdata.config.webSearch.browserZone`           | `mcp_browser`                |
| Request Timeout | -                          | `plugins.entries.brightdata.config.webSearch.timeoutSeconds`        | `30s` search / `60s` scrape  |
| Polling Timeout | -                          | `plugins.entries.brightdata.config.webSearch.pollingTimeoutSeconds` | `600s`                       |

## How to manage the plugin

```bash theme={null}
# Verify installation and loaded tools
openclaw plugins inspect brightdata

# Update to latest version
openclaw plugins update brightdata

# Temporarily disable
openclaw plugins disable brightdata

# Re-enable
openclaw plugins enable brightdata

# Uninstall
openclaw plugins uninstall brightdata
```

## Troubleshooting

**Plugin not found after install**

* Run `openclaw plugins list` to verify the plugin is installed.
* Check that the plugin ID is `brightdata` with `openclaw plugins inspect brightdata`.
* Run `openclaw plugins doctor` for diagnostic information.

**Tools not registering**

* Ensure the plugin is enabled: `openclaw plugins enable brightdata`.
* Restart the gateway: `openclaw gateway restart`.

**Authentication errors**

* Verify your API key is set correctly via env var or config.
* Check that the token has not expired in your [Bright Data dashboard](https://brightdata.com/cp/setting/users).

**Zone creation failures**

* The plugin auto-creates `mcp_unlocker` and `mcp_browser` zones on first use.
* If auto-creation fails, create the zones manually in your Bright Data dashboard and set them via environment variables.

## Where to learn more

* [OpenClaw Documentation](https://docs.openclaw.ai)
* [OpenClaw Plugin CLI Reference](https://openclawlab.com/en/docs/cli/plugins/)
* [Bright Data API Documentation](/)
* [Plugin Source Code on GitHub](https://github.com/brightdata/openclaw-plugin)
