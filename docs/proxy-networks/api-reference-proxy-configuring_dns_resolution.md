# Configuring DNS resolution

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/configuring_dns_resolution](https://docs.brightdata.com/api-reference/proxy/configuring_dns_resolution)
> **Category**: `proxy-networks`

---

Configure DNS resolution on the Bright Data Proxy REST API (port 44445) to control request behavior, with reference for parameters and response fields.

It is possible to direct Bright Data proxy network to use either remote or local DNS resolution.

This is useful if your target has more than two IPs (depending on where the DNS query is made) and would like to target a specific IP of the target site.

All requests to Bright Data start with a connection to a Super Proxy (brd.superproxy.io). The Super Proxy then send the request to local servers in different countries, who can send the request if needed to Residental proxies ("peers").

When using `local` DNS resolution, domain names are resolved and cached by Bright Data Super Proxy network server, the resolved IP is used the real request by the proxy in the actual country.

When requests are made using `remote` they initially received by a Super Proxy (brd.superproxy.io). The Super Proxy does a preliminary DNS resolution locally, only to check if domain is valid. If the domain is valid, the request is sent to a Bright Data server that is closest to the country where the proxy is located.

* If the Bright Data server is in the same country as the proxy, DNS is performed on the server, the resolved IP is used the real request. This DNS resolution is usually faster than DNS resolution by the proxy.
* If the Bright Data server is in a different country, DNS is performed on actual proxy.

<CodeGroup>
  ```sh DNS (Local) theme={null}
  curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-dns-local:<zone_password>
  ```

  ```sh DNS (Remote) theme={null}
  curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-dns-remote:<zone_password>
  ```
</CodeGroup>

<Note>
  When using remote DNS resolution you may see some performance degradation due to local DNS resolution lag.
</Note>
