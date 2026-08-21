# Collect Shop by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-shop-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Shop by URL. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m45m1u911dsa4274pi` to collect **Shop by URL** data.
  </Warning>
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
      The URL of the TikTok Shop product to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.tiktok.com/view/product/1729000000000000000"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.tiktok.com/view/product/1729000000000000000",
      "title": "Wireless Bluetooth Headphones with Noise Cancellation",
      "price": 29.99,
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 1250,
      "seller_name": "TechGadgets Official",
      "seller_url": "https://www.tiktok.com/@techgadgets",
      "description": "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
      "images": [
        "https://p16-oec-ttp.tiktokcdn-us.com/example-product-1.jpeg",
        "https://p16-oec-ttp.tiktokcdn-us.com/example-product-2.jpeg"
      ],
      "category": "Electronics > Audio > Headphones"
    }
  ]
  ```
</ResponseExample>
