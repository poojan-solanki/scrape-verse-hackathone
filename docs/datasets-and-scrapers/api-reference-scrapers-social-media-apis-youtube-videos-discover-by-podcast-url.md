# Discover videos by podcast URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-videos-discover-by-podcast-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-videos-discover-by-podcast-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Videos by Podcast URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk56epmy2i5g7lzu0k` to collect **Discover Videos by Podcast URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `podcast_url`.
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
      The YouTube podcast URL to discover videos from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"}
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
