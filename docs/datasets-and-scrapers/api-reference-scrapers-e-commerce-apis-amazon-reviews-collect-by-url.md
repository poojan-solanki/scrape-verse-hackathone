# Collect reviews by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-reviews-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-reviews-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/amazon-reviews-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Reviews by URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_le8e811kzy4ggddlq` to collect **Reviews by URL** data.
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
      The URL of the Amazon product to collect reviews from.
    </ParamField>

    <ParamField type="string[]">
      An array of review IDs to exclude from the results.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.com/dp/B0CHHSFMRL"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.amazon.com/dp/B0CHHSFMRL",
      "asin": "B0CHHSFMRL",
      "reviewer_name": "John D.",
      "rating": 5,
      "review_title": "Best headphones I have ever owned",
      "review_text": "Incredible sound quality and the noise cancellation is top-notch. Battery lasts for days on a single charge.",
      "review_date": "2025-01-15T00:00:00.000Z",
      "verified_purchase": true
    }
  ]
  ```
</ResponseExample>
