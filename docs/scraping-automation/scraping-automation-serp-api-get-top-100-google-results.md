# Get top 100 Google results

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/get-top-100-google-results](https://docs.brightdata.com/scraping-automation/serp-api/get-top-100-google-results)
> **Category**: `scraping-automation`

---

Fetch positions 1-100 from Google search in a single Bright Data request with control over language, location, pagination depth and AI Overview extraction.

<Note>
  This guide uses the Scrapers (Datasets) to return Google SERP positions 1-100 in one request. You control language, geo-targeting, pagination depth, and device type. This is guides overcome the challenge in getting 100 results   (`n=100`)  after parameter deprecation by google.
</Note>

## Prerequisites

Before you begin, ensure you have:

* An active Bright Data account
* Your API key (found in your dashboard under **Users and API keys**)
* Dataset ID: `gd_mfz5x93lmsjjjylob`

<Note>
  **Pricing:** One successful API call = one billable request, regardless of page depth. Retries are included; no bandwidth fees apply. See [SERP Pricing & Billing](/scraping-automation/serp-api/pricing-and-billing) for details.
</Note>

## Quick start

Try these examples to fetch the top 100 results in one request. Replace `${API_KEY}` with your actual API key.

<CardGroup>
  <Card title="Test in Postman" icon="user-astronaut" href="https://www.postman.com/bright-data-api/bright-data-api/request/h7ov9x5/google-serp-100-results">
    Pre-configured collection for Google SERP top 100 results
  </Card>
</CardGroup>

### How to send a basic request

This example returns approximately 100 results (10 pages × \~10 results per page):

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_mfz5x93lmsjjjylob&include_errors=true" \
    -H "Authorization: Bearer ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d '[{
      "url": "https://www.google.com/",
      "keyword": "pizza",
      "language": "en",
      "country": "US",
      "start_page": 1,
      "end_page": 10
    }]'
  ```

  ```js Node.js theme={null}
  import fetch from "node-fetch";

  const API_KEY = process.env.API_KEY;
  const DATASET_ID = "gd_mfz5x93lmsjjjylob";

  const payload = [
    {
      url: "https://www.google.com/",
      keyword: "pizza",
      language: "en",
      country: "US",
      start_page: 1,
      end_page: 10,
    },
  ];

  const res = await fetch(
    `https://api.brightdata.com/datasets/v3/trigger?dataset_id=${DATASET_ID}&include_errors=true`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    }
  );

  const job = await res.json();
  console.log(job); // Contains snapshot_id for status checks and download
  ```

  ```py Python theme={null}
  import os
  import json
  import requests

  API_KEY = os.environ.get("API_KEY")
  DATASET_ID = "gd_mfz5x93lmsjjjylob"

  payload = [
      {
          "url": "https://www.google.com/",
          "keyword": "pizza",
          "language": "en",
          "country": "US",
          "start_page": 1,
          "end_page": 10
      }
  ]

  res = requests.post(
      f"https://api.brightdata.com/datasets/v3/trigger?dataset_id={DATASET_ID}&include_errors=true",
      headers={
          "Authorization": f"Bearer {API_KEY}",
          "Content-Type": "application/json",
      },
      data=json.dumps(payload),
  )

  print(res.json())  # Contains snapshot_id for status checks
  ```
</CodeGroup>

### Which parameters to use

| Parameter      | Type    | Description                      | Example                   |
| -------------- | ------- | -------------------------------- | ------------------------- |
| `keyword`      | string  | Search term to query             | `"pizza"`                 |
| `language`     | string  | UI language (ISO 639-1)          | `"en"`, `"de"`            |
| `country`      | string  | Geographic location (ISO 3166-1) | `"US"`, `"DE"`            |
| `start_page`   | integer | First page to scrape             | `1`                       |
| `end_page`     | integer | Last page to scrape              | `10` (≈ top 100)          |
| `collapse_aio` | boolean | Collapse the AI Overview section | `true`, `false` (default) |

<Tip>
  **Page ranges:** Use `start_page` and `end_page` to control depth:

  * `1..2` ≈ Top 20 results
  * `1..5` ≈ Top 50 results
  * `1..10` ≈ Top 100 results

  Smaller ranges complete faster and return smaller payloads.
</Tip>

## AI Overview extraction

The API automatically captures **Google's AI Overview** when available for your search query.

### What is AI Overview?

AI Overview is Google's AI-generated summary that appears at the top of search results. It provides quick answers synthesized from multiple sources.

### Response field

The AI Overview text is returned in the `aio_text` field:

```json theme={null}
{
  "keyword": "does honey expire?",
  "aio_text": "No, pure honey does not expire , as its high sugar content, low moisture, and acidity create an environment hostile to bacteria. While pure honey can last indefinitely, commercial honey may have a \"best by\" date for quality rather than safety...",
  "organic": [...],
  "people_also_ask": [...]
}
```

<Note>
  **AI Overview availability:** The `aio_text` field will be `null` or empty if no AI Overview is shown for your search.
</Note>

### Controlling AI Overview visibility

Use the `collapse_aio` parameter to control whether the AI Overview section is expanded or collapsed in the returned SERP.

| Value                | Behavior                          |
| -------------------- | --------------------------------- |
| `collapse_aio=true`  | AI Overview is collapsed          |
| `collapse_aio=false` | AI Overview is expanded (default) |

Collapsing AI Overview prevents it from pushing organic results down the page, which produces more stable pixel-position metrics and consistent layout data comparable to historical baselines.

```json theme={null}
{
  "url": "https://www.google.com/",
  "keyword": "pizza",
  "language": "en",
  "country": "US",
  "start_page": 1,
  "end_page": 10,
  "collapse_aio": true
}
```

### Example processing

```js theme={null}
const results = await response.json();

