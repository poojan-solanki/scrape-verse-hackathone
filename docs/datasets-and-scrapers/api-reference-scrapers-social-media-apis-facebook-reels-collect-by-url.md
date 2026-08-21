# Collect reels by profile URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-reels-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-reels-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/facebook-reels-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Reels by Profile URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lyclm3ey2q6rww027t` to collect **Facebook reels** data.
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
      The URL of the Facebook profile to collect reels from.
    </ParamField>

    <ParamField type="number">
      The number of recent reels to collect. Missing value indicates no limit.
    </ParamField>

    <ParamField type="string[]">
      Post IDs not to include.
    </ParamField>

    <ParamField type="string">
      Start date filter `MM-DD-YYYY` (should be earlier than "end\_date").
    </ParamField>

    <ParamField type="string">
      End date filter `MM-DD-YYYY` (should be later than "start\_date").
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/MrBeast6000", "num_of_posts": 10},
      {"url": "https://www.facebook.com/NASA", "start_date": "01-01-2025", "end_date": "03-01-2025"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/reel/2128461008004479",
      "post_id": "1417440860423673",
      "user_url": "https://www.facebook.com/tmcnewsbr",
      "user_username_raw": "Radio Transamerica FM",
      "content": "Increase in US-Iran tensions...",
      "date_posted": "2026-04-06T00:00:00.000Z",
      "hashtags": ["#guerra", "#eua"],
      "num_comments": 2,
      "num_shares": 0,
      "video_view_count": 582,
      "likes": 3,
      "page_name": "Radio Transamerica FM",
      "profile_id": "100064733164731",
      "page_logo": "https://...",
      "page_likes": 0,
      "page_followers": 1200000,
      "thumbnail": "https://...",
      "page_url": "https://www.facebook.com/tmcnewsbr",
      "profile_handle": "tmcnewsbr",
      "shortcode": "2128461008004479",
      "length": 13.888,
      "audio": "AVAILABLE",
      "video_url": "https://..."
    }
  ]
  ```
</ResponseExample>
