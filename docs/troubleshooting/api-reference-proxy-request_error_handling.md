# Request error handling

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/request_error_handling](https://docs.brightdata.com/api-reference/proxy/request_error_handling)
> **Category**: `troubleshooting`

---

Configure request error handling on the Bright Data Proxy REST API (port 44445) to control request behavior, with reference for parameters and fields.

| value      | description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| `pass_dyn` | if a request can't pass via proxy peer, automatically pass it via the Super Proxy |
| `block`    | if a request can't pass via proxy peer, block it and don't send via Super Proxy   |

<CodeGroup>
  ```sh pass_dyn theme={null}
  curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-route_err-pass_dyn:<zone_password>
  ```

  ```sh block theme={null}
  curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-route_err-block:<zone_password>
  ```
</CodeGroup>
