# Get destination type schema

> **Official Source**: [https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-destination-type-schema](https://docs.brightdata.com/api-reference/marketplace-dataset-api/get-destination-type-schema)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api GET /datasets/delivery_settings/{destination_type}/schema
Retrieve the exact fields and credentials required to configure a specific delivery destination type such as s3, sftp, gcs or webhook.

Each delivery destination supported by Bright Data has its own field set. For example, `s3` requires a `bucket` and either an access key/secret pair or an IAM role ARN plus external ID, while `sftp` requires host and credential fields. Call this endpoint with the destination type you plan to use, then supply the returned fields in the `deliver` object when you call [Update view delivery settings](/api-reference/marketplace-dataset-api/update-view-delivery-settings).

<Tip>
  Use [Get delivery options](/api-reference/marketplace-dataset-api/get-delivery-options) first to list the valid values you can pass as `destination_type`.
</Tip>

## Example credential payloads and permissions

The values shown below are sample values. Replace them with your real credentials before sending a request.

Use [Get delivery options](/api-reference/marketplace-dataset-api/get-delivery-options) to list the supported `destination_type` values. Then call this endpoint with the selected `destination_type` and pass the required fields in the `deliver` object.

For cloud storage destinations, Bright Data may validate that delivered files are readable after upload. Make sure the credentials include the provider-specific upload and read permissions listed below. If read permission is missing, delivery upload may succeed, but read-after-upload validation can fail.

### Amazon S3

```json theme={null}
"credentials": {
  "aws-access-key": "<AWS_ACCESS_KEY_ID>",
  "aws-secret-key": "<AWS_SECRET_ACCESS_KEY>"
}
```

Required permissions:

* `s3:PutObject`
* `s3:GetObject`

For restrictive multipart upload policies, multipart-related permissions may also be required, such as `s3:AbortMultipartUpload` and `s3:ListMultipartUploadParts`.

### Amazon S3 with IAM role

```json theme={null}
"credentials": {
  "role_arn": "<AWS_ROLE_ARN>",
  "external_id": "<EXTERNAL_ID>"
}
```

Required permissions:

* `s3:PutObject`
* `s3:GetObject`

For restrictive multipart upload policies, multipart-related permissions may also be required, such as `s3:AbortMultipartUpload` and `s3:ListMultipartUploadParts`.

The IAM role trust policy must allow Bright Data’s delivery role to assume the customer role using the provided external ID.

### Azure Blob Storage

```json theme={null}
{
  "container": "customer-container",
  "credentials": {
    "account": "<storage-account-name>",
    "key": "<storage-account-key>"
  }
}
```

Required permissions:

* blob create/write permission for upload
* blob read permission for read-after-upload validation

### Azure Blob Storage with SAS token

```json theme={null}
{
  "container": "customer-container",
  "credentials": {
    "account": "<storage-account-name>",
    "sas_token": "<sas-token>"
  }
}
```

Required SAS permissions:

* `r`, read, required for read-after-upload validation
* `c`, create, required for creating new blobs
* `w`, write, required for uploading blob content

### Google Cloud Storage

```json theme={null}
{
  "bucket": "customer-bucket",
  "credentials": {
    "client_email": "<service-account>@<project>.iam.gserviceaccount.com",
    "private_key": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"
  }
}
```

Required permissions:

* `storage.objects.create`
* `storage.objects.get`

### Ali OSS

```json theme={null}
{
  "bucket": "customer-bucket",
  "region": "oss-us-east-1",
  "credentials": {
    "access_key_id": "<ALI_OSS_ACCESS_KEY_ID>",
    "access_key_secret": "<ALI_OSS_ACCESS_KEY_SECRET>"
  }
}
```

Required permissions:

* `oss:PutObject`
* `oss:GetObject`

For restrictive multipart upload policies, multipart-related permissions may also be required.

### Webhook

```json theme={null}
{
  "endpoint": "https://example.com/webhook",
  "auth_header": "Bearer <TOKEN>",
  "compress": true
}
```

Requirements:

* the endpoint must accept `POST` requests
* the endpoint must return a `2xx` response after receiving the payload
* for webhook payloads larger than `10 MB`, use cloud storage delivery instead of webhook
