# Download results

> **Official Source**: [https://docs.brightdata.com/api-reference/deep-lookup/download-results](https://docs.brightdata.com/api-reference/deep-lookup/download-results)
> **Category**: `datasets-and-scrapers`

---

api-reference/deep-lookup GET /request/{id}/download
Use the Bright Data Deep Lookup API to download Results. GET /request/{id}/download returns enriched records as JSON with 200 OK on success.

<Card title="Query Parameters">
  <ParamField type="string">
    Output format: `json` (default), `csv`, `excel`
  </ParamField>
</Card>

```bash theme={null}
curl -X GET "https://api.brightdata.com/datasets/deep_lookup/v1/request/ai_meu3z0171o8k9jc4dh/download?format=csv" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -o results.csv
```
