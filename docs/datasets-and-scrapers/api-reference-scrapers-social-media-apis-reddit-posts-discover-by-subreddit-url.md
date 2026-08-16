# Discover posts by subreddit URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/reddit-posts-discover-by-subreddit-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/reddit-posts-discover-by-subreddit-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Posts by Subreddit URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lvz8ah06191smkebj4` to collect **Discover by subreddit URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `subreddit_url`.
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
      The URL of the subreddit to collect posts from.
    </ParamField>

    <ParamField type="string">
      The sort order for returned posts.

      One of: `new`, `top`, `hot`
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.reddit.com/r/learnpython/", "sort_by": "hot"},
      {"url": "https://www.reddit.com/r/datascience/", "sort_by": "top"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "post_id": "1csdf56",
      "url": "https://www.reddit.com/r/learnpython/comments/1csdf56/",
      "user_posted": "newbie_dev",
      "title": "Best resources for learning pandas?",
      "description": "I'm about two weeks into Python...",
      "num_upvotes": 312,
      "num_comments": 41,
      "date_posted": "2026-04-05T14:05:00Z",
      "tag": "Help",
      "community_name": "learnpython",
      "community_url": "https://www.reddit.com/r/learnpython",
      "community_description": "Subreddit for posting questions and asking for general advice about your Python code.",
      "community_members_num": 1120000,
      "community_rank": null,
      "related_posts": [],
      "comments": [],
      "photos": [],
      "videos": []
    }
  ]
  ```
</ResponseExample>
