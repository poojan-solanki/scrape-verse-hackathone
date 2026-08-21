# Custom inputs

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/custom-inputs](https://docs.brightdata.com/datasets/scrapers/scrapers-library/custom-inputs)
> **Category**: `datasets-and-scrapers`

---

dca-custom-inputs POST /datasets/v3/scrape
Add custom fields to a Bright Data Web Scraper API input schema (1000+ pre-built scrapers); values you send are returned in each output record for tagging.

## Custom inputs

You can add custom fields to your input schema, and whatever you send in those fields will be **returned in the results** for each record/job. This is useful for:

* **Unified schema**: Keep the same output structure across different scrapers/datasets.
* **Index / reference fields**: Pass an `id`, `row_index`, or any internal key so you can easily match results back to the original input rows.
