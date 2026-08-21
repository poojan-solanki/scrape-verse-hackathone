# Send your first Amazon API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/amazon/send-first-request](https://docs.brightdata.com/datasets/scrapers/amazon/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 5 Bright Data Amazon Scraper API endpoints with copy-paste examples for products, reviews, sellers, global and search.

This tutorial walks you through sending a synchronous request to each Bright Data Amazon Scraper API endpoint. By the end, you'll have working examples for products, reviews, sellers info, products global, and products search.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/amazon/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.amazon.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/amazon/async-requests).
</Note>

## How to scrape Amazon products

**Dataset ID:** `gd_l7q7dkf244hwjntr0`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l7q7dkf244hwjntr0&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.com/dp/B0CHHSFMRL"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
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
  ]
  ```
</Accordion>

[Full Products response schema](/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url)

## How to scrape Amazon reviews

**Dataset ID:** `gd_le8e811kzy4ggddlq`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_le8e811kzy4ggddlq&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.com/dp/B0CHHSFMRL"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "title": "Best noise cancellation ever",
      "text": "These earbuds have incredible noise cancellation. The fit is comfortable and battery life is outstanding.",
      "rating": 5,
      "date": "2024-08-15T00:00:00.000Z",
      "author_name": "TechReviewer42",
      "verified_purchase": true,
      "helpful_count": 234,
      "asin": "B0CHHSFMRL",
      "url": "https://www.amazon.com/dp/B0CHHSFMRL"
    }
  ]
  ```
</Accordion>

[Full Reviews response schema](/api-reference/scrapers/e-commerce-apis/amazon-reviews-collect-by-url)

## How to scrape Amazon sellers info

**Dataset ID:** `gd_lhotzucw1etoe5iw1k`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lhotzucw1etoe5iw1k&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.com/sp?seller=A2FE5N3LOEXQRU"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "seller_name": "TechGadgets Direct",
      "seller_id": "A2FE5N3LOEXQRU",
      "rating": 4.5,
      "ratings_count": 12450,
      "positive_feedback_pct": 95,
      "business_name": "TechGadgets LLC",
      "business_address": "123 Commerce St, Seattle, WA 98101",
      "url": "https://www.amazon.com/sp?seller=A2FE5N3LOEXQRU"
    }
  ]
  ```
</Accordion>

[Full Sellers Info response schema](/api-reference/scrapers/e-commerce-apis/amazon-sellers-info-collect-by-url)

## How to scrape Amazon products globally

**Dataset ID:** `gd_lwhideng15g8jg63s7`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lwhideng15g8jg63s7&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.co.uk/dp/B0CHHSFMRL"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "title": "Apple AirPods Pro (2nd Generation)",
      "asin": "B0CHHSFMRL",
      "price": 229.00,
      "currency": "GBP",
      "rating": 4.7,
      "reviews_count": 32150,
      "seller_name": "Amazon.co.uk",
      "brand": "Apple",
      "availability": "In Stock",
      "domain": "amazon.co.uk",
      "url": "https://www.amazon.co.uk/dp/B0CHHSFMRL"
    }
  ]
  ```
</Accordion>

[Full Products Global response schema](/api-reference/scrapers/e-commerce-apis/amazon-products-global-collect-by-url)

## How to scrape Amazon product search

**Dataset ID:** `gd_lwdb4vjm1ehb499uxs`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lwdb4vjm1ehb499uxs&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "wireless earbuds", "url": "https://www.amazon.com", "pages_to_search": 1}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "title": "Apple AirPods Pro (2nd Generation)",
      "asin": "B0CHHSFMRL",
      "price": 189.99,
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 85420,
      "sponsored": false,
      "position": 1,
      "keyword": "wireless earbuds",
      "url": "https://www.amazon.com/dp/B0CHHSFMRL"
    },
    {
      "title": "Samsung Galaxy Buds2 Pro",
      "asin": "B0B2SH4CN6",
      "price": 159.99,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 42300,
      "sponsored": false,
      "position": 2,
      "keyword": "wireless earbuds",
      "url": "https://www.amazon.com/dp/B0B2SH4CN6"
    }
  ]
  ```
</Accordion>

[Full Products Search response schema](/api-reference/scrapers/e-commerce-apis/amazon-products-search-collect-by-url)

## Quick reference: dataset IDs

| Endpoint        | Dataset ID              | Input format                          |
| :-------------- | :---------------------- | :------------------------------------ |
| Products        | `gd_l7q7dkf244hwjntr0`  | `amazon.com/dp/{ASIN}`                |
| Reviews         | `gd_le8e811kzy4ggddlq`  | `amazon.com/dp/{ASIN}`                |
| Sellers Info    | `gd_lhotzucw1etoe5iw1k` | `amazon.com/sp?seller={SELLER_ID}`    |
| Products Global | `gd_lwhideng15g8jg63s7` | `amazon.{domain}/dp/{ASIN}`           |
| Products Search | `gd_lwdb4vjm1ehb499uxs` | `keyword` + `url` + `pages_to_search` |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/amazon/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
