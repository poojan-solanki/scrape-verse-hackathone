# CrewAI integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/crewai](https://docs.brightdata.com/ai/mcp-server/integrations/crewai)
> **Category**: `ai-and-mcp`

---

Connect CrewAI multi-agent crews to the Bright Data MCP server, using either the hosted endpoint or self-hosted mode for real-time web data access.

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
    from crewai import Agent, Task, Crew
    from crewai_tools import MCPServerAdapter
    import os


    server_params = {
        "url": "https://mcp.brightdata.com/sse?token=API_TOKEN",
        "transport": "sse"
    }

    try:
        with MCPServerAdapter(server_params) as mcp_tools:
            print(f"Available tools: {[tool.name for tool in mcp_tools]}")
            
            my_agent = Agent(
                role="Web Scraping Specialist",
                goal="Extract data from websites using Bright Data tools",
                backstory="I am an expert at web scraping and data extraction using MCP tools.",
                tools=mcp_tools,
                verbose=True,
                llm="gpt-4o-mini",
            )
            
            task = Task(
                description="Search for flights from New York to San Francisco and provide a summary of what you found. Use the search_engine tool to find flight information and return the results in a clear format.",
                expected_output="A clear summary of available flights from New York to San Francisco, including key details like airlines, times, and prices if available.",
                agent=my_agent
            )
            
            crew = Crew(
                agents=[my_agent],
                tasks=[task],
                verbose=True
            )
            
            result = crew.kickoff()
            print("\n=== RESULT ===")
            print(result)
            
    except Exception as e:
        print(f"Error connecting to MCP server: {e}")
        print("Make sure you have:")
        print("1. Set your BRIGHT_DATA_API_KEY environment variable")
        print("2. Installed the Bright Data MCP server: npm install -g @bright_data/ai/mcp-server-bright-data")
        print("3. Have Node.js installed on your system")
    ```
  </Step>

  <Step title="Test it works">
    1. Run your CrewAI script with the flight search task
    2. The agent will use Bright Data tools to search for flight information
    3. You should see results with flight details
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
  </Step>
</Steps>
