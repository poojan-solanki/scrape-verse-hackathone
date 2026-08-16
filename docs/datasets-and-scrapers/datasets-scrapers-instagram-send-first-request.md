# Send your first Instagram API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/instagram/send-first-request](https://docs.brightdata.com/datasets/scrapers/instagram/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 4 Bright Data Instagram Scraper API endpoints with copy-paste examples for profiles, posts, reels and comments.

This tutorial walks you through sending a synchronous request to each Bright Data Instagram Scraper API endpoint. By the end, you'll have working examples for profiles, posts, reels, and comments.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/instagram/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.instagram.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/instagram/async-requests).
</Note>

## How to scrape Instagram profiles

**Dataset ID:** `gd_l1vikfch901nx3by4`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.instagram.com/instagram"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "user_name": "instagram",
      "full_name": "Instagram",
      "biography": "Discover what's next. ✨",
      "followers": 676000000,
      "following": 500,
      "posts_count": 7800,
      "is_verified": true,
      "profile_pic_url": "https://..."
    }
  ]
  ```
</Accordion>

[Full Profiles response schema](/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url)

## How to scrape Instagram posts

**Dataset ID:** `gd_lk5ns7kz21pck8jpis`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk5ns7kz21pck8jpis&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.instagram.com/p/Cuf4s0MNqNr"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.instagram.com/p/Cuf4s0MNqNr",
      "user_posted": "instagram",
      "description": "Sharing moments that matter...",
      "num_comments": 1250,
      "date_posted": "2024-04-03T14:30:00.000Z",
      "likes": 45230,
      "hashtags": ["photography", "moments"],
      "content_type": "Photo",
      "shortcode": "Cuf4s0MNqNr"
    }
  ]
  ```
</Accordion>

[Full Posts response schema](/api-reference/scrapers/social-media-apis/instagram-posts-collect-by-url)

## How to scrape Instagram reels

**Dataset ID:** `gd_lyclm20il4r5helnj`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lyclm20il4r5helnj&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.instagram.com/reel/C5Rdyj_q7YN/"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.instagram.com/reel/C5Rdyj_q7YN/",
      "user_posted": "instagram",
      "description": "Watch this reel...",
      "num_comments": 320,
      "date_posted": "2024-03-15T10:00:00.000Z",
      "likes": 15000,
      "views": 250000,
      "video_play_count": 500000,
      "length": "15.033",
      "shortcode": "C5Rdyj_q7YN"
    }
  ]
  ```
</Accordion>

[Full Reels response schema](/api-reference/scrapers/social-media-apis/instagram-reels-collect-by-url)

## How to scrape Instagram comments

**Dataset ID:** `gd_ltppn085pokosxh13`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_ltppn085pokosxh13&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.instagram.com/p/Cuf4s0MNqNr"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.instagram.com/p/Cuf4s0MNqNr",
      "comment_user": "user123",
      "comment_user_url": "https://www.instagram.com/user123",
      "comment_date": "2024-04-05T12:30:00.000Z",
      "comment": "Amazing post!",
      "likes_number": 5,
      "replies_number": 2,
      "comment_id": "18168596065410257",
      "post_id": "3851148751604100411"
    }
  ]
  ```
</Accordion>

[Full Comments response schema](/api-reference/scrapers/social-media-apis/instagram-comments-collect-by-url)

## Quick reference: dataset IDs

| Endpoint | Dataset ID              | URL pattern                                                       |
| :------- | :---------------------- | :---------------------------------------------------------------- |
| Profiles | `gd_l1vikfch901nx3by4`  | `instagram.com/{username}`                                        |
| Posts    | `gd_lk5ns7kz21pck8jpis` | `instagram.com/p/{shortcode}`                                     |
| Reels    | `gd_lyclm20il4r5helnj`  | `instagram.com/reel/{shortcode}`                                  |
| Comments | `gd_ltppn085pokosxh13`  | `instagram.com/p/{shortcode}` or `instagram.com/reel/{shortcode}` |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/instagram/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
