# How to set up Bright Data with Agno

> **Official Source**: [https://docs.brightdata.com/integrations/agno](https://docs.brightdata.com/integrations/agno)
> **Category**: `general`

---

Use Bright Data's MCP toolkit in Agno to give AI agents real-time web access and structured data extraction from 40+ platforms.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

The Bright Data MCP toolkit is now available in Agno, bringing real-world web access to AI agents. This integration enables structured data extraction and web scraping from over 40 platforms, including Amazon, LinkedIn, TikTok, Instagram, and Facebook.

Agents can perform tasks like scraping product listings, capturing screenshots, running search queries, and accessing live structured data feeds, all with minimal setup. This makes it easy to build intelligent agents that can reason, act, and fetch real-time web data for research, automation, and monitoring.

## How to Integrate Bright Data With LangChain

<Steps>
  <Step title="Pre-requisites">
    * Bright Data API key
    * Active SERP Zone for search engine capabilities
    * Active Web Unlocker API zone for Scraping
  </Step>

  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Integration">
    You can install the Bright Data integration directly from GitHub using the tool code available [here](https://github.com/agno-agi/agno/blob/main/libs/agno/agno/tools/brightdata.py).

    <Note>
      This integration will be published to **PyPI** by the end of the week. Once available, you’ll be able to install it using:

      ```sh theme={null}
      pip install agno
      ```
    </Note>
  </Step>

  <Step title="Set the environment variable">
    Set your Bright Data API key as an environment variable:

    ```python theme={null}
    import os


    os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"
    ```
  </Step>

  <Step title="Example usage">
    ```python theme={null}
    from agno.agent import Agent
    from agno.tools.brightdata import BrightDataTools 
    from agno.models.openai import OpenAIChat 
    from dotenv import load_dotenv 

    load_dotenv() 

    agent = Agent(
      tools=[
          BrightDataTools(
            serp_zone="serp",
            web_unlocker_zone="unlocker"
          )
        ],
      show_tool_calls=True,
      model=OpenAIChat(id="gpt-4o-mini"),
    ) 

    agent.print_response("Search for AAPL news", markdown=True)
    ```
  </Step>
</Steps>
