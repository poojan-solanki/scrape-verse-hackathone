# TikTok Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/tiktok/introduction](https://docs.brightdata.com/datasets/scrapers/tiktok/introduction)
> **Category**: `datasets-and-scrapers`

---

Extract structured data from TikTok profiles, posts, comments and shop products with the Bright Data [TikTok Scraper API](https://brightdata.com/products/web-scraper/tiktok). Up to 20 URLs per request.

Send a TikTok URL, get structured JSON back. The Bright Data TikTok Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/products/web-scraper/amazon/?hs_signup=1\&utm_source=docs) and get **5,000 free credits every month**, no credit card required. That's up to **5,000 TikTok records** to start scraping. See the [free tier](/general/account/billing-and-pricing/free-tier).
</Tip>

## How it works

You send one or more TikTok URLs to the Bright Data TikTok Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (profiles, posts, shop, or comments) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1villgoiiidt09ci&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@tiktok"}]'
```

```json theme={null}
{
  "nickname": "TikTok",
  "account_id": "tiktok",
  "biography": "Make your day.",
  "followers": 85600000,
  "following": 580,
  "likes": 520000000,
  "videos_count": 1250,
  "is_verified": true,
  "url": "https://www.tiktok.com/@tiktok",
  "profile_pic_url": "https://..."
}
```

## Supported data types

<CardGroup>
  <Card title="Profiles" icon="user" href="/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url">
    Follower counts, bios, verification status, likes, and video counts. Discover profiles by search URL.
  </Card>

  <Card title="Posts" icon="video" href="/api-reference/scrapers/social-media-apis/tiktok-posts-collect-by-url">
    Captions, likes, comments, shares, views, hashtags, and video URLs. Discover posts by keyword or profile URL.
  </Card>

  <Card title="TikTok Shop" icon="store" href="/api-reference/scrapers/social-media-apis/tiktok-shop-collect-by-url">
    Product names, prices, ratings, reviews, and seller details. Discover products by category, keyword, or shop.
  </Card>

  <Card title="Comments" icon="comments" href="/api-reference/scrapers/social-media-apis/tiktok-comments-collect-by-url">
    Comment text, likes, replies, and commenter details for any post.
  </Card>

  <Card title="Posts by Profile Fast API" icon="bolt" href="/api-reference/scrapers/social-media-apis/tiktok-posts-by-profile-fast-api-collect-by-url">
    Quickly collect all posts from a specific TikTok profile URL.
  </Card>
</CardGroup>

## Request methods

The Bright Data TikTok Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                  | Best for                                   |
| :--------------- | :-------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/tiktok/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/tiktok/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                 |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                      |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                     |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                  |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                          |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/tiktok/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/tiktok/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                  |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: profiles typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific TikTok page you provide (e.g., a profile URL). **Discovery** finds TikTok content matching search criteria (e.g., all posts containing a keyword) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain your own parsing logic and update it whenever TikTok changes its page structure. The TikTok Scraper API handles the entire stack: proxy rotation, anti-bot bypassing and parsing. You simply send a TikTok URL and get clean, structured JSON back with no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/tiktok/quickstart">
    Scrape your first TikTok profile in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/tiktok/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
