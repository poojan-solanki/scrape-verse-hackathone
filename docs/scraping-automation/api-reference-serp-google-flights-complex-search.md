# Complex search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-flights/complex-search](https://docs.brightdata.com/api-reference/serp/google-flights/complex-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Flights Complex Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA
```

## Parameters

<ParamField type="string">
  String representing flight search parameters

  <Tip>
    You can perform a Complex search by adding filters (bags, stops, times, prices) on [Google Flights](https://www.google.com/travel/flights) and the `tfs` string will automatically update. You can then copy this updated `tfs` to reproduce the filtered search programmatically.
  </Tip>

  ```txt wrap theme={null}
  https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA"
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
        url: 'https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA',
        format: 'raw'
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
      'url': 'https://www.google.com/travel/flights/search?tfs=CBwQAhoxEgoyMDI2LTAzLTEwKAAyAkJBagsIAhIHL20vMGszcHIMCAISCC9tLzA0anBsmgEBAUABSAFg-ApqBBABGABwAYIBCwj___________8BmAEC&tfu=EgYIABAAGAA',
      'format': 'raw'
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
      "content-security-policy": "script-src 'report-sample' 'nonce-uGMnXxsGvj8gSKK09fkpOQ' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/FlightsFrontendUi/cspreport;worker-src 'self' blob:, script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://maps.googleapis.com https://maps.googleapis.com/maps/ https://maps.googleapis.com/maps-api-v3/ https://adservice.google.com/ https://www.googleadservices.com/pagead/conversion_async.js https://www.googleadservices.com https://www.google.com/tools/feedback/ https://www.gstatic.com/feedback/js/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://support.google.com/inapp/;report-uri /_/FlightsFrontendUi/cspreport/allowlist;worker-src blob: 'self', require-trusted-types-for 'script';report-uri /_/FlightsFrontendUi/cspreport",
      "content-security-policy-report-only": "script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.gstatic.com/external_hosted/d3/v5/d3.min.js https://translate.google.com/translate_a/element.js https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://maps.googleapis.com/maps/api/js https://www.google.com/tools/feedback/chat_load.js https://www.google.com/tools/feedback/help_api.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.google.com/tools/feedback/open_to_help_guide_lazy.js https://www.gstatic.com/feedback/js/ https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.googletagmanager.com/gtag/js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/destination https://www.gstatic.com/_/mss/boq-travel/_/js/k=boq-travel.FlightsFrontendUi_desktop_ms.en.2AgMd3uDtdI.2021.O/ https://apis.google.com/_/scs/abc-static/_/js/ https://maps.googleapis.com/maps-api-v3/api/js/ https://maps.googleapis.com/maps/vt https://maps.googleapis.com/maps/api/js/ https://maps.googleapis.com/maps/api/place/js/ https://translate.googleapis.com/_/translate_http/_/js/;report-uri /_/FlightsFrontendUi/cspreport/fine-allowlist",
      "content-type": "text/html; charset=utf-8",
      "cross-origin-opener-policy": "same-origin-allow-popups",
      "cross-origin-resource-policy": "same-site",
      "date": "Fri, 27 Feb 2026 00:40:12 GMT",
      "expires": "Mon, 01 Jan 1990 00:00:00 GMT",
      "p3p": "CP=\"This is not a P3P policy! See g.co/p3phelp for more info.\"",
      "permissions-policy": "ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*",
      "pragma": "no-cache",
      "reporting-endpoints": "default=\"/_/FlightsFrontendUi/web-reports?context=eJwVzntYVVUaBvCjvOcsLzRe8oY2o8aTiIniUSSMs5Q0pwsqcODss_deKySV1BAEUUMN7HFovJM0mjbCGHlFg7DLWKaphIbAoGim5eQ1CNNCanjSUOftj9_zfXt9a73f7rKyW0hQgGMYRf5Ru_R3TB7a3_Hj2CGOiMghjvVU2zzBsboxxjE89zmHu2-sQwTHOpJDYx2juk1DozMOF1PikLUsDn-7GYfLOfFILojHdPLWx2PYvXiMpVOhCegR4kXOFC-GpnjRkOvFtTz2m7xo3-dFeY0XlymmUyIm0iTaSAhPhJqaiBeoenEiaqiW0l5LxPi-STgblITWIUm4XZeE8R18aA72oX-MD6_E-fBykg-3ZvvQI8uHX171Yec_fXi6xIeKOh-WNfpQdN-HSd0NVPY2sCTYwBuhBm4MM6BiDMyguVMMOOINDEozUJtjwM4zcDffwJX1BvaXGviyzMCn5QbaDhmIPmYgstLA4DMGhl830OWmgRM0tp8fw4L8WBPiR5coP3Kf8qMp1Y-i5X7ML_Tjze1-9NvhR_ROPxrJu9-P0R_4caqK9xt4_44fz3Q0UdnZRHGgiSM0p6eJMb1MuPuYyKMRw010HmHiPSqj9REmLkWZqJhgYlKciTjDRNQsE4kvm6ieZ-LFdBOBmSa2ZJs4s8HEvW0mftjF8z0mZtJs-m2viXmfmejzuYmmShPRdSYaz7Cnhq9MXPjOxI0W5vzZQuajFsYFW3iSyiIthCVYGGRbODHPwuTFFgwqzrNweY2FvE0WBu-wsOe4hce_tFBTY6GW0mstmBctRF-x0LvNwo07FkYE2DDoBdrwkA1zgI3kUBvNlDLKRpXbxqpxNjZG29hEu562ETHZxsypNoK9Ntal2ug6z0YpHc2wcYwGZtt4aKGNXqtsJK21EVBgo-Ag8w7ZsA_buHWcO-psxF-w8ViLjc4PbJQLhZ9CFFooaKTC-dEKpRMV9tJ7dIA-oYN0iA5Tz2cVnohViKJxFE3zkxRC_ApxtsLyZAXXSwoT5ypsXaSwM0chdIlCGKVTSb7Cor8rtNFdOlqocJy-36pwp0ihfZtCwzsKme8qzNih0G2PwsVyhaaPFAI_VthyRKGIlh5VMCsVbn-hcOsk-xqF36mknjsJpxXe-Urh-jmF3V8r9DuvUE4VdPobhcJvufOiQvUVhX83KTx1U6GsRaHTbYXFvyr0aFO4366w5r7Cwx00noXGNCrtpLGPfqaqrhoPAjUSemmkDNB45RGNe3_ReGKgRjQtpajBGtODNe7SJ49r-EbyLWWO0thCt90a4U9qtNJeqVFOb43XWBOjcTCW8wSNk6bGh5ZGb8XZDI2KmRp3UjXaZmucnqMRmaHRTOsyNdqzNO7TnmyNuiUa6fkaA1dqHCO1WuPh9Rq7CzU-pcO0s0jjdzr6L43tezW-fV_jO7pErQc2Oy_lFTvnLi92rn-32Jl_4T_ON2lhSb1zBa2mzTRqUINzPGX1O-tcTld3n3WWD_ra2brkvLP70vPOtD4dXSGPdHSdqwxwfU8tdJfuU9uCKS5kT3Fd_8dUVysNqYpzjaGf18S7cjfGu5JrPGJYvUd0uOIRu-jgVY_4nBKueURsE-sPHtG72SOCSP7oEc_TiBaP2PCbR2yiaocUXzilqKLyblJ81F2Kj-kAHaPA_lL8ibpTD7IGSJFLCUOl6DtcitVuKT6gPqOZESFFb48Ua8dLsY6OTJTi18lS1P1VirO04RkpKugbWvucFAXUdZoUkTSN9lKQV4pCmmBK8ZZNyVK8Pp3_mCKFc6YUtWnclSFFzkIpWhex5kjxGZ1cwu-lUvxC_6MH1GGZFAEEKqDm16QoXSHFfmrKZ87rfL9SilcpjzJWSdG-jmcFUoS9IcXbVExXC6W4RtPfZnYR59ulWLBPisZyKba-L8X2_VLEfyhFSRV7GnNcip-qWWulGHlKinBy02jaQ2V0gob-V4odV6XoGdjpZv2KOlf35ec2b-v4aNiLGZnJ2Vkpi2alhaVmZaRnz0qfGZaaNuel2dkLwhbOSXaHu8eGu90RI8LdyfPD_w9O0pwX\"",
      "server": "ESF",
      "vary": "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-ua-compatible": "IE=edge",
      "x-xss-protection": "0",
      "connection": "close",
      "transfer-encoding": "chunked"
    },
    "body": "<!doctype html><html lang=\"en\" dir=\"ltr\"><head><base href=\"https://www.google.com.au/\"><link rel=\"preconnect\" href=\"//www.gstatic.com\"><meta name=\"referrer\" content=\"strict-origin-when-cross-origin\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,interactive-widget=resizes-content\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"color-scheme\" content=\"light dark\"><meta name=\"google-site-verification\" content=\"sxp7zFOFUzk09RdlFhuH2SoCn5nOkXgomiLeLIQ48p0\"><meta name=\"google-site-verification\" content=\"uceYfkdbu7tdKGywiwSr1p0cIbqdYOwMDkNq5jVFwMA\"><meta name=\"google-site-verification\" content=\"O5G3B9VUIil1GEVlPw3BfdeYn_kZeNd_6rsDolHah5w\"><meta name=\"google-site-verification\" content=\"hU5-JhTB7DyiEACObYa4GcZxXOTY5FykMqegq9lCAqA\"><meta name=\"application-name\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-title\" content=\"Google Flights\"><meta name=\"apple-mobile-web-app-status-ba..."
  }
  ```
</ResponseExample>
