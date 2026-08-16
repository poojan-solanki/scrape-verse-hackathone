# Google Maps localization

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-maps/localization](https://docs.brightdata.com/api-reference/serp/google-maps/localization)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Maps Google Maps localization parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/maps/search/hotels+new+york/&gl=us&hl=en
```

## Parameters

<ParamField type="string">
  The search path parameter. Specifies the keyword or phrase you want to search for on Google Maps.
</ParamField>

<ParamField type="string">
  Two-letter country code used to define the country of search

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york/?gl=us
  ```
</ParamField>

<ParamField type="string">
  Two-letter language code used to define the page languages

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york/?hl=en
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/maps/search/hotels+new+york/&gl=us&hl=en",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/maps/search/hotels+new+york/&gl=us&hl=en"
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
        url: 'https://www.google.com/maps/search/hotels+new+york/&gl=us&hl=en',
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
      'url': 'https://www.google.com/maps/search/hotels+new+york/&gl=us&hl=en',
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
