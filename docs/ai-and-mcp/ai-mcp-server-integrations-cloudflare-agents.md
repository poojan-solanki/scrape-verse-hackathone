# Cloudflare Agents SDK integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/cloudflare-agents](https://docs.brightdata.com/ai/mcp-server/integrations/cloudflare-agents)
> **Category**: `ai-and-mcp`

---

How to integrate Cloudflare's Agents SDK with Bright Data's Bright Data MCP server for building AI agents on Cloudflare Workers. Exposes 60+ MCP tools.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Set up your Cloudflare environment">
    Make sure you have Node.js 20+ installed, then log in to Cloudflare:

    ```shell theme={null}
    npx wrangler login
    ```
  </Step>

  <Step title="Install the Agents Starter template">
    ```shell theme={null}
    npx create-cloudflare@latest mcp-demo --template cloudflare/agents-starter
    cd mcp-example
    npm install
    ```
  </Step>

  <Step title="Configure environment variables">
    Copy the example env file and add your OpenAI API key:

    ```shell theme={null}
    cp .dev.vars.example .dev.vars
    ```

    Edit `.dev.vars`:

    ```env theme={null}
    OPENAI_API_KEY=sk-...
    ```
  </Step>

  <Step title="Connect Bright Data MCP in your agent">
    In `src/server.ts`, find the default commented-out MCP connection inside `onChatMessage`:

    ```ts theme={null}
    // const mcpConnection = await this.mcp.connect(
    //   "https://path-to-mcp-server/sse"
    // );
    ```

    Replace it with the Bright Data MCP connection:

    ```ts expandable theme={null}
    // Connect to Bright Data MCP server
    const mcpConnection = await this.mcp.connect(
      "https://mcp.brightdata.com/mcp?token=<API_TOKEN>"
    );

    // Merge MCP tools with local tools
    const allTools = {
      ...tools,
      ...this.mcp.getAITools()
    };
    ```

    <Note>
      Make sure `mcp.connect()` is called **before** `this.mcp.getAITools()` to avoid `jsonSchema not initialized` errors.
    </Note>
  </Step>

  <Step title="Test it works">
    1. Replace `<API_TOKEN>` with your actual Bright Data API token
    2. Start the development server:

    ```shell theme={null}
    npm start
    ```

    3. Open the app in your browser and ask the agent a question, for example:

    ```text theme={null}
    Find the latest 3 news items about Cloudflare Agents and summarize them in bullets with links.
    ```

    You should see the agent use Bright Data's web scraping tools to fetch and summarize live results:

    <img alt="Hosted MCP" />
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>
