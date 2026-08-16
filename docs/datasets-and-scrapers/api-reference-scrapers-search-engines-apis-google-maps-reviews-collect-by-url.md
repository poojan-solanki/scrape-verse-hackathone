# Collect Google Maps Reviews by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-reviews-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-reviews-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Google Maps reviews by URL. POST /datasets/v3/scrape returns structured review records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_luzfs1dn2oa0teb81` to collect **Google Maps reviews by URL**.
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
      The full URL of the Google Maps place whose reviews you want to scrape.
    </ParamField>

    <ParamField type="number">
      Only return reviews posted within the last N days. Omit to retrieve all reviews.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.google.com/maps/place/Empire+State+Building", "days_limit": 30}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
      "place_name": "Empire State Building",
      "review_id": "ChZDSUhNMG9nS0VJQ0FnSURleDdtVURBEAE",
      "reviewer_name": "Jane Doe",
      "reviewer_url": "https://www.google.com/maps/contrib/123456789",
      "rating": 5,
      "review_text": "Great view of the city.",
      "review_date": "2026-03-28T14:12:00Z",
      "likes": 12,
      "photos": []
    }
  ]
  ```
</ResponseExample>
