# Get search status

> **Official Source**: [https://docs.brightdata.com/api-reference/archive-api/get-search-status](https://docs.brightdata.com/api-reference/archive-api/get-search-status)
> **Category**: `api-reference`

---

api-reference/web-archive-api GET /webarchive/search/{search_id}
Use the Bright Data Marketplace Archive API to get Search Status. GET /webarchive/search/{search_id} returns 200 OK with archive search status JSON.

When successful it will retrieve:

* The number of entries for your query
* The estimated size and cost of the full Data Snapshot

<Note>
  **Pricing & size:** `estimate_batch_size` is measured in bytes. `dump_cost_usd` is an estimated total cost based on `files_count` and your current cache/archive pricing tier. The `cost_breakdown` object shows separate costs for cache vs archive pages.
</Note>
