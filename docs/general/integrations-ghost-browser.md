# Set up Bright Data with Ghost Browser

> **Official Source**: [https://docs.brightdata.com/integrations/ghost-browser](https://docs.brightdata.com/integrations/ghost-browser)
> **Category**: `general`

---

Configure Bright Data proxies in Ghost Browser to route multi-session browsing through residential, datacenter, ISP, or mobile IPs. Spans 195 countries.

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

## What is Ghost Browser?

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

<Warning>
  Connections to the following social networks are not supported on Data Center and ISP proxy networks: Facebook, TikTok, Instagram, X (Twitter), LinkedIn, YouTube, Reddit, Pinterest, Snapchat, and Discord.
</Warning>

Ghost Browser is a productivity-driven web browser designed for users who need to manage multiple online accounts effortlessly. With its unique multi-session feature, you can open separate tabs, each acting as an independent browser session. This means you can log into multiple accounts on the same platform at once, without any cross-session interference.

While it doesn’t focus on advanced anti-detection features, Ghost Browser is ideal for those who want a simple, organized workflow. It’s perfect for professionals juggling multiple accounts or projects, all in one streamlined interface.

## Ghost Browser Proxy Integration

Here’s how to integrate Bright Data proxies into Ghost Browser:

<Steps>
  <Step title="Install Ghost Browser">
    1. Download and install [**Ghost Browser**](https://ghostbrowser.com/download/).
    2. Once installed, log in to your account to access the main interface.
  </Step>

  <Step title="Access Ghost Proxy Control">
    1. Click the **Ghost Proxy Control** icon in the top-right corner of the browser.
    2. Select **Add/Edit Proxies**.

    <Frame>
      <img alt="Ghost Browser Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Add a New Proxy">
    In the **Proxy Manager**, select the option to **Add a Single Proxy**.

    <Frame>
      <img alt="Ghost Browser Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Your Bright Data Proxy">
    In the proxy setup window, fill out the fields with your Bright Data proxy details:

    * **Name**: Optional – give your proxy a descriptive name (e.g., "Bright Data").
    * **Host**: Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Username**: Enter your Bright Data proxy `username`.
    * **Password**: Enter your Bright Data proxy `password`.

    Click **Add Proxy** to save your settings.

    <Info>
      For country-specific proxies, you can enter a format like `your-username-country-US` to receive a US exit node.
    </Info>
  </Step>

  <Step title="Activate Proxy in Ghost Browser">
    1. Go back to the **Ghost Proxy Control** menu.
    2. Select your newly added Bright Data proxy under the **Active Identity** and **Active Workspace** settings.
    3. Then, reload your tabs to apply the selected proxy to your browsing session.
  </Step>
</Steps>

**And that’s it!** Your Bright Data proxy is now integrated with Ghost Browser.
