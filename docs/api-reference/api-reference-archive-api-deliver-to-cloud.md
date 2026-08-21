# Deliver snapshot to S3, Azure Blob or GCP

> **Official Source**: [https://docs.brightdata.com/api-reference/archive-api/deliver-to-cloud](https://docs.brightdata.com/api-reference/archive-api/deliver-to-cloud)
> **Category**: `api-reference`

---

api-reference/web-archive-api POST /webarchive/dump
Deliver a Bright Data Archive API snapshot to Amazon S3, Azure Blob Storage, Google Cloud Storage or a webhook. POST /webarchive/dump returns a dump_id.

`POST /webarchive/dump` delivers the snapshot from a completed search to Amazon S3, Azure Blob Storage, Google Cloud Storage or a webhook, and returns a `dump_id`.

<Note>
  To use S3 storage delivery, you will first need to do the following:

  * Create an [AWS role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) which gives Bright Data access to your system.
    * During this setup, you will be asked by Amazon for an “external ID” that is used with the role.
    * Your external ID for S3 is your Bright Data **Account ID** that can be found within [Account Settings](https://brightdata.com/cp/setting/customer_details)
  * Once a role is created, you will need to allow the Bright Data delivery role to `AssumeRole` that role.
    * The Bright Data delivery role is: `arn:aws:iam::422310177405:role/brd.ec2.zs-dca-delivery`
</Note>

<Note>
  To use Google Cloud Storage delivery, create a bucket and provide the required GCP delivery settings.
</Note>

<Warning>
  The **webhook** delivery strategy is **not suitable for large dumps** unless you
  are hosting the webhook on your own infrastructure. Third-party inspection
  tools such as [webhook.site](https://webhook.site) impose strict request body
  size limits and will fail to receive payloads that can reach up to **1 GB** in
  size. For large deliveries, use **Amazon S3**,  **Azure Blob Storage**
  or **Google Cloud Storage** instead.
</Warning>

<Note>
  **Common dump parameters:**

  * `search_id` (required): The search ID from a completed search
  * `max_entries` (optional): Limit the number of files to include in the dump
  * `delivery` (required): Delivery configuration (S3, Azure, GCP, or webhook)
</Note>

<Tip>
  If you’re running a linux/macos machine, you can simulate one of our delivery webhooks with the code on [this page](/datasets/archive/webhook-test).
</Tip>

## What causes a 400 response

`POST /webarchive/dump` returns HTTP 400 when the request body fails validation. The response carries an `error` summary and a `details` array naming each field that failed. Common causes:

* `search_id` is missing.
* `delivery` is missing.
* The `delivery.settings` block does not match the chosen `delivery.strategy`. Each strategy has its own required settings: `bucket` plus `assume_role` for Amazon S3, `bucket` for Google Cloud Storage, `container` plus `credentials` for Azure Blob Storage and `url` for a webhook.

Fix the field named in `details[].path` and resend the request.
