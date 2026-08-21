# Proxy Manager integration

> **Official Source**: [https://docs.brightdata.com/proxy-networks/proxy-manager/integration](https://docs.brightdata.com/proxy-networks/proxy-manager/integration)
> **Category**: `proxy-networks`

---

Integrate the open-source Bright Data Proxy Manager (default port 22999) with third-party apps. Run it as a local proxy server in any environment.

## Integrate with third party apps

The Proxy Manager is an Open-Source project that can be installed in various environments and used as a proxy server in any application.

Below are a few examples for which Proxy Manager can be used as the proxy server inside third party applications.

Integrate with any third party app there is no need for username and password and it is ok to leave `username:password` empty aseach port in the Proxy Manager keeps the credentials of the used zone in it.

```js Example for port 24000 theme={null}
IP:PORT:USERNAME:PASSWORD → 127.0.0.1:24000:[empty]:[empty]
```

## Integrate to your phone

<Tabs>
  <Tab title="Android settings">
    1. An Android and the machine using the Proxy Manager need to share the same WiFi connection
    2. Proxy Manager port must allowlist the IP of the Android device
    3. Go to the WiFi network configuration -> advanced -> manual proxy:

       * Proxy host: The IPv4 address of the machine with the Proxy Manager

       <CodeGroup>
         ```sh CMD theme={null}
         ipconfig
         ```

         ```sh Shell theme={null}
         ifconfig
         ```
       </CodeGroup>

       * Port: `24000` (or other port you created)
  </Tab>

  <Tab title="iPhone (iOS) proxy settings">
    1. iPhone and the machine using the Proxy Manager need to share the same WiFi connection
    2. Allowlist the iPhone IPv4 in the Proxy Manager under 'General'\
       To find IPv4 follow these instructions:
       * Go to wifi settings
       * tap on the blue `i` icon next to your network's name
       * See your IP address
    3. Open the Settings app and go to WiFi
    4. Tap the name of the WiFi network you're connected to
    5. Scroll to the bottom and you will find a section for HTTP Proxy. This is set to 'off' by default. Set it 'Manual' for manually configuring the proxy settings
    6. In the server slot enter the IPv4 address of the server where the Proxy Manager is installed
    7. In the port slot enter `24000` (or other port you create)
  </Tab>
</Tabs>

## Integrate with Puppeteer

* Create a Zone with the network, IP type, and number of IPs you wish to use.
* Install the Proxy Manager.
* Click 'add new proxy' and choose the Zone and settings you require, click 'save'.
* In Puppeteer, under the 'proxy-server', input your local IP and Proxy Manager port (i.e. `127.0.0.1:24000`)
  * The local host IP is `127.0.0.1`
  * The port created in the Proxy Manager is `24XXX`, for example, `24000`
* Leave the `username` and `password` values empty, as the Bright Data Proxy Manager has already been authenticated with the Super Proxy.

```js Sample Code theme={null}
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['--proxy-server=127.0.0.1:24000']
	});
	const page = await browser.newPage();
	await page.authenticate();
	await page.goto('https://brdtest.com/myip.json');
	await page.screenshot({path: 'example.png'});
	await browser.close();
})();
```

## Integrate with Selenium

* Create a Zone with the network, IP type, and number of IPs you wish to use.
* Install the Bright Data Proxy Manager.
* Click 'add new proxy' and choose the Zone and settings you require, click 'save'.
* In Selenium, under the setProxy, input your local IP and proxy manager port (i.e. `127.0.0.1:24000`)
  * The local host IP is `127.0.0.1`
  * The port created in the Proxy Manager is `24XXX`, for example, `24000`
* Leave the username and password fields empty, as the Bright Data Proxy Manager has already been authenticated with the Super Proxy.

```js theme={null}
const {Builder, By, Key, until} = require('selenium-webdriver');
const proxy = require('selenium-webdriver/proxy');

(async function example() {
	let driver = await new Builder().forBrowser('firefox').setProxy(proxy.manual({
		http: '127.0.0.1:24000',
		https: '127.0.0.1:24000'
	})).build()

	try {
		await driver.get('https://brdtest.com/myip.json');
		driver.switchTo().alert().accept();
	} finally  {
		await driver.quit();
	}
})();
```

## Integrate with Insomniac browser

* Go to the **General** tab in the port settings

* In the **Multiply proxy port** field select the number of proxy ports to create. This will create multiple proxy ports with the same settings

* Your Spreadsheet Contains the following columns:
  * Custom Name: Add a name for each proxy
  * Host: `127.0.0.1`
  * Port: `24XXX`
  * `username`, `password`, and Tags: leave EMPTY
    <Note>Proxy Manager has already been authenticated with the Super Proxy</Note>
  * Save the file as a CSV and not as an XLS or XLSX
  * In Insomniac Proxy per tab extension select Manage Proxy list, and select Add bulk proxies
  <Frame>
    <img alt="Proxy Manager Integration" />
  </Frame>

* Select Import proxy list and upload the CSV file

<Frame>
  <img alt="Proxy Manager Integration" />
</Frame>

## Integrate with Multilogin (MLA)

* Within Multilogin click New browser profile
* Click on Edit proxy settings
* Under Connection Type choose Bright Data
* Choose your protocol under Proxy Type
* IP or Host: `127.0.0.1` if the Proxy Manager is installed locally or on the IP of the [remote server](https://brightdata.com/faq#pmgr-install-remote) the Proxy manager is installed on `1.1.1.1` or example.com
* Port: the port you created in the Bright Data Proxy Manager `24XXX`
* Leave the username and password field empty, as the Bright Data Proxy Manager has already been authenticated
* Click on **Check proxy**

<Frame>
  <img alt="Proxy Manager Integration" />
</Frame>

## Integrate with Playwright Proxy

* Click 'add new proxy' and choose the Zone and settings you require, click 'save'.
* In Playwright, under the 'server', input your local IP and Proxy Manager port (i.e. `127.0.0.1:24000`)
  * The local host IP is `127.0.0.1`
  * The port created in the Proxy Manager is `24XXX`. For example, `24000`
* Leave the username and password values empty, as the Bright Data Proxy Manager has already been authenticated with the Super Proxy.
* For example:

```js Sample Code theme={null}
const playwright = require('playwright');

(async () => {
	for (const browserType of ['chromium', 'firefox', 'webkit']) {
		const browser = await playwright[browserType].launch({
			headless: false;
			proxy: {
				server: '127.0.0.1:24000',
				username: '',
				password: ''
			},
		});
		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto('https://brdtest.com/myip.json');
		await page.screenshot({ path: 'example.png' });
		await browser.close();
	}
})();
```

## Integrate with Jarvee Proxy

* In Jarvee, on the left-hand side, choose the 'Proxy Manager' Tab.
* Click 'Add proxy' and under the 'Select Proxy IP: Port' column input the IP:Port (i.e. `127.0.0.1:24000`)
  * The local host IP is `127.0.0.1`
  * The port created in the Proxy Manager is `24XXX`, for example, `24000`
* Leave the username and password field empty, as the Bright Data Proxy Manager has already been authenticated
* Click 'Verify Proxy Link'.
* Under 'Social Profiles', select the Jarvee profile you created and click the 'Add' button.

<Frame>
  <img alt="Proxy Manager Integration" />
</Frame>

## Integrate with VMLogin Proxy

Register and manage multiple online accounts using physical devices with VMLogin's virtual browsing profiles which helps enable anti-association capabilities as well as fingerprint protection.

Manage multiple online accounts using physical devices with VMLogin's virtual browsing profiles which helps enable anti-association capabilities as well as fingerprint protection.

Here is a step by step guide to integrate Bright Data with VMlogin:

* Download and install VMLogin [here](https://vmlogin.us/?ref=luminati) (3 Days Free Trial)
* Start by launching VMLogin and creating a new browser profile:
  * Click "Get random profile"
  * Select the settings that best suit you, such as operating system, screen resolution, language, WebGL vendor, time zone, media device fingerprint etc.
