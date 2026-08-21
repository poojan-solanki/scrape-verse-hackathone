# Understanding sync vs. async requests

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/concepts/sync-vs-async](https://docs.brightdata.com/datasets/scrapers/concepts/sync-vs-async)
> **Category**: `datasets-and-scrapers`

---

Choose between synchronous and asynchronous Bright Data Scraper API requests. Sync supports up to 20 URLs per request; async supports up to 1 GB input.

The Bright Data Scraper APIs offer two methods for collecting data. This guide explains the difference and helps you choose the right approach for your use case.

## What are sync and async requests?

**Synchronous (`/scrape`)** sends a request and waits for the scraped data in the same HTTP response. The connection stays open until results are ready.

**Asynchronous (`/trigger`)** sends a request, immediately receives a `snapshot_id`, and collects the results later via polling, webhook, or external storage delivery.

## When to use each approach

**Use synchronous requests when:**

* You need real-time results for a small number of URLs (1-20)
* You are building an interactive application that waits for data
* You want the simplest integration with no background job management

**Use asynchronous requests when:**

* You are scraping more than 20 URLs in a batch
* You are running discovery queries (search by keyword, find posts by company)
* You want results delivered to a webhook or external storage (S3, Snowflake)
* You are building production pipelines that need reliability and retry handling

## How they compare

| Feature                  | Sync `/scrape`                    | Async `/trigger`                          |
| :----------------------- | :-------------------------------- | :---------------------------------------- |
| **Max URLs per request** | 20                                | Unlimited (up to 1 GB input)              |
| **Response**             | Scraped data directly             | `snapshot_id` (data retrieved separately) |
| **Timeout**              | 1 minute (auto-switches to async) | No timeout                                |
| **Discovery support**    | No                                | Yes                                       |
| **Webhook delivery**     | No                                | Yes                                       |
| **External storage**     | No                                | Yes                                       |
| **Concurrency limit**    | 1,500 requests                    | 100 requests                              |
| **Ideal for**            | Quick lookups, real-time apps     | Batch jobs, production pipelines          |

## Synchronous request flow

```text theme={null}
Your app --> POST /scrape --> [Wait 10-30s] --> Scraped data in response
```

The entire operation happens in a single HTTP request. If the scraping takes longer than 1 minute, the API automatically converts it to an async job and returns a `snapshot_id` instead.

<Tip>
  If you receive a `snapshot_id` instead of data from a sync request, your request was auto-converted. Use the async retrieval workflow to download results.
</Tip>

## Asynchronous request flow

```text theme={null}
Your app --> POST /trigger --> snapshot_id (immediate)
                                    |
                     +--------------+--------------+
                     |              |              |
                  Poll API      Webhook      S3/Storage
                     |              |              |
                  GET /snapshot  POST to URL   File in bucket
```

The async flow decouples triggering from retrieval. You have three options for getting results:

1. **Poll the API** - Check status with `GET /progress/{snapshot_id}`, then download with `GET /snapshot/{snapshot_id}`
2. **Webhook** - Bright Data sends results to your URL when the job completes
3. **External storage** - Results are delivered to S3, Snowflake, or other storage

## When to use each mode

**Single-page lookup**
Your app needs data from one URL in real-time (e.g., enriching a lead, checking a product page). Use **sync**. One URL, instant results, simple integration.

**Weekly batch report**
Every Monday, you scrape 500 pages matching search criteria across multiple sources. Use **async** with discovery. Deliver results to S3 for your data pipeline.

**Real-time app with background enrichment**
A user triggers a search, and you display initial results immediately. Use **sync** for the first lookup, then **async** with a webhook to collect additional data in the background.

**Nightly competitor monitoring**
Every night, you scrape hundreds of competitor pages. Use **async** with S3 delivery. No polling needed, data appears in your bucket.

## Common misconceptions

<Accordion title="Async is always faster than sync">
  Not true. For 1-5 URLs, synchronous requests are faster because there is no job scheduling overhead. Async adds a queue step before scraping begins. Use sync for small, real-time lookups.
</Accordion>

<Accordion title="Sync requests fail if they take too long">
  They don't fail. If a sync request exceeds the 1-minute timeout, the Bright Data API automatically converts it to an async job and returns a `snapshot_id`. Your data is still collected. You just need to retrieve it using the async flow.
</Accordion>

## Handling auto-conversion in your code

If a synchronous request exceeds the 1-minute timeout, the API returns a `snapshot_id` instead of data. Handle both cases:

```python Python theme={null}
import requests

response = requests.post(
    "https://api.brightdata.com/datasets/v3/scrape",
    params={"dataset_id": "DATASET_ID", "format": "json"},
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json=[{"url": "https://example.com/target-page"}],
)

data = response.json()

if isinstance(data, list):
    # Sync response: data is ready
    print(f"Got {len(data)} results")
elif isinstance(data, dict) and "snapshot_id" in data:
    # Auto-converted to async: poll for results
    print(f"Job running. Snapshot ID: {data['snapshot_id']}")
```

## Common questions

<Accordion title="Can I mix sync and async in the same application?">
  Yes. Many applications use sync for real-time user-facing lookups and async for batch background jobs. Use the method that fits each use case.
</Accordion>

<Accordion title="What happens if my webhook is down when async results are ready?">
  Bright Data retries webhook delivery if your endpoint returns a non-200 status or times out. If you need guaranteed delivery, use S3 or another external storage option.
</Accordion>

<Accordion title="Is there a cost difference between sync and async?">
  No. Pricing is per successful record regardless of the request method. The choice between sync and async is about volume, latency, and delivery preferences, not cost.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Scraper APIs overview" icon="grid-2" href="/datasets/scrapers">
    Browse all available Bright Data Scraper APIs.
  </Card>

  <Card title="Delivery options" icon="truck" href="/datasets/scrapers/scrapers-library/delivery-options">
    Webhook, S3, Snowflake, Azure, and more.
  </Card>
</CardGroup>
