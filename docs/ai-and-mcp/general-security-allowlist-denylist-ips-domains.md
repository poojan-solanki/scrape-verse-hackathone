# Allowlist and denylist IPs and domains

> **Official Source**: [https://docs.brightdata.com/general/security/allowlist-denylist-ips-domains](https://docs.brightdata.com/general/security/allowlist-denylist-ips-domains)
> **Category**: `ai-and-mcp`

---

Configure allowlists and denylists for IPs and domains in your Bright Data proxy zone (port 44445) to control who can access it for traffic security.

## Key terms defined

* Allowlist is the list of IP addresses which are permitted accessing your zone.
* Denylist is the list of IP addresses which are denied accessing your zone.

<Note>
  The Allowlist shall include the IP addresses from which you **originate the requests** to the proxies in your company or cloud network. The list **should not** include the IPs of the proxies provided by Bright Data.
</Note>

## How to configure Allowslit and Denylist

There are two ways to configure the allowlist and the denylist: either by the control panel or by using Bright Data account management APIs.

### How to configure Allowlist and Denylist via the control panel

1. Log in to your Bright Data account control panel.
2. Select the zone which you want to modify and go to the **Overview** tab.
3. Under the overview tab, in the \*\*Access Details \*\*section, there is an edit icon to edit the lists.
4. Click the edit icon.

<img alt="editAllowlist.png" />

5. This will get you to the configuration tab, under security settings, to edit the lists:

<img alt="whitelist-blacklist.png" />

Add all the relevant IPs and domains you'll allow access to with your proxy zone.

### How to configure Allowlist and Denylist via Bright Data Account management APIs

The following APIs will enable you to control and manage your allowlist and denylist:

* [Add IP to Zone allowlist](/api-reference/account-management-api/allowlist-ip)
* [Remove IP from Zone allowlist](/api-reference/account-management-api/remove-ip-from-zone-allowlist)
* [Add IP to Zone denylist](/api-reference/account-management-api/denylist-ip)
* [Remove IP from Zone denylist](/api-reference/account-management-api/remove-ip-from-zone-denylist)
* [Remove domain from Zone allowlist/denylist](/api-reference/account-management-api/remove-domain-from-zone-allowlist-or-denylist)
* [Add domain to Zone allowlist/denylist](/api-reference/account-management-api/allowlist-or-denylist-domains)

## What are the best practices of allowlist and denylist definition?

*
* Accurate allowlist prevents abuse of your Bright Data proxies, protects your operations and funds. See more info within [this video.](https://brightdata.com/static/video/howto/blacklist_system_explanation.mp4?md5=153602994-22bce32a\&hver=2)
* There is **no limit** on how many IPs/domains you can add to the allowlist and we also support ranges of IPs.
* When you work from a public cloud, where your scrapers spawn on different IPs, the allowlist will need to constantly change and adjust to incoming requests origin IP. To prevent constant changes, we recommend that your setup a permanent outgoing IP for your cloud operations which interact with Bright Data. Consult you cloud provided on available solutions. Common solution is NAT gateway setup for outgoing communication.
* For easier management and control, we recommend to use wildcards and patterns to define domains or IP ranges in your list.

### Which wildcards and patterns do we support for allowlist and denylist configuration?

We support the following patterns for domain names and IPs/subnets/masks:

| Pattern             | Description                                                                                                              | Example                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `*`  (asterix)      | Mathced all strings                                                                                                      | \*  - Will match all IPs/domains                                      |
| `*`  (asterix)      | Embedded in string, will match all substrings (prefix)                                                                   | `*.mycompany.net` will match all domains ending with `.mycompany.net` |
| `*`  (asterix)      | Embedded in string, will match all substrings (suffix)                                                                   | `sub.mycompany.*` will match all suffixes (like net, com, us etc.)    |
| `a.b.c.d`           | a,b,c,d are all numbers between 0-255, this pattern represents a single IP address                                       | `195.55.35.112`                                                       |
| `a.b.c.0/24`        | This patterns represents a whole /24 subnet, which means all IP addresses with the a.b.c prefix and 0-255 as 'd' number. | `195.55.35.0/24 `                                                     |
| `a.b.c.d - x.y.z.w` | Range of IPs between a.b.c.d and x.y.z.w                                                                                 | `10.20.30.40-10.20.30.50`                                             |
| `a.b.c.d/x.y.z.w`   | Netmask: A netmask separates the IP address into network and host parts. Similar to the use of subnets.                  | `10.20.30.40/255.255.252.0`                                           |
