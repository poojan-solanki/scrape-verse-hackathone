# Proxy errors troubleshooting

> **Official Source**: [https://docs.brightdata.com/proxy-networks/errorCatalog](https://docs.brightdata.com/proxy-networks/errorCatalog)
> **Category**: `troubleshooting`

---

Explore the catalog of Bright Data HTTP errors (4xx and 5xx codes), including error codes, descriptions and actions to resolve common proxy issues.

This article provides information on how to identify proxy errors from other errors, how to analyze errors, troubleshoot and resolve issues with Bright Data proxy services.

## How can I get indication on Bright Data proxy services health status?

Bright Data publishes its products and services status in this page: [https://brightdata.com/network-status](https://brightdata.com/network-status) . In this page you can see if there are current issues or incidents in the products you use or our global availability. You can also register for email alerts which are sent upon changes in our availability of reporting on wide incidents.

## What to do if I see that there is current incident in the proxy network I am using?

First, you need to check if your operations are impacted. Two main indications are degredation in response time (slowness) or increased error rates. If one of those occur, reduce your processing rate and follow the next steps to identify the issue.

## How can I tell if the error I got is originates from a Bright Data proxy?

While using our proxies, you may encounter errors that do not originate from Bright Data. To identify the source of the error, check if the response headers include BrightData error fields listed below, we cover most errors by proxy layer in those codes.

If you are still not able to get to your target website, or receive a response `HTTP` status `200` without the data you are expecting, you were probably blocked. In this article: [Overcoming website blocking](/proxy-networks/website-blocking) we provide some best practices.

## How to resolve "Proxy Error" when testing Bright Data proxies thru another software?

Many software tools and utilities use Bright Data proxies, and have a function to "Test proxy" in them. When you hit "Test proxy" and get a generic "Proxy Error" message in that software, it can originate from various reasons.

### Common issues and resolutions

* Targeting a search engine like [google.com](http://google.com) or [bing.com](http://bing.com): Bright Data lmits search engine access via its proxy networks. To resolve go to your software settings and change the test website to be: [https://geo.brdtest.com/welcome.txt](https://geo.brdtest.com/welcome.txt)
* Using Bright Data residential network without installing a certificate: Bright Data does not allow using its Residential netowork without passing a KYC verification or installing a certificate. Read on different access modes [Residential Network Access Policy. ](/proxy-networks/residential/network-access)

## Bright Data Proxy Errors Troubleshooting

## Bright Data's proxy error format and standard now supports RFC9209

Starting October 2025, Bright Data supports two sets of headers to relay proxy error in response payload:

1. Propietary `x-brd-*` fields: `x-brd-err-code` and `x-brd-err-msg`
2. Standard RFC9209`Proxy-Status` response header supporting RFC9209 standard proxy error format.

The `Proxy-Status` header standard field will eventually replace the `x-brd-*` fields, during 2026.

## What is RFC9209?

RFC9209 is the standard on how to relay proxy errors in response headers over proxy. Bright Data is adopting this standard and applied it to all its error catalog. This will allow customers' code as well as 3rd party tools using proxy as infrastructure to refer to error from proxy interaction and resolve issues faster.

You can read more about it here: [The Proxy-Status HTTP Response Header](https://www.rfc-editor.org/rfc/rfc9209.html)

## How to implelement RFC9209?

### Example Proxy-Status HTTP header

```text theme={null}
Proxy-Status: brd.brighdata.io; 
received-status=400; 
error=destination_ip_unroutable; 
details="client-10060: Requested IP ##.##.##.## is not allocated to this zone. Select an IP that is allocated to this zone or skip the -ip parameter in proxy username."
```

### Implementation Instructions

1. Parse the response header: Ensure that your systems are configured to interpret the Proxy-Status header in HTTP responses.
2. Extract relevant fields:
   * `received-status`: Provides the HTTP status code received.
   * `error`: Describes the general error encountered.
   * `details`: Contains specific error codes and further information from our error catalog.
   * The first field in the details will be bright data error code (like: client\_10060) followed by ':' (colon) delimiter. 
   * You can browse directly to the error document using this prefix, keeping the error code exactly as shown, including the '\_' (underscore): `https://docs.brightdata.com/proxy-networks/errorCatalog#[Bright data error code]`. Example for client\_10060: [https://docs.brightdata.com/proxy-networks/errorCatalog#client\_10060](/proxy-networks/errorCatalog#client_10060)
3. Adapt your error handling processes according to these structured codes to improve debugging and ensure a seamless proxy operation.

## Bright Data HTTP proxy header fields

The following fields are returned upon and `HTTP` or `HTTPS` requests:

| Field            | Description                                                                                                                                                        | Examples                                                                                                                                                                                                                                  | REST API Field Name |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| `HTTP Error`     | The protocol error numbers                                                                                                                                         | `404` or `502`                                                                                                                                                                                                                            | `status_code`       |
| `x-brd-err-code` | Bright data module and error code number                                                                                                                           | `client_10001`                                                                                                                                                                                                                            | `error_code`        |
| `x-brd-error`    | Bright data main error message                                                                                                                                     | Authentication failed                                                                                                                                                                                                                     | `error`             |
| `x-brd-err-msg`  | Bright data elaborated message and actions                                                                                                                         | Authentication failed. Please check your credentials or review your [account status and billing settings](https://brightdata.com/cp/settings/billing).                                                                                    | `error_message`     |
| `Proxy-Status`   | RFC9209 compliant response header. It will include Bright Data proxy server, the HTTP status and details string which has a reference to Bright Data's error code. | `Proxy-Status: brd.superproxy.io; received-status=407; error="http_request_denied"; details="client_10000: Invalid authentication: check credentials and retry. Bright Data credentials include your account ID, zone name and password"` | Not supported       |

The headers are relayed as part of Bright Data proxy service and customers are not billed for their bandwidth overhead.

### Deprecating x-luminati-\* headers

Starting 1-May-2026 Bright Data proxy response will not include any x-luminati-\* headers.

#### HTTP Code 200 headers deprecating

| Header                | Current header   | Description                                             |
| :-------------------- | :--------------- | ------------------------------------------------------- |
| `x-luminati-ip`       | `x-brd-ip`       | IP address of the proxy peer used to relay your request |
| `x-luminati-timeline` | `x-brd-timeline` | Internal request processing timeline for debugging      |

#### HTTP Error Code headers deprecating

| **Header**         | **Current header** | **Description**         |
| :----------------- | :----------------- | :---------------------- |
| `X-Luminati-Error` | `x-brd-error`      | Short error description |

### Getting HTTP header fields

#### Testing from command line

To view and test your settings, or restoring an issue, you can run a `curl` command from your shell prompt and add the option flag `-v` or `i`. These flags will run curl in verbose mode and print out the header fields, including the custom error code and message.

```sh theme={null}
curl -v [rest of curl command options]
```

To see a more compact view with the header fields response only use the `-i` option for curl:

```sh theme={null}
curl -i [rest of curl command options]
```

Alternatively, you can use the `nc` command to get the fields printed to screen:

```sh theme={null}
echo "[tcp nc inputs]" | nc -C -v brd.superproxy.io 44445
```

<Note>
  `nc` inputs may include "empty" lines, those are essential for correct testing using `nc` command
</Note>

#### `curl` Command snippet

`curl` command snippet, with all required zone parameters is available in the **Overview** tab in Bright Data control panel for the zone you are working on.

#### Accessing via programming language

Bright Data HTTP header fields can be accessed thru your programming language, as any other HTTP header field.

#### Accessing via Bright Data's Proxy REST API

Bright data offers a REST API to access its proxy networks as well as the Web Unlocker API and our SERP for targeting search engines. The error field names are slightly different , yet the content is identical.

Example response:

```JSON theme={null}
"status_code": 407,
"status_message": "Proxy Authentication Required",
"error": "Proxy Authentication Required",
"error_message": "No proxy credentials provided. Please add credentials and try again.",
"error_code": "client_10010"
```

## Error Catalog

### HTTP Error 400

When Using the Data center/ISP or gIPs products with the `-ip-x.x.x.x` targeting flag, the error code `400` can appear in case the IPs under your zone has been refreshed, removed, or simply changed due to system updates

<Note>
  This error typically arises after your BrightData account has been recently suspended. An automatic suspension occurs if your account balance becomes negative. If the suspension extends beyond 24 hours, the static allocated IPs will be released from your account. Upon reactivation, the reallocated IPs may differ from the original ones, thus if the previously allocated IPs are still being targeted - this error is thrown.
</Note>

Whenever this error appears, you should go to your Bright Data Zones page, and view the updated list of IPs relevant to this zone.

#### `client_10060`

| `x-brd-error`                            | `x-brd-err-msg`                                                                                                                                      | RFC9209 Error Code          |
| :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| `ip_requested_not_allocated_by_customer` | Requested IP `##.##.##.##` is not allocated to this zone. Select an IP that is allocated to this zone or skip the `-ip` parameter in proxy username. | `destination_ip_unroutable` |

#### `client_10061`

| `x-brd-error`  | `x-brd-err-msg`                                                                                                                                                                                                                                 | RFC9209 Error Code |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| Peer not found | No proxy found in selected default countries: `%Countries_list%`. Please revise your default country selection or use `-country` flag to another country and override default settings. [Read more](/api-reference/proxy/geolocation-targeting) | ,                  |

#### `client_10062`

| `x-brd-error`  | `x-brd-err-msg`                                                                                                                                                                                                                                                                                                 | RFC9209 Error Code |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| Peer not found | Your \`\[proxy type] \[DC \| ISP]\` zone does not have IPs in selected countries. Either IPs location has changed, or zone is not configured with proxies in selected countries. Check zone configuration and try again with the relevant country code. [Read more](/api-reference/proxy/geolocation-targeting) | ,                  |

#### `client_10063`

| `x-brd-error` | `x-brd-err-msg`                                                                                                             | RFC9209 Error Code |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| Bad IP format | The IP address provided is either empty or does not comply with IPv6/IPv4 protocol. Please check your inputs and try again. | ,                  |

***

### HTTP Error 401

These are the `x-brd-err-code` values for HTTP error 401:

#### `client_10050`

| `x-brd-error`                     | `x-brd-err-msg`                                                                                                                                                        |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth failed: IP denylisted `[IP]` | Auth Failed IP denylisted: `[IP]`. [Check FAQ: how to denylist/allowlist IPs and domains?](/proxy-networks/faqs#how-to-allowlist-denylist-ips-and-domains) to resolve. |

***

### HTTP Error 402

These are the `x-brd-err-code` values for HTTP error 402:

<Note>
  The 402 errors below apply to Residential zones created on or before July 7, 2026 and remain valid for those existing zones. They do not apply to Residential zones created after July 7, 2026, which require KYC. See the [Residential network access policy](/proxy-networks/residential/network-access).
</Note>

#### `policy_20130`

| `x-brd-error`                     | `x-brd-err-msg`                                                                                                                                                                                                                                                                                                    |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Residential Failed `bad_endpoint` | Residential Failed (`bad_endpoint`), Requested site is not available for immediate residential (no KYC) access mode because `%HTTP_METHOD%` requests are not allowed. To get full residential access for targeting this site, fill in the KYC form: [https://brightdata.com/cp/kyc](https://brightdata.com/cp/kyc) |

#### `policy_20140`

| `x-brd-error`                     | `x-brd-err-msg`                                                                                                                                                                                                                                                                                             |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Residential Failed `bad_endpoint` | Requested site is not available in Immediate Access mode for Bright Data residential network due to violation of target's `robots.txt`. To gain full access follow the instructions in: [https://docs.brightdata.com/proxy-networks/residential/network-access](/proxy-networks/residential/network-access) |

***

### HTTP Error 403

HTTP 403 response code means you are forbidden from accessing a **valid** URL. The server processed the request, but it can't fulfill the request either due to the way the request was sent by the client or due to Bright Data policy, blocking target access.

These are the `x-brd-err-code` values for HTTP error 403:

#### `kyc_required`

A request through a Residential zone created after July 7, 2026 from a company-email account that has not completed KYC returns HTTP 403. Residential access is available only to KYC-verified companies. Residential zones created on or before July 7, 2026 are not affected.

**How to fix:** Complete [KYC verification](https://brightdata.com/cp/kyc) so the Bright Data compliance team can approve Residential access. Until then, use [ISP proxies](/proxy-networks/isp/introduction) or [Datacenter proxies](/proxy-networks/data-center/introduction), which need no KYC. See the [Residential network access policy](/proxy-networks/residential/network-access).

The response body carries the stable `code` value plus the alternatives to create instead:

```json theme={null}
{
  "error": {
    "code": "kyc_required",
    "message": "Residential proxies are available to verified companies only, after KYC review, in accordance with Bright Data's compliance policy.",
    "action": "Start verification at brightdata.com/cp/kyc. Applications are reviewed by our compliance team.",
    "alternatives": [
      { "product": "ISP proxy", "plan": { "type": "static", "pool_ip_type": "static_res", "ips_type": "shared" } },
      { "product": "Web Unlocker API", "plan": { "type": "unblocker" } }
    ],
    "docs": "https://docs.brightdata.com/compliance/kyc"
  }
}
```

#### `business_account_required`

A request through a Residential zone created after July 7, 2026 from a personal-email account (not a verified company) returns HTTP 403. Residential access is available to verified companies only. Residential zones created on or before July 7, 2026 are not affected.

**How to fix:** Personal-email accounts are not eligible for Residential and are not offered KYC. Use a corporate email and contact the Bright Data team to establish business eligibility. Until then, use [ISP proxies](/proxy-networks/isp/introduction) or [Datacenter proxies](/proxy-networks/data-center/introduction), which need no KYC. See the [Residential network access policy](/proxy-networks/residential/network-access).

```json theme={null}
{
  "error": {
    "code": "business_account_required",
    "message": "Residential proxies are available to verified companies only. Eligibility requires a corporate email and full verification with the Bright Data team.",
    "action": "Contact the Bright Data team with a corporate email to determine business eligibility for Residential access.",
    "alternatives": [
      { "product": "ISP proxy", "plan": { "type": "static", "pool_ip_type": "static_res", "ips_type": "shared" } },
      { "product": "Web Unlocker API", "plan": { "type": "unblocker" } }
    ],
    "docs": "https://docs.brightdata.com/compliance/kyc"
  }
}
```

#### `client_10070`

| `x-brd-error` | `x-brd-err-msg`                                                                        |
| :------------ | :------------------------------------------------------------------------------------- |
| No Protocol   | Protocol was missing from original request. Please add either HTTP or HTTPS and retry. |

#### `client_10080`

| `x-brd-error`       | `x-brd-err-msg`                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------- |
| No Destination Host | No destination host. Destination host is missing or incorrect. Check your request parameters and try again. |

#### `client_10090`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                                      |
| :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You are trying to use Browser API zone as regular proxy | You are trying to use Browser API zone as regular proxy. A browser should be used to access this zone. See [Browser API](/scraping-automation/scraping-browser/introduction) for information on how to access your Browser API zone. |

#### `client_10130`

| `x-brd-error`                                                                 | `x-brd-err-msg`                                                                                                              |
| :---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: this super proxy is allowed only for China domains via China peers | Forbidden: this super proxy is allowed to be used only for China domains via China peers. Otherwise use `brd.superproxy.io`. |

#### `client_10250`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                                                   |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked since this host is not an allowed target in your zone's allowlist security setting. Please add this host to your allowlist or delete all content from the allowlist to allow all targets. |

#### `client_10260`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                                                            |
| :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked since this host is an explicitly blocked target in your zone's denylist security setting. Please remove this host from your denylist or delete all content from the denylist to allow all targets. |

#### `policy_20010`

| `x-brd-error` | `x-brd-err-msg`                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bad protocol  | The protocol you are using to access our proxy is not supported. Bright Data supports HTTP, HTTPS & SOCKS5 upon special approval. Please fix your protocol and try again. |

#### `policy_20020`

| `x-brd-error` | `x-brd-err-msg`                                                                                                                                                                               |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bad port      | Bad port used. See supported ports: [https://docs.brightdata.com/proxy-networks/faqs#how-to-see-supported-ports-and-protocols](/proxy-networks/faqs#how-to-see-supported-ports-and-protocols) |

#### `policy_20021`

| `x-brd-error`                                                       | `x-brd-err-msg`                                                                                                                                                      |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: Target is blocked by Bright Data for superproxy requests | Request was rerouted through a superproxy due to compliance policy, but was then blocked because the destination port is forbidden for requests from the superproxy. |

#### `policy_20030`

| `x-brd-error`             | `x-brd-err-msg`                                                                                                                                                                                                                               |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: target blocked | Forbidden: You tried to target `www.somehost.com` but got blocked. It can be related to your denylist or allowlist settings or the target site is not allowed by Bright Data policy. [Read more](/proxy-networks/faqs#what-is-error-code-403) |

#### `policy_20031`

| `x-brd-error`                         | `x-brd-err-msg`                                                                                                                                                                                                                                                 |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: Target `%HOST%` is blocked | Forbidden: target `%HOST%` is blocked by Bright Data. Target host provides web service or information of Bright Data and our proxies cannot be used to target it. For further assistance please contact [support@brightdata.com](mailto:support@brightdata.com) |

#### `policy_20032`

| `x-brd-error`                         | `x-brd-err-msg`                                                                                                                                                                                                                                                 |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: Target `%HOST%` is blocked | Forbidden: target `%HOST%` is blocked by Bright Data. Target host provides web service or information of Bright Data and our proxies cannot be used to target it. For further assistance please contact [support@brightdata.com](mailto:support@brightdata.com) |

#### `policy_20040`

| `x-brd-error`  | `x-brd-err-msg`                                                                                                                                                                                                                                                                              |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden host | Destination host is blocked either by Bright Data in accordance with our compliance policy or by your account rules' configuration. Please check if this domain is allowed for targeting by this zone in zone settings: [https://brightdata.com/cp/zones/](https://brightdata.com/cp/zones/) |

#### `policy_20050`

| `x-brd-error`                                                                          | `x-brd-err-msg`                                                                                                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Forbidden: target site requires special permission. Contact Bright Data for assistance | Forbidden: target site requires special permission. You are trying to access a target site which is not permitted by our compliance policy. You may need to undergo a KYC process: [https://brightdata.com/cp/kyc](https://brightdata.com/cp/kyc). If you have already completed KYC approval, please contact your account manager for further details. |

#### `policy_20051`

| `x-brd-error`                                                                          | `x-brd-err-msg`                                                                                                                                                                                                                                                                                     |
| :------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: target site requires special permission. Contact Bright Data for assistance | Forbidden: target site is a government site and requires special permissions to access. You may need to undergo a KYC process: [https://brightdata.com/cp/kyc](https://brightdata.com/cp/kyc). If you have already completed KYC approval, please contact your account manager for further details. |

#### `policy_20052`

| `x-brd-error`                                                                                  | `x-brd-err-msg`                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: target site not accessible via selected network. Contact Bright Data for assistance | Forbidden: Access to this site is restricted on the selected network type due to compliance policies. Please try switching to a different network type. To gain access on the same network you may need to undergo a KYC process: [https://brightdata.com/cp/kyc](https://brightdata.com/cp/kyc). If you have already completed the KYC approval, please contact your account manager for further details. |

#### `policy_20080`

| `x-brd-error`                                                 | `x-brd-err-msg`                                                                                                                                                               |
| :------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: request needs to be made using residential network | Forbidden: You are accessing a domain which is not permitted to access by Bright Data Datacenter or ISP networks. Please retry your request using a Residential network zone. |

#### `policy_20090`

| `x-brd-error`                                                           | `x-brd-err-msg`                                                                                                                                                                                                               |
| :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: requests to this domain are blocked using the proxy networks | Forbidden: requests to this domain are blocked using the Datacenter, ISP and Residential proxy networks. Please get access via an Web Unlocker API zone or IDE tools, or contact your account manager for further assistance. |

#### `policy_20091`

| `x-brd-error`                                                        | `x-brd-err-msg`                                                                                                                              |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: Target `$host` is blocked by Bright Data on IPv6 protocol | Forbidden: Target `$host` is blocked by Bright Data on IPv6 protocol. Please try IPv4 proxies or our Web Unlocker API to access this target. |

#### `policy_20110`

| `x-brd-error`         | `x-brd-err-msg`                                                                                                                                                                                                                                                                              |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden SERP domain | Destination host is blocked either by Bright Data in accordance with our compliance policy or by your account rules' configuration. Please check if this domain is allowed for targeting by this zone in zone settings: [https://brightdata.com/cp/zones/](https://brightdata.com/cp/zones/) |

#### `policy_20230`

| `x-brd-error`                                      | `x-brd-err-msg`                                                                           |
| :------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Country `%COUNTRY%` is not permitted for targeting | Country `%COUNTRY%` is not permitted for targeting, please modify to a different country. |

#### `policy_20240`

| `x-brd-error`                     | `x-brd-err-msg`                                                                                  |
| :-------------------------------- | :----------------------------------------------------------------------------------------------- |
| Proxy port `%PORT%` is restricted | Proxy port `%PORT%` is restricted. Contact [Bright Data support](mailto:support@brightdata.com). |

#### `policy_20250`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked by Bright Data policy settings. Either this website is forbidden by Bright Data policy or your account doesn't have the right permission to access it. |

#### `policy_20251`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked by Bright Data policy settings. Either this website is forbidden by Bright Data policy or your account doesn't have the right permission to access it. |

#### `policy_20260`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked by Bright Data policy settings. Either this website is forbidden by Bright Data policy or your account doesn't have the right permission to access it. |

#### `policy_20261`

| `x-brd-error`                                           | `x-brd-err-msg`                                                                                                                                                                                                |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forbidden: You tried to target `%HOST%` but got blocked | Forbidden: You tried to target `%HOST%` but got blocked by Bright Data policy settings. Either this website is forbidden by Bright Data policy or your account doesn't have the right permission to access it. |

#### `policy_20000`

| `x-brd-error`                                                                   | `x-brd-err-msg`                                                                                                                                                                                                       |
| :------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access denied: `<URL>` is classified as `<category>` and blocked by Bright Data | Access denied: `%URL%` is classified as `%CATEGORY%` and blocked by Bright Data as it might breach Bright Data usage policy. [Read more](/proxy-networks/residential/network-access#residential-proxy-network-policy) |

***

### HTTP Error 407

If you get HTTP error 407, this implies there is an error in authentication. This can be due to incorrect credentials or due to your account being suspended.

#### `client_10000`

| `x-brd-error`         | `x-brd-err-msg`                                                                                                               |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Authentication failed | Invalid authentication: check credentials and retry. Bright Data credentials include your account ID, zone name and password. |

#### `client_10001`

| `x-brd-error` | `x-brd-err-msg`                                      |
| :------------ | :--------------------------------------------------- |
| Invalid Auth  | Invalid authentication: check credentials and retry. |

#### `client_10002`

| `x-brd-error`               | `x-brd-err-msg`                                                                                                                                                                                                                                                                                                  |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth failed: Zone not found | Authentication failed: zone not found. Zone name used is either misspelled, or zone is disabled or deleted. Check your inputs, and validate zone is "Active" in Bright Data control panel, or use our API to get current zone status: [Get Active Zones](/api-reference/account-management-api/Get_active_Zones) |

#### `client_10010`

| `x-brd-error`                 | `x-brd-err-msg`                                                      |
| :---------------------------- | :------------------------------------------------------------------- |
| Proxy Authentication Required | No proxy credentials provided. Please add credentials and try again. |

#### `client_10020`

| `x-brd-error`                                                                                     | `x-brd-err-msg`                                                                                    |
| :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| Account is suspended. [Login](https://brightdata.com/cp/setting/billing) to activate your account | Account is suspended. [Login](https://brightdata.com/cp/setting/billing) to activate your account. |

#### `client_10030`

| `x-brd-error`         | `x-brd-err-msg`                                                                                      |
| :-------------------- | :--------------------------------------------------------------------------------------------------- |
| Authentication failed | You are not allowed to access our API via this IP. Please verify your settings or allowlist this IP. |

#### `client_10040`

| `x-brd-error`                                                                                                       | `x-brd-err-msg`                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| KYC Required. Please visit [http://brightdata.com/cp/kyc](http://brightdata.com/cp/kyc) and ensure you are verified | KYC Required. Please visit [http://brightdata.com/cp/kyc](http://brightdata.com/cp/kyc) and ensure you are verified. |

#### `policy_20120`

| `x-brd-error`                                                            | `x-brd-err-msg`                                                                     |
| :----------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| IP parameter `<IP>` is incorrect, use correct format in the IP parameter | IP parameter `<IP>` is incorrect, use `x-brd-ip` header format in the IP parameter. |

***

### HTTP Error 408

If you get HTTP error 408, this implies there is a timeout error in reaching your destination website. This can be due to incorrect target website, networking lags or blocks.

#### `peer_30040`

| `x-brd-error`           | `x-brd-err-msg`                                 |
| :---------------------- | :---------------------------------------------- |
| Peer connection timeout | Peer did not connect to desitnation due timeout |

***

### HTTP Error 429

<Note>
  If you are using an unfunded account, you may be hitting the default rate limit of 1,000 requests per minute. You can verify your currently applied limit in the Control Panel, under the zone's Overview tab > Access details. Adding funds to your account will remove this default restriction.
</Note>

These are the `x-brd-err-code` values for HTTP error 429:

#### `client_10110`

| `x-brd-error`                            | `x-brd-err-msg`                                                                                                                                                                                                                            |
| :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account exceeded the allowed rate limits | Your account exceeded the allowed rate limits. Reduce requests rate and try again or complete the [verification process](https://brightdata.com/cp/account_verification) to relieve rate limits. You will not be charged for this request. |

#### `policy_20220`

| `x-brd-error`                        | `x-brd-err-msg`                                                                                                                                                                                                                                                     |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requests rate to `%URL%` is too high | Rate limit for domain `%DOMAIN%` has been reached. Bright Data's health monitor is throttling down these requests to prevent overloading of the target website. Reduce requests rate and try again or contact [brightdata.com](http://brightdata.com/) for support. |

#### `policy_20221`

| `x-brd-error`                                         | `x-brd-err-msg`                                                                                                                                                  |
| :---------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requests to IP geolocation databases are rate-limited | Requests to IP geolocation database providers are rate-limited. Use Bright Data's geolocation endpoint with no rate limits: `https://geo.brdtest.com/mygeo.json` |

#### `policy_20222`

| `x-brd-error`                    | `x-brd-err-msg`                                                                                                                                                                                                                                                                                  |
| :------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requests rate per IP is too high | Rate limit per IP `%IP%` on zone `%ZONE%` has been reached. Requests are throttled down to avoid overload. Either increase the number of IPs or reduce rate, and review your rotation logic or your response size to assure even distribution of requests and bandwidth across IPs of this zone. |

#### `policy_20223`

Returned when Bright Data applies an adaptive rate limit for a specific domain due to degraded success rates. The limit is adjusted dynamically, so retrying failed requests is expected and helps the limit lift faster as success rates recover.

| `x-brd-error`                           | `x-brd-err-msg`                                                                                                                                                                                                                                               |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requests to `%DOMAIN%` are rate-limited | Requests to `%DOMAIN%` are rate-limited. Bright Data has detected a degraded success rate for this domain and is working to resolve it. We recommend to retry failed requests while we gradually remove the limit, or reduce request rate and try again later |

***

### HTTP Error 499

These are the `x-brd-err-code` values for HTTP error 499:

#### `client_10140`

| `x-brd-error`     | `x-brd-err-msg`                                                                                                                                                                                                                                                                                    |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client disconnect | The client closed the connection to the proxy before the response was fully returned. This is usually caused by client-side timeouts, cancelled requests, or local network interruptions. Review your client timeout configuration and ensure the client waits long enough for the proxy response. |

***

### HTTP Error 502

These are the `x-brd-err-code` values for HTTP error 502:

#### `client_10120`

| `x-brd-error`      | `x-brd-err-msg`                                                                                                                                                                                                                                |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block direct route | Request reroute blocked. You chose the option not to reroute requests through our superproxy on failure, so the reroute was blocked. To see more about this setting see: [Request Error Handling](/api-reference/proxy/request_error_handling) |

#### `client_10100`

| `x-brd-error`                | `x-brd-err-msg`                                                                                                                         |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Zone has reached usage limit | Zone has reached usage limit. Go to [https://brightdata.com/cp/zones](https://brightdata.com/cp/zones) to remove/modify the limitation. |

#### `peer_30030`

| `x-brd-error`                                                 | `x-brd-err-msg`                                                                                                                                                                                                                   |
| :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proxy Error: We do not have proxies in the city you requested | Proxy Error: We do not have proxies in the city you requested. Please check the spelling or try again later. Check [Target a specific city](/proxy-networks/faqs#how-to-target-a-specific-city) for proper use of city targeting. |

#### `policy_20070`

| `x-brd-error`                        | `x-brd-err-msg`                                                                                 |
| :----------------------------------- | :---------------------------------------------------------------------------------------------- |
| Host is blocked in requested country | Host you are trying to access is blocked in requested country. Please change country and retry. |

#### `target_40001`

| `x-brd-error`                   | `x-brd-err-msg`                                                                                                                                                                                           |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Could not resolve host `%HOST%` | Could not resolve host `%HOST%`. Check host name is correctly spelled and retry. If host is properly spelled or can only be resolved from a specific region, contact Bright Data support for DNS support. |

#### `target_40011`

| `x-brd-error`                                    | `x-brd-err-msg`                                                                                                                                                             |
| :----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No IPv6 address (AAAA record) found for `%HOST%` | Attempting to resolve `%HOST%` to IPv6 failed. This is probably because the host you are targeting does not publish an IPv6 IP address. Retry the request on an IPv4 proxy. |

#### `target_40020`

| `x-brd-error`                    | `x-brd-err-msg`                                                                                                                                                                           |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destination host connect timeout | Connection to `host:port` timed out, the target server did not respond, which may indicate it is down, overloaded, or blocking connections; please verify the URL and port and try again. |

#### `target_40021`

| `x-brd-error`                    | `x-brd-err-msg`                                                                                                                                                                           |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destination host connect timeout | Connection to `host:port` timed out, the target server did not respond, which may indicate it is down, overloaded, or blocking connections; please verify the URL and port and try again. |

#### `target_40021`

| `x-brd-error`                    | `x-brd-err-msg`                                                                                                                                                                           |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destination host connect timeout | Connection to `host:port` timed out, the target server did not respond, which may indicate it is down, overloaded, or blocking connections; please verify the URL and port and try again. |

***
