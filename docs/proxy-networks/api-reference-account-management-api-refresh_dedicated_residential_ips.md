# Refresh dedicated residential IPs

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Refresh_dedicated_residential_IPs](https://docs.brightdata.com/api-reference/account-management-api/Refresh_dedicated_residential_IPs)
> **Category**: `proxy-networks`

---

api-reference/openapi POST /zone/ips/refresh
Use the Bright Data Account Management API to refresh dedicated residential IPs via POST /zone/ips/refresh, returning JSON zone or account data with 200 OK.

<Warning>Only users with **Admin** or **Ops** roles can perform this action.</Warning>

<Warning> **Warning:** This API can modify your account settings, damage your operations or incur charges.</Warning>

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)
</Tip>

<Warning>
  Each dedicated residential IP refreshed costs \$0.02/refresh/IP
</Warning>
