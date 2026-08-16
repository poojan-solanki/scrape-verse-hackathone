# Create new proxy port

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/create_a_new_proxy_port](https://docs.brightdata.com/api-reference/proxy-manager/create_a_new_proxy_port)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to create new Proxy Port. Calls POST /api/proxies on the local Proxy Manager port 22999.

**API endpoint:** `POST` `/api/proxies`

## `POST` body

<ParamField type="User Object">
  <Expandable title="properties">
    <ParamField type="integer">
      Port for the HTTP proxy
    </ParamField>

    <ParamField type="string">
      Set to `persist` to save proxy into the configuration file.
    </ParamField>

    <ParamField type="integer">
      Multiply the port definition given number of times
    </ParamField>

    <ParamField type="boolean" />

    <ParamField type="array">
      List of `user`s `[string]`. This option has to be used along with `multiply_users`
    </ParamField>

    <ParamField type="boolean">
      Enable SSL analyzing
    </ParamField>

    <ParamField type="string">
      Choose the SSL library

      | value      | description      |
      | ---------- | ---------------- |
      | `open_ssl` | Open SSL Library |
      | `flex_tls` | Flex TLS Library |
    </ParamField>

    <ParamField type="string">
      Interface or IP to listen on
    </ParamField>

    <ParamField type="string">
      Customer name
    </ParamField>

    <ParamField type="string">
      Zone name
    </ParamField>

    <ParamField type="string">
      Zone password
    </ParamField>

    <ParamField type="string">
      Hostname or IP of super proxy
    </ParamField>

    <ParamField type="integer">
      Super proxy port
    </ParamField>

    <ParamField type="string">
      Determines what kind of connection will be used between Proxy Manager and Super Proxy

      |         |   |
      | ------- | - |
      | `http`  |   |
      | `https` |   |
      | `socks` |   |
    </ParamField>

    <ParamField type="integer">
      Automatically retry on super proxy failure
    </ParamField>

    <ParamField type="boolean">
      Enable SSL connection/analyzing to insecure hosts
    </ParamField>

    <ParamField type="string">
      Country
    </ParamField>

    <ParamField type="string">
      State
    </ParamField>

    <ParamField type="string">
      City
    </ParamField>

    <ParamField type="string">
      ASN
    </ParamField>

    <ParamField type="string">
      Data Center IP
    </ParamField>

    <ParamField type="integer">
      gIP
    </ParamField>

    <ParamField type="array">
      A list of proxies from external vendors. Format: \[username:password@]ip\[:port]

      * proxy\[string]
    </ParamField>

    <ParamField type="string">
      Default username for external vendor ips
    </ParamField>

    <ParamField type="string">
      Default password for external vendor ips
    </ParamField>

    <ParamField type="integer">
      Default port for external vendor ips
    </ParamField>

    <ParamField type="string">
      DNS resolving

      |          |   |
      | -------- | - |
      | `local`  |   |
      | `remote` |   |
    </ParamField>

    <ParamField type="boolean">
      Process reverse lookup via DNS
    </ParamField>

    <ParamField type="string">
      Process reverse lookup via file
    </ParamField>

    <ParamField type="array">
      Process reverse lookup via value
    </ParamField>

    <ParamField type="string">
      Session for all proxy requests
    </ParamField>

    <ParamField type="boolean">
      Use session per requesting host to maintain IP per host
    </ParamField>

    <ParamField type="integer" />

    <ParamField type="boolean">
      Session pool size
    </ParamField>

    <ParamField type="integer">
      Throttle requests above given number
    </ParamField>

    <ParamField type="array">
      Proxy request rules
    </ParamField>

    <ParamField type="string">
      Block or allow requests to be automatically sent through super proxy on error
    </ParamField>

    <ParamField type="array" />

    <ParamField type="string" />

    <ParamField type="string">
      Operating System of the Peer IP
    </ParamField>

    <ParamField type="array">
      Request headers
    </ParamField>

    * name\[string]
    * value\[string]

    <ParamField type="string">
      Request debug info

      |        |   |
      | ------ | - |
      | `full` |   |
      | `none` |   |
    </ParamField>

    <ParamField type="string">
      x-lpm-authorization header
    </ParamField>

    <ParamField type="boolean" />

    <ParamField type="integer" />

    <ParamField type="boolean" />

    <ParamField type="boolean" />

    <ParamField type="integer" />

    <ParamField type="string" />

    <ParamField type="boolean">
      Unblocker Mobile UA
    </ParamField>

    <ParamField type="string">
      Timezone ID to be used by the browser
    </ParamField>

    <ParamField type="string">
      Browser screen size
    </ParamField>

    <ParamField type="string">
      WebRTC plugin behavior in the browser
    </ParamField>

    <ParamField type="object">
      BW limit params

      * days \[integer]
      * bytes \[integer]
      * renewable\[boolean] - Renew limit of bytes each period or use single period and stop usage once last day of period is reached. Default is true
    </ParamField>
  </Expandable>
</ParamField>

<ParamField type="boolean" />

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
  	"port":24000,
  	"zone":"zone_name",
  	"proxy_type":"persist",
  	"customer":"customer_id",
  	"password":"password",
  	"whitelist_ips":[]
  }
  ```
</ResponseExample>

<RequestExample>
  ```sh Shell theme={null}
  curl "http://127.0.0.1:22999/api/proxies" -H "Content-Type: application/json" -d '{"proxy":{"port":24000,"zone":"ZONE","proxy_type":"persist","customer":"CUSTOMER","password":"password","whitelist_ips":[]}}'
  ```

  ```js NodeJS theme={null}
  #!/usr/bin/env node

  (async () => {
    const response = await fetch('http://127.0.0.1:22999/api/proxies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'proxy':{'port':24000,'zone': 'ZONE','proxy_type':'persist','customer':'CUSTOMER','password':'password','whitelist_ips':[]}}),
    });
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```java Java theme={null}
  package example;

  import org.apache.http.HttpHost;
  import org.apache.http.client.fluent.*;


  public class Example {
    public static void main(String[] args) throws Exception {
     String body = "{\"proxy\":{\"port\":24000,\"zone\":\"ZONE\",\"proxy_type\":\"persist\",\"customer\":\"CUSTOMER\",\"password\":\"password\",\"whitelist_ips\":[]}}";
      String res = Executor.newInstance()
       .execute(Request.Post("http://127.0.0.1:22999/api/proxies")
       .bodyString(body, ContentType.APPLICATION_JSON))
       .returnContent().asString();
      System.out.println(res)
    }
  }
  ```
</RequestExample>
