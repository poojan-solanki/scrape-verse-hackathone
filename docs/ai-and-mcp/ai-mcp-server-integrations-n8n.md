# Set up the Bright Data MCP with n8n

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/n8n](https://docs.brightdata.com/ai/mcp-server/integrations/n8n)
> **Category**: `ai-and-mcp`

---

Connect the Bright Data MCP server to n8n to build automated, no-code data workflows with web search, scraping and structured extraction nodes.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Overview

This guide explains how to integrate **Bright Data MCP** with **n8n** to build automated, AI-driven workflows.

You can connect MCP to n8n in two ways:

1. **Streamable HTTP MCP** – Easiest, cloud-based setup

2. **Self-hosted MCP Client** – Advanced, customizable deployment

Choose the approach that best fits your infrastructure and control requirements.

***

## Streamable HTTP MCP Integration

Streamable HTTP is the **recommended option** for most users.

It requires no local setup and allows n8n AI agents to interact with Bright Data MCP over HTTPS with real-time streaming.

### Requirements

* A **Bright Data account**\
  [https://brightdata.com/?hs\_signup=1\&utm\_source=docs](https://brightdata.com/?hs_signup=1\&utm_source=docs)

* An **API token** from your user settings\
  [https://brightdata.com/cp/setting/users](https://brightdata.com/cp/setting/users)

* An AI-enabled workflow (e.g., an **AI Agent**) in n8n

***

### How to configure remote MCP

1. **Create an AI Agent** in n8n or your preferred AI orchestration platform.

2. **Attach the following components:**

   * A **Chat Model** (e.g., `gpt-4`, `gpt-4o`)

   * An **MCP Client** node

3. **Configure the Remote MCP URL** using your API token:

```text theme={null}
https://mcp.brightdata.com/mcp?token=YOUR_API_TOKEN_HERE
```

4. **Select MCP tools**

   * Expose specific tools explicitly, or

   * Allow the AI agent to choose tools dynamically

Once configured, the AI agent will invoke MCP tools as needed and stream responses in real time back into your workflow.

### When to Use Streamable HTTP

* No-code or low-code automation

* Fast setup with minimal infrastructure

* Cloud-hosted n8n deployments

* Real-time, AI-driven data extraction

***

## Self-hosted MCP Integration (MCP Client – Community Node)

The self-hosted option provides maximum control by running the Bright Data MCP client locally or within your own infrastructure.

This approach is best suited for advanced users who require custom rate limits, isolated environments, or internal networking.

### Requirements

* Node.js installed\
  [https://nodejs.org/en/download](https://nodejs.org/en/download)

* A Bright Data account\
  [https://brightdata.com/?hs\_signup=1\&utm\_source=docs](https://brightdata.com/?hs_signup=1\&utm_source=docs)

* An API token from user settings\
  [https://brightdata.com/cp/setting/users](https://brightdata.com/cp/setting/users)

* n8n with support for community or custom nodes

### How to configure self-hosted MCP

1. **Create an AI Agent** in n8n.

2. **Attach the following components:**

   * A **Chat Model** (e.g., `gpt-4`, `gpt-4o`)

   * **Bright Data MCP Client** (via HTTP or WebSocket)

3. **Configure the MCP client execution settings:**

   | Variable     | Value                                                                                                                                        |
   | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
   | Command      | `npx`                                                                                                                                        |
   | Arguments    | `@brightdata/mcp`                                                                                                                            |
   | Environments | `API_KEY=<api-key>`<br />`WEB_UNLOCKER_ZONE=<unlocker_api_zone_name>`<br />`BROWSER_ZONE=<browser_zone_name>`<br />`RATE_LIMIT=<rate-limit>` |

4. **Example values for RATE\_LIMIT:**

   * `100/1h`
   * `50/30m`
   * `10/5s`

   These limits help control request throughput and prevent overuse of MCP tools.

### When to Use Self-hosted MCP

* Enterprise or regulated environments

* Custom networking or security requirements

* Fine-grained rate limiting

* On-premise or private-cloud n8n deployments

***

## Summary

By integrating Bright Data MCP with n8n, you can build powerful AI-driven automation pipelines without writing complex code.

* **Streamable HTTP MCP** → Fastest and simplest setup

* **Self-hosted MCP Client** → Maximum flexibility and control

Both approaches enable AI agents to access Bright Data tools seamlessly, unlocking advanced data workflows at scale.
Bright Data - All in One Platform for Proxies and Web Scraping
Award winning proxy networks, powerful web scrapers, and ready-to-use datasets for download. Welcome to the world's #1 web data platform.