results.forEach(result => {
  if (result.aio_text) {
    console.log('AI Overview:', result.aio_text);
    
    // Split into sections
    const sections = result.aio_text.split('\n\n');
    sections.forEach(section => console.log(section));
  }
});
```

## Understanding the async workflow

Scrapers is asynchronous. Here's how it works:

1. **Trigger** your request → receive a `snapshot_id`
2. **Monitor** progress using the `snapshot_id`
3. **Download** results when complete

### Which API endpoints to call

| Action           | Method | Endpoint                                               |
| ---------------- | ------ | ------------------------------------------------------ |
| Trigger request  | POST   | `/datasets/v3/trigger?dataset_id=gd_mfz5x93lmsjjjylob` |
| Check progress   | GET    | `/datasets/v3/progress/{snapshot_id}`                  |
| Download results | GET    | `/datasets/v3/snapshot/{snapshot_id}`                  |

<Info>
  Learn more about the async workflow in [Asynchronous Requests](/scraping-automation/serp-api/asynchronous-requests).
</Info>

### Complete workflow example

<CodeGroup>
  ```js Node.js theme={null}
  import fetch from "node-fetch";

  const API_KEY = process.env.API_KEY;
  const DATASET_ID = "gd_mfz5x93lmsjjjylob";

  // Step 1: Trigger request
  const triggerRes = await fetch(
    `https://api.brightdata.com/datasets/v3/trigger?dataset_id=${DATASET_ID}&include_errors=true`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([
        {
          url: "https://www.google.com/",
          keyword: "pizza",
          language: "en",
          country: "US",
          start_page: 1,
          end_page: 10,
        },
      ]),
    }
  );

  const { snapshot_id } = await triggerRes.json();

  // Step 2: Poll for completion
  let progress;
  do {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
    const progressRes = await fetch(
      `https://api.brightdata.com/datasets/v3/progress/${snapshot_id}`,
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );
    progress = await progressRes.json();
  } while (progress.status !== "ready");

  // Step 3: Download results
  const downloadRes = await fetch(
    `https://api.brightdata.com/datasets/v3/snapshot/${snapshot_id}?format=json`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const results = await downloadRes.json();
  console.log(results);
  ```

  ```python Python theme={null}
  import os
  import time
  import requests

  API_KEY = os.getenv("API_KEY")
  DATASET_ID = "gd_mfz5x93lmsjjjylob"

  # Step 1: Trigger request
  trigger_url = f"https://api.brightdata.com/datasets/v3/trigger?dataset_id={DATASET_ID}&include_errors=true"
  trigger_response = requests.post(
      trigger_url,
      headers={
          "Content-Type": "application/json",
          "Authorization": f"Bearer {API_KEY}",
      },
      json=[
          {
              "url": "https://www.google.com/",
              "keyword": "pizza",
              "language": "en",
              "country": "US",
              "start_page": 1,
              "end_page": 10,
          }
      ],
  )

  snapshot_id = trigger_response.json()["snapshot_id"]

  # Step 2: Poll for completion
  progress = None
  while progress is None or progress["status"] != "ready":
      time.sleep(5)  # Wait 5 seconds
      progress_url = f"https://api.brightdata.com/datasets/v3/progress/{snapshot_id}"
      progress_response = requests.get(
          progress_url,
          headers={"Authorization": f"Bearer {API_KEY}"},
      )
      progress = progress_response.json()

  # Step 3: Download results
  download_url = f"https://api.brightdata.com/datasets/v3/snapshot/{snapshot_id}?format=json"
  download_response = requests.get(
      download_url,
      headers={"Authorization": f"Bearer {API_KEY}"},
  )

  results = download_response.json()
  print(results)
  ```
</CodeGroup>

## How to configure advanced options

### Batch multiple queries

Process multiple search queries in one request:

```json theme={null}
[
  {
    "url": "https://www.google.com/",
    "keyword": "pizza",
    "language": "en",
    "country": "US",
    "start_page": 1,
    "end_page": 10
  },
  {
    "url": "https://www.google.com/",
    "keyword": "coffee",
    "language": "de",
    "country": "DE",
    "start_page": 1,
    "end_page": 10
  },
  {
    "url": "https://www.google.com/",
    "keyword": "running shoes",
    "language": "en",
    "country": "GB",
    "start_page": 1,
    "end_page": 5
  }
]
```

### Mobile search results

Add `"brd_mobile": true` to get mobile SERP data:

```bash cURL theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_mfz5x93lmsjjjylob&include_errors=true" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '[{
      "url": "https://www.google.com/",
      "keyword": "running shoes",
      "language": "en",
      "country": "US",
      "start_page": 1,
      "end_page": 10,
      "brd_mobile": true
    }]'
