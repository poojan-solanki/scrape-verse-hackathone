# Google Maps pagination

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-maps/pagination](https://docs.brightdata.com/api-reference/serp/google-maps/pagination)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Maps Google Maps pagination parameter to refine queries and return matching results as JSON or HTML. On port 44445.

<Danger>
  **Pagination parameters deprecated on December, 15th 2025.**
</Danger>

```txt wrap theme={null}
https://www.google.com/maps/search/hotels+new+york/?start=20
```

## Parameters

<ParamField type="string">
  The search path parameter. Specifies the keyword or phrase you want to search for on Google Maps.
</ParamField>

<ParamField type="string">
  Define the result offset - results to start from the selected value. Used for managing pagination.

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york/?start=20
  ```
</ParamField>

<ParamField type="string">
  <Warning>
    **Deprecated As of September 11, 2025 by Google**

    * The Number of results to return is usually 10, results' set size may vary.
    * The `start` parameters can be used to paginate within results' set. 
    * To get top 100 results, Bright Data offes a Web Scraping API. Read more here: [Get top google 100 results in one API call](/scraping-automation/serp-api/get-top-100-google-results)
  </Warning>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/maps/search/hotels+new+york/?start=20",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/maps/search/hotels+new+york/?start=20"
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
        url: 'https://www.google.com/maps/search/hotels+new+york/?start=20',
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
      'url': 'https://www.google.com/maps/search/hotels+new+york/?start=20',
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
