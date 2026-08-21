# How to set up Bright Data on Windows

> **Official Source**: [https://docs.brightdata.com/integrations/windows](https://docs.brightdata.com/integrations/windows)
> **Category**: `general`

---

Configure Bright Data Datacenter, ISP and Residential proxies on Windows 10 or 11 to route browser and system traffic through geo-targeted IPs.

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

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

<Tip>
  Maintain a consistent IP throughout your browsing session by using the `-session` parameter in your username. Bright Data proxies rotate IPs by default.\
  [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session)

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

## Why Use Bright Data on Windows?

Configuring Bright Data on Windows allows you to:

* **Protect Your Privacy**: Mask your real IP address across browsers and applications
* **Access Geo-Restricted Content**: Route traffic through different countries or regions
* **System-Wide Proxy Support**: Apply proxy settings to all apps that follow Windows network configuration
* **Stable, Secure Connections**: Reduce detection risks during browsing or automation tasks

***

## Setting Up Bright Data Proxies on Windows

The proxy setup process is the same for **Windows 10 and Windows 11**. Follow the steps below to configure Bright Data at the system level.

### Step 1. Open Network & Internet Settings

1. Press **Windows + I** to open **Settings**.
2. Navigate to **Network & Internet**.

<Frame>
  <img alt="Step 1. Open Network & Internet Settings" />
</Frame>

***

### Step 2. Enable Automatic Detection

1. Select **Proxy** from the left-hand menu.
2. Under **Automatic proxy setup**, turn **Automatically detect settings** **On**.

<Frame>
  <img alt="Step 2. Enable Automatic Detection" />
</Frame>

***

### Step 3. Configure Manual Proxy Settings

1. Scroll down to **Manual proxy setup**.
2. Toggle **Use a proxy server** to **On**.
3. Enter the following values:

* **Address**: `brd.superproxy.io`
* **Port**: Use the port provided in your Bright Data dashboard

4. Click **Save** to apply the settings.

<Note>
  Windows does not store proxy usernames and passwords in system settings.\
  When prompted by a browser or application, enter your Bright Data **Username** and **Password** to authenticate.

  To maintain IP consistency or enable geo-targeting, append parameters to your username (for example, `-session-1` or `-country-US`).
</Note>

***

## Verify the Proxy Connection

After saving the settings:

1. Open a browser on your Windows device.
2. Visit:

[http://httpbin.org/ip](http://httpbin.org/ip)

3. Confirm that the displayed IP matches your Bright Data proxy.

***

## Best Practices

* Use **ISP or Datacenter proxies** for better stability on Windows
* Avoid frequently toggling proxy settings during active sessions
* Use one dedicated proxy per account for account-based workflows
* Keep Bright Data credentials secure
* Recheck proxy settings after Windows updates

***

## Conclusion

You’ve successfully configured **Bright Data on Windows**. Your system traffic is now routed through secure, anonymous proxy connections, enabling private browsing and geo-flexible access across applications. With Bright Data in place, you can work, browse, and automate confidently on Windows.
