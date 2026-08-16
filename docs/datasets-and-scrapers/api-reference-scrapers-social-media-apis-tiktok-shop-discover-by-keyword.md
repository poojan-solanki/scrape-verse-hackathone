# Discover TikTok Shop products by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover TikTok Shop products by keyword. Calls the POST /datasets/v3/scrape endpoint.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m45m1u911dsa4274pi` to collect **Discover by Keyword** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `keyword`.
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
      The keyword to search for TikTok Shop products.
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
        "keyword": "wireless earbuds",
        "num_of_products": 15
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.tiktok.com/view/product/1731000000000000000",
      "title": "Wireless Earbuds with Charging Case",
      "price": 24.99,
      "currency": "USD",
      "rating": 4.3,
      "reviews_count": 2100,
      "seller_name": "EarTech Store",
      "seller_url": "https://www.tiktok.com/@eartechstore",
      "description": "True wireless earbuds with touch controls and 24-hour total battery life.",
      "images": [
        "https://p16-oec-ttp.tiktokcdn-us.com/example-product-1.jpeg"
      ],
      "category": "Electronics > Audio > Earbuds"
    }
  ]
  ```
</ResponseExample>
