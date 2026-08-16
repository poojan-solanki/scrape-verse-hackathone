---
tags: [self-healing, web-scraping, browser-automation, obsidian, moc]
---

# Self-Healing Automation — Obsidian Vault

This vault is a source-level study of three different implementations of “self-healing”:

- [[02-Healenium-System]] and [[03-Healenium-Algorithm]] — historical DOM-path similarity with Selenium.
- [[04-Playwright-Agent-System]] and [[05-Playwright-Agent-Healing]] — a selector-health registry, accessibility/DOM discovery, and bounded AI code generation.
- [[06-BrightData-Workflow]] — hosted asynchronous scraper refactoring with a review gate.

Start at [[00-Map-of-Content]].

## Use in Obsidian

1. Open this folder as an Obsidian vault.
2. Open **Graph view**. The `[[wiki links]]` are intentional graph edges.
3. Turn on tags if you want cross-cutting clusters such as `#algorithm`, `#observability`, and `#safety`.
4. Follow [[09-Evidence-and-Reproduction]] when you want to jump from the report to the locally cloned source code.

## Important reading rule

“Self-healing” has a narrow, testable meaning only when all three steps exist:

1. detect that a previous implementation no longer meets an intent;
2. propose or select a replacement implementation;
3. verify the replacement did not silently change the meaning of the operation.

The first two steps are present in every project studied here. The third is where most systems need strengthening for real web-scraping workloads. See [[01-Core-Concepts]] and [[07-Comparison-and-Decision]].

