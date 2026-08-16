# How to set up Bright Data with Incogniton

> **Official Source**: [https://docs.brightdata.com/integrations/incogniton](https://docs.brightdata.com/integrations/incogniton)
> **Category**: `general`

---

Integrate Bright Data with Incogniton for secure, anonymous browsing with enhanced protection against detection and bans. Spans 195 countries.

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

## What is Incogniton?

Incogniton is a privacy-focused browser designed to keep you anonymous while you browse. It lets you create and manage multiple profiles, each with its own set of cookies, local storage, IP address (via proxy), and other browsing data. This means you can surf the web worry-free, knowing your activities and personal information stay private.

Incogniton is perfect for privacy-conscious users, marketers, and researchers who need secure, anonymous browsing for web scraping, market research, and competitive intelligence.

## Incogniton Proxy Integration

Setting up Bright Data proxies with Incogniton is a quick and easy process. Just follow these simple steps to get started:

<Steps>
  <Step title="Download Incogniton">
    Visit the [**Incogniton website**](https://incogniton.com/) to download and install the browser on your device.
  </Step>

  <Step title="Create a New Profile">
    1. Once installed, open Incogniton and go to the **Profile Management** section.
    2. Click **New Profile** to create your first profile.
  </Step>

  <Step title="Configure Proxy Settings">
    In the profile setup menu, click on **Proxy** on the left side. Enter your Bright Data proxy details:

    * **Proxy Type**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **Proxy Host**: Enter `http://brd.superproxy.io/`.
    * **Proxy Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Proxy Username**: Enter your Bright Data proxy `username`.
    * **Proxy Password**: Enter your Bright Data proxy `password`.

    You can confirm the proxy is working by clicking **Check Proxy**.

    <Info>
      **For country-specific proxies, you can enter a format like `username-country-US` for a US-based IP**
    </Info>
  </Step>

  <Step title="Save Your Profile">
    1. Once all the details are entered, click **Create Profile** to save your settings.
    2. You’re now ready to browse securely!
  </Step>

  <Step title="Start Browsing">
    Click **Start** to launch your profile in a secure incognito browser window, and begin browsing with complete anonymity.
  </Step>
</Steps>

And that’s it! You’ve successfully integrated Bright Data proxies with Incogniton.
