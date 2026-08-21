# AI web scrapers documentation

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/ai-scrapers](https://docs.brightdata.com/datasets/scrapers/scrapers-library/ai-scrapers)
> **Category**: `datasets-and-scrapers`

---

Use Bright Data AI scrapers across 5 platforms (ChatGPT, Perplexity, Gemini, Grok, Google AI Mode) to retrieve structured prompt responses with citations.

## Overview

Bright Data supports the following AI scrapers:

* [ChatGPT](https://brightdata.com/cp/scrapers/browse?domain=chatgpt.com)
* [Perplexity](https://brightdata.com/cp/scrapers/browse?domain=perplexity.ai)
* [Gemini](https://brightdata.com/cp/scrapers/browse?domain=gemini.google.com)
* [Grok](https://brightdata.com/cp/scrapers/browse?domain=grok.com) <Badge>Currently unavailable</Badge>
* [Google - AI Mode](https://brightdata.com/cp/scrapers/browse?domain=google.com)
* [Copilot](https://brightdata.com/cp/scrapers/browse?domain=copilot.microsoft.com)

Each scraper is designed to handle user prompts and return enriched responses, with varying levels of detail and supporting data.

<div>
  ## How AI Scraping Differs from Traditional SERP Scraping
</div>

AI bot scraping offers a smarter, more efficient alternative to traditional SERP (Search Engine Results Page) scraping. While SERP scraping involves extracting raw HTML from search engine result pages, often requiring complex parsing and frequent maintenance, AI bot scraping uses natural language models to understand the intent behind a query and return structured, context-rich answers.
Key advantages of AI bot scraping over SERP scraping:

* ✅ Understands query context and delivers direct answers
* ✅ Includes citations, sources, and enriched content (e.g., maps, product links)
* ✅ More resilient to UI changes and search engine updates
* ✅ Easier to integrate via official APIs
* ✅ Provides a better user experience with cleaner, more relevant results

In contrast, SERP scraping is limited to surface-level data, often lacks context, and may violate search engine terms of service. AI bot scraping is the modern, scalable solution for intelligent data extraction.

***

| Scraper                                               | Short Description                                                               | Includes                                                                                                                                                                                                                                                    |
| :---------------------------------------------------- | :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT Scraper**                                   | Generates detailed, conversational answers using OpenAI's ChatGPT.              | <ul><li>Hyperlinks</li><li>Citations (when available)</li><li>Product recommendations</li><li>Embedded map data</li><li>[Available countries](https://github.com/brightdata/answer-engines-country-codes/blob/main/chatgpt_countries.csv)</li></ul>         |
| **Perplexity Scraper**                                | Provides concise, well-sourced answers via Perplexity AI, ideal for research.   | <ul><li>Hyperlinked citations for verification</li><li>[Available countries](https://github.com/brightdata/answer-engines-country-codes/blob/main/perplexity_countries.csv)</li></ul>                                                                       |
| **Copilot Scraper**                                   | Offers contextual answers with sources using Microsoft's Copilot                | <ul><li>Hyperlinked citations</li><li>Contextual explanations</li><li>[Available countries](https://github.com/brightdata/answer-engines-country-codes/blob/main/copilot_countries.csv)</li></ul>                                                           |
| **Gemini Scraper**                                    | Delivers informative responses with potential web searches via Google's Gemini. | <ul><li>Web-based citations and sources</li><li>Hyperlinked references (when available)</li><li>[Country targeting](https://github.com/brightdata/answer-engines-country-codes/blob/main/gemini_countries.csv) (European countries not available)</li></ul> |
| **Google AI Scraper**                                 | Collect Google AI mode search results by prompt                                 | <ul><li>[Available countries](https://github.com/brightdata/answer-engines-country-codes/blob/main/google_aimode_countries.csv)</li></ul>                                                                                                                   |
| **Grok Scraper** <Badge>Currently unavailable</Badge> | Collect Grok search results by prompt                                           | <ul><li>Hyperlinked citations</li><li>[Available countries](https://github.com/brightdata/answer-engines-country-codes/blob/main/grok_countries.csv)</li></ul>                                                                                              |

<Note>
  **Web search control varies by scraper.** ChatGPT and Grok support a `web_search` input that allows or disables live web search, and a `web_search_triggered` output that confirms whether a search actually ran. See [Query fan-out and web search control](/datasets/scrapers/concepts/query-fan-out) for full details, plus the availability matrix for Google AI Mode and other LLM Scrapers. Gemini does not currently expose a `web_search` control, the decision is made internally by Gemini and prompt phrasing may influence whether a web search is triggered.
</Note>
