# Send your first X (Twitter) API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/twitter/send-first-request](https://docs.brightdata.com/datasets/scrapers/twitter/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 2 Bright Data X (Twitter) Scraper API endpoints with copy-paste examples for profiles and posts collection.

This tutorial walks you through sending a synchronous request to each Bright Data X Scraper API endpoint. By the end, you'll have working examples for profiles and posts.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/twitter/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://x.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/twitter/async-requests).
</Note>

## How to scrape X (Twitter) profiles

**Dataset ID:** `gd_lwxmeb2u1cniijd7t4`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lwxmeb2u1cniijd7t4&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://x.com/elonmusk"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "user_name": "elonmusk",
      "name": "Elon Musk",
      "description": "Read @WallStreetSilv",
      "followers": 214000000,
      "following": 870,
      "number_of_tweets": 52000,
      "is_verified": true,
      "profile_image_link": "https://..."
    }
  ]
  ```
</Accordion>

[Full Profiles response schema](/api-reference/scrapers/social-media-apis/twitter-profiles-collect-by-url)

## How to scrape X (Twitter) posts

**Dataset ID:** `gd_lwxkxvnf1cynvib9co`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lwxkxvnf1cynvib9co&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://x.com/elonmusk/status/1234567890123456789"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://x.com/elonmusk/status/1234567890123456789",
      "user_posted": "elonmusk",
      "description": "Exciting times ahead...",
      "date_posted": "2024-04-03T14:30:00.000Z",
      "likes": 125000,
      "retweets": 18000,
      "replies": 5200,
      "hashtags": ["technology", "innovation"]
    }
  ]
  ```
</Accordion>

[Full Posts response schema](/api-reference/scrapers/social-media-apis/twitter-posts-collect-by-url)

## Quick reference: dataset IDs

| Endpoint | Dataset ID              | URL pattern                    |
| :------- | :---------------------- | :----------------------------- |
| Profiles | `gd_lwxmeb2u1cniijd7t4` | `x.com/{username}`             |
| Posts    | `gd_lwxkxvnf1cynvib9co` | `x.com/{username}/status/{id}` |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/twitter/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/twitter-profiles-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
