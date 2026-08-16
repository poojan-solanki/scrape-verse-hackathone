# How to set up Bright Data with Lindy.ai

> **Official Source**: [https://docs.brightdata.com/integrations/lindy-ai](https://docs.brightdata.com/integrations/lindy-ai)
> **Category**: `ai-and-mcp`

---

Connect Bright Data (1000+ scrapers) to Lindy.ai to automate web data workflows: trigger real-time collection, call APIs and feed results into business apps.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

<Accordion title="Expand to get your Bright Data Proxy Access Information">
  ### Your proxy access information

  Bright Data proxies are grouped in "Proxy zones". Each zone holds the configuration for the proxies it holds.

  To get access to the proxy zone:

  1. Login to Bright Data control panel
  2. Select the proxy zone or setup a new one
  3. Click on the new zone name, and select the **Overview** tab.
  4. In the overview tab, under **Access details** you can find the proxy access details, and copy them to clipboard on click.
  5. You will need: Proxy Host, Proxy Port, Proxy Zone username and Proxy Zone password.
  6. Click on the copy icons to copy the text to your clipboard and paste in your tool's proxy configuration.

  ### Access Details Section Example

  <img alt="" />

  ### Residential proxy access

  To access Bright Data's **Residential Proxies** you must be a KYC-verified business account. Complete KYC verification with the Bright Data compliance team; there is no automatic or no-KYC path. Without KYC, use ISP or Datacenter proxies. [Read more...](/proxy-networks/residential/network-access)

  ### Targeting search engines?

  If you target a search engine like google, bing or yandex, you need a special Search Engine Results Page (**SERP**) proxy API. Use Bright Data SERP API to target search engines.
  [Click here to read more about Bright Data SERP proxy API.](/scraping-automation/serp-api/introduction)

  ### Correct setup of proxy test to avoid "PROXY ERROR"

  In many tools you will see a "test proxy" function, which performs a conncectivity test to your proxy, and some add a geolocation test as well, to identify the location of the proxy.
  To correctly test your proxy you should target those search queries to:
  `https://geo.brdtest.com/welcome.txt` .

  Some tools use popular search engines (like google.com) as a default test target. Bright Data will block those requests and you tool will show **proxy error** although your proxy is perfectly fine.

  If your proxy test fails, this is probably the reason. Make sure that your test domain is not a search engine (this is done in the tool configuration, and not controlled by Bright Data).
</Accordion>

## What is Lindy.ai?

Lindy.ai is a no-code AI automation platform that enables users to create and deploy AI-powered agents, often referred to as "AI employees," to automate a wide range of business tasks. These agents can handle functions such as email management, customer support, scheduling, CRM data entry, lead generation, and more, integrating seamlessly with over 200 applications including Gmail, Slack, Zoom, and HubSpot.

## Why Use Bright Data With Lindy.ai?

**Automate Web Data Collection Workflows**

* Bright Data can scrape real-time data from websites (e.g., eCommerce, job boards, social media).
* Lindy.ai can automate when, how, and where that data is used (e.g., daily digests, alerts, CRM updates).

**No-Code Integration of Complex Data Pipelines**

* No need for developers or manual scripting.
* Build workflows visually in Lindy.ai using HTTP blocks to call Bright Data APIs.

**Trigger Actions Based on Live Data**

* **Example**: Scrape prices from competitor websites → If a product is cheaper than yours → Trigger a Slack alert or email team.
* **Example**: Monitor job postings → If a new listing matches your criteria → Add to Google Sheet or notify via SMS.

**Boost Operational Efficiency**

* Eliminate repetitive tasks like manual monitoring or copy-pasting scraped data.
* Your Lindy agents can act on web data automatically, 24/7.

**Scalable & Reliable**

* Bright Data handles proxy management, anti-bot bypassing, and data quality.
* Lindy handles logic, scheduling, and integrations with 200+ apps (CRM, Notion, Airtable, etc.).

## How to Integrate Bright Data With Lindy.ai?

<Steps>
  <Step title="Prerequisites">
    Before starting, make sure you have:

    * A **Bright Data** account with access to APIs (e.g., Browser API, Web Unlocker API, or DCA)
    * Your **Bright Data API key**
    * A **Lindy.ai** account
    * A basic understanding of APIs and HTTP requests
  </Step>

  <Step title="Choose and Configure Your Bright Data API">
    Depending on your use case, select the appropriate Bright Data API:

    * **Browser API** – For rendering JavaScript-heavy pages
    * **Data Collector API (DCA)** – For prebuilt scrapers
    * **Web Unlocker API** – For bypassing anti-bot mechanisms

    > 🔗 Example API endpoint (DCA):

    ```http theme={null}
    POST https://api.brightdata.com/dca/trigger
    ```
  </Step>

  <Step title="Get Your Bright Data API Key">
    1. Log in to your [Bright Data dashboard](https://brightdata.com/).
    2. Navigate to **API settings**.
    3. Copy your **API key**.
  </Step>

  <Step title="Create a New Workflow in Lindy.ai">
    1. Go to [Lindy.ai](https://lindy.ai) and log in.
    2. Click **Create Agent** or **New Workflow**.
    3. Choose a **Blank Workflow** or start from a use-case template.
  </Step>

  <Step title="Add an HTTP Request Block">
    1. Click “+” to add a block in your workflow.
    2. Select **HTTP Request**.

    > Configure as follows:
    >
    > * **Method**: `POST` or `GET` (depends on API)
    > * **URL**: Bright Data API endpoint (e.g., DCA trigger endpoint)
    > * **Headers**:
    >   * `Authorization`: `Bearer <your_api_key>`
    >   * `Content-Type`: `application/json`
    > * **Body** (if POST): JSON payload for your API

    ### Example: Trigger a Data Collector

    **HTTP Request Body:**

    ```json theme={null}
    {
      "collector_id": "clt_123456789",
      "start_url": "https://example.com/products"
    }
    ```

    **Response**: Bright Data returns a `collection_id`, which you can use in another step fetch the results."
  </Step>

  <Step title="Add Logic to Handle API Response">
    * Use Lindy's built-in blocks to:
      * Store the response
      * Parse data (e.g., JSON extract)
      * Trigger next steps (e.g., email, CRM update, Slack alert)
  </Step>

  <Step title="Test & Deploy">
    * Run the workflow with test data.
    * Check response logs and tweak headers or body if needed.
    * Once successful, activate the workflow or schedule it on a timer.
  </Step>
</Steps>

<Tip>
  ### 🎯 Bonus Use Case Example: Scrape + Notify

  1. Use Bright Data to scrape job listings.
  2. Use Lindy to filter for roles with keywords (e.g., “remote”, “Python”).
  3. Automatically email the relevant listings to your hiring team daily.
</Tip>
