# Set up Bright Data with Proxifier

> **Official Source**: [https://docs.brightdata.com/integrations/proxifier](https://docs.brightdata.com/integrations/proxifier)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies in Proxifier to route traffic from applications that lack native proxy support. Spans 195 countries.

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

## What is Proxifier?

**Proxifier** is a powerful desktop application that allows programs without native proxy support to connect through HTTPS, HTTP, or SOCKS5 proxies. It’s ideal for routing traffic securely, managing application-specific connections, and providing an alternative to VPNs. Its rule-based setup lets you assign proxies to specific applications, giving you precise control over your internet usage.

## How to Integrate Bright Data With Proxifier

**Step 1. Download and Install Proxifier**

1. Visit the [Proxifier website](https://www.proxifier.com/download/) to download the application.

2. Follow the installation instructions and launch Proxifier on your system.

**Step 2. Access Proxy Settings**

1. Open Proxifier and navigate to the **Profile** menu.

2. Select **Proxy Servers** to manage your proxy configurations.

<Frame>
  <img alt="Proxifier Profile menu showing Proxy Servers option" />
</Frame>

**Step 3. Add Your Bright Data Proxy**

1. Click the **Add** button to configure a new proxy.

<Frame>
  <img alt="Proxifier Proxy Servers dialog with Add button highlighted" />
</Frame>

2. In the **Proxy Server** dialog, input the following details:

* **Type**: Select HTTP, HTTPS, or SOCKS5.
* **Address**: `http://brd.superproxy.io/`.
* **Port**: Enter the port from your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans).
* Enable **Authentication** and provide:
  * **Username**: Your Bright Data username.
  * **Password**: Your Bright Data password.

3. Click **OK** to save the settings. The proxy will now appear in the list.

<Note>
  **`For geo-targeted proxies, include the country code in your username (e.g., your-username-country-US for a US-based IP).`**
</Note>

**Step 4. Test the Proxy Connection**

1. In the **Proxy Servers** section, select your configured proxy.

2. Click **Check** and then **Start Testing**. Ensure the test is successful before proceeding.

<Frame>
  <img alt="Proxifier Check Proxy test result confirming a successful Bright Data connection" />
</Frame>

**Step 5. Create Proxy Rules for Applications**

1. Go to **Profile** > **Proxification Rules**.

<Frame>
  <img alt="Proxifier Profile menu showing Proxification Rules option" />
</Frame>

2. Click **Add** to set up a new rule.

<Frame>
  <img alt="Proxifier Proxification Rules dialog with Add button to create a new rule" />
</Frame>

3. Name the rule for clarity.

<Frame>
  <img alt="Proxifier rule configuration dialog showing the Name field" />
</Frame>

4. Use the **Browse** button to specify the application (e.g., Chrome, Firefox) for the rule.

<Frame>
  <img alt="Proxifier Applications field with Browse button to select target application" />
</Frame>

5. Choose how the traffic is routed:

* Through the proxy.
* Directly to the internet.
* Blocked entirely.

<Frame>
  <img alt="Proxifier rule Action options: Proxy, Direct, or Block traffic" />
</Frame>

6. Save the rule and move it to the top of the list for priority.

<Frame>
  <img alt="Proxifier rules list with the new Bright Data rule moved to the top" />
</Frame>

**Step 6. Verify and Start Browsing**

1. Launch the application associated with your rule.

2. Visit an IP-checking website (e.g., [httpbin.org/ip](http://httpbin.org/ip)) to confirm that the proxy is active.

With **Bright Data** set up in **Proxifier**, you can manage your network traffic with precision, route applications through secure proxies, and ensure privacy for even the most complex workflows. Whether you need anonymity, faster connections, or app-specific routing, this setup empowers you to control your internet experience with ease.

## Why I get wrong GeoLocation or blocked with Proxifier and BrightData?

Proxifier enables you to control applications running and selectively direct them to route their traffic via Bright Data's proxy. If the application is attempting to access and IP address and not a domain name, Bright Data may either block it or route the request thru our Superproxy servers and not the Proxy peers. It means that the target domain will see this request coming from Bright Data servers and not from your assigned proxy and may block it.

Bright Data does not allow targeting IP addresses due to our compliance rules and regulations.
