# Claude Code MCP server integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/claude-code](https://docs.brightdata.com/ai/mcp-server/integrations/claude-code)
> **Category**: `ai-and-mcp`

---

Connect Claude Code to the Bright Data MCP server (60+ tools) with a 1-line install command to give your coding agent real-time web search and scraping.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Quick Install

To integrate Bright Data into Claude Code, simply copy this command to your terminal:

```bash theme={null}
claude mcp add --transport sse brightdata "https://mcp.brightdata.com/sse?token=<your-api-token>"
```

## Self-hosted MCP

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have the following:

    * [Claude Code](https://docs.anthropic.com/en/docs/claude-code) is installed and configured
    * [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) (new users get free credit for testing, and then you can pay as you go)
    * **An API key** from the [user settings page](https://brightdata.com/cp/setting/users) (New users receive an **API key** in the welcome email.)

    <Tip>
      If you prefer to use a different zone name, you can specify it with the `unlocker` url parameter variable in your configuration
    </Tip>
  </Step>

  <Step title="Basic Configuration">
    Add the Bright Data MCP server to your Claude Code configuration:

    ```bash theme={null}
    claude mcp add --transport sse brightdata https://mcp.brightdata.com/sse?token=<your-api-token>
    ```

    Replace `<your-api-token>` with your actual API token from Bright Data.
  </Step>

  <Step title="Validation">
    Verify the integration by running:

    ```bash theme={null}
    claude mcp list
    ```

    You should see the following output confirming successful connection:

    ```text theme={null}
    brightdata: https://mcp.brightdata.com/sse?token=<yourapikey>(SSE) - ✓ Connected
    ```
  </Step>
</Steps>
