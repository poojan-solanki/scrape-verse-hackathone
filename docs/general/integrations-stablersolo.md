# Set up Bright Data with StablerSOLO

> **Official Source**: [https://docs.brightdata.com/integrations/stablersolo](https://docs.brightdata.com/integrations/stablersolo)
> **Category**: `general`

---

Configure Bright Data proxies (400M+ IPs) inside StablerSOLO antidetect profiles to run sneaker and ecommerce automation with geo-targeted residential IPs.

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

## What is StablerSOLO?

**StablerSOLO** is a low-code data extraction and web scraping platform that allows developers, analysts, and data teams to configure and run scrapers without writing custom code for every target. It simplifies large-scale data collection while maintaining flexibility for advanced scraping needs.

When combined with Bright Data proxies, StablerSOLO delivers higher success rates, stronger anonymity, and reliable access to geo-restricted content.

***

## Why Use Bright Data With StablerSOLO?

* **Enhanced Anonymity**: Protect your real IP address during scraping operations
* **Geo-Targeted Access**: Collect region-specific data using country- or city-level proxies
* **Higher Success Rates**: Reduce blocks and CAPTCHAs with premium proxy IPs
* **Scalable Extraction**: Run large-scale scraping tasks reliably

***

## How to Integrate Bright Data With StablerSOLO

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have:

    * An active StablerSOLO account
    * An active Bright Data account
    * A configured Bright Data proxy zone (ISP or Datacenter recommended)
    * Your Bright Data proxy credentials (host, port, username, password)
  </Step>

  <Step title="Access StablerSOLO Proxy Configuration">
    1. Log in to your [StablerSOLO account](https://stabler.tech/).
    2. From the main dashboard, scroll down to the **Recent Proxies** section.
    3. Click **New Proxy** to open the proxy configuration window.

    <Frame>
      <img alt="How to Integrate Bright Data With StablerSOLO" />
    </Frame>
  </Step>

  <Step title="Add Bright Data Proxy Details">
    1. In the proxy configuration window:
       * Switch to the **Proxies List** tab.
       * Enter your Bright Data proxy credentials in the following format:

    Example:

    2. Click **Test a Proxy Randomly** to verify connectivity.
    3. Once the test succeeds, click **Add New Proxy** to save the proxy.

    <Note>
      To maintain a consistent IP, append a session parameter to your username\
      (for example, `username-session-1`).

      For geo-targeted scraping, format the username as\
      `username-country-XX` (for example, `username-country-US`).
    </Note>
  </Step>

  <Step title="Apply the Proxy to Scraping Jobs">
    1. Select the newly added proxy when configuring your scraping tasks.
    2. Run a small test extraction to confirm successful data retrieval.
    3. Monitor execution logs for stability and performance.
  </Step>
</Steps>

***

## Best Practices

* Use **ISP or Datacenter proxies** for long-running scraping jobs
* Assign separate proxies for different target websites or regions
* Avoid excessive parallel requests from a single proxy
* Rotate sessions periodically for large-scale extraction
* Monitor StablerSOLO logs for proxy-related errors

***

## Conclusion

By integrating Bright Data with StablerSOLO, you create a secure, scalable, and geo-flexible data extraction setup. This integration improves scraping success rates, minimizes detection risks, and enables reliable data collection across regions and platforms. With your proxy configuration complete, you’re ready to scale your data workflows with confidence.
