# Run a search

> **Official Source**: [https://docs.brightdata.com/api-reference/archive-api/run-a-search](https://docs.brightdata.com/api-reference/archive-api/run-a-search)
> **Category**: `api-reference`

---

api-reference/web-archive-api POST /webarchive/search
Use the Bright Data Marketplace Archive API to run a Search. POST /webarchive/search manages web archive snapshots; returns 200 OK with JSON status.

`POST /webarchive/search` searches the Bright Data Archive and returns either the full search result object or a `search_id` you poll for status.

<Danger>
  **Every search needs a time range.** The `filters` object is required, and it must carry either `max_age`, or both `min_date` and `max_date`. A request with no `filters` object returns HTTP 400 with `"filters" is required`.
</Danger>

## How to set the search time range

Use `max_age` for a window relative to now. Bright Data recommends `max_age` of `24h` for a first search, because recent data is delivered fastest.

```bash theme={null}
curl -X POST https://api.brightdata.com/webarchive/search \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "filters": {
      "max_age": "24h",
      "domain_whitelist": ["example.com"]
    }
  }'
```

Use `min_date` and `max_date` for a fixed calendar range. Both dates use `YYYY-MM-DD` format and both must be sent together. Do not combine them with `max_age` in the same request.

```bash theme={null}
curl -X POST https://api.brightdata.com/webarchive/search \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "filters": {
      "min_date": "2026-08-01",
      "max_date": "2026-08-08",
      "domain_whitelist": ["example.com"]
    }
  }'
```

For date ranges older than 24 hours, use `min_date` and `max_date` rather than `max_age`. See [Data range vs delivery time](/datasets/archive/data-range-vs-delivery-time) for how the requested range affects delivery speed.

<Note>
  If the search takes longer than 30 seconds, the response returns only a `search_id` and you should poll the status asynchronously. If the search completes within 30 seconds, the response returns the full search result object (same as `GET /webarchive/search/<search_id>`).
</Note>

<Note>
  You can run up to 100 searches per day without triggering a dump.
  Once you trigger a dump, that search no longer counts against your limit.
</Note>

<Accordion title="LIKE vs Regex Filters">
  * Use LIKE filters (`domain_like_*`, `url_like_*`) for simple pattern matching with `%` (any sequence) and `_` (single character).
  * LIKE patterns are case-insensitive and often faster than regex for simple prefix/suffix matching like `%.com` or `amazon%`.
  * Use regex filters (`domain_regex_*`, `url_regex_*`) for complex patterns requiring full regex syntax. LIKE patterns use backslash escaping: `\%` for literal `%`, `\_` for literal `_`.
</Accordion>
