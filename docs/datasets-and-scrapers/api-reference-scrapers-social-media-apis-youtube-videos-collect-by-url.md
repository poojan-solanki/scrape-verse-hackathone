# Collect videos by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-videos-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-videos-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/youtube-videos-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Videos by URL. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk56epmy2i5g7lzu0k` to collect **YouTube videos** data.
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
      The YouTube video URL to collect data from.
    </ParamField>

    <ParamField type="string">
      The country to use for the request.
    </ParamField>

    <ParamField type="string">
      The language for video transcription.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
      {"url": "https://www.youtube.com/watch?v=4L_m0m3bEtE"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.youtube.com/watch?v=4L_m0m3bEtE",
      "title": "Video Title Here",
      "youtuber": "@channelname",
      "video_url": "https://...",
      "video_length": 96,
      "likes": 18,
      "views": 1648,
      "date_posted": "2025-04-18T05:26:16.000Z",
      "description": "Video description...",
      "num_comments": 0,
      "subscribers": 4810000,
      "video_id": "4L_m0m3bEtE",
      "channel_url": "https://www.youtube.com/@channelname",
      "preview_image": "https://i.ytimg.com/vi/4L_m0m3bEtE/maxresdefault.jpg",
      "shortcode": "4L_m0m3bEtE",
      "verified": true,
      "handle_name": "Channel Name",
      "is_sponsored": false,
      "quality": "hd1080",
      "transcript": "...",
      "tags": ["tag1", "tag2"],
      "is_age_restricted": false
    }
  ]
  ```
</ResponseExample>
