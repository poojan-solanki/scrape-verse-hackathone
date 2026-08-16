# How to use Bright Data with Postman

> **Official Source**: [https://docs.brightdata.com/integrations/postman](https://docs.brightdata.com/integrations/postman)
> **Category**: `general`

---

Configure Bright Data proxies (port 44445) in Postman to route API tests through residential, datacenter, ISP or mobile IPs with geo-targeted exit nodes.

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

## What is Postman?

Postman is a widely-used API platform that simplifies testing, developing, and managing APIs. It allows developers to send requests, monitor responses, and organize workflows efficiently. Integrating Bright Data with Postman ensures anonymity, security, and the ability to test APIs in different geo-locations.

## Why Use Bright Data With Postman?

* **Enhanced Privacy**: Mask your IP address to keep your API testing anonymous.

* **Geo-Specific Testing**: Use Bright Data proxies to simulate API calls from different countries.

* **Improved Security**: Safeguard your API requests with secure and private connections.

## How to Integrate Bright Data With Postman

<Steps>
  <Step title="Prerequisites">
    1. **Download Postman**: Install the latest version of [Postman](https://www.postman.com/downloads/). Once installed, launch the application and sign in to your account.
    2. **Bright Data Proxy Credentials**:
       * Log in to your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans) to retrieve your **Host**, **Port**, **Username**, and **Password**.
       * For geo-specific proxies, modify your username using the format `your-username-country-XX` (e.g., `your-username-country-US`).
  </Step>

  <Step title="Access Proxy Settings">
    1. In the Postman interface, click the **gear icon** in the top-right corner to access the **Settings** menu.

    <Frame>
      <img alt="How to Integrate Bright Data With Postman" />
    </Frame>
  </Step>

  <Step title="Configure Bright Data Details">
    1. Navigate to the **Proxy** tab on the left-hand menu.
    2. Toggle the "**Use custom proxy configuration**" to *On* if it’s not already enabled.
    3. Enter your Bright Data proxy details:
       * **Type**: Select either HTTP or HTTPS based on your Bright Data configuration.
       * **Host**: Enter `http://brd.superproxy.io/`.
       * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans).
       * **Username**: Enter your Bright Data `username`.
       * **Password**: Enter your Bright Data `password`.
  </Step>

  <Step title="Test Your Proxy Configuration">
    1. Create a new request in Postman and set the method to **GET**.
    2. Enter the following URL to test the proxy: [https://httpbin.org/ip](https://httpbin.org/ip).
    3. Click **Send** to execute the request.

    If the response shows the IP address of your Bright Data proxy, the configuration is successful.
  </Step>
</Steps>

By integrating Bright Data proxies with Postman, you enhance your API testing workflows with privacy and reliability. Whether you’re debugging, developing, or scaling API tasks, Bright Data proxies provide the secure and anonymous connection you need. Try it out today to streamline your API projects!
