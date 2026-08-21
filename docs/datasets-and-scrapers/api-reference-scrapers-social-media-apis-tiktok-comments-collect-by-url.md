# Collect TikTok comments by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-comments-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-comments-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/tiktok-comments-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect TikTok comments by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lkf2st302ap89utw5k` to collect **Comments by URL** data.
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
      The URL of the TikTok post to collect comments from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.tiktok.com/@mrbeast/video/7553300000000000000"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "post_url": "https://www.tiktok.com/@examplecreator/video/7553300000000000000",
      "post_id": "7553300000000000000",
      "post_date_created": "2025-01-15T14:30:00.000Z",
      "date_created": "2025-01-15T16:45:00.000Z",
      "comment_text": "This is amazing content!",
      "num_likes": 1250,
      "num_replies": 15,
      "comment_id": "7553400000000000000",
      "comment_url": "https://www.tiktok.com/@examplecreator/video/7553300000000000000?comment=7553400000000000000",
      "commenter_user_name": "viewer123",
      "commenter_id": "456789012",
      "commenter_url": "https://www.tiktok.com/@viewer123"
    }
  ]
  ```
</ResponseExample>
