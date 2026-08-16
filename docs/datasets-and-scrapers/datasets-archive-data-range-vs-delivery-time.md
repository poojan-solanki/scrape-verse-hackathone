# How data range affects delivery time

> **Official Source**: [https://docs.brightdata.com/datasets/archive/data-range-vs-delivery-time](https://docs.brightdata.com/datasets/archive/data-range-vs-delivery-time)
> **Category**: `datasets-and-scrapers`

---

Understand how your selected data range affects delivery time in Bright Data's Web Archive, including S3 Glacier retrieval delays for older data.

If your query is matching data within **last 24 hours** - your snapshot will start processing/delivering immediately.

If some of your matched data is **older than 24 hours** - it needs to be retrieved from **S3 Glacier Deep Archive** storage tier before delivery, which may take **up to 72 hours**.

<Warning>
  Avoid queries that span the retention boundary (approximately 24 hours from now).

  Requests with `max_age` or time ranges that fall within \~24h ± 2h of the current time may include files that have already been migrated to archive storage tier. Attempting a dump for such queries can cause the dump to stall or remain incomplete because of files storage class transition.
</Warning>

<Tip>
  **Recommendations:**

  * We recommend using `max_age` = `24h` for initial testing to ensure fast delivery.
  * For real-time data needs: use `max_age: "24h"` or a narrower window to avoid the retention edge.
  * For historical data (older than 24h): use explicit `min_date`/`max_date` filters rather than `max_age`.
  * If a dump appears stalled: we usually retry automatically, please open a ticket if it didn't happen.
</Tip>
