# Collect channels by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Channels by URL. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk538t2k2p1k3oos71` to collect **YouTube channels** data.
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
      The YouTube channel URL to collect data from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.youtube.com/@MrBeast"},
      {"url": "https://www.youtube.com/@PewDiePie"}
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
