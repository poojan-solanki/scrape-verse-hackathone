# How to use Bright Data with Geelark

> **Official Source**: [https://docs.brightdata.com/integrations/geelark](https://docs.brightdata.com/integrations/geelark)
> **Category**: `general`

---

Integrate Bright Data proxies (195 countries) with Geelark cloud phones to run anonymous, geo-targeted mobile sessions for multi-account workflows.

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

## What is Geelark?

**Geelark** is a versatile browser profile management tool designed for privacy-conscious users and professionals. It allows you to create isolated browser environments, manage multiple browser profiles, and customize browsing to suit your needs. With Bright Data, you can take your Geelark profiles to the next level by ensuring anonymity, bypassing restrictions, and accessing geo-specific content.

## How to Integrate Bright Data With Geelark

<Steps>
  <Step title="Prerequisites">
    1. **Bright Data Proxy Credentials**:
       * Log in to your [Bright Data dashboard](https://brightdata.com/cp/zones) to get your **Host**, **Port**, **Username**, and **Password**.
       * Use a geo-specific username if you need a proxy from a specific location (e.g., `your-username-country-US`).

    2. **Geelark Installed**:
       * Download and install Geelark from [geelark.com](https://geelark.com/).
       * Launch Geelark and log in using your account credentials.
       * If you don’t have an account, click on **Sign Up** to create one.
  </Step>

  <Step title="Create and Configure a New Profile">
    1. On the Geelark dashboard, click on **New Profile**.
    2. Enter a **Name** and select the desired operating system for the profile.

    <Frame>
      <img alt="How to Integrate Bright Data With Geelark" />
    </Frame>
  </Step>

  <Step title="Configure Proxy Settings">
    1. In the **Proxy Settings** section, select the **Custom** option.

    2. Choose the **Proxy Type** (HTTP, HTTPS, or SOCKS5) based on your Bright Data configuration.

    3. Enter the following Bright Data proxy details:
       * **Proxy Host**: `http://brd.superproxy.io/`.
       * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
       * **Username**: Your Bright Data `username`.
       * **Password**: Your Bright Data `password`.

    4. Click on **Check Proxy** to verify the proxy settings. Ensure the connection is successful before proceeding.
  </Step>

  <Step title="Save and Launch the Profile">
    1. After configuring the proxy settings, click on **OK** to save the profile.
    2. On the Geelark dashboard, locate the newly created profile and click on **Start** to launch it.

    <Frame>
      <img alt="How to Integrate Bright Data With Geelark" />
    </Frame>
  </Step>

  <Step title="Test Your Setup">
    1. Within the launched profile, open a web browser.
    2. Navigate to [httpbin.org/ip](http://httpbin.org/ip) to verify that your IP address reflects the Bright Data, confirming that the setup is successful.
  </Step>
</Steps>

Integrating Bright Data with Geelark gives you a powerful combination of privacy, control, and efficiency. Whether you’re managing multiple browser profiles, accessing geo-restricted content, or ensuring secure connections, Bright Data helps you achieve your goals seamlessly. Try it out today and elevate your Geelark experience!
