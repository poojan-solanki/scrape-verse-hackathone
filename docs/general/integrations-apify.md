# How to use Bright Data with Apify

> **Official Source**: [https://docs.brightdata.com/integrations/apify](https://docs.brightdata.com/integrations/apify)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data (400M+ IPs) in Apify actors to bypass IP bans, geo-restrictions and CAPTCHAs in scraping workflows.

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

## What is Apify?

Apify is a powerful platform for web scraping and automation. It enables developers to create and run custom web scraping tools, called **Actors**, which automate data collection and processing tasks. By integrating Bright Data proxies, you can enhance the anonymity, stability, and efficiency of your Apify workflows, ensuring your tasks run smoothly.

## How to Integrate Bright Data with Apify

For this guide, we’ll use the [**Web Scraper**](https://apify.com/apify/web-scraper) actor as an example.

**Step 1. Access Your Apify Dashboard and Tools**

1\. Log in to your [Apify account](https://apify.com/) using your credentials.

2\. From the dashboard, navigate to the **Apify Store** to explore available tools. Use the search bar or browse categories to locate the Web Scraper actor.

**Step 2. Launch the Web Scraper Actor**

1\. From the **Actors** section in the left-hand menu, locate the **Web Scraper actor**.

2\. Click on it to open the configuration page.

<Frame>
  <img alt="How to Integrate Bright Data with Apify" />
</Frame>

**Step 3. Define Target URLs for Scraping**

1\. In the **Input** tab, find the **Basic Configuration** section.

2\. Enter the target URLs of the web pages you want to scrape.

3\. Add one or multiple URLs depending on your scraping requirements.

<Frame>
  <img alt="How to Integrate Bright Data with Apify" />
</Frame>

<Note>
  Bright Data compliance allows access to search engines like `google` only from SERP proxy zones. To test, use non search engine targets
</Note>

**Step 4.** **Set Up Custom Proxy Options**

1\. Scroll down to the **Proxy and Browser Configuration** section.

2\. Select **Own proxies** to enable custom proxy settings.

3\. Enter your [Bright Data proxy details](https://brightdata.com/cp/zones) in the following format:

```basic theme={null}
http://[USERNAME]:[PASSWORD]@[HOST]:[PORT]
```

4\. Use your Bright Data credentials, and if needed, modify the username for geo-specific access (e.g., `your-username-country-US`).

<Frame>
  <img alt="How to Integrate Bright Data with Apify" />
</Frame>

**Step 5. Start and Validate Your Actor Task**

1\. Once the proxy configuration is complete, click **Save & Start** to launch the actor.

2\. Check the logs to ensure the task runs smoothly and that the Bright Data proxy is active.

<Frame>
  <img alt="How to Integrate Bright Data with Apify" />
</Frame>

With Bright Data proxies integrated into Apify, you can run powerful, anonymous, and geo-targeted automation workflows. Whether you’re scraping data, processing information, or managing large-scale projects, Bright Data ensures smooth and reliable operations on Apify. Start building smarter automation today!
