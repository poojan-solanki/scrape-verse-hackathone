# Generate API key

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/generate_token_for_token_based_authentication](https://docs.brightdata.com/api-reference/proxy-manager/generate_token_for_token_based_authentication)
> **Category**: `proxy-networks`

---

Generate a Bright Data Proxy Manager API key for token-based authentication. Endpoint: GET /api/gen_token on port 22999.

**API endpoint:** `GET` `/api/gen_token`

<ResponseExample>
  ```json Sample Response theme={null}
  {
      "token": "RZD9vaQQaL6En7"
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/gen_token"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/gen_token');
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

       .execute(Request.Get("http://127.0.0.1:22999/api/gen_token"))

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
              RequestUri = new Uri("http://127.0.0.1:22999/api/gen_token")
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


  r = requests.get('http://127.0.0.1:22999/api/gen_token')

  print(r.content)
  ```
</RequestExample>
