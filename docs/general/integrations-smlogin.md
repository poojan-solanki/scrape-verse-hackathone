# How to set up Bright Data with SMLogin

> **Official Source**: [https://docs.brightdata.com/integrations/smlogin](https://docs.brightdata.com/integrations/smlogin)
> **Category**: `general`

---

How to configure Bright Data proxies in SMLogin for secure multi-account management with anonymous browsing capabilities. Covers 195+ countries.

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

## What is SMLogin?

SMLOGIN, a cutting-edge anti-correlation fingerprint browser, offers a robust solution for users needing to operate multiple accounts across various platforms efficiently. By simulating real devices and providing a multi-account/multi-platform secure operation environment, SMLOGIN stands out for its ease of use, reduced resource consumption, and comprehensive security features.

Integrating SMLOGIN with Bright Data's proxies further amplifies these benefits, providing users with an unmatched level of anonymity, security, and flexibility in their online operations.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session) <br />

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).<br />
</Tip>

## Benefits of Using Bright Data Proxies

The synergy between SMLOGIN and [Bright Data's proxy services](https://brightdata.com/proxy-types) brings forth an unparalleled solution for digital marketers, researchers, and data analysts. Here's why this combination is a game-changer:

* **Unmatched Global Network:** Bright Data offers access to a network of 400M+ monthly [real residential IPs worldwide](https://brightdata.com/proxy-types/residential-proxies) across 195+ countries, covering data centers, residential areas, and mobile networks. This vast selection ensures SMLOGIN users can seamlessly manage accounts from any geographic location, crucial for tasks requiring specific regional access.
* **Superior Anonymity and Security**: Operating multiple accounts demands a high level of anonymity to prevent detection and potential bans. Bright Data's proxies provide robust security features that safeguard users' digital footprints, ensuring each SMLOGIN session remains undetectable and secure from prying eyes.
* **High-Speed Performance:** Speed is of the essence in today's fast-paced digital environment. Bright Data's efficient proxy servers guarantee minimal latency and fast loading times, enhancing SMLOGIN's performance and allowing for quicker operations across multiple accounts.
* **Cost-Effective and Resource-Efficient:** Compared to the high costs associated with cloud servers and virtual machines, Bright Data's proxy solutions offer a more economical and resource-efficient alternative for managing multiple accounts. This efficiency is particularly beneficial for users leveraging SMLOGIN for large-scale data collection and competitive intelligence.
* **Flexible and Scalable Solutions:** Bright Data's proxy services are designed to be highly flexible, catering to a [wide array of use cases](https://brightdata.com/use-cases) from web scraping and competitive analysis to affiliate marketing and market research. Whether you're managing a handful of profiles or thousands, Bright Data's infrastructure can scale to meet your needs without compromising on quality or security.
* **Easy Integration and Comprehensive Support:** Integrating Bright Data proxies with SMLOGIN is straightforward, ensuring users can quickly set up and start managing their accounts with enhanced anonymity and efficiency. Furthermore, Bright Data offers extensive documentation and dedicated support, assisting users in maximizing their use of proxies with SMLOGIN for optimal results.

By integrating SMLOGIN with Bright Data's proxy solutions, users unlock a potent combination for web data collection and market research, bolstered by unmatched security, global reach, and operational efficiency.

## SMLOGIN Proxy Integration

Follow this step-by-step guide to integrate our proxy services with SMLOGIN in a few minutes.

<Frame>
  <img alt="SMLOGIN Proxy Integration" />
</Frame>

### Register and Download SMLOGIN

Begin by registering for an account at [SMLOGIN's registration page](https://sys.smlogin.cc/#/passport/register).

Download the SMLOGIN application compatible with Windows 7 and above from SMLOGIN Downloads.

<Frame>
  <img alt="Register and Download SMLOGIN" />
</Frame>

### Installation and Account Login

Install the SMLOGIN application following the on-screen instructions.

Launch SMLOGIN and log into your account using your credentials.

<Frame>
  <img alt="Installation and Account Login" />
</Frame>

### Creating a New Profile

In the SMLOGIN dashboard, click on the “+ one-click new profiles” button to create a new browser profile.

<Frame>
  <img alt="Creating a New Profile" />
</Frame>

### Setting Up the Profile

Customize your new profile according to your preferences, including setting up browser fingerprints, screen resolution, and any other specifics relevant to your browsing or operational needs.

<Frame>
  <img alt="Setting Up the Profile" />
</Frame>

### Binding IP to the Profile

Once the profile setup is complete, it will appear on the dashboard. Next to the newly created profile, find and click the “Bind IP” option to proceed with configuring the proxy settings.

<Frame>
  <img alt="Binding IP to the Profile" />
</Frame>

### Configuring the Proxy

From the “Proxy Type” dropdown menu select “HTTP” for default Bright Data proxy use. If using Bright Data's Residential Proxies, you may also choose “Luminati (Residential)” from the dropdown list.

<Frame>
  <img alt="Configuring the Proxy" />
</Frame>

### Entering Proxy Details

Fill in the proxy details: Host, Port, Username, and Password.

* **Host**: Enter the proxy server address brd.superproxy.io
* **Port**: Specify the proxy port as 44445
* **Username**: Your Bright Data username
* **Password**: Your Bright Data password

<Frame>
  <img alt="Entering Proxy Details" />
</Frame>

### Verifying the Proxy Connection

Click on the “check proxy” button to test the connectivity. You should see your proxy IP and location details if the setup is successful.

<Frame>
  <img alt="Verifying the Proxy Connection" />
</Frame>

### Saving the Proxy Configuration

After confirming the proxy details are correct and the test is successful, click on “Save proxy” to finalize the proxy settings for the profile.

<Frame>
  <img alt="Saving the Proxy Configuration" />
</Frame>

### Launching the Profile

Open the profile you've just configured by clicking on it. Now, you're all set to browse the internet securely and efficiently, powered by Bright Data proxies.

<Warning>
  **Important note**:

  If you are using Bright Data’s Residential Proxies, Web Unlocker API or SERP API, you need to install an SSL certificate to enable end-to-end secure connections to your target website(s).

  This is a simple process, see [this guide](/general/account/ssl-certificate#installation-of-the-ssl-certificate) for instructions.
</Warning>
