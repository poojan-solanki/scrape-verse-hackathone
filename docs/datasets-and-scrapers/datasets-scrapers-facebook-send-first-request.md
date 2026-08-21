# Send your first Facebook API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/facebook/send-first-request](https://docs.brightdata.com/datasets/scrapers/facebook/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to the Bright Data Facebook Scraper API across 9 endpoints with examples for profiles, page posts, marketplace and comments.

This tutorial walks you through sending a synchronous request to each Bright Data Facebook Scraper API endpoint. By the end, you'll have working examples for profiles, page posts, posts, marketplace listings, and comments.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/facebook/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.facebook.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/facebook/async-requests).
</Note>

## How to scrape Facebook profiles

**Dataset ID:** `gd_mf0urb782734ik94dz`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mf0urb782734ik94dz&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/zuck"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "name": "Mark Zuckerberg",
      "url": "https://www.facebook.com/zuck",
      "followers": 120000000,
      "bio": "Building the future...",
      "profile_type": "public_figure",
      "is_verified": true
    }
  ]
  ```
</Accordion>

[Full Profiles response schema](/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url)

## How to scrape Facebook page posts

**Dataset ID:** `gd_lkaxegm826bjpoo9m5`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lkaxegm826bjpoo9m5&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/NASA"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.facebook.com/NASA",
      "post_text": "Exploring the cosmos...",
      "num_comments": 450,
      "date_posted": "2024-04-10T14:30:00.000Z",
      "reactions": 12500,
      "content_type": "Photo"
    }
  ]
  ```
</Accordion>

[Full Page Posts response schema](/api-reference/scrapers/social-media-apis/facebook-pages-posts-collect-by-url)

## Posts by post URL

**Dataset ID:** `gd_lyclm1571iy3mv57zw`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lyclm1571iy3mv57zw&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/zuck/posts/example123"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.facebook.com/zuck/posts/example123",
      "post_text": "Excited to share...",
      "num_comments": 320,
      "date_posted": "2024-05-01T09:00:00.000Z",
      "reactions": 8500,
      "shares": 1200
    }
  ]
  ```
</Accordion>

[Full Posts response schema](/api-reference/scrapers/social-media-apis/facebook-posts-collect-by-url)

## How to scrape Facebook Marketplace

**Dataset ID:** `gd_lvt9iwuh6fbcwmx1a`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lvt9iwuh6fbcwmx1a&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/marketplace/item/123456789"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.facebook.com/marketplace/item/123456789",
      "title": "Vintage Coffee Table",
      "price": "$150",
      "location": "San Francisco, CA",
      "seller_name": "John Doe",
      "description": "Beautiful mid-century modern coffee table..."
    }
  ]
  ```
</Accordion>

[Full Marketplace response schema](/api-reference/scrapers/social-media-apis/facebook-marketplace-collect-by-url)

## How to scrape Facebook comments

**Dataset ID:** `gd_lkay758p1eanlolqw8`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lkay758p1eanlolqw8&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.facebook.com/zuck/posts/example123"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://www.facebook.com/zuck/posts/example123",
      "comment_user": "Jane Smith",
      "comment_date": "2024-05-02T10:15:00.000Z",
      "comment_text": "Great update!",
      "reactions": 12,
      "replies_count": 3
    }
  ]
  ```
</Accordion>

[Full Comments response schema](/api-reference/scrapers/social-media-apis/facebook-comments-collect-by-url)

## Quick reference: dataset IDs

| Endpoint                   | Dataset ID              | URL pattern                               |
| :------------------------- | :---------------------- | :---------------------------------------- |
| Pages Posts by Profile URL | `gd_lkaxegm826bjpoo9m5` | `facebook.com/{page_name}`                |
| Comments                   | `gd_lkay758p1eanlolqw8` | `facebook.com/{user}/posts/{post_id}`     |
| Posts by group URL         | `gd_lz11l67o2cb3r0lkj3` | `facebook.com/groups/{group_id}`          |
| Posts by post URL          | `gd_lyclm1571iy3mv57zw` | `facebook.com/{user}/posts/{post_id}`     |
| Marketplace                | `gd_lvt9iwuh6fbcwmx1a`  | `facebook.com/marketplace/item/{item_id}` |
| Profiles                   | `gd_mf0urb782734ik94dz` | `facebook.com/{username}`                 |
| Pages and Profiles         | `gd_mf124a0511bauquyow` | `facebook.com/{page_or_profile}`          |
| Events                     | `gd_m14sd0to1jz48ppm51` | `facebook.com/events/{event_id}`          |
| Reels by profile URL       | `gd_lyclm3ey2q6rww027t` | `facebook.com/{username}`                 |
| Company Reviews            | `gd_m0dtqpiu1mbcyc2g86` | `facebook.com/{company_page}`             |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/facebook/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/facebook-profiles-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
