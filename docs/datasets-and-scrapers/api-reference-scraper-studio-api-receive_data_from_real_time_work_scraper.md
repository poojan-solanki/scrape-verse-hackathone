# Receive data from real-time work scraper

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/Receive_data_from_real_time_work_scraper](https://docs.brightdata.com/api-reference/scraper-studio-api/Receive_data_from_real_time_work_scraper)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api GET /dca/get_result
Use the Bright Data Scraper Studio API to receive data from a real-time scraper. Triggers a custom collector job; returns 200 OK with JSON results.

<Tip>
  **Recommended:** We strongly recommend using the `timeout` parameter on polling requests to reduce unnecessary API calls and help avoid rate limits.
</Tip>

<Note>
  Result data is available for download for 7 days after collection. To avoid expiration, make sure to download the data within 7 days or configure a delivery method to get it automatically to your storage.
</Note>

## Rate limits

* 165,000 requests per minute
