# Select a specific gIP

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/select_a_specific_gip](https://docs.brightdata.com/api-reference/proxy/select_a_specific_gip)
> **Category**: `proxy-networks`

---

Configure the Bright Data Proxy REST API to select a specific gIP on port 44445, with reference for parameters and response fields.

Option available only for Residential or Mobile zones with multiple IPs allocated. To target a specific `gIP` allocated to your zone, use `-gip-gip_name` request parameter.

```sh theme={null}
curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-gip-us_7922_fl_hollywood_0:<zone_password>
```
