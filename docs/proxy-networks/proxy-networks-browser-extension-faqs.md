# Browser extension FAQs

> **Official Source**: [https://docs.brightdata.com/proxy-networks/browser-extension/faqs](https://docs.brightdata.com/proxy-networks/browser-extension/faqs)
> **Category**: `proxy-networks`

---

FAQs about the Bright Data Proxy Browser Extension (port 44445), including login issues, SSL certificate compatibility and Chrome setup steps.

<AccordionGroup>
  <Accordion title="Why does the login message keeps appearing?">
    Bright Data uses cookies to remember your login credentials in order to keep your user experience at its best. If you are using third-party extensions that regularly removes cookies from your device then you'll see the login message quite often.
  </Accordion>

  <Accordion title="I upgraded to new bright data SSL certificate and extension stopped working">
    The browser extension supports the new SSL certificate on port `44445`. Make sure you connect on port `44445` with `brightdata_root_ca_44445.crt`. See the [root certificate migration guide](/general/account/ssl-certificate-migration).
  </Accordion>

  <Accordion title="How can you avoid getting login message?">
    In the top right corner you can click on "Delete Cookies". This will delete all the cookies from your device **except** Bright Data's and Google's cookies so you could keep using Bright Data with no interruptions and keep your browser extensions alive.

    <img alt="delete-cookies.png" />
  </Accordion>

  <Accordion title="Does the extension work in incognito mode?">
    > **Yes!**

    Bright Data extension works on both regular and incognito mode.

    To enable incognito support on Chrome, do the following:

    * Type **chrome://extensions** in the chrome address bar
    * Make sure **Allow in incognito** is checked

      <img alt="allow-in-incognito.gif" />
  </Accordion>

  <Accordion title="When should I use custom headers?">
    Custom headers are mainly meant to make the request more specific. You should use it in cases when you need to pass custom parameters with your requests to the target site. Every header should contain Name & Value and you can add as many headers as you like.
  </Accordion>

  <Accordion title="Why am I getting an 'error' message when I setup the extension?">
    There are few possible reasons for proxy error when setting up the extension:

    * A zone was not selected. Make sure that the form is filled correctly.
    * Your account is 'disabled'. You can easily check this on your [Dashboard](https://brightdata.com/cp).
    * You have a negative balance. Check this in your [Billing](https://brightdata.com/cp/billing) section.
    * Bright Data network status issues. You can check the network live status [here](https://brightdata.com/cp/status).
  </Accordion>

  <Accordion title="Does the extension work with the Browser API?">
    No. The Browser API is not a proxy product, and is not compatible with the extension.
  </Accordion>

  <Accordion title="Can multiple machines use the extension on the same account?">
    Yes. there is no limit on how many extensions are logging to the same account.
  </Accordion>

  <Accordion title="Can I let other people use the extension without providing my account credentials?">
    > **Yes!**

    They will need to go to the [extension setup page](https://brightdata.com/cp/bext) and login with the **customer name**, **zone name** and **zone key** of the zone you wish to let them access. All the zone info is available in the [Zones](https://brightdata.com/cp/zones) section.

    You can also use this link in order to automatically insert your guest-login credentials:

    ```http theme={null}
    https://brightdata.com/cp/bext?customer=customer_id&zone=zone_name&key=ZONE-KEY
    ```
  </Accordion>

  <Accordion title="How to grant access by email using Bright Data Extension?">
    This workflow is relevant to allow access to the Proxy Manager when integrated with a browser. The access is granted by updating the config file of the proxy manager.

    This can be done by sending the next API command:

    ```sh theme={null}
    curl -X POST "http://<remote-server-IP>:22999/api/proxies" -v -H "Content-Type: application/json" -d '{ "proxy": { "customer": "<account_ID>", "zone": "<zone>", "password":"<zone_password>", "multiply_users": true, "users": ["<email>"], "bw_limit": { "days": 100000, "bytes": 9000000000 } }, "create_users": true }'
    ```

    1. Change `remote-server-IP` with the server IP address of where the proxy manager is installed or 127.0.0.1 if it is installed locally.
    2. Change `account_ID` with your Account ID on the [settings page](https://brightdata.com/cp/setting/customer_details)
    3. Change `zone>, `zone\_password\` with the relevant access parameters from the [zone page](https://brightdata.com/cp/zones)
    4. Change `email` with the user's email.

    Once the command will be sent, a detailed email with instructions and credentials will be sent to `email`.

    In the API output, the user's password is also provided along with additional information such as the port number. It can be seen in the next example:

    <img alt="user-credentials.png" />

    The user can now access the proxy by installing the [extension](https://brightdata.com/products/proxy-browser-extension).

    5. After installation select “Connect through proxy manager”
       <img alt="connect-through-proxy-manager.png" />

    6. Enter the IP address of the Proxy Manager server along with the relevant port for example:
       <img alt="proxy-manager-ip.png" />

    7. Select done. Then, click **"Sign in".**
       <img alt="sign-in.png" />

    8. Enter the credentials Received.
  </Accordion>
</AccordionGroup>
