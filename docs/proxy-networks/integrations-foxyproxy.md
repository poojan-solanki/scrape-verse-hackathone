# How to set up Bright Data with FoxyProxy

> **Official Source**: [https://docs.brightdata.com/integrations/foxyproxy](https://docs.brightdata.com/integrations/foxyproxy)
> **Category**: `proxy-networks`

---

Step-by-step guide to configuring Bright Data proxies (port 44445) in FoxyProxy for browser-based scraping, app testing and rule-based proxy switching.

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

## What is FoxyProxy?

**FoxyProxy** is a versatile browser extension available for Chrome and Firefox, designed to simplify proxy management. With just a few clicks, it lets you switch between multiple proxy servers while leveraging the browser's built-in proxy API. Whether you're scraping data, testing applications, or enhancing your online privacy, FoxyProxy offers an intuitive and efficient solution to handle proxies with ease.

## How to Integrate Bright Data With FoxyProxy

<Steps>
  <Step title="Install FoxyProxy Extension">
    1. **For Chrome**: Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp) and click **Add to Chrome**.
    2. **For Firefox**: Go to the [Mozilla Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) and select **Add to Firefox**.

    Once installed, you’ll see the FoxyProxy icon in your browser’s toolbar.
  </Step>

  <Step title="Open FoxyProxy Settings">
    1. Click on the FoxyProxy icon in the toolbar and choose **Options** from the dropdown menu.
    2. This will open the FoxyProxy settings page where you can manage your proxy configurations.

    <Frame>
      <img alt="How to Integrate Bright Data With FoxyProxy" />
    </Frame>
  </Step>

  <Step title="Add a New Proxy Configuration">
    1. Navigate to the **Proxies** tab in the FoxyProxy settings menu.
    2. Click on the **Add** button to open the proxy configuration window.

    <Frame>
      <img alt="How to Integrate Bright Data With FoxyProxy" />
    </Frame>
  </Step>

  <Step title="Input Bright Data Proxy Details">
    1. In the proxy setup form, enter your Bright Data credentials as follows:
       * **Type**: Select `HTTP`, `HTTPS`, or `SOCKS5` based on your proxy type.
       * **Hostname**: Enter `http://brd.superproxy.io/`.
       * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans).
       * **Username**: Enter your Bright Data username.
       * **Password**: Enter your Bright Data password.
    2. Once all details are entered, click **Save** to store the proxy configuration.

    <Note>
      To use a proxy from a specific location, add the country code to your username (e.g., `your-username-country-US` for a US-based proxy).
    </Note>
  </Step>

  <Step title="Activate and Test Your Proxy">
    1. To enable your configured proxy, click the FoxyProxy icon in your toolbar and select the proxy you just created.
    2. Verify the connection by visiting [httpbin.org/ip](http://httpbin.org/ip). The IP address displayed should match your Bright Data proxy.
    3. Note: if you are working with Bright Data Datacenter and ISP proxies you will be allowed to see the proxy IP address. Residential proxies may be blocked by our policy, and you may receive an error. To see your residential proxy details (including location) browse to: [https://geo.brdtest.com/welcome.txt?product=resi\&method=native](https://geo.brdtest.com/welcome.txt?product=resi\&method=native).

    <Frame>
      <img alt="How to Integrate Bright Data With FoxyProxy" />
    </Frame>
  </Step>
</Steps>

With FoxyProxy and Bright Data configured, you’re now set to enjoy secure, seamless browsing and efficient web operations. Whether you're conducting tests, scraping data, or simply enhancing your privacy, this setup makes proxy management effortless.
