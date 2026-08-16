# Unban an IP

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/unban_an_ip](https://docs.brightdata.com/api-reference/proxy-manager/unban_an_ip)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to unban an IP. Calls POST /api/proxies/{PORT}/unbanip on the local Proxy Manager port 22999.

**API endpoint:** `POST` `/api/proxies/{PORT}/unbanip`

## Path Parameter

<ParamField type="string">
  Existing proxy port number
</ParamField>

## `POST` body

<ParamField type="string">
  IP to unban. e.g. `ip="1.2.1.2"`
</ParamField>

<ParamField type="string">
  Unban the IP for sending requests to the specified domain.
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxies/{PORT}/unbanip" -H "Content-Type: application/json" -d '{"ip":"1.2.1.2","domain":"example.com"}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies/{PORT}/unbanip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
            'ip': '1.2.1.2',
            'domain': 'example.com'
        }),

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

     String body = "{\"ip\":\"1.2.1.2\",\"domain\":\"example.com\"}";

      String res = Executor.newInstance()

       .execute(Request.Post("http://127.0.0.1:22999/api/proxies/{PORT}/unbanip")

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

       RequestUri = new Uri("http://127.0.0.1:22999/api/proxies/{PORT}/unbanip"),

       Content = new StringContent(JsonConvert.SerializeObject(new {

         ip = "1.2.1.2",

         domain = "example.com"

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

   

  data = {'ip':'1.2.1.2','domain':'example.com'}

  r = requests.post('http://127.0.0.1:22999/api/proxies/{PORT}/unbanip', data=json.dumps(data))

  print(r.content)
  ```
</RequestExample>
