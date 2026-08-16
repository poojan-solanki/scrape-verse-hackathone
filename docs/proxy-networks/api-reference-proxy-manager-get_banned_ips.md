# Get banned IPs

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_banned_ips](https://docs.brightdata.com/api-reference/proxy-manager/get_banned_ips)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get Banned IPs. Calls GET /api/banlist/{PORT} on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/banlist/{PORT}`

<ParamField type="boolean">
  `full=true` parameter is optional and can be used to provide additional details about each entry in the ban-list
</ParamField>

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
      "ips": [
          "10.20.30.40",
          "50.60.70.80|example.com"
      ]
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/banlist/{PORT}?full=true"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/banlist/{PORT}?full=true');
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
       .execute(Request.Get("http://127.0.0.1:22999/api/banlist/{PORT}?full=true"))
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

       RequestUri = new Uri("http://127.0.0.1:22999/api/banlist/{PORT}?full=true")

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

   

  r = requests.get('http://127.0.0.1:22999/api/banlist/{PORT}?full=true')

  print(r.content)
  ```
</RequestExample>
