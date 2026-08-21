# FAQ: MCP

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/faqs](https://docs.brightdata.com/ai/mcp-server/faqs)
> **Category**: `ai-and-mcp`

---

FAQs about the Bright Data MCP server (60+ tools): setup, hosted versus self-hosted modes, available tools, token usage and billing for AI agents.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

<AccordionGroup>
  <Accordion title="What is Bright Data MCP Server?">
    Bright Data MCP (Model Context Protocol) is a server that enables LLMs, AI agents, and applications to access, discover, and extract web data in real-time. \
    It allows MCP clients like Claude Desktop, Cursor, and Windsurf to search the web, navigate websites, take actions, and retrieve data without getting blocked, making it perfect for web scraping tasks.\\

    * New MCP users get a **free tier** with 5,000 requests per month

    The MCP server provides advanced capabilities, including:

    * Bypassing geo-restrictions to access content regardless of location
    * Navigating websites with bot detection protection using unlocker technology
    * Structured data extraction from platforms like Amazon, LinkedIn, Instagram, and many other data feeds
    * Remote browser automation for complex web interactions
    * Access to a global IP network to avoid blocking or rate limiting

    **Get started with Bright Data MCP:**

    1. [**Explore the MCP GitHub repository**](https://github.com/brightdata/brightdata-mcp) to review the source code, contribute, or deploy your own instance.
    2. [**Read the MCP documentation**](/ai/mcp-server/overview) to understand the API, request structure, and supported features.
    3. [Get your API key](https://brightdata.com/cp/setting/users)
    4. [**Try the Bright Data AI Playground**](https://brightdata.com/ai/playground-chat) to test and experiment with live requests in a no-code environment.
  </Accordion>

  <Accordion title="Are there limitations for the Bright Data free tier?">
    Yes, the free tier includes up to 5,000 requests per month for web search and web page scraping via Web Unlocker.
  </Accordion>

  <Accordion title="Where do I get my API keys?">
    You can get your API token from the [user settings page](https://brightdata.com/cp/setting/users) in your Bright Data account. Make sure you have an account on [brightdata.com](https://brightdata.com) - new users get free credit for testing, and pay-as-you-go options are available after that.
  </Accordion>

  <Accordion title="Do I need a username to use the MCP server?">
    No. The Bright Data MCP server only requires an API token, for both the remote (hosted) and local (self-hosted) setup. Usernames (format: `brd-customer-{customer_id}-zone-{zone_name}`) are only used for native proxy access and are not needed for MCP, SDK or API integrations.

    If a third-party tool or integration asks for a username, you can leave it empty or check whether it is actually configuring proxy access.
  </Accordion>

  <Accordion title="How do I use Bright Data MCP Server?">
    Bright Data MCP (Model Context Protocol) is a server that allows AI agents, LLMs, and dev tools to access and extract real-time web data using Bright Data’s infrastructure. It is available as both a [remote (hosted)](/ai/mcp-server/remote/quickstart) and [local (self-hosted)](/ai/mcp-server/local/quickstart) server.

    To get started: [**BrightData MCP Overview**](/ai/mcp-server/overview)

    **Helpful links:**

    * [MCP GitHub Repository](https://github.com/brightdata/brightdata-mcp)
    * [MCP Documentation](/ai/mcp-server/overview)
    * [Try MCP in the AI Playground](https://brightdata.com/ai/playground-chat)
  </Accordion>

  <Accordion title="What can I do with Bright Data MCP Server?">
    Bright Data MCP allows you to integrate real-time web access into your AI agents or dev tools. It supports:

    **Search & Scraping:**

    * `search_engine`: Search Google, Bing, Yandex
    * `scrape_as_markdown`, `scrape_as_html`: Get content in clean formats
    * `session_stats`: Monitor tool usage

    **Structured Data Extraction:**

    * Amazon: `web_data_amazon_product`, `web_data_amazon_product_reviews`
    * LinkedIn: `web_data_linkedin_person_profile`, `web_data_linkedin_company_profile`
    * Instagram: `web_data_instagram_profiles`, `web_data_instagram_posts`, `web_data_instagram_reels`
    * Facebook: `web_data_facebook_posts`, `web_data_facebook_marketplace_listings`
    * Others: `web_data_x_posts`, `web_data_youtube_videos`, `web_data_zillow_properties_listing`

    **Browser Automation:**

    * `scraping_browser_navigate`, `scraping_browser_click_ref`, `scraping_browser_type_ref`
    * `scraping_browser_get_html`, `scraping_browser_screenshot`, `scraping_browser_wait_for_ref`

    **🔗 Full list of tools:** [MCP Tools on GitHub](https://github.com/brightdata/brightdata-mcp/blob/main/assets/Tools.md)
  </Accordion>

  <Accordion title="Which AI agents and tools can integrate with Bright Data MCP Server?">
    Bright Data MCP is designed to work with a wide range of AI tools and agents, including:

    * **Claude Desktop** (Anthropic)
    * **Cursor IDE**
    * **Windsurf**
    * **LangChain**
    * **AutoGPT / AgentGPT**
    * **Smithery**
    * **Custom LLMs or AI agents** that support MCP

    These tools can use MCP to:

    * Perform real-time web searches
    * Scrape structured data
    * Automate browser interactions
    * Access geo-restricted or protected content

    Try it live: [Bright Data AI Playground](https://brightdata.com/ai/playground-chat)
  </Accordion>

  <Accordion title="How do I enable browser control tools?">
    All you need is your Bright Data API key, the MCP server automatically creates and configures the required browser zone for you.

    To access browser tools, enable them using one of these methods:

    * **Pro mode:** Set `&pro=1` (remote) or `PRO_MODE=true` (self-hosted) to enable all tools, including browser automation
    * **Tool groups:** Set `&groups=browser` (remote) or `GROUPS=browser` (self-hosted) to enable just the browser automation tools

    For example, with the remote MCP:

    ```http theme={null}
    https://mcp.brightdata.com/sse?token=YOUR_API_TOKEN&groups=browser
    ```

    See the [Remote Advanced Configuration](/ai/mcp-server/remote/advanced) or [Local Advanced Configuration](/ai/mcp-server/local/advanced) for more details.
  </Accordion>

  <Accordion title="What tools are available in the Bright Data MCP Server?">
    For the full list of tools, please refer to our GitHub repo: [MCP Tools](https://github.com/brightdata/brightdata-mcp/blob/main/assets/Tools.md).

    Bright Data MCP offers a comprehensive set of tools, including:

    **Search and basic scraping:**

    * `search_engine`: Scrape search results from Google, Bing, or Yandex
    * `scrape_as_markdown`: Scrape a webpage and get results in Markdown format
    * `scrape_as_html`: Scrape a webpage and get results in HTML format
    * `session_stats`: View tool usage during the current session

    **Structured data extraction:**

    * Amazon: `web_data_amazon_product`, `web_data_amazon_product_reviews`
    * LinkedIn: `web_data_linkedin_person_profile`, `web_data_linkedin_company_profile`
    * ZoomInfo: `web_data_zoominfo_company_profile`
    * Instagram: `web_data_instagram_profiles`, `web_data_instagram_posts`, `web_data_instagram_reels`, `web_data_instagram_comments`
    * Facebook: `web_data_facebook_posts`, `web_data_facebook_marketplace_listings`, `web_data_facebook_company_reviews`
    * Various others: `web_data_x_posts`, `web_data_zillow_properties_listing`, `web_data_booking_hotel_listings`, `web_data_youtube_videos`

    **Browser automation:**

    * `scraping_browser_navigate`: Navigate to a URL
    * `scraping_browser_go_back`/`scraping_browser_go_forward`: Navigate browser history
    * `scraping_browser_click_ref`: Click on an element
    * `scraping_browser_type_ref`: Type text into an element
    * `scraping_browser_wait_for_ref`: Wait for an element to appear
    * `scraping_browser_screenshot`: Take a screenshot
    * `scraping_browser_get_html`/`scraping_browser_get_text`: Get page content
  </Accordion>

  <Accordion title="How do I handle timeout issues when using Bright Data MCP Server?">
    Some web data tools can take longer to execute, especially when dealing with complex websites. To ensure your agent can consume the data:

    1. Set a high enough timeout in your agent settings (180 seconds is recommended)
    2. For particularly slow sites, you may need to increase this value further
    3. Use the specialized `web_data_*` tools when available, as they're often faster than general scraping
    4. For browser automation sequences, keep operations close together in time
  </Accordion>

  <Accordion title="What security considerations should I keep in mind?">
    Always treat scraped web content as untrusted data. Never use raw scraped content directly in LLM prompts to avoid potential prompt injection risks. Instead:

    * Filter and validate all web data before passing it to the LLM
    * Use structured data extraction rather than raw text when possible
    * Be cautious with executing JavaScript from scraped content
  </Accordion>

  <Accordion title="Why am I getting a 'spawn npx ENOENT' error?">
    This error occurs when your system cannot find the `npx` command. To fix it:

    1. Find your Node.js path:
       * On macOS: Run `which node` in Terminal
       * On Windows: Run `where node` in Command Prompt
    2. Update your MCP configuration to use the full path instead of `npx`:

    ```json theme={null}
    {
      "mcpServers": {
        "Bright Data": {
          "command": "/usr/local/bin/node", // Replace with your actual Node.js path
          "args": ["node_modules/@brightdata/mcp/index.js"],
          "env": {
            "API_TOKEN": "<your-api-token>"
          }
        }
      }
    }
    ```
  </Accordion>

  <Accordion title="How do I monitor my usage and costs?">
    You can use the `session_stats` tool to check your usage during the current session. For comprehensive usage tracking and billing information, log in to your Bright Data account dashboard. The `session_stats` tool will show you information about:

    * Number of requests made during the current session
    * Tools used and their frequency
  </Accordion>

  <Accordion title="Is there a playground where I can try Bright Data MCP Server?">
    Yes, you can try Bright Data MCP without any setup using the [Bright Data AI Playground](https://brightdata.com/ai/playground-chat). It provides an easy way to explore the capabilities of Bright Data MCP without any local setup. Just sign in and start experimenting with web data collection!
  </Accordion>

  <Accordion title="How do I connect my AI agent with Bright Data's MCP?">
    You can connect your AI agent with Bright Data by following these steps:

    1. Install [Node.js](https://nodejs.org/en/download) (only required for the self-hosted option)
    2. Create a [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) (new users get free credit for testing)
    3. Copy your API key from the [user settings page](https://brightdata.com/cp/setting/users) (new users receive an **API key** in the welcome email)
    4. Configure your agent with your API key. For more detailed examples, visit us on [GitHub](https://github.com/brightdata/brightdata-mcp?tab=readme-ov-file#-usage-examples) or check our [MCP documentation](/ai/mcp-server/overview#configuration).
  </Accordion>

  <Accordion title="When using MCP, should I create zones or configure them?">
    No, zones are created automatically for you. All you need is Node.js (for self-hosted) and your Bright Data API key. If you want to change your zone name to something specific, you can always do so through the [control panel](https://brightdata.com/cp/zones).
  </Accordion>

  <Accordion title="Is there a free access tier for the Bright Data MCP?">
    Yes! Bright Data provides a free tier of **5,000 requests/month** to new MCP users. The free tier includes web search and web page scraping via Web Unlocker. See [What is the MCP free tier?](#) below for more details.
  </Accordion>

  <Accordion title="What is the MCP free tier?">
    The MCP free tier allows you to connect your AI agent via MCP (Model Context Protocol) to Bright Data services for free.
    You get up to 5,000 requests per month for web search and scraping any public webpage via Web Unlocker at no cost. This is ideal for testing, development, or light usage.

    The MCP free tier is not a separate grant. It is the same account-level [free tier](/general/account/billing-and-pricing/free-tier) of 5,000 credits per month, drawn from a single shared pool, because the MCP server runs on the Web Unlocker API.

    For more information, see the [Remote MCP Quickstart](/ai/mcp-server/remote/quickstart).
  </Accordion>

  <Accordion title="What happens when the free tier limit is reached?">
    When you exceed the 5,000 monthly request limit on the free tier, requests will start failing. To continue using the MCP server, you need to create a new Web Unlocker zone and configure the MCP to use it:

    1. Go to [brightdata.com/cp](https://brightdata.com/cp) and click **Add** (top-right)
    2. Select **Unlocker zone** and create it with any name (e.g., `my_unlocker`)
    3. Update your MCP configuration to use the new zone:
       * **Remote MCP:** Add `&unlocker=ZONE_NAME` to your MCP URL
       * **Self-hosted MCP:** Set the `WEB_UNLOCKER_ZONE=ZONE_NAME` environment variable
    4. Restart your MCP client (e.g., Claude Desktop, Cursor) after the configuration change
  </Accordion>

  <Accordion title="Can I run multiple MCP instances in parallel?">
    Yes, you can run multiple MCP instances for parallelized workloads. However, if you are using the self-hosted (local) MCP with `npx`, each instance downloads and caches the package separately, which can consume significant disk space.

    For parallel use cases, we recommend using the **Remote MCP** instead. It requires no local installation, runs entirely in the cloud, and eliminates disk space concerns. Simply point each instance to the remote endpoint:

    ```http theme={null}
    https://mcp.brightdata.com/sse?token=YOUR_API_TOKEN
    ```

    See the [Remote MCP Quickstart](/ai/mcp-server/remote/quickstart) for setup instructions.
  </Accordion>
</AccordionGroup>
