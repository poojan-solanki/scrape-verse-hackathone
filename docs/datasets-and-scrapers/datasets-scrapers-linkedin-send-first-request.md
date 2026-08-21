# Send your first LinkedIn API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/linkedin/send-first-request](https://docs.brightdata.com/datasets/scrapers/linkedin/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to all 4 Bright Data LinkedIn Scraper API endpoints with copy-paste examples for profiles, companies, jobs and posts.

This tutorial walks you through sending a synchronous request to each Bright Data LinkedIn Scraper API endpoint. By the end, you'll have working examples for profiles, companies, jobs, and posts.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/linkedin/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.linkedin.com/..."}]
```

The only thing that changes between endpoints is the `dataset_id` and the input URL format.

<Note>
  Synchronous requests support up to 20 URLs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/linkedin/async-requests).
</Note>

## How to scrape LinkedIn profiles

**Dataset ID:** `gd_l1viktl72bvl7bjuj0`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1viktl72bvl7bjuj0&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/in/satyanadella"}]'
```

You should see a `200` response. This takes 10-30 seconds.

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "name": "Satya Nadella",
      "city": "Redmond",
      "country_code": "US",
      "position": "Chairman and CEO at Microsoft",
      "current_company": {
        "name": "Microsoft",
        "company_id": "microsoft",
        "link": "https://www.linkedin.com/company/microsoft"
      },
      "about": "Chairman and CEO at Microsoft...",
      "followers": 10842560,
      "connections": 500
    }
  ]
  ```
</Accordion>

[Full Profiles response schema](/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url)

## How to scrape LinkedIn companies

**Dataset ID:** `gd_l1vikfnt1wgvvqz95w`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfnt1wgvvqz95w&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/company/microsoft"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "name": "Microsoft",
      "followers": 23000000,
      "employees_in_linkedin": 290000,
      "about": "Every company has a mission...",
      "industries": ["Software Development"],
      "company_size": "10,001+ employees",
      "headquarters": "Redmond, Washington",
      "website": "https://www.microsoft.com",
      "founded": "1975"
    }
  ]
  ```
</Accordion>

[Full Companies response schema](/api-reference/scrapers/social-media-apis/linkedin-companies-collect-by-url)

## How to scrape LinkedIn jobs

**Dataset ID:** `gd_lpfll7v5hcqtkxl6l`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lpfll7v5hcqtkxl6l&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/jobs/view/3986111804"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "job_title": "Software Engineer",
      "company_name": "Epic",
      "job_location": "Verona, WI",
      "job_seniority_level": "Entry level",
      "job_employment_type": "Full-time",
      "job_industries": ["Software Development"],
      "job_summary": "Work on healthcare software that impacts millions...",
      "apply_link": "https://www.linkedin.com/jobs/view/3986111804/apply",
      "is_easy_apply": true
    }
  ]
  ```
</Accordion>

[Full Jobs response schema](/api-reference/scrapers/social-media-apis/linkedin-jobs-collect-by-url)

## How to scrape LinkedIn posts

**Dataset ID:** `gd_lyy3tktm25m4avu764`

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lyy3tktm25m4avu764&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/posts/satyanadella_activity-7180537307521769472"}]'
```

<Accordion title="Example response">
  ```json theme={null}
  [
    {
      "post_text": "Excited to share our latest AI innovations...",
      "num_likes": 45230,
      "num_comments": 1250,
      "date_posted": "2024-04-03T14:30:00.000Z",
      "hashtags": ["AI", "Innovation"],
      "user_followers": 10842560,
      "post_type": "original"
    }
  ]
  ```
</Accordion>

[Full Posts response schema](/api-reference/scrapers/social-media-apis/linkedin-posts-collect-by-url)

## Quick reference: dataset IDs

| Endpoint  | Dataset ID              | URL pattern                   |
| :-------- | :---------------------- | :---------------------------- |
| Profiles  | `gd_l1viktl72bvl7bjuj0` | `linkedin.com/in/{username}`  |
| Companies | `gd_l1vikfnt1wgvvqz95w` | `linkedin.com/company/{slug}` |
| Jobs      | `gd_lpfll7v5hcqtkxl6l`  | `linkedin.com/jobs/view/{id}` |
| Posts     | `gd_lyy3tktm25m4avu764` | `linkedin.com/posts/{slug}`   |

## Output formats

Control the response format with the `format` query parameter:

| Value    | Description                                 |
| :------- | :------------------------------------------ |
| `json`   | JSON array (default)                        |
| `ndjson` | Newline-delimited JSON, one record per line |
| `csv`    | Comma-separated values                      |

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/linkedin/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url">
    Full parameter and response field reference.
  </Card>
</CardGroup>
