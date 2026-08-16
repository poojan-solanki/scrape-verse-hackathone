# Collect TikTok profiles by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/tiktok-profiles-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect TikTok profiles by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l1villgoiiidt09ci` to collect **Profiles by URL** data.
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
      The URL of the TikTok profile to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.tiktok.com/@mrbeast"},
      {"url": "https://www.tiktok.com/@charlidamelio"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "account_id": "123456789",
      "nickname": "Example Creator",
      "biography": "Content creator and storyteller",
      "bio_link": "https://example.com",
      "is_verified": true,
      "followers": 150000000,
      "following": 800,
      "likes": 3200000000,
      "videos_count": 950,
      "create_time": "2018-05-20T00:00:00.000Z",
      "url": "https://www.tiktok.com/@examplecreator",
      "profile_pic_url": "https://p16-sign-sg.tiktokcdn.com/example-avatar~100x100.jpeg",
      "profile_pic_url_hd": "https://p16-sign-sg.tiktokcdn.com/example-avatar~720x720.jpeg",
      "awg_engagement_rate": 0.0432,
      "is_private": false,
      "region": "US"
    }
  ]
  ```
</ResponseExample>
