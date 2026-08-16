# Instagram Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/instagram/introduction](https://docs.brightdata.com/datasets/scrapers/instagram/introduction)
> **Category**: `datasets-and-scrapers`

---

Extract structured data from Instagram profiles, posts, reels and comments with the Bright Data [Instagram Scraper API](https://brightdata.com/products/web-scraper/instagram). Up to 20 URLs per request.

Send an Instagram URL, get structured JSON back. The Bright Data Instagram Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/products/web-scraper/amazon/?hs_signup=1\&utm_source=docs) and get **5,000 free credits every month**, no credit card required. That's up to **5,000 Instagram records** to start scraping. See the [free tier](/general/account/billing-and-pricing/free-tier).
</Tip>

## How it works

You send one or more Instagram URLs to the Bright Data Instagram Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (profiles, posts, reels, or comments) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.instagram.com/instagram"}]'
```

```json theme={null}
{
  "user_name": "instagram",
  "full_name": "Instagram",
  "biography": "Discover what's next. ✨",
  "followers": 676000000,
  "following": 500,
  "posts_count": 7800,
  "is_verified": true,
  "profile_pic_url": "https://..."
}
```

## Supported data types

<CardGroup>
  <Card title="Profiles" icon="user" href="/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url">
    Follower counts, bios, verification status, profile pictures. Discover profiles by username.
  </Card>

  <Card title="Posts" icon="image" href="/api-reference/scrapers/social-media-apis/instagram-posts-collect-by-url">
    Captions, likes, comments, hashtags, photos, and videos. Discover posts by profile URL.
  </Card>

  <Card title="Reels" icon="film" href="/api-reference/scrapers/social-media-apis/instagram-reels-collect-by-url">
    Video URLs, view counts, play counts, thumbnails. Discover reels or collect all reels from a profile.
  </Card>

  <Card title="Comments" icon="comments" href="/api-reference/scrapers/social-media-apis/instagram-comments-collect-by-url">
    Comment text, likes, replies, commenter details for any post or reel.
  </Card>
</CardGroup>

## Request methods

The Bright Data Instagram Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                     | Best for                                   |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/instagram/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/instagram/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                       |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                            |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                           |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                        |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                                |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/instagram/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/instagram/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                        |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: profiles typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific Instagram page you provide (e.g., a profile URL). **Discovery** finds Instagram content matching search criteria (e.g., all posts from a profile URL) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain your own parsing logic and update it whenever Instagram changes its page structure. The Instagram Scraper API handles the entire stack: proxy rotation, anti-bot bypassing and parsing. You simply send an Instagram URL and get clean, structured JSON back with no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/instagram/quickstart">
    Scrape your first Instagram profile in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/instagram/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
