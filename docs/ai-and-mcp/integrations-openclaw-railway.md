# Deploy Bright Data + OpenClaw on Railway

> **Official Source**: [https://docs.brightdata.com/integrations/openclaw-railway](https://docs.brightdata.com/integrations/openclaw-railway)
> **Category**: `ai-and-mcp`

---

Deploy an OpenClaw AI agent preloaded with 66 Bright Data web tools on Railway in one click, with no CLI setup or manual plugin install.

<Warning>
  **Account management is not a supported use case** on the Bright Data platform as of April 1, 2026. This includes managing accounts on platforms like TikTok, Instagram, or similar services. Bright Data proxies cannot be used for this purpose. See [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy) for details.
</Warning>

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

This guide shows you how to deploy an [OpenClaw](https://openclaw.ai/) AI agent with the official Bright Data plugin on Railway using a one-click template, so your agent gets 66 Bright Data web tools with no CLI setup and no manual plugin installation.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/openclaw-bright-data)

The Railway template bundles the **Bright Data plugin for OpenClaw** pre-installed and pre-configured. On first boot, the container installs the plugin, registers all tools and generates a persistent gateway token, giving your agent real-time web search, bot-bypass scraping, browser automation and 50+ structured data tools across platforms like Amazon, LinkedIn and Instagram.

<Note>
  The plugin registers **66 tools** across five categories: search, scrape, batch operations, browser automation and structured web data.
</Note>

<Tip>
  Prefer to install the plugin yourself on an existing OpenClaw instance? Use the manual CLI install in [Set up Bright Data with OpenClaw](/integrations/openclaw).
</Tip>

## Prerequisites

* A [Bright Data account](https://brightdata.com) with an API key
* A [Railway account](https://railway.com) (free trial available)
* An AI provider API key: [OpenRouter](https://openrouter.ai/keys) (free), OpenAI, Anthropic or Gemini

<Note>
  OpenRouter is recommended. Its free Nemotron model provides the 262K context window required to handle the 66-tool plugin manifest without rate limit errors.
</Note>

## How to deploy the template on Railway

<Steps>
  <Step title="Get your Bright Data API key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Deploy on Railway">
    Click **Deploy on Railway**. Railway creates a new project from the template.

    <Warning>
      Add a **persistent volume mounted at `/data`** in your service settings before or immediately after deploying. Without it, the gateway cannot store its configuration.
    </Warning>
  </Step>

  <Step title="Set environment variables">
    Set the following variables in the Railway **Variables** tab:

    | Variable                                                  | Description                           | Required     |
    | --------------------------------------------------------- | ------------------------------------- | ------------ |
    | `BRIGHTDATA_API_TOKEN`                                    | Your Bright Data API key              | **Required** |
    | `SETUP_PASSWORD`                                          | Password for the `/setup` status page | **Required** |
    | `OPENROUTER_API_KEY`                                      | Recommended AI provider               | Recommended  |
    | `OPENAI_API_KEY` / `ANTHROPIC_API_KEY` / `GEMINI_API_KEY` | Alternative AI providers              | Optional     |
  </Step>

  <Step title="Wait for initialization">
    First boot takes three to five minutes. The container installs the plugin, registers all 66 tools and generates a persistent gateway token.
  </Step>

  <Step title="Open the setup page and copy the gateway token">
    Open `https://your-app.up.railway.app/setup`, enter your `SETUP_PASSWORD` and wait for status **DONE**. Copy the **gateway token**.
  </Step>

  <Step title="Connect the OpenClaw UI">
    Open the OpenClaw UI from the setup page and paste the gateway token. All 66 Bright Data tools are available immediately.
  </Step>
</Steps>

## Which Bright Data tools are included?

The plugin registers 66 tools across five categories: search, scrape, batch operations, browser automation and structured web data (Amazon, LinkedIn, Instagram, TikTok, YouTube, Reddit, Zillow and more).

For the full list of tools, parameters and example prompts, see the [tool reference on the OpenClaw integration page](/integrations/openclaw#available-tools).

## Troubleshooting

**Do I need to add a volume?**

Yes. Add a persistent volume mounted at `/data` before or immediately after deploying. Without it, the OpenClaw gateway cannot store its configuration and will not retain the gateway token across restarts.

**Why is OpenRouter recommended over other providers?**

The free Nemotron model on OpenRouter provides a 262K context window, which is required to handle the 66-tool plugin manifest without rate limit errors. OpenAI, Anthropic and Gemini also work if you set their API keys instead.

**The setup page is not showing my tools yet**

Wait for the `/setup` page to report status **DONE** before opening the OpenClaw UI. First boot takes three to five minutes while the container installs the plugin, registers all 66 tools and generates the gateway token.

## Additional resources

* [Set up Bright Data with OpenClaw](/integrations/openclaw): manual CLI install for an existing OpenClaw instance
* [AI integrations overview](/integrations/ai-integrations)
* [OpenClaw documentation](https://docs.openclaw.ai)
* [Template source code on GitHub](https://github.com/ReallyGreatTech/brightdata-railway)
