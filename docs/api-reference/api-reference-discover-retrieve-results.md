# Retrieve results

> **Official Source**: [https://docs.brightdata.com/api-reference/discover/retrieve-results](https://docs.brightdata.com/api-reference/discover/retrieve-results)
> **Category**: `api-reference`

---

GET https://api.brightdata.com/discover?task_id=<task_id>
Fetch ranked search results from the Bright Data Discover API (31 languages) using a task_id. Each result includes URL, title, snippet and relevance score.

<ResponseField name="status" type="string">
  The status of the request: `processing` or `done`
</ResponseField>

<ResponseField name="duration_seconds" type="integer">
  The time taken to process the request in seconds.
</ResponseField>

<ResponseField name="results" type="object[]">
  A list of sorted search results.

  <Expandable title="Item Properties">
    <ResponseField name="link" type="string">
      URL of the search result.
    </ResponseField>

    <ResponseField name="title" type="string">
      Title of the search result.
    </ResponseField>

    <ResponseField name="description" type="string">
      Most query-related content snippet.
    </ResponseField>

    <ResponseField name="relevance_score" type="float">
      Relevance score.
    </ResponseField>

    <ResponseField name="content" type="string">
      Parsed content (only present if `include_content` is set to true).

      **For web pages:** returns page content. For PDF URLs: returns extracted PDF text. Format depends on the format parameter - when format is `md`, content is returned as Markdown; when format is `json`, content is returned as plain text. Returns empty/null if PDF exceeds 50 MB or parsing exceeds 30 seconds.
    </ResponseField>
  </Expandable>
</ResponseField>

<RequestExample>
  ```bash Retrieve Results theme={null}
  curl "https://api.brightdata.com/discover?task_id=<task_id>" \
    -H "Authorization: Bearer <token>"
  ```
</RequestExample>

<ResponseExample>
  ```json 200 OK theme={null}
  {
    "status": "done",
    "duration_seconds": 10,
    "results": [
      {
        "link": "https://www.trigyn.com/insights/ai-trends-2026-new-era-ai-advancements-and-breakthroughs",
        "title": "AI Trends in 2026: Advancements and Breakthroughs Ahead",
        "description": "5 days ago — Explore top AI trends for 2026, from enterprise adoption to autonomous systems and breakthrough business innovations.",
        "relevance_score": 0.98184747,
        "content": null
      },
      {
        "link": "https://sisuadigital.com/blog/artificial-intelligence-trends-2026-sisua-digital/",
        "title": "10 Artificial Intelligence (AI) Trends That Will Define 2026",
        "description": "Dec 26, 2025 — Discover the 10 Artificial Intelligence (AI) Trends That Will Define 2026: governance, human collaboration, continuous learning, and more.",
        "relevance_score": 0.97948,
        "content": null
      }
    ]
  }
  ```
</ResponseExample>

## Errors

| Status | Error Message                  | Trigger                                       | Resolution                                                   |
| :----- | :----------------------------- | :-------------------------------------------- | :----------------------------------------------------------- |
| 400    | `{"error": "Missing task_id"}` | `task_id` query parameter is missing or empty | Provide the `task_id` returned from the POST request.        |
| 401    | Credentials are missing        | No Authorization header                       | Add `Authorization: Bearer <token>` header                   |
| 404    | `{"error": "Task not found"}`  | `task_id` does not match any existing task    | Verify the `task_id` value. Tasks may expire after a period. |
