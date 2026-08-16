# Add zone password

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/add-zone-password](https://docs.brightdata.com/api-reference/account-management-api/add-zone-password)
> **Category**: `api-reference`

---

api-reference/openapi POST /zone/add_password
Use the Bright Data Account Management API to add Zone Password. POST /zone/add_password returns 200 OK with zone or account configuration data as JSON.

<Warning>Only users with **Admin** or **Ops** roles can perform this action.</Warning>

<Note>
  To add multiple passwords in a single request, pass an array of strings to the `password` field.
</Note>
