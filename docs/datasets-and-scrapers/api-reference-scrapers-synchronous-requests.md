# Synchronous requests

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/synchronous-requests](https://docs.brightdata.com/api-reference/scrapers/synchronous-requests)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to synchronous Requests. POST /datasets/v3/scrape returns scraped data synchronously in a single response.

## How It Works

This synchronous API endpoint allows users to send a scraping request and receive the results in real-time directly in the response, at the point of request - such as a terminal or application - without the need for external storage or manual downloads. This approach streamlines the data collection process by eliminating additional steps for retrieving results.

You can specify the desired output format using the format parameter. If no format is provided, the response will default to JSON.

## Timeout Limit

Please note that this synchronous request is subject to a 1 minute timeout limit. If the data retrieval process exceeds this limit, the API will return an HTTP 202 response, indicating that the request is still being processed. In such cases, you will receive a snapshot ID to monitor and retrieve the results asynchronously via the Monitor Snapshot and Download Snapshot endpoints.

Example response on timeout:

```JSON 202 theme={null}
{
  "snapshot_id": "s_xxx",
  "message": "Your request is still in progress and cannot be retrieved in this call. Use the provided Snapshot ID to track progress via the Monitor Snapshot endpoint and download it once ready via the Download Snapshot endpoint."
}
```
