# Deep Lookup API overview

> **Official Source**: [https://docs.brightdata.com/api-reference/deep-lookup/overview](https://docs.brightdata.com/api-reference/deep-lookup/overview)
> **Category**: `datasets-and-scrapers`

---

Bright Data Deep Lookup API: search and extract structured records from the public web programmatically. Pay-per-result with 200 OK JSON over HTTPS.

## Getting Started

**Base URL:** `https://api.brightdata.com/datasets/deep_lookup/v1`

**Authentication:** All API requests require authentication using your API key in the request headers.

```bash theme={null}
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.brightdata.com/datasets/deep_lookup/v1/preview
```

## Core Workflow

The Deep Lookup API follows a simple workflow designed for maximum flexibility and cost control:

<CardGroup>
  <Card title="Create Preview" href="/api-reference/deep-lookup/create-preview" icon="square-1">
    Start a preview to test your query with sample results.
  </Card>

  <Card title="Get Preview Data" href="/api-reference/deep-lookup/get-preview-data" icon="square-2">
    Retrieve the preview results once processing is complete
  </Card>

  <Card title="Enhance Query (Optional)" href="/api-reference/deep-lookup/enhance-query" icon="square-3">
    Refine your query based on preview results
  </Card>

  <Card title="Trigger Full Request" href="/api-reference/deep-lookup/trigger-full-request" icon="square-4">
    Execute the research with your desired parameters
  </Card>
</CardGroup>

<Card title="Get Results" href="/api-reference/deep-lookup/download-results" icon="square-5">
  Retrieve your structured data in JSON or CSV format
</Card>

## Understanding Column Types

When creating requests with specifications, you need to define column types:

### Column Type: `enrichment`

Adds data attributes without filtering results.

> **Examples:**
>
> * Company revenue
> * Contact information
> * Social profiles

### Column Type: `constraint`

Filters results based on criteria. Only entities matching ALL constraints are included.

> **Examples:**
>
> * Must be a startup
> * Revenue over \$10M
> * Founded after 2020

## Processing Steps

When monitoring request progress, the step field indicates the current processing phase:

| Step                | Description                                          |
| :------------------ | :--------------------------------------------------- |
| `identifying`       | Understanding and analyzing your query               |
| `generating_schema` | Creating the data structure for results              |
| `generating`        | Actively collecting and processing data from sources |
| `done`              | Research completed successfully                      |

## Webhooks

Configure webhooks to receive notifications when research completes:

```json theme={null}
{
  "webhook_url": "https://your-app.com/webhook",
  "events": ["request.completed", "request.failed"]
}
```
