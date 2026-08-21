# Authentication

> **Official Source**: [https://docs.brightdata.com/api-reference/authentication](https://docs.brightdata.com/api-reference/authentication)
> **Category**: `api-reference`

---

Authenticate with Bright Data using 1 of 2 methods: API Access with an API key or Native Access with proxy username and password. Billed at the same rate.

Bright Data ensures secure access to its services.

Bright Data provides two primary methods for authentication:

1. **API Access** - Authenticate and interact with the Bright Data platform using an API key/token.
2. **Native Access** - Authenticate and interact with the Bright Data platform using proxy protocol `username` and `password`.

<Note>
  Both API and Native access methods are billed at the same rate. Usage is charged according to your pricing plan for each Bright Data product.
</Note>

## How do I authenticate with API Key?

An API key is a secure hashed token used to authenticate with Bright Data API. We create a default key for you upon account creation automatically.
You can create additional API keys for different users and with different permissions.

<Note>
  Manage your API Keys anytime in the [Account settings](https://brightdata.com/cp/setting/users).
</Note>

### How do I relay the API key within a request?

Here’s an example request:

```sh Sample Request theme={null}
curl --request POST \
  --url https://api.brightdata.com/request \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "zone": "my_unlocker_zone",
    "url": "https://example.com/page",
    "format": "json",
    "method": "GET",
    "country": "us",
    "data_format": "markdown"
  }'
```

The important part of this request is the `Authorization` header:

```sh theme={null}
'Authorization: Bearer <token>'
```

This `<token>` is your **API key**, which is required for every API request.

### How do I generate a new API key?

To generate a new API key, follow these steps:

<Steps>
  <Step title="Sign In">
    Sign in to Bright Data's control panel and go to your [Account settings](https://brightdata.com/cp/setting/users).
  </Step>

  <Step title="Click 'Add API key'">
    Click the **Add API key** button in the top right of the API key section.

    <Warning>
      If you don’t see the 'API key' section, switch to an **admin account**. only admins can generate API keys.\
      Note: Each user can generate only one API key. The total number of API keys cannot exceed the number of account users.
    </Warning>
  </Step>

  <Step title="Configure your API key">
    Set the User, Permissions, and Expiration date (or choose 'Unlimited'), then click **Save**.
  </Step>

  <Step title="Save your API key locally">
    <Warning>
      Once generated, your API key will only be shown once. Be sure to **save it in a secure location**.
    </Warning>
  </Step>
</Steps>

### What are API Key options and configuration?

When creating an API key, you can assign one of five permission levels to control access and ensure security based on user roles or use cases. [Learn more about user roles here](/api-reference/authentication#understanding-api-key-permissions).

#### What permissions level does an API key have?

There are 5 types of permissions to choose from to control API key access:

* **Admin:** Grants full access to the account, including all Billing, Financial, product settings and configurations.
* **Finance:** Allows access to Billing and Financial pages only.
* **Ops:** Allows access to proxy/API configurations but restricts Billing access.
* **Limit:** Permits management of proxy passwords and IP allowlists/denylists.
* **User:** Enables API usage on the proxy/API level without access to Billing or product configuration pages.

#### Does the API Key have an expiration date?

When creating an API key, you can setup its expiration date. Requests authenticating with this key past the expiration date will be denied.

You can setup the expiration date as `unlimited` - although this is possible, we strongly recommend to setup an expiration date.

Consult your organization's information or data security officer for instructions.

#### How can I view the API Key settings and configuration?

You can view and manage your API Keys in [Account settings](https://brightdata.com/cp/setting/users).

#### Why can't I see a plain text version of my API Key, or copy it?

For your security, we do not allow plain text view of  API keys with `admin` permissions. After creation you will be offered to copy and save the key.

#### Can I refresh the API key?

Yes. Once you click "Refresh" we will generate a new API key. After the refresh, any request you will send with the old key will fail to authenticate.

#### Where should I save the API key with admin permissions?

API keys are like passwords and should be dealt and saved with outmost care and under controlled access. Consult your IT manager or security administrator on how and where to save the keys per your organizations' processes and regulation.

## How do I authenticate with native proxy protocol?

### Which products can I access with proxy protocol?

Proxy protocol access is supported by:

* All proxy networks (Datacenter, ISP, Residential, and Mobile)
* Web Unlocker
* Scraping Browser

### How do I authenticate with native proxy username and password?

Here’s an example of a Native Access request:

```sh Sample Request theme={null}
curl "https://www.example.com" \
  -i --proxy brd.superproxy.io:44445 \
  --proxy-user brd-customer-[ACCOUNT_ID]-zone-[PROXY_NAME]:[PROXY_PASSWORD]
```

The key part of this request is the `--proxy-user` parameter which holds the authentication credentials:

```sh proxy-user theme={null}
brd-customer-[ACCOUNT_ID]-zone-[PROXY_NAME]:[PROXY_PASSWORD]
```

This parameter is made up of three elements combined into a single string:

1. `ACCOUNT_ID` - your unique customer identifier.
2. `PROXY_NAME` - the name you gave your proxy or API (e.g., `web_unlocker1`, `datacenter_proxy1`).
3. `PROXY_PASSWORD` - the password shown in your Access Details.

Together, they form the complete proxy-user value.

### Username/password format

* All parameters are case sensitive.
* The string must be consecutive without spaces.
* `-` (dash/minus sign) separates the username substrings, and `:` (colon) separates the username from the password.

#### Account ID

Your Account ID is a unique identifier automatically generated when your Bright Data account is created. It is used for authentication and account-related operations.

To find your Account ID, follow these steps:

<Steps>
  <Step title={<>Click on <a href="https://brightdata.com/cp/setting/customer_details">Account Settings</a> in the left-hand menu.</>} />

  <Step title="Open the Profile tab." />

  <Step title="Locate and copy your Account ID." />
</Steps>

<Frame>
  <img alt="Account ID " />
</Frame>

<Note>
  Your Account ID is always a text string that begins with `hl_###`.
</Note>

#### Username

Each product you create in the Bright Data dashboard is assigned a **Username** visible in the product's **Access Details** section. The username follows this format:

```text theme={null}
brd-customer-[ACCOUNT_ID]-zone-[PRODUCT_NAME]
```

For example: `brd-customer-hl_7abed23d-zone-web_unlocker1`

This name is set **once** when you create a proxy or API and cannot be changed later. You can find your username by opening your proxy or API (under [Proxies](https://brightdata.com/cp/zones) or [Web Access](https://brightdata.com/cp/zones)) and checking the **Access Details** section.

#### Password

Each proxy or API is assigned a unique **Password** that is required for authenticating Native Access requests. You can find it in the **Access Details** section.

To view or update your password, follow these steps:

<Steps>
  <Step title="Open your product in the dashboard (under Proxies or Web Access)." />

  <Step title="Locate the Password field in the Access Details section." />

  <Step title="Copy your current password, or generate a new one from the Configuration tab under Security Settings." />
</Steps>

## Comparing API Access vs. Native Access

| Feature                                                 | API Access                                                                                                                                                                                                                                                                                                         | Native Access                                                                                                                    |
| :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **Used for**                                            | Seamless integration with scripts, automation tools, or third-party APIs                                                                                                                                                                                                                                           | Direct proxy connections in browsers, crawlers, or proxy-compatible tools                                                        |
| **Recommended products**                                | - [Web Unlocker API](/scraping-automation/web-unlocker)<br />- [SERP](/scraping-automation/serp-api)<br />- [Browsers](/scraping-automation/scraping-browser)<br />- [Scrapers](/datasets/scrapers/overview)<br />- [Functions](/datasets/scraper-studio/introduction)<br />- [Marketplace](/datasets/marketplace) | [Proxies](/proxy-networks)                                                                                                       |
| [**SSL certificate**](/general/account/ssl-certificate) | Not required                                                                                                                                                                                                                                                                                                       | Required to access without KYC the residential network & unlocker. More info [here.](/proxy-networks/residential/network-access) |
| **Connection via**                                      | API endpoint                                                                                                                                                                                                                                                                                                       | Proxy endpoint                                                                                                                   |
| **Authentication**                                      | [API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)                                                                                                                                                                                                                                        | `username:password`                                                                                                              |
| **Output options**                                      | HTML or JSON                                                                                                                                                                                                                                                                                                       | HTML                                                                                                                             |
