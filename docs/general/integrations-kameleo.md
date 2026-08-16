# How to set up Bright Data with Kameleo

> **Official Source**: [https://docs.brightdata.com/integrations/kameleo](https://docs.brightdata.com/integrations/kameleo)
> **Category**: `general`

---

Configure Bright Data proxies in Kameleo to route anti-detect browser profiles through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is Kameleo?

Kameleo is an advanced anti-detection browser designed for users who need to manage multiple online profiles without risking detection. Whether you’re an affiliate marketer, researcher, or web scraper, Kameleo gives you the tools to bypass IP bans, prevent device tracking, and maintain isolated browsing environments.

With Kameleo, you can customize your browser fingerprints, like user agents, screen resolutions, and fonts, so each profile looks completely unique. This ensures that your activities remain undetected. Kameleo supports a variety of proxies, including residential, datacenter, and ISP proxies, letting you assign different IPs and digital identities to each profile. This makes it perfect for data collection, competitive research, and web scraping at scale, all from a single session.

On top of its strong anti-detection features, Kameleo also supports automation tools, making it a powerful choice for bulk tasks like posting or data scraping. Whether you’re managing a handful of profiles or scaling up for larger operations, Kameleo ensures your privacy and security are protected while optimizing your online activities.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## Kameleo Proxy Integration

Follow these simple steps to integrate Bright Data proxies into Kameleo:

<Steps>
  <Step title="Open Kameleo">
    Launch the [**Kameleo app**](https://kameleo.io/downloads/) and log in to your account.
  </Step>

  <Step title="Create a New Profile">
    Click on the **New Profile** option in the left navigation panel to start setting up a new browsing profile.
  </Step>

  <Step title="Configure Your Profile Preferences">
    Select the profile settings that match your preferred device type, operating system, browser, and language settings.
  </Step>

  <Step title="Configure Your Bright Data Proxy">
    Navigate to the **Connection** section in the profile settings and enter the following details to configure your Bright Data proxy:

    * **Proxy**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **Host:**  Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
  </Step>

  <Step title="Enable Authentication">
    Toggle the **Authentication** button to reveal the `Username` and `Password` fields.\
    Enter your Bright Data proxy credentials here.

    To ensure everything works correctly, click the **Test Proxy** button to perform several tests for your proxy connection.

    <Info>
      **For country-specific proxies, you can enter a format like `your-username-country-US` to receive a US exit node.**
    </Info>
  </Step>

  <Step title="Save Your Settings">
    Once you’ve configured your proxy, click **OK** to save your settings.

    Alternatively, click **START** to launch the browser immediately with your configured profile.
  </Step>
</Steps>

And that’s it! You’ve successfully integrated Bright Data proxies with Kameleo.
