# Residential products FAQ

> **Official Source**: [https://docs.brightdata.com/proxy-networks/residential/faqs](https://docs.brightdata.com/proxy-networks/residential/faqs)
> **Category**: `proxy-networks`

---

FAQs about Bright Data Residential proxies (400M+ residential IPs): IP types, country coverage, geotargeting, session control and common error codes.

<AccordionGroup>
  <Accordion title="Why do I need KYC for Residential proxies?">
    Bright Data Residential proxies are available only to verified companies that pass a human-reviewed KYC (Know Your Customer) check by the Bright Data compliance team. Residential IPs come from 100% real people who opted in to the network, so the compliance team verifies your business and use case before you route traffic through them. Approval is never automatic or instant. See the [Residential network access policy](/proxy-networks/residential/network-access) for the full process.
  </Accordion>

  <Accordion title="I signed up with a personal email. Can I use Residential?">
    No. Residential access is granted to verified companies only. KYC applications are accepted only from registered businesses with a corporate email domain, so a personal-email account (for example Gmail or Outlook) cannot be approved. Add a user with your company email domain, then submit [KYC](https://brightdata.com/cp/kyc). Without KYC you can use [ISP proxies](/proxy-networks/isp/introduction), [Datacenter proxies](/proxy-networks/data-center/introduction) and the [Web Unlocker API](/scraping-automation/web-unlocker/introduction).
  </Accordion>

  <Accordion title="Can I switch my existing ISP or Datacenter zone to Residential?">
    Only after KYC approval. Creating or converting a zone to Residential is blocked until the Bright Data compliance team approves your KYC submission. Your existing ISP and Datacenter zones keep working while your KYC is under review. Start at [KYC verification](https://brightdata.com/cp/kyc).
  </Accordion>

  <Accordion title="What can I use without KYC?">
    Use these alternatives to Residential proxies, none of which require KYC:

    * **[ISP proxies](/proxy-networks/isp/introduction):** static, residential-registered IPs with datacenter speed, for ad verification, QA and long, stable sessions.
    * **[Datacenter proxies](/proxy-networks/data-center/introduction):** fast, low-cost shared or dedicated IPs for high-volume requests.
    * **[Web Unlocker API](/scraping-automation/web-unlocker/introduction):** managed unblocking that handles headers, cookies, CAPTCHAs and retries, billed per successful request.

    These are alternatives, not a limited or trial Residential mode.
  </Accordion>

  <Accordion title="How to integrate a new proxy into your code?">
    To integrate the proxies into your code, please visit the [API examples page](https://brightdata.com/cp/zones/proxy_examples), which can be accessed via your zone's settings, under "access parameters":

    <img alt="integrate-new-proxy.gif" />

    On this page, you can choose integration examples for most modern coding languages, just choose the integration type, your proxy zone, coding language, etc. and the page will generate a code snippet you can use right away.
  </Accordion>

  <Accordion title="How to integrate a proxy into 3rd party software?">
    Check out a few examples in the [API examples](https://brightdata.com/cp/zones/proxy_examples) page mentioned above (just choose "other software" in the "language" drop-down menu), or check our [Integrations page](/integrations), where we have specific guides to integrate our proxies within the most popular tools across the industry today.

    **Important note**: If you are using Bright Data's Web Unlocker API, Residential Proxies or the SERP API you probably need to use our SSL certificate to enable end-to-end secure connections. See [instructions here](/general/account/ssl-certificate).

    We have prepared detailed guides for the most commonly used tools. You can find links to the guides in the list below:

    BrowserScan 	[https://docs.brightdata.com/integrations/browserscan](/integrations/browserscan)

    XLogin 		[https://docs.brightdata.com/integrations/xlogin](/integrations/xlogin)

    GeeLark 	[https://docs.brightdata.com/integrations/geelark](/integrations/geelark)

    Puppeteer 	[https://docs.brightdata.com/integrations/puppeteer](/integrations/puppeteer)

    Playwright 	[https://docs.brightdata.com/integrations/playwright](/integrations/playwright)

    Selenium 	[https://docs.brightdata.com/integrations/selenium](/integrations/selenium)

    AdsPower 	[https://docs.brightdata.com/integrations/adspower](/integrations/adspower)

    Dolphin Anty 	[https://docs.brightdata.com/integrations/dolphin-anty](/integrations/dolphin-anty)

    Incogniton 	[https://docs.brightdata.com/integrations/incogniton](/integrations/incogniton)

    Marketerbrowser [https://docs.brightdata.com/integrations/marketerbrowser](/integrations/marketerbrowser)

    SMLOGIN 	[https://docs.brightdata.com/integrations/smlogin](/integrations/smlogin)

    Hidemyacc 	[https://docs.brightdata.com/integrations/hidemyacc](/integrations/hidemyacc)

    OpenBullet	[https://docs.brightdata.com/integrations/openbullet](/integrations/openbullet)

    Switchyomega 	[https://docs.brightdata.com/integrations/switchyomega](/integrations/switchyomega)

    PhantomBuster 	[https://docs.brightdata.com/integrations/phantombuster](/integrations/phantombuster)

    BitBrowser 	[https://docs.brightdata.com/integrations/bitbrowser](/integrations/bitbrowser)

    Maskfog 	[https://docs.brightdata.com/integrations/maskfog](/integrations/maskfog)

    Ghost Browser 	[https://docs.brightdata.com/integrations/ghost-browser](/integrations/ghost-browser)

    Postman 	[https://docs.brightdata.com/integrations/postman](/integrations/postman)

    NGINX 		[https://docs.brightdata.com/integrations/nginx](/integrations/nginx)

    StablerSOLO 	[https://docs.brightdata.com/integrations/stablersolo](/integrations/stablersolo)

    VMLogin 	[https://docs.brightdata.com/integrations/vmlogin](/integrations/vmlogin)

    GoLogin 	[https://docs.brightdata.com/integrations/gologin](/integrations/gologin)

    Windows 	[https://docs.brightdata.com/integrations/windows](/integrations/windows)

    Scrapy 		[https://docs.brightdata.com/integrations/scrapy](/integrations/scrapy)

    AEZAKMI 	[https://docs.brightdata.com/integrations/aezakmi](/integrations/aezakmi)

    Beautifulsoup 	[https://docs.brightdata.com/integrations/beautifulsoup](/integrations/beautifulsoup)

    WebHarvy 	[https://docs.brightdata.com/integrations/webharvy](/integrations/webharvy)

    Ubuntu 		[https://docs.brightdata.com/integrations/ubuntu](/integrations/ubuntu)

    Lalicat 	[https://docs.brightdata.com/integrations/lalicat](/integrations/lalicat)

    Multilogin 	[https://docs.brightdata.com/integrations/multilogin](/integrations/multilogin)

    Undetectable 	[https://docs.brightdata.com/integrations/undetectable](/integrations/undetectable)

    Apify 		[https://docs.brightdata.com/integrations/apify](/integrations/apify)

    iPhone 		[https://docs.brightdata.com/integrations/ios](/integrations/ios)

    MuLogin 	[https://docs.brightdata.com/integrations/mulogin](/integrations/mulogin)

    Changedetection [https://docs.brightdata.com/integrations/changedetection](/integrations/changedetection)

    Morelogin 	[https://docs.brightdata.com/integrations/morelogin](/integrations/morelogin)

    Proxifier 	[https://docs.brightdata.com/integrations/proxifier](/integrations/proxifier)

    Texau 		[https://docs.brightdata.com/integrations/texau](/integrations/texau)

    Android 	[https://docs.brightdata.com/integrations/android](/integrations/android)

    Kameleo 	[https://docs.brightdata.com/integrations/kameleo](/integrations/kameleo)

    Screaming Frog 	[https://docs.brightdata.com/integrations/screaming-frog](/integrations/screaming-frog)

    Foxy		[https://docs.brightdata.com/integrations/foxyproxy](/integrations/foxyproxy)

    SessionBox 	[https://docs.brightdata.com/integrations/sessionbox](/integrations/sessionbox)

    Insomniac 	[https://docs.brightdata.com/integrations/insomniac](/integrations/insomniac)

    Helium Scraper 	[https://docs.brightdata.com/integrations/helium-scraper](/integrations/helium-scraper)

    SaleFreaks 	[https://docs.brightdata.com/integrations/salefreaks](/integrations/salefreaks)

    Postern 	[https://docs.brightdata.com/integrations/postern](/integrations/postern)

    Antik 		[https://docs.brightdata.com/integrations/antik](/integrations/antik)

    Easync 		[https://docs.brightdata.com/integrations/easync](/integrations/easync)

    ParseHub 	[https://docs.brightdata.com/integrations/parsehub](/integrations/parsehub)

    Sphere Browser 	[https://docs.brightdata.com/integrations/sphere-browser](/integrations/sphere-browser)

    Octoparse 	[https://docs.brightdata.com/integrations/octoparse](/integrations/octoparse)

    ixBrowser 	[https://docs.brightdata.com/integrations/ixbrowser](/integrations/ixbrowser)

    Shadowrocket 	[https://docs.brightdata.com/integrations/shadowrocket](/integrations/shadowrocket)

    Firefox 	[https://docs.brightdata.com/integrations/firefox](/integrations/firefox)

    Chrome 		[https://docs.brightdata.com/integrations/chrome](/integrations/chrome)

    MacOS 		[https://docs.brightdata.com/integrations/macos](/integrations/macos)

    ClonBrowser 	[https://docs.brightdata.com/integrations/clonbrowser](/integrations/clonbrowser)

    Octo Browser 	[https://docs.brightdata.com/integrations/octobrowser](/integrations/octobrowser)

    Genlogin 	[https://docs.brightdata.com/integrations/genlogin](/integrations/genlogin)

    Web Scraper 	[https://docs.brightdata.com/integrations/webscraper](/integrations/webscraper)

    If the integration you're using does not appear on the list and you would like to get a guide for it, contact us!
  </Accordion>

  <Accordion title="How to target a Specific Country?">
    When sending your request, add the `-country` flag, **after** your zone’s name in the request, followed by the 2-letter [ISO code](https://www.nationsonline.org/oneworld/country_code_list.htm) for that country.

    In the example below: We added `-country-us` to our request, so we will send a request originating from the United States ("us").

    ```sh theme={null}
    curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us:<zone_password>
    ```
  </Accordion>

  <Accordion title="How to target the EU region">
    <Note>
      The allocation of a country within the EU is random.
    </Note>

    <Info>
      Relevant for DC, ISP, and Unlocker/SERP API
    </Info>

    You can target the entire European Union region in the same manner as "Country" above by adding "eu" after "country" in your request: -country-eu

    Requests sent using -country-eu, will use IPs from **one** of the countries below which are included automatically within "eu":

    ```text theme={null}
    AL, AZ, KG, BA, UZ, BI, XK, SM, DE, AT, CH, UK, GB, IE, IM, FR, ES, NL, IT, PT, BE, AD, MT, MC, MA, LU, TN, DZ, GI, LI, SE, DK, FI, NO, AX, IS, GG, JE, EU, GL, VA, FX, FO
    ```
  </Accordion>

  <Accordion title="How to target a Specific City?">
    City targeting works with residential proxies. City targeting for Datacenter and ISP proxies has been deprecated and is no longer available.

    When configuring your proxy zone, after selecting your preferred country, you can add a city, to further specify your geotargeting

    <img alt="add-city.png" />

    Once you click on **'Add city'** you will be displayed the available cities to target, for the selected country. In order to check the [number of available IPs](https://brightdata.com/cp/ips_availability) for a specific geolocation.

    Once configured, you'll be able to send requests from the selected city, using the following syntax

    ```sh theme={null}
    curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-<country>-city-<city>:<zone_password>
    ```

    <Note>
      When selecting a two-word city it'll be written as one word.

      For example, when targeting Buenos Aires the syntax of the request will be:

      `-country-ar-city-buenosaires`
    </Note>

    To view more geotargeting examples, you may want to review our [proxy integration examples page.](https://brightdata.com/cp/zones/proxy_examples)
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

  <Accordion title="How to keep using the same IP in multiple requests?">
    * This can be done by adding the `session` parameter to the proxy username:

    ```sh theme={null}
    brd.superproxy.io:44445 br-customer-<customer_id>-zone-<zone_name>-session-rand39484
    ```

    Generate the random number on thread startup, and change it when you want to change the Proxy Peer assigned for the thread's connection.

    * Session ID can be any random string/counter: requests with the same session string will use the same Proxy Peer (as long as possible); requests with different session strings will be assigned different Proxy Peers.

    <Warning>
      - Using the following characters in the session ID will throw an error: `-` `"` \`\`\`
      - This feature is only available for our proxy products, it will **not** work for Scraping Automation products such as the Web Unlocker API
    </Warning>

    * To force an IP change, just modify the session ID
    * If an assigned Proxy Peer (exit node IP) becomes unavailable, the Super Proxy will return an error "502 - No peers available" for the first request and then on the second request the super proxy will assign a new peer even if you do not change the session ID.
    * The Session IP is kept persistent for up to 5 minute of idle time. After 5 minutes with no requests, the IP is released back to the pool. To keep this Session/IP for longer, send a tiny keep-alive request every 30 seconds, to prevent this session from becoming idle for over a minute. This request may be anything small, such as /favicon.ico, or even a request that returns 404 (as long as the web server does not disconnect the socket due to this request).
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

  <Accordion title="How to use a specific IP?">
    When using Bright Data's Residential Proxy network, you may find the need to use a specific IP allocated to your zone.

    1. **Send a test request** with a '--verbose' or '-v' option added (this will turn on verbose logging)

    ```sh theme={null}
    curl "https://brdtest.com/myip.json" --verbose --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
    ```

    2. **Locate** the x-brd-ip response header and copy its value

       <img alt="x-brd-ip.png" />

    3. **Add** the -ip- flag to your request, after your zone’s name and use the **hashed IP value** copied in the previous step

    4. Send a test request, and **review the response**

    ```sh theme={null}
    curl "https://brdtest.com/myip.json" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-ip-<hashed-ip>:<zone_password>
    ```

    We recommend using [https://brdtest.com/myip.json](https://brdtest.com/myip.json) as the target domain for testing, and to review your IP credentials.
  </Accordion>

  <Accordion title="How to targeting an ASN specific IP?">
    This feature can be enabled by adding the ASN parameter to your Zone configuration, under **Geolocation Targeting**.

    <img alt="asn-targeting.png" />

    Once the configuration is saved, the ASN flag can be added to the Zone's credentials\
    and be integrated when using the Residential proxies. For example:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-asn-<asn-number>:<zone_password> "<target_site>"
    ```

    **Note:** Values for ASN number can be found [here](https://bgp.potaroo.net/cidr/autnums.html).
  </Accordion>

  <Accordion title="How to target residential proxy using group IP (gIPs)?">
    Dedicated residential IPs can be targeted in the form of [gIPs](/proxy-networks/residential/configure-your-proxy#ip-groups-gips). They can be allocated under the zone's configuration page by selecting a "Dedicated" IP type and choosing a number of gips. Also targeting a specific domain is required.

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

  <Accordion title="Targeting search engines via bright data Residential & Mobile networks">
    When targeting search engines through the Residential or Mobile networks, the request will not go through the Residential or Mobile peer but instead will be sent directly through one of our super proxies. The reason for this behavior is to support the integration of the Residential and Mobile networks with a browser, which might need to load search engine resource endpoints from the target website.

    **In case you target a search engine domain using Residential or Mobile networks, the request will be passed directly through the super proxy, and the following response header will serve as an indication:**

    ```sh theme={null}
    x-brd-ip: superproxy bypass
    ```
  </Accordion>

  <Accordion title="How can I see the IP address of my Residential proxy? ">
    Bright Data does not allow to see an open text version of your Residential and Mobile IP addresses. Datacenter and ISP Proxy IPs are open in clear text format. 

    When you send a request, in the reply header, you will see a reply header of `x-brd-ip` . This reply header includes a unique hash which represents the IP address you used for this request. 
  </Accordion>
</AccordionGroup>
