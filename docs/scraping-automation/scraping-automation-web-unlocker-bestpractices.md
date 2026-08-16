# Best practices for Web Unlocker API

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/bestpractices](https://docs.brightdata.com/scraping-automation/web-unlocker/bestpractices)
> **Category**: `scraping-automation`

---

Best practices for targeting API endpoints with the Bright Data Web Unlocker API (98% success rate), including troubleshooting and alternative methods.

## Overview

When using Web Unlocker API, targeting specific API endpoints of product or other pages is a common strategy to extract necessary data efficiently. In most scenarios, Web Unlocker API can access these API endpoints successfully. However, there are instances where unlocking an API endpoint may face challenges, while the required data remains accessible on the main webpage.

## Best Practices for API Endpoint Targeting

### Direct API Access

Initially, attempt to directly target the API endpoint with Web Unlocker API. This method in most cases will work out of the box.

### Alternative Approach for Unblocking Issues

If direct API endpoint targeting is unsuccessful, shift your focus to the main webpage from which the API gathers its data. Web Unlocker API is designed to access and unlock data on these primary web pages effectively. This will ensure you still retrieve the necessary information without direct API access.

### Leveraging Browser API for Complex Cases

For cases where accessing the API endpoint directly is critical, and alternative methods are not sufficient, our [Browser API](/scraping-automation/scraping-browser) can be utilized.

Use Browser API to load the webpage, and set the request interception on the API call that is done by the frontend, so you can read the desired API response.

### Can I use Web Unlocker API with Browsers (e.g. Chrome) or Browser Automation Libraries (e.g., Puppeteer, Playwright, Selenium)?

**No.** You should not use the Web Unlocker API with browsers (e.g., Chrome, Firefox, Edge), anti-detect browsers (e.g., Adspower, Multilogin), or browser automation libraries (e.g., Puppeteer, Playwright, Selenium).

Web Unlocker API is optimized for scraping data from websites **without interaction**, focusing on delivering clean HTML/JSON responses to singular requests while managing proxy and unblocking infrastructure.

Using the Web Unlocker API directly with browsers usually does not work, and even if it does, it can also lead to unnecessarily increased costs.

If you do need to interact with web pages, you have a few options:

* **For regular browsers** (e.g., Chrome, Firefox, Edge) and **anti-detect browsers** (e.g., Adspower, Multilogin), you should use our **proxy networks** (Data Center, ISP, Mobile, Residential). Integration guides for these products are available here: [Proxy Integrations (brightdata.com)](/integrations)

* **For browser automation libraries** (e.g., Puppeteer, Playwright, Selenium), you may use proxy networks; but an even better solution is the **Browser API** product, which provides unblocking capabilities similar to the Web Unlocker API but is designed to work seamlessly with browser automation. For more information on the Browser API, visit: [Introduction to Browser API - Bright Data Docs](/scraping-automation/scraping-browser/introduction)
