# Proxy products FAQ

> **Official Source**: [https://docs.brightdata.com/proxy-networks/faqs](https://docs.brightdata.com/proxy-networks/faqs)
> **Category**: `proxy-networks`

---

FAQs on integrating, configuring and using Bright Data's proxy products (195 countries), including IP types, geotargeting and error codes across the platform.

<AccordionGroup>
  <Accordion title="What exactly is a zone and how important is the zone name?">
    In bright data, a "zone" represents a specific product and its configuration settings. You can think of it as an instance in the context of cloud computing.

    For example, you can have a zone for Datacenter proxy in Germany and you can have a separate zone for Datacenter proxies in France.

    Every zone has a name and one or more password, allowing you to interact with it.

    The zone name itself cannot be changed once it's configured, so you may want to use an easy to remember name that represents what you're trying to achieve. Keep in mind, that you can add a description to the zone, and you can change that description anytime. You can find it under the zone name at the top of the page.

    The zone name is used to create your proxy username, which you can then [customise if you want in order to control your proxies](/proxy-networks/config-options). Here is a sample proxy username for proxies in the USA - as you can see it includes the zone name inside it:

    `brd-customer-<customer_id>-zone-<zone_name>-country-us`

    As mentioned, you cannot change the name of the zone after you have saved it - if you want to change the name, simply create a new with a new name.
  </Accordion>

  <Accordion title="Integration with 3rd party tools">
    Bright data can be easily integrated into many third-party tools. In general, simply configure an HTTP/HTTPS proxy using the credentials for your Bright Data product. If you are using residential proxies, Web Unlocker API or SERP API don't forget to [use the SSL certificate](/general/account/ssl-certificate) to ensure and to end encrypted connections.

    <Warning>
      Residential proxies require a [KYC-verified business account](/proxy-networks/residential/network-access). Some third-party tools also cannot install the Bright Data SSL certificate, so integration with Residential proxies may not be possible in those tools. Without KYC, use [ISP or Datacenter proxies](/proxy-networks/residential/network-access#what-can-i-use-without-kyc).
    </Warning>

    We have prepared detailed guides for the most commonly used tools. You can find links to the guides in the list below:

    * [BrowserScan](/integrations/browserscan)
    * [XLogin](/integrations/xlogin)
    * [GeeLark](/integrations/geelark)
    * [Puppeteer](/integrations/puppeteer)
    * [Playwright](/integrations/playwright)
    * [Selenium](/integrations/selenium)
    * [AdsPower](/integrations/adspower)
    * [Dolphin Anty](/integrations/dolphin-anty)
    * [Incogniton](/integrations/incogniton)
    * [Marketerbrowser](/integrations/marketerbrowser)
    * [SMLOGIN](/integrations/smlogin)
    * [Hidemyacc](/integrations/hidemyacc)
    * [OpenBullet](/integrations/openbullet)
    * [Switchyomega](/integrations/switchyomega)
    * [PhantomBuster](/integrations/phantombuster)
    * [BitBrowser](/integrations/bitbrowser)
    * [Maskfog](/integrations/maskfog)
    * [Ghost Browser](/integrations/ghost-browser)
    * [Postman](/integrations/postman)
    * [NGINX](/integrations/nginx)
    * [StablerSOLO](/integrations/stablersolo)
    * [VMLogin](/integrations/vmlogin)
    * [GoLogin](/integrations/gologin)
    * [Windows](/integrations/windows)
    * [Scrapy](/integrations/scrapy)
    * [AEZAKMI](/integrations/aezakmi)
    * [Beautifulsoup](/integrations/beautifulsoup)
    * [WebHarvy](/integrations/webharvy)
    * [Ubuntu](/integrations/ubuntu)
    * [Lalicat](/integrations/lalicat)
    * [Multilogin](/integrations/multilogin)
    * [Undetectable](/integrations/undetectable)
    * [Apify](/integrations/apify)
    * [iPhone](/integrations/ios)
    * [MuLogin](/integrations/mulogin)
    * [Changedetection](/integrations/changedetection)
    * [Morelogin](/integrations/morelogin)
    * [Proxifier](/integrations/proxifier)
    * [Texau](/integrations/texau)
    * [Android](/integrations/android)
    * [Kameleo](/integrations/kameleo)
    * [Screaming Frog](/integrations/screaming-frog)
    * [Foxy](/integrations/foxyproxy)
    * [SessionBox](/integrations/sessionbox)
    * [Insomniac](/integrations/insomniac)
    * [Helium Scraper](/integrations/helium-scraper)
    * [SaleFreaks](/integrations/salefreaks)
    * [Postern](/integrations/postern)
    * [Antik](/integrations/antik)
    * [Easync](/integrations/easync)
    * [ParseHub](/integrations/parsehub)
    * [Sphere Browser](/integrations/sphere-browser)
    * [Octoparse](/integrations/octoparse)
    * [ixBrowser](/integrations/ixbrowser)
    * [Shadowrocket](/integrations/shadowrocket)
    * [Firefox](/integrations/firefox)
    * [Chrome](/integrations/chrome)
    * [MacOS](/integrations/macos)
    * [ClonBrowser](/integrations/clonbrowser)
    * [Octo Browser](/integrations/octobrowser)
    * [Genlogin](/integrations/genlogin)
    * [Web Scraper](/integrations/webscraper)

    If the integration you're using does not appear on the list and you would like to get a guide for it, contact us!
  </Accordion>

  <Accordion title="What are IP Types for Residential and Mobile Proxy?">
    There are two types of IPs that we offer within our Residential and Mobile Proxy:

    <Tabs>
      <Tab title="Shared">
        IPs that are shared across **multiple** users. Connect to our entire network of [400M+ monthly residential IPs](https://brightdata.com/proxy-types/residential-proxies). Rotate between countries, cities, and ASNs using the Proxy Manager, Extension, or raw API commands.

        Cost is calculated per GB consumed, according to your [monthly plan](/general/account/billing-and-pricing/billing).

        ## Geolocation targeting

        The IP allocated to your zone will be from the selected country, city, ASN, or zip code. Select the needed parameter from the drop-down menu.

        <img alt="geolocation-targeting-dropdown.png" />

        ## Sending a request with Geolocation:

        * With a 'Shared' IP, you'll be able to control your geolocation targeting when you send a request.
        * To target a specific country, add the `-country` flag to your request,

        For example, if you'd like to send your request from the United States ('us'), your request using a shared IP will look like

        ```sh theme={null}
        curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us: <zone_password>  
        ```
      </Tab>

      <Tab title="Dedicated">
        IPs that are set aside **for your use only.** Since Bright Data's residential network is an opt-in, residential network made up of millions of devices around the world, Bright Data developed the group IPs (gIPs) method to further enhance your dedicated IP capability.

        ## Dedicated IP groups (gIPs)

        gIP contains between 6-90 IPs at any given moment while sharing the same attributes, targeting the selected dedicated domains within the zone "Configuration" section.

        <img alt="dedicated-ip-groups.png" />

        ## Geolocation targeting

        The IP allocated to your zone will be from the selected country

        <img alt="add-country.png" />

        ## Domains

        Define the domains you'd like your IPs to be exclusive to. Requests to **any other** domain will be bypassed and sent from our servers .

        <img alt="add-domains.png" />

        <Note>
          There is **no** option to add "All domains". Requests to domains that are not in the list will be sent from the our servers resulting in a super-proxy bypass and will be either blocked or rerouted through a different proxy.
        </Note>

        ## Sending a request with Geolocation:

        When you send your request, it will originate from the country you've selected within your zone configuration. There is \*\*no need to add additional country flags.\*\*For example, if you've configured your 'Geolocation targeting' country to be the United States ('us'), you may send your request with the following default syntax and we will automatically route it through whatever is set in your proxy's configuration:

        ```sh theme={null}
        curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>: <zone_password>
        ```
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="What is a super-proxy?">
    Super-proxies are the gateway servers of Bright Data. Every request sent through Bright Data's proxy platform passes through these servers, which select the best peer based on the request details and balance the load among peers.

    In some cases, Bright Data may not be able to process your request via a peer, resulting in a super-proxy bypass. This means the request is sent directly from Bright Data's gateway servers instead of a peer.

    When a super-proxy bypass occurs, the response headers will include an info message explaining why it happened.

    It is possible to block requests from being sent from the super-proxies when it happens, simply add the `-route_err-block` flag to your proxy username:

    ```sh theme={null}
    curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-route_err-block:<zone_password>
    ```
  </Accordion>

  <Accordion title="What are the proxy (IP) Types for Datacenter?">
    There are three types of IPs that we offer within our [Datacenter Proxy Network](https://brightdata.com/proxy-types/datacenter-proxies):

    1. Shared (Pay per usage): Access a shared pool of \~40,000 rotating proxies
    2. Shared unlimited: Access a set of specific proxies, shared with others with unlimited usage.
    3. Dedicated unlimited: Access a set of specific proxies, exclusive for you, with unlimited usage
  </Accordion>

  <Accordion title="What are IP Types for ISP?">
    There are three types of IPs that we offer within our [ISP Proxy Network](https://brightdata.com/proxy-types/isp-proxies):

    1. Shared (pay per usage)
    2. Shared unlimited (pay per proxy)
    3. Dedicated unlimited (pay per proxy)

    In all proxy types you can select the location of your proxies by zone configuration or using the -country parameter in your code/proxy user name.

    ### Shared pay per usage

    Rotating proxies from a pool of 10,000 proxies (IP addresses). Proxies are shared with others and charged by your usage: amount of GB you pass thru them.

    ### Shared unlimited

    Set of proxies, shared with others, paid by proxy. The more you buy, the less you pay per proxy. See our [fair use](/general/usage-monitoring/fair_use_allowance) policy for unlimited zones.

    ### Dedicated unlimited

    Set of proxies, exclusive to you, paid by proxy. The more you buy, the less you pay per proxy. See our [fair use](/general/usage-monitoring/fair_use_allowance) policy for unlimited zones.
  </Accordion>

  <Accordion title="How to find and rotate thru my allocated IPs?">
    You can find your IP list in the following pages:

    1. Zone overview page: There are 'Download' and 'View' buttons below the code example.
    2. Main zone table: There are 'Download' and 'View' icons under the 'Allocated IPs' column.

    In both cases the buttons will do the same thing:

    1. The view button will allow you to view, refresh and remove IPs from the pool.
    2. The download button will download a csv file with the full list in `host:port:username:password` format.

    Our proxy will automatically rotate thru the proxies assigned to this zone, and abide to location you specify. In case you want to have better control on driving a request thru a specific proxy (IP) you can use the `-ip` or `-gip` options. Read more about it here: [Controlling your proxies](/proxy-networks/config-options#controlling-your-proxies). For advanced proxy rotation control you will need to install and route your requests using Bright Data [proxy manager](/proxy-networks/proxy-manager/introduction).
  </Accordion>

  <Accordion title="How to integrate a new proxy into your code?">
    To integrate the proxies into your code, please visit the [API examples page](https://brightdata.com/cp/zones/proxy_examples), which can be accessed via your zone's settings:

    <img alt="integrate-new-proxy.gif" />

    On this page, you can choose integration examples for most modern coding languages, just choose the integration type, your proxy zone, coding language, etc. and the page will generate a code snippet you can use right away.
  </Accordion>

  <Accordion title="How can I test if my proxy is working?">
    To test your proxy, use the terminal command that's available in your **Overview** tab for the proxy.

    Copy and paste it to your terminal. In Windows, click the 'Start' button and enter 'cmd'. In Mac or Linux, run the 'terminal' application. Then, paste the code in the new window.

    If your proxy is working well, you will see text on the console with details regarding your proxy.

    If not, you will see an error code. You can always paste the error code in the AI agent integrated into the dashboard to get additional details.
  </Accordion>

  <Accordion title="How to integrate a proxy into 3rd party software?">
    Check out a few examples in the [API examples](https://brightdata.com/cp/zones/proxy_examples) page mentioned above (just choose "other software" in the "language" drop-down menu), or check our [Integrations page](/integrations), where we have specific guides to integrate our proxies within the most popular tools across the industry today.

    **Important note**: If you are using Bright Data's Web Unlocker API, Residential Proxies or the SERP API you probably need to use our SSL certificate to enable end-to-end secure connections. See [instructions here](/general/account/ssl-certificate).
  </Accordion>

  <Accordion title="How do I configure proxy in a specific country or location?">
    You can control the location of your country easily for every request that you send. You can choose proxies by country, state, city, zip code and ASN. In this answer, we will focus on choosing a specific country.

    When sending your request, you can make you Proxy appear to be in a in a specific country by adding the `-country` flag, **after** your zone’s name in the request, followed by the 2-letter [ISO code](https://www.nationsonline.org/oneworld/country_code_list.htm) for that country.

    If you use a third-party tool or application, simply use the username that includes the `country-xx` in the configuration. In other words, in the box where you need to put in the proxy username, enter the full string, including the country parameter, for example: `brd-customer-<customer_id>-zone-<zone_name>-country-us` - don't forget to use your own credentials that you can find in the "Overview" tab.

    If you use your own code, see the example below: We added `-country-us` to our request, so we will send a request originating from the United States ("us").

    ```sh theme={null}
    curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-country-us: <zone_password>
    ```

    If you use a third-party application in conjunction with the proxies, you can enter the username, including the country to software's configuration.

    Of course, if you send requests to the proxy using code that you wrote, you can easily adjust the username to target specific countries as needed.

    Remember, you can also choose proxies by country, state, city, zip code and ASN. See [this guide](/proxy-networks/config-options) for more info.
  </Accordion>

  <Accordion title="How can I set default countries for zones with fixed IP pools?">
    Some zones will give you access to a big fixed pool of IPs from all around the world. In these zones, you may select default countries to target without specifying the country in the request.

    After selecting the default countries, the zone will target one of these countries in each request. You can still target other countries by adding the `-country-xx` flag to your request and override the default country selection.
  </Accordion>

  <Accordion title="Why can't I find a country in the list?">
    Bright data has Datacenter and ISP proxies in most countries around the world, but not all. We are constantly adding data centres in new countries as they become available.

    If you cannot find the country you are looking for in Datacenter or ISP proxies, we recommend you check out Residential proxies. Since residential proxies are based on real people with real devices, we are able to offer residential proxies in every country in the world!
  </Accordion>

  <Accordion title="How to target the EU region">
    <Note>
      The allocation of a country within the EU is random.
    </Note>

    <Info>
      Relevant for all proxy networks: Datacenter, ISP, Residential and Mobile, as well as to our  Unlocker and SERP APIs
    </Info>

    You can target the entire European Union region (member countries) in the same manner as "Country" above by adding "eu" after "country" in your request: -country-eu

    Requests sent using -country-eu, will use IPs from a **single, randomally selected** country of the countries below which are included automatically within "eu":

    Member countries are: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden
  </Accordion>

  <Accordion title="How to target all countries except China?">
    When Allocating IPs to a Zone, in the country selection section in the configuration UI, you can select the 'All except CN' option, which allows you to allocate IPs from all around the world while excluding IPs from China.

    Note this option is available only in the following zone types:

    * Data Center / ISP - Shared - Pay per proxy
    * Data Center / ISP - Dedicated
  </Accordion>

  <Accordion title="How to target a Specific City?">
    City targeting for datacenter and ISP proxies has been deprecated and is no longer available. City targeting for residential and mobile networks is available. [Read more here >>](/proxy-networks/faqs#where-does-bright-data-have-proxies)
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
    * The Session IP is kept persistent for up to 7 minutes of idle time. After 7 minutes with no requests, the IP is released back to the pool.\
      To keep this Session/IP for longer, send a tiny keep-alive request no longer than 7 minutes, to prevent this session from becoming idle for over 7 minute.\
      This request may be anything small, such as /favicon.ico, or even a request that returns 404 (as long as the web server does not disconnect the socket due to this request).
    * If you have multiple Clients and would like to ignore your Clients source IP (which is used together with your session ID to create a session), then you want to use a global session then add `glob_` as a prefix to your session:

    ```sh theme={null}
    brd-customer-<customer_id>-zone-<zone_name>-session-glob_rand39484
    ```

    Full request example:

    ```sh theme={null}
    brd-customer-CXXXXX-zone-ZONE_X-session-glob_rand39484
    ```

    Generate the random number on thread startup, and change it when you want to change the Proxy Peer assigned for the thread's connection.
  </Accordion>

  <Accordion title="Where do I find is my proxy address and port?">
    You can find your proxy address and port in the "Overview" tab inside the proxies that you configured.

    To do this, click on my zones, then click the line with the proxy you need.

    On the overview tab you can also copy your proxy list, download it, refresh your proxies etc.
  </Accordion>

  <Accordion title="How to allowlist/denylist IPs and domains?">
    Allowlisting your IP is a good way to keep your account secure, as it prevents others from accessing your proxies even if they have your username and password.

    When you allowlist an IP, only that IP will be allowed to send requests to your proxies. As soon as a single IP exists in this list - all other IPs will no longer be able to access the zone's proxies and will be blocked.

    Access from allowlisted IP still requires you to provide your zone's username and password to gain access to the zone's proxies.

    Allowlisting does not impact access to Bright Data control panel: it only restricts access to the proxies.

    To add IPs to a zone's denylist/allowlist, there are 2 ways:

    * Via the control panel: <img alt="whitelist-blacklist.png" /> Add all the relevant IPs and domains you'll allow access to with your proxy zone.
      * Go to any of your zone's settings, and click the "Configuration" tab.
      * Scroll down to the "Security settings" section, as they are both responsible for white/denylisting IPs and domains, respectively:
    * **Via API endpoints:**
      * [Add IP to Zone allowlist](/api-reference/account-management-api/allowlist-ip)
      * [Remove IP from Zone allowlist](/api-reference/account-management-api/remove-ip-from-zone-allowlist)
      * [Add IP to Zone denylist](/api-reference/account-management-api/denylist-ip)
      * [Remove IP from Zone denylist](/api-reference/account-management-api/remove-ip-from-zone-denylist)
      * [Remove domain from Zone allowlist/denylist](/api-reference/account-management-api/remove-domain-from-zone-allowlist-or-denylist)
      * [Add domain to Zone allowlist/denylist](/api-reference/account-management-api/allowlist-or-denylist-domains)

    #### Important tips re allowlist:

    * Example for adding domains: <img alt="domain-add-example.png" />
    * Example for adding IPs: <img alt="ip-add-example.png" />
    * IPs that should be allowlisted are **your** machine's IPs that you'll be sending requests with, **not** the proxy IPs in your zones.
    * We **strongly recommend** allowlisting your IPs wherever possible, since when the allowlist is empty, you run the risk of getting your non-allowlisted IPs temporarily blocked in the case where our automatic security blocking system detects any irregular activity. See more info within [this video.](https://brightdata.com/static/video/howto/blacklist_system_explanation.mp4?md5=153602994-22bce32a\&hver=2)
    * There is **no limit** on how many IPs/domains you can add to the allowlist and we also support ranges of IPs.
  </Accordion>

  <Accordion title="How to see supported Ports & Protocols?">
    #### HTTP and HTTPS Protocols

    Protocols `HTTP` & `HTTPS` are supported by default.

    #### SOCKS5 Protocol

    Bright data supports `SOCKS5` protocol, with a default port 22228 assigned for SOCKS5 communication.

    SOCKS5 is supported for all Bright Data's proxy networks: Datacenter, ISP, Residential, and Mobile.

    See here for [full SOCKS5 configuration instructions](/proxy-networks/socks5)

    #### Target Ports

    We distinguish between two kinds of ports: Bright Data proxy & scraping services ports and using specific ports when targeting hosts (websites). This FAQ refers to target ports ; by which the proxy peer should communicate with the target website.

    Ports 80 and 443 are available by default in all zones, for HTTP and HTTPS protocols.

    In zones of proxies of type Datacenter or ISP, all ports higher than 1024 are supported by default.

    In zones of proxies of type Residential or Mobile, the following ports wills be available by default: 8080, 8443, 5678, 1962, 2000, 4443, 4433, 4430, 4444 and 1969.

    Bright Data can support additional ports by request. Every request to support a new port will be followed by a dedicated and additional compliance process with the Bright Data compliance team.\
    Examples of ports that require Bright Data compliance review before activation:

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

  <Accordion title="How to Target Residential IP groups (gIPs)?">
    Dedicated Residential IPs can be selected in the form of [gIPs](/proxy-networks/residential/configure-your-proxy#ip-groups-gips). They can be allocated under the zone's configuration page by selecting a "Dedicated" IP type and choosing a number of gips. Also targeting a specific domain is required.

    <img alt="number-of-dedicated-gIPs.png" />

    Once the configuration is saved, selecting "Show allocated Dedicated residential IPs" will provide\
    a list of hash values that represent group IPs.

    <img alt="show-allocated-dedicated-ips.png" />

    These values can be used to target a specific gip. For example:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-gip-<gip_hash_value>:<zone_password> "<target_site>"
    ```
  </Accordion>

  <Accordion title="How to review usage stats for proxy products in the control panel">
    There are two ways to track usage:

    #### Proxy Dashboard

    Access the Main Proxy Dashboard [here](https://brightdata.com/cp/zones/dashboard)

    * Data Usage per Network: Shows total bandwidth and number of requests for each proxy product over the selected timeframe.
    * Usage Overview: Displays a graph where you can select timeframe, data point (bandwidth, requests, average bandwidth per request), and filter by zone, product, or target domain. You can also compare usage between timeframes using the "Compare to" option.

    #### Zone Overview Page

    * In the zone 'Overview' section you can view stats for a specific zone, with options to compare timeframes, choose data points (bandwidth, requests, bandwidth per request), and view additional metrics in a table below the graph.
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
    Geolocation databases (GeoDB) are used by internet websites to query information about the IP address used by the users. Bright Data monitors and maintains correct records for MaxMind GeoDB.

    There are many other smaller GeoDBs, most of which are using outdated records or flawed testing methods, and so the information they present is not accurate or is presented to lure their viewers to buy VPN or proxy products from them.

    In order to see our information about the proxy IP that you are using, please use the following link: [https://geo.brdtest.com/mygeo.json](https://geo.brdtest.com/mygeo.json)
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
    x-brd-error: Forbidden: This target URL isn't supported on proxy networks, use the SERP API product for targeting this URL. You may contact your account manager or open a support ticket for assistance
    ```
  </Accordion>

  <Accordion title="Residential & Mobile networks">
    When targeting search engines through the Residential or Mobile networks, the request will not go through the Residential or Mobile peer but instead will be sent directly through one of our super proxies. The reason for this behavior is to support the integration of the Residential and Mobile networks with a browser, which might need to load search engine resource endpoints from the target website.

    **In case you target a search engine domain using Residential or Mobile networks, the request will be passed directly through the super proxy, and the following response header will serve as an indication:**

    ```sh theme={null}
    x-luminati-ip: superproxy bypass
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

  <Accordion title="Does Bright Data support the Socks5 protocol">
    Yes. Bright data supports `SOCKS5` protocol, with a default port 22228 assigned for SOCKS5 communication.

    See here for [full SOCKS5 configuration instructions](/proxy-networks/socks5) or visit the [SOCKS5 proxies page](https://brightdata.com/solutions/socks5-proxies).
  </Accordion>

  <Accordion title="How do I control from where the request is performed?">
    * You can choose to perform the request from the super proxy directly instead of the IP of the peer. In that case the IP of the request will be the one of the Super proxy. You will need to add **'-direct'** to your request authorization string. `brd-customer-<customer_id>-zone-<zone_name>-direct`
  </Accordion>

  <Accordion title="How do I refresh session (IP)?">
    Using the same IP for a long period of time makes it easier for the target website to mark the IP as proxy and can make your request get detectable by the target website. Refreshing your IPs will result in allocation of new IPs from Bright Data instead of your existing ones in your pool allowing you to gain control over your pool and reach higher success rates.
  </Accordion>

  <Accordion title="How to browse Chinese sites by using Chinese residential IPs?">
    No special settings required, just use `country-cn` flag in your credentials
  </Accordion>

  <Accordion title="How to use the same IP for an extended period of time and how long can I keep it? (long session)">
    If you wish to keep the same IP for a long time for session-based use, you have the following options:

    * Target a specific IP with the `-ip` flag: View your proxy list in your zone's pool (can be found in the control panel in the zone's 'overview' tab) choose one IP and target it  using the `-ip` flag. This will route all your requests to the same IP. You can use the same IP as long as it is allocated to your zone.
    * Keep same session IP: By utilizing the `-session-<SESSION_ID> `flag your requests will be routed to the same IP. To make sure that the same IP is kept bound to your session ID, you need to ensure that the session is not kept idle for more than . You can have multiple parallel sessions at the same time - each one with a different IP allocated to it.

    Optional: By utilizing the [Proxy Manager](/proxy-networks/proxy-manager/introduction) you can make use of the [long single session](/proxy-networks/proxy-manager/configuration#presets) preset which will automatically send dummy requests at regular intervals to ensure the IP is kept allocated.

    <Note>
      For residential/mobile zones, IPs are real users' devices' IPs, and therefore can be used only when the user's device is idle (i.e. the device is connected to the internet, has enough battery power, and the user is not currently using it). If the IP becomes unavailable, Bright Data will automatically assign you with another available residential IP of the same type and geo-location as you used.
    </Note>

    For more instructions and examples please see the following article: [https://docs.brightdata.com/proxy-networks/config-options#controlling-your-proxies-rotation](/proxy-networks/config-options#controlling-your-proxies-rotation)
  </Accordion>

  <Accordion title="What is Error code 502?">
    HTTP error code 502 means "Bad Gateway". This error occurs when you send a request to a URL, but the URL's server receives an invalid response from another server that it depends on to fulfill the request.

    Bright Data uses the http headers to show additional information about the HTTP error, which helps in identifying the root cause and resolving the issue.

    Check our [error catalog](/proxy-networks/errorCatalog#http-error-502) for HTTP Error 502 reasons.
  </Accordion>

  <Accordion title="What is Error code 403?">
    HTTP 403 response code means you are forbidden from accessing a **valid** URL. The server understands the request, but it can't fulfill the request because of client-side issues.

    Bright Data uses the http headers to show additional information about the HTTP error, which helps in identifying the root cause and resolving the issue.

    Check our [error catalog](/proxy-networks/errorCatalog#http-error-403) for HTTP Error 403 reasons.
  </Accordion>

  <Accordion title="Why am I getting SSL errors? (ERR_CERT_AUTHORITY_INVALID)">
    If you've tried using the residential or mobile proxy networks and have encounterred one of the following errors or ones similar to them:

    * net::ERR\_SSL\_PROTOCOL\_ERROR
    * ERR\_INVALID\_CERT
    * Error: self-signed certificate in certificate chain
    * ERROR: No matching issuer found
    * NET::ERR\_CERT\_AUTHORITY\_INVALID
    * SSL: CERTIFICATE\_VERIFY\_FAILED

    It means that you are using the residential or mobile networks over HTTPS and have not handled the SSL verification correctly.

    For more info on Residential network access and KYC, see the [Residential network access policy](/proxy-networks/residential/network-access).

    **How to resolve the SSL errors?**

    You have the following options:

    * Utilize API access instead of native proxy access: If you are connecting programmatically you should consider connecting via the API method - which handles the SSL certificate for you behind the scenes: [API access vs Native Proxy access](/api-reference/authentication)
    * Complete the know-your-customer (KYC) process, which takes \~2-3 business days to process - after which you'll be able to use the residential/mobile network with minimal restrictions, which also resolves the SSL errors. To complete KYC process fill in the [KYC form](https://brightdata.com/cp/kyc)
    * Install the BrightData SSL certificate, according to our [SSL certificate installation guide](/general/account/ssl-certificate) (note that for some specific integration methods installing the ssl certificate may not be possible due to it not being supported)
      <Note>
        This solution may not be supported by certain third party proxy tools e.g., GoLogin, MultiLogin.
      </Note>
    * If you are utilizing our proxies through code (NodeJS, Python, C#, etc.) or console, you can ignore SSL verification entirely, which resolves all SSL verification errors. We provide examples on how to do this in the [SSL certificate documentation page](/general/account/ssl-certificate)
    * Use a different product: instead of Residential proxies you could use a different product such as Data Center or ISP proxies, which do not require "Special Permissions" (KYC). You could do this as a temporary measure until your KYC form is approved.
  </Accordion>

  <Accordion title="How do I redirect `curl` ourput to a file?">
    When scraping large files or in order to record `curl` output, you may want to redirect the output to a file. In order to do so add `--output [filename]` to your `curl` command options.
  </Accordion>

  <Accordion title="How can I allow/block targeting specific domains in my zone?">
    You can control access by allowing or blocking specific domains through simple configurations within your zones. Follow these steps to manage domain access:

    1. Visit the [Zones Page](https://brightdata.com/cp/zones) Go to the Zones Page in your dashboard.
    2. Select Your Desired Zone Choose the zone you wish to configure for domain access.
    3. Navigate to the 'Configuration' Tab Once in your selected zone, locate the Configuration tab, then scroll down to  Security Options.
    4. Allowing or Blocking Domains
       * To allow specific domains, add them to Allowed Target Hosts.
       * To block specific domains, add them to Blocked Target Hosts.
    5. Domain Wildcard Options
       * Root Domain Inclusion: Adding a root domain (e.g., example.com) will automatically include all its subdomains (e.g., sub.example.com).
       * Wildcard Use: Utilize the \* wildcard to cover all subdomains and suffix variations. For instance, adding example.\* will include sub.example.\* and various domain suffixes like example.com, example.co.uk, etc.

    <Tip>
      These configurations provide flexibility in managing domain-level access for your proxy zones, ensuring secure and controlled connectivity.
    </Tip>
  </Accordion>

  <Accordion title="How do I target government websites?">
    By default, Bright Data blocks proxy traffic to what classifies as Government websites. Some countries' government websites do not have special domain name suffix (like `.gov` or `.gov.[country_code]` , yet those domains still qualify as government domains and getting blocked.  

    When you get this specific reason block, check your response headers for `x-brd-err-code` : if the value is `policy_20000` - this is a government website block. 

    To gain access to government website, Bright Data will require you to identify your business and usecase via our KYC process. [Read more about KYC process](/proxy-networks/residential/network-access#kyc-verification) or start the KYC [here](https://brightdata.com/cp/kyc). 
  </Accordion>

  <Accordion title="Why am I getting errors about robots.txt?">
    robots.txt is a file that website owners use to define which areas of their site can be accessed by automated systems. On the Residential network, Bright Data adheres to these rules to ensure ethical compliance. Requests to blocked areas will return a 502 Residential Failed (bad\_endpoint) error.

    To resolve these errors you can choose one of these solutions:

    * Keep your KYC use case current with the Bright Data compliance team, so your approved Residential access covers the sites you target. Residential access requires KYC approval. To start or review the process, see the [KYC form](https://brightdata.com/cp/kyc).
    * Use our other products that do not require KYC verification, such as [ISP proxies](/proxy-networks/isp/introduction) and [Datacenter proxies](/proxy-networks/data-center/introduction).
    * Avoid navigating to the web paths that the website is blocking in the robots.txt file.

    For more information, please see the following article: [https://docs.brightdata.com/proxy-networks/residential/network-access](/proxy-networks/residential/network-access)
  </Accordion>

  <Accordion title="Do you offer IPv6 Proxies and how do I get IPv6 proxies?">
    We will consider providing IPv6 proxies to selected customers. Please contact us for inquires in regards to [support@brightdata.com](mailto:support@brightdata.com)
  </Accordion>

  <Accordion title="How to understand why I am getting a certain error?">
    To try and understand the reason your are encountering a specific error while using our proxy networks, you should try to recreate the same request on which you encountered the error and send it via cURL on CMD/BASH or some other http request service such as Postman.

    While sending the request, ensure you are attaching the `-v` or `-verbose` flag to the request (for cURL), this will ensure you receive the response headers which contain important information regarding the source of the error and will guide you to a solution.

    If the response headers include `x-brd-` then the error originates with BrightData and you should check the [BrightData Error Catalog](/proxy-networks/errorCatalog) for further advice

    Otherwise, there has not been a failure on our side - and you should instead check the article regarding [Website Blocking](/proxy-networks/website-blocking)

    It could also be that the error originates from issues with your integration, you should check if you've integrated correctly, for help with integration - please see our [Integrations Section](/integrations/introduction)
  </Accordion>

  <Accordion title="Does Bright Data have any request limits? ">
    Bright Data allows large scale proxy access and operations, we do not enforce a global requests limit (also known as "Rate limit"), but we do monitor customers' usage - and alert if this usage is exceeding normal behavior. We do protect our proxy networks and if requests rate is too high you will receive an HTTP Error 429 ([see description of error and troubleshooting here](/proxy-networks/errorCatalog#http-error-429)).

    We monitor both general requests inflow as well as **number of requests per proxy (IP)**, if we identify and overload on a specific proxy IP we may throttle it and return an HTTP error 429 with specific error message indicating such scenario. You will be requested to add more IPs or reduce your load.

    We highly recommend when encountering rate limit error (HTTP error 429) to review you rotation logic (in case you refer explicitly to proxy IPs) - you may have been targeting a specific set of IPs with requests while leaving the others unused.
  </Accordion>

  <Accordion title="Why cant I access (blocked) google, bing.com, youtube.com with proxies?">
    As part of BrightData's policy - we perform blocks or [Super-Proxy-Bypasses](/proxy-networks/faqs#what-is-a-super-proxy) when users try to access google.com, youtube.com, bing.com and a handful of other select domains with our regular proxies. If you wish to scrape google search result data or youtube.com, please use [SERP API](/scraping-automation/serp-api/introduction) or Web Unlocker API instead.
  </Accordion>

  <Accordion title="Why am i getting wrong geolocation when checking proxy IP?">
    When checking your brightdata proxy IP location and details via third party IP checker sites, you may receive in results the 'wrong' geolocation, this can be due to two main reasons:

    * Geolocation Databases: Geolocation databases (GeoDB) are used by internet websites to query information about the IP address used by the users. Bright Data monitors and maintains correct records for MaxMind GeoDB. There are many other smaller GeoDBs, most of which are using outdated records or flawed testing methods, and so the information they present is not accurate or is presented to lure their viewers to buy VPN or proxy products from them.
    * Super Proxy Bypass: For third party IP checkers we may perform a superproxy bypass instead of completely blocking the request, this is done in order to retain our IP's reputation. When this is done, you may see the location of our superproxy not of your proxy peer. Dont worry - for other regular websites your real proxy peer will be used. [What is a superproxy bypass?](/proxy-networks/faqs#what-is-a-super-proxy)

    To avoid such issues, please only use our official IP checker website, which will show you the accurate information: [https://geo.brdtest.com/mygeo.json](https://geo.brdtest.com/mygeo.json)
  </Accordion>

  <Accordion title="How can I use Bright Data proxies in IP:PORT format?">
    Bright Data proxies natively support the industry-standard format: `IP/HOST:PORT:USERNAME:PASSWORD`. If your integration method does not support this format and requires `IP:PORT` only, you can use **Bright Data Proxy Manager**, a free, open-source tool that allows you to route requests to our proxies using the `IP:PORT` format.

    For more details on configuring Proxy Manager for this setup, refer to our guide: [Port Targeting Configuration](/proxy-networks/proxy-manager/configuration#port-targeting)
  </Accordion>

  <Accordion title="Why has my IP address been added to the zone denylist? ">
    #### Handling IP Restrictions on Your Account

    If Bright Data detects unusual or suspicious activity originating from a particular IP address on one of your zones, the automated security measures will denylist that IP to protect your account. While this system effectively prevents most malicious activity, it occasionally may block legitimate users, resulting in an `ip_forbidden` error message.

    #### How to Resolve This Issue

    If you encounter this error, you can quickly resolve it by:

    1. Go to the \*\*'Proxy' \*\*tab
    2. Navigate to the affected Proxy/Zone from the list
    3. Select **'Security Settings'** in the configuration panel
    4. Find the**IP allowlist**  option
    5. Add your current machine's IP address to the allowlist

    Once your IP is allowlisted for the Proxy/zone, you'll regain immediate access to the service.
  </Accordion>

  <Accordion title="How to get your Bright Data connection information?">
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

    <Frame>
      <img alt="your-proxy-list" />
    </Frame>

    ### Residential proxy access

    To access Bright Data's **Residential Proxies** you will need to either get verified by our compliance team, or install a certificate. [Read more...](/proxy-networks/residential/network-access)

    ### Targeting search engines?

    If you target a search engine like google, bing or yandex, you need a special Search Engine Results Page (**SERP**) proxy API. Use Bright Data SERP API to target search engines. [Click here to read more about Bright Data SERP proxy API.](/scraping-automation/serp-api/introduction)

    ### Avoid `PROXY ERROR` in your tool

    Some tools use search engines as a test target for proxy: if your proxy test fails, this is probably the reason. Make sure that your test domain is not a search engine (this is done in the third-party tool's configuration, and not controlled by Bright Data).
  </Accordion>

  <Accordion title="Does Bright Data proxies support HTTP3?">
    Yes. We offer selected customers to use our advanced high performance proxy networks with HTTP3 protocol. This is a limited offer to our enterprise tier customers: to use HTTP3 for your scraping operations, please contact your Bright Data account manager.
  </Accordion>

  <Accordion title="What should I know to work with HTTP3 with Bright Data proxy network? ">
    ### How do I know if my target domain supports HTTP3?

    You can tell if your target domain advertises on HTTP3 by sending a `curl` request checking the response header for `alt-svc` header. If this header exists in the response it means the domain is offering access over HTTP3.

    ```text theme={null}
    curl -k -i https://[my target website]
    ```

    Alternatively, you can check [https://http3check.net/](https://http3check.net/) or similar websites.

    ### Can I use my installed `curl` to query over HTTP3?

    Yes - but you need a specifically built `curl` utility which is supporting `HTTP3`. Most popular released of `curl` does not support `HTTP3`.

    ### Why should I use HTTP3?

    Some websites expect HTTP3 traffic ; so by accessing with target's expected protocols you may experience smoother unblocked access. For some use cases, HTTP3 access is faster than HTTP2, so your throughput can be higher.

    ### Do I need to perform special setup on my proxies?

    No. All the proxies provided by Bright Data can relay HTTP3 traffic without special setting or modifications.

    ### Do I need to modify my operations or access to use HTTP3?

    Consult your IT, Network and Security administrators on enabling HTTP3 from your network. Some network or firewall settings may be required to allow this traffic to flow from/to your organization's network.

    ### How can I see if my chrome browser is utilizing HTTP3 for traffic?

    Open your chrome browser in development mode, and open the network tab. In `protocol` column, if you see `h3` it means requests are sent and received over HTTP3.

    ### How can I join the beta trial of HTTP3 of Bright Data?

    In order to gain access to our HTTP3 beta, contact your account manager in Bright Data. We authorize currently only selected enterprises to join our beta trial of HTTP3.
  </Accordion>

  <Accordion title="Can I export my logs? ">
    Yes - Bright Data supports exporting your logs to AWS S3 store. Set this up in your control panel here: [https://brightdata.com/cp/setting/logs\_delivery](https://brightdata.com/cp/setting/logs_delivery)

    ***Note: Your AWS S3 bucket must be in us-east-1 region***
  </Accordion>
</AccordionGroup>
