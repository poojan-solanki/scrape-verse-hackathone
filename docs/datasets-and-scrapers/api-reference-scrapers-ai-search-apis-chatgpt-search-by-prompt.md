# Search by prompt

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt](https://docs.brightdata.com/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/chatgpt-search-by-prompt POST /datasets/v3/scrape
Use the Bright Data AI Search API to search by Prompt. POST /datasets/v3/scrape triggers a job that returns structured AI search results as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m7aof0k82r803d5bjm` to collect **ChatGPT Search - Search by Prompt** data.
  </Warning>
</ParamField>

<ParamField type="boolean">
  Whether to send notifications when the request is completed.
</ParamField>

<ParamField type="boolean">
  Whether to include errors in the response.
</ParamField>

## Request Body

<ParamField type="object[]">
  An array of input objects.

  <Expandable title="properties">
    <ParamField type="string">
      The ChatGPT page URL. Must be set to `https://chatgpt.com/`.
    </ParamField>

    <ParamField type="string">
      The search prompt. Each prompt triggers a separate ChatGPT search query. Maximum 4,096 characters.
    </ParamField>

    <ParamField type="string">
      Country from which to perform the search.
    </ParamField>

    <ParamField type="number">
      Unique ID for tracking each crawl request.
    </ParamField>

    <ParamField type="boolean">
      If set to `true` and sources are not found in the page, an error message is returned instead of the record.
    </ParamField>

    <ParamField type="string">
      A follow-up input sent after receiving the first answer, aiming to clarify, expand, or refine the initial response. The result is returned as `additional_answer_text`.
    </ParamField>

    <ParamField type="boolean">
      Permission to run an external web search during the run. If set to `true` (default), the Web Search button is enabled and the model may click it. If `false`, the button is never clicked and the model will not trigger a web search. This field is a **permission, not a guarantee**: setting `true` does not mean a search will happen. Read `web_search_triggered` in the response to know whether a search actually ran. See [Query fan-out and web search control](/datasets/scrapers/concepts/query-fan-out).
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://chatgpt.com/", "prompt": "Top hotels in New York", "country": "us", "web_search": true},
      {"url": "https://chatgpt.com/", "prompt": "What are the biggest business trends to watch in the next five years?"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://chatgpt.com/?q=Top%20hotels%20in%20New%20York",
      "prompt": "Top hotels in New York",
      "answer_text": "Here are some of the top-rated hotels in New York City...",
      "answer_text_markdown": "## Top Hotels in New York City\n\n1. **The Plaza** - Iconic luxury...",
      "answer_html": "<div>...</div>",
      "model": "gpt-4o",
      "web_search_triggered": true,
      "citations": [
        {
          "title": "Best Hotels in NYC 2024",
          "url": "https://www.travelandleisure.com/best-hotels-nyc",
          "position": 1
        }
      ],
      "search_sources": [
        {
          "url": "https://www.travelandleisure.com/best-hotels-nyc",
          "title": "Best Hotels in NYC",
          "favicon": "https://www.travelandleisure.com/favicon.ico"
        }
      ],
      "links_attached": [
        {
          "url": "https://www.theplazany.com",
          "text": "The Plaza",
          "position": 0
        }
      ],
      "recommendations": [],
      "references": [],
      "country": "us",
      "is_map": true,
      "shopping_visible": false,
      "prompt_sent_at": "2024-12-15T10:30:00.000Z",
      "index": null
    }
  ]
  ```
</ResponseExample>
