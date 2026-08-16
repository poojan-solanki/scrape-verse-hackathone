# Web Unlocker API features

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/features](https://docs.brightdata.com/scraping-automation/web-unlocker/features)
> **Category**: `scraping-automation`

---

Reference for Bright Data Web Unlocker API features (98% success rate): CAPTCHA solving, Premium Domains, custom headers, cookies and Browser Rendering.

## Disable CAPTCHA Solving

By default, as part of our full proxy unblocking solution, Web Unlocker API also solves CAPTCHAs that are encountered while returning your proxy request.

When disabling CAPTCHA solver, our intelligent algorithm still takes care of the entire ever-changing flow of finding the best proxy network, customizing headers, fingerprinting, and more, but intentionally does not solve CAPTCHAs automatically, giving your team a lightweight, streamlined solution, that broadens the scope of your potential scraping opportunities.

**Best for:**

* Scraping data from websites without getting blocked
* Emulating real-user web behavior
* Teams that don't have an unblocking infrastructure in-house and **don't want** their scraper to solve CAPTCHAs automatically

<Accordion title="How can I get started?">
  To disable CAPTCHA solving, open the relevant zone and go to the **Configuration** tab, where you will find the **CAPTCHA Solver** toggle. Switch it off to disable CAPTCHA solving.
</Accordion>

## Web Unlocker API Premium Domains

Premium domains are a part of Bright Data's tiered website classification system. These are websites that are more challenging to unblock than others and require additional Web Unlocker API resources.

In this article, we will see the current list of Premium domains, understand how to target them, and go over the special pricing.

<Note>
  The premium domains list is updated quarterly using our website classification logic and we’ll notify you via email 30 days in advance of any changes to your domains. You can always access the most up-to-date list in your Web Unlocker API zone.
</Note>

### Current List of Premium Domains

<Accordion title="Expand to view current premium domains">
  <div>
    Loading...
  </div>
</Accordion>

### Enable Premium Domains

When creating your Web Unlocker API zone, check the 'Premium Domains' box under Special features

<Frame>
  <img alt="Enable Premium Domains" />
</Frame>

### Pricing

Once enabled, the premium price will be reflected in the "Estimated cost" section. Check out the [pricing page](https://brightdata.com/pricing) to see exact numbers, but keep in mind these prices are usually for "Pay as you go" plans and you can enjoy significant discounts if you sign up to a package or talk to our sales people!

<Note>
  Even after enabled, only specific requests to these domains will be priced at the higher rate. Requests to other domains will be kept at the default lower tier.
</Note>

## Geolocation Targeting `-country-country_code`

<Tip>
  Web Unlocker automatically selects the optimal IP location for targeting your domain, reducing the need for manual configuration in **most** cases. Manual geo-targeting is useful when accessing region-restricted or location-specific data.
</Tip>

If you want to target from a specific **country** in Web Unlocker API refer to [geolocation targeting](/api-reference/proxy/geolocation-targeting).

## Mobile User-agent Targeting `-ua-mobile`

By default, Web Unlocker API uses desktop-specific user agents for your requests. To use a **mobile** user agent instead, simply append `-ua-mobile` to your request. 

## Scrape as markdown

Web Unlocker is able to live convert your pages from HTML to markdown. This makes it easier to feed your LLM training system, for example.

To activate the feature, add the `x-unblock-data-format: markdown` header when using the native proxy interface, or set `data_format: 'markdown'` when using the API.

<CodeGroup>
  ```shell HTTP API theme={null}
  API_KEY=your_api_key_here
  ZONE=your_zone_here
  curl -v \
     -H "Authorization: Bearer $API_KEY" \
     -H 'content-type: application/json' \
     --data '{"url": "https://example.com", "zone": "'$ZONE'", "format": "raw", "data_format": "markdown"}' \
     https://api.brightdata.com/request
  ```

  ```shell Native proxy interface theme={null}
  curl -vk \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
      -H 'x-unblock-data-format: markdown' \
      https://example.com
  ```
</CodeGroup>

## Return a screenshot

Web Unlocker is able to take a screenshot of the page you are trying to scrape. This can be useful for debugging or for monitoring the page's appearance.

To activate the feature, add the `x-unblock-data-format: screenshot` header when using the native proxy interface or add `data_format: screenshot` to request body when using API interface.

Output format is `.png`

<CodeGroup>
  ```shell HTTP API theme={null}
  curl -k https://api.brightdata.com/request \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR API KEY>" \
  -d '{"zone":"unblocker","url":"https://example.com","format":"raw","data_format":"screenshot"}' \
  --silent --output example_com.png
  ```

  ```shell Native proxy interface theme={null}
  curl -k \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
      -H 'x-unblock-data-format: screenshot' \
      https://example.com > example_com.png
  ```
</CodeGroup>

## Unlock Fragmented URL in a single call

Unlock a fragmanted URL (broken by a `#` charachter) using Web Unlocker API.

### Using REST API

Just provide the fragmented URL, Bright Data Unlocker will handle and retreive the results. Response time may take a bit longer due to increased processing and retreival.

Example:

```bash theme={null}
curl 'https://api.brightdata.com/request' -H 'Content-Type: application/json' -H 'Authorization: Bearer API_KEY' -d '{"zone": "zone3","url": "https://www.somesite.com#!/path1/id11133/9*Fmt=100", "format": "raw", "headers": {"x-unblock-expect": "{\"element\": \".pace-done\"}"}}'
```

### Using Native API

A special header is introduced for this purpose: `x-unblock-url-fragment` . Relay this header and add the fragment.

Example:

```bash theme={null}
curl -i --proxy brd.superproxy.io:44445 --proxy-user brd-customer-someID-zone-myunlocker:**passwd** -k "https://www.site.com/" -H 'x-unblock-url-fragment: !/path1/id11133/9*Fmt=100' -H 'x-unblock-expect: {"element": ".pace-done"}' 
```

## Force JavaScript rendering with a browser

You can instruct Web Unlocker to force JavaScript rendering using a browser by adding the `render `parameter to your request. Since this flag forces browser use, you may see significant increase in response time, so use it only when needed, and scarcely.

<CodeGroup>
  ```shell HTTP API theme={null}
  curl -k https://api.brightdata.com/request \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR API KEY>" \
  -d '{"zone":"unblocker","url":"https://example.com","format":"raw","render":"true"}' 
  ```

  ```shell Native proxy interface theme={null}
  curl -k \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE-render:$PASSWORD@brd.superproxy.io:44445 \
       https://example.com
  ```
</CodeGroup>

## Custom Web Unlocker API

Gain enhanced control over your requests with flexible options to fine-tune website behavior and optimize request handling.

By default, Web Unlocker API automatically manages all request headers, cookies, expect elements etc., to get the best known results and any extra elements that are sent along with the request are disregarded.

Custom Web Unlocker API allows you to override the automated parameters and send your own custom values specific to your needs.

### Which custom features are available

* [Manual headers & cookies](/scraping-automation/web-unlocker/features#manual-headers-%26-cookies)
* [Manual ‘expect’ elements](/scraping-automation/web-unlocker/features#manual-%E2%80%98expect%E2%80%99-elements)

### How to enable

In the Control Panel, go to your specific **Web Unlocker API** zone -> Configuration -> Advanced Settings, and enable the Custom Web Unlocker API feature you want to use.

<img alt="Enable Premium Domains" />

Once enabled, you can now send Custom Web Unlocker API requests.

### How billing changes with custom features

Unlike the regular Web Unlocker API billing logic, which only charges for successful requests, when any of the above Custom Web Unlocker API features are **enabled**, you'll be billed for 100% of the requests (both successful and failed).

Since you are now in control of certain request paramaters, Bright Data can no longer take full responsibility for the unlocking process and its performance.

<Warning>
  **Be advised:**

  * We do not allow cookies for login/authentication purposes
  * Adding custom paramaters to your request may result in blocking and a drop in the success rate.
</Warning>

### Manual headers & cookies

Override automated headers/cookies and send your own custom values in order to target specific versions of a website.

<Note>
  Enabling **Custom Headers & Cookies** results in the following

  <AccordionGroup>
    <Accordion title="Access to Pre-approved List of Headers/Cookies">
      You'll gain access to a pre-approved list of headers and cookies. You can browse through this list to verify that the required headers and cookies are approved for your target site.
    </Accordion>

    <Accordion title="Send Request for New Headers/Cookies">
      If your required headers or cookies are not on the pre-approved list, you can submit a form to our compliance team for approval. This process involves providing information about the headers/cookies and their necessity. After a short approval process is completed, you will be notified by our compliance team.
    </Accordion>

    <Accordion title="Charging for All Requests">
      Unlike the regular Web Unlocker API billing logic, which only charges for successful requests, enabling this feature means you'll be charged for 100% of the requests (both successful and failed). This change is due to Bright Data not having full control over the process and its performance.
    </Accordion>
  </AccordionGroup>
</Note>

### Manual ‘expect’ elements

In case of receiving partially rendered/loaded pages, you can use the `x-unblock-expect` header to instruct Web Unlocker API to wait for specific elements or text before returning the response.<br />This feature allows you to define expectations, such as a CSS selector, specific text, or the page body, that must be present before the page is considered fully loaded.

You can configure this per request with the `x-unblock-expect` header seen below.

**Add header**

<CodeGroup>
  ```shell Element must exist theme={null}
  curl -vk \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
      -H 'x-unblock-expect: {"element": ".some-css-selector"}' \
      https://example.com
  ```

  ```shell Page must include text theme={null}
  curl -vk \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
      -H 'x-unblock-expect: {"text": "items in stock"}' \
      https://example.com
  ```
</CodeGroup>

### Amazon-specific geolocation headers

Web Unlocker API allows you to pass custom headers to simulate a user-selected city and  ZIP code on Amazon, enabling access to region-specific content, pricing, and delivery options.

* `x-unblock-city` - Simulates selecting a city.
* `x-unblock-zipcode` - Simulates selecting a ZIP code on Amazon.
* `x-unblock-get-sponsored` - Simulated sponsored-specific rules on Amazon pages to improve the consistency/appearance of sponsored results. It’s recommended to use it only on requests where sponsored data is required (omit otherwise).

<CodeGroup>
  ```shell Example theme={null}
  curl -vk \
  -x brd-customer-$CUSTOMER_ID-zone-$ZONE:$PASSWORD@brd.superproxy.io:44445 \
  -H 'x-unblock-zipcode: 10001' \
  -H 'x-unblock-city: New York' \
  https://www.amazon.com/
  ```
</CodeGroup>

## Monitor Web Unlocker API Usage

To review your current Web Unlocker API CPM, navigate to [My APIs](https://brightdata.com/cp/web_access) page, and review the **Requests** column for request counts (the basis for CPM billing); the **Traffic** column shows bandwidth used.

<Frame>
  <img alt="Monitor Web Unlocker API Usage" />
</Frame>

### How to read usage numbers

The **Traffic** column above shows bandwidth used; the number of **successful requests** is displayed in the **Requests** column. In the example above, 115k requests are equal to 115 CPM, so you'll be billed according to the rate of 10 CPMs for that billing cycle.

### How is usage calculated?

Your Web Unlocker API usage is measured by CPM. CPM is the cost of 1000 **successful requests,** meaning only successful Web Unlocker API requests will count toward your billing.

See our [Billing & Pricing](/general/account/billing-and-pricing/payment) page to learn more.

## Debugging Web Unlocker API

Sometimes it's useful to extract some debug info about your requests to understand what happened inside them in more detail.

We provide the `x-brd-debug` response header for this purpose.

How you switch it on depends on which access type you're using, the same Native / API choice you see in the Playground of your [zone](https://brightdata.com/cp/web_access):

| Access type            | How to enable                              |
| ---------------------- | ------------------------------------------ |
| Native proxy interface | Append `-debug-full` to the proxy username |
| HTTP API               | Set `"debug": true` in the request body    |

For asynchronous requests, set `"debug": true` on the **submit** call to `/unblocker/req`. The `x-brd-debug` header is then returned by `/unblocker/get_result` when you collect the response. Submitting without the flag returns no debug header at collection time.

<Note>
  This feature is only available for the Web Unlocker API and is NOT available for our proxy products.
</Note>

<Tip>
  `x-brd-debug` is a **response header**, so two flags matter:

  * Print headers with `-v` or `-i`. A plain `curl` shows only the body, which looks like the feature returned nothing.
  * On the native proxy interface, keep `-k` for HTTPS targets. Without it curl rejects the proxy's certificate, the tunnelled request never completes, and you see only the bare `HTTP/1.1 200 OK` of the CONNECT, with no debug header.
</Tip>

<CodeGroup>
  ```shell Native proxy interface theme={null}
  curl -vk \
      -x brd-customer-$CUSTOMER_ID-zone-$ZONE-debug-full:$PASSWORD@brd.superproxy.io:44445 \
      https://example.com
  ```

  ```shell HTTP API (sync) theme={null}
  curl -i --request POST \
    --url https://api.brightdata.com/request \
    --header "Authorization: Bearer $API_KEY" \
    --header "Content-Type: application/json" \
    --data '{
      "zone": "web_unlocker1",
      "url": "https://example.com",
      "format": "raw",
      "debug": true
    }'
  ```

  ```shell HTTP API (async) theme={null}
  # 1. Submit the job with "debug": true, and keep the response_id.
  RESPONSE_ID=$(curl --silent --request POST \
    --url "https://api.brightdata.com/unblocker/req?zone=web_unlocker1" \
    --header "Authorization: Bearer $API_KEY" \
    --header "Content-Type: application/json" \
    --data '{"url": "https://example.com", "debug": true}' \
    | sed -En 's/.*"response_id":"([^"]+)".*/\1/p')

  # 2. Collect the result. x-brd-debug is returned here, not on the submit.
  #    Wait ~20s before the first poll, 10s before the second, then 5s.
  #    HTTP 202 means the job is still running.
  curl -i --silent --compressed \
    --url "https://api.brightdata.com/unblocker/get_result?response_id=$RESPONSE_ID" \
    --header "Authorization: Bearer $API_KEY"
  ```
</CodeGroup>

The format of the `x-brd-debug` header looks like this:

```text theme={null}
req_id=hl_d09913c7_a1lw123bkcg; bytes_up=2842; bytes_down=562418; billed=false; destination_ip=162.219.225.118; used_req_headers=accept-language,accept; peer_ip=r868133f79d0c3fa9d7c7ccca0151af2e; peer_country=us; render=false
```

| Field              | Description                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| req\_id            | The internal ID of your request in the Bright Data Web Unlocker API. Include it in bug reports so Bright Data support can trace exactly what happened in your specific request |
| bytes\_up          | The amount of outgoing traffic, in bytes, that the Bright Data Web Unlocker API recorded while processing this request                                                         |
| bytes\_down        | The amount of incoming traffic, in bytes, that the Bright Data Web Unlocker API recorded while processing this request                                                         |
| billed             | Whether the Bright Data Web Unlocker API counts this request as billable. Returns `true` or `false`                                                                            |
| destination\_ip    | The IP address of the target server from which the data was fetched                                                                                                            |
| used\_req\_headers | The custom request headers that were relayed to the target site in the initial request                                                                                         |
| peer\_ip           | A unique identifier for the peer IP address used to make the request. Use it to validate that IP rotation is working as you expect                                             |
| peer\_country      | Two-letter country code of the peer used for the request, for example `us`                                                                                                     |
| render             | Whether the returned page is browser-rendered HTML (`true`) or the response body of a single HTTP request (`false`)                                                            |
| captcha\_solved    | Whether a CAPTCHA was solved during the processing of the request. Returns `true` or `false`                                                                                   |
| captcha\_type      | The CAPTCHA service of the solved CAPTCHA                                                                                                                                      |

## Common Error Codes

Occasionally, for a number of reasons, you might receive an unexpected error code in response to your Web Unlocker API request.

The following list will provide you with a deeper understanding of what the source of the issue may be.

| Error                                              | Description                                                                                                                                                                                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `404`                                              | Page not found. Invalid URL, which suggests the URL might be broken or dead.                                                                                                                                                                                        |
| [403](/proxy-networks/faqs#what-is-error-code-403) | The URL you're trying to access is valid, but you are forbidden from accessing that URL.                                                                                                                                                                            |
| [502](/proxy-networks/faqs#what-is-error-code-502) | Error code `502` is the most common error for Web Unlocker API users, the descriptive part is under the `x-luminati-error-code`.                                                                                                                                    |
| `407`                                              | This error code suggests one of your account credentials is incorrect (password or zone's name).                                                                                                                                                                    |
| `429`                                              | This error code implies a rate limit (rare). In such cases, if the response appears as below, Bright Data is applying auto-throttling to the request, and you should open a ticket or email [support@brightdata.com](mailto:support@brightdata.com) for assistance. |
| `401`                                              | Unauthorized request, The `Authorization: Bearer` API key is invalid (`Auth method is not supported`) or missing (`User authentication is required`).                                                                                                               |
| `503`                                              | HTTP error code `503` means "Service Unavailable". Browser check failed or browser check wasn't completed                                                                                                                                                           |

```js theme={null}
< HTTP/1.1 429 The request was auto-throttled due to low success rate  
< x-luminati-error-code: sr_rate_limit
< x-luminati-error: The request was auto-throttled due to low success rate
< x-brd-error-code: sr_rate_limit
< x-brd-error: The request was auto-throttled due to low success rate
< date: Tue, 23 Jan 2024 17:07:19 GMT
< connection: keep-alive
< keep-alive: timeout=5
< transfer-encoding: chunked
< 
* Connection #0 to host brd.superproxy.io left intact
```

<Accordion title="Contact support for further assistance">
  If you encounter an issue with Web Unlocker API, before reporting it to us, please test with the instructions and tips below:

  1. Open '[Your Web Unlocker API](https://brightdata.com/cp/web_access)' in your control panel, then click the Playground Tab.
  2. Select `Shell` language
  3. Paste the URL of your target in the 'URL' box
  4. Copy with the button on the right
  5. Add `-v -o test` to your command (this will turn on verbose logging, and create an output file named 'test' for you to share with our support agents)
  6. Run the command and check the output (make sure to check the static source HTML for the data also)

  If this test reproduces your issue, please contact [support@brightdata.com](mailto:support@brightdata.com) and share the following within the body of the email:

  1. The `curl` request you sent to generate the result
  2. The full verbose output from running the command
  3. The response returned from running it (the 'test' file)
  4. Whether you are using a browser automation tool or not (The Web Unlocker API does not support them or any 3rd party integrations except for your code).
</Accordion>

## Get Success Rate Statistics Per Domain

The following API endpoint will provide Web Unlocker API success rate statistics from the past 7 days.

The statistics can be obtained per single domain like `example.com` or for a wildcard domain like `example.*` in order to get statistics for all top-level domains.

**Note**: calling this API endpoint requires using your [API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F)

**How to get statistics for a single domain?**

<CodeGroup>
  ```shell Request theme={null}
      curl "https://api.brightdata.com/unblocker/success_rate/example.com" -H "Content-Type: application/json" -H "Authorization: Bearer API_KEY"
  ```

  ```shell Response theme={null}
      {"example.com":0.9835556363554884} 
  ```
</CodeGroup>

**How to get statistics for all monitored top level domains?**

<CodeGroup>
  ```shell Request theme={null}
      curl "https://api.brightdata.com/unblocker/success_rate/example.*" -H "Content-Type: application/json" -H "Authorization: Bearer API_KEY"
  ```

  ```shell Response theme={null}
      {"example.com":0.9835548316870116,"example.fr":0.987469724604454,"example.co.uk":0.9503769840916476,"example.ca":0.9904893224078992,"example.de":0.9864620859972142,"example.es":0.9845641506811664,"example.in":0.8558596797075156,"example.it":0.9890758071645432,"example.co.jp":0.996804161764218,"example.com.mx":0.9710054259117241,"example.com.au":0.9969920926297628,"example.ae":0.617948700199661,"example.nl":0.9872124916314797,"example.pl":0.9899010819017637,"example.com.br":0.9804172881460471,"example.com.be":0.9928999059667324,"example.se":0.9888455998636585,"example.sa":0.9939472688535012,"example.com.tr":0.7967697653998838,"example.eg":0.9990248073774932}
  ```
</CodeGroup>
