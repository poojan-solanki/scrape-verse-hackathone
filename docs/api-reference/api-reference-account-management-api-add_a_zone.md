# Add a zone

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Add_a_Zone](https://docs.brightdata.com/api-reference/account-management-api/Add_a_Zone)
> **Category**: `api-reference`

---

api-reference/openapi POST /zone
Use the Bright Data Account Management API to add a Zone. POST /zone returns 200 OK with zone or account configuration data as JSON.

<Warning>Only users with **Admin** or **Ops** roles can perform this action.</Warning>

<Warning>This API can modify your account settings, damage your operations or incur charges.</Warning>

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)
</Tip>

## ISP proxy zone examples

Creating an ISP zone requires specific parameter combinations. The fields below are not optional. Omitting them will silently create the wrong zone type or billing plan.

<Warning>
  Setting `zone.type` to `ISP` alone will create a **Datacenter zone**, not an ISP zone. You must also set `plan.pool_ip_type` to `static_res`. Country codes must be **lowercase** (e.g. `us`, `gb`). Uppercase codes return a misleading "no IPs available" error.
</Warning>

### Shared ISP (pay-per-GB)

```json theme={null}
{
  "zone": { "name": "my_isp_zone", "type": "ISP" },
  "plan": {
    "type": "static",
    "pool_ip_type": "static_res",
    "ips_type": "shared",
    "bandwidth": "bandwidth",
    "country": "us"
  }
}
```

### Shared ISP (unlimited bandwidth)

Setting `bandwidth: unlimited` alone **does not** activate unlimited billing. You must also include `unl_bw_tiers: std`.

```json theme={null}
{
  "zone": { "name": "my_isp_zone", "type": "ISP" },
  "plan": {
    "type": "static",
    "pool_ip_type": "static_res",
    "ips_type": "shared",
    "bandwidth": "unlimited",
    "unl_bw_tiers": "std",
    "country": "us"
  }
}
```

### Dedicated ISP (unlimited bandwidth)

```json theme={null}
{
  "zone": { "name": "my_isp_zone", "type": "ISP" },
  "plan": {
    "type": "static",
    "pool_ip_type": "static_res",
    "ips_type": "dedicated",
    "bandwidth": "unlimited",
    "unl_bw_tiers": "std",
    "country": "us",
    "ips": 10
  }
}
```

## Residential proxy zone

<Warning>
  **New Residential zones require KYC approval.** For Residential zones created after July 7, 2026, adding a zone is available only to KYC-verified companies. A request from an account that has not completed KYC is blocked and returns HTTP 403 with a compliance error. Residential zones created on or before July 7, 2026 are unaffected and continue to work as expected. Start at [KYC verification](https://brightdata.com/cp/kyc) and see the [Residential network access policy](/proxy-networks/residential/network-access).
</Warning>

Creating any Residential proxy type (shared rotating, IPv6 or dedicated) after July 7, 2026 requires KYC approval by the Bright Data compliance team. There is no automatic or no-KYC path for these new zones. Without KYC, create an [ISP](/proxy-networks/isp/introduction) or [Datacenter](/proxy-networks/data-center/introduction) zone instead.

### Dedicated Residential (gIP) zone

A dedicated Residential zone allocates a gIP (group of IPs) that is exclusive to a fixed list of target domains. Create one by setting `vips_type: "domain"` and including `domain_whitelist`.

<Warning>
  Dedicated Residential gIPs are **domain-restricted**. You must set `vips_type: "domain"` and include `domain_whitelist` (a space-separated list of target domains). `vip_country` applies only to dedicated zones. For a shared zone, set the country with the `-country` username flag instead. Country codes must be **lowercase** (e.g. `us`, `gb`).
</Warning>

The following payload creates a dedicated Residential zone with one US gIP scoped to `example.com`. This payload was verified working on July 9, 2026.

```json theme={null}
{
  "zone": { "name": "my_dedicated_resi_zone", "type": "resident" },
  "plan": {
    "type": "resident",
    "vips_type": "domain",
    "vips": 1,
    "vip_country": "us",
    "domain_whitelist": "example.com"
  }
}
```

The allocated gIP is exclusive to the domains listed in `domain_whitelist`. Requests to any other domain are routed through Bright Data's shared Datacenter proxies.

### Shared Residential country targeting

For shared Residential zones, country is not set with `vip_country`. Target countries at request level with the `-country-<code>` flag in the proxy username (for example `-country-us`), or set default countries in the control panel. See [How to configure your Residential proxy](/proxy-networks/residential/configure-your-proxy).

### Dedicated Residential gIP errors

An invalid dedicated Residential (gIP) payload returns one of the following errors.

| Error                                                                                                                                     | Cause                      | How to fix                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- | :------------------------------------------------ |
| `Can't allocate required amount of gIPs. Dedicated gIPs are only supported with "vips_type": "domain" together with a "domain_whitelist"` | Wrong `vips_type` value    | Set `vips_type: "domain"`                         |
| `Can't allocate required amount of gIPs. Target domains ("domain_whitelist") are required to allocate dedicated gIPs`                     | Missing `domain_whitelist` | Add `domain_whitelist` with your target domain(s) |

### Residential 403 compliance errors

For Residential zones created after July 7, 2026, an Add-a-Zone request from an account that is not eligible returns HTTP 403 with one of the following compliance errors. Zones created on or before July 7, 2026 are not affected. See the [proxy errors catalog](/proxy-networks/errorCatalog#http-error-403) for the full catalog.

| Error code                  | When it fires                                       | How to fix                                                                                                                                          |
| :-------------------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kyc_required`              | A company-email account that has not completed KYC. | Start [KYC verification](https://brightdata.com/cp/kyc). A human compliance reviewer approves Residential access.                                   |
| `business_account_required` | A personal-email account (not a verified company).  | Use a corporate email and contact the Bright Data team to establish business eligibility. Personal-email accounts are not eligible for Residential. |

Each error returns a structured JSON body so integrations can branch on the stable `code` value. A company-email account without KYC receives `kyc_required`:

```json theme={null}
{
  "error": {
    "code": "kyc_required",
    "message": "Residential proxies are available to verified companies only, after KYC review, in accordance with Bright Data's compliance policy.",
    "action": "Start verification at brightdata.com/cp/kyc. Applications are reviewed by our compliance team.",
    "alternatives": [
      { "product": "ISP proxy", "plan": { "type": "static", "pool_ip_type": "static_res", "ips_type": "shared" } },
      { "product": "Web Unlocker API", "plan": { "type": "unblocker" } }
    ],
    "docs": "https://docs.brightdata.com/compliance/kyc"
  }
}
```

A personal-email account receives `business_account_required`, which does not offer KYC because personal accounts are not eligible:

```json theme={null}
{
  "error": {
    "code": "business_account_required",
    "message": "Residential proxies are available to verified companies only. Eligibility requires a corporate email and full verification with the Bright Data team.",
    "action": "Contact the Bright Data team with a corporate email to determine business eligibility for Residential access.",
    "alternatives": [
      { "product": "ISP proxy", "plan": { "type": "static", "pool_ip_type": "static_res", "ips_type": "shared" } },
      { "product": "Web Unlocker API", "plan": { "type": "unblocker" } }
    ],
    "docs": "https://docs.brightdata.com/compliance/kyc"
  }
}
```

Both bodies include an `alternatives` array with the exact `plan` objects to create a no-KYC [ISP](/proxy-networks/isp/introduction) or [Web Unlocker API](/scraping-automation/web-unlocker/introduction) zone instead. To create the ISP zone, send `POST /zone` with that `plan` object in place of the Residential one.
