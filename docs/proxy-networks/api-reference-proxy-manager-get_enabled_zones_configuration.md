# Get enabled zone's configuration

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_enabled_zones_configuration](https://docs.brightdata.com/api-reference/proxy-manager/get_enabled_zones_configuration)
> **Category**: `proxy-networks`

---

Bright Data Proxy Manager API endpoint to get enabled Zone's configuration. Calls GET /api/zones on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/zones`

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
      "name": "ZONE",
      "perm": "country ip route_all route_dedicated",
      "plan": {},
      "password":"password"
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/zones"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/zones');
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```java Java theme={null}
  package example;


  import org.apache.http.HttpHost;
  import org.apache.http.client.fluent.*;


  public class Example {

    public static void main(String[] args) throws Exception {

      String res = Executor.newInstance()

       .execute(Request.Get("http://127.0.0.1:22999/api/zones"))

       .returnContent().asString();

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
              Method = HttpMethod.Get,
              RequestUri = new Uri("http://127.0.0.1:22999/api/zones")
          };

      var response = await client.SendAsync(requestMessage);
      var responseString = await response.Content.ReadAsStringAsync();

      Console.WriteLine(responseString);
      }
  }
  ```

  ```python Python theme={null}
  #!/usr/bin/env python


  import requests


  r = requests.get('http://127.0.0.1:22999/api/zones')

  print(r.content)
  ```
</RequestExample>
