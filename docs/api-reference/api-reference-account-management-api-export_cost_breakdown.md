# Cost breakdown export

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Export_cost_breakdown](https://docs.brightdata.com/api-reference/account-management-api/Export_cost_breakdown)
> **Category**: `api-reference`

---

api-reference/openapi POST /costs/export/json
Export account cost data by dimension (products, APIs, datasets, Web Scraper APIs). Same source as Cost Explorer. JSON or CSV per-day, 200 OK on success.

This endpoint exports the same per-day, per-resource cost breakdown that the Control Panel's Cost Explorer displays, in JSON or CSV, grouped by the dimension you pick (products, zones, datasets, Web Scraper APIs, collectors, domains, dataset snapshots, or WSA snapshots).

<Warning>
  **The `to` parameter is exclusive.** The day specified in `to` is **not** included in the result. To match a calendar month shown in the Control Panel or on your invoice, set `to` to the first day of the **following** month. For example, `from=2026-04-01&to=2026-05-01` returns all of April 2026.
</Warning>

<Tip>
  Paste your API key into the authorization field. To get an API key, [create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## When to use this endpoint

Use this endpoint when you need cost data that `GET /zone/cost` cannot return. The `/zone/cost` endpoint is scoped to a single zone, which means it cannot break down Web Scraper API costs (those are keyed by `dataset_id`, not by zone name) and it cannot answer questions like "What did I spend on datacenter and unlocker proxies combined last month?".

This endpoint accepts a `dimension` parameter that groups costs by the same buckets the Control Panel Cost Explorer uses.

| Dimension      | Groups costs by                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------- |
| `products`     | Product family (datacenter, residential, ISP, mobile, unlocker, SERP API, Browser API, and so on) |
| `types`        | Network or charge type                                                                            |
| `zones`        | Individual zones in your account                                                                  |
| `datasets`     | Dataset Marketplace dataset purchases                                                             |
| `web_apis`     | Web Scraper API `dataset_id`s                                                                     |
| `collectors`   | Scraper Studio collectors                                                                         |
| `domains`      | Target domains                                                                                    |
| `ws_api_snaps` | Web Scraper API snapshots                                                                         |
| `snapshots`    | Dataset snapshots                                                                                 |

The dimensions match what you see in the Cost Explorer UI, so the simplest way to discover what each dimension returns is to open Cost Explorer in the Control Panel and switch the grouping.

## Reproduce your monthly invoice for a dimension

To retrieve the full monthly cost broken down by Web Scraper API datasets for April 2026:

```bash theme={null}
curl -X POST -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "dimension": "web_apis",
    "filters": {},
    "from": "2026-04-01",
    "to": "2026-05-01"
  }' \
  "https://api.brightdata.com/costs/export/json"
```

Response shape (one entry per day; each day maps resource ID to billed USD):

```json theme={null}
{
  "2026-04-01": {
    "gd_l1viktl72bvl7bjuj0": 45.20,
    "gd_l1vikfnt1wgvvqz95w": 12.80
  },
  "2026-04-02": {
    "gd_l1viktl72bvl7bjuj0": 38.10
  }
}
```

For the same data as CSV, call `POST /costs/export/csv` with the identical request body. The CSV pivots the response into one row per day with one column per resource ID that appears in the date range, so column count varies with the data:

```csv theme={null}
Day,gd_l1viktl72bvl7bjuj0,gd_l1vikfnt1wgvvqz95w
2026-04-01,45.20,12.80
2026-04-02,38.10,0
```

## Using the `filters` field

The `filters` object uses Bright Data's internal charges-structure notation, the same notation used by Cost Explorer. Building a filter from scratch requires knowledge of that structure. Most callers leave `filters` empty (`{}`) and rely on the `dimension` parameter to scope the response.

One working example, restricting the result to datacenter and Web Unlocker products:

```json theme={null}
{
  "props": {
    "product": {
      "whitelist": ["dc", "unblocker"]
    }
  }
}
```

If you need a filter that the dimension alone cannot express, contact Bright Data support with the question you are trying to answer. We do not currently publish a complete filter grammar; support can build the filter you need or confirm that no filter is required.

## Rate limits

* 1,000 requests per minute
* 5,000 requests per hour

The endpoint accepts any API key with cost-data access. There is no separate billing-admin scope.

## Reconciling with raw request logs

The values returned by this endpoint are the source of truth for billing. They match the Control Panel's Cost Explorer and Usage Overview, and they roll up into your invoice. If you compare these values against raw request logs you collect yourself (for example, access logs forwarded to Logz or CloudWatch), expect differences of a few percent. Raw logs may capture requests that were never committed to the billing database because of async aggregation timing or transient network issues. Your invoice always reflects the values returned by this endpoint.

## Related endpoints

* [Total cost & bandwidth for a zone](/api-reference/account-management-api/Get_the_total_cost_and_bandwidth_stats_for_a_Zone). Single-zone cost and bandwidth over a date range. Cannot return Web Scraper API or Scraper Studio cost.
* [Bandwidth stats for a zone](/api-reference/account-management-api/Get_the_bandwidth_stats_for_a_Zone). Bandwidth only, no cost.
* [Bandwidth stats for all your Zones](/api-reference/account-management-api/Get_the_bandwidth_stats_for_all_your_Zones). Aggregate bandwidth across zones.
