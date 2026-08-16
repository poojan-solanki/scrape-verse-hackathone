# Web Scraper API vs DIY scraping

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/concepts/web-scraper-api-vs-diy](https://docs.brightdata.com/datasets/scrapers/concepts/web-scraper-api-vs-diy)
> **Category**: `datasets-and-scrapers`

---

Compare Bright Data Web Scraper API (1000+ pre-built scrapers) with DIY scraping (proxies + custom code) to decide which approach fits your use case.

Every scraping project starts the same way: write a parser, add proxy rotation, deploy. It works until the target site changes its DOM, adds a CAPTCHA, or starts fingerprinting headless browsers. Then you're maintaining scrapers instead of using the data.

This guide compares the DIY approach (proxies + custom code) with Bright Data Web Scraper API (1000+ pre-built, maintained scrapers), so you can decide which fits your use case.

## What is DIY scraping?

DIY scraping means you build and maintain the entire pipeline yourself:

* A scraper (BeautifulSoup, Playwright, Puppeteer, Scrapy)
* A proxy layer for IP rotation
* Retry and error-handling logic
* A scheduler to run jobs on a recurring basis

This gives you full control. You choose your selectors and handle edge cases your way.

The tradeoff is maintenance. Every target site becomes a separate codebase that breaks independently when the site changes its DOM, adds anti-bot measures, or starts fingerprinting headless browsers.

## What is Bright Data Web Scraper API?

Bright Data Web Scraper API is a collection of [1000+ pre-built scrapers](https://brightdata.com/cp/scrapers/browse) maintained by Bright Data's engineering team, covering top sites including LinkedIn, Amazon, Instagram, YouTube, TikTok, Google Maps, and many more. You send a URL, you get structured JSON back, no parsing, no selectors, no proxy configuration.

Each scraper returns an [average of 220+ data fields](https://aimultiple.com/serp-scraper-api), covering granular details like rich snippets, map coordinates, ad extensions, and structured metadata that most DIY scrapers miss.

If your target site isn't covered, you can build a custom scraper in minutes using [Bright Data Scraper Studio](/datasets/scraper-studio/introduction): just pass a URL and a plain-language description of the data you need. When a site changes its frontend and breaks your scraper, the [Self-healing tool](/datasets/scraper-studio/self-healing-tool) rewrites the affected code based on a prompt, so you don't need to dig into the script manually.

## The same scrape, two ways

Here's what scraping an Amazon product page looks like with each approach.

**DIY with Playwright**: you write and maintain every selector:

```python Python theme={null}
from playwright.sync_api import sync_playwright

def scrape_amazon_product(url: str, proxy: str) -> dict:
    with sync_playwright() as p:
        browser = p.chromium.launch(proxy={"server": proxy})
        page = browser.new_page()
        page.goto(url, wait_until="domcontentloaded")

        title = page.query_selector("#productTitle").inner_text().strip()
        price = page.query_selector(".a-price .a-offscreen").inner_text()
        rating = page.query_selector("#acrPopover span").inner_text()

        browser.close()
        return {"title": title, "price": price, "rating": rating}
```

<Warning>
  Those CSS selectors (`#productTitle`, `.a-price .a-offscreen`) break whenever Amazon updates their frontend. When that happens, your scraper silently returns wrong data or crashes.
</Warning>

**Web Scraper API**: one API call, structured output:

```bash cURL theme={null}
curl "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l7q7dkf244hwjntr0&format=json" \
  -H "Authorization: Bearer API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.amazon.com/dp/B0EXAMPLE"}]'
```

```json Response theme={null}
{
  "title": "Wireless Bluetooth Headphones",
  "price": 49.99,
  "currency": "USD",
  "rating": 4.5,
  "reviews_count": 12847,
  "seller": "TechBrand Official",
  "availability": "In Stock"
}
```

<Tip>
  Find the `dataset_id` for your target site in the [Scrapers Library](/datasets/scrapers/scrapers-library/overview). Each site has its own ID.
</Tip>

## How DIY and Web Scraper API compare

|                          | DIY (proxies + custom code)                       | Web Scraper API                                                                         |
| ------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Scraping logic**       | You write and maintain selectors                  | Pre-built for each site                                                                 |
| **Anti-bot handling**    | You manage CAPTCHAs, fingerprinting, stealth      | Automatic                                                                               |
| **When sites change**    | You debug and redeploy                            | Bright Data updates the scraper                                                         |
| **Output format**        | Raw HTML you parse into structured data           | Structured JSON/CSV with named fields                                                   |
| **Data fields**          | Only what you code selectors for                  | [220+ fields on average per scraper](https://aimultiple.com/serp-scraper-api)           |
| **Time to first result** | Hours to days                                     | Minutes                                                                                 |
| **Ongoing maintenance**  | You, indefinitely                                 | Bright Data's scraper team                                                              |
| **Success rate**         | Typically 60–85% depending on anti-bot investment | [98.44% average](https://brightdata.com/blog/web-data/best-web-scraping-apis)           |
| **Supported sites**      | Any site you can write a parser for               | [1000+ pre-built](https://brightdata.com/cp/scrapers/browse); custom via Scraper Studio |

## Which sites are supported

The [Scrapers Library](/datasets/scrapers/scrapers-library/overview) includes ready-made scrapers across categories:

| Category           | Example sites                            |
| ------------------ | ---------------------------------------- |
| **E-commerce**     | Amazon, Walmart, eBay, Shopify           |
| **Social media**   | LinkedIn, Instagram, TikTok, X, Facebook |
| **Search engines** | Google, Bing, Yahoo, DuckDuckGo          |
| **Real estate**    | Zillow, Realtor, Redfin                  |
| **Travel**         | Booking.com, Tripadvisor, Airbnb         |
| **Jobs & B2B**     | Indeed, Glassdoor, Crunchbase            |

If your target isn't in the library, [Bright Data Scraper Studio](/datasets/scraper-studio/ai-agent) can generate a custom scraper from a URL and a natural language description of the data you need.

## Sync vs async collection

Web Scraper API supports two collection modes:

| Mode             | Endpoint   | Best for                                         | Concurrency limit                    |
| ---------------- | ---------- | ------------------------------------------------ | ------------------------------------ |
| **Synchronous**  | `/scrape`  | Single-URL lookups, price checks, CRM enrichment | 5,000 concurrent requests            |
| **Asynchronous** | `/trigger` | Batch jobs with hundreds or thousands of URLs    | 100 concurrent jobs, 1 GB input each |

Sync returns results in the same HTTP response. Async returns a `snapshot_id`: you poll for progress or receive results via webhook. Delivery options include webhooks (JSON, NDJSON, CSV), S3, Google Cloud, and Snowflake.

<Note>
  Sync requests have a 1-minute timeout. If the scrape takes longer, it auto-converts to async and returns a `snapshot_id`.
</Note>

For endpoint examples and request/response formats, see the [Quickstart guide](/datasets/scrapers/scrapers-library/quickstart).

## When to use what

| If you need...                          | Use                                                                               | You write code?            | You maintain scrapers? |
| --------------------------------------- | --------------------------------------------------------------------------------- | -------------------------- | ---------------------- |
| Structured data from popular sites      | **Web Scraper API**                                                               | API calls only             | No                     |
| Raw HTML from any site (custom parsing) | **[Web Unlocker](/scraping-automation/web-unlocker/bestpractices)**               | Yes                        | Yes                    |
| JS-heavy pages (clicks, scrolls, forms) | **[Bright Data Browser API](/scraping-automation/scraping-browser/introduction)** | Yes (Playwright/Puppeteer) | Yes                    |
| Full control over your existing stack   | **[Proxies](/proxy-networks/introduction)**                                       | Yes (everything)           | Yes                    |

## Limitations and tradeoffs

**Predefined data fields.** Each pre-built scraper returns an average of 220+ structured fields, which covers most use cases. If you need a field that isn't included, you can use [Bright Data Scraper Studio](/datasets/scraper-studio/ai-agent) to customize the scraper's output or fall back to [Web Unlocker](/scraping-automation/web-unlocker/bestpractices) for raw HTML.

**Latency.** Sync scrapes typically return in seconds, but complex sites may take longer and auto-convert to async. If you need sub-second responses, you may want to cache results or use pre-scraped [Datasets](https://brightdata.com/products/datasets).

## FAQs

<AccordionGroup>
  <Accordion title="How much does Web Scraper API cost?">
    Pricing starts at \$1 per 1,000 records for standard domains and \$2.50 per 1,000 for premium targets. New accounts get 5,000 free credits per month (no credit card required), plus a matched deposit of up to \$500. See the [pricing page](https://brightdata.com/pricing/web-scraper) and [free tier](/general/account/billing-and-pricing/free-tier) for full details.
  </Accordion>

  <Accordion title="Can I use Web Scraper API with Python, Node.js, or other languages?">
    Yes. Web Scraper API is a standard REST API, so any language that can make HTTP requests works. Bright Data also provides an official [Python SDK](/sdk-quickstart) and a [CLI tool](/cli/overview) for terminal-based workflows. See the [Quickstart guide](/datasets/scrapers/scrapers-library/quickstart) for examples.
  </Accordion>

  <Accordion title="What output formats does Web Scraper API support?">
    JSON, NDJSON (newline-delimited JSON), JSON Lines, and CSV. Results can be delivered via webhook (up to 1 GB), API download (up to 5 GB), or pushed to external storage (S3, Google Cloud, Snowflake).
  </Accordion>

  <Accordion title="Should I use Web Scraper API or Web Unlocker?">
    Use **Web Scraper API** when you want structured data from a supported site with zero scraper maintenance. Use **[Web Unlocker](/scraping-automation/web-unlocker/bestpractices)** when you need raw HTML from any site and want to write your own custom parsing logic. Web Unlocker handles anti-bot bypass but returns HTML, not structured fields.
  </Accordion>

  <Accordion title="Does Web Scraper API work for AI and LLM training pipelines?">
    Yes. The structured JSON output is directly ingestable by AI pipelines without HTML cleaning or parsing. Bright Data also offers integration with MCP servers, LlamaIndex, Google ADK, Dify, and many more.
  </Accordion>

  <Accordion title="Is web scraping with Bright Data compliant and ethical?">
    Bright Data operates under strict compliance standards. All scrapers collect only publicly available data. See the [Trust Center](https://brightdata.com/trustcenter) for their ethical web data collection policies, KYC process, and compliance framework.
  </Accordion>
</AccordionGroup>
