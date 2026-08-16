# Discover by category

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-category](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-category)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Category. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m45m1u911dsa4274pi` to collect **Discover by Category** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `category_url`.
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
      The TikTok Shop category URL to discover products from.
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
        "category_url": "https://www.tiktok.com/browse/electronics",
        "num_of_products": 20
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.tiktok.com/view/product/1730000000000000000",
      "title": "Portable Bluetooth Speaker Waterproof",
      "price": 19.99,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 870,
      "seller_name": "AudioShop",
      "seller_url": "https://www.tiktok.com/@audioshop",
      "description": "Compact waterproof Bluetooth speaker with 12-hour battery life.",
      "images": [
        "https://p16-oec-ttp.tiktokcdn-us.com/example-product-1.jpeg"
      ],
      "category": "Electronics > Audio > Speakers"
    }
  ]
  ```
</ResponseExample>
