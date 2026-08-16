# How to set up Bright Data with Boomi

> **Official Source**: [https://docs.brightdata.com/integrations/boomi](https://docs.brightdata.com/integrations/boomi)
> **Category**: `general`

---

Learn how to connect Bright Data's scraping and data collection APIs to a Boomi process using the Bright Data Partner connector. Spans 195 countries.

The [Bright Data Partner connector](https://help.boomi.com/searchResults?q=bright%20data) lets you retrieve data from Bright Data's scraping and data collection APIs directly within a Boomi process. You can integrate with the SERP, Dataset, Scraper, and Web Unlocker APIs to build end-to-end public web data workflows without leaving the Boomi platform.

<Note>
  The Bright Data Partner connector is developed and maintained by Bright Data. Customer support is handled through the Boomi Support Portal, where tickets are triaged to Bright Data.
</Note>

## Which object types are supported

The connector supports the following object types, each accessed via the Execute action:

| Object   | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| Dataset  | Access marketplace datasets with filtering and snapshot retrieval  |
| Scraper  | Submit web scraping jobs and retrieve results asynchronously       |
| Unlocker | Access protected web content via proxy and unblocking services     |
| SERP     | Retrieve search engine results pages from Google, Bing, and others |

## Prerequisites

Before you begin, ensure you have:

* A valid Bright Data account
* An API key generated from the [Bright Data Control Panel](https://brightdata.com/cp/setting/users) with permissions for the services you intend to use

## Connect your Bright Data account

<Steps>
  <Step title="Open the Connection configuration">
    In your Boomi process, add a new **Bright Data Partner connector** component and navigate to the **Connection** tab.
  </Step>

  <Step title="Set the Base URL">
    Enter the Bright Data API base URL:

    ```http theme={null}
    https://api.brightdata.com
    ```

    Customize this value only if you need to point to a different endpoint, such as for testing or regional deployments.
  </Step>

  <Step title="Enter your API key">
    Paste your Bright Data API key into the **API Token** field (Boomi's connector UI labels it this way). The connector uses this key for Bearer authentication.
  </Step>

  <Step title="Test the connection">
    Click **Test Connection** to verify your settings. If the test succeeds, save the connection. If it fails, review your Base URL and API key, then test again.
  </Step>
</Steps>

## Configure an operation

Each operation defines how the connector interacts with a specific Bright Data object. Create a separate operation component for each action/object combination your integration requires.

All object types use the **Execute** action.

### Options tab fields

| Field              | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Connector action   | Set to **Execute** for all Bright Data operations                                                                       |
| Object             | Import using the **Import** button. Choose Dataset, Scraper, Unlocker, or SERP                                          |
| Request profile    | A flexible XML/XSD schema that accepts dynamic content structures                                                       |
| Response profile   | A JSON profile returned by the connector                                                                                |
| Tracking direction | Select **Input Documents** or **Output Documents**                                                                      |
| Error behavior     | Enable to handle failed operations in your process rather than only reporting them                                      |
| Request Payload    | Optional document-level override for the request. Accepts JSON, URL query style, or newline-separated `key=value` pairs |

## How each object type behaves

### How the Dataset object works

The connector operates in one of two modes depending on whether a `snapshot_id` is present:

* **Mode A (Filter):** No `snapshot_id` provided. Filters marketplace datasets based on your query parameters.
* **Mode B (Snapshot):** A `snapshot_id` starting with `snap_` is provided. The connector polls every 10 seconds, up to 25 retries, until the snapshot is ready.

```json theme={null}
{
  "dataset_id": "gd_l1viktl72bvl7bjuj0",
  "filter": {
    "name": "name",
    "operator": "=",
    "value": "Or Lenchner"
  }
}
```

### How the Scraper object works

* **Mode A (Trigger):** No `snapshot_id` provided. Submits a new scraping job and returns a `snapshot_id`.
* **Mode B (Snapshot):** A `snapshot_id` starting with `s_` is provided. The connector polls for completion and downloads results.

```json theme={null}
{
  "dataset_id": "gd_l1viktl72bvl7bjuj0",
  "url": "https://www.linkedin.com/in/orlenchner",
  "discover_by": "profile_url"
}
```

### How the Unlocker object works

Requires a `url` parameter to bypass website restrictions. Supports `method`, `country`, and `body` parameters.

```json theme={null}
{
  "zone": "web_unlocker1",
  "url": "https://geo.brdtest.com/welcome.txt",
  "format": "json",
  "method": "GET",
  "country": "us",
  "data_format": "markdown"
}
```

### How the SERP object works

Requires `engine` and `query` parameters. Supports multiple engines in a single request using a comma-separated list.

```json theme={null}
{
  "zone": "serp_api1",
  "url": "https://www.google.com/search?q=BrightData",
  "format": "json",
  "method": "GET",
  "country": "us",
  "data_format": "markdown"
}
```

<Note>
  The connector returns all data in JSON format. If the underlying API returns non-JSON content such as HTML or CSV, the connector wraps the raw content in a JSON structure for consistent processing in Boomi.
</Note>

## What's in each release

**Version 1.0.0**

Initial release. Supports Dataset, Scraper, Unlocker, and SERP object types via the Execute action.
