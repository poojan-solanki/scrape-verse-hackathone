# Initiate collection and delivery

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/initiate-collection-and-delivery-options](https://docs.brightdata.com/datasets/scraper-studio/initiate-collection-and-delivery-options)
> **Category**: `datasets-and-scrapers`

---

Trigger a Bright Data Scraper Studio collection by API, manually or on a schedule, then deliver to webhook, S3, Google Cloud, Azure, SFTP, email or API.

After you save a scraper to production in Bright Data Scraper Studio, you can start collection runs manually, by API, or on a schedule. You can also configure how results are delivered, which file format is used, what data is included, and when notifications are sent.

This page explains how to initiate Scraper Studio runs and configure delivery preferences.

## Prerequisites

* A scraper saved to production in the [Bright Data Scraper Studio](https://brightdata.com/cp/scrapers)
* An API key if you want to initiate runs or download results by API ([create one](https://brightdata.com/cp/setting))
* Destination credentials if you want to deliver results to webhook, cloud storage, SFTP or email

## How do I save a scraper to production?

While you edit code in the Bright Data Scraper Studio IDE, the system auto-saves your work as a development draft. For a new scraper, click **Finish editing** in the top-right corner when you are ready to make it available outside the IDE. For an existing production scraper, click **Save to production** to publish your changes.

Production scrapers appear under **My Scrapers** with an **Active** or **Ready** status. Unsaved scrapers remain in **Draft** status and cannot be initiated outside the IDE.

<Frame>
  <img alt="My Scrapers dashboard showing saved scrapers" />

  <img alt="My Scrapers dashboard showing saved scrapers" />
</Frame>

## How do I trigger a scraper run?

Bright Data Scraper Studio supports three ways to start a collection run.

<Tabs>
  <Tab title="Initiate by API">
    Use **Initiate by API** to start a collection from your application or automation workflow. Before using the API, create an API key. Go to [Dashboard > Account settings > API key](https://brightdata.com/cp/setting).

    For a full API walkthrough, see **[Getting started with the API](/datasets/scraper-studio/quickstart).**

    <Frame>
      <img alt="Initiate scraper by API" />
    </Frame>

    The API-trigger panel provides:

    1. **Inputs:** provide input values manually or through the API request body
    2. **Trigger behavior:** Run several requests in parallel by assigning them a queue name or queue additional jobs to run after earlier ones finish
    3. **API request preview:** A ready-to-run request example, including the endpoint and request body. Select the **Linux Bash** viewer for `curl`. The API response includes a `collection_id`. Use this ID to fetch results later when delivery is configured as API download.

    <Note>
      When delivery is set to **API download**, you must call the "Receive data" API endpoint to retrieve results. When delivery is configured as **webhook** or **cloud storage**, Bright Data sends the results to the configured destination automatically.
    </Note>
  </Tab>

  <Tab title="Initiate manually">
    Use **Initiate manually** to start a collection from the Bright Data control panel without writing a code.

    ## Open the Initiate manually page

    1. Go to **My scrapers**
    2. Select the scraper you want to run
    3. Open the **Initiate manually** tab

    The page shows the input fields required for that scraper. These fields come from the scraper’s input schema. For example, one scraper may require a `url`, while another may require `keyword` and `location`.

    ## Configure trigger behavior

    Use **Trigger behavior** to control how this run is grouped or queued.

    | Option            | Description                                                 |
    | ----------------- | ----------------------------------------------------------- |
    | Custom queue name | Optional name used to group related jobs in the same queue. |

    Run requests in parallel, or queue jobs so they start after earlier jobs finish. Use a queue name to group related jobs.

    If you do not need custom queue behavior, leave this field empty.

    ## Add inputs manually

    Type the values for this run, such as URLs, keywords, locations, or other required fields. Required fields vary by scraper.

    Each input row represents one item the scraper will process.

    To add another input row, click **Add another input**

    ## **Upload an input file**

    For larger input sets, upload a file instead of entering values one by one.

    Use **Attach a CSV file** to upload multiple inputs at once in CSV, TXT or JSON format (max 1GB). Empty rows are ignored.

    You can click **Download our example** to download a template for the current scraper. Use the example file to confirm:

    * Which columns are required
    * How input field names should be written
    * What format the uploaded file should use

    The uploaded file must match the scraper’s input schema. For example, if the scraper requires `search` and `location`, the file should include matching columns.

    ## **Set a deadline**

    Use **Deadline** to set the maximum amount of time the collection can run.

    If the collection is still running when the deadline is reached, Bright Data stops the collection and delivers the data collected so far.

    Supported values include durations or a future timestamp.

    Examples:

    | Format    | Example                    |
    | --------- | -------------------------- |
    | Hours     | `1h`                       |
    | Minutes   | `25m` or `30min`           |
    | Seconds   | `10s`                      |
    | Timestamp | `2026-06-09T19:14:12.056Z` |

    Use a deadline when you want to limit run time or receive partial results by a specific time.

    ## **Skip delivery**

    Enable **Skip delivery** if you want to run the scraper without sending results to the configured delivery destination.

    If **Skip delivery** is disabled, the run uses the scraper’s configured delivery preferences.

    ## **Start the run**

    After entering inputs or uploading a file:

    1. Review the input values.
    2. Configure optional settings, such as queue name, deadline, or skip delivery.
    3. Click **Start**.

    The collection starts and appears in the scraper’s **Runs** tab.
  </Tab>

  <Tab title="Schedule a scraper">
    Use scheduled runs to collect data automatically on a recurring basis.

    Scheduling is useful when you need fresh data hourly, daily, weekly, or on a custom schedule.

    **Step 1, configure the schedule:**

    1. Pick a start date and time
    2. Choose a frequency: hourly, daily, weekly, or custom
    3. Set a deadline for the scraper to finish
    4. Review your configuration before saving

    <Frame>
      <img alt="Schedule configuration screen" />
    </Frame>

    **Step 2, set inputs:**

    1. Upload a CSV file with a large input set (for example, a list of URLs). Download the CSV template to match the expected format
    2. Enter input values manually in the form

    <Frame>
      <img alt="Enter input values for a scheduled run" />
    </Frame>
  </Tab>
</Tabs>

## What are the rate limits and concurrency limits?

Bright Data Scraper Studio enforces concurrency limits per scraper, based on whether the request is batch or real-time.

| Collection type | Concurrency limit                         |
| --------------- | ----------------------------------------- |
| Batch           | Up to 100 concurrent requests per scraper |
| Real-time       | 50K requests/min per customer             |

When the batch limit is exceeded, Bright Data returns this error: `Maximum limit of 100 jobs per scraper has been exceeded. Please reduce the number of parallel jobs.`

## Batch vs real-time collection

Scraper Studio supports batch and real-time collection. Each method is optimized for a different use case.

|                   | Batch collection                               | Real-time collection                     |
| ----------------- | ---------------------------------------------- | ---------------------------------------- |
| Input size        | Many inputs per job (list of URLs or keywords) | One input per request                    |
| Response timing   | Results are returned after the job completes.  | Response is returned in real time.       |
| Retention         | 16 days                                        | 7 days                                   |
| Concurrency limit | up to 100 concurrent jobs per scraper          | 50K requests/min per customer            |
| Use when          | You are building a dataset and can wait        | You need an answer inside a live request |

Use batch collection for larger jobs and scheduled datasets. Use real-time collection for low-latency workflows that need a response for one input.

## How do I configure delivery?

Open **My Scrapers**, click a scraper row, and choose **Delivery preferences** to set where and how Bright Data Scraper Studio delivers results.

<AccordionGroup>
  <Accordion title="When should I receive the data?">
    * **On job Completion (batch):** Delivers results after the full collection run finishes. Use when you are collecting multiple inputs and can wait until the run completes.
      * **Split delivery to small batches:** Delivers partial result batches as they become available. Enter the number of data lines each batch should contain. Entering `10000` means each delivered file or payload contains up to 10,000 result lines.
    * **Real-time (single request):** Returns data for a single request in real time.
      * **Skip retries:** do not retry on error (speeds up collection at the cost of completeness)
  </Accordion>

  <Accordion title="Which file formats are supported?">
    * JSON
    * NDJSON
    * CSV
    * XLSX
    * Parquet

    **Parquet** is not available for the following delivery options:

    * API download
    * Email
    * Webhook
    * OCI PAR
  </Accordion>

  <Accordion title="Which delivery destinations are supported?">
    * Email
    * API download (pull via REST API)
    * Webhook (push via HTTPS POST)
    * Cloud storage: Amazon S3, Google Cloud Storage, Azure Blob Storage, Alibaba Cloud OSS, Google Cloud PubSub, OCI PAR
    * SFTP / FTP

    <Note>
      Media files cannot be delivered via Email or API download. Use cloud storage, SFTP, or webhook when collecting images, videos, or other binary content.
    </Note>
  </Accordion>

  <Accordion title="How can I control what goes in the batch output?">
    Use **Data preferences** to decide which records are included in delivery.

    * Results and errors in separate files
    * Results and errors in one combined file
    * Only successful results
    * Only errors
  </Accordion>

  <Accordion title="Which notifications can I enable?">
    Use **Notifications** to receive updates about completed runs, low success rates, or delivery problems.

    Notifications can be configured separately for production and development.

    * **Completion notifications** (Email, Webhook, None) - use **When finished, notify me by** to choose whether Scraper Studio sends a notification after a run completes.
    * **Low success rate notifications** - use **Notify me about low success rates** to receive alerts when scraper success rates drop.
    * **Delivery problem notifications** - use **Notify me about problems with delivery** to receive alerts when Scraper Studio cannot deliver results to the configured destination.
  </Accordion>

  <Accordion title="What is Development delivery settings?">
    The **Development** setting controls whether development runs use the same delivery settings as production. Use separate development settings when testing a new destination, webhook, or file format before applying it to production runs.
  </Accordion>
</AccordionGroup>

## Related

<CardGroup>
  <Card title="Scraper Studio specifications" icon="file-lines" href="/datasets/scraper-studio/specifications">
    Infrastructure limits, billing, and data retention
  </Card>

  <Card title="WARC snapshots" icon="file-zipper" href="/datasets/scraper-studio/warc-ide">
    Archive raw HTTP responses alongside collected data
  </Card>
</CardGroup>
