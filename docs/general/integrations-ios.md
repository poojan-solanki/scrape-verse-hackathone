# How to use Bright Data on iOS

> **Official Source**: [https://docs.brightdata.com/integrations/ios](https://docs.brightdata.com/integrations/ios)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies on iOS devices via Wi-Fi network settings for private and geo-targeted browsing. Spans 195 countries.

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

## Why Use Bright Data on iOS?

Using Bright Data proxies on your iOS device allows you to:

* **Protect Your Privacy**: Hide your real IP address and browse securely.
* **Access Geo-Restricted Content**: Route traffic through different countries and regions.
* **Improve Connection Reliability**: Reduce detection risks and maintain stable, anonymous connections while browsing, shopping, or managing accounts.

***

## Prerequisites

Before you begin, ensure you have:

* **Bright Data Proxy Credentials**\
  Log in to your [Bright Data dashboard](https://brightdata.com/cp/zones) and note your **Host**, **Port**, **Username**, and **Password**.

* **An iPhone or iPad running iOS 10 or later**\
  The steps below apply to most modern iOS versions.

***

## Configuring a Proxy for a Wi-Fi Network

<Steps>
  <Step title="Open Wi-Fi Settings">
    1. Open **Settings** on your iOS device.
    2. Tap **Wi-Fi**, then select the **ⓘ (Info)** icon next to your connected network.

    <Frame>
      <img alt="iOS Settings app showing the Wi-Fi screen" />

      <img alt="iOS Wi-Fi network details with the info icon to open network configuration" />
    </Frame>
  </Step>

  <Step title="Change Proxy Settings to Manual">
    1. Scroll down to **HTTP Proxy**.
    2. Switch the setting from **Off** or **Automatic** to **Manual**.
    3. Toggle **Authentication** **On**.

    <Frame>
      <img alt="iOS Configure Proxy screen with Off, Automatic, and Manual options" />

      <img alt="iOS Manual proxy configuration with Server, Port, Authentication toggle, Username, and Password fields" />
    </Frame>
  </Step>

  <Step title="Enter Bright Data Proxy Credentials">
    Fill in the following details:

    * **Server**: `brd.superproxy.io`
    * **Port**: Use the port provided in your Bright Data dashboard
    * **Username**: Your Bright Data proxy username
    * **Password**: Your Bright Data proxy password

    Ensure all values are correct, then tap **Save** to apply the configuration.
  </Step>

  <Step title="Verify the Connection">
    1. Open **Safari** or any browser on your device.
    2. Visit:

    [http://httpbin.org/ip](http://httpbin.org/ip)

    3. Confirm that the displayed IP matches your Bright Data proxy IP.
  </Step>
</Steps>

***

## Best Practices

* Use **ISP or Datacenter proxies** for better stability on mobile devices
* Avoid switching Wi-Fi networks frequently when using proxies
* Keep your Bright Data credentials secure
* Re-check proxy settings after iOS updates

***

## Conclusion

You have successfully configured **Bright Data on iOS**. Your Wi-Fi traffic is now routed through secure and anonymous proxy connections, enabling private browsing and access to geo-restricted content. Enjoy a safer, more flexible browsing experience with Bright Data wherever you go.
