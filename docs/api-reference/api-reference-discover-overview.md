# Discover API

> **Official Source**: [https://docs.brightdata.com/api-reference/discover/overview](https://docs.brightdata.com/api-reference/discover/overview)
> **Category**: `api-reference`

---

POST https://api.brightdata.com/discover
The Bright Data Discover API retrieves search results and automatically evaluates their relevance based on an AI-driven intent parameter. Covers 31 languages.

## Introduction to Discover API

> Collect search results at scale for you, instead of wasting time and effort on filtering or processing irrelevant results

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

<RequestExample>
  ```bash cURL: json theme={null}
  curl "https://api.brightdata.com/discover" \
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
  curl "https://api.brightdata.com/discover" \
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

  url = "https://api.brightdata.com/discover"
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

  # Trigger the discovery task
  response = requests.post(url, json=payload, headers=headers)
  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch("https://api.brightdata.com/discover", {
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

  ```py Python SDK theme={null}
  # Install: pip install brightdata-sdk
  import asyncio
  from brightdata import BrightDataClient

  async def main():
      async with BrightDataClient(api_key="YOUR_API_KEY") as client:
          result = await client.discover(
              query="AI trends 2026",
              intent="latest technology developments",
          )
          # result.data -> [{ title, link, description, relevance_score }]
          print(result.data)

  asyncio.run(main())
  ```

  ```js JavaScript SDK theme={null}
  // Install: npm install @brightdata/sdk
  import { bdclient } from '@brightdata/sdk';

  const client = new bdclient({ apiKey: 'YOUR_API_KEY' });

  const result = await client.discover('AI trends 2026', {
    intent: 'latest technology developments',
  });
  // result.data -> [{ title, link, description, relevance_score }]

  await client.close();
  ```
</RequestExample>

<ResponseExample>
  ```json theme={null}
  {
    "status": "ok",
    "task_id": "bde85a92-3232-4f26-98f6-5ed0328b8288"
  }
  ```
</ResponseExample>

## Errors

| Status | Error Message                                                            | Trigger                                                                                                     | Resolution                                                                         |
| :----- | :----------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| 400    | `{"error":"Missing query"}`                                              | query is missing, empty, or null                                                                            | Provide a non-empty string in the query field.                                     |
| 400    | `{"error":"Invalid query. Max length is 1500 chars"}`                    | query exceeds 1,500 characters, or is a non-string type (number, array)                                     | Provide a string of 1,500 characters or fewer.                                     |
| 400    | `{"error":"Invalid intent. Max length is 3000 chars"}`                   | intent exceeds 3,000 characters, or is a non-string type                                                    | Provide a string of 3,000 characters or fewer, or omit to use query as the intent. |
| 400    | `{"error":"Unsupported format. Only \"md\" and \"json\" are supported"}` | format is not "json" or "md" (e.g. "markdown", "xml", "csv", empty string, or non-string type)              | Set format to "json" or "md".                                                      |
| 400    | `{"error":"Invalid num_results. Must be a number between 1 and 20"}`     | num\_results is 0, negative, greater than 20, or a non-number type                                          | Provide an integer between 1 and 20.                                               |
| 400    | `{"error":"Invalid filter_keywords. Must be an array of strings"}`       | filter\_keywords is not an array (e.g. a string)                                                            | Provide an array of strings, e.g. \["keyword1", "keyword2"].                       |
| 400    | `{"error":"Invalid start_date"}`                                         | start\_date is not in YYYY-MM-DD format, is a non-string type, is in the future, or start\_date > end\_date | Provide a valid past or present date in YYYY-MM-DD format.                         |
| 400    | `{"error":"Invalid end_date"}`                                           | end\_date is not in YYYY-MM-DD format or is a non-string type                                               | Provide a valid date in YYYY-MM-DD format.                                         |
| 400    | `{"error":"Unsupported country"}`                                        | country is a string but not a valid ISO 3166-1 alpha-2 code                                                 | Use a valid 2-letter country code (e.g. "US", "IL", "DE").                         |
| 400    | `{"error":"Unexpected fields: <field_names>"}`                           | Request body contains unrecognized field names                                                              | Remove unexpected fields. Only use documented parameters.                          |
| 401    | Credentials are missing                                                  | No Authorization header provided                                                                            | Add `Authorization: Bearer <token>` header.                                        |
| 401    | Invalid credentials                                                      | Token in Authorization header is invalid                                                                    | Provide a valid API token.                                                         |
| 401    | Auth method is not supported                                             | Authorization header is missing the Bearer prefix                                                           | Use the format `Authorization: Bearer <token>`.                                    |
| 403    | Forbidden                                                                | Discover API is not enabled for your account                                                                | Contact your account manager to enable the Discover API.                           |
| 404    | `{"error":"Task not found"}`                                             | GET request with a `task_id` that doesn't exist                                                             | Verify the `task_id` returned from the POST request.                               |
| 429    | Too Many Requests                                                        | Rate or concurrency limit exceeded                                                                          | Slow down requests or upgrade your plan.                                           |
| 500    | Internal Server Error                                                    | Server-side issue                                                                                           | Retry after a few seconds.                                                         |

## FAQs

<AccordionGroup>
  <Accordion title={<>What is the difference between <code>query</code> and <code>intent</code>?</>}>
    `query` is the exact string submitted to Google's search engine. `intent` is the instruction given to the Bright Data AI to evaluate and rank the relevance of those results before returning them to you.

    Think of `query` as what you type into Google, and `intent` as the brief you give to a research analyst explaining what you actually need and what to ignore. The more specific the intent, the more relevant your results.
  </Accordion>

  <Accordion title={<>Why am I getting a <code>403 Forbidden</code> error?</>}>
    Access to the Bright Data Discover API is restricted. It must be manually enabled for your account by your account manager.
  </Accordion>
</AccordionGroup>
