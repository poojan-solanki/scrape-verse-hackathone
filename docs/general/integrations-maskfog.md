# How to integrate Bright Data with Maskfog

> **Official Source**: [https://docs.brightdata.com/integrations/maskfog](https://docs.brightdata.com/integrations/maskfog)
> **Category**: `general`

---

Configure Bright Data proxies in Maskfog to route anti-detect browsing profiles through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is Maskfog?

**Maskfog** is an anti-detect browser designed for managing multiple accounts securely and anonymously. It provides tools to prevent detection, protect your digital footprint, and simulate unique browser environments for each profile. Integrating Bright Data with Maskfog adds an extra layer of security and flexibility for geo-targeted activities.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## How to Integrate Bright Data With Maskfog

<Step title="Download and Install Maskfog">
  1. Visit the [Maskfog website](https://www.maskfog.com/) and download the application for your operating system.
  2. Install the software and log in using your credentials.
</Step>

<Step title="Create a New Profile">
  1. Open Maskfog and navigate to the **Proxy Service** section.
  2. Click **Configure Device** to start setting up a new proxy.

  <Frame>
    <img alt="How to Integrate Bright Data With Maskfog" />
  </Frame>
</Step>

<Step title="Enter Proxy Details">
  1. Enter a recognizable name in the **Proxy Name** field to identify the configuration later.

  2. Input the following details retrieved from your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans):
     * **Proxy Type**: Select HTTP, HTTPS, or SOCKS5 based on your proxy type.
     * **Proxy Host**: Enter `http://brd.superproxy.io/`.
     * **Proxy Port**: Use the port number provided in your Bright Data dashboard.
     * **Proxy username**: Enter your Bright Data `username`.
     * **Proxy password**: Enter your Bright Data `password`.

  3. Test the proxy connection by clicking **Check Proxy**. Ensure the connection is successful before proceeding.

  4. After verifying, click **OK** to save the configuration.

  <Note>
    If you need proxies for a specific location, include the country code in your username. Format it as:
    `your-username-country-XX` (e.g., `your-username-country-US`) to select a proxy from the desired country.
  </Note>
</Step>

You're All Set! With your proxy successfully configured, Maskfog is now equipped with Bright Data for secure and anonymous connections. Enjoy enhanced privacy and seamless browsing.
