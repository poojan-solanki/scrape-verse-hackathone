# Set up Bright Data with SwitchyOmega

> **Official Source**: [https://docs.brightdata.com/integrations/switchyomega](https://docs.brightdata.com/integrations/switchyomega)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies in SwitchyOmega for browser-based proxy switching and rule-based traffic routing. Spans 195 countries.

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

## What is SwitchyOmega?

**SwitchyOmega** is a browser extension for Chrome and Firefox designed to make proxy management easy and efficient. Supporting HTTP, HTTPS, SOCKS4, and SOCKS5, it allows you to create custom rules, switch between proxies effortlessly, and enhance your online activities. Whether you're bypassing geo-restrictions, managing multiple accounts, or safeguarding your privacy, SwitchyOmega is an essential tool for flexible proxy configurations.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

## How to Set Up Bright Data With SwitchyOmega

**Step 1. Install SwitchyOmega**

1. Visit the relevant extension page for your browser:
   * [Chrome Extension](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)
   * [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/switchyomega)

2. Add SwitchyOmega to your browser. After installation, the SwitchyOmega icon will appear in your toolbar.

**Step 2. Create a New Proxy Profile**

1. Click the **SwitchyOmega icon** in your browser’s toolbar and select **Options** to open the settings page.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

2. On the settings page, click **New Profile**.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

3. Provide a descriptive name for your profile (e.g., “Bright Data Proxy”), select **Proxy Profile**, and click **Create** to save.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

**Step 3. Configure Bright Data Proxy Details**

1. Enter the following Bright Data proxy details in the profile configuration fields:

   * **Protocol**: Choose HTTP, HTTPS, or SOCKS5 based on your proxy type.
   * **Server**: Input `http://brd.superproxy.io/`.
   * **Port**: Enter the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans).

2. Click the **Lock** icon to add authentication credentials:

   * **Username**: Your Bright Data username.
   * **Password**: Your Bright Data password.

3. Click **Save Changes** to store the proxy configuration.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

<Note>
  For country-specific proxies, append the country code to your username (e.g., `your-username-country-US`) to select a specific location.
</Note>

**Step 4. Apply and Activate the Proxy**

1. Click **Apply Changes** to finalize your setup.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

2. To enable the proxy, select your configured profile from the SwitchyOmega dropdown menu in the browser toolbar.

<Frame>
  <img alt="How to Set Up Bright Data With SwitchyOmega" />
</Frame>

Your Bright Data proxies are now fully integrated with SwitchyOmega. Whether you're managing multiple accounts, browsing securely, or scraping data efficiently, this setup ensures flexibility and control over your proxy configurations.
