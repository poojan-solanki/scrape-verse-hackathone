# Monitor progress

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/management-apis/monitor-progress](https://docs.brightdata.com/api-reference/scrapers/management-apis/monitor-progress)
> **Category**: `datasets-and-scrapers`

---

api-reference/dca-api get /datasets/v3/progress/{snapshot_id}
Use Bright Data Web Scraper API management endpoints to monitor Progress. GET /datasets/v3/progress/{id} returns snapshot or job status as JSON.

* [**Asynchronous Usage**](/api-reference/rest-api/scraper/asynchronous-requests)**:** Trigger a data collection job via the async endpoint (`/trigger`), receive a `snapshot_id`, and poll the Monitor Progress API until the status is ready, then download the results.
* [**Synchronous Usage**](/api-reference/scrapers/synchronous-requests)**:** If a sync request (`/scrape`) exceeds the 1-minute timeout, receive a `snapshot_id` to poll the Monitor Progress API and download the results once they are ready.

The Monitor Progress API provides flexibility and stability, allowing efficient handling of large data volumes by differentiating between immediate and delayed result retrievals.

<Tip>
  If the request takes too long, we recommend sending an Asynchronous request.
</Tip>
