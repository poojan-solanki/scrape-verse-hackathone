# Root certificate migration

> **Official Source**: [https://docs.brightdata.com/general/account/ssl-certificate-migration](https://docs.brightdata.com/general/account/ssl-certificate-migration)
> **Category**: `general`

---

Migrate to Bright Data's new root certificate on proxy port 44445 before the old certificates on ports 22225 and 33335 expire on September 25, 2026.

Bright Data is replacing the SSL root certificate for its proxy endpoints, including `brd.superproxy.io` and legacy hostnames such as `zproxy.lum-superproxy.io`, and you must migrate to the new certificate on proxy port `44445` before the current certificates expire on **September 25, 2026 at 00:00 UTC** to avoid downtime.

<Warning>
  The current certificates cannot be extended or renewed. After September 25, 2026 at 00:00 UTC, any traffic still relying on the old certificates on ports `22225` or `33335` will fail. Complete the migration before this date.
</Warning>

## Who needs to migrate

You are affected if you use Bright Data proxies, SERP API or Web Unlocker API on port `22225` or `33335`, and/or your code references a Bright Data `.crt` certificate file.

The migration also applies if your code connects through a legacy hostname such as `zproxy.lum-superproxy.io` or another `luminati.io`-era domain. Those hostnames are deprecated, so update them to `brd.superproxy.io` as part of the migration.

You are not affected if you connect through the Bright Data proxy API instead of native proxy mode, or if your account is verified through the [KYC process](/proxy-networks/residential/network-access#kyc-verification) and you do not load the certificate. See [API vs. native access](/api-reference/authentication).

## Migration timeline

Port `44445` and the new root certificate went live in July 2026. Both the old and new certificates are operational during the transition window, so you can migrate at your own pace before the deadline. On **September 25, 2026 at 00:00 UTC** the old certificates on ports `22225` and `33335` expire, and traffic that still relies on them fails.

## What is changing

| Setting          | Before migration                                                                                | After migration                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Root certificate | `brightdata_root_ca_33335.crt` or the port `22225` certificate (both expire September 25, 2026) | `brightdata_root_ca_44445.crt`                                                       |
| Proxy port       | `22225` or `33335`                                                                              | `44445`                                                                              |
| Certificate file | `brightdata_proxy_ca.zip`                                                                       | `brightdata_proxy_ca.zip` (updated bundle containing `brightdata_root_ca_44445.crt`) |

## Prerequisites

* Access to the host that runs your scraping code or application, where the certificate is loaded or installed
* The new certificate file from Bright Data
* Ability to open outbound traffic to `brd.superproxy.io` on port `44445` in your network or firewall

## How to migrate to the new certificate

1. **Open port `44445`** for outbound traffic to `brd.superproxy.io`. Ask your network or security administrator to allow this if outbound ports are restricted.
2. **Download the certificate bundle** from [brightdata.com/static/brightdata\_proxy\_ca.zip](https://brightdata.com/static/brightdata_proxy_ca.zip) and save `brightdata_root_ca_44445.crt` to the host that runs your code.
3. **Update your proxy host and port** in every place your code or tools connect to Bright Data. Change your current port (`22225` or `33335`) to `44445`, and replace any legacy hostname such as `zproxy.lum-superproxy.io` with `brd.superproxy.io`. The new certificate must be used in conjunction with port `44445`.
4. **Load or install the new certificate** the same way you use the current one. For code that loads the certificate at runtime, point `--cacert` (or your language's equivalent) at the new file. For tools that require an installed certificate, follow the steps in [SSL certificate installation](/general/account/ssl-certificate#installation-of-the-ssl-certificate).
5. **Test one request** against `https://geo.brdtest.com/mygeo.json` to confirm the migration was successful before switching all traffic.

The following cURL example shows a request using the new port and certificate:

```sh theme={null}
curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<account-id>-zone-<zone-name>:<zone-password> --cacert <PATH TO NEW CA.CRT> "https://geo.brdtest.com/mygeo.json"
```

## How to verify the migration worked

* A request to `https://geo.brdtest.com/mygeo.json` through port `44445` returns your geolocation JSON without an SSL error.
* Your existing scraping traffic continues to succeed after you switch the port and certificate.

If a request fails with an SSL error after migrating, confirm that the new certificate is the one loaded or installed on the host running the request, and that the request targets port `44445`. If curl on Windows fails with `CRYPT_E_REVOCATION_OFFLINE` or `CERT_TRUST_REVOCATION_STATUS_UNKNOWN`, see [Windows curl SSL errors on port 44445](/general/account/ssl-certificate-windows-schannel).

If you are still encountering difficulties with the migration, contact [support@brightdata.com](mailto:support@brightdata.com).

## FAQ

### What happens if I do not migrate by September 25, 2026?

Any traffic that still relies on the old certificates on ports `22225` or `33335` fails after September 25, 2026 at 00:00 UTC. The old certificates cannot be extended or renewed.

### Can I use both certificates during the transition?

Yes. Both the old and new certificates are operational during the transition window, each on its own port, so you can migrate at your own pace before September 25, 2026. Use the certificate that matches the port you connect to.

### What if I ignore SSL errors in my code?

If your code disables SSL verification, for example with curl's `-k` flag or your language's equivalent, the certificate expiry does not break your requests because the certificate is never validated. Bright Data still recommends moving to port `44445` so your setup stays consistent with current documentation and code samples. See [how to ignore SSL errors](/general/account/ssl-certificate#how-to-ignore-ssl-errors).

### Why does curl on Windows fail with a revocation error on port 44445?

Windows curl builds that use the Schannel TLS backend may fail with `CRYPT_E_REVOCATION_OFFLINE` or `CERT_TRUST_REVOCATION_STATUS_UNKNOWN` because the new root certificate no longer carries a CRL Distribution Point. Add the `--ssl-revoke-best-effort` flag to your curl command. See [Windows curl SSL errors on port 44445](/general/account/ssl-certificate-windows-schannel) for details.

### Which products does this migration apply to?

Bright Data proxies, SERP API and Web Unlocker API connections that use a Bright Data SSL certificate in native proxy mode on port `22225` or `33335`.
