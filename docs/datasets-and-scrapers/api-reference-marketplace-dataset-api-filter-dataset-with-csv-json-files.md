# Filter dataset (JSON or file uploads)

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files](https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files)
> **Category**: `datasets-and-scrapers`

---

api-reference/filter-csv-json POST /datasets/filter
Use the Bright Data Marketplace Dataset API to filter Dataset (JSON or File Uploads). Spans 250+ domains in the Bright Data marketplace.

The Filter endpoint of the Bright Data Marketplace Dataset API can filter a dataset against thousands of values stored in a CSV or JSON file. Upload one or more files in multipart mode and reference each filename in your filter.

<Tip>
  Paste your API key into the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F).
</Tip>

## How does file-based filtering work?

Use file uploads when you need to filter against large value lists, such as including or excluding 100k+ company IDs:

* Upload CSV or JSON files in `multipart/form-data` mode and reference each filename in your filter.
* Each file holds up to 10,000 data rows, and the whole request can be up to 200 MiB.
* The Filter job runs asynchronously and returns a `snapshot_id` to download once it completes.

For the async job flow, limits, pricing and error codes, see [Filter dataset (async)](/api-reference/marketplace-dataset-api/filter-dataset).

## How do I format the CSV or JSON file?

<Tabs>
  <Tab title="CSV">
    * First line must be a header matching the field name in your filter.
    * Each following line contains a single value.

    ```csv Example: industries.csv theme={null}
    industries:value
    Accounting
    Ad Network
    Advertising
    ```
  </Tab>

  <Tab title="JSON">
    * Must be an array of objects, each with a key matching the field name in your filter.

    ```json Example industries.json theme={null}
    [
      {"industries:value": "Accounting"},
      {"industries:value": "Ad Network"},
      {"industries:value": "Advertising"}
    ]
    ```
  </Tab>
</Tabs>

***

## How do I reference a file in the filter?

When using file uploads, set the filter's `value` field to the filename:

```json Example theme={null}
{
  "operator": "and",
  "filters": [
    {
      "name": "industries:value",
      "operator": "includes",
      "value": "industries.csv"
    }
  ]
}
```

File references work only with the operators `in`, `not_in`, `includes`, `not_includes`, `array_includes` and `not_array_includes`. For the full operator table and field types, see the [filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax#which-operators-read-csv-or-json-files%3F).

***

## Filter with multiple files

```bash theme={null}
curl \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "files[]=@/path/to/industries.csv" \
  -F "files[]=@/path/to/regions.csv" \
  -F "filter={\"operator\":\"and\",\"filters\":[{\"name\":\"industries:value\",\"operator\":\"includes\",\"value\":\"industries.csv\"},{\"name\":\"region\",\"operator\":\"in\",\"value\":\"regions.csv\"}]}" \
  "https://api.brightdata.com/datasets/filter?dataset_id=gd_l1vijqt9jfj7olije"
```

## Troubleshoot file uploads

| Issue                     | Possible Solution                                                                                                        |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **"File not found"**      | Make sure the filename in your filter exactly matches the uploaded file name.                                            |
| **"Invalid file format"** | Check CSV header matches the filter field name, or ensure JSON is an array of objects.                                   |
| **"Field not found"**     | Verify field exists in dataset. Use [Get Dataset Metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata). |

## Related

* [Dataset API overview](/api-reference/marketplace-dataset-api/overview)
* [Filter dataset (async)](/api-reference/marketplace-dataset-api/filter-dataset)
* [Filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax)
* [Get Dataset List](/api-reference/marketplace-dataset-api/get-dataset-list)
* [Get Dataset Metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata)
