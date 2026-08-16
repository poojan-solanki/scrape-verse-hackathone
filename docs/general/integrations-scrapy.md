# How to use Bright Data with Scrapy

> **Official Source**: [https://docs.brightdata.com/integrations/scrapy](https://docs.brightdata.com/integrations/scrapy)
> **Category**: `general`

---

Configure Bright Data proxies (port 44445) in Scrapy projects to crawl sites with geo-targeted, rotating IPs in anonymous, large-scale Python pipelines.

<Accordion title="Expand to get your Bright Data Proxy Access Information">
  ### Your proxy access information

  Bright Data proxies are grouped in "Proxy zones". Each zone holds the configuration for the proxies it holds.

  To get access to the proxy zone:

  1. Login to Bright Data control panel
  2. Select the proxy zone or setup a new one
  3. Click on the new zone name, and select the **Overview** tab.
  4. In the overview tab, under **Access details** you can find the proxy access details, and copy them to clipboard on click.
  5. You will need: Proxy Host, Proxy Port, Proxy Zone username and Proxy Zone password.
  6. Click on the copy icons to copy the text to your clipboard and paste in your tool's proxy configuration.

  ### Access Details Section Example

  <img alt="" />

  ### Residential proxy access

  To access Bright Data's **Residential Proxies** you must be a KYC-verified business account. Complete KYC verification with the Bright Data compliance team; there is no automatic or no-KYC path. Without KYC, use ISP or Datacenter proxies. [Read more...](/proxy-networks/residential/network-access)

  ### Targeting search engines?

  If you target a search engine like google, bing or yandex, you need a special Search Engine Results Page (**SERP**) proxy API. Use Bright Data SERP API to target search engines.
  [Click here to read more about Bright Data SERP proxy API.](/scraping-automation/serp-api/introduction)

  ### Correct setup of proxy test to avoid "PROXY ERROR"

  In many tools you will see a "test proxy" function, which performs a conncectivity test to your proxy, and some add a geolocation test as well, to identify the location of the proxy.
  To correctly test your proxy you should target those search queries to:
  `https://geo.brdtest.com/welcome.txt` .

  Some tools use popular search engines (like google.com) as a default test target. Bright Data will block those requests and you tool will show **proxy error** although your proxy is perfectly fine.

  If your proxy test fails, this is probably the reason. Make sure that your test domain is not a search engine (this is done in the tool configuration, and not controlled by Bright Data).
</Accordion>

## What is Scrapy?

Scrapy is a powerful Python-based framework for web scraping and data extraction. Designed for speed and scalability, Scrapy helps developers crawl websites and collect structured data efficiently. By integrating Bright Data proxies into Scrapy, you can enhance your scraping tasks with secure, anonymous, and geo-targeted connections.

## Why Use Bright Data with Scrapy?

* **Enhanced Privacy**: Mask your IP to stay anonymous while scraping.

* **Geo-Targeted Data Access**: Use Bright Data’s country-specific proxies to gather data from different regions.

* **Improved Reliability**: Reduce the risk of detection or being blocked by distributing requests across Bright Data proxies.

## How to Set Up and Start a Scrapy Project

**Step 0. Prerequisites**

Before you begin, ensure you have:

1. **Python Installed**:

   * Download and install the latest version from [python.org](https://www.python.org/).

2. **Scrapy Installed**: Run the following command in your terminal to install Scrapy:

   ```bash theme={null}
   pip install scrapy
   ```

3. **Bright Data Proxy Credentials**:

   * Log in to your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans) and retrieve your proxy details (Host, Port, Username, and Password).
   * For region-specific proxies, modify your username using the format `your-username-country-XX` (e.g., `your-username-country-US` for a US proxy).

**Step 1. Create or Open Your Scrapy Project**

1. If you don’t have a Scrapy project, create one by running:

   ```bash theme={null}
   scrapy startproject myproject
   ```

   Replace "myproject" with a name that reflects the purpose of your project, such as "brightdata\_test" or "web\_scraper".

2. Navigate to your project folder:

   ```bash theme={null}
   cd myproject
   ```

**Step 2. Generate a Spider**

1. Use Scrapy’s command to create a spider:

   ```bash theme={null}
   scrapy genspider <spider_name> <target_url>
   ```

   For example, to scrape [httpbin.org/ip](http://httpbin.org/ip), you can run:

   ```bash theme={null}
   scrapy genspider BrightDataExample http://httpbin.org/ip
   ```

2. This generates a basic spider template located in the `spiders/` directory of your project. It looks something like this:

   ```python theme={null}
   import scrapy

   class BrightDataExampleSpider(scrapy.Spider):
   name = "BrightDataExample"
   allowed_domains = ["httpbin.org/ip"]
   start_urls = ["http://httpbin.org/ip"]

   def parse(self, response):
       pass
   ```

**Step 3. Configure Bright Data Proxies**

1. Open the generated spider file in a text editor (`spiders/BrightDataExample.py`) and update it to include Bright Data proxy settings. Here’s an example:

   ```python theme={null}
   import scrapy

   class BrightDataExampleSpider(scrapy.Spider):
       name = "BrightDataExample"
       start_urls = ['http://httpbin.org/ip']

       def start_requests(self):
           # Define the Bright Data proxy
           proxy = "http://[USERNAME]:[PASSWORD]@[HOST]:[PORT]"  # Replace with your Bright Data proxy details

           # Use the proxy for all requests
           for url in self.start_urls:
               yield scrapy.Request(url, meta={'proxy': proxy})

       def parse(self, response):
           # Parse and return the IP address
           yield {
               'proxy_ip': response.text
           }
   ```

2. Replace \[USERNAME], \[PASSWORD], \[HOST], and \[PORT] with your Bright Data credentials. If you need a country-specific proxy, modify the username (e.g., `your-username-country-US`).

**Step 4. Run Your Scrapy Spider**

1. Navigate to the project directory in your terminal:

   ```bash theme={null}
   cd myproject
   ```

2. Run the spider:

   ```bash theme={null}
   scrapy crawl BrightDataExample
   ```

3. To save the output to a file, use:

   ```bash theme={null}
   scrapy crawl BrightDataExample -o output.json
   ```

**Step 5. Verify the Output**

1. If everything is configured correctly, the spider will display the IP address of the Bright Data proxy it’s using. Example output:

   ```json theme={null}
   [
       {
           "proxy_ip": "{\n  \"origin\": \"123.45.67.89\"\n}"
       }
   ]
   ```

2. Open the output.json file (if you used the -o flag) to review the scraped data.

With **Bright Data** proxies integrated into **Scrapy**, your web scraping tasks become more secure, private, and efficient. Whether you’re collecting geo-specific data, managing high-volume scraping jobs, or avoiding detection, Bright Data provides the stability and anonymity you need. Start scraping smarter with Bright Data and Scrapy today!
