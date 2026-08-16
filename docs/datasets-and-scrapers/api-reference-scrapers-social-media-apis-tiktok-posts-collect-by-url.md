# Collect TikTok posts by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-posts-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-posts-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/tiktok-posts-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect TikTok posts by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lu702nij2f790tmv9h` to collect **Posts by URL** data.
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
      The URL of the TikTok post to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.tiktok.com/@mrbeast/video/7553300000000000000"},
      {"url": "https://www.tiktok.com/@bellapoarch/video/7400000000000000000"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "post_id": "7553300000000000000",
      "description": "This is an example post description #fyp #viral",
      "create_time": "2025-01-15T14:30:00.000Z",
      "share_count": 45000,
      "collect_count": 12000,
      "comment_count": 8500,
      "play_count": 15000000,
      "video_duration": 45,
      "hashtags": [
        "#fyp",
        "#viral"
      ],
      "video_url": "https://v16-webapp-prime.tiktok.com/video/example.mp4",
      "profile_username": "examplecreator",
      "profile_url": "https://www.tiktok.com/@examplecreator",
      "is_verified": true
    }
  ]
  ```
</ResponseExample>
