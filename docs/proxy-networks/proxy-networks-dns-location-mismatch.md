# Why your DNS shows a different country

> **Official Source**: [https://docs.brightdata.com/proxy-networks/dns-location-mismatch](https://docs.brightdata.com/proxy-networks/dns-location-mismatch)
> **Category**: `proxy-networks`

---

Why DNS leak tools show a different country than your Bright Data proxy IP, how 2-stage DNS resolution works and how to verify your actual exit geolocation.

If you are using Bright Data proxies and testing your setup with third-party tools, you may notice that the DNS resolver location shown by those tools appears different from your proxy IP's country. This is expected behavior in most cases. This article explains why it happens and what you can do about it.

## How DNS resolution works in Bright Data's proxy network

All requests made through Bright Data start by connecting to a Super Proxy (`brd.superproxy.io`). Two separate DNS resolutions happen at different stages of the request:

### Stage 1: Entry gate DNS check

When your request first arrives at the Super Proxy entry gate, a preliminary DNS resolution is performed. This check is done solely to verify that the target domain exists and is a valid destination. It is performed at the Super Proxy level, not at the exit node (your actual proxy IP).

### Stage 2: Exit node DNS resolution

Once the domain is confirmed as valid, the actual request is forwarded to the exit node: the proxy IP in your target country. A second, independent DNS resolution is performed at the exit node for the real request. This is the DNS resolution that matters for your actual traffic.

<Note>
  The preliminary DNS check at the entry gate does not affect how your actual request is routed. Your real traffic exits from your assigned proxy IP.
</Note>

## Why DNS leak test websites show a different DNS location

Some tools (such as whoer.net, browserleaks.com/ip, or whoerip.com) use JavaScript-based tests or DNS queries that interact with the entry gate DNS check rather than the actual exit node DNS. As a result:

* The DNS resolver shown by these tools may reflect a Bright Data Super Proxy location rather than your assigned proxy IP's country.
* This is not a reflection of where your actual browsing traffic exits.
* Your real requests exit from your assigned proxy IP.

This behavior is specific to how those tools probe for DNS information. It does not indicate a misconfiguration of your zone or your proxy credentials.

## Which IP checker should you use?

Use Bright Data's official endpoint to validate your proxy's geolocation:

```http theme={null}
https://geo.brdtest.com/welcome.txt
```

This endpoint accurately reflects the exit node IP for Datacenter and ISP networks, and its true geolocation for all proxy networks, as recorded in Bright Data's network.

Use the following `curl` command, adjusting the `product` parameter for your proxy type:

```sh theme={null}
curl -i --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER_ID>-zone-<ZONE_NAME>:<ZONE_PASSWORD> \
  "https://geo.brdtest.com/welcome.txt?product=isp&method=native"
```

The response will show your actual assigned ISP/Datacenter IP and its correct location details, and the full location details without the explicit IP address for the Residential and Mobile networks.

<Note>
  Many third-party geolocation tools use outdated records or unreliable testing methods. Their results are not an accurate reflection of your proxy's actual geolocation. Bright Data actively monitors and maintains correct records in all major geolocation databases.
</Note>

## Will this affect your real target websites?

For your actual target domains, DNS is properly resolved at the exit node, and your traffic exits from your assigned proxy IP in the correct country.

You can verify this by running the `curl` command above with your proxy credentials.

## Why are requests failing with a `target_40001` error?

If your host is valid but cannot be resolved and you receive a `target_40001` error (host could not be resolved), the domain may only be resolvable from specific geographic locations. In this case, contact Bright Data support to request that your host be added to the DNS whitelist, so it can skip the Super Proxy entry gate DNS check.

See [Error Catalog: target\_40001](/proxy-networks/errorCatalog#target-40001) for the full error description.

## Recommendations for best DNS behavior

If your use case requires precise DNS matching between your proxy IP location and the DNS resolver shown by third-party tools, apply the following steps.

### Use the remote DNS resolution flag

Append `-dns-remote` to your proxy username to instruct the proxy to perform DNS resolution at the exit node:

```sh theme={null}
curl "https://example.com" \
  --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER_ID>-zone-<ZONE_NAME>-dns-remote:<ZONE_PASSWORD>
```

<Note>
  The `-dns-remote` flag does not resolve cases where the entry gate DNS check returns a `dns_resolve_skip` result for specific domains. In those cases, the flag has no effect on what third-party tools report.
</Note>

### Ensure your client sends hostnames, not IP addresses

Bright Data's proxy network requires requests to use domain names, not pre-resolved IP addresses. If your browser, anti-detect browser (such as Multilogin), or application resolves DNS locally before sending the request, DNS mismatch behavior is more likely.

Configure your application to:

* Send the hostname or domain to the proxy, not a pre-resolved IP
* Use remote DNS resolution when that option is available in your application

### Request domain whitelisting for location-sensitive hosts

For domains that can only be resolved from specific geographic locations and as a result return a `target_40001` error from the Super Proxy DNS check, contact Bright Data support to whitelist the specific host. This allows it to skip the Super Proxy DNS check.

## Where to learn more

* [Error Catalog](/proxy-networks/errorCatalog) - Full list of Bright Data proxy error codes and resolutions
* [Website Blocking](/proxy-networks/website-blocking) - Best practices for overcoming website blocking
* [Residential Network Access Policy](/proxy-networks/residential/network-access) - KYC and access requirements for the Residential network
