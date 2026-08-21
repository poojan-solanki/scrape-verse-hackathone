# Domain consumption

> **Official Source**: [https://docs.brightdata.com/api-reference/account-management-api/domain-consumption](https://docs.brightdata.com/api-reference/account-management-api/domain-consumption)
> **Category**: `api-reference`

---

api-reference/proxy-manager GET /domains/{metric}
Retrieve per-domain usage metrics including bandwidth and request count from the Bright Data Domain Consumption API. Returns 200 OK with JSON results.

## Sample Requests

<CodeGroup>
  ```sh All zones theme={null}
  curl --request GET \
    --url 'api.brightdata.com/domains/bw?from=2025-12-01&to=2025-12-10' \
    --header 'Authorization: Bearer API_KEY'
  ```

  ```sh Bandwidth by zone theme={null}
  curl --request GET \
    --url 'api.brightdata.com/domains/bw?from=2025-12-01&to=2025-12-10&zones=zone_name' \
    --header 'Authorization: Bearer API_KEY'
  ```

  ```sh Requests by zone theme={null}
  curl --request GET \
    --url 'api.brightdata.com/domains/req?from=2025-12-01&to=2025-12-10&zones=zone_name' \
    --header 'Authorization: Bearer API_KEY'
  ```
</CodeGroup>
