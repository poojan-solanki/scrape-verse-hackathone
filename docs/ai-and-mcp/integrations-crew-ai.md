# How to integrate Bright Data with CrewAI

> **Official Source**: [https://docs.brightdata.com/integrations/crew-ai](https://docs.brightdata.com/integrations/crew-ai)
> **Category**: `ai-and-mcp`

---

Integrate Bright Data Web Scraper API (1000+ scrapers) and SERP API into CrewAI agents to add live web data, search and unblocking to agentic workflows.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

A comprehensive suite of CrewAI tools that leverage Bright Data's powerful infrastructure for web scraping, data extraction, and search operations. These tools provide three distinct capabilities:

## How to extract data with BrightDataDatasetTool

Extract structured data from popular data feeds (Amazon, LinkedIn, Instagram, etc.) using pre-built datasets

## How to search with BrightDataSearchTool

Perform web searches across multiple search engines with geo-targeting and device simulation

## How to scrape with BrightDataUnlockerAPITool

Scrape any website content while bypassing bot protection mechanisms

## Steps to Get Started

To effectively use the BrightData Tools, follow these steps:

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Integration">
    Install the Bright Data integration package for CrewAI, along with `aiohttp` and `requests` by running the following command:

    ```shell theme={null}
    pip install crewai[tools] aiohttp requests
    ```
  </Step>

  <Step title="Set the environment variable">
    Set your Bright Data API key as an environment variable:

    ```bash theme={null}
    export BRIGHT_DATA_API_KEY="your_api_key_here"
    export BRIGHT_DATA_ZONE="your_zone_here"
    ```
  </Step>

  <Step title="Select your preferred Bright Data tool">
    The Bright Data + CrewAI integration currently supports:

    <CodeGroup>
      ```python DatasetTool theme={null}
      # Dataset Tool - Extract Amazon Product Data
      from crewai_tools import BrightDataDatasetTool

      # Initialize with specific dataset and URL
      tool = BrightDataDatasetTool(
          dataset_type="amazon_product",
          url="https://www.amazon.com/dp/B08QB1QMJ5/"
      )
      result = tool.run()
      ```

      ```python SearchTool theme={null}
      # Search Tool - Perform Web Search
      from crewai_tools import BrightDataSearchTool

      # Initialize with search query
      tool = BrightDataSearchTool(
          query="latest AI trends 2025",
          search_engine="google",
          country="us"
      )
      result = tool.run()
      ```

      ```python UnlockerAPITool theme={null}
      # Web Unlocker API Tool - Scrape Website Content
      from crewai_tools import BrightDataWebUnlockerTool

      # Initialize with target URL
      tool = BrightDataWebUnlockerTool(
          url="https://example.com",
          data_format="markdown"
      )
      result = tool.run()
      ```
    </CodeGroup>
  </Step>
</Steps>

## Conclusion

By integrating BrightData Tools into your CrewAI agents, you gain access to reliable web scraping and data extraction capabilities. These tools handle complex challenges like bot protection, geo-restrictions, and data parsing, allowing you to focus on building your applications rather than managing scraping infrastructure.
