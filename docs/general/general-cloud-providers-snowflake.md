# Snowflake delivery configuration guide

> **Official Source**: [https://docs.brightdata.com/general/cloud-providers/snowflake](https://docs.brightdata.com/general/cloud-providers/snowflake)
> **Category**: `general`

---

Configure Snowflake as a delivery destination for Bright Data datasets (250+ domains), including connection setup and supported delivery options.

<Note>
  Snowflake configuration is available for 'Datasets' delivery and not available for data collectors (Web Scraper).
</Note>

## How to get started

In order to allow efficient delivery of Datasets to your Snowflake environment, we provide a step-by-step guide to set it up. Just follow these steps:

<Steps>
  <Step title="Select or Create a Database">
    Firstly, decide if you will use an existing database or create a new one. If you opt for a new database, here's the command you need:

    ```sql theme={null}
    CREATE DATABASE <database>;
    ```

    <Tip>
      Remember to replace `<database>` with the name you want for your database.
    </Tip>
  </Step>

  <Step title="Select or Create a Schema">
    Decide if you will use an existing schema or create a new one. By default every database has a PUBLIC schema. If you wish to use a different schema, here's the command you need:

    ```sql theme={null}
    CREATE SCHEMA <schema>;
    ```

    <Tip>
      Replace `<schema>` with your own schema name.
    </Tip>
  </Step>

  <Step title="Select or Create a Warehouse">
    Choose an existing warehouse or create a new one. When creating a new warehouse, consider Snowflake's recommendations for configuring a warehouse specifically for data loading. Use the following command to create a warehouse:

    ```sql theme={null}
    CREATE WAREHOUSE <warehouse>;
    ```

    <Tip>
      Replace `<warehouse>` with your desired warehouse name.
    </Tip>
  </Step>

  <Step title="Select or Create an Internal Named Stage">
    Next, choose an existing internal named stage or create a new one. To create a new stage, use this command:

    ```sql theme={null}
    CREATE STAGE <stage>;
    ```

    <Tip>
      Don't forget to replace `<stage>` with your preferred stage name.
    </Tip>
  </Step>

  <Step title="Create a Role">
    You'll need a role that can write to your chosen stage. To create one, use:

    ```sql theme={null}
    CREATE ROLE <role_name>;
    ```

    <Tip>Change `<role_name>` to your chosen role name.</Tip>
  </Step>

  <Step title="Grant Warehouse Rights to the Role">
    Now, grant your new role the necessary rights to operate on your chosen warehouse using:

    ```sql theme={null}
    GRANT OPERATE ON WAREHOUSE <warehouse> TO ROLE <role_name>;
    ```

    <Tip>
      Remember to replace `<warehouse>` and `<role_name>` with your specific warehouse and role name respectively.
    </Tip>
  </Step>

  <Step title="Enable Write Operations on the Stage for the Role">
    To enable your role to write on the stage, use the command:

    ```sql theme={null}
    GRANT WRITE ON STAGE <stage> TO ROLE <role_name>;
    ```

    <Tip>
      Again, replace `<stage>` and `<role_name>` with your chosen stage and role names.
    </Tip>
  </Step>

  <Step title="Create a BrightData User">
    Next, create a new user for BrightData that will be used to upload data directly into Snowflake. The command is as follows:

    ```sql theme={null}
    create user <user_name>
    PASSWORD = '<password>'
    LOGIN_NAME = <login>
    MUST_CHANGE_PASSWORD = FALSE
    DISABLED = FALSE
    COMMENT = 'user for BrightData to upload data directly into Snowflake'
    ```

    <Tip>
      Replace `<user_name>`, `<password>`, and `<login>` with your chosen username, password, and login name.
    </Tip>
  </Step>

  <Step title="Grant Role Privileges to the New User">
    Finally, grant your new user the privileges of the role you created:

    ```sql theme={null}
    GRANT ROLE <role_name> TO USER <user_name>;
    ```

    <Tip>
      Replace `<role_name>` and `<user_name>` with your role and user names.
    </Tip>
  </Step>

  <Step title="Allowlist IPs">
    If you have an active Network Policy applied in your Snowflake account you need to whiltelist following IPs:

    ```sql theme={null}
    ALTER NETWORK POLICY <policy_name>

    SET ALLOWED_IP_LIST=(
        <existing_allowlisted_ips>,
        '35.169.71.210',
        '34.233.211.38',
        '44.194.183.74',
        '54.243.177.151'
    );
    ```

    <Tip>
      Replace `<policy_name>` with your network policy name. \
      Replace `<existing_whiltelisted_ips>` with the list of existing allowlisted IPs.
    </Tip>

    And that's it! You have now configured your Snowflake environment to receive data from Bright Data.

    If you have any issues or need further assistance, please contact our support team.

    If you want to learn more about Data Loading Performance and Warehouse Size Considerations [click here](https://docs.snowflake.com/en/user-guide/warehouses-overview#impact-on-data-loading).
  </Step>
</Steps>
