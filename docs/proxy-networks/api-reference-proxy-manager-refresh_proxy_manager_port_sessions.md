# Refresh Proxy Manager port session

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/refresh_proxy_manager_port_sessions](https://docs.brightdata.com/api-reference/proxy-manager/refresh_proxy_manager_port_sessions)
> **Category**: `proxy-networks`

---

Bright Data Proxy Manager API endpoint to refresh Proxy Manager Port Session. Endpoint: GET /api/refresh_sessions/{PORT} on port 22999.

**API endpoint:** `GET` `/api/refresh_sessions/{PORT}`

## Path Parameter

<ParamField type="string">
  Existing proxy port number
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/refresh_sessions/{PORT}"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/refresh_sessions/{PORT}');
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

       .execute(Request.Get("http://127.0.0.1:22999/api/refresh_sessions/{PORT}"))

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

       RequestUri = new Uri("http://127.0.0.1:22999/api/refresh_sessions/{PORT}")

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



  r = requests.get('http://127.0.0.1:22999/api/refresh_sessions/{PORT}')

  print(r.content)
  ```
</RequestExample>
