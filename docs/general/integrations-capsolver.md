# How to set up Bright Data with Capsolver

> **Official Source**: [https://docs.brightdata.com/integrations/capsolver](https://docs.brightdata.com/integrations/capsolver)
> **Category**: `general`

---

Integrate Bright Data proxies (195 countries) with Capsolver to solve reCAPTCHA, hCaptcha and image CAPTCHAs in automation and scraping workflows.

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

## What is Capsolver?

Capsolver is a CAPTCHA-solving service that automates the process of bypassing common CAPTCHA challenges such as reCAPTCHA, hCaptcha, and image-based CAPTCHAs. It is commonly used in automation, scraping, and testing workflows where uninterrupted access to target websites is required. When combined with Bright Data proxies, Capsolver provides improved anonymity, geo-targeting, and reliability.

***

## Why Use Bright Data With Capsolver?

* **Enhanced Anonymity**: Hide your real IP address while solving CAPTCHAs.
* **Geo-Targeted Access**: Solve CAPTCHAs from specific countries or regions using localized proxies.
* **Improved Stability**: Reduce request failures and service interruptions.
* **Scalable Automation**: Safely handle high-volume CAPTCHA-solving workloads.

***

## How to Integrate Bright Data With Capsolver

### Prerequisites

Before starting, ensure you have:

* An active Capsolver account
* An active Bright Data account
* A configured Bright Data proxy zone (ISP or Data Center recommended)
* Your Bright Data proxy credentials (host, port, username, password)

***

### Step 1. Log In to Capsolver

* Visit the [Capsolver website](https://www.capsolver.com/) and log in to your account.
* Ensure your Capsolver API key and balance are active before proceeding.

***

### Step 2. Open Proxy Configuration

1. Open the **Capsolver Extension** in your browser.
2. Navigate to the **Settings** section.
3. Locate the **Proxy** option and toggle it **On** to enable proxy usage.

<Frame>
  <img alt="Step 2. Open Proxy Configuration" />
</Frame>

***

### Step 3. Add Your Bright Data Proxy Details

Enter your Bright Data proxy credentials in the proxy configuration fields:

* **Host**: `brd.superproxy.io`
* **Port**: `44445`
* **Username**: Your Bright Data username\
  *(Optionally append `-session-<id>` to maintain a consistent IP)*
* **Password**: Your Bright Data password

<Note>
  For geo-targeted proxies, format the username as\
  `your-username-country-XX` (for example, `your-username-country-US`)\
  to route CAPTCHA-solving traffic through a specific country.
</Note>

***

### Step 4. Save and Test the Proxy

* Save the proxy configuration.
* Run a test CAPTCHA task to verify that Capsolver is routing traffic through the Bright Data proxy.
* Confirm successful execution by checking Capsolver logs or task responses.

***

## Best Practices

* Use session-based usernames to maintain IP consistency during CAPTCHA-heavy workflows
* Assign dedicated proxies for sensitive or account-based tasks
* Avoid excessive parallel CAPTCHA requests from the same proxy
* Monitor Capsolver task logs for proxy-related errors
* Rotate sessions periodically for long-running operations

***

## Conclusion

By integrating Bright Data with Capsolver, you can run secure, anonymous, and scalable CAPTCHA-solving workflows. This setup minimizes detection risks, enables geo-specific operations, and ensures reliable performance across automation tasks. With your proxy configuration in place, you’re ready to handle CAPTCHA challenges efficiently and at scale.
