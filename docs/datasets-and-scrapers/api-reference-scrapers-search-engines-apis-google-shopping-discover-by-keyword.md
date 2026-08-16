# Discover Google Shopping by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Shopping products by keyword. POST /datasets/v3/scrape returns product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_ltppk50q18kdw67omz` to discover **Google Shopping products by keyword**.
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
      The search term to find matching Google Shopping products.
    </ParamField>

    <ParamField type="string">
      ISO 3166-1 alpha-2 country code for localized results.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"keyword": "wireless headphones", "country": "US"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "product_id": "54321",
      "title": "Sony WH-1000XM5 Wireless Headphones",
      "brand": "Sony",
      "rating": 4.7,
      "reviews_count": 8400,
      "price": "349.99",
      "currency": "USD",
      "url": "https://www.google.com/shopping/product/54321"
    }
  ]
  ```
</ResponseExample>
