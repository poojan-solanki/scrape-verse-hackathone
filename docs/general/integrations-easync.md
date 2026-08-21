# How to set up Bright Data with Easync

> **Official Source**: [https://docs.brightdata.com/integrations/easync](https://docs.brightdata.com/integrations/easync)
> **Category**: `general`

---

Configure Bright Data proxies (port 44445) in Easync to route automated e-commerce operations through residential, datacenter, ISP or mobile IPs.

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

## What is Easync?

**Easync** is an automation tool built for e-commerce businesses to streamline order fulfillment, inventory synchronization, price tracking, and marketplace operations across multiple platforms. By integrating Bright Data with Easync, you can improve automation reliability, protect your IP reputation, and access geo-specific marketplace data with reduced risk of blocks.

***

## Why Use Bright Data With Easync?

* **IP Anonymity**: Hide your real IP address during automated e-commerce operations
* **Geo-Targeted Access**: Access region-specific marketplaces and suppliers
* **Improved Stability**: Reduce IP bans and connection failures
* **Scalable Automation**: Safely handle high-volume order and inventory workflows

***

## How to Integrate Bright Data With Easync

### Prerequisites

Before starting, ensure you have:

* An active Easync account
* An active Bright Data account
* A configured Bright Data proxy zone (ISP or Data Center recommended)
* Bright Data proxy credentials (username, password)
* Administrator access to your operating system network settings

***

### Step 1. Configure Bright Data on Your Operating System

Easync uses the proxy settings configured at the **operating system level**.\
Follow the setup guide for your OS to configure Bright Data as a system proxy:

* [How to Set Up Bright Data on Windows](/integrations/windows)
* [How to Set Up Bright Data on macOS](/integrations/macos)

Once completed, all supported applications, including Easync, will route traffic through Bright Data automatically.

<Note>
  ISP or Data Center proxies are recommended for e-commerce automation due to their higher stability and lower block rates.
</Note>

***

### Step 2. Log In to Easync

1. Visit the [Easync website](https://easync.io/) and log in to your account.
2. Launch the Easync application or dashboard.
3. No additional proxy configuration is required inside Easync, as it inherits system-level proxy settings.

***

### Step 3. Test the Proxy Integration

After configuring Bright Data at the OS level, verify that Easync is using the proxy:

* Perform a lightweight action in Easync, such as:
  * Fetching product details
  * Syncing inventory
  * Placing a test order
* Confirm the task completes successfully without connectivity issues.

***

### Step 4. Verify and Monitor the Setup

1. Use a browser or visit `http://httpbin.org/ip` to confirm that traffic is routed through a Bright Data IP.
2. Monitor task execution inside Easync to ensure:
   * Orders are processed correctly
   * Inventory updates run smoothly
   * No proxy-related errors occur

***

## Best Practices

* Use **dedicated ISP proxies** for account-based marketplace automation
* Assign separate proxies for different seller accounts
* Avoid running too many concurrent tasks on a single proxy
* Monitor Easync logs for timeout or connection errors
* Rotate sessions periodically for long-running workflows

***

## Conclusion

By integrating Bright Data with Easync at the operating system level, you enable secure, anonymous, and stable e-commerce automation. This setup helps protect your IP reputation, reduces block risks, and ensures reliable performance across order processing, inventory management, and price monitoring workflows, allowing you to scale operations with confidence.
