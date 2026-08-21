# Send your first ChatGPT search request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/chatgpt/send-first-request](https://docs.brightdata.com/datasets/scrapers/chatgpt/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Make synchronous requests to the Bright Data ChatGPT Scraper API with copy-paste examples for search, targeting across 195 countries and follow-up prompts.

This tutorial walks you through sending synchronous requests to the Bright Data ChatGPT Scraper API. By the end, you'll have working examples for basic search, country-targeted search, and follow-up prompts.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/chatgpt/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://chatgpt.com/", "prompt": "Your search prompt here"}]
```

The `url` field is always `https://chatgpt.com/`. The `prompt` field contains your search query.

<Note>
  Synchronous requests support up to 20 inputs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/chatgpt/async-requests).
</Note>

## How to scrape ChatGPT Search

**Dataset ID:** `gd_m7aof0k82r803d5bjm`

### How to send a basic search

Send a prompt and get a structured answer with citations:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"}]'
```

You should see a `200` response. This takes 15-45 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://chatgpt.com/",
      "prompt": "Top hotels in New York",
      "answer_text": "Here are some of the top-rated hotels in New York City...",
      "answer_text_markdown": "Here are some of the top-rated hotels in **New York City**...",
      "model": "gpt-4o",
      "web_search_triggered": true,
      "is_map": false,
      "shopping_visible": false,
      "citations": [
        {
          "title": "Best Hotels in NYC - Travel Guide",
          "url": "https://example.com/nyc-hotels",
          "position": 1
        }
      ],
      "search_sources": [
        {
          "url": "https://example.com/nyc-hotels",
          "title": "Best Hotels in NYC - Travel Guide"
        }
      ],
      "links_attached": [
        {
          "url": "https://example.com/nyc-hotels",
          "text": "Travel Guide"
        }
      ],
      "recommendations": [],
      "references": [],
      "prompt_sent_at": "2026-04-08T12:00:00.000Z"
    }
  ]
  ```
</Accordion>

### Search with country targeting

Use the `country` field to get location-specific results:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://chatgpt.com/", "prompt": "Best local restaurants", "country": "JP"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://chatgpt.com/",
      "prompt": "Best local restaurants",
      "answer_text": "Here are some highly recommended local restaurants in Japan...",
      "model": "gpt-4o",
      "web_search_triggered": true,
      "is_map": true,
      "citations": [
        {
          "title": "Top Restaurants in Tokyo",
          "url": "https://example.com/tokyo-restaurants",
          "position": 1
        }
      ],
      "prompt_sent_at": "2026-04-08T12:05:00.000Z"
    }
  ]
  ```
</Accordion>

### Search with follow-up prompt

Use the `additional_prompt` field to ask a follow-up question in the same session:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York", "additional_prompt": "Which of these are pet-friendly?"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "url": "https://chatgpt.com/",
      "prompt": "Top hotels in New York",
      "answer_text": "Here are some of the top-rated hotels in New York City...",
      "additional_answer_text": "Among the hotels listed, the following are pet-friendly...",
      "model": "gpt-4o",
      "web_search_triggered": true,
      "citations": [
        {
          "title": "Pet-Friendly Hotels NYC",
          "url": "https://example.com/pet-friendly-nyc",
          "position": 1
        }
      ],
      "prompt_sent_at": "2026-04-08T12:10:00.000Z"
    }
  ]
  ```
</Accordion>

[Full ChatGPT Search response schema](/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt)

## Quick reference: dataset ID

| Endpoint       | Dataset ID              | Input            |
| :------------- | :---------------------- | :--------------- |
| ChatGPT Search | `gd_m7aof0k82r803d5bjm` | `url` + `prompt` |

## Input fields

| Field               | Required | Description                                                                                                                                                                                                                                                                        |
| :------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`               | Yes      | Always `https://chatgpt.com/`                                                                                                                                                                                                                                                      |
| `prompt`            | Yes      | Search prompt (max 4,096 characters)                                                                                                                                                                                                                                               |
| `country`           | No       | Country code for location-targeted results                                                                                                                                                                                                                                         |
| `index`             | No       | Unique tracking ID (number)                                                                                                                                                                                                                                                        |
| `require_sources`   | No       | Return error if no sources found (boolean)                                                                                                                                                                                                                                         |
| `additional_prompt` | No       | Follow-up prompt within the same session                                                                                                                                                                                                                                           |
| `web_search`        | No       | Enable or disable web search during the run (default: `true`). This is a **permission, not a guarantee**: read `web_search_triggered` in the response to know whether a search actually ran. See [Query fan-out and web search control](/datasets/scrapers/concepts/query-fan-out) |

## Output fields (web search signals)

| Field                  | Type    | Always returned | Meaning                                                                                                       |
| :--------------------- | :------ | :-------------- | :------------------------------------------------------------------------------------------------------------ |
| `web_search`           | boolean | No              | Echoes the input value (defaults to `true` if omitted). Does not indicate whether a search actually happened. |
| `web_search_triggered` | boolean | Yes             | `true` only if the model actually triggered a web search during the run; `false` otherwise.                   |

<Note>
  Do not use prompt-derived output fields like `is_map`, `citations`, or `shopping_visible` as proof that a web search ran. Those fields depend on the prompt and the model's response format. Use `web_search_triggered` as the canonical signal. Full rules in [Query fan-out and web search control](/datasets/scrapers/concepts/query-fan-out).
</Note>

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/chatgpt/async-requests">
    Search ChatGPT with hundreds of prompts in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt">
    Full parameter and response field reference.
  </Card>
</CardGroup>
