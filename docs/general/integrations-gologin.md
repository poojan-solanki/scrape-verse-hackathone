# How to set up Bright Data with GoLogin

> **Official Source**: [https://docs.brightdata.com/integrations/gologin](https://docs.brightdata.com/integrations/gologin)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) in GoLogin to route multi-profile browsing through residential, datacenter, ISP or mobile IPs for collection.

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

## What is GoLogin?

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

GoLogin is a powerful tool designed to make managing multiple accounts easy and secure. It allows you to create separate browser profiles, each with its own unique fingerprints, IPs, and cookies, making each profile appear like an individual user. This is perfect for marketers, researchers, and data professionals who need isolated browsing environments for web scraping and competitive analysis.

With GoLogin, you can integrate proxies, automate tasks, and switch between profiles seamlessly, all while keeping each account completely anonymous. It’s a flexible solution that helps ensure account safety, and with its collaboration features, teams can securely share profiles. Whether you’re focused on digital marketing, data scraping, or competitive intelligence, GoLogin is a fantastic choice.

## GoLogin Proxy Integration

Follow these steps to integrate Bright Data proxies with GoLogin:

<Steps>
  <Step title="Install GoLogin">
    Download and install GoLogin from the [GoLogin website](https://gologin.com/).
  </Step>

  <Step title="Create an Account">
    Log in to GoLogin to get started with the setup.
  </Step>

  <Step title="Create a New Profile">
    Click **+Add profile** and enter the basic details for your new browser profile.

    <Frame>
      <img alt="GoLogin Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Proxy Settings">
    Enter your Bright Data proxy details:

    * **Proxy Type**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **Host**: Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Login**: Enter your Bright Data proxy `username`.
    * **Password**: Enter your Bright Data proxy `password`.

    <Info>
      **You can also specify a country for your proxy. For instance, entering `your-username-country-US` will give you a US-based exit node.**
    </Info>

    <Frame>
      <img alt="GoLogin Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Test the Proxy">
    Click **Check Proxy** to make sure everything is working as expected.
  </Step>

  <Step title="Save and Launch">
    Click **Create Profile** to save your settings, and then hit **Run** to open your new profile with secure browsing.

    <Frame>
      <img alt="GoLogin Proxy Integration" />
    </Frame>
  </Step>
</Steps>

**And that's it!** You've now successfully integrated Bright Data proxies with GoLogin.
