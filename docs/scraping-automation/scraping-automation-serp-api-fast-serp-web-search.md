# Fast SERP web search

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/web-search](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/web-search)
> **Category**: `scraping-automation`

---

Use Bright Data Fast SERP (31 languages) to retrieve compact JSON search results in real time via a native proxy interface, for low-latency apps.

Bright Data offers a fast SERP service with a compact JSON response, to power real-time applications in need of search results.

To gain access to Bright Data FAST SERP service, please contact your Bright Data account manager.

## Fast SERP Request

Fast SERP works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

<Note>
  For Fast SERP, **both** the `x-unblock-data-format: parsed_light`request header **and** the `brd_json=1` URL parameter are required. Omitting either will result in an unexpected response format.
</Note>

### How to get organic results

Use header value `x-unblock-data-format: parsed_fast`, this request header will return organic results.

```shell theme={null}
curl -i --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER>-zone-<ZONE>:<PASSWORD> \
  -k \
  -H 'x-unblock-data-format: parsed_fast' \
  "https://www.google.com/search?q=pizza&brd_json=1" \
  > output.json
```

#### Organic results: response format

#### `organic` array

The primary array of web search results, present in both `parsed_light` and `parsed_fast` responses.

| Field         | Type    | Description                                                        |
| :------------ | :------ | :----------------------------------------------------------------- |
| `link`        | string  | URL of the result page                                             |
| `title`       | string  | Title of the result                                                |
| `description` | string  | Snippet/summary shown in the search result                         |
| `global_rank` | integer | Rank position of the result on the page                            |
| `extensions`  | array   | Optional list of site links associated with the result (see below) |

#### `extensions` items

| Field  | Type   | Description                         |
| :----- | :----- | :---------------------------------- |
| `type` | string | Type of extension, e.g. `site_link` |
| `link` | string | URL of the site link                |
| `text` | string | Anchor text of the site link        |

### Example response, `parsed_fast` (organic results)

```text theme={null}
{
  "organic": [
    {
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "title": "Pizza - Wikipedia",
      "description": "Pizza is an Italian dish consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients.",
      "global_rank": 1,
      "extensions": [
        {
          "type": "site_link",
          "link": "https://en.wikipedia.org/wiki/Neapolitan_pizza",
          "text": "Neapolitan pizza"
        }
      ]
    },
    {
      "link": "https://www.example-pizza.com/best-pizza-nyc",
      "title": "Best Pizza in NYC - Joe's Pizza",
      "description": "Family-owned pizzeria serving authentic New York slices since 1975.",
      "global_rank": 2
    },
    {
      "link": "https://www.pizza-guide.com/top-10",
      "title": "Top 10 Pizza Places in NYC",
      "description": "Discover the highest-rated pizza restaurants across all five boroughs.",
      "global_rank": 3
    }
  ]
}
```

### Organic results with "Top Stories"

Use header value `x-unblock-data-format: parsed_light`, this request header will return Google's "Top Stories" in the response alongside organic results.

```shell theme={null}
curl -i --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER>-zone-<ZONE>:<PASSWORD> \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/search?q=pizza&brd_json=1" \
  > output.json
```

### `general` object

Returned in every `parsed_light` response. Reports the query you sent and the query Google actually ran, which lets you detect when Google truncates a search.

| Field            | Type   | Description                                                                                                                |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `query`          | string | The search query you submitted                                                                                             |
| `detected_query` | string | The query Google actually returned results for. Differs from `query` when Google corrects spelling or truncates the search |

<Note>
  If `detected_query` differs from `query`, check for a `spelling` section in the response. If `spelling` is present, the difference is due to automatic spelling correction and the response is valid. If `spelling` is absent, the query was cloaked and results were returned for a truncated version of the original query.

  By default, cloaked responses are not returned as data: the request fails with the `unexpected_q` error and is not billed. You will only receive responses where `detected_query` differs without a `spelling` section if you enabled the `return_mismatch` option. See [Handling query mismatches](/scraping-automation/serp-api/debugging#handling-query-mismatches-unexpected_q) on the debugging page.
</Note>

### `spelling` object

Returned in a `parsed_light` response only when Google applies or suggests a spelling correction. All fields are nullable and appear only when Google provides that variant.

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

### `top_stories` array

Returned only when using `x-unblock-data-format: parsed_light`. Contains Google's "Top Stories" news carousel results.

| Field    | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| `link`   | string | URL of the news article              |
| `title`  | string | Headline of the article              |
| `source` | string | Name of the news publisher           |
| `date`   | string | Publication date/time of the article |
| `image`  | string | URL of the article's thumbnail image |

### Example response, `parsed_light` (with Top Stories)

```text theme={null}
{
  "general": {
    "query": "pizza",
    "detected_query": "pizza"
  },
  "organic": [
    {
      "link": "https://en.wikipedia.org/wiki/Pizza",
      "title": "Pizza - Wikipedia",
      "description": "Pizza is an Italian dish consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients.",
      "global_rank": 1,
      "extensions": [
        {
          "type": "site_link",
          "link": "https://en.wikipedia.org/wiki/Neapolitan_pizza",
          "text": "Neapolitan pizza"
        },
        {
          "type": "site_link",
          "link": "https://en.wikipedia.org/wiki/Pizzeria",
          "text": "Pizzeria"
        }
      ]
    },
    {
      "link": "https://www.example-pizza.com/best-pizza-nyc",
      "title": "Best Pizza in NYC - Joe's Pizza",
      "description": "Family-owned pizzeria serving authentic New York slices since 1975.",
      "global_rank": 2
    }
  ],
  "top_stories": [
    {
      "link": "https://www.example-news.com/pizza-festival",
      "title": "NYC Pizza Festival Returns This Summer",
      "source": "Example News",
      "date": "3 hours ago",
      "image": "https://www.example-news.com/images/pizza-fest.jpg"
    },
    {
      "link": "https://www.another-outlet.com/pizza-record",
      "title": "World Record Pizza Baked in Naples",
      "source": "Another Outlet",
      "date": "5 hours ago",
      "image": "https://www.another-outlet.com/images/pizza-record.jpg"
    }
  ]
}
```

<Note>
  Query truncation detection and blocked-query behavior (`failed_query_rejected`, `repeat_query_rejected`) apply to the whole SERP API, not just Fast SERP. See [How to detect query truncation](/scraping-automation/serp-api/debugging#how-to-detect-query-truncation) and [What happens when a query is blocked](/scraping-automation/serp-api/debugging#what-happens-when-a-query-is-blocked) on the SERP API debugging page.
</Note>

Response schema, with Top Stories: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_search.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_search.schema.json)

Response schema, without Top Stories: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_search\_web.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_search_web.schema.json)

## Supported parameters

| Parameter  | Description                                | Example      | Notes                                                                            |
| ---------- | ------------------------------------------ | ------------ | -------------------------------------------------------------------------------- |
| `q`        | Search query (**must be first in URL**)    | `q=pizza`    | Query size must be under 8,000 characters. <br />Longer queries fail with error. |
| `gl`       | Two-letter country code for search country | `gl=us`      |                                                                                  |
| `hl`       | Two-letter language code for page language | `hl=en`      |                                                                                  |
| `brd_json` | **Required.**`1` = parsed JSON             | `brd_json=1` |                                                                                  |

***
