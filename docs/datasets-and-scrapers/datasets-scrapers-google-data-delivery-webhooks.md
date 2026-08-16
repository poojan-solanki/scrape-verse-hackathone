# How to receive Google data via webhooks

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/google/data-delivery/webhooks](https://docs.brightdata.com/datasets/scrapers/google/data-delivery/webhooks)
> **Category**: `datasets-and-scrapers`

---

Configure the Bright Data Google Scraper API to push scraped Maps, Trends and review data to your HTTPS webhook across multiple endpoints (4xx errors retried).

This guide shows you how to set up webhook delivery so your server receives scraped Google data automatically when a collection job finishes.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Familiarity with the [async request workflow](/datasets/scrapers/google/async-requests)
* A publicly accessible HTTP endpoint (or a testing tool like [webhook.site](https://webhook.site))

## How webhooks work

When you trigger an async collection with an `endpoint` URL, Bright Data sends a `POST` request to that URL with the scraped data once the job completes. No polling required.

```text theme={null}
Your app --> POST /trigger (with webhook URL) --> Bright Data scrapes --> POST to your webhook
```

## Step 1: Set up a test webhook

For testing, use [webhook.site](https://webhook.site) to get a temporary public URL:

1. Open [webhook.site](https://webhook.site) in your browser
2. Copy the unique URL displayed (e.g., `https://webhook.site/abc-123-def`)
3. Keep the page open to monitor incoming requests

## Step 2: Trigger a collection with the webhook URL

Add the `endpoint` query parameter to your async `/trigger` request. This example uses Google Maps:

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&endpoint=https://webhook.site/abc-123-def&uncompressed_webhook=true" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[
      {"url": "https://www.google.com/maps/place/Empire+State+Building"},
      {"url": "https://www.google.com/maps/place/Central+Park"}
    ]'
  ```

  ```python Python theme={null}
  import requests

  WEBHOOK_URL = "https://webhook.site/abc-123-def"

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/trigger",
      params={
          "dataset_id": "gd_m8ebnr0q2qlklc02fz",
          "format": "json",
          "endpoint": WEBHOOK_URL,
          "uncompressed_webhook": "true",
      },
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[
          {"url": "https://www.google.com/maps/place/Empire+State+Building"},
          {"url": "https://www.google.com/maps/place/Central+Park"},
      ],
  )

  print("Snapshot ID:", response.json()["snapshot_id"])
  ```

  ```javascript Node.js theme={null}
  const WEBHOOK_URL = "https://webhook.site/abc-123-def";

  const response = await fetch(
    `https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&endpoint=${encodeURIComponent(WEBHOOK_URL)}&uncompressed_webhook=true`,
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.google.com/maps/place/Empire+State+Building" },
        { url: "https://www.google.com/maps/place/Central+Park" },
      ]),
    }
  );

  const data = await response.json();
  console.log("Snapshot ID:", data.snapshot_id);
  ```
</CodeGroup>

Key parameters:

| Parameter              | Description                                                  |
| :--------------------- | :----------------------------------------------------------- |
| `endpoint`             | Your HTTP endpoint URL that receives the `POST` payload      |
| `uncompressed_webhook` | Set to `true` to receive uncompressed JSON (default is gzip) |
| `format`               | Output format: `json`, `ndjson` or `csv`                     |

## Step 3: Verify delivery

Once the collection completes (typically 30 to 60 seconds for a few records), check your webhook.site page. You should see a `POST` request with the scraped data.

The payload is the same JSON array you would receive from a direct API download:

```json theme={null}
[
  {
    "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
    "name": "Empire State Building",
    "address": "20 W 34th St., New York, NY 10001",
    "rating": 4.7,
    "reviews_count": 98500
  },
  {
    "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
    "name": "Central Park",
    "address": "New York, NY",
    "rating": 4.8,
    "reviews_count": 325000
  }
]
```

## Production webhook setup

For production, point the `endpoint` URL to your own server endpoint.

### How to handle webhooks in Express.js

```javascript server.js theme={null}
const express = require("express");
const app = express();

app.use(express.json({ limit: "100mb" }));

app.post("/webhook/google", (req, res) => {
  const records = req.body;
  console.log(`Received ${records.length} records`);

  for (const record of records) {
    console.log(`- ${record.name || record.title} (${record.rating || "n/a"})`);
  }

  res.status(200).json({ received: true });
});

app.listen(3000, () => console.log("Webhook server running on port 3000"));
```

### How to handle webhooks in Flask

```python server.py theme={null}
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/webhook/google", methods=["POST"])
def handle_webhook():
    records = request.get_json()
    print(f"Received {len(records)} records")

    for record in records:
        name = record.get("name") or record.get("title")
        print(f"- {name}")

    return jsonify({"received": True}), 200

if __name__ == "__main__":
    app.run(port=3000)
```

<Warning>
  Return a `200` status code within 30 seconds to acknowledge receipt. If your endpoint fails or times out, Bright Data retries delivery.
</Warning>

## Webhook with authorization

If your endpoint requires authentication, add the `webhook_header_Authorization` parameter:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&endpoint=https://your-server.com/webhook&webhook_header_Authorization=Bearer+YOUR_SECRET_TOKEN" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.google.com/maps/place/Empire+State+Building"}]'
```

## Allowlist webhook IPs

If your server uses an IP allowlist, add the following Bright Data webhook source IPs:

```text theme={null}
54.175.27.69
34.225.9.175
100.28.38.247
100.29.18.195
52.72.185.255
35.174.112.248
54.165.183.124
3.91.140.7
52.202.75.37
98.82.225.117
100.27.150.189
18.214.10.85
35.169.71.210
44.194.183.74
```

## Troubleshooting

<Accordion title="Webhook not receiving data?">
  * Verify the URL is publicly accessible (not `localhost`)
  * Check that your endpoint returns a `200` status code within 30 seconds
  * Verify the webhook IPs above are allowlisted if you have firewall rules
</Accordion>

<Accordion title="Receiving compressed data?">
  If you omit `uncompressed_webhook=true`, data arrives gzip-compressed. Add `uncompressed_webhook=true` to your trigger URL, or decompress the payload on your server.
</Accordion>

<Accordion title="Payload too large for your server?">
  Large collections can produce payloads up to 1 GB. Set `express.json({ limit: "100mb" })` in Express.js or equivalent in your framework. If you need to handle very large datasets, use [S3 delivery](/datasets/scrapers/google/data-delivery/amazon-s3) instead.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Deliver to Amazon S3" icon="bucket" href="/datasets/scrapers/google/data-delivery/amazon-s3">
    Store results directly in your S3 bucket.
  </Card>

  <Card title="All delivery options" icon="truck" href="/datasets/scrapers/scrapers-library/delivery-options">
    Snowflake, Azure, GCS and more.
  </Card>
</CardGroup>