```

### Get results from the Web tab (udm=14)

The Google `udm` parameter defines which search tab the SERP comes from. The Bright Data SERP Scraper maps the native Google `udm` value to its own request parameter, `udm_web`.

To return results from the **Web** tab (`udm=14` on Google), set `udm_web` to `true` in your request:

<Note>
  The `udm_web` parameter cannot be combined with the `tbm` parameter.
</Note>

```bash cURL theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_mfz5x93lmsjjjylob&include_errors=true" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '[{
    "url": "https://www.google.com/",
    "keyword": "pizza kraków",
    "language": "pl",
    "country": "PL",
    "uule": "w+CAIQICIGUG9sYW5k",
    "udm_web": true,
    "include_paginated_html": true
  }]'
```

### Include HTML snapshots

Capture raw HTML alongside parsed data for auditing or custom parsing:

```json theme={null}
{
  "url": "https://www.google.com/",
  "keyword": "pizza",
  "language": "en",
  "country": "US",
  "start_page": 1,
  "end_page": 10,
  "include_paginated_html": true
}
```

When enabled, results include `pagination[].page_html` for each page.

### How to localize requests

Target specific markets with language and country combinations:

```json theme={null}
// German language, Germany location
{
  "keyword": "laufschuhe",
  "language": "de",
  "country": "DE",
  "start_page": 1,
  "end_page": 5
}

// English language, UK location
{
  "keyword": "trainers",
  "language": "en",
  "country": "GB",
  "start_page": 1,
  "end_page": 10
}

// Spanish language, Mexico location
{
  "keyword": "zapatos deportivos",
  "language": "es",
  "country": "MX",
  "start_page": 1,
  "end_page": 10
}
```

## Frequently asked questions

<AccordionGroup>
  <Accordion title="How do I select specific output fields?">
    You can choose which parsed fields to return for all pages. To also include raw HTML for each page, add `"include_paginated_html": true` to your request. This returns `pagination[].page_html` alongside parsed fields.
  </Accordion>

  <Accordion title="Can I control AI Overview (AIO) visibility?">
    Yes. Use the `collapse_aio` boolean parameter to control AI Overview visibility:

    * `collapse_aio=true`, AI Overview is collapsed, keeping organic results in stable positions
    * `collapse_aio=false`, AI Overview is expanded (default behavior)

    Collapsing AIO is useful when consistent pixel-position metrics or layout comparisons against historical data are required.
  </Accordion>

  <Accordion title="What changed with the browser worker implementation?">
    We now use a browser worker for SERP scraping. This reduces duplicate results, improves session continuity across pagination, and enables richer outputs (such as AI Overview). All existing requests remain backward-compatible.
  </Accordion>

  <Accordion title="How does pricing work for top 100 results?">
    One successful API call = one billable request, even when it returns 100+ results across 10 pages. Retries are included automatically, and there are no additional bandwidth fees. See [SERP Pricing & Billing](/scraping-automation/serp-api/pricing-and-billing) for full details.
  </Accordion>

  <Accordion title="What is the difference between language and country parameters?">
    * `language`: Controls the UI language Google uses (e.g., `"en"`, `"de"`, `"es"`)
    * `country`: Controls the geographic location for results (e.g., `"US"`, `"DE"`, `"MX"`)

    These can be combined independently to target specific markets.
  </Accordion>

  <Accordion title="How long does it take to get results?">
    Time varies based on query complexity and page depth. Smaller page ranges (e.g., `1..2`) complete faster than larger ranges (e.g., `1..10`). Use the Progress API to monitor your request status.
  </Accordion>

  <Accordion title="How to use tbs parameter?">
    Common usages for tbs to filter by date are:

    * Past hour:  tbs=qdr:h
    * Past 24 hours: tbs=qdr:d
    * Past week:  tbs=qdr:w
    * Past month:  tbs=qdr:m
    * Past year:  tbs=qdr:y\
       

    You can also set a custom range using tbs=cdr:1,cd\_min:MM/DD/YYYY,cd\_max:MM/DD/YYYY\
    Example:\
    ...\&tbs=cdr:1,cd\_min:1/1/2024,cd\_max:2/1/2024
  </Accordion>
</AccordionGroup>

## Next steps

<CardGroup>
  <Card title="Pricing & Billing" icon="credit-card" href="/scraping-automation/serp-api/pricing-and-billing">
    Understand how requests are billed
  </Card>

  <Card title="Google query parameters" icon="sliders" href="/scraping-automation/serp-api/query-parameters/google">
    Explore all available parameters
  </Card>

  <Card title="Parsed JSON results" icon="code" href="/scraping-automation/serp-api/parsed-json-results/parsing-search-results">
    Learn about the response structure
  </Card>

  <Card title="Asynchronous requests" icon="clock" href="/scraping-automation/serp-api/asynchronous-requests">
    Deep dive into the async workflow
  </Card>
</CardGroup>
