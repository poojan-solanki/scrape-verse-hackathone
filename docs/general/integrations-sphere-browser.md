# Set up Bright Data with Sphere Browser

> **Official Source**: [https://docs.brightdata.com/integrations/sphere-browser](https://docs.brightdata.com/integrations/sphere-browser)
> **Category**: `general`

---

Configure Bright Data proxies in Sphere Browser to route multi-account browsing through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is Sphere Browser?

**Sphere Browser** is an anti-detect browser designed for managing multiple accounts without risking detection. It allows users to create unique browser profiles with isolated fingerprints, making it an ideal tool for marketing professionals, researchers, and privacy enthusiasts. Integrating Bright Data with Sphere Browser enhances anonymity and unlocks geo-targeted capabilities.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

<Warning>
  Connections to the following social networks are not supported on Data Center and ISP proxy networks: Facebook, TikTok, Instagram, X (Twitter), LinkedIn, YouTube, Reddit, Pinterest, Snapchat, and Discord.
</Warning>

## How to Integrate Bright Data With Sphere Browser

**Step 1. Download and Install Sphere Browser**

1. Visit the [Sphere Browser website](https://linkensphere.info/en/#) and download the application.
2. Install the software on your device and log in with your account credentials.
3. Open Sphere Browser and click **Proxy** to begin configuring your setup.

<Frame>
  <img alt="How to Integrate Bright Data With Sphere Browser" />
</Frame>

**Step 2. Configure Proxy Settings**

1. In the profile creation window, provide a unique and descriptive name in the **Profile Name** field to identify your browser instance easily.
2. Go to your [Bright Data dashboard](https://brightdata.com/cp/zones) 
3. Under the **Overview** tab, in the **Access Details** section, compose in a text editor the connect string in the following format: `` host:port:username:password` ``
4. Return to Sphere Browser and paste the credentials into the appropriate field.
5. Click the **Create** button (icon with a checkmark) to save the proxy settings.

<Note>
  For geo-targeted proxies, format your username as `your-username-country-XX` (e.g., `your-username-country-US`) to select a specific location.
</Note>

**Step 3. Launch and Verify**

1. Locate the profile you just configured.
2. Click **Check Proxy** to ensure the connection is successful.

<Frame>
  <img alt="How to Integrate Bright Data With Sphere Browser" />
</Frame>

Integrating Bright Data with Sphere Browser ensures a secure and anonymous browsing experience tailored to your needs. Whether managing multiple accounts or exploring geo-restricted content, this setup gives you the privacy and flexibility you need. Start leveraging the power of Bright Data and Sphere Browser today!
