# Getting started with Browser extension

> **Official Source**: [https://docs.brightdata.com/proxy-networks/browser-extension/quickstart](https://docs.brightdata.com/proxy-networks/browser-extension/quickstart)
> **Category**: `proxy-networks`

---

Install and configure the Bright Data Browser Extension for Chrome (port 44445) to route browser traffic with 1-click country switching across 195 countries.

## Quick Start

Follow these steps to start using the Bright Data Browser Extension:

<Steps>
  <Step title="Set up an active zone in your account">
    To start using the extension, you need at least **one active zone** in your Bright Data account.

    * Check your existing zones on the [My Proxies](https://brightdata.com/cp/zones) page.
    * If you don’t have a zone yet, click **Add** to create a new zone.

    <Frame>
      <img alt="active-proxy.png" />
    </Frame>

    <Tip>
      For detailed instructions on creating zones, see our guides for [Datacenter](/proxy-networks/data-center/introduction), [ISP](/proxy-networks/isp/introduction), [Residential](/proxy-networks/residential/introduction), and [Mobile](/proxy-networks/residential/introduction).
    </Tip>
  </Step>

  <Step title="Select your active zone">
    In the extension, select the zone you want to use from the dropdown.

    <Frame>
      <img alt="select-the-zone.png" />
    </Frame>
  </Step>

  <Step title="Install SSL certificate for Residential zones (if required)">
    If you select a **Residential** zone and see the message *"Certificate or approved KYC are required to use residential zone"*, you need to install our SSL certificate in Chrome.

    * Follow the [Chrome certificate installation guide](/general/account/ssl-certificate#installation-instructions).
    * To learn more about Residential network access modes, see the [Residential access guide](/proxy-networks/residential/network-access).

    <Frame>
      <img alt="kyc-certificate" />
    </Frame>
  </Step>

  <Step title="Select country and city">
    Choose the country and, if available, the city you want to use for your zone.

    <Note>
      City-level targeting is only available for **Residential** and **Mobile** zones.

      For setup instructions, see [How to enable city selection](/proxy-networks/browser-extension/quickstart#how-to-enable-city-selection).
    </Note>

    <Frame>
      <img alt="select-country.png" />
    </Frame>
  </Step>

  <Step title="Turn on the proxy">
    Turn on the proxy in the extension to start browsing with your selected zone.

    <Frame>
      <img alt="turn-on-the-proxy.png" />
    </Frame>
  </Step>
</Steps>

## How to enable city selection

1. In your Control Panel, go to the [My Proxies](https://brightdata.com/cp/zones) page
2. Open the **Residential** or **Mobile** zone where you want to enable city selection.

<Frame>
  <img alt="enable-proxy.png" />
</Frame>

3. Under **Geolocation targeting**, choose **City**.

<Frame>
  <img alt="geolocation-targetting.png" />
</Frame>

4. Save your changes.
