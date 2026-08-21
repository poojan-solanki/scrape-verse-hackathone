# Scraper Studio

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/overview](https://docs.brightdata.com/datasets/scraper-studio/overview)
> **Category**: `datasets-and-scrapers`

---

Build custom web scrapers with Bright Data Scraper Studio: AI Agent, JavaScript IDE or CLI, running on Bright Data's proxy and unblocking infrastructure.

<div>
  <div>
    <div>
      <div>
        <span>Scraper Studio</span>

        <h1>Build a custom scraper for any website</h1>

        <p>
          No pre-built scraper for your target site? Describe the data you want and build one on Bright Data's proxy and unblocking infrastructure. No servers, proxy rotation or retry logic to manage.
        </p>

        <div>
          <a href="/datasets/scraper-studio/quickstart">Start building</a>
        </div>
      </div>

      <div>
        <img alt="Bright Data Scraper Studio hero illustration" />
      </div>
    </div>

    <div>
      <span>💡</span>
      <span>Prefer no code? Describe your target in plain language and let the <a href="/datasets/scraper-studio/ai-agent">AI Agent</a> generate the scraper from your dashboard.</span>
    </div>

    ## Create a scraper from your terminal

    Install the Bright Data CLI, log in, then pass a target URL and one sentence describing the data you want. Bright Data's AI Agent generates the output schema, writes the scraper code and returns a Collector ID.

    ```bash theme={null}
    npm install -g @brightdata/cli
    bdata login
    bdata scraper create https://news.ycombinator.com \
      "Extract top stories: title, url, points, author, comment count"
    ```

    The same scraper opens in the AI Agent or the IDE for edits, and runs unchanged inside the embedded terminal of any coding agent like Claude Code, Cursor or Codex. See the full walkthrough in [Build a scraper with the Bright Data CLI](/datasets/scraper-studio/build-with-the-cli).

    ## Which way to build

    <CardGroup>
      <Card title="AI Agent" icon="robot" href="/datasets/scraper-studio/ai-agent">
        Describe the data in plain language. Bright Data AI generates the schema and writes the scraper code. No-code, fastest to a working scraper.
      </Card>

      <Card title="IDE" icon="code" href="/datasets/scraper-studio/scraper-studio-ide-interface">
        Write and debug JavaScript in a browser-based editor. Full control over interaction and parsing logic.
      </Card>

      <Card title="Bright Data CLI" icon="terminal" href="/datasets/scraper-studio/build-with-the-cli">
        Create, run and self-heal scrapers from your terminal or any coding agent. **New.**
      </Card>
    </CardGroup>

    Every scraper produces the same output regardless of how you build it. A scraper started in the AI Agent can be opened and edited in the IDE at any time, so you are never locked into one approach.

    ## How it works

    Every Bright Data Scraper Studio scraper performs two core operations, then keeps itself running as the target site changes.

    <CardGroup>
      <Card title="Interaction" icon="arrow-pointer">
        Navigate to a target URL, handle pagination, click elements or send HTTP requests.
      </Card>

      <Card title="Parsing" icon="brackets-curly">
        Read the page HTML and extract structured fields into a defined schema: JSON, CSV, NDJSON or XLSX.
      </Card>

      <Card title="Self-healing" icon="wand-magic-sparkles" href="/datasets/scraper-studio/self-healing-tool">
        When a site layout changes and a scraper breaks, update it with a plain-language prompt instead of rewriting selectors.
      </Card>
    </CardGroup>

    <iframe title="Scrape ANY website - Scraper Studio by Bright Data" />

    ## When to use Scraper Studio

    Use Bright Data Scraper Studio when the data you need is not in the [Scraper library](https://brightdata.com/cp/scrapers/browse), you want ownership of the scraper logic and you do not want to manage proxies or infrastructure yourself. For the full comparison and the AI Agent vs IDE trade-offs, see [Understanding Scraper Studio](/datasets/scraper-studio/introduction).

    <CardGroup>
      <Card title="Pre-built scrapers" icon="layer-group" href="/datasets/scrapers/overview">
        Need a popular site with zero setup? Use the 1000+ pre-built scrapers in the Web Scraper API library instead.
      </Card>

      <Card title="Managed services" icon="screwdriver-wrench" href="/datasets/scrapers/managed-services">
        Want a scraper built and operated for you? Bright Data's team builds custom scrapers for your targets. **No code required.**
      </Card>

      <Card title="Datasets marketplace" icon="store" href="/datasets/marketplace">
        Skip scraping entirely. Buy ready-made datasets refreshed on a schedule. **No code required.**
      </Card>
    </CardGroup>

    ## What you can build

    <CardGroup>
      <Card title="Niche site scraping" icon="globe" href="/datasets/scraper-studio/quickstart">
        Extract structured data from any site without a pre-built scraper, from regional marketplaces to industry directories.
      </Card>

      <Card title="Price monitoring" icon="tag" href="/datasets/scraper-studio/ai-agent">
        Track prices, stock and listings on sites the standard scraper library does not cover.
      </Card>

      <Card title="AI and RAG ingestion" icon="robot" href="/datasets/scraper-studio/build-with-the-cli">
        Turn target pages into clean JSON or NDJSON to feed model training and retrieval pipelines.
      </Card>

      <Card title="Lead generation" icon="user-magnifying-glass" href="/datasets/scraper-studio/ai-agent">
        Pull contacts and company data from directories and listings into your sales pipeline.
      </Card>

      <Card title="Content aggregation" icon="newspaper" href="/datasets/scraper-studio/develop-a-scraper">
        Collect articles, listings or reviews from many sources into one structured feed.
      </Card>

      <Card title="Market research" icon="chart-line" href="/datasets/scraper-studio/complete-examples">
        Aggregate competitor activity, catalog data and trends from sites that change often.
      </Card>
    </CardGroup>

    ## Where to learn more

    <CardGroup>
      <Card title="Get started" icon="rocket">
        [Quickstart](/datasets/scraper-studio/quickstart)

        [Build with AI Agent](/datasets/scraper-studio/ai-agent)

        [Build with the CLI](/datasets/scraper-studio/build-with-the-cli)
      </Card>

      <Card title="IDE" icon="code">
        [IDE interface](/datasets/scraper-studio/scraper-studio-ide-interface)

        [Develop a scraper](/datasets/scraper-studio/develop-a-scraper)

        [Functions reference](/datasets/scraper-studio/functions)
      </Card>

      <Card title="Operations" icon="gauge-high">
        [Specifications](/datasets/scraper-studio/specifications)

        [Delivery options](/datasets/scraper-studio/initiate-collection-and-delivery-options)

        [Best practices](/datasets/scraper-studio/best-practices)
      </Card>

      <Card title="API basics" icon="code-branch">
        [Scraper Studio API](/api-reference/scraper-studio-api/Trigger_a_scraper_for_batch_collection_method)

        [Worker types](/datasets/scraper-studio/worker-types)

        [FAQs](/datasets/scraper-studio/faqs)
      </Card>
    </CardGroup>
  </div>
</div>
