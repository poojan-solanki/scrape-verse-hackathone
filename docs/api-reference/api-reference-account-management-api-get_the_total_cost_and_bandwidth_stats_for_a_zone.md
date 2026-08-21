# Total cost & bandwidth for a zone

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Get_the_total_cost_and_bandwidth_stats_for_a_Zone](https://docs.brightdata.com/api-reference/account-management-api/Get_the_total_cost_and_bandwidth_stats_for_a_Zone)
> **Category**: `api-reference`

---

api-reference/openapi GET /zone/cost
Returns 200 OK with billed cost, bandwidth and usage for a Zone over a date range. Matches the Control Panel Usage Overview and your invoice.

<Warning>
  **The `to` parameter is exclusive.** The day specified in `to` is **not** included in the result. To match a calendar month shown in the Control Panel or on your invoice, set `to` to the first day of the **following** month. For example, `from=2026-04-01&to=2026-05-01` returns all of April 2026.
</Warning>

<Note>
  This endpoint is scoped to a single zone and cannot return Web Scraper API or Scraper Studio cost data (those are keyed by `dataset_id` / collector ID, not by zone name). For multi-product or WSA / Scraper Studio breakdowns, use [Cost breakdown export](/api-reference/account-management-api/Export_cost_breakdown).
</Note>

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## Reproduce your monthly invoice

To retrieve the exact billed cost and usage for a calendar month as shown in the Control Panel and on your invoice, set `from` to the first day of the month and `to` to the first day of the **following** month:

```bash theme={null}
# Returns billed usage for all of April 2026
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.brightdata.com/zone/cost?zone=YOUR_ZONE&from=2026-04-01&to=2026-05-01"
```

Using `to=2026-04-30` would omit the last day of the month. Always set `to` to the day **after** the last day you want included.

## Reconciling with raw request logs

The values returned by this endpoint are the source of truth for billing. They match the Control Panel's Usage Overview and your invoice. If you compare these values against raw request logs you collect yourself (e.g., access logs forwarded to Logz, CloudWatch, or another sink), expect differences of a few percent. Raw logs may capture requests that were never committed to the billing database because of async aggregation timing or transient network issues. Your invoice always reflects the values returned by this endpoint.

## Related endpoints

* [Bandwidth stats for a Zone](/api-reference/account-management-api/Get_the_bandwidth_stats_for_a_Zone). Bandwidth only, no cost.
* [Bandwidth stats for all your Zones](/api-reference/account-management-api/Get_the_bandwidth_stats_for_all_your_Zones). Aggregate across zones.
