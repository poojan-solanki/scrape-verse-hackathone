# Facebook Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/facebook/introduction](https://docs.brightdata.com/datasets/scrapers/facebook/introduction)
> **Category**: `datasets-and-scrapers`

---

Extract data from Facebook profiles, pages, posts, marketplace and events across 9 endpoints with the Bright Data [Facebook Scraper API](https://brightdata.com/products/web-scraper/facebook).

Send a Facebook URL, get structured JSON back. The Bright Data Facebook Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more Facebook URLs to the Bright Data Facebook Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (profiles, posts, marketplace, events, and more) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mf0urb782734ik94dz&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/zuck"}]'
```

```json theme={null}
{
  "name": "Mark Zuckerberg",
  "url": "https://www.facebook.com/zuck",
  "followers": 120000000,
  "bio": "Building the future...",
  "profile_type": "public_figure",
  "is_verified": true
}
```

## Supported data types

<CardGroup>
  <Card title="Profiles" icon="user" href="/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url">
    Names, follower counts, bios, verification status, and profile details.
  </Card>

  <Card title="Page Posts" icon="newspaper" href="/api-reference/scrapers/social-media-apis/facebook-pages-posts-collect-by-url">
    Posts from Facebook pages by profile URL, including text, reactions, and media.
  </Card>

  <Card title="Posts" icon="image" href="/api-reference/scrapers/social-media-apis/facebook-posts-collect-by-url">
    Individual post data by post URL or posts by group URL.
  </Card>

  <Card title="Marketplace" icon="shop" href="/api-reference/scrapers/social-media-apis/facebook-marketplace-collect-by-url">
    Product listings, prices, seller details, and item descriptions.
  </Card>

  <Card title="Events" icon="calendar" href="/api-reference/scrapers/social-media-apis/facebook-events-collect-by-url">
    Event details including dates, locations, descriptions, and attendance.
  </Card>

  <Card title="Comments" icon="comments" href="/api-reference/scrapers/social-media-apis/facebook-comments-collect-by-url">
    Comment text, reactions, replies, and commenter details for any post.
  </Card>

  <Card title="Reels" icon="film" href="/api-reference/scrapers/social-media-apis/facebook-reels-collect-by-url">
    Video URLs, view counts, and engagement data from Facebook reels by profile URL.
  </Card>

  <Card title="Company Reviews" icon="star" href="/api-reference/scrapers/social-media-apis/facebook-company-reviews-collect-by-url">
    Business reviews, ratings, and reviewer details from Facebook pages.
  </Card>
</CardGroup>

## Request methods

The Bright Data Facebook Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                    | Best for                                   |
| :--------------- | :---------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/facebook/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/facebook/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                     |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                          |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                         |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                      |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                              |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/facebook/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/facebook/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                      |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: profiles typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific Facebook page you provide (e.g., a profile URL). **Discovery** finds Facebook content matching search criteria (e.g., all posts from a page URL) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain
  your own parsing logic and update it whenever Facebook changes its page structure.
  The Facebook Scraper API handles the entire stack: proxy rotation, anti-bot bypassing
  and parsing. You simply send a Facebook URL and get clean, structured JSON back with
  no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/facebook/quickstart">
    Scrape your first Facebook profile in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/facebook/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
