# Discover Amazon products by UPC

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-upc](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-upc)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by UPC. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l7q7dkf244hwjntr0` to collect **Discover by UPC** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `upc`.
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
      The UPC code of the product to look up.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"upc": "012345678901"},
      {"upc": "098765432109"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Stainless Steel Water Bottle 32oz",
      "url": "https://www.amazon.com/dp/B0D11223AB",
      "asin": "B0D11223AB",
      "price": 19.99,
      "currency": "USD",
      "rating": 4.8,
      "reviews_count": 42300,
      "seller_name": "HydroGear",
      "brand": "HydroGear",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-bottle.jpg",
      "description": "Double-wall vacuum insulated water bottle that keeps drinks cold for 24 hours.",
      "category": "Sports & Outdoors > Water Bottles"
    }
  ]
  ```
</ResponseExample>
