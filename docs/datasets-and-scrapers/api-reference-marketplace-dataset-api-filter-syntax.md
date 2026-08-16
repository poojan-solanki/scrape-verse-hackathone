# Dataset API filter syntax

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-syntax](https://docs.brightdata.com/api-reference/marketplace-dataset-api/filter-syntax)
> **Category**: `datasets-and-scrapers`

---

Reference for the Bright Data Dataset API filter object: operators, filter groups, up to 3 levels of nesting and CSV/JSON file references.

The `filter` object is shared by both the Search and Filter endpoints of the Bright Data Marketplace Dataset API: the same schema, the same operators and the same nesting rules.

<Tip>
  Use [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata) to confirm field names and types before building a filter.
</Tip>

## What are the three filter shapes?

A filter is one of three shapes: a single field filter, a filter group that combines several filters, or a null check.

### Single field filter

Match one field against one value with an operator:

```json theme={null}
{ "name": "name", "operator": "=", "value": "John" }
```

### Filter group

Combine multiple filters with `and` or `or`. Filter groups support a maximum nesting depth of 3 levels:

```json theme={null}
{
  "operator": "and",
  "filters": [
    { "name": "reviews_count", "operator": ">", "value": 200 },
    { "name": "rating", "operator": ">", "value": 4.5 }
  ]
}
```

### Null check

Use `is_null` or `is_not_null` to match on the presence of a value. These operators take no `value`:

```json theme={null}
{ "name": "reviews_count", "operator": "is_not_null" }
```

## Which operators are available?

The following operators can be used in a field filter.

| Operator             | Field types  | What it does                                                                                                                                           |
| -------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `=`                  | Any          | Equal to.                                                                                                                                              |
| `!=`                 | Any          | Not equal to.                                                                                                                                          |
| `\<`                 | Number, Date | Lower than.                                                                                                                                            |
| `\<=`                | Number, Date | Lower than or equal.                                                                                                                                   |
| `>`                  | Number, Date | Greater than.                                                                                                                                          |
| `>=`                 | Number, Date | Greater than or equal.                                                                                                                                 |
| `in`                 | Any          | Field value equals any value in the provided list.                                                                                                     |
| `not_in`             | Any          | Field value does not equal any value in the list.                                                                                                      |
| `includes`           | Array, Text  | Field value contains the filter value. If the filter value is an array, it matches records where the field contains at least one value from the array. |
| `not_includes`       | Array, Text  | Field value does not contain the filter value(s).                                                                                                      |
| `array_includes`     | Array        | Exact match exists in the array.                                                                                                                       |
| `not_array_includes` | Array        | Exact match does not exist in the array.                                                                                                               |
| `is_null`            | Any          | Field value is null. No value needed.                                                                                                                  |
| `is_not_null`        | Any          | Field value is not null. No value needed.                                                                                                              |

## Which operators read CSV or JSON files?

These file-reference operators work only on the [Filter endpoint](/api-reference/marketplace-dataset-api/filter-dataset) in multipart mode. Pass a filename as the value to filter against thousands of values stored in a CSV or JSON file.

| Operator             | Field types | Description                                         |
| -------------------- | ----------- | --------------------------------------------------- |
| `in`                 | Any         | Field value equals any value in the file.           |
| `not_in`             | Any         | Field value does not equal any value in the file.   |
| `includes`           | Array, Text | Field value contains any value in the file.         |
| `not_includes`       | Array, Text | Field value does not contain any value in the file. |
| `array_includes`     | Array       | Any value in the file exists in the field value.    |
| `not_array_includes` | Array       | No values in the file exist in the field value.     |

File references are not supported by the Search endpoint. Elasticsearch cannot read external files at query time.

## How do I match within a single nested object?

For datasets where a field is an array of objects, set `combine_nested_fields: true` on a filter group so that all filters in the group must match within a single object, not across different objects in the array:

```json theme={null}
{
  "operator": "and",
  "combine_nested_fields": true,
  "filters": [
    { "name": "experience.title", "operator": "includes", "value": "engineer" },
    { "name": "experience.company", "operator": "=", "value": "Bright Data" }
  ]
}
```

Without `combine_nested_fields`, the two conditions could match in different objects inside the `experience` array.

## Tips

* Use [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata) to confirm field names and types before building a filter.
* Keep nesting shallow when possible. The maximum depth is 3 levels.
* On the Search endpoint, prefer `includes` over `=` on free-text fields, because Elasticsearch tokenizes them.
* On the Filter endpoint, file references work only with the operators listed above.

## Related

* [Dataset API overview](/api-reference/marketplace-dataset-api/overview)
* [Search dataset (sync)](/api-reference/marketplace-dataset-api/search-dataset)
* [Filter dataset (async, file uploads)](/api-reference/marketplace-dataset-api/filter-dataset)
* [Get dataset metadata](/api-reference/marketplace-dataset-api/get-dataset-metadata)
