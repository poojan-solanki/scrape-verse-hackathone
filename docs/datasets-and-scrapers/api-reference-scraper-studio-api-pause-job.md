# Pause a Scraper Studio job

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/pause-job](https://docs.brightdata.com/api-reference/scraper-studio-api/pause-job)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api POST /dca/jobs/{job_id}/pause
POST /dca/jobs/{job_id}/pause temporarily stops a running Bright Data Scraper Studio job. The job moves to paused and returns the plain text response OK.

Temporarily stop a running Bright Data Scraper Studio job. The job stops processing new inputs and moves to `paused`, and you can restart it later with [Resume a Scraper Studio job](./resume-job).

This endpoint takes no request body and returns the plain text body `OK` on success, not JSON. Read the response as text rather than calling a JSON parser on it.

## Job state behavior

| Action | Use when                                   | Result                      |
| ------ | ------------------------------------------ | --------------------------- |
| Pause  | You want to temporarily stop a running job | Job moves to `paused`       |
| Resume | You want to continue a paused job          | Job moves back to `running` |
| Cancel | You want to stop a job permanently         | Job moves to `canceled`     |

Completed jobs cannot be paused, resumed or canceled.

## How to find a job ID

Use the jobs list endpoint to find the ID of the job you want to pause:

```bash theme={null}
curl "https://api.brightdata.com/dca/collector/jobs?from_date=2026-06-01&to_date=2026-07-13" \
  -H "Authorization: Bearer $BRIGHT_DATA_API_TOKEN"
```

Use the returned `id` value as the `job_id` path parameter. See [List Scraper Studio jobs](./list-jobs) for the full parameter list.

## When to use this endpoint

* Hold a large batch during a target site incident, then resume once the site recovers
* Free concurrency for higher-priority work during a maintenance window
* Stop a job that is returning a high rate of `blocked` or `detect_block` errors while you adjust country, session or rate settings

To stop a job permanently instead, use [Cancel a Scraper Studio job](./cancel-job).

## Related

* [Resume a Scraper Studio job](./resume-job): restart a job paused with this endpoint
* [Cancel a Scraper Studio job](./cancel-job): stop a job permanently instead of temporarily
* [List Scraper Studio jobs](./list-jobs): find the `job_id` to pass to this endpoint
* [Get job metadata](./job-data): confirm the job status after pausing
