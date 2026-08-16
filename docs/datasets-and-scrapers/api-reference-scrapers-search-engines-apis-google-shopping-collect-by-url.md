# Collect Google Shopping Products by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-shopping-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Google Shopping products by URL. POST /datasets/v3/scrape returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_ltppk50q18kdw67omz` to collect **Google Shopping products by URL**.
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
      The full URL of the Google Shopping product page.
    </ParamField>

    <ParamField type="string">
      ISO 3166-1 alpha-2 country code for localized pricing and availability.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.google.com/shopping/product/12345", "country": "US"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "product_id": "12345",
      "title": "Wireless Noise-Cancelling Headphones",
      "brand": "Acme",
      "rating": 4.5,
      "reviews_count": 1240,
      "price": "249.99",
      "currency": "USD",
      "sellers": [],
      "specifications": {},
      "url": "https://www.google.com/shopping/product/12345"
    }
  ]
  ```
</ResponseExample>
