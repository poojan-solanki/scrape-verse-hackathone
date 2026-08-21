# Collect Facebook profiles by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Facebook profiles by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mf0urb782734ik94dz` to collect **Facebook profiles** data.
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
      The URL of the Facebook profile to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/zuck"},
      {"url": "https://www.facebook.com/sheryl"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/GoramHomes/mentions/",
      "name": "Goram Homes",
      "id": "100090557460648",
      "profile_photo": "https://...",
      "cover_photo": "https://...",
      "work": null,
      "college": null,
      "high_school": null,
      "photos": null
    }
  ]
  ```
</ResponseExample>
