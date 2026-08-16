# Send requests directly from super proxy

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/send_requests_directly_from_super_proxy](https://docs.brightdata.com/api-reference/proxy/send_requests_directly_from_super_proxy)
> **Category**: `proxy-networks`

---

Configure the Bright Data Proxy REST API to send requests directly from Super Proxy on port 44445, with reference for parameters and response fields.

You can choose to perform the request from the super proxy directly instead of the IP of the peer. In that case, the IP of the request will be the one of the Super Proxy by adding `-direct` to your request authorization string.

```sh Shell theme={null}
curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-direct:<zone_password>
```
