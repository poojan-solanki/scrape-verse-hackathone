# Discover Amazon products by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Amazon products by keyword. Calls the POST /datasets/v3/scrape endpoint.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l7q7dkf244hwjntr0` to collect **Discover by Keyword** data.
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
      The keyword to search for Amazon products.
    </ParamField>

    <ParamField type="string">
      The ZIP code to use for location-based results.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "keyword": "wireless mouse",
        "zipcode": "10001"
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Ergonomic Wireless Mouse with USB Receiver",
      "url": "https://www.amazon.com/dp/B0C98765XY",
      "asin": "B0C98765XY",
      "price": 24.99,
      "currency": "USD",
      "rating": 4.4,
      "reviews_count": 18700,
      "seller_name": "PeripheralsDirect",
      "brand": "ErgoClick",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-mouse.jpg",
      "description": "Lightweight ergonomic wireless mouse with adjustable DPI and silent clicks.",
      "category": "Electronics > Computers > Mice"
    }
  ]
  ```
</ResponseExample>
