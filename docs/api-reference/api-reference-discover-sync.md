# Discover API synchronous request

> **Official Source**: [https://docs.brightdata.com/api-reference/discover/sync](https://docs.brightdata.com/api-reference/discover/sync)
> **Category**: `api-reference`

---

POST https://api.brightdata.com/discover/sync
Use the Bright Data Discover API synchronous endpoint to get ranked search results in a single request with no polling, within a 60-second timeout.

The Bright Data Discover API synchronous endpoint returns ranked search results in the same HTTP response, so you do not create a task or poll for results. Use the synchronous endpoint when a search completes inside the 60-second timeout budget and you need results inline, for example in an AI agent, a RAG pipeline or a chat backend.

The synchronous endpoint accepts the same request body as the asynchronous [Discover API](/api-reference/discover/overview) endpoint. Only the response differs: the synchronous endpoint returns the final results payload instead of a `task_id`.

## Body Parameters

<ParamField type="string">
  The search query.

  > **Maximum length**: 1,500 characters.
</ParamField>

<ParamField type="string">
  Describes the specific goal of the search to help the AI evaluate and rank result relevance. If not provided, the `query` string is used as the intent.

  > **Maximum length:** 3,000 characters.

  For best results, use the following formula:

  ```json theme={null}
  [PERSONA/CONTEXT]: I am [persona] looking for [use case].
  [INCLUDE]: Prioritize [document type 1], [document type 2],
             and [source authority] published [recency if relevant].
  [DEPTH]: Focus on [technical level / document section].
  [EXCLUDE]: Strictly exclude [noise type 1], [noise type 2],
             and [source type to avoid].
  ```

  <Expandable title="Intent examples">
    **B2B Financial Research (Investment RAG)**

    * Query: `"Impact of generative AI on SaaS revenue models"`
    * Intent:

    ```text theme={null}
    I am building an AI investment analyst tool for venture capitalists.
    Prioritize institutional research reports, earnings call transcripts,
    and B2B SaaS industry analyses published in the last 12 months.
    Focus on financial metrics, pricing strategies, and market adoption rates.
    Strictly exclude consumer software reviews, generic tech news,
    and vendor promotional pages.
    ```

    **Advanced Engineering Troubleshooting (Developer RAG)**

    * Query: `"Optimize Postgres database query performance"`
    * Intent:

    ```text theme={null}
    I am building an internal knowledge base for senior backend engineers.
    Prioritize official documentation, peer-reviewed engineering blogs,
    and advanced performance benchmarks.
    Focus on configuration settings, advanced indexing strategies,
    and code-level tuning.
    Strictly exclude beginner SQL tutorials, basic installation guides,
    and database vendor marketing material.
    ```
  </Expandable>
</ParamField>

<ParamField type="string">
  Controls the search depth and ranking behavior of the request.

  * `standard` - Provides standard search depth and AI ranking. Best for general use cases where a balance of relevance and speed is needed.
  * `zeroRanking` - Bypasses AI ranking to maximize the raw volume of results returned. Best when you want to collect as much broad data as possible without relevance filtering.
    <Note>In `zeroRanking` mode, the `num_results` parameter has no effect on the number of results returned. Additionally, `include_content` is not supported in this mode.</Note>
  * `deep` - Performs a more exhaustive, broader search. Best when you need comprehensive coverage of a topic and prioritize thoroughness over speed.
  * `fast` - Optimizes the request for quicker response times. Best for time-sensitive tasks where getting immediate results is the top priority.
</ParamField>

<ParamField type="array of strings">
  A list of exact keywords that must appear in the search results. The API automatically applies `intext:` operators to guarantee keyword inclusion.

  *Example: `["Product Manager", "Roadmap"]`*
</ParamField>

<ParamField type="string">
  The response format.

  Available options: `json`, `md`

  > When set to `md` and `include_content` is true, the content field returns parsed Markdown instead of raw HTML.
</ParamField>

<ParamField type="boolean">
  If true, the response will include the page content in markdown format.

  **PDF support:** When a search result links to a PDF file, the API will automatically extract and parse the PDF content. Limitations:

  * Maximum PDF file size: 50 MB
  * Maximum PDF parsing time: 30 seconds
  * If either limit is exceeded, the content field returns empty.
</ParamField>

<ParamField type="boolean">
  If true, the response will extract and include an array of images.
</ParamField>

<ParamField type="string">
  The language to search in and return data for.

  Supported across 31 languages to align with Voyage AI and SERP capabilities, including but not limited to:
  `en` (English), `es` (Spanish), `fr` (French), `de` (German), `zh` (Chinese), `ja` (Japanese), `ar` (Arabic), `he` (Hebrew), `ko` (Korean), `hi` (Hindi), `pt` (Portuguese), and `ru` (Russian).
</ParamField>

<ParamField type="integer">
  The exact number of search results to return in the response.
</ParamField>

<ParamField type="boolean">
  If true, duplicate results will be removed from the response.
</ParamField>

<ParamField type="string">
  Search only for content updated from the date specified (format: YYYY-MM-DD).
</ParamField>

<ParamField type="string">
  Search only for content updated until the date specified (format: YYYY-MM-DD).
</ParamField>

<ParamField type="string">
  Get search results from a specific country. This accepts all standard 2-letter ISO country codes (e.g., `US`, `GB`, `DE`, `IL`, `FR`, `JP`). This will prioritize content from the selected country in the search results.
</ParamField>

<ParamField type="string">
  Get search results localized to a specific city using SERP `uule` encoding (e.g., `"New York"`, `"Berlin"`, `"Tel Aviv"`). For best results, use this in conjunction with the corresponding `country` parameter.
</ParamField>

## Synchronous vs. Asynchronous

The synchronous and asynchronous Discover API endpoints take identical request bodies. They differ only in how you receive results.

|                | Synchronous (`POST /discover/sync`)                                 | Asynchronous (`POST /discover`)                                                            |
| :------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| Response       | Final ranked results in the same HTTP response                      | A `task_id` to fetch later                                                                 |
| Polling        | None                                                                | Poll [Retrieve Results](/api-reference/discover/retrieve-results) until `status` is `done` |
| Round trips    | 1                                                                   | 2 or more                                                                                  |
| Timeout budget | 60 seconds per request                                              | Not bound to a single request                                                              |
| Best for       | AI agents, RAG pipelines and chat backends that need results inline | Large or slow searches, batch jobs and background collection                               |

Use the synchronous endpoint when the result feeds directly into an AI integration. An agent, a retrieval-augmented generation (RAG) pipeline or a chat backend can send one request and use the ranked results in the same turn, with no task tracking and no polling loop to build or maintain.

Use the asynchronous endpoint when a search may exceed the 60-second synchronous timeout, or when you collect results in the background and fetch them later with [Retrieve Results](/api-reference/discover/retrieve-results).

<RequestExample>
  ```bash cURL: json theme={null}
  curl "https://api.brightdata.com/discover/sync" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{
      "query": "artificial intelligence trends",
      "filter_keywords": ["Product Manager", "Roadmap"],
      "num_results": 10,
      "format": "json",
      "intent": "latest AI technology developments",
      "include_images": true
    }'
  ```

  ```sh cURL: md theme={null}
  curl "https://api.brightdata.com/discover/sync" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{
      "query": "artificial intelligence trends",
      "format": "md",
      "include_content": true,
      "num_results": 5
    }'
  ```

  ```python Python theme={null}
  import requests

  url = "https://api.brightdata.com/discover/sync"
  headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
  }
  payload = {
      "query": "artificial intelligence trends",
      "filter_keywords": ["Product Manager", "Roadmap"],
      "num_results": 10,
      "city": "New York",
      "country": "US",
      "language": "en",
      "intent": "latest AI technology developments",
      "include_images": True
  }

  # Returns the ranked results in the same response, no polling
  response = requests.post(url, json=payload, headers=headers)
  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch("https://api.brightdata.com/discover/sync", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      query: "artificial intelligence trends",
      filter_keywords: ["Product Manager", "Roadmap"],
      num_results: 10,
      city: "New York",
      country: "US",
      language: "en",
      intent: "latest AI technology developments",
      include_images: true
    })
  });

  const data = await response.json();
  console.log(data);
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

The synchronous response uses the same schema as [Retrieve Results](/api-reference/discover/retrieve-results). The `status` field is always `done` because the results are final when the response returns.

<ResponseField name="status" type="string">
  The status of the request. For the synchronous endpoint this is always `done`.
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

## Errors

The synchronous endpoint carries over the validation and authentication errors from the asynchronous [Discover API](/api-reference/discover/overview) endpoint, and adds a `504` error when a search does not finish within the 60-second timeout budget.

| Status | Error Message                                                            | Trigger                                                                                                     | Resolution                                                                                                                                                                                       |
| :----- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400    | `{"error":"Missing query"}`                                              | query is missing, empty, or null                                                                            | Provide a non-empty string in the query field.                                                                                                                                                   |
| 400    | `{"error":"Invalid query. Max length is 1500 chars"}`                    | query exceeds 1,500 characters, or is a non-string type (number, array)                                     | Provide a string of 1,500 characters or fewer.                                                                                                                                                   |
| 400    | `{"error":"Invalid intent. Max length is 3000 chars"}`                   | intent exceeds 3,000 characters, or is a non-string type                                                    | Provide a string of 3,000 characters or fewer, or omit to use query as the intent.                                                                                                               |
| 400    | `{"error":"Unsupported format. Only \"md\" and \"json\" are supported"}` | format is not "json" or "md" (e.g. "markdown", "xml", "csv", empty string, or non-string type)              | Set format to "json" or "md".                                                                                                                                                                    |
| 400    | `{"error":"Invalid num_results. Must be a number between 1 and 20"}`     | num\_results is 0, negative, greater than 20, or a non-number type                                          | Provide an integer between 1 and 20.                                                                                                                                                             |
| 400    | `{"error":"Invalid filter_keywords. Must be an array of strings"}`       | filter\_keywords is not an array (e.g. a string)                                                            | Provide an array of strings, e.g. \["keyword1", "keyword2"].                                                                                                                                     |
| 400    | `{"error":"Invalid start_date"}`                                         | start\_date is not in YYYY-MM-DD format, is a non-string type, is in the future, or start\_date > end\_date | Provide a valid past or present date in YYYY-MM-DD format.                                                                                                                                       |
| 400    | `{"error":"Invalid end_date"}`                                           | end\_date is not in YYYY-MM-DD format or is a non-string type                                               | Provide a valid date in YYYY-MM-DD format.                                                                                                                                                       |
| 400    | `{"error":"Unsupported country"}`                                        | country is a string but not a valid ISO 3166-1 alpha-2 code                                                 | Use a valid 2-letter country code (e.g. "US", "IL", "DE").                                                                                                                                       |
| 400    | `{"error":"Unexpected fields: <field_names>"}`                           | Request body contains unrecognized field names                                                              | Remove unexpected fields. Only use documented parameters.                                                                                                                                        |
| 401    | Credentials are missing                                                  | No Authorization header provided                                                                            | Add `Authorization: Bearer <token>` header.                                                                                                                                                      |
| 401    | Invalid credentials                                                      | Token in Authorization header is invalid                                                                    | Provide a valid API token.                                                                                                                                                                       |
| 401    | Auth method is not supported                                             | Authorization header is missing the Bearer prefix                                                           | Use the format `Authorization: Bearer <token>`.                                                                                                                                                  |
| 403    | Forbidden                                                                | Discover API is not enabled for your account                                                                | Contact your account manager to enable the Discover API.                                                                                                                                         |
| 429    | Too Many Requests                                                        | Rate or concurrency limit exceeded                                                                          | Slow down requests or upgrade your plan.                                                                                                                                                         |
| 500    | Internal Server Error                                                    | Server-side issue                                                                                           | Retry after a few seconds.                                                                                                                                                                       |
| 504    | `{"error":"Request timed out"}`                                          | The search did not complete within the 60-second synchronous timeout budget                                 | Narrow the query, reduce `num_results`, or use the asynchronous [Discover API](/api-reference/discover/overview) endpoint and poll [Retrieve Results](/api-reference/discover/retrieve-results). |

## FAQs

<AccordionGroup>
  <Accordion title="What happens when a synchronous request times out?">
    When a search does not complete within the 60-second timeout budget, the synchronous endpoint returns a `504` error and no results. Retry with a narrower query or a smaller `num_results`, or send the same request body to the asynchronous [Discover API](/api-reference/discover/overview) endpoint and fetch the results later with [Retrieve Results](/api-reference/discover/retrieve-results).
  </Accordion>

  <Accordion title="Does a timeout return partial results?">
    No. The synchronous endpoint does not return partial results. A request either returns the complete ranked results with a `200` status, or it returns a `504` error with no results.
  </Accordion>

  <Accordion title="Is the synchronous response schema the same as Retrieve Results?">
    Yes. The synchronous endpoint returns the same payload schema as [Retrieve Results](/api-reference/discover/retrieve-results): a `status` field, a `duration_seconds` field and a `results` array. The only difference is that `status` is always `done`, because the results are final when the response returns.
  </Accordion>

  <Accordion title="When should I use the synchronous endpoint instead of the asynchronous one?">
    Use the synchronous endpoint when the result feeds directly into an AI integration such as an agent, a RAG pipeline or a chat backend, and the search completes within 60 seconds. Use the asynchronous endpoint for large or slow searches, batch jobs and background collection.
  </Accordion>

  <Accordion title={<>Why am I getting a <code>403 Forbidden</code> error?</>}>
    Access to the Bright Data Discover API is restricted. It must be manually enabled for your account by your account manager.
  </Accordion>
</AccordionGroup>
