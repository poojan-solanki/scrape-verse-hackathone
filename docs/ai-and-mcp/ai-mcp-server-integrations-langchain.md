# LangChain integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/langchain](https://docs.brightdata.com/ai/mcp-server/integrations/langchain)
> **Category**: `ai-and-mcp`

---

Connect LangChain and LangGraph agents to the Bright Data MCP server to add real-time web search, scraping and structured data tools to your AI workflows.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Install required packages">
    ```shell theme={null}
    pip install langchain-mcp-adapters
    ```
  </Step>

  <Step title="Configure your MCP server">
    ```python expandable theme={null}
    import asyncio
    from langchain_openai import ChatOpenAI
    from langgraph.prebuilt import create_react_agent
    from langchain_mcp_adapters.client import MultiServerMCPClient
    from dotenv import load_dotenv
    import os

    load_dotenv()

    async def main():
        # Configure MCP client
        client = MultiServerMCPClient({
            "bright_data": {
                "url": "https://mcp.brightdata.com/sse?token=<API_TOKEN>",
                "transport": "sse",
            }
        })

        # Get available tools
        tools = await client.get_tools()
        print("Available tools:", [tool.name for tool in tools])

        # Configure LLM
        llm = ChatOpenAI(
            openai_api_key=os.getenv("OPENROUTER_API_KEY"),
            openai_api_base="https://openrouter.ai/api/v1",
            model_name="moonshotai/kimi-k2"
        )

        # System prompt for web search agent
        system_prompt = """
        You are a web search agent with comprehensive scraping capabilities. Your tools include:
        - **search_engine**: Get search results from Google/Bing/Yandex
        - **scrape_as_markdown**: Extract content from any webpage with bot detection bypass
        - **Structured extractors**: Fast, reliable data from major platforms (Amazon, LinkedIn, Instagram, Facebook, X, TikTok, YouTube, Reddit, Zillow, etc.)
        - **Browser automation**: Navigate, click, type, screenshot for complex interactions

        Guidelines:
        - Use structured web_data_* tools for supported platforms when possible (faster/more reliable)
        - Use general scraping for other sites
        - Handle errors gracefully and respect rate limits
        - Think step by step about what information you need and which tools to use
        - Be thorough in your research and provide comprehensive answers

        When responding, follow this pattern:
        1. Think about what information is needed
        2. Choose the appropriate tool(s)
        3. Execute the tool(s)
        4. Analyze the results
        5. Provide a clear, comprehensive answer
        """

        # Create ReAct agent
        agent = create_react_agent(
            model=llm,
            tools=tools,
            prompt=system_prompt
        )

        # Test the agent
        print("Testing ReAct Agent with available tools...")
        print("=" * 50)

        result = await agent.ainvoke({
            "messages": [("human", "Search for the latest news about AI developments")]
        })

        print("\nAgent Response:")
        print(result["messages"][-1].content)

    if __name__ == "__main__":
        asyncio.run(main())
    ```
  </Step>

  <Step title="Set up environment variables">
    Create a `.env` file in your project directory:

    ```env theme={null}
    OPENROUTER_API_KEY=your_openrouter_api_key_here
    ```
  </Step>

  <Step title="Test it works">
    1. Replace `<API_TOKEN>` with your actual Bright Data API token
    2. Run your LangChain script
    3. You should see the agent execute web searches and provide comprehensive responses
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>
