# Develop a scraper with the IDE

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/develop-a-scraper](https://docs.brightdata.com/datasets/scraper-studio/develop-a-scraper)
> **Category**: `datasets-and-scrapers`

---

Build a custom web scraper in the Bright Data Scraper Studio IDE: write interaction and parser code, preview results, debug runs, and ship to production.

This guide walks through building a custom web scraper in the Bright Data Scraper Studio IDE from scratch. You will write interaction code that navigates the target site, parser code that extracts structured fields, and then save the scraper to production and configure delivery. By the end, you will have a runnable scraper you can trigger by API, manually, or on a schedule.

## Prerequisites

* An active [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) with access to Scraper Studio
* Basic JavaScript familiarity (variables, functions, control flow)
* A target URL you want to scrape

<Tip>
  If you prefer describing the scraper in plain language instead of writing code, use the [Scraper Studio AI Agent](/datasets/scraper-studio/ai-agent). The agent generates the same kind of scraper the IDE would produce.
</Tip>

## How do I build a scraper in the IDE?

<Steps>
  <Step title="Open the Scraper Studio IDE">
    Go to [brightdata.com/cp/scrapers](https://brightdata.com/cp/scrapers), click **Scraper Studio**, then click **Open IDE** to open an empty scraper.
  </Step>

  <Step title="Start from scratch or pick a template">
    You can start from a blank scraper or use a template.

    Templates are pre-built scraper starters for common patterns and sites. Use a template when your target site or scraping pattern is similar to one of the available options.

    Use a blank scraper when you want full control over the scraping flow from the beginning.
  </Step>

  <Step title="Write interaction code">
    Interaction code navigates the target site and captures the data you need into the parser. Select **Interaction code** from the left sidebar and write the code in the main editor.

    A minimal interaction script:

    ```js theme={null}
    navigate(input.url);
    wait('.product-title');

    let data = parse();
    collect(data);
    ```

    In this example:

    * `navigate(input.url)` opens the page provided in the input.
    * `wait('.product-title')` waits for the expected element.
    * `parse()` runs the parser code.
    * `collect(data)` adds the parsed record to the output dataset.

    For a multi-page scrape, fan out with `next_stage()`:

    ```js theme={null}
    navigate(input.url);
    wait('.listing');
    let listings = parse().listings;
    for (let url of listings)
      next_stage({url});
    ```

    See [Scraper Studio functions](/datasets/scraper-studio/functions) for the full list of interaction commands.
  </Step>

  <Step title="Write parser code">
    Parser code reads the HTML or response loaded by interaction code and returns a structured JavaScript object.

    Select **Parser code** from the left sidebar and define the fields you want to extract.

    Parser code commonly uses Cheerio’s jQuery-like `$` selector:

    ```js theme={null}
    return {
      title: $('h1').text_sane(),
      price: new Money(+$('.price').text().replace(/\D+/g, ''), 'USD'),
      image: new Image($('img.product').attr('src')),
      listings: $('.listing a').toArray().map(el => $(el).attr('href')),
    };
    ```

    The object returned by parser code is available wherever interaction code calls `parse()`. See [Scraper Studio functions](/datasets/scraper-studio/functions#parser-functions) for the parser helpers Bright Data Scraper Studio provides.
  </Step>

  <Step title="Choose a worker type">
    In the **Settings** panel, pick the worker type:

    * **Code worker** (faster): for static HTML pages and public JSON endpoints
    * **Browser worker**: for JavaScript-rendered pages, clicks, scrolling, popups, or captured background traffic

    Start with **Code worker** when possible. Switch to **Browser worker** if the data you need is not available in the raw response or if you need [browser-only](/datasets/scraper-studio/functions#browser-only-functions) functions.

    See [**Worker types**](/datasets/scraper-studio/worker-types) for the full comparison.
  </Step>

  <Step title="Run a preview">
    Use **Preview** to test the scraper before making it active for production use.

    Preview runs the scraper code against the input selected in the **Input** tab at the bottom-left of the IDE. Use it to test interaction logic, parser logic, output structure, and errors before running the scraper on a larger input set.

    The results appear in the **Output** tab. Use the **Run log** and **Browser network** tabs to debug failed runs.

    > **Expected result:** the Output tab shows a structured record with the fields defined in your parser code.
  </Step>

  <Step title="Save to production">
    When the preview returns the expected output, click **Finish editing** in the top-right corner. For an existing production scraper, click **Save to production** to apply your changes.

    The scraper appears under **My Scrapers** in the control panel and can be triggered by API, manually, or on a schedule.
  </Step>

  <Step title="Configure delivery">
    Open the scraper from **My Scrapers** and configure **Delivery preferences**. Choose a delivery destination, such as API download, webhook, Amazon S3, GCS, Azure, SFTP, or email and a file format (JSON, NDJSON, CSV, XLSX). See [Initiate collection and delivery](/datasets/scraper-studio/initiate-collection-and-delivery-options) for all available options.
  </Step>

  <Step title="Initiate the scraper">
    After the scraper is active and delivery is configured, start a production run. Choose the initiation method that matches your workflow:

    * [Initiate by API](/datasets/scraper-studio/initiate-collection-and-delivery-options#how-do-i-trigger-a-scraper-run) - start a run from your application or automation workflow.
    * [Initiate manually](/datasets/scraper-studio/initiate-collection-and-delivery-options#how-do-i-trigger-a-scraper-run) - start a run from the control panel by entering inputs or uploading a file.
    * [Schedule a scraper](/datasets/scraper-studio/initiate-collection-and-delivery-options#how-do-i-trigger-a-scraper-run) - run the scraper automatically on a recurring schedule.
  </Step>
</Steps>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="How do I debug a scraper that fails on a specific input?">
    Open the scraper in the Bright Data Scraper Studio IDE and check the **Last errors** tab. Every failed input is stored with its exact error message and error code (up to the most recent 1,000 failures). Re-run the failing input from the IDE to reproduce the problem locally, fix the interaction or parser code, and save a new production version.
  </Accordion>

  <Accordion title="Can I edit a scraper that was generated by the AI Agent?">
    Yes. Every scraper in Bright Data Scraper Studio, regardless of how it was created, can be opened and edited in the IDE. You can change extraction logic, tweak selectors, add or remove output fields, and change the worker type.
  </Accordion>

  <Accordion title="How do I add fields to the output schema?">
    Click **Edit Schema** in the IDE's output schema panel and add the new fields, or return them from parser code and Bright Data Scraper Studio prompts you to update the schema when you save to production.
  </Accordion>

  <Accordion title="What's the difference between collect() and set_lines()?">
    Use `collect()` to append one record at a time; it is the default way to emit data. Use `set_lines()` when you are collecting records progressively and want the most recent snapshot delivered even if a later step throws an error. Every call to `set_lines()` overrides the previous one. See [collect](/datasets/scraper-studio/functions#collect-append-a-record-to-the-dataset) and [set\_lines](/datasets/scraper-studio/functions#set-lines-set-output-lines-overriding-previous-calls).
  </Accordion>
</AccordionGroup>

## Related

<CardGroup>
  <Card title="Scraper Studio functions" icon="code" href="/datasets/scraper-studio/functions">
    Full reference for interaction and parser commands
  </Card>

  <Card title="Best practices" icon="list-check" href="/datasets/scraper-studio/best-practices">
    Recommended patterns for fast, reliable scrapers
  </Card>

  <Card title="Scraper Studio IDE interface" icon="display-code" href="/datasets/scraper-studio/scraper-studio-ide-interface">
    Reference for every panel and control in the IDE
  </Card>

  <Card title="Self-Healing tool" icon="wand-magic-sparkles" href="/datasets/scraper-studio/self-healing-tool">
    Fix broken scrapers and add fields with plain-language prompts
  </Card>
</CardGroup>
