# Delete a Scraper Studio scraper

> **Official Source**: [https://docs.brightdata.com/api-reference/scraper-studio-api/delete-scraper](https://docs.brightdata.com/api-reference/scraper-studio-api/delete-scraper)
> **Category**: `datasets-and-scrapers`

---

api-reference/web-scraper-ide-rest-api DELETE /dca/collector/{scraper_id}
DELETE /dca/collector/{scraper_id} removes a Scraper Studio scraper from your Bright Data account, taking it out of My Scrapers and preventing future runs.

Use `DELETE /dca/collector/{scraper_id}` to delete a Bright Data Scraper Studio scraper from your account. Deleting a scraper removes it from My Scrapers and prevents new manual, scheduled or API-triggered runs.

This endpoint takes no request body and returns the plain text body `OK` on success, not JSON. Read the response as text rather than calling a JSON parser on it.

<Warning>
  Deleting a scraper cannot be undone. Use this endpoint only when the scraper is no longer needed.
</Warning>

## How to find a scraper ID

Use the scrapers list endpoint to find the ID of the scraper you want to delete:

```bash theme={null}
curl "https://api.brightdata.com/dca/collectors_list" \
  -H "Authorization: Bearer $BRIGHT_DATA_API_TOKEN"
```

Use the returned `id` value as the `scraper_id` path parameter. In API parameters, this ID may also be referred to as `collector_id`. See [List Scraper Studio scrapers](./list-scrapers) for the full parameter list.

## Record a deletion reason

Pass the optional `reason` query parameter to record why the scraper was deleted, for tracking or audit purposes:

```bash theme={null}
curl -X DELETE "https://api.brightdata.com/dca/collector/c_mnvdqy7w1fyaku0uep?reason=no_longer_needed" \
  -H "Authorization: Bearer $BRIGHT_DATA_API_TOKEN"
```

Omit `reason` to delete the scraper without recording one.

## When to use this endpoint

* Remove a scraper you no longer run, so it stops appearing in My Scrapers
* Clean up test or duplicate scrapers created while developing in Scraper Studio
* Decommission a scraper after migrating its workload to another scraper

## Related

* [List Scraper Studio scrapers](./list-scrapers): find the `scraper_id` before deleting
* [List Scraper Studio jobs](./list-jobs): review the jobs a scraper has run
* [Cancel a Scraper Studio job](./cancel-job): stop a single job without deleting the scraper
