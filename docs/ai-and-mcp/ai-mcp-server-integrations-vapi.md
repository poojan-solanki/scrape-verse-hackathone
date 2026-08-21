# Vapi AI MCP server integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/vapi](https://docs.brightdata.com/ai/mcp-server/integrations/vapi)
> **Category**: `ai-and-mcp`

---

Connect Vapi AI voice agents to the Bright Data MCP server (60+ tools) to give voice assistants real-time web search, scraping and structured data retrieval.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Watch the demo

<iframe title="YouTube video player" />

## Quick Install

To integrate Bright Data into Vapi AI, add the following MCP server URL to your Vapi tools:

```http theme={null}
https://mcp.brightdata.com/sse?token=<your-api-token>
```

## How to set up Vapi AI

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have the following:

    * [A Vapi AI account](https://vapi.ai) (sign up if you don't have one)
    * [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) (new users get free credit for testing, and then you can pay as you go)
    * **An API key** from the [user settings page](https://brightdata.com/cp/setting/users) (New users receive an **API key** in the welcome email.)

    <Tip>
      If you prefer to use a different zone name, you can specify it with the `unlocker` url parameter variable in your configuration
    </Tip>
  </Step>

  <Step title="Login to Vapi AI">
    Navigate to [vapi.ai](https://vapi.ai) and log in to your account.
  </Step>

  <Step title="Claim Your Bright Data API Key">
    Log in to your Bright Data account and navigate to the [user settings page](https://brightdata.com/cp/setting/users) to retrieve your API key.
  </Step>

  <Step title="Access Tools in Vapi">
    In your Vapi dashboard, click on **Tools** in the navigation menu.

    <img alt="Setup Guide" />
  </Step>

  <Step title="Create a New Tool">
    Click on **Create tool** button to start adding the Bright Data MCP integration.

    <img alt="Setup Guide" />
  </Step>

  <Step title="Choose MCP">
    Select **MCP** as the tool type from the available options.

    <img alt="Setup Guide" />
  </Step>

  <Step title="Configure the MCP Server">
    Configure your tool with the following settings:

    * **Name**: `brightdata`
    * **MCP Server URL**: `https://mcp.brightdata.com/sse?token=<your-api-token>`
    * Set the timeout to 120 seconds to avoid getting errors.

    Replace `<your-api-token>` with your actual API token from Bright Data.

    <img alt="Setup Guide" />
  </Step>

  <Step title="Add Tool to Assistant">
    Navigate to your assistant settings and add the newly created Bright Data tool to enable the integration.

    <img alt="Setup Guide" />
  </Step>

  <Step title="Test the Integration">
    Verify the integration works correctly by:

    * Testing through the Vapi chat interface
    * Making a test web call to your assistant

    You should see the Bright Data tools available and responding to your requests.

    <img alt="Setup Guide" />
  </Step>
</Steps>

## What's Next?

Now that you've integrated Bright Data with Vapi AI, you can:

* Use web scraping capabilities directly in your voice AI conversations
* Use [Vapi's workflows](https://docs.vapi.ai/workflows/quickstart) for creating more complex voice AI agents
* Access real-time data from various sources
* Enhance your assistant with powerful data collection features

For more information about Bright Data's MCP capabilities, visit the [Bright Data documentation](https://brightdata.com/products/web-scraper/mcp).
