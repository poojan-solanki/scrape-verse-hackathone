# Claude Desktop integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/claude](https://docs.brightdata.com/ai/mcp-server/integrations/claude)
> **Category**: `ai-and-mcp`

---

Connect Claude Desktop to the Bright Data MCP server to give Claude real-time web search, scraping and structured data access. Exposes 60+ tools.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

**Getting Started Video**:

<iframe title="Easiest way to start with Claude" />

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Configure your MCP server">
    1. Open Claude Desktop
    2. Go to: Settings → Developer → Edit Config
    3. Add this to your `claude_desktop_config.json`:

    ```json theme={null}
    {
      "mcpServers": {
        "Bright Data": {
          "command": "npx",
          "args": [
            "mcp-remote",
            "https://mcp.brightdata.com/mcp?token=YOUR_API_TOKEN_HERE"
          ]
        }
      }
    }
    ```

    4. **`Replace YOUR_API_TOKEN_HERE`** with your actual API token from Step 1
    5. Save and restart Claude Desktop
  </Step>

  <Step title="Test it works">
    1. Ask your AI: "Can you search Google for 'weather today'?"
    2. Claude will ask for permission - click "Allow"
    3. You should see results!
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>

## Self-hosted MCP

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have the following:

    * [Node.js ](https://nodejs.org/en/download) is installed and up to date
    * [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs)  (new users get free credit for testing, and then you can pay as you go)
    * **An API key** from the [user settings page](https://brightdata.com/cp/setting/users) (New users receive an **API key** in the welcome email.)

    <Tip>
      If you prefer to use a different zone name, you can specify it with the `WEB_UNLOCKER_ZONE `environment variable in your configuration
    </Tip>
  </Step>

  <Step title="Basic Configuration">
    Go to Claude -> Settings -> Developer -> Edit Config -> `claude_desktop_config.json` to include the following:

    ```json expandable theme={null}
    {
      "mcpServers": {
        "Bright Data": {
          "command": "npx",
          "args": ["@brightdata/mcp"],
          "env": {
            "API_TOKEN": "<insert your api key from https://brightdata.com/cp/setting/users>"     
          }
        }
      }
    }
    ```
  </Step>

  <Step title="Advanced Configuration">
    If you want to use advanced features like rate limiting or custom zones, you can add more environment variables:

    ```json expandable theme={null}
    {
      "mcpServers": {
        "Bright Data": {
          "command": "npx",
          "args": ["@brightdata/mcp"],
          "env": {
            "API_TOKEN": "<insert your api key from https://brightdata.com/cp/setting/users>",
            "WEB_UNLOCKER_ZONE": "<Optional - if you want to use a specific name for web_unlocker, the name goes here. If not - REMOVE this field>",
            "BROWSER_ZONE": "<Optional - if you want to use a specific name for browser_api, the name goes here. If not - REMOVE this field>",
            "RATE_LIMIT": "<Optional - rate limit format, possible values: limit/time+unit, e.g., 100/1h, 50/30m, 10/5s. If not in use - REMOVE this field>",
            "PRO_MODE": "<Optional - set to true to enable all 60+ tools>",
            "GROUPS": "<Optional - comma-separated tool groups, e.g., browser,ecommerce,social>",
            "TOOLS": "<Optional - comma-separated individual tool names to enable>"
          }
        }
      }
    }
    ```
  </Step>
</Steps>
