# NVIDIA NeMo Agent Toolkit integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/nvidia-nemo](https://docs.brightdata.com/ai/mcp-server/integrations/nvidia-nemo)
> **Category**: `ai-and-mcp`

---

Connect the NVIDIA NeMo Agent Toolkit to the Bright Data MCP server (60+ tools) to give NeMo-powered agents web search, scraping and structured data.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Overview

NVIDIA NeMo Agent Toolkit is an open-source framework for building, profiling, and optimizing AI agents and workflows. It provides framework-agnostic architecture, YAML-based configuration, built-in MCP support, and unified monitoring across multi-agent systems.

## Hosted MCP

<Steps>
  <Step title="Get your API token">
    1. Go to [Bright Data user settings](https://brightdata.com/cp/setting/users)
    2. Copy your API token (it looks like: `2dceb1aa0***************************`)
  </Step>

  <Step title="Install NeMo Agent Toolkit">
    ```bash theme={null}
    pip install nvidia-nat[mcp]
    ```
  </Step>

  <Step title="Create workflow configuration">
    Create a file named `brightdata-mcp-config.yml`:

    ```yaml expandable theme={null}
    function_groups:
      brightdata_web:
        _type: mcp_client
        server:
          transport: streamable-http
          url: "https://mcp.brightdata.com/mcp?token=<YOUR_BRIGHTDATA_API_TOKEN>"
        tool_call_timeout: 120  # Increase timeout for web requests
        auth_flow_timeout: 300
        reconnect_enabled: true
        reconnect_max_attempts: 3


    llms:
      nim_llm:
        _type: nim
        model_name: "meta/llama-3.1-8b-instruct"
        temperature: 0.0
        api_key: "${env:NVIDIA_API_KEY}"

    workflow:
      _type: react_agent
      tool_names:
        - brightdata_web
      llm_name: nim_llm
      max_iterations: 10
      verbose: true
    ```

    Replace `YOUR_BRIGHTDATA_API_TOKEN` with your actual token from Step 1.
  </Step>

  <Step title="Set up environment variables">
    ```bash theme={null}
    # Set your NVIDIA API key (for NIM or NGC)
    export NVIDIA_API_KEY="your-nvidia-api-key"
    ```
  </Step>

  <Step title="Verify MCP connection">
    Test the connection to Bright Data's MCP server:

    ```bash theme={null}
    nat mcp client ping --url "https://mcp.brightdata.com/mcp?token=YOUR_BRIGHTDATA_API_TOKEN"
    ```

    Expected output:

    ```text theme={null}
    Successfully connected to MCP server
    Server version: 1.0
    Available tools: 15
    ```
  </Step>

  <Step title="List available tools">
    Inspect the tools provided by Bright Data MCP:

    ```bash theme={null}
    nat mcp client tool list --url "https://mcp.brightdata.com/mcp?token=YOUR_TOKEN"
    ```
  </Step>

  <Step title="Run your first agent">
    Execute the workflow with a query:

    ```bash theme={null}
    nat run --config_file brightdata-mcp-config.yml \
      --input "Search for the latest NVIDIA GPU releases and extract their specifications"
    ```

    The agent will use Bright Data's web scraping tools to search and extract information.
  </Step>

  <Step title="Monitor usage">
    1. View your API usage at [My Zones](https://brightdata.com/cp/zones) in your Bright Data dashboard
    2. Your free tier includes 5,000 requests per month
    3. Monitor tool calls in logs with: `nat run --config_file brightdata-mcp-config.yml`
  </Step>
</Steps>

## Where to learn more

* [NeMo Agent Toolkit Documentation](https://docs.nvidia.com/nemo/agent-toolkit/)
* [NeMo Agent Toolkit GitHub](https://github.com/NVIDIA/NeMo-Agent-Toolkit)
* [Bright Data MCP Documentation](/mcp-server/)
