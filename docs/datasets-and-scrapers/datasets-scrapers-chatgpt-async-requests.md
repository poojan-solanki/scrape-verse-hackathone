# Async ChatGPT search collection

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/chatgpt/async-requests](https://docs.brightdata.com/datasets/scrapers/chatgpt/async-requests)
> **Category**: `datasets-and-scrapers`

---

Trigger large-scale ChatGPT search jobs, monitor progress, and retrieve results using the Bright Data async /trigger endpoint. Supports batches of 20 prompts.

This guide shows you how to search ChatGPT at scale using the asynchronous `/trigger` endpoint. Use this when you have more than 20 prompts or want delivery to a webhook or S3.

<Tip>
  Not sure whether to use sync or async? Read [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).
</Tip>

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Familiarity with the [synchronous request flow](/datasets/scrapers/chatgpt/send-first-request)

## Step 1: Trigger the collection

Send a `POST` request to the `/trigger` endpoint with your input prompts:

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[
      {"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"},
      {"url": "https://chatgpt.com/", "prompt": "Best restaurants in Paris"},
      {"url": "https://chatgpt.com/", "prompt": "Things to do in Tokyo"},
      {"url": "https://chatgpt.com/", "prompt": "Budget travel tips for Europe"},
      {"url": "https://chatgpt.com/", "prompt": "Best beaches in Southeast Asia"}
    ]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/trigger",
      params={
          "dataset_id": "gd_m7aof0k82r803d5bjm",
          "format": "json",
      },
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[
          {"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"},
          {"url": "https://chatgpt.com/", "prompt": "Best restaurants in Paris"},
          {"url": "https://chatgpt.com/", "prompt": "Things to do in Tokyo"},
          {"url": "https://chatgpt.com/", "prompt": "Budget travel tips for Europe"},
          {"url": "https://chatgpt.com/", "prompt": "Best beaches in Southeast Asia"},
      ],
  )

  snapshot = response.json()
  print("Snapshot ID:", snapshot["snapshot_id"])
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m7aof0k82r803d5bjm&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://chatgpt.com/", prompt: "Top hotels in New York" },
        { url: "https://chatgpt.com/", prompt: "Best restaurants in Paris" },
        { url: "https://chatgpt.com/", prompt: "Things to do in Tokyo" },
        { url: "https://chatgpt.com/", prompt: "Budget travel tips for Europe" },
        { url: "https://chatgpt.com/", prompt: "Best beaches in Southeast Asia" },
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

## Step 2: Monitor progress

Poll the snapshot status until it shows `ready`. This takes 30 seconds to several minutes depending on the number of prompts.

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
  print(f"Collected {len(results)} search results")
  ```

  ```javascript Node.js theme={null}
  const resultsResponse = await fetch(
    `https://api.brightdata.com/datasets/v3/snapshot/${snapshotId}?format=json`,
    { headers: { "Authorization": "Bearer YOUR_API_KEY" } }
  );

  const results = await resultsResponse.json();
  console.log(`Collected ${results.length} search results`);
  ```
</CodeGroup>

You've successfully triggered, monitored, and downloaded a batch ChatGPT search job.

## Skip polling with webhooks

If you don't want to poll for status, add an `endpoint` parameter to receive results automatically:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m7aof0k82r803d5bjm&format=json&endpoint=https://your-server.com/webhook" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"}]'
```

See [How to receive ChatGPT search results via webhooks](/datasets/scrapers/chatgpt/data-delivery/webhooks) for the full setup.

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
  Check that all input objects include a valid `url` (must be `https://chatgpt.com/`) and a non-empty `prompt`. Review the error details in the snapshot response or in the [Logs tab](https://brightdata.com/cp/scrapers) of your Bright Data dashboard.
</Accordion>

<Accordion title="Results are incomplete or missing some prompts?">
  Some prompts may fail individually while the overall job succeeds. Check the snapshot response for any `errors` field. Retry failed prompts in a separate request.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/chatgpt/data-delivery/webhooks">
    Receive results without polling.
  </Card>

  <Card title="Deliver to S3" icon="bucket" href="/datasets/scrapers/chatgpt/data-delivery/amazon-s3">
    Send results directly to your S3 bucket.
  </Card>
</CardGroup>
