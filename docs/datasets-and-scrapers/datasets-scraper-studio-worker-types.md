# Scraper Studio worker types

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/worker-types](https://docs.brightdata.com/datasets/scraper-studio/worker-types)
> **Category**: `datasets-and-scrapers`

---

Choose between 2 worker types in Bright Data Scraper Studio (Browser worker or Code worker) based on whether your site needs UI interaction or HTTP requests.

Bright Data Scraper Studio runs every scraper on one of two worker types: Browser worker (a real headless browser) or Code worker (raw HTTP requests). Pick the one that matches the minimum level of interaction your target site needs, Code worker is faster and cheaper, so start there and switch only if Code worker cannot reach the data.

## Browser worker vs Code worker

|                             | Browser worker                                                     | Code worker                                          |
| --------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| Execution model             | Headless browser session                                           | Direct HTTP requests (like `curl` or `requests.get`) |
| Runs JavaScript             | Yes                                                                | No                                                   |
| Clicks, scrolls, form input | Yes                                                                | No                                                   |
| Best for                    | Dynamic pages, SPAs, login flows, infinite scroll, GraphQL capture | Static HTML, sitemap crawls, public JSON APIs        |
| Speed                       | Slower (browser startup, full page load)                           | Faster (single HTTP round trip)                      |
| Cost per page load          | Higher                                                             | Lower                                                |

## Should I assign workers per scraper or per stage?

By default, Bright Data Scraper Studio scrapers run in Worker per scraper mode, where every stage shares one worker type. Worker per stage is available to all users and lets you assign a different worker type to each stage.

### When should I use Worker per scraper?

Use Worker per scraper when every stage needs the same worker type:

* **All stages need a Browser worker.** For example, Stage 1 navigates a search page where clicking or typing triggers the results, and Stage 2 scrolls through a dynamic product listing.
* **All stages need a Code worker.** For example, Stage 1 fetches all available URLs and Stage 2 loads each product page directly over HTTP.

### When should I use Worker per stage?

Use Worker per stage when stages have different interaction requirements:

* **Stage 1 needs a Code worker.** For example, fetching a list of product URLs from a category page.
* **Stage 2 needs a Browser worker.** For example, loading each product page that renders its price and reviews client-side with JavaScript.

Assigning the right worker to each stage avoids starting a full browser session where it is not needed, which reduces runtime.

### How do I configure Worker per stage?

1. Open your scraper in the Bright Data Scraper Studio IDE.
2. In the **Settings** dropdown, turn on **Worker per stage**.
3. For each stage, set the **Worker** to **Browser worker** or **Code worker**.
4. Save your scraper.

If you assign a Code worker to a stage that calls browser-only functions such as `wait`, `click` or `scroll_to`, Bright Data Scraper Studio throws an `Incompatible worker` error:

```text theme={null}
Click function is not supported for worker type = Code. To use it you should change the code settings to worker type = Browser.
```

For the full list of browser-only functions, see [Which functions are Browser worker](https://docs.brightdata.com/datasets/scraper-studio/functions#browser-only-functions)?

## When should I use Browser worker?

Use Browser worker when any of the following is true:

* The target data is rendered client-side by JavaScript and is not present in the raw HTML response
* You need to click, scroll, hover, or type to reach or reveal the data
* You need to solve a cookie banner or dismiss a popup before the content renders
* You need to capture network traffic with `tag_response`, `tag_script`, or `capture_graphql`
* You need to log in, hold a session, or interact with a form

## When should I use Code worker?

Use Code worker when all of the following are true:

* The full target data is present in the raw HTML response or in a public JSON endpoint
* No JavaScript execution is required to render the data
* No click, scroll, or type interaction is required
* You are crawling sitemaps, RSS feeds, or API endpoints

<Tip>
  Start with Code worker. If the data you need is not in the raw response, switch to Browser worker. You can change worker type on the same scraper at any time.
</Tip>

## Which functions are Browser worker?

Some Bright Data Scraper Studio functions depend on a live browser session and throw an error when called from a Code worker. The table below shows common examples of browser worker-only functions, not the full list. For the complete and up-to-date function list, see **[<u>Scraper Studio functions</u>](https://docs.brightdata.com/datasets/scraper-studio/functions#browser-only-functions).**

| Category                 | Functions                                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Waiting on the DOM       | `wait`, `wait_any`, `wait_for_text`, `wait_hidden`, `wait_visible`, `wait_network_idle`, `wait_page_idle`                                                        |
| Scrolling                | `scroll_to`, `scroll_to_all`, `load_more`                                                                                                                        |
| Traffic tagging          | `tag_response`, `tag_all_responses`, `tag_script`, `tag_image`, `tag_video`, `tag_screenshot`, `tag_download`, `tag_window_field`, `tag_serp`, `capture_graphql` |
| Keyboard and mouse input | `click`, `right_click`, `hover`, `mouse_to`, `press_key`, `type`                                                                                                 |
| Browser configuration    | `browser_size`, `emulate_device`, `freeze_page`, `emulate_geolocation`                                                                                           |
| Anti-bot                 | `solve_captcha`, `close_popup`                                                                                                                                   |

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Can I switch worker type after building the scraper?">
    Yes. Open the scraper in the Bright Data Scraper Studio IDE and change the worker type in the **Settings** panel. If you switch from Browser worker to Code worker, remove any calls to the browser-only functions listed above or the scraper will throw an error on the next run.
  </Accordion>

  <Accordion title="Is Code worker really faster than Browser worker?">
    Yes. Code worker issues a single HTTP request with no browser boot and no page render, so the round trip completes in a fraction of the time a browser-worker run takes. The exact speedup depends on the target site, but Code worker jobs typically finish in seconds.
  </Accordion>

  <Accordion title="Does Browser worker support capturing background API calls?">
    Yes. Use `tag_response` or `tag_all_responses` to capture any XHR or fetch the page makes, and `capture_graphql` to capture and replay GraphQL queries. See [Scraper Studio functions](/datasets/scraper-studio/functions) for the full reference.
  </Accordion>
</AccordionGroup>

## Related

<CardGroup>
  <Card title="Scraper Studio functions" icon="code" href="/datasets/scraper-studio/functions">
    Full reference for interaction and parser commands
  </Card>

  <Card title="Best practices" icon="list-check" href="/datasets/scraper-studio/best-practices">
    Recommended patterns for writing efficient scrapers
  </Card>
</CardGroup>
