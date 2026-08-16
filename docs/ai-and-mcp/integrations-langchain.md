# How to set up Bright Data with LangChain

> **Official Source**: [https://docs.brightdata.com/integrations/langchain](https://docs.brightdata.com/integrations/langchain)
> **Category**: `ai-and-mcp`

---

Integrate Bright Data with LangChain to give LLM-powered agents reliable, anonymous, and scalable web access for real-world data tasks. Spans 195 countries.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Integrating Bright Data with LangChain enhances LLM-powered agents with reliable, anonymous, and scalable web access for real-world applications.\
You can do it either by using the `langchain-brightdata` Python package is the official LangChain integration for Bright Data, including support for:

* **BrightDataSERP** - Bright Data provides a powerful SERP API that allows you to query search engines (Google,Bing, DuckDuckGo,Yandex) with geo-targeting and advanced customization options, particularly useful for AI agents requiring real-time web information.
* **BrightDataUnlockerAPI** - Bright Data provides a powerful Web Unlocker API that allows you to access websites that might be protected by anti-bot measures, geo-restrictions, or other access limitations, making it particularly useful for AI agents requiring reliable web content extraction.
* **BrightDataWebScraperAPI** - Bright Data provides a powerful Scrapers that allows you to extract structured data from 100+ ppular domains, including Amazon product details, LinkedIn profiles, and more, making it particularly useful for AI agents requiring reliable structured web data feeds.

Or by [**Bright Data’s MCP (Model Context Protocol)**](/ai/mcp-server/overview#configuration) - a local server that exposes a wide range of scraping and automation tools. While not part of the `langchain-brightdata` package, it can be integrated manually using LangChain’s `Tool` or `RequestsWrapper`.

## How to Integrate Bright Data With LangChain

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Integration">
    Install the Bright Data integration package for LangChain by running the following command:

    ```bash theme={null}
    pip install langchain-brightdata
    ```
  </Step>

  <Step title="Set the environment variable">
    Set your Bright Data API key as an environment variable:

    ```python theme={null}
    import os
    os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"
    ```

    <Tip>
      Or pass it directly when initializing tools:

      ```python theme={null}
      from langchain_bright_data import BrightDataSERP

      tool = BrightDataSERP(bright_data_api_key="your-api-key")
      ```
    </Tip>
  </Step>

  <Step title="Select your preferred Bright Data tool">
    The Bright Data + LangChain integration currently supports:

    <Tabs>
      <Tab title="BrightDataSERP">
        <Tip>
          **API reference**: [SERP API Documentation](/scraping-automation/serp-api/introduction)
        </Tip>

        Collect search engine results with geo-targeting

        <CodeGroup>
          ```python Basic Usage theme={null}
          from langchain_brightdata import BrightDataSERP

          # Initialize the tool
          serp_tool = BrightDataSERP(
              bright_data_api_key="your-api-key"  # Optional if set in environment variables
          )

          # Run a basic search
          results = serp_tool.invoke("latest AI research papers")

          print(results)
          ```

          ```python Advanced Usage with Parameters theme={null}
          from langchain_brightdata import BrightDataSERP

          # Initialize with default parameters
          serp_tool = BrightDataSERP(
              bright_data_api_key="your-api-key",
              search_engine="google",  # Default
              country="us",  # Default
              language="en",  # Default
              results_count=10,  # Default
              parse_results=True,  # Get structured JSON results
          )

          # Use with specific parameters for this search
          results = serp_tool.invoke(
              {
                  "query": "best electric vehicles",
                  "country": "de",  # Get results as if searching from Germany
                  "language": "de",  # Get results in German
                  "search_type": "shop",  # Get shopping results
                  "device_type": "mobile",  # Simulate a mobile device
                  "results_count": 15,
              }
          )

          print(results)
          ```

          ```python Use within an agent theme={null}
          from langchain_brightdata import BrightDataSERP
          from langchain_google_genai import ChatGoogleGenerativeAI
          from langgraph.prebuilt import create_react_agent

          # Initialize the LLM
          llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key="your-api-key")

          # Initialize the Bright Data SERP tool
          serp_tool = BrightDataSERP(
              bright_data_api_key="your-api-key",
              search_engine="google",
              country="us",
              language="en",
              results_count=10,
              parse_results=True,
          )

          # Create the agent
          agent = create_react_agent(llm, [serp_tool])

          # Provide a user query
          user_input = "Search for 'best electric vehicles' shopping results in Germany in German using mobile."

          # Stream the agent's output step-by-step
          for step in agent.stream(
              {"messages": user_input},
              stream_mode="values",
          ):
              step["messages"][-1].pretty_print()
          ```
        </CodeGroup>
      </Tab>

      <Tab title="BrightDataUnblocker">
        <Tip>
          **API reference**: [Web Unlocker API Documentation](/scraping-automation/web-unlocker/introduction)
        </Tip>

        Access any public website, even if it’s bot-protected or geo-restricted.

        <CodeGroup>
          ```python Basic Usage theme={null}
          from langchain_brightdata import BrightDataUnlocker

          # Initialize the tool
          unlocker_tool = BrightDataUnlocker(
              bright_data_api_key="your-api-key"  # Optional if set in environment variables
          )

          # Access a webpage
          result = unlocker_tool.invoke("https://example.com")

          print(result)
          ```

          ```python Advanced Usage with Parameters theme={null}
          from langchain_brightdata import BrightDataUnlocker

          unlocker_tool = BrightDataUnlocker(
              bright_data_api_key="your-api-key",
          )

          # Access a webpage with specific parameters
          result = unlocker_tool.invoke(
              {
                  "url": "https://example.com/region-restricted-content",
                  "country": "gb",  # Access as if from Great Britain
                  "data_format": "html",  # Get content in markdown format
                  "zone": "unlocker",  # Use the unlocker zone
              }
          )

          print(result)
          ```

          ```python Use within an agent theme={null}
          from langchain_brightdata import BrightDataUnlocker
          from langchain_google_genai import ChatGoogleGenerativeAI
          from langgraph.prebuilt import create_react_agent

          # Initialize the LLM
          llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key="your-api-key")

          # Initialize the tool
          bright_data_tool = BrightDataUnlocker(bright_data_api_key="your-api-key")

          # Create the agent
          agent = create_react_agent(llm, [bright_data_tool])

          # Input URLs or prompt
          user_input = "Get the content from https://example.com/region-restricted-page - access it from GB"

          # Stream the agent's output step by step
          for step in agent.stream(
              {"messages": user_input},
              stream_mode="values",
          ):
              step["messages"][-1].pretty_print()
          ```
        </CodeGroup>
      </Tab>

      <Tab title="BrightDataWebScraperAPI">
        <Tip>
          **API reference**: [Scrapers Documentation](/datasets/scrapers/scrapers-library/overview)
        </Tip>

        Extract structured data from over 100 supported domains like Amazon, LinkedIn, and more.

        <CodeGroup>
          ```python Basic Usage theme={null}
          from langchain_brightdata import BrightDataWebScraperAPI

          # Initialize the tool
          scraper_tool = BrightDataWebScraperAPI(
              bright_data_api_key="your-api-key"  # Optional if set in environment variables
          )

          # Extract Amazon product data
          results = scraper_tool.invoke(
              {"url": "https://www.amazon.com/dp/B08L5TNJHG", "dataset_type": "amazon_product"}
          )

          print(results)
          ```

          ```python Advanced Usage with Parameters theme={null}
          from langchain_brightdata import BrightDataWebScraperAPI

          # Initialize with default parameters
          scraper_tool = BrightDataWebScraperAPI(bright_data_api_key="your-api-key")

          # Extract Amazon product data with location-specific pricing
          results = scraper_tool.invoke(
              {
                  "url": "https://www.amazon.com/dp/B08L5TNJHG",
                  "dataset_type": "amazon_product",
                  "zipcode": "10001",  # Get pricing for New York City
              }
          )

          print(results)

          # Extract LinkedIn profile data
          linkedin_results = scraper_tool.invoke(
              {
                  "url": "https://www.linkedin.com/in/satyanadella/",
                  "dataset_type": "linkedin_person_profile",
              }
          )

          print(linkedin_results)
          ```

          ```python Use within an agent theme={null}
          from langchain_brightdata import BrightDataWebScraperAPI
          from langchain_google_genai import ChatGoogleGenerativeAI
          from langgraph.prebuilt import create_react_agent

          # Initialize the LLM
          llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key="your-api-key")

          # Initialize the Bright Data Scrapers tool
          scraper_tool = BrightDataWebScraperAPI(bright_data_api_key="your-api-key")

          # Create the agent with the tool
          agent = create_react_agent(llm, [scraper_tool])

          # Provide a user query
          user_input = "Scrape Amazon product data for https://www.amazon.com/dp/B0D2Q9397Y?th=1 in New York (zipcode 10001)."

          # Stream the agent's step-by-step output
          for step in agent.stream(
              {"messages": user_input},
              stream_mode="values",
          ):
              step["messages"][-1].pretty_print()
          ```
        </CodeGroup>
      </Tab>
    </Tabs>
  </Step>
</Steps>
