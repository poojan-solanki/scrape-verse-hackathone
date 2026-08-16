# Query Bright Data docs from your agent

> **Official Source**: [https://docs.brightdata.com/ai/for-agents/docs-mcp](https://docs.brightdata.com/ai/for-agents/docs-mcp)
> **Category**: `ai-and-mcp`

---

Connect your AI coding agent to Bright Data's docs via Model Context Protocol. Retrieve 1000+ scraper docs as native MCP resources, no scraping required.

## What is the Docs MCP?

The Docs MCP server at `https://docs.brightdata.com/mcp` exposes all Bright Data documentation as searchable MCP resources. Any MCP-compatible coding agent can connect and query the docs in real-time, directly inside its reasoning loop.

<Info>
  **Two Bright MCP servers - two different jobs:**

  | MCP Server          | URL                                            | Purpose                                           |
  | ------------------- | ---------------------------------------------- | ------------------------------------------------- |
  | **Docs MCP**        | `https://docs.brightdata.com/mcp`              | Search and retrieve Bright Data documentation     |
  | **Bright Data MCP** | `https://mcp.brightdata.com/mcp?token=<token>` | Access live web data - scraping, search, unlocker |

  This page covers the **Docs MCP**. To access live web data from your agent, see the [MCP Server docs →](/ai/mcp-server/overview)
</Info>

***

## Connect your agent

<Tabs>
  <Tab title="Claude Code">
    ```bash theme={null}
    claude mcp add --transport http brightdata-docs https://docs.brightdata.com/mcp
    ```

    Verify the connection:

    ```bash theme={null}
    claude mcp list
    # brightdata-docs: https://docs.brightdata.com/mcp (HTTP) - ✓ Connected
    ```
  </Tab>

  <Tab title="Cursor">
    Open **Settings → Tools & Integrations → Add Custom MCP** and paste:

    ```json theme={null}
    {
      "mcpServers": {
        "brightdata-docs": {
          "url": "https://docs.brightdata.com/mcp",
          "transport": "http"
        }
      }
    }
    ```
  </Tab>

  <Tab title="VS Code (Copilot)">
    Add to your `.vscode/mcp.json` or user MCP settings:

    ```json theme={null}
    {
      "servers": {
        "brightdata-docs": {
          "url": "https://docs.brightdata.com/mcp",
          "type": "http"
        }
      }
    }
    ```
  </Tab>

  <Tab title="Claude Desktop">
    Add to `claude_desktop_config.json` (usually at `~/.config/claude/`):

    ```json theme={null}
    {
      "mcpServers": {
        "brightdata-docs": {
          "url": "https://docs.brightdata.com/mcp",
          "transport": "http"
        }
      }
    }
    ```
  </Tab>

  <Tab title="Windsurf / Any MCP client">
    The Docs MCP uses standard HTTP transport - connect any MCP-compatible client to:

    ```http theme={null}
    https://docs.brightdata.com/mcp
    ```

    No authentication required. No API key needed.
  </Tab>
</Tabs>

***

## What can your agent do with it?

Once connected, your agent gains a **search tool** over the full Bright Data documentation index. It can:

* **Find the right API** - "What's the parameter for setting a custom geo-location in the SERP API?"
* **Retrieve product pages** - Pull the full reference for Web Unlocker, Scraping Browser, or any product
* **Look up code examples** - "Show me a Python example for paginating SERP results"
* **Explore integrations** - "How do I connect LangChain to Bright Data?"
* **Check pricing and limits** - "What are the rate limits for the Bright Data MCP free tier?"

The agent queries docs during its reasoning loop - so it always has accurate, up-to-date information rather than relying on stale training data.

***

## Use both MCP servers together

For maximum capability, connect **both** MCP servers in a single session:

```bash theme={null}
# Docs: know how to use Bright Data
claude mcp add --transport http brightdata-docs https://docs.brightdata.com/mcp

# Data: actually use Bright Data
claude mcp add --transport sse brightdata https://mcp.brightdata.com/sse?token=<your-api-token>
```

Now your agent can look up documentation **and** execute real web data requests in the same session - no context switching required.

<Tip>
  The best setup for a coding agent is all three layers working together:

  1. A **[Skill](/ai/for-agents/skills)** for embedded baseline knowledge
  2. The **Docs MCP** for on-demand documentation lookup
  3. The **[Bright Data MCP](/ai/mcp-server/overview)** for live web access

  Install the skill once, connect both MCP servers, and your agent is fully equipped.
</Tip>

***

## Rate limits

| Limit                        | Value |
| ---------------------------- | ----- |
| Requests per user per hour   | 200   |
| Requests per domain per hour | 1,000 |

These limits apply to the Mintlify-hosted Docs MCP. For higher throughput, use [llms-full.txt](/ai/for-agents/llm-references) to load the full docs locally.

***

## Next steps

<CardGroup>
  <Card title="Bright Data MCP Server" icon="microchip-ai" href="/ai/mcp-server/overview">
    Add live web data access - search, scrape, and extract from the web
  </Card>

  <Card title="LLM References" icon="file-lines" href="/ai/for-agents/llm-references">
    Load llms.txt or llms-full.txt for offline or RAG-based access to all docs
  </Card>
</CardGroup>
