# Web scraping basics in Scraper Studio

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/basics-of-web-scraping](https://docs.brightdata.com/datasets/scraper-studio/basics-of-web-scraping)
> **Category**: `datasets-and-scrapers`

---

Understand how Scraper Studio IDE scrapers are structured, from inputs and interaction code to parsing, stages, workers, and output records.

Bright Data Scraper Studio IDE scrapers are built from a few core parts: **inputs**, **interaction code**, **parser code**, **stages**, **workers**, and **output records**.

This page explains how those parts work together so you can understand, edit, and debug scraper code with confidence.

For a step-by-step build walkthrough, see [**Develop a scraper with the IDE**](/datasets/scraper-studio/develop-a-scraper).

## Prerequisites

* Basic JavaScript familiarity (variables, functions, async control flow)
* An active [Bright Data account](https://brightdata.com/)

## **Basic scraper flow**

A Scraper Studio IDE scraper usually follows this flow:

1. The scraper receives an **input**, such as a URL, keyword, location, or custom value.
2. **Interaction code** uses that input to open a page, send a request, click, scroll, paginate, or create the next stage.
3. **Parser code** extracts structured data from the loaded page or response.
4. The scraper saves records to the output dataset with `collect()` or `set_lines()`.
5. The final output is delivered according to the scraper’s delivery preferences.

## **Inputs**

Inputs are the values passed into a scraper run.

A scraper might use:

* `url`, for page-based scraping
* `keyword`, for search or discovery flows
* `location`, for location-based searches
* `country`, `date`, `category`, or any other custom field

The available input fields are defined in the scraper’s [**input schema**](/datasets/scraper-studio/input-and-output-schema#what-is-the-input-schema).

Interaction code reads these values from the `input` object:

```js theme={null}
navigate(input.url);
```

For a keyword-based scraper:

```js theme={null}
navigate(`https://example.com/search?q=${input.keyword}`);
```

A scraper does not always need external input. For example, a scraper can use a hardcoded URL if it always collects from the same page.

## **Interaction code**

Interaction code controls how the scraper reaches the data.

It can:

* Navigate to a page
* Send HTTP requests
* Wait for page elements
* Click buttons
* Type into forms
* Scroll through a page
* Handle pagination
* Create additional crawl stages

A simple interaction flow looks like this:

```js theme={null}
navigate(input.url);
wait('.product-title');

const data = parse();
collect(data);
```

In this example:

* `navigate(input.url)` opens the page from the input.
* `wait('.product-title')` waits until the expected page element appears.
* `parse()` runs the parser code.
* `collect(data)` saves the extracted record.

Interaction code is responsible for **getting to the right page or response**. It should not contain most of the extraction logic. That belongs in parser code.

## **Parser code**

Parser code extracts structured fields from the page HTML or response.

Parser code commonly uses Cheerio, a jQuery-like API, to read page elements:

```js theme={null}
return {
  title: $('h1').text_sane(),
  price: $('.price').text_sane(),
  availability: $('.stock-status').text_sane(),
};
```

The parser returns a JavaScript object. That object becomes the structured data your scraper can collect.

For example, a parser can return product data, profile data, listings, article content, or links that the interaction code will use in the next stage.

## `parse() `**and** `collect()`

`parse()` and `collect()` connect interaction code, parser code, and final output.

### `parse()`

`parse()` runs the parser code for the current page or response and returns its result.

Example:

```js theme={null}
let data = parse();
```

### `collect()`

`collect()` appends one record to the output dataset.

Example:

```js theme={null}
collect({
  title: data.title,
  price: data.price,
  url: location.href,
});
```

## **Multi-stage scrapers**

Some scrapers need more than one step to reach the final data.

For example:

1. Start from a search page.
2. Discover result pages.
3. Open each result page.
4. Extract final details.

Scraper Studio supports this pattern with **stages**.

A stage is a separate crawl step. `next_stage()` sends new input values to the next stage.

Example:

```js theme={null}
navigate(`https://example.com/search?q=${input.keyword}`);

const results = parse().results;

for (const result of results) {
  next_stage({ url: result.url });
}
```

Then the next stage can use the new `url` input:

```js theme={null}
navigate(input.url);

const data = parse();
collect(data);
```

Multi-stage scrapers are useful for:

* Search results → detail pages
* Category pages → product pages
* Listing pages → profile pages
* Pagination flows
* Discovery workflows where one page creates many child pages

Scraper Studio can run stages across workers, so this pattern is usually more scalable than processing every page serially in one long script.

## **Parent and child crawls**

When a scraper uses `next_stage()`, it creates a parent-child relationship between crawls.

For example:

* The search page is the **parent** crawl.
* Each result page created from it is a **child** crawl.

This relationship is useful when debugging. In the crawl inspector, you can see which input or page created another page, inspect child pages, and trace where failures happened in a multi-stage flow.

## **Code workers and Browser workers**

Scraper Studio supports two worker types.

### **Code worker**

A **Code worker** uses HTTP requests and raw responses.

Use a Code worker when:

* The data is available in the raw HTML
* The data is available from a public JSON endpoint
* The page does not require browser interaction
* You want faster and more cost-efficient scraping

Code workers cannot click, scroll, type, or run browser-only functions.

### **Browser worker**

A **Browser worker** uses a real headless browser.

Use a Browser worker when:

* The page renders data with JavaScript
* You need to click, scroll, type, or interact with the page
* You need to wait for elements to appear
* You need to capture browser network traffic
* The site requires browser-like behavior

Start with a Code worker when possible. Switch to a Browser worker when the target data is not available in the raw response or when browser interaction is required.

For the complete comparison, see [**Worker types**](/datasets/scraper-studio/worker-types).\\

## How does Scraper Studio handle blocking and CAPTCHAs?

Scraping at scale can trigger site defenses such as:

* IP blocking
* Rate limits
* CAPTCHAs
* Fingerprinting
* Bot detection

Scraper Studio runs on Bright Data’s proxy and unblocking infrastructure, so you do not need to manage proxy rotation, sessions, or retry logic yourself.

Depending on the scraper configuration and worker type, Scraper Studio can:

* Route requests through Bright Data proxy infrastructure
* Retry blocked requests
* Use browser-like fingerprints for Browser workers
* Support CAPTCHA-solving workflows with `solve_captcha()` when applicable

Your scraper code should focus on reaching the right pages and extracting the required data. Bright Data handles the access infrastructure behind the scenes.

## **How schema fits into scraper structure**

The scraper code and schema work together.

### **Input schema**

The input schema defines what values the scraper can receive.

Example input fields:

```js theme={null}
{
  "url": "https://example.com/product/1",
  "country": "US"
}
```

Interaction code reads those values from `input`.

### **Output schema**

The output schema defines what fields the scraper returns.

It is usually generated from the records passed to `collect()`.

Example collected record:

```js theme={null}
collect({
  title: data.title,
  price: data.price,
  availability: data.availability,
});
```

Those fields become part of the output schema.

For more details, see [**Input and output schema**](/datasets/scraper-studio/input-and-output-schema).

## **Common scraper patterns**

### **Single-page scraper**

Use this pattern when each input maps to one final page.

Example:

```js theme={null}
navigate(input.url);
collect(parse());
```

Best for:

* Product pages
* Profile pages
* Article pages
* Detail pages

***

### **Search or discovery scraper**

Use this pattern when an input creates multiple result pages.

Example:

```js theme={null}
navigate(`https://example.com/search?q=${input.keyword}`);

const results = parse().results;

for (const result of results) {
  next_stage({ url: result.url });
}
```

Best for:

* Search pages
* Category pages
* Directory listings
* Marketplace discovery

***

### **Multi-page detail scraper**

Use this pattern when a scraper must move from a list page to many detail pages.

Example flow:

**Input keyword → Search page → Result URLs → Detail pages → Output records**

Best for:

* Product discovery
* Lead generation
* Local business listings
* Review collection
* Job listings

***

## **Debugging mental model**

When a scraper does not return the expected data, check the flow in order:

1. **Input**, Did the scraper receive the expected input values?
2. **Interaction code**, Did it reach the correct page or response?
3. **Parser code**, Did the selectors extract the expected fields?
4. **Stages**, Did `next_stage()` create the expected child pages?
5. **Output records**, Did `collect()` emit the expected structure?
6. **Schema**, Does the output schema include the returned fields?
7. **Worker type**, Does the page require Browser worker behavior?

This flow helps isolate whether the issue is caused by input data, navigation, parsing, staging, schema, or worker configuration.

## Related

<CardGroup>
  <Card title="Worker types" icon="server" href="/datasets/scraper-studio/worker-types">
    Choose between Browser worker and Code worker
  </Card>

  <Card title="Scraper Studio functions" icon="code" href="/datasets/scraper-studio/functions">
    Full reference for interaction and parser commands
  </Card>

  <Card title="Develop a scraper" icon="wrench" href="/datasets/scraper-studio/develop-a-scraper">
    Step-by-step walkthrough of building a scraper in the IDE
  </Card>

  <Card title="Best practices" icon="list-check" href="/datasets/scraper-studio/best-practices">
    Recommended patterns for fast, reliable scrapers
  </Card>
</CardGroup>
