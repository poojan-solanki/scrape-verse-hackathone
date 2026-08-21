# Allowlist IPs to access UI

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/ui-allowlist-ips](https://docs.brightdata.com/api-reference/proxy-manager/ui-allowlist-ips)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to allowlist IPs to Access UI. Calls PUT /api/add_whitelist_ip on the local Proxy Manager port 22999.

**API endpoint:** `PUT` `/api/add_whitelist_ip`

<ParamField type="string">
  API key
  <Tip>API Key should be generated using [Generate API Key](/api-reference/proxy-manager/generate_token_for_token_based_authentication)</Tip>
</ParamField>

## `PUT` body

<ParamField type="string">
  IP to allowlist e.g. `ip="1.2.1.2"`
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl -X PUT "http://127.0.0.1:22999/api/add_whitelist_ip" -H "Authorization: API key" -H "Content-Type: application/json" -d '{"ip":"1.2.1.2"}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/add_whitelist_ip', {
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
      String res = Executor.newInstance()
        .addHeader("Authorization", "API key")
        .execute(Request.Put("http://127.0.0.1:22999/api/add_whitelist_ip")
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
        RequestUri = new Uri("http://127.0.0.1:22999/api/add_whitelist_ip"),
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
      'http://127.0.0.1:22999/api/add_whitelist_ip',
      data=json.dumps(data),
      headers=headers
  )

  print(r.content)
  ```
</RequestExample>
