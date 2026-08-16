# Proxy Manager FAQs

> **Official Source**: [https://docs.brightdata.com/proxy-networks/proxy-manager/faqs](https://docs.brightdata.com/proxy-networks/proxy-manager/faqs)
> **Category**: `proxy-networks`

---

Find detailed answers to common Proxy Manager questions, including access restriction, port multiplication, IP targeting, and more. Connects via port 44445.

<AccordionGroup>
  <Accordion title="Can I restrict access to Remote Proxy Manager on-premise?">
    To secure your account and prevent unauthorized access to the Proxy Manager, there are 3 main available workflows:

    1. Allowlist IPs
    2. Token based Authentication using API key
    3. Permission by Email using the Bright data extension
  </Accordion>

  <Accordion title="How to connect to superproxy via HTTPS?">
    Proxy Manager can connect with the main Bright Data infrastructure using either HTTP or HTTPS connection.

    <Note>
      **To avoid confusion:** This is **NOT** the connection type to the target URL. To make sure the connection is secure it's enough to keep **Connection to Super Proxy** with a default value (HTTP) because the HTTPS requests create an end-to-end encrypted connection with the target site anyway.
    </Note>

    In most cases, you don't even need to touch this config. It may come out useful though when connecting from some territories where traffic to some domains is blocked. In these cases, you need to set it to **HTTPS** not to allow the global firewall to see the content of your proxies traffic and filter it out based on the target domain
  </Accordion>

  <Accordion title="How to multiply ports?">
    Go to "General" tab and choose the number of ports you want to multiply in the Multiply proxy port drop down

    Once you set the number of multiplied ports you need the Proxy Manager will generate the sequential ports identical to the port you configured.

    This is a very powerful feature when you need to create many ports with the same settings but only set it once.
  </Accordion>

  <Accordion title="How to get IPs from specific locations?">
    With Bright Data you can specify the geolocation and other parameters of the IPs you use for sending traffic. In Proxy Manager it's especially easy because it take only a few clicks.

    Depending on the zone you use you can request IPs only from a specific country (if you use Residential or Datacenter network) or additionally specific carrier (if you use Mobile network).

    **How to set targeting in Proxy Manager?**

    To get IPs from a specific location, follow these steps:

    * Click on the proxy port that you want to use location-specific IPs
    * Go to **Targeting** tab
    * Select country, state, city for choosing a peer in a specific geolocation
    * Select ASN or carrier name (only for mobile peers)

    <Note>
      Each targeting option requires the proper permissions in your Zone.
    </Note>

    <Accordion title="How to use IPs from multiple countries without creating many ports?">
      If you want to use multiple countries and you don't want to create a separate proxy port for each country it's also possible to control the targeting dynamically.
    </Accordion>
  </Accordion>

  <Accordion title="How to control targeting dynamically?">
    You don't have to specify the country, state or city targeting in advance using the Targeting tab in the UI. It is possible to pass extra targeting options dynamically ('on the fly') along with the request.

    ```sh theme={null}
    curl -x lum-country-br@127.0.0.1:24001 http://brdtest.com/myip.json
    ```

    The request's structure is:

    ```sh theme={null}
    curl -x lum-country-<country_iso_code>@<ip>:<port> <destination_url>
    ```

    The other option for controlling targeting dynamically is by including a special header.

    ```sh theme={null}
    "x-lpm-country: <country_code>"
    ```

    Example request could look like this:

    ```sh theme={null}
    curl --proxy http://127.0.0.1:24000 -H "x-lpm-country: us" http://brdtest.com/myip.json
    ```

    You may also use headers for controlling state and city:

    * State: `x-lpm-state: <state>`
    * City: `x-lpm-city: <city_name>`
  </Accordion>

  <Accordion title="How to override the port's country?">
    To override the country selected in the port, you can send the 'x-lpm-country' header with the chosen country code.

    ```sh theme={null}
    curl --proxy [LPM_DOMAIN]:[PORT] -H "x-lpm-country: il" "http://brdtest.com/myip.json"
    ```
  </Accordion>

  <Accordion title="How to set an automatically follow redirect?">
    Follow Redirect is a valuable feature within the Proxy Manager that enhances your control over the handling of 30X (Redirection) errors. This feature is located within the Port Settings, under the General tab. It provides you with the option to automatically send a new request when encountering a 30X error, where the destination URL is derived from the Location response header. This documentation will guide you through enabling and using this feature.

    **Accessing Follow Redirect:**

    1. Open the desired port for Follow redirect activation
    2. Go to General Tab: Within the Port Settings, click on the "General" tab. This is where you'll find various settings related to how your proxy handles requests and responses.
    3. Toggle the Follow Redirect Feature: In the General tab, you will see the "Follow Redirect" feature. It's presented as a toggle button, allowing you to enable or disable it as needed.

    **How Follow Redirect Works:**

    * When the Follow Redirect feature is enabled, it instructs the proxy manager to automatically send a new request in response to a 30X error.
    * The URL for the new request is determined based on the Location response header received in the 30X error response.
    * This allows your proxy to seamlessly follow the redirection and ensure that the request is sent to the correct destination, as specified by the Location header.

    **Benefits of Follow Redirect:**

    In environments where automatic redirection is not supported or desired, the Follow Redirect feature gives you full control.
  </Accordion>

  <Accordion title="How to control sessions consistency with session header?">
    You can control your sessions using the Proxy Manager by sending x-lpm-session header.

    * Add the header with any random session ID"x-lpm-session: random\_session"
    * When using the same session the Proxy Manager will try to connect with the same exit node (peer/IP)
    * When you change the session value the Proxy Manager will connect with a different exit node (new peer/IP)
    * To keep a given session alive you must send a request no less than every 7 minutes
    * Note that in order to use it with HTTPS requests you will need to enable SSL Analyzing and install the certificate

    Here is an example:

    ```sh theme={null}
    curl --proxy http://127.0.0.1:24000 -H "x-lpm-session: rand123" http://brdtest.com/myip
    ```
  </Accordion>

  <Accordion title="How can I Refresh Session on Cloud Proxy Manager?">
    You can refresh session on your cloud Proxy Manager with the following curl request:

    ```sh theme={null}
    curl -X POST "https://pmgr-customer-<customer_id>.brd.superproxy.io:22999/api/refresh_sessions/<port>"
    ```
  </Accordion>

  <Accordion title="How to export logs from Proxy Manager?">
    In Proxy Manager, we provide users with a range of options to export logs to external storage and log monitoring systems. These export options allow you to centralize and analyze your logs efficiently. In this documentation article, we will outline the available log export options and guide you on how to configure them through Proxy Manager settings.

    **Log Export Options:**

    Proxy Manager offers the following log export options:

    **Logz.io**

    Configure the Logz.io integration in Proxy Manager settings by specifying your Logz.io token, Host and other required parameters.

    **AWS S3:**

    To export logs to AWS S3, set up the S3 integration in Proxy Manager settings. You will need to specify your AWS access key, secret key, S3 bucket name, and other relevant details.

    **Webhook:**

    Configure the webhook endpoint and any required authentication details and URL in Proxy Manager settings to start exporting logs via webhook.

    **Datadog:**

    To export logs to Datadog, set up the Datadog integration in Proxy Manager settings by providing your Datadog API key and other relevant information.

    **Configuring Log Exports:**

    To configure log exports in Proxy Manager, follow these general steps:

    1. Access Proxy Manager Settings:
    2. Navigate to the settings or configuration section.
    3. Select Log settings option in Enable request logs
    4. Toggle on Use remote logs aggregator
    5. Choose the desired log export option (Webhook, Datadog, Logz.io, or AWS S3).
    6. Provide Configuration Details: For the selected export option, you will typically need to provide specific configuration details. This may include endpoint URLs, API keys, authentication credentials, and storage settings.
    7. Click on Test to check the configuration
    8. Click OK and Save changes

       <img alt="logs-settings.png" />

    By following these steps, you can effectively configure Proxy Manager to export logs to your chosen external storage or monitoring systems, enhancing your ability to monitor and manage your network and applications effectively.
  </Accordion>

  <Accordion title="How to unblock error codes?">
    Error code responds can trigger an IP refresh or try with new IP using the Proxy Manager Rules with the following steps:

    * Add a new rule at Proxy Manager, rules tab
    * Select 'Status code' as the rule type
    * Trigger the rule by selecting the relevant status code to scan (i.e 501, 402, 301, etc)
    * Select the desired outcome such as 'Refresh IP' or 'Try with new IP'

    Watch video:[unblock error codes](https://brightdata.com/video/unblock_error_codes)
  </Accordion>

  <Accordion title="How to run UI (dashboard) on HTTPS">
    **What is needed?**

    To be able to access the UI (dashboard) using HTTPS protocol you need to provide the Proxy Manager with an SSL certificate and private key for your domain.

    The certificate and private key should be generated specifically for your domain and installed on the server. Usually it's done through the server and domain provider

    **How to do it?**

    Run Proxy Manager along with environment variables `SSL_CERT` and `SSL_KEY` pointing to the according certificate files. Example command to run in the terminal:

    ```sh theme={null}
    SSL_CERT=/path/to/ca.crt SSL_KEY=/path/to/ca.key pmgr
    ```

    Once it is started you can access the UI using [https://your-domain.com:22999/](https://your-domain.com:22999/)
  </Accordion>

  <Accordion title="How to save request/response history?">
    By enabling the `--history` flag. When history mode is enabled, both request and response headers will be saved to a local database. They can be accessed under the "Proxies" section. The history option can also track HTTPS, by enabling the '--ssl' flag. For additional details, see the Bright Data Proxy Manager [GitHub page](https://github.com/luminati-io/luminati-proxy#installation).

    This can also be done through the Proxy Manager dashboard by abling Log request history and Enable SSL sniffing under the General settings section.
  </Accordion>

  <Accordion title="How to use SOCKS5 with Bright Data's Proxy Manager">
    To use SOCKS5 with Bright Data's Proxy Manager, simply use `socks5h://` as the protocol when connecting to your local Proxy Manager port. No UI changes are needed.

    Example:

    ```sh theme={null}
    curl -x socks5h://127.0.0.1:24000 "https://geo.brdtest.com/welcome.txt"
    ```

    <Note>
      Always use `socks5h://` (not `socks5://`) to ensure DNS is resolved on the proxy side, as required by Bright Data.
    </Note>
  </Accordion>

  <Accordion title="How to define a proxy IP country when using SOCKS5 protocol with Proxy Manager?">
    <Warning>
      This option is only available for customers who have dropin port enabled
    </Warning>

    `SOCKS5` protocol uses an encrypted base64 string for authentication.

    Therefore, when using `SOCKS5`, if you need to define a proxy IP country (`-country-<COUNTRY_CODE>`), you will have to convert your basic authentication information into base64 token:

    * Browse [https://www.base64encode.org](https://www.base64encode.org/)
    * Encode `brd-customer-<customer_id>-zone-<zone_name>-country-<COUNTRY>:<zone_password>` to Base64 format token
    * Use the "Basic authorization token" header you generated on the `SOCKS5` request that you send the Proxy Manager port:

    ```sh theme={null}
    curl -v "http://brdtest.com/myip.json" --socks5 127.0.0.1:24000 -H "Proxy-Authorization: Basic <Basic authorization token>"
    ```
  </Accordion>

  <Accordion title="How to switch from API to Proxy Manager">
    Using the Proxy Manager offers advanced features that are not readily available in the API. Instead of having to manually code mechanisms for tasks like keeping an IP as long as possible or rotating your IP after each request, you can simply click a button in the Proxy Manager.

    Guidelines to to switch from API to Proxy Manager:

    1. Install the Proxy Manager [here](https://github.com/luminati-io/luminati-proxy#installation/)
    2. Change the code to send HTTP requests directly to the specified port (for example, 127.0.0.1:24000) instead of to brd.superproxy.io:
    3. Configure the settings for your custom proxies and Zones through the Proxy Manager dashboard. You do not need to send the user parameter (brd-customer-customer\_name-zone-zone\_name…) alongside your requests, as all the needed data is wrapped within the manual proxy configuration.
  </Accordion>

  <Accordion title="How to mimic a human user?">
    Including all headers and cookie behavior. See bash example, using Bright Data **Proxy Manager**:

    ```sh theme={null}
    curl -v "http://brdtest.com/myip.json" -H 'pragma: no-cache' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.8' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp, image/apng,\*/\*;q=0.8' -H 'cache-control: no-cache' -H 'cookie: bcookie="v=somekindofcookiexxx";' --proxy http://127.0.0.1:PORT_NUM
    ```

    <Note>
      When using Web Unlocker API attaching headers is disabled by default, please contact support in order to approve headers attachment.
    </Note>
  </Accordion>

  <Accordion title="How to set up the Proxy Manager as a system service?">
    <Steps>
      <Step title="Sign in as 'root' to the remote server (running Ubuntu)" />

      <Step title="Create a service">
        Create a new service file in:

        ```sh theme={null}
        /etc/systemd/system/pmgr.service
        ```

        ```sh theme={null}
        [Unit]
        Description=Proxy Manager
        Wants=network-online.target
        After=network-online.target

        [Service]
        Type=simple
        Restart=always
        RestartSec=5
        Environment=NODE_ENV=production
        ExecStart=/usr/bin/pmgr
        User=root
        StandardOutput=null
        StandardError=null

        [Install]
        WantedBy=multi-user.target
        ```
      </Step>

      <Step title="Reload service files">
        ```sh theme={null}
        systemctl daemon-reload
        ```
      </Step>

      <Step title="Start Proxy Manager service">
        ```sh theme={null}
        systemctl start pmgr
        ```
      </Step>

      <Step title="Check status:">
        ```sh theme={null}
        systemctl status pmgr.service
        ```
      </Step>

      <Step title="Done!">
        You have completed setting up Proxy Manager as a service. You can now control your new service:

        ```sh theme={null}
        service pmgr [stop|start|restart]
        ```
      </Step>
    </Steps>
  </Accordion>

  <Accordion title="How can I view my request details?">
    Enabling 'Request details' under 'General settings' will add the response headers below, and will allow you to get a wider, more specified view of your request. This feature has the same functionality as using the `-debug` flag.

    * `x-brd-ip-destination` - IP of the targeted host
    * `x-brd-ip` - IP allocated to the request.
    * `x-brd-timeline` - Time it took to complete

    <Note>
      - This feature is turned off by default on the cloud proxy manager, if needed, make sure you enable it.
      - Enabling 'Request details' is necessary in order to implement the action 'Ban IP' within a rule.
    </Note>

    Viewing these headers can be done with one (or more) of the following ways

    <Tabs>
      <Tab title="via the verbose flag (-v)">
        Sending your request in verbose mode by using the `-v` flag
      </Tab>

      <Tab title="Viewing your proxy manager logs">
        1. Click on the specific request you want to examine
        2. Click on 'Headers'
      </Tab>

      <Tab title="Viewing it on your browser's 'Network' tab">
        1. Open 'devtools' by clicking F12
        2. Go to the 'Network' tab
        3. Navigate to the target URL
        4. Click on the relevant request
        5. The relevant headers would be under 'Response Headers'
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="How to reduce the amount of data in a response?">
    * Go to "General" tab
    * Select "On" from "SSL analyzing"
    * Go to "Rules" tab
    * Select "URL" from "Rule type" drop-down list
    * Choose any file type to apply regex expression
    * Select "Null response" from "Action type" drop-down list

    In the following example below the Proxy Manager will return a null response (0kb and still status code 200) for all requests that end with any of the file type endings .jpg|.png|.gif etc.

    Use this option when you want to reduce the amount of data you wish to get in your response.
  </Accordion>

  <Accordion title="How can I improve the speed of my web scraping?">
    If the number of requests you rotate through a single IP is higher than what target websites allow, the website you target will identify your IP and block or mislead you with false information. It means that your information collecting can be much slower than what you're used to.

    **What can I do about it?**

    Assuming you're running 10 million requests, 1 request per second per IP with 1000 data center IPs, your routine can take about 3 hours. With 10,000,000 residential IPs, your routine can potentially take 1 second.

    Guidelines to rotate multiple parallel sessions through Bright Data's residential network:

    1. Open Proxy Manager
    2. Go to the 'Overview' menu
    3. Click the port of your residential zone
    4. Edit in the port settings 'preset' to 'Rotating (IPs)'
    5. Route your requests to `127.0.0.1:<portnum>` where the `portnum` is the port of the residential zone
  </Accordion>

  <Accordion title="How do I know if I'm getting cloaked?">
    Getting cloaked means that you're getting misleading information from the website you are scraping.

    Example: If you are collecting comparative competitive information to feed your automatic pricing algorithms, the target website can return artificially lower prices to your requests, to skew your pricing and profits.

    **What can I do about it?**

    When using traditional proxy networks (data center based IPs), your target websites may identify your activity quite easily and may cloak your requests. Therefore, the only way to ensure you're not getting cloaked is to rotate your requests through residential IPs.

    Guidelines for rotating requests through millions of residential IPs:

    1. Open Proxy Manager
    2. Go to the 'Overview' tab
    3. Click the port of your residential zone
    4. Edit in the port settings 'preset' to 'Rotating (IPs)'
    5. Route your requests to `127.0.0.1:<portnum>` where the `portnum` is the port of the residential zone
  </Accordion>

  <Accordion title="How to set Long Single Session when using Proxy Manager">
    Choose "Long Single Session" on the port settings drop-down, and it will automatically ping the IP to keep the session alive:

    <img alt="long-single-session.png" />
  </Accordion>

  <Accordion title="How do I use Remote DNS?">
    Using Remote DNS gives you a DNS resolve server similar to that of the Proxy peer (the origin of the Proxy's IP). This makes your request look more credible as the resolve server is usually located geographically close to the IP, whereas without using Remote DNS the resolve server is one of Bright Data's Super-Proxies which may be located in another country. To use Remote DNS:

    <Tabs>
      <Tab title="via Proxy Manager">
        Go to Edit Port > IP control > set "DNS Lookup" to "Remote - resolved by peer"
      </Tab>

      <Tab title="via The API">
        Simply add it to your username string.

        For example:

        ```sh Shell theme={null}
        brd-customer-<customer_id>-zone-<zone_name>-dns-remote
        ```
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="How to use parallel Proxy Manager instances for high performance?">
    When you don't want to overload one Proxy Manager with too many requests you can create several instances of the Proxy manager on different servers.

    The best way to do so is by following the next steps:

    * Install the Proxy Manager locally and set all of the ports as needed
    * Save the config file
    * Turn on Sync configuration so all the changes will be kept in sync on all the machines automatically
    * Install the Proxy Manager on the servers you want to use
    * *Import* the config file to the proxy\_manager directory in the servers

    Split your traffic between the servers

    ```js theme={null}
    request 1 -> {FIRST SERVER IP}:24000
    request 2 -> {SECOND SERVER IP}:24000
    ```

    Using the Proxy Manager with this method will make sure you are not overloading one Proxy Manager instance and it will help you keep the same configuration across all instances.

    This means you can send requests from same port with the same country at the same time on each instance.

    If you're having troubles setting up this load-balancing yourself - you could use our [Clouds](https://brightdata.com/cp/lpm) that have load-balancing feature implemented. You'll only need to use 1 UI and control all instances with shared configuration, and then target same URL, we will take the whole load-balancing process ourselves.
  </Accordion>

  <Accordion title="I cannot Login to on-Premise Proxy Manager">
    If you fail to login to your [Proxy Manager](/proxy-networks/proxy-manager/introduction)(PM), please do the following:

    * Make sure that the computer that runs PM is not using a VPN.\\
      <Note>
        Mind that using a VPN while running PM might cause login problems, and also slow down the connection to the proxies
      </Note>
    * Close PM (the terminal's black screen where PM is running)
    * Delete cookies on your browser
    * Open PM again (it takes about 1-2 minutes for PM to load)
    * Try to log in on the same method you did before (by using Google, or by using your registered mailbox and password)

    Alternatively, you may switch the hosting of Proxy Manager to our [Cloud](https://brightdata.com/cp/lpm). We will take care of hosting and even load-balancing between several instances of Proxy Managers.

    P.S. After PM loads, the default browser should open automatically on PM's login page. If it does not, open your browser, browse 127.0.0.1:22999, and then try to log in.
  </Accordion>

  <Accordion title="Proxy Manager connection error (port status is not &#x22;ok&#x22;)">
    If you cannot log in to Proxy Manager, or If Proxy Manager cannot connect to Super Proxy (i.e. port status is not OK), check the following:

    * Make sure that VPN is not turned on
    * Make sure that there is no anti-virus or any other security software (such as 360, Norton, etc.) blocking traffic sent from Proxy Manager
    * Make sure that the firewall (OS / server / any other security software's firewall) allows TCP traffic through ports 22000-25000
    * If the proxy manager software is installed on macOS/ Linux server - Verify that:
      * Node.js version is between 12.18.3 and 14.18.1
      * NPM version is between 6.14.6 and 8.1.3
      * If versions of NPM and Nodejs are not the one we're supporting - please remove them and install the versions that we specified. More information regarding Linux/Mac installation can be found at our [GitHub page](https://github.com/luminati-io/luminati-proxy/#linuxmacos---manual-install)
  </Accordion>

  <Accordion title="Why Am I getting '400 Proxy Error: ip_requested_not_allocated_by_customer'?">
    When Using the Data center/ISP or gIPs products, the error code `400` can appear in case the IPs under your zone has been refreshed, removed, or simply changed due to system updates

    <Note>
      This error typically arises after your BrightData account has been recently suspended. An automatic suspension occurs if your account balance becomes negative. If the suspension extends beyond 24 hours, the static allocated IPs will be released from your account. Upon reactivation, the reallocated IPs may differ from the original ones, thus if the previously allocated IPs are still being targeted - this error is thrown.
    </Note>

    Whenever this error appear, you should go to your Bright Data Zones page, download the new list of IPs relevant to this zone.

    Make sure you also update the list of IPs in case you are using the proxy manager tool with prefix of IP port setup

    Example:

    ```sh Shell theme={null}
    curl --v "http://brdtest.com/myip.json" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-ip-1.1.1.1:<zone_password>
    ```

    <img alt="shell-example.png" />
  </Accordion>

  <Accordion title="How to get IPs from specific locations?">
    With Bright Data you can specify the geolocation and other parameters of the IPs you use for sending traffic. In Proxy Manager it's especially easy because it take only a few clicks.

    Depending on the zone you use you can request IPs only from a specific country (if you use Residential or Datacenter network) or additionally specific carrier (if you use Mobile network).

    **How to set targeting in Proxy Manager?**

    To get IPs from a specific location, follow these steps:

    * Click on the proxy port that you want to use location-specific IPs
    * Go to **Targeting** tab
    * Select country, state, city for choosing a peer in a specific geolocation
    * Select ASN or carrier name (only for mobile peers)
  </Accordion>

  <Accordion title="What Bright Data products does Proxy Manager work with?">
    Proxy Manager supports the following Bright Data products: Data Center Proxies, ISP Proxies, Residential Proxies, Mobile Proxies, Web Unlocker API, SERP API \
    Proxy Manager does not support Browser API.
  </Accordion>

  <Accordion title="How can I download proxy manager? ">
    We recommend that you run proxy manager on our cloud servers as a service for better experience. If you need to install it on your local machines use the following links.

    ### Windows

    [Download proxy manager installer for windows](https://github.com/luminati-io/luminati-proxy/releases/download/v1.519.10/luminati-proxy-manager-v1.519.10-setup.exe)

    ### Linux & MacOS

    `bash `Installer:

    ```sh theme={null}
    curl -L https://brightdata.com/static/lpm/luminati-proxy-latest-setup.sh | bash
    ```

    `NPM `package installer:

    ```sh theme={null}
    sudo npm install -g @luminati-io/luminati-proxy
    ```

    `Docker`image:

    ```sh theme={null}
    docker pull luminati/luminati-proxy
    ```

    ### Source code

    [https://github.com/luminati-io/luminati-proxy](https://github.com/luminati-io/luminati-proxy)
  </Accordion>
</AccordionGroup>
