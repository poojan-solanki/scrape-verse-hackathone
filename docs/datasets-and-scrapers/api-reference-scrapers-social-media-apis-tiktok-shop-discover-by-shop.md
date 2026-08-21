# Discover by shop

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-shop](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-shop)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Shop. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m45m1u911dsa4274pi` to collect **Discover by Shop** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `shop_url`.
</ParamField>

<ParamField type="boolean">
  Whether to send notifications when the request is completed.
</ParamField>

<ParamField type="boolean">
  Whether to include errors in the response.
</ParamField>

## Request Body

<ParamField type="object[]">
  An array of input objects.

  <Expandable title="properties">
    <ParamField type="string">
      The URL of the TikTok Shop to discover products from.
    </ParamField>

    <ParamField type="number">
      The number of products to collect. Missing value indicates no limit.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "shop_url": "https://www.tiktok.com/@techgadgets/shop",
        "num_of_products": 25
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.tiktok.com/view/product/1732000000000000000",
      "title": "Smart Watch Fitness Tracker",
      "price": 39.99,
      "currency": "USD",
      "rating": 4.6,
      "reviews_count": 3400,
      "seller_name": "TechGadgets Official",
      "seller_url": "https://www.tiktok.com/@techgadgets",
      "description": "Fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.",
      "images": [
        "https://p16-oec-ttp.tiktokcdn-us.com/example-product-1.jpeg"
      ],
      "category": "Electronics > Wearables > Smartwatches"
    }
  ]
  ```
</ResponseExample>
