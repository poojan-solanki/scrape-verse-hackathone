# When to use Scraper Studio

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/introduction](https://docs.brightdata.com/datasets/scraper-studio/introduction)
> **Category**: `datasets-and-scrapers`

---

Decide when Bright Data Scraper Studio fits your use case and whether to build with the AI Agent or the JavaScript IDE, with a side-by-side comparison.

Bright Data Scraper Studio is a cloud-hosted environment for building, running, and managing custom web scrapers, running entirely on Bright Data's proxy and unblocking infrastructure. This page explains when to choose Scraper Studio over other Bright Data products and which build mode fits your use case.

For a visual overview, runnable example and the full list of build paths, see the [Scraper Studio overview](/datasets/scraper-studio/overview).

## Which development mode to use

Bright Data Scraper Studio offers two ways to build scrapers:

| Mode     | How it works                                                                                                | Best for                         |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------- |
| AI Agent | Describe the data you want in plain language. Bright Data AI generates a schema and writes the scraper code | No-code users, fast prototyping  |
| IDE      | Write and test JavaScript directly in a browser-based code editor with debugging tools                      | Developers who need full control |

Both modes produce the same type of scraper: meaning you're never locked into one approach. A scraper built by AI Agent can be opened and edited in the IDE at any time, and any scraper can be updated using the [Self-healing tool](/datasets/scraper-studio/self-healing-tool).

## When to use Scraper Studio vs. other Bright Data products

Use Scraper Studio when the data you need isn't in the [Datasets Marketplace](/datasets/marketplace), you want ownership of the scraper logic, and you don't want to manage proxies or infrastructure yourself.

| Scenario                                                                        | Recommended product                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Need data from a popular site with zero setup                                   | [Datasets Marketplace](/datasets/marketplace)           |
| Need a scraper built and maintained by Bright Data                              | [Managed Services](/datasets/scrapers/managed-services) |
| Need to build a custom scraper using AI or code on Bright Data's infrastructure | Scraper Studio                                          |

## AI Agent vs. IDE: Key trade-offs

|               | AI Agent                                   | IDE                                 |
| ------------- | ------------------------------------------ | ----------------------------------- |
| Setup time    | Minutes, describe and run                  | Longer, write, test, debug          |
| Code control  | AI writes the code                         | You own every line                  |
| Customization | Via Self-healing tool prompts              | Direct JavaScript editing           |
| Best for      | Fast scraper creation, non-technical users | Complex logic, multi-stage scrapers |

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Should I use AI Agent or IDE mode?">
    Use AI Agent if you want to get started fast or you're not a developer. Use Bright Data IDE mode if you need full control over scraper logic or are building complex, multi-stage scrapers.
  </Accordion>

  <Accordion title="Can I switch between AI Agent and IDE?">
    Yes. Any scraper created in AI Agent mode can be opened and edited in the IDE. You can also use the [Self-Healing Tool](/datasets/scraper-studio/self-healing-tool) to update scrapers using plain language prompts.
  </Accordion>

  <Accordion title="What's the difference between Scraper Studio and Scrapers Library?">
    [Scrapers Library](https://brightdata.com/products/web-scraper) contains pre-built scrapers for popular sites. Bright Data Scraper Studio is for building custom scrapers from scratch when your target site isn't in the library.
  </Accordion>

  <Accordion title="Do I need to manage proxies or servers?">
    No. Bright Data Scraper Studio handles all proxy management and infrastructure automatically.
  </Accordion>
</AccordionGroup>

## Next steps

<CardGroup>
  <Card title="Build with AI Agent" icon="robot" href="/datasets/scraper-studio/ai-agent">
    Build your first scraper using plain language prompts
  </Card>

  <Card title="Explore the IDE" icon="code" href="/datasets/scraper-studio/scraper-studio-ide-interface">
    Get to know the browser-based code editor
  </Card>

  <Card title="Worker types" icon="server" href="/datasets/scraper-studio/worker-types">
    Understand how Scraper Studio runs your jobs
  </Card>
</CardGroup>

## Where to learn more

<CardGroup>
  <Card title="Scraper Studio Specifications" icon="file-lines" href="/datasets/scraper-studio/specifications">
    View infrastructure limits, billing model, and data retention rules
  </Card>
</CardGroup>
