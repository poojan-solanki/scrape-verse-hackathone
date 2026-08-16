# Marketplace data delivery

> **Official Source**: [https://docs.brightdata.com/datasets/marketplace/data-delivery-and-export](https://docs.brightdata.com/datasets/marketplace/data-delivery-and-export)
> **Category**: `datasets-and-scrapers`

---

Receive Bright Data Marketplace datasets in JSON, NDJSON, CSV, XLSX or Parquet via email, API, webhooks or cloud destinations like S3 and Snowflake.

Once you purchase or subscribe to a dataset, Bright Data delivers it directly to your preferred destination. Choose from 11 delivery methods and 5 output formats to fit your existing infrastructure and workflow.

## Output formats

Datasets are available in the following formats:

| Format  | Description                                 |
| ------- | ------------------------------------------- |
| JSON    | Standard structured format                  |
| NDJSON  | Newline-delimited JSON, ideal for streaming |
| CSV     | Spreadsheet-compatible format               |
| XLSX    | Microsoft Excel format                      |
| Parquet | Columnar format optimized for analytics     |

<Tip>
  You can also receive data in compressed (gzip) format to reduce file size.
</Tip>

## Which delivery methods are supported

Choose how and where your data is delivered:

| Method                      | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| Email                       | Receive datasets directly in your inbox               |
| API download                | Download via the Bright Data API using a snapshot ID  |
| Webhook                     | Get data pushed to your endpoint automatically        |
| Amazon S3                   | Deliver directly to your S3 bucket                    |
| Google Cloud Storage        | Deliver to your GCS bucket                            |
| Google Cloud Pub/Sub        | Stream data via GCP Pub/Sub                           |
| Microsoft Azure             | Deliver to your Azure Blob Storage container          |
| Snowflake                   | Load directly into your Snowflake data warehouse      |
| SFTP                        | Deliver via secure file transfer protocol             |
| Alibaba Cloud OSS           | Deliver to your Alibaba Cloud OSS bucket              |
| Oracle Cloud Infrastructure | Deliver to an OCI pre-authenticated request (PAR) URL |

## How to set up delivery

<Steps>
  <Step title="Open My Datasets">
    After purchasing a dataset, go to **Control Panel → My Datasets**.
  </Step>

  <Step title="Open Delivery Settings">
    Select your dataset and click **Delivery Settings**.
  </Step>

  <Step title="Choose method and format">
    Pick your preferred delivery method and output format.
  </Step>

  <Step title="Configure credentials">
    Enter the destination credentials (bucket name, webhook URL, SFTP host, and so on).
  </Step>

  <Step title="Save">
    Click **Save**. Your data is delivered automatically on each refresh.
  </Step>
</Steps>

## Related

* [Purchase options](/datasets/marketplace/purchase-options)
* [Pricing](/datasets/marketplace/pricing)
* [Filter dataset by API](/datasets/marketplace/filter-dataset-by-api)
