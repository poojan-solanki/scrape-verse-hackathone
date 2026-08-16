# Discover posts by profile URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/twitter-posts-discover-by-profile-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/twitter-posts-discover-by-profile-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Posts by Profile URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwxkxvnf1cynvib9co` to collect **Discover by Profile URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `profile_url`.
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
      The URL of the X.com profile to discover posts from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://x.com/elonmusk"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "id": "2039126434510418303",
      "user_posted": "CozHealsSEN",
      "name": "SENQ Breakfast",
      "description": "LISTEN: North Queensland Cowboys front rower Matt Lodge joins Corey Parker and Andrew McCullough to discuss this weekend's match up against the Dragons",
      "date_posted": "2026-03-31T23:43:21.000Z",
      "photos": ["https://pbs.twimg.com/..."],
      "url": "https://x.com/CozHealsSEN/status/2039126434510418303",
      "quoted_post": null,
      "tagged_users": null,
      "replies": 0,
      "reposts": 4,
      "likes": 7,
      "views": 726,
      "external_url": "https://...",
      "hashtags": null,
      "followers": 814,
      "biography": "QLD brekkie show with Corey Parker & Ian Healy.",
      "posts_count": 4862,
      "profile_image_link": "https://pbs.twimg.com/...",
      "following": 430,
      "is_verified": null,
      "quotes": 0,
      "bookmarks": 0,
      "parent_post_details": {
        "date_posted": "2026-03-31T23:43:21.000Z",
        "post_id": "2039126434510418303",
        "profile_id": "889656535722360833",
        "profile_name": "SENQ Breakfast"
      },
      "videos": null,
      "verification_type": null,
      "user_id": "889656535722360833"
    }
  ]
  ```
</ResponseExample>
