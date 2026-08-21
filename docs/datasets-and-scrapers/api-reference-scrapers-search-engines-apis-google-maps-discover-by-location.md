# Discover Google Maps Places by Location

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-location](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-maps-discover-by-location)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Maps places by geographic location. POST /datasets/v3/scrape returns place records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m8ebnr0q2qlklc02fz` to discover **Google Maps places by location**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `location`.
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
      ISO 3166-1 alpha-2 country code (e.g., `US`, `GB`, `DE`).
    </ParamField>

    <ParamField type="number">
      Latitude of the search center.
    </ParamField>

    <ParamField type="number">
      Longitude of the search center.
    </ParamField>

    <ParamField type="number">
      Google Maps zoom level (typically 10 to 18).
    </ParamField>

    <ParamField type="string">
      Search term to find nearby places (e.g., `coffee shop`, `pharmacy`).
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"country": "US", "lat": 40.7484, "long": -73.9857, "zoom_level": 14, "keyword": "coffee shop"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "place_id": "ChIJExample123",
      "name": "Blue Bottle Coffee",
      "address": "54 W 40th St., New York, NY 10018",
      "rating": 4.4,
      "reviews_count": 520,
      "category": "Coffee shop",
      "latitude": 40.7525,
      "longitude": -73.984
    }
  ]
  ```
</ResponseExample>
