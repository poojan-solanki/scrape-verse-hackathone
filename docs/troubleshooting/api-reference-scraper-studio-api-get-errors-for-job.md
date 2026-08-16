# Get errors for a job

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/get-errors-for-job](https://docs.brightdata.com/api-reference/scraper-studio-api/get-errors-for-job)
> **Category**: `troubleshooting`

---

api-reference/web-scraper-ide-rest-api GET /dca/jobs/{job_id}/hp_errors
GET /dca/jobs/{job_id}/hp_errors returns per-input error details for a Bright Data Scraper Studio batch job. Identify which inputs failed and why.

Retrieve per-input error details for a Bright Data Scraper Studio batch job. Use this endpoint to identify which inputs in a batch failed, what the error code was and how to remediate.

<Note>
  Per the OpenAPI spec, the `job_id` for this endpoint is the one returned by the `/dca/trigger_hp` (high-priority) endpoint. Jobs created via the regular `/dca/trigger` endpoint may use a different error-retrieval path. If the response is empty for a regular trigger job, contact [Bright Data support](https://brightdata.com/contact-us) to confirm the right endpoint for your workflow.
</Note>

## Request

<CodeGroup>
  ```bash cURL theme={null}
  curl "https://api.brightdata.com/dca/jobs/$JOB_ID/hp_errors" \
    -H "Authorization: Bearer $BRIGHT_DATA_API_TOKEN"
  ```

  ```python Python theme={null}
  response = requests.get(
      f"https://api.brightdata.com/dca/jobs/{job_id}/hp_errors",
      headers={"Authorization": f"Bearer {API_TOKEN}"},
  )
  errors = response.json()
  ```

  ```js Node.js theme={null}
  const response = await fetch(
    `https://api.brightdata.com/dca/jobs/${jobId}/hp_errors`,
    { headers: { Authorization: `Bearer ${process.env.BRIGHT_DATA_API_TOKEN}` } }
  );
  const errors = await response.json();
  ```
</CodeGroup>

### Query parameters

| Name             | Type    | Required | Description                                                                                |
| ---------------- | ------- | -------- | ------------------------------------------------------------------------------------------ |
| `skip_normalize` | boolean | No       | When `true`, returns full non-normalized error details. Default returns normalized errors. |

## Errors

| Status            | Cause                                                   | Fix                                                                        |
| ----------------- | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| `400 Bad Request` | Invalid job ID format                                   | Verify the job ID matches the `j_` prefix returned by the trigger endpoint |
| `404 Not Found`   | Job does not exist or your account does not have access | Confirm the job ID is current and from a job you triggered                 |
| `500`             | Internal server error                                   | Retry with exponential backoff, for example 1s, 2s, 4s                     |

## When to use this endpoint

* Build a re-trigger workflow that retries only the failed inputs from a previous batch
* Surface user-actionable error messages in a UI or admin console
* Track failure trends over time (which collectors fail most often, which input shapes cause 422s)

## Related

* [Trigger async batch collection](./Trigger_a_scraper_for_batch_collection_method): the endpoint that creates the job
* [Job data](./job-data): job-level metadata (status, fails count, etc.)
* [Receive batch data](./Receive_batch_data): download the successful records
