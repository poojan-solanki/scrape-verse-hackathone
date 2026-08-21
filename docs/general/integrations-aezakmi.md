# How to set up Bright Data with Aezakmi

> **Official Source**: [https://docs.brightdata.com/integrations/aezakmi](https://docs.brightdata.com/integrations/aezakmi)
> **Category**: `general`

---

Configure Bright Data proxies in Aezakmi to route browser profile traffic through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is Aezakmi?

Aezakmi is a browser automation tool designed for marketers, researchers, and developers who require multiple browser profiles with unique configurations. With Bright Data, you can ensure secure, anonymous, and location-targeted browsing while avoiding IP bans and tracking.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## Why Use Bright Data With Aezakmi?

* **Enhanced Privacy**: Mask your real IP address for secure browsing.

* **Geo-Targeting**: Access region-specific content with country-specific proxies.

* **Consistent Performance**: Ensure reliable and uninterrupted connections for all your browser profiles.

## How to Integrate Bright Data With Aezakmi

Follow these steps to configure Bright Data proxies in Aezakmi:

**Step 1. Install and Log In to Aezakmi**

1\. Download and install Aezakmi from the [official website](https://aezakmi.run/).

2\. Open the application and log in with your account credentials.

**Step 2. Create a New Browser Profile**

1\. Navigate to your [dashboard](https://account.aezakmi.run/#/dashboard) or click **Create New Profile** in the **Aezakmi Extension**.

2\. Configure your profile by selecting parameters such as:

* **Operating System**

* **Browser**

* **Screen Resolution**

* **Videocard Model**

3\. Click **Generate Fingerprint** to create a unique browser fingerprint profile tailored to your setup.

<Frame>
  <img alt="How to Integrate Bright Data With Aezakmi" />
</Frame>

**Step 3. Enable Proxy for Your Profile**

1\. In the profile setup screen, enter a descriptive name in the **Profile Name** field to easily identify the profile later.

2\. Toggle **Enable Proxy** to *On* to activate the proxy configuration options.

<Frame>
  <img alt="How to Integrate Bright Data With Aezakmi" />
</Frame>

**Step 4. Configure Proxy Settings**

1\.  Under the proxy settings section, enter your Bright Data proxy details:

* **Protocol**: Choose HTTP, HTTPS, or SOCKS5 based on your proxy type.

* **Address**: Enter [`http://brd.superproxy.io/`.](http://brd.superproxy.io/.)

* **Port**:  44445

* **User**: Input your Bright Data username.

* **Password**: Input your Bright Data password.

2\. Click **Check Proxy** to verify your connection. Ensure the test completes successfully.

<Note>
  For geo-targeted proxies, include the country code in the username, formatted as `your-username-country-XX` (e.g., `your-username-country-US`).
</Note>

**Step 5. Save and Launch**

* Once your proxy details are verified, click **Save Fingerprint** to apply the settings and save the profile.

By integrating Bright Data with Aezakmi, you can unlock a secure and efficient browsing experience. Whether scraping data, conducting market research, or accessing geo-restricted content, Bright Data ensures privacy, reliability, and performance. Get started today to maximize your productivity!
