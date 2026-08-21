# How to configure proxy settings in Chrome

> **Official Source**: [https://docs.brightdata.com/integrations/chrome](https://docs.brightdata.com/integrations/chrome)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies (port 44445) in Chrome for privacy, geo-bypass and managing multiple browser sessions or accounts.

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

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

## Changing Proxy Settings in Chrome

Ready to unlock the power of proxies in Chrome? It’s simple, just follow these steps and you’re good to go:

### Step 1. **Access Chrome Settings**

Open Chrome, click on the **three-dot menu** in the top-right corner, and choose **Settings** from the dropdown.

<Frame>
  <img alt="Step 1. Access Chrome Settings." />
</Frame>

### Step 2. **Open System Proxy Settings**

Navigate to the **System** section and select **Open your computer’s proxy settings** to proceed.

<Frame>
  <img alt="Step 2. Open System Proxy Settings." />
</Frame>

### Step 3. **Configure Proxy in Your Operating System**

Since Chrome uses your operating system’s proxy settings, you’ll be redirected to the system configuration screen. Follow these steps based on your OS:

* **On Windows**: Enable “Use a proxy server,” then enter the proxy address and port provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
* **On macOS**: Select the appropriate protocol (like HTTP or SOCKS5) and input the proxy address, port, and credentials. It’s quick and straightforward!

All done! Your Chrome browser is now set up with **Bright Data**. Whether you’re managing accounts, shopping worldwide, or browsing privately, you’re ready for a secure and seamless experience.
