# Search dataset (sync, Elasticsearch)

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/search-dataset](https://docs.brightdata.com/api-reference/marketplace-dataset-api/search-dataset)
> **Category**: `datasets-and-scrapers`

---

Run a real-time, Elasticsearch-powered query against a Bright Data Marketplace dataset. Sub-second responses, up to 1,000 records per call.

The Search endpoint of the Bright Data Marketplace Dataset API runs a real-time, Elasticsearch-powered query against a Marketplace dataset: send a filter, get records back in the response with sub-second latency.

<Tip>
  Paste your API key into the authorization field. To get an API key, [create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## When should I use Search?

Use Search when you need a small number of records back in a single, low-latency call:

* Real-time lookups, such as enriching a lead the moment it hits the CRM.
* Feeding live records into AI agents or LLM apps.
* Sales prospecting by name, title, company or location.
* Sampling a dataset before buying, with `"sort": "random"`.
* Any workload that needs up to 1,000 records back in one call.

If you need file uploads, bulk exports or a dataset that is not in the supported list, use [Filter](/api-reference/marketplace-dataset-api/filter-dataset) instead.

## Run your first Search query

Send a `POST` request to `/datasets/search/:dataset_id` with a `filter` object. The example below searches the LinkedIn people profiles dataset for records whose `name` includes `Egor`:

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/search/gd_l1viktl72bvl7bjuj0" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "size": 10,
    "filter": {
      "name": "name",
      "operator": "includes",
      "value": "Egor"
    }
  }'
```

Search returns the records inline. There is no polling and no snapshot IDs:

```json theme={null}
{
  "hits": [ /* records */ ],
  "total_hits": 579859,
  "took": 142
}
```

## Which datasets does Search support?

Search is in alpha and currently supports three LinkedIn datasets. For any other dataset, use [Filter](/api-reference/marketplace-dataset-api/filter-dataset).

| Dataset                                    | `dataset_id`            |
| ------------------------------------------ | ----------------------- |
| LinkedIn people profiles                   | `gd_l1viktl72bvl7bjuj0` |
| LinkedIn people profiles, contact-enriched | `gd_me5ppxjr2ge6icjuh0` |
| LinkedIn company information               | `gd_l1vikfnt1wgvvqz95w` |

<Note>
  Amazon datasets are next. More datasets are rolling out toward general availability in Q3 2026. Passing an unsupported `dataset_id` to Search returns a `404`.
</Note>

## How do I authenticate?

Search uses Bearer token authentication. Pass your API key in the `Authorization` header:

```bash theme={null}
Authorization: Bearer YOUR_API_KEY
```

Get your key from [account settings](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).

## What parameters does Search accept?

| Name           | Type            | Default | Required | Description                                                                                                                  |
| -------------- | --------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `filter`       | object          | -       | yes      | Filter expression. Cannot be empty. See the [filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax). |
| `size`         | number          | 100     | no       | Number of records to return. Search is best for up to 1,000 records per call.                                                |
| `sort`         | string or array | -       | no       | `default`, `random`, or a custom sort such as `[{"timestamp":"asc"}]`.                                                       |
| `search_after` | array           | -       | no       | Pagination cursor. Pass the `search_after` value from the previous response.                                                 |

## What does Search return?

| Name           | Type   | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| `hits`         | array  | The matched records.                                        |
| `total_hits`   | number | Total records matching your filter.                         |
| `took`         | number | Server time in milliseconds.                                |
| `search_after` | array  | Cursor for the next page. Returned only when `sort` is set. |

## How do I sort and paginate?

Set `sort` to control ordering, and use the returned `search_after` cursor to page through results.

### Sample a dataset with random sort

Use `"sort": "random"` to pull a representative sample, for example before buying a dataset:

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/search/gd_l1viktl72bvl7bjuj0" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "size": 10,
    "sort": "random",
    "filter": { "name": "name", "operator": "includes", "value": "Egor" }
  }'
```

### Page through results with search\_after

Set `"sort": "default"` to get a `search_after` cursor in the response. Request the first page:

```json theme={null}
{
  "size": 10,
  "sort": "default",
  "filter": { "name": "name", "operator": "includes", "value": "Egor" }
}
```

Pass the returned `search_after` array back to fetch the next page:

```json theme={null}
{
  "size": 10,
  "sort": "default",
  "search_after": [ /* value from previous response */ ],
  "filter": { "name": "name", "operator": "includes", "value": "Egor" }
}
```

### Sort by a custom field

Pass an array of field-to-direction objects to sort by a specific field:

```json theme={null}
{ "sort": [{ "timestamp": "asc" }] }
```

## How much does Search cost?

Search costs \$2.5 CPM (per 1,000 records returned), the same rate as the Marketplace. There is no charge when the filter returns 0 records.

## What errors can Search return?

| Status | Meaning                  | What to do                                                                                                  |
| ------ | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `400`  | Bad filter or params     | Check field names with [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata). |
| `401`  | Bad or missing API key   | Check your Bearer token.                                                                                    |
| `402`  | Not enough funds         | Top up your balance or reduce `size`.                                                                       |
| `404`  | Unknown `dataset_id`     | Confirm the dataset is in the supported list above.                                                         |
| `422`  | Filter matched 0 records | Loosen your filter or check field values.                                                                   |
| `429`  | Rate limit hit           | Back off and retry.                                                                                         |

## FAQ

### Does Search support CSV or JSON file uploads?

No. Elasticsearch cannot read external files at query time. To filter against thousands of values in a CSV or JSON file, use the [Filter endpoint](/api-reference/marketplace-dataset-api/filter-dataset).

### How many records can Search return in one call?

Search is best for up to 1,000 records per call. For larger pulls, use [Filter](/api-reference/marketplace-dataset-api/filter-dataset), which is snapshot-based and supports bulk exports.

### Why do Search and Filter return slightly different results?

The two endpoints use different engines. Elasticsearch tokenizes text differently from the snapshot engine, so free-text matches can differ. On free-text fields, prefer the `includes` operator over `=`.

## Related

* [Dataset API overview](/api-reference/marketplace-dataset-api/overview)
* [Filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax)
* [Filter dataset (async, file uploads)](/api-reference/marketplace-dataset-api/filter-dataset)
* [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata)
