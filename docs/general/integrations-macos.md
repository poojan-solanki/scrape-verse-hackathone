# How to use Bright Data on macOS

> **Official Source**: [https://docs.brightdata.com/integrations/macos](https://docs.brightdata.com/integrations/macos)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies in macOS system network settings for system-wide geo-targeted browsing. Spans 195 countries.

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

## Why Use Bright Data on macOS?

Adding Bright Data proxies to your macOS network settings enables you to:

* **Enhance Privacy**: Hide your real IP address and browse securely
* **Access Geo-Restricted Content**: Route traffic through different countries and regions
* **Maintain Stable Connections**: Reduce detection risks across browsers and desktop applications
* **System-Wide Coverage**: Apply proxy routing to all apps that respect macOS network settings

***

## Setting Up Bright Data on macOS

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have:

    * **Bright Data Proxy Credentials**\
      Log in to your [Bright Data dashboard](https://brightdata.com/cp/zones) to retrieve:
      * Host
      * Port
      * Username
      * Password\
        Also confirm whether you are using `HTTP`, `HTTPS`, or `SOCKS5` proxies.

    * **A macOS device running macOS 10.12 (Sierra) or later**
  </Step>

  <Step title="Open Network Settings">
    1. Click the **Apple menu** in the top-left corner of your screen.
    2. Select **System Settings** (or **System Preferences** on older macOS versions).

    <Frame>
      <img alt="macOS Apple menu open with System Settings option highlighted" />
    </Frame>

    3. Open **Network** and select the connection you want to configure (for example, **Wi-Fi** or **Ethernet**).

    <Frame>
      <img alt="macOS Network settings with Wi-Fi connection selected" />
    </Frame>
  </Step>

  <Step title="Open Advanced Network Options">
    1. Click **Details…** (or **Advanced…** on older versions).

    <Frame>
      <img alt="macOS Wi-Fi network details panel with Details button to open advanced options" />
    </Frame>

    2. Navigate to the **Proxies** tab.

    <Frame>
      <img alt="macOS Network advanced settings showing the Proxies tab" />
    </Frame>
  </Step>

  <Step title="Select the Proxy Type">
    Choose the proxy protocol based on your Bright Data setup:

    * **Web Proxy (HTTP)** for HTTP proxies
    * **Secure Web Proxy (HTTPS)** for HTTPS proxies
    * **SOCKS Proxy** for SOCKS5 proxies

    <Frame>
      <img alt="macOS Proxies tab with Web Proxy, Secure Web Proxy, and SOCKS Proxy options" />
    </Frame>
  </Step>

  <Step title="Enter Bright Data Proxy Details">
    Fill in the proxy configuration fields:

    * **Server**: `brd.superproxy.io`
    * **Port**: Use the port provided in your Bright Data dashboard
    * Enable **Proxy server requires password**
    * **Username**: Your Bright Data username\
      *(Optionally append `-session-<id>` for IP persistence or `-country-XX` for geo-targeting)*
    * **Password**: Your Bright Data proxy password

    Click **OK**, then **Apply** to save the configuration.
  </Step>

  <Step title="Verify the Proxy Connection">
    1. Open **Safari**, **Chrome**, or another browser.
    2. Visit:

    [http://httpbin.org/ip](http://httpbin.org/ip)

    3. Confirm the displayed IP matches your Bright Data proxy IP.
  </Step>
</Steps>

***

## Best Practices

* Use **ISP or Datacenter proxies** for long-running desktop workflows
* Avoid frequently switching networks when using proxies
* Keep credentials secure and rotate sessions periodically
* Recheck proxy settings after macOS updates
* Use one proxy per account for account-based tasks

***

## Conclusion

You’ve successfully configured **Bright Data on macOS**. Your system traffic is now routed through secure, anonymous proxy connections, enabling private browsing and geo-flexible access across applications. With Bright Data in place, your Mac is ready for safer, more reliable online operations.
