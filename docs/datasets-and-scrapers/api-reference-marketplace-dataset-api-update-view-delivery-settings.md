# Update view delivery settings

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/update-view-delivery-settings](https://docs.brightdata.com/api-reference/marketplace-dataset-api/update-view-delivery-settings)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api PUT /datasets/views/{view_id}/delivery_settings
Set the delivery destination, credentials, filename template and batch options for a single dataset view. Returns the updated view id. Covers 250+ domains.

Replaces the delivery configuration for a dataset view. The `deliver.type` field selects the destination and the remaining fields inside `deliver` must match the schema returned by [Get destination type schema](/api-reference/marketplace-dataset-api/get-destination-type-schema) for that destination.

## How to update a view

1. Call [Get delivery options](/api-reference/marketplace-dataset-api/get-delivery-options) to confirm the destination type is supported.
2. Call [Get destination type schema](/api-reference/marketplace-dataset-api/get-destination-type-schema) with that destination type to get the required fields.
3. Send the `PUT` request documented on this page with the `deliver` object populated.

<Note>
  Setting `tar: true` bundles all output files into a single TAR archive. Setting `compress: true` gzips each delivered file. Both can be combined.
</Note>

<Note>
  `batch_size` is the maximum number of records per output file. Use it to split large deliveries into smaller files. The maximum per-batch size is 5 GB.
</Note>

To apply the same configuration to many views at once, use [Bulk update view delivery settings](/api-reference/marketplace-dataset-api/bulk-update-view-delivery-settings) instead.
