# Collect YouTube comments by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-comments-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/youtube-comments-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect YouTube comments by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk9q0ew71spt1mxywf` to collect **YouTube comments** data.
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
      The YouTube video URL to collect comments from.
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
      "comment_id": "UgxtjoPOlwN1r91t6OF4AaABAg",
      "comment_text": "Great video!",
      "likes": 2,
      "replies": 0,
      "username": "@username",
      "user_channel": "https://www.youtube.com/@username",
      "date": "1 year ago",
      "url": "https://www.youtube.com/watch?v=abc123",
      "video_id": "abc123",
      "user_id": "UCRmKhm9d3FuhiU6SqW4mbDA"
    }
  ]
  ```
</ResponseExample>
