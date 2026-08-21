# Ban multiple IPs (array)

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/ban_ips_array_](https://docs.brightdata.com/api-reference/proxy-manager/ban_ips_array_)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to ban multiple IPs (array). Endpoint: POST /api/proxies/{PORT}/banips on port 22999.

**API endpoint:** `POST` `/api/proxies/{PORT}/banips`

## Path Parameter

<ParamField type="string">
  Existing proxy port number
</ParamField>

## `POST` body

<ParamField type="array">
  IPs to ban. e.g. \["10.0.0.1","20.0.0.1"]
</ParamField>

<ParamField type="string">
  Ban the IP for sending requests to the specified domain
</ParamField>

<ParamField type="integer">
  Ban the IP for specified milliseconds
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxies/{PORT}/banips" -H "Content-Type: application/json" -d '{"ips":["10.0.0.1","20.0.0.1"],"domain":"example.com","ms":60000}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node
  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies/{PORT}/banips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'ips':['10.0.0.1','20.0.0.1'],'domain':'example.com','ms':60000}),
    });
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```java Java theme={null}
  package example;


  import org.apache.http.HttpHost;
  import org.apache.http.client.fluent.\*;


  public class Example {

    public static void main(String[] args) throws Exception {

      String body = "{\"ips\":[\"10.0.0.1\",\"20.0.0.1\"],\"domain\":\"example.com\",\"ms\":60000}";
      String res = Executor.newInstance()
          .execute(Request.Post("http://127.0.0.1:22999/api/proxies/{PORT}/banips")
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
       RequestUri = new Uri("http://127.0.0.1:22999/api/proxies/{PORT}/banips"),
       Content = new StringContent(JsonConvert.SerializeObject(new {
         ips = [ "10.0.0.1","20.0.0.1" ],
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


  data = {'ips':['10.0.0.1','20.0.0.1'],'domain':'example.com','ms':60000}
  r = requests.post('http://127.0.0.1:22999/api/proxies/{PORT}/banips', data=json.dumps(data))

  print(r.content)
  ```
</RequestExample>
