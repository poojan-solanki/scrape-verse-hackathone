# How to set up Bright Data with Puppeteer

> **Official Source**: [https://docs.brightdata.com/integrations/puppeteer](https://docs.brightdata.com/integrations/puppeteer)
> **Category**: `general`

---

Configure Bright Data proxies (port 44445) in Puppeteer to run headless Chrome with geo-targeted IPs for web scraping and automated testing in Node.js.

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

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

## What is Puppeteer?

Think of Puppeteer as a remote control for headless browsers. With just a few lines of Node.js code, you can direct browsers to gather information, run tests, and automate routine actions. It’s all about turning tough, time-consuming workflows into quick, manageable steps.

<Tip>
  Maintain a consistent IP throughout your browser session by using the `-session` parameter in your username. This is essential because BrightData proxies default to rotating IPs with each request. [Learn more](/proxy-networks/faqs#how-to-use-the-same-ip-for-an-extended-period-of-time-and-how-long-can-i-keep-it-long-session)

  New users should begin with ISP or Datacenter proxies, which need no KYC. Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access).
</Tip>

## How to Integrate Bright Data With Puppeteer

### How to get started

Before integrating Bright Data, ensure you have the essentials:

1. **Node.js**: Install the latest version from [nodejs.org](https://nodejs.org/).

2. **Project Setup**: Use a code editor you prefer (such as VS Code) and initialize a Node.js project.

3. **Bright Data Account**: You must have an active Bright Data account with at least one enabled proxy zone.\
   For browser automation use cases, **ISP or Data Center proxies are recommended** for better stability.

4. **Basic JavaScript Knowledge**: Familiarity with JavaScript, Node.js, and `async/await` syntax is recommended to correctly configure and manage Playwright scripts.

5. **Network Stability**: A stable internet connection is required to download browser binaries and maintain proxy connections during automation tasks.

6. **Puppeteer**: Add Puppeteer to your project by running:

```bash theme={null}
npm install puppeteer
```

### Retrieve Your Bright Data Credentials

Sign in to your [Bright Data dashboard](https://brightdata.com/cp/zones/page/plans) and note down your proxy details:

• **Host**

• **Port**

• **Username**

• **Password**

These credentials will let Puppeteer route traffic through Bright Data’s secure, anonymous proxy network.

### Configure Puppeteer for Bright Data

<Note>
  If you want to use Puppeteer with Bright Data's Browser API, please refer to the [Browser API documentation](/scraping-automation/scraping-browser/introduction) for correct setup and code examples. Proxy Integration guides below are for direct proxy integration, not for Browser API.
</Note>

To connect Puppeteer with Bright Data:

1. **Set the Proxy Server**: Add `--proxy-server=[HOST]:[PORT]` to Puppeteer’s launch arguments.

2. **Authenticate**: Use `page.authenticate()` in Puppeteer to provide your Bright Data **username** and **password**.

### Example Code

Here’s a sample script to guide you:

```javascript theme={null}
const puppeteer = require('puppeteer');

const BRIGHTDATA_HOST = process.env.BRIGHTDATA_HOST || 'brd.superproxy.io';
const BRIGHTDATA_PORT = process.env.BRIGHTDATA_PORT || '44445';
const BRIGHTDATA_USERNAME = process.env.BRIGHTDATA_USERNAME;
const BRIGHTDATA_PASSWORD = process.env.BRIGHTDATA_PASSWORD;

// Optional: use a session to maintain the same IP
const SESSION_ID = 'session_1';

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // set to false for debugging
    args: [
      `--proxy-server=http://${BRIGHTDATA_HOST}:${BRIGHTDATA_PORT}`
    ]
  });

  const page = await browser.newPage();

  // Authenticate with Bright Data
  await page.authenticate({
    username: `${BRIGHTDATA_USERNAME}-session-${SESSION_ID}`,
    password: BRIGHTDATA_PASSWORD,
  });

  // Verify proxy connection
  await page.goto('https://brdtest.com/myip.json', {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });

  const ipInfo = await page.evaluate(() => document.body.innerText);
  console.log('Proxy IP info:', ipInfo);

  // Navigate to target website
  await page.goto('https://example.com', {
    waitUntil: 'domcontentloaded',
  });

  console.log('Page title:', await page.title());

  // Optional screenshot for verification
  await page.screenshot({ path: 'puppeteer-brightdata.png' });

  await browser.close();
})();
```

With Bright Data proxies integrated into Puppeteer, you gain secure and private browsing for all your automated tasks. Enjoy smoother data collection, reduced detection risks, and a more reliable workflow, so you can focus on insights and results, not on technical roadblocks.
