# Available Datacenter and ISP IPs

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/Get_amount_of_available_Datacenter_and_ISP_IPs](https://docs.brightdata.com/api-reference/account-management-api/Get_amount_of_available_Datacenter_and_ISP_IPs)
> **Category**: `proxy-networks`

---

api-reference/openapi GET /zone/count_available_ips
Use the Bright Data Account Management API to available Datacenter and ISP IPs via GET /zone/count_available_ips, returning a 200 OK JSON response.

<Tip>
  Paste your API key to the authorization field. To get an API key, [Create an account](https://brightdata.com/?hs_signup=1\&utm_source=docs\&utm_campaign=playground) and learn [how to generate an API key](/api-reference/authentication#how-do-i-generate-a-new-api-key%3F)
</Tip>

<Accordion title="Plan Examples">
  * Available IPs for current Zone plan:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?zone=ZONE" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, dedicated IPs:

  ```sh dedicated IPs theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"ips_type\":\"dedicated\"\}" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, shared IPs located in United States:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"country\":\"us\",\"ips_type\":\"shared\"\}" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, dedicated ips located in United States:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"country\":\"us\",\"ips_type\":\"dedicated\"\}" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, shared IPs located in United States, Denver:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"ips_type\":\"shared\",\"country_city\":\"us-denver\",\"city\":true\}" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, shared IPs located in US, exclusive for domains: amazon.com, fb.com:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"ips_type\":\"selective\",\"country\":\"us\",\"domain_whitelist\":\"amazon.com%20fb.com\"\}" -H "Authorization: Bearer API_KEY"
  ```

  * Abstract plan, shared IPs located in US, geo IP databases: should persist in both maxmind and dbip:

  ```sh theme={null}
  curl "https://api.brightdata.com/count_available_ips?plan=\{\"ips_type\":\"shared\",\"country\":\"us\",\"geo_db\":\{\"maxmind\":true,\"dbip\":true\}\}" -H "Authorization: Bearer API_KEY"
  ```
</Accordion>
