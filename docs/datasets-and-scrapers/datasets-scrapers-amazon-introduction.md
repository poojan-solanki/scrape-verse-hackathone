# Amazon Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/amazon/introduction](https://docs.brightdata.com/datasets/scrapers/amazon/introduction)
> **Category**: `datasets-and-scrapers`

---

Extract structured data from Amazon products, reviews, sellers and search results with the Bright Data [Amazon Scraper API](https://brightdata.com/products/web-scraper/amazon). Handles up to 20 URLs per request.

Send an Amazon URL, get structured JSON back. The Bright Data Amazon Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/products/web-scraper/amazon/?hs_signup=1\&utm_source=docs) and get **5,000 free credits every month**, no credit card required. That's up to **5,000 Amazon records** to start scraping. See the [free tier](/general/account/billing-and-pricing/free-tier).
</Tip>

## How it works

You send one or more Amazon URLs to the Bright Data Amazon Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (products, reviews, sellers, global products, or search) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l7q7dkf244hwjntr0&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.com/dp/B0CHHSFMRL"}]'
```

```json theme={null}
{
  "title": "Apple AirPods Pro (2nd Generation)",
  "asin": "B0CHHSFMRL",
  "price": 189.99,
  "currency": "USD",
  "rating": 4.7,
  "reviews_count": 85420,
  "seller_name": "Amazon.com",
  "brand": "Apple",
  "availability": "In Stock",
  "main_image": "https://m.media-amazon.com/images/I/...",
  "url": "https://www.amazon.com/dp/B0CHHSFMRL"
}
```

## Supported data types

<CardGroup>
  <Card title="Products" icon="box" href="/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url">
    Product titles, prices, ratings, reviews count, seller info, and availability. Discover products by best sellers, category, keyword, or UPC.
  </Card>

  <Card title="Reviews" icon="star" href="/api-reference/scrapers/e-commerce-apis/amazon-reviews-collect-by-url">
    Review text, ratings, reviewer details, verified purchase status, and review dates.
  </Card>

  <Card title="Sellers Info" icon="store" href="/api-reference/scrapers/e-commerce-apis/amazon-sellers-info-collect-by-url">
    Seller names, ratings, feedback counts, and business details.
  </Card>

  <Card title="Products Global" icon="globe" href="/api-reference/scrapers/e-commerce-apis/amazon-products-global-collect-by-url">
    Product data from Amazon marketplaces worldwide. Discover by brand, category, keywords, or seller.
  </Card>

  <Card title="Products Search" icon="magnifying-glass" href="/api-reference/scrapers/e-commerce-apis/amazon-products-search-collect-by-url">
    Search results for any keyword on Amazon, including product listings and pagination.
  </Card>
</CardGroup>

## Request methods

The Bright Data Amazon Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                  | Best for                                   |
| :--------------- | :-------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/amazon/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/amazon/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                 |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                      |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                     |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                  |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                          |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/amazon/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/amazon/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                  |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: products typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific Amazon page you provide (e.g., a product URL). **Discovery** finds Amazon content matching search criteria (e.g., all products in a category or matching a keyword) and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain your own parsing logic and update it whenever Amazon changes its page structure. The Amazon Scraper API handles the entire stack: proxy rotation, anti-bot bypassing and parsing. You simply send an Amazon URL and get clean, structured JSON back with no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/amazon/quickstart">
    Scrape your first Amazon product in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/amazon/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
