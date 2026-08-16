# Scraper Studio functions reference

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/functions](https://docs.brightdata.com/datasets/scraper-studio/functions)
> **Category**: `datasets-and-scrapers`

---

Reference for Bright Data Scraper Studio interaction and parser functions: navigation, waits, selectors and parser helpers with parameters and 30+ examples.

This reference documents every function available in Bright Data Scraper Studio's IDE: the interaction code that controls a browser session, and the parser code that turns HTML into structured records. Each function lists its parameters, return value, and a runnable example.

<Note>
  Functions marked with **⭐** work only with the Browser worker and throw an error when called from a Code worker. See [Browser-only functions](#browser-only-functions) for the full list.
</Note>

## How is Scraper Studio code organized?

A Bright Data Scraper Studio scraper uses two code types:

| Code type        | Role                                                                                            | Language and libraries                    |
| ---------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Interaction code | Navigates the target site: URL requests, clicks, scrolls, waits, and background traffic capture | JavaScript + Bright Data browser commands |
| Parser code      | Extracts and structures data from the HTML returned by interaction code                         | JavaScript + Cheerio (`$`)                |

You move data from one to the other with `parse()` (which runs the parser) and `collect()` (which appends a record to the final dataset).

## Interaction functions

Interaction functions run in the scraper's main JavaScript context and drive the browser or HTTP client. Use them to navigate, wait for elements, interact with the page, capture network traffic, and hand off data to the parser.

### Global objects

| Name       | Type   | Description                                                                                                                |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `input`    | object | Input for the current stage, set by the trigger or by a previous `next_stage()`/`run_stage()`/`rerun_stage()` call.        |
| `job`      | object | Metadata about the current job (for example `job.created`, the job start timestamp).                                       |
| `location` | object | Info about the current browser location. Field: `href`.                                                                    |
| `parser`   | object | Values captured by `tag_response`, `tag_script`, and related tagging functions, available after `wait_for_parser_value()`. |

```js theme={null}
navigate(input.url);
let {created} = job;
console.log('current url', location.href);
```

### Navigation

#### `navigate`, Load a URL in the browser

Navigates the browser to a URL. A 404 status throws a `dead_page` error by default; override with `allow_status`.

**Parameters**

| Parameter          | Type          | Required | Default | Description                                                                                                               |
| ------------------ | ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `url`              | string or URL | Yes      | None    | Target URL                                                                                                                |
| `opt.wait_until`   | string        | No       | `load`  | `load`, `domcontentloaded`, `networkidle0`, or `networkidle2`                                                             |
| `opt.timeout`      | number        | No       | `30000` | Navigation timeout in milliseconds                                                                                        |
| `opt.referer`      | string        | No       | None    | `Referer` header to send                                                                                                  |
| `opt.allow_status` | number\[]     | No       | `[]`    | HTTP status codes to accept without throwing                                                                              |
| `opt.fingerprint`  | object        | No       | None    | Override browser fingerprint (`screen.width`, `screen.height`)                                                            |
| `opt.sniff_mime`   | boolean       | No       | `false` | Detect the MIME type and store it as `sniffed_mime`. On code workers, only `text/html` and `application/pdf` are detected |

```js theme={null}
navigate(input.url);
navigate('https://example.com');
navigate('https://example.com', {wait_until: 'domcontentloaded'});
navigate('https://example.com', {referer: 'https://google.com'});
navigate('https://example.com', {timeout: 45000});
navigate('https://example.com', {allow_status: [404]});
navigate('https://example.com', {
  fingerprint: {screen: {width: 400, height: 400}},
});
navigate('https://example.com', {sniff_mime: true});
```

#### `request`, Make a direct HTTP request

Sends an HTTP request without using a browser. Use on Code worker, or on Browser worker when you want to bypass the browser.

**Parameters**

| Parameter          | Type             | Required | Description                                                      |
| ------------------ | ---------------- | -------- | ---------------------------------------------------------------- |
| `url` \| `options` | string or object | Yes      | URL string, or an object with `url`, `method`, `headers`, `body` |

```js theme={null}
let res = request('https://www.example.com');
let res = request({
  url: 'https://www.example.com',
  method: 'POST',
  headers: {'Content-type': 'application/json'},
  body: {hello: 'world'},
});
```

#### `next_stage`, Queue input for the next stage

Runs the next stage of the scraper in a new browser session with the given input.

**Parameters**

| Parameter | Type   | Required | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| `input`   | object | Yes      | Input object passed to the next stage |

```js theme={null}
next_stage({url: 'https://example.com', page: 1});
```

#### `run_stage`, Run a specific stage

Runs a named stage of the scraper in a new browser session.

**Parameters**

| Parameter | Type   | Required | Description                       |
| --------- | ------ | -------- | --------------------------------- |
| `stage`   | number | Yes      | Stage index (starts at 1)         |
| `input`   | object | Yes      | Input object passed to that stage |

```js theme={null}
run_stage(2, {url: 'https://example.com', page: 1});
```

#### `rerun_stage`, Re-run the current stage with new input

Runs this stage again with a new input. Use it to fan out work (for example, one re-run per page in a pagination).

```js theme={null}
rerun_stage({url: 'https://example.com/other-page'});
```

#### `load_sitemap`, Read URLs from an XML sitemap

Loads a sitemap XML file and returns the URL list. Supports sitemap indexes and gzip-compressed sitemaps.

**Parameters**

| Parameter     | Type   | Required | Description |
| ------------- | ------ | -------- | ----------- |
| `options.url` | string | Yes      | Sitemap URL |

```js theme={null}
let {pages} = load_sitemap({url: 'https://example.com/sitemap.xml.gz'});
let {children} = load_sitemap({url: 'https://example.com/sitemap-index.xml'});
```

#### `resolve_url`, Follow a URL through redirects

Returns the final URL that the given URL argument leads to.

**Parameters**

| Parameter | Type          | Required | Description    |
| --------- | ------------- | -------- | -------------- |
| `url`     | string or URL | Yes      | URL to resolve |

```js theme={null}
let {href} = parse().anchor_elem_data;
collect({final_url: resolve_url(href)});
```

#### `redirect_history`, Get the redirect chain

Returns the history of URL redirects since the last `navigate()` call.

```js theme={null}
navigate('http://google.com');
let redirects = redirect_history();
// ['http://google.com', 'http://www.google.com', 'https://www.google.com/']
```

#### `response_headers`, Read the last response headers

Returns the response headers from the last page load.

```js theme={null}
let headers = response_headers();
console.log('content-type', headers['content-type']);
```

#### `status_code`, Read the last response status

Returns the HTTP status code of the last page load.

```js theme={null}
collect({status_code: status_code()});
```

### Waiting on the page ⭐

All wait functions are Browser worker only.

#### ⭐ `wait`, Wait for an element to appear

**Parameters**

| Parameter     | Type    | Required | Default | Description                                          |
| ------------- | ------- | -------- | ------- | ---------------------------------------------------- |
| `selector`    | string  | Yes      | None    | CSS selector to wait for                             |
| `opt.timeout` | number  | No       | `30000` | Timeout in milliseconds                              |
| `opt.hidden`  | boolean | No       | `false` | Wait for the element to be hidden instead of visible |
| `opt.inside`  | string  | No       | None    | Selector of an iframe to look inside                 |

```js theme={null}
wait('#welcome-splash');
wait('.search-results .product');
wait('[href^="/product"]');
wait('#welcome-splash', {timeout: 5000});
wait('#welcome-splash', {hidden: true});
wait('#welcome-splash', {inside: '#iframe_id'});
```

#### ⭐ `wait_any`, Wait for any of several conditions

Waits for any matching condition to succeed. Returns when the first selector resolves.

```js theme={null}
wait_any(['#title', '#notfound']);
```

#### ⭐ `wait_visible`, Wait for an element to be visible

**Parameters**

| Parameter     | Type   | Required | Default | Description             |
| ------------- | ------ | -------- | ------- | ----------------------- |
| `selector`    | string | Yes      | None    | CSS selector            |
| `opt.timeout` | number | No       | `30000` | Timeout in milliseconds |

```js theme={null}
wait_visible('#welcome-splash');
wait_visible('#welcome-splash', {timeout: 5000});
```

#### ⭐ `wait_hidden`, Wait for an element to disappear

**Parameters**

| Parameter     | Type   | Required | Default | Description             |
| ------------- | ------ | -------- | ------- | ----------------------- |
| `selector`    | string | Yes      | None    | CSS selector            |
| `opt.timeout` | number | No       | `30000` | Timeout in milliseconds |

```js theme={null}
wait_hidden('#welcome-splash');
wait_hidden('#welcome-splash', {timeout: 5000});
```

#### ⭐ `wait_for_text`, Wait for text content

Waits for an element on the page to contain the given text.

**Parameters**

| Parameter  | Type   | Required | Description      |
| ---------- | ------ | -------- | ---------------- |
| `selector` | string | Yes      | CSS selector     |
| `text`     | string | Yes      | Text to wait for |

```js theme={null}
wait_for_text('.location', 'New York');
```

#### `wait_for_parser_value`, Wait for a parser field to be populated

Use after `tag_response()` or `tag_script()` to wait until the captured data is available.

**Parameters**

| Parameter     | Type     | Required | Description                                                |
| ------------- | -------- | -------- | ---------------------------------------------------------- |
| `field`       | string   | Yes      | Parser field path to wait on                               |
| `validate_fn` | function | No       | Optional callback returning `true` when the value is valid |
| `opt.timeout` | number   | No       | Timeout in milliseconds                                    |

```js theme={null}
wait_for_parser_value('profile');
wait_for_parser_value('listings.0.price', v => parseInt(v) > 0, {timeout: 5000});
```

#### ⭐ `wait_network_idle`, Wait until the browser network settles

Waits until the browser network has been idle for a given period.

**Parameters**

| Parameter     | Type   | Required | Default | Description                                         |
| ------------- | ------ | -------- | ------- | --------------------------------------------------- |
| `opt.timeout` | number | No       | `500`   | Milliseconds of idleness required                   |
| `opt.ignore`  | array  | No       | `[]`    | Patterns (string or RegExp) for requests to exclude |

```js theme={null}
wait_network_idle();
wait_network_idle({
  timeout: 1e3,
  ignore: [/long_request/, 'https://example.com'],
});
```

#### ⭐ `wait_page_idle`, Wait until DOM mutations stop

Waits until no changes are made to the DOM tree for a given period.

**Parameters**

| Parameter          | Type   | Required | Description                                   |
| ------------------ | ------ | -------- | --------------------------------------------- |
| `opt.idle_timeout` | number | No       | Milliseconds of stability required            |
| `opt.ignore`       | array  | No       | Selectors to exclude from mutation monitoring |

```js theme={null}
wait_page_idle();
wait_page_idle({
  ignore: ['.live-clock', '.carousel'],
  idle_timeout: 1000,
});
```

### Element interaction ⭐

All interaction functions require Browser worker.

#### ⭐ `click`, Click an element

Clicks an element, waiting for it to appear first.

**Parameters**

| Parameter         | Type            | Required | Description                                       |
| ----------------- | --------------- | -------- | ------------------------------------------------- |
| `selector`        | string or array | Yes      | CSS selector or Shadow DOM selector path          |
| `opt.coordinates` | `{x, y}`        | No       | Click the closest match to given page coordinates |

```js theme={null}
click('#show-more');
$('#show-more').click();

// Click the map pin closest to the center of a map
let box = bounding_box('#map');
let center = {x: (box.left + box.right) / 2, y: (box.top + box.bottom) / 2};
click('.map-pin', {coordinates: center});
```

#### ⭐ `right_click`, Right-click an element

Same as `click` but uses the right mouse button.

```js theme={null}
right_click('#item');
```

#### ⭐ `hover`, Hover over an element

Moves the cursor over an element, waiting for it to appear first.

```js theme={null}
hover('#item');
```

#### ⭐ `mouse_to`, Move the cursor to a coordinate

**Parameters**

| Parameter | Type   | Required | Description       |
| --------- | ------ | -------- | ----------------- |
| `x`       | number | Yes      | Target X position |
| `y`       | number | Yes      | Target Y position |

```js theme={null}
mouse_to(0, 0);
```

#### ⭐ `type`, Enter text into an input

Waits for the input to appear, then types the given text.

**Parameters**

| Parameter     | Type            | Required | Description                                           |
| ------------- | --------------- | -------- | ----------------------------------------------------- |
| `selector`    | string          | Yes      | CSS selector                                          |
| `text`        | string or array | Yes      | Text to type, or an array of strings and special keys |
| `opt.replace` | boolean         | No       | Clear existing text before typing                     |

```js theme={null}
type('#location', 'New York');
type('#location', 'New York', {replace: true});
type('[id$=input-box]', 'search term');
type('#search', ['Some text', 'Enter']);
type('#search', ['Backspace']);
```

#### ⭐ `press_key`, Press a special key

Types special keys like Enter or Backspace in the currently focused input.

```js theme={null}
press_key('Enter');
press_key('Backspace');
```

#### ⭐ `select`, Pick a value from a select element

**Parameters**

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| `selector` | string | Yes      | CSS selector of a `<select>` element |
| `value`    | string | Yes      | Option value or visible text         |

```js theme={null}
select('#country', 'Canada');
```

#### ⭐ `scroll_to`, Scroll an element into view

Scrolls the page so a target element is visible. Defaults to natural scrolling; pass `immediate: true` to jump.

```js theme={null}
scroll_to('.author-profile');
scroll_to('top');
scroll_to('bottom');
scroll_to('top', {immediate: true});
```

#### ⭐ `scroll_to_all`, Scroll through every matching element

```js theme={null}
scroll_to_all('.author-profiles');
```

#### ⭐ `load_more`, Trigger lazy-loaded content

Scrolls to the bottom of a list to trigger infinite-scroll loading.

**Parameters**

| Parameter              | Type   | Required | Description                                     |
| ---------------------- | ------ | -------- | ----------------------------------------------- |
| `selector`             | string | Yes      | Container element holding the lazy-loaded items |
| `opt.children`         | string | No       | Selector for the individual items               |
| `opt.trigger_selector` | string | No       | Selector for an explicit "load more" button     |
| `opt.timeout`          | number | No       | Timeout in milliseconds                         |

```js theme={null}
load_more('.search-results');
load_more('.search-results', {
  children: '.result-item',
  trigger_selector: '.btn-load-more',
  timeout: 10000,
});
```

#### ⭐ `close_popup`, Auto-close popups in the background

Registers a background watcher that closes a popup whenever it appears. See [Best practices](/datasets/scraper-studio/best-practices) for the recommended pattern.

**Parameters**

| Parameter          | Type   | Required | Description                                                     |
| ------------------ | ------ | -------- | --------------------------------------------------------------- |
| `popup_selector`   | string | Yes      | Selector for the popup container                                |
| `close_selector`   | string | Yes      | Selector for the element that closes it                         |
| `opt.click_inside` | string | No       | Parent iframe selector, if the close button is inside an iframe |

```js theme={null}
close_popup('.popup', '.popup_close');
close_popup('iframe.with-popup', '.popup_close', {click_inside: 'iframe.with-popup'});
```

#### ⭐ `solve_captcha`, Solve CAPTCHAs on the page

```js theme={null}
solve_captcha();
solve_captcha({type: 'simple', selector: '#image', input: '#input'});
```

#### ⭐ `bounding_box`, Get an element's page coordinates

Returns the page-relative bounding box of the first matched element.

**Parameters**

| Parameter  | Type   | Required | Description  |
| ---------- | ------ | -------- | ------------ |
| `selector` | string | Yes      | CSS selector |

```js theme={null}
let box = bounding_box('.product-list');
// box == {top, right, bottom, left, x, y, width, height}
```

#### `el_exists`, Check if an element is on the page

**Parameters**

| Parameter  | Type   | Required | Default | Description                               |
| ---------- | ------ | -------- | ------- | ----------------------------------------- |
| `selector` | string | Yes      | None    | CSS selector                              |
| `timeout`  | number | No       | `0`     | Wait up to N milliseconds for the element |

```js theme={null}
el_exists('#example');            // true
el_exists('.does_not_exist');     // false
el_exists('.does_not_exist', 5e3); // false after 5 seconds
```

#### `el_is_visible`, Check if an element is visible

**Parameters**

| Parameter  | Type   | Required | Default | Description                              |
| ---------- | ------ | -------- | ------- | ---------------------------------------- |
| `selector` | string | Yes      | None    | CSS selector                             |
| `timeout`  | number | No       | `0`     | Wait up to N milliseconds for visibility |

```js theme={null}
el_is_visible('#example');
el_is_visible('.is_not_visible', 5e3);
```

#### ⭐ `track_event_listeners`, Start tracking browser event listeners

Must be called before `disable_event_listeners()`.

```js theme={null}
track_event_listeners();
```

#### ⭐ `disable_event_listeners`, Disable event listeners

Stops all event listeners from running on the page.

**Parameters**

| Parameter     | Type      | Required | Description                     |
| ------------- | --------- | -------- | ------------------------------- |
| `event_types` | string\[] | No       | Specific event types to disable |

```js theme={null}
disable_event_listeners();
disable_event_listeners(['hover', 'click']);
```

#### ⭐ `freeze_page`, Stop further page changes

Forces the page to stop changing, so HTML snapshots reflect exactly what the scraper saw. Experimental.

```js theme={null}
freeze_page();
```

### Network and response tagging ⭐

Tagging captures background network traffic and exposes it to the parser. All `tag_*` functions are Browser worker only.

#### ⭐ `tag_response`, Save one matching response

Saves the response data from a matching browser request.

**Parameters**

| Parameter         | Type               | Required | Description                                               |
| ----------------- | ------------------ | -------- | --------------------------------------------------------- |
| `field`           | string             | Yes      | Name of the parser field to populate                      |
| `pattern`         | RegExp or function | Yes      | URL pattern or match function                             |
| `opt.jsonp`       | boolean            | No       | Parse JSONP response bodies (auto-detected when possible) |
| `opt.allow_error` | boolean            | No       | Capture responses with non-2xx status codes               |

```js theme={null}
tag_response('resp', /url/, {jsonp: true});
tag_response('resp', /url/, {allow_error: true});

tag_response('resp', (req, res) => {
  if (req.url.includes('/api/')) {
    return {
      request_body: req.body,
      request_headers: req.headers,
      response_body: res.body,
      response_headers: res.headers,
    };
  }
});

tag_response('teams', /\/api\/teams/);
navigate('https://example.com/sports');
let teams = parse().teams;
for (let team of teams)
  collect(team);
```

#### ⭐ `tag_all_responses`, Save every matching response

Saves the response data from every matching request as an array.

```js theme={null}
tag_all_responses('profiles', /\/api\/profile/);
navigate('https://example.com/sports');
let profiles = parse().profiles;
for (let profile of profiles)
  collect(profile);
```

#### ⭐ `tag_script`, Extract JSON embedded in a `<script>` tag

**Parameters**

| Parameter  | Type   | Required | Description         |
| ---------- | ------ | -------- | ------------------- |
| `field`    | string | Yes      | Parser field name   |
| `selector` | string | Yes      | Script tag selector |

```js theme={null}
tag_script('ssr_state', '#__SSR_DATA__');
navigate('https://example.com/');
collect(parse().ssr_state);
```

#### ⭐ `tag_window_field`, Tag a value on the browser `window`

**Parameters**

| Parameter | Type   | Required | Description               |
| --------- | ------ | -------- | ------------------------- |
| `field`   | string | Yes      | Parser field name         |
| `key`     | string | Yes      | `window` property to read |

```js theme={null}
tag_window_field('initData', '__INIT_DATA__');
```

#### ⭐ `tag_image`, Capture an image URL from a DOM element

```js theme={null}
tag_image('image', '#product-image');
```

#### ⭐ `tag_video`, Capture a video URL from a DOM element

**Parameters**

| Parameter      | Type    | Required | Description             |
| -------------- | ------- | -------- | ----------------------- |
| `field`        | string  | Yes      | Parser field name       |
| `selector`     | string  | Yes      | Element selector        |
| `opt.download` | boolean | No       | Download the video file |

```js theme={null}
tag_video('video', '#product-video', {download: true});
```

#### ⭐ `tag_html`, Save the HTML of the current page

**Parameters**

| Parameter | Type   | Required | Description                                     |
| :-------- | :----- | :------- | :---------------------------------------------- |
| `name`    | string | Yes      | Name of the tagged field. Must be alphanumeric. |

The tagged value can be accessed:

* In interaction code with `wait_for_parser_value('field_name')`
* In parser code with `parser.field_name` or `parser['field_name']`

Scraper Studio also adds the page URL with the `_url` suffix. For example, if the field name is `html`, the page URL is available as `parser.html_url`.

```js theme={null}
tag_html('html');
tag_html('html', { iframe: true });
tag_html('html', {as_doc: true});
tag_html('html', {load_stylesheets: true});
tag_html('html', {shadow: false});
```

#### ⭐ `tag_screenshot`, Save a screenshot of the page

**Parameters**

| Parameter       | Type    | Required | Description        |
| --------------- | ------- | -------- | ------------------ |
| `field`         | string  | Yes      | Parser field name  |
| `opt.filename`  | string  | No       | Output filename    |
| `opt.full_page` | boolean | No       | Defaults to `true` |

```js theme={null}
tag_screenshot('html_screenshot', {filename: 'screen'});
tag_screenshot('view', {full_page: false});
```

#### ⭐ `tag_download`, Capture files downloaded by the browser

**Parameters**

| Parameter | Type             | Required | Description                        |
| --------- | ---------------- | -------- | ---------------------------------- |
| `url`     | string or RegExp | Yes      | Pattern to match download requests |

```js theme={null}
let SEC = 1000;
let download = tag_download(/example.com\/foo\/bar/);
click('button#download');
let file1 = download.next_file({timeout: 10 * SEC});
let file2 = download.next_file({timeout: 20 * SEC});
collect({file1, file2});
```

#### ⭐ `tag_serp`, Parse the page as a search engine result page

**Parameters**

| Parameter | Type   | Required | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| `field`   | string | Yes      | Parser field name                   |
| `type`    | string | Yes      | Parser type: `google`, `bing`, etc. |

```js theme={null}
tag_serp('serp_bing_results', 'bing');
tag_serp('serp_google_results', 'google');
```

#### ⭐ `capture_graphql`, Capture and replay GraphQL queries

Captures a GraphQL request so you can replay it with different variables.

**Parameters**

| Parameter         | Type   | Required | Description                                                    |
| ----------------- | ------ | -------- | -------------------------------------------------------------- |
| `options.payload` | object | Yes      | Key-value pairs that match the target request payload          |
| `options.url`     | RegExp | No       | URL pattern for the GraphQL endpoint (defaults to `/graphql/`) |

```js theme={null}
let q = capture_graphql({
  payload: {id: 'ProfileQuery'},
});
navigate('https://example.com');

let [first_query, first_response] = q.wait_captured();
collect(first_response.data.profile);

let second = q.replay({
  variables: {other_id: 2},
});
collect(second.data.profile);
```

### Data collection

#### `parse`, Run the parser code

Runs the parser code and returns the structured result.

```js theme={null}
let page_data = parse();
collect({
  title: page_data.title,
  price: page_data.price,
});
```

#### `collect`, Append a record to the dataset

Adds one record to the scraper's output.

**Parameters**

| Parameter     | Type     | Required | Description                          |
| ------------- | -------- | -------- | ------------------------------------ |
| `data_line`   | object   | Yes      | Fields to collect                    |
| `validate_fn` | function | No       | Callback that throws on invalid data |

```js theme={null}
collect({price: data.price});
collect(product, p => {
  if (!p.title)
    throw new Error('Product is missing a title');
});
```

#### `set_lines`, Set output lines, overriding previous calls

Each call to `set_lines()` overrides the previous one. Useful when the scraper collects partial data and you want the last known state delivered if a later step throws.

**Parameters**

| Parameter     | Type      | Required | Description                            |
| ------------- | --------- | -------- | -------------------------------------- |
| `lines`       | object\[] | Yes      | Array of records                       |
| `validate_fn` | function  | No       | Validation callback, run once per line |

```js theme={null}
set_lines(products_so_far);
set_lines(products_so_far, p => {
  if (!p.price)
    throw new Error('Missing price');
});
```

#### `html`, Get the HTML of the current page

Use `html()` when you need to read, inspect, or collect the current page HTML from interaction code.

```js theme={null}
html();
html({iframe: true});
html({iframe: true, order: 'bfs'});
```

#### `load_html`, Load an HTML string into Cheerio

**Parameters**

| Parameter | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| `html`    | string | Yes      | HTML to parse |

```js theme={null}
let $$ = load_html('<p id="p1">p1</p><p id="p2">p2</p>');
collect({data: $$('#p2').text()});
```

### Marking a crawl as a failure

#### `bad_input`, Mark the input as invalid

Prevents any retries and reports `error_code=bad_input`.

```js theme={null}
bad_input();
bad_input('Missing search term');
```

#### `blocked`, Mark the page as blocked

Reports that the site refused access. `error_code=blocked`.

```js theme={null}
blocked();
blocked('Login page was shown');
```

#### `dead_page`, Mark a URL as a dead link

Flags the page so it can be filtered from future collections. `error_code=dead_page`.

```js theme={null}
dead_page();
dead_page('Product was removed');
```

#### ⭐ `detect_block`, Detect blocking conditions on the page

**Parameters**

| Parameter            | Type             | Required | Description                                |
| -------------------- | ---------------- | -------- | ------------------------------------------ |
| `resource.selector`  | string           | Yes      | Element to check                           |
| `condition.exists`   | boolean          | No       | Fail if the element exists                 |
| `condition.has_text` | string or RegExp | No       | Fail if the element contains matching text |

```js theme={null}
detect_block({selector: '.foo'}, {exists: true});
detect_block({selector: '.bar'}, {has_text: 'text'});
detect_block({selector: '.baz'}, {has_text: /regex_pattern/});
```

### Session and routing

#### `country`, Route through a specific country

**Parameters**

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| `code`    | string | Yes      | Two-character ISO country code |

```js theme={null}
country('us');
```

#### ⭐ `proxy_location`, Fine-grained proxy location

Prefer `country()` unless you need precise geographic control.

**Parameters**

| Parameter               | Type   | Required | Description                    |
| ----------------------- | ------ | -------- | ------------------------------ |
| `configuration.country` | string | No       | Two-character ISO country code |
| `configuration.lat`     | number | No       | Latitude, range `[-85, 85]`    |
| `configuration.long`    | number | No       | Longitude, range `[-180, 180]` |
| `configuration.radius`  | number | No       | Radius in kilometers           |

```js theme={null}
proxy_location({country: 'us'});
proxy_location({lat: 37.7749, long: 122.4194});
proxy_location({lat: 37.7749, long: 122.4194, country: 'US', radius: 100});
```

#### `preserve_proxy_session`, Reuse the proxy session across child stages

```js theme={null}
preserve_proxy_session();
```

#### `set_session_cookie`, Set a cookie for the current session

**Parameters**

| Parameter | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| `domain`  | string | Yes      | Cookie domain |
| `name`    | string | Yes      | Cookie name   |
| `value`   | string | Yes      | Cookie value  |

```js theme={null}
set_session_cookie('example.com', 'session_id', 'abc123');
```

#### `set_session_headers`, Set extra HTTP headers

**Parameters**

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| `headers` | object | Yes      | Header key-value pairs |

```js theme={null}
set_session_headers({'X-Custom-Header': 'value'});
```

### Browser configuration ⭐

Browser worker only.

#### ⭐ `browser_size`, Get the current browser window size

Returns `{width, height}` in pixels.

```js theme={null}
let size = browser_size();
console.log(size.width, size.height);
```

#### ⭐ `emulate_device`, Emulate a mobile device

Switches the user agent, screen resolution, and device pixel ratio to match a named device.

**Parameters**

| Parameter | Type   | Required | Description                             |
| --------- | ------ | -------- | --------------------------------------- |
| `device`  | string | Yes      | Device name, e.g. `iPhone X`, `Pixel 2` |

```js theme={null}
emulate_device('iPhone X');
emulate_device('Pixel 2');
```

<Accordion title="Full list of supported device names">
  * Blackberry PlayBook / landscape
  * BlackBerry Z30 / landscape
  * Galaxy Note 3 / landscape
  * Galaxy Note II / landscape
  * Galaxy S III / S5 / S8 / S9+ (each with landscape)
  * Galaxy Tab S4 / landscape
  * iPad / iPad Mini / iPad Pro / iPad Pro 11 / iPad (gen 6) / iPad (gen 7) (each with landscape)
  * iPhone 4, 5, 6, 6 Plus, 7, 7 Plus, 8, 8 Plus, SE, X, XR, 11, 11 Pro, 11 Pro Max, 12 / 12 Mini / 12 Pro / 12 Pro Max, 13 / 13 Mini / 13 Pro / 13 Pro Max (each with landscape)
  * JioPhone 2 / landscape
  * Kindle Fire HDX / landscape
  * LG Optimus L70 / landscape
  * Microsoft Lumia 550, 950 (950 with landscape)
  * Nexus 4, 5, 5X, 6, 6P, 7, 10 (each with landscape)
  * Nokia Lumia 520 / landscape, Nokia N9 / landscape
  * Pixel 2, 2 XL, 3, 4, 4a (5G), 5 (each with landscape)
  * Moto G4 / landscape
</Accordion>

#### **⭐** `emulate_geolocation`**, Set browser geolocation**

Configures the browser location for the crawl and grants the page access to the browser’s geolocation.

Use `emulate_geolocation()` when the target website changes content based on the browser’s latitude and longitude, or when the page requests access to browser location.

### **Parameters**

| **Parameter**      | **Type** | **Required** | **Description**                                                                                                                                      |
| :----------------- | :------- | :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `geolocation`      | object   | Yes          | Object with the desired browser location.                                                                                                            |
| `geolocation.lat`  | number   | Yes          | Latitude. Must be in range `[-85, 85]`.                                                                                                              |
| `geolocation.long` | number   | Yes          | Longitude. Must be in range `[-180, 180]`.                                                                                                           |
| `geolocation.acc`  | number   | No           | Accuracy in meters. Must be in range `5-5000`. Values `5-20` behave like GPS-level accuracy; values `100-1000` behave like coarse IP/Wi-Fi location. |

```javascript theme={null}
emulate_geolocation(geolocation)
```

### **Examples**

Set browser location:

```javascript theme={null}
emulate_geolocation({ lat: 37.7749, long: 122.4194 });
```

Use before navigation when the page reads location on load:

```javascript theme={null}
emulate_geolocation({ lat: 37.7749, long: 122.4194, acc: 10 });

navigate(input.url);
wait('.store-list');

const data = parse();
collect(data);
```

#### ⭐ `font_exists`, Check browser font support

Asserts that the browser can render the given font family.

```js theme={null}
font_exists('Liberation Mono');
```

#### ⭐ `html_capture_options`, Configure HTML capture

Controls how the HTML snapshot is captured.

**Parameters**

| Parameter                       | Type    | Required | Description                             |
| ------------------------------- | ------- | -------- | --------------------------------------- |
| `options.coordinate_attributes` | boolean | No       | Embed element coordinates as attributes |

```js theme={null}
html_capture_options({
  coordinate_attributes: true,
});
```

#### `embed_html_comment`, Inject a comment into the page HTML

Embeds metadata inside HTML snapshots.

```js theme={null}
embed_html_comment('trace-id: asdf123');
```

### Debugging and observability

#### `console`, Log from interaction code

```js theme={null}
console.log(1, 'brightdata', [1, 2], {key: 'value'});
console.error('something went wrong');
```

#### ⭐ `verify_requests`, Monitor failed browser requests

Fires a callback on every failed browser request.

**Parameters**

| Parameter  | Type     | Required | Description                                                        |
| ---------- | -------- | -------- | ------------------------------------------------------------------ |
| `callback` | function | Yes      | Called with `{url, error, type, response}` for each failed request |

```js theme={null}
verify_requests(({url, error, type, response}) => {
  if (response.status != 404 && type == 'Font')
    throw new Error('Font failed to load');
});
```

### Value constructors

Bright Data Scraper Studio provides typed constructors for structured output fields.

#### `Image`, `Video`, `Pdf`,  `Doc`, `Money`

| Constructor              | Arguments                             | Use                     |
| ------------------------ | ------------------------------------- | ----------------------- |
| `Image(src)`             | `src`: image URL or data URI          | Collect image data      |
| `Video(src)`             | `src`: video URL                      | Collect video data      |
| `Pdf(src)`               | `src`: PDF URL                        | Collect Pdf files       |
| `Doc(src)`               | `src`: document file URL              | Collect document files  |
| `Money(value, currency)` | `value`: number, `currency`: ISO code | Collect monetary values |

## **Supported downloaded file types**

Scraper Studio supports downloading files through media and document field constructors.

Use:

* `new Image()` for image files
* `new Video()` for video files
* `new Pdf()` for PDF files
* `new Doc()` for supported document, text, audio, video, and structured file types

### **Supported** `new Doc() `**content types**

`new Doc()` supports the following content types:

```text theme={null}
application/json
application/pdf
application/rtf
application/vnd.openxmlformats-officedocument.wordprocessingml.document
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
application/vnd.ms-excel
application/xml
application/vnd.oasis.opendocument.spreadsheet
audio/mp3
audio/mp4
audio/webm
text/csv
text/html
text/plain
text/vtt
text/xml
video/iso.segment
video/MP2T
video/mp2t
video/mp4
video/webm
```

example:

```js theme={null}
let img = new Image('https://example.com/image.png');
let vid = new Video('https://example.com/video.mp4');
let pdf = new Pdf('https://example.com/document.pdf');
let doc = new Doc('https://example.com/file.csv');
let price = new Money(10, 'USD');

collect({
image: img, 
video: vid, 
pdf, 
document: doc, 
product_price: price
});
```

#### `URL`

Standard Node.js `URL` class.

```js theme={null}
let u = new URL('https://example.com');
```

## `hash`**, Compute a hash digest**

Computes a hash digest of a string and returns it as a hexadecimal string.

Use `hash()` when you need a stable identifier, deduplication key, or checksum from a text value in interaction code.

### **Syntax**

```javascript theme={null}
hash(data, algorithm)
```

### **Arguments**

| **Argument** | **Type** | **Required** | **Default** | **Description**                                                   |
| ------------ | -------- | ------------ | ----------- | ----------------------------------------------------------------- |
| `data`       | string   | Yes          | None        | The string to hash.                                               |
| `algorithm`  | string   | No           | `sha256`    | Hash algorithm to use. One of: `sha256`, `sha1`, `sha512`, `md5`. |

### **Examples**

Use the default `sha256` algorithm:

```javascript theme={null}
const id = hash('some text');
```

Use `md5`:

```javascript theme={null}
const id = hash('some text', 'md5');
```

## Parser functions

Parser code runs after interaction code calls `parse()`. It receives the captured HTML and any tagged data, and returns a single record (or array of records) to the interaction code. Parser code uses Cheerio, a jQuery-compatible HTML parser.

### Globals available in parser code

| Name       | Type             | Description                                                                       |
| ---------- | ---------------- | --------------------------------------------------------------------------------- |
| `$`        | Cheerio instance | Loaded with the page HTML                                                         |
| `input`    | object           | Current stage input                                                               |
| `location` | object           | Current browser location; field: `href`                                           |
| `parser`   | object           | Values tagged during interaction (from `tag_response`, `tag_script`, and related) |

```js theme={null}
let url = input.url;
let current_url = location.href;
$('#example').text();
```

### Cheerio helpers

Bright Data Scraper Studio adds custom Cheerio methods on top of the standard API.

#### `$(selector).text_sane()`, Normalize whitespace

Returns `text()` with all whitespace runs collapsed to a single space and trimmed.

```js theme={null}
let name = $('a').text_sane();                   // "foo bar baz"
let raw  = $('a').text();                        // "foo   bar\n\n\t baz"
```

#### `$(selector).filter_includes(text)`, Filter elements by text content

Filters a selection to elements whose text includes the given substring. Chainable with the rest of the Cheerio API.

```js theme={null}
$('.selector').filter_includes('text').click();
```

### Parser value constructors

`Image`, `Video`, `PDF` and `Money` are also available in parser code and work the same way.

```js theme={null}
let img = new Image('https://example.com/image.png');
let price = new Money(10, 'USD');
let p = new Pdf('https://example.com/document.pdf')
collect({image: img, product_price: price});
```

## **Validate downloaded media type**

Use `validate_type` to check that the downloaded file content matches the expected media type. This option is supported by `new Pdf()`, `new Image()`, and `new Video()`.

When `validate_type` is enabled, Scraper Studio validates the downloaded file after fetching it. If the file content does not match the expected type, the field returns an error instead of a valid downloaded file.

Example:

```javascript theme={null}
return {
  pdf: new Pdf('https://example.com/pdf', { validate_type: true }),
  image: new Image('https://example.com/image', { validate_type: true }),
  video: new Video('https://example.com/video', { validate_type: true }),
};
```

Validation failure example:

```json theme={null}
{
  "pdf": {
    "remote_url": "https://example.com/pdf",
    "error": "downloaded file type \"image\" does not match the expected \"pdf\" type",
    "validated_type": "image",
    "error_code": "wrong_file_type"
  }
}
```

<Tip>
  For full Cheerio API documentation, see the [Cheerio website](https://cheerio.js.org/).
</Tip>

## Shadow DOM support

Interaction commands that accept a selector also accept an **array** of selectors, letting you reach into Shadow DOM trees. Use this with `click`, `wait`, `type`, and other interaction functions.

When you pass an array:

* One selector must target the shadow host element
* Every selector after it is resolved inside that shadow root

```js theme={null}
click(['body', 'my-shadow-host', 'button.submit']);
```

In that example, `my-shadow-host` is the element with the shadow root attached, and `button.submit` is resolved inside that shadow root.

## Browser-only functions

The following functions require Browser worker and throw `not_supported_in_code_worker` when called from a Code worker. Use this list to decide which worker your scraper needs.

| Category            | Functions                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Waits               | `wait`, `wait_any`, `wait_for_text`, `wait_visible`, `wait_hidden`, `wait_network_idle`, `wait_page_idle`                                                                             |
| Interaction         | `click`, `right_click`, `hover`, `mouse_to`, `type`, `press_key`, `select`, `scroll_to`, `scroll_to_all`, `load_more`, `close_popup`, `solve_captcha`, `bounding_box`, `detect_block` |
| Tagging             | `tag_response`, `tag_all_responses`, `tag_script`, `tag_window_field`, `tag_image`, `tag_video`, `tag_screenshot`, `tag_download`, `tag_serp`, `capture_graphql`                      |
| Browser config      | `browser_size`, `emulate_device`, `emulate_geolocation`,`font_exists`, `html_capture_options`, `freeze_page`, `track_event_listeners`, `disable_event_listeners`                      |
| Session and routing | `proxy_location`                                                                                                                                                                      |
| Debugging           | `verify_request`                                                                                                                                                                      |

See [Worker types](/datasets/scraper-studio/worker-types) to choose between Browser worker and Code worker.

## Related

<CardGroup>
  <Card title="Best practices" icon="list-check" href="/datasets/scraper-studio/best-practices">
    Recommended patterns for writing fast, reliable scrapers
  </Card>

  <Card title="Worker types" icon="server" href="/datasets/scraper-studio/worker-types">
    When to use Browser worker vs Code worker
  </Card>

  <Card title="Basics of web scraping" icon="graduation-cap" href="/datasets/scraper-studio/basics-of-web-scraping">
    Core concepts: interaction, parsing, stages, and scale
  </Card>

  <Card title="Develop a scraper" icon="wrench" href="/datasets/scraper-studio/develop-a-scraper">
    Step-by-step walkthrough of building a scraper in the IDE
  </Card>
</CardGroup>
