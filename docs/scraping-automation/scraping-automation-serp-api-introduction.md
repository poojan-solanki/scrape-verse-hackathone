# Introduction to SERP API

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/introduction](https://docs.brightdata.com/scraping-automation/serp-api/introduction)
> **Category**: `scraping-automation`

---

Use the Bright Data SERP API to collect structured search results from Google, Bing and other engines in under 1 second per request, with no proxy setup.

Collect search engine results at scale without managing proxies, CAPTCHAs, or parsing. Get structured data from Google, Bing, and other search engines in under 1 second.

**Perfect for:**

* SEO rank tracking and keyword monitoring
* AI agents performing web search and data enrichment
* Brand protection and ad intelligence
* Competitive market research and price comparison

<Tip>
  Pay only for successful delivery.
</Tip>

## Before you start

1. Sign in: [https://brightdata.com/cp/start](https://brightdata.com/cp/start)
2. Create a SERP API: [https://brightdata.com/cp/learn\_more/serp-api](https://brightdata.com/cp/learn_more/serp-api)
3. Get your API key: [/api-reference/authentication](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F)

<Tip>
  New to Bright Data? See the step-by-step guide: [/scraping-automation/serp-api/quickstart](/scraping-automation/serp-api/quickstart)
</Tip>

## Quickstart

A minimal request with cURL. Replace `<BRIGHT_DATA_API_KEY>` and `zone` with your values:

<CodeGroup>
  ```shell cURL theme={null}
  curl -X POST https://api.brightdata.com/request \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <BRIGHT_DATA_API_KEY>" \
    -d '{
      "zone": "YOUR_SERP_API_ZONE",
      "url": "https://www.google.com/search?q=pizza&hl=en&gl=us",
      "format": "raw"
    }'
  ```

  ```javascript Node.js theme={null}
  // Node 18+ (global fetch)
  const resp = await fetch('https://api.brightdata.com/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <BRIGHT_DATA_API_KEY>',
    },
    body: JSON.stringify({
      zone: 'YOUR_SERP_API_ZONE',
      url: 'https://www.google.com/search?q=pizza&hl=en&gl=us',
      format: 'raw' // set to "json" for parsed output
    }),
  });

  console.log(await resp.text());
  ```

  ```python Python theme={null}
  import requests

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <BRIGHT_DATA_API_KEY>',
  }

  payload = {
      'zone': 'YOUR_SERP_API_ZONE',
      'url': 'https://www.google.com/search?q=pizza&hl=en&gl=us',
      'format': 'raw'  # set to "json" for parsed output
  }

  r = requests.post('https://api.brightdata.com/request',
                    headers=headers, json=payload)

  print(r.text)
  ```
</CodeGroup>

<Tip>
  Prefer Markdown output? Set <code>"data\_format": "markdown"</code> to receive Markdown SERP structure.
</Tip>

<Tip>
  Prefer JSON output? Set query parameter <code>"brd\_json=1"</code> to receive JSON SERP structure.
</Tip>

<CardGroup>
  <Card title="Run in Postman" icon="rocket" href="https://www.postman.com/bright-data-api/bright-data-api/request/kpq952m/google-search" />

  <Card title="Node.js example" icon="code" href="https://github.com/luminati-io/bright-data-serp-api-nodejs-project" />

  <Card title="Python example" icon="code" href="https://github.com/brightdata/bright-data-serp-api-python-project" />
</CardGroup>

## What you'll get (parsed JSON preview)

A compact look at the parsed structure you can expect:

```json theme={null}
{
  "engine": "google",
  "query": "pizza",
  "results": [
    { 
      "type": "organic", 
      "position": 1, 
      "title": "Best Pizza Near Me", 
      "url": "https://example.com" 
    }
  ]
}
```

See the full schema and examples: [/scraping-automation/serp-api/parsed-json-results/parsing-search-results](/scraping-automation/serp-api/parsed-json-results/parsing-search-results#example-response)

## Supported engines and parameters

* Google, Bing, DuckDuckGo, Yandex, Baidu, Yahoo, Naver
* Engine-specific query parameters:
  * Google: [/scraping-automation/serp-api/query-parameters/google](/scraping-automation/serp-api/query-parameters/google)
  * Bing: [/scraping-automation/serp-api/query-parameters/bing](/scraping-automation/serp-api/query-parameters/bing)

## How SERP API performs

### Get only top 10 results (faster response)

If you only need the top 10 organic results without ads or knowledge panels, add `"data_format": "parsed_light"` for faster response times:

<CodeGroup>
  ```bash cURL highlight={8} theme={null}
  curl -X POST 'https://api.brightdata.com/request' \
    -H 'Authorization: Bearer <API_KEY>' \
    -H 'Content-Type: application/json' \
    -d '{
      "zone": "<ZONE_NAME>",
      "url": "https://www.google.com/search?q=pizza&hl=en&gl=us",
      "format": "raw",
      "data_format": "parsed_light"
    }'
  ```

  ```javascript scrape.js highlight={11} theme={null}
  const response = await fetch('https://api.brightdata.com/request', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <API_KEY>',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      zone: '<ZONE_NAME>',
      url: 'https://www.google.com/search?q=pizza&hl=en&gl=us',
      format: 'raw',
      data_format: 'parsed_light'
    })
  });

  const data = await response.json();
  console.log(data.organic);  // Array of top 10 results
  ```

  ```python scrape.py highlight={8} theme={null}
  response = requests.post(
      'https://api.brightdata.com/request',
      headers={'Authorization': 'Bearer <API_KEY>'},
      json={
          'zone': '<ZONE_NAME>',
          'url': 'https://www.google.com/search?q=pizza&hl=en&gl=us',
          'format': 'raw',
          'data_format': 'parsed_light'
      }
  )

  data = response.json()
  print(data['organic'])  # Array of top 10 results
  ```
</CodeGroup>

Response Example:

```json successful JSON response theme={null}
{
  "organic": [
    {
      "link": "https://example.com/pizza",
      "title": "Best Pizza in NYC - Joe's Pizza",
      "description": "Family-owned pizzeria serving authentic New York slices since 1975...",
      "global_rank": 1
    },
    {
      "link": "https://example.com/pizza-guide",
      "title": "Top 10 Pizza Places in NYC",
      "description": "Discover the highest-rated pizza restaurants across all five boroughs...",
      "global_rank": 2,
      "extensions": [
        {
          "type": "site_link",
          "link": "https://example.com/pizza-guide/brooklyn",
          "text": "Brooklyn"
        }
      ]
    }
    // ... 8 more results
  ]
}
```

### Sub-1-second response time

Get complete SERP results (organic, ads, knowledge panels, and all elements) in **under 1 second** with premium routing infrastructure designed for mission-critical AI applications.

**Ideal for:**

* AI agents performing real-time data enrichment
* Multi-step research workflows and fact verification
* Model evaluation and response grounding
* User-facing search applications requiring instant results

<Note>
  Contact your Account Manager or [sales@brightdata.com](mailto:sales@brightdata.com) to request access.
</Note>

## When to use asynchronous requests

Use async for large volumes, slower pages, or long-running queries. This improves reliability and throughput.

* Guide: [/scraping-automation/serp-api/asynchronous-requests](/scraping-automation/serp-api/asynchronous-requests)

<Tip>
  Targeting non-SERP pages? Use the Web Unlocker API: [/scraping-automation/web-unlocker](/scraping-automation/web-unlocker)
</Tip>

## Troubleshooting quick hits

* **401/403**: Check your API key and zone permissions. See: [/api-reference/authentication](/api-reference/authentication)
* **429**: Reduce concurrency or switch to async. See: [/scraping-automation/serp-api/asynchronous-requests](/scraping-automation/serp-api/asynchronous-requests)
* **Empty/partial results**: Verify engine-specific parameters (e.g., `hl`, `gl`, `uule`, `location`). See: engine query parameters above.
* **Unexpected results:** This may occur when using non-latin letters. Google search query requests demands encoding the query request in that case.
* **Still stuck?** See FAQs: [/scraping-automation/serp-api/faqs](/scraping-automation/serp-api/faqs)

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/scraping-automation/serp-api/send-your-first-request" />

  <Card title="SERP Pricing & Billing" icon="dollar-sign" href="/scraping-automation/serp-api/pricing-and-billing" />

  <Card title="Query parameters (Google)" icon="sliders" href="/scraping-automation/serp-api/query-parameters/google" />

  <Card title="Parsed JSON results" icon="list" href="/scraping-automation/serp-api/parsed-json-results/parsing-search-results" />

  <Card title="Asynchronous requests" icon="clock" href="/scraping-automation/serp-api/asynchronous-requests" />

  <Card title="Quick Start" icon="road" href="/scraping-automation/serp-api/quickstart" />

  <Card title="FAQs" icon="circle-question" href="/scraping-automation/serp-api/faqs" />
</CardGroup>
