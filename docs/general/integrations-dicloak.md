# How to set up Bright Data with DICloak

> **Official Source**: [https://docs.brightdata.com/integrations/dicloak](https://docs.brightdata.com/integrations/dicloak)
> **Category**: `general`

---

Set up Bright Data proxies in DICloak anti-detect browser for anonymous browsing with dynamic fingerprinting and profile management. Covers 195+ countries.

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

## DICloak Proxy Integration

DICloak is a powerful anti-detect browser designed to provide secure and anonymous internet browsing. It offers dynamic fingerprinting, profile management, and robust proxy support, making it an essential tool for professionals seeking enhanced privacy and data collection capabilities.

## DICloak and Bright Data: A Powerful Integration for Secure Browsing

Integrating DICloak with Bright Data’s proxy solutions creates a robust combination for privacy-focused professionals. Here’s how Bright Data enhances DICloak:

* **Global Proxy Coverage:** Access 400M+ monthly residential IPs across 195+ countries for region-specific browsing, the largest proxy network in the world.
* **Enhanced Privacy:** Secure and anonymous browsing with reliable proxy support.
* **Geo-Bypassing:** Easily access restricted content for international projects.
* **Optimized Speed:** High-performance proxies ensure fast connections.
* **Versatile Applications:** Suitable for web scraping, data collection, and more.

Integrating DICloak with Bright Data's proxy services ensures optimal performance and security for your web scraping and browsing tasks. This article provides a step-by-step guide to integrate Bright Data with DICloak seamlessly.

## How to Integrate Bright Data With DICloak

<Steps>
  <Step title="Download and Install DICloak">
    1. [Download](https://dicloak.com/download) the DICloak browser suitable for your operating system.

    <Frame>
      <img alt="download-dicloak" />
    </Frame>

    2. Install DICloak and launch the app.

    <Frame>
      <img alt="launch-dicloak" />
    </Frame>
  </Step>

  <Step title="Create a New Profile">
    1. Click on the **+ Create Profile** button.

    <Frame>
      <img alt="create-profile" />
    </Frame>

    2. Set up the basic profile:

    * Enter a **Profile Name**.
    * Choose the browser and operating system.

    <Frame>
      <img alt="setup-basic-profile" />
    </Frame>
  </Step>

  <Step title="Proxy Configuration in DICloak">
    1. Scroll down to the **Proxy** section and set proxy details:

    * From the **Proxy Type** dropdown, select `HTTP`.

    <Frame>
      <img alt="proxy-config" />
    </Frame>

    2. Enter the following details:

       * **Host:** `brd.superproxy.io`
       * **Port:** `44445`
       * **Account Name:** Enter your Bright Data username.
       * **Password:** Enter your Bright Data password.

       <Tip>
         Learn how to find your Bright Data username and password in [this guide](/integrations/bright-data).
       </Tip>

    <Frame>
      <img alt="proxy-connection" />
    </Frame>
  </Step>

  <Step title="Test your Proxy">
    1. Click on the **Check Proxy** button to test the connection.

    <Frame>
      <img alt="check-proxy" />
    </Frame>

    2. Ensure the connection test is successful and confirm the settings.

    <Frame>
      <img alt="proxy-test-success" />
    </Frame>
  </Step>

  <Step title="Start Browsing">
    1. To use the proxy, click on the **Open** button.

    <Frame>
      <img alt="open-browser" />
    </Frame>

    2. A browser will open with your preferred settings and the configured proxy.

    <Frame>
      <img alt="browser-open" />
    </Frame>
  </Step>
</Steps>

***

## What else to keep in mind

* **Session Control:** Bright Data allows session customization. Configure session persistence to maintain the same IP or rotate IPs as needed for your tasks.
* **Proxy Pooling:** Utilize Bright Data’s proxy pool for larger data collection projects.
* **DICloak Enhancements:** Leverage DICloak’s unique anti-detect features to mimic human-like browsing behavior.

By following this guide, you can effectively integrate Bright Data with DICloak for secure, efficient, and anonymous browsing and data collection.
