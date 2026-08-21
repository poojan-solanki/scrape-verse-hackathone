# Get allocated gIPs in a zone

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_allocated_gips_in_zone](https://docs.brightdata.com/api-reference/proxy-manager/get_allocated_gips_in_zone)
> **Category**: `proxy-networks`

---

Bright Data Proxy Manager API endpoint to get allocated gIPs in a zone. Endpoint: GET /api/allocated_vips on port 22999.

**API endpoint:** `GET` `/api/allocated_vips`

## Query Parameter

<ParamField type="string">
  Residential/Mobile exclusive zone name
</ParamField>

<ResponseExample>
  ```json Sample Response theme={null}
  {
      "ips": [
          "gIP_1",
          "gIP_2"
      ]
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/allocated_vips?zone=ZONE"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/allocated_vips?zone=ZONE');
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
       .execute(Request.Get("http://127.0.0.1:22999/api/allocated_vips?zone=ZONE"))
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
       RequestUri = new Uri("http://127.0.0.1:22999/api/allocated_vips?zone=ZONE")
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

   

  r = requests.get('http://127.0.0.1:22999/api/allocated_vips?zone=ZONE')

  print(r.content)
  ```
</RequestExample>
