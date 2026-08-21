# Windows curl SSL errors on port 44445

> **Official Source**: [https://docs.brightdata.com/general/account/ssl-certificate-windows-schannel](https://docs.brightdata.com/general/account/ssl-certificate-windows-schannel)
> **Category**: `troubleshooting`

---

Fix CRYPT_E_REVOCATION_OFFLINE and CERT_TRUST_REVOCATION_STATUS_UNKNOWN errors in Windows Schannel curl on Bright Data proxy port 44445.

This guide explains how to fix SSL revocation errors that Windows curl builds using the Schannel TLS backend return when connecting to Bright Data proxy port `44445`. Add the `--ssl-revoke-best-effort` flag to your curl command:

```sh theme={null}
curl -i -v \
  --ssl-revoke-best-effort \
  --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> \
  --cacert brightdata_root_ca_44445.crt \
  "https://geo.brdtest.com/mygeo.json"
```

The request should return your geolocation JSON with an HTTP 200 status. The flag keeps normal SSL verification enabled and only stops Schannel from failing the request when the revocation status cannot be confirmed.

## What errors does Schannel show?

Affected Windows curl builds fail with `CRYPT_E_REVOCATION_OFFLINE` or `CERT_TRUST_REVOCATION_STATUS_UNKNOWN` during the TLS handshake. In verbose (`-v`) output, the failure looks like this:

```text theme={null}
schannel: next InitializeSecurityContext failed:
CRYPT_E_REVOCATION_OFFLINE (0x80092013)
The revocation function was unable to check revocation because the
revocation server was offline.
```

When you pass the certificate with `--cacert`, the CA file loads correctly but the handshake still fails at the revocation check:

```text theme={null}
schannel: added 1 certificate(s) from CA file
schannel: CertGetCertificateChain trust error
CERT_TRUST_REVOCATION_STATUS_UNKNOWN
```

Both errors mean the same thing: the Bright Data root certificate is valid and installed correctly, but Schannel cannot confirm its revocation status and treats that as fatal.

## Why does Schannel fail on port 44445?

Schannel performs strict certificate revocation checks and treats missing root-level revocation information as a fatal error. In the port `44445` certificate chain, introduced in July 2026, Bright Data moved the CRL Distribution Point from the root CA to the intermediate and leaf certificates.

The old root CA included this extension:

```text theme={null}
X509v3 CRL Distribution Points:
  Full Name:
    URI:http://crl.brightdata.com/proxy_ca.crl
```

The new `brightdata_root_ca_44445.crt` root CA does not. This is the correct chain design: a root CA is a self-signed trust anchor, and revocation information belongs on the intermediate and leaf certificates. curl builds based on OpenSSL or LibreSSL, including all Linux and macOS builds, accept the new chain without errors. Only Schannel-based Windows builds may fail.

## How to check your curl TLS backend

Run `curl -V` and look at the first line of the output. The curl build that ships with Windows 10 and Windows 11 uses Schannel:

```text theme={null}
curl 8.x.x ... Schannel ...
```

Builds that are not affected show `OpenSSL` or `LibreSSL` instead of `Schannel`. If your build shows Schannel, use one of the two fixes below.

## Add the --ssl-revoke-best-effort flag

Adding `--ssl-revoke-best-effort` is the recommended fix for Schannel-based curl. Per the curl manual, the flag tells curl "to ignore certificate revocation checks when they failed due to missing/offline distribution points for the revocation check lists". The flag is Schannel-specific and available since curl 7.70.0.

With the flag, curl still enforces:

* Trusted CA validation
* Hostname validation
* Expiration validation
* Certificate chain validation

<Warning>
  Do not use `-k` or `--insecure` instead. Those flags disable SSL verification entirely, while `--ssl-revoke-best-effort` only relaxes the revocation check that Schannel cannot complete.
</Warning>

## Switch to an OpenSSL or LibreSSL curl build

As an alternative, install a Windows curl build compiled against OpenSSL or LibreSSL and confirm the backend with `curl -V`. These builds validate the port `44445` chain the same way Linux curl does, so no extra flag is needed:

```sh theme={null}
curl -i -v \
  --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> \
  --cacert brightdata_root_ca_44445.crt \
  "https://geo.brdtest.com/mygeo.json"
```

A successful request returns your geolocation JSON without SSL errors.

## FAQ

### Does --ssl-revoke-best-effort disable SSL verification?

No. The `--ssl-revoke-best-effort` flag keeps trusted CA, hostname, expiration and certificate chain validation enabled. It only stops Schannel from failing the request when the certificate revocation status cannot be confirmed. It is not equivalent to `-k` or `--insecure`, which disable verification entirely.

### Is the new Bright Data certificate untrusted or installed incorrectly?

No. The `CRYPT_E_REVOCATION_OFFLINE` and `CERT_TRUST_REVOCATION_STATUS_UNKNOWN` errors are caused by how Schannel handles missing root-level revocation information, not by the certificate itself. The same certificate works without errors on Linux, macOS and Windows curl builds based on OpenSSL or LibreSSL.

### Does this issue affect Linux or macOS?

No. Linux and macOS curl builds use OpenSSL or LibreSSL, which do not enforce Schannel's root-level revocation behavior. Only Windows curl builds using the Schannel TLS backend are affected.

## Related

* [Root certificate migration](/general/account/ssl-certificate-migration)
* [SSL certificate](/general/account/ssl-certificate)
* [FAQ: Which port shall I use](/general/faqs#which-port-shall-i-use-22225-or-33335)
