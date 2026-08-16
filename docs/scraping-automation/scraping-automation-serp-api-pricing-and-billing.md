# SERP pricing & billing

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/pricing-and-billing](https://docs.brightdata.com/scraping-automation/serp-api/pricing-and-billing)
> **Category**: `scraping-automation`

---

Bright Data SERP API pricing: per-1,000 successful requests with parsing and unlocking included, no bandwidth fees and failed requests not billed.

Bright Data SERP API uses **per‑1,000 successful requests** pricing. Failed/errored requests are not billed. Parsing and unlocking are included, no bandwidth fees.

> * Billing unit: per successful request (per 1,000)
> * Parsing/unlocking included (no bandwidth fees)
> * Async: “send request” billed; “collect/retrieve” free

[Bright Data SERP API price tiers and volume discounts](https://brightdata.com/pricing/serp?utm_source=docs\&utm_medium=pricing-billing\&utm_campaign=serp_pricing)

## Pay per success

By default, Bright Data bills **only successful responses**.

* Unit: per 1,000 successful requests
* Included: parsing (JSON/Markdown/HTML), proxy management, and unlocking/CAPTCHA handling
* No bandwidth fees

If a request is retried behind the scenes, you’re **not** charged extra. Only the successfully delivered response is billed.

<Warning>
  **Custom headers and cookies change the billing model.** When custom headers or cookies are selected for a SERP API zone, **all requests are billed, including failed or errored requests**. Without customized headers or cookies, the default pay-per-success model applies.

  See [Custom Headers and Cookies](/scraping-automation/serp-api/configuration#custom-headers-and-cookies) for configuration and billing details.
</Warning>

***

## How async billing works

Use asynchronous mode for long‑running jobs or large batches.

* **Billed**: the initial “send request” call
* **Not billed**: the follow‑up “collect/retrieve” call

See: [Asynchronous Requests](/scraping-automation/serp-api/asynchronous-requests)

***

## What’s included in the unit price

* Structured outputs: **JSON**, **Markdown**, or **raw HTML**
* Proxy management & **unlocking** (incl. CAPTCHA handling)
* Automatic retries and best header/device logic
* City/ZIP geotargeting; **desktop and mobile** user agents

***

## FAQs

**Are failed or errored requests billed?**<br />By default, no. Failed or errored requests are not billed when using the standard SERP API configuration. However, when custom headers or cookies are selected for the zone, **all requests are billed regardless of their outcome**. See [Custom Headers and Cookies](/scraping-automation/serp-api/configuration#custom-headers-and-cookies).

**Are retries or async “collect” requests billed?**<br />Automatic retries are included. In async mode, the initial “send request” call is billed, while the follow-up “collect/retrieve” call is not billed.

**Is parsing included?**<br />Yes. JSON, Markdown, and HTML outputs are included in the unit price.

**Do you charge bandwidth fees?**<br />No. There are no bandwidth fees. Billing is per successful request by default. If custom headers or cookies are selected, all requests are billed, including failed or errored requests.

***

## See also

* [SERP pricing](https://brightdata.com/pricing/serp?utm_source=docs\&utm_medium=pricing-billing\&utm_campaign=serp_pricing)
* [Introduction to SERP API](/scraping-automation/serp-api/introduction)
* [Asynchronous Requests](/scraping-automation/serp-api/asynchronous-requests)
* [Parsed JSON Results](/scraping-automation/serp-api/parsed-json-results/parsing-search-results)
