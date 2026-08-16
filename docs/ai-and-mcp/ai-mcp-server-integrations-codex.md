# Codex MCP server integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/codex](https://docs.brightdata.com/ai/mcp-server/integrations/codex)
> **Category**: `ai-and-mcp`

---

Connect OpenAI Codex CLI to the Bright Data MCP server (60+ tools) via config.toml or the codex mcp add command for real-time web search and scraping.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Add the Bright Data MCP server to OpenAI's Codex CLI so your coding agent can search, scrape and browse the live web without getting blocked. Codex reads MCP server definitions from `~/.codex/config.toml`, which you can edit directly or update with the `codex mcp add` command.

## Prerequisites

* [Codex CLI](https://github.com/openai/codex) is installed and signed in
* [Node.js](https://nodejs.org/en/download) is installed and up to date (required only for the self-hosted server)
* [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) (new users get free credit for testing, and then you can pay as you go)
* An API key from the [user settings page](https://brightdata.com/cp/setting/users) (new users receive an API key in the welcome email)

## Hosted MCP

The hosted server needs no local install. Add the following table to `~/.codex/config.toml`, replacing `<your-api-token>` with your Bright Data API key:

```toml theme={null}
[mcp_servers.brightdata]
url = "https://mcp.brightdata.com/mcp?token=<your-api-token>"
```

The `[mcp_servers.<id>]` table uses `url` for streamable HTTP servers. The Bright Data hosted MCP accepts the API key as the `token` query parameter, so no separate authentication header is required.

<Tip>
  If you prefer to use a different zone name, specify it with the `unlocker` URL parameter, for example `...?token=<your-api-token>&unlocker=<your-zone>`.
</Tip>

## Self-hosted MCP

The self-hosted server runs locally through `npx` and reads your API key from an environment variable.

<Steps>
  <Step title="Add the server with the CLI">
    Run the following command in your terminal. The `--` separator tells Codex where the environment flags end and the server command begins:

    ```bash theme={null}
    codex mcp add brightdata --env API_TOKEN=<your-api-token> -- npx -y @brightdata/mcp
    ```
  </Step>

  <Step title="Or edit config.toml directly">
    Alternatively, add this table to `~/.codex/config.toml`:

    ```toml theme={null}
    [mcp_servers.brightdata]
    command = "npx"
    args = ["-y", "@brightdata/mcp"]

    [mcp_servers.brightdata.env]
    API_TOKEN = "<your-api-token>"
    ```
  </Step>
</Steps>

## Validation

Verify the integration by listing the configured MCP servers:

```bash theme={null}
codex mcp list
```

You should see `brightdata` in the output, confirming the server is configured. Start a Codex session and ask it to fetch a live web page to confirm the tools respond.
