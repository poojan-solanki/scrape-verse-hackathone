# Cancel a Scraper Studio job

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/cancel-job](https://docs.brightdata.com/api-reference/scraper-studio-api/cancel-job)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api POST /dca/jobs/{job_id}/cancel
POST /dca/jobs/{job_id}/cancel permanently stops a Bright Data Scraper Studio job. The job moves to canceled and cannot be resumed afterward.

Permanently stop a Bright Data Scraper Studio job. The job moves to `canceled` and stops processing its remaining inputs.

This endpoint takes no request body and returns the plain text body `OK` on success, not JSON. Read the response as text rather than calling a JSON parser on it.

<Warning>
  Canceling is permanent. A canceled job cannot be resumed. Data already collected may still be available, depending on the run status and delivery settings. To stop a job temporarily instead, use [Pause a Scraper Studio job](./pause-job).
</Warning>

## Job state behavior

| Action | Use when                                   | Result                      |
| ------ | ------------------------------------------ | --------------------------- |
| Pause  | You want to temporarily stop a running job | Job moves to `paused`       |
| Resume | You want to continue a paused job          | Job moves back to `running` |
| Cancel | You want to stop a job permanently         | Job moves to `canceled`     |

Completed jobs cannot be paused, resumed or canceled.

## How to find a job ID

Use the jobs list endpoint to find the ID of the job you want to cancel:

```bash theme={null}
curl "https://api.brightdata.com/dca/collector/jobs?from_date=2026-06-01&to_date=2026-07-13" \
  -H "Authorization: Bearer $BRIGHT_DATA_API_TOKEN"
```

Use the returned `id` value as the `job_id` path parameter. See [List Scraper Studio jobs](./list-jobs) for the full parameter list.

## When to use this endpoint

* Stop a job triggered with the wrong input set instead of paying for the full run
* Cancel a runaway job generating far more child pages than expected, rather than waiting for a `too_many_pages` error
* Clear a stuck job before triggering a corrected run of the same scraper

Pages that were still queued when the job was canceled report the `aborted_page` error code. See [Scraper Studio error codes](/datasets/scraper-studio/error-codes) for the full catalog.

## Related

* [Pause a Scraper Studio job](./pause-job): stop a job temporarily instead of permanently
* [Resume a Scraper Studio job](./resume-job): restart a paused job, which is not possible after canceling
* [Get job metadata](./job-data): confirm the job status after canceling
* [Trigger async batch collection](./Trigger_a_scraper_for_batch_collection_method): start a corrected run
