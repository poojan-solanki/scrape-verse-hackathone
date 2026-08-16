# Collect Google SERP 100 Results by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-serp-100-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/search-engines-apis/google-serp-100-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect up to 100 organic Google search results per query. POST /datasets/v3/scrape returns results as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_mfz5x93lmsjjjylob` to collect **Google SERP 100 results by URL**.
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
      The Google Search URL to scrape.
    </ParamField>

    <ParamField type="string">
      The search keyword used in the query.
    </ParamField>

    <ParamField type="string">
      Google `tbm` (to-be-matched) parameter. Leave empty for web results, or set to `isch` for images, `nws` for news, etc.
    </ParamField>

    <ParamField type="string">
      Language code (e.g., `en`, `es`, `de`).
    </ParamField>

    <ParamField type="string">
      UULE parameter for geographic targeting.
    </ParamField>

    <ParamField type="string">
      Device targeting. Leave empty for desktop, set to `1` for mobile.
    </ParamField>

    <ParamField type="string">
      Google `tbs` parameter for time-based filtering (e.g., `qdr:d` for past day).
    </ParamField>

    <ParamField type="string">
      Set to `1` to disable Google's auto-correct.
    </ParamField>

    <ParamField type="string">
      Result index / starting position.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "url": "https://www.google.com/search?q=best+coffee+nyc",
        "keyword": "best coffee nyc",
        "tbm": "",
        "language": "en",
        "uule": "",
        "brd_mobile": "",
        "tbs": "",
        "nfpr": "",
        "index": ""
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "keyword": "best coffee nyc",
      "results": [
        {
          "position": 1,
          "title": "The 38 Best Coffee Shops in NYC",
          "link": "https://example.com/best-coffee-nyc",
          "display_link": "example.com",
          "description": "Our picks for the top coffee shops in New York City."
        }
      ],
      "total_results": 100
    }
  ]
  ```
</ResponseExample>
