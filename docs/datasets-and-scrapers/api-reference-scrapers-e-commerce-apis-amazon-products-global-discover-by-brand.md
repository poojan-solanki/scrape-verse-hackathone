# Discover by brand

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-brand](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-brand)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Brand. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwhideng15g8jg63s7` to collect **Discover by Brand** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `brand`.
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
      The URL of the Amazon brand page.
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
        "brand_url": "https://www.amazon.com/stores/BrandName/page/12345678-ABCD-1234-EFGH-123456789012",
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
      "title": "Smart Fitness Tracker with Heart Rate Monitor",
      "url": "https://www.amazon.com/dp/B0D55667AB",
      "asin": "B0D55667AB",
      "price": 49.99,
      "currency": "USD",
      "rating": 4.3,
      "reviews_count": 9800,
      "seller_name": "FitTech Official",
      "brand": "FitTech",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-brand.jpg",
      "description": "Slim fitness tracker with continuous heart rate monitoring and sleep tracking.",
      "category": "Electronics > Wearables > Fitness Trackers",
      "country_domain": "amazon.com"
    }
  ]
  ```
</ResponseExample>
