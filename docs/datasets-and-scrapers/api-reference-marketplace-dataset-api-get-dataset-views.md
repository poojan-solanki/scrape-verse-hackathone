# Get dataset views

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-dataset-views](https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-dataset-views)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api GET /datasets/views
List your dataset views with IDs, names and underlying dataset across 250+ domains so you can configure or update delivery settings for each subscription.

A dataset view is a saved, filtered subscription to a Bright Data marketplace dataset that delivers fresh records to your destination on a recurring schedule. Each view has a unique `id` (for example `v_id1`) which you pass to the view delivery settings endpoints.

Use the `id` returned here with:

* [Get view delivery settings](/api-reference/marketplace-dataset-api/get-view-delivery-settings) to inspect the current configuration.
* [Update view delivery settings](/api-reference/marketplace-dataset-api/update-view-delivery-settings) to change it.
* [Bulk update view delivery settings](/api-reference/marketplace-dataset-api/bulk-update-view-delivery-settings) to apply one configuration to many views at once.
