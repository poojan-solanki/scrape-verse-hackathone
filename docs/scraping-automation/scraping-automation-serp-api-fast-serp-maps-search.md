# Fast SERP maps search

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/maps-search](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/maps-search)
> **Category**: `scraping-automation`

---

Use Bright Data Fast SERP (31 languages) for Google Maps via the native proxy interface. Receive compact JSON Maps results suited for real-time applications.

Use Bright Data's Fast SERP service to retrieve compact Maps search results in real time via a native proxy interface.

## Google Maps endpoints

Google Maps Fast SERP supports two response types depending on the URL you target:

* **Maps search results**, a list of places matching a search query, returning an `organic` array
* **Place detail page**, a single place record, returning a `place` object

Both endpoints require the `x-unblock-data-format: parsed_light` request header and the `brd_json=1` URL parameter. Omitting either will result in an unexpected response format.

## Fast Maps Search Request

Fast SERP for Google Maps works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

### Maps search results

```text theme={null}
curl -v --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user username:password \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/maps/search/coffee+shops+new+york/?hl=en&gl=us&brd_json=1"
```

### Place detail page: using Place ID

```text theme={null}
curl -v --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user username:password \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/maps/place/?q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4&hl=en&gl=us&brd_json=1"
```

### Place details page: using Map Link

```text theme={null}
curl -v --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user username:password \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e379c3784bfe3b:0x839c689710299cfc?hl=en&gl=us&brd_json=1"
```

## Response Format

The response is one of two shapes depending on the targeted URL: a search results page returns an `organic` array; a place detail page returns a `place` object. Both use the same `OrganicMapsItem` structure.

### `organic` array / `place` object

Both the items in `organic` and the `place` object share the following fields:

| Field            | Type    | Required | Description                                            |
| ---------------- | ------- | -------- | ------------------------------------------------------ |
| `global_rank`    | integer | Yes      | Rank position of the result on the page                |
| `title`          | string  | No       | Name of the place                                      |
| `address`        | string  | No       | Full address of the place                              |
| `phone`          | string  | No       | Phone number of the place                              |
| `link`           | string  | No       | URL to the place's website                             |
| `map_link`       | string  | No       | URL to the place on Google Maps                        |
| `map_id`         | string  | No       | Google Maps place identifier                           |
| `map_id_encoded` | string  | No       | Encoded version of the Google Maps place identifier    |
| `description`    | string  | No       | Short description of the place                         |
| `price`          | string  | No       | Price range indicator, e.g. `"$$"`                     |
| `rating`         | number  | No       | Average customer rating                                |
| `reviews_cnt`    | number  | No       | Total number of customer reviews                       |
| `latitude`       | number  | No       | Latitude coordinate of the place                       |
| `longitude`      | number  | No       | Longitude coordinate of the place                      |
| `image`          | string  | No       | Primary image URL                                      |
| `original_image` | string  | No       | Original full-resolution image URL                     |
| `thumbnail`      | string  | No       | Thumbnail image URL                                    |
| `open_hours`     | object  | No       | Opening hours keyed by day, e.g. `"Monday": "9am–5pm"` |
| `category`       | array   | No       | List of place categories (see below)                   |
| `images`         | array   | No       | List of place images (see below)                       |
| `menu_images`    | array   | No       | List of menu images (see below)                        |
| `tags`           | array   | No       | List of place attribute tags (see below)               |
| `reviews`        | array   | No       | List of customer reviews (see below)                   |

### `category` items

| Field         | Type   | Required | Description             |
| ------------- | ------ | -------- | ----------------------- |
| `id`          | string | Yes      | Category identifier     |
| `title`       | string | Yes      | Full category name      |
| `title_short` | string | No       | Shortened category name |

### `images` and `menu_images` items

| Field             | Type    | Required | Description                      |
| ----------------- | ------- | -------- | -------------------------------- |
| `image`           | string  | Yes      | Image URL                        |
| `image_width`     | integer | No       | Displayed image width in pixels  |
| `image_height`    | integer | No       | Displayed image height in pixels |
| `original_width`  | integer | No       | Original image width in pixels   |
| `original_height` | integer | No       | Original image height in pixels  |

### `tags` items

| Field               | Type   | Required | Description                               |
| ------------------- | ------ | -------- | ----------------------------------------- |
| `group_id`          | string | Yes      | Identifier of the tag group               |
| `group_title`       | string | Yes      | Display name of the tag group             |
| `key_id`            | string | Yes      | Identifier of the tag key                 |
| `key_title`         | string | Yes      | Display name of the tag key               |
| `value`             | number | No       | Numeric value associated with the tag     |
| `value_title`       | string | No       | Display label for the tag value           |
| `value_title_short` | string | No       | Shortened display label for the tag value |

### `reviews` items

