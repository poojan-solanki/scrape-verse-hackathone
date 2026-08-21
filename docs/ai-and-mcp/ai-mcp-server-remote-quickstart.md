# How to get started with remote MCP server

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/remote/quickstart](https://docs.brightdata.com/ai/mcp-server/remote/quickstart)
> **Category**: `ai-and-mcp`

---

Connect AI agents to the fully managed Bright Data Remote MCP server (60+ tools) with no setup: authentication, tool selection and a working sample request.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

<Steps>
  <Step title="Prerequisites">
    Before getting started, make sure you have the following:

    <CardGroup>
      <Card title="Bright Data Account" icon="user" href="https://brightdata.com/?hs_signup=1&utm_source=docs">
        *Sign up for free and receive **5,000 requests** per month at no cost.*
      </Card>

      <Card title="Your Bright Data API Key" icon="key" href="https://brightdata.com/cp/setting">
        *New users receive their API key via the welcome email.*
      </Card>
    </CardGroup>
  </Step>

  <Step title="Select Your Endpoint">
    Use one of the following endpoints to connect to the Remote MCP Server:

    <CodeGroup>
      ```sh SSE (Server-Sent Events) endpoint: theme={null}
      https://mcp.brightdata.com/sse?token=YOUR_API_TOKEN
      ```

      ```sh Streamable HTTP endpoint: theme={null}
      https://mcp.brightdata.com/mcp?token=YOUR_API_TOKEN
      ```
    </CodeGroup>

    <Tip>
      Replace `YOUR_API_TOKEN` with your actual Bright Data API token.
    </Tip>

    <Tip>
      No username is required. The Remote MCP server authenticates with your API token only. Usernames (format: `brd-customer-{customer_id}-zone-{zone_name}`) are for native proxy access, not MCP. If a third-party tool asks for a username, leave it empty.
    </Tip>
  </Step>

  <Step title="Choose Your Client">
    Select and configure your preferred client:

    * <a href="/ai/mcp-server/integrations/claude#hosted-mcp"><span> Claude</span></a>
    * <a href="/ai/mcp-server/integrations/cursor"><span> Cursor</span></a>
    * <a href="/integrations/n8n#sse-based-mcp-integration"><span> n8n</span></a>
  </Step>

  <Step title="Quick Examples">
    Try these sample prompts with your MCP Server:

    <AccordionGroup>
      <Accordion title="Extract real-time data from Google">
        “Extract all flight times departing from JFK Airport to Heathrow in the next 24 hours.”
      </Accordion>

      <Accordion title="Extract company data from LinkedIn">
        “Extract the Bright Data overview section from LinkedIn.”
      </Accordion>

      <Accordion title="Extract dynamic data from eBay">
        “Go to ebay.com, click the ‘Shop by category’ button in the navigation bar, and extract all categories.”
      </Accordion>
    </AccordionGroup>
  </Step>
</Steps>

<Card title="Advanced Configuration" icon="sliders" href="/ai/mcp-server/remote/advanced#remote-configuration">
  See the Advanced Configuration page for more details.
</Card>
