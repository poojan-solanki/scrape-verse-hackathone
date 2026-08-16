# Discover Google Flights by Input Filters

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-flights-discover-by-input-filters](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-flights-discover-by-input-filters)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Flights listings by input filters. POST /datasets/v3/scrape returns flight records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mhng7wen1rw0a3gvpf` to discover **Google Flights by input filters**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `input_filters`.
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
      Origin airport IATA code (e.g., `JFK`).
    </ParamField>

    <ParamField type="string">
      Destination airport IATA code (e.g., `LAX`).
    </ParamField>

    <ParamField type="string">
      Departure date in `YYYY-MM-DD` format.
    </ParamField>

    <ParamField type="string">
      Return date in `YYYY-MM-DD` format. Omit for one-way trips.
    </ParamField>

    <ParamField type="string">
      One of: `one_way`, `round_trip`, `multi_city`.
    </ParamField>

    <ParamField type="number">
      Number of adult passengers.
    </ParamField>

    <ParamField type="number">
      Number of child passengers.
    </ParamField>

    <ParamField type="number">
      Number of infants in their own seat.
    </ParamField>

    <ParamField type="number">
      Number of infants on lap.
    </ParamField>

    <ParamField type="string">
      Cabin class. One of: `economy`, `premium_economy`, `business`, `first`.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "origin": "JFK",
        "destination": "LAX",
        "departure": "2026-06-15",
        "return": "2026-06-22",
        "trip_type": "round_trip",
        "adults": 1,
        "children": 0,
        "infants_in_seat": 0,
        "infants_on_lap": 0,
        "cabin": "economy"
      }
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
      "cabin": "economy",
      "flights": [
        {
          "airline": "Delta",
          "flight_number": "DL 1234",
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
