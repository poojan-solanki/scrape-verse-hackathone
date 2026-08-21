# How to scrape Reddit data in bulk

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/reddit/async-requests](https://docs.brightdata.com/datasets/scrapers/reddit/async-requests)
> **Category**: `datasets-and-scrapers`

---

Trigger large-scale Reddit scraping jobs, monitor progress and retrieve results using the Bright Data async /trigger endpoint. Supports batches of 20 URLs.

This guide shows you how to scrape Reddit data at scale using the asynchronous `/trigger` endpoint. Use this when you have more than 20 URLs, need discovery by keyword or subreddit, or want delivery to a webhook or S3.

<Tip>
  Not sure whether to use sync or async? Read [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).
</Tip>

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Familiarity with the [synchronous request flow](/datasets/scrapers/reddit/send-first-request)

## Step 1: Trigger the collection

Send a `POST` request to the `/trigger` endpoint with your input URLs. This example collects five Reddit posts in a single batch:

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lvz8ah06191smkebj4&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[
      {"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/"},
      {"url": "https://www.reddit.com/r/python/comments/1bsdf34/"},
      {"url": "https://www.reddit.com/r/programming/comments/1csdf56/"},
      {"url": "https://www.reddit.com/r/datascience/comments/1dsdf78/"},
      {"url": "https://www.reddit.com/r/machinelearning/comments/1esdf90/"}
    ]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/trigger",
      params={
          "dataset_id": "gd_lvz8ah06191smkebj4",
          "format": "json",
      },
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[
          {"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/"},
          {"url": "https://www.reddit.com/r/python/comments/1bsdf34/"},
          {"url": "https://www.reddit.com/r/programming/comments/1csdf56/"},
          {"url": "https://www.reddit.com/r/datascience/comments/1dsdf78/"},
          {"url": "https://www.reddit.com/r/machinelearning/comments/1esdf90/"},
      ],
  )

  snapshot = response.json()
  print("Snapshot ID:", snapshot["snapshot_id"])
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lvz8ah06191smkebj4&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.reddit.com/r/learnpython/comments/1asdf12/" },
        { url: "https://www.reddit.com/r/python/comments/1bsdf34/" },
        { url: "https://www.reddit.com/r/programming/comments/1csdf56/" },
        { url: "https://www.reddit.com/r/datascience/comments/1dsdf78/" },
        { url: "https://www.reddit.com/r/machinelearning/comments/1esdf90/" },
      ]),
    }
  );

  const snapshot = await response.json();
  console.log("Snapshot ID:", snapshot.snapshot_id);
  ```
</CodeGroup>

You should see a `200` response with a `snapshot_id`:

```json theme={null}
{
  "snapshot_id": "s_m1a2b3c4d5e6f7g8h"
}
```

Save this ID. You need it to check progress and download results.

## Discovery with async

The async endpoint is the best fit for discovery jobs, because Reddit discovery can return many results. Trigger a subreddit or keyword discovery by adding the relevant query parameters:

**Discover by subreddit URL:**

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=subreddit_url" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.reddit.com/r/learnpython/", "sort_by": "hot"}]'
```

