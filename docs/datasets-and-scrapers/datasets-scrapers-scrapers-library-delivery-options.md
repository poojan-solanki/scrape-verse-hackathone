# Delivery options

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/delivery-options](https://docs.brightdata.com/datasets/scrapers/scrapers-library/delivery-options)
> **Category**: `datasets-and-scrapers`

---

Configure Bright Data Web Scraper API delivery: API download, S3, Azure Blob, GCS, SFTP and webhook endpoints with JSON, NDJSON and CSV output formats.

To set your delivery preferences for the dataset, simply click on the 'Delivery settings' tab:

* Choose file format :
  * JSON
  * NDJSON
  * CSV
  * JSON lines
* Choose how to receive the data :
* Amazon S3 ([AWS S3 User Role Permissions](/datasets/scrapers/scrapers-library/delivery-options#aws-s3-user-role-permissions))
* Google Cloud Storage ([How to find your google cloud Private Key](/datasets/scrapers/scrapers-library/delivery-options#how-to-find-your-google-cloud-private-key))
* Google Cloud PubSub
* Microsoft Azure Storage
* SFTP/FTP
* Snowflake ([Snowflake Delivery Configuration Guide](/datasets/scrapers/scrapers-library/delivery-options#snowflake-delivery-configuration-guide))

  **Streamed Delivery Feature (Stream results)** - In cases of large snapshots, you have the option to get immediate results in minimum batches of 10. A delivery method is required (storage or webhook- not compatible with API download). To trigger in WSAPI, add `&stream_max_lines=10`, or turn ON the toggle bar.

  * 10 is the minimum value
  * 100k is the maximum value

    <img alt="Screenshot 2025 12 23 120416" title="Screenshot 2025 12 23 120416" />

**File Delivery:** You can add `&download_fields=` to your WSA request to retrieve files along with the extracted data.

Available options:

* `html`
* `warc` (not always available)
* `screenshot` (not always available)

Note: This works only when the delivery method is set to **Storage** and **Webhook**.

<Frame>
  ![Download fields setting for selecting html, warc, and screenshot file delivery](https://brightdata.zendesk.com/hc/article_attachments/22455157046161)
</Frame>

## AWS S3 User Role Permissions

<Frame>
  <img alt="delivery-strategy.png" />
</Frame>

To control access to S3 resources, you can use IAM (Identity and Access Management) to create and manage AWS users and their permissions. One way to do this is by creating IAM roles and attaching them to S3 resources.

<Steps>
  <Step title="Create a Policy">
    Go to the "Policies" section in the IAM console

    <Frame>
      <img alt="policies.png" />
    </Frame>

    Create a new policy that defines the permissions for the S3 resources you want to grant access to.

    Example of AWS policy:

    ```json theme={null}
    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Action": [
            "s3:PutObject",
            "s3:GetObject"
        ],
        "Resource": "arn:aws:s3:::NAME-OF-YOUR-BUCKET/*"
        }
    ]
    }
    ```
  </Step>

  <Step title="Create a Role">
    Go to the "Roles" section in the IAM console

    <Frame>
      <img alt="roles.png" />
    </Frame>

    Create a new role and specify the policy created in step 1 in the "Permission policies" section.

    Make a note of the ARN of the role, which will be used for delivery credentials. (The ARN will look like `arn:aws:iam::<ROLE_ID>:role/<ROLE_NAME>`)

    Example of User Role:

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
            "sts:ExternalId": "YOUR EXTERNAL ID"
            }
        }
        }
    ]
    }
    ```
  </Step>

  <Step title="Use the ARN of the role">
    In the S3 resources that you want to grant access to, attach the role created in step 2 by using the ARN.
  </Step>
</Steps>

## How to find your Google Cloud Private Key

1. Go to the Google Cloud Platform Console home page - [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Expand the menu by Google Cloud Platform, and click IAM & Admin.
3. Click **Service accounts**.

<Frame>
  <img alt="service-accounts.png" />
</Frame>

4. Choose an existing service account from the list or create one.

<Frame>
  <img alt="create-service-account.png" />
</Frame>

If the button is not visible, create a project first in order to **Create Service Account**.

<Frame>
  <img alt="create-project.png" />
</Frame>

5. Create the service account by entering the name, ID, and description at the **Create Service Account** process. Then grant the access and create the account.

<Frame>
  <img alt="service-account-details.png" />
</Frame>

6. Click on Email of the service account.

<Frame>
  <img alt="email.png" />
</Frame>

7. To access the keys, click on the 'KEYS' tab. Click the "Add Key" dropdown and then select 'Create New Key'.

<Frame>
  <img alt="create-new-key.png" />
</Frame>

8. Choose JSON as the key type.

<Frame>
  <img alt="type-json.png" />
</Frame>

9. The service account key JSON file is automatically downloaded to your local machine.
10. Copy `private_key` from the downloaded JSON file & Paste it to Data Collector delivery settings.

<Frame>
  <img alt="private-key.png" />
</Frame>

## Snowflake Delivery Configuration Guide

<Note>
  Snowflake configuration is available for 'Datasets' delivery and not available for data collectors (Web Scraper)
</Note>

**Getting Started**

In order to allow efficient delivery of Datasets to your Snowflake environment, we provide a step-by-step guide to set it up. Just follow these steps:

<Steps>
  <Step title="Select or Create a Database">
    Firstly, decide if you will use an existing database or create a new one. If you opt for a new database, here's the command you need:

    ```sh theme={null}
    CREATE DATABASE <database>;
    ```

    Remember to replace `<database>` with the name you want for your database.
  </Step>

  <Step title="Select or Create a Schema">
    Decide if you will use an existing schema or create a new one. By default every database has a PUBLIC schema. If you wish to use a different schema, here's the command you need:

    ```sh theme={null}
    CREATE SCHEMA <schema>;
    ```

    Replace `<schema>` with your own schema name.
  </Step>

  <Step title="Select or Create a Warehouse">
    Choose an existing warehouse or create a new one. When creating a new warehouse, consider Snowflake's recommendations for configuring a warehouse specifically for data loading. Use the following command to create a warehouse:

    ```sh theme={null}
    CREATE WAREHOUSE <warehouse>;
    ```

    Replace `<warehouse>` with your desired warehouse name.
  </Step>

  <Step title="Select or Create an Internal Named Stage">
    Next, choose an existing internal named stage or create a new one. To create a new stage, use this command:

    ```sh theme={null}
    CREATE STAGE <stage>;
    ```

    Don't forget to replace `<stage>` with your preferred stage name.
  </Step>

  <Step title="Create a Role">
    You'll need a role that can write to your chosen stage. To create one, use:

    ```sh theme={null}
    CREATE ROLE <role_name>;
    ```

    Change `<role_name>` to your chosen role name.
  </Step>

  <Step title="Grant Warehouse Rights to the Role">
    Now, grant your new role the necessary rights to operate on your chosen warehouse using:

    ```sh theme={null}
    GRANT OPERATE ON WAREHOUSE <warehouse> TO ROLE <role_name>;
    ```

    Remember to replace `<warehouse>` and `<role_name>` with your specific warehouse and role name respectively.
  </Step>

  <Step title="Enable Write Operations on the Stage for the Role">
    To enable your role to write on the stage, use the command:

    ```sh theme={null}
    GRANT WRITE ON STAGE <stage> TO ROLE <role_name>;
    ```

    Again, replace `<stage>` and `<role_name>` with your chosen stage and role names.
  </Step>

  <Step title="Create a BrightData User">
    Next, create a new user for BrightData that will be used to upload data directly into Snowflake. The command is as follows:

    ```sh theme={null}
    create user <user_name>
    PASSWORD = '<password>'
    LOGIN_NAME = <login>
    MUST_CHANGE_PASSWORD = FALSE
    DISABLED = FALSE  
    COMMENT = 'user for BrightData to upload data directly into Snowflake'
    ```

    Replace `<user_name>`, `<password>`, and `<login>` with your chosen username, password, and login name.
  </Step>

  <Step title="Grant Role Privileges to the New User">
    Finally, grant your new user the privileges of the role you created:

    ```sh theme={null}
    GRANT ROLE <role_name> TO USER <user_name>;
    ```

    Replace `<role_name>` and `<user_name>` with your role and user names.
  </Step>

  <Step title="Allowlist IPs">
    If you have an active [Network Policy](https://docs.snowflake.com/en/user-guide/network-policies) applied in your Snowflake account you need to allowlist the following IPs:

    ```sh theme={null}
    ALTER NETWORK POLICY <policy_name>  
    SET ALLOWED_IP_LIST=(  
    <existing_allowlisted_ips>,  
    '35.169.71.210',  
    '34.233.211.38',  
    '44.194.183.74',  
    '54.243.177.151');
    ```

    Replace `<policy_name>` with your network policy name. Replace `<existing_allowlisted_ips>` with the list of existing allowlisted IPs.

    And that's it! You have now configured your Snowflake environment to receive data from Bright Data.

    ## webhook whitelist IPs

    All of the IP addresses listed below are legitimate Bright Data webhook sources used across our infrastructure (Scrapers, AI scrapers, SERP API, etc.).

    This applies to all asynchronous webhook deliveries from Bright Data services.

    To ensure you receive all webhook notifications without issues, please allowlist (whitelist) the following IPs:

    ```text theme={null}
    54.175.27.69
    34.225.9.175
    100.28.38.247
    100.29.18.195
    52.72.185.255
    35.174.112.248
    54.165.183.124
    3.91.140.7
    52.202.75.37
    98.82.225.117
    100.27.150.189
    18.214.10.85
    35.169.71.210
    44.194.183.74
    ```

    <Note>
      If you have any issues or need further assistance, please contact our support team.

      If you want to learn more about Data Loading Performance and Warehouse Size Considerations [click here](https://docs.snowflake.com/en/user-guide/warehouses-overview#impact-on-data-loading).
    </Note>
  </Step>
</Steps>
