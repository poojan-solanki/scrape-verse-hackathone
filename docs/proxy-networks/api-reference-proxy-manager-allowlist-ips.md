# Allowlist IPs

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/allowlist-ips](https://docs.brightdata.com/api-reference/proxy-manager/allowlist-ips)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to allowlist IPs. Updates the local Proxy Manager (default port 22999) configuration and returns a JSON status.

**API endpoint:** `PUT` `/api/wip`

<ParamField type="string">
  API key
  <Tip>API key should be generated using [Generate API key](/api-reference/proxy-manager/generate_token_for_token_based_authentication)</Tip>
</ParamField>

## `PUT` body

<ParamField type="string">
  IP to allowlist. e.g, `ip="1.2.1.2"`
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl -X PUT "http://127.0.0.1:22999/api/wip" -H "Authorization: API key" -H "Content-Type: application/json" -d '{"ip":"1.2.1.2"}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/wip', {
      method: 'PUT',
      headers: { 'Authorization': 'API key', 'Content-Type': 'application/json' },
      body: JSON.stringify({'ip':'1.2.1.2'}),
    });
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```java Java theme={null}
  package example;

  import org.apache.http.HttpHost;
  import org.apache.http.client.fluent.\*;

  public class Example {
    public static void main(String[] args) throws Exception {
      String body = "{\"ip\":\"1.2.1.2\"}";
      String res =Executor.newInstance()
        .addHeader("Authorization", "API key")
        .execute(Request.Put("http://127.0.0.1:22999/api/wip")
        .bodyString(body, ContentType.APPLICATION_JSON))
        .returnContent()
        .asString();

      System.out.println(res)
    }
  }
  ```

  ```cs C# theme={null}
  using System;
  using System.Net;
  using System.Net.Http;
  using System.Net.Http.Headers;


  public class Program {
    public static async Task Main() {
      var client = new HttpClient();
      var requestMessage = new HttpRequestMessage {
        Method = HttpMethod.Put,
        RequestUri = new Uri("http://127.0.0.1:22999/api/wip"),
        Headers = {{"Authorization", "API key"}},
        Content = new StringContent(JsonConvert.SerializeObject(new {
          ip = "1.2.1.2"
        }), Encoding.UTF8, "application/json")
      };

      var response = await client.SendAsync(requestMessage);
      var responseString = await response.Content.ReadAsStringAsync();

      Console.WriteLine(responseString);
    }
  }
  ```

  ```python Python theme={null}
  #!/usr/bin/env python

  import json
  import requests


  data = {'ip':'1.2.1.2'}
  headers = {'Authorization': 'API key'}

  r = requests.put(
    'http://127.0.0.1:22999/api/wip',
    data=json.dumps(data),
    headers=headers
  )

  print(r.content)
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={null}
  Successful response
  ```

  ```json 400 theme={null}
  Bad request. No IP was passed
  ```

  ```json 403 theme={null}
  Forbidden. No authentication provided
  ```

  ```json 422 theme={null}
  Unprocessable entity. Invalid IP was passed
  ```
</ResponseExample>
