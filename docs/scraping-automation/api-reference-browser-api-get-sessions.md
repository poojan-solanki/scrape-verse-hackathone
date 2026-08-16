# List browser session

> **Official Source**: [https://docs.brightdata.com/api-reference/browser-api/get-sessions](https://docs.brightdata.com/api-reference/browser-api/get-sessions)
> **Category**: `scraping-automation`

---

GET /browser_sessions
Use the Bright Data Browser API to list Browser Sessions. GET /browser_sessions returns 200 OK with active or historical session metadata as JSON.

<Accordion title="Example Usage URLs">
  ```txt Default: last 50 sessions sorted by timestamp desc theme={null}
  https://api.brightdata.com/browser_sessions
  ```

  ```txt Get first 25 finished sessions wrap theme={null}
  https://api.brightdata.com/browser_sessions?limit=25&status=finished
  ```

  ```txt Get all running sessions wrap theme={null}
  https://api.brightdata.com/browser_sessions?status=running
  ```

  ```txt Get all failed sessions wrap theme={null}
  https://api.brightdata.com/browser_sessions?status=failed
  ```

  ```txt Get sessions from a specific API zone wrap theme={null}
  https://api.brightdata.com/browser_sessions?api_name=scraping_browser1
  ```

  ```txt Sessions from a specific date range wrap theme={null}
  https://api.brightdata.com/browser_sessions?start_date=2025-12-01T00:00:00Z&end_date=2025-12-16T23:59:59Z
  ```

  ```txt Sessions for a specific target URL sorted by bandwidth wrap theme={null}
  https://api.brightdata.com/browser_sessions?target_url=example.com&sort=bandwidth&order=desc
  ```

  ```txt All sessions for a specific target URL wrap theme={null}
  https://api.brightdata.com/browser_sessions?target_url=amazon.com
  ```

  ```txt Failed sessions for a specific target URL wrap theme={null}
  https://api.brightdata.com/browser_sessions?target_url=linkedin.com&status=failed
  ```

  ```txt Sessions sorted by highest bandwidth wrap theme={null}
  https://api.brightdata.com/browser_sessions?sort=bandwidth&order=desc
  ```

  ```txt Sessions sorted by longest duration wrap theme={null}
  https://api.brightdata.com/browser_sessions?sort=duration&order=desc
  ```

  ```txt First page (100 sessions) wrap theme={null}
  https://api.brightdata.com/browser_sessions?limit=100&offset=0
  ```

  ```txt Second page (next 100 sessions) wrap theme={null}
  https://api.brightdata.com/browser_sessions?limit=100&offset=100
  ```
</Accordion>
