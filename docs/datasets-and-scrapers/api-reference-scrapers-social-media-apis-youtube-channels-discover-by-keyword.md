# Discover channels by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-channels-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-channels-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Channels by Keyword. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk538t2k2p1k3oos71` to collect **Discover Channels by Keyword** data.
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
      The keyword to search for YouTube channels.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "keyword": "cooking tutorials"
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.youtube.com/@channelname",
      "handle": "@channelname",
      "banner_img": "https://...",
      "profile_image": "https://...",
      "name": "Channel Name",
      "subscribers": 299,
      "Description": "Channel description...",
      "videos_count": 21,
      "created_date": "2024-11-25T00:00:00.000Z",
      "views": 98723,
      "Details": {"location": "United States"},
      "Links": ["youtube.com/@channelname"],
      "identifier": "UC...",
      "id": "UC...",
      "has_podcast": false,
      "top_videos": [
        {
          "Image_url": "https://...",
          "posted_time": "3 weeks ago",
          "title": "Video Title",
          "video_url": "https://www.youtube.com/watch?v=abc",
          "views": 11
        }
      ]
    }
  ]
  ```
</ResponseExample>
