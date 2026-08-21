# Error codes by endpoint

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/error-list-by-endpoint](https://docs.brightdata.com/datasets/scrapers/scrapers-library/error-list-by-endpoint)
> **Category**: `troubleshooting`

---

Reference of Bright Data Web Scraper API error codes grouped by endpoint with cause and fix for 4xx and 5xx responses across trigger, snapshot and delivery.

## Trigger a collection

`POST` `/datasets/v3/trigger`

`Error codes related to the "Trigger a collection" endpoint`

| http\_status\_code | message                                                                                                                                                                                        |
| :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         400        | `{validation_errors: [ERRORS]}`                                                                                                                                                                |
|                    | `dataset missing`                                                                                                                                                                              |
|                    | Invalid attachments                                                                                                                                                                            |
|                    | This dataset is not allowed for API                                                                                                                                                            |
|                    | This dataset is not ready yet                                                                                                                                                                  |
|                    | No data to trigger                                                                                                                                                                             |
|                    | Should be at least `LIMIT` inputs                                                                                                                                                              |
|         404        | `dataset does not exist`                                                                                                                                                                       |
|         429        | You have too many running jobs for this dataset. Please wait until some of them finish or consider combining multiple inputs into a single   request. Running jobs: `RUNNING_JOBS>=JOBS_LIMIT` |
|         500        | Internal server error                                                                                                                                                                          |

## Download snapshot

`GET` `/datasets/v3/snapshot/:snapshot_id`

`Error codes related to the "Download snapshot" endpoint`

| http\_status\_code | message                                                                        |
| :----------------: | ------------------------------------------------------------------------------ |
|         202        | `{status: "STATUS", message: "Snapshot is not   ready yet, try again in 10s"}` |
|                    | `{status: "building", message: "Snapshot is   building, try again in 10s"}`    |
|         400        | `{validation_errors: [ERRORS]}`                                                |
|                    | Snapshot is expired                                                            |
|                    | Snapshot is empty                                                              |
|         404        | Snapshot does not exist                                                        |
|         500        | Internal server error                                                          |

## Calculate the number of parts for delivery

`GET` `/datasets/v3/snapshot/:snapshot_id/parts`

`Error codes related to the "Calculate the number of parts for delivery" endpoint`

| http\_status\_code | message                         |
| :----------------: | ------------------------------- |
|         400        | `{validation_errors: [ERRORS]}` |
|                    | Snapshot is not ready           |
|         404        | Snapshot does not exist         |
|         500        | Internal server error           |

## Fetch the input file from a triggered snapshot

`GET` `/datasets/v3/snapshot/:snapshot_id/input`

`Error codes related to the "Fetch the input file from a triggered snapshot" endpoint`

| http\_status\_code | message                       |
| :----------------: | ----------------------------- |
|         400        | Snapshot input does not exist |
|         404        | Snapshot does not exist       |
|         500        | Internal server error         |

## Cancel a collection

`POST` `/datasets/v3/snapshot/:snapshot_id/cancel`

`Error codes related to the "Cancel a collection" endpoint`

| http\_status\_code | message                 |
| :----------------: | ----------------------- |
|         400        | Snapshot is not running |
|         404        | Snapshot does not exist |
|         500        | Internal server error   |

## Monitor progress

`GET` `/datasets/v3/progress/:snapshot_id`

`Error codes related to the "Monitor progress" endpoint`

| http\_status\_code | message                                                     |
| :----------------: | ----------------------------------------------------------- |
|         404        | Snapshot does not exist                                     |
|         500        | Internal server error                                       |
|         200        | \{status: "failed", error\_message: "ERROR\_MESSAGE"}       |
|                    | Something went wrong. Bright Data is looking into it.       |
|                    | Account is suspended                                        |
|                    | Account is new, please activate it in account settings. URL |
|                    | No data found in discovery                                  |
|                    | Snapshot is empty                                           |
|                    | Failed to deliver snapshot                                  |
|                    | Failed to download response                                 |
|                    | Failed to trigger collector                                 |
|                    | Internal Server Error                                       |
|                    | Input validation failed: DETAILS                            |

## Monitor delivery

`GET` `/datasets/v3/delivery/:delivery_id`

`Error codes related to the "Monitor delivery" endpoint`

| http\_status\_code | message                 |
| :----------------: | ----------------------- |
|         404        | Delivery does not exist |
|         500        | Internal server error   |

## Deliver collected data to storage

`POST` `/datasets/v3/deliver/:snapshot_id`

`Error codes related to the "Deliver collected data to storage" endpoint`

| http\_status\_code | message                                        |
| :----------------: | ---------------------------------------------- |
|         400        | `{validation_errors: [ERRORS]}`                |
|                    | Snapshot is not ready                          |
|                    | Snapshot is expired                            |
|                    | Deliver options are missing                    |
|                    | Snapshot is empty                              |
|                    | Snapshot is too big for single file delivery   |
|                    | Batch size should be at least `MIN_BATCH_SIZE` |
|         404        | Snapshot does not exist                        |
|         500        | Failed to deliver snapshot                     |
|                    | Internal server error                          |

## Get snapshot list

`GET` `/datasets/v3/snapshots`

`Error codes related to the "Get snapshot list" endpoint`

| http\_status\_code | message                         |
| :----------------: | ------------------------------- |
|         400        | `{validation_errors: [ERRORS]}` |
|         500        | Internal server error           |

## How to handle 429 errors (and avoid IP blacklisting)

This guide shows you how to handle HTTP 429 (Too Many Requests) from Bright Data Datasets API and avoid automatic IP blacklisting.

### What Bright Data does (from our side)

* If your IP gets 25+ 429 responses within 5 minutes, it is **automatically blacklisted**.
* After blacklisting, **all API requests from that IP are blocked**.

### Why you get 429

You’ll receive `429 Too Many Requests` when you exceed 5,000 concurrent active jobs (or snapshots)

### What you should do (customer side)

1. Stop sending new requests immediately when you receive a 429 (don’t ignore it).
2. Wait before retrying:
   * If `Retry-After` header exists, wait that many seconds
   * Otherwise use exponential backoff: 2s, 4s, 8s, 16s, 32s
3. Reduce concurrency if you keep seeing 429s (you’re over the limit).

<Warning>
  If you see 10+ 429s within 5 minutes, reduce your request rate right away to avoid hitting the 25/5min blacklist threshold.
</Warning>

### Examples

<CodeGroup>
  ```python ❌ Bad (will get your IP blacklisted) theme={null}
  response = requests.post(api_url, json=data)

  if response.status_code == 429:
      requests.post(api_url, json=data)  # WRONG: immediate retry
  ```

  ```python ✅ Good (Retry-After + backoff) theme={null}
  import time
  import requests

  resp = requests.post(api_url, json=data)

  if resp.status_code == 429:
      retry_after = resp.headers.get("Retry-After")
      wait_s = int(retry_after) if retry_after else 2
      time.sleep(wait_s)
      # retry after waiting (and increase wait if 429 repeats)
  ```
</CodeGroup>

<Note>
  If you are already blacklisted [contact Bright Data Support](mailto:support@brightdata.com) and include the blocked IP address(es) to request whitelisting.
</Note>
