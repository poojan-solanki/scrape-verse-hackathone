# Query fan-out and web search control

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/concepts/query-fan-out](https://docs.brightdata.com/datasets/scrapers/concepts/query-fan-out)
> **Category**: `datasets-and-scrapers`

---

Use the web_search input to control whether LLM scrapers run a web search and read web_search_triggered (1 = a search ran for the request) to confirm.

Query fan-out is the mechanism Bright Data LLM Scrapers use to control and report external web search activity during a run. Use the `web_search` input to decide whether a web search is allowed, and read the `web_search_triggered` output field to know whether a web search actually occurred.

<Note>
  `web_search` is a **permission**. `web_search_triggered` is the **actual behavior**. They are not the same, set `web_search: true` and the model may still decide not to search; set `web_search: false` and `web_search_triggered` will always return `false`.
</Note>

## Which scrapers support query fan-out

| LLM Scraper                                        | Query fan-out support |
| :------------------------------------------------- | :-------------------- |
| [ChatGPT](/datasets/scrapers/chatgpt/introduction) | Available             |
| Grok                                               | Available             |

Gemini does not currently expose a `web_search` control. The decision to search the web is made internally by Gemini and cannot be forced or disabled from the scraper input.

## Input: `web_search`

| Field        | Type    | Required | Default | Meaning                                               |
| :----------- | :------ | :------- | :------ | :---------------------------------------------------- |
| `web_search` | boolean | No       | `true`  | Controls whether web search is allowed during the run |

**Values**

* `true` or omitted: web search is allowed. The scraper enables the Web Search button in the LLM UI and the model may choose to use it.
* `false`: web search is disabled. The scraper does not enable the Web Search button, and the model will not trigger a search.

## Output: `web_search_triggered`

| Field                  | Type    | Always returned | Meaning                                                                                                       |
| :--------------------- | :------ | :-------------- | :------------------------------------------------------------------------------------------------------------ |
| `web_search`           | boolean | No              | Echoes the input value (defaults to `true` if omitted). Does not indicate whether a search actually happened. |
| `web_search_triggered` | boolean | Yes             | `true` only if the model actually triggered a web search during the run; `false` otherwise.                   |

Use `web_search_triggered` when you need to confirm whether the model's answer was grounded in live web results.

## Example: disable web search

The request below passes `web_search: false` to force an offline answer.

```bash theme={null}
curl -X POST "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&notify=false&include_errors=true" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": [
      {
        "url": "https://chatgpt.com/",
        "prompt": "Top hotels in New York",
        "country": "",
        "web_search": false,
        "additional_prompt": ""
      }
    ]
  }'
```

**What to expect**

* The response includes `web_search: false`.
* The response includes `web_search_triggered: false` because searching was not allowed.

## How to interpret results

### When `web_search_triggered` is `true`

A response with `web_search_triggered: true` means the model actually ran an external web search during the run. If the response also includes prompt-derived structured fields (for example `is_map: true` with a populated map payload, or `citations`), those fields were produced from live search results.

### Why `map` can be `null` even when search happened

Even if `web_search_triggered: true`, fields like `map` or `citations` can still be empty or `null`. The reason:

* `web_search_triggered` only tells you whether web search **ran**.
* Fields like `map`, `shopping_visible`, and `citations` reflect what the model **chose to output**, which depends on the prompt and the model's final answer format.

Do not use output fields like `map` as proof that web search happened. Use `web_search_triggered` for that.

## Summary

* Set `web_search` on the input to control whether web search is **allowed**.
* Read `web_search_triggered` on the output to know whether web search **actually occurred**.
* Do not rely on prompt-derived output fields (`map`, `citations`, `shopping_visible`) as a signal that a web search ran. Those fields depend on the prompt and the model's response format, not on search activity.

## See also

* [ChatGPT Scraper API introduction](/datasets/scrapers/chatgpt/introduction)
* [Send your first ChatGPT search request](/datasets/scrapers/chatgpt/send-first-request)
* [ChatGPT Search by prompt API reference](/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt)
* [AI Scrapers overview](/datasets/scrapers/scrapers-library/ai-scrapers)
