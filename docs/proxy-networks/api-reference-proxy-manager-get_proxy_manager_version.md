# Get Proxy Manager version

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_proxy_manager_version](https://docs.brightdata.com/api-reference/proxy-manager/get_proxy_manager_version)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get Proxy Manager version. Calls GET /api/version on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/version`

<ResponseExample>
  ```json Sample Response theme={null}
  {
    "version":"1.280.385",
    "argv":""
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/version"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/version');
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

       .execute(Request.Get("http://127.0.0.1:22999/api/version"))

       .returnContent().asString();

      System.out.println(res)

    }

  }
  ```

  ```cs C#  theme={null}
  using System;
  using System.Net;
  using System.Net.Http;
  using System.Net.Http.Headers;

   

  public class Program {

    public static async Task Main() {

      var client = new HttpClient();

      var requestMessage = new HttpRequestMessage {

        Method = HttpMethod.Get,

       RequestUri = new Uri("http://127.0.0.1:22999/api/version")

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

  r = requests.get('http://127.0.0.1:22999/api/version')

  print(r.content)
  ```
</RequestExample>
