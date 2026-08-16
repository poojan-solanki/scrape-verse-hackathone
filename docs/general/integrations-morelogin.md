# How to set up Bright Data with MoreLogin

> **Official Source**: [https://docs.brightdata.com/integrations/morelogin](https://docs.brightdata.com/integrations/morelogin)
> **Category**: `general`

---

Pair Bright Data (400M+ residential IPs) with MoreLogin for secure, anonymous browsing and better protection against detection in data collection.

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

## What is MoreLogin?

MoreLogin is a powerful tool designed to help you manage multiple online identities from a single device. Perfect for privacy-conscious users, marketers, and researchers, MoreLogin allows you to operate several profiles, each as a unique digital identity. Each profile has its own IPs, cookies, and device fingerprints, reducing the risk of detection and account bans.

With seamless proxy integration, MoreLogin adds another layer of anonymity to your online activities. Plus, it supports profile sharing, making it ideal for affiliate marketing, market research, and data collection. Whether you're scaling data collection or growing your research operations, MoreLogin helps you stay secure and efficient.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## MoreLogin Proxy Integration

Here’s how you can easily integrate Bright Data proxies with MoreLogin:

<Steps>
  <Step title="Install MoreLogin">
    Visit the [MoreLogin website](https://www.morelogin.com/) to download and install the app.
  </Step>

  <Step title="Create an Account">
    Log in and get started with the setup process.
  </Step>

  <Step title="Create a New Profile">
    Click the **+New profile** button to set up your profile details.

    <Frame>
      <img alt="MoreLogin Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Set Initial Profile Settings">
    Enter the profile name, select your desired browser fingerprint, and click **Advanced Create** to access additional settings.

    <Frame>
      <img alt="MoreLogin Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Proxy Settings">
    Scroll to the **Proxies** section and enter your Bright Data proxy details:

    * **Proxy Type**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **Proxy Server**: Enter `http://brd.superproxy.io/`.
    * **Proxy Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Proxy Account**: Enter your Bright Data proxy `username`.
    * **Proxy Password**: Enter your Bright Data proxy `password`.

    <Info>
      **You can also specify a country for your proxy. For instance, entering `your-username-country-US` will give you a US-based exit node.**
    </Info>

    <Frame>
      <img alt="MoreLogin Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Test the Proxy">
    Click **Check Proxy** to make sure everything is working correctly.
  </Step>

  <Step title="Save and Launch">
    Click **Confirm** to save your settings, then hit **Start** to open your profile in a secure browsing session.

    <Frame>
      <img alt="MoreLogin Proxy Integration" />
    </Frame>
  </Step>
</Steps>

And that's it! You've now successfully integrated Bright Data proxies with MoreLogin.
