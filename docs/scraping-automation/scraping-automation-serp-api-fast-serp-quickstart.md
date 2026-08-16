# Fast SERP quickstart

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/quickstart](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/quickstart)
> **Category**: `scraping-automation`

---

Get started with Bright Data Fast SERP (31 languages) for enterprise customers. Apply through your account manager and run high-volume Google search queries.

## How do I get access to Bright Data's Fast SERP?

Access to fast SERP is available for enterprise customers: contact your account manager at [sales@brightdata.com](mailto:sales@brightdata.com) to see if your account qualifies. Fast SERP provides best results in high volumes so requests to serve volume below 50 QPS have slim chance to be approved.

## How fast is Fast SERP?

Fast SERP responds at least twice as fast than our full regular SERP, with P(90) around 1 second.

*P(90) is the 90th percentile meaning 90% of the requests.*

## Which Google searches are supported under Fast SERP?

Fast SERP supports multiple search verticals. See the relevant page for that search type.

Supported verticals:

1. Web Search
2. News
3. Shopping
4. Images
5. Maps

## What volume in QPS (queries per second) is supported?

Bright Data's can support high volume SERP traffic from hundreds to thousands of QPS.

Consider both your POC/testing volume and your expected production volume before getting started. This helps ensure your zone is configured correctly for your workload. If you're unsure, start with an estimate, your account manager can adjust your rate allocation as your usage grows. If your usage fluctuates on short time spans (like sudden or planned high bursts, or sudden or planned zero traffic periods) - let us know so we can ensure level of service.

## Do I need to control or throttle traffic on my end?

If your system has internal rate-limiting or load control mechanisms, share those details with your account manager. This helps align your zone's capacity with your infrastructure's behavior and avoids unnecessary errors.

## Should I use the native proxy interface or the REST API?

Fast SERP works best with the **native proxy interface**, it is slightly faster than the REST API. A REST API interface can be provided if required by your architecture.

## Which geographic region will my scrapers run from?

Fast SERP supports multiple deployment regions: **US East**, **US West**, **EU**, and **APAC**. Knowing your scraper region(s) in advance helps optimize routing and latency. If your production traffic is distributed across multiple regions, let your account manager know.
