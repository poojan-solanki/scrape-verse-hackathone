# LLM-friendly documentation references

> **Official Source**: [https://docs.brightdata.com/ai/for-agents/llm-references](https://docs.brightdata.com/ai/for-agents/llm-references)
> **Category**: `ai-and-mcp`

---

Plain-text and machine-readable versions of all Bright Data documentation across 1000+ pages, built for AI agents, RAG pipelines and LLM context injection.

## Overview

Bright Data publishes two machine-readable documentation files following the [llms.txt standard](https://llmstxt.org):

| File            | URL                                                   | Best for                                       |
| --------------- | ----------------------------------------------------- | ---------------------------------------------- |
| `llms.txt`      | [`docs.brightdata.com/llms.txt`](/llms.txt)           | Agent awareness, navigation, retrieval routing |
| `llms-full.txt` | [`docs.brightdata.com/llms-full.txt`](/llms-full.txt) | RAG pipelines, context injection, fine-tuning  |

***

## llms.txt - Documentation Index

`llms.txt` is a structured, markdown-formatted index of all Bright Data documentation pages - one entry per page with a short description and a direct link.

**Format:**

```markdown theme={null}
# Bright Data Docs

## Docs

- [Agent Web Access](/ai/agents.md): Complete web infrastructure for AI agents
- [SERP API Introduction](/scraping-automation/serp-api/introduction.md): Real-time search results
- [Web Unlocker](/scraping-automation/web-unlocker/introduction.md): Bypass bot detection
...
```

Note that every link points to the `.md` version of the page - clean markdown, no HTML.

**Use it when:**

* Loading into an agent's system prompt for full product awareness
* Feeding a retrieval system to decide which doc pages to fetch
* Giving a coding agent a map of available products before it starts a task

```bash theme={null}
# Quick preview
curl https://docs.brightdata.com/llms.txt | head -40

# Download for offline use
curl -o brightdata-llms.txt https://docs.brightdata.com/llms.txt
```

***

## llms-full.txt - Complete Documentation

`llms-full.txt` contains the complete text of all Bright Data documentation in a single file - clean markdown, no HTML, no navigation chrome.

**Use it when:**

* Building a RAG pipeline over Bright Data docs
* Injecting full product knowledge into a long-context model (Gemini 1.5 Pro, Claude, etc.)
* Creating a fine-tuning or evaluation dataset
* Giving an agent complete offline reference

```bash theme={null}
# Download
curl -o brightdata-llms-full.txt https://docs.brightdata.com/llms-full.txt
```

<Warning>
  `llms-full.txt` is large. For real-time agent sessions, loading `llms.txt` first and fetching specific pages on demand is more token-efficient.
</Warning>

***

## Loading into your agent

<Tabs>
  <Tab title="Claude Code">
    Reference the file directly in a prompt - Claude Code will fetch and read it:

    ```text theme={null}
    Please read https://docs.brightdata.com/llms.txt to understand the available
    Bright Data products, then help me choose the right API for scraping Amazon product pages.
    ```

    Or save it as a project context file:

    ```bash theme={null}
    mkdir -p .claude
    curl -o .claude/brightdata-docs.txt https://docs.brightdata.com/llms.txt
    ```

    Then reference it in your CLAUDE.md or system prompt:

    ```markdown theme={null}
    # Project context
    See .claude/brightdata-docs.txt for the full Bright Data product reference.
    ```
  </Tab>

  <Tab title="Cursor / Windsurf">
    Add as a project rules file so your agent has it in context automatically:

    ```bash theme={null}
    # Save to project rules directory
    curl -o .cursor/rules/brightdata.md https://docs.brightdata.com/llms.txt
    # or for Windsurf:
    curl -o .windsurf/rules/brightdata.md https://docs.brightdata.com/llms.txt
    ```

    Now every Cursor Composer or Windsurf Cascade session has Bright Data product awareness built in.
  </Tab>

  <Tab title="RAG Pipeline">
    ```python theme={null}
    import httpx
    from langchain.text_splitter import MarkdownTextSplitter

    # Fetch the full docs
    response = httpx.get("https://docs.brightdata.com/llms-full.txt")
    docs_content = response.text

    # Split into chunks
    splitter = MarkdownTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = splitter.create_documents([docs_content])

    # Add to your vector store
    vectorstore.add_documents(chunks)
    ```
  </Tab>

  <Tab title="OpenAI / Custom LLM">
    ```python theme={null}
    import httpx

    # Fetch the index
    llms_txt = httpx.get("https://docs.brightdata.com/llms.txt").text

    messages = [
        {
            "role": "system",
            "content": f"""You are a helpful assistant with expertise in Bright Data's web data APIs.

    Here is the full index of available documentation:
    {llms_txt}

    Use this to understand which products and APIs are available, then fetch
    specific pages when you need full details on a product."""
        },
        {"role": "user", "content": "How do I scrape Amazon product pages?"}
    ]
    ```
  </Tab>
</Tabs>

***

## Per-page markdown access

Every Bright Data documentation page is also available as clean markdown. Append `.md` to any page URL:

| Page                                                                | Markdown URL                                                                           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `docs.brightdata.com/ai/agents`                                     | [`docs.brightdata.com/ai/agents.md`](/ai/agents.md)                                    |
| `docs.brightdata.com/scraping-automation/web-unlocker/introduction` | [`...web-unlocker/introduction.md`](/scraping-automation/web-unlocker/introduction.md) |
| `docs.brightdata.com/ai/mcp-server/overview`                        | [`...mcp-server/overview.md`](/ai/mcp-server/overview.md)                              |

This lets agents fetch specific pages on demand without parsing any HTML.

<Tip>
  **Recommended pattern for agents:** Load `llms.txt` to understand what's available → identify the relevant page → fetch that page's `.md` URL for full details. This keeps token usage efficient while giving the agent complete information when needed.
</Tip>

***

## Next steps

<CardGroup>
  <Card title="Install a Skill" icon="bolt" href="/ai/for-agents/skills">
    Pre-packaged agent knowledge bundles with runnable scripts
  </Card>

  <Card title="Connect the Docs MCP" icon="server" href="/ai/for-agents/docs-mcp">
    Query Bright Data docs as MCP resources from inside your agent tool
  </Card>
</CardGroup>
