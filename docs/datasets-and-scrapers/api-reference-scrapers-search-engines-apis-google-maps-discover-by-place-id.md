# Discover Google Maps Places by place_id

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-place-id](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-place-id)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Maps places by place_id. POST /datasets/v3/scrape returns structured place records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m8ebnr0q2qlklc02fz` to discover **Google Maps places by place\_id**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `place_id`.
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
      The Google Maps place ID for the location.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"place_id": "ChIJS5WVcqWh9YgRHU08rJqLNsQ"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "place_id": "ChIJS5WVcqWh9YgRHU08rJqLNsQ",
      "name": "Example Place",
      "address": "123 Example St., New York, NY",
      "rating": 4.5,
      "reviews_count": 1200,
      "latitude": 40.7128,
      "longitude": -74.006
    }
  ]
  ```
</ResponseExample>
