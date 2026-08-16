# Google Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/google/introduction](https://docs.brightdata.com/datasets/scrapers/google/introduction)
> **Category**: `datasets-and-scrapers`

---

Extract structured data from Google Maps, Shopping, SERP, Flights, Hotels and more using the Bright Data Google Scraper API. Handles up to 100 organic results.

Send a Google URL or a keyword, get structured JSON back. The Bright Data Google Scraper API covers Maps, Shopping, Search results, AI Mode Search, Flights and Hotels with consistent request and response shapes.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more Google URLs, keywords or structured inputs to the Bright Data Google Scraper API. Bright Data handles proxies, CAPTCHAs and parsing, then returns clean JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the Google product and return results in JSON, NDJSON, JSON Lines or CSV.

## Supported data types

<CardGroup>
  <Card title="Google Maps" icon="map-location-dot" href="/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url">
    Places, reviews, ratings, photos and community stats. Collect by URL or discover by CID, place ID or geographic location.
  </Card>

  <Card title="Google Maps Reviews" icon="star" href="/api-reference/scrapers/search-engines-apis/google-maps-reviews-collect-by-url">
    Full review text, ratings and reviewer metadata, filtered by a configurable lookback window.
  </Card>

  <Card title="Google Shopping" icon="bag-shopping" href="/api-reference/scrapers/search-engines-apis/google-shopping-collect-by-url">
    Product listings, pricing, merchants and specifications. Collect by URL or discover by keyword.
  </Card>

  <Card title="Google Shopping Search US" icon="store" href="/api-reference/scrapers/search-engines-apis/google-shopping-products-search-us-collect-by-url">
    US-focused product search results with expanded merchant and pricing coverage.
  </Card>

  <Card title="Google SERP 100 Results" icon="magnifying-glass" href="/scraping-automation/serp-api/get-top-100-google-results">
    Up to 100 organic results per query with language, device and geographic targeting.
  </Card>

  <Card title="Google AI Mode Search" icon="robot" href="/api-reference/scrapers/search-engines-apis/google-ai-mode-search-collect-by-url">
    Answers and citations from Google's AI-powered search experience.
  </Card>

  <Card title="Google Flights" icon="plane" href="/api-reference/scrapers/search-engines-apis/google-flights-collect-by-url">
    Flight options, pricing and itineraries. Collect by URL or discover by route and dates.
  </Card>

  <Card title="Google Hotels" icon="bed" href="/api-reference/scrapers/search-engines-apis/google-hotel-collect-by-url">
    Hotel rates, availability and amenities. Collect by URL, filter URL or search parameters.
  </Card>
</CardGroup>

## Which dataset IDs to use

Each Google product uses its own `dataset_id`. Pass the ID as a query parameter on every request.

| Product                            | Dataset ID              |
| :--------------------------------- | :---------------------- |
| Google Maps full info              | `gd_m8ebnr0q2qlklc02fz` |
| Google Maps Reviews                | `gd_luzfs1dn2oa0teb81`  |
| Google Shopping                    | `gd_ltppk50q18kdw67omz` |
| Google Shopping products search US | `gd_m31f2k0d2m1bah4f3b` |
| Google SERP 100 Results            | `gd_mfz5x93lmsjjjylob`  |
| Google AI Mode Search              | `gd_mcswdt6z2elth3zqr2` |
| Google Flights                     | `gd_mhng7wen1rw0a3gvpf` |
| Google Hotels                      | `gd_mg3gjfmg12tc2n5d4d` |

## Request methods

The Google Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                  | Best for                                                |
| :--------------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/google/send-first-request) | Real-time lookups, up to 20 inputs                      |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/google/async-requests)    | Batch jobs, 20+ inputs, discovery, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                       | Detail                                                                                                                        |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**               | JSON, NDJSON, JSON Lines, CSV                                                                                                 |
| **Max inputs per sync request**  | 20                                                                                                                            |
| **Max inputs per async request** | 5,000                                                                                                                         |
| **Data freshness**               | Real-time (scraped on demand)                                                                                                 |
| **Delivery options**             | API download, webhook, Amazon S3, Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                      | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                         |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape against Google. There is no cached or stale data. Response times vary by endpoint: Collect-by-URL requests typically return in 10 to 30 seconds, while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between Collect and Discover?">
  **Collect by URL** scrapes a specific Google page you provide, such as a single Maps place, a Shopping product or a SERP URL. **Discover** finds Google records matching search criteria such as a keyword, a CID or a geographic area, then scrapes the results. Discovery is most useful via async requests when you don't know the exact URLs up front.
</Accordion>

<Accordion title="Can I target a specific country or language?">
  Yes. Most endpoints accept a `country` parameter (ISO 3166-1 alpha-2 code), and the SERP 100 endpoint also accepts `language` and `uule` for geographic targeting. See each endpoint's reference page for the full parameter list.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping with proxies or Web Unlocker, you still need to write and maintain your own parsing logic and update it whenever Google changes its page structure. The Google Scraper API handles the entire stack: proxy rotation, anti-bot bypassing and parsing. You send a URL or keyword and get clean, structured JSON back with no scraping infrastructure or parser maintenance on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/google/quickstart">
    Scrape your first Google Maps place in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/google/send-first-request">
    Full code examples for every endpoint in cURL, Python and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url">
    Endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
