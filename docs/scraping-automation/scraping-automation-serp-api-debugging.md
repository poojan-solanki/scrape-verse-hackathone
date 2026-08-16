# SERP troubleshooting

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/debugging](https://docs.brightdata.com/scraping-automation/serp-api/debugging)
> **Category**: `scraping-automation`

---

Troubleshoot Bright Data SERP API (31 languages) requests using the x-brd-debug response header to capture detailed request and response diagnostics.

## Debugging SERP API

Use the `x-brd-debug` response header to extract detailed debug information about your requests.

Activate by appending `-debug-full` to your proxy username:

```bash theme={null}
curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE-debug-full:$PASSWORD@brd.superproxy.io:44445 \
  "https://www.google.com/search?q=bright+data"
```

The `x-brd-debug` response header will look like this:

```javascript theme={null}
req_id=hl_d09913c7_a1lw123bkcg; bytes_up=2842; bytes_down=562418; billed=false; destination_ip=162.219.225.118; used_req_headers=accept-language,accept; peer_ip=r868133f79d0c3fa9d7c7ccca0151af2e; peer_country=us; render=false
```

| Field              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `req_id`           | Internal request ID - include in bug reports                          |
| `bytes_up`         | Outgoing traffic recorded while processing the request                |
| `bytes_down`       | Incoming traffic recorded while processing the request                |
| `billed`           | Whether the request is considered billable                            |
| `destination_ip`   | IP of the remote server used to fetch the data                        |
| `used_req_headers` | Custom headers relayed in the initial request                         |
| `peer_ip`          | Unique identifier for the IP used - useful for validating IP rotation |
| `peer_country`     | Country of the peer used for the request                              |
| `render`           | Whether the result is browser-rendered HTML or a raw HTTP response    |

## Common Error Codes

| Error             | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `404`             | Invalid URL - likely broken or dead                           |
| `403`             | URL is valid but access is forbidden                          |
| `502`             | Most common SERP API error - see detail in `x-brd-error-code` |
| `407`             | Incorrect credentials (password or zone name)                 |
| `429`             | Rate limit / auto-throttle - contact support                  |
| `401` `411` `444` | Bad request - missing headers or cookies                      |
| `503`             | Service unavailable - browser check failed                    |

```http Example 429 response theme={null}
HTTP/1.1 429 The request was auto-throttled due to low success rate
x-brd-error-code: sr_rate_limit
x-brd-error: The request was auto-throttled due to low success rate
date: Tue, 23 Jan 2024 17:07:19 GMT
connection: keep-alive
```

## SERP API error catalog

Fast SERP runs inside the SERP API and shares its error codes. When a request fails, the error code is returned in the `x-brd-error-code` response header and a human-readable message in `x-brd-error`, as shown in the examples below. None of the errors in this catalog are billed.

### HTTP Error 502

A 502 means the request failed due to an issue on Bright Data's side. Read the error code to tell them apart.

| `x-brd-error-code` | `x-brd-error`           | Description                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unexpected_q`     | Search query mismatch   | Google returned results for a different query than the one you sent (query truncation/cloaking). By default the request fails with this error instead of returning mismatched data. To receive the data anyway, see [Handling query mismatches](#handling-query-mismatches-unexpected_q). |
| `verifying`        | challenge page detected | The request reached the search engine, but it returned a verification page instead of results. The page cannot be solved or skipped, so the request fails and is not billed. Wait a minimum of 15 seconds before retrying the same query.                                                 |

```http Example query mismatch response theme={null}
x-brd-error-code: unexpected_q
x-brd-error: Search query mismatch
```

### HTTP Error 429

A 429 means a rate limit was reached. Read the error code to tell them apart.

| `x-brd-error-code`      | `x-brd-error`                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sr_rate_limit`         | The request was auto-throttled due to low success rate. Please decrease your request rate to %LIMIT%/min.                                                                               | Applied per target host. The limit is calculated dynamically from the success rate observed for that host, so it changes over time. Decrease your request rate and concurrency for that host to the rate given in the message. Retrying immediately fails, retrying only helps after backing off. When no active limit is set, the message states no rate. |
| `bucket_rate_limit`     | Your system is sending too many of this type of request. If you need to send more, contact your Account Manager                                                                         | Applied per zone and per account, against the request rate configured for them. Reduce your request rate to stay within the configured limit, or contact your account manager to raise it. Retrying immediately fails. Wait for the period given in `x-brd-rate-limit-period-ms` before retrying.                                                          |
| `failed_query_rejected` | This query recently failed and cannot be attempted at this time. Please try again later, after a minimum of 15 seconds.                                                                 | Applied per zone and per query string. That query recently failed, so it is banned for 15 seconds and immediate retries fail as well. Retry after a minimum of 15 seconds. Other queries are unaffected and can continue at full rate.                                                                                                                     |
| `repeat_query_rejected` | This query cannot be attempted at this time. Please try again later, after a minimum of 15 seconds.                                                                                     | Applied per zone and per query string. The same query was sent too many times in a short window. Wait at least 15 seconds before resending that query, and avoid sending identical queries concurrently. Other queries are unaffected.                                                                                                                     |
| `client_10110`          | Your account exceeded the allowed rate limits. Reduce requests rate and try again or complete the verification process to remove rate limits. You will not be charged for this request. | Applied per account, on accounts that have not completed verification. Returned in `x-brd-err-code` and `x-brd-err-msg` rather than `x-brd-error-code` and `x-brd-error`, because it is raised by the proxy layer. Reduce your total account request rate, or complete [account verification](/general/account/limited-trial-restrictions).                |

```http Example rejected query response theme={null}
x-brd-error-code: failed_query_rejected
x-brd-error: This query recently failed and cannot be attempted at this time. Please try again later, after a minimum of 15 seconds.
```

Because `client_10110` uses the proxy-layer headers, read both when handling a 429:

```js theme={null}
const code = headers['x-brd-error-code'] || headers['x-brd-err-code'];
```

`sr_rate_limit` and `bucket_rate_limit` responses also state the limit that was applied:

| Header                       | Value                                                   |
| ---------------------------- | ------------------------------------------------------- |
| `x-brd-rate-limit`           | The limit that was reached                              |
| `x-brd-rate-limit-period-ms` | The period that limit is measured over, in milliseconds |

## Handling query mismatches (unexpected\_q)

By default, when Bright Data detects that Google returned results for a different query than the one you sent, the request returns the `unexpected_q` error and you are not billed. If you prefer to receive the mismatched data and validate it yourself, enable `return_mismatch`:

* **Proxy requests** - add the request header:
  ```http theme={null}
  x-unblock-data-options: {"return_mismatch": true}
  ```
* **API requests** - add to the request body:
  ```json theme={null}
  "data_options": {"return_mismatch": true}
  ```

<Warning>
  With `return_mismatch` enabled, mismatched responses are returned as successful requests and are billed. Validate them using the fields described in the next section.
</Warning>

## How to detect query truncation

Google sometimes returns results for a shorter version of your query than the one you sent. For example, a search for `pizza in tlv` can return results for `pizza`. This behavior applies to both the SERP API and Fast SERP text (web) search. By default these responses return the `unexpected_q` error (see above). If you enabled `return_mismatch`, validate each response yourself by comparing `general.query` with `general.detected_query`, then checking for a `spelling` object to tell a genuine spelling correction apart from a truncated search:

1. If `general.query` and `general.detected_query` match, Google searched exactly what you sent.
2. If they differ, check for a `spelling` object:
   * **`spelling` present** - Google auto-corrected the spelling and the results are valid for the corrected query.
   * **`spelling` absent** - Google truncated (cloaked) your query and the results are for a shorter version of what you searched.

The example below shows an auto-corrected query, where `detected_query` differs from `query` but a `spelling` object confirms the results are valid:

```text theme={null}
{
  "general": {
    "query": "pizaa",
    "detected_query": "pizza"
  },
  "spelling": {
    "original_text": "pizaa",
    "original_link": "https://www.google.com/search?q=pizaa&nfpr=1",
    "auto_corrected_text": "pizza",
    "auto_corrected_link": "https://www.google.com/search?q=pizza&spell=1"
  },
  "organic": [ ... ]
}
```

For the `general` and `spelling` field definitions, see [Parsed JSON results](/scraping-automation/serp-api/parsed-json-results/parsing-search-results) for the SERP API or [Fast SERP web search](/scraping-automation/serp-api/fast-serp/web-search) for Fast SERP.

## What happens when a query is blocked

When Bright Data detects that Google has flagged a query, that exact query is blocked across the SERP API and Fast SERP for 15 seconds. Any request for the same query during that window returns the `failed_query_rejected` error (or `repeat_query_rejected` if the query was throttled for being repeated). Retry the query after the 15-second window, or vary the query, to receive results. Repeatedly hammering flagged queries hurts overall success rates. If your queries are generated synthetically (templates, LLMs, keyword permutations), track which patterns repeatedly trigger rejections or truncation and reformulate them. See [SERP API error catalog](#serp-api-error-catalog) for the full error responses.

## Get Success Rate Statistics Per Domain

Retrieve SERP API success rate stats from the past 7 days. Supports single domain or wildcard.

```bash Single domain theme={null}
curl "https://api.brightdata.com/unblocker/success_rate/google.com" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY"
```

```bash All monitored TLDs theme={null}
curl "https://api.brightdata.com/unblocker/success_rate/google.*" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY"
```

<Warning>
  Once you provide your API key, replace all `$API_KEY`, `$CUSTOMER_ID`, `$ZONE`, and `$PASSWORD` placeholders accordingly.
</Warning>
