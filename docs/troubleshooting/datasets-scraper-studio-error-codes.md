# Scraper Studio error codes

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/error-codes](https://docs.brightdata.com/datasets/scraper-studio/error-codes)
> **Category**: `troubleshooting`

---

Look up Bright Data Scraper Studio error codes, status codes and warnings, with the meaning and suggested fix for each collection failure.

This reference lists the error codes Bright Data Scraper Studio returns when a crawl, parser, request, validation or delivery step fails during a collection run, and the suggested action for each one.

Read the `error_code`, `status_code` and raw `error` message together to understand what failed and what to do next.

<Note>
  These are Scraper Studio collection errors, not API authentication or API request errors. For proxy-layer HTTP errors returned outside Scraper Studio, see the [Error catalog](/proxy-networks/errorCatalog).
</Note>

## How do I read a Scraper Studio error?

Scraper Studio uses five system fields to describe the status of each record.

| Field          | Type                        | What it tells you                                                                                                                                                              |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error_code`   | Machine-readable identifier | Why the crawl failed, for example `dead_page`, `bad_input`, `blocked`, `crawl_error`, `parse_error` or `load_sitemap`. Use this field for filtering, automation or retry logic |
| `error`        | Human-readable message      | The detailed failure reason, for example `Crawler error: Cannot find product title`                                                                                            |
| `status_code`  | HTTP-like number            | A summary of the crawl result. Optional, see the status code table below                                                                                                       |
| `warning`      | Human-readable message      | A non-fatal issue on a record that was still delivered                                                                                                                         |
| `warning_code` | Machine-readable identifier | The machine-readable version of `warning`, for example `dead_page` or `validation`                                                                                             |

Branch on `error_code` rather than on the raw `error` string, because the message text changes as scrapers are updated:

```js theme={null}
if (line.error_code === 'dead_page') {
  // Handle expired or removed URL
}
```

### What do the Scraper Studio status codes mean?

`status_code` summarizes the crawl result as an HTTP-like numeric value.

| Status code | Meaning                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| 400         | Bad request or invalid page response                                                   |
| 403         | Access blocked or denied by the target site                                            |
| 404         | Page not found, removed or invalid URL                                                 |
| 407         | Account is suspended or access is restricted                                           |
| 408         | Request timed out. The target site did not respond in time                             |
| 421         | Request was routed to the wrong server                                                 |
| 429         | Too many requests. Rate limit reached                                                  |
| 500         | Crawl, proxy or navigation failed before Scraper Studio received a valid page response |
| 503         | Target site or service is temporarily unavailable, overloaded or timed out             |

<Warning>
  `status_code` is sometimes missing or `undefined`, because some error paths do not assign a numeric status code. Treat `status_code` as optional and do not assume it is always present.
</Warning>

## How do errors and warnings differ?

An error means the record failed. A warning means the record was delivered but something should be reviewed.

* **Error:** the record failed and should be treated as unsuccessful. A failed record usually includes `error`, `error_code` and `status_code`
* **Warning:** the record was delivered, but something should be reviewed. A delivered record with a non-fatal issue usually includes `warning`, `warning_code` and `status_code`
* **Successful record:** none of `error`, `error_code`, `warning` or `warning_code` is populated

Warnings occur when a partial crawl returned data but also hit an issue, when a normally failing condition was configured as a non-error, or when output validation found an issue but the record was still kept.

When a `dead_page` error is downgraded to a warning, the output includes:

```text theme={null}
warning_code = dead_page
warning = Dead page detected
```

Schema validation warnings usually use:

```text theme={null}
warning_code = validation
```

The same underlying issue can appear either as an error or as a warning, depending on the scraper logic, validation rules and output schema settings.

## Where do Scraper Studio errors come from?

Scraper Studio errors come from one of three layers.

### What causes scraper errors?

Scraper errors come from the scraper's interaction code, parser code or input handling. Examples include invalid input, `wait_element_timeout`, `parse_error`, `click_timeout`, `dead_page`, `bad_input` and `blocked`.

Fix these by updating the scraper logic, parser selectors, validation rules or input data.

### What causes proxy and unblocker errors?

Proxy and unblocker errors come from Bright Data's proxy, routing or unblocking layer. Examples include proxy connection issues, target website blocking, geo or zone configuration issues, no available peers and rate limiting.

Fix these by retrying, reducing the request rate, changing country or geo settings, or contacting Bright Data support if the issue persists.

### What causes platform and infrastructure errors?

Platform and infrastructure errors come from the Scraper Studio platform, browser worker, parser sandbox, storage layer or internal infrastructure. Examples include worker timeout, browser disconnected, parser memory limit exceeded, upload failure and WebSocket connection issues.

These are often transient and are frequently resolved by retrying. If the issue persists, open a support ticket with the scraper ID, job ID, failed input and raw error message.

## Common scraper error codes

These error codes indicate scraper execution issues. The request may have failed because of invalid input, a missing or changed page element, target blocking, parsing problems, rate limits, CAPTCHA handling or scraper logic that needs to be updated.

| Error code                     | Meaning                                                                                                                                                                                             | Suggested action                                                                                                                                                                                                  |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dead_page`                    | The scraper detected that the page does not exist or is no longer relevant.                                                                                                                         | Check whether the page still opens manually. Remove expired URLs or fix discovery logic that produces stale links.                                                                                                |
| `bad_input`                    | The scraper marked the input as invalid and skipped retries. This happens when required input fields are missing, the URL is invalid or the page is not the expected type.                          | Validate inputs before triggering the scraper. Remove invalid URLs or update discovery logic to avoid unsupported page types.                                                                                     |
| `blocked`                      | The `blocked()` function was used in the scraper code, or the target website refused access to the page.                                                                                            | Retry later, reduce the request rate, or review country, session, CAPTCHA and block-handling logic.                                                                                                               |
| `crawl_error`                  | A general crawl execution error occurred. This happens when the page did not load correctly, required page data was missing, the browser session closed or scraper code tried to read missing data. | Open Debug crawl or Crawl inspector for the failed input. Check page loading, add null checks and rerun failed pages.                                                                                             |
| `wait_element_timeout`         | The scraper waited for an element that did not appear in time.                                                                                                                                      | Confirm the selector still exists and is stable. Increase the timeout or handle alternate page layouts if the page loads slowly.                                                                                  |
| `ajax_request_error`           | A background request failed or timed out during page execution.                                                                                                                                     | Review network requests in preview or debug mode. If the request is optional, relax validation or add fallback logic.                                                                                             |
| `collector_request_validation` | A custom request validation rule rejected an AJAX or network response, usually from `verify_requests()` logic.                                                                                      | Review the validation callback and confirm the rejected response is required. Relax the rule if the request is optional.                                                                                          |
| `captcha_timeout`              | CAPTCHA solving did not complete within the expected time.                                                                                                                                          | Retry the crawl and check whether the target repeatedly shows CAPTCHA. Review CAPTCHA handling and job deadline settings.                                                                                         |
| `close_popup_fail`             | Scraper Studio failed to close a popup, such as a consent manager or modal.                                                                                                                         | Check whether the popup selector changed or appears conditionally. Update popup handling or make the scraper tolerate the popup if it does not block extraction.                                                  |
| `click_timeout`                | A click action did not complete within the timeout. The element may be missing, hidden, disabled or not clickable.                                                                                  | Confirm the selector matches a visible, clickable element. Add `wait(selector)` before clicking or update the click logic.                                                                                        |
| `tag_response`                 | A tagged response callback failed, or the tagged response returned an unexpected status or format.                                                                                                  | Review the tagged response callback and confirm the expected response exists. Check the browser network tab in the IDE to verify that the response loads correctly, and add checks before reading fields from it. |
| `load_sitemap`                 | Scraper Studio failed to load or parse a sitemap. Causes include fetch failure, request timeout or invalid sitemap format.                                                                          | Open the sitemap URL manually and confirm it is reachable and valid.                                                                                                                                              |
| `load_more_timeout`            | The scraper waited for more items to load, but no new items appeared before the timeout.                                                                                                            | Confirm the "load more" selector and list container still exist. Add a stop condition when no more results are available.                                                                                         |
| `child_input_size_validation`  | A child input created by `next_stage()` exceeded the allowed input size.                                                                                                                            | Reduce the data passed to `next_stage()`. Pass only fields needed by the next stage, such as URL, ID or small metadata values.                                                                                    |
| `detect_block`                 | Scraper Studio detected block-page content, such as "Access Denied", sign-in walls or other known blocking patterns.                                                                                | Open the failed page manually and confirm whether it shows a block page. If many inputs fail, reduce the request rate or review location and session behavior.                                                    |
| `ERR_INVALID_URL`              | A URL value is invalid or not in a supported format.                                                                                                                                                | Validate input URLs before triggering the scraper. Make sure URLs include `http://` or `https://` and do not contain malformed characters.                                                                        |
| `not_supported_cmd`            | The scraper used a function that is not supported by the selected worker type.                                                                                                                      | Change the worker type or replace the function. Use a Browser worker for browser-only actions such as click, scroll, type and wait. See [Worker types](/datasets/scraper-studio/worker-types).                    |
| `detached_element`             | The scraper referenced an element that was removed or re-rendered before the action completed.                                                                                                      | Re-select the element immediately before interacting with it. Add waits after page updates and avoid storing element handles across DOM changes.                                                                  |
| `timeout`                      | The scraper timed out while waiting for an element, request, response or page action to complete.                                                                                                   | Confirm that the expected element or response exists. Increase the timeout only when needed and add fallback logic for optional or slow-loading content.                                                          |

### How do `block` and `blocked` differ?

`block` and `blocked` are different error codes. `blocked` is raised by scraper logic, while `block` is raised by the layer that fetched the page.

`blocked` is usually raised by scraper logic. The scraper calls `blocked()` when it detects a blocked page, login wall, CAPTCHA page or other condition that should mark the crawl as blocked:

```js theme={null}
blocked('Login page was shown');
```

`block` usually comes from navigation, request rejection, target-site blocking or proxy-level response handling. It may include the real HTTP status returned by the target site or upstream layer. Observed status codes for `block` are:

```text theme={null}
400, 401, 403, 404, 405, 409, 410, 418, 429, 500, 503
```

In short:

* `blocked` is collector-level block detection, usually raised by scraper logic
* `block` is target, proxy or navigation-level rejection, often with an HTTP status

## Navigation and browser error codes

These error codes indicate navigation or browser loading issues. The scraper may have failed because the page did not load in time, the browser could not reach the URL, the target kept network requests open, or the connection timed out or closed before completion.

| Error code                       | Meaning                                                                                                                                                                                             | Suggested action                                                                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bad_navigate`                   | The browser failed to navigate to the requested URL.                                                                                                                                                | Open the URL manually and check whether it redirects or blocks access. Retry the crawl if the failure is temporary.                                       |
| `navigation_timeout`             | The page did not finish navigation within the allowed time.                                                                                                                                         | Increase the navigation timeout only if needed. Prefer `wait(selector)` or a different `wait_until` strategy instead of waiting for full page load.       |
| `domcontentloaded_event_timeout` | The browser timed out while waiting for the `DOMContentLoaded` event. The page did not reach the expected load state in time.                                                                       | If full page load is not required, use `navigate(input.url, { wait_until: 'navigate' })` and then `wait(selector)` for the element you need.              |
| `networkidle_event_timeout`      | The browser timed out while waiting for network activity to become idle. Some pages never reach network idle because they keep background requests open.                                            | Avoid relying on full network idle for pages with continuous background traffic. Use `wait_until: 'navigate'` and wait for a specific selector instead.   |
| `load_event_timeout`             | The page did not fire the full `load` event in time.                                                                                                                                                | Avoid waiting for full page load if it is not required. Use selector-based waits for the content needed by the parser.                                    |
| `document_load_failed`           | The browser started navigation, but the main document failed to load. Causes include an HTTP failure, SSL/TLS issue, empty response, missing credentials, redirect issue or proxy and peer problem. | Retry and verify the target URL opens in a browser. If the failure persists, try a different geo or open a support ticket with the job ID and full error. |
| `net_err_timed_out`              | The network request timed out.                                                                                                                                                                      | Retry and check target stability. Reduce concurrency if the timeout affects many inputs.                                                                  |
| `net_err_closed`                 | The target site closed the connection unexpectedly.                                                                                                                                                 | Check whether the site is available and retry. If it happens frequently, review blocking or rate behavior.                                                |
| `net_err_cert_date_invalid`      | The SSL/TLS certificate presented by the server is not valid for the current date.                                                                                                                  | Verify that the target URL opens correctly in a browser and that the site certificate is valid.                                                           |
| `net_err_http2_protocol_error`   | The browser encountered an HTTP/2 protocol error while loading the target page or resource.                                                                                                         | Retry the request. If it persists, confirm whether the target site loads normally in a browser.                                                           |
| `net_err_cert_authority_invalid` | The target site's SSL/TLS certificate is signed by an untrusted or unknown certificate authority.                                                                                                   | Verify that the target URL opens correctly in a browser and that the certificate is trusted.                                                              |

### Browser and infrastructure lifecycle errors

These error codes indicate that the browser session, runner or browser-control connection was interrupted during the crawl. They are usually transient platform or browser lifecycle errors.

Common lifecycle error codes are `runner_disconnected`, `network_error`, `cdp_conn_err`, `cdp_cmd_timeout`, `cdp_disconnect`, `bad_browser`, `browser_disconnected` and `ipc_timeout`.

**Suggested action:** retry the job. If the error persists, open a support ticket with the job ID, response IDs, failed input and raw error message.

### Rate limit variants

`global_rate_limit` and `bucket_rate_limit` mean that requests to the target domain are being rate limited. This usually happens when the target site is sensitive to high request volume or too many requests are sent in parallel.

**Suggested action:** retry after a short delay. If the issue repeats, reduce concurrency and queue jobs instead of running many jobs in parallel.

## Job lifecycle error codes

These error codes indicate that the collection did not complete because of runtime, deadline, cancellation or page-volume limits.

| Error code         | Meaning                                                                                                                     | Suggested action                                                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job_run_timeout`  | The collection or crawl exceeded the allowed runtime. This happens during long waits, slow page actions or CAPTCHA solving. | Optimize scraper logic and check for loops, long waits or repeated CAPTCHA solving. Reduce work per request or increase the deadline if available. |
| `crawl_timeout`    | The crawler did not return a result within the internal timeout.                                                            | Retry the crawl. Simplify the crawl logic or reduce page complexity if it repeats.                                                                 |
| `deadline_timeout` | The job reached its configured deadline.                                                                                    | Increase the deadline or reduce work per request. For large workloads, split the job into smaller runs.                                            |
| `too_many_pages`   | The job created too many child pages.                                                                                       | Reduce the number of child pages generated per input. Use batch collection for high fan-out jobs.                                                  |
| `uncrawled_page`   | The page result was requested before the page was crawled, usually because the job deadline was reached.                    | Increase the deadline or reduce the number of pages created by the scraper.                                                                        |
| `aborted_page`     | The crawl was aborted because the job was canceled.                                                                         | No action is required if the job was intentionally canceled. Otherwise, rerun the affected inputs.                                                 |

## Infrastructure and storage error codes

These error codes indicate platform, worker, storage or delivery issues. The collection may have failed because an internal service was unavailable, a worker was overloaded, the result was too large or delivery to an external destination failed.

| Error code             | Meaning                                                               | Suggested action                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `infra_error`          | An internal infrastructure error occurred.                            | Retry the request. If the issue persists, contact support with the job or response ID.                                                         |
| `page_too_big`         | The loaded page exceeded the Scraper Studio page size limit of 16 MB. | Collect less data per page. Avoid storing large HTML blobs or unnecessary fields.                                                              |
| `crawl_request_failed` | The crawl runner could not connect to a crawler worker after retries. | Retry the job. Escalate to support if the issue persists.                                                                                      |
| `worker_too_busy`      | The crawler worker was overloaded.                                    | Retry later and reduce concurrency.                                                                                                            |
| `external_upload_fail` | Uploading a result or media file to an external destination failed.   | Verify delivery destination configuration, credentials, permissions and path settings.                                                         |
| `failed_media_upload`  | Scraper Studio failed to save a media file.                           | Retry the failed page and confirm the media URL is reachable. If the failure persists, check delivery and storage settings or contact support. |

## Proxy and unblocker error codes

These error codes indicate a routing or connection issue between Scraper Studio and the underlying proxy network. They usually happen when the proxy network cannot establish or maintain a stable connection to the target site.

| Error code       | Meaning                                                                                                                                                                            | Suggested action                                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `proxy`          | A proxy-layer failure occurred during navigation or request. Possible causes include no peer availability, DNS failure, SSL issues, target rejection, timeout or protection pages. | Retry, switch country if needed and verify the target is accessible. If the failure persists, contact support with the job ID and raw error. |
| `proxy_error`    | The proxy layer could not connect to the target website or received an unexpected upstream response.                                                                               | Retry and verify the target URL. If the issue repeats, try another country or escalate with the job ID and error details.                    |
| `net_err_tunnel` | The browser could not establish a tunnel connection through the proxy.                                                                                                             | Check whether the website is available and retry. Escalate if the issue persists across many inputs.                                         |
| `no_peers`       | Scraper Studio failed to establish a connection with a peer.                                                                                                                       | Retry later or remove restrictive peer settings such as country, location or session constraints.                                            |

## Parser and payload error codes

These error codes indicate parser execution or payload-size issues. The scraper may have failed because parser code encountered invalid or missing data, the payload sent to the parser was too large, or parser execution exceeded memory or CPU limits.

| Error code                    | Meaning                                                                                                                                                                                                  | Suggested action                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `parse_error`                 | Parser code failed while extracting or processing data. Common causes include syntax errors, blocked or invalid content, missing fields, invalid URLs, or reading properties from `null` or `undefined`. | Run a preview with the failing input and inspect the parser code. Add defensive checks and validate selectors.                  |
| `parse_request_payload_large` | The payload sent to the parser exceeded the size limit.                                                                                                                                                  | Reduce the amount of data sent to the parser. Extract only the required HTML section or response fields.                        |
| `parse_mem_limit_exceeded`    | Parser execution exceeded the memory limit, often because of very large HTML, JSON, arrays or embedded data.                                                                                             | Reduce the parser payload and avoid storing large objects in memory. Extract only the required fields.                          |
| `parse_cpu_limit_exceeded`    | Parser execution exceeded the CPU limit, often because of heavy loops, regex or transformations.                                                                                                         | Simplify parser logic and reduce loops over large datasets. Move unnecessary processing out of the parser.                      |
| `parse_req_error`             | The parser request payload exceeded the allowed field size.                                                                                                                                              | Reduce the size of the request or parsed payload. Avoid sending very large fields, files or HTML blocks into parser processing. |

## Access and permissions error codes

These error codes indicate an access or compliance issue. The request was stopped because the target is restricted by Bright Data's compliance safeguards or because account permissions need review.

| Error code | Meaning                                             | Suggested action                                                                                            |
| ---------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `brul`     | The target is restricted by Bright Data compliance. | If access is required, contact `compliance@brightdata.com` and request permission for the blocked resource. |

## How to troubleshoot a failed Scraper Studio collection

Work through these steps in order when a collection run returns errors.

1. Check the `error_code`.
2. Check the `status_code`, if present.
3. Read the raw `error` message.
4. Open the failed URL manually to confirm whether the page exists and is accessible.
5. Use Debug crawl or Crawl inspector to inspect the failed input, crawl stage, children, files, warnings and output records.
6. If the error is parser-related, run a preview and inspect HTML, Output and Last errors.
7. If many inputs fail with the same error, check the request rate, concurrency, blocking, worker type and recent target-site changes.
8. If the issue persists, open a support ticket with the scraper ID, job or response ID, failed input and raw error message.

## FAQs

### Why is `status_code` missing from my failed record?

Some Scraper Studio error paths do not assign a numeric status code, so `status_code` is sometimes missing or `undefined`. Treat the field as optional and branch on `error_code` instead.

### Does a warning mean the record was lost?

No. A warning means the record was delivered but something should be reviewed, such as a partial crawl, a condition configured as a non-error or an output validation issue. Only records with `error` and `error_code` are unsuccessful.

### Which errors should I retry automatically?

Retry transient platform, browser lifecycle, proxy and rate limit errors, such as `infra_error`, `runner_disconnected`, `browser_disconnected`, `worker_too_busy`, `proxy_error`, `global_rate_limit` and `bucket_rate_limit`. Do not retry `bad_input`, `ERR_INVALID_URL` or `dead_page`, because those need an input or discovery-logic fix.
