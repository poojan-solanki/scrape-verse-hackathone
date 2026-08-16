# Search by image

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/search-by-image](https://docs.brightdata.com/api-reference/serp/google-search/search-by-image)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Search by Image parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1
```

## Parameters

<ParamField type="string">
  The URL of the image to use for the reverse image search.

  ```txt wrap theme={null}
  https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg
  ```
</ParamField>

<ParamField type="string">
  Download image on the proxy side and post it to google using POST request

  > **Default behavior:** download-and-post if google isn't able to download the image

  | Value        | Description                            |
  | ------------ | -------------------------------------- |
  | `download=1` | Force download-and-post image          |
  | `download=0` | Use regular GET request with image URL |

  ```txt wrap theme={null}
  https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1"
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
        url: 'https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1',
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
      'url': 'https://www.google.com/searchbyimage?image_url=https%3A%2F%2Flive.staticflickr.com%2F213%2F491726079_4f46636859_w.jpg&download=1',
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
