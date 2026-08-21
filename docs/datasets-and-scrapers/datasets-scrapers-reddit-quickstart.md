# Reddit scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/reddit/quickstart](https://docs.brightdata.com/datasets/scrapers/reddit/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data Reddit Scraper API and collect your first post, comment thread or subreddit as structured JSON in under 5 minutes from the Control Panel.

This tutorial shows you how to scrape a Reddit post and get structured JSON data using the Bright Data Reddit Scraper API.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start)
* cURL, Python 3 or Node.js 18+ installed

<Steps>
  <Step title="Get your API key">
    Go to the [user settings page](https://brightdata.com/cp/setting/users) in your Bright Data account and copy your API key.

    If you don't have an account yet, [sign up at brightdata.com](https://brightdata.com/cp/start). New users get \$2 free credit for testing.

    <Warning>
      Your API key is shown only once when created. Copy and store it securely.
    </Warning>
  </Step>

  <Step title="Send a request">
    We'll use the **Posts, Collect by URL** endpoint with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

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

    You should see a `200` status code. This takes 10 to 30 seconds.
  </Step>

  <Step title="Review the response">
    The Bright Data Reddit Scraper API returns a JSON array with structured post data:

    ```json theme={null}
    [
      {
        "post_id": "1asdf12",
        "url": "https://www.reddit.com/r/learnpython/comments/1asdf12/how_do_i_start_learning_python/",
        "user_posted": "example_user",
        "title": "How do I start learning Python?",
        "description": "I'm a complete beginner...",
        "num_upvotes": 1240,
        "num_comments": 86,
        "date_posted": "2025-03-14T18:22:00Z",
        "community_name": "learnpython",
        "community_url": "https://www.reddit.com/r/learnpython",
        "community_members_num": 1_120_000,
        "tag": "Tutorial"
      }
    ]
    ```

    Each post object includes post details, community stats, engagement metrics and attached media. See the [full response schema](/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url).
  </Step>
</Steps>

You've successfully scraped your first Reddit post using the Bright Data Reddit Scraper API.

## Common questions

<Accordion title="Can I scrape multiple posts in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 URLs. For larger batches or for discovery by keyword or subreddit, use the [async `/trigger` endpoint](/datasets/scrapers/reddit/async-requests).

  ```json theme={null}
  [
    {"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/"},
    {"url": "https://www.reddit.com/r/python/comments/1bsdf34/"},
    {"url": "https://www.reddit.com/r/programming/comments/1csdf56/"}
  ]
  ```
</Accordion>

<Accordion title="Can I scrape comments from a post?">
  Yes, with the separate Comments dataset. Use dataset ID `gd_lvzdpsdlw09j6t702` and pass the post URL:

  ```bash theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvzdpsdlw09j6t702&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.reddit.com/r/learnpython/comments/1asdf12/"}]'
  ```

  You can also pass `days_back` to limit results to comments posted within the last N days.
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/reddit/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify the Reddit post URL is publicly accessible and correctly formatted. The URL should follow the pattern `https://www.reddit.com/r/{subreddit}/comments/{post_id}/{slug}/`. Private subreddits and deleted posts cannot be scraped.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/reddit/send-first-request">
    Explore every endpoint with full examples in cURL, Python and Node.js.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/reddit/async-requests">
    Scrape hundreds of posts or run keyword discovery in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url">
    Endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
