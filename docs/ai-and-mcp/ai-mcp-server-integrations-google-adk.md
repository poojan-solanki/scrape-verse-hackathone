# Google ADK integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/google-adk](https://docs.brightdata.com/ai/mcp-server/integrations/google-adk)
> **Category**: `ai-and-mcp`

---

Connect Google Agent Development Kit (ADK) to the Bright Data MCP server (60+ tools) for Gemini-powered agents with web search and structured extraction.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Remote MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Install required packages">
    ```shell theme={null}
    pip install google-adk
    ```
  </Step>

  <Step title="Configure your MCP server">
    ```python expandable theme={null}
    from google.adk.agents import Agent
    from google.adk.tools.mcp_tool.mcp_session_manager import StreamableHTTPServerParams
    from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset

    BRIGHTDATA_API_TOKEN = "YOUR_BRIGHTDATA_API_TOKEN"

    root_agent = Agent(
    model="gemini-2.5-pro",
    name="brightdata_agent",
    instruction="""Help users access web data using Bright Data""",
    tools=[
        MCPToolset(
            connection_params=StreamableHTTPServerParams(
                url=f"https://mcp.brightdata.com/mcp?token={BRIGHTDATA_API_TOKEN}",
            ),
        )
    ],
    )
    ```
  </Step>

  <Step title="Set up environment variables (optional)">
    For better security, you can store your API token as an environment variable:

    ```python theme={null}
    import os
    BRIGHTDATA_API_TOKEN = os.getenv("BRIGHTDATA_API_TOKEN")
    ```

    Then create a `.env` file in your project directory:

    ```env theme={null}
    BRIGHTDATA_API_TOKEN=your_brightdata_api_token_here
    ```
  </Step>

  <Step title="Test it works">
    1. Replace `YOUR_BRIGHTDATA_API_TOKEN` with your actual Bright Data API token
    2. Run your Google ADK script
    3. You should see the agent execute web searches and provide comprehensive responses
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>

## Local MCP Server

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Install required packages">
    ```shell theme={null}
    pip install google-genai
    npm install -g @brightdata/mcp
    ```
  </Step>

  <Step title="Configure your local MCP server">
    ```python expandable theme={null}
    from google.adk.agents import Agent
    from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams
    from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset
    from mcp import StdioServerParameters

    BRIGHTDATA_API_TOKEN = "YOUR_BRIGHTDATA_API_TOKEN"

    root_agent = Agent(
    model="gemini-2.5-pro",
    name="brightdata_agent",
    instruction="Help users access web data using Bright Data",
    tools=[
        MCPToolset(
            connection_params=StdioConnectionParams(
                server_params = StdioServerParameters(
                    command="npx",
                    args=[
                        "@brightdata/mcp",
                    ],
                    env={
                        "API_TOKEN": BRIGHTDATA_API_TOKEN,
                        "PRO_MODE": "true",  # Optional: Enable all 60+ tools
                    }
                ),
                timeout=300,
            ),
        )
    ],
    )
    ```
  </Step>

  <Step title="Test it works">
    1. Replace `YOUR_BRIGHTDATA_API_TOKEN` with your actual Bright Data API token
    2. Run your Google ADK script with the local MCP server
    3. The agent will use the locally installed MCP server to access all available tools
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>

## Available Tools

The Bright Data MCP server provides access to powerful web scraping capabilities:

* **Rapid Mode (Free Tier)**: 4 essential tools including search, scraping, and extraction
* **Pro Mode**: 60+ additional tools including batch operations, browser automation, and structured data APIs for major platforms

[View complete tool documentation](../tools)

[Visit Google ADK docs ](https://google.github.io/adk-docs/)
