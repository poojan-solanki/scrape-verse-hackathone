# ChatGPT Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/chatgpt/introduction](https://docs.brightdata.com/datasets/scrapers/chatgpt/introduction)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data [ChatGPT Scraper API](https://brightdata.com/products/web-scraper/chatgpt) to extract structured search results, citations and answers. Handles up to 20 inputs per request.

Send a prompt, get structured search results back. The Bright Data ChatGPT Scraper API handles proxies, browser automation, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/products/web-scraper/chatgpt?hs_signup=1\&utm_source=docs) and get **5,000 free credits every month**, no credit card required. That's up to **5,000 ChatGPT records** to start scraping. See the [free tier](/general/account/billing-and-pricing/free-tier).
</Tip>

## How it works

You send a prompt to the Bright Data ChatGPT Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON with the answer, citations, and sources.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use the `dataset_id` for ChatGPT Search and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"}]'
```

```json theme={null}
{
  "url": "https://chatgpt.com/",
  "prompt": "Top hotels in New York",
  "answer_text": "Here are some of the top-rated hotels in New York City...",
  "model": "gpt-4o",
  "web_search_triggered": true,
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
  "prompt_sent_at": "2026-04-08T12:00:00.000Z"
}
```

## Which capabilities are supported

<CardGroup>
  <Card title="Search with Citations" icon="quote-right" href="/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt">
    Get structured answers with source citations, positions, and linked references from ChatGPT web search.
  </Card>

  <Card title="Follow-up Prompts" icon="comments" href="/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt">
    Send an additional prompt to get follow-up answers within the same search context.
  </Card>

  <Card title="Shopping and Map Results" icon="store" href="/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt">
    Detect when ChatGPT returns shopping product cards or map-based results for location queries.
  </Card>

  <Card title="Web Search Control" icon="globe" href="/datasets/scrapers/concepts/query-fan-out">
    Use `web_search` to allow or disable live web search and `web_search_triggered` to know whether a search actually ran.
  </Card>
</CardGroup>

## Request methods

The Bright Data ChatGPT Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                   | Best for                                     |
| :--------------- | :--------------------------------------------------------- | :------------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/chatgpt/send-first-request) | Real-time lookups, up to 20 inputs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/chatgpt/async-requests)    | Batch jobs, 20+ inputs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                       | Detail                                                                                                                                                                                                                                   |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**               | JSON, NDJSON, CSV                                                                                                                                                                                                                        |
| **Max inputs per sync request**  | 20                                                                                                                                                                                                                                       |
| **Max inputs per async request** | 5,000                                                                                                                                                                                                                                    |
| **Max prompt length**            | 4,096 characters                                                                                                                                                                                                                         |
| **Data freshness**               | Real-time (scraped on demand)                                                                                                                                                                                                            |
| **Context between requests**     | None (each request is independent)                                                                                                                                                                                                       |
| **Delivery options**             | API download, [Webhook](/datasets/scrapers/chatgpt/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/chatgpt/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                      | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                    |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live ChatGPT search session. There is no cached or stale data. Response times vary depending on prompt complexity and whether web search is enabled.
</Accordion>

<Accordion title="Can I maintain conversation context across requests?">
  No. Each request starts a fresh ChatGPT session. There is no memory or context carried over between requests. To ask a follow-up question within a single request, use the `additional_prompt` field.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain your own browser automation and parsing logic, and update it whenever ChatGPT changes its interface. The ChatGPT Scraper API handles the entire stack: proxy rotation, anti-bot bypassing, browser automation, and parsing. You simply send a prompt and get clean, structured JSON back with no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/chatgpt/quickstart">
    Search ChatGPT with your first prompt in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/chatgpt/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
