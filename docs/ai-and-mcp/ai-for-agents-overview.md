# Bright Data for AI coding agents

> **Official Source**: [https://docs.brightdata.com/ai/for-agents/overview](https://docs.brightdata.com/ai/for-agents/overview)
> **Category**: `ai-and-mcp`

---

Everything a coding agent needs to work with Bright Data - LLM-optimized docs, skills, MCP server, and plain-text references. Covers 100+ sources.

## For Coding Agents

This section is designed for **AI coding agents** (Claude Code, Cursor, Copilot, Windsurf, Gemini CLI, etc.) and the developers building with them.

Bright Data gives agents production-grade access to the live web: search results, web page content, structured datasets, and anti-bot bypass - all through simple APIs.

***

## Where to start

<CardGroup>
  <Card title="llms.txt" icon="file-lines" href="/llms.txt">
    Machine-readable index of all Bright Data documentation. Feed this to your agent for full product awareness.
  </Card>

  <Card title="llms-full.txt" icon="file-code" href="/llms-full.txt">
    Complete documentation in a single plain-text file - ideal for RAG pipelines or direct context injection.
  </Card>

  <Card title="Skills" icon="bolt" href="https://github.com/brightdata/skills">
    Pre-packaged skill bundles for Claude Code, Cursor, and more. Install and instantly gain Bright Data expertise.
  </Card>

  <Card title="Docs MCP" icon="server" href="/mcp">
    MCP server that gives your agent access to Bright Data's full documentation as queryable resources.
  </Card>
</CardGroup>

***

## What can agents do with Bright Data?

<CardGroup>
  <Card title="Search the web" icon="magnifying-glass" href="/scraping-automation/serp-api/introduction">
    Real-time Google, Bing, and SERP results via API
  </Card>

  <Card title="Scrape any page" icon="unlock" href="/scraping-automation/web-unlocker/introduction">
    Bypass CAPTCHAs, bot protection, and dynamic content
  </Card>

  <Card title="Use structured datasets" icon="table" href="/datasets/marketplace/overview">
    Ready-to-use datasets for Amazon, LinkedIn, and 100+ sources
  </Card>
</CardGroup>

***

## Security & Compliance

Bright Data's MCP Server and APIs are covered under **ISO 27001:2022, ISO 27017, and ISO 27018** certifications, all explicitly scoped to AI agent and RAG system use cases. See the full security posture:

<Card title="Security & Compliance" icon="shield-check" href="/general/security/security-overview">
  ISO certifications, SOC 2 Type II, penetration test results, encryption standards, and best practices for agentic workflows.
</Card>

***

## Recommended path for agents

<Steps>
  <Step title="Install a Skill">
    Start with a ready-made skill bundle. Skills teach your agent Bright Data APIs with embedded best practices and runnable scripts.

    See [Skills →](/ai/for-agents/skills)
  </Step>

  <Step title="Connect the Bright Data MCP Server">
    Add Bright Data's Bright Data MCP server so your agent can search and fetch live web data directly from inside any supported tool.

    See [Bright Data MCP Server →](/ai/mcp-server/overview)
  </Step>

  <Step title="Load the LLM reference">
    Point your agent at `llms.txt` or `llms-full.txt` for a full map of Bright Data products and APIs.

    See [LLM References →](/ai/for-agents/llm-references)
  </Step>
</Steps>
