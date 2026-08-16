# JavaScript SDK

> **Official Source**: [https://docs.brightdata.com/api-reference/SDK-JS](https://docs.brightdata.com/api-reference/SDK-JS)
> **Category**: `api-reference`

---

Install and use the Bright Data JavaScript SDK (1000+ scrapers) to scrape URLs, search Google/Bing/Yandex and connect to the Browser API from Node.js.

This guide shows how to install the Bright Data JavaScript SDK, scrape URLs, run searches, call platform-specific scrapers (LinkedIn, Amazon, Instagram, and more), and connect to the Browser API and Scraper Studio from Node.js.

## Install the package

Open the terminal and run:

```bash theme={null}
npm install @brightdata/sdk
```

In your code file, import the package and launch your first requests:

```javascript theme={null}
import { bdclient } from '@brightdata/sdk';

const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

const html = await client.scrapeUrl('https://example.com');
const google = await client.search.google('pizza restaurants');

console.log(google);
await client.close();
```

## Launch scrapes and web searches

<CodeGroup>
  ```javascript search(...) theme={null}
  import { bdclient } from '@brightdata/sdk';

  const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

  const google = await client.search.google('best laptops 2026');
  const bing = await client.search.bing('python tutorial');
  const yandex = await client.search.yandex('AI news');

  console.log({ google, bing, yandex });
  await client.close();
  ```

  ```javascript scrape(...) theme={null}
  import { bdclient } from '@brightdata/sdk';

  const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

  const html = await client.scrapeUrl('https://example.com');
  const md = await client.scrapeUrl('https://example.com', {
      dataFormat: 'markdown',
      country: 'us',
  });

  console.log({ html, md });
  await client.close();
  ```
</CodeGroup>

## Platform scrapers and datasets

Collect data from popular platforms by URL, or discover content by parameters.

<CodeGroup>
  ```javascript LinkedIn theme={null}
  import { bdclient } from '@brightdata/sdk';

  const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

  // Collect by URL
  const profiles = await client.scrape.linkedin.collectProfiles([
      'https://www.linkedin.com/in/satyanadella/',
  ]);
  const companies = await client.scrape.linkedin.collectCompanies([
      'https://www.linkedin.com/company/bright-data',
  ]);
  const jobs = await client.scrape.linkedin.collectJobs([
      'https://www.linkedin.com/jobs/view/123456',
  ]);
  const posts = await client.scrape.linkedin.collectPosts([
      'https://www.linkedin.com/feed/update/urn:li:activity:123',
  ]);

  // Discover by parameters
  const byKeyword = await client.scrape.linkedin.discoverJobs(
      [{ keyword: 'python developer', location: 'New York', remote: true }],
      {}
  );
  const byName = await client.scrape.linkedin.discoverProfiles(
      [{ firstName: 'John', lastName: 'Doe' }],
      {}
  );
  const compPosts = await client.scrape.linkedin.discoverCompanyPosts(
      [{ url: 'https://www.linkedin.com/company/bright-data' }],
      {}
  );
  const userPosts = await client.scrape.linkedin.discoverUserPosts(
      [{ url: 'https://www.linkedin.com/in/satyanadella' }],
      {}
  );
  ```

  ```javascript Amazon theme={null}
  import { bdclient } from '@brightdata/sdk';

  const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

  // Collect by URL
  const products = await client.scrape.amazon.collectProducts(
      ['https://www.amazon.com/dp/B0D77BX8Y4'],
      {}
  );
  const reviews = await client.scrape.amazon.collectReviews(
      ['https://www.amazon.com/dp/B0D77BX8Y4'],
      {}
  );
  const sellers = await client.scrape.amazon.collectSellers(
      ['https://www.amazon.com/sp?seller=AXXX'],
      {}
  );

  // Discover by parameters
  const byKeyword = await client.scrape.amazon.discoverProductsByKeyword(
      [{ keyword: 'wireless headphones' }],
      {}
  );
  const byCategory = await client.scrape.amazon.discoverProductsByCategoryURL(
      ['https://amazon.com/s?category=electronics'],
      {}
  );
  const byBSUrl = await client.scrape.amazon.discoverProductsByBestSellerURL(
      ['https://amazon.com/gp/bestsellers/electronics'],
      {}
  );

  // One-call orchestrated (trigger, poll, and return)
  const result = await client.scrape.amazon.products([
      'https://www.amazon.com/dp/B0D77BX8Y4',
  ]);
  ```

  ```javascript Instagram theme={null}
  const profiles = await client.scrape.instagram.collectProfiles([
      'https://www.instagram.com/natgeo/',
  ]);
  const posts = await client.scrape.instagram.collectPosts([
      'https://www.instagram.com/p/ABC123/',
  ]);
  const reels = await client.scrape.instagram.collectReels([
      'https://www.instagram.com/reel/XYZ789/',
  ]);
  const comments = await client.scrape.instagram.collectComments([
      'https://www.instagram.com/p/ABC123/',
  ]);
  ```

  ```javascript Facebook theme={null}
  const profilePosts = await client.scrape.facebook.collectPostsByProfile([
      'https://www.facebook.com/nasa',
  ]);
  const groupPosts = await client.scrape.facebook.collectPostsByGroup([
      'https://www.facebook.com/groups/example',
  ]);
  const postByUrl = await client.scrape.facebook.collectPostsByUrl([
      'https://www.facebook.com/post/123456',
  ]);
  const comments = await client.scrape.facebook.collectComments([
      'https://www.facebook.com/post/123456',
  ]);
  const reels = await client.scrape.facebook.collectReels([
      'https://www.facebook.com/nasa',
  ]);
  ```

  ```javascript TikTok theme={null}
  const profiles = await client.scrape.tiktok.collectProfiles([
      'https://www.tiktok.com/@tiktok',
  ]);
  const posts = await client.scrape.tiktok.collectPosts([
      'https://www.tiktok.com/@user/video/7433494424040017194',
  ]);
  const comments = await client.scrape.tiktok.collectComments([
      'https://www.tiktok.com/@user/video/7216019547806092550',
  ]);
  ```

  ```javascript YouTube theme={null}
  const videos = await client.scrape.youtube.collectVideos([
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  ]);
  ```

  ```javascript Reddit theme={null}
  const posts = await client.scrape.reddit.collectPosts([
      'https://www.reddit.com/r/technology/top/',
  ]);
  ```

  ```javascript ChatGPT / Perplexity / Digikey / Pinterest theme={null}
  const chatgpt = await client.scrape.chatGPT.search([
      'What are the latest trends in AI?',
  ]);
  const perplexity = await client.scrape.perplexity.search([
      'Latest breakthroughs in battery tech?',
  ]);
  const parts = await client.scrape.digikey.collectProducts([
      'https://www.digikey.com/en/products/detail/abc',
  ]);
  const pins = await client.scrape.pinterest.collectPosts([
      'https://www.pinterest.com/pin/123456',
  ]);
  ```
</CodeGroup>

## Discover API

Search the web and get AI-ranked results in one call, or trigger and poll manually.

```javascript theme={null}
// One-shot: searches, polls, and returns AI-ranked results
const result = await client.discover('AI trends 2026', {
    intent: 'latest technology developments',
});
// result.data is [{ title, link, description, relevance_score }]

// Manual: trigger, wait, and fetch
const job = await client.discoverTrigger('SaaS pricing', {
    intent: 'competitor pricing strategies',
});
await job.wait({ timeout: 60_000 });
const data = await job.fetch();
```

## Scraper Studio

Run your custom Scraper Studio collectors from the SDK.

```javascript theme={null}
// Run and get results in one call
const results = await client.scraperStudio.run('c_your_collector_id', {
    input: { url: 'https://example.com/product/1' },
});
// results is [{ input, data, error, responseId, elapsedMs }]

// Manual: trigger, wait, and fetch
const job = await client.scraperStudio.trigger('c_your_collector_id', {
    url: 'https://example.com/product/1',
});
const data = await job.waitAndFetch();

// Check status
const status = await client.scraperStudio.status('j_abc123');
// status.status is 'queued' | 'running' | 'done' | 'failed'
```

## Browser API

Connect Playwright to Bright Data's cloud browser.

```javascript theme={null}
import { bdclient } from '@brightdata/sdk';
import { chromium } from 'playwright';

const client = new bdclient({
    apiKey: 'YOUR_API_KEY',
    browserUsername: 'brd-customer-xxxx-zone-scraping_browser1',
    browserPassword: 'YOUR_ZONE_PASSWORD',
});

const browser = await chromium.connectOverCDP(client.browser.getConnectUrl());
const page = await browser.newPage();
await page.goto('https://example.com');
await browser.close();
await client.close();
```

## Datasets API

Query and download from any of the 126+ Bright Data datasets.

```javascript theme={null}
const ds = client.datasets;

// Query, then download
const snapshotId = await ds.instagramProfiles.query(
    { url: 'https://www.instagram.com/natgeo/' },
    { records_limit: 10 }
);
const rows = await ds.instagramProfiles.download(snapshotId);

// Same pattern across the full catalog
await ds.amazonProducts.query({ url: 'https://amazon.com/dp/B123' });
await ds.linkedinProfiles.query({ url: 'https://linkedin.com/in/johndoe' });
await ds.imdbMovies.query({}, { records_limit: 50 });
await ds.redditPosts.query({ subreddit: 'technology' });
await ds.glassdoorReviews.query({ company: 'Bright Data' });

// Get field metadata
const meta = await ds.instagramProfiles.getMetadata();
```

## Client and method parameters

<AccordionGroup>
  <Accordion title="Client" description="Add client parameters" icon="circle-info">
    | Parameter           | Type      | Description                                                        | Default  |
    | ------------------- | --------- | ------------------------------------------------------------------ | -------- |
    | `apiKey`            | `string`  | Your API key (or `BRIGHTDATA_API_KEY` env var)                     | .        |
    | `autoCreateZones`   | `boolean` | Auto-create zones if they do not exist                             | `true`   |
    | `webUnlockerZone`   | `string`  | Custom Web Unlocker zone name                                      | .        |
    | `serpZone`          | `string`  | Custom SERP zone name                                              | .        |
    | `browserUsername`   | `string`  | Browser API username (or `BRIGHTDATA_BROWSERAPI_USERNAME` env var) | .        |
    | `browserPassword`   | `string`  | Browser API password (or `BRIGHTDATA_BROWSERAPI_PASSWORD` env var) | .        |
    | `logLevel`          | `string`  | Log level                                                          | `'INFO'` |
    | `structuredLogging` | `boolean` | Use structured JSON logging                                        | `true`   |
    | `verbose`           | `boolean` | Enable verbose logging                                             | `false`  |

    ```javascript theme={null}
    const client = new bdclient({
        apiKey: 'YOUR_API_KEY',
        autoCreateZones: true,
        webUnlockerZone: 'unlocker_zone1',
        serpZone: 'serp_zone1',
        browserUsername: 'brd-customer-xxxx-zone-scraping_browser1',
        browserPassword: 'YOUR_ZONE_PASSWORD',
        logLevel: 'INFO',
        structuredLogging: true,
        verbose: false,
    });
    ```
  </Accordion>

  <Accordion title="Search" description="Add advanced search parameters" icon="magnifying-glass-chart">
    Search the web using the SERP API.

    | Name                   | Type                                   | Description                               | Default    |
    | ---------------------- | -------------------------------------- | ----------------------------------------- | ---------- |
    | `query`                | `string \| string[]`                   | Search query string or array of queries   | .          |
    | `options.searchEngine` | `'google' \| 'bing' \| 'yandex'`       | Search engine                             | `'google'` |
    | `options.zone`         | `string`                               | Zone identifier (auto-configured if null) | .          |
    | `options.format`       | `'json' \| 'raw'`                      | Response format                           | `'raw'`    |
    | `options.method`       | `string`                               | HTTP method                               | `'GET'`    |
    | `options.country`      | `string`                               | Two-letter country code                   | `''`       |
    | `options.dataFormat`   | `'markdown' \| 'screenshot' \| 'html'` | Returned content format                   | `'html'`   |
    | `options.concurrency`  | `number`                               | Max parallel workers                      | `10`       |
    | `options.timeout`      | `number (ms)`                          | Request timeout                           | `30000`    |
  </Accordion>

  <Accordion title="Scrape" description="Add advanced scrape parameters" icon="spider">
    Scrape a single URL or list of URLs using the Web Unlocker API.

    | Name                  | Type                                   | Description                               | Default  |
    | --------------------- | -------------------------------------- | ----------------------------------------- | -------- |
    | `url`                 | `string \| string[]`                   | Single URL string or array of URLs        | .        |
    | `options.zone`        | `string`                               | Zone identifier (auto-configured if null) | .        |
    | `options.format`      | `'json' \| 'raw'`                      | Response format                           | `'raw'`  |
    | `options.method`      | `string`                               | HTTP method                               | `'GET'`  |
    | `options.country`     | `string`                               | Two-letter country code                   | `''`     |
    | `options.dataFormat`  | `'markdown' \| 'screenshot' \| 'html'` | Returned content format                   | `'html'` |
    | `options.concurrency` | `number`                               | Max parallel workers                      | `10`     |
    | `options.timeout`     | `number (ms)`                          | Request timeout                           | `30000`  |
  </Accordion>

  <Accordion title="saveResults" description="Save content to local file." icon="floppy-disk">
    | Name               | Type                       | Description                              | Default |
    | ------------------ | -------------------------- | ---------------------------------------- | ------- |
    | `content`          | `any`                      | Content to save                          | .       |
    | `options.filename` | `string`                   | Output filename (auto-generated if null) | .       |
    | `options.format`   | `'json' \| 'csv' \| 'txt'` | File format                              | .       |
  </Accordion>
</AccordionGroup>

## Error handling

<AccordionGroup>
  <Accordion title="Logging" description="Enable advanced logging" icon="ballot">
    Enable `VERBOSE` in the Client for advanced logging (see Client parameters). Use the `listZones()` function to check available zones.
  </Accordion>

  <Accordion title="Authentication" description="Bright Data Auth" icon="rectangle-barcode">
    Create a [Bright Data](https://brightdata.com/) account and copy your API key. Go to [account settings](https://brightdata.com/cp/setting/users) and make sure your API key has **admin permissions**.
  </Accordion>
</AccordionGroup>

## Resources

<CardGroup>
  <Card title="GitHub" icon="github" href="https://github.com/brightdata/bright-data-sdk-js?tab=readme-ov-file">
    Visit the Bright Data SDK GitHub repository
  </Card>
</CardGroup>
