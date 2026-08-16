# Disable peer rotation

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/keep_same_peer_in_session](https://docs.brightdata.com/api-reference/proxy/keep_same_peer_in_session)
> **Category**: `proxy-networks`

---

Configure the Bright Data Proxy REST API to disable peer rotation on port 44445 and pin sessions, with reference for parameters and response fields.

You can avoid assigning a new peer to the session in case the peer used in the session went offline. When using this option parameter, you will get a `502` error code for your request when that peer used for your session went offline, with error message:

```sh Error Message theme={null}
502 Proxy Error: server_error Failed to establish connection with peer
```

This workflow can be useful for Residential and Mobile proxy zones, which consist of real PCs and mobile devices

It's used by adding `-const` after your session name, for example `-session-mystring12345-const`

```sh Shell theme={null}
curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-session-mystring12345-const:<zone_password>
```
