# Collect Instagram comments by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-comments-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-comments-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/instagram-comments-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Instagram comments by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_ltppn085pokosxh13` to collect **Comments by URL** data.
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
      Input specific post url to get the latest 15 comments
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url":"https://www.instagram.com/cats_of_instagram/reel/C4GLo_eLO2e/"},
      {"url":"https://www.instagram.com/catsofinstagram/p/CesFC7JLyFl/?img_index=1"},
      {"url":"https://www.instagram.com/cats_of_instagram/reel/C2TmNOVMSbG/"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.instagram.com/nato",
      "comment_user": "met***han***r",
      "comment_user_url": "https://www.instagram.com/metlushanigor",
      "comment_date": "2026-03-14T01:13:08.000Z",
      "comment": "В реальних бойових діях ці танки за 5 хвилин будуть знищені,а солдати ще менше проживуть. Ви відстає НАТО на пʼять років",
      "likes_number": 0,
      "replies_number": 0,
      "replies": null,
      "hashtag_comment": null,
      "tagged_users_in_comment": null,
      "post_url": "https://www.instagram.com/p/DVyB2KkjS07/",
      "post_user": "******",
      "comment_id": "18168596065410257",
      "post_id": "3851148751604100411_985168596"
    }
  ]
  ```
</ResponseExample>
