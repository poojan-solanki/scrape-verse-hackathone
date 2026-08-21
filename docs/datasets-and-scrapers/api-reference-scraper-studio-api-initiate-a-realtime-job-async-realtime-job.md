# Trigger async real-time scrape

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/initiate-a-realtime-job/async-realtime-job](https://docs.brightdata.com/api-reference/scraper-studio-api/initiate-a-realtime-job/async-realtime-job)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api POST /dca/trigger_immediate
Trigger an async real-time Scraper Studio scrape. POST /dca/trigger_immediate returns a response_id to fetch the result from the Real-time data endpoint.

<Note>
  This endpoint does not return the scrape data. It returns a `response_id`. Use that `response_id` with the [Realtime Data endpoint](/api-reference/scraper-studio-api/Receive_data_from_real_time_work_scraper) to retrieve the result when the scrape is complete.
</Note>
