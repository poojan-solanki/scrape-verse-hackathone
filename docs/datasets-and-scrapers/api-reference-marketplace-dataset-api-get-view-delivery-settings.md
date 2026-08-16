# Get view delivery settings

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-view-delivery-settings](https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-view-delivery-settings)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api GET /datasets/views/{view_id}/delivery_settings
Retrieve the current delivery configuration for a Bright Data dataset view (250+ domains): destination, credentials, filename, compression and batch size.

Returns the full delivery configuration stored for the given dataset view. The `deliver` object contains the destination-specific fields (for example `bucket`, `credentials`, `region` for an S3 destination), and the top-level `tar`, `compress`, `batch_size` and `filename` fields describe how the output files are packaged.

<Tip>
  Find the `view_id` by calling [Get dataset views](/api-reference/marketplace-dataset-api/get-dataset-views).
</Tip>
