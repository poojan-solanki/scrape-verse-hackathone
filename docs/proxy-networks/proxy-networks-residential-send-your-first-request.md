# Send your first Residential proxy request

> **Official Source**: [https://docs.brightdata.com/proxy-networks/residential/send-your-first-request](https://docs.brightdata.com/proxy-networks/residential/send-your-first-request)
> **Category**: `proxy-networks`

---

Send your first request through Bright Data Residential proxies with copy-paste code examples in cURL, Python, Node.js, Java, and Go.

<Accordion title="This guide works for all the proxy products" icon="check">
  1. Residential Proxy
  2. Mobile Proxy
  3. ISP Proxy
  4. Datacenter Proxy
  5. SERP API
  6. Browser API
  7. Web Unlocker API
</Accordion>

To get started, you need your proxy credentials, your `Username` and `Password` along with the `Host` name. You can find these credentials in the **Overview** tab of the proxy product.

## Code Examples

Once you have your proxy credentials, use the following code to send your first request:

<CodeGroup>
  ```sh cURL theme={null}
  curl "http://brdtest.com/myip.json" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
  ```

  ```javascript Node.js theme={null}
  #!/usr/bin/env node

  const { ProxyAgent, setGlobalDispatcher } = require('undici');

  setGlobalDispatcher(new ProxyAgent('http://brd-customer-<customer_id>-zone-<zone_name>:<zone_password>@brd.superproxy.io:44445'));

  (async () => {
    const response = await fetch('http://brdtest.com/myip.json');
    console.log(await response.text());
  })();
  ```

  ```python Python theme={null}
  import pprint
  import requests


  host = 'brd.superproxy.io'
  port = 44445

  username = 'brd-customer-<customer_id>-zone-<zone_name>'
  password = '<zone_password>'

  proxy_url = f'http://{username}:{password}@{host}:{port}'

  proxies = {
      'http': proxy_url,
      'https': proxy_url
  }


  url = "http://brdtest.com/myip.json"
  response = requests.get(url, proxies=proxies)
  pprint.pprint(response.json())

  ```

  ```php PHP theme={null}

  <?php
  echo 'To enable your free eval account and get CUSTOMER, YOURZONE and '
      .'YOURPASS, please contact sales@brightdata.com';
  $curl = curl_init('http://brdtest.com/myip.json');
  curl_setopt($curl, CURLOPT_PROXY, 'http://brd.superproxy.io:44445');
  curl_setopt($curl, CURLOPT_PROXYUSERPWD, 'brd-customer-<customer_id>-zone-<zone_name>:<zone_password>');
  curl_exec($curl);
  ?>

  ```

  ```ruby Ruby theme={null}
  #!/usr/bin/ruby

  require 'uri'
  require 'net/http'
  require 'net/https'

  puts 'To enable your free eval account and get CUSTOMER, YOURZONE and YOURPASS, please contact sales@brightdata.com'

  uri = URI.parse('http://brdtest.com/myip.json')
  proxy = Net::HTTP::Proxy('brd.superproxy.io', 44445, 'brd-customer-<customer_id>-zone-<zone_name>', '<zone_password>')

  req = Net::HTTP::Get.new(uri)

  result = proxy.start(uri.host,uri.port, :use_ssl => uri.scheme == 'https') do |http|
      http.request(req)
  end

  puts result.body
  ```

  ```cs C# theme={null}
  using System;
  using System.Net;

  class Example {
    static void Main() {
      var client = new WebClient();
      client.Proxy = new WebProxy("brd.superproxy.io:44445");
      client.Proxy.Credentials = new NetworkCredential(
        "brd-customer-<customer_id>-zone-<zone_name>",
        "<zone_password>"
      );
      Console.WriteLine(client.DownloadString("http://brdtest.com/myip.json"));
    }
  }
  ```

  ```java Java theme={null}
  package example;

  import org.apache.http.HttpHost;
  import org.apache.http.client.fluent.*;

  public class Example {
      public static void main(String[] args) throws Exception {
          System.out.println("To enable your free eval account and get "
              +"CUSTOMER, YOURZONE and YOURPASS, please contact "
              +"sales@brightdata.com");
          HttpHost proxy = new HttpHost("brd.superproxy.io", 44445);
          String res = Executor.newInstance()
              .auth(proxy, "brd-customer-<customer_id>-zone-<zone_name>", "<zone_password>")
              .execute(Request.Get("http://brdtest.com/myip.json").viaProxy(proxy))
              .returnContent().asString();
          System.out.println(res);
      }
  }
  ```

  ```perl Perl theme={null}
  #!/usr/bin/perl

  print 'To enable your free eval account and get CUSTOMER, YOURZONE and '
      .'YOURPASS, please contact sales@brightdata.com';
  use LWP::UserAgent;
  my $agent = LWP::UserAgent->new();
  $agent->proxy(['http', 'https'], "http://brd-customer-<customer_id>-zone-<zone_name>:<zone_password>\@brd.superproxy.io:44445");
  print $agent->get('http://brdtest.com/myip.json')->content();
  ```

  ```vb VBA theme={null}
  Imports System.Net

  Module Module1
      Sub Main()
          Console.WriteLine("To enable your free eval account and get " & 
              "CUSTOMER, YOURZONE and YOURPASS, please contact " &
              "sales@brightdata.com")
          Dim Client As New WebClient
          Client.Proxy = New WebProxy("http://brd.superproxy.io:44445")
          Client.Proxy.Credentials = New NetworkCredential("brd-customer-<customer_id>-zone-<zone_name>", "<zone_password>")
          Console.WriteLine(Client.DownloadString("http://brdtest.com/myip.json"))
      End Sub
  End Module
  ```
</CodeGroup>

The code above uses the residential proxy to send a request to [http://brdtest.com/myip.json](http://brdtest.com/myip.json). It returns your IP information in a JSON format:

```json Output theme={null}
{
  "ip": "ALLOCATED_IP",
  "country": "PK",
  "asn": {
    "asnum": 203020,
    "org_name": "HostRoyale Technologies Pvt Ltd"
  },
  "geo": {
    "city": "Islamabad",
    "region": "IS",
    "region_name": "Islamabad",
    "postal_code": "44040",
    "latitude": 33.7233,
    "longitude": 73.0435,
    "tz": "Asia/Karachi",
    "lum_city": "islamabad",
    "lum_region": "is"
  }
}
```

Now, replace “[https://brdtest.com/myip.json”](https://brdtest.com/myip.json”) with the website of your choice and ...

**That's it!**
