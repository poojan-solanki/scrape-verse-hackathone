# Set up Bright Data with Undetectable

> **Official Source**: [https://docs.brightdata.com/integrations/undetectable](https://docs.brightdata.com/integrations/undetectable)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) in the Undetectable antidetect browser to manage multiple profiles with isolated fingerprints and geo-targeted exits.

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

## What is Undetectable?

Undetectable is an anti-detect browser that enables secure and anonymous browsing by creating multiple browser profiles with unique digital fingerprints. It's perfect for web scraping, data collection, and other activities requiring privacy and security.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## How to Integrate Bright Data With Undetectable

**Step 1. Download and Log In to Undetectable**

1. Visit the [Undetectable website](https://undetectable.io/) and download the application.
2. Install the software on your system and log in using your credentials.

**Step 2. Access Proxy Configuration**

1. Open Undetectable and go to the **Proxy** tab.

<Frame>
  <img alt="How to Integrate Bright Data With Undetectable" />
</Frame>

2. Click on the **Plus** button to add a new proxy.

<Frame>
  <img alt="How to Integrate Bright Data With Undetectable" />
</Frame>

**Step 3. Configure Bright Data Proxy Details**

1. In the proxy setup window:

* Provide a descriptive name in the **Proxy Name** field for easy identification.
* **Type**: Select HTTP or SOCKS5.
* **Host**: `http://brd.superproxy.io/`.
* **Port**: The port number from your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans).
* **Login**: Your Bright Data username.
* **Password**: Your Bright Data password.

2. Click **Check** to verify the connection.
3. Once verified, click **Save Proxy** to store your proxy settings.

<Note>
  For geo-targeted proxies, format your username as `your-username-country-XX` (e.g., `your-username-country-US`) to select a specific location.
</Note>

With your Bright Data successfully integrated into Undetectable, you’re now ready to browse securely and anonymously. Enjoy enhanced privacy and seamless operations!
