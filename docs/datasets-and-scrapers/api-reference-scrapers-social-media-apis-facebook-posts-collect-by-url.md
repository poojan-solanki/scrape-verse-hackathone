# Collect Facebook posts by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-posts-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-posts-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/facebook-posts-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Facebook posts by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lyclm1571iy3mv57zw` to collect **Facebook posts** data.
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
      The URL of the Facebook post to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/NASA/posts/1234567890"},
      {"url": "https://www.facebook.com/Meta/posts/9876543210"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/share/v/17yf2ZfpHp/",
      "post_id": "1528075055988555",
      "user_url": "https://www.facebook.com/thetoyinsider",
      "user_username_raw": "The Toy Insider",
      "content": "Hatchin' Yoshi is our whole personality until further notice. Hitting stores next month!",
      "date_posted": "2026-02-14T21:28:45.000Z",
      "num_comments": 966,
      "num_shares": 3500,
      "num_likes_type": [{ "num": 23800, "type": "Like" }],
      "profile_id": "100063582250570",
      "page_logo": "https://...",
      "page_likes": null,
      "page_followers": 36000,
      "page_is_verified": false,
      "attachments": [
        {
          "attachment_url": "https://...",
          "id": "1473877017491895",
          "type": "video",
          "url": "https://www.facebook.com/reel/1473877017491895",
          "video_length": "125767",
          "video_url": "https://..."
        }
      ],
      "page_url": "https://www.facebook.com/thetoyinsider",
      "profile_handle": "thetoyinsider",
      "is_sponsored": false,
      "video_view_count": 2300000,
      "likes": 23800,
      "post_type": "Post",
      "play_count": null
    }
  ]
  ```
</ResponseExample>
