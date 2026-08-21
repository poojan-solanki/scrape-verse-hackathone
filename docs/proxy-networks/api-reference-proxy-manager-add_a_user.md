# Add a user

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/add_a_user](https://docs.brightdata.com/api-reference/proxy-manager/add_a_user)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to add a User. Updates the local Proxy Manager (default port 22999) configuration and returns a JSON status.

**API endpoint:** `POST` `/api/lpm_user`

## `POST` body

<ParamField type="string">
  User email address to add
</ParamField>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/lpm_user" -H "Content-Type: application/json" -d '{"email":"test@example.com"}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node
  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/lpm_user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'email':'test@example.com'}),
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

   String body = "{\"email\":\"test@example.com\"}";

   String res = Executor.newInstance()
   .execute(Request.Post("http://127.0.0.1:22999/api/lpm_user")
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

   RequestUri = new Uri("http://127.0.0.1:22999/api/lpm_user"),

   Content = new StringContent(JsonConvert.SerializeObject(new {

   email = "test@example.com"

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

  data = {'email':'test@example.com'}
  r = requests.post('http://127.0.0.1:22999/api/lpm_user', data=json.dumps(data))

  print(r.content)
  ```
</RequestExample>
