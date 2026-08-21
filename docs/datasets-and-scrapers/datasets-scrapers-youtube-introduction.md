# YouTube Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/youtube/introduction](https://docs.brightdata.com/datasets/scrapers/youtube/introduction)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data [YouTube Scraper API](https://brightdata.com/products/web-scraper/youtube) to extract structured data from channels, videos and comments. Handles up to 20 URLs per request.

Send a YouTube URL, get structured JSON back. The Bright Data YouTube Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more YouTube URLs to the Bright Data YouTube Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (videos, channels, or comments) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk538t2k2p1k3oos71&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.youtube.com/@MrBeast"}]'
```

```json theme={null}
{
  "channel_name": "MrBeast",
  "channel_url": "https://www.youtube.com/@MrBeast",
  "subscribers": 358000000,
  "total_videos": 850,
  "total_views": 50000000000,
  "description": "...",
  "is_verified": true
}
```

## Supported data types

<CardGroup>
  <Card title="Videos" icon="video" href="/api-reference/scrapers/social-media-apis/youtube-videos-collect-by-url">
    Titles, views, likes, descriptions, durations, and thumbnails. Discover videos by keyword, hashtag, or explore.
  </Card>

  <Card title="Channels" icon="user" href="/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url">
    Subscriber counts, video counts, descriptions, and verification status. Discover channels by keyword.
  </Card>

  <Card title="Comments" icon="comments" href="/api-reference/scrapers/social-media-apis/youtube-comments-collect-by-url">
    Comment text, likes, replies, commenter details for any video.
  </Card>
</CardGroup>

## Request methods

The Bright Data YouTube Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                   | Best for                                   |
| :--------------- | :--------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/youtube/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/youtube/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                   |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                        |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                       |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                    |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                            |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/youtube/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/youtube/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                    |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: channels typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific YouTube page you provide (e.g., a channel URL). **Discovery** finds YouTube content matching search criteria (e.g., videos by keyword or hashtag) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain
  your own parsing logic and update it whenever YouTube changes its page structure.
  The YouTube Scraper API handles the entire stack: proxy rotation, anti-bot bypassing
  and parsing. You simply send a YouTube URL and get clean, structured JSON back with
  no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/youtube/quickstart">
    Scrape your first YouTube channel in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/youtube/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
