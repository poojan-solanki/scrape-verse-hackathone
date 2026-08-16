# How to set up Bright Data with Lalicat

> **Official Source**: [https://docs.brightdata.com/integrations/lalicat](https://docs.brightdata.com/integrations/lalicat)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) in Lalicat to route multi-profile browsing through residential, datacenter, ISP or mobile IPs for collection.

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

## What is Lalicat?

Lalicat is a simple, anti-detection browser designed to help you manage multiple accounts securely and anonymously. It creates unique browser profiles with isolated digital fingerprints, like IP addresses and device details, so you can bypass tracking systems and avoid detection with ease.

Whether you're performing web scraping, conducting market research, or gathering competitive intelligence, Lalicat offers a reliable and affordable solution for professionals who prioritize privacy and efficiency.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## Lalicat Proxy Integration

Follow these steps to integrate Bright Data proxies with Lalicat:

<Steps>
  <Step title="Install Lalicat">
    1. [**Download**](https://www.lalicat.com/download), install, and launch Lalicat.
    2. Create and log into your account.
  </Step>

  <Step title="Add a Browser Profile">
    On the home screen, click **+Add Browser** to create a new browser instance.

    <Frame>
      <img alt="Lalicat Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Basic Settings">
    In the **Basic Configuration** section, enter your **Profile Name**, select the simulated **operating system**, and adjust other necessary settings for your task.

    <Frame>
      <img alt="Lalicat Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Your Bright Data Proxy">
    Scroll to the **Proxy Settings** section and input the following details:

    * **Proxy settings**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **IP Address**: Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Login**: Enter your Bright Data proxy `username`.
    * **Password**: Enter your Bright Data proxy `password`.

    <Info>
      **For country-specific proxies, you can enter a format like `your-username-country-US` to receive a US exit node.**
    </Info>
  </Step>

  <Step title="Test Your Proxy">
    Click **Check the Proxy** to verify the connection.

    If everything is working, click **Save** to complete the configuration.
  </Step>
</Steps>

**And that’s it!** You’ve successfully integrated Bright Data proxies with Lalicat.
