# Select super proxy by country

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/select_super_proxy_in_specific_country](https://docs.brightdata.com/api-reference/proxy/select_super_proxy_in_specific_country)
> **Category**: `proxy-networks`

---

Configure a Bright Data super proxy in a specific country using the -country flag in shared zones or via dedicated zone settings. Connects via port 44445.

Important note: This article is relevant ONLY for choosing a 'super proxy', which is rarely needed. In order to select a specific standard proxy (for example, Residential Proxy, Datacenter proxy or ISP proxy)

* In **Shared proxy zones**, you can add the '-country' flag (and also '-city') to your proxy username like this: username-country-country\_code-city-city\_code. Country codes are standard 2-character codes. The city\_code must be in lowercase only and have no spaces, for example -city-sanfrancisco.

* In **Dedicated proxy zones**, you can select the countries and cities in your zone configuration page by following these steps:

  1. Add a new proxy zone and set the IP type to 'Dedicated'

  2. Choose the domains you would like to target with this zone.

  3. Select the number of dedicated proxies you want to allocate to your zone

  4. Select the countries you want to target

  5. Optional - After selecting the countries you want, click 'Add city' next to each country you want to target in city resolution

  6. Add the chosen cities for each country and save the zone.

  7. Your new Dedicated proxy zone will allocate the number of grproxies you requested evenly between the countries and cities you selected.

If you actualy require our load balancer to provide a super proxy in a specific country:

<Note>
  If no specific server country is selected, Bright Data will automatically choose the optimal load-balancing server for speed. If speed is your primary concern, use this feature with caution, as it may negatively impact performance over time.
</Note>

Choosing the super proxy country can be done like this: `servercountry-{country}`.brd.superproxy.io. E.g. `servercountry-gb.brd.superproxy.io`

```sh Shell theme={null}
curl "https://example.com" --proxy servercountry-gb.brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
```
