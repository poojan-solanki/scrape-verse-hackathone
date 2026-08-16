# Browser API troubleshooting

> **Official Source**: [https://docs.brightdata.com/scraping-automation/scraping-browser/features/troubleshooting](https://docs.brightdata.com/scraping-automation/scraping-browser/features/troubleshooting)
> **Category**: `scraping-automation`

---

Get troubleshooting tips for the Bright Data Browser API. Use the debugger to analyze and optimize web scraping with Chrome Dev Tools.

## Browser API Debugger

Web scraping projects often require intricate interactions with target websites and debugging is vital for identifying and resolving issues found during the development process. The Browser API Debugger serves as a valuable resource, enabling you to inspect, analyze, and fine-tune your code alongside Chrome Dev Tools, resulting in better control, visibility, and efficiency.

### Where to find it

Our Browser API Debugger can be launched via two methods:

1. Manually via Control Panel
2. Remotely via your script

Choose your preferred method below to see more:

<Tabs>
  <Tab title="Manually via Control Panel">
    The Browser API Debugger can be easily accessed within your Bright Data Control Panel. Follow these steps:

    1. Within the control panel, go to [Web Access](https://brightdata.com/cp/web_access/) view
    2. Click on your specific Browser API
    3. Click on the **Overview** tab
    4. On the right side, Click on the "Chrome Dev Tools Debugger" button seen below: <img alt="Where to find it" />

    ### Getting Started with the Debugger & Chrome Dev Tools

    <Steps>
      <Step title="Open a Browser API Session">
        * Ensure you have an active Browser API session
        * If you don't yet know how to launch a Browser API session, see our Quick Start guide.
      </Step>

      <Step title="Launch the Debugger">
        * Once your session is up and running you can now launch the Debugger.
        * Click on the Debugger button within your 'Overview' tab to launch the Browser API Debugger interface (see the screenshot above )
      </Step>

      <Step title="Connect with your live browser sessions">
        * Within the Debugger interface, you will find a list of your live Browser API sessions.
        * Select the preferred session that you wish to debug
        * Click on the session link or copy/paste it into your browser of choice, and this will establish a connection between the Debugger and your selected session.

        <Frame>
          <img alt="Where to find it" />
        </Frame>
      </Step>
    </Steps>
  </Tab>

  <Tab title="Remotely via your script">
    To access and launch the debugger session directly from your script, you'll need to send the CDP command: `Page.inspect`.

    See the following examples:

    <CodeGroup>
      ```js NodeJS theme={null}
      // Puppeteer - Inspect page using devtools
      const page = await browser.newPage();
      const client = await page.target().createCDPSession();
      const {frameTree: {frame}} = await client.send('Page.getFrameTree', {});
      const {url: inspectUrl} = await client.send('Page.inspect', {
          frameId: frame.id,
      });
      console.log(`Inspect session at ${inspectUrl}`);

      // Playwright - Inspect page using devtools
      const page = await browser.newPage();
      const client = await page.context().newCDPSession(page);
      const {frameTree: {frame}} = await client.send('Page.getFrameTree', {});
      const {url: inspectUrl} = await client.send('Page.inspect', {
          frameId: frame.id,
      });
      console.log(`Inspect session at ${inspectUrl}`);
      ```

      ```python Python theme={null}
      # Playwright - Inspect page using devtools
      page = await browser.new_page()
      client = await page.context.new_cdp_session(page)
      frame_tree = await client.send('Page.getFrameTree', {})
      frame_id = frame_tree['frameTree']['frame']['id']
      inspect = await client.send('Page.inspect', {'frameId': frame_id})
      inspect_url = inspect['url']
      print('Inspect session at', inspect_url)
      ```

      ```cs C# theme={null}
      // PuppeteerSharp - Inspect page using devtools
      var page = await browser.NewPageAsync();
      var client = await page.Target.CreateCDPSessionAsync();
      var frameTree = await client.SendAsync("Page.getFrameTree");
      var frameId = frameTree!["frameTree"]!["frame"]!["id"]!;
      var inspect = await client.SendAsync("Page.inspect", new { frameId = frameId });
      var inspectUrl = inspect["url"]!;
      Console.WriteLine($"Inspect session at {inspectUrl}");

      // Playwright - Inspect page using devtools
      var page = await browser.NewPageAsync();
      var client = await page.Context.NewCDPSessionAsync(page);
      var frameTree = await client.SendAsync("Page.getFrameTree");
      var frameId = frameTree.Value
          .GetProperty("frameTree")
          .GetProperty("frame")
          .GetProperty("id")
          .GetString()!;
      var inspect = await client.SendAsync("Page.inspect", new ()
      {
          { "frameId", frameId },
      });
      var inspectUrl = inspect.Value
          .GetProperty("url")
          .GetString()!;
      Console.WriteLine($"Inspect session at {inspectUrl}");
      ```
    </CodeGroup>
  </Tab>
</Tabs>

### Leveraging Chrome Dev Tools

* With the Browser API Debugger now connected to your live session, you gain access to the powerful features of Chrome Dev Tools.
* Utilize the Dev Tools interface to inspect HTML elements, analyze network requests, debug JavaScript code, and monitor performance. Leverage breakpoints, console logging, and other debugging techniques to identify and resolve issues within your code.

<Frame>
  <img alt="test-sites.png" />
</Frame>

### Automatically opening devtools locally to view your live browser session

If you would like to automatically launch devtools on every session to view your live browser session, you can integrate the following code snippet:

```js NodeJS - Puppeteer theme={null}
// Launch devtools locally

const { exec } = require('child_process');
const chromeExecutable = 'google-chrome';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const openDevtools = async (page, client) => {
    // get current frameId
    const frameId = page.mainFrame()._id;
    // get URL for devtools from Browser API
    const { url: inspectUrl } = await client.send('Page.inspect', { frameId });
    // open devtools URL in local chrome
    exec(`"${chromeExecutable}" "${inspectUrl}"`, error => {
        if (error)
            throw new Error('Unable to open devtools: ' + error);
    });
    // wait for devtools ui to load
    await delay(5000);
};

const page = await browser.newPage();
const client = await page.target().createCDPSession();
await openDevtools(page, client);
await page.goto('http://example.com');
```

### How to use the debugger

Check out the Browser API Debugger in action below

<Frame>
  <iframe title="Debugger Walkthrough" />
</Frame>

## Error codes

Review the [full list of Browser API error codes](/scraping-automation/scraping-browser/error-codes), including each code's meaning and a suggested action.

## FAQs

Check out our [frequently asked questions](/scraping-automation/scraping-browser/faqs) regarding Browser API

## How To

Find out more about the [common library navigational functions](/scraping-automation/scraping-browser/code-examples) and examples for browser automation and specifically for Browser API
