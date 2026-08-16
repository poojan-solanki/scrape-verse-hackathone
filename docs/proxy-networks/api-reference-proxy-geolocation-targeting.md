# Proxy geolocation targeting

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/geolocation-targeting](https://docs.brightdata.com/api-reference/proxy/geolocation-targeting)
> **Category**: `proxy-networks`

---

Target Bright Data proxy exits across 195 countries by Country, City, State, ASN or ZIP code by adding parameters to the proxy username for geo control.

## Country Targeting

You can target a specific country by adding a country code to your username, like `username-country-country_code`. Use only two-letter country codes in lowercase.

```sh Shell theme={null}
curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us:<zone_password>
```

### Default countries' selection

In all Bright Data shared pool proxies: Datacenter, ISP, Residential and Mobile share pools (also known as "Rotating proxies") we offer a default country selection during zone configuration. When a country(s) is selected, Bright Data will attempt to allocate a peer from the selected default countries. The allocation sequence is as follows:&#x20;

If there are default countries configured:&#x20;

1. Select a random country from the **default countries** list.&#x20;

2. Attempt to allocate a peer in that country

3. If peer found: route request to the peer&#x20;

4. If peer not found: fail the request and reply with error

In case there are **no default countries selected,** Bright Data will allocate a random proxy peer from the pool and route the request through it.&#x20;

### EU Countries targeting

Bright Data proxy networks as well as our Web Unlocker API allow random peer selection specifically from **EU-member countries** via the use of the `-country-eu` flag. When needing to target EU peers, this will improve success rates over targeting from just one EU country, while still keeping the peer within the EU.

## City Targeting

<Note> City targeting works best with Residential & Mobile proxies. City targeting for Datacenter and ISP proxies has been deprecated and is no longer available. </Note>

You can target a specific city within a country by adding a city name to the username, like `username-country-country_code-city-city_code`. The city\_codemust be in lowercase only and have no spaces, for example `-city-sanfrancisco`

```sh Shell theme={null}
curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us-city-sanfrancisco:<zone_password>
```

## State Targeting

<Note> Residential proxies only </Note>

You can target a specific region or subdivision by adding the parameter `-state-<state_code>` to your username string.

We utilize the **ISO 3166-2** standard for state targeting. While this includes standard 2-letter codes (e.g., US states), we also support **3-letter** and **numeric** codes as defined by the standard for other regions.

<Tip>
  Always verify the correct subdivision code using the [ISO 3166-2 standard](https://en.wikipedia.org/wiki/ISO_3166-2). Ensure the code is entered in **lowercase**.
</Tip>

<CodeGroup>
  ```sh Country: USA (2-letter) theme={null} theme={null}
  # Targeting New York (ny)
  curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us-state-ny:<zone_password> 

  ```

  ```sh Country: England (3-letter) theme={null} theme={null}
  # Targeting England (eng)
  curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-gb-state-eng:<zone_password>

  ```

  ```sh Country: Japan (Numeric) theme={null} theme={null}
  # Targeting Okinawa (47)
  curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-jp-state-47:<zone_password>

  ```
</CodeGroup>

## ASN Targeting

<Note> Residential proxies only </Note>

You can target a specific ASN from the [list of ASNs](http://bgp.potaroo.net/cidr/autnums.html). Choosing an ASN country is done as following: -asn-ASN\_NUMBER

```sh Shell theme={null}
curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-asn-56386:<zone_password>
```

## ZIP Code Targeting

<Note> Residential proxies only </Note>

You can target proxy peers by a ZIP code of a specific area. Here is an example of targeting an IP from Memphis, US and zip code 12345:

```sh Shell theme={null}
curl "https://example.com" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-city-memphis-zip-12345:<zone_password>
```