| Field                       | Type             | Description                                    |
| --------------------------- | ---------------- | ---------------------------------------------- |
| `author`                    | string           | Name of the reviewer                           |
| `avatar`                    | string           | URL of the reviewer's profile image            |
| `author_reviews_cnt`        | number           | Total number of reviews written by this author |
| `author_photos_cnt`         | number           | Total number of photos uploaded by this author |
| `rating`                    | number           | Rating given in this review                    |
| `text`                      | string           | Review text content                            |
| `timestamp_added`           | string           | Date/time the review was posted                |
| `timestamp_edited`          | string           | Date/time the review was last edited           |
| `link`                      | string           | URL to the review                              |
| `source`                    | string           | Platform source of the review                  |
| `source_logo`               | string           | URL of the source platform's logo              |
| `images`                    | array of strings | List of image URLs attached to the review      |
| `response_text`             | string           | Owner's reply to the review                    |
| `response_timestamp_added`  | string           | Date/time the owner's reply was posted         |
| `response_timestamp_edited` | string           | Date/time the owner's reply was last edited    |

## Example Response

### Maps search results

```text theme={null}
{
  "organic": [
    {
      "global_rank": 1,
      "title": "Example Coffee Co.",
      "address": "123 Main St, New York, NY 10001",
      "phone": "+1 212-555-0100",
      "link": "https://www.example-coffee.com",
      "map_link": "https://www.google.com/maps/place/example-coffee",
      "map_id": "0x6b12ae37b47f5b37:0x8eaddfcd1b32ca52",
      "map_id_encoded": "ChIJN1t_tDeuEmsRUsoyG83frY4",
      "description": "Specialty coffee shop serving single-origin espresso and pour-overs.",
      "price": "$$",
      "rating": 4.7,
      "reviews_cnt": 1280,
      "latitude": 40.7128,
      "longitude": -74.0060,
      "thumbnail": "https://www.example-coffee.com/images/thumb.jpg",
      "open_hours": {
        "Monday": "7am–7pm",
        "Tuesday": "7am–7pm",
        "Wednesday": "7am–7pm",
        "Thursday": "7am–7pm",
        "Friday": "7am–8pm",
        "Saturday": "8am–8pm",
        "Sunday": "9am–6pm"
      },
      "category": [
        { "id": "coffee_shop", "title": "Coffee Shop", "title_short": "Coffee" }
      ],
      "tags": [
        {
          "group_id": "service_options",
          "group_title": "Service options",
          "key_id": "dine_in",
          "key_title": "Dine-in",
          "value": 1,
          "value_title": "Available",
          "value_title_short": "Yes"
        }
      ],
      "reviews": [
        {
          "author": "Jane D.",
          "avatar": "https://example.com/avatars/jane.jpg",
          "author_reviews_cnt": 42,
          "author_photos_cnt": 15,
          "rating": 5,
          "text": "Best espresso in the city, hands down.",
          "timestamp_added": "2025-03-10T09:00:00Z",
          "source": "Google",
          "source_logo": "https://www.google.com/images/google-logo.png",
          "response_text": "Thank you so much, Jane! See you soon.",
          "response_timestamp_added": "2025-03-11T10:00:00Z"
        }
      ]
    }
  ]
}
```

### Place detail page

```text theme={null}
{
  "place": {
    "global_rank": 1,
    "title": "Example Coffee Co.",
    "address": "123 Main St, New York, NY 10001",
    "phone": "+1 212-555-0100",
    "link": "https://www.example-coffee.com",
    "map_link": "https://www.google.com/maps/place/example-coffee",
    "map_id": "0x6b12ae37b47f5b37:0x8eaddfcd1b32ca52",
    "map_id_encoded": "ChIJN1t_tDeuEmsRUsoyG83frY4",
    "description": "Specialty coffee shop serving single-origin espresso and pour-overs.",
    "price": "$$",
    "rating": 4.7,
    "reviews_cnt": 1280,
    "latitude": 40.7128,
    "longitude": -74.0060,
    "thumbnail": "https://www.example-coffee.com/images/thumb.jpg",
    "images": [
      {
        "image": "https://www.example-coffee.com/images/interior.jpg",
        "image_width": 800,
        "image_height": 600,
        "original_width": 1600,
        "original_height": 1200
      }
    ],
    "open_hours": {
      "Monday": "7am–7pm",
      "Friday": "7am–8pm",
      "Saturday": "8am–8pm",
      "Sunday": "9am–6pm"
    },
    "category": [
      { "id": "coffee_shop", "title": "Coffee Shop", "title_short": "Coffee" }
    ]
  }
}
```

Response schema, Maps search results: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_maps\_search.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_maps_search.schema.json)

Response schema, place detail page: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_maps\_place.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_maps_place.schema.json)

## Supported parameters

| Parameter     | Description                                | Example                | Notes                                                                             |
| ------------- | ------------------------------------------ | ---------------------- | --------------------------------------------------------------------------------- |
| `gl`          | Two-letter country code for search country | `gl=us`                |                                                                                   |
| `hl`          | Two-letter language code for page language | `hl=en`                |                                                                                   |
| `brd_json`    | **Required.**`1` = parsed JSON             | `brd_json=1`           |                                                                                   |
| `search term` | Search query term embedded in URL          | `coffee+shops+near+me` | Query size must be under 8,000 charachters. <br />Longer queries fail with error. |

***
