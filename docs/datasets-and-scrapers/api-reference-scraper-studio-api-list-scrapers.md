# List Scraper Studio scrapers

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/list-scrapers](https://docs.brightdata.com/api-reference/scraper-studio-api/list-scrapers)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api GET /dca/collectors_list
GET /dca/collectors_list returns the Scraper Studio scrapers in your account, with each scraper's ID, name, active status, delivery config and output schema.

Use `GET /dca/collectors_list` to retrieve the Bright Data Scraper Studio scrapers available in your account. The response includes scraper IDs, names, active status, delivery configuration, last run time and the output schema when available.

<Note>
  Use this endpoint to discover the scraper `id` values in your account, then pass an `id` as the `collector` parameter when you [trigger a scraper](./Trigger_a_scraper_for_batch_collection_method).
</Note>

## Search scrapers

Use the `search` query parameter to return only scrapers whose name matches a search term, for example `?search=amazon`. Omit `search` to return every scraper in the account.

## When to use this endpoint

* Look up the `id` of a scraper before triggering a batch or real-time job
* Build a picker that lists every scraper in your account
* Audit which scrapers are `active` and which have run before (`last_run`)
* Read the `output_schema` to map returned fields before parsing records

## Errors

| Status             | Cause                               | Fix                                                                             |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------- |
| `401 Unauthorized` | Token missing, malformed or revoked | Re-copy from [Account Settings → API Tokens](https://brightdata.com/cp/setting) |
| `5xx`              | Transient Bright Data API error     | Retry with exponential backoff, for example 1s, 2s, 4s                          |

## Related

* [List Jobs](./list-jobs): list the jobs a scraper has run
* [Trigger async batch collection](./Trigger_a_scraper_for_batch_collection_method): pass the scraper `id` as the `collector` parameter
* [Job data](./job-data): job-level metadata for a triggered scraper
* [Receive batch data](./Receive_batch_data): download the records a scraper produced
