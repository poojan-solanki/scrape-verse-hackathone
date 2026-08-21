# List Scraper Studio jobs

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/list-jobs](https://docs.brightdata.com/api-reference/scraper-studio-api/list-jobs)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api GET /dca/collector/jobs
GET /dca/collector/jobs returns the Scraper Studio jobs in your account. Filter by scraper ID and date range, and paginate with offset and limit.

Use `GET /dca/collector/jobs` to retrieve the Bright Data Scraper Studio jobs in your account. Filter the list by scraper ID and date range, and control pagination with `offset` and `limit`.

`from_date` and `to_date` are required. Use a narrower date range for faster responses and easier pagination.

<Note>
  Pass a scraper ID as the `collector` parameter to return only that scraper's jobs. Get scraper IDs from [List Scrapers](./list-scrapers).
</Note>

## Filter, paginate and sort

* **Filter by scraper.** Pass a scraper ID as the `collector` parameter to return only that scraper's jobs. Get IDs from [List Scrapers](./list-scrapers).
* **Paginate.** Use `offset` and `limit` to page through jobs. To retrieve the next page, increase `offset` by the previous `limit`, for example `offset=0&limit=100`, then `offset=100&limit=100`. `limit` must be between 0 and 500.
* **Sort.** Use `sort_asc=1` for ascending order or `sort_asc=-1` for descending order. The default is `-1`.

## When to use this endpoint

* Build a dashboard that lists recent jobs for a scraper across a date range
* Audit job history and compute success rates from `inputs`, `data_lines` and `failed_pages`
* Look up job IDs, then fetch per-job metadata with [Job data](./job-data)
* Spot scrapers that need attention by watching `failed_pages`

## Errors

| Status             | Cause                                         | Fix                                                                             |
| ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------- |
| `400 Bad Request`  | Missing or malformed `from_date` or `to_date` | Send both dates in `YYYY-MM-DD` format                                          |
| `401 Unauthorized` | Token missing, malformed or revoked           | Re-copy from [Account Settings → API Tokens](https://brightdata.com/cp/setting) |
| `5xx`              | Transient Bright Data API error               | Retry with exponential backoff, for example 1s, 2s, 4s                          |

## Related

* [List Scrapers](./list-scrapers): find the scraper `id` to pass as the `collector` parameter
* [Job data](./job-data): job-level metadata for a single job
* [Receive batch data](./Receive_batch_data): download the records a job produced
* [Trigger async batch collection](./Trigger_a_scraper_for_batch_collection_method): the endpoint that creates jobs
