# Collect Reddit posts by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/reddit-posts-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Reddit posts by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lvz8ah06191smkebj4` to collect **Posts by URL** data.
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
      The URL of the Reddit post to retrieve.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/"},
      {"url": "https://www.reddit.com/r/python/comments/1bsdf34/"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "post_id": "1asdf12",
      "url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/",
      "user_posted": "example_user",
      "title": "How do I start learning Python?",
      "description": "I'm a complete beginner...",
      "num_upvotes": 1240,
      "num_comments": 86,
      "date_posted": "2026-03-14T18:22:00Z",
      "tag": "Tutorial",
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
