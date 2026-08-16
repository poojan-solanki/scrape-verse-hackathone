# Customization and filtering

> **Official Source**: [https://docs.brightdata.com/datasets/marketplace/customization-and-filtering](https://docs.brightdata.com/datasets/marketplace/customization-and-filtering)
> **Category**: `datasets-and-scrapers`

---

Customize fields and apply filters to Bright Data Marketplace datasets (250+ domains) using the UI or API to get the data subset you need.

Narrow down Bright Data Marketplace datasets (250+ domains) to the exact records and fields you need using the UI or API by creating filtered subsets and selecting the fields to include.

**What you can do:**

* **Customize fields:** choose which columns (fields) to include in your dataset view or export.
* **Filter a dataset:** create a saved subset using filter rules.

**Permissions:** You need access to the dataset and permission to create subsets.

<Frame>
  <img alt="Animated walkthrough of customizing a dataset: selecting fields and applying filters on the preview table" />
</Frame>

## How to customize fields

Choose which fields (columns) appear in your Bright Data Marketplace dataset view and exports.

1. Navigate to the dataset you want to work with.
2. Open the Fields selector.
3. Select the fields you want to include in the view.
4. Click Apply, and save the view if prompted.

**Expected result:** The dataset preview and any export from this view include only the selected fields.

<Frame>
  <img alt="Fields selector open, showing available fields with selected fields checked" />

  <img alt="Fields selector open, showing available fields with selected fields checked" />
</Frame>

## How to filter a dataset

Create a saved subset of a Bright Data Marketplace dataset by applying filter rules in the UI or through the API.

<Frame>
  <img alt="Filter panel open with Include filters and Create subset visible" />

  <img alt="Filter panel open with Include filters and Create subset visible" />
</Frame>

### Filter a dataset using the UI

1. Navigate to the dataset you want to filter.
2. Click the Filter icon (top right).
3. Enter a name so you can find this subset later.
4. Under Include filters, add one or more filters (for example: country, job title, date).
5. Click Create subset.

**Expected result:** A new subset appears with only the records that match your filters.

### Filter operators reference

#### Select

Match one or more exact values from a predefined list (for example: countries or regions).

#### Boolean (true/false)

Filter fields that can only be true or false (for example: a field like `verified`).

#### Date

Filter records within a specific date range (start date and end date).

#### Number (operators)

* **Is:** match an exact numeric value.
* **Not:** exclude a numeric value.
* **Exists:** include only records where the field is not empty.
* **List (exact match):** match any value in a provided list.
* **Lower than / Lower or equal to:** match values below (or up to) a threshold.
* **Greater than / Greater or equal to:** match values above (or at) a threshold.

#### String

Filter text fields using the match types available in the UI (for example: exact match or contains).

#### Array

Use Array includes to match records where a multi-value (array) field contains a specific value (for example: categories, attributes or labels).

#### Upload a CSV list

If you need to match many values, use the CSV upload option in the value input. Upload a CSV with one value per row. After upload, the filter matches records where the array contains any value from the uploaded list.

#### CSV upload limitations

* **CSV format:** upload a `.csv` file with one value per row (single column).
* **Maximum 10,000 values per list:** to match more, split the values across multiple CSV lists, up to 100,000 values total, and apply them as filters in separate subsets.
* **No empty or whitespace-only lines:** lines that contain only spaces are rejected.
* **Single column only:** the CSV must contain only one column. If you include a header, it must be a single column.
* **One value per row:** put exactly one filter value on each row. Do not comma-separate multiple values on the same row.

### Includes vs List (exact match)

#### Includes

Use Includes to match records where the field contains the value you enter (partial match).

Example: if the field is `name` and you filter with Includes = `john`, you match values like `John Smith` and `Johnson`.

#### List (exact match)

Use List (exact match) to match records where the field value is exactly one of the values in your list (no partial matches).

Example: List (exact match) = `John Smith`, `Jane Doe` matches only those exact values.

### Group filters (rule-based filters)

1. Click + Add filter.
2. Select Add group.
3. Define your group rules (for example: category is "Electronics" and brand is "Dell" or "Apple").

**Expected result:** The subset includes only records that match your group logic.

### Limitations

* Filter groups can be nested up to 3 levels deep, with no limit on the number of sibling groups. See the [filter syntax reference](/api-reference/marketplace-dataset-api/filter-syntax).
* A maximum of four inputs per filter group is allowed.
* To filter by more values, use a CSV list upload option (if available) or contact your account manager.
* For more complex queries, contact your account manager.

## Troubleshooting

* **I can't see the Filter icon.** Make sure you're viewing the dataset table and that your account has permission to create subsets.
* **My subset returns no results.** Remove filters one by one to identify the restrictive condition, then reapply the correct values and operators.

## Next steps

* [Export or download a dataset subset](/datasets/marketplace/data-delivery-and-export)
* [Filter a dataset by API](/datasets/marketplace/filter-dataset-by-api)
* [Bright Data Marketplace datasets overview](/datasets/marketplace/overview)
