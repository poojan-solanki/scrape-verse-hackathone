# Select a specific IP

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/select_a_specific_ip](https://docs.brightdata.com/api-reference/proxy/select_a_specific_ip)
> **Category**: `proxy-networks`

---

Configure the Bright Data Proxy REST API to select a specific IP on port 44445, with reference for parameters and response fields.

Option available only for zones with multiple IPs allocated. To target a specific IP allocated to your zone, use -ip-ip\_address request parameter.

```sh Shell theme={null}
curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-ip-1.2.3.4:<zone_password>
```
