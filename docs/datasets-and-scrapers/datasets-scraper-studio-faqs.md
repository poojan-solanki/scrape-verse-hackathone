# Scraper Studio FAQs

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/faqs](https://docs.brightdata.com/datasets/scraper-studio/faqs)
> **Category**: `datasets-and-scrapers`

---

FAQs about Bright Data Scraper Studio: scraper types, inputs and outputs, billing, limits, snapshots and reporting issues for custom scraper builds.

This page answers the questions the Bright Data support team hears most often about Scraper Studio. If you need a walkthrough instead of a quick answer, start with [Understanding Scraper Studio](/datasets/scraper-studio/introduction).

## Frequently asked general questions

<AccordionGroup>
  <Accordion title="What is a Bright Data web scraper?">
    A Bright Data web scraper is an automated script that collects public web data at scale through Bright Data's proxy and unblocking infrastructure. It returns the collected data in a structured format (JSON, NDJSON, CSV, XLSX) and can deliver it to an API endpoint, webhook, cloud storage, or SFTP. Bright Data maintains hundreds of pre-built scrapers for popular sites in the [Scrapers Library](https://brightdata.com/products/web-scraper).
  </Accordion>

  <Accordion title="What is Bright Data Scraper Studio?">
    Bright Data Scraper Studio is a cloud-hosted environment for building custom scrapers. It offers two modes: an AI Agent that generates a scraper from a natural-language description, and an IDE where you write JavaScript directly. Both modes run on the same Bright Data proxy and unblocking infrastructure. See [Understanding Scraper Studio](/datasets/scraper-studio/introduction).
  </Accordion>

  <Accordion title="What is the difference between Scraper Studio and the Scrapers Library?">
    The [Scrapers Library](https://brightdata.com/products/web-scraper) contains pre-built scrapers Bright Data maintains for popular sites such as Amazon, LinkedIn, and Instagram. Bright Data Scraper Studio is the environment you use to build custom scrapers when the site you need is not in the library.
  </Accordion>

  <Accordion title="Can one scraper collect data from multiple websites?">
    Yes. A single scraper can navigate to any URL you pass in as input. If you need different extraction logic per site, use multiple stages (`next_stage()`) or build one scraper per site.
  </Accordion>

  <Accordion title="Can Scraper Studio discover URLs, or only scrape URLs I provide?">
    You do not have to provide every URL. The Bright Data Scraper Studio AI Agent can build different scraper types depending on what input you already have:

    * **PDP**: provide a list of product URLs you already have; get one row per URL.
    * **Discovery**: provide a category or listing URL; get one row per item found on that listing.
    * **Discovery + PDP**: provide a category or listing URL; get full per-product detail for every item.
    * **Search**: provide a keyword and optional country when you do not have URLs.
    * **Sitemap**: provide a domain or `sitemap.xml` URL; get either all URLs found in the sitemap or full per-page detail for every URL.

    Each scraper is scoped to one data shape, so the AI Agent is not a general crawler; do not pass a homepage and ask for "everything." For deeper link discovery across a site, build a multi-stage scraper in the Bright Data Scraper Studio IDE with `next_stage()`, `rerun_stage()` and `load_sitemap()`. See [What can the AI Agent build?](/datasets/scraper-studio/ai-agent#what-can-the-ai-agent-build) and [Functions](/datasets/scraper-studio/functions).
  </Accordion>

  <Accordion title="Can Scraper Studio scrape mobile apps?">
    Bright Data Scraper Studio scrapes the web, not native mobile apps. For mobile layouts, the Browser worker can emulate a mobile device with `emulate_device('iPhone X')` so the target site serves its mobile web pages. Native iOS or Android app data is out of scope. See [Functions](/datasets/scraper-studio/functions).
  </Accordion>
</AccordionGroup>

## Inputs, outputs, and schemas

<AccordionGroup>
  <Accordion title="What is a scraper input?">
    An input is the parameter set Bright Data Scraper Studio passes into the scraper for a single run. Typical inputs are a URL, a search keyword, a product ID or ASIN, a profile handle, or a date range. Multiple inputs can be passed in one job via CSV upload or the API.
  </Accordion>

  <Accordion title="What is a scraper output?">
    The output is the structured data the scraper returns for an input. Bright Data Scraper Studio can deliver output in JSON, NDJSON, CSV, XLSX or Parquet depending on the scraper's delivery preferences and selected delivery option.

    ```text theme={null}
    Note: Parquet is not available for API download, Email, Webhook, or OCI PAR delivery.
    ```
  </Accordion>

  <Accordion title="Why did I receive more records than inputs?">
    One input can generate multiple records. For example, if you submit 5 product listing URLs and each listing page contains 20 products, the scraper returns 100 records from 5 inputs. The statistics page counts records, not inputs.
  </Accordion>

  <Accordion title="What is a search scraper?">
    A search scraper takes a keyword as input instead of a URL. Bright Data Scraper Studio runs a search on the target site and extracts data from the result pages. Use a search scraper when you do not have specific URLs to scrape.
  </Accordion>

  <Accordion title="What is a discovery scraper?">
    A discovery scraper collects data from listing pages such as search results, category pages, or directories. It extracts fields that appear directly on the listing (titles, prices, ratings) and can also collect product URLs or IDs for a follow-up product-page scrape.
  </Accordion>

  <Accordion title="What do I do if I updated the schema of a managed scraper while Bright Data is still working on it?">
    When the input or output schema changes, the scraper must be updated to match. If you trigger the scraper before Bright Data has updated it, you will see an `input(output)_schema_incompatible` error.

    To trigger the scraper anyway and ignore the schema mismatch, click **Trigger anyway** in the UI or add a parameter to your API request:

    * Output schema incompatible: `override_incompatible_schema=1`
    * Input schema incompatible: `override_incompatible_input_schema=1`

    ```bash theme={null}
    curl "https://api.brightdata.com/dca/trigger?scraper=ID_COLLECTOR&queue_next=1&override_incompatible_schema=1" \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer API_KEY" \
      -d '[{"url":"https://targetwebsite.com/product_id/"}]'
    ```
  </Accordion>
</AccordionGroup>

## Building and editing scrapers

<AccordionGroup>
  <Accordion title="How do I start building a scraper?">
    You have three options in Bright Data Scraper Studio:

    * **Build with the AI Agent**: describe the data you want in plain language. See [Scraper Studio AI Agent](/datasets/scraper-studio/ai-agent).
    * **Build in the IDE**: write JavaScript directly. See [Develop a scraper with the IDE](/datasets/scraper-studio/develop-a-scraper).
    * **Request a managed scraper**: Bright Data's data team builds and maintains the scraper for you.
  </Accordion>

  <Accordion title="Can I edit the code in the IDE after the AI Agent builds a scraper?">
    Yes. Every scraper, including ones the AI Agent generated, can be opened and edited in the Bright Data Scraper Studio IDE. You can change extraction logic, modify selectors, add or remove output fields, and tune performance. If you prefer not to write code, use the [Self-Healing tool](/datasets/scraper-studio/self-healing-tool) to request changes in plain language.
  </Accordion>

  <Accordion title="How does the AI Agent build a scraper?">
    Pass the AI Agent a target URL and an optional description of the data you want. The agent asks clarifying questions, generates an output schema for your review, and writes the full scraper code once you approve the schema. You can then run the scraper immediately or schedule recurring runs. See [Scraper Studio AI Agent](/datasets/scraper-studio/ai-agent) for a full walkthrough.
  </Accordion>

  <Accordion title="Do I own the scraper code, and can I export it?">
    Yes. You own every line of the scraper, including code the AI Agent generates, and you can read and edit it in the Bright Data Scraper Studio IDE. Scrapers are plain JavaScript, so you can copy the code out and keep it in your own repository. To run a scraper outside Bright Data you would need to supply your own proxy and unblocking infrastructure.
  </Accordion>

  <Accordion title="Does Scraper Studio work on JavaScript-heavy or dynamic pages?">
    Yes. Choose the Browser worker for sites that render content with JavaScript; it runs a full headless browser so you can wait for elements, click, scroll and capture background network calls. Choose the Code worker for static HTML and HTTP responses, which is faster and cheaper. See [Worker types](/datasets/scraper-studio/worker-types).
  </Accordion>
</AccordionGroup>

## Self-Healing

<AccordionGroup>
  <Accordion title="Is Self-Healing automatic, or do I trigger it?">
    You trigger Self-Healing; it does not fire automatically when a target site's DOM changes. You can trigger it three ways:

    * **Control panel**: open the scraper in the Bright Data Scraper Studio IDE, describe the fix in plain language and accept the AI-generated diff. See [Self-Healing tool](/datasets/scraper-studio/self-healing-tool).
    * **Bright Data CLI**: run `bdata scraper heal <collector_id>` then `bdata scraper approve`. Add `--auto-approve` for unattended workflows. See [Build a scraper with the Bright Data CLI](/datasets/scraper-studio/build-with-the-cli#how-do-i-fix-a-scraper-when-the-site-changes).
    * **Bright Data API**: call `POST /dca/collectors/{collector_id}/refactor_template`. See [Trigger Self-Healing](/api-reference/scraper-studio-api/ai-flow/trigger-self-healing).

    Each path repairs the code you own and keeps the same Collector ID. The refactor runs on Bright Data infrastructure, not on your machines, and can take up to 15 minutes; Bright Data emails you when the diff is ready.
  </Accordion>
</AccordionGroup>

## Running and triggering scrapers

<AccordionGroup>
  <Accordion title="What are the options for triggering a scraper run?">
    Bright Data Scraper Studio supports three trigger methods:

    * **By API**: regular request, queue request, or replace request
    * **Manually**: from the control panel
    * **On a schedule**: hourly, daily, weekly, or custom

    See [Initiate collection and delivery](/datasets/scraper-studio/initiate-collection-and-delivery-options).
  </Accordion>

  <Accordion title="What is a queued API request?">
    A queued request tells Bright Data Scraper Studio to wait until the previous request for the same scraper finishes before starting the next one. Use it when you want serial execution instead of running multiple jobs in parallel.
  </Accordion>

  <Accordion title="What is the parallel job limit?">
    Bright Data Scraper Studio runs up to **100 batch jobs in parallel** per scraper. Additional jobs queue automatically and start as capacity frees up. See [Scraper Studio specifications](/datasets/scraper-studio/specifications) for full limits.
  </Accordion>

  <Accordion title="How do I debug a real-time scraper?">
    In the Bright Data Scraper Studio dashboard, click the **Bug** icon under **Failed crawls** to open the scraper in the IDE. Failed inputs appear in the **Last errors** tab with the exact error message and error code. Bright Data stores the last 1,000 errors per virtual job so you can re-run failed inputs and diagnose the issue.
  </Accordion>
</AccordionGroup>

## Blocking and unblocking

<AccordionGroup>
  <Accordion title="How does Scraper Studio handle blocking and CAPTCHAs?">
    Bright Data Scraper Studio runs every scraper on Bright Data's proxy and unblocking network, with automatic retries and real-user fingerprinting built in. The IDE provides `solve_captcha()` to solve CAPTCHAs, `detect_block()` and `blocked()` to detect and report blocks, and `country()` to route a request through a specific country when a site is geo-restricted. See [Functions](/datasets/scraper-studio/functions).
  </Accordion>
</AccordionGroup>

## Billing and limits

<AccordionGroup>
  <Accordion title="What is a CPM in Scraper Studio billing?">
    CPM stands for "cost per mille", meaning 1,000 page loads. Bright Data Scraper Studio bills page loads in CPM units. Current rates are on the [pricing page](https://brightdata.com/pricing/web-scraper/custom).
  </Accordion>

  <Accordion title="Which operations count as a billable event?">
    A billable event is any function that causes Bright Data Scraper Studio to load a page or perform a network request:

    * `navigate()`
    * `request()`
    * `load_more()`
    * Media file download (billed per GB, separate from CPM)
  </Accordion>

  <Accordion title="Does Scraper Studio have its own free trial allotment?">
    Scraper Studio does not have a separate page-load or record allotment, but it is covered by the account-level free tier. Every new account gets 5,000 free credits per month, a single shared pool usable across the Web Unlocker API, SERP API, Web Scraper API and Scraper Studio. In the free tier, Scraper Studio consumes one credit per page load drawn from that pool; records are not billed by default. New accounts also get a one-time onboarding bonus credit usable on any Bright Data product. See the [free tier](/general/account/billing-and-pricing/free-tier) and [billing](/general/account/billing-and-pricing/billing) pages.
  </Accordion>
</AccordionGroup>

## Snapshots and data retention

<AccordionGroup>
  <Accordion title="How long are snapshots available after a collection?">
    Snapshot retention depends on the collection type:

    * **Batch collections**: 16 days
    * **Real-time collections**: 7 days

    After that, snapshots are permanently deleted. Bright Data does not recover expired data. Download or export your data before the retention window closes, or configure the scraper to deliver results automatically via webhook, API download, or cloud storage.
  </Accordion>
</AccordionGroup>

## How to report issues

<AccordionGroup>
  <Accordion title="How do I report an issue with a scraper?">
    Open the scraper in the Bright Data Scraper Studio control panel and select **Report an issue** from the three-dots menu. Bright Data routes the ticket to a different team based on the issue type:

    * **Data** (missing fields, missing records, parsing errors): routed to the scraper engineer. Available only for managed scrapers.
    * **Collection and delivery** (incomplete delivery, slow scraper): routed to the support team.
    * **Other** (UI issue, product question): routed to the account manager.

    Include the affected job ID, a description of the problem, and a screenshot or file if it helps show the issue.
  </Accordion>

  <Accordion title="What information should I include in a bug report?">
    Include:

    * The issue category (wrong data, missing records, delivery problem, IDE issue, other)
    * A description of the exact problem
    * The affected job ID
    * A screenshot or file that shows the issue, if possible

    Bright Data opens a ticket automatically and the R\&D team handles it.
  </Accordion>

  <Accordion title="How do I know Bright Data is working on a managed-scraper request?">
    You receive an email when a Bright Data engineer starts building the scraper and another email when it is ready. You can also track the status on the Scrapers dashboard.
  </Accordion>
</AccordionGroup>

## Related

<CardGroup>
  <Card title="Understanding Scraper Studio" icon="book-open" href="/datasets/scraper-studio/introduction">
    How Bright Data Scraper Studio works and when to use it
  </Card>

  <Card title="Specifications" icon="file-lines" href="/datasets/scraper-studio/specifications">
    Infrastructure limits, billing, and data retention
  </Card>
</CardGroup>
