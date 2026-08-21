# Remove zone password

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/remove-zone-password](https://docs.brightdata.com/api-reference/account-management-api/remove-zone-password)
> **Category**: `api-reference`

---

api-reference/openapi POST /zone/remove_password
Use the Bright Data Account Management API to remove Zone Password. POST /zone/remove_password returns 200 OK with zone or account configuration data as JSON.

<Warning>Only users with **Admin** or **Ops** roles can perform this action.</Warning>

<Warning>
  A zone must always have at least one password. This request will fail if removing the specified password(s) would leave the zone with no passwords.
</Warning>

<Note>
  To remove multiple passwords in a single request, pass an array of strings to the `password` field.
</Note>
