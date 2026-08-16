# How to set up Bright Data with WebHarvy

> **Official Source**: [https://docs.brightdata.com/integrations/webharvy](https://docs.brightdata.com/integrations/webharvy)
> **Category**: `general`

---

Configure Bright Data proxies in WebHarvy to route automated web scraping jobs through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is WebHarvy?

WebHarvy is a web scraping tool that can easily extract text, HTML, images, URLs, and emails from websites and save the extracted content in various formats. If you are running a large scraping operation, using one of the [proxy services](https://brightdata.com/proxy-types) Bright Data offers will help you increase the success rates and send a lot more concurrent requests to the same target.

## How to setup WebHarvy with Bright Data proxies:

* Download and install WebHarvy Web Scraper
* Go to Webharvy → Home tab → Settings → Proxy Settings

<Frame>
  <img alt="WebHarvy toolbar with home and settings options." />
</Frame>

* Sign up for Bright Data’s Proxy Network
* Go to your Bright Data dashboard
* In the **Integrate** **with Bright Data Proxy Network** section, select **With a crawler or a bot** option

<Frame>
  <img alt="webharvy_int1.png" />
</Frame>

* On the API Examples page, you will see the following details:
  * Proxy address, Port number, User name, and Password

<Frame>
  <img alt="Instructions for bot configuration with red arrows." />
</Frame>

* Go back to WebHarvy Proxy settings and paste the details from Bright Data to WebHarvy Proxy settings
* Click on the + button
* Click Apply

<Frame>
  <img alt="WebHarvy proxy settings configuration screen." />
</Frame>

<Note>
  **Please note**: Webharvy will use proxy servers only during mining. The configuration browser of Webharvy will not use this proxy server, so if you check the IP address within the configuration browser, it will still be the original IP of your computer. To make the configuration browser use the proxy server, you should set the proxy address directly in Windows.
</Note>

To **disable the proxy server**, you just need to **uncheck the Enable Network connection via Proxy server checkbox** at Webharvy → Home Menu → Settings → Proxy Settings Tab.

Alternatively, you can use our own data collection tool for a quicker and easier process.

<Warning>
  **Important note**:

  If you are using Bright Data’s Residential Proxies, Web Unlocker API or SERP API, you need to install an SSL certificate to enable end-to-end secure connections to your target website(s).

  This is a simple process, see [this guide](/general/account/ssl-certificate#installation-of-the-ssl-certificate) for instructions.
</Warning>
