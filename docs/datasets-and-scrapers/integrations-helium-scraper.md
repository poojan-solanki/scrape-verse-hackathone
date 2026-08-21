# Set up Bright Data with Helium Scraper

> **Official Source**: [https://docs.brightdata.com/integrations/helium-scraper](https://docs.brightdata.com/integrations/helium-scraper)
> **Category**: `datasets-and-scrapers`

---

Configure Bright Data proxies in Helium Scraper to route web scraping jobs through residential, datacenter, ISP, or mobile IPs at scale. Spans 195 countries.

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

## What is Helium Scraper?

Helium Scraper is an intuitive, desktop-based web scraping tool designed to help you extract data from websites without needing any coding skills. Its visual interface makes it easy to select, extract, and organize data, perfect for both beginners and experienced users alike.

Helium Scraper is ideal for small to medium-scale scraping projects. Whether you're a freelancer, marketer, or business professional, it provides an efficient and straightforward way to collect and structure web data without the complexity of programming.

## Helium Scraper Proxy Integration

Follow these simple steps to set up Bright Data proxies with Helium Scraper:

<Steps>
  <Step title="Install Helium Scraper">
    1. [Download Helium Scraper](https://www.heliumscraper.com/eng/download.php) and install it on your computer.
    2. Launch Helium Scraper once the installation is complete.
  </Step>

  <Step title="Access the Proxy List">
    In Helium Scraper, click on **File > Proxy List** to open the proxy configuration panel.

    <Frame>
      <img alt="Helium Scraper Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Configure Your Bright Data Proxy">
    Add your Bright Data proxy details to the fields provided:

    * **Host**: Enter `http://brd.superproxy.io/`.
    * **Port**: Use the port number provided in your [Bright Data dashboard](https://brightdata.com/cp/zones).
    * **Username**: Enter your Bright Data proxy `username`.
    * **Password**: Enter your Bright Data proxy `password`.

    Click **OK** to store your proxy settings.

    <Info>
      **For country-specific proxies, you can enter a format like `your-username-country-US` to receive a US exit node.**
    </Info>
  </Step>

  <Step title="Enable Proxies for Your Project">
    1. Go to **Project > Settings** from the menu.

    <Frame>
      <img alt="Helium Scraper Proxy Integration" />
    </Frame>

    2. In the settings window, set **Enable Proxies** to **True**.

    <Frame>
      <img alt="Helium Scraper Proxy Integration" />
    </Frame>
  </Step>

  <Step title="Verify the Proxy Setup">
    1. Open a website that displays your IP address using Helium Scraper’s built-in browser.
    2. Check if the displayed IP matches the Bright Data proxy settings to confirm the proxy integration.
  </Step>
</Steps>

**That’s it!** You've now successfully integrated Bright Data proxies with Helium Scraper.
