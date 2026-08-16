# Data enrichment agent quickstart

> **Official Source**: [https://docs.brightdata.com/ai/cookbooks/data-enrichment](https://docs.brightdata.com/ai/cookbooks/data-enrichment)
> **Category**: `ai-and-mcp`

---

Build an AI data enrichment agent in 10 minutes using LangGraph and Bright Data. Automate research and structured extraction from public web sources end-to-end.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Build an AI agent that automatically researches and extracts structured data using [LangGraph](https://langchain-ai.github.io/langgraph/) and [Bright Data](https://brightdata.com/).

<Info>
  This cookbook gets you from zero to a working AI enrichment agent in under 10 minutes.
</Info>

## What You'll Build

An AI agent that:

1. Takes a research topic and a JSON schema as input (e.g., "B2B enterprise CTOs from New York", "Stripe payments company", "history of renewable energy technologies")
2. Searches the web using **Bright Data SERP API** (real search results, geo-targeting)
3. Scrapes websites using **Bright Data Web Unlocker** (bypasses anti-bot measures)
4. Uses an LLM to extract and structure the data
5. Validates and returns structured JSON matching your schema

## Prerequisites

* A [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) with API key from the [dashboard](https://brightdata.com/cp/api_tokens)
* An [Anthropic](https://console.anthropic.com/) or [OpenAI](https://platform.openai.com/signup) API key
* Python 3.10+

***

## Step 1: Install Dependencies

```bash theme={null}
pip install langgraph langchain-brightdata langchain-anthropic
```

***

## Step 2: Set Environment Variables

Get your API keys:

* [Bright Data API Key](/api-reference/authentication#how-do-i-generate-a-new-api-key) - Generate from your dashboard
* [Anthropic API Key](https://console.anthropic.com/settings/keys) - Get from Console

```bash theme={null}
export BRIGHT_DATA_API_KEY="your-bright-data-api-key"
export ANTHROPIC_API_KEY="your-anthropic-api-key"
```

***

## Step 3: Create the Enrichment Agent

Create a file called `enrichment_agent.py` and build it in three parts:

### 3.1: Imports and State Definition

Define the agent's state to track the research topic, schema, messages, and extracted info.

```python theme={null}
"""Simple data enrichment agent using LangGraph + Bright Data."""

import json
from dataclasses import dataclass, field
from typing import Any, Annotated, List, Optional

from langchain_anthropic import ChatAnthropic
from langchain_brightdata import BrightDataSERP, BrightDataUnlocker
from langchain_core.messages import AIMessage, HumanMessage, BaseMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode


# Agent state tracks topic, schema, conversation history, and final output
@dataclass
class AgentState:
    """State for the enrichment agent."""
    topic: str                                                              # Research topic
    extraction_schema: dict[str, Any]                                       # JSON schema for output
    messages: Annotated[List[BaseMessage], add_messages] = field(default_factory=list)  # Chat history
    info: Optional[dict[str, Any]] = None                                   # Extracted result
```

### 3.2: Tool Definitions

Configure Bright Data tools for web search and content scraping.

```python theme={null}
# --- Tools ---

# SERP tool: Searches Google and returns structured results
serp_tool = BrightDataSERP(
    search_engine="google",
    country="us",
    language="en",
    results_count=5,
    parse_results=True,
)

# Unlocker tool: Scrapes any URL, bypassing anti-bot protection
unlocker_tool = BrightDataUnlocker(
    data_format="markdown",
)


@tool
async def search(query: str) -> str:
    """Search the web for information about a topic."""
    results = await serp_tool.ainvoke(query)
    return json.dumps(results, indent=2)


@tool
async def scrape_website(url: str) -> str:
    """Scrape and extract content from a specific URL."""
    content = await unlocker_tool.ainvoke(url)
    return str(content)[:20000]  # Limit content to avoid token overflow


tools = [search, scrape_website]
```

### 3.3: Agent Graph and Execution

Build the LangGraph workflow that orchestrates search → scrape → extract.

```python theme={null}
# --- Agent ---

# System prompt instructs the LLM on its research task
SYSTEM_PROMPT = """You are a research agent. Your task is to gather information about a topic and extract structured data.

You have access to these tools:
- search: Search the web for information
- scrape_website: Get content from a specific URL
- submit_info: Call this when you have gathered all the required information

Research topic: {topic}

Required information schema:
{schema}

Search for relevant information, scrape important pages, then call submit_info with the extracted data."""


def create_agent():
    """Create the enrichment agent graph."""
    llm = ChatAnthropic(model="claude-sonnet-4-20250514")

    async def call_model(state: AgentState) -> dict:
        """Call the LLM to decide next action or submit results."""
        prompt = SYSTEM_PROMPT.format(
            topic=state.topic,
            schema=json.dumps(state.extraction_schema, indent=2)
        )
        messages = [HumanMessage(content=prompt)] + list(state.messages)

        # Dynamic tool for structured output submission
        info_tool = {
            "name": "submit_info",
            "description": "Submit the extracted information when done researching.",
            "parameters": state.extraction_schema,
        }

        model = llm.bind_tools(tools + [info_tool])
        response = await model.ainvoke(messages)

        # Check if agent is submitting final info
        info = None
        if hasattr(response, 'tool_calls') and response.tool_calls:
            for tc in response.tool_calls:
                if tc["name"] == "submit_info":
                    info = tc["args"]
                    break

        return {"messages": [response], "info": info}

    def route(state: AgentState) -> str:
        """Route: end if info submitted, else continue tool loop."""
        if state.info:
            return "__end__"
        if not state.messages:
            return "agent"

        last_msg = state.messages[-1]
        if isinstance(last_msg, AIMessage) and hasattr(last_msg, 'tool_calls') and last_msg.tool_calls:
            for tc in last_msg.tool_calls:
                if tc["name"] == "submit_info":
                    return "__end__"
            return "tools"
        return "agent"

    # Build the graph: agent ↔ tools loop until info is extracted
    graph = StateGraph(AgentState)
    graph.add_node("agent", call_model)
    graph.add_node("tools", ToolNode(tools))
    graph.add_edge("__start__", "agent")
    graph.add_conditional_edges("agent", route)
    graph.add_edge("tools", "agent")

    return graph.compile()


async def enrich(topic: str, schema: dict) -> dict:
    """Run the enrichment agent and return structured data."""
    agent = create_agent()
    result = await agent.ainvoke({
        "topic": topic,
        "extraction_schema": schema,
    })
    return result.get("info", {})


# --- Example Usage ---
if __name__ == "__main__":
    import asyncio

    schema = {
        "type": "object",
        "properties": {
            "company_name": {"type": "string"},
            "industry": {"type": "string"},
            "headquarters": {"type": "string"},
            "founded": {"type": "string"},
            "key_products": {"type": "array", "items": {"type": "string"}},
        },
        "required": ["company_name", "industry"]
    }

    result = asyncio.run(enrich("Stripe payments company", schema))
    print(json.dumps(result, indent=2))
```

***

## Step 4: Run the Agent

```bash theme={null}
python enrichment_agent.py
```

**Expected output:**

```json theme={null}
{
  "company_name": "Stripe",
  "industry": "Financial Technology / Payments",
  "headquarters": "San Francisco, California",
  "founded": "2010",
  "key_products": [
    "Stripe Payments",
    "Stripe Billing",
    "Stripe Connect",
    "Stripe Atlas"
  ]
}
```

***

## How It Works

1. **Agent** receives topic and schema, decides what to search
2. **Search** uses Bright Data SERP API for real search results
3. **Scrape** uses Bright Data Web Unlocker to get page content
4. **Agent** analyzes content and either continues researching or submits info
5. **Output** is structured JSON matching your schema

***

## How to customize the agent

### Different Extraction Schema

```python theme={null}
# Extract competitor information
competitor_schema = {
    "type": "object",
    "properties": {
        "competitors": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "market_position": {"type": "string"},
                    "key_differentiator": {"type": "string"}
                }
            }
        }
    }
}

result = await enrich("Stripe competitors in payment processing", competitor_schema)
```

### How to target by geography

```python theme={null}
serp_tool = BrightDataSERP(
    search_engine="google",
    country="de",      # Germany
    language="de",     # German
    results_count=10,
)
```

### Use OpenAI Instead of Anthropic

```python theme={null}
from langchain_openai import ChatOpenAI

# Replace the LLM initialization
llm = ChatOpenAI(model="gpt-4o")
```

***

## Next Steps

<CardGroup>
  <Card title="LinkedIn Scraping" icon="linkedin" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url">
    Add LinkedIn profile enrichment
  </Card>

  <Card title="LangChain Integration" icon="link" href="/integrations/langchain">
    Full langchain-brightdata documentation
  </Card>
</CardGroup>

## Where to find the source code

<Card title="GitHub Repository" icon="github" href="https://github.com/brightdata/ai-data-enrichment-agent">
  Full source code and additional examples
</Card>

<Check>
  You now have an AI-powered data enrichment agent! Customize the schema to extract any structured data you need.
</Check>
