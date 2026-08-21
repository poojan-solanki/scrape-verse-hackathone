# X (Twitter) Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/twitter/introduction](https://docs.brightdata.com/datasets/scrapers/twitter/introduction)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data [X (Twitter) Scraper API](https://brightdata.com/products/web-scraper/twitter) to extract structured data from profiles and posts. Handles up to 20 URLs per request.

Send an X.com URL, get structured JSON back. The Bright Data X Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more X (formerly Twitter) URLs to the Bright Data X Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (profiles or posts) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lwxmeb2u1cniijd7t4&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://x.com/elonmusk"}]'
```

```json theme={null}
{
  "user_name": "elonmusk",
  "name": "Elon Musk",
  "description": "Read @WallStreetSilv",
  "followers": 214000000,
  "following": 870,
  "number_of_tweets": 52000,
  "is_verified": true,
  "profile_image_link": "https://..."
}
```

## Supported data types

<CardGroup>
  <Card title="Profiles" icon="user" href="/api-reference/scrapers/social-media-apis/twitter-profiles-collect-by-url">
    Follower counts, bios, verification status, profile images. Discover profiles by username.
  </Card>

  <Card title="Posts" icon="message" href="/api-reference/scrapers/social-media-apis/twitter-posts-collect-by-url">
    Post text, likes, reposts, replies, media, and hashtags. Discover posts by profile URL.
  </Card>
</CardGroup>

## Request methods

The Bright Data X Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                   | Best for                                   |
| :--------------- | :--------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/twitter/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/twitter/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                   |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                        |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                       |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                    |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                            |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/twitter/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/twitter/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                    |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: profiles typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific X page you provide (e.g., a profile URL). **Discovery** finds X content matching search criteria (e.g., all posts from a profile URL) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain
  your own parsing logic and update it whenever X changes its page structure.
  The X Scraper API handles the entire stack: proxy rotation, anti-bot bypassing
  and parsing. You simply send an X.com URL and get clean, structured JSON back with
  no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/twitter/quickstart">
    Scrape your first X profile in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/twitter/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/twitter-profiles-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
