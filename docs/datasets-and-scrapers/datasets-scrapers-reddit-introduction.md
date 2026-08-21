# Reddit Scraper API

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/reddit/introduction](https://docs.brightdata.com/datasets/scrapers/reddit/introduction)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data Reddit Scraper API to extract structured data from posts, comments and subreddits. Handles up to 20 URLs per request.

Send a Reddit URL or a keyword, get structured JSON back. The Bright Data Reddit Scraper API handles proxies, CAPTCHAs and parsing so you can focus on your data pipeline.

<Tip>
  New to Bright Data? [Create a free account](https://brightdata.com/cp/start) and get \$2 credit to start scraping.
</Tip>

## How it works

You send one or more Reddit URLs or keywords to the Bright Data Reddit Scraper API. Bright Data handles the scraping infrastructure and returns clean, structured JSON.

```text theme={null}
Your app  -->  Bright Data API  -->  Structured JSON
           POST /datasets/v3/scrape
           Authorization: Bearer YOUR_API_KEY
```

All requests use a `dataset_id` to specify the data type (posts or comments) and return results in JSON, NDJSON or CSV.

## Supported data types

<CardGroup>
  <Card title="Posts" icon="images" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url">
    Titles, descriptions, upvotes, community stats and attached media. Collect by post URL or discover by keyword or subreddit URL.
  </Card>

  <Card title="Comments" icon="comments" href="/api-reference/scrapers/social-media-apis/reddit-comments-collect-by-url">
    Comment text, replies, upvotes and post context. Collect by post or comment URL, with optional day-based filtering.
  </Card>
</CardGroup>

## Which endpoints are available

The Reddit Scraper API exposes two dataset families. Each family supports one or more input shapes.

| Dataset                                                        | Input                                    | What it returns                                           |
| :------------------------------------------------------------- | :--------------------------------------- | :-------------------------------------------------------- |
| **Posts, Collect by URL** (`gd_lvz8ah06191smkebj4`)            | `url` (post URL)                         | A single post with metadata, community info and media     |
| **Posts, Discover by keyword** (`gd_lvz8ah06191smkebj4`)       | `keyword`, `date`, `num_of_posts`        | Posts matching a search term, filtered by date            |
| **Posts, Discover by subreddit URL** (`gd_lvz8ah06191smkebj4`) | `url` (subreddit URL), `sort_by`         | Posts from one subreddit, sorted by `new`, `top` or `hot` |
| **Comments, Collect by URL** (`gd_lvzdpsdlw09j6t702`)          | `url` (post or comment URL), `days_back` | Comments from a post with full thread context             |

## Request methods

The Bright Data Reddit Scraper API supports two request methods. Choose based on your volume and latency needs.

| Method           | Endpoint                                                  | Best for                                              |
| :--------------- | :-------------------------------------------------------- | :---------------------------------------------------- |
| **Synchronous**  | [`/scrape`](/datasets/scrapers/reddit/send-first-request) | Real-time lookups, up to 20 URLs                      |
| **Asynchronous** | [`/trigger`](/datasets/scrapers/reddit/async-requests)    | Batch jobs, 20+ URLs, discovery, production pipelines |

Learn more in [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async).

## Capabilities and limits

| Capability                     | Detail                                                                                                                        |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Output formats**             | JSON, NDJSON, CSV                                                                                                             |
| **Max URLs per sync request**  | 20                                                                                                                            |
| **Max URLs per async request** | 5,000                                                                                                                         |
| **Data freshness**             | Real-time (scraped on demand)                                                                                                 |
| **Delivery options**           | API download, webhook, Amazon S3, Snowflake, Azure, GCS ([all options](/datasets/scrapers/scrapers-library/delivery-options)) |
| **Pricing**                    | Pay per successful record ([see pricing](https://brightdata.com/pricing/web-scraper))                                         |

## Common questions

<Accordion title="Is the data scraped in real time?">
  Yes. Each request triggers a live scrape against Reddit. There is no cached or stale data. Response times vary by endpoint: Collect-by-URL requests typically return in 10 to 30 seconds, while discovery requests may take longer depending on result volume.
</Accordion>

<Accordion title="What is the difference between Collect and Discover?">
  **Collect by URL** scrapes a specific Reddit page you provide, a single post, a comment thread or a subreddit. **Discover** finds Reddit posts matching search criteria such as a keyword or a subreddit listing, then scrapes the results. Discovery is most useful via async requests when you don't know the exact URLs up front.
</Accordion>

<Accordion title="Can I collect only recent comments from a post?">
  Yes. The Comments API accepts an optional `days_back` parameter. Pass an integer to limit results to comments posted within that many days.
</Accordion>

<Accordion title="How is this different from scraping using proxies or Web Unlocker?">
  When scraping using proxies or Web Unlocker, you still need to write and maintain your own parsing logic and update it whenever Reddit changes its page structure. The Reddit Scraper API handles the entire stack: proxy rotation, anti-bot bypassing and parsing. You simply send a Reddit URL or keyword and get clean, structured JSON back with no scraping infrastructure or parser maintenance required on your end.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/datasets/scrapers/reddit/quickstart">
    Scrape your first Reddit post in 5 minutes.
  </Card>

  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/reddit/send-first-request">
    Full code examples for every endpoint in cURL, Python and Node.js.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url">
    Endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
