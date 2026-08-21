# Getting started

> **Official Source**: [https://docs.brightdata.com/scraping-automation/crawl-api/quick-start](https://docs.brightdata.com/scraping-automation/crawl-api/quick-start)
> **Category**: `scraping-automation`

---

Get started with the Bright Data Crawl API using either of 2 methods (API or no-code Control Panel) to trigger crawl jobs and retrieve structured data.

There are two ways to use Crawl API:

1. API-Based collection
2. No-Code collection (via Control Panel)

## How to collect via API

1. [Trigger a data collection](/api-reference/rest-api/scraper/asynchronous-requests) job via a simple HTTP POST
2. Specify the URLs and output format
3. Receive a `snapshot_id` to retrieve results later.

```sh Code Example theme={null}
curl -H "Authorization: Bearer API_KEY" -H "Content-Type: application/json" -d '[{"url":"https://example.com"},{"url":"https://example.com/1"}]' "https://api.brightdata.com/datasets/v3/trigger?dataset_id=<dataset_id>&include_errors=<true/false>&custom_output_fields=<custom_output_fields>"
```

### Query Parameters:

<ParamField type="query">
  Your dataset ID (e.g., `gd_m6gjtfmeh43we6cqc`)
</ParamField>

<ParamField type="query">
  include error logs in results
</ParamField>

<ParamField type="query">
  `markdown`, `html`, `ld_json`, etc.  \\

  Choose the format that best fits your workflow:

  <CodeGroup>
    ```md markdown theme={null}
    # Main Article Title

    This is the introduction paragraph with **bold text** and *italics*.

    ## Subheading

    - List item one
    - List item two

    > This is a blockquote from the articlesh Code Example


    [Link text](https://example.com/more-info)
    ![Image description](https://example.com/image.jpg)
    ```

    ```html html2text theme={null}

    Main Article Title

    This is the introduction paragraph with bold text and italics.

    Subheading

    * List item one
    * List item two

    This is a blockquote from the articlesh Code Example


    Link text [https://example.com/more-info]
    [Image: Image description]
    ```

    ```html page_html theme={null}
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Example Article</title>
      <link rel="stylesheet" href="/styles.css">
      <script src="/analytics.js"></script>
    </head>
    <body>
      <header>
        <nav><!-- Navigation HTML --></nav>
      </header>
      <main>
        <h1>Main Article Title</h1>
        <p>This is the introduction paragraph with <strong>bold text</strong> and <em>italics</em>.</p>
        <h2>Subheading</h2>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
        <blockquote>This is a blockquote from the article</blockquote>
        <a href="https://example.com/more-info">Link text</a>
        <img src="https://example.com/image.jpg" alt="Image description">sh Code Example
      </main>
    </body>
      <footer><!-- Footer HTML --></footer>
    </html>
    ```

    ```json ld_json theme={null}
    {
      "@context":"https://schema.org",
      "@type":"Article",
      "headline":"Main Article Title",
      "author":{
        "@type":"Person",
        "name":"Jane Smith"
      },
      "datePublished":"2023-08-15T12:00:00Z",
      "dateModified":"2023-08-15T14:22:31Z",
      "publisher":{
        "@type":"Organization",
        "name":"Example Publication",
        "logo":{
          "@type":"ImageObject",
          "url":"https://example.com/logo.png"
        }
      },
      "image":"https://example.com/image.jpg",
      "description":"This is the introduction paragraph with bold text and italics.",
      "mainEntityOfPage":"https://example.com/article"
    }
    ```
  </CodeGroup>
</ParamField>

## How results are delivered

Deliver results to:

* Webhooks
* External storage (S3, GCS, etc.)
* Direct download via API or Control Panel

## No-Code Scraper (Control Panel)

Use our Control Panel to launch crawls without writing a single line of code.
Steps:

1. Open the Crawl API Control Panel
2. Enter the target domain or URLs
3. Choose your output format
4. Start the crawl
5. Download results directly from the dashboard
