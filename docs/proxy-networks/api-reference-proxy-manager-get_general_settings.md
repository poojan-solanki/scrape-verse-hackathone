# Get general settings

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_general_settings](https://docs.brightdata.com/api-reference/proxy-manager/get_general_settings)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get general settings. Calls GET /api/settings on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/settings`

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
      "customer": "CUSTOMER",
      "zone": "ZONE",
      "password": "password",
      "www_whitelist_ips": [],
      "whitelist_ips": [],
      "fixed_whitelist_ips": [],
      "read_only": false,
      "config": "/home/user/proxy_manager/.luminati.json",
      "test_url":"http://brdtest.com/myip.json",
      "logs":1000,
      "log":"notice",
      "har_limit": 1024,
      "request_stats": true,
      "dropin": true,
      "pending_ips": [],
      "pending_www_ips": [],
      "zagent": false,
      "sync_config": true
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/settings"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/settings');
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
       .execute(Request.Get("http://127.0.0.1:22999/api/settings"))
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

       RequestUri = new Uri("http://127.0.0.1:22999/api/settings")

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

   

  r = requests.get('http://127.0.0.1:22999/api/settings')

  print(r.content)
  ```
</RequestExample>
