# Discover TikTok posts by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-posts-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/tiktok-posts-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover TikTok posts by keyword. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lu702nij2f790tmv9h` to collect **Discover by Keyword** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `keyword`.
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
      The keyword to search for TikTok posts.
    </ParamField>

    <ParamField type="number">
      The number of posts to collect. Missing value indicates no limit.
    </ParamField>

    <ParamField type="string">
      Specifies what data to collect from each post.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "search_keyword": "cooking recipes",
        "num_of_posts": 20
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "post_id": "7500000000000000000",
      "description": "Easy pasta recipe you need to try #cooking #recipes #foodtok",
      "create_time": "2025-02-10T09:15:00.000Z",
      "share_count": 3200,
      "collect_count": 8900,
      "comment_count": 1500,
      "play_count": 5200000,
      "video_duration": 60,
      "hashtags": [
        "#cooking",
        "#recipes",
        "#foodtok"
      ],
      "video_url": "https://v16-webapp-prime.tiktok.com/video/example.mp4",
      "profile_username": "homechef",
      "profile_url": "https://www.tiktok.com/@homechef",
      "is_verified": false
    }
  ]
  ```
</ResponseExample>
