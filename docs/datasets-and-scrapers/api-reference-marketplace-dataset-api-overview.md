# Dataset API: search and filter

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/overview](https://docs.brightdata.com/api-reference/marketplace-dataset-api/overview)
> **Category**: `datasets-and-scrapers`

---

Query Bright Data Marketplace datasets with two endpoints: Search for sub-second lookups and Filter for bulk async jobs. Shared filter syntax, $2.5 CPM.

The Bright Data Marketplace Dataset API gives you two endpoints to pull records from 250+ Marketplace datasets: **Search** for real-time lookups and **Filter** for bulk asynchronous jobs. Both endpoints share one filter schema, one authentication method and the same \$2.5 CPM pricing.

<Tip>
  Paste your API key into the authorization field. To get an API key, [create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## What are the two Dataset API endpoints?

The Marketplace Dataset API exposes two ways to pull records, depending on the job:

* **Search (sync)** is Elasticsearch-powered and returns records inline in sub-second responses. Use Search for real-time lookups, lead enrichment and sampling.
* **Filter (async)** is snapshot-based and supports CSV/JSON file uploads and large payloads. Use Filter for bulk exports and value-list filtering.

<CardGroup>
  <Card title="Search dataset (sync)" href="/api-reference/marketplace-dataset-api/search-dataset" icon="bolt">
    Elasticsearch query, results inline, sub-second latency. Up to 1,000 records per call.
  </Card>

  <Card title="Filter dataset (async)" href="/api-reference/marketplace-dataset-api/filter-dataset" icon="layer-group">
    Snapshot-based job, CSV/JSON uploads, payloads up to 200 MiB. All 250+ datasets.
  </Card>
</CardGroup>

## Which endpoint should I use?

Use Search for low-latency, single-call lookups and Filter for bulk or file-driven jobs.

| Need                                                      | Use                            |
| --------------------------------------------------------- | ------------------------------ |
| Real-time lookup, up to 1,000 records, sub-second latency | Search                         |
| Lead enrichment on a single record                        | Search                         |
| Quick sample of a dataset before buying                   | Search with `"sort": "random"` |
| Bulk export or large pulls                                | Filter                         |
| Filter by a list of 100k+ values from CSV/JSON            | Filter                         |
| Dataset not yet supported by Search                       | Filter                         |

## How do the two endpoints compare?

The Search and Filter endpoints accept the same filter object but differ in engine, latency and dataset coverage.

|                         | Search                              | Filter                              |
| ----------------------- | ----------------------------------- | ----------------------------------- |
| Path                    | `POST /datasets/search/:dataset_id` | `POST /datasets/filter`             |
| Engine                  | Elasticsearch                       | Snapshot-based                      |
| Mode                    | Sync (results inline)               | Async (returns `snapshot_id`)       |
| Latency                 | Sub-second                          | Up to 5 minutes per job             |
| Datasets                | 3 LinkedIn datasets (alpha)         | All 250+ Marketplace datasets       |
| Max payload             | Single request body                 | Up to 200 MiB (multipart)           |
| File uploads (CSV/JSON) | Not supported                       | Supported                           |
| Pagination              | `search_after` cursor               | `records_limit` on snapshot         |
| Returns                 | `hits`, `total_hits`, `took`        | `snapshot_id` (download separately) |
| Pricing                 | \$2.5 CPM                           | \$2.5 CPM                           |

Results between the two engines can differ. Elasticsearch tokenizes text differently from the snapshot engine.

## How do I authenticate?

Both endpoints use Bearer token authentication. Pass your API key in the `Authorization` header:

```bash theme={null}
Authorization: Bearer YOUR_API_KEY
```

Get your key from [account settings](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).

## How much does the Dataset API cost?

Both endpoints cost \$2.5 CPM (per 1,000 records returned), the same rate as the Marketplace. There is no premium for real-time Search, and there is no charge when a filter returns 0 records.

| Item               | Price                                              |
| ------------------ | -------------------------------------------------- |
| Search and Filter  | \$2.5 CPM (per 1,000 records returned)             |
| Zero-match queries | Free (no charge when the filter returns 0 records) |
| Subscriptions      | Monthly commit, lower effective CPM on overage     |
| Enterprise         | Custom SLAs, dedicated capacity                    |

## Where is the filter syntax documented?

Both endpoints accept the same `filter` object, with the same operators and nesting rules. The [filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax) documents the operator list, filter groups, up to three levels of nesting and CSV/JSON file references.

## Related

* [Search dataset (sync)](/api-reference/marketplace-dataset-api/search-dataset)
* [Filter dataset (async, file uploads)](/api-reference/marketplace-dataset-api/filter-dataset)
* [Filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax)
* [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata)
* [Get dataset list](/api-reference/marketplace-dataset-api/get-dataset-list)
* To build or refresh a dataset before querying, see [Request a collection](/api-reference/marketplace-api/request-a-collection).
