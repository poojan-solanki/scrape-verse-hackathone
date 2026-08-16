# How to reduce web scraping costs

> **Official Source**: [https://docs.brightdata.com/scraping-automation/concepts/reducing-scraping-costs](https://docs.brightdata.com/scraping-automation/concepts/reducing-scraping-costs)
> **Category**: `scraping-automation`

---

Practical techniques to lower your web scraping costs, from choosing the right IP type to optimizing bandwidth and service plans. Achieves 10% success rate.

Your scraping pipeline works, but the monthly bill keeps climbing. Bandwidth charges, residential proxy usage, and server costs add up fast at scale.

Most of that spend is avoidable. This guide walks through practical techniques to cut costs at every layer: IP selection, request optimization, bandwidth reduction, and service plan structure.

<iframe title="How to save money on data collection" />

## Start with the cheapest IP type that works

The single biggest cost lever in web scraping is IP type. Datacenter IPs are significantly cheaper per gigabyte than residential or mobile IPs, yet many teams default to residential when datacenter would work fine.

Think of it like shipping: you don't overnight everything just because it's easier. You start with ground shipping and only upgrade when the delivery window demands it.

| IP type         | Relative cost | Best for                                                    |
| --------------- | ------------- | ----------------------------------------------------------- |
| **Datacenter**  | Lowest        | Sites without advanced anti-bot systems                     |
| **ISP**         | Medium        | Sites that need residential-grade trust at datacenter speed |
| **Residential** | Higher        | Sites with Cloudflare, Akamai, or PerimeterX protection     |
| **Mobile**      | Highest       | Heavily protected targets that block all other IP types     |

**Rule of thumb:** start with datacenter IPs. Only move up the cost ladder when you've confirmed they won't work for your target.

### How to test if a site works with datacenter IPs

Before writing any code, test manually in a browser:

1. Configure your browser (Firefox works well) to route traffic through a datacenter proxy with a single sticky session
2. Navigate to the target URL
3. If the page loads normally, datacenter IPs can work for this site

If it loads in a browser through a datacenter proxy, you can make it work in code too. The key is making your requests look exactly like the browser's.

### Making datacenter IPs work with headers and cookies

A bare HTTP request with no headers or cookies won't work on most sites, even with a clean datacenter IP. But adding the right headers and cookies often gets you to near-perfect success rates.

Here's a real example scraping an Amazon product page with datacenter IPs:

```javascript Node.js theme={null}
const axios = require("axios");

const TARGET_URL = "https://www.amazon.com/dp/B0EXAMPLE";

// Without headers/cookies: ~10% success rate
const bareRequest = await axios.get(TARGET_URL, {
  proxy: { host: "datacenter-proxy", port: 8080 },
});

// With headers and cookies: ~100% success rate
const optimizedRequest = await axios.get(TARGET_URL, {
  proxy: { host: "datacenter-proxy", port: 8080 },
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    Cookie: "session-id=123-4567890; i18n-prefs=USD; sp-cdn=L5Z9:US",
  },
});
```

The difference is dramatic: 10% success rate jumps to nearly 100% just by mimicking what a real browser sends.

**Where to find the right headers and cookies:**

1. Open the target site in a browser routed through your datacenter proxy
2. Open DevTools (F12) and go to the **Network** tab
3. Reload the page and click the main document request
4. Copy the **Request Headers** section
5. Use those exact headers in your scraping code

<Tip>
  Headers and cookies don't change often. You can automate the refresh by loading the target domain once in a headless browser, extracting cookies and headers, then reusing them for hundreds of HTTP client requests.
</Tip>

## Use a browser only when an HTTP client isn't enough

There are two ways to fetch a web page through a proxy:

* **HTTP client** (axios, Python `requests`, cURL): sends a single request and downloads just the HTML. Fast, lightweight, and cheap. Everything in the previous section uses this approach.
* **Browser automation** (Puppeteer, Playwright, Selenium): launches a full browser that renders JavaScript, loads images, stylesheets, and every other resource on the page. Much heavier on bandwidth.

Both go through your proxy. The difference is cost: an HTTP client downloads \~500 KB of HTML, while a browser loads 20+ MB of resources for the same page. Use this decision tree to pick the right approach:

```text theme={null}
Can an HTTP client (with headers/cookies) get the data?
├── Yes → Use an HTTP client (cheapest, fastest)
└── No → Does the site need JavaScript rendering?
    ├── Yes → Use browser automation
    └── No → Check if you're missing headers, cookies, or TLS fingerprint
```

When you do need a browser, use a real Chrome binary instead of Chromium. Anti-bot systems fingerprint browser builds, and Chromium screams "automation."

```javascript Node.js (Puppeteer) theme={null}
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome", // Real Chrome, not Chromium
  headless: "new",
  args: ["--no-sandbox"],
});

const page = await browser.newPage();

// Set realistic headers
await page.setExtraHTTPHeaders({
  "Accept-Language": "en-US,en;q=0.9",
});

await page.goto("https://www.amazon.com/dp/B0EXAMPLE", {
  waitUntil: "domcontentloaded",
});
```

This swap alone can eliminate CAPTCHAs on many sites that would otherwise block your scraper.

<Note>
  If you don't want to manage browsers at all, [Bright Data Browser API](/scraping-automation/scraping-browser/introduction) runs real GUI browsers in the cloud with all anti-blocking built in. You connect via Puppeteer or Playwright and we handle the infrastructure.
</Note>

## Reduce bandwidth when using browsers

A single Amazon product page loads over 20 MB of resources. If you only need text data like titles, prices, and descriptions, most of that bandwidth is wasted money.

### Block unnecessary resource types

Intercept network requests and abort anything you don't need:

```javascript Node.js (Puppeteer) theme={null}
await page.setRequestInterception(true);

page.on("request", (request) => {
  const resourceType = request.resourceType();

  // Block images, stylesheets, fonts, and media
  if (["image", "stylesheet", "font", "media"].includes(resourceType)) {
    request.abort();
  } else {
    request.continue();
  }
});

await page.goto("https://www.amazon.com/dp/B0EXAMPLE");
```

Blocking images alone cuts page load bandwidth by 50% or more. Adding stylesheets and fonts to the block list reduces it further.

### Block requests by domain

Many pages load third-party scripts (analytics, social widgets, ad networks) that contribute nothing to the data you need:

```javascript Node.js (Puppeteer) theme={null}
const BLOCKED_DOMAINS = [
  "google-analytics.com",
  "facebook.net",
  "doubleclick.net",
  "adservice.google.com",
];

page.on("request", (request) => {
  const url = request.url();
  if (BLOCKED_DOMAINS.some((domain) => url.includes(domain))) {
    request.abort();
  } else {
    request.continue();
  }
});
```

<Warning>
  Test blocking carefully. Some JavaScript files are required for the page to render your target data. Start by blocking images and obvious third-party domains, then expand the block list incrementally. If the site breaks, step back.
</Warning>

### Stop loading once you have the data

You don't need to wait for the full page to finish loading. Wait for the specific elements you need, then stop:

```javascript Node.js (Puppeteer) theme={null}
await page.goto("https://www.amazon.com/dp/B0EXAMPLE", {
  waitUntil: "domcontentloaded", // Don't wait for all resources
});

// Wait only for the elements you need
await page.waitForSelector("#productTitle");
await page.waitForSelector(".a-price .a-offscreen");

// Extract data immediately
const title = await page.$eval("#productTitle", (el) => el.textContent.trim());
const price = await page.$eval(".a-price .a-offscreen", (el) =>
  el.textContent.trim()
);

// Close the page before remaining resources finish loading
await page.close();
```

This can reduce bandwidth from 20+ MB down to under 2 MB per page while still capturing everything you need.

## Navigate directly to the data

Every extra page navigation costs bandwidth and time. Build the shortest path to the data you need.

**Longer path (3 navigations):**

1. Search for "Xbox" on Amazon
2. Click on the first product result
3. Click "See all reviews"

**Shorter path (1 navigation):**
Navigate directly to `https://www.amazon.com/product-reviews/B0EXAMPLE` by substituting the product ID into the reviews URL.

Most sites have predictable URL patterns for product pages, review pages, and search results. Reverse-engineer the URL structure and skip the clicks entirely.

## Mix HTTP client and browser methods

Some sites require a browser session to generate authentication tokens, but the actual data pages work fine with an HTTP client. You can combine both approaches to get the best of each:

1. **Load one page in a headless browser** to collect session cookies and authentication tokens
2. **Extract the cookies** from the browser session
3. **Use those cookies with your HTTP client** for all subsequent pages

```javascript Node.js theme={null}
// Step 1: Get auth cookies from one browser session
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://target-site.com/search?q=product");

// Step 2: Extract cookies
const cookies = await page.cookies();
const cookieString = cookies.map((c) => `${c.name}=${c.value}`).join("; ");
await browser.close();

// Step 3: Use cookies for fast HTTP requests (no browser needed)
const productUrls = [
  "https://target-site.com/product/123",
  "https://target-site.com/product/456",
  "https://target-site.com/product/789",
];

for (const url of productUrls) {
  const response = await axios.get(url, {
    headers: {
      Cookie: cookieString,
      "User-Agent": "Mozilla/5.0 ...",
    },
    proxy: { host: "datacenter-proxy", port: 8080 },
  });
  // Parse response.data
}
```

This pattern uses heavy browser bandwidth for a single page load, then switches to lightweight HTTP client requests for hundreds of data pages. At scale, the cost difference is significant.

## Choose the right data collection approach

Before optimizing individual requests, consider whether you should be building scrapers at all.

| Approach              | What you manage                                                             | Best for                                                            |
| --------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **In-house**          | Everything: proxies, unlocking, parsing, storage, servers, engineering team | Companies where data collection IS the core business                |
| **Hybrid**            | Parsing and storage; a service handles unlocking and IP rotation            | Teams that want control over data processing but not infrastructure |
| **Data as a service** | Analysis only; you buy structured data from a provider                      | Teams whose core business is analyzing data, not collecting it      |

**In-house** requires multiple engineering teams and ongoing infrastructure. Unless data collection is your core product, this approach is rarely cost-effective.

**Hybrid** removes the biggest time sink: fighting anti-bot systems. With [Bright Data Web Unlocker](/scraping-automation/web-unlocker/introduction), you send a URL and we return clean HTML. All five detection layers (IP rotation, TLS fingerprinting, browser fingerprinting, behavioral emulation, and CAPTCHA solving) are handled in a single API call. Your developers focus on parsing and data quality instead of reverse-engineering blocking mechanisms.

**Data as a service** eliminates the scraping pipeline entirely. [Bright Data Web Scraper API](/datasets/scrapers/scrapers-library/overview) provides 650+ pre-built scrapers that return structured JSON, no selectors, no proxy configuration, no maintenance. If your core business is machine learning, analytics, or market intelligence, this is often the biggest cost saver of all.

<Tip>
  Not sure which approach fits? See our detailed comparison in [Web Scraper API vs DIY scraping](/datasets/scrapers/concepts/web-scraper-api-vs-diy).
</Tip>

## Optimize your service plan

Technical optimizations reduce per-request costs. Service plan optimization reduces the price you pay for each gigabyte or request.

**Choose the right pricing model.** Some providers charge per gigabyte of bandwidth, others per request. A single browser-loaded product page can weigh 20+ MB of bandwidth but counts as one request. Compare both models against your actual usage pattern.

**Commit to a monthly plan.** Pay-as-you-go rates are the highest tier. Even a small monthly commitment can cut per-unit costs by 50% or more. If a large commitment feels risky, start smaller. The savings still outweigh pay-as-you-go.

**Consolidate with one provider.** Splitting volume across multiple providers means you get worse pricing from both. Bringing all your volume to one provider unlocks higher-tier discounts.

<Accordion title="Real-world example: consolidating providers">
  A company split traffic 50/50 between two proxy providers, paying a combined $31,000 per month. By moving 90% of traffic to a single provider (keeping 10% as backup), the total bill dropped to $24,000 per month. That's \$84,000 in annual savings from consolidation alone, with no code changes.
</Accordion>

## Cost optimization checklist

Use this checklist to audit your current scraping setup:

* [ ] Are you using datacenter IPs where possible, or defaulting to residential?
* [ ] Have you tested your target sites with datacenter IPs in a real browser?
* [ ] Are you sending proper headers and cookies with your HTTP client?
* [ ] If using a browser, are you blocking images and unnecessary resource types?
* [ ] Are you blocking third-party domains that don't contribute to your data?
* [ ] Are you stopping page loads once target elements are present?
* [ ] Are you navigating directly to data URLs instead of clicking through multiple pages?
* [ ] Can you use a browser for authentication and an HTTP client for data pages?
* [ ] Is your pricing model (bandwidth vs. per-request) optimal for your usage pattern?
* [ ] Are you on a monthly plan instead of pay-as-you-go?
* [ ] Have you consolidated proxy volume with a single provider for better tier pricing?

## Verify your optimizations

After applying these techniques, measure the impact:

1. **Compare bandwidth per request.** Log the response size before and after blocking resources. If you went from 20 MB to 5 MB per page, you've cut costs by 75%.
2. **Track success rates.** Send 10-20 test requests with your optimized headers and cookies. If success rate is below 90%, you're likely missing a required header or cookie.
3. **Monitor cost per record.** Divide your monthly proxy bill by the number of successful records collected. This is the metric that matters. Repeat after each optimization to confirm savings.

## Troubleshooting

**Datacenter IPs return CAPTCHAs or 403 errors even with headers and cookies.**
The site likely uses Cloudflare, Akamai, or a similar system that blocks all datacenter IP ranges. Switch to ISP or residential IPs, or use [Bright Data Web Unlocker](/scraping-automation/web-unlocker/introduction). We handle detection automatically so you don't have to debug it.

**Blocking resources breaks the page and target data is missing.**
You blocked a JavaScript file that the page needs to render the data. Roll back to the last working block list and re-add resources one type at a time. Always block images first (safest), then expand incrementally.

**Cookies expire and success rate drops after a few hours.**
Set up a cron job or scheduled task that loads the target domain in a headless browser, extracts fresh cookies, and stores them for your HTTP requests.

## FAQs

<AccordionGroup>
  <Accordion title="Which sites work with datacenter IPs?">
    Many sites work with datacenter IPs when you send proper headers and cookies. To test, route your browser through a datacenter proxy and try loading the target page. If it loads, you can make it work in code. Sites with Cloudflare, Akamai, or PerimeterX set to block all datacenter IPs will require residential or ISP proxies.
  </Accordion>

  <Accordion title="How much bandwidth does blocking images save?">
    Blocking images typically reduces page load bandwidth by 50% or more. A product page that transfers 20 MB with all resources may drop to 7-8 MB with images blocked. Adding stylesheet and font blocking reduces it further.
  </Accordion>

  <Accordion title="How often do I need to refresh headers and cookies?">
    Headers rarely change. Cookies may expire depending on the site, but most session cookies last hours or days. You can automate the refresh by loading the target domain in a browser periodically and extracting fresh cookies for your HTTP requests.
  </Accordion>

  <Accordion title="Should I use Puppeteer, Playwright, or Selenium?">
    All three have equivalent data collection capabilities. Choose based on your team's language preference: Puppeteer for Node.js, Playwright for Node.js/Python/Java/.NET, Selenium for Python/Java. The cost optimization techniques in this guide apply to all of them.
  </Accordion>

  <Accordion title="What if I don't want to manage any of this?">
    If maintaining scrapers isn't your core business, consider [Bright Data Web Scraper API](/datasets/scrapers/scrapers-library/overview). We maintain 650+ pre-built scrapers that return structured JSON. You get data without managing proxies, browsers, or anti-blocking. Pricing starts at \$1 per 1,000 records.
  </Accordion>
</AccordionGroup>

## Further reading

* [How Bright Data handles anti-bot blocking](/scraping-automation/concepts/how-bright-data-handles-blocking)
* [Web Scraper API vs DIY scraping](/datasets/scrapers/concepts/web-scraper-api-vs-diy)
* [Web Unlocker best practices](/scraping-automation/web-unlocker/bestpractices)
* [Understanding sync vs. async requests](/datasets/scrapers/concepts/sync-vs-async)
