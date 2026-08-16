# Google Flights text search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-flights/text-search](https://docs.brightdata.com/api-reference/serp/google-flights/text-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Flights Google Flights text search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ
```

## Parameters

<ParamField type="string">
  String representing flight search parameters

  ```txt wrap theme={null}
  https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ",
      "format": "json"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ"
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
        url: 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ',
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
      'url': 'https://www.google.com/travel/flights/search?tfs=CBwQAhonEgoyMDI2LTAzLTE2agsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsGicSCjIwMjYtMDMtMjRqDAgCEggvbS8wNGpwbHILCAISBy9tLzBrM3BAAUgBcAGCAQsI____________AZgBAQ',
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
      "content-security-policy": "script-src 'report-sample' 'nonce-rG9xWwDHOfDPrr2gBY9D3w' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/FlightsFrontendUi/cspreport;worker-src 'self' blob:, script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://maps.googleapis.com https://maps.googleapis.com/maps/ https://maps.googleapis.com/maps-api-v3/ https://adservice.google.com/ https://www.googleadservices.com/pagead/conversion_async.js https://www.googleadservices.com https://www.google.com/tools/feedback/ https://www.gstatic.com/feedback/js/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://support.google.com/inapp/;report-uri /_/FlightsFrontendUi/cspreport/allowlist;worker-src blob: 'self', require-trusted-types-for 'script';report-uri /_/FlightsFrontendUi/cspreport",
      "content-security-policy-report-only": "script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com/external_hosted/d3/v5/d3.min.js https://translate.google.com/translate_a/element.js https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://maps.googleapis.com/maps/api/js https://www.google.com/tools/feedback/chat_load.js https://www.google.com/tools/feedback/help_api.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.google.com/tools/feedback/open_to_help_guide_lazy.js https://www.gstatic.com/feedback/js/ https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.googletagmanager.com/gtag/js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/destination https://www.gstatic.com/_/mss/boq-travel/_/js/k=boq-travel.FlightsFrontendUi_desktop_ms.en.2AgMd3uDtdI.2021.O/ https://apis.google.com/_/scs/abc-static/_/js/ https://maps.googleapis.com/maps-api-v3/api/js/ https://maps.googleapis.com/maps/vt https://maps.googleapis.com/maps/api/js/ https://maps.googleapis.com/maps/api/place/js/ https://translate.googleapis.com/_/translate_http/_/js/;report-uri /_/FlightsFrontendUi/cspreport/fine-allowlist",
      "content-type": "text/html; charset=utf-8",
      "cross-origin-opener-policy": "same-origin-allow-popups",
      "cross-origin-resource-policy": "same-site",
      "date": "Fri, 27 Feb 2026 00:16:08 GMT",
      "expires": "Mon, 01 Jan 1990 00:00:00 GMT",
      "p3p": "CP=\"This is not a P3P policy! See g.co/p3phelp for more info.\"",
      "permissions-policy": "ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*",
      "pragma": "no-cache",
      "reporting-endpoints": "default=\"/_/FlightsFrontendUi/web-reports?context=eJwVz3tUVVUeB_CrfM_dqLhEExFtRoulCArCVUCNuwlf0xQgcOGee87ZO0SRxBDioQ5oYstoShQCRyZLyEiMh4KQNZZpIY9EYFS0wtGZ0hTS1IAaVhDS_OaPz9q_vdfvtcc3T_LycDL5kGCy5P_x-Bmm8HkzTD8GzTUFBs81FZA9PWGmzDnLTQt2PmuyuIebmGe4Kd473BQwaQ16lCjcSIhCxo4ovHo_Ct9lRyO-MBprSfTFaPg8ikYQueQdg8leNmRH2DAvwYaunTZ8n0txiQ0jx2yoa7chzDkWK8hKcoDAPxYiMhbPk7ZtsWgnHSTllViEusfhqkccBubGob8zDqFj7LjraceMMDv-EmXHi3F2PNhox-QMO35-2Y6j79ixqtyO-k47dvTYUTpqx0pXFU1uKnI8VbzpreKejwoRpmI92RShwhStYnaKio5sFUauiuE8FTcLVDRUqzhfq-LTOhWDZ1SEnFMR3KTiiSsqFtxWMf6-ii9JQ7-KoOkO-Hg4kO_lwPilDuxc7kBvkgOluxx4qdiB_UccmF7hQMhRB3qIrcGBRR86cKmF8rscKPqJaoYceGashqZxGspcNHxBkqdoWDxVg2WahlyycI4GvwUaxvlpOE5qSUGghm-Xaqh_WsPKKA1RqoalGzTEvqihbbOGdakaXNI1HMzScKVIw6PDGn74gN6rNCSSjeTXGg2bP9Mw7XMNvU0aQjo19FyhmHR9peHafzTc66M-f9CR_qSOZZ46niK1wTp8Y3TMNnR8uVnH6m06VFKWq-O7fB25JTqeqNBR1apj_nkd7e06Okhqhw7tho6QmzrcBnXcG9Lh52RAJc-TookGtJkG4r0N3CUJAQZaLAbeWGbgQIiBEvLBKgOBqw0kRhrwtBnYl2RgwmYD1aQxzcA5MivLwMQtBqa-YSBurwGnQgPr6gwUnqaeZwwYZw08aKU5nQairxmY02dg3O8G6pjAQy-BPuKxUKAjQKB7kUD1CoEacpycIp-Q0-QMOUum_FlgSbjAUrKMhBAvh0CUIZAYL2B-QWDFJoFDWwWOZgt45wj4klRSniew9a8Cg2SYNBYLtJI7hwSGSgVGDgt0vSeQ_r7A-gqBSVUCe2sFbtQJ9H4k4PKxwMEvBErJ9kYBrUmgv1ngwQWK2wV-I-UXaS7BZYH3vhK4_bVA5TcC07sF6kg9ufwvgeLrNPeGQNtNgbg7Av_oFVh-X6C2T8C5X2DbLwKTBwVGRwTyRwUeGyOxBhLVzhLHyE-kZYLEqItEzFSJhJkSWY9LPPqjxJJZEiFkO1nrKZFMhskn8yXsC6mWpAdIHCT9Fgn_pyQGSA2XqCP7QyXywyRiV0qcDqecGIkLmsQOXeIkcRMSf18vUZ8oMZQkMbhR4nKyRHCaxL50iZEM2otUZUl05kik5knMel3iHBF7JB4rkKgslviUnCXHSiV-I43vSpyokjhSI_HzqbeUb3PLlE27ypQDr5UpBe-XKUNtZcrE3jIl79o_lf1kS_lFZTfZQ94iAbO7lFCSMf2qsovcqryq1M3-RhnI6VZct3crscuvK7OmjTVnEq_Hx5q_bnIy3yH9ZJj8TkzNTubBzAgzsiLMt_8WaR4gc1uizIvJw_xoc3y7lflctLLTt6zscxL7vZWF91pZxA9W5nbXyjxI6I9W9hzx67Oyol-trIS0mTj7UOHsJGkmLaRuEmcfuXL2MTlFzhHnqZzpMznbSWLmcea-gLNpizhrDeTsnSDOSsnMYM7crJzNI3tDOdtHGldw5rqKs19Wc9b2J86ukKJnOKsn18neZzkrJC6RnE1Yw1kwWUNqiLuNs2LytMZZiUH1CZwpiZx1pNDsNM6yt3A2sJWzbdmcfUYu5NCeOzgbRyYQN-JOPMgMUkDuvsJZ9W7OGkh3Hme9ZJiMEtNr1PN1zl4muWRkH2eZhZz5vsnZ26SMjCnibO3bnP23lP7wLuUfoX0rOHuumrNIsq6Gsw0k8xhnh05wVt7AWSWpItEn6d7C2RGyuJWzh-c5O9xGJ1ncQf_qpLxLnNWSFjL_35xV3OJsiovz-ebdnWbXE5XHW8c-6bsuLT0-KyNh64YU36SMtNSsDamJvkkpyS9szMr03ZIcb_G3BPlbLIF-_pb4l_z_BxaAqwI\"",
      "server": "ESF",
      "vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-ua-compatible": "IE=edge",
      "x-xss-protection": "0",
      "connection": "close",
      "transfer-encoding": "chunked"
    },
    "body": "<!doctype html><html lang=\"en\" dir=\"ltr\"><head><base href=\"https://www.google.com.tw/\"><link rel=\"preconnect\" href=\"//www.gstatic.com\"><meta name=\"referrer\" content=\"strict-origin-when-cross-origin\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,interactive-widget=resizes-content\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"color-scheme\" content=\"light dark\"><meta name=\"google-site-verification\" content=\"sxp7zFOFUzk09RdlFhuH2SoCn5nOkXgomiLeLIQ48p0\"><meta name=\"google-site-verification\" content=\"uceYfkdbu7tdKGywiwSr1p0cIbqdYOwMDkNq5jVFwMA\"><meta name=\"google-site-verification\" content=\"O5G3B9VUIil1GEVlPw3BfdeYn_kZeNd_6rsDolHah5w\"><meta name=\"google-site-verification\" content=\"hU5-JhTB7DyiEACObYa4GcZxXOTY5FykMqegq9lCAqA\"><meta name=\"application-name\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-title\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-status-ba..."
  }
  ```
</ResponseExample>
