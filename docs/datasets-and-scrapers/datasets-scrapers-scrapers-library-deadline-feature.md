# Deadline feature

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/deadline-feature](https://docs.brightdata.com/datasets/scrapers/scrapers-library/deadline-feature)
> **Category**: `datasets-and-scrapers`

---

Limit how long a Bright Data Web Scraper API (1000+ scrapers) trigger request waits when a snapshot may take a long time to finish.

<Steps>
  <Step title="Prerequisites" icon="list-check">
    * Specific task: Add a time limit to a snapshot run so it doesn’t wait indefinitely.
    * Related setting: `deadline` (query parameter)
  </Step>

  <Step title="Set the deadline query parameter">
    Add deadline to your trigger request query string:

    * If you want to wait up to a fixed duration, set a duration like 3m, 15min, 2h.
    * If you want the request to wait until a specific moment, set an ISO timestamp like `2022-01-12T18:58:43.149Z`.

    > **Example:** `&deadline=3m`

    **Expected result:** the trigger request will wait up to the specified limit. If the run is not ready by then, it returns an error/timeout response instead of waiting longer.
  </Step>

  <Step title="Send a trigger request with a deadline">
    Use the same trigger call you normally use and append deadline.

    ```sh highlight={20} theme={null}
    curl \
      -H "Authorization: Bearer TOKEN" \
      -H "Content-Type: application/json" \
      -d '{
        "input": [
          { "url": "https://www.linkedin.com/in/elad-moshe-05a90413/" },
          { "url": "https://www.linkedin.com/in/jonathan-myrvik-3baa01109" },
          { "url": "https://www.linkedin.com/in/aviv-tal-75b81/" },
          { "url":"https://www.linkedin.com/in/bulentakar/" }
        ] 
      }' \
      "https://api.brightdata.com/datasets/v3/trigger" \
      "?dataset_id=gd_l1viktl72bvl7bjuj0" \
      "&endpoint=https%3A%2F%2Fwebhook.site%2Fc6aee479-3dae-44bb-9b44-09a7cd823efe" \
      "&notify=false" \
      "&format=json" \
      "&uncompressed_webhook=true" \
      "&force_deliver=false" \
      "&include_errors=true" \
      "&deadline=3m"
    ```

    `deadline` must be:

    * ISO format (`2022-01-12T18:58:43.149Z`)
    * Duration format (`1s`, `15min`, `2h`, `3d`).

    **Expected result:**

    * If the run completes within 3m, you’ll receive results (or your webhook receives the output payload).
    * If the run does not complete within 3m, the trigger call times out/returns an error response.
  </Step>

  <Step title="Check your webhook payload for success or errors">
    If you configured a webhook endpoint, verify the payload:

    <CodeGroup>
      ```json ✅ Success theme={null}
      [
        {
          "url": "https://www.amazon.com/Solar-Eclipse-Glasses-Certified-Viewing/dp/B08GB3QC1H",
          "product_name": "Soluna Solar Eclipse Glasses AAS Approved 2024 - Made in the USA CE and ISO Certified Safe Shades for Direct Sun Viewing (2 Pack)",
          "product_rating": 4.6,
          "review_id": "R3LKES0U7C9BGB",
          "badge": "Verified Purchase"
        }
      ]
      ```

      ```json ❌ Error (deadline reached) theme={null}
      [
        {
          "timestamp": "2026-02-23T08:54:26.645Z",
          "input": {
            "url": "https://www.amazon.com/Solar-Eclipse-Glasses-Certified-Viewing/dp/B08GB3QC1H",
            "reviews_to_not_include": []
          },
          "error": "Crawl aborted on job cancel",
          "error_code": "aborted_page"
        }
      ]
      ```
    </CodeGroup>
  </Step>
</Steps>
