# Set up Bright Data with IXBrowser

> **Official Source**: [https://docs.brightdata.com/integrations/ixbrowser](https://docs.brightdata.com/integrations/ixbrowser)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) in IXBrowser to route multi-profile browsing through residential, datacenter, ISP or mobile IPs for collection.

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

## What is IXBrowser?

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

<Warning>
  Connections to the following social networks are not supported on Data Center and ISP proxy networks: Facebook, TikTok, Instagram, X (Twitter), LinkedIn, YouTube, Reddit, Pinterest, Snapchat, and Discord.
</Warning>

**IXBrowser** is a privacy-focused anti-detect browser tailored for managing multiple browser profiles across different platforms. It provides advanced anonymity features, allowing users to bypass restrictions and avoid detection. Integrating Bright Data with IXBrowser further enhances privacy and enables geo-targeted browsing.

## How to Integrate Bright Data With IXBrowser

<Steps>
  <Step title="Download and Install IXBrowser">
    1. Visit the [IXBrowser website](https://ixbrowser.com/) and download the application.
    2. Install the software and log in using your account credentials.
  </Step>

  <Step title="Create a New Profile">
    1. Open IXBrowser and navigate to the **Profile List** section under **Browser Profile**.
    2. Click **Create New Profile** to begin setting up a new browser instance.
    3. In the profile settings, provide a descriptive name in the **Profile Name** field to easily identify your profile later.

    <Frame>
      <img alt="How to Integrate Bright Data With IXBrowser" />
    </Frame>
  </Step>

  <Step title="Configure Proxy Settings">
    1. Switch to the **Proxy Configuration** tab within the profile setup page.

    2. Toggle **Custom** to enable the proxy setup options.

    3. Fill in the following proxy details retrieved from your [Bright Data dashboard](https://brightdata.com/cp/zones):
       * **Proxy Type**: Choose HTTP, HTTPS, or SOCKS5 depending on your proxy type.
       * **Proxy Host**: `http://brd.superproxy.io/`
       * **Proxy Port**: Enter the port number from your Bright Data dashboard.
       * **Proxy Account**: Use your Bright Data `username`.
       * **Proxy Password**: Use your Bright Data `password`.

    4. Once you’ve entered the details, click **Create** to save the configuration.

    <Note>
      For geo-targeted proxies, format your username as `your-username-country-XX` (e.g., `your-username-country-US`) to access a specific region.
    </Note>
  </Step>

  <Step title="Launch the Profile">
    1. Navigate back to the **Profile List** section.
    2. Locate your newly created profile and click **Open** to launch the browser with the configured Bright Data proxy settings.

    <Frame>
      <img alt="How to Integrate Bright Data With IXBrowser" />
    </Frame>
  </Step>
</Steps>

Integrating Bright Data with IXBrowser ensures private and reliable account management while enhancing your online anonymity. Whether you’re managing multiple accounts or performing geo-targeted activities, this setup empowers you with secure and seamless browsing. Get started now for a more efficient experience!
