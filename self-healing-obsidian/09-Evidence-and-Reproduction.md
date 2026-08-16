---
tags: [evidence, repositories, reproducibility, code-review]
---

# Evidence and Reproduction

This report is based on local source review, not only README claims. The clones are under the project’s `work/` directory.

## Revisions examined

| Repository | Revision reviewed | Role in report |
|---|---|---|
| `healenium/healenium` | `328fececb3510fb098bd030e1cc6e8edddb280e7` | Docker/service topology |
| `healenium/healenium-web` | `c1e4f83d8995c2928ea1e09e721a7ac9f421bd69` | Java interception and DOM-similarity client |
| `Karthick-1501/playwright-agent` | `d2543126f1e0735bfa16d8716a0edcb001dbfa31` | registry/Scout/orchestrator implementation |
| `brightdata/cli` | `00052495cc8713765e4546f6814e8e4c432ab2f6` | official refactor workflow client |

## Principal files traced

### Healenium

- `src/main/java/com/epam/healenium/SelfHealingDriver.java`
- `.../handlers/proxy/SelfHealingProxyInvocationHandler.java`
- `.../handlers/proxy/BaseHandler.java`
- `.../config/ProcessorConfig.java`
- `.../processor/FindElementProcessor.java`
- `.../processor/GetReferenceElementsProcessor.java`
- `.../processor/HealingProcessor.java`
- `.../processor/HealingElementsProcessor.java`
- `.../processor/ImitateProcessor.java`
- `.../processor/FillMetricsProcessor.java`
- `.../processor/SaveHealingResultsProcessor.java`
- `.../service/NodeService.java`
- `.../service/HealingService.java`
- `.../client/RestClient.java`
- `src/main/resources/itemsWithAttributes.js`

### Playwright agent

- `src/pages/BasePage.js`
- `src/registry/registry-manager.js`
- `src/registry/heal.js`
- `src/agent/scout.js`
- `src/agent/orchestrator.js`
- `src/agent/cli.js`
- `tests/registry-manager.test.js`
- `tests/heal.test.js`

### Bright Data CLI

- `src/commands/scraper.ts`
- `src/types/scraper.ts`
- `src/utils/polling.ts`
- `src/utils/client.ts`

## Local verification performed

The Playwright project’s lightweight registry/healing test suites were run without invoking an external website or LLM:

```text
node tests/registry-manager.test.js → 85 passed, 0 failed
node tests/heal.test.js             → 52 passed, 0 failed
```

These confirm the stated thresholds, quarantine behavior, candidate filtering, source tagging, and registry-update behavior as implemented in this revision.

## Source limitations

- The internal code for Healenium’s Maven dependency `tree-comparing` was not bundled in the cloned `healenium-web` repo. This report names its APIs (`LCSPathDistance`, `HeuristicNodeDistance`, `PathFinder`) and behavior observable from callers, but does not invent unverified scoring weights.
- Bright Data’s hosted refactoring model/service is not present in the CLI source. This report documents the CLI’s requests, polling, state, and approval behavior—not private server-side model internals.
- The Playwright project is an educational/open-source framework. Its passing unit tests verify its local registry logic, not reliability across arbitrary production websites.

## Official external references

- [Healenium](https://github.com/healenium/healenium)
- [Healenium Web](https://github.com/healenium/healenium-web)
- [Playwright AI Agent](https://github.com/Karthick-1501/playwright-agent)
- [Bright Data CLI](https://github.com/brightdata/cli)
- [Bright Data Self-Healing documentation](https://docs.brightdata.com/datasets/scraper-studio/self-healing-tool)
- [Playwright locator guidance](https://playwright.dev/docs/locators)

Return to [[00-Map-of-Content]].

