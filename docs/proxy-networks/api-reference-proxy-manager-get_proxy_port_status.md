# Get proxy port status

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_proxy_port_status](https://docs.brightdata.com/api-reference/proxy-manager/get_proxy_port_status)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get Proxy Port Status. Calls GET /api/proxy_status/{PORT} on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/proxy_status/{PORT}`

<ParamField type="string">
  Existing proxy port number
</ParamField>

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
      "status":"ok",
      "status_details":[]
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxy_status/{PORT}"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxy_status/{PORT}');
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

          String res = Executor.newInstance().execute(
              Request.Get("http://127.0.0.1:22999/api/proxy_status/{PORT}")
          ).returnContent().asString();

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
              RequestUri = new Uri("http://127.0.0.1:22999/api/proxy_status/{PORT}")
          };

          var response = await client.SendAsync(requestMessage);
          var responseString = await response.Content.ReadAsStringAsync();

          Console.WriteLine(responseString);

      }
  }
  ```

  ```python Python theme={null}
  #!/usr/bin/env python

  print('If you get error "ImportError: No module named requests", please install it:\n$ sudo pip install requests');

  import requests

  r = requests.get('http://127.0.0.1:22999/api/proxy_status/{PORT}')

  print(r.content)
  ```
</RequestExample>
