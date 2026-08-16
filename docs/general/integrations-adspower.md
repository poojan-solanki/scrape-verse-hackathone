# How to set up Bright Data with AdsPower

> **Official Source**: [https://docs.brightdata.com/integrations/adspower](https://docs.brightdata.com/integrations/adspower)
> **Category**: `general`

---

Pair Bright Data (400M+ residential IPs) with AdsPower to stay secure and undetectable for privacy-focused research and market intelligence at scale.

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

## What is AdsPower?

AdsPower is a versatile anti-detect browser perfect for marketers, researchers, and data professionals who need a secure, efficient way to manage multiple browser profiles. Each profile runs in its own isolated environment, keeping your activities discreet and safe from detection.

With AdsPower, you get unique digital fingerprints for every profile, things like IP address, device type, and user agent, ensuring your actions stay under the radar. Whether you’re collecting web data, conducting market research, or working on affiliate marketing, AdsPower keeps your browsing profiles secure and private.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## AdsPower Proxy Integration

Integrating Bright Data proxies with AdsPower is quick and easy. Let’s set you up in a few simple steps:

Step 1. **Download AdsPower**. Head over to the [AdsPower website](https://www.adspower.com/download) to download and install the app.

Step 2. **Create a New Profile.** Once the app is installed, open it and click **New Profile** to create your first browser profile.

<Frame>
  <img alt="AdsPower Proxy Integration" />
</Frame>

Step 3. **Configure Your Proxies**. Now, let’s set up your Bright Data proxy. Follow these simple steps:

* **Proxy Type**: Choose from`HTTP`,`HTTPS`, or`SOCKS5`(based on your proxy type).

* **Proxy Host**: Enter[`http://brd.superproxy.io/`.](http://brd.superproxy.io/.)

* **Proxy Port**: 44445

* **Proxy Username**: Enter your Bright Data proxy zone`username`.

* **Proxy Password**: Enter your Bright Data proxy zone`password`.

Step 4: Click **Check Proxy** to ensure everything is working.

<Note>
  Some versions of AdsPower use `google.com` as their default test site. Bright data proxies are blocking `google.com`. Validate this is not a search engine website.
</Note>

<Note>
  If you chose either Residential or Mobile proxies you must install Bright Data SSL certificate to secure your end to end communication. **Otherwise you will encounter Errors**.
  SSL installation instructions can be found [here](/general/account/ssl-certificate#ssl-certificate)
  Alternatively, you can ignore SSL verification on AdsPower: Go to advanced settings when setting up a profile and paste: `--ignore-certificate-errors` in launch args.
</Note>

<Info>
  **For country-specific proxies, you can enter a format like `your-username-country-us` to receive a United States exit node.**
</Info>

Once everything is in place, click **OK** to save your settings.

Step 5. **Launch the Browser**.\
Click **Open** under **Tags** to launch your browser with the configured proxy.

<Frame>
  <img alt="AdsPower Proxy Integration" />
</Frame>

That’s it! You’ve successfully integrated Bright Data proxies with AdsPower, and you’re ready to go.
