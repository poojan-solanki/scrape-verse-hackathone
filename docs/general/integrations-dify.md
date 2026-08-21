# How to set up Bright Data with Dify

> **Official Source**: [https://docs.brightdata.com/integrations/dify](https://docs.brightdata.com/integrations/dify)
> **Category**: `general`

---

Add Bright Data's web scraping plugin to Dify to extract data from 50+ platforms including Amazon, LinkedIn and Instagram, plus search and markdown.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

The Bright Data plugin for Dify pulls structured web data, search results and page markdown into your Dify workflows. Install it from the Dify Marketplace, add your Bright Data API key, and drop the scraping tools into any workflow. It covers 50+ platforms including Amazon, LinkedIn, Instagram and YouTube.

<Frame>
  ![Dify workflow using the Bright Data plugin to extract Amazon product data and summarize it with an LLM node](https://github.com/user-attachments/assets/5825d274-d47b-4fed-950f-65e6b7c63e58)
</Frame>

<Note>
  For the latest plugin updates, see the [Bright Data Dify plugin repository](https://github.com/brightdata/brightdata-dify-plugin/blob/main/BrightData/brightdata-dify-plugin/README.md).
</Note>

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp) with an [API key](/api-reference/authentication#api-key)
* A Dify account with access to Dify Studio

## How to add the Bright Data plugin to Dify

<Steps>
  <Step title="Install the plugin">
    Install the Bright Data plugin from the [Dify Marketplace](https://marketplace.dify.ai/plugins/idanvilenski/brightdata).
  </Step>

  <Step title="Get your Bright Data API key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#api-key) if you do not have one.
  </Step>

  <Step title="Add a scraping tool to a workflow">
    1. Go to **Dify Studio** and open a **Workflow**.
    2. Add one of the Bright Data tools:
       * **Structured Data Feeds**: extract structured data from 50+ platforms
       * **Scrape As Markdown**: convert any webpage to clean markdown
       * **Search Engine**: get search results from Google, Bing or Yandex
    3. Enter your Bright Data API key when prompted.
    4. Connect an **LLM node** to process or summarize the scraped data.
  </Step>

  <Step title="Run an example workflow">
    The banner image above shows this workflow. To extract Amazon product information and summarize it:

    1. **START**: input a product URL
    2. **Structured Data Feeds**: extract product details
    3. **LLM**: summarize into readable text
    4. **END**: output a clean product summary

    <Note>
      Two tips for reliable workflows:

      * Reference every stage to the output of the previous stage
      * Set a high character limit on input fields (for the URL field, choose the "short paragraph" var option)
    </Note>
  </Step>
</Steps>

## Available tools

The plugin adds three tools to Dify.

### Structured data feeds

Extract structured data from popular platforms:

* **E-commerce**: Amazon, eBay, Walmart, Best Buy, Etsy, Zara
* **Social media**: Instagram, Facebook, TikTok, YouTube, X (Twitter)
* **Professional**: LinkedIn profiles, companies, jobs
* **Business**: Crunchbase, ZoomInfo
* **Maps and reviews**: Google Maps, booking sites
* **News**: news sources and articles

### Scrape as markdown

Convert any webpage into clean, readable markdown for:

* Content analysis
* Documentation extraction
* Article processing

### Search across engines

Get search results from major search engines:

* Google
* Bing
* Yandex and others

## Use cases

* **E-commerce monitoring**: track product prices and availability
* **Lead generation**: extract business information from LinkedIn
* **Content research**: gather articles and news for analysis
* **Market research**: monitor competitor websites and social media
* **SEO analysis**: track search engine results and rankings

## Advanced: use Bright Data MCP

The Dify plugin uses hosted APIs. For advanced workflows, you can also integrate the [Bright Data MCP server](/ai/mcp-server/overview), which exposes the full Bright Data scraping and automation toolset over the Model Context Protocol.

Call MCP tools from Dify using custom HTTP requests or external service nodes to add capabilities like browser automation and real-time scraping.

* [Explore MCP on GitHub](https://github.com/brightdata/brightdata-mcp/tree/main)
* [Try MCP in the Smithery Playground](https://smithery.ai/server/@luminati-io/brightdata-mcp/tools)
