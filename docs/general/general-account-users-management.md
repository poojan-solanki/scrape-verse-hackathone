# Users management

> **Official Source**: [https://docs.brightdata.com/general/account/users-management](https://docs.brightdata.com/general/account/users-management)
> **Category**: `general`

---

Manage Bright Data users and permissions across 3 access types: Control Panel users, proxy/API users and billing contacts, each with separate role scopes.

## Types of User Access

Bright Data has 3 main types of users, each refers to a different access channel:

1. Control panel users
2. API Users using API keys
3. Proxy manager users

Those 3 different access methods control the authentication prior to using any Bright Data services.

They are reflect in 3 users' and API keys' tables under the "Account settings" in the control panel.

## Control panel users

Control panel users can get access to Bright Data control panel as well as to other service per permissions assigned to them on creation.

<Note>
  The user signing up to Bright Data is the account manager and has admin permissions by default.
</Note>

### Permissions and allowed actions

| Permission | Actions                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin      | Full account control: create and delete account, add/remove/edit users, add/remove/edit financial and payments, add/remove/edit API key, add/remove/edit proxy manager users, set zone and user limits, add/remove/edit bright data services, consume bright data services |
| Finance    | add/remove/edit financial and payments                                                                                                                                                                                                                                     |
| Ops        | add/remove/edit bright data services                                                                                                                                                                                                                                       |
| User       | Consume Bright Data services                                                                                                                                                                                                                                               |
| Limit      | Edit account limit                                                                                                                                                                                                                                                         |
| User limit | Edit user usage limits                                                                                                                                                                                                                                                     |

## How to manage your API key

Each control panel user can have an API key assigned to him. The first API key is automatically created for the user creating the account. Users with admin permissions cannot display their API key in plain text.

## Proxy Manager users

Proxy manager users are allowed to access only Proxy Manager. The permissions as to which port they can access is done inside the proxy manager console. This is relevant only for users using proxy manager.
