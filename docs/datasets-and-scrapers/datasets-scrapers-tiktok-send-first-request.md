# Send your first TikTok API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/tiktok/send-first-request](https://docs.brightdata.com/datasets/scrapers/tiktok/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 5 Bright Data TikTok Scraper API endpoints with copy-paste examples for profiles, posts, comments and shop data.

This tutorial walks you through sending a synchronous request to each Bright Data TikTok Scraper API endpoint. By the end, you'll have working examples for profiles, posts, TikTok Shop, comments, and posts by profile.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/tiktok/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.tiktok.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/tiktok/async-requests).
</Note>

## How to scrape TikTok profiles

**Dataset ID:** `gd_l1villgoiiidt09ci`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1villgoiiidt09ci&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@tiktok"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "nickname": "TikTok",
      "account_id": "tiktok",
      "biography": "Make your day.",
      "followers": 85600000,
      "following": 580,
      "likes": 520000000,
      "videos_count": 1250,
      "is_verified": true,
      "url": "https://www.tiktok.com/@tiktok",
      "profile_pic_url": "https://..."
    }
  ]
  ```
</Accordion>

[Full Profiles response schema](/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url)

## How to scrape TikTok posts

**Dataset ID:** `gd_lu702nij2f790tmv9h`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lu702nij2f790tmv9h&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@tiktok/video/7345678901234567890"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.tiktok.com/@tiktok/video/7345678901234567890",
      "author": "tiktok",
      "description": "Making every moment count #fyp #trending",
      "likes": 245000,
      "comments": 3200,
      "shares": 18500,
      "views": 5200000,
      "date_posted": "2024-04-10T15:30:00.000Z",
      "hashtags": ["fyp", "trending"],
      "video_url": "https://..."
    }
  ]
  ```
</Accordion>

[Full Posts response schema](/api-reference/scrapers/social-media-apis/tiktok-posts-collect-by-url)

## How to scrape TikTok Shop

**Dataset ID:** `gd_m45m1u911dsa4274pi`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m45m1u911dsa4274pi&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@shop/product/1234567890"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.tiktok.com/@shop/product/1234567890",
      "product_name": "Wireless Bluetooth Earbuds",
      "price": 29.99,
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 1850,
      "seller_name": "TechStore Official",
      "category": "Electronics"
    }
  ]
  ```
</Accordion>

[Full TikTok Shop response schema](/api-reference/scrapers/social-media-apis/tiktok-shop-collect-by-url)

## How to scrape TikTok comments

**Dataset ID:** `gd_lkf2st302ap89utw5k`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lkf2st302ap89utw5k&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@tiktok/video/7345678901234567890"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.tiktok.com/@tiktok/video/7345678901234567890",
      "comment_user": "creator_fan",
      "comment_user_url": "https://www.tiktok.com/@creator_fan",
      "comment_date": "2024-04-11T08:15:00.000Z",
      "comment": "This is amazing content!",
      "likes": 42,
      "replies": 3
    }
  ]
  ```
</Accordion>

[Full Comments response schema](/api-reference/scrapers/social-media-apis/tiktok-comments-collect-by-url)

## Posts by Profile Fast API

**Dataset ID:** `gd_m7n5v2gq296pex2f5m`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7n5v2gq296pex2f5m&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.tiktok.com/@tiktok"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.tiktok.com/@tiktok/video/7345678901234567890",
      "author": "tiktok",
      "description": "Making every moment count #fyp",
      "likes": 245000,
      "comments": 3200,
      "shares": 18500,
      "views": 5200000,
      "date_posted": "2024-04-10T15:30:00.000Z"
    },
    {
      "url": "https://www.tiktok.com/@tiktok/video/7345678901234567891",
      "author": "tiktok",
      "description": "New feature alert! #tiktok #newfeature",
      "likes": 180000,
      "comments": 2100,
      "shares": 9500,
      "views": 3800000,
      "date_posted": "2024-04-08T12:00:00.000Z"
    }
  ]
  ```
</Accordion>

[Full Posts by Profile Fast API response schema](/api-reference/scrapers/social-media-apis/tiktok-posts-by-profile-fast-api-collect-by-url)

## Quick reference: dataset IDs

| Endpoint                  | Dataset ID              | URL pattern                         |
| :------------------------ | :---------------------- | :---------------------------------- |
| Profiles                  | `gd_l1villgoiiidt09ci`  | `tiktok.com/@{username}`            |
| Posts                     | `gd_lu702nij2f790tmv9h` | `tiktok.com/@{username}/video/{id}` |
| TikTok Shop               | `gd_m45m1u911dsa4274pi` | `tiktok.com/@shop/product/{id}`     |
| Comments                  | `gd_lkf2st302ap89utw5k` | `tiktok.com/@{username}/video/{id}` |
| Posts by Profile Fast API | `gd_m7n5v2gq296pex2f5m` | `tiktok.com/@{username}`            |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/tiktok/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
