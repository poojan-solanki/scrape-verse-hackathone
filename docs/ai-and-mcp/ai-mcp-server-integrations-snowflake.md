# Snowflake integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/snowflake](https://docs.brightdata.com/ai/mcp-server/integrations/snowflake)
> **Category**: `ai-and-mcp`

---

Connect Snowflake Cortex to the Bright Data MCP server (60+ tools) to enrich tables with live web data and run automated extraction inside your warehouse.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

<Steps>
  <Step title="Get your Bright Data API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
    3. Keep it secure - you'll use it when connecting to the MCP
  </Step>

  <Step title="Install the Bright Data MCP app">
    1. Navigate to **Apps** in your Snowflake interface
    2. Find and click **Bright Data MCP**
    3. Click **Install** to add the application to your account
  </Step>

  <Step title="Configure external access">
    1. Open the installed app
    2. You'll see a request for **Bright Data External Access**
    3. Click **Review** to see the network configuration
    4. Click **Connect** - this automatically creates the necessary network rules
    5. Click **Activate** to enable the external access integration

    The app now has all the resources it needs to run.
  </Step>

  <Step title="Start the MCP service and get the endpoint">
    Start the application and retrieve the MCP endpoint URL.

    ```sql expandable theme={null}
    -- Start the app
    CALL <application-name>.app_public.start_app();

    -- Check application status
    CALL <application-name>.app_public.service_status();

    -- Get the endpoint URL
    SHOW ENDPOINTS IN SERVICE <application-name>.core.mcp_service;
    ```

    Copy the endpoint URL from the output, you'll need it to connect your MCP client.
  </Step>

  <Step title="Create a Snowflake Personal Access Token (PAT)">
    1. In Snowflake, go to **Settings**
    2. Navigate to **Authentication** → **Programmatic Access Tokens**
    3. Click **Generate New Token**
    4. Save the token securely, it will be used for MCP authentication
  </Step>

  <Step title="Connect to the Bright Data MCP">
    Use the following endpoint format in your MCP client:

    ```text theme={null}
    https://<endpoint>.snowflakecomputing.app/mcp?token=<BRIGHT_DATA_API_TOKEN>
    ```

    Include the required authentication header:

    ```text theme={null}
    Authorization: Snowflake Token="YOUR_SNOWFLAKE_PAT"
    ```

    Replace:

    * `<endpoint>` with the Snowflake endpoint from the previous step
    * `<BRIGHT_DATA_API_TOKEN>` with your Bright Data API token
    * `YOUR_SNOWFLAKE_PAT` with your Snowflake Personal Access Token
  </Step>

  <Step title="Test the integration">
    1. Connect to the MCP endpoint from your MCP-compatible client (e.g. Claude Desktop)
    2. Invoke a tool such as web browsing or scraping
    3. Confirm that responses are returned successfully
  </Step>

  <Step title="Monitor usage">
    1. Visit [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Track request volume and usage
    3. Your free tier includes **5,000 requests per month**
  </Step>
</Steps>
