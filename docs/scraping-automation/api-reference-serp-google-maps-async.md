# Google Maps async request

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-maps/async](https://docs.brightdata.com/api-reference/serp/google-maps/async)
> **Category**: `scraping-automation`

---

Use the Bright Data Google Maps async endpoint (31 languages). Submit a request, poll the job ID and retrieve results as JSON with 200 OK on success.

```txt wrap theme={null}
https://www.google.com/maps/search/hotels+new+york
```

<ParamField type="boolean">
  Set `async=true` in the request URL to enable asynchronous requests.

  ```txt wrap theme={null}
  https://api.brightdata.com/request?async=true
  ```
</ParamField>

## Parameters

<ParamField type="string">
  The search path parameter. Specifies the keyword or phrase you want to search for on Google Maps.

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={1} theme={null}
    curl -X POST https://api.brightdata.com/request?async=true \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/maps/search/hotels+new+york",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl -i --silent --compressed \
    -H "Content-Type: application/json"
    -H "Authorization: Bearer API_KEY" \
    -d $'{"country":"us","query":{"q":"pizza"}}'
    "https://api.brightdata.com/serp/req?customer=CUSTOMER_USERNAME&zone=ZONE_NAME"
  ```

  ```js Node.js highlight={2} theme={null}
  (async () => {
    const response = await fetch('https://api.brightdata.com/request?async=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY'
      },
      body: JSON.stringify({
        zone: 'serp_api1',
        url: 'https://www.google.com/maps/search/hotels+new+york',
        format: 'raw'
      })
    });
    
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```python Python highlight={17} theme={null}
  import requests

  # API Configuration
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY',
  }

  payload = {
      'zone': 'serp_api1',
      'url': 'https://www.google.com/maps/search/hotels+new+york',
      'format': 'raw'
  }

  # Make the request
  response = requests.post(
      'https://api.brightdata.com/request?async=true', 
      json=payload, 
      headers=headers
  )

  print(response.text)
  ```
</RequestExample>
