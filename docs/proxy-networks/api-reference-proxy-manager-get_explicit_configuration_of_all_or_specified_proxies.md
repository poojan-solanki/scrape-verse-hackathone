# Get explicit config of proxies

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_explicit_configuration_of_all_or_specified_proxies](https://docs.brightdata.com/api-reference/proxy-manager/get_explicit_configuration_of_all_or_specified_proxies)
> **Category**: `proxy-networks`

---

Bright Data Proxy Manager API endpoint to get explicit config of proxies. Endpoint: GET /api/proxies/{PORT} on port 22999.

**API endpoint:** `GET` `/api/proxies/{PORT}`

<ParamField type="string">
  PORT parameter is optional. You can skip it to fetch all the proxies\*
</ParamField>

<ResponseExample>
  ```JSON Sample Response theme={null}
  [
      {"port": 24000,
      "zone": "ZONE",
      "proxy_type": "persist",
      "customer": "CUSTOMER",
      "password": "password",
      "whitelist_ips": []
      },
      {
          "port": 44445,
          "zone": "ZONE",
          "listen_port": 44445,
          "customer": "CUSTOMER",
          "password":"password"
      }
  ]
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxies/{PORT}"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies/{PORT}');
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

       .execute(Request.Get("http://127.0.0.1:22999/api/proxies/{PORT}"))

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

       RequestUri = new Uri("http://127.0.0.1:22999/api/proxies/{PORT}")

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

   

  r = requests.get('http://127.0.0.1:22999/api/proxies/{PORT}')

  print(r.content)
  ```
</RequestExample>
