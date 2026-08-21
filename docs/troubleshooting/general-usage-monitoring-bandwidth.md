# Bandwidth

> **Official Source**: [https://docs.brightdata.com/general/usage-monitoring/bandwidth](https://docs.brightdata.com/general/usage-monitoring/bandwidth)
> **Category**: `troubleshooting`

---

How Bright Data calculates bandwidth usage, including request and response headers, POST data, and how trial traffic is tracked and billed.

<AccordionGroup>
  <Accordion title="How is Bandwidth calculated?">
    The bandwidth is calculated according to the sum of data transmitted to and from the target site: request headers + request data (POST) + response headers+response data.\\

    <Note>
      The traffic used during your trial will be listed on your dashboard but will not be counted towards your bill.
    </Note>
  </Accordion>

  <Accordion title="How to get bandwith stats for a Zone">
    API endpoint: `GET /api/zone/bw`

    Optional parameters: `from=2018-07-01T00:00:00&to=2018-07-02T00:00:00`

    <CodeGroup>
      ```sh Shell theme={null}
      curl "https://api.brightdata.com/zone/bw?zone=ZONE" -H "Authorization: Bearer API_KEY"
      ```

      ```js Node.js theme={null}
      #!/usr/bin/env node

      (async () => {
        const response = await fetch('https://api.brightdata.com/zone/bw?zone=ZONE', {
          headers: { 'Authorization': 'Bearer API_KEY' },
        });
        console.log(await response.text());
      })();
      ```

      ```java Java theme={null}
      package example;

      import org.apache.http.HttpHost;
      import org.apache.http.client.fluent.\*;

      public class Example {
        public static void main(String[] args) throws Exception {
          String res = Executor.newInstance()
            .addHeader("Authorization", "Bearer API_KEY")
            .execute(Request.Get("https://api.brightdata.com/zone/bw?zone=ZONE"))
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
              RequestUri = new Uri("https://api.brightdata.com/zone/bw?zone=ZONE"),
              Headers = {
                {
                  "Authorization",
                  "Bearer API_KEY"
                }
              }
          };
          var response = await client.SendAsync(requestMessage);
          var responseString = await response.Content.ReadAsStringAsync();
          Console.WriteLine(responseString);
        }
      }
      ```

      ```python Python theme={null}
      #!/usr/bin/env python
      print(
          'If you get error "ImportError: No module named requests",',
          'please install it:\n$ sudo pip install requests'
      )
      import requests

      headers = {'Authorization': 'Bearer API_KEY'}

      r = requests.get(
          'https://api.brightdata.com/zone/bw?zone=ZONE',
          headers=headers
      )

      print(r.content)
      ```
    </CodeGroup>

    ```json Sample Response theme={null}
    {
      "ID:": {
        "customer_id": "customer_id",
        "from": "2022-10-01T00:00:00.000Z",
        "to": "2022-11-23T00:00:00.000Z",
        "data": {
          "static": {
            "bw_sum": [
                0, 745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "bw_dn": [
                0, 525, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5990, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "bw_up": [
                0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 970, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "http_direct_req": [
                0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "bw_sum_dc": [
                0, 745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "bw_api": [
                0, 745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
            "https_direct_req": [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]
          }
        },
        "last_value_ts": "2022-11-19T19:1* Connection #0 to host brightdata.com left intact 8:51.546Z",
        "last_update_ts": "2022-11-22T11:35:32.122Z",
        "sums": {
          "static": {
            "back_m1": {
              "bw_sum": 745,
              "bw_dn": 525,
              "bw_up": 220,
              "http_direct_req": 1,
              "bw_sum_dc": 745,
              "bw_api": 745,
              "https_direct_req": 0
            },
            "back_m0": {
              "bw_sum": 6960,
              "bw_dn": 5990,
              "bw_up": 970,
              "http_direct_req": 0,
              "bw_sum_dc": 6960,
              "bw_api": 6960,
              "https_direct_req": 1
            },
            "back_d2": {
              "bw_sum": 0,
              "bw_dn": 0,
              "bw_up": 0,
              "http_direct_req": 0,
              "bw_sum_dc": 0,
              "bw_api": 0,
              "https_direct_req": 0
            },
            "back_d1": {
              "bw_sum": 0,
              "bw_dn": 0,
              "bw_up": 0,
              "http_direct_req": 0,
              "bw_sum_dc": 0,
              "bw_api": 0,
              "https_direct_req": 0
            },
            "back_d0": {
              "bw_sum": 0,
              "bw_dn": 0,
              "bw_up": 0,
              "http_direct_req": 0,
              "bw_sum_dc": 0,
              "bw_api": 0,
              "https_direct_req": 0
            }
          }
        }
      }
    }
    ```
  </Accordion>

  <Accordion title="How to get bandwith stats for all the Zones">
    API endpoint: `GET /api/customer/bw`

    Optional parameters: `from=2018-07-01T00:00:00&to=2018-07-02T00:00:00`

    <CodeGroup>
      ```sh Shell theme={null}
      curl "https://api.brightdata.com/customer/bw" -H "Authorization: Bearer API_KEY"
      ```

      ```js Node.js theme={null}
      #!/usr/bin/env node

      (async () => {
        const response = await fetch('https://api.brightdata.com/customer/bw', {
          headers: { 'Authorization': 'Bearer API_KEY' },
        });
        console.log(await response.text());
      })();
      ```

      ```java Java theme={null}
      package example;
      import org.apache.http.HttpHost;
      import org.apache.http.client.fluent.\*;
      public class Example {
       public static void main(String[] args) throws Exception {
       String res = Executor.newInstance()
       .addHeader("Authorization", "Bearer API_KEY")  
       .execute(Request.Get("https://api.brightdata.com/customer/bw"))  
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
       RequestUri = new Uri("https://api.brightdata.com/customer/bw"),
       Headers = {
       {"Authorization", "Bearer API_KEY"}
       }
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
      headers = {'Authorization': 'Bearer API_KEY'}
      r = requests.get('https://api.brightdata.com/customer/bw', headers=headers)
      print(r.content)
      ```
    </CodeGroup>
  </Accordion>

  <Accordion title="How to get bandwidth and total cost for a Zone">
    API endpoint: `GET /api/zone/cost`

    Optional parameters: `from=2018-07-01T00:00:00&to=2018-07-02T00:00:00`

    <CodeGroup>
      ```sh Shell theme={null}
      curl "https://api.brightdata.com/zone/cost?zone=ZONE" -H "Authorization: Bearer API_KEY"
      ```

      ```js Node.js theme={null}
      #!/usr/bin/env node

      (async () => {
        const response = await fetch('https://api.brightdata.com/zone/cost?zone=ZONE', {
          headers: { 'Authorization': 'Bearer API_KEY' },
        });
        console.log(await response.text());
      })();
      ```

      ```java Java theme={null}
      package example;
      import org.apache.http.HttpHost;
      import org.apache.http.client.fluent.\*;
      public class Example {
       public static void main(String[] args) throws Exception {
       String res = Executor.newInstance()
       .addHeader("Authorization", "Bearer API_KEY")  
       .execute(Request.Get("https://api.brightdata.com/zone/cost?zone=ZONE"))  
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
       RequestUri = new Uri("https://api.brightdata.com/zone/cost?zone=ZONE"),
       Headers = {
       {"Authorization", "Bearer API_KEY"}
       }
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
      headers = {'Authorization': 'Bearer API_KEY'}
      r = requests.get('https://api.brightdata.com/zone/cost?zone=ZONE', headers=headers)
      print(r.content)
      ```
    </CodeGroup>

    ```JSON Sample Response theme={null}
    Example response:  
    {
      "ID": {
        "back_m2": {
          "bw": 0,
          "cost": 0
        },
        "back_m1": {
          "bw": 36557298,
          "cost": 0
        },
        "back_m0": {
          "bw": 1219004,
          "cost": 0
        },
        "back_d2": {
          "bw": 82190,
          "cost": 0
        },
        "back_d1": {
          "bw": 0,
          "cost": 0
        },
        "back_d0": {
          "bw": 0,
          "cost": 0
        }
      }
    }
    ```
  </Accordion>
</AccordionGroup>
