# Collect sellers info by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-sellers-info-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-sellers-info-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/amazon-sellers-info-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Sellers Info by URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lhotzucw1etoe5iw1k` to collect **Sellers Info by URL** data.
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
      The URL of the Amazon seller page to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.com/sp?ie=UTF8&seller=A2FE2Y3KEQLBV7"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "seller_name": "Electronics Hub",
      "seller_url": "https://www.amazon.com/sp?ie=UTF8&seller=A2FE2Y3KEQLBV7",
      "seller_id": "A2FE2Y3KEQLBV7",
      "rating": 4.5,
      "reviews_count": 8920,
      "business_name": "Electronics Hub LLC",
      "business_address": "123 Commerce St, Seattle, WA 98101"
    }
  ]
  ```
</ResponseExample>
