# Get all users

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_all_users](https://docs.brightdata.com/api-reference/proxy-manager/get_all_users)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get all users. Updates the local Proxy Manager (default port 22999) configuration and returns a JSON status.

**API endpoint:** `GET` `/api/lpm_users`

<ResponseExample>
  ```JSON Sample Response theme={null}
  [
      {
          "email": "test@example.com",
          "password":"password"
      }
  ]
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/lpm_users"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/lpm_users');
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
          Request.Get("http://127.0.0.1:22999/api/lpm_users")
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
              RequestUri = new Uri("http://127.0.0.1:22999/api/lpm_users")
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


  r = requests.get('http://127.0.0.1:22999/api/lpm_users')

  print(r.content)
  ```
</RequestExample>
