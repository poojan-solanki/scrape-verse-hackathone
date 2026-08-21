# How to set up Bright Data with Multilogin

> **Official Source**: [https://docs.brightdata.com/integrations/multilogin](https://docs.brightdata.com/integrations/multilogin)
> **Category**: `general`

---

Integrate Bright Data (400M+ residential IPs) with Multilogin for secure, undetectable browsing and improved privacy in web scraping and data collection.

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

## What is Multilogin?

Multilogin is a powerful browser tool designed for managing multiple online accounts without the risk of detection or bans. It’s a popular choice for marketers, affiliate marketers, and researchers who need isolated browsing environments for data collection and competitive intelligence.

Multilogin works by creating isolated, unique browsing profiles that simulate separate devices. Each profile appears as if it’s being accessed from a different location or device, making it impossible for platforms to link accounts. This ensures safer, undetected browsing, so you can manage multiple accounts with confidence.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

<Warning>
  Connections to the following social networks are not supported on Data Center and ISP proxy networks: Facebook, TikTok, Instagram, X (Twitter), LinkedIn, YouTube, Reddit, Pinterest, Snapchat, and Discord.
</Warning>

## Multilogin Proxy Integration

Follow these simple steps to set up Bright Data proxies in Multilogin:

<Steps>
  <Step title="Open Multilogin">
    Launch the [**Multilogin app**](https://multilogin.com/) and log in to your account.
  </Step>

  <Step title="Create a New Profile">
    Click on **New Profile** and enter the following details:

    * **Profile Name:** Choose a name for your profile (e.g., *Bright Data*).

    * **Operating System:** Select the operating system that matches your original setup (macOS, Windows, or Linux) to avoid fingerprint discrepancies.

    * **Storage Type:** Choose **Cloud Storage** if you plan to work in a team or use the profile on multiple devices.

    * **Browser Type:** Select between **Mimic** (based on Chrome) or **Stealthfox** (based on Firefox). Both options offer excellent anti-detection features.
  </Step>

  <Step title="Add a New Proxy">
    Within the profile settings, navigate to the **Proxy** section and choose **Custom**.
  </Step>

  <Step title="Configure Your Bright Data Proxy">
    Follow these steps to enter your Bright Data proxy details:

    * **Proxy**: Choose from `HTTP`, `HTTPS`, or `SOCKS5` (based on your proxy type).
    * **New address:**  Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Login**: Enter your Bright Data proxy `username`.
    * **Password**: Enter your Bright Data proxy `password`.

    Click **Check Proxy** to verify the connection.

    <Info>
      * For **country-specific** proxies, you can enter a format like `your-username-country-US` to receive a US exit node.
      * If you configure multiple sessions, and you would like to assign specific IP to each session, add the IP address of the specific proxy with the option `-ip` to the username. So if the IP you want to use is `1.2.3.4` it should be: `your-username-ip-1.2.3.4`.
    </Info>
  </Step>

  <Step title="Save Your Settings">
    Once you’ve entered all the proxy details, click **Create Profile** to save your settings.
  </Step>
</Steps>

And that's it! You’ve successfully integrated Bright Data proxies with Multilogin.
