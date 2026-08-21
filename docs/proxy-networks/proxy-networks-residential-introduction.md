# Introduction to Residential proxies

> **Official Source**: [https://docs.brightdata.com/proxy-networks/residential/introduction](https://docs.brightdata.com/proxy-networks/residential/introduction)
> **Category**: `proxy-networks`

---

Bright Data Residential proxy network: 400M+ monthly residential IPs from 195+ countries for browsing and data collection as a real user.

Bright Data's [Residential proxy network](https://brightdata.com/proxy-types/residential-proxies) routes your traffic through 400M+ real residential IPs across 195+ countries, so target sites see your requests as genuine local users. It is built for accessing sophisticated, highly protected sites that block datacenter and automated traffic.

Unlike Datacenter proxies, Residential proxies route requests through real devices owned by real users who have opted in to the network and are compensated for participating. This makes your traffic appear to originate from authentic residential connections in the location you target.

```sh Native proxy access theme={null}
curl "http://brdtest.com/myip.json" \
  --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
```

The response reports the exit IP and its location. See [Send your first request](/proxy-networks/residential/send-your-first-request) for Python, Node.js and cURL examples.

## How do Residential proxies work?

When you send a request through the Residential proxy network, Bright Data routes it through a real residential device in your chosen target region. For each request, the network automatically:

* Selects an appropriate residential IP from the target location
* Manages IP availability and rotation
* Maintains session stability when a sticky session is required
* Handles network-level reliability and scaling

Because the request originates from a real household or mobile connection, sites perceive the traffic as a genuine end user rather than a server-based proxy.

## Why use Residential proxies?

Residential proxies give you the widest pool and the most authentic footprint of any Bright Data proxy type:

* Higher success rates on sites with strict anti-bot or anti-scraping defenses than Datacenter proxies
* Access to localized content such as regional pricing, language variations and geo-restricted pages
* A 400M+ IP pool that lowers the chance of hitting a blocked or reused address
* Infrastructure that scales from a single request to production workloads

## When should you use Residential proxies?

Residential proxies are well suited for:

* Browsing and interacting with sophisticated websites as a real user
* Business intelligence, market research and competitor monitoring
* Ad verification and brand protection across different regions
* Price comparison and product availability tracking
* Cases where [Datacenter proxies](/proxy-networks/data-center/introduction) or [ISP proxies](/proxy-networks/isp/introduction) return low success rates or frequent blocks

If you currently hit access issues with Datacenter or ISP proxies, switching to Residential proxies can significantly improve reliability.

## What geographic targeting is available?

The Residential proxy network supports fine-grained targeting. You can route traffic through IPs by:

* Country
* State or region (where supported)
* City
* ZIP code (United States only)
* ASN and carrier (depending on proxy configuration)

## How is the Residential proxy network sourced?

Bright Data's Residential proxy network is built on an explicit opt-in model. Every participant:

* Is informed about how their IP is used
* Provides consent through an approved application
* Is compensated for participating

This model keeps the network compliant with data protection regulations and supports responsible, transparent use of residential IPs.

## FAQ

### How many Residential IPs does Bright Data have?

The Residential proxy network provides 400M+ residential IPs across 195+ countries, refreshed monthly.

### How are Residential proxies different from ISP and Datacenter proxies?

Residential IPs come from real end-user devices, so they are far less likely to be blocked by strict anti-bot systems than Datacenter proxies. ISP proxies offer datacenter speed with residential-registered IPs, while Residential proxies offer the widest pool and the most authentic footprint.

### Can you target a specific city or ZIP code?

Yes. You can target by country, state or region, city, ZIP code (United States only), and ASN or carrier depending on your configuration.

### Is Bright Data's Residential network ethically sourced?

Yes. Every IP comes from a participant who opted in through an approved application, is told how their IP is used, and is compensated for participating.

<Tip>
  If you need a fully managed unblocking solution that goes beyond IP-based access, handling site-specific headers, cookies, CAPTCHAs, JavaScript challenges and retries automatically, use the [Web Unlocker API](/scraping-automation/web-unlocker/introduction).
</Tip>

## Related

<CardGroup>
  <Card title="Quickstart" icon="rocket" href="/proxy-networks/residential/quickstart">
    Create a Residential proxy zone and get your credentials.
  </Card>

  <Card title="Send your first request" icon="paper-plane" href="/proxy-networks/residential/send-your-first-request">
    Route your first request in Python, Node.js or cURL.
  </Card>

  <Card title="Network access" icon="key" href="/proxy-networks/residential/network-access">
    Complete KYC and unlock full residential access.
  </Card>

  <Card title="Configure your proxy" icon="sliders" href="/proxy-networks/residential/configure-your-proxy">
    Set country targeting, session control and rotation.
  </Card>
</CardGroup>
