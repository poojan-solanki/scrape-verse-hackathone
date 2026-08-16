# Set up Bright Data with HideMyAcc

> **Official Source**: [https://docs.brightdata.com/integrations/hidemyacc](https://docs.brightdata.com/integrations/hidemyacc)
> **Category**: `general`

---

Configure Bright Data proxies in HideMyAcc to route multi-account browsing through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is HideMyAcc?

**HideMyAcc** is an advanced anti-detect browser designed for managing multiple accounts securely. It helps users bypass restrictions, maintain anonymity, and avoid detection by offering a private browsing environment. Integrating Bright Data enhances HideMyAcc's capabilities, providing secure and geo-targeted connections.

## How to Integrate Bright Data With HideMyAcc

<Steps>
  <Step title="Download and Install HideMyAcc">
    1. Visit the [HideMyAcc website](https://hidemyacc.com/) and download the software compatible with your operating system.
    2. Install the application and log in with your account credentials.
  </Step>

  <Step title="Create a New Profile">
    1. Open HideMyAcc and navigate to the **Profiles** tab.
    2. Click **Create a new profile** to set up a new browsing instance.

    <Frame>
      <img alt="How to Integrate Bright Data With HideMyAcc" />
    </Frame>
  </Step>

  <Step title="Enable Proxy Configuration">
    1. Locate the **Proxy** section within the profile creation page.
    2. In the profile settings, enter a **Profile Name** to easily identify it later.
    3. Toggle **Your Proxy** to activate the configuration options.

    <Frame>
      <img alt="How to Integrate Bright Data With HideMyAcc" />
    </Frame>
  </Step>

  <Step title="Add Your Bright Data Proxy Details">
    1. Go to your [Bright Data dashboard](https://brightdata.com/cp/zones) and click the proxy zone you would like to use.
    2. Under the **Overview** tab, copy the proxy access details code provided in the required format: `host:port:username:password.`
    3. Paste this code into the **Quick add** field in HideMyAcc .
    4. Use the **Check Proxy** option to verify the connection.
    5. Once the proxy configuration is verified, click **Create** to save your proxy settings.&#x20;

    <Note>
      For geo-specific proxies, format your username as `your-username-country-XX` (e.g., `your-username-country-US`) to target a specific region.
    </Note>
  </Step>

  <Step title="Launch the Profile">
    Navigate to the **Profiles** tab, select your newly created profile, and click **Run** to start browsing securely with Bright Data.

    <Frame>
      <img alt="How to Integrate Bright Data With HideMyAcc" />
    </Frame>
  </Step>
</Steps>

By integrating **Bright Data** with **HideMyAcc**, you can enjoy enhanced privacy and seamless account management. Whether you're managing multiple profiles or performing geo-targeted tasks, this setup ensures your browsing experience is secure and efficient. Start today for reliable, private browsing!
