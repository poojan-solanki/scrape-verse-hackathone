# Agent Builder MCP server integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/agent-builder](https://docs.brightdata.com/ai/mcp-server/integrations/agent-builder)
> **Category**: `ai-and-mcp`

---

Connect OpenAI Agent Builder to the Bright Data MCP server (60+ tools) to build AI agents with real-time web search, scraping and structured data access.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

**Requirements:**

* [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs)
* OpenAI Account with a [verified organization](https://help.openai.com/en/articles/10910291-api-organization-verification)

<Steps>
  <Step title="Create a new flow">
    Go to [Agent Builder](https://platform.openai.com/agent-builder) and create a new flow

    <img alt="Agent Builder MCP Server Integration" />
  </Step>

  <Step title="Click on the agent node">
    <img alt="Agent Builder MCP Server Integration" />

    After clicking the agent node, the agent configuration panel will appear on the left side of the screen.
  </Step>

  <Step title="Click on Tools to add the MCP">
    <img alt="Agent Builder MCP Server Integration" />
  </Step>

  <Step title="Choose MCP and add the Bright Data MCP server">
    Copy and paste the following URL into the URL section:

    ```http theme={null}
    https://mcp.brightdata.com/mcp?token=YOUR_API_KEY
    ```

    Replace `YOUR_API_KEY` with your actual Bright Data API key.

    <Note>
      You can copy this URL with a pre-filled API key from your [control panel](https://brightdata.com/cp/mcp)
    </Note>

    Then click the Connect button.

    <img alt="Agent Builder MCP Server Integration" />
  </Step>

  <Step title="Choose your preferred tools and add them">
    Here you can choose the relevant tools you want to expose to the agent, or add all of them by clicking the Add button.

    <img alt="Agent Builder MCP Server Integration" />
  </Step>

  <Step title="Configure your agent with a name and instructions">
    Give your agent a name, provide an instruction set, choose the reasoning effort level, and click the Preview button to test it.

    <img alt="Agent Builder MCP Server Integration" />
  </Step>

  <Step title="Test your agent">
    Ask your agent any question that requires real-time web data and get an instant answer.

    <img alt="Screenshot 2025-10-10 at 10.52.31.png" />
  </Step>
</Steps>
