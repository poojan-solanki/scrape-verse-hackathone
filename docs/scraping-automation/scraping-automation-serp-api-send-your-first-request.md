# Send your first SERP API request

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/send-your-first-request](https://docs.brightdata.com/scraping-automation/serp-api/send-your-first-request)
> **Category**: `scraping-automation`

---

Step-by-step guide to sending your first SERP API request, with copy-paste curl examples for HTTP and SOCKS5 proxy interfaces.

## Make your first request in minutes

Test the SERP API in minutes with this ready-to-use code example.

<CardGroup>
  <Card title="Postman Example" icon="user-astronaut" href="https://www.postman.com/bright-data-api/bright-data-api/request/kpq952m/google-search" />

  <Card title="Node.js Example" icon="code" href="https://github.com/luminati-io/bright-data-serp-api-nodejs-project" />

  <Card title="Python Example" icon="code" href="https://github.com/luminati-io/bright-data-web-unlocker-python-project" />
</CardGroup>

Bright Data offers two methods for accessing SERP API, both delivering **identical** results while catering to different customer workflows:

<CardGroup>
  <Card title="Direct API access (recommended)" href="/scraping-automation/serp-api/send-your-first-request#direct-api-access-recommended">
    A pure REST API method for easy access and straightforward integration.
  </Card>

  <Card title="Native proxy-based access" href="/scraping-automation/serp-api/send-your-first-request#native-proxy-based-access">
    For workflows that rely on proxy-based routing.
  </Card>
</CardGroup>

## Direct API access (recommended)

A simple and RESTful way to interact with Bright Data's SERP API. Direct API access abstracts proxy management and allows you to send requests via a central endpoint, ensuring ease of use and straightforward REST API integration.

### When to use direct API access

* Centralized endpoint: Access SERP API via a single, RESTful endpoint.
* Streamlined direct integration: Eliminating the complexity of managing proxies or routing.
* Single API key authentication: Secure and easy to use, replacing the need for username-password management.

### Sending your first request

After [setting up](/scraping-automation/serp-api/quickstart) your SERP API zone, you'll find a working SERP API request example and your API key within your zone's **Overview** tab:

<Frame>
  <img alt="SERP API Overview tab" />
</Frame>

The following is an example of a simple SERP API cURL request:

```sh Direct API access - cURL theme={null}

curl -H "Content-Type: application/json" -H "Authorization: Bearer [INSERT_YOUR_API_KEY]" -d '{"zone": "[INSERT_YOUR_SERP_API_ZONE_NAME]","url": "[INSERT_YOUR_TARGET_URL]", "format": "raw"}' https://api.brightdata.com/request
```

### Request breakdown

1. API Endpoint: [`https://api.brightdata.com/request`](https://api.brightdata.com/request)
2. Authorization Header: `Authorization: Bearer [INSERT YOUR API key]`
   * Your API key is found within your SERP API zone.
3. Payload:
   * `zone`: Your specific SERP API **zone name**.
   * `url`: The full SERP target URL (including SERP query params) that you wish to access via SERP API.
   * `format`: Defines the response format. Use `raw` to receive the raw response from the target site.

### Generating your Bright Data API key

A Bright Data API key is your secure authentication token for accessing SERP API via Direct API access. When adding a new SERP API zone in the [control panel](https://brightdata.com/cp/web_access), an API key will be generated automatically and can be found within the **Overview** tab of your zone.

<Frame>
  <img alt="SERP API key" />
</Frame>

**To generate a new API key:**

* Navigate to [Account settings](https://brightdata.com/cp/setting/users).
* Scroll down and click the Add API key button.
* Follow the on-screen instructions to complete the process.

<Tip>
  We strongly recommend to have an expiration date set on your API key for increased security.
</Tip>

<Warning>
  The API key will be shown to you on the screen **only** so make sure you copy and store it in a safe location per your organization's policies
</Warning>

## Native proxy-based access

In order to access SERP API, you will need to provide credentials which are comprised of:

1. Your customer ID
2. Your SERP API zone name
3. Your SERP API password
4. Bright Data SSL certificate

### Where to find your customer ID

Customer ID can be found in the welcome email you received, or by clicking your account initial letter on the top right screen of your control panel, or by clicking here: [Account settings](https://brightdata.com/cp/setting/customer_details) .

### Zone name and password

Your zone name and password can be found in the overview tab of your SERP API zone in the control panel.

### Bright Data SSL Certificate

<Warning>
  Prevent SSL errors by setting up Bright Data SSL certificate
</Warning>

SSL Certificate can be found by clicking "SSL certificate" wizard on your zone's overview top menu. See further instructions here:  [SSL certificate](/general/account/ssl-certificate#how-to-download-the-ssl-certificate).

Alternatively, you can  [ignore SSL errors](/general/account/ssl-certificate#how-to-ignore-ssl-errors).

### SERP API: HTTPS Proxy code examples

Once you have your API credentials, use the following code to send your first request:

<CodeGroup>
  ```sh cURL theme={null}
  curl "https://www.google.com/search?q=pizza" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> -k
  ```

  ```js Node.js theme={null}
  #!/usr/bin/env node

  const { ProxyAgent, setGlobalDispatcher } = require('undici');

  setGlobalDispatcher(new ProxyAgent('http://brd-customer-<customer_id>-zone-<zone_name>:<zone_password>@brd.superproxy.io:44445'));

  (async () => {
    const response = await fetch('https://www.google.com/search?q=pizza');
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


  url = "https://www.google.com/search?q=pizza&brd_json=1"
  response = requests.get(url, proxies=proxies, verify=False)
  pprint.pprint(response.json())
  ```

  ```php PHP theme={null}

  <?php
  echo 'To enable your free eval account and get CUSTOMER, YOURZONE and '
      .'YOURPASS, please contact sales@brightdata.com';
  $curl = curl_init('https://www.google.com/search?q=pizza');
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

  uri = URI.parse('https://www.google.com/search?q=pizza')
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
      Console.WriteLine(client.DownloadString("https://www.google.com/search?q=pizza"));
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
              .execute(Request.Get("https://www.google.com/search?q=pizza").viaProxy(proxy))
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
  print $agent->get('https://www.google.com/search?q=pizza')->content();
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
          Console.WriteLine(Client.DownloadString("https://www.google.com/search?q=pizza"))
      End Sub
  End Module
  ```
</CodeGroup>
