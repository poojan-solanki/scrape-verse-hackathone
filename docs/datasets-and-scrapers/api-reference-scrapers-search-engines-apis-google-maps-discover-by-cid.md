# Discover Google Maps Places by CID

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-cid](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-cid)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Maps places by CID. POST /datasets/v3/scrape returns structured place records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m8ebnr0q2qlklc02fz` to discover **Google Maps places by CID**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `cid`.
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
      The Google Maps Customer ID (CID) for the place.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"CID": "14408248692727049506"}
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
      "rating": 4.7,
      "reviews_count": 98500,
      "latitude": 40.7484405,
      "longitude": -73.9856644,
      "url": "https://www.google.com/maps/place/?q=place_id:ChIJaXQRs6lZwokRY6EFpJnhNNE"
    }
  ]
  ```
</ResponseExample>
