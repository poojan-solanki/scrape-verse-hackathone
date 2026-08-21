# Migrate static IPs between zones

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Migrate_Static_Datacenter_ISP_IPs_between_zones](https://docs.brightdata.com/api-reference/account-management-api/Migrate_Static_Datacenter_ISP_IPs_between_zones)
> **Category**: `proxy-networks`

---

api-reference/openapi POST /zone/ips/migrate
Use the Bright Data Account Management API to migrate Static IPs between zones. POST /zone/ips/migrate returns 200 OK with zone or account JSON.

<Warning>Only users with **Admin** or **Ops** roles can perform this action.</Warning>

<Warning> **Warning:** This API can modify your account settings, damage your operations or incur charges.</Warning>

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)
</Tip>
