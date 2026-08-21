# Instagram data delivery to Amazon S3

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/instagram/data-delivery/amazon-s3](https://docs.brightdata.com/datasets/scrapers/instagram/data-delivery/amazon-s3)
> **Category**: `datasets-and-scrapers`

---

Configure the Bright Data Instagram Scraper API to deliver scraped profiles, posts and reels data directly to your Amazon S3 bucket on job completion.

This guide shows you how to configure the Bright Data Instagram Scraper API to deliver scraped data directly to your Amazon S3 bucket when a collection job completes.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* An AWS account with an S3 bucket
* IAM credentials with write access to the bucket
* Familiarity with the [async request workflow](/datasets/scrapers/instagram/async-requests)

## Step 1: Create an S3 bucket

If you already have a bucket, skip to Step 2.

In the [AWS S3 Console](https://s3.console.aws.amazon.com/s3/buckets):

1. Click **Create bucket**
2. Enter a bucket name (e.g., `instagram-scraper-data`)
3. Select your preferred AWS region
4. Keep default settings and click **Create bucket**

## Step 2: Set up IAM permissions

Create an IAM role that grants Bright Data write access to your bucket.

### Create a policy

In the [IAM Console](https://console.aws.amazon.com/iam/), go to **Policies** and create a new policy with this JSON:

```json theme={null}
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::instagram-scraper-data/*"
    }
  ]
}
```

Replace `instagram-scraper-data` with your actual bucket name.

### Create a role for Bright Data

1. Go to **Roles** > **Create role**
2. Select **AWS account** as the trusted entity type
3. Enter Bright Data's AWS account ID: `422310177405`
4. Attach the policy you created above
5. Name the role (e.g., `BrightDataS3Delivery`)
6. Note the role ARN (e.g., `arn:aws:iam::123456789012:role/BrightDataS3Delivery`)

Add an external ID condition to the trust policy:

```json theme={null}
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::422310177405:role/brd.ec2.zs-dca-delivery"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "YOUR_BRIGHT_DATA_CUSTOMER_ID"
        }
      }
    }
  ]
}
```

Find your customer ID in [Account settings](https://brightdata.com/cp/setting/customer_details).

## Step 3: Configure delivery in Bright Data

1. Navigate to your [scraper configuration](https://brightdata.com/cp/scrapers)
2. Click the **Delivery settings** tab
3. Select **Amazon S3** as the delivery destination
4. Enter your credentials:
   * **Bucket name**: Your S3 bucket name
   * **Role ARN**: The IAM role ARN from Step 2
   * **Region**: Your S3 bucket region
   * **Path prefix** (optional): A folder path within the bucket (e.g., `instagram/profiles/`)
5. Select your preferred file format (JSON, NDJSON, or CSV)
6. Click **Save**

## Step 4: Trigger a collection

Trigger an async collection. Results are automatically delivered to your S3 bucket:

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1vikfch901nx3by4&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[
      {"url": "https://www.instagram.com/instagram"},
      {"url": "https://www.instagram.com/natgeo"},
      {"url": "https://www.instagram.com/nasa"}
    ]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/trigger",
      params={"dataset_id": "gd_l1vikfch901nx3by4", "format": "json"},
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[
          {"url": "https://www.instagram.com/instagram"},
          {"url": "https://www.instagram.com/natgeo"},
          {"url": "https://www.instagram.com/nasa"},
      ],
  )

  print("Snapshot ID:", response.json()["snapshot_id"])
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1vikfch901nx3by4&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.instagram.com/instagram" },
        { url: "https://www.instagram.com/natgeo" },
        { url: "https://www.instagram.com/nasa" },
      ]),
    }
  );

  const data = await response.json();
  console.log("Snapshot ID:", data.snapshot_id);
  ```
</CodeGroup>

## Step 5: Verify delivery

Once the collection completes, check your S3 bucket for the delivered file:

```bash theme={null}
aws s3 ls s3://instagram-scraper-data/instagram/profiles/
```

You should see a file named with the snapshot ID (e.g., `s_m1a2b3c4d5e6f7g8h.json`).

Download and inspect it:

```bash theme={null}
aws s3 cp s3://instagram-scraper-data/instagram/profiles/s_m1a2b3c4d5e6f7g8h.json ./results.json
cat results.json | python -m json.tool | head -20
```

You can also verify delivery status using the [Monitor Delivery API](/api-reference/scrapers/management-apis/monitor-delivery).

## Troubleshooting

<Accordion title="Files not appearing in S3?">
  * Verify the IAM role ARN and external ID are correct
  * Check that the bucket policy allows `s3:PutObject` from Bright Data's account
  * Ensure the bucket region matches your configuration
  * Review delivery status in the Bright Data dashboard under **Logs**
</Accordion>

<Accordion title="Access denied errors?">
  Verify the trust policy on your IAM role includes Bright Data's account (`422310177405`) and your external ID matches your Bright Data customer ID found in [Account settings](https://brightdata.com/cp/setting/customer_details).
</Accordion>

<Accordion title="Delivered file is empty or missing records?">
  Check the collection status in the Bright Data dashboard. If some URLs failed, the delivered file contains only successful results. Retry failed URLs in a separate request.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/instagram/data-delivery/webhooks">
    Receive results at your HTTP endpoint.
  </Card>

  <Card title="All delivery options" icon="truck" href="/datasets/scrapers/scrapers-library/delivery-options">
    Snowflake, Azure, GCS, SFTP, and more.
  </Card>
</CardGroup>
