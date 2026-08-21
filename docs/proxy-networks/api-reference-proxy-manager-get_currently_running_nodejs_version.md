# Get current NodeJS version

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy-manager/get_currently_running_nodejs_version](https://docs.brightdata.com/api-reference/proxy-manager/get_currently_running_nodejs_version)
> **Category**: `proxy-networks`

---

Use the Bright Data Proxy Manager API to get current NodeJS version. Calls GET /api/node_version on the local Proxy Manager port 22999.

**API endpoint:** `GET` `/api/node_version`

<ResponseExample>
  ```JSON Sample Response theme={null}
  {
      "current": {
          "options": {
              "loose": false,
              "includePrerelease":false
          },
          "loose": false,
          "raw":"v12.16.1\n",
          "major":12,
          "minor":16,
          "patch":1,
          "prerelease":[],
          "build":[],
          "version":"12.16.1"
      },
      "satisfied": true,
      "recommended": ">=10.0"
  }
  ```
</ResponseExample>
