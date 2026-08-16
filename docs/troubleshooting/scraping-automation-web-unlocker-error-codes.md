# Web Unlocker API error codes

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/error-codes](https://docs.brightdata.com/scraping-automation/web-unlocker/error-codes)
> **Category**: `troubleshooting`

---

Catalog of Bright Data Web Unlocker API errors by HTTP status, with each x-brd-error-code value's meaning and the action to resolve it.

This reference explains how to identify Web Unlocker API errors, how the same error appears in each access mode and how to resolve the most common error codes.

## How do I know the error came from Web Unlocker and not the target site?

Every Web Unlocker error carries an `x-brd-error` response header describing the failure. Most also carry a machine-readable code: `x-brd-error-code` for unlocker-level errors, or `x-brd-err-code` for proxy-level errors passed through. If `x-brd-error` is absent and you received a response, that response came from the target site itself, including its own error pages and its own 4xx/5xx statuses, which are delivered to you as-is.

Branch your logic on the code rather than on the message text, because messages carry request-specific details such as selectors, hostnames and timeout values.

## Where does the error appear in each access mode?

The same error codes are returned in both access modes. What differs is where the HTTP status lives:

| Access mode  | Endpoint                     | Where the status is                                                                                                                                                                                                                                                               |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct API   | `api.brightdata.com/request` | The outer response is `200 OK` once the request reaches the unlocker. The result status is in the `x-brd-status-code` header. Requests rejected before unlocking starts return a real outer status: `401` for API-key problems, `400` for an unknown zone name or an invalid URL. |
| Native proxy | `brd.superproxy.io:33335`    | The HTTP status of the response itself, with the error message, or a shortened form of it, in the status reason phrase.                                                                                                                                                           |

On the native proxy, country and session options move from JSON body parameters into username flags (for example `-country-us`), but produce the same error codes.

The same failure, on the Direct API:

```http Direct API response theme={null}
HTTP/1.1 200 OK
x-brd-error: Navigation failed: The SSL/TLS certificate presented by the server is not valid for the current date
x-brd-error-code: net_err_cert_date_invalid
x-brd-status-code: 502
```

and on the native proxy:

```http Native proxy response theme={null}
HTTP/1.1 502 Navigation failed
x-brd-error: Navigation failed: The SSL/TLS certificate presented by the server is not valid for the current date
x-brd-error-code: net_err_cert_date_invalid
```

## Which headers carry the error code?

Two sets of error headers exist, by layer:

| Layer                                                                      | Code header        | Message header  | Documented in                                       |
| -------------------------------------------------------------------------- | ------------------ | --------------- | --------------------------------------------------- |
| Unlocker-level                                                             | `x-brd-error-code` | `x-brd-error`   | This page                                           |
| Proxy-level, passed through (`policy_*`, `client_*`, `peer_*`, `target_*`) | `x-brd-err-code`   | `x-brd-err-msg` | [Proxy error catalog](/proxy-networks/errorCatalog) |

Both families can appear in either access mode. Responses with a `400`, `403` or `407` status also carry an RFC9209 `Proxy-Status` header, whose `details` field repeats the proxy-level code (for example `details="policy_20020: Bad Port used..."`). The 502 unlock failures listed below do not carry that header.

## Which errors clear on a retry?

Retrying is worth doing for errors caused by the peer or by the unlock attempt, because each request uses a different peer. Errors caused by a property of the target, or by your own request parameters, return the same result on every attempt.

| Behaviour                                                             | Codes                                                                                                                                                                                                                          |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Retrying can succeed                                                  | `reject_block`, `resolve_failed_*`                                                                                                                                                                                             |
| Retrying returns the same error, so fix the cause instead             | `net_err_cert_date_invalid`, `net_err_cert_common_name_invalid`, `net_err_cert_authority_invalid`, `document_load_failed` when the cause is a TLS or cipher mismatch, `proxy_error` when the host does not resolve, `no_peers` |
| Configuration errors, unchanged until the zone or the request changes | `premium`, `feature_not_active`, `ub_bad_endpoint_robots`                                                                                                                                                                      |

## Error catalog

### HTTP Error 400

A 400 means the request was refused before an unlock attempt was made, because the zone configuration or the request itself blocks it. These responses do not include an `x-brd-debug` header.

#### `premium`

| `x-brd-error`                                                                                                                                      | Suggested action                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Targeting %HOST% requires Premium permissions. To enable 'Premium domains', go to your Web Unlocker zone configuration page: %ZONE\_EDIT\_URL% ... | Enable [Premium domains](/scraping-automation/web-unlocker/features#web-unlocker-api-premium-domains) in the zone configuration. The message links directly to your zone's edit page. Enabling it makes the same request to the same domain succeed. |

#### `feature_not_active`

| `x-brd-error`                              | Suggested action                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manual expect is not enabled for this zone | The request used a Custom Web Unlocker feature, for example the `x-unblock-expect` header, that is not enabled on the zone. Enable the matching [Custom Web Unlocker API feature](/scraping-automation/web-unlocker/features#custom-web-unlocker-api), or remove the header. Note that custom features switch the zone to 100% billing. |

#### `ub_bad_endpoint_robots`

| `x-brd-error`                                                                                                                                                                                | Suggested action                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Request Failed (bad\_endpoint): Requested site is not available for immediate access mode in accordance with robots.txt. Ask your account manager to get full access for targeting this site | The requested path is disallowed by the target's `robots.txt`, and the account is in immediate (no-KYC) access mode, which honors `robots.txt`. Complete [KYC verification](/general/account/limited-trial-restrictions) or ask your account manager for full access. The same request from a full-access account is not blocked by this check. |

#### Request validation (Direct API only, real outer 400)

| Body                                                                  | Suggested action                                                                                                                                                                                                       |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zone "..." not found`                                                | The `zone` value does not match any zone in your account. Check the zone name in the [control panel](https://brightdata.com/cp/zones). The same mistake on the native proxy returns `407` with `client_10002` instead. |
| `{"error":"Request validation failed","error_code":"validation",...}` | Malformed request body, for example a URL without `https://`. Fix the field named in `details`.                                                                                                                        |

### HTTP Error 401 (Direct API only)

API-key authentication happens before the request reaches the unlocker, so these return a **real outer 401** with a plain-text body and no `x-brd-*` headers.

| Body                              | Cause                                                                   | Suggested action                                      |
| --------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| `Auth method is not supported`    | The value of the `Authorization: Bearer` header is not a valid API key. | Check your [API key](/api-reference/authentication).  |
| `User authentication is required` | The `Authorization` header is missing.                                  | Add `Authorization: Bearer <API key>` to the request. |

### HTTP Error 403

Access is restricted by Bright Data policy. Most of these carry a proxy-level code in `x-brd-err-code`, documented in the [proxy error catalog](/proxy-networks/errorCatalog).

| `x-brd-err-code`     | When it fires                                                                                                                                                                                                                                                        | Suggested action                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy_20020`       | The destination port is not supported, for example `:25` or `:8080`.                                                                                                                                                                                                 | Use a [supported port](/proxy-networks/faqs).                                                                                                         |
| `client_10090`       | The `zone` value points to a Browser API (Scraping Browser) zone, which cannot be used through the Web Unlocker request interface.                                                                                                                                   | Use a browser connection for that zone, see [Browser API](/scraping-automation/scraping-browser/introduction), or pass a Web Unlocker zone in `zone`. |
| *(no code returned)* | The target is a private or reserved address, or is blocked by policy. The message reads `Forbidden: You tried to target ... but got blocked. It can be related to your blacklist or whitelist settings or the target site is not allowed by Bright Data policy. ...` | Target a public hostname permitted by Bright Data policy, and check the zone's allowlist and denylist.                                                |

### HTTP Error 407

Authentication against the proxy layer failed. On the native proxy this is the outer status, with a summary in the status reason phrase. On the Direct API the same `407` appears in `x-brd-status-code`.

| `x-brd-err-code` | Status line                         | Cause                                                                                                                                                                                           | Suggested action                                                                                                                      |
| ---------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `client_10000`   | `407 Auth failed`                   | Wrong zone password, or wrong customer ID.                                                                                                                                                      | Check the zone password and customer ID in the [control panel](https://brightdata.com/cp/zones).                                      |
| `client_10002`   | `407 Zone not found`                | The zone name is misspelled, disabled or deleted.                                                                                                                                               | Confirm the zone is active, or list zones with [Get active zones](/api-reference/account-management-api/Get_active_Zones).            |
| `client_10010`   | `407 Proxy Authentication Required` | No proxy credentials were sent.                                                                                                                                                                 | Add `brd-customer-<id>-zone-<zone>:<password>` as the proxy user.                                                                     |
| `client_10001`   | `407 Invalid Auth`                  | Request parameters are carried inside the proxy username, so a malformed value, for example the country `usa` instead of `us`, fails to parse even when the zone name and password are correct. | Check the format of the parameters in the username before changing credentials. A two-letter lowercase country code parses correctly. |

### HTTP Error 429

#### `sr_rate_limit`

| `x-brd-error`                                          | Suggested action                                                                                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| The request was auto-throttled due to low success rate | Bright Data's health monitor throttled requests to this target after its success rate dropped. Contact [support](mailto:support@brightdata.com). |

### HTTP Error 502

A 502 means the unlock attempt itself failed. The reason is in `x-brd-error-code`.

#### `reject_block`

| `x-brd-error`                    | Suggested action                                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| captcha or protection page found | A CAPTCHA or protection page was detected, so the response was rejected instead of being delivered. Retry: each attempt uses a different peer, and the same request to the same URL has been observed to succeed on a later attempt. |

#### `resolve_failed_*`

| `x-brd-error`          | Suggested action                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Captcha resolve failed | A CAPTCHA solve was attempted and did not complete. The suffix names the challenge type, for example `resolve_failed_akamai_interstitial`. Retry, as with `reject_block`. If one URL keeps failing, report it to support with the `req_id`. |

#### `http_status`

| `x-brd-error`                                      | Suggested action                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| response status was rejected: %STATUS% status code | The target answered with a blocking HTTP status, so the response was discarded instead of being delivered. This also covers a 429 returned by the target site itself. Each attempt uses a different peer, so a retry is worth one attempt. If the code persists, the target is blocking the current setup: contact support with the `req_id`. |

#### `expect_element`

| `x-brd-error`                                                     | Suggested action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| waiting for selector "%SELECTOR%" failed: timeout %MS%ms exceeded | The page loaded, but an element the unlocker waits for did not appear within its wait. Observed waits range from 30 to 150 seconds, so a client timeout shorter than that aborts the request before the error is returned: allow at least 180 seconds. A URL that returns this code repeatedly keeps returning it, so report it to support with the `req_id` rather than retrying. With [manual expect](/scraping-automation/web-unlocker/features#manual-expect-elements) enabled, first confirm your own selector exists on the page. |

#### `navigation_timeout`

| `x-brd-error`              | Suggested action                                                                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation timeout @ %URL% | The rendered page did not finish navigating within the time limit. If one URL times out consistently, report it to support with the `req_id`. |

#### `domcontentloaded_event_timeout`

| `x-brd-error`                                        | Suggested action                                                                                                                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Timed out waiting for window\.DomContentLoaded event | The rendered page did not fire its `DOMContentLoaded` event within the time limit. If one URL returns this consistently, report it to support with the `req_id`. |

#### `document_load_failed`

| `x-brd-error`                 | Suggested action                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: %NET\_ERR% | Rendered navigation failed before a document was received. The message carries the underlying Chrome network error, for example `net::ERR_EMPTY_RESPONSE` or `net::ERR_SSL_VERSION_OR_CIPHER_MISMATCH`. Look up that name on [source.chromium.org](https://source.chromium.org) to identify the cause. When the cause is a property of the target, such as a TLS or cipher mismatch, every attempt returns the same result. |

#### `net_err_cert_date_invalid`

| `x-brd-error`                                                                                        | Suggested action                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: The SSL/TLS certificate presented by the server is not valid for the current date | The target's TLS certificate is expired, or not yet valid. Open the URL in a browser to confirm. Every attempt returns the same result, and an invalid certificate on the target's side cannot be bypassed. |

#### `net_err_cert_common_name_invalid`

| `x-brd-error`                                                                                                   | Suggested action                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: The SSL/TLS certificate presented by the server doesn't match the domain name being accessed | The target's TLS certificate does not cover the hostname being requested. Confirm the hostname, and check the certificate in a browser. |

#### `net_err_cert_authority_invalid`

| `x-brd-error`                                         | Suggested action                                                                                                                   |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: Invalid certificate on target site | The target's TLS certificate is signed by an untrusted or unknown certificate authority. Check the certificate chain in a browser. |

#### `net_err_closed`

| `x-brd-error`                                                    | Suggested action                                                                                                                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: Network connection was closed by other party. | The connection was closed by the other end before the response completed. If one URL returns this consistently, report it to support with the `req_id`. |

#### `rate_limit`

| `x-brd-error`                                                                                                  | Suggested action                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation failed: Failed to open proxy tunnel (reason = "Unexpected Status 429 (ext\_proxy\_connect\_error)") | A rate limit was reached on the Bright Data side while the connection was being opened. A rate limit returned by the target site itself is reported as `http_status`, not as this code. Reduce the request rate to this target, and contact support with the `req_id` if it continues. |

#### `proxy_error`

| `x-brd-error`                                                                                                                                                                                         | Suggested action                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Could not resolve host %HOST%. Check host name is correctly spelled and retry. If host is properly spelled or can only be resolved from a specific region contact brightdata support for DNS support. | The proxy layer could not complete the fetch, most often because the host did not resolve. Check the hostname spelling. A host that does not resolve returns the same error on every attempt, so retrying does not help despite what the message says. If the host resolves only from a specific region, contact support. |

#### `no_peers`

| `x-brd-error`                    | Suggested action                                                                                                                                                                                                                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unexpected Status 502 (no\_peer) | No peer was available for the request. This is returned for every request that targets a country with no available peers, including valid ISO codes for countries where Bright Data has none. Change or remove the `country` value: the same request succeeds once a country with available peers is used. |

### HTTP Error 503

Service unavailable. A browser check failed or was not completed. A 503 served by the target site itself is delivered as-is, with no `x-brd-error` header.
