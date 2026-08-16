# Parsed JSON results with SERP API

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/parsed-json-results/parsing-search-results](https://docs.brightdata.com/scraping-automation/serp-api/parsed-json-results/parsing-search-results)
> **Category**: `scraping-automation`

---

Use Bright Data SERP API parsing to convert raw HTML responses into structured JSON for Google and Bing. Covers 12 countries.

## What is Parsing?

[Parsing](https://brightdata.com/blog/web-data/what-is-data-parsing) for SERP API is the process of transforming a raw HTML response into a **structured JSON** with fields and values of data. This advanced parsing functionality is supported specifically for Google & Bing.

When parsing is activated, data from SERP HTMLs are further structured into usable fields and values (such as, `rank`, `link`, `title`, `description`, `rating`, and dozens more fields) enabling you to monitor competitor SERP rankings, analyze keyword trends, and gather valuable market insights.

## Which type of responses does Bright Data SERP provide?

Bright Data provides the following parsing options:

1. Raw HTML: no parsing at all. Get the HTML response as is.
2. Full JSON: our full interpertation of Google's SERP HTML to JSON.
3. Light JSON: a subset of full JSON, including only the organic results and google's "Top Stories" .
4. Parsed Bing: our full interpertation of Bing's SERP HTML to JSON.
5. Markdown: our full interpertation of Google's and Bing's SERP HTML to markdown `*.md` file.
6. Screenshot: an image capture of the SERP HTML page as interperted by a browser.

## Overriding default configuration

In order to override default data format, learn how to use the designated header parameter here: [https://docs.brightdata.com/scraping-automation/serp-api/features](/scraping-automation/serp-api/features)

***

## Google response schema: Light JSON

This schema usually returns twice as fast as the Full JSON. It includes 10 organic reults and covers less components than full JSON.

## Response Format

A successful response may contain the following top-level fields depending on the query. Only `organic` is guaranteed in every response.

***

### `general` object

Returned in every Light JSON response. Reports the query you sent and the query Google actually ran, which lets you detect when Google truncates a search.

| Field            | Type   | Description                                                                                                                |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `query`          | string | The search query you submitted                                                                                             |
| `detected_query` | string | The query Google actually returned results for. Differs from `query` when Google corrects spelling or truncates the search |

<Note>
  If `detected_query` differs from `query`, check for a `spelling` object in the response. If `spelling` is present, the difference is due to automatic spelling correction and the response is valid. If `spelling` is absent, the query was cloaked and results were returned for a truncated version of the original query. See [How to detect query truncation](/scraping-automation/serp-api/debugging#how-to-detect-query-truncation).

  By default, cloaked responses are not returned as data: the request fails with the `unexpected_q` error and is not billed. You will only receive responses where `detected_query` differs without a `spelling` object if you enabled the `return_mismatch` option. See [Handling query mismatches](/scraping-automation/serp-api/debugging#handling-query-mismatches-unexpected_q) on the debugging page.
</Note>

***

### `spelling` object

Returned in a Light JSON response only when Google applies or suggests a spelling correction. All fields are nullable and appear only when Google provides that variant.

| Field                 | Type           | Description                                                           |
| --------------------- | -------------- | --------------------------------------------------------------------- |
| `original_text`       | string \| null | The original query keyword before correction                          |
| `original_link`       | string \| null | Google search URL for the original query                              |
| `auto_corrected_text` | string \| null | The corrected keyword Google searched instead                         |
| `auto_corrected_link` | string \| null | Google search URL for the corrected query                             |
| `auto_included_text`  | string \| null | Term Google automatically included in the search                      |
| `auto_included_link`  | string \| null | Google search URL for the auto-included term                          |
| `suggested_text`      | string \| null | Keyword Google suggests ("Did you mean") without changing the results |
| `suggested_link`      | string \| null | Google search URL for the suggested query                             |
| `original_empty`      | boolean        | `true` when Google returned no results for the original query         |

***

### `organic` array, required

The primary list of web search results.

| Field         | Type    | Required | Description                                |
| ------------- | ------- | -------- | ------------------------------------------ |
| `global_rank` | integer | Yes      | Rank position of the result on the page    |
| `title`       | string  | No       | Title of the result                        |
| `link`        | string  | No       | URL of the result page                     |
| `description` | string  | No       | Snippet/summary shown in the search result |
| `image`       | string  | No       | Image associated with the result           |
| `extensions`  | array   | No       | Site links or other extensions (see below) |

#### `extensions` items

| Field         | Type    | Required | Description                               |
| ------------- | ------- | -------- | ----------------------------------------- |
| `type`        | string  | Yes      | Extension type, e.g. `"site_link"`        |
| `text`        | string  | No       | Anchor text of the extension link         |
| `link`        | string  | No       | URL of the extension link                 |
| `description` | string  | No       | Description text, if available            |
| `extended`    | boolean | No       | Whether the extension is in expanded form |

***

### `top_ads` / `bottom_ads` arrays

Paid advertisement results appearing above or below organic results.

| Field           | Type    | Required | Description                                          |
| --------------- | ------- | -------- | ---------------------------------------------------- |
| `global_rank`   | integer | Yes      | Rank position of the ad on the page                  |
| `title`         | string  | No       | Ad headline                                          |
| `link`          | string  | No       | Destination URL of the ad                            |
| `display_link`  | string  | No       | Displayed URL shown in the ad                        |
| `referral_link` | string  | No       | Referral tracking URL                                |
| `description`   | string  | No       | Ad description text                                  |
| `extensions`    | array   | No       | Ad extensions (same structure as organic extensions) |

***

### `top_stories` object

Google's Top Stories news carousel. Contains a `heading` label and an `items` array of inline news items.

| Field     | Type   | Required | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| `heading` | string | No       | Section heading, e.g. `"Top Stories"` |
| `items`   | array  | No       | List of inline news items (see below) |
| `posts`   | array  | No       | List of post items (see below)        |

#### `top_stories.items` items

| Field         | Type    | Required | Description                           |
| ------------- | ------- | -------- | ------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the item on the page |
| `title`       | string  | No       | Headline of the article               |
| `link`        | string  | No       | URL of the article                    |
| `story`       | string  | No       | Short summary or excerpt              |
| `image`       | string  | No       | Thumbnail image URL                   |

***

### `article_sets` array

Grouped article clusters organized by topic, each containing a `heading` label and an `items` array of inline news items. Not guaranteed to appear in every response, your implementation should handle its absence gracefully.

| Field     | Type   | Required | Description                                                       |
| --------- | ------ | -------- | ----------------------------------------------------------------- |
| `heading` | string | No       | Topic heading for the article cluster                             |
| `items`   | array  | No       | List of inline news items (same structure as `top_stories.items`) |
| `posts`   | array  | No       | List of post items (see below)                                    |

***

### `news` array

News results embedded in the search page.

| Field         | Type    | Required | Description                             |
| ------------- | ------- | -------- | --------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page |
| `title`       | string  | No       | Headline of the article                 |
| `link`        | string  | No       | URL of the article                      |
| `source`      | string  | No       | Publisher name                          |
| `source_logo` | string  | No       | Publisher logo URL                      |
| `date`        | string  | No       | Publication date/time                   |
| `description` | string  | No       | Article snippet                         |
| `image`       | string  | No       | Thumbnail image URL                     |

***

### `videos` array

Video results embedded in the search page.

| Field         | Type    | Required | Description                             |
| ------------- | ------- | -------- | --------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page |
| `title`       | string  | No       | Video title                             |
| `link`        | string  | No       | URL to the video                        |

***

### `shorts` array

Short-form video results embedded in the search page.

| Field         | Type    | Required | Description                             |
| ------------- | ------- | -------- | --------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page |
| `title`       | string  | No       | Title of the short video                |
| `link`        | string  | No       | URL to the short video                  |
| `image`       | string  | No       | Thumbnail image URL                     |

***

### `images` array

Image results embedded in the search page.

| Field             | Type    | Required | Description                             |
| ----------------- | ------- | -------- | --------------------------------------- |
| `global_rank`     | integer | Yes      | Rank position of the result on the page |
| `title`           | string  | No       | Image title                             |
| `link`            | string  | No       | URL of the source page                  |
| `image`           | string  | No       | Thumbnail image URL                     |
| `original_image`  | string  | No       | Full-resolution image URL               |
| `image_width`     | integer | No       | Displayed image width in pixels         |
| `image_height`    | integer | No       | Displayed image height in pixels        |
| `original_width`  | integer | No       | Original image width in pixels          |
| `original_height` | integer | No       | Original image height in pixels         |
| `blurred`         | boolean | No       | Whether the image is blurred            |
| `is_hidden`       | boolean | No       | Whether the images is hidden            |

***

### `shopping` array

Shopping results embedded within web search results.

| Field         | Type    | Required | Description                                   |
| ------------- | ------- | -------- | --------------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page       |
| `price`       | string  | Yes      | Displayed price of the product                |
| `link`        | string  | Yes      | URL to the product page                       |
| `title`       | string  | No       | Product name                                  |
| `shop`        | string  | No       | Merchant name                                 |
| `old_price`   | string  | No       | Original price before discount, if applicable |
| `rating`      | number  | No       | Product rating                                |
| `reviews_cnt` | integer | No       | Number of reviews                             |
| `image`       | string  | No       | Product image URL                             |

***

### `snack_pack_map` object

The map image associated with the local pack results.

| Field   | Type   | Description        |
| ------- | ------ | ------------------ |
| `image` | string | Map image URL      |
| `link`  | string | URL to Google Maps |

***

### `snack_pack` array

Local business results shown in the map pack.

| Field                 | Type             | Required | Description                                    |
| --------------------- | ---------------- | -------- | ---------------------------------------------- |
| `global_rank`         | integer          | Yes      | Rank position of the result on the page        |
| `name`                | string           | No       | Business name                                  |
| `link`                | string           | No       | URL to the business website                    |
| `cid`                 | string           | No       | Google Customer ID of the business             |
| `site`                | string           | No       | Business website domain                        |
| `address`             | string           | No       | Business address                               |
| `phone`               | string           | No       | Phone number                                   |
| `maps_link`           | string           | No       | URL to the business on Google Maps             |
| `rating`              | number           | No       | Average customer rating                        |
| `reviews_cnt`         | number           | No       | Total number of reviews                        |
| `work_status`         | string           | No       | Current open/closed status                     |
| `work_status_details` | string           | No       | Detailed status, e.g. `"Open until 10:00 PM"`  |
| `summary`             | string           | No       | Short description of the business              |
| `tags`                | array of strings | No       | Attribute tags, e.g. `["Dine-in", "Takeaway"]` |
| `image`               | string           | No       | Business image URL                             |

***

### `overview` object

Knowledge panel overview for an entity, parsed from featured snippet elements.

| Field   | Type   | Description                        |
| ------- | ------ | ---------------------------------- |
| `title` | string | Entity name                        |
| `kgmid` | string | Google Knowledge Graph ID          |
| `items` | array  | List of overview items (see below) |

#### `overview.items` items

| Field       | Type             | Description                             |
| ----------- | ---------------- | --------------------------------------- |
| `type`      | string           | Item type, e.g. `"fact"`, `"image"`     |
| `attrid`    | string           | Attribute identifier from Google's data |
| `title`     | string           | Label of the attribute                  |
| `values`    | array of strings | Attribute values                        |
| `href`      | string           | URL associated with the attribute       |
| `source`    | string           | Source name                             |
| `image`     | string           | Image URL, if applicable                |
| `image_alt` | string           | Alt text for the image                  |

***

### `perspectives` array

Perspective results from forums, social media, and editorial sources.

| Field         | Type    | Required | Description                             |
| ------------- | ------- | -------- | --------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page |
| `title`       | string  | No       | Perspective title                       |
| `link`        | string  | No       | URL to the full post                    |
| `image`       | string  | No       | Image URL                               |

***

### `latest_posts` array

Latest social or editorial posts widget.

| Field         | Type    | Required | Description                             |
| ------------- | ------- | -------- | --------------------------------------- |
| `global_rank` | integer | Yes      | Rank position of the result on the page |
| `title`       | string  | No       | Post title                              |
| `link`        | string  | No       | URL to the post                         |
| `image`       | string  | No       | Post image URL                          |

***

## Example Response

```JSON theme={null}
{
  "general": {
    "query": "pizza",
    "detected_query": "pizza"
  },
  "organic": [
    {
      "global_rank": 1,
      "title": "Pizza - Wikipedia",
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "description": "Pizza is an Italian dish consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/pizza.jpg/220px.jpg",
      "extensions": [
        { "type": "site_link", "text": "Neapolitan pizza", "link": "https://en.wikipedia.org/wiki/Neapolitan_pizza", "extended": false },
        { "type": "site_link", "text": "Pizzeria", "link": "https://en.wikipedia.org/wiki/Pizzeria", "extended": false }
      ]
    },
    {
      "global_rank": 2,
      "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
      "link": "https://www.pizzahut.com/",
      "description": "Order pizza online for fast delivery or carryout from a store near you.",
      "extensions": [
        { "type": "site_link", "text": "Menu", "link": "https://www.pizzahut.com/menu", "extended": false }
      ]
    },
    {
      "global_rank": 3,
      "title": "Domino's Pizza - Order Online for Delivery or Carryout",
      "link": "https://www.dominos.com/",
      "description": "Order Domino's pizza online for delivery or carryout. Find deals, coupons, and track your order in real time.",
      "extensions": []
    }
  ],
  "top_ads": [
    {
      "global_rank": 4,
      "title": "Order Pizza Online — Fast Delivery Guaranteed",
      "link": "https://www.example-pizza-ad.com/order",
      "display_link": "www.example-pizza-ad.com",
      "referral_link": "https://www.example-pizza-ad.com/ref=google",
      "description": "Hot fresh pizza delivered to your door in 30 minutes or less.",
      "extensions": [
        { "type": "site_link", "text": "Order Now", "link": "https://www.example-pizza-ad.com/order" }
      ]
    }
  ],
  "top_stories": {
    "heading": "Top Stories",
    "items": [
      {
        "global_rank": 5,
        "title": "NYC Pizza Festival Returns for Its Biggest Year Yet",
        "link": "https://www.example-news.com/nyc-pizza-festival-2026",
        "story": "The annual NYC Pizza Festival is back with over 50 vendors and live entertainment.",
        "image": "https://www.example-news.com/images/pizza-festival.jpg"
      },
      {
        "global_rank": 6,
        "title": "The Science Behind the Perfect Pizza Crust",
        "link": "https://www.another-outlet.com/pizza-crust-science",
        "story": "Researchers reveal the chemistry that makes a pizza crust perfectly crispy.",
        "image": "https://www.another-outlet.com/images/pizza-crust.jpg"
      }
    ]
  },
  "article_sets": [
    {
      "heading": "Latest pizza news",
      "items": [
        {
          "global_rank": 7,
          "title": "World Record Pizza Baked in Naples",
          "link": "https://www.example-news.com/world-record-pizza",
          "story": "A team of chefs in Naples broke the world record for the longest pizza ever made.",
          "image": "https://www.example-news.com/images/record-pizza.jpg"
        }
      ]
    }
  ],
  "news": [
    {
      "global_rank": 8,
      "title": "Pizza Sales Surge as Comfort Food Trend Continues",
      "link": "https://www.example-business.com/pizza-sales-surge",
      "source": "Example Business News",
      "source_logo": "https://www.example-business.com/logo.png",
      "date": "3 hours ago",
      "description": "Pizza delivery and carryout sales have hit record highs this quarter.",
      "image": "https://www.example-business.com/images/pizza-sales.jpg"
    }
  ],
  "videos": [
    {
      "global_rank": 9,
      "title": "How to Make Perfect Homemade Pizza",
      "link": "https://www.youtube.com/watch?v=abc123"
    },
    {
      "global_rank": 10,
      "title": "Classic New York Pizza At Home",
      "link": "https://www.youtube.com/watch?v=def456"
    }
  ],
  "shorts": [
    {
      "global_rank": 11,
      "title": "60-Second Pizza Dough Hack",
      "link": "https://www.youtube.com/shorts/xyz789",
      "image": "https://i.ytimg.com/vi/xyz789/hqdefault.jpg"
    }
  ],
  "images": [
    {
      "global_rank": 12,
      "title": "Classic Margherita Pizza",
      "link": "https://www.example-recipe.com/margherita",
      "image": "https://www.example-recipe.com/images/margherita-thumb.jpg",
      "original_image": "https://www.example-recipe.com/images/margherita-full.jpg",
      "image_width": 400,
      "image_height": 300,
      "original_width": 1200,
      "original_height": 900,
      "blurred": false
    }
  ],
  "shopping": [
    {
      "global_rank": 13,
      "title": "Ooni Koda 16 Gas Powered Pizza Oven",
      "link": "https://www.example-store.com/ooni-koda-16",
      "price": "$599.00",
      "old_price": "$699.00",
      "shop": "Example Store",
      "rating": 4.8,
      "reviews_cnt": 3120,
      "image": "https://www.example-store.com/images/ooni-koda.jpg"
    }
  ],
  "snack_pack_map": {
    "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13",
    "link": "https://www.google.com/maps/search/pizza+near+me"
  },
  "snack_pack": [
    {
      "global_rank": 14,
      "name": "Joe's Pizza",
      "link": "https://www.joespizzanyc.com",
      "cid": "12345678901234567",
      "site": "joespizzanyc.com",
      "address": "7 Carmine St, New York, NY 10014",
      "phone": "+1 212-366-1182",
      "maps_link": "https://www.google.com/maps/place/Joe%27s+Pizza",
      "rating": 4.7,
      "reviews_cnt": 5230,
      "work_status": "Open",
      "work_status_details": "Open until 4:00 AM",
      "summary": "Iconic NY pizza slice joint",
      "tags": ["Dine-in", "Takeaway", "No delivery"],
      "image": "https://www.joespizzanyc.com/images/storefront.jpg"
    }
  ],
  "overview": {
    "title": "Pizza",
    "kgmid": "/m/0663v",
    "items": [
      { "type": "fact", "attrid": "place_of_origin", "title": "Place of origin", "values": ["Naples, Italy"], "href": "https://en.wikipedia.org/wiki/Naples", "source": "Wikipedia" },
      { "type": "fact", "attrid": "main_ingredients", "title": "Main ingredients", "values": ["Dough", "Tomato sauce", "Mozzarella", "Toppings"], "href": "" },
      { "type": "image", "attrid": "image", "title": "Pizza", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/pizza.jpg/220px.jpg", "image_alt": "A classic Margherita pizza" }
    ]
  },
  "perspectives": [
    {
      "global_rank": 15,
      "title": "Why Neapolitan Pizza is the Gold Standard",
      "link": "https://www.reddit.com/r/pizza/comments/example",
      "image": "https://www.reddit.com/images/pizza-post.jpg"
    }
  ],
  "latest_posts": [
    {
      "global_rank": 16,
      "title": "I tried 30 NYC pizza slices in one weekend — here's my ranking",
      "link": "https://www.example-blog.com/nyc-pizza-ranking",
      "image": "https://www.example-blog.com/images/pizza-ranking.jpg"
    }
  ],
  "bottom_ads": [
    {
      "global_rank": 17,
      "title": "Best Pizza Deals Online — Order Now",
      "link": "https://www.example-pizza-ad2.com/order",
      "display_link": "www.example-pizza-ad2.com",
      "referral_link": "https://www.example-pizza-ad2.com/ref=google",
      "description": "Find the best pizza deals in your area. Fast delivery, great prices.",
      "extensions": []
    }
  ]
}
```

Response schema: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_search.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_search.schema.json)

***

## Google response schema: Full JSON

A successful Google Search response is a JSON object that may contain the following top-level fields depending on the query and search context.

Response schema: [https://api.brightdata.com/data\_schemas/serp/google\_search.schema.json](https://api.brightdata.com/data_schemas/serp/google_search.schema.json)

***

### `general` object

Metadata about the search request and results.

| Field            | Type    | Description                                                                                                                |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `query`          | string  | The search query you submitted                                                                                             |
| `detected_query` | string  | The query Google actually returned results for. Differs from `query` when Google corrects spelling or truncates the search |
| `results_cnt`    | integer | Total number of results reported by Google                                                                                 |
| `search_time`    | number  | Time taken by Google to process the search, in seconds                                                                     |
| `language`       | string  | Language of the search results                                                                                             |
| `country`        | string  | Country name associated with the search                                                                                    |
| `country_code`   | string  | Two-letter country code                                                                                                    |
| `search_type`    | string  | Type of search, e.g. `"text"`, `"shopping"`                                                                                |
| `is_mobile`      | boolean | Whether the request was made as a mobile device                                                                            |
| `is_empty`       | boolean | Whether the results page returned no results                                                                               |
| `consent_type`   | string  | Consent mode applied to the request                                                                                        |

<Note>
  When `detected_query` differs from `query`, check for a `spelling` object to tell a genuine spelling correction apart from a truncated (cloaked) query. By default, cloaked responses fail with the `unexpected_q` error (not billed) instead of returning data; to receive them anyway, enable `return_mismatch`. See [Handling query mismatches](/scraping-automation/serp-api/debugging#handling-query-mismatches-unexpected_q) on the debugging page.
</Note>

***

### `input` object

Details about the original request.

| Field          | Type   | Description                             |
| -------------- | ------ | --------------------------------------- |
| `original_url` | string | The URL that was requested              |
| `user_agent`   | string | User agent string used for the request  |
| `request_id`   | string | Bright Data internal request identifier |

***

### `organic` array

The primary list of web search results.

| Field                       | Type             | Description                                            |
| --------------------------- | ---------------- | ------------------------------------------------------ |
| `link`                      | string           | URL of the result page                                 |
| `amp_link`                  | string           | AMP version URL, if available                          |
| `title`                     | string           | Title of the result                                    |
| `display_link`              | string           | Displayed URL shown in the result                      |
| `source`                    | string           | Source name                                            |
| `description`               | string           | Snippet shown in the search result                     |
| `snippet_highlighted_words` | array of strings | Words highlighted in the snippet                       |
| `last_modified_date`        | string           | Last modified date of the page, if available           |
| `icon`                      | string           | Favicon of the result                                  |
| `image`                     | string           | Image associated with the result                       |
| `thumbnail`                 | string           | Thumbnail image URL                                    |
| `extensions`                | array            | Site links or other extensions (see below)             |
| `subresults`                | array            | Indented sub-results under the main result (see below) |
| `similar_link`              | string           | Link to similar pages                                  |
| `cached_link`               | string           | Link to Google's cached version                        |
| `translate_link`            | string           | Link to translated version                             |
| `global_rank`               | integer          | Rank position of the result on the page                |

#### `extensions` items

| Field         | Type    | Description                               |
| ------------- | ------- | ----------------------------------------- |
| `type`        | string  | Extension type, e.g. `"site_link"`        |
| `text`        | string  | Anchor text                               |
| `link`        | string  | URL of the extension link                 |
| `description` | string  | Description text, if available            |
| `extended`    | boolean | Whether the extension is in expanded form |
| `inline`      | boolean | Whether the extension is displayed inline |

#### `subresults` items

| Field          | Type    | Description                     |
| -------------- | ------- | ------------------------------- |
| `link`         | string  | URL of the sub-result           |
| `title`        | string  | Title of the sub-result         |
| `description`  | string  | Snippet of the sub-result       |
| `display_link` | string  | Displayed URL of the sub-result |
| `global_rank`  | integer | Rank position of the sub-result |

***

### `top_ads` / `bottom_ads` arrays

Paid advertisement results appearing above or below organic results.

| Field           | Type    | Description                                          |
| --------------- | ------- | ---------------------------------------------------- |
| `title`         | string  | Ad headline                                          |
| `link`          | string  | Destination URL of the ad                            |
| `display_link`  | string  | Displayed URL shown in the ad                        |
| `referral_link` | string  | Referral tracking URL                                |
| `description`   | string  | Ad description text                                  |
| `phone`         | string  | Phone number shown in the ad, if any                 |
| `deal_link`     | string  | Link to a deal associated with the ad                |
| `deal_text`     | string  | Deal text, if any                                    |
| `image`         | string  | Image shown in the ad                                |
| `extensions`    | array   | Ad extensions (same structure as organic extensions) |
| `global_rank`   | integer | Rank position of the ad                              |

***

### `top_pla` / `bottom_pla` / `jackpot_pla` arrays

Product Listing Ads (shopping ads) appearing at the top, bottom, or in a prominent carousel.

| Field           | Type             | Description                                                                  |
| --------------- | ---------------- | ---------------------------------------------------------------------------- |
| `title`         | string           | Product name                                                                 |
| `link`          | string           | URL to the product page                                                      |
| `referral_link` | string           | Referral tracking URL                                                        |
| `price`         | string           | Displayed price                                                              |
| `old_price`     | string           | Original price before discount, if applicable                                |
| `shop`          | string           | Merchant name                                                                |
| `shipping`      | string           | Shipping information                                                         |
| `rating`        | number           | Product rating                                                               |
| `reviews_cnt`   | integer          | Number of reviews                                                            |
| `extensions`    | array of strings | Additional labels or badges                                                  |
| `image`         | string           | Product image URL                                                            |
| `view_all`      | boolean          | Whether this is a "view all" sentinel row that links to the full result list |
| `global_rank`   | integer          | Rank position of the item                                                    |

***

### `shopping` array

Shopping results embedded within web search results.

| Field            | Type    | Description                                       |
| ---------------- | ------- | ------------------------------------------------- |
| `title`          | string  | Product name                                      |
| `link`           | string  | URL to the product page                           |
| `shop_link`      | string  | URL to the merchant's store page                  |
| `description`    | string  | Product description                               |
| `price`          | string  | Displayed price                                   |
| `old_price`      | string  | Original price before discount, if applicable     |
| `shop`           | string  | Merchant name                                     |
| `shipping`       | string  | Shipping information                              |
| `rating`         | number  | Product rating                                    |
| `reviews_cnt`    | integer | Number of reviews                                 |
| `trusted_store`  | boolean | Whether the merchant is marked as a trusted store |
| `compare_prices` | string  | Link or label for comparing prices                |
| `image`          | string  | Product image URL                                 |
| `referral_link`  | string  | Referral tracking URL                             |
| `global_rank`    | integer | Rank position of the item                         |

***

### `news` array

News results embedded in the search page.

| Field         | Type    | Description                 |
| ------------- | ------- | --------------------------- |
| `title`       | string  | Headline of the article     |
| `link`        | string  | URL of the article          |
| `source`      | string  | Publisher name              |
| `source_logo` | string  | Publisher logo URL          |
| `description` | string  | Article snippet             |
| `date`        | string  | Publication date/time       |
| `image`       | string  | Thumbnail image URL         |
| `global_rank` | integer | Rank position of the result |

***

### `top_stories` object

Google's "Top Stories" news carousel.

| Field                 | Type    | Description             |
| --------------------- | ------- | ----------------------- |
| `items`               | array   | List of top story items |
| `items[].title`       | string  | Headline                |
| `items[].link`        | string  | Article URL             |
| `items[].source`      | string  | Publisher name          |
| `items[].source_logo` | string  | Publisher logo URL      |
| `items[].date`        | string  | Publication date/time   |
| `items[].image`       | string  | Thumbnail image URL     |
| `items[].global_rank` | integer | Rank position           |

***

### `videos` / `short_videos` arrays

Video results embedded in the search page.

| Field          | Type    | Description                               |
| -------------- | ------- | ----------------------------------------- |
| `title`        | string  | Video title                               |
| `link`         | string  | URL to the video                          |
| `source`       | string  | Platform or publisher name                |
| `date`         | string  | Publication date                          |
| `duration`     | string  | Video duration as displayed               |
| `duration_sec` | integer | Video duration in seconds                 |
| `image`        | string  | Thumbnail image URL                       |
| `key_moments`  | array   | List of key moment timestamps (see below) |
| `global_rank`  | integer | Rank position                             |

#### `key_moments` items

| Field       | Type    | Description                   |
| ----------- | ------- | ----------------------------- |
| `title`     | string  | Label for the key moment      |
| `link`      | string  | URL to the specific timestamp |
| `start`     | string  | Start time as displayed       |
| `start_sec` | integer | Start time in seconds         |
| `image`     | string  | Preview image URL             |

***

### `images` array

Image results embedded in the search page.

| Field            | Type    | Description                      |
| ---------------- | ------- | -------------------------------- |
| `title`          | string  | Image title                      |
| `link`           | string  | URL of the source page           |
| `source`         | string  | Source site name                 |
| `source_logo`    | string  | Source site logo URL             |
| `original_image` | string  | URL of the full-resolution image |
| `image`          | string  | Thumbnail image URL              |
| `global_rank`    | integer | Rank position                    |

***

### `featured_snippets` array

Featured snippet boxes appearing at the top of results.

| Field          | Type    | Description                                           |
| -------------- | ------- | ----------------------------------------------------- |
| `type`         | string  | Snippet type, e.g. `"paragraph"`, `"list"`, `"table"` |
| `title`        | string  | Snippet title                                         |
| `description`  | string  | Snippet text content                                  |
| `value`        | string  | Value shown in the snippet, if applicable             |
| `link`         | string  | Source URL                                            |
| `display_link` | string  | Displayed source URL                                  |
| `source`       | string  | Source name                                           |
| `image`        | string  | Image URL, if applicable                              |
| `items`        | array   | List items for list-type snippets (`text`, `value`)   |
| `global_rank`  | integer | Rank position                                         |

***

### `people_also_ask` array

"People also ask" questions shown on the results page.

| Field          | Type    | Description               |
| -------------- | ------- | ------------------------- |
| `question`     | string  | The question text         |
| `answer`       | string  | The answer snippet        |
| `link`         | string  | Source URL for the answer |
| `title`        | string  | Title of the source page  |
| `display_link` | string  | Displayed source URL      |
| `global_rank`  | integer | Rank position             |

***

### `knowledge` object

Google Knowledge Panel for an entity.

| Field                | Type   | Description                                                |
| -------------------- | ------ | ---------------------------------------------------------- |
| `title`              | string | Entity name                                                |
| `subtitle`           | string | Entity category or subtitle                                |
| `type`               | string | Entity type                                                |
| `description`        | string | Description of the entity                                  |
| `description_source` | string | Source of the description                                  |
| `description_link`   | string | URL of the description source                              |
| `kgmid`              | string | Google Knowledge Graph ID                                  |
| `link`               | string | Official website URL                                       |
| `image`              | string | Main image URL                                             |
| `facts`              | array  | List of fact items (`predicate`, `title`, `value`, `link`) |
| `widgets`            | array  | Additional knowledge widgets                               |

***

### `ai_overview` object

Google AI Overview summary shown at the top of some results pages.

| Field                       | Type              | Description                                                         |
| --------------------------- | ----------------- | ------------------------------------------------------------------- |
| `texts`                     | array             | List of content blocks (type: `title`, `paragraph`, `list`, `code`) |
| `texts[].type`              | string            | Content block type                                                  |
| `texts[].snippet`           | string            | Text content of the block                                           |
| `texts[].links`             | array             | Inline links within the block (`text`, `link`)                      |
| `texts[].reference_indexes` | array of integers | Indexes pointing to the `references` array                          |
| `references`                | array             | Source references cited in the AI overview                          |
| `references[].href`         | string            | URL of the reference                                                |
| `references[].title`        | string            | Title of the reference                                              |
| `references[].source`       | string            | Source name                                                         |
| `references[].index`        | integer           | Reference index                                                     |
| `global_rank`               | integer           | Rank position                                                       |

***

### `snack_pack` array

Local business results shown in the map pack.

| Field                 | Type             | Description                               |
| --------------------- | ---------------- | ----------------------------------------- |
| `name`                | string           | Business name                             |
| `link`                | string           | URL to the business website               |
| `cid`                 | string           | Google Customer ID of the business        |
| `rating`              | number           | Average customer rating                   |
| `reviews_cnt`         | integer          | Number of reviews                         |
| `type`                | string           | Business category                         |
| `price`               | string           | Price range indicator                     |
| `phone`               | string           | Phone number                              |
| `address`             | string           | Business address                          |
| `work_status`         | string           | Current open/closed status                |
| `work_status_details` | string           | Detailed status description               |
| `maps_link`           | string           | URL to the business on Google Maps        |
| `sponsored`           | boolean          | Whether the listing is a sponsored result |
| `tags`                | array of strings | Attribute tags for the business           |
| `global_rank`         | integer          | Rank position                             |

***

### `snack_pack_map` object

The map image associated with the local pack results.

| Field   | Type   | Description                 |
| ------- | ------ | --------------------------- |
| `image` | string | Map image URL               |
| `link`  | string | URL to Google Maps          |
| `lat`   | string | Latitude of the map center  |
| `lng`   | string | Longitude of the map center |

***

### `jobs` object

Job listing results embedded in the search page.

| Field                 | Type   | Description                    |
| --------------------- | ------ | ------------------------------ |
| `title`               | string | Widget title                   |
| `items`               | array  | List of job items              |
| `items[].title`       | string | Job title                      |
| `items[].company`     | string | Company name                   |
| `items[].location`    | string | Job location                   |
| `items[].source`      | string | Job board or source            |
| `items[].description` | string | Job description snippet        |
| `items[].link`        | string | URL to the job listing         |
| `items[].tags`        | array  | List of tags (`name`, `value`) |

***

### `flights` object

Flight results widget.

| Field              | Type   | Description                                                                       |
| ------------------ | ------ | --------------------------------------------------------------------------------- |
| `title`            | string | Widget title                                                                      |
| `from`             | string | Departure location                                                                |
| `to`               | string | Destination                                                                       |
| `date_from`        | string | Departure date                                                                    |
| `date_to`          | string | Return date                                                                       |
| `flight_class`     | string | Cabin class                                                                       |
| `ticket_type`      | string | One-way or round trip                                                             |
| `items`            | array  | List of flight options (`logo`, `title`, `travel_time`, `stops`, `price`, `link`) |
| `date_price_items` | array  | Alternate date pricing (`departure_date`, `return_date`, `price`)                 |

***

### `hotels_selection` object

Hotel results widget.

| Field                 | Type             | Description              |
| --------------------- | ---------------- | ------------------------ |
| `title`               | string           | Widget title             |
| `items[].name`        | string           | Hotel name               |
| `items[].link`        | string           | URL to the hotel listing |
| `items[].price`       | string           | Displayed price          |
| `items[].rating`      | number           | Hotel rating             |
| `items[].reviews_cnt` | integer          | Number of reviews        |
| `items[].tags`        | array of strings | Attribute labels         |
| `items[].image`       | string           | Hotel image URL          |

***

### `recipes` object

Recipe results widget.

| Field                 | Type             | Description         |
| --------------------- | ---------------- | ------------------- |
| `title`               | string           | Widget title        |
| `items[].title`       | string           | Recipe name         |
| `items[].link`        | string           | URL to the recipe   |
| `items[].rating`      | number           | Recipe rating       |
| `items[].reviews_cnt` | integer          | Number of reviews   |
| `items[].source`      | string           | Source site         |
| `items[].cook_time`   | string           | Cooking time        |
| `items[].ingredients` | array of strings | List of ingredients |
| `items[].image`       | string           | Recipe image URL    |

***

### `popular_products` object

Popular products widget embedded in results.

| Field                 | Type             | Description                |
| --------------------- | ---------------- | -------------------------- |
| `title`               | string           | Widget title               |
| `items[].title`       | string           | Product name               |
| `items[].price`       | string           | Displayed price            |
| `items[].link`        | string           | URL to the product         |
| `items[].rating`      | number           | Product rating             |
| `items[].reviews_cnt` | integer          | Number of reviews          |
| `items[].features`    | array of strings | Product feature highlights |
| `items[].image`       | string           | Product image URL          |

***

### `weather` object

Weather widget shown for weather-related queries.

| Field             | Type   | Description                                                                          |
| ----------------- | ------ | ------------------------------------------------------------------------------------ |
| `title`           | string | Location name                                                                        |
| `temperature`     | string | Current temperature                                                                  |
| `image`           | string | Weather condition icon URL                                                           |
| `daily_forecast`  | array  | Day-by-day forecast (`day`, `image`, `temperature.daytime`, `temperature.nighttime`) |
| `hourly_forecast` | object | Hourly precipitation and wind data                                                   |
| `additional_info` | array  | Extra info items (`type`, `text`)                                                    |

***

### `currency_exchange` object

Currency conversion widget.

| Field           | Type   | Description                                |
| --------------- | ------ | ------------------------------------------ |
| `exchange_rate` | number | Current exchange rate                      |
| `date`          | string | Date of the rate                           |
| `exchange`      | array  | Converted amounts (`amount`, `currency`)   |
| `history`       | array  | Historical rates (`exchange_rate`, `date`) |

***

### `related` array

"Related searches" shown at the bottom of the page.

| Field      | Type    | Description                                |
| ---------- | ------- | ------------------------------------------ |
| `text`     | string  | Related search text                        |
| `link`     | string  | URL to the related search                  |
| `expanded` | boolean | Whether this item has nested related items |
| `items`    | array   | Nested related items, same structure       |

***

### `pagination` object

Pagination data for the results page.

| Field            | Type    | Description                                       |
| ---------------- | ------- | ------------------------------------------------- |
| `current_page`   | integer | Current page number                               |
| `next_page`      | integer | Next page number                                  |
| `next_page_link` | string  | URL to the next page                              |
| `pages`          | array   | List of available pages (`page`, `start`, `link`) |

***

### `spelling` object

Spell correction data, if Google corrected or suggested an alternative query.

| Field                 | Type    | Description                                    |
| --------------------- | ------- | ---------------------------------------------- |
| `original_text`       | string  | The original query as submitted                |
| `original_link`       | string  | URL to search with the original query          |
| `original_empty`      | boolean | Whether the original query returned no results |
| `auto_corrected_text` | string  | Query Google automatically corrected to        |
| `auto_corrected_link` | string  | URL for the auto-corrected query               |
| `suggested_text`      | string  | Alternative spelling suggestion                |
| `suggested_link`      | string  | URL for the suggested spelling                 |

***

### `forums` object

Forum and discussion results embedded in the page.

| Field             | Type   | Description                                       |
| ----------------- | ------ | ------------------------------------------------- |
| `items[].title`   | string | Forum post or thread title                        |
| `items[].source`  | string | Forum or platform name                            |
| `items[].link`    | string | URL to the forum thread                           |
| `items[].answers` | array  | List of answers (`text`, `link`, `is_top_answer`) |

***

### `latest_posts` object

Latest social or editorial posts widget.

| Field                 | Type    | Description                |
| --------------------- | ------- | -------------------------- |
| `title`               | string  | Widget title               |
| `items[].title`       | string  | Post title                 |
| `items[].source`      | string  | Publisher or platform name |
| `items[].channel`     | string  | Channel or account name    |
| `items[].date`        | string  | Publication date           |
| `items[].link`        | string  | URL to the post            |
| `items[].image`       | string  | Post image URL             |
| `items[].global_rank` | integer | Rank position              |

***

### `perspectives` array

Perspectives results from forums, social media, and editorial sources.

| Field         | Type    | Description          |
| ------------- | ------- | -------------------- |
| `title`       | string  | Perspective title    |
| `author`      | string  | Author name          |
| `source`      | string  | Source platform      |
| `text`        | string  | Excerpt or summary   |
| `date`        | string  | Publication date     |
| `link`        | string  | URL to the full post |
| `image`       | string  | Image URL            |
| `global_rank` | integer | Rank position        |

***

### `navigation` array

Top navigation links shown on the results page (e.g. Images, News, Videos).

| Field   | Type   | Description                  |
| ------- | ------ | ---------------------------- |
| `title` | string | Label of the navigation item |
| `href`  | string | URL of the navigation link   |

***

### `chips` array

Refinement chip filters shown below the search bar.

| Field       | Type   | Description                      |
| ----------- | ------ | -------------------------------- |
| `label`     | string | Chip label text                  |
| `link`      | string | URL for applying the chip filter |
| `image_url` | string | Icon image URL, if applicable    |

### Example Full JSON

```sh Full JSON response example theme={null}
{
  "general": {
    "query": "pizza",
    "detected_query": "pizza",
    "results_cnt": 2340000000,
    "search_time": 0.52,
    "language": "en",
    "country": "United States",
    "country_code": "US",
    "search_type": "text",
    "is_mobile": false,
    "is_empty": false,
    "consent_type": "none"
  },
  "input": {
    "original_url": "https://www.google.com/search?q=pizza&brd_json=1",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "request_id": "hl_a1b2c3d4e5f6g7h8"
  },
  "navigation": [
    { "title": "Images", "href": "https://www.google.com/search?q=pizza&udm=2" },
    { "title": "News", "href": "https://www.google.com/search?q=pizza&tbm=nws" },
    { "title": "Videos", "href": "https://www.google.com/search?q=pizza&udm=7" },
    { "title": "Shopping", "href": "https://www.google.com/search?q=pizza&tbm=shop" }
  ],
  "navigation_tabs": [
    { "title": "All", "link": "https://www.google.com/search?q=pizza" },
    { "title": "Images", "link": "https://www.google.com/search?q=pizza&udm=2" }
  ],
  "navigation_filters": [
    {
      "title": "Any time",
      "is_active": true,
      "has_popup": true,
      "popup_items": [
        { "title": "Past hour", "is_active": false },
        { "title": "Past 24 hours", "is_active": false },
        { "title": "Past week", "is_active": false },
        { "title": "Past month", "is_active": false },
        { "title": "Past year", "is_active": false }
      ]
    }
  ],
  "chips": [
    { "label": "pizza dough", "link": "https://www.google.com/search?q=pizza+dough", "image_url": "https://example.com/chips/dough.jpg" },
    { "label": "pizza near me", "link": "https://www.google.com/search?q=pizza+near+me", "image_url": "https://example.com/chips/nearby.jpg" },
    { "label": "pizza recipes", "link": "https://www.google.com/search?q=pizza+recipes", "image_url": "https://example.com/chips/recipes.jpg" }
  ],
  "top_ads": [
    {
      "title": "Order Pizza Online — Fast Delivery Guaranteed",
      "link": "https://www.example-pizza-ad.com/order",
      "display_link": "www.example-pizza-ad.com",
      "referral_link": "https://www.example-pizza-ad.com/ref=google",
      "description": "Hot fresh pizza delivered to your door in 30 minutes or less. Order now.",
      "extensions": [
        { "type": "site_link", "text": "Order Now", "link": "https://www.example-pizza-ad.com/order", "extended": false },
        { "type": "site_link", "text": "Deals", "link": "https://www.example-pizza-ad.com/deals", "extended": false }
      ],
      "global_rank": 1
    }
  ],
  "featured_snippets": [
    {
      "type": "paragraph",
      "title": "What is pizza?",
      "description": "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "display_link": "en.wikipedia.org › wiki › Pizza",
      "source": "Wikipedia",
      "global_rank": 2
    }
  ],
  "ai_overview": {
    "texts": [
      {
        "type": "paragraph",
        "snippet": "Pizza is one of the world's most popular foods, originating in Naples, Italy. It typically consists of a leavened dough base topped with tomato sauce, mozzarella cheese, and a variety of toppings.",
        "links": [
          { "text": "History of pizza", "link": "https://en.wikipedia.org/wiki/History_of_pizza" }
        ],
        "reference_indexes": [0, 1]
      },
      {
        "type": "list",
        "snippet": "Common pizza styles include:",
        "list": [
          { "type": "paragraph", "snippet": "Neapolitan — thin, soft crust, simple toppings" },
          { "type": "paragraph", "snippet": "New York-style — large, foldable slices" },
          { "type": "paragraph", "snippet": "Chicago deep dish — thick crust, layered toppings" }
        ],
        "reference_indexes": [2]
      }
    ],
    "references": [
      { "index": 0, "href": "https://en.wikipedia.org/wiki/Pizza", "title": "Pizza - Wikipedia", "source": "Wikipedia" },
      { "index": 1, "href": "https://en.wikipedia.org/wiki/History_of_pizza", "title": "History of pizza", "source": "Wikipedia" },
      { "index": 2, "href": "https://www.example-food.com/pizza-styles", "title": "Pizza Styles Around the World", "source": "Example Food" }
    ],
    "global_rank": 3
  },
  "organic": [
    {
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "amp_link": "https://en.m.wikipedia.org/wiki/Pizza",
      "title": "Pizza - Wikipedia",
      "display_link": "en.wikipedia.org › wiki › Pizza",
      "source": "Wikipedia",
      "description": "Pizza is an Italian dish consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature.",
      "snippet_highlighted_words": ["Pizza", "Italian", "dough"],
      "icon": "https://en.wikipedia.org/favicon.ico",
      "extensions": [
        { "type": "site_link", "text": "Neapolitan pizza", "link": "https://en.wikipedia.org/wiki/Neapolitan_pizza", "extended": false, "inline": false },
        { "type": "site_link", "text": "Pizzeria", "link": "https://en.wikipedia.org/wiki/Pizzeria", "extended": false, "inline": false },
        { "type": "site_link", "text": "Pizza Margherita", "link": "https://en.wikipedia.org/wiki/Pizza_Margherita", "extended": false, "inline": false }
      ],
      "global_rank": 4
    },
    {
      "link": "https://www.pizzahut.com/",
      "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
      "display_link": "www.pizzahut.com",
      "source": "Pizza Hut",
      "description": "Order pizza online for fast delivery or carryout from a store near you. View our full menu, nutritional information, store locations, and more.",
      "snippet_highlighted_words": ["pizza"],
      "icon": "https://www.pizzahut.com/favicon.ico",
      "extensions": [
        { "type": "site_link", "text": "Menu", "link": "https://www.pizzahut.com/menu", "extended": false, "inline": false },
        { "type": "site_link", "text": "Locations", "link": "https://www.pizzahut.com/locations", "extended": false, "inline": false }
      ],
      "global_rank": 5
    },
    {
      "link": "https://www.dominos.com/",
      "title": "Domino's Pizza - Order Online for Delivery or Carryout",
      "display_link": "www.dominos.com",
      "source": "Domino's",
      "description": "Order Domino's pizza online for delivery or carryout. Find deals, coupons, and track your order in real time.",
      "snippet_highlighted_words": ["pizza"],
      "icon": "https://www.dominos.com/favicon.ico",
      "extensions": [],
      "global_rank": 6
    },
    {
      "link": "https://www.bbcgoodfood.com/recipes/pizza-margherita-4-easy-steps",
      "title": "Pizza Margherita in 4 easy steps",
      "display_link": "www.bbcgoodfood.com › recipes",
      "source": "BBC Good Food",
      "description": "Even a novice cook can master the art of perfect pizza with our step-by-step guide to making a classic Margherita.",
      "snippet_highlighted_words": ["pizza", "Margherita"],
      "icon": "https://www.bbcgoodfood.com/favicon.ico",
      "extensions": [],
      "global_rank": 7
    }
  ],
  "videos": [
    {
      "title": "How to Make Perfect Homemade Pizza",
      "link": "https://www.youtube.com/watch?v=abc123",
      "source": "YouTube",
      "date": "2025-11-01",
      "duration": "12:34",
      "duration_sec": 754,
      "image": "https://i.ytimg.com/vi/abc123/hqdefault.jpg",
      "key_moments": [
        { "title": "Making the dough", "link": "https://www.youtube.com/watch?v=abc123&t=30", "start": "0:30", "start_sec": 30, "image": "https://i.ytimg.com/vi/abc123/moment1.jpg" },
        { "title": "Adding toppings", "link": "https://www.youtube.com/watch?v=abc123&t=480", "start": "8:00", "start_sec": 480, "image": "https://i.ytimg.com/vi/abc123/moment2.jpg" }
      ],
      "global_rank": 8
    },
    {
      "title": "Classic New York Pizza At Home",
      "link": "https://www.youtube.com/watch?v=def456",
      "source": "YouTube",
      "date": "2025-09-15",
      "duration": "9:45",
      "duration_sec": 585,
      "image": "https://i.ytimg.com/vi/def456/hqdefault.jpg",
      "key_moments": [],
      "global_rank": 9
    }
  ],
  "top_stories": {
    "items": [
      {
        "title": "NYC Pizza Festival Returns for Its Biggest Year Yet",
        "link": "https://www.example-news.com/nyc-pizza-festival-2026",
        "source": "Example News",
        "source_logo": "https://www.example-news.com/logo.png",
        "date": "2 hours ago",
        "image": "https://www.example-news.com/images/pizza-festival.jpg",
        "global_rank": 10
      },
      {
        "title": "The Science Behind the Perfect Pizza Crust",
        "link": "https://www.another-outlet.com/pizza-crust-science",
        "source": "Another Outlet",
        "source_logo": "https://www.another-outlet.com/logo.png",
        "date": "5 hours ago",
        "image": "https://www.another-outlet.com/images/pizza-crust.jpg",
        "global_rank": 11
      }
    ]
  },
  "images": [
    {
      "title": "Classic Margherita Pizza",
      "link": "https://www.example-recipe.com/margherita",
      "source": "Example Recipe",
      "source_logo": "https://www.example-recipe.com/logo.png",
      "original_image": "https://www.example-recipe.com/images/margherita-full.jpg",
      "image": "https://www.example-recipe.com/images/margherita-thumb.jpg",
      "global_rank": 12
    },
    {
      "title": "Neapolitan Pizza with Fresh Basil",
      "link": "https://www.example-food.com/neapolitan",
      "source": "Example Food",
      "source_logo": "https://www.example-food.com/logo.png",
      "original_image": "https://www.example-food.com/images/neapolitan-full.jpg",
      "image": "https://www.example-food.com/images/neapolitan-thumb.jpg",
      "global_rank": 13
    }
  ],
  "shopping": [
    {
      "title": "Ooni Koda 16 Gas Powered Pizza Oven",
      "link": "https://www.example-store.com/ooni-koda-16",
      "shop_link": "https://www.example-store.com",
      "description": "Gas-powered outdoor pizza oven. Reaches 950°F in 20 minutes.",
      "price": "$599.00",
      "old_price": "$699.00",
      "shop": "Example Store",
      "shipping": "Free shipping",
      "rating": 4.8,
      "reviews_cnt": 3120,
      "trusted_store": true,
      "image": "https://www.example-store.com/images/ooni-koda.jpg",
      "global_rank": 14
    },
    {
      "title": "Pizza Stone for Oven and Grill",
      "link": "https://www.another-store.com/pizza-stone",
      "shop_link": "https://www.another-store.com",
      "description": "14-inch cordierite pizza stone, evenly distributes heat for a crispy crust.",
      "price": "$34.99",
      "shop": "Another Store",
      "shipping": "$4.99 shipping",
      "rating": 4.6,
      "reviews_cnt": 8740,
      "trusted_store": false,
      "image": "https://www.another-store.com/images/pizza-stone.jpg",
      "global_rank": 15
    }
  ],
  "top_pla": [
    {
      "title": "Ooni Fyra 12 Wood Pellet Pizza Oven",
      "link": "https://www.example-shop.com/ooni-fyra",
      "referral_link": "https://www.example-shop.com/ref=gpla",
      "price": "$349.00",
      "old_price": "$399.00",
      "shop": "Example Shop",
      "shipping": "Free shipping",
      "rating": 4.7,
      "reviews_cnt": 2340,
      "image": "https://www.example-shop.com/images/ooni-fyra.jpg",
      "global_rank": 16
    }
  ],
  "knowledge": {
    "title": "Pizza",
    "subtitle": "Dish",
    "type": "Food",
    "description": "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
    "description_source": "Wikipedia",
    "description_link": "https://en.wikipedia.org/wiki/Pizza",
    "kgmid": "/m/0663v",
    "link": "https://en.wikipedia.org/wiki/Pizza",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px.jpg",
    "facts": [
      { "predicate": "Place of origin", "title": "Place of origin", "value": "Naples, Italy", "link": "https://en.wikipedia.org/wiki/Naples" },
      { "predicate": "Main ingredients", "title": "Main ingredients", "value": "Dough, tomato sauce, cheese, toppings", "link": "" },
      { "predicate": "Serving temperature", "title": "Serving temperature", "value": "Hot", "link": "" }
    ],
    "widgets": [
      {
        "type": "list",
        "key": "Variations",
        "predicate": "Variations",
        "title": "Popular variations",
        "items": [
          { "title": "Neapolitan pizza", "subtitle": "Pizza style", "link": "https://en.wikipedia.org/wiki/Neapolitan_pizza" },
          { "title": "New York-style pizza", "subtitle": "Pizza style", "link": "https://en.wikipedia.org/wiki/New_York-style_pizza" },
          { "title": "Chicago-style pizza", "subtitle": "Pizza style", "link": "https://en.wikipedia.org/wiki/Chicago-style_pizza" }
        ]
      }
    ]
  },
  "people_also_ask": [
    {
      "question": "What is the most popular pizza topping?",
      "answer": "Pepperoni is the most popular pizza topping in the United States, appearing on approximately 36% of all pizzas ordered.",
      "link": "https://www.example-food.com/popular-pizza-toppings",
      "title": "Most Popular Pizza Toppings in America",
      "display_link": "www.example-food.com",
      "global_rank": 17
    },
    {
      "question": "Where was pizza invented?",
      "answer": "Pizza was invented in Naples, Italy. The modern pizza with tomato sauce and mozzarella is believed to have originated there in the 18th or early 19th century.",
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "title": "Pizza - Wikipedia",
      "display_link": "en.wikipedia.org",
      "global_rank": 18
    }
  ],
  "snack_pack_map": {
    "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13",
    "link": "https://www.google.com/maps/search/pizza+near+me",
    "lat": "40.7128",
    "lng": "-74.0060"
  },
  "snack_pack": [
    {
      "name": "Joe's Pizza",
      "link": "https://www.joespizzanyc.com",
      "cid": "12345678901234567",
      "rating": 4.7,
      "reviews_cnt": 5230,
      "type": "Pizza restaurant",
      "price": "$",
      "phone": "+1 212-366-1182",
      "address": "7 Carmine St, New York, NY 10014",
      "work_status": "Open",
      "work_status_details": "Open until 4:00 AM",
      "maps_link": "https://www.google.com/maps/place/Joe%27s+Pizza",
      "sponsored": false,
      "tags": ["Dine-in", "Takeaway", "No delivery"],
      "global_rank": 19
    },
    {
      "name": "Grimaldi's Pizzeria",
      "link": "https://www.grimaldis-pizza.com",
      "cid": "98765432109876543",
      "rating": 4.5,
      "reviews_cnt": 8910,
      "type": "Pizza restaurant",
      "price": "$$",
      "phone": "+1 718-858-4300",
      "address": "1 Front St, Brooklyn, NY 11201",
      "work_status": "Open",
      "work_status_details": "Open until 10:00 PM",
      "maps_link": "https://www.google.com/maps/place/Grimaldi%27s+Pizzeria",
      "sponsored": false,
      "tags": ["Dine-in", "Takeaway"],
      "global_rank": 20
    }
  ],
  "recipes": {
    "title": "Pizza recipes",
    "items": [
      {
        "title": "Classic Margherita Pizza",
        "link": "https://www.bbcgoodfood.com/recipes/pizza-margherita",
        "rating": 4.8,
        "reviews_cnt": 1240,
        "source": "BBC Good Food",
        "cook_time": "25 mins",
        "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "fresh basil", "olive oil"],
        "image": "https://www.bbcgoodfood.com/images/margherita.jpg"
      },
      {
        "title": "Easy Pepperoni Pizza",
        "link": "https://www.example-recipe.com/pepperoni-pizza",
        "rating": 4.6,
        "reviews_cnt": 890,
        "source": "Example Recipe",
        "cook_time": "30 mins",
        "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "pepperoni", "oregano"],
        "image": "https://www.example-recipe.com/images/pepperoni.jpg"
      }
    ]
  },
  "popular_products": {
    "title": "Popular pizza-related products",
    "items": [
      {
        "title": "Ooni Koda 16 Pizza Oven",
        "price": "$599.00",
        "link": "https://www.example-store.com/ooni-koda-16",
        "rating": 4.8,
        "reviews_cnt": 3120,
        "features": ["Gas powered", "Reaches 950°F", "16-inch capacity"],
        "image": "https://www.example-store.com/images/ooni-koda.jpg"
      }
    ]
  },
  "perspectives": [
    {
      "title": "Why Neapolitan Pizza is the Gold Standard",
      "author": "John Smith",
      "source": "Reddit",
      "text": "After trying pizza across 12 countries, I keep coming back to true Neapolitan pizza. The simplicity of the ingredients and the high-heat cooking is unmatched.",
      "date": "2026-03-10",
      "link": "https://www.reddit.com/r/pizza/comments/example",
      "image": "https://www.reddit.com/images/pizza-post.jpg",
      "global_rank": 21
    }
  ],
  "forums": {
    "items": [
      {
        "title": "What makes a great pizza dough?",
        "source": "Reddit",
        "subtitles": ["r/pizza", "452 comments"],
        "link": "https://www.reddit.com/r/pizza/comments/dough-question",
        "answers": [
          { "text": "High protein flour, long cold fermentation, and proper hydration are the three keys.", "link": "https://www.reddit.com/r/pizza/comments/dough-question/answer1", "is_top_answer": true },
          { "text": "Don't overwork the dough and let it rest at room temperature before stretching.", "link": "https://www.reddit.com/r/pizza/comments/dough-question/answer2", "is_top_answer": false }
        ]
      }
    ]
  },
  "related": [
    { "text": "pizza dough recipe", "link": "https://www.google.com/search?q=pizza+dough+recipe", "expanded": false },
    { "text": "pizza near me", "link": "https://www.google.com/search?q=pizza+near+me", "expanded": false },
    { "text": "best pizza in New York", "link": "https://www.google.com/search?q=best+pizza+in+new+york", "expanded": false },
    { "text": "homemade pizza", "link": "https://www.google.com/search?q=homemade+pizza", "expanded": false }
  ],
  "spelling": {
    "original_text": "pizza",
    "original_link": "https://www.google.com/search?q=pizza",
    "original_empty": false,
    "auto_corrected_text": "",
    "auto_corrected_link": "",
    "suggested_text": "",
    "suggested_link": ""
  },
  "pagination": {
    "current_page": 1,
    "next_page": 2,
    "next_page_start": 10,
    "next_page_link": "https://www.google.com/search?q=pizza&start=10",
    "pages": [
      { "page": 1, "start": 0, "link": "https://www.google.com/search?q=pizza" },
      { "page": 2, "start": 10, "link": "https://www.google.com/search?q=pizza&start=10" },
      { "page": 3, "start": 20, "link": "https://www.google.com/search?q=pizza&start=20" }
    ]
  },
  "bottom_ads": [
    {
      "title": "Best Pizza Deals Online — Order Now",
      "link": "https://www.example-pizza-ad2.com/order",
      "display_link": "www.example-pizza-ad2.com",
      "referral_link": "https://www.example-pizza-ad2.com/ref=google",
      "description": "Find the best pizza deals in your area. Fast delivery, great prices.",
      "extensions": [],
      "global_rank": 22
    }
  ]
}
```
