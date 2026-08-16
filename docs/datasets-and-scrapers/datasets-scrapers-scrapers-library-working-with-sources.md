# Working with sources in AI scrapers

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/working-with-sources](https://docs.brightdata.com/datasets/scrapers/scrapers-library/working-with-sources)
> **Category**: `datasets-and-scrapers`

---

Work with citation sources in Bright Data AI scrapers across 5 platforms: source generation, handling source errors and prompting for verifiable output.

## What are “Sources” in AI Scrapers?

Some AI scrapers can return citations / hyperlinks (“sources”) alongside the generated answer. Sources are useful when you need:

* Verifiable references for claims
* Links to original pages for auditing / compliance
* Research-style outputs (e.g., summaries with citations)

<Warning>
  Sources availability depends on whether the underlying AI product decides to use web search / browsing for that specific request.
</Warning>

<Tip>
  All our LLMs attempt to include sources in their responses. Some models provide an option to return an error if sources can’t be retrieved. For certain scrapers, sources are only returned if you explicitly enable the “source” option.
</Tip>

## How sources are generated

When you run an AI scraper with a prompt:

1. We send your prompt to the selected AI engine (e.g., ChatGPT).

2. The AI engine decides-based on its internal policies and runtime conditions-whether to:

   * answer from its existing knowledge, or
   * perform a web search and attach citations/sources.

3. If web search is used, sources/citations are returned in the response (when available).

4. If web search is not used, the answer may be returned without sources.

## What is a “Sources error”?

A Sources error typically means the run completed but the engine did not provide sources as expected (for example, the engine chose not to browse, browsing was unavailable, or citations weren’t returned for that request/country/version).

## Prompting best practices to increase the chance of getting sources

Because web-search and citations are influenced by the engine’s internal decisioning, prompt phrasing can materially impact whether sources appear.

Recommended tactics:

* Explicitly request sources/citations
  > **Example**: “Include sources with links for each key claim.”

* Ask for web-verified / up-to-date information
  > **Example**: “Use web search and cite sources from the last 12 months.”

* Request a citations section
  > **Example**: “At the end, add a ‘Sources’ section with URLs.”

* If you get missing sources, try a revised prompt rather than re-running the exact same prompt.
  * In our testing, changing the prompt can increase the likelihood of web search and returning sources.