**Discover by keyword:**

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=keyword" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "machine learning", "date": "Past week", "num_of_posts": 100}]'
```

## Step 2: Monitor progress

Poll the snapshot status until it shows `ready`. This takes 30 seconds to several minutes depending on the number of URLs and whether discovery is involved.

<CodeGroup>
  ```bash cURL theme={null}
  curl "https://api.brightdata.com/datasets/v3/progress/s_m1a2b3c4d5e6f7g8h" \
    -H "Authorization: Bearer YOUR_API_KEY"
  ```

  ```python Python theme={null}
  import time

  snapshot_id = "s_m1a2b3c4d5e6f7g8h"

  while True:
      status_response = requests.get(
          f"https://api.brightdata.com/datasets/v3/progress/{snapshot_id}",
          headers={"Authorization": "Bearer YOUR_API_KEY"},
      )
      status = status_response.json().get("status")
      print(f"Status: {status}")

      if status == "ready":
          break
      time.sleep(10)
  ```

  ```javascript Node.js theme={null}
  const snapshotId = "s_m1a2b3c4d5e6f7g8h";

  let status = "collecting";
  while (status !== "ready") {
    const statusResponse = await fetch(
      `https://api.brightdata.com/datasets/v3/progress/${snapshotId}`,
      { headers: { "Authorization": "Bearer YOUR_API_KEY" } }
    );
    const statusData = await statusResponse.json();
    status = statusData.status;
    console.log("Status:", status);

    if (status !== "ready") {
      await new Promise((r) => setTimeout(r, 10000));
    }
  }
  ```
</CodeGroup>

Status values:

| Status       | Meaning                             |
| :----------- | :---------------------------------- |
| `collecting` | Scraping is in progress             |
| `digesting`  | Data is being processed             |
| `ready`      | Results are available for download  |
| `failed`     | The collection encountered an error |

## Step 3: Download results

Once the status is `ready`, download the scraped data:

<CodeGroup>
  ```bash cURL theme={null}
  curl "https://api.brightdata.com/datasets/v3/snapshot/s_m1a2b3c4d5e6f7g8h?format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -o results.json
  ```

  ```python Python theme={null}
  results_response = requests.get(
      f"https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}",
      params={"format": "json"},
      headers={"Authorization": "Bearer YOUR_API_KEY"},
  )

  results = results_response.json()
  print(f"Collected {len(results)} posts")
  ```

  ```javascript Node.js theme={null}
  const resultsResponse = await fetch(
    `https://api.brightdata.com/datasets/v3/snapshot/${snapshotId}?format=json`,
    { headers: { "Authorization": "Bearer YOUR_API_KEY" } }
  );

  const results = await resultsResponse.json();
  console.log(`Collected ${results.length} posts`);
  ```
</CodeGroup>

You've successfully triggered, monitored and downloaded a batch Reddit scraping job.

## Skip polling with webhooks

If you don't want to poll for status, add an `endpoint` parameter to receive results automatically:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lvz8ah06191smkebj4&format=json&endpoint=https://your-server.com/webhook" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/"}]'
```

See [Webhook delivery options](/datasets/scrapers/scrapers-library/delivery-options) for the full setup.

## Limits and constraints

| Constraint                           | Value      |
| :----------------------------------- | :--------- |
| Max input file size                  | 1 GB       |
| Max concurrent batch requests        | 100        |
| Max concurrent single-input requests | 1,500      |
| Webhook delivery size                | Up to 1 GB |
| API download size                    | Up to 5 GB |

## Troubleshooting

<Accordion title="Getting a 429 Too Many Requests error?">
  You've exceeded the concurrent request limit. Reduce the number of parallel requests or combine inputs into fewer, larger batches. Each batch can include up to 1 GB of input data.
</Accordion>

<Accordion title="Snapshot status shows 'failed'?">
  Check that all input URLs are valid, publicly accessible Reddit URLs. Review the error details in the snapshot response or in the [Logs tab](https://brightdata.com/cp/scrapers) of your Bright Data dashboard.
</Accordion>

<Accordion title="Results are incomplete or missing some URLs?">
  Some URLs may fail individually while the overall job succeeds. Private subreddits, deleted posts and removed comments cannot be scraped. Check the snapshot response for any `errors` field and retry failed URLs in a separate request.
</Accordion>

<Accordion title="Discovery returned zero results?">
  For keyword discovery, make sure the `date` value matches one of Reddit's accepted ranges (e.g. `Past hour`, `Past day`, `Past week`, `Past month`, `Past year`, `All time`). For subreddit discovery, confirm the subreddit URL is valid and not private.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Delivery options" icon="cloud" href="/datasets/scrapers/scrapers-library/delivery-options">
    Webhooks, S3, Snowflake, Azure and GCS delivery.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url">
    Full endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
