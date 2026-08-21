# Overcoming website blocking

> **Official Source**: [https://docs.brightdata.com/proxy-networks/website-blocking](https://docs.brightdata.com/proxy-networks/website-blocking)
> **Category**: `proxy-networks`

---

Troubleshoot 4xx and 5xx blocking on Bright Data proxies: read network errors, identify block types and apply rotation, headers and Unlocker fixes.

The first step for troubleshooting your error is checking the entire network error response - It could contain critical information regarding the origin of the error and possibly instructions for resolving it.

To analyze the entire response you can run a `curl` command from your shell prompt and add the option flag `-v` or `-i`. These flags will run curl in verbose mode and print out the header fields

```bash theme={null}
curl -v [rest of curl command options]
```

## How to avoid blocks

### How to choose IPs

The main things to consider for IPs are:

* Geolocation: it's generally best to match the peer country to the country of the target.
  Using more specific targeting can also help:
  City is more specific than State, and State more specific than country

* Pool type: using Shared IPs can be a cost saving measure if the target isn't sensitive to multiple requests from the same IP. If the target is sensitive to that, using Dedicated IPs can help.

* Quality: Bright Data offers 4 'normal' proxy networks, in addition to our Automated Scraping Solutions.
  These are listed below in order of increasing difficulty to detect:
  Data Center - ISP - Residential - Mobile
  If one of these networks is consistently blocked, trying the next one down in the list may help get past the blocking.

* Consistency: for single-URL scrapes, you should generally be rotating the IP frequently to avoid rate limits. If you're trying to emulate a real user, the tips in the section below can help keep the IP consistent.

### How to manage sessions

* If you're trying to mimic a real user, you should use the session ID username parameter:
  [Proxy and IP Rotation control](/api-reference/proxy/rotate_ips#using-the-same-proxy-for-multiple-requests-session)
  This tells us that for a request with the same ID, you want to keep the same IP for the request.
  Doing this allows you to appear more like a normal user when using rotating networks like Residential and Mobile.

* If your use-case is single scrapes, you might still want to use this parameter, but in a different way:
  When the ID changes, that tells us that you want to use a different IP than the last one.
  Iterating over multiple IDs within 60 seconds will allow you to rotate through your allocated IPs.

### Request Method / Fingerprint

* Request Method: "Normal users" will typically use a browser to access websites. You can integrate the proxies into a regular browser, either directly or via our extension (available [here](https://chrome.google.com/webstore/detail/bright-data/efohiadmkaogdhibjbmeppjpebenaool?hl=en)).
  If you're using a different integration, like browser automation, or direct API requests, it's important to keep this in mind and make your requests look as much like a real browser as possible to avoid detection.

* Fingerprint: Part of looking like a real user is the headers and cookies you send with the request, but another part is having the same attributes that a real browser would have. You can find many resources online about this, and we also offer the Web Unlocker API and Browser API, which manage all of this on your behalf.

## When to use an automated solution

Should you find that none of our proxy solutions (Datacenter, ISP, Residential, Mobile proxies) are effective for your needs, We recommend trying our [Automated Scraping Solutions](/scraping-automation/introduction), particularly the Web Unlocker API, which autonomously manage all of the above mentioned measures and more to ensure high success rates.
