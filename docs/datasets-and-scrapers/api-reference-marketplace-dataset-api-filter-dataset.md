# Filter dataset (BETA)

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-dataset](https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-dataset)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api POST /datasets/filter
Run async filter jobs on 250+ Bright Data Marketplace datasets. Returns a snapshot_id to download, with CSV/JSON uploads up to 200 MiB.

The Filter endpoint of the Bright Data Marketplace Dataset API runs a large or file-based filter job against any of 250+ Marketplace datasets and returns a `snapshot_id` you can download once the job completes.

<Tip>
  Paste your API key into the authorization field. To get an API key, [create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## When should I use Filter?

Use Filter for bulk or file-driven jobs where asynchronous processing is acceptable:

* Bulk exports of more than 1,000 records.
* Filtering against large value lists from CSV or JSON files, such as excluding 100k+ company IDs.
* Datasets not yet supported by Search.
* Scheduled or background pipelines where async is fine.

For sub-second real-time lookups on supported datasets, use [Search](/api-reference/marketplace-dataset-api/search-dataset) instead.

## How does Filter work?

* A call to the Filter endpoint starts an async job and creates a snapshot of the filtered data in your account.
* The maximum job time is 5 minutes. Jobs that run longer are cancelled.
* Charges apply per record in the snapshot, at the standard Marketplace rate of \$2.5 CPM.
* Filter works on all 250+ Marketplace datasets.
* Filter groups support a maximum nesting depth of 3 levels.

## How do I authenticate?

Filter uses Bearer token authentication. Pass your API key in the `Authorization` header:

```bash theme={null}
Authorization: Bearer YOUR_API_KEY
```

Get your key from [account settings](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).

## Limits

| Limit                     | Value             | Description                                                                                                 |
| ------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Max rows per file**     | 10,000            | Each uploaded CSV/JSON file can contain up to 10,000 data rows. The header row is not counted.              |
| **Max files per request** | No limit          | Attach as many files as needed in one multipart request, as long as the total stays within the 200 MiB cap. |
| **Max request size**      | 200 MiB           | Total size of all uploaded files and form data combined. Requests over 200 MiB are rejected.                |
| **Job timeout**           | 5 minutes         | If filtering does not complete within 5 minutes the job is cancelled.                                       |
| **Filter nesting depth**  | 3 levels          | Maximum depth for nested filter groups using `and`/`or`.                                                    |
| **Max parallel jobs**     | 100 per dataset   | Up to 100 Filter jobs can run at once per dataset.                                                          |
| **Rate limit**            | 120 requests/hour | Maximum number of Filter API calls per hour.                                                                |

## How do I call Filter?

Filter has two modes: JSON for plain filters and multipart for file uploads.

### JSON mode (no file uploads)

Send all parameters (`dataset_id`, `records_limit` and `filter`) in the JSON body. Set `Content-Type` to `application/json`:

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/filter" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "dataset_id": "gd_l1viktl72bvl7bjuj0",
    "records_limit": 100,
    "filter": {
      "name": "name",
      "operator": "=",
      "value": "John"
    }
  }'
```

Filter returns a `snapshot_id`:

```json theme={null}
{ "snapshot_id": "s_abc123..." }
```

### Multipart mode (file uploads)

Send `dataset_id` and `records_limit` as query parameters, and send `filter` and the uploaded files in the form-data body. Set `Content-Type` to `multipart/form-data`:

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/filter?dataset_id=gd_l1vijqt9jfj7olije&records_limit=100" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F 'filter={"operator":"and","filters":[{"name":"industries:value","operator":"includes","value":"industries.csv"}]}' \
  -F 'files[]=@/path/to/industries.csv'
```

To exclude 100k+ values, split them into files of up to 10,000 rows each and attach them all in a single request:

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/filter?dataset_id=gd_l1vijqt9jfj7olije&records_limit=5000" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F 'filter={"operator":"and","filters":[{"name":"company_id","operator":"not_in","value":"exclude1.csv"},{"name":"company_id","operator":"not_in","value":"exclude2.csv"},{"name":"company_id","operator":"not_in","value":"exclude3.csv"}]}' \
  -F 'files[]=@exclude1.csv' \
  -F 'files[]=@exclude2.csv' \
  -F 'files[]=@exclude3.csv'
```

For CSV and JSON file format rules, file references and upload troubleshooting, see [Filter dataset with CSV/JSON files](/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files).

## What does Filter return?

Filter returns a `snapshot_id`. Use it to download the filtered records via the snapshot API once the job completes:

* [Get snapshot metadata](/api-reference/marketplace-dataset-api/get-snapshot-meta)
* [Download the file by snapshot\_id](/api-reference/marketplace-dataset-api/download-the-file-by-snapshot_id)

## How much does Filter cost?

Filter costs \$2.5 CPM (per 1,000 records returned), the same rate as the Marketplace. There is no charge when the filter returns 0 records.

## What errors can Filter return?

| Status | Meaning                                                                            | What to do                                                                                                  |
| ------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `400`  | Bad filter or params                                                               | Check field names with [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata). |
| `401`  | Bad or missing API key                                                             | Check your Bearer token.                                                                                    |
| `402`  | Not enough funds                                                                   | Top up your balance or reduce `records_limit`.                                                              |
| `404`  | Unknown `dataset_id`                                                               | Confirm the dataset ID.                                                                                     |
| `422`  | Filter matched 0 records                                                           | Loosen your filter or check field values.                                                                   |
| `429`  | Too many parallel jobs (max 100 per dataset) or rate limit hit (120 requests/hour) | Back off and retry.                                                                                         |

## Filter syntax

The `filter` object, its operators, filter groups and nesting rules are shared with the [Search endpoint](/api-reference/marketplace-dataset-api/search-dataset) and documented in one place. See the [filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax) for the full operator list, filter groups, up to three levels of nesting and CSV/JSON file references.

## Related

* [Dataset API overview](/api-reference/marketplace-dataset-api/overview)
* [Search dataset (sync)](/api-reference/marketplace-dataset-api/search-dataset)
* [Filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax)
* [Filter dataset with CSV/JSON files](/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files)
* [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata)
