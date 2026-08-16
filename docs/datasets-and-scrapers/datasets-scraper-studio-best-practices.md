# Scraper Studio IDE best practices

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/best-practices](https://docs.brightdata.com/datasets/scraper-studio/best-practices)
> **Category**: `datasets-and-scrapers`

---

Bright Data Scraper Studio IDE best practices for dead page detection, request batching, pagination, popups, tagged responses, timeouts and retries.

This guide shows the coding patterns the Bright Data Scraper Studio team recommends for writing fast, reliable scrapers in the IDE. Each section contrasts a common mistake with the preferred pattern and explains the reason.

## How do I detect dead pages reliably?

When using `navigate()`, add a `dead_page()` condition so the scraper does not retry pages that do not exist. Bright Data Scraper Studio automatically marks HTTP 404 responses as dead, but many sites return 200 with a "not found" template, so you must check for that yourself.

Do not wrap `wait()` in a `try/catch` and call `dead_page()` from the `catch` block. A thrown `wait()` only tells you the selector did not appear within the timeout, not that the page is actually dead.

<CodeGroup>
  ```js Bad theme={null}
  try {
    // Waits 30 seconds for 'ok-selector' even if the page is already dead
    wait('ok-selector');
  } catch (e) {
    // You cannot prove the page is dead from a wait timeout alone
    dead_page("Page doesn't exist");
  }
  ```

  ```js Good theme={null}
  wait('ok-selector, 404-selector');
  if (el_exists('404-selector'))
    dead_page();
  ```
</CodeGroup>

## How do I minimize requests to the browser?

Interaction commands like `click`, `type`, `el_exists`, `el_is_visible`, `wait`, and `wait_visible` each send a request to the browser. Combine selectors into a single call instead of chaining several calls.

<CodeGroup>
  ```js Bad theme={null}
  if (!(el_exists('#price1')) || el_exists('#price2')
    || el_exists('#price3') || el_exists('#discount'))
  {
      dead_page('No price found');
  }
  ```

  ```js Good theme={null}
  if (!el_exists('#price1, #price2, #price3, #discount'))
    dead_page('No price found');
  ```
</CodeGroup>

## How do I paginate without blocking parallelization?

When a site has paginated results and you want data from every page, call `rerun_stage()` once from the root page for every page you need. Do not call `rerun_stage()` from inside each page as you walk the pagination: that serializes the work and Bright Data Scraper Studio cannot parallelize the requests.

<CodeGroup>
  ```js Bad theme={null}
  navigate(input.url);
  let $ = load_html(html());
  let next_page_url = $('.next_page').attr('href');
  rerun_stage({url: next_page_url});
  ```

  ```js Good theme={null}
  let url = new URL(input.url);
  if (input.page)
      url.searchParams.set('page', input.page);
  navigate(url);
  // input.page only exists when this stage was re-run for a specific page.
  // On the root page it's undefined, so we fall through to fan out.
  if (input.page)
      return;

  let $ = load_html(html());
  let total_products = +$('.total_pages').text();
  let total_pages = Math.ceil(total_products / 20);
  total_pages = Math.min(total_pages, 50);

  for (let page = 2; page <= total_pages; page++)
      rerun_stage({url: input.url, page});
  ```
</CodeGroup>

Avoid collecting all pages in a single session. Each session has a 16MB result size limit, and that limit counts the total accumulated data in the session, including all collected lines, parsed results, children and parser metadata, not just the size of the rendered page. Calling `rerun_stage({url: input.url, page})` once per page processes one page per session and keeps each session within the limit.

## How do I close popups without waiting for them?

Use `close_popup('popup_selector', 'close_button_selector')` to register a background watcher that closes popups whenever they appear. Do not poll for a popup with `wait_visible()` before each interaction: popups can appear at any time, and explicit waits add latency on every step.

<CodeGroup>
  ```js Bad theme={null}
  navigate('https://example.com');
  try {
    wait_visible('.cky-btn-accept', {timeout: 5000});
    click('.cky-btn-accept');
  } catch (e) {
      console.log('Accept cookies button does not exist, continue');
  }
  ```

  ```js Good theme={null}
  // Runs in the background with no per-step latency.
  // The watcher checks for the popup before every interaction automatically.
  close_popup('.cky-btn-accept', '.cky-btn-accept');
  navigate('https://example.com');
  click('.open-product-full-info');
  ```
</CodeGroup>

## How do I wait for a tagged response before parsing?

When you use `tag_response()` to capture a background API call, follow it with `wait_for_parser_value()` to make sure the request has finished before you read `parser`. Without the wait, the parser may run before the response has arrived and `parser.<field>` will be `undefined`.

<CodeGroup>
  ```js Bad theme={null}
  tag_response('product', /api\/product/);
  navigate('https://example.com');

  // Parser code:
  // The request may not have finished yet; product could be undefined
  let {product} = parser;
  return product.data;
  ```

  ```js Good theme={null}
  tag_response('product', /api\/product/);
  navigate('https://example.com');
  wait_for_parser_value('product');

  // Parser code:
  let {product} = parser;
  return product.data;
  ```

  ```js Good (chained navigation) theme={null}
  tag_response('product', /api\/product/);
  navigate('https://example.com');

  // wait_for_parser_value returns the value so you can use it in interaction code
  let product = wait_for_parser_value('product');
  navigate(product.reviews_url);
  tag_html('reviews_html');

  // Parser code:
  let {product, reviews_html} = parser;
  let $ = load_html(reviews_html);
  let reviews = $('.review').toArray().map(v => $(v).text());
  return {
    ...product.data,
    reviews,
  };
  ```
</CodeGroup>

## Should I throw custom error messages?

No. Let built-in errors from Bright Data Scraper Studio bubble up. They include the selector, the timeout, and the stage, which is more useful than a hand-written "Page not loaded properly". Only throw a custom error when you are checking a domain-specific condition that Bright Data Scraper Studio cannot detect on its own, such as a missing product title.

<CodeGroup>
  ```js Bad theme={null}
  try {
    wait('selector1');
    // some code
    wait('selector2');
    // some code
  } catch (e) {
    throw "Page not loaded properly"
  }
  ```

  ```js Good theme={null}
  // Crawler error: waiting for selector "selector1" failed: timeout 30000ms exceeded
  wait('selector1');
  // some code
  wait('selector2');
  // some code
  ```

  ```js Good (domain-specific check) theme={null}
  if (!el_exists('.product-title'))
      throw new Error('Failed to load product page');
  ```
</CodeGroup>

## How do I handle slow websites without over-extending timeouts?

Keep the default 30-second timeout for most waits. If a specific page is consistently slow, raise it to 45 or 60 seconds. Do not push beyond 60 seconds: a slower peer is usually the cause, and Bright Data Scraper Studio automatically retries with a fresh peer session when a page reports a timeout error.

<CodeGroup>
  ```js Bad theme={null}
  // 120 seconds is too long; the platform cannot recycle a stuck peer
  wait('selector', {timeout: 120000});
  ```

  ```js Good theme={null}
  wait('selector');                       // default 30 seconds
  wait('selector', {timeout: 45000});     // 45 seconds for slightly slow pages
  wait('selector', {timeout: 60000});     // 60 seconds for consistently slow pages
  ```
</CodeGroup>

## Should I build my own retry loop?

No. Bright Data Scraper Studio handles retries at the job level with a new peer session. A custom retry loop inside your scraper reuses the same session, which is the reason the first attempt failed. Report the error and let Bright Data Scraper Studio retry.

<CodeGroup>
  ```js Bad theme={null}
  let counter = input.counter || 5;
  while (counter > 1) {
    try {
      wait('selector', {timeout: 500});
      click('selector');
      type('selector');
      // some code
      break;
    } catch (e) {
      // rerun_stage creates a new session but this pattern spends extra CPM
      return rerun_stage({...input, counter: --counter});
    }
  }
  ```

  ```js Good theme={null}
  navigate('https://example.com');
  wait('h1');
  ```
</CodeGroup>

## Should I wrap parser expressions in try/catch?

No. Use optional chaining (`?.`) and nullish coalescing (`??`) instead. A silent `try/catch` around a property access hides real bugs, and a `try/catch` around a `wait()` wastes browser time.

<CodeGroup>
  ```js Bad theme={null}
  try {
    const example = obj.prop;
  } catch (e) {}
  ```

  ```js Bad theme={null}
  // Wasting browser time for no reason
  try { wait('selector'); } catch (e) {}
  try { wait_network_idle({timeout: 8000}); } catch (e) {}
  try { wait_page_idle(); } catch (e) {}
  ```

  ```js Good theme={null}
  const example = object?.prop;
  const example2 = object.prop ?? undefined;
  const example3 = object.prop ? object.prop : undefined;
  ```
</CodeGroup>

## How do I extract values from a set of elements in parser code?

Use `toArray().map()` instead of `each()`. It is shorter, returns a real array, and reads as a single expression.

<CodeGroup>
  ```js Bad theme={null}
  const links = [];
  $('.card.product-wrapper').each(function (i, el) {
    links.push({url: $(this).find('h4 a').attr('href')});
  })
  return links;
  ```

  ```js Good theme={null}
  const links = $('.card.product-wrapper').toArray().map(v => ({
    url: $(v).find('h4 a').attr('href'),
  }));
  ```
</CodeGroup>

## How do I normalize text in parser code?

Call `$(selector).text_sane()`. Bright Data Scraper Studio adds this custom method to the Cheerio prototype: it collapses every run of whitespace to a single space and trims the result. For numeric extraction, strip non-digits with a regex.

<CodeGroup>
  ```js Bad theme={null}
  $.prototype.clearText = function () {
    return this.text().replace(/\s+/g, ' ').trim();
  }
  ```

  ```js Good theme={null}
  let name = $('a').text_sane();

  // For digits-only extraction:
  let value = +$('a').text().replace(/\D+/g, '');
  ```
</CodeGroup>

## Related

<CardGroup>
  <Card title="Scraper Studio functions" icon="code" href="/datasets/scraper-studio/functions">
    Full reference for Bright Data Scraper Studio interaction and parser commands
  </Card>

  <Card title="Worker types" icon="server" href="/datasets/scraper-studio/worker-types">
    Choose between Browser worker and Code worker for your scraper
  </Card>
</CardGroup>
