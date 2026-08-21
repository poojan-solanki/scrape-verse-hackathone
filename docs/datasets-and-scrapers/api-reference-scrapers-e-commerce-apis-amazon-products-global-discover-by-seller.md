# Discover by seller

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-seller](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-seller)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Seller. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwhideng15g8jg63s7` to collect **Discover by Seller** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `seller`.
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
      The URL of the Amazon seller page.
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
        "seller_url": "https://www.amazon.com/sp?ie=UTF8&seller=A2FE2Y3KEQLBV7",
        "num_of_products": 30
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Wireless Charging Pad 15W Fast Charge",
      "url": "https://www.amazon.com/dp/B0C99887GH",
      "asin": "B0C99887GH",
      "price": 18.99,
      "currency": "USD",
      "rating": 4.4,
      "reviews_count": 7300,
      "seller_name": "Electronics Hub",
      "brand": "ChargeFast",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-charger.jpg",
      "description": "Slim wireless charging pad compatible with all Qi-enabled devices.",
      "category": "Electronics > Accessories > Chargers",
      "country_domain": "amazon.com"
    }
  ]
  ```
</ResponseExample>
