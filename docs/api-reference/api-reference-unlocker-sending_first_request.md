# Send your first request

> **Official Source**: [https://docs.brightdata.com/api-reference/unlocker/sending_first_request](https://docs.brightdata.com/api-reference/unlocker/sending_first_request)
> **Category**: `api-reference`

---

Send your first Bright Data Web Unlocker API (98% success rate) request. Walk through authentication, setup and a cURL example that returns unblocked HTML.

Here's an example of the most simple Web Unlocker API request using cURL that returns a JSON:

```sh theme={null}
curl "https://geo.brdtest.com/welcome.txt" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
```

You can find your API credentials including Username (`Customer_ID`), Zone name, and Password, within your proxy zone’s ‘Overview’ tab.

|                                                                                    |                                                                                                                         |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `brd.superproxy.io`                                                                | Address of our load balancer that will find the fastest Super Proxy for your request                                    |
| <Tooltip>[`44445`](/general/faqs#which-port-shall-i-use-22225-or-33335) </Tooltip> | Infrastructure port of our Super Proxies that is used to receive your requests                                          |
| `-user brd-customer-<customer_id>-zone-<zone_name>`                                | Username authentication. In its most basic form, it defines your username and what zone you will use for your request.  |
| `<zone_password>`                                                                  | Zone password. All zones have passwords that are used for authentication                                                |
| [https://geo.brdtest.com/welcome.txt](https://geo.brdtest.com/welcome.txt)         | Replace with your target domain. This is a test URL pointing to a Bright Data test server.                              |

For an in-depth interactive display of all the API use cases, integrations, and preferences, please see our [API examples](https://brightdata.com/cp/zones/proxy_examples) page.

<Tip>
  You'll need to [sign up](https://brightdata.com/) (for free), and **login** to the Bright Data control panel in order to access this API tool. If you add your payment method, you’ll even receive a \$5 credit to get you started!
</Tip>
