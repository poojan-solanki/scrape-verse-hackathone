# Delete a proxy port

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/delete_a_proxy_port](https://docs.brightdata.com/api-reference/proxy-manager/delete_a_proxy_port)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to delete a Proxy Port. Calls DELETE /api/proxies/{PORT} on the local Proxy Manager port 22999.

**API endpoint:** `DELETE` `/api/proxies/{PORT}`

## Path Parameter

<ParamField type="string">
  Existing proxy port number
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl -X DELETE "http://127.0.0.1:22999/api/proxies/{PORT}"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies/{PORT}', {
      method: 'DELETE',

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

       .execute(Request.Delete("http://127.0.0.1:22999/api/proxies/{PORT}"))

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

        Method = HttpMethod.Delete,

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

  r = requests.delete('http://127.0.0.1:22999/api/proxies/{PORT}')

  print(r.content)

  ```
</RequestExample>
