# Google Shopping search (US) by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-products-search-us-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-products-search-us-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect US Google Shopping search results by URL. POST /datasets/v3/scrape returns product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m31f2k0d2m1bah4f3b` to collect **Google Shopping Products Search US by URL**.
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
      The Google Shopping search URL to scrape (e.g., `https://www.google.com/search?tbm=shop&q=...`).
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.google.com/search?tbm=shop&q=wireless+headphones"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "query": "wireless headphones",
      "position": 1,
      "title": "Sony WH-1000XM5 Wireless Headphones",
      "merchant": "Best Buy",
      "price": "349.99",
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 1820,
      "product_url": "https://www.google.com/shopping/product/54321"
    }
  ]
  ```
</ResponseExample>
