# Device type

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/device-type](https://docs.brightdata.com/api-reference/serp/google-hotels/device-type)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Device Type parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define what device type to be represented in user-agent

  Default or `brd_mobile=0` will provide random desktop user-agent while `brd_mobile=1` will provide random mobile user-agent.

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1
  ```

  **For specific mobile platform provide one of the following values:**

  | Parameter                   | Description                                     |
  | --------------------------- | ----------------------------------------------- |
  | `brd_mobile=ios`            | iPhone user-agent (alias `brd_mobile=iphone`)   |
  | `brd_mobile=ipad`           | iPad user-agent (alias `brd_mobile=ios_tablet`) |
  | `brd_mobile=android`        | Android phone                                   |
  | `brd_mobile=android_tablet` | Android tablet                                  |
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_mobile=1',
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
  ```json 200 theme={null}
  {
    "overview": {
      "type": "hotels",
      "title": "four seasons hotel new york downtown - Google Hotel Search",
      "requested": {
        "occupancy": 2,
        "number_of_adults": 2
      },
      "available": "unknown",
      "currency": "USD"
    }
  }
  ```
</ResponseExample>
