# Collect Google Maps Places by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Google Maps places by URL. POST /datasets/v3/scrape returns structured place records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m8ebnr0q2qlklc02fz` to collect **Google Maps places by URL**.
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
      The full URL of the Google Maps place to scrape.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.google.com/maps/place/Empire+State+Building"},
      {"url": "https://www.google.com/maps/place/Central+Park"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
      "name": "Empire State Building",
      "address": "20 W 34th St., New York, NY 10001",
      "category": "Observation deck",
      "rating": 4.7,
      "reviews_count": 98500,
      "phone": "+1 212-736-3100",
      "website": "https://www.esbnyc.com/",
      "latitude": 40.7484405,
      "longitude": -73.9856644,
      "open_hours": {},
      "photos": [],
      "url": "https://www.google.com/maps/place/Empire+State+Building"
    }
  ]
  ```
</ResponseExample>
