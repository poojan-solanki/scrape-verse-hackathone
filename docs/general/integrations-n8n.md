# How to set up Bright Data with n8n

> **Official Source**: [https://docs.brightdata.com/integrations/n8n](https://docs.brightdata.com/integrations/n8n)
> **Category**: `general`

---

Connect Bright Data to n8n to build automated, no-code data workflows with native nodes for SERP, Web Unlocker and Web Scraper API in your self-hosted instance.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## What is n8n?

[n8n](https://n8n.io) is a powerful workflow automation tool that allows you to connect apps and APIs with ease using a visual interface. It supports custom logic, API integrations, and now, thanks to the community, Bright Data’s Web Unlocker API.

With the new [n8n-nodes-brightdata](https://www.npmjs.com/package/n8n-nodes-brightdata) node, you can automate your web scraping pipelines using Bright Data’s advanced proxy and CAPTCHA-solving infrastructure directly inside your n8n workflows.\
\
For advanced use cases, you can also integrate [**Bright Data MCP**](/ai/mcp-server/overview) via custom HTTP request nodes to access structured data tools, browser automation, and real-time scraping capabilities.

## Why Use Bright Data With n8n?

Integrating Bright Data with n8n lets you create advanced, resilient web scrapers without writing code. Benefits include:

* Scrape websites without getting blocked
* Emulate real-user behavior with headers, IP rotation, and fingerprinting
* Bypass CAPTCHA automatically
* Run headless scraping jobs reliably
* Chain the data into any of n8n’s 350+ supported services (Google Sheets, Airtable, Notion, and more)

For teams without proxy infrastructure or those scraping premium/anti-bot domains, this integration is a game-changer.

## How to Integrate Bright Data With n8n

This is a sample n8n workflow that automates the process of collecting and delivering the "Deals of the Day" from MediaMarkt, specifically tailored to user preferences, and sends those deals via email.

<Frame>
  <img alt="n8n-workflow-sample" />
</Frame>

**Workflow Structure:**

1. Webhook Trigger (User Form Submission)
2. Bright Data (Data Scraping)
3. HTML Extract (Content Extraction)
4. OpenAI (Recommendation Generation)
5. Split Out (Deal Item Separation)
6. Document Generator (HTML Document Creation)
7. SMTP Email Send (Email Delivery)

<Steps>
  <Step title="Prerequisites">
    * [Bright Data API key](/api-reference/authentication#api-key): For scraping data from MediaMarkt.
    * **OpenAI API**: To generate the list of recommended deals using GPT-4o-mini.
    * **SMTP credentials**: For sending the email with the deals.
    * The following community nodes installed in your n8n instance:
      * `n8n-nodes-base.brightdata`
      * `n8n-nodes-base.documentGenerator`
  </Step>

  <Step title="Form Submission (Webhook)">
    This node will be the entry point of your workflow, triggered by a form submission.

    * Drag and drop a Webhook node onto your canvas.
    * Request body includes:
      * `email`: User's email
      * `categories`: Array of categories like `"phones"`, `"appliances"`

    **Webhook Settings**

    * HTTP Method: `POST`
    * Path: `recommend-deals`
  </Step>

  <Step title="Scrape Deals with Bright Data">
    This node will connect to Bright Data to scrape the MediaMarkt website.

    * Drag and drop a **Bright Data** community node onto your canvas and connect it to the Webhook node.
    * Set Service to `Web Unlocker API`
    * Use method `GET` with the following request settings:
      * URL: `https://www.mediamarkt.es/es/campaign/campanas-y-ofertas`
      * Zone: Your Bright Data zone
      * Country: The country of your choosing for example: `es` (Spain)
      * API Token: Your Bright Data API key
  </Step>

  <Step title="Extract HTML Content">
    This node will extract specific HTML content from the raw data returned by Bright Data.

    * Drag and drop an HTML Extract node onto your canvas and connect it to the Bright Data node.
    * Use a **Set** or **Function** node to extract `title` and `body` from the HTML.

    You can optionally use the **HTML Extract** node if parsing specific sections.
  </Step>

  <Step title="Generate Recommendations with OpenAI">
    This node will use GPT-4o-mini to process the extracted data and generate recommended deals.

    * Drag and drop an OpenAI node onto your canvas and connect it to the HTML Extract node.
    * Authentication:
      * Credential Type: Select "API Key".
      * API Key: Enter your OpenAI API Key.
      * Model: Select `gpt-4o-mini`.
      * Temperature: 0.7 (Adjust as needed)
    * Prompt it with:

    ```text theme={null}
    You are an AI assistant. Based on the following HTML content, extract and recommend the best deals related to the categories: {{ $json["categories"].join(", ") }}.

    Respond in JSON array with keys: name, description, price, link.

    Content: {{ $json["html"] }}
    ```
  </Step>

  <Step title="Split Recommendations">
    This node will split the JSON array of deals generated by OpenAI into individual items for further processing.

    * Drag and drop a Split Out node onto your canvas and connect it to the OpenAI node.
    * Use a **SplitOut** node to split the response from OpenAI (JSON array) into individual deals.

      **Split Type**: Items in an array\
      **Input Path**: `$.json.deals`
  </Step>

  <Step title="Create HTML Document">
    This node will create an HTML document from a template, populating it with the recommended deals.

    * Drag and drop a Document Generator community node onto your canvas and connect it to the Split Out node.

    **Input**

    * Title: "Your Personalized Deals from MediaMarkt"
    * Template: Custom HTML with deal cards (include name, description, price, and link)

    **Optional**

    * Loop over split items to render a card per deal
  </Step>

  <Step title="Send Email with Deals">
    This node will send the generated HTML document as an email to the user.

    * Drag and drop an SMTP Email Send node onto your canvas and connect it to the Document Generator node.

    **Settings**

    * To: `{{$json["email"]}}`
    * Subject: "🔥 Your Personalized MediaMarkt Deals"
    * Message: Embed the generated HTML document
  </Step>
</Steps>

<Note>
  * The Bright Data community node in n8n is designed specifically for integrating with the Web Unlocker API only
  * This node is not officially developed by Bright Data - it's a community contribution
  * For more information and community support, visit: [n8n Community Discussion](https://community.n8n.io/t/bright-data-community-node-for-scrapping-anything/92011)
</Note>
