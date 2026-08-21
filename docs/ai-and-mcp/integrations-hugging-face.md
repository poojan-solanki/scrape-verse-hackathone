# Set up Bright Data with Smolagents

> **Official Source**: [https://docs.brightdata.com/integrations/hugging-face](https://docs.brightdata.com/integrations/hugging-face)
> **Category**: `ai-and-mcp`

---

Connect Smolagents to Bright Data (1000+ pre-built scrapers) so your agent can crawl sites, run web searches and access data from LinkedIn and Amazon.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Why Use Bright Data With Smolagents?

The Bright Data tools for Smolagents provide the following capabilities:

<AccordionGroup>
  <Accordion title="Web Search">
    * **`search_tool`**\
      Search Google and get structured search results. This tool can search the web and return relevant results for your queries.

    ```python theme={null}
    from smolagents import Tool

    web_search = Tool.from_space(
        "BrightData/brightdata-search-tool",
        name="search_tool",
        description="search the web"
    )
    ```
  </Accordion>

  <Accordion title="Extract">
    * **`extract_tool`**\
      Scrape webpages and extract content as Markdown format. This tool can bypass CAPTCHA and bot detection to reliably extract data from any website.

    ```python theme={null}
    from smolagents import Tool

    extract = Tool.from_space(
        "BrightData/brightdata-scraper-tool",
        name="extract_tool",
        description="extract data from the web as markdown without getting blocked"
    )
    ```
  </Accordion>

  <Accordion title="Structured Data Feeds">
    * **`data_feeds_tool`**\
      Retrieve structured data from various platforms including LinkedIn, Amazon, Instagram, Facebook, X (Twitter), Zillow, and more.

    ```python theme={null}
    from smolagents import Tool

    data_feeds = Tool.from_space(
        "BrightData/brightdata-dataset-tool",
        name="data_feeds_tool",
        description="extract structured data from the web"
    )
    ```

    Supported platforms include:

    * LinkedIn (profiles and companies)
    * Amazon (products and reviews)
    * Instagram (profiles, posts, reels, comments)
    * Facebook (posts, marketplace listings, company reviews)
    * X/Twitter (posts)
    * Zillow (property listings)
    * Booking.com (hotel listings)
    * YouTube (videos)
    * And many more

    For more information, visit the [Bright Data documentation](/).
  </Accordion>
</AccordionGroup>

## How to Integrate Bright Data With Smolagents?

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Installation">
    Install the required packages. **Important:** As of December 9, 2025, these specific versions are mandatory to align with Smolagents:

    ```bash theme={null}
    pip install smolagents
    pip install --upgrade --force-reinstall "gradio_client<2.0.0" "gradio<6.0.0"
    ```
  </Step>

  <Step title="Configure API Key">
    Set your Bright Data API key as an environment variable:

    ```bash theme={null}
    export BRIGHTDATA_API_KEY="your-api-key"
    ```

    Or set it in your Python code:

    ```python theme={null}
    import os
    os.environ["BRIGHTDATA_API_KEY"] = "your-api-key"
    ```
  </Step>

  <Step title="Obtain Your Hugging Face API Token">
    When using `InferenceClientModel`, you need a Hugging Face token for authentication:

    * Visit [Hugging Face Settings - Tokens](https://hf.co/settings/tokens)
    * Create a new token with "Make calls to the serverless Inference API" permission
    * Set it as an environment variable:

    ```bash theme={null}
        export HF_TOKEN="your-hf-token"
    ```

    Or pass it directly when initializing the model:

    ```python theme={null}
        model = InferenceClientModel(
            model_id="Qwen/Qwen3-Next-80B-A3B-Thinking",
            token="your-hf-token"
        )
    ```

    **Note:** Free Hugging Face accounts include inference credits. Upgrade to PRO for higher rate limits.
  </Step>

  <Step title="Usage">
    Here's a complete example of how to use Bright Data tools with Smolagents:

    ```python theme={null}
    from smolagents import CodeAgent, InferenceClientModel, Tool

    # Load Bright Data tools from Hugging Face Spaces
    web_search = Tool.from_space(
        "BrightData/brightdata-search-tool",
        name="search_tool",
        description="search the web"
    )

    extract = Tool.from_space(
        "BrightData/brightdata-scraper-tool",
        name="extract_tool",
        description="extract data from the web as markdown without getting blocked"
    )

    data_feeds = Tool.from_space(
        "BrightData/brightdata-dataset-tool",
        name="data_feeds_tool",
        description="extract structured data from the web"
    )

    # Initialize the model
    model = InferenceClientModel(model_id="Qwen/Qwen3-Next-80B-A3B-Thinking")

    # Create the agent with Bright Data tools
    agent = CodeAgent(tools=[web_search, extract, data_feeds], model=model)

    # Run the agent
    response = agent.run(
        "Improve this prompt, then search the web for it.",
        additional_args={'user_prompt': 'who is elon musk'}
    )

    print(response)
    ```
  </Step>
</Steps>

## Example Use Cases

<AccordionGroup>
  <Accordion title="Web Research">
    Use the search tool to find information across the web:

    ```python theme={null}
    agent.run("Search for the latest developments in quantum computing")
    ```
  </Accordion>

  <Accordion title="Data Extraction">
    Scrape and extract content from websites:

    ```python theme={null}
    agent.run("Extract the main content from https://example.com/article")
    ```
  </Accordion>

  <Accordion title="Competitor Analysis">
    Extract structured data from e-commerce platforms:

    ```python theme={null}
    agent.run("Get product details and reviews for the top-rated laptops on Amazon")
    ```
  </Accordion>

  <Accordion title="Social Media Intelligence">
    Retrieve data from social media platforms:

    ```python theme={null}
    agent.run("Get the latest posts and engagement metrics from a LinkedIn company page")
    ```
  </Accordion>
</AccordionGroup>

## Tips for Best Results

* **Be specific** with your prompts to help the agent understand exactly what data you need
* **Combine tools** for complex tasks - the agent can use search, extract, and data feeds together

For more advanced configurations and detailed API documentation, visit [Bright Data's documentation](/).
