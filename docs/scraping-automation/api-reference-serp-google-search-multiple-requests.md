# Multiple requests

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/multiple-requests](https://docs.brightdata.com/api-reference/serp/google-search/multiple-requests)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search multiple requests parameter (31 languages) to refine queries and return matching results as JSON or HTML.

```json theme={null}
"multi":[
  {
    "query":{"q":"pizza","num":20}},
    {"query":{"q":"pizza","num":100}
  }
]
```

<Note>
  Please note that parallel requests work only with async mode.
</Note>

## Parameters

<ParamField type="string">
  Make parallel requests through our API server using POST request.

  Parallel requests will be using the same peer and session and can be used for comparison tests, i.e. making an identical pair of requests with 2 different values for a selected parameter

  <CodeGroup>
    ```js Same Keywords with different num theme={null}
    multi=[
      {"query":{"q":"pizza","num":20}},
      {"query":{"q":"pizza","num":100}}
    ]
    ```

    ```js Different Keywords theme={null}
    multi=[
      {"query":{"q":"pizza"}},
      {"query":{"q":"burger"}}
    ]
    ```
  </CodeGroup>
</ParamField>

<RequestExample>
  ```shell cURL highlight={5} theme={null}
  curl --request POST \
    --url https://api.brightdata.com/serp/req?zone=serp_api1 \
    --header 'Authorization: Bearer <token>' \
    --header 'Content-Type: application/json' \
    --data '{"country": "US","multi":[{"query":{"q":"pizza","num":20}},{"query":{"q":"pizza","num":100}}]}'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl -i --silent --compressed \
    -H "Content-Type: application/json"
    -H "Authorization: Bearer API_KEY" \
    -d $'{"country":"us","multi":[{"query":{"q":"pizza","num":20}},{"query":{"q":"pizza","num":100}}]}'
    "https://api.brightdata.com/serp/req?customer=CUSTOMER_USERNAME&zone=ZONE_NAME"
  ```

  ```js Node.js highlight={10} theme={null}
  const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: {q: 'pizza', gl: 'au', hl: 'en', start: 20},
      country: 'US',
      multi: [{"query":{"q":"pizza","num":20}},{"query":{"q":"pizza","num":100}}]
    })
  };

  fetch('https://api.brightdata.com/serp/req?zone=serp_api1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  ```

  ```python Python highlight={11} theme={null}
  import requests

  url = "https://api.brightdata.com/serp/req?zone=serp_api1"

  payload = {
      "multi": [{"query":{"q":"pizza","num":20}},{"query":{"q":"pizza","num":100}}],
      "country": "US",
      "brd_json": "json"
  }

  headers = {
      "Authorization": "Bearer <token>",
      "Content-Type": "application/json"
  }

  response = requests.post(url, json=payload, headers=headers)

  print(response.text)
  ```
</RequestExample>
