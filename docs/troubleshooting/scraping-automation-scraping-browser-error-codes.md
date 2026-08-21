# Browser API error codes

> **Official Source**: [https://docs.brightdata.com/scraping-automation/scraping-browser/error-codes](https://docs.brightdata.com/scraping-automation/scraping-browser/error-codes)
> **Category**: `troubleshooting`

---

Reference for Bright Data Browser API error codes, grouped into four categories, with each code's meaning and a suggested action to resolve it.

This reference lists Bright Data Browser API error codes, grouped into four categories, with each code's meaning and a suggested action.

When a request fails, Browser API returns a specific error code. Find the code in the tables below and follow the "Suggested Action" column.

## Access and permissions

These errors indicate an access or permissions issue. The request was stopped either because your Browser API zone requires a configuration change, or because the target is restricted by Bright Data's compliance safeguards.

| <div>Error Code</div> | Meaning                                                         | Suggested Action                                                                                                                                                                |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brob`                | Target is blocked by robots.txt.                                | Robots.txt is a limitation from the target site defining what bots can and can't access. To remove it, complete [KYC verification](/proxy-networks/residential/network-access). |
| `brul`                | Target restricted by Bright Data.                               | If accessing blocked resources is required, get permission from compliance at [compliance@brightdata.com](mailto:compliance@brightdata.com).                                    |
| `custom_headers`      | Customer does not have permission to change headers or cookies. | Enable **Custom headers and cookies** in your zone configurations in your Browser API zone.                                                                                     |
| `wrong_customer_name` | Invalid username.                                               | Verify your username is correct in the Bright Data control panel.                                                                                                               |
| `zone_not_found`      | The specified zone does not exist or is not active.             | Confirm that you're using the correct and active "Browser API" zone from the Bright Data control panel.                                                                         |
| `wrong_password`      | Incorrect zone password.                                        | Verify your zone password is correct in the Bright Data control panel.                                                                                                          |
| `missing_credentials` | Authentication credentials missing.                             | Add valid Browser API credentials to your script.                                                                                                                               |

## Proxy errors

These errors indicate a routing or connection issue between the Browser API and the underlying proxy network. They typically happen when the proxy network struggles to establish or maintain a stable connection.

| <div>Error Code</div>    | Meaning                                                                                                                | Suggested Action                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `no_peers`               | Failed to establish connection with peer.                                                                              | Retry after some time, or remove peer restrictions (country, session, location). |
| `proxy_no_peer`          | Failed to establish connection with peer.                                                                              | Retry after some time, or remove peer restrictions (country, session, location). |
| `reserve_no_result`      | No peers available in the targeted country.                                                                            | Try removing or changing country targeting.                                      |
| `geo_no_navigation`      | Cannot resolve geolocation before navigating (occurs when calling `Proxy.getGeolocation` before navigating to a page). | Navigate to a page first, then retry.                                            |
| `proxy_cooling_peers`    | No peers available because the assigned peer is in a cooling period.                                                   | Retry after some time, or remove peer restrictions (country, session, location). |
| `proxy_no_peers_cooling` | No peers available because the assigned peer is in a cooling period.                                                   | Retry after some time, or remove peer restrictions (country, session, location). |
| `proxy_timeout`          | Proxy connection timeout.                                                                                              | Retry after some time.                                                           |

### `proxy_error` messages

The `proxy_error` code is part of the Proxy errors above, but it covers several proxy-side conditions. The exact cause is described in the accompanying message:

| Message                                                   | Suggested Action                  |
| --------------------------------------------------------- | --------------------------------- |
| Country is not permitted for targeting.                   | Try a different country.          |
| Proxy unable to resolve the targeted site host.           | Check that the site is available. |
| Proxy connection timeout.                                 | Retry after some time.            |
| Peer failed to establish a connection to the target site. | Retry after some time.            |

## Session limits

Browser API sessions are time-boxed to ensure optimal performance. These errors occur when a session runs too long, sits idle, or navigates multiple domains. To avoid them, break your tasks into shorter sessions and close connections promptly.

| <div>Error Code</div>        | Meaning                                                            | Suggested Action                                                                     |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `session_timeout`            | Session reached the 60-minute limit.                               | Reduce session time; split into multiple sessions.                                   |
| `network_inactivity_timeout` | Session terminated after 5 minutes of no network activity.         | Disconnect from the browser after scraping (for WebDriver, also delete the session). |
| `client_timeout`             | Connection from customer to browser not established in time (30s). | Check your internet connection and retry.                                            |
| `navigate_domains_limit`     | Session limited to one domain.                                     | Open a new session per domain.                                                       |

## Browser and target site

These errors occur in the browser layer due to invalid script commands, timeouts or unexpected crashes. To resolve them, debug your automation code or retry the session.

| <div>Error Code</div>  | Meaning                                                                                                                                           | Suggested Action                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cdp_cmd_timeout`      | A command to the browser timed out.                                                                                                               | Retry the command.                                                                       |
| `browser_disconnected` | Browser disconnected due to a temporary internal error.                                                                                           | Retry, or establish a new session.                                                       |
| `no_free_workers`      | No browsers were available to handle the request. This occurs before a browser connection is established and usually indicates a temporary issue. | Retry after some time. If it persists, contact [support](mailto:support@brightdata.com). |
| `worker_disconnect`    | The browser worker crashed or there was an internal infrastructure failure.                                                                       | Retry, or establish a new session.                                                       |
| `job_killed`           | The browser session was closed due to an infrastructure failure.                                                                                  | Retry, or establish a new session.                                                       |
| `page_navigated_error` | An error occurred during navigation, usually related to an internal issue.                                                                        | Retry, or establish a new session.                                                       |

### `cdp_error` messages

The `cdp_error` code is part of the Browser and target site errors above, but it covers several browser-side conditions. The exact cause is described in the accompanying message:

| Message                                                                                    | Suggested Action                                                                                   |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| The browser target or session was closed and can't accept commands.                        | Fix script errors in your code (often caused by a missing `await` statement).                      |
| A CDP command was misused (for example, invalid arguments passed to `Fetch.dropRequests`). | Verify the command name and its parameters are valid and correctly formatted for that CDP command. |

## Chromium network errors (net::ERR\_\*)

When the browser can't reach or load a target site, it returns a standard Chrome network error prefixed with `net::ERR_`. These are the same errors you'd see in a regular Chrome browser, and they typically point to the state of the target site. For example, the site is temporarily down, unreachable or has an invalid TLS certificate.

Error response format:

```text theme={null}
Error: net::ERR_CONNECTION_CLOSED at https://example.com
```

Because these are native Chrome errors, there are many possible codes. To understand a specific error and its cause, search the exact error name on [source.chromium.org](https://source.chromium.org).

<Note>
  **Need more help?** For further assistance, contact [support@brightdata.com](mailto:support@brightdata.com).
</Note>
