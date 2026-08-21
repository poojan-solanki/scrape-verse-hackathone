# OpenAI's ChatGPT MCP server integration

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/integrations/chat-gpt](https://docs.brightdata.com/ai/mcp-server/integrations/chat-gpt)
> **Category**: `ai-and-mcp`

---

Connect ChatGPT to the Bright Data MCP server to give your custom GPTs real-time web search, scraping and structured data access in a few setup steps.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

**Requirements:**

* [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs)
* OpenAI account

<Steps>
  <Step title="Add a new source">
    Go to [ChatGPT](https://chatgpt.com/) and click the "+" button to add a new source.

    <img alt="OpenAI's ChatGPT MCP Server Integration" />
  </Step>

  <Step title="Connect more">
    Click the "Add" button, then select "Connect more".

    <img alt="OpenAI's ChatGPT MCP Server Integration" />
  </Step>

  <Step title="Advanced settings">
    Click on "Advanced settings", enable Developer Mode, then click "Create app".

    <img alt="OpenAI's ChatGPT MCP Server Integration" />
  </Step>

  <Step title="Connect Bright Data MCP">
    Click "Create app" and fill in the following details:

    * **App name**
    * **MCP Server URL:**

    ```http theme={null}
    https://mcp.brightdata.com/mcp?token=<your_api_token>
    ```

    * **Authentication: no authentication**

    Here is how it should look like:

    <img alt="OpenAI's ChatGPT MCP Server Integration" />
  </Step>

  <Step title="Unlock the web">
    Tag Bright Data MCP and chat with the open web without getting blocked!

    <img alt="OpenAI's ChatGPT MCP Server Integration" />
  </Step>
</Steps>
