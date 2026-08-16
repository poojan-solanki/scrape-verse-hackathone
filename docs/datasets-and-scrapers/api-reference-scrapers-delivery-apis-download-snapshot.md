# Download snapshot

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/delivery-apis/download-snapshot](https://docs.brightdata.com/api-reference/scrapers/delivery-apis/download-snapshot)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api GET /datasets/v3/snapshot/{snapshot_id}
Download results from a completed Bright Data Web Scraper API async job by snapshot ID. Pull-based delivery with a 5 GB per-request size limit.

Use this endpoint to pull scraped data directly from the Bright Data API once an async collection job finishes. This is the simplest delivery method: you trigger a job, poll until the snapshot is `ready`, then download the results on demand.

## When to use API download

API download is the right choice when:

* You want a pull-based workflow instead of pushing data to your own infrastructure.
* You don't need results delivered to a specific storage bucket or webhook endpoint.
* Your result set fits within the 5 GB per-request size limit.
* You are prototyping or running ad-hoc jobs and don't want to configure a delivery destination.

If you need automatic delivery or larger result sets, see the other [delivery options](/datasets/scrapers/scrapers-library/delivery-options) (webhooks, Amazon S3, Google Cloud Storage, Azure, Snowflake).

## How it works

1. Trigger an async collection with [`POST /datasets/v3/trigger`](/api-reference/rest-api/scraper/asynchronous-requests). The response contains a `snapshot_id`.
2. Poll [`GET /datasets/v3/progress/{snapshot_id}`](/api-reference/scrapers/management-apis/monitor-progress) until `status` is `ready`.
3. Call this endpoint with the `snapshot_id` to download the data.

<Note>
  Results are retained for 16 days after collection. Download within that window, or configure a [delivery option](/datasets/scrapers/scrapers-library/delivery-options) to have data pushed to your storage automatically.
</Note>

## Quick example

```bash cURL theme={null}
curl "https://api.brightdata.com/datasets/v3/snapshot/s_m4x7enmven8djfqak?format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -o results.json
```

The response is the raw dataset in the format you request. JSON returns an array of records, NDJSON and JSON Lines return one record per line, and CSV returns a header row followed by rows.

## Downloading large snapshots in parts

For snapshots larger than a few hundred megabytes, split the download into parts to avoid timeouts and memory pressure on your client:

1. Request the first batch with a `batch_size` (minimum 1000 records) and `part=1`.
2. Call [`GET /datasets/v3/snapshot/{snapshot_id}/parts`](/api-reference/scrapers/management-apis/get-snapshot-delivery-parts) to see how many parts exist.
3. Request each remaining part by incrementing the `part` parameter.

Keep `batch_size`, `format` and `compress` identical across all part requests, otherwise the API returns an error.

## Limits

| Limit                         | Value                            |
| :---------------------------- | :------------------------------- |
| Max download size per request | 5 GB                             |
| Result retention              | 16 days                          |
| Minimum `batch_size`          | 1000 records                     |
| Supported formats             | `json`, `ndjson`, `jsonl`, `csv` |

## Endpoint
