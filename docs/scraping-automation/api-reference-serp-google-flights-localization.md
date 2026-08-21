# Google Flights localization

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-flights/localization](https://docs.brightdata.com/api-reference/serp/google-flights/localization)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Flights Google Flights localization parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us&hl=en
```

## Parameters

<ParamField type="string">
  String representing flight search parameters
</ParamField>

<ParamField type="string">
  Two-letter country code used to define the country of search

  ```txt wrap theme={null}
  https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us
  ```
</ParamField>

<ParamField type="string">
  Two-letter language code used to define the page language

  ```txt wrap theme={null}
  https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&hl=en
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us&hl=en",
      "format": "json"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us&hl=en"
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
        url: 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us&hl=en',
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
      'url': 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ&gl=us&hl=en',
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
      "content-security-policy": "require-trusted-types-for 'script';report-uri /_/FlightsFrontendUi/cspreport, script-src 'report-sample' 'nonce-oXtL4fMYR0uYTvsCGxZ-rQ' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/FlightsFrontendUi/cspreport;worker-src 'self' blob:, script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://maps.googleapis.com https://maps.googleapis.com/maps/ https://maps.googleapis.com/maps-api-v3/ https://adservice.google.com/ https://www.googleadservices.com/pagead/conversion_async.js https://www.googleadservices.com https://www.google.com/tools/feedback/ https://www.gstatic.com/feedback/js/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://support.google.com/inapp/;report-uri /_/FlightsFrontendUi/cspreport/allowlist;worker-src blob: 'self'",
      "content-security-policy-report-only": "script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com/external_hosted/d3/v5/d3.min.js https://translate.google.com/translate_a/element.js https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://maps.googleapis.com/maps/api/js https://www.google.com/tools/feedback/chat_load.js https://www.google.com/tools/feedback/help_api.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.google.com/tools/feedback/open_to_help_guide_lazy.js https://www.gstatic.com/feedback/js/ https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.googletagmanager.com/gtag/js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/destination https://www.gstatic.com/_/mss/boq-travel/_/js/k=boq-travel.FlightsFrontendUi_desktop_ms.en.2AgMd3uDtdI.2021.O/ https://apis.google.com/_/scs/abc-static/_/js/ https://maps.googleapis.com/maps-api-v3/api/js/ https://maps.googleapis.com/maps/vt https://maps.googleapis.com/maps/api/js/ https://maps.googleapis.com/maps/api/place/js/ https://translate.googleapis.com/_/translate_http/_/js/;report-uri /_/FlightsFrontendUi/cspreport/fine-allowlist",
      "content-type": "text/html; charset=utf-8",
      "cross-origin-opener-policy": "same-origin-allow-popups",
      "cross-origin-resource-policy": "same-site",
      "date": "Fri, 27 Feb 2026 00:24:51 GMT",
      "expires": "Mon, 01 Jan 1990 00:00:00 GMT",
      "p3p": "CP=\"This is not a P3P policy! See g.co/p3phelp for more info.\"",
      "permissions-policy": "ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*",
      "pragma": "no-cache",
      "reporting-endpoints": "default=\"/_/FlightsFrontendUi/web-reports?context=eJwV0HtUVVUeB_CrfO_dgrZ8JCrajBYrERTloZLG3YiaUw0qcOGee87ZRwSR1BCU8AGa2DJWPiFxYrIGJknN10g41TSZD0BIBAYBn-WkpoKaFuIMK0xpvvPHZ-3f-e29v7-zts-p_gF-XrYgivj_6jPcFjdmuO3HyaNtkyJG2wqo8c402-a2aNu4da_awobG2IR_jC0pMMYW2n8u2uyxuJIci6y1sXj7Xiyu5cQhqTAO88nVFIegJ3GYTGcD4zEwwIWc2S6MSXahZZ0LN_JYF7vw-JAL5fUuRPdJwAyaSe8RQhKg5iRgHtWtSkA9NVD6WwmIGpqIc36J6BydiAeNiYjq5cYdfzeGR7uxOtaN1xPduL_IjYFZbjx80429H7rxUpkbFY1urG1zo6THjZkDNFT7asj11_BuoIa7QRqCwzUsiNawZLYGW5yGUekaGnI0mHkaHuVruF6g4cgBDacPa_iqXEPXMQ2RVRoiqjU826ph3E0NPvc0fEOTh3kQ5OfBlgAPfKZ4sG66B-1pHpSs92BZkQc7dnswbI8HkXs9aCPXEQ_C_-7B2Rqeb-H5bg9e7q2j2ltHaT8dJ2nxIB0TB-sIG6Ijj8aP0-E9Xsff6DAVTNJxdYqOimk6ZsbqiNV0TFmoI-F1HXVLdaRk6Oi3XMfObB2t23U8-UjH7U_Y368jlRbRLwd1LP1ax5ATOtqrdUQ26mhrZU0t53Vc_l7H3Q7m_M7A8ucMTPU38CIdjjAQHG9glGngm6UGZq0yoFFpnoFrWwzkFRt4do-B_bUGxp42UF9voIEyGgzoVwxEXjfg22XgbreB8V4mNJpH258yoY8wkRRo4g4lh5qoCTOxaaqJ9yJNFNMnL5mYNMtE6hwT_i4T29JM9F1q4gBVZpqoopHZJp5aYWLwJhOJW014FZpIKTdReJSZx0yYx03cr-WcRhNxl00832HC-zcT5ULhpwCFDvKboHA1VOFSuELVDIVqqqGz1EytdJ4u0KBXFF6IUZhCUymSAjwKsabC-iQFx2sKM5Yo_GWlwt4chcBchWDKoLJ8hZXvKHTRI6osUqil7hKFxx8ptOxSWP6xwoI9Cv33K1wpV2j_XKHfFwo7TyqU0JpKBb1a4cEphftnWNcr_EplTZxHaFbYdV7h5gWFfRcVhl1SKKcKav5Woeg7hVtXFOquK7huKfyjXWH6PYXDHQp9Hiis-o_CwC6FnscKW3oUnu5lYS4sHOhj4RD9TDV9LcQPtpA8wsLqZyw8-b2FF0ZaiKQ1NN_fQiY9on-OteCewHu0LNTCTnoQZiHkRQudtCPKwpZoC0djLJyM5x7V6RbWGhY-I19l4c8LLBSkWqig7jQLXYssNC-2EJFpYdtyC4-zLPTQ_mwLjbkWMvItjNxooYrUZgtPF1jYV2ThKzpOv5ZYqPyrhd0HLXz3qYXv6So9_PJ9-9W8UvuS9aX2go9L7fvqSu09baX2_Mv_su-gFWVN9g20md6n0FEt9ijKGnbOvp5u7DtnLx910d6Ze8k-YM0le61vb8fzz_R2XKj2ctyiDnpEPdTrlJej643ZDmTPdtz80xxHJ42uiXVMpKR6pwhqcoqjPzjFCUq44RSvtDtF_G2n8L3jFH6USvJHp_gjje9wiu2_OEUx1dmkOGaX4jhVUhWdpjoq7y_F5wOk-IK-pCryHiyFfbgUgrzJh4wRUsSPkaKZho6T4hoNCZeidpIUkRFS-DqlCKCtUVJso_vTOWuGFD_PkqLxD1Kco-0vS1FBF2nrq1IUUr85UjjmShFBc-kgJcZJ4SYP6WSSRfPIzyVFETl0KaZRsSnFxvlSnEqW4p0U9lOlOJrO_8mUYla2FDkrpOhcKcWh1VKszpHiazqTy94aKR7Sf-k36rVWCi8CFdKdt6Q4sEGKI9Sez5yNUrxJeZSxSYrH29grlCL4XSk-oFLaVSTF_A-YWcK93VJ07ZUi5aAUC-lmuRQffirF7iNSxH3Gtz4hRVkNv2lirRQ_1Ukx-YwU4Q1STGiSIpSqzvL-RWZ_K8XYf0ux5wcpBvXt03p6Q6NjwO3K7iXPBadkLk_KzkpeuTA9OC0rMyN7YUZqcFr64tcWZb8RvGJxUlhI2OSQsLBJ40PCkpaF_A9iZKs7\"",
      "server": "ESF",
      "vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-ua-compatible": "IE=edge",
      "x-xss-protection": "0",
      "connection": "close",
      "transfer-encoding": "chunked"
    },
    "body": "<!doctype html><html lang=\"en\" dir=\"ltr\"><head><base href=\"https://www.google.es/\"><link rel=\"preconnect\" href=\"//www.gstatic.com\"><meta name=\"referrer\" content=\"strict-origin-when-cross-origin\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,interactive-widget=resizes-content\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"color-scheme\" content=\"light dark\"><meta name=\"google-site-verification\" content=\"sxp7zFOFUzk09RdlFhuH2SoCn5nOkXgomiLeLIQ48p0\"><meta name=\"google-site-verification\" content=\"uceYfkdbu7tdKGywiwSr1p0cIbqdYOwMDkNq5jVFwMA\"><meta name=\"google-site-verification\" content=\"O5G3B9VUIil1GEVlPw3BfdeYn_kZeNd_6rsDolHah5w\"><meta name=\"google-site-verification\" content=\"hU5-JhTB7DyiEACObYa4GcZxXOTY5FykMqegq9lCAqA\"><meta name=\"application-name\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-title\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-status-bar-st..."
  }
  ```
</ResponseExample>
