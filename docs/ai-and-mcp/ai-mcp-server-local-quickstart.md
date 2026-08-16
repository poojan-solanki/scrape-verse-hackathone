# How to set up local (self-hosted) MCP

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/local/quickstart](https://docs.brightdata.com/ai/mcp-server/local/quickstart)
> **Category**: `ai-and-mcp`

---

Set up a self-hosted Bright Data MCP server: step-by-step installation, configuration and connection to AI agents like Claude or Cursor in under 10 minutes.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

<Steps>
  <Step title="Prerequisites">
    Before you begin, make sure you have the following:

    <CardGroup>
      <Card title="Bright Data Account" icon="user" href="https://brightdata.com/?hs_signup=1&utm_source=docs">
        *Sign up for free and receive **5,000 requests** per month at no cost.*
      </Card>

      <Card title="Your Bright Data API Key" icon="key" href="https://brightdata.com/cp/setting">
        *New users receive their API key in the welcome email.*
      </Card>
    </CardGroup>

    <Card title="Node.js" icon="node-js" href="https://nodejs.org/en/download">
      *Ensure Node.js is installed and up to date.*
    </Card>

    <Tip>
      No username is required. The self-hosted MCP server authenticates with your `API_TOKEN` only. Usernames (format: `brd-customer-{customer_id}-zone-{zone_name}`) are for native proxy access, not MCP. If a third-party tool asks for a username, leave it empty.
    </Tip>
  </Step>

  <Step title="Choose Your Client">
    Select and configure your preferred MCP client:

    * <a href="/ai/mcp-server/integrations/claude#self-hosted-mcp"><span> Claude</span></a>
    * <a href="/integrations/n8n#self-hosted-mcp-integration"><span> n8n</span></a>
  </Step>

  <Step title="Quick Examples">
    Try these example prompts with your MCP server:

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

<Card title="Advanced Configuration" icon="sliders" href="/ai/mcp-server/local/advanced">
  See the Advanced Configuration page for more details.
</Card>
