# Webscraper.io proxy integration

> **Official Source**: [https://docs.brightdata.com/integrations/webscraper](https://docs.brightdata.com/integrations/webscraper)
> **Category**: `datasets-and-scrapers`

---

Integrate Bright Data proxies (400M+ IPs) with Webscraper.io to run no-code scraping jobs with geo-targeted IPs and reduced detection risk across sites.

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

Webscraper.io extension and Webscraper.io Cloud can be your perfect tool for data extraction. With an easy point-and-click interface scraper gather website data in a few minutes.

With Webscraper.io Cloud, automate scraping tasks completely with scheduler, API, data parser, data export, and more.

## Getting started with Webscraper.io

1. Install Web Scraper browser extension via [Chrome Store](https://chrome.google.com/webstore/detail/web-scraper/jnhgnonknehpejjnehehllkliplmbmhn?hl=en)

2. Sign up for [Webscraper.io Cloud](https://cloud.webscraper.io/register?luminati)

3. Subscribe to [Scale](https://cloud.webscraper.io/subscription-manager?luminati) plan

4. Open “Proxy Manager” on the left-side toolbar

<Frame>
  <img alt="webscraperio_integration6.png" />
</Frame>

## Create a proxy in Bright Data

1. Go to your [Bright Data Dashboard](https://brightdata.com/cp/zones) and click **Add Zone**

2. Select a network type and press **Add Zone**

3. Back in your Bright Data dashboard, click a Zone name

4. Take note of your Zone username and password

5. Switch back to the Web Scraper Cloud Proxy Manager

6. Choose **Bright Data Proxy** as the designated Proxy Server

<Frame>
  <img alt="webscraperio_integration7.png" />
</Frame>

7. Input a custom name, the username, and password form Bright Data created zone.
   If needed, limit your proxy region by selecting a country in the drop-down menu.

<Frame>
  <img alt="webscraperio_integration5.png" />
</Frame>

8. Click **Add Proxy**

9. The custom proxy will now be listed down below

<Frame>
  <img alt="webscraperio_integration1.png" />
</Frame>

10. To use a proxy for a scraping job, go to “My Sitemaps” from the menu on the left side

<Frame>
  <img alt="webscraperio_integration4.png" />
</Frame>

11. Click **Details Page** next to the sitemap you want to scrape

<Frame>
  <img alt="webscraperio_integration2.png" />
</Frame>

12. From the **Proxy** drop-down menu select the created proxy and click **Scrape**

<Frame>
  <img alt="webscraperio_integration3.png" />
</Frame>

There you have it - Webscraper.io Cloud will run your scraper via Bright Data Proxy.
As easy as that!

### Webscraper.io is Not A Bright Data Product

Note: the webscraper.io is not Bright Data Scrapers utility - this article refers to the external Webscraper.io integration.&#x20;
