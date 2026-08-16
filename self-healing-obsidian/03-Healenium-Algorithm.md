---
tags: [healenium, algorithm, dom, locator-healing]
---

# Healenium: Low-Level Healing Algorithm

This note traces the part that turns a failed Selenium locator into a candidate element. It complements [[02-Healenium-System]].

## 1. Capture a historical representation on success

On a successful original lookup, `NodeService` runs `itemsWithAttributes.js` against the real `WebElement`.

The JavaScript walks from that element upward to `document`. For every ancestor it captures:

```json
{
  "tag": "button",
  "id": "checkout",
  "index": 2,
  "classes": ["btn", "primary"],
  "other": {"data-test": "checkout"},
  "innerText": "Checkout"
}
```

The ordered root-to-element sequence is the reference **path**. Notably, it contains:

- sibling index among `previousElementSibling` nodes;
- tag, id, class set, other attributes, and inner text;
- the current `window.location.href`.

This is richer than saving only a CSS selector. A class rename may break the old locator, while the surrounding ancestor structure and other attributes remain similar.

## 2. Fail normally before healing

`FindElementProcessor` calls `driver.findElement(originalBy)` first. Only a `NoSuchElementException` enables the `findElement` healing path. Thus the ordinary Selenium execution is still the fast path.

For `findElements`, the library has a separate multi-element chain and can be configured to allow automatic healing.

## 3. Retrieve reference paths and parse the new page

On failure, `GetReferenceElementsProcessor` fetches stored paths and previous unsuccessful locators from the backend. `HealingProcessor` obtains the current `document.body.outerHTML` (or Selenium page source), parses it using `JsoupHTMLParser`, and converts it to the tree-comparing `Node` form.

The current implementation calls:

```text
PathFinder(
  LCSPathDistance,
  HeuristicNodeDistance
).findScoresToNodes(referencePath, currentDom)
```

### What is verified versus inferred

Verified from the client source:

- it uses `LCSPathDistance` and `HeuristicNodeDistance` from the `tree-comparing` dependency;
- it computes a score map for the stored path against current DOM nodes;
- it sorts candidates, limits candidate search to 1,000, and applies configured `score-cap` filtering.

Not claimed here: the exact internal weights/formula inside `tree-comparing`. That implementation is an external Maven dependency, not included in the cloned `healenium-web` source. Do not treat a score as calibrated probability without evaluating it on your target pages.

## 4. Convert structurally similar nodes into executable selectors

For each sorted node, `HealingService.toLocator()` tries:

1. an XPath candidate only when the optional XPath mode is configured;
2. deterministic CSS construction at several progressively detailed levels:
   - tag + id;
   - tag + class;
   - parent + tag + id/class;
   - parent + position;
   - parent + tag + id/class + attributes;
   - full path.

Each candidate is executed against the live browser. It survives only when:

- it is not among known unsuccessful locators;
- it resolves to exactly one element;
- that element has not already been selected in this healing attempt.

This **execute-and-uniqueness filter** matters. The structural similarity score proposes nodes; browser resolution rejects ambiguous selectors.

## 5. Candidate selection and imitation

The service retains up to configured `recovery-tries` healed elements. The immediate return path ultimately uses the first candidate.

`ImitateProcessor` then sends the top candidate node plus the user’s original locator to the selector-imitator service. The engine tests returned locators against the browser and replaces the stored candidate only when a returned locator uniquely resolves to the exact same remote browser element ID.

This can make the reported replacement closer to the original selector style. It is a selector-expression step, separate from DOM-similarity search.

## 6. Evidence emitted

For a repair, `FillMetricsProcessor` and `SaveHealingResultsProcessor` record:

- current DOM string;
- original user locator;
- reference target node;
- leading and alternate candidates;
- selected locator and score;
- browser element IDs;
- screenshot, optionally with a red border;
- session/report metadata.

This is better observability than a silent auto-retry. However, the evidence is focused on element identity, not data semantics.

## Failure modes when applied to scraping

| Scenario | Why DOM similarity can fail | Required additional check |
|---|---|---|
| Repeated product cards | Several cards have similar path/attributes | bind to canonical product URL or identifier |
| Price redesign | “Current price” and “was price” are structurally similar | parse/compare price labels and historical range |
| Content reorder | sibling index changes everywhere | rely more on semantic attributes and text |
| A/B test | two layouts exist concurrently | record layout fingerprint and validate both |
| Cookie/modal overlay | target path exists but click is blocked | classify interaction state; do not mutate extractor |

The recommended solution is in [[08-Scraper-Blueprint]].

