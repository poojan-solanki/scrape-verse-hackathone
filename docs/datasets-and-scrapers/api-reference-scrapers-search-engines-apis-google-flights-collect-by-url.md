# Collect Google Flights by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-flights-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-flights-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Google Flights listings by URL. POST /datasets/v3/scrape returns structured flight records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mhng7wen1rw0a3gvpf` to collect **Google Flights by URL**.
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
      The full Google Flights URL to scrape.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.google.com/travel/flights?tfs=..."}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "origin": "JFK",
      "destination": "LAX",
      "departure_date": "2026-06-15",
      "return_date": "2026-06-22",
      "flights": [
        {
          "airline": "Delta",
          "flight_number": "DL 1234",
          "departure_time": "08:15",
          "arrival_time": "11:45",
          "duration_minutes": 390,
          "stops": 0,
          "price": "328.00",
          "currency": "USD"
        }
      ]
    }
  ]
  ```
</ResponseExample>
