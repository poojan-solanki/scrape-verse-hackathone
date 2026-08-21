# Google Maps parsed JSON

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-maps/parsed-json](https://docs.brightdata.com/api-reference/serp/google-maps/parsed-json)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Maps Google Maps parsed JSON parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/maps/search/hotels+new+york/?brd_json=json
```

## Parameters

<ParamField type="string">
  The search path parameter. Specifies the keyword or phrase you want to search for on Google Maps.
</ParamField>

<ParamField type="string">
  Set the `brd_json` parameter to `json` to get the results in JSON format.

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york/?brd_json=json
  ```

  | value            | description                                                                                                         |
  | ---------------- | ------------------------------------------------------------------------------------------------------------------- |
  | `html` (default) | Returns the standard HTML response from Google Maps.                                                                |
  | `json`           | Returns the search results in a structured JSON format, making it easier to parse and extract specific data points. |
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/maps/search/hotels+new+york/?brd_json=json",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/maps/search/hotels+new+york/?brd_json=json"
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
        url: 'https://www.google.com/maps/search/hotels+new+york/?brd_json=json',
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
      'url': 'https://www.google.com/maps/search/hotels+new+york/?brd_json=json',
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
