# Collect page posts by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-pages-posts-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-pages-posts-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/facebook-pages-posts-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Page Posts by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lkaxegm826bjpoo9m5` to collect **Facebook page posts** data.
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
      The URL of the Facebook page to collect posts from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/NASA"},
      {"url": "https://www.facebook.com/Meta"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/reel/1417029756382510/",
      "post_id": "1325707186087218",
      "user_url": "https://www.facebook.com/delish",
      "user_username_raw": "delish",
      "content": "Sweet niblets! This just unlocked a childhood memory",
      "date_posted": "2026-03-21T19:01:34.000Z",
      "hashtags": null,
      "num_comments": 1,
      "num_shares": 2,
      "num_likes_type": { "num": 34, "type": "Like" },
      "page_name": "Delish",
      "profile_id": "100059438474191",
      "page_intro": "Fun eats every day of the week.",
      "page_category": "News & media website",
      "page_logo": "https://...",
      "page_external_website": "likeshop.me/delish",
      "page_likes": null,
      "page_followers": 21000000,
      "page_is_verified": true,
      "original_post": { "user_avatar_image": null },
      "attachments": [
        {
          "attachment_url": "https://...",
          "id": "1417029756382510",
          "thumbnail_url": "https://...",
          "type": "Video",
          "url": "https://...",
          "video_length": "15509",
          "video_url": "https://..."
        }
      ],
      "page_url": "https://www.facebook.com/delish",
      "header_image": "https://...",
      "avatar_image_url": "https://...",
      "profile_handle": "delish",
      "is_sponsored": false,
      "shortcode": "1325707186087218",
      "video_view_count": 24093,
      "likes": 39,
      "post_type": "Reel",
      "following": 19,
      "count_reactions_type": [
        { "reaction_count": 34, "type": "Like" },
        { "reaction_count": 4, "type": "Haha" }
      ],
      "is_page": true,
      "play_count": 45717
    }
  ]
  ```
</ResponseExample>
