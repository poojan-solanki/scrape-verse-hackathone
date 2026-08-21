# How to set up Bright Data with Mastra

> **Official Source**: [https://docs.brightdata.com/integrations/mastra](https://docs.brightdata.com/integrations/mastra)
> **Category**: `general`

---

Integrate Bright Data's SDK with Mastra to add web scraping and structured data extraction from 40+ platforms to your AI agents.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

The Bright Data SDK integration is now available in Mastra, bringing powerful web scraping and data extraction capabilities to AI agents. This integration enables structured data extraction from over 40 platforms, including Amazon, LinkedIn, and major search engines like Google, Bing, and Yandex.

Mastra agents can perform tasks like web scraping with anti-bot protection, running search queries, extracting Amazon product data, and collecting LinkedIn profiles-all with minimal setup. This makes it easy to build intelligent agents that can reason, act, and fetch real-time web data for research, automation, and competitive analysis.

## How to Integrate Bright Data With Mastra

<Steps>
  <Step title="Prerequisites">
    * Node.js
    * npm (latest version)
    * Bright Data API key
    * OpenAI API key (for GPT-4o-mini)
    * Bright Data zones will be auto-created if needed
  </Step>

  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
    * Enable SDK access for your API key
  </Step>

  <Step title="Obtain Your OpenAI API Key">
    * Go to [OpenAI Platform](https://platform.openai.com)
    * Navigate to the API keys section
    * Create a new API key
    * Ensure you have access to the GPT-4o-mini model
  </Step>

  <Step title="Create a New Mastra Project Using the Template">
    Create a new project using the Bright Data Mastra template:

    ```bash theme={null}
    npx create-mastra@latest --template brightdata-mastra-tools
    cd brightdata-mastra-tools
    npm install
    ```

    <Note>
      Alternatively, you can clone the repository directly:

      ```bash theme={null}
      git clone https://github.com/brightdata/brightdata-mastra-tools
      cd brightdata-mastra-tools
      npm install
      ```
    </Note>
  </Step>

  <Step title="Configure Environment Variables">
    Edit `.env` and add your API keys:

    ```env theme={null}
    OPENAI_API_KEY=your_openai_api_key_here
    BRIGHTDATA_API_KEY=your_brightdata_api_key_here
    ```
  </Step>

  <Step title="Start the Development Server">
    Run the Mastra development server with hot reloading:

    ```bash theme={null}
    npm run dev
    ```

    Your Bright Data-powered web agent is now ready to use!
  </Step>

  <Step title="Example Usage">
    The web agent comes pre-configured with four powerful tools. Here's how the agent works:

    ```typescript theme={null}
    import { Agent } from '@mastra/core/agent';
    import { Memory } from '@mastra/memory';
    import { LibSQLStore } from '@mastra/libsql';
    import { brightDataTools } from './tools/web-tools';

    const apiKey = process.env.BRIGHTDATA_API_KEY ?? '';
    const brightTools = brightDataTools({ apiKey });

    export const webAgent = new Agent({
      name: 'Web Agent',
      instructions: `
        You are a general-purpose web research assistant with Bright Data capabilities.
        
        Tool usage guidelines:
        - Start with the search tool to build context or surface credible sources.
        - Use the scrape tool to pull detailed content from specific pages.
        - Call the Amazon product tool for pricing, availability, or review summaries.
        - Fetch LinkedIn profile details when users need professional background information.
      `,
      model: 'openai/gpt-4o-mini',
      tools: {
        searchTool: brightTools.search!,
        scrapeTool: brightTools.scrape!,
        amazonProductTool: brightTools.amazonProduct!,
        linkedinCollectProfilesTool: brightTools.linkedinCollectProfiles!,
      },
      memory: new Memory({
        storage: new LibSQLStore({
          url: 'file:../mastra.db',
        }),
      }),
    });
    ```

    **Example queries you can ask the agent:**

    * "Search for the latest developments in quantum computing"
    * "Scrape the pricing information from example.com"
    * "Get details and reviews for this Amazon product: \[URL]"
    * "Collect LinkedIn profiles for executives at \[company name]"
  </Step>

  <Step title="Available Tools">
    The integration provides four powerful tools:

    **1. Search Tool**

    * Search across Google, Bing, or Yandex
    * Returns results in markdown or HTML format
    * Automatic anti-bot protection bypass
    * Supports localized results with country codes

    **2. Scrape Tool**

    * Extract website content in clean markdown format
    * Automatic CAPTCHA and bot detection bypass
    * Country-specific proxy support

    **3. Amazon Product Tool**

    * Get pricing, ratings, reviews, and specifications
    * Location-specific data with ZIP code support
    * Comprehensive product information

    **4. LinkedIn Collect Profiles Tool**

    * Fetch professional background, experience, and education
    * Batch processing for multiple profiles
    * Detailed skills and work history
  </Step>

  <Step title="Customizing Tools">
    You can selectively enable or disable tools:

    ```typescript theme={null}
    const brightTools = brightDataTools({
      apiKey: process.env.BRIGHTDATA_API_KEY!,
      excludeTools: ['linkedinCollectProfiles'] // Disable specific tools
    });
    ```
  </Step>
</Steps>

## How the project is structured

```text theme={null}
your-project/
├── src/
│   └── mastra/
│       ├── agents/
│       │   └── web-agent.ts           # Main AI agent
│       ├── tools/
│       │   └── web-tools.ts           # Bright Data SDK tools
│       └── index.ts                   # Mastra configuration
├── .env                               # Your API keys (do not commit)
├── .env.example                       # Environment template
├── package.json                       # Dependencies
└── tsconfig.json                      # TypeScript config
```

## Key Features

* **AI-Powered Intelligence**: Uses OpenAI GPT-4o-mini for intelligent reasoning
* **Bright Data SDK Integration**: Direct integration with Bright Data's web data tools
* **Multiple Data Sources**: Search engines, web scraping, Amazon, LinkedIn
* **Anti-Bot Protection**: Automatic CAPTCHA and bot detection bypass
* **Persistent Memory**: Maintains conversation history using LibSQL
* **TypeScript Support**: Fully typed for better development experience

## How to deploy to production

Build and start your production server:

```bash theme={null}
npm run build
npm run start
```

## Troubleshooting

**"Bright Data API key is required to initialize tools"**

* Ensure `.env` file exists with a valid `BRIGHTDATA_API_KEY`
* Verify the API key has SDK access permissions
* Check that the API key is not expired

**"OpenAI API key not found"**

* Verify `OPENAI_API_KEY` in `.env`
* Ensure the API key has access to GPT-4o-mini model
* Check your OpenAI account has available credits

**Tool initialization failures**

* The integration uses `autoCreateZones: true` to automatically create zones
* Check that the zones were created in your Bright Data account

## Where to learn more

* [Mastra Documentation](https://mastra.ai/en/docs)
* [Bright Data SDK Documentation](/api-reference/SDK-JS)
* [GitHub Repository](https://github.com/brightdata/brightdata-mastra-tools)
