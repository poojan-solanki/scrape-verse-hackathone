# Run your first browser session

> **Official Source**: [https://docs.brightdata.com/scraping-automation/scraping-browser/five-minute-how-to](https://docs.brightdata.com/scraping-automation/scraping-browser/five-minute-how-to)
> **Category**: `scraping-automation`

---

Launch your first Bright Data Browser API session in under 5 minutes with JavaScript rendering, page interaction and dynamic content, no infrastructure.

This guide helps you launch your **first real browser session in under 5 minutes** using the Bright Data Browser API.<br />It is designed for developers who need **JavaScript rendering, page interaction, or dynamic content**, without managing browsers or infrastructure.

By the end of this guide, you will:

* Verify your Browser API setup
* Launch a live browser session
* Load a website that requires JavaScript rendering

## What you need before starting (1 minute)

Before you begin, make sure you have:

* A Bright Data account
* An active **Browser API zone**
* A valid **Browser API zone** \*\*credentials \*\*(Username and Password)

You can find your **credentials** in the **Overview** tab of your Browser API in the Bright Data Control Panel.

If you haven’t created a Browser API yet, follow **Create Your First Browser API** before continuing.

## Step 1: Choose a JavaScript-based website (30 seconds)

Select a website that requires JavaScript rendering.

Good examples:

* [https://quotes.toscrape.com/js/](https://quotes.toscrape.com/js/)
* [https://www.nike.com](https://www.nike.com)
* [https://www.amazon.com](https://www.amazon.com)

Make sure the URL:

* Starts with `https://`
* Requires client-side rendering or user-like interaction

## Step 2: Understand how the Browser API works (30 seconds)

The Browser API launches a **real, cloud-based browser session** on your behalf.

With each session, Bright Data:

* Launches a browser instance
* Applies realistic fingerprints and headers
* Handles proxy routing and anti-bot challenges
* Returns rendered page content or session output

You do not need to manage browsers, drivers, or automation infrastructure.

## Step 3: Start your first Browser API session (2 minutes)

Replace the placeholders below with your actual values:

* USER:PASS
* YOUR\_TARGET\_URL

Copy one of the example code snippets below and paste it into your IDE of choice.<br />Simply run the code after replacing the parameters to start your session!

<Tabs>
  <Tab title="NodeJS">
    <CodeGroup>
      ```javascript Puppeteer theme={null}
      #!/usr/bin/env node
      const puppeteer = require('puppeteer-core');

      const AUTH = 'USER:PASS';
      const TARGET_URL = 'YOUR_TARGET_URL';

      async function main() {
          console.log('Connecting to Browser...');
          const browser = await puppeteer.connect({
              browserWSEndpoint: `wss://${AUTH}@brd.superproxy.io:9222`
          });

          const page = await browser.newPage();

          // Get debugging URL
          const client = await page.createCDPSession();
          const { frameTree: { frame } } = await client.send('Page.getFrameTree');
          const { url: inspectUrl } = await client.send('Page.inspect', {
              frameId: frame.id
          });
          console.log(`You can inspect this session at: ${inspectUrl}`);

          // Navigate to target
          await page.goto(TARGET_URL);

      	console.log(await page.content());
          await page.screenshot({ path: 'screenshot.png', fullPage: true });
          console.log('Navigation complete!');

          await browser.close();
      }

      main().catch(console.error);
      ```

      ```javascript Playwright theme={null}
      #!/usr/bin/env node
      const playwright = require('playwright');

      const AUTH = 'USER:PASS';
      const TARGET_URL = 'YOUR_TARGET_URL';

      async function main() {
          console.log('Connecting to Browser...');
          const browser = await playwright.chromium.connectOverCDP(
              `wss://${AUTH}@brd.superproxy.io:9222`
          );

          const page = await browser.newPage();

          // Get debugging URL
          const client = await page.context().newCDPSession(page);
          const { frameTree: { frame } } = await client.send('Page.getFrameTree');
              const { url: inspectUrl } = await client.send('Page.inspect', {
                  frameId: frame.id,
              });
          console.log(`You can inspect this session at: ${inspectUrl}.`);

          // Navigate to target
          await page.goto(TARGET_URL);

      	console.log(await page.content());
          await page.screenshot({ path: 'screenshot.png', fullPage: true });
          console.log('Navigation complete!');
          
          await browser.close();
      }

      main().catch(console.error);
      ```
    </CodeGroup>
  </Tab>

  <Tab title="Python">
    <CodeGroup>
      ```python Playwright theme={null}
      #!/usr/bin/env python3
      import asyncio
      from playwright.async_api import async_playwright

      AUTH = 'USER:PASS'
      TARGET_URL = 'YOUR_TARGET_URL'

      async def main():
          print('Connecting to Browser...')
          
          async with async_playwright() as p:
              browser = await p.chromium.connect_over_cdp(
                  f'wss://{AUTH}@brd.superproxy.io:9222'
              )
              page = await browser.new_page()
              
              # Get debugging URL
              client = await page.context.new_cdp_session(page)
              frame_tree = await client.send('Page.getFrameTree')
              frame_id = frame_tree['frameTree']['frame']['id']
              inspect_result = await client.send('Page.inspect', {'frameId': frame_id})
              print(f"Debug URL: {inspect_result['url']}")
              
              # Navigate to target
              await page.goto(TARGET_URL)

              print(await page.content())
              await page.screenshot(path='screenshot.png', full_page=True)
              print('Navigation complete!')
              
              await browser.close()

      if __name__ == '__main__':
          try:
              asyncio.run(main())
          except Exception as e:
              print(f'Error: {e}')
      ```

      ```python Selenium theme={null}
      #!/usr/bin/env python3
      from selenium.webdriver import Remote, ChromeOptions as Options
      from selenium.webdriver.chromium.remote_connection import ChromiumRemoteConnection as Connection

      AUTH = 'USER:PASS'
      TARGET_URL = 'YOUR_TARGET_URL'

      def main():
          print('Connecting to Browser...')
          
          server_addr = f'https://{AUTH}@brd.superproxy.io:9515'
          connection = Connection(server_addr, 'goog', 'chrome')
          driver = Remote(connection, options=Options())
          
          def cdp(cmd, params={}):
              return driver.execute('executeCdpCommand', {
                  'cmd': cmd,
                  'params': params,
              })['value']
          
          try:
              # Get debugging URL
              frame_tree = cdp('Page.getFrameTree')
              frame_id = frame_tree['frameTree']['frame']['id']
              inspect_result = cdp('Page.inspect', {'frameId': frame_id})
              print(f"Debug URL: {inspect_result['url']}")
              
              # Navigate to target
              driver.get(TARGET_URL)

              print(driver.page_source)
              driver.save_screenshot('screenshot.png')
              print('Navigation complete!')
          finally:
              driver.quit()

      if __name__ == '__main__':
          try:
              main()
          except Exception as e:
              print(f'Error: {e}')
      ```
    </CodeGroup>
  </Tab>
</Tabs>

This code:

* Connects to a remote browser session
* Prints the live session URL
* Fully renders the page using JavaScript
* Prints the HTML content of the page
* Takes a screenshot of the rendered page
* Closes the browser session

## Step 4: Review the response (30 seconds)

If successful, you will receive:

* Fully rendered HTML content + screenshot
* JavaScript-generated elements included

If the page content matches what you see in a real browser, your Browser API setup is working correctly.

## Common issues and quick fixes (30 seconds)

* **407 Auth Failed:** Authentication is missing or invalid<br />→ Verify the Username and Password credentials
* **Invalid URL:** The desired URL is in incorrect format<br />→ Confirm the TARGET\_URL parameter was changed to a valid URL

## What you just accomplished

In under 5 minutes, you:

* Connected to a remote headless browser session
* Loaded a JavaScript-heavy website
* Retrieved rendered content

Your Browser API is now ready for advanced workflows.

## Where to go next

Once your first session works, you can:

* Interact with pages (clicks, scrolling, inputs)
* Run multi-step browser workflows
* Review **Browser API Configuration** for advanced controls
* Check **Troubleshooting** if you encounter issues
