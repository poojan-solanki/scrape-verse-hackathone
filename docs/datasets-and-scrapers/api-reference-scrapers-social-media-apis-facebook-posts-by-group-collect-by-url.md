# Collect posts by group URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-posts-by-group-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-posts-by-group-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/facebook-posts-by-group-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Posts by Group URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lz11l67o2cb3r0lkj3` to collect **Facebook posts by group** data.
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
      The URL of the Facebook group to collect posts from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/groups/123456789"},
      {"url": "https://www.facebook.com/groups/987654321"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/groups/532855527252024/posts/2189486054922288/",
      "post_id": "2189486054922288",
      "user_url": "https://www.facebook.com/people/User/61557299394534/",
      "user_username_raw": "EnhleNandie Mhlutshwa",
      "content": null,
      "date_posted": "2026-03-26T19:05:20.000Z",
      "num_comments": 0,
      "num_shares": 0,
      "group_name": "Job Seekers Community",
      "group_id": "532855527252024",
      "group_url": "https://www.facebook.com/groups/532855527252024/",
      "group_category": "Public group",
      "group_logo": "https://...",
      "group_members": 226500,
      "group_created_at": "2019-07-17T07:27:18.000Z",
      "user_is_verified": false,
      "attachments": [],
      "post_type": "Post",
      "likes": null,
      "profile_id": "61557299394534"
    }
  ]
  ```
</ResponseExample>
