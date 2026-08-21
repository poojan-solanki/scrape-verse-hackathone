# Create your first Proxy Manager

> **Official Source**: [https://docs.brightdata.com/proxy-networks/proxy-manager/quickstart](https://docs.brightdata.com/proxy-networks/proxy-manager/quickstart)
> **Category**: `proxy-networks`

---

Get started with Bright Data Proxy Manager (default port 22999). Choose Cloud Server or On-Premise install, then configure your first managed proxy port.

<Callout icon="badge-dollar">
  **Verify your account and get \$5 credit**

  Add a payment method to verify your account and receive a \$5 credit. You won’t be charged at this stage.
</Callout>

<Steps>
  <Step title={<a href="https://brightdata.com/cp/start">Sign in to Bright Data</a>} />

  <Step title="Select your preferred method">
    <CardGroup>
      <Card title="Cloud Server (Recommended)" href="/proxy-networks/proxy-manager/configuration#bright-data-cloud-hosting" icon="cloud" />

      <Card title="On-Premise" href="/proxy-networks/proxy-manager/configuration#local-remote-installation" icon="house">
        You take care of the installation, management, and monitoring
      </Card>
    </CardGroup>

    <Accordion title="Cloud Server Benefits">
      * No installation or server setup necessary - Log-in straight to our [web app](https://brightdata.com/cp/zones/lpm) from anywhere

      * Managed end-to-end solution

      * Live server status monitoring by Bright Data's 24/7 team. To see further info on installation and setup see the [Introduction video](https://brightdata.com/webinar/how-to-start-using-the-bright-data-proxy-manager).

      * SSL analyzing support with OpenSSL and BoringSSL. BoringSSL is Bright Data's own implementation and provides additional unblocking value.
    </Accordion>
  </Step>

  <Step title="Start managing your proxies">
    Once Proxy Manager is installed, you can [log-in](https://brightdata.com/cp/zones/lpm) and start managing your proxies by [setting up ports](/proxy-networks/proxy-manager/configuration#port-targeting-configuration) configured with your zone settings.
  </Step>

  <Step title="Implement rules and headers">
    Now you can [implement rules and headers](/proxy-networks/proxy-manager/configuration#rules-and-headers-configuration) to customize your proxies to your needs. This will ensure a more cost-optimized usage of bandwidth and more accurate results.
  </Step>
</Steps>
