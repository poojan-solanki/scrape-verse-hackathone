# Discover Google Hotels by Filter URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-filter-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-filter-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Google Hotels listings by filter URL. POST /datasets/v3/scrape returns hotel records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mg3gjfmg12tc2n5d4d` to discover **Google Hotels by filter URL**.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `filter_url`.
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
      The full Google Hotels filter URL to scrape.
    </ParamField>

    <ParamField type="string">
      ISO 3166-1 alpha-2 country code for localized results.
    </ParamField>

    <ParamField type="string">
      ISO 4217 currency code (e.g., `USD`, `EUR`, `GBP`).
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "url": "https://www.google.com/travel/hotels/New+York?...",
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
      "currency": "USD"
    }
  ]
  ```
</ResponseExample>
