# Discover by best sellers URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-best-sellers-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-best-sellers-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Best Sellers URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l7q7dkf244hwjntr0` to collect **Discover by Best Sellers URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `best_sellers_url`.
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
      The URL of the Amazon best sellers page.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Portable Bluetooth Speaker",
      "url": "https://www.amazon.com/dp/B09XY1234Z",
      "asin": "B09XY1234Z",
      "price": 39.99,
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 85200,
      "seller_name": "AudioTech Direct",
      "brand": "AudioTech",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-bestseller.jpg",
      "description": "Compact portable speaker with 20-hour battery and waterproof design.",
      "category": "Electronics > Portable Audio > Speakers"
    }
  ]
  ```
</ResponseExample>
