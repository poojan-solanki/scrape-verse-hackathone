# How to use Bright Data with XLogin

> **Official Source**: [https://docs.brightdata.com/integrations/xlogin](https://docs.brightdata.com/integrations/xlogin)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) in XLogin to assign isolated geo-targeted IPs to each antidetect browser profile for multi-account automation.

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

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## What is XLogin?

XLogin is a browser profile management tool designed to help you run multiple online accounts without them interfering with each other. Each profile acts like a separate, isolated browser environment, making it easier to handle tasks like web scraping, market research, and competitive intelligence. By integrating Bright Data proxies, you add an extra layer of privacy and reliability to every profile.

## Why Use Bright Data with XLogin?

Combining Bright Data proxies with XLogin gives you:

* **Enhanced Privacy**: Mask your real IP with secure, anonymous proxies.
* **Reduced Detection Risks**: Spread activities over different IPs to minimize bans or restrictions.
* **Stable Connections**: Access geo-specific content and maintain consistent, reliable sessions across multiple profiles.

## Prerequisites

Before you begin:

* **XLogin Account**: Sign up at [XLogin’s website](https://xlogin.us/) if you haven’t already.
* **Bright Data Proxy Credentials**: see instructions on the top of this page.&#x20;

## How to integrate XLogin step by step

**Step 1. Log In to XLogin**

1. Visit [XLogin](https://xlogin.us/) and enter your XLogin credentials.
2. Once inside the dashboard, you’ll see a list of browser profiles if you’ve created any before.

**Step 2. Create or Select a Browser Profile**

1. If you’re new to XLogin, click **"New browser profile"** (or a similar button) to set up a fresh browser profile.
2. If you already have profiles, choose one that you’d like to run through Bright Data proxies, then select **"Edit"** or **"Settings"** to access its configuration.

<Frame>
  <img alt="Step-by-Step Integration" />
</Frame>

**Step 3. Personalize and Configure Your Browser Profile**

First, type in a clear **“Display name”** for your browser profile so you’ll know exactly which one you’re working with. Then, hit the **“Setting proxy server”** button to open up the proxy configuration panel. If you can’t spot it, check advanced menus or peek at the XLogin documentation.

**Step 4. Enter Your Bright Data Proxy Details**

1. Select the correct protocol (`HTTP`, `HTTPS`, or `SOCKS5`) based on your Bright Data proxy type.

2. Fill in the required fields:
   * **Host**: Your Bright Data host (e.g., [`http://brd.superproxy.io/`).](http://brd.superproxy.io/\).)
   * **Port**: The port number provided by [Bright Data dashboard](https://brightdata.com/cp/zones).
   * **Username**: Your Bright Data proxy `username`.
   * **Password**: Your Bright Data proxy `password`.

3. Double-check for accuracy, typos or incorrect details will prevent successful connections.

<Note>
  Want a US-based exit node? Append `-country-US` to your username (e.g., `your-username-country-US`). This applies to other countries too, just swap the country code as needed.
</Note>

**Step 5. Save Your Settings**

Before completing the setup, click **"Test Proxy"** to verify that the connection is good. If everything checks out, select **"Save"** to finalize your configuration. Finally, ensure that the recorded details reflect your intended proxy settings.

**Step 6. Test the Proxy Connection**

1. Launch the updated browser profile.
2. Navigate to a site like [http://httpbin.org/ip](http://httpbin.org/ip).
3. Confirm that the displayed IP matches the Bright Data proxy’s IP, not your own. If it does, you’re all set.

By following these steps, you’ve successfully integrated **Bright Data** proxies into **XLogin**. You now have enhanced privacy, reduced detection risks, and more stable connections, allowing you to manage multiple profiles with greater confidence and efficiency. Enjoy a smoother, more secure browsing experience as you navigate your online tasks!
