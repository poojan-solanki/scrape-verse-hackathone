# Trigger sync real-time scrape

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/initiate-a-realtime-job/sync-realtime-job](https://docs.brightdata.com/api-reference/scraper-studio-api/initiate-a-realtime-job/sync-realtime-job)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api POST /dca/crawl
Trigger a synchronous real-time Scraper Studio scrape. POST /dca/crawl holds the request open until the scraper finishes or times out, then returns JSON.

The synchronous real-time endpoint keeps the HTTP request open until the scraper finishes or the `timeout` is reached, then returns the collected data directly as JSON. This is the difference from the [async real-time endpoint](/api-reference/scraper-studio-api/initiate-a-realtime-job/async-realtime-job), which returns a `response_id` immediately.

<Warning>
  You can trigger only **single-input** APIs. Make sure the payload is **an object, not an array of objects**.
</Warning>

## Timeout behavior

The `timeout` query parameter must be between `25s` and `50s`.

* If the scraper finishes within the timeout, the response returns `200 OK` with the collected data.
* If the scraper is still running when the timeout is reached, the response returns `202 Accepted` with a `response_id`. Use that `response_id` with the [Realtime Data endpoint](/api-reference/scraper-studio-api/Receive_data_from_real_time_work_scraper) to retrieve the result asynchronously.

## When to use synchronous real-time

Use **synchronous real-time** (`POST /dca/crawl`) when:

* You need the result in the same HTTP request.
* You are sending a single input.
* Your client can keep the request open until the scrape finishes.
* The scrape normally completes within the configured timeout.

Use [**async real-time**](/api-reference/scraper-studio-api/initiate-a-realtime-job/async-realtime-job) (`POST /dca/trigger_immediate`) when:

* You want to trigger the scrape and retrieve the result later.
* You do not want to keep the HTTP request open.

Use [**batch collection**](/api-reference/scraper-studio-api/Trigger_a_scraper_for_batch_collection_method) when:

* You need to process multiple inputs in one run.
