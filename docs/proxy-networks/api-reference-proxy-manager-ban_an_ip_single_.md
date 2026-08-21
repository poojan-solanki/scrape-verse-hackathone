# Ban an IP

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/ban_an_ip_single_](https://docs.brightdata.com/api-reference/proxy-manager/ban_an_ip_single_)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to ban an IP. Calls POST /api/proxies/{PORT}/banip on the local Proxy Manager port 22999.

**API endpoint:** `POST` `/api/proxies/{PORT}/banip`

## Path Parameter

<ParamField type="string">
  Existing proxy port number
</ParamField>

## `POST` body

<ParamField type="string">
  IP to ban. e.g. `1.2.1.2`
</ParamField>

<ParamField type="string">
  Ban the IP for sending requests to the specified domain
</ParamField>

<ParamField type="integer">
  Ban the IP for specified milliseconds
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxies/{PORT}/banip" -H "Content-Type: application/json" -d '{"ip":"1.2.1.2","domain":"example.com","ms":60000}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies/{PORT}/banip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'ip':'1.2.1.2','domain':'example.com','ms':60000}),
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
     String body = "{\"ip\":\"1.2.1.2\",\"domain\":\"example.com\",\"ms\":60000}";
      String res = Executor.newInstance()
       .execute(Request.Post("http://127.0.0.1:22999/api/proxies/{PORT}/banip")
       .bodyString(body, ContentType.APPLICATION_JSON))
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
       RequestUri = new Uri("http://127.0.0.1:22999/api/proxies/{PORT}/banip"),
       Content = new StringContent(JsonConvert.SerializeObject(new {
         ip = "1.2.1.2",
         domain = "example.com",
         ms = 60000
       }), Encoding.UTF8, "application/json")
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
  import json


  data = {'ip':'1.2.1.2','domain':'example.com','ms':60000}
  r = requests.post('http://127.0.0.1:22999/api/proxies/{PORT}/banip', data=json.dumps(data))

  print(r.content)
  ```
</RequestExample>
