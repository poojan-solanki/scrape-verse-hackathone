# Bulk update view delivery settings

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/bulk-update-view-delivery-settings](https://docs.brightdata.com/api-reference/marketplace-dataset-api/bulk-update-view-delivery-settings)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api PUT /datasets/views/delivery_settings/bulk
Apply one delivery configuration to multiple Bright Data dataset views in a single request. Spans 250+ domains in the Bright Data marketplace.

Updates the delivery configuration for every view in the `views` array. All listed views receive the same `deliver`, `filename`, `tar`, `compress` and `batch_size` values, so use this endpoint when you want several views to deliver to the same destination with identical packaging rules.

<Note>
  To update a single view, use [Update view delivery settings](/api-reference/marketplace-dataset-api/update-view-delivery-settings) instead.
</Note>

The `deliver` object must match the schema returned by [Get destination type schema](/api-reference/marketplace-dataset-api/get-destination-type-schema) for the destination you select. The response returns `view_ids`, the full list of views that were updated.
