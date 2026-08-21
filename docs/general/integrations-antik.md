# How to set up Bright Data with Antik

> **Official Source**: [https://docs.brightdata.com/integrations/antik](https://docs.brightdata.com/integrations/antik)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies in Antik for managing multiple browser profiles with geo-targeted IP routing. Spans 195 countries.

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

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

## What is Antik?

Antik is a browser-based automation tool designed for users managing multiple accounts, web scraping, and geo-targeted activities. With Bright Data, Antik ensures a secure and private environment for all your automation and browsing needs.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

## Why Use Bright Data With Antik?

* **Privacy**: Protect your IP address and online identity.

* **Geo-Targeting**: Access region-specific content with Bright Data’s country-specific proxies.

* **Reliability**: Enjoy stable connections for uninterrupted workflows.

## How to Integrate Bright Data With Antik

**Step 1. Download and Log In to Antik**

1\. Visit the [official Antik website](https://antik.io/) and download the application.

2\. Install the software and log in using your account credentials.

**Step 2. Create a New Browser Profile**

1\. From the Antik dashboard, navigate to the **Profiles** tab.

2\. Click **Create** to start configuring a new browser profile.

<Frame>
  <img alt="How to Integrate Bright Data With Antik" />
</Frame>

**Step 3. Enable Proxy Settings**

1\. Under the **General Settings** tab, locate the **Name** field and enter a recognizable name for your profile to help you identify it later.

2\. Navigate to the **New Proxy** tab.

<Frame>
  <img alt="How to Integrate Bright Data With Antik" />
</Frame>

**Step 4. Add Your Bright Data Proxy Details**

1\. Go to your [Bright Data dashboard](https://brightdata.com/cp/zones) and click on the your proxy zone.

2\. Under the **Overview** tab, copy the proxy information in the format of:&#x20;

`host : port : username : passoword `(no spaces).&#x20;

3\. Paste this access information into the **Proxy** field in Antik.

4\. Once the proxy configuration is verified, click **Create** to save your proxy settings.

<Note>
  For geo-targeted proxies, format your username as `your-username-country-XX` (e.g., `your-username-country-US`) to specify a location.
</Note>

**Step 5. Save and Launch**

1\. Go to the **Profiles** tab and select your newly created profile.

2\. Click **Start** to launch the browser with the configured Bright Data settings.

<Frame>
  <img alt="How to Integrate Bright Data With Antik" />
</Frame>

By integrating Bright Data with Antik, you ensure secure and efficient browsing, making your workflows smooth and private. Whether managing multiple accounts or targeting specific regions, Bright Data provides the reliability you need to stay ahead. Get started today for a seamless browsing experience!
