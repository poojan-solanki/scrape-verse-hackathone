# Discover Google Hotels by Search

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-search](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-search)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Hotels listings by search parameters. POST /datasets/v3/scrape returns hotel records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mg3gjfmg12tc2n5d4d` to discover **Google Hotels by search**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `search`.
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
      The destination or location to search (e.g., `New York`, `Tokyo`).
    </ParamField>

    <ParamField type="string">
      Check-in date in `YYYY-MM-DD` format.
    </ParamField>

    <ParamField type="string">
      Check-out date in `YYYY-MM-DD` format.
    </ParamField>

    <ParamField type="number">
      Number of guests.
    </ParamField>

    <ParamField type="string">
      ISO 3166-1 alpha-2 country code for localized results.
    </ParamField>

    <ParamField type="string">
      ISO 4217 currency code (e.g., `USD`, `EUR`).
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "search_term": "New York",
        "check_in_date": "2026-06-15",
        "check_out_date": "2026-06-18",
        "guest_number": 2,
        "country": "US",
        "currency": "USD"
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "hotel_id": "CgoI_example",
      "name": "The Plaza",
      "address": "768 5th Ave, New York, NY 10019",
      "rating": 4.5,
      "reviews_count": 8200,
      "price_per_night": "795.00",
      "total_price": "2385.00",
      "currency": "USD",
      "check_in_date": "2026-06-15",
      "check_out_date": "2026-06-18"
    }
  ]
  ```
</ResponseExample>
