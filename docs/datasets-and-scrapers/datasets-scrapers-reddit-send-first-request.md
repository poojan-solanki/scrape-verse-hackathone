# Send your first Reddit API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/reddit/send-first-request](https://docs.brightdata.com/datasets/scrapers/reddit/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to every Bright Data Reddit Scraper API endpoint with copy-paste examples for posts, comments and subreddit data across 3 surfaces.

This tutorial walks you through sending a synchronous request to each Bright Data Reddit Scraper API endpoint. By the end, you'll have working examples for collecting posts, discovering posts and collecting comments.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/reddit/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.reddit.com/..."}]
```

The only things that change between endpoints are the `dataset_id` and the input shape.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/reddit/async-requests).
</Note>

## Posts, Collect by URL

Scrape a specific Reddit post by its URL.

**Dataset ID:** `gd_lvz8ah06191smkebj4`

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/"}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={"dataset_id": "gd_lvz8ah06191smkebj4", "format": "json"},
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/"}],
  )

  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/" }
      ]),
    }
  );

  const data = await response.json();
  console.log(data);
  ```
</CodeGroup>

You should see a `200` response. This takes 10 to 30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "post_id": "1asdf12",
      "url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/",
      "user_posted": "example_user",
      "title": "How do I start learning Python?",
      "description": "I'm a complete beginner and want to know the best resources...",
      "num_upvotes": 1240,
      "num_comments": 86,
      "date_posted": "2025-03-14T18:22:00Z",
      "tag": "Tutorial",
      "community_name": "learnpython",
      "community_url": "https://www.reddit.com/r/learnpython",
      "community_description": "Subreddit for posting questions...",
      "community_members_num": 1120000,
      "community_rank": "Top 1%",
      "photos": [],
      "videos": []
    }
  ]
  ```
</Accordion>

[Full Posts - Collect by URL schema](/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url)

## Posts, Discover by subreddit URL

Scrape recent posts from a specific subreddit, optionally sorted by `new`, `top` or `hot`.

**Dataset ID:** `gd_lvz8ah06191smkebj4`

<Note>
  Discovery endpoints are best used asynchronously via [`/trigger`](/datasets/scrapers/reddit/async-requests) since they may return many results. The sync example below is for quick testing.
</Note>

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=subreddit_url" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.reddit.com/r/learnpython/", "sort_by": "hot"}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={
          "dataset_id": "gd_lvz8ah06191smkebj4",
          "format": "json",
          "type": "discover_new",
          "discover_by": "subreddit_url",
      },
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"url": "https://www.reddit.com/r/learnpython/", "sort_by": "hot"}],
  )

  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=subreddit_url",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.reddit.com/r/learnpython/", sort_by: "hot" }
      ]),
    }
  );

  const data = await response.json();
  console.log(data);
  ```
</CodeGroup>

[Full Discover by subreddit URL schema](/api-reference/scrapers/social-media-apis/reddit-posts-discover-by-subreddit-url)

## Posts, Discover by keyword

Find Reddit posts matching a search term, filtered by date.

**Dataset ID:** `gd_lvz8ah06191smkebj4`

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=keyword" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"keyword": "machine learning", "date": "Past week", "num_of_posts": 20}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={
          "dataset_id": "gd_lvz8ah06191smkebj4",
          "format": "json",
          "type": "discover_new",
          "discover_by": "keyword",
      },
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"keyword": "machine learning", "date": "Past week", "num_of_posts": 20}],
  )

  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvz8ah06191smkebj4&format=json&type=discover_new&discover_by=keyword",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { keyword: "machine learning", date: "Past week", num_of_posts: 20 }
      ]),
    }
  );

  const data = await response.json();
  console.log(data);
  ```
</CodeGroup>

[Full Discover by keyword schema](/api-reference/scrapers/social-media-apis/reddit-posts-discover-by-keyword)

## Comments, Collect by URL

Scrape all comments from a Reddit post or a specific comment thread, with optional filtering by age.

**Dataset ID:** `gd_lvzdpsdlw09j6t702`

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvzdpsdlw09j6t702&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/", "days_back": 7}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={"dataset_id": "gd_lvzdpsdlw09j6t702", "format": "json"},
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/", "days_back": 7}],
  )

  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvzdpsdlw09j6t702&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.reddit.com/r/learnpython/comments/1asdf12/", days_back: 7 }
      ]),
    }
  );

  const data = await response.json();
  console.log(data);
  ```
</CodeGroup>

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "comment_id": "kabc1de",
      "user_posted": "example_commenter",
      "comment": "Start with the official Python tutorial, it's free and covers all the basics.",
      "date_posted": "2025-03-14T19:02:11Z",
      "num_upvotes": 412,
      "num_replies": 8,
      "replies": [],
      "post_url": "https://www.reddit.com/r/learnpython/comments/1asdf12/",
      "post_id": "1asdf12",
      "post_type": "text",
      "community_name": "learnpython",
      "community_url": "https://www.reddit.com/r/learnpython",
      "is_moderator": false,
      "is_pinned": false,
      "is_locked": false
    }
  ]
  ```
</Accordion>

[Full Comments - Collect by URL schema](/api-reference/scrapers/social-media-apis/reddit-comments-collect-by-url)

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/reddit/async-requests">
    Scrape thousands of posts or run keyword discovery jobs in a single async request.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url">
    Full endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
