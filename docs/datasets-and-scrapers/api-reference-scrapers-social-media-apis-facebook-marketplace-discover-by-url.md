# Discover Marketplace listings by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-marketplace-discover-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-marketplace-discover-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Facebook Marketplace listings by URL. Endpoint: POST /datasets/v3/scrape.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lvt9iwuh6fbcwmx1a` to collect **Facebook Marketplace listings** data.
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
      The Facebook Marketplace search URL to discover listings from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/marketplace/category/electronics"},
      {"url": "https://www.facebook.com/marketplace/category/vehicles"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/marketplace/item/1259177466401495",
      "title": "2018 Mercedes-Benz C 300 Convertible 27k miles",
      "initial_price": 35995,
      "final_price": 35995,
      "currency": "USD",
      "product_id": "1259177466401495",
      "condition": "USED",
      "description": "1 owner, 2.0 turbo all wheel drive, leather seating pkg...",
      "location": "Knoxville, TN",
      "country_code": "US",
      "images": ["https://..."],
      "seller_description": "1 owner, 2.0 turbo...",
      "color": "grey",
      "brand": null,
      "videos": null,
      "profile_id": "34591790377134943",
      "listing_date": "2026-04-02T11:25:00.000Z"
    }
  ]
  ```
</ResponseExample>
