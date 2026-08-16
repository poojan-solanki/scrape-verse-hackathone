---
tags: [self-healing, scraping, safety, observability]
---

# Core Concepts

## Intent versus implementation

An automation has an **intent** and an **implementation**.

| Layer | Example |
|---|---|
| Intent | “Return the current product price as `Decimal` and ISO currency.” |
| UI implementation | “Click this element using `button.buy-now`.” |
| Extraction implementation | “Read `span.price` from each product card.” |
| Contract | “Price is non-null, positive, typed, and belongs to this product URL.” |

A website redesign often invalidates the implementation without invalidating the intent. Healing is the controlled procedure that rebinds the same intent to a changed implementation.

## Scraping is not only locator lookup

Browser-test libraries typically heal an **interaction locator**. A scraper must also preserve the **meaning and quality of extracted data**. Therefore a scraping repair needs two independent proofs:

```text
candidate selector runs successfully
              AND
candidate value satisfies the field contract
```

Example: `div.price` still resolves to one element after a redesign, but that element may now be a “from $10” marketing hint instead of the product’s actual price. Locator success is insufficient.

See [[03-Healenium-Algorithm]] for the locator-only case and [[08-Scraper-Blueprint]] for the field-contract layer.

## Failure taxonomy

Classify before attempting repair. Treating every error as locator drift produces dangerous “heals.”

| Failure class | Signal | Correct action |
|---|---|---|
| Transport | DNS, timeout, 5xx | bounded retry/backoff; do not change selectors |
| Rate limit | 429 / explicit limit | slow down, schedule later; do not bypass limits |
| Access restriction | login, consent wall, CAPTCHA, blocked response | stop and report; this is not a repair task |
| Render timing | SPA still loading, element detached | wait/retry with a bounded condition |
| Locator drift | old selector has no match or too many matches | discover and test a new selector |
| Data-location drift | field moved into JSON-LD, embedded state, or an authorized API | change extractor strategy |
| Semantic drift | selected value has wrong meaning | reject the candidate and request review |

The Playwright project explicitly separates environmental errors from locator errors; see [[04-Playwright-Agent-System]].

## The safety invariant: fail safely, not silently

The core risk is **silent data corruption**. A mature system should preserve this invariant:

> It may auto-promote a repair only when independent evidence shows the new output meets the prior field-level contract. Otherwise it creates a reviewable proposal.

Useful evidence includes:

- pre/post DOM or accessibility snapshots;
- old and candidate selectors;
- sample records before/after repair;
- schema checks and field-level confidence;
- historical range/distribution checks;
- an immutable repair version and rollback pointer.

Bright Data’s preview + approval state supplies some of this governance; see [[06-BrightData-Workflow]].

## Four recovery styles

1. **Resilient-by-design locators** — semantic role/label or explicit test hooks reduce breakage before a healing system is needed.
2. **Similarity search** — compare current DOM with a stored historical representation. Healenium uses this style.
3. **Semantic discovery** — derive a candidate from roles, accessible names, text, and attributes. The Playwright Scout uses this style.
4. **AI code refactoring** — supply failure context and let a hosted or local model propose extraction-code changes. Bright Data and the Playwright agent support variants of this.

Good systems use them in that order: cheap deterministic paths first; expensive AI only for bounded recovery.

Next: [[07-Comparison-and-Decision]].

