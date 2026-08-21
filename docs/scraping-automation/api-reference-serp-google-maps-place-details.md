# Place details

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-maps/place-details](https://docs.brightdata.com/api-reference/serp/google-maps/place-details)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Maps Place Details parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a
```

## Parameters

<ParamField type="string">
  The search path parameter. Specifies the keyword or phrase you want to search for on Google Maps.
</ParamField>

<ParamField type="string">
  Get the results of a Google Maps Place by `fid`.

  ```txt wrap theme={null}
  http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a"
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
        url: 'http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a',
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
      'url': 'http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a',
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
