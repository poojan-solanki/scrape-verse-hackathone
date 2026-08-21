# LinkedIn Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/linkedin/introduction](https://docs.brightdata.com/datasets/scrapers/linkedin/introduction)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data [LinkedIn Scraper API](https://brightdata.com/products/web-scraper/linkedin) to extract structured data from profiles, companies, jobs and posts. Handles up to 20 URLs per request.

Send a LinkedIn URL, get structured JSON back. The Bright Data LinkedIn Scraper API handles proxies, CAPTCHAs, and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more LinkedIn URLs to the Bright Data LinkedIn Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (profiles, companies, jobs, or posts) and return results in JSON, NDJSON, or CSV.

## What the response looks like

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1viktl72bvl7bjuj0&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/in/satyanadella"}]'
```

```json theme={null}
{
  "name": "Satya Nadella",
  "city": "Redmond",
  "country_code": "US",
  "current_company": { "name": "Microsoft" },
  "followers": 10842560,
  "about": "Chairman and CEO at Microsoft..."
}
```

## Supported data types

<CardGroup>
  <Card title="Profiles" icon="user" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url">
    Work history, education, skills, connections. Discover profiles by name or keyword.
  </Card>

  <Card title="Companies" icon="building" href="/api-reference/scrapers/social-media-apis/linkedin-companies-collect-by-url">
    Employee counts, funding data, specialties, affiliated organizations.
  </Card>

  <Card title="Jobs" icon="briefcase" href="/api-reference/scrapers/social-media-apis/linkedin-jobs-collect-by-url">
    Salary data, requirements, application links. Discover jobs by keyword or search URL.
  </Card>

  <Card title="Posts" icon="message" href="/api-reference/scrapers/social-media-apis/linkedin-posts-collect-by-url">
    Post content, engagement metrics, hashtags, comments. Discover posts by company or profile.
  </Card>
</CardGroup>

## Request methods

The Bright Data LinkedIn Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                    | Best for                                   |
| :--------------- | :---------------------------------------------------------- | :----------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/linkedin/send-first-request) | Real-time lookups, up to 20 URLs           |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/linkedin/async-requests)    | Batch jobs, 20+ URLs, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                                                                                                                                     |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                                                                                                                                          |
| **Max URLs per sync request**  | 20                                                                                                                                                                                                                                         |
| **Max URLs per async request** | 5,000                                                                                                                                                                                                                                      |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                                                                                                                              |
| **Delivery options**           | API download, [Webhook](/datasets/scrapers/linkedin/data-delivery/webhooks), [Amazon S3](/datasets/scrapers/linkedin/data-delivery/amazon-s3), Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                                                                                                                                      |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape. There is no cached or stale data. Response times vary by endpoint: profiles typically return in 10-30 seconds (sync), while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between URL collection and discovery?">
  **URL collection** scrapes a specific LinkedIn page you provide (e.g., a profile URL). **Discovery** finds LinkedIn pages matching search criteria (e.g., "software engineers in San Francisco") and scrapes the results. Discovery is only available via async requests.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain
  your own parsing logic and update it whenever LinkedIn changes its page structure.
  The LinkedIn Scraper API handles the entire stack: proxy rotation, anti-bot bypassing
  and parsing. You simply send a LinkedIn URL and get clean, structured JSON back with
  no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/linkedin/quickstart">
    Scrape your first LinkedIn profile in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/linkedin/send-first-request">
    Full code examples in cURL, Python, and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url">
    Endpoint specs, parameters, and response schemas.
  </Card>
</CardGroup>
