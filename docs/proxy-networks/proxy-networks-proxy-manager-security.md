# Secure your Proxy Manager setup

> **Official Source**: [https://docs.brightdata.com/proxy-networks/proxy-manager/security](https://docs.brightdata.com/proxy-networks/proxy-manager/security)
> **Category**: `proxy-networks`

---

Best practices for securing your Bright Data Proxy Manager (default port 22999), including IP allowlisting, admin access control and API key-based auth.

Ensuring the security of our products is crucial and remains a top priority for us. Our state-of-the-art architecture allows us to deliver you our Cloud hosted Proxy Manager with complete reliability and security and recommend this option for all of our customers.

For those that need an **on-premise** option for proxy manager (which is not hosted by Bright Data), we have outlined below the security measures that we recommend and best practices for putting them to use.

## Block unwanted sources from using the Proxy Manager's ports

Allowlist IPs on all your ports inside the Proxy Manager to ensure usage on those ports is only from allowed and wanted sources. While this feature is enabled, only the listed IPs will be allowed to send requests through the port with this configuration. Using this feature will ensure the bandwidth you pay for is consumed only by trusted sources.

## Block unwanted users from editing the Proxy Manager settings

Allowlist admin access to ensure only authorized IPs can perform changes to your Proxy Manager settings. This will block the admin page and the [Proxy Manager's API](/api-reference/proxy-manager/get_the_latest_proxy_manager_versions) when it is accessed from outside the server (where the Proxy Manager is hosted) from IPs which are not allowlisted.

## Authentication using API key

If you are using multiple crawlers with changing IPs to send requests to remote Proxy Manager server you will need to generate an API key to use for authentication on the Proxy Manager:

* Run Bright Data process from inside the server
* From the Proxy Manager's server run in terminal/command line:

```sh theme={null}
curl -X GET "http://127.0.0.1:22999/api/gen_token" -H "accept: application/json"
```

* You should be seeing the token response:

```js theme={null}
"token": "API key"
```

After generating an API key you have two options: either use the API key to allowlist the new IP once when the crawler server is set up or include the API key in the proxy auth of each request:

To make requests use the API key in the proxy auth use username "token" and the API key as the password, for example:

```sh theme={null}
curl -x token:API_KEY@127.0.0.1:24000 "http://brdtest.com/myip.json"
```

To allowlist your new server IP so you don't need to send it in proxy auth:

* Copy the API\_KEY from Proxy Manager server to new crawler server
* Make this request from your new server:

```sh theme={null}
curl [REMOTE_SERVER_IP]:22999/api/add_wip -X POST -H "Content-Type: application/json" -H "Authorization:[API_KEY]" -d '{"ip":"[CRAWLER_IP]"}'
```

* Your crawler ip is now allowlisted on the Proxy Manager

<Info>
  This will not give access to the Proxy Manager's admin panel but only to send requests through the ports
</Info>

## Local Network

If you want to access Proxy Manager from a network where many people share the same IP then allowlisting IP is not strong enough for you. By allowlisting your IP you are giving an access to all the people from the same local network (corporate environments often look like that).

Use `local_login` flag and Proxy Manager will require authentication from each browser separately and a newly generated API key will be stored in the cookies.

```sh Example theme={null}
pmgr --local_login
```
