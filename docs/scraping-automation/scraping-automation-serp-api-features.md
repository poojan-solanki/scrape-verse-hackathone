# Google SERP features

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/features](https://docs.brightdata.com/scraping-automation/serp-api/features)
> **Category**: `scraping-automation`

---

Configure Bright Data SERP API (31 languages) features including response format, parsing options and header overrides for Google search results.

## Parsing and response format configuration

You can control and override the default API response format setup defined during API creation in Bright Data control panel.

We allow either override by URL parameter `brd_json` or by relaying a header `x-unblock-data-format`

| Parameter               | Type        | Required | Default | Accepted values                  |
| :---------------------- | :---------- | :------- | :------ | :------------------------------- |
| `brd_json`              | URL         | No       | none    | `1`, `html`                      |
| `x-unblock-data-format` | HTTP header | No       | none    | `parsed_light, html, screenshot` |

***

### Get response as raw HTML

Add header parameter: `x-unblock-data-format: html`.

Example:

```sh theme={null}
curl --proxy brd.superproxy.io:44445 --proxy-user  brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k -H "x-unblock-data-format: html" "https://www.google.com/search?q=pizza"
```

***

### Get response as Full JSON

Add header parameter: `x-unblock-data-format: json`or add URL parameter: `brd_json=1`.

Examples:

```sh Header parameter theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> -k -H "x-unblock-data-format: json" "https://www.google.com/search?q=pizza"
```

```sh URL Parameter theme={null}
  curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://www.google.com/search?q=pizza&brd_json=1"
```

***

### Get Full JSON with a structure holding the full HTML  as `string`

Add URL parameter: `brd_json=html` or  header parameter: `x-unblock-data-format: html`

Example:

```sh JSON+HTML theme={null}
  curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://www.google.com/search?q=pizza&brd_json=html"
```

***

### Get light JSON

Add header parameter: `x-unblock-data-format: parsed_light` or URL parameter `brd_json=parsed_light` to get a faster response (works twice as fast as Full SERP) with fewer components.

Full schema documentation can be seen here: [https://docs.brightdata.com/scraping-automation/serp-api/parsed-json-results/parsing-search-results#google-response-schema-light-json](/scraping-automation/serp-api/parsed-json-results/parsing-search-results#google-response-schema-light-json)

Examples:

```sh Header parameter theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> -k -H "x-unblock-data-format: parsed_light" "https://www.google.com/search?q=pizza"
```

```sh URL parameter theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> -k "https://www.google.com/search?q=pizza&brd_json=parsed_light"
```

***

### Get response as screenshot

Add header parameter: `x-unblock-data-format: screenshot` . Response will be a binary PNG image. In the example below add `--output` flag to `curl` to capture response to image file.

Example:

```sh theme={null}
curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k -H "x-unblock-data-format: screenshot" "https://www.google.com/search?q=pizza" --output screenshot.png
```

***

## Get element rectangle information <Badge>BETA</Badge>

Add URL parameter `brd_rects=1` in order to get results rectangle area as displayed on search result screen. This allows you to know when, in relation to `viewport` (which signifies screen resolution used to render the page) how much space does the result take on the visible screen.`viewport` (screen size) can be found in `general` element.

Notes:

1. Getting rectangle data will increase response time. Expect response time to range between 5 seconds to 60 seconds per request.
2. In BETA version you must also relay`brd_json=1` URL parameter in addition to `brd_rects=1` .

Response elements which have rectangle information:

* `organic`
* `videos`
* `images`
* `people_also_ask`
* `ai_overview`
* `related_searches`
* `perspectives`
* `forums `
* `pagination`
* `latest_posts`

Example:

```bash theme={null}
curl -vx \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \ 
 "https://www.google.com/search?q=bright+data&brd_json=1&brd_rects=1"
```

## How to configure routing

**Pin requests to the same IP with** `x-brd-session`**.** This feature will attempt to keep the same proxy IP address which was used previously.

```bash theme={null}
curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
  -H 'x-brd-session: my-session-123' \
  "https://www.google.com/search?q=bright+data"
```

## Page Load configuration

**Wait for a specific element with `x-brd-expect`** *(requires* `custom_expect `*permission).*

Use this option in order to prevent premature response, and wait till specific element is rendered by google.

```bash theme={null}
curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
  -H 'x-brd-expect: {"element": "#search"}' \
  "https://www.google.com/search?q=bright+data"
```

## URL Control configuration

**Append a URL fragment with `x-brd-url-fragment`:**

Use this option if you need to maintain a base URL address, and append a suffix by your logic.

```bash theme={null}
curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
  -H 'x-brd-url-fragment: !/results/section2' \
  "https://www.google.com/search?q=bright+data"
```

## Get current rate limit

**Get rate limit info with `x-brd-get-rate-limit`:**

Get current target website rate limit, response is

```bash theme={null}
curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
  -H 'x-brd-get-rate-limit: true' \
  "https://www.google.com/search?q=bright+data"   
```

## Request Headers: Summary

The following headers can be passed with your SERP API requests to control behavior, session pinning, output format, and more.

| Header or URL parameter               | Availability                                                            | Purpose                                                                  |
| :------------------------------------ | :---------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `x-brd-expect`                        | Zones with `custom_expect` permission                                   | Custom success/failure validation criteria for response content          |
| `x-unblock-data-format`               | All                                                                     | Controls output format: `json, html, light_json, screenshot, parsed`     |
| `x-brd-url-fragment`                  | All (browser step)                                                      | Appends a URL fragment (`#...`) to the request URL for browser rendering |
| `x-brd-session`                       | All                                                                     | Sets a customer session ID to pin requests to the same peer/IP           |
| `x-request-priority`                  | All                                                                     | Request priority hint - may influence internal routing decisions         |
| `x-brd-get-rate-limit`                | All                                                                     | When present, response includes current rate limit info headers          |
| `cookie`                              | Zones with `cookie_whitelist` or `header_whitelist` containing `cookie` | Customer cookies forwarded to target site (filtered by whitelist)        |
| Any header in `header_whitelist` rule | Zones with `cust_head` permission                                       | Custom headers forwarded verbatim to the target site                     |
| `brd_rects=1`                         | All                                                                     | Show element rectangle data                                              |
