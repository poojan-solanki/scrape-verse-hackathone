# Send your first YouTube API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/youtube/send-first-request](https://docs.brightdata.com/datasets/scrapers/youtube/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 3 Bright Data YouTube Scraper API endpoints with copy-paste examples for channels, videos and comments collection.

This tutorial walks you through sending a synchronous request to each Bright Data YouTube Scraper API endpoint. By the end, you'll have working examples for channels, videos, and comments.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/youtube/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.youtube.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/youtube/async-requests).
</Note>

## How to scrape YouTube channels

**Dataset ID:** `gd_lk538t2k2p1k3oos71`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk538t2k2p1k3oos71&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.youtube.com/@MrBeast"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "channel_name": "MrBeast",
      "channel_url": "https://www.youtube.com/@MrBeast",
      "subscribers": 358000000,
      "total_videos": 850,
      "total_views": 50000000000,
      "description": "...",
      "is_verified": true
    }
  ]
  ```
</Accordion>

[Full Channels response schema](/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url)

## How to scrape YouTube videos

**Dataset ID:** `gd_lk56epmy2i5g7lzu0k`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk56epmy2i5g7lzu0k&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "Rick Astley - Never Gonna Give You Up",
      "channel_name": "Rick Astley",
      "views": 1500000000,
      "likes": 16000000,
      "date_posted": "2009-10-25T00:00:00.000Z",
      "duration": "3:33",
      "description": "...",
      "num_comments": 2700000
    }
  ]
  ```
</Accordion>

[Full Videos response schema](/api-reference/scrapers/social-media-apis/youtube-videos-collect-by-url)

## How to scrape YouTube comments

**Dataset ID:** `gd_lk9q0ew71spt1mxywf`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk9q0ew71spt1mxywf&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "comment_user": "user123",
      "comment_user_url": "https://www.youtube.com/@user123",
      "comment_date": "2024-04-05T12:30:00.000Z",
      "comment": "This song never gets old!",
      "likes": 250,
      "replies": 12,
      "comment_id": "UgyKz0..."
    }
  ]
  ```
</Accordion>

[Full Comments response schema](/api-reference/scrapers/social-media-apis/youtube-comments-collect-by-url)

## Quick reference: dataset IDs

| Endpoint | Dataset ID              | URL pattern                      |
| :------- | :---------------------- | :------------------------------- |
| Videos   | `gd_lk56epmy2i5g7lzu0k` | `youtube.com/watch?v={video_id}` |
| Channels | `gd_lk538t2k2p1k3oos71` | `youtube.com/@{handle}`          |
| Comments | `gd_lk9q0ew71spt1mxywf` | `youtube.com/watch?v={video_id}` |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/youtube/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
