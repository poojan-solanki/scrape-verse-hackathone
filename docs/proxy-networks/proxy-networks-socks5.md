# SOCKS and SOCKS5 proxies

> **Official Source**: [https://docs.brightdata.com/proxy-networks/socks5](https://docs.brightdata.com/proxy-networks/socks5)
> **Category**: `proxy-networks`

---

Use the SOCKS5 protocol with Bright Data Datacenter, ISP, Residential and Mobile proxy networks. Includes connection examples and authentication methods.

## Supported SOCKS Protocols

Bright Data supports SOCKS protocol version 5: `SOCKS5`.

## Using SOCKS5 for your scraping tasks

The most common protocols for internet data collection are `HTTP` and `HTTPS`, some of the tools or utilities require `SOCKS5` for their operations.

In Bright Data, we do not distinguish between `HTTP` , `HTTPS` and [`SOCKS5 proxies`](https://brightdata.com/solutions/socks5-proxies): all our proxies support all three protocols. You can switch between protocols while using the same proxy.

## Do you really need  SOCKS5?

Our `HTTP` and `HTTPS` proxy solutions are usually the best fit for scraping websites, offering lowest cost and highest performance. However, if the the task still requires `SOCKS5` Bright Data can provide quality proxies around the globe.

## Supported Proxy types & HTTP protocols

`SOCKS5` proxy connections are supported on all Bright Data proxy networks: Datacenter, ISP, Residential and Mobile.

Bright data support HTTP/S version 2.0 only via SOCKS.

We do not support tunneling HTTP/2 versiob 3.0 via SOCKS.

<Info>
  Using `SOCKS5` over Bright Data **Residential proxy**  is supported only towards `HTTPS` targets, `HTTP` targets will be supported soon.
</Info>

## SOCKS5 Main proxy port configuration

<Note>
  **`Bright Data  uses port 22228 for SOCKS5`**
</Note>

When using `SOCKS5` make sure to use `brd.superproxy.io:22228` and not the standard port <Tooltip>[`44445`](/general/faqs#which-port-shall-i-use-22225-or-33335)</Tooltip> for `HTTP` and `HTTPS` protocols.

## SOCKS5 targeting with Bright Data

<Warning>
  **Bright Data supports only hostnames (domain names) for SOCKS5 proxies**
</Warning>

Per our compliance regulation, we allow `SOCKS5` requests **only** with hostnames/domain names relayed as target. Requests sent with explicit IPs or local IP resolution, are **blocked**.

Hence, configure your code, client or calling application to:

1. Use domain name as target
2. Resolve DNS remotely and not locally

Adhering to those rules will ensure the request to get to the target domain IP, thru our proxy peer.

### Which target ports to use

#### Datacenter & ISP

Bright Data supports all ports higher than `1024` for datacenter and ISP proxies.

#### Residential & Mobile

Bright Data supports ports: `8080`, `8443`, `5678`, `1962`, `2000`, `4443`, `4433`, `4430`, `4444` and `1969` for Residential & Mobile proxies.

## Using SOCKS5 with `curl`, `Javascript` & `Python`

<Tabs>
  <Tab title="curl">
    <Warning>
      **`Use socks5h://brd.superproxy.io:22228 when issuing curl requests`**
    </Warning>

    To use `curl` with Bright Data SOCKS5 proxies, you have to explicitly:

    1. Add `-x` to your command line parameters
    2. Use SOCKS5h protocol for remote DNS lookup
    3. Use proxy address as `brd.superproxy.io:22228`
    4. Provide Bright Data proxy zone credentials
    5. **Residential and Mobile proxies**: Add curl `-k` option to ignore SSL errors proxies or [Setup SSL Certificate](/general/account/ssl-certificate#using-the-ssl-certificate-in-your-code)

    Requests which do not comply with all the above are blocked.

    Examples `curl` command:

    ```bash theme={null}
    curl -i -k -x socks5h://brd.superproxy.io:22228 --proxy-user [USERNAME]:[PASSWORD] "https://geo.brdtest.com/welcome.txt"
    ```
  </Tab>

  <Tab title="Javascript">
    Example code for `SOCKS5` request:

    ```javascript theme={null}
    // install https://www.npmjs.com/package/socks-proxy-agent
    const https = require('https');
    const { SocksProxyAgent } = require('socks-proxy-agent');
    const user_pass = 'brd-customer-[ACCOUNT ID]-zone-[ZONE NAME]:[ZONE PASSWORD]';
    const socks_proxy_url = `socks5h://${user_pass}@brd.superproxy.io:22228`;
    const agent = new SocksProxyAgent(socks_proxy_url);
    https.get('https://geo.brdtest.com/welcome.txt', {agent},
      res=>res.pipe(process.stdout));
    ```
  </Tab>

  <Tab title="Python">
    Example code for `SOCKS5` request:

    ```python theme={null}
    # https://docs.python-requests.org/en/latest/user/advanced/#socks
    import requests
    user_pass = 'brd-customer-[ACCOUNT ID]-zone-[ZONE NAME]:[ZONE PASSWORD]'
    socks_proxy_url = f'socks5h://{user_pass}@brd.superproxy.io:22228'
    resp = requests.get('https://geo.brdtest.com/welcome.txt',
      proxies=dict(http=socks_proxy_url, https=socks_proxy_url))

    print(resp.text)
    ```
  </Tab>
</Tabs>

### Troubleshooting with `curl`

We recommend using `curl` to troubleshoot your `SOCKS5` requests, and adding `curl` options `-i` or `-v` for printing header fields. Look for `x-brd-error`, `x-brd-err-code` and `x-brd-err-msg` for elaborated error messages sent by Bright Data proxy networks.
To see our full error catalog (for `HTTP` and `HTTPS` as well) visit this page: [Proxy errors troubleshooting](/proxy-networks/errorCatalog)

## SOCKS5 Authentication configuration

<Note>
  **Bright Data must receive proxy zone credentials to access SOCKS5 proxy**
</Note>

The authentication is done also similarly to `HTTP` and `HTTPS` by relaying the user and password for the proxy access.

Some tools or utilities will give you place to input the credentials and port separately as parameters, as seen in the control panel, and some will require you to provide a url with the credentials delimited single parameter: `userName:password@brd.superproxy.io:22228`.

## SOCKS5 Geo-location & country selection

Location setting is identical to [HTTP/HTTPS proxies geo-targeting](/proxy-networks/config-options) and is set by adding `-country-[country code]` to your SOCKS5 username.

Example for `curl` command to get a SOCKS5 proxy in Italy (country code: `it`):

```bash theme={null}
curl -i -k -x socks5h://brd.superproxy.io:22228 --proxy-user [proxy zone user]-country-it:[zone password] "https://geo.brdtest.com/welcome.txt" -v
```

## Difference between SOCKS5 and SOCKS5h

The difference between **SOCKS5** and **SOCKS5h** lies in how they handle DNS (Domain Name System) resolution:

1. **SOCKS5**: In the standard SOCKS5 proxy, the **client** resolves the DNS. This means that the domain name (e.g., `example.com`) is resolved into an IP address **before** it is passed through the proxy. The proxy then routes traffic to the resolved IP address.
2. **SOCKS5h**: The "h" stands for "hostname." In this case, the **proxy** server resolves the DNS. The client sends the domain name (not the IP address) to the proxy server, which resolves it and forwards the request. This is useful if you want to hide the destination domain names from the client's network.

To summarize:

* **SOCKS5**: DNS resolution happens on the**client-side**.
* **SOCKS5h**: DNS resolution happens on the **proxy-side**.

Bright Data supports **proxy side** SOCKS5h only.
