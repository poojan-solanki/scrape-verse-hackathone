# Restart Proxy Manager

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/restart_proxy_manager](https://docs.brightdata.com/api-reference/proxy-manager/restart_proxy_manager)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to restart Proxy Manager. Calls POST /api/restart on the local Proxy Manager port 22999.

**API endpoint:** `POST` `/api/restart`

<RequestExample>
  ```sh Shell theme={null}
  curl -X POST "http://127.0.0.1:22999/api/restart"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/restart', {
      method: 'POST',

    });
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

       .execute(Request.Post("http://127.0.0.1:22999/api/restart"))

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

        Method = HttpMethod.Post,

       RequestUri = new Uri("http://127.0.0.1:22999/api/restart")

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


  r = requests.post('http://127.0.0.1:22999/api/restart')

  print(r.content)
  ```
</RequestExample>
