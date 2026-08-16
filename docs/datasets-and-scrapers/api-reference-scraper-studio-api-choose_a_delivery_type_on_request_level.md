# Choose a delivery type on request level

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/Choose_a_delivery_type_on_request_level](https://docs.brightdata.com/api-reference/scraper-studio-api/Choose_a_delivery_type_on_request_level)
> **Category**: `datasets-and-scrapers`

---

Pick a Bright Data Scraper Studio API collection mode: batch, async real-time or sync real-time, and match delivery preferences to each endpoint.

Instead of creating duplicate scrapers for each delivery type, you can choose a delivery type per job using API.

<Frame>
  <img alt="hero-image.png" />
</Frame>

Scraper Studio supports three API collection modes:

* **Batch collection**: runs one or more inputs in the background and returns a collection\_id.
* **Asynchronous real-time collection**: runs one input in the background and returns a response\_id.
* **Synchronous real-time collection**: runs one input and returns the collected data directly in the same API response, if the request completes within the timeout.

The scraper’s **Delivery preferences** in the control panel affect which API modes can be used. A scraper configured for Batch delivery can still be triggered with the real-time API endpoints. However, a scraper configured for Real-time delivery cannot be triggered with the batch endpoint.

<Frame>
  <img alt="Delivery preferences tab in the Scraper Studio control panel, showing the &#x22;Choose when to get the data&#x22; options: &#x22;On a job completion (batch)&#x22; selected, &#x22;Realtime (single request)&#x22; and &#x22;Split delivery to small batches&#x22;" />
</Frame>

## **Delivery preference compatibility**

Before triggering a scraper by API, check its Delivery preferences in the control panel.

| Delivery preference in control panel | Batch endpoint | Real-time endpoints |
| :----------------------------------- | :------------- | :------------------ |
| Batch / On job completion            | Supported      | Supported           |
| Real-time                            | Not supported  | Supported           |

If you call the batch endpoint for a scraper configured as real-time, the API returns an error:

```json theme={null}
"error": "Cannot trigger a batch job with a real-time scraper. Use /trigger_immediate endpoint instead"
```

## **Choose a collection mode**

| Mode            | Endpoint                      | Input shape                 | Response                                     | Use when                                                                |
| :-------------- | :---------------------------- | :-------------------------- | :------------------------------------------- | :---------------------------------------------------------------------- |
| Batch           | `POST /dca/trigger`           | JSON array of input objects | collection\_id                               | You need to process one or more inputs in a background job.             |
| Async real-time | `POST /dca/trigger_immediate` | Single JSON input object    | response\_id                                 | You need to run one input in the background and retrieve results later. |
| Sync real-time  | `POST /dca/crawl`             | Single JSON input object    | Collected data, or 202 if timeout is reached | You need the result in the same API request.                            |

## **Batch collection**

Use batch collection when you want to run one or more inputs in the background.

Batch collection is best for:

* Multiple URLs, keywords or input rows
* Large jobs
* Scheduled or recurring data collection
* Jobs where results can be retrieved later

Batch collection is available only when the scraper is not configured as Real-time in Delivery preferences.

See [Trigger batch collection](/api-reference/scraper-studio-api/Trigger_a_scraper_for_batch_collection_method) for request parameters and examples.

## **Asynchronous real-time collection**

Use asynchronous real-time collection when you want to run a single input in the background and retrieve the result later.

Async real-time is best for:

* One input per request
* Low-latency workflows where the client should not keep the HTTP request open
* Applications that prefer to trigger now and retrieve results later

A scraper configured for Batch delivery in the control panel can still be triggered with the async real-time endpoint.

See [Trigger async real-time collection](/api-reference/scraper-studio-api/initiate-a-realtime-job/async-realtime-job) for request parameters and examples.

## **Synchronous real-time collection**

Use synchronous real-time collection when you want the API request to wait for the scraper result and return the collected data directly.

Sync real-time is best for:

* One input per request
* Applications that need an immediate response
* Scrapers that usually complete within the configured timeout

A scraper configured for Batch delivery in the control panel can still be triggered with the sync real-time endpoint.

Synchronous real-time requests use the timeout query parameter. The timeout must be between 25s and 50s.

If the scraper finishes within the timeout, the API returns 200 OK with the collected data. If the scraper is still running when the timeout is reached, the API may return 202 Accepted with a response\_id. Use this response\_id with the real-time data endpoint to retrieve the result asynchronously.

See [Trigger sync real-time collection](/api-reference/scraper-studio-api/initiate-a-realtime-job/sync-realtime-job) for request parameters and examples.

## **Delivery behavior**

Collection mode controls how the scraper runs. Delivery preferences control default delivery behavior configured in the control panel.

Depending on your scraper configuration, results can be retrieved by API or delivered to a configured destination, such as:

* API download
* Webhook
* Amazon S3
* Google Cloud Storage
* Azure Blob Storage
* SFTP / FTP
* Email

To override the configured destination for a single batch request, pass the `deliver` query parameter on `POST /dca/trigger`, and use the `notify` parameter to send a notification when the job or delivery completes. See [request-level delivery and notifications](/api-reference/scraper-studio-api/Trigger_a_scraper_for_batch_collection_method#override-delivery-settings-for-one-request).

**Important behavior:**

* A scraper configured for Batch delivery can be triggered by either batch or real-time API endpoints.
* A scraper configured for Real-time delivery can be triggered only by real-time API endpoints.
* Batch endpoint calls return a collection\_id.
* Async real-time endpoint calls return a response\_id.
* Sync real-time endpoint calls return collected data directly, unless the timeout is reached.

<Note>
  Batch responses begin with `j_****` and real-time responses begin with `d****`
</Note>
