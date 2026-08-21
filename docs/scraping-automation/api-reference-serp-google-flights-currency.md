# Google Flights currency

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-flights/currency](https://docs.brightdata.com/api-reference/serp/google-flights/currency)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Flights Google Flights currency parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD
```

## Parameters

<ParamField type="string">
  String representing flight search parameters
</ParamField>

<ParamField type="string">
  Defines the currency of returned prices

  ```txt wrap theme={null}
  https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD",
      "format": "json"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD"
  ```

  ```js Node.js highlight={10} theme={null}
  (async () => {
    const response = await fetch('https://api.brightdata.com/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY'
      },
      body: JSON.stringify({
        zone: 'serp_api1',
        url: 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD',
        format: 'json'
      })
    });
    
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```python Python highlight={11} theme={null}
  import requests

  # API Configuration
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY',
  }

  payload = {
      'zone': 'serp_api1',
      'url': 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&curr=USD',
      'format': 'json'
  }

  # Make the request
  response = requests.post(
      'https://api.brightdata.com/request', 
      json=payload, 
      headers=headers
  )

  print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json 200 highlight={27} theme={null}
  {
    "status_code": 200,
    "headers": {
      "accept-ch": "Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version",
      "alt-svc": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000",
      "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
      "content-security-policy": "require-trusted-types-for 'script';report-uri /_/FlightsFrontendUi/cspreport, script-src 'report-sample' 'nonce-1mGlhJJcMK5-5ZqCNTUFvw' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/FlightsFrontendUi/cspreport;worker-src 'self' blob:, script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://maps.googleapis.com https://maps.googleapis.com/maps/ https://maps.googleapis.com/maps-api-v3/ https://adservice.google.com/ https://www.googleadservices.com/pagead/conversion_async.js https://www.googleadservices.com https://www.google.com/tools/feedback/ https://www.gstatic.com/feedback/js/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://support.google.com/inapp/;report-uri /_/FlightsFrontendUi/cspreport/allowlist;worker-src blob: 'self'",
      "content-security-policy-report-only": "script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com/external_hosted/d3/v5/d3.min.js https://translate.google.com/translate_a/element.js https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://maps.googleapis.com/maps/api/js https://www.google.com/tools/feedback/chat_load.js https://www.google.com/tools/feedback/help_api.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.google.com/tools/feedback/open_to_help_guide_lazy.js https://www.gstatic.com/feedback/js/ https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.googletagmanager.com/gtag/js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/destination https://www.gstatic.com/_/mss/boq-travel/_/js/k=boq-travel.FlightsFrontendUi_desktop_ms.en.2AgMd3uDtdI.2021.O/ https://apis.google.com/_/scs/abc-static/_/js/ https://maps.googleapis.com/maps-api-v3/api/js/ https://maps.googleapis.com/maps/vt https://maps.googleapis.com/maps/api/js/ https://maps.googleapis.com/maps/api/place/js/ https://translate.googleapis.com/_/translate_http/_/js/;report-uri /_/FlightsFrontendUi/cspreport/fine-allowlist",
      "content-type": "text/html; charset=utf-8",
      "cross-origin-opener-policy": "same-origin-allow-popups",
      "cross-origin-resource-policy": "same-site",
      "date": "Fri, 27 Feb 2026 00:45:15 GMT",
      "expires": "Mon, 01 Jan 1990 00:00:00 GMT",
      "p3p": "CP=\"This is not a P3P policy! See g.co/p3phelp for more info.\"",
      "permissions-policy": "ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*",
      "pragma": "no-cache",
      "reporting-endpoints": "default=\"/_/FlightsFrontendUi/web-reports?context=eJwV0XtUVlUaBvBPfb5vI9rykqhgpclShIQABcJgk9exBpXrd75zzj4iigQGGIgX1MTGYY2GgmBhVjBlolwKwm4maSqBEZCKVFpOZqmkyQzSDCtNmXnmj99az3r3e9797nXcq0b4eA6x-VEYhf8_u3vZ5k_zsv0aOtUWEjbVVkRrpsyxTd_yjC14XLRNeEfbknyjbUEjluC6PQaXkmOQszkGf70Vgx_zYpFUHItl5DwTC7_7sQils75xGOUTj7xF8ZiWHI_OLfH4OZ-5LB733olHfVs8ZrslYC7No1cIgQlQixOwlFrXJ6CN2injxQREjUtEl2ci-qYm4nZHIqIGOXHD2wmv2U5siHHiuUQnetKcGJXjxG8vOHHwdSfm73eiocOJzdedKB9wYt5IDU0eGjZ6a9jtq-Gmn4YVszWsWqTBFqthUoaG9jwNZr6GuwUarhRpOFyj4Ys6DUfrNfQf0xBxSkNYk4ZHz2uYflWD-y0Npyl0vAt-ni4U-rjgHu7CljkudKe6UL7VhedLXdhzwIXxlS5EHHThOsUfdmHG-y6cbWZ_J_vvuLBwsI6moToqhus4QemjdcwcoyN4rI58CpiuY2iAjnepjopCdFwO19HwlI55MTpiNB3hK3UkPKejNVPH8iwdw7N17MvVcb5Ex_03dfxyiPVqHSmURr_X6sj8VMfYz3R0N-mI6NBx_TwzdX6t4-IPOm72cs7DBrInG5jlbeBJqgsz4B9nYJJp4HSmgQXrDWhUkW_gx0ID-WUGHq00UN1i4LEvDLS1GWinrHYD-iUDEVcMePQbuHnHQMAQExotpZIHTOgTTCT5mrhByUEmmoNN7Jhl4pUIE2V0aL6JkAUmUhab8I43sSvVxLBMEzV0crWJUzQx18QDa02M2WEicaeJIcUmihs575gJ87iJnhbe0WEi9qKJKb0mhv7XRL1Q-KePQi95Pq5wOUjhwgyFmrkKtfQuHaFPqJGO0XEa_bTCE9EK4TSLIsjHpRBjKqQkKTieVZi7SuGNdQoH8xR8Nyr4UxbtL1BY9zeFfrpLJ0sVWuhOucK9NxU631LIflthRaXCiGqFS_UK3R8qDP9IYd8JhXLadFJBb1K4_blCz5fMbQp_0P4zvI9wTuGtrxWufqNQ9a3C-AsK9dRA575TKP1e4dolhdYrCh93K8y5pVDXq-B2W2H9vxVG9SsM3FMoHFB4cJCFp2FhCdW4WXiH_kXNwyzEjbGQPMHChocs3H_EwhMTLUTQJlrmbSGd7tInj1nQHud3lB1kYR_NC7awkG5T4JMW-mhvlIXC2RYao1mPs9CqW9hsWPiAPBTPV1hoSLFwJ9VCf5qFc-kWwlZb6KZd2Rbu5VgYoOpcCx0bLWQVWJi43cIpUi9ZeLDIQlWphaN0nP4ot3Dy7xYO1Fr47cir9sv5FfZVWyvsRW9X2OOuVtjt3RX2gotf2fdQ7v4z9r_QS_QqBU3qtEdRzvgu-1b6uarLXjfpW3vfxgv2kZsu2CeOHeyY8tBgx_tNQxzf0DW6SwPUv2aRA7mLHFdfXuzoo6nNMY6Z1FMY60huixR-ZyJF40-R4jOK7o4Ucb9ECo8bkcKT0kj-Gin-TAG9kaLk90hRRq02KY7apWikNmqn-hFSfDhSio_oCJ0iu5cUgoaSOxkTpIibJsW46VKMnSFFS4gU10KleDhMCo9IKXZGSbGLTsyVouNPUnRRyUIpGuh72vmMFMU0bIkUYbSEaskzXopScuhSPEV7TSm2L5Pi82TWUrhfhhTOTCl61kjRRwtypchby7xOiuD1UmzIk-JTctvMXWkYedA48iQvKqIbL0pRs02Kw9RdwBnbpXiB8ilrB99XKIVJFi2lZbScVtC9XewvlsJ_txSvUQUNKmHPa1L8p5w7HJBicq0Ub7wnxYHDUlRRNcV-IMUjx3hGDU1SVDZLcYhmtkix57QUL1MZ7aX7rVLkfCnFjHYpPu7gPzjLvbqk2EfT_iFF6A9ShFPlT1KMHu72eue2DsfI3e9tqx402X_56uyk3JzkdSsz_FNzVmflrsxK8U_NSH82LXeN_9r0pODA4NDA4OCQgMDgpOcD_wfAZJtV\"",
      "server": "ESF",
      "vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-ua-compatible": "IE=edge",
      "x-xss-protection": "0",
      "connection": "close",
      "transfer-encoding": "chunked"
    },
    "body": "<!doctype html><html lang=\"en\" dir=\"ltr\"><head><base href=\"https://www.google.com.sa/\"><link rel=\"preconnect\" href=\"//www.gstatic.com\"><meta name=\"referrer\" content=\"strict-origin-when-cross-origin\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,interactive-widget=resizes-content\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"color-scheme\" content=\"light dark\"><meta name=\"google-site-verification\" content=\"sxp7zFOFUzk09RdlFhuH2SoCn5nOkXgomiLeLIQ48p0\"><meta name=\"google-site-verification\" content=\"uceYfkdbu7tdKGywiwSr1p0cIbqdYOwMDkNq5jVFwMA\"><meta name=\"google-site-verification\" content=\"O5G3B9VUIil1GEVlPw3BfdeYn_kZeNd_6rsDolHah5w\"><meta name=\"google-site-verification\" content=\"hU5-JhTB7DyiEACObYa4GcZxXOTY5FykMqegq9lCAqA\"><meta name=\"application-name\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-title\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-status-ba..."
  }
  ```
</ResponseExample>
