# Web Unlocker API overview

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/introduction](https://docs.brightdata.com/scraping-automation/web-unlocker/introduction)
> **Category**: `scraping-automation`

---

Bright Data Web Unlocker API (98% success rate) handles proxy rotation, anti-bot challenges and CAPTCHA solving in 1 call. Returns clean HTML or JSON.

The **Web Unlocker API** unlocks any public web page in a single API call with a 98% success rate and returns clean HTML or JSON. You send one request with your target URL, and Bright Data handles proxy rotation, browser fingerprints, CAPTCHA solving and retries on its side. You pay only for successful requests.

The Web Unlocker API is part of Bright Data's [Unlocker scraping suite](/scraping-automation/introduction). Instead of managing proxies, headers, fingerprints and anti-bot logic yourself, you call one endpoint and get back a response that is already unblocked and ready to parse.

```sh Direct API access theme={null}
curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"zone":"YOUR_ZONE_NAME","url":"https://example.com","format":"raw"}' \
  https://api.brightdata.com/request
```

The response is the target page's raw HTML or JSON. No proxy orchestration, browser automation or custom retry logic is required. See [Send your first request](/scraping-automation/web-unlocker/send-your-first-request) for the full walkthrough with Python, Node.js and cURL examples.

## How does the Web Unlocker API work?

Every request is optimized on Bright Data's side before it reaches the target site. A single call to `https://api.brightdata.com/request`:

* Selects the most effective proxy network for the target site
* Sets request headers and fingerprints to match real-user browser traffic
* Solves CAPTCHAs and anti-bot challenges automatically
* Retries failed attempts with alternative configurations until the request succeeds
* Charges only for requests that return a successful response

Bright Data provides two access methods that return identical results: **direct API access**, a REST call to a single endpoint (recommended), and **native proxy-based access**, which routes requests through the Bright Data super proxy. See [Send your first request](/scraping-automation/web-unlocker/send-your-first-request) to set up either one.

## When should you use the Web Unlocker API?

Use the Web Unlocker API when you need reliable, large-scale access to public web data without building and maintaining proxy and anti-bot infrastructure yourself. It fits:

* Scraping any website, including sites with advanced anti-bot protection
* Emulating real-user behavior to reach protected or geo-restricted content
* Engineering teams without a scalable proxy and unblocking stack
* Production workloads that need high success rates and predictable, pay-per-success costs

<Warning>
  Social network account management is not a supported use case for the Web Unlocker API. This includes managing accounts on Facebook, TikTok, Instagram, X (Twitter), LinkedIn, YouTube, Reddit, Pinterest, Snapchat and Discord.
</Warning>

<Note>
  The Web Unlocker API is not intended for browser-based automation or third-party browser tools such as [Adspower](/integrations/adspower), [Puppeteer](/integrations/puppeteer), [Playwright](/integrations/playwright), or [Multilogin (MLA)](/integrations/multilogin). If your workflow requires direct interaction with a browser or scripted user actions, use the [Browser API](https://brightdata.com/products/scraping-browser) instead.
</Note>

## FAQ

### What format does the Web Unlocker API return?

With native proxy access, the target page's raw HTML is returned as-is. With direct API access, set `format` in the request body: `"raw"` for the unmodified response, or `"json"` for a JSON envelope. Either way, the body comes back ready to parse, with no post-processing required

### Do you pay for failed requests?

No. With both the Web Unlocker API and the [SERP API](/scraping-automation/serp-api), you are charged only for successful requests to your target domain.

### Can the Web Unlocker API control a browser?

No. The Web Unlocker API returns page content from a single request. For scripted browser actions such as clicking, scrolling or filling forms, use the [Browser API](https://brightdata.com/products/scraping-browser).

### Does the Web Unlocker API work on search engines?

For Google, Bing and other search engines, use the [SERP API](/scraping-automation/serp-api). It is purpose-built for search result pages and returns parsed results.

## Related

<CardGroup>
  <Card title="Send your first request" icon="paper-plane" href="/scraping-automation/web-unlocker/send-your-first-request">
    Make your first Web Unlocker API call in Python, Node.js or cURL.
  </Card>

  <Card title="Quickstart" icon="rocket" href="/scraping-automation/web-unlocker/quickstart">
    Create a Web Unlocker API zone and get your API key.
  </Card>

  <Card title="Configuration" icon="sliders" href="/scraping-automation/web-unlocker/configuration">
    Tune country targeting, response format and request options.
  </Card>

  <Card title="Best practices" icon="list-check" href="/scraping-automation/web-unlocker/bestpractices">
    Get the highest success rates and lowest cost per request.
  </Card>
</CardGroup>
