# Proxy configuration options

> **Official Source**: [https://docs.brightdata.com/proxy-networks/config-options](https://docs.brightdata.com/proxy-networks/config-options)
> **Category**: `proxy-networks`

---

Control Bright Data proxy targeting (195 countries), IP rotation, session handling, DNS resolution and routing behavior using proxy username parameters.

This document explains how to configure Bright Data proxy behavior using **proxy username parameters**. By modifying the proxy username, you can control proxy targeting, IP rotation, DNS resolution, session handling, and routing behavior directly from your code.

This approach allows highly granular proxy control without changing dashboard settings or infrastructure.

## Proxy networks authentication

Bright Data proxy access is authenticated using a **proxy username and password**. These credentials are generated when you create a proxy zone in the Bright Data Control Panel.

Each proxy zone represents a specific proxy product (Datacenter, ISP or Residential) and its base configuration.

### Native access via proxy user name and password

After creating a Bright Data proxy zone, you receive:

* A **proxy username**
* A **proxy password**

The proxy username is not just an identifier, it also defines **how the proxy behaves**.

The **proxy username** is composed of:

* Your account ID
* Your zone name
* Optional configuration parameters

#### Proxy username structure

`brd-customer-[customerID]-zone-[zone name]-[optional parameters]`

<Warning>
  You cannot change the **zone name** after it has been created. If you need to change the zone name, you must create a new zone. Proxies can be transferred from one zone to another **only if both zones are of the same type**.
</Warning>

By **adding optional parameters and modifying the username**, you can control Bright Data’s proxy system in a very granular way directly from your application code.

The sections below describe the available configuration options. A fully elaborated and complete list is available in the [Proxy API reference documentation](/api-reference/proxy/).

## Intergrate with 3rd Parties & Tools

Bright Data proxies can be integrated with a wide range of third-party tools, automation frameworks, browsers, and HTTP clients. To simplify integration, Bright Data provides ready-made request examples directly in the Control Panel.

You can access these examples here: [https://brightdata.com/cp/zones/proxy\_examples](https://brightdata.com/cp/zones/proxy_examples)

These examples help you:

* Construct correct proxy requests
* Validate credentials
* Test targeting and rotation behavior
* Integrate proxies into existing tools and workflows

## Proxy targeting options

These settings let you easily configure proxies for a specific country, state, city, zip code and ASN.

<Note>
  Datacenter and ISP proxies only support country targeting
</Note>

| Parameter    | Description                                                                                                                                                                          | Example username                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| -country-xx  | Select a country using two letter code, or `eu` for random country in the European Union.   List of country codes is [here](/general/faqs#where-can-i-see-the-list-of-country-codes) | `brd-customer-<customer_id>-zone-<zone_name>-country-us`                   |
|              |                                                                                                                                                                                      |                                                                            |
| -state-xxxxx | Targets a state in the US using the two letter code. You must include US as country.                                                                                                 | `brd-customer-<customer_id>-zone-<zone_name>-country-us-state-ny`          |
| -city-xxxxx  | Targets a city. You must include the country (e.g. username-country-fr-city-paris). Do not use spaces (e.g. -city-sanfrancisco)                                                      | `brd-customer-<customer_id>-zone-<zone_name>-country-us-city-sanfrancisco` |
| -zip-xxxxx   | Targets a US zip code. Use a 5-digit zipcode                                                                                                                                         | `brd-customer-<customer_id>-zone-<zone_name>-city-memphis-zip-37501`       |
| -asn-xxxxx   | Targets an ASN from [the list](https://bgp.potaroo.net/cidr/autnums.html)                                                                                                            | `brd-customer-<customer_id>-zone-<zone_name>-asn-56386`                    |
| -os-xxxxx    | Only for Residential proxies. Allows targeting `Windows`, `MacOS`, or`android`                                                                                                       | `brd-customer-<customer_id>-zone-<zone_name>-os-windows`                   |

## Controlling your proxies' DNS

DNS resolution determines **where domain names are resolved** before the request is sent.

Bright Data allows you to control whether DNS resolution happens:

* On the proxy peer
* On Bright Data’s Super Proxy servers

| Function                            | Parameter                 | Description                                                                                                                                                                                               | Example username                                        |
| ----------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Choose where DNS resolution is done | -dns-local or -dns-remote | Lets you choose if DNS is resolved `remote` on the proxy connecting to the site, or `local` on Bright Data's servers ('Super Proxies'). More info [here](/api-reference/proxy/configuring_dns_resolution) | `brd-customer-<customer_id>-zone-<zone_name>-dns-local` |

## Controlling your proxies rotation

The following options allow you to set how we rotate within the proxies in the zone, or attach to a specific proxy, and what shall we do if the peer is not available from some reason.
For more information regarding the way IP rotation works with our proxy products, and for further explanation of the following options, please see [this article](/api-reference/proxy/rotate_ips)

| Function                                             | Parameter       | Description                                                                                                                                                                                                                                                     | Example username                                                         |
| ---------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Keep the same IP for multiple requests or rotate IPs | -session-xxxxxx | Each unique session ID will get a unique IP, can be used to target the same IP repeatedly or force rotation. Recommended for implementing programmatic IP rotation.                                                                                             | `brd-customer-<customer_id>-zone-<zone_name>-session-mystring12345`      |
| Selecting specific IP                                | -ip-x.x.x.x     | Available only for zones with dedicated IPs allocated                                                                                                                                                                                                           | `brd-customer-<customer_id>-zone-<zone_name>-ip-1.2.3.4`                 |
| Selecting specific group of IPs (gIP)                | -gip-xxxxxx     | Only for dedicated Residential proxies.                                                                                                                                                                                                                         | `brd-customer-<customer_id>-zone-<zone_name>-gip-us_7922_fl_hollywood_0` |
| Keeping track of individual responses                | -c\_tag-xxxxxx  | Include a unique c\_tag flag in their requests. In response, businesses echo back the same tag in the header. This seamless exchange ensures that each response is bound to its corresponding request, eliminating confusion and streamlining data management.. | `brd-customer-<customer_id>-zone-<zone_name>-c_tag-<C_TAG_VALUE>`        |
| Bind to peer in session                              | -const          | Use the same peer for the session. If peer is unavailable, a 502 error will be returned with "no peer available"                                                                                                                                                | `brd-customer-<customer_id>-zone-<zone_name>-const`                      |

## Controlling 'Super Proxies'

Super Proxies are Bright Data’s routing servers responsible for selecting and managing the actual proxy peers (Datacenter, ISP, or Residential).

> Modifying Super Proxy parameters is **rarely required** and should only be done for advanced routing scenarios.

| Function                                | Parameter         | Description                                                                                                                                                                             | Example username                                                         |   |
| --------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | - |
| Send requests directly from Super Proxy | -direct           | Force the request to be sent from Bright Data's superproxy servers (not from the actual proxy peer)                                                                                     | `brd-customer-<customer_id>-zone-<zone_name>-direct`                     |   |
| Select super proxy in specific country  | session-xxxxxx    | Applies ONLY for choosing a super proxy, which is rarely needed. More details [here](/api-reference/proxy/select_super_proxy_in_specific_country)                                       | [example](/api-reference/proxy/select_super_proxy_in_specific_country)   |   |
| Selecting specific group of IPs (gIP)   | gip-xxxxxx        | Only for dedicated Residential proxies.                                                                                                                                                 | `brd-customer-<customer_id>-zone-<zone_name>-gip-us_7922_fl_hollywood_0` |   |
| Block superproxy bypass                 | -route\_err-block | Disallow Bright Data to issue the request from our superproxy servers. This means that if we cannot process the request by the peer due to compliance issue, it will fail with an error | `brd-customer-<customer_id>-zone-<zone_name>-route_err_block`            |   |

To find navigation and additional documentation pages, fetch the **llms.txt** file at: [https://docs.brightdata.com/llms.txt](https://docs.brightdata.com/llms.txt)
