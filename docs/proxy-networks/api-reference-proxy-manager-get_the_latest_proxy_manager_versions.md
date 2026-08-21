# Get the latest Proxy Manager (PM) version

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_the_latest_proxy_manager_versions](https://docs.brightdata.com/api-reference/proxy-manager/get_the_latest_proxy_manager_versions)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get the latest Proxy Manager (PM) version. Endpoint: GET /api/last_version on port 22999.

**API endpoint:** `GET` `/api/last_version`

<ResponseExample>
  ```json Sample Response theme={null}
  {
    "version": "1.280.385",
    "newer": false,
    "versions": [
      {
        "ver": "1.280.385",
        "type": "stable",
        "changes": [
          {
            "type": "star",
            "text": "Add render option for unblocker and serp zones"
          }
        ]
      }
    ]
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/last_version"
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node  
    
  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/last_version');
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
    
       .execute(Request.Get("http://127.0.0.1:22999/api/last_version"))  
    
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
    
       RequestUri = new Uri("http://127.0.0.1:22999/api/last_version")  
    
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

  r = requests.get('http://127.0.0.1:22999/api/last_version')  

  print(r.content)
  ```
</RequestExample>
