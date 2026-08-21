# Local MCP server advanced configuration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/local/advanced](https://docs.brightdata.com/ai/mcp-server/local/advanced)
> **Category**: `ai-and-mcp`

---

Customize the local Bright Data MCP server (60+ tools): enable Browser API, configure proxies, set rate limits and pass environment variables.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## MCP Server Modes

Bright Data's MCP server offers two modes to suit different needs:

* **Rapid (Free)** - Quickly scrape search results and unlock any public webpage as clean Markdown.
* **Pro** - Access advanced scraping, structured data from top platforms (Amazon, LinkedIn, X, Instagram, etc.), and full browser automation. Built for dynamic and large-scale use cases.
* **Groups** - Unlock targeted capabilities with pre-built bundles. Whether you're monitoring competitors, analyzing social trends, or automating browsers, select the exact tool groups your project requires.
* **Tools** -  Fine-tune your toolkit. Cherry-pick individual tools to supplement your Groups or build a completely custom setup for specialized use cases.

<Tip>
  **Rapid (Free)** mode is enabled by default and is **recommended** for everyday browsing and data needs.
</Tip>

***

## How to configure the local MCP server

When using the MCP server locally, you can set environment variables for finer control:

* `RATE_LIMIT` - Set the rate limit for requests (*default:* `100/1h`).
* `WEB_UNLOCKER_ZONE` - Override the default web unlocker zone (*default:* `mcp_unlocker`).
* `BROWSER_ZONE` - Override the default browser zone (*default:* `mcp_browser`).
* `PRO_MODE` - Set to true/false to enable/disable Pro tools (*default:* `false`).
* `GROUPS` - Comma-separated list of tool group IDs to enable (e.g., `browser,ecommerce,social`). Available groups: `ecommerce`, `social`, `browser`, `finance`, `business`, `research`, `app_stores`, `travel`, `advanced_scraping`, `geo`, `code`.
* `TOOLS` - Comma-separated list of individual tool names to add on top of selected groups (e.g., `web_data_linkedin_person_profile,scrape_as_html`). Use this to fine-tune your toolkit with specific capabilities.

> **Note:** `PRO_MODE=true` enables all tools. If you use `GROUPS` or `TOOLS`, they take priority and override Pro mode.

<Tip>
  Use `PRO_MODE=true` to enable **Pro mode**.
</Tip>

### Example configuration

```json theme={null}
{
  "mcpServers":{
    "Bright Data":{
      "command":"npx",
      "args":["@brightdata/mcp"],
      "env":{
        "API_TOKEN":"<insert-your-api-token-here>",
        "WEB_UNLOCKER_ZONE": "my_zone_name",
        "BROWSER_ZONE": "my_browser_zone",
        "PRO_MODE": "true",
        "GROUPS": "browser,advanced_scraping",
        "TOOLS": "web_data_linkedin_person_profile,web_data_amazon_product"
      }
    }
  }
}
```
