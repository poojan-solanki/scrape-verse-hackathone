# LlamaIndex integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/llamaindex](https://docs.brightdata.com/ai/mcp-server/integrations/llamaindex)
> **Category**: `ai-and-mcp`

---

Connect LlamaIndex agents to the Bright Data MCP server to add live web search, scraping and structured data retrieval to your RAG and indexing pipelines.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Install LlamaIndex MCP Toolkit ">
    ```shell theme={null}
    pip install llama-index-tools-mcp
    ```
  </Step>

  <Step title="Configure your MCP server">
    ```python expandable theme={null}
    import asyncio
    from llama_index.tools.mcp import BasicMCPClient

    async def main():
        http_client = BasicMCPClient("https://mcp.brightdata.com/mcp?token=<API_TOKEN>")

        # List tools
        tools = await http_client.list_tools()
        print("Tools:", tools)

        # Call a tool
        result = await http_client.call_tool("scrape_as_markdown", {"url":"https://docs.llamaindex.ai/en/stable/examples/tools/mcp/"})
        print("Result:", result)

    asyncio.run(main())

    ```
  </Step>

  <Step title="Test it works">
    1. Run your LlamaIndex script with the manual tool calling
    2. You should see the requested URL in markdown
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>
