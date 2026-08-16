# Set up Bright Data with ChangeDetection

> **Official Source**: [https://docs.brightdata.com/integrations/changedetection](https://docs.brightdata.com/integrations/changedetection)
> **Category**: `general`

---

Integrate Bright Data proxies (400M+ IPs) with ChangeDetection to monitor competitor prices, product availability and content changes across multiple sites.

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

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

## What is ChangeDetection?

**ChangeDetection** is a powerful tool for monitoring website updates. It allows you to track content changes, receive notifications, and analyze updates in real-time. Whether you’re monitoring competitors, prices, or product availability, ChangeDetection ensures you’re always informed. By integrating **Bright Data**, you can enhance privacy, bypass restrictions, and manage multiple monitoring tasks seamlessly.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

### How to Integrate Bright Data With ChangeDetection

**Step 1. Install and Launch ChangeDetection**

1\. Visit the [ChangeDetection website](https://changedetection.io/) and download the application for your operating system.\
2\. Install ChangeDetection and launch the application.\
3\. Log in to your account to access the dashboard.

**Step 2. Configure Proxy Settings**

1\. Open the **Settings** menu from the ChangeDetection dashboard.\
2\. Navigate to the **Network Settings** or **Proxy Settings** section.

**Step 3. Enter Your Bright Data Proxy Details**

1. In the proxy configuration field, input your Bright Data proxy details:

   * **Protocol**: Select HTTP, HTTPS, or SOCKS5 depending on your proxy type.

   * **Host**: Enter [`http://brd.superproxy.io/`.](http://brd.superproxy.io/.)

   * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).

   * **Username**: Enter your Bright Data username.

   * **Password**: Enter your Bright Data password.

<Note>
  **For geo-targeted proxies, include the country code in your username (e.g., `your-username-country-US` for a US-based proxy).**
</Note>

**Step 4. Verify the Proxy Connection**

1. Test the proxy connection to ensure it is active:

   * In the same settings menu, look for a **Test Proxy** or **Validate Proxy** button.

   * Run the test to confirm that the proxy is working as expected.

2. Save your settings to apply the configuration.

**Step 5. Monitor Websites With Bright Data**

1. Return to the ChangeDetection dashboard and start adding websites to monitor.

2. Configure individual tasks as needed, ensuring they utilize the proxy settings for privacy and efficiency.

With **Bright Data** integrated into **ChangeDetection**, you can monitor websites securely, bypass geographical restrictions, and manage multiple tasks with ease. Enjoy seamless tracking and privacy for all your web monitoring needs!
