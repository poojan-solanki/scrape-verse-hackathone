# Get delivery options

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-delivery-options](https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-delivery-options)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api GET /datasets/delivery_settings/options
List the supported delivery destinations, filename templates and batch settings you can use when configuring delivery for a dataset view. Covers 250+ domains.

Use this endpoint before configuring a dataset view delivery to discover which destination types are supported and which fields the filename and batch parameters accept. The response is the canonical source of truth. Supported destinations currently include `api_pull`, `webhook`, `email`, `gcs`, `gcp_pubsub`, `s3`, `snowflake`, `ali_oss`, `sftp` and `azure`.

Call [Get destination type schema](/api-reference/marketplace-dataset-api/get-destination-type-schema) next to retrieve the required fields for the specific destination you want to use.
