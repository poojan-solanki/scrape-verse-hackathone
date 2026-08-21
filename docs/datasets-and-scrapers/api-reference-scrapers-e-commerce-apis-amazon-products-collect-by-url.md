# Collect products by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/amazon-products-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Products by URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l7q7dkf244hwjntr0` to collect **Products by URL** data.
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
      The URL of the Amazon product to collect.
    </ParamField>

    <ParamField type="number">
      Filter by the number of units bought in the past month.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.com/dp/B0CHHSFMRL"},
      {"url": "https://www.amazon.com/dp/B09V3KXJPB"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Wireless Noise Cancelling Headphones",
      "url": "https://www.amazon.com/dp/B0CHHSFMRL",
      "asin": "B0CHHSFMRL",
      "price": 249.99,
      "currency": "USD",
      "rating": 4.6,
      "reviews_count": 12450,
      "seller_name": "Electronics Hub",
      "brand": "SoundTech",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-product.jpg",
      "description": "Premium wireless headphones with active noise cancellation and 40-hour battery life.",
      "category": "Electronics > Headphones > Over-Ear"
    }
  ]
  ```
</ResponseExample>
