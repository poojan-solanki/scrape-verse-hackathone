# Dataceter proxy FAQ

> **Official Source**: [https://docs.brightdata.com/proxy-networks/data-center/faqs](https://docs.brightdata.com/proxy-networks/data-center/faqs)
> **Category**: `proxy-networks`

---

FAQs about Bright Data Datacenter proxies (195 countries): IP types, shared and dedicated pools, geotargeting, error codes and pricing across plans.

<AccordionGroup>
  <Accordion title="What are IP Types for Datacenter?">
    There are four types of IPs that we offer within our [Datacenter Proxy Network](https://brightdata.com/proxy-types/datacenter-proxies):

    1. Shared pool (paid per usage) - Pool of 40,000 rotating proxies
    2. Shared unlimited proxies (paid per proxy) - Set of proxies you share with others.
    3. Dedicated unlimited proxies (paid per proxy) - Set of proxies exclusive for you.
  </Accordion>

  <Accordion title="What are IP Types for ISP?">
    There are three types of IPs that we offer within our [ISP Proxy Network](https://brightdata.com/proxy-types/isp-proxies):

    1. Shared pool (paid per usage) - Pool of 10,000 rotating proxies
    2. Shared unlimited proxies (paid per proxy) - Set of proxies you share with others.
    3. Dedicated unlimited proxies (paid per proxy) - Set of proxies exclusive for you.
  </Accordion>

  <Accordion title="How to integrate a new proxy into your code?">
    To integrate the proxies into your code, please visit the [API examples page](https://brightdata.com/cp/zones/proxy_examples), which can be accessed via your zone's settings, under "access parameters":

    <img alt="integrate-new-proxy.gif" />

    On this page, you can choose integration examples for most modern coding languages, just choose the integration type, your proxy zone, coding language, etc. and the page will generate a code snippet you can use right away.
  </Accordion>

  <Accordion title="How to integrate a proxy into 3rd party software?">
    Check out a few examples in the [API examples](https://brightdata.com/cp/zones/proxy_examples) page mentioned above (just choose "other software" in the "language" drop-down menu), or check our [Integrations page](/integrations), where we have specific guides to integrate our proxies within the most popular tools across the industry today.

    **Important note**: If you are using Bright Data's Web Unlocker API, Residential Proxies or the SERP API you probably need to use our SSL certificate to enable end-to-end secure connections. See [instructions here](/general/account/ssl-certificate).
  </Accordion>

  <Accordion title="How to target a Specific Country?">
    When sending your request, add the `-country` flag, **after** your zone’s name in the request, followed by the 2-letter [ISO code](https://www.nationsonline.org/oneworld/country_code_list.htm) for that country.

    In the example below: We added `-country-us` to our request, so we will send a request originating from the United States ("us").

    ```sh theme={null}
    curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us: <zone_password>
    ```
  </Accordion>

  <Accordion title="How to target a Specific City in datacenter and ISP proxy networks?">
    For datacenter and ISP networks city targeting has been deprecated and is no longer available.
  </Accordion>

  <Accordion title="Where does Bright Data have proxies?">
    Bright Data offers proxies in every country in the world, except in the following countries:

    * Iran
    * Iraq
    * Syria
    * Lebanon
    * Palestine
    * North Korea
    * Cuba
    * Sudan
    * Belarus
    * Russia

    If you need proxies from these countries, unfortunately Bright Data will not be able to help you.
  </Accordion>

  <Accordion title="How to view the proxy event log?">
    The event log will show you (at most) the last 200 requests you made with any zone in your account.

    In your Bright Data control panel's proxies page: [https://brightdata.com/cp/zones](https://brightdata.com/cp/zones)

    Go to the "Event Log" tab:

    <img alt="event-log.png" />

    The presented data is:

    * **Date:** Time and date of the request
    * **Zone:** What Zone was used for the request
    * **Source IP:** What IP the request was made from
    * **URL:** The target site of the request
    * **Result:** Success or Fail of the request

      <img alt="event-log-headers.png" />
  </Accordion>

  <Accordion title="How to enable automatic IP fallbacks? (formerly 100% uptime)">
    <Info>
      Applicable for Datacenter & ISP
    </Info>

    The **Automatic Failover** was built to prevent any ‘external’ events from affecting the user. The idea is simple and works the same way for both problems described above – if Bright Data detects a problem, like a connectivity issue or an IP where the GEO isn’t exactly what you asked for when buying that IP, we will automatically route your requests through other IPs which are exactly the same as the original IPs.

    At the same time, we wanted to make sure that customers that must use specific IPs will not be affected – so we made some exceptions:

    * If a specific IP is targeted in your request we will not assign a fallback IP to it
    * Automatic Failover will not interrupt a live connection. If the fallback is needed, it will play in once the next connection is established

    The **Automatic Failover** brings immediate value by providing 100% connectivity and continuous high-performance level, **free of charge and without having to make any changes in your code or how you work.**

    <Note>
      Automatic Failover feature can be turned on or off, [via API](/api-reference/account-management-api/Switch_100_uptime_ON_OFF_in_a_Static_zone).
    </Note>
  </Accordion>

  <Accordion title="How to enable Automatic Failover for proxies?">
    Navigate to your proxy configuration settings, and under **Advanced settings** enable **‘Automatic failover’**
  </Accordion>

  <Accordion title="How to keep using the same IP in multiple requests?">
    * This can be done by adding the session flag to the proxy username:

    ```sh theme={null}
    brd.superproxy.io:44445 br-customer-<customer_id>-zone-<zone_name>-session-rand39484
    ```

    Generate the random number on thread startup, and change it when you want to change the Proxy Peer assigned for the thread's connection.

    * Session ID can be any random string/counter: requests with the same session string will use the same Proxy Peer (as long as possible); requests with different session strings will be assigned different Proxy Peers.
    * To force an IP change, just modify the session ID
    * If an assigned Proxy Peer(exit node IP) becomes unavailable, the Super Proxy will return an error "502 - No peers available" for the first request and then on the second request the super proxy will assign a new peer even if you do not change the session ID.
    * The Session IP is kept persistent for up to 1 minute of idle time. After a minute with no requests, the IP is released back to the pool.\
      To keep this Session/IP for longer, send a tiny keep-alive request every 30 seconds, to prevent this session from becoming idle for over a minute.\
      This request may be anything small, such as /favicon.ico, or even a request that returns 404 (as long as the web server does not disconnect the socket due to this request).
    * If you have multiple Clients and would like to ignore your Clients source IP (which is used together with your session ID to create a session), then you want to use a global session then add `glob\_` as a prefix to your session:

    ```sh theme={null}
    brd-customer-<customer_id>-zone-<zone_name>-session-glob_rand39484
    ```

    Full request example:

    ```sh theme={null}
    brd-customer-CXXXXX-zone-ZONE_X-session-glob_rand39484
    ```

    Generate the random number on thread startup, and change it when you want to change the Proxy Peer assigned for the thread's connection.
  </Accordion>

  <Accordion title="How to see supported Ports & Protocols?">
    Ports 80 and 443 are available by default in all zones, supporting HTTP and HTTPS protocols.

    In zones of proxies of type Datacenter or ISP, all ports higher than 1024 are supported by default.

    In zones of proxies of type Residential or Mobile, the following ports wills be available by default: 8080, 8443, 5678, 1962, 2000, 4443, 4433, 4430, 4444 and 1969.

    Bright Data can support additional ports by request. Every request to support a new port will be followed by a dedicated and additional compliance process with the Bright Data compliance team.\
    Examples of ports that require Bright Data compliance review before activation:

    | Port | Protocol |
    | ---- | -------- |
    | 8443 | HTTP     |
    | 8243 | HTTPS    |

    To make a request to add a port permission to your zone:

    * Go to your zone's settings (it will open on the "configuration" tab by default, if not, please click it)
    * Scroll down to "advanced options" and click it
    * Enable "ports"
    * Input the port numbers you would like to get approved
    * Fill out the form and wait for our compliance team to contact you and approve the request

      <img alt="add-ports.gif" />
  </Accordion>

  <Accordion title="How to target specific OS?">
    Bright Data allows targeting the following **Operating Systems**:

    <CodeGroup>
      ```sh Windows theme={null}
      curl --proxy-user brd-customer-<customer_id>-zone-<zone_name>-os-windows:<zone_password> --proxy brd.superproxy.io:44445 "<target_site>"
      ```

      ```sh macOS theme={null}
      curl --proxy-user brd-customer-<customer_id>-zone-<zone_name>-os-osx:<zone_password> --proxy brd.superproxy.io:44445 "<target_site>"
      ```

      ```sh Android theme={null}
      curl --proxy-user brd-customer-<customer_id>-zone-<zone_name>-os-android:<zone_password> --proxy brd.superproxy.io:44445 "<target_site>"
      ```
    </CodeGroup>
  </Accordion>

  <Accordion title="How to refresh IPs Allocated to Your Zone?">
    If you've selected 'Pay per IP' shared, or a dedicated IP type in your zone configuration, you'll be allocated a fixed IP address. From time to time, depending on your use case, you may need to refresh these IP addresses.

    In order to refresh IPs allocated to your zone, navigate to your selected zone, under **'Allocated IPs'** click on **'Show allocated IPs'**, **check the box** of the IP or gIP you wish to refresh and click **'Refresh'**

    <img alt="refresh-ips.gif" />

    <Note>
      Refreshing an IP or gIP will result in an extra charge.
    </Note>

    Alternatively, you can use API to refresh your [dedicated Residential IPs](/api-reference/account-management-api/Refresh_dedicated_residential_IPs) or your [Datacenter/ISP IPs](/api-reference/account-management-api/Refresh_Static_Datacenter_ISP_IPs)
  </Accordion>

  <Accordion title="How to use a specific IP?">
    When using Bright Data's Residential Proxy network, you may find the need to use a specific IP allocated to your zone.

    1. **Send a test request** with a '--verbose' or '-v' option added (this will turn on verbose logging)

    ```sh theme={null}
    curl "https://brdtest.com/myip.json" --verbose --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
    ```

    1. **Locate** the x-brd-ip response header and copy its value

       <img alt="x-brd-ip.png" />

    2. **Add** the -ip- flag to your request, after your zone’s name and use the **hashed IP value** copied in the previous step

    3. Send a test request, and **review the response**

    ```sh theme={null}
    curl "https://brdtest.com/myip.json" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-ip-<hashed-ip>:<zone_password>
    ```

    We recommend using [https://brdtest.com/myip.json](https://brdtest.com/myip.json) as the target domain for testing, and to review your IP credentials.
  </Accordion>

  <Accordion title="How to target an ASN specific IP?">
    This feature can be enabled by adding the ASN parameter to your Zone configuration, under **Geolocation Targeting**.

    <img alt="asn-targeting.png" />

    Once the configuration is saved, the ASN flag can be added to the Zone's credentials\
    and be integrated when using the Residential proxies. For example:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-asn-<asn-number>:<zone_password> "<target_site>"
    ```

    **Note:** Values for ASN number can be found [here](https://bgp.potaroo.net/cidr/autnums.html).
  </Accordion>

  <Accordion title="How to Target Residential IP groups (gIPs)?">
    Dedicated Residential IPs can be selected in the form of [gIPs](/proxy-networks/residential/configure-your-proxy#ip-groups-gips). They can be allocated under the zone’s “Configure Proxy” page by selecting a “Dedicated” IP type and choosing a number of gIPs. Also, targeting a specific domain is required.

    <img alt="number-of-dedicated-gIPs.png" />

    Once the configuration is saved, selecting "Show allocated Dedicated residential IPs" will provide a list of hash values that represent group IPs.

    <img alt="show-allocated-dedicated-ips.png" />

    These values can be used to target a specific gip. For example:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-gip-<gip_hash_value>:<zone_password> "<target_site>"
    ```
  </Accordion>

  <Accordion title="How to browse Chinese sites by using Chinese Residentials IPs">
    **When outside of China**\
    Targeting Chinese Residential IP peers is enough:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-cn:<zone_password> "<target_site>"
    ```
  </Accordion>

  <Accordion title="Carrier-specific Proxy peer IP">
    * You can choose to use a specific carrier from this list:

    ```text theme={null}
    a1, aircel, airtel, att, celcom, chinamobile, claro, comcast, cox, digi, 
    dt, docomo, dtac, etisalat, idea,  meo, mtn, mtnza, 
    optus, orange, qwest, reliance_jio, robi, sprint, telefonica, telstra, 
    tmobile, tigo, tim, verizon,  vodacomza, vodafone, vivo, zain,
    vivabo, telenormyanmar, kcelljsc, swisscom, singtel, asiacell, windit, 
    cellc, ooredoo, drei, umobile, cableone, proximus, mobitel, o2, 
    bouygues, free, sfr, digicel
    ```

    * For Example

    <CodeGroup>
      ```sh Deutsche Telekom theme={null}
      brd-customer-<customer_id>-zone-<zone_name>-carrier-dt
      ```

      ```sh Sprint theme={null}
      brd-customer-<customer_id>-zone-<zone_name>-carrier-sprint
      ```
    </CodeGroup>
  </Accordion>

  <Accordion title="About geolocation databases, and how to check the proxy IP information?">
    Geolocation databases (GeoDB) are used by internet websites to query information about the IP address used by the users. Bright Data monitors and maintains correct records of the 4 main GeoDBs used today: Maxmind, ip2location, db-ip and Google.

    There are many other smaller GeoDBs, most of which are using outdated records or flawed testing methods, and so the information they present is not accurate or is presented to lure their viewers to buy VPN or proxy products from them. Therefore, we highly recommend using the GeoDBs mentioned above when testing your IPs.

    In order to see our information about the proxy IP that you are using, browse one of the following:

    * [https://brdtest.com/echo.json](https://brdtest.com/echo.json)
    * [https://www.iplocation.net](https://www.iplocation.net)
    * [https://www.maxmind.com/en/geoip-demo](https://www.maxmind.com/en/geoip-demo)
  </Accordion>

  <Accordion title="Which Bright Data products are best for scraping search engines (SERPs)?">
    #### For single-step scraping:

    [SERP API](/scraping-automation/serp-api/introduction) is the ideal product for targeting SERPs as it has a guaranteed success rate (pay only for success) with active unlocking, automatically chooses the best proxies, customizes headers, fingerprinting, solves CAPTCHAs, and more.

    #### For multi-step scraping (playwright/puppeteer/selenium):

    [Browser API](/scraping-automation/scraping-browser/introduction) is the ideal product as it is our fully cloud-hosted browser designed to help you easily focus on your multi-step data collection while we take care of the full proxy and unblocking infrastructure for you, including CAPTCHA solving.
  </Accordion>

  <Accordion title="Can I target Google SERPs from the Residential, Datacenter, or ISP Proxy network?">
    **Residential Proxy** - No, [SERP API](/scraping-automation/serp-api/introduction) is the ideal product for targeting SERPs as it has a guaranteed success rate (pay only for success) with active unlocking, automatically chooses the best proxies, customizes headers, fingerprinting, solves CAPTCHAs, and more. Targeting Google SERPs from the Residential network will result in Super-proxy bypass, which will casue the request to be sent from our servers instead of the peer.

    **Datacenter & ISP Proxies** - No. When attempting to specifically target Google through either of these proxy networks, your request will be denied and you will receive the following error message in the response headers:

    ```text theme={null}
    HTTP/1.1 403 Search engine host is not allowed
    X-Luminati-Error: Forbidden: This target URL isn't supported on proxy networks, use the SERP API product for targeting this URL. You may contact your account manager or open a support ticket for assistance
    ```
  </Accordion>

  <Accordion title="Can I Send requests to IPs and not domain name?">
    No - requests directly to the host server, and not to the domain name are forbidden while using Bright data.\
    Requests using URL format such as 1.1.1.1:443 will be executed using the super proxy server, not the proxy peer IP.

    Example of a request using the super proxy:

    <img alt="x-luminati-ip.png" />
  </Accordion>

  <Accordion title="Can I use port 25 or any other SMTP port, or send an email by using the proxy IP?">
    Since BrightData cares about our community and peers quality, SMTP requests which can be used for spamming are blocked. Please note that mail domains are also blocked from access, and requests to mail domains will be sent from the super proxy server, and not the peer IP.
  </Accordion>

  <Accordion title="What is the cost for refreshing Datacenter IPs?">
    Refreshing data-center IPs will have a different cost depending on the type of IP.

    * Refreshing dedicated data-center IPs: \$0.5/refresh/IP
    * Refreshing dedicated domain data-center IPs: \$0.04/refresh/IP
    * Refreshing shared data-center IPs: \$0.02/refresh/IP
  </Accordion>

  <Accordion title="Does Bright Data support the Socks5 protocol?">
    Yes. Bright data supports `SOCKS5` protocol, with a default port 22228 assigned for SOCKS5 communication.

    See here for [full SOCKS5 configuration instructions](/proxy-networks/socks5)
  </Accordion>

  <Accordion title="Does Bright Data support UDP / HTTP/3 proxies?">
    Yes. Bright Data supports the UDP MASQUE protocol for QUIC/HTTP/3 on port 10001.
    More information and usage examples can be found here: [https://github.com/luminati-io/h3-cli](https://github.com/luminati-io/h3-cli)
  </Accordion>

  <Accordion title="How do I control from where the request is performed?">
    * You can choose to perform the request from the super proxy directly instead of the IP of the peer. In that case the IP of the request will be the one of the Super proxy. You will need to add **'-direct'** to your request authorization string. `brd-customer-<customer_id>-zone-<zone_name>-direct`
  </Accordion>

  <Accordion title="How do I refresh session (IP)?">
    Using the same IP for a long period of time makes it easier for the target website to mark the IP as proxy and can make your request get detectable by the target website. Refreshing your IPs will result in allocation of new IPs from Bright Data instead of your existing ones in your pool allowing you to gain control over your pool and reach higher success rates.
  </Accordion>

  <Accordion title="Can I request from Bright Data missing proxies for dedicated, unlimited datacenter and ISP?">
    Requesting missing proxies (IPs), or scheduling delivery of IPs for future projects or is a feature in BETA mode, available to small number of selected enterprise customers.

    Bright Data allows placing IPs requests ("proxy future orders")  for proxies subject to the following conditions:

    1. Customer has qualified to place IP requests/orders . This permission is granted to existing, enterprise level customers only.
    2. IPs are dedicated to the customer (we do not allow ordering shared IPs).
    3. IPs are for datacenter or ISP only.
    4. A single specific country must be provided.
    5. Minimum order size is 100 proxies

    To see if your account is qualifies to place IP requests (orders) browse here:  [https://brightdata.com/cp/zones/order\_ips](https://brightdata.com/cp/zones/order_ips)

    Most cusomers will find Bright Data inventory sufficient for their needs, and will not need to place any orders.

    #### When should I request for proxies in the future?

    You can request for future delivery of proxy IPs if your account is qualified for placing requests.

    #### I tried to define a zone but Bright Data could not assign me all the proxies I wanted, what to do?

    If during zone save you get a message that proxies are not available in a specific country, or only part of the amount you requested is availble, try to select more countries or change your country setting to allow us to find proxies for you.

    Once your request for missing proxies is placed, the Bright Data team will attempt to provision the proxies. The acquiring and provisiong process usually takes up to 14 days. Once the proxies are ready, we will notify you. We encourage you to check again once every 2-3 days to see if inventory has refreshed and more proxies are available.
  </Accordion>

  <Accordion title="How can I move proxies (IPs) from zone to zone?">
    Moving prepaid datacenter or ISP unlimited proxies (shared and dedicated) from zone to zone is not yet supported via our control panel. It is in our plans to support moving proxies from zone to zone via self service. If you need proxies to be moved please contact our support team.
  </Accordion>

  <Accordion title="Some of my IPs were replaced, why does this happen?">
    Bright Data may idnetify issues with the certain which prevents us from providing quality service with them. They either become unavailble, or suffer from latency so in order to keep our level of service we are forced to replace them. We do our efforts to minimize those replacements, and we do provide a preliminary notification when possible. 

    You can use this API in order to monitor your zones for IPs pending replacement and adjust your operations accordingly (refresh those ips for example): [https://docs.brightdata.com/api-reference/account-management-api/get-proxies-pending-replacement](https://docs.brightdata.com/api-reference/account-management-api/get-proxies-pending-replacement)
  </Accordion>
</AccordionGroup>
