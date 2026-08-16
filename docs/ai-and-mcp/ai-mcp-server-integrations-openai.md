# OpenAI SDK integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/openai](https://docs.brightdata.com/ai/mcp-server/integrations/openai)
> **Category**: `ai-and-mcp`

---

Connect the OpenAI SDK to the Bright Data MCP server to give GPT-4o and o-series models real-time web search, scraping and structured data access.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Configure your MCP server">
    ```python expandable theme={null}
    from openai import OpenAI

    client = OpenAI()

    resp = client.responses.create(
      model="gpt-4o",
      tools=[
        {
          "type": "mcp",
          "server_label": "BrightData",
          "server_url": "https://mcp.brightdata.com/sse?token=API_TOKEN",
          "require_approval": "never",
        },
      ],
      input="What is the weather in Paris ?",
    )

    print(resp.output_text)
    ```
  </Step>

  <Step title="Test it works">
    1. Ask your AI: "Can you search Google for 'weather today'?"
    2. You should see results!
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>
