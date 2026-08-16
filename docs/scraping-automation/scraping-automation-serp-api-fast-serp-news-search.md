# Fast SERP news search

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/news-search](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/news-search)
> **Category**: `scraping-automation`

---

Use Bright Data's Fast SERP service (31 languages) to retrieve compact Google News search results in real time, for selected enterprise customers.

Bright Data offers a fast SERP service for News, available to selected enterprise customers only. This service responds with a compact JSON to power real-time applications that need up-to-date news results. To gain access, please contact your Bright Data account manager.

## Google News endpoints

Google offers two endpoints for news search results:

[news.google.com](http://news.google.com) and [https://www.google.com/search/q=\[searchTerm\]\&tbm=nws](https://www.google.com/search/q=\[searchTerm]\&tbm=nws)

Bright Data offers **Fast SERP** results only for: [https://www.google.com/search/q=\[searchTerm\]\&tbm=nws](https://www.google.com/search/q=\[searchTerm]\&tbm=nws) . Bright Data will provide results for [news.google.com](http://news.google.com) , but with in our regular SERP.

## Fast News Search Request

Fast SERP for Google News works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

<Note>
  For Fast SERP, **both** the `x-unblock-data-format: parsed_light`request header **and** the `brd_json=1` URL parameter are required. Omitting either will result in an unexpected response format.
</Note>

### Native proxy request

```shell theme={null}
curl -i --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER>-zone-<ZONE>:<PASSWORD> \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/search?q=earthquake&tbm=nws&brd_json=1"
```

## Response Format

A successful response returns a JSON object with the following top-level fields.

### Choosing image format

For news articles search results in Fast SERP, Bright Data offers to receive the data either as embedded Base64 binary code or as a URL. The default is Base64.

In order to get the image links use this header: `-H 'x-unblock-img-format: link'`

Example:

```text theme={null}
curl  --proxy fserp.brd.superproxy.io:44445 --proxy-user [username]:[password] -k -H 'x-unblock-data-format: parsed_light' -H 'x-unblock-img-format: link' "https://www.google.com/search?q=earthquake&tbm=nws&brd_json=1" --output nws_links.json
```

### `news` array

The primary array of individual news results.

| Field         | Type    | Description                                                      |
| ------------- | ------- | ---------------------------------------------------------------- |
| `link`        | string  | URL of the news article                                          |
| `title`       | string  | Headline of the article                                          |
| `source`      | string  | Name of the news publisher                                       |
| `source_logo` | string  | URL of the publisher's logo image or Base64 image binary code    |
| `date`        | string  | Publication date/time of the article                             |
| `image`       | string  | URL of the article's thumbnail image or Base64 image binary code |
| `global_rank` | integer | Rank position of the result on the page                          |

### `article_sets` array

Grouped article clusters organized by topic, each containing a `heading` label and an `items` array of articles.

<Note>
  article\_sets is not guaranteed to appear in every response. Your implementation should handle its absence gracefully.
</Note>

### Example response with image links

```JSON theme={null}
{
  "organic": [],
  "news": [
    {
      "link": "https://www.example-news.com/world/earthquake-latest",
      "title": "Major Earthquake Strikes Pacific Region",
      "source": "Example News",
      "source_logo": "https://www.example-news.com/logo.png",
      "date": "2 hours ago",
      "image": "https://www.example-news.com/images/earthquake.jpg",
      "global_rank": 1
    },
    {
      "link": "https://www.another-outlet.com/earthquake-update",
      "title": "Rescue Operations Underway After Earthquake",
      "source": "Another Outlet",
      "source_logo": "https://www.another-outlet.com/logo.png",
      "date": "3 hours ago",
      "image": "https://www.another-outlet.com/images/rescue.jpg",
      "global_rank": 2
    }
  ],
  "article_sets": [
    {
      "heading": "Latest Updates",
      "items": [
        {
          "link": "https://www.example-news.com/world/earthquake-latest",
          "title": "Major Earthquake Strikes Pacific Region",
          "source": "Example News",
          "date": "2 hours ago"
        }
      ]
    }
  ]
}
```

Response schema: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_search\_news.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_search_news.schema.json)

## Supported parameters

| Parameter  | Description                                | Example        | Notes                                                                             |
| ---------- | ------------------------------------------ | -------------- | --------------------------------------------------------------------------------- |
| `q`        | Search query (**must be first in URL**)    | `q=earthquake` | Query size must be under 8,000 charachters. <br />Longer queries fail with error. |
| `gl`       | Two-letter country code for search country | `gl=us`        |                                                                                   |
| `hl`       | Two-letter language code for page language | `hl=en`        |                                                                                   |
| `brd_json` | **Required.**`1` = parsed JSON             | `brd_json=1`   |                                                                                   |

**Headers**

| Header                  | Description                                    | Example        |
| ----------------------- | ---------------------------------------------- | -------------- |
| `x-unblock-data-format` | **Required.** Must be `parsed_light`           | `parsed_light` |
| `x-unblock-img-format`  | Image format: `link` (URL) or default (Base64) | `link`         |

***
