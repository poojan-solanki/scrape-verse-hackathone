# SERP fair usage: rate limit

> **Official Source**: [https://docs.brightdata.com/general/usage-monitoring/serp-rate-limit](https://docs.brightdata.com/general/usage-monitoring/serp-rate-limit)
> **Category**: `troubleshooting`

---

Bright Data SERP API fair usage policy: global 100 QPS rate limit applied from January 2026, HTTP 429 behavior, and how to request an increase.

Starting January 2026, Bright Data is applying a rate limit to its SERP services.

The global rate limit is set to 100 QPS (requests per second) for funded accounts. Unfunded accounts are subject to a rate limit of 1,000 req/min.

You can view the specific rate limit currently applied to your zone in the Control Panel, under the zone's Overview tab > Access details.

Upon breaching this rate limit, an HTTP error 429 will be returned. If you wish to extend this rate limit, add funds to your account or contact your sales agent.
