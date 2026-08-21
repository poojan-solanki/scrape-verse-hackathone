# Zone statistics

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Get_Zone_Static_Datacenter_ISP_IPs](https://docs.brightdata.com/api-reference/account-management-api/Get_Zone_Static_Datacenter_ISP_IPs)
> **Category**: `proxy-networks`

---

api-reference/openapi GET /zone/ips
Use the Bright Data Account Management API to zone Statistics. GET /zone/ips returns 200 OK with zone or account configuration data as JSON.

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)
</Tip>

```json Response when "ip_per_country=true" theme={null}
{
    "gb":198,
    "de":282,
    "br":418,
    "au":115,
    "jp":292,
    "nl":421,
    "uz":333,
    "il":517,
    "kg":566,
    "az":498,
    "lv":484,
    "tw":372,
    "sg":184
}
```
