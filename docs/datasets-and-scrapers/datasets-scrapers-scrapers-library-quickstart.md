# Scrapers - quick start

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/quickstart](https://docs.brightdata.com/datasets/scrapers/scrapers-library/quickstart)
> **Category**: `datasets-and-scrapers`

---

Get started with the Bright Data Scrapers Library (1000+ pre-built scrapers): pick a target site, trigger a collection, and retrieve results in 3 steps.

<Steps>
  <Step title="Prerequisites">
    * A Bright Data account (Sign Up → 2 min)
    * An active API Key ([How to get an API Key](/api-reference/authentication))
  </Step>

  <Step title="Pick the target site">
    1. Go to the [Scraper Library](https://brightdata.com/cp/scrapers/browse)
    2. Browse the list and click the site you need.
    3. Can’t find it? Check out the [Managed Services](/datasets/scrapers/managed-services) or [Scraper Studio IDE](/datasets/scraper-studio/introduction) products for a solution tailored to your needs!
  </Step>

  <Step title="Choose the scraper endpoint">
    Inside a site you’ll see multiple Scraper Endpoints, for example:

    * LinkedIn
      * Profile by URL – supply profile URLs, get public data fields.
      * Profiles by Keyword – supply a search term, get matching profile URLs (+ optional full data).
      * Company Jobs – collect job postings from a company page.
    * Amazon
      * Product by ASIN, Search Results, Reviews, “Frequently Bought Together”, etc.

    Pick the endpoint that returns the information you need, then click it to open the scraper's Configuration tab.

    <Frame>
      <img alt="collect-by-url" />
    </Frame>
  </Step>

  <Step title="Build the request">
    The central panel now shows a form. Work through top-to-bottom:

    **A. Inputs**

    * "Single Input”: paste a URL/keyword right in the textbox.
    * “Bulk CSV”: upload a CSV according to the input parameters of the scraper

    **B. Scraper Settings (optional)**

    1. Output Schema – tick only the data fields you require (saves bandwidth & storage).
    2. External Storage – plug credentials for S3 / GCS / Azure / etc. Result files land there automatically.
    3. Webhook URL – we POST the job’s JSON to your endpoint once finished, great for real-time pipelines.
  </Step>

  <Step title="Pick run mode: /scrape vs /trigger">
    The Code Snippet panel (right side) updates live according to your configuration setup. To run the request you can choose between two endpoints:

    | Mode  | UI Label                | API endpoint                                                   | Behaviour                                                                                                                                      | Good For                                        |
    | :---- | :---------------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
    | Sync  | Synchronous (Real-time) | [/scrape](/api-reference/scrapers/synchronous-requests)        | Return the data as a response to the API call in real time. This endpoint has a 1-minute timeout, If it runs longer it auto-switches to async. | Quick and light jobs with results in real time. |
    | Async | Asynchronous            | [/trigger](/api-reference/rest-api/scraper/trigger-collection) | Returns snapshot\_id instantly;   you poll `/snapshots/{id}` or wait for the results in your `logs/webhook/storage`.                           | Production & large jobs                         |
  </Step>

  <Step title="Copy the Code">
    * Language selector – choose your preferred programming language using the code block dropdown.
    * Snippet already contains: endpoint URL, your API key header, payload JSON (inputs + options).
    * Paste it into a terminal / IDE / serverless function.
  </Step>

  <Step title="Monitor & Retrieve Results">
    1. Scraper page → Logs tab

    <Frame>
      <img alt="logs-tab" />
    </Frame>

    * Real-time state (running, ready, failed).
    * Download JSON/CSV/etc with one click.

    2. Webhook (if set)
       * Your server receives `{snapshot_id, status, result_url}` payload.
    3. External Storage
       * The result file appears in the bucket path you configured.
    4. [Snapshot Management API](/api-reference/scrapers/management-apis/monitor-progress)
       * Use these endpoints to monitor the snapshot progress.
  </Step>
</Steps>

🎉 You’re now ready to scrape at scale, happy collecting!
