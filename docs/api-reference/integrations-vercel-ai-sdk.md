# Set up Bright Data with Vercel AI SDK

> **Official Source**: [https://docs.brightdata.com/integrations/vercel-ai-sdk](https://docs.brightdata.com/integrations/vercel-ai-sdk)
> **Category**: `api-reference`

---

How to integrate Bright Data's web scraping and proxy capabilities with Vercel AI SDK to add real-time web data access to AI applications. Spans 195 countries.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$50K value).
</Card>

Vercel AI SDK is a TypeScript toolkit for building AI applications with React, Next.js, Vue, Svelte, Node.js, and more. It provides a unified API for working with different AI providers and includes utilities for streaming, function calling, and building conversational interfaces.

The `@brightdata/ai-sdk` package gives you drop-in tools for web scraping, search, and structured dataset collection, no manual wiring required.

## Steps to Get Started

<Steps>
  <Step title="Prerequisites">
    * Bright Data API Key, get yours from the [Bright Data Dashboard](https://brightdata.com/cp)
    * Node.js 18+
    * TypeScript (recommended)
  </Step>

  <Step title="Installation">
    Install the Bright Data AI SDK package alongside the Vercel AI SDK:

    ```bash theme={null} theme={null}
    npm install @brightdata/ai-sdk ai zod
    ```

    Set your API key as an environment variable:

    ```bash .env.local theme={null} theme={null}
    BRIGHTDATA_API_KEY=your_api_key_here
    ```
  </Step>

  <Step title="Import and Use">
    Import the tools you need directly from `@brightdata/ai-sdk` and pass them to any Vercel AI SDK call.
    No additional setup files or wrappers needed, each tool is a factory function that reads your API key
    automatically from `BRIGHTDATA_API_KEY`.

    ```typescript theme={null} theme={null}
    import { scrape, search, amazon_product, linkedin_profile } from '@brightdata/ai-sdk'
    import { generateText, stepCountIs } from 'ai'
    import { openai } from '@ai-sdk/openai'

    const { text } = await generateText({
      model: openai('gpt-4o'),
      prompt: 'Scrape https://news.ycombinator.com and summarize the top 5 stories',
      tools: {
        scrape: scrape(),
      },
      stopWhen: stepCountIs(5),
    })

    console.log(text)
    ```
  </Step>

  <Step title="Usage Examples">
    <Tabs>
      <Tab title="Next.js App Router">
        Create an API route that uses Bright Data tools with any AI provider:

        ```typescript app/api/chat/route.ts theme={null} theme={null}
        import { openai } from '@ai-sdk/openai'
        import { streamText, stepCountIs } from 'ai'
        import { scrape, search } from '@brightdata/ai-sdk'

        export const maxDuration = 60

        export async function POST(req: Request) {
          const { messages } = await req.json()

          const result = streamText({
            model: openai('gpt-4o'),
            messages,
            tools: {
              scrape: scrape(),
              search: search(),
            },
            stopWhen: stepCountIs(10),
          })

          return result.toDataStreamResponse()
        }
        ```

        Then use it in your component:

        ```typescript app/page.tsx theme={null} theme={null}
        'use client'

        import { useChat } from 'ai/react'

        export default function Chat() {
          const { messages, input, handleInputChange, handleSubmit } = useChat()

          return (
            <div className="flex flex-col h-screen">
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((m) => (
                  <div key={m.id} className="mb-4">
                    <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
                    {m.content}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Try: 'Scrape https://example.com' or 'Search for best laptops 2025'"
                  className="w-full p-2 border rounded"
                />
              </form>
            </div>
          )
        }
        ```
      </Tab>

      <Tab title="Node.js Script">
        ```typescript script.ts theme={null} theme={null}
        import { anthropic } from '@ai-sdk/anthropic'
        import { generateText, stepCountIs } from 'ai'
        import { scrape, search, amazon_product } from '@brightdata/ai-sdk'

        async function main() {
          // Example 1: Scrape a website
          console.log('=== Example 1: Web Scraping ===')
          const scrapeResult = await generateText({
            model: anthropic('claude-opus-4-6'),
            tools: { scrape: scrape() },
            stopWhen: stepCountIs(10),
            prompt: 'Scrape https://news.ycombinator.com and summarize the top 5 stories',
          })
          console.log(scrapeResult.text)

          // Example 2: Web search
          console.log('\n=== Example 2: Web Search ===')
          const searchResult = await generateText({
            model: anthropic('claude-opus-4-6'),
            tools: { search: search() },
            stopWhen: stepCountIs(10),
            prompt: 'Search for the latest JavaScript frameworks and tell me about the top 3',
          })
          console.log(searchResult.text)

          // Example 3: Amazon product research
          console.log('\n=== Example 3: Amazon Product ===')
          const amazonResult = await generateText({
            model: anthropic('claude-opus-4-6'),
            tools: { amazon_product: amazon_product() },
            stopWhen: stepCountIs(10),
            prompt: "Get details about this product: https://www.amazon.com/dp/B0D2Q9397Y and tell me if it's worth buying",
          })
          console.log(amazonResult.text)
        }

        main()
        ```
      </Tab>

      <Tab title="Custom API Key">
        Pass the API key directly to any tool instead of relying on the environment variable:

        ```typescript theme={null} theme={null}
        import { scrape, search } from '@brightdata/ai-sdk'
        import { generateText, stepCountIs } from 'ai'
        import { openai } from '@ai-sdk/openai'

        const { text } = await generateText({
          model: openai('gpt-4o'),
          prompt: 'Search for AI news today',
          tools: {
            scrape: scrape({ api_key: 'your-api-key-here' }),
            search: search({ api_key: 'your-api-key-here' }),
          },
          stopWhen: stepCountIs(5),
        })
        ```
      </Tab>

      <Tab title="Social & Dataset Tools">
        Use the structured dataset tools for LinkedIn, Instagram, Facebook, and more:

        ```typescript theme={null} theme={null}
        import { linkedin_profile, linkedin_jobs, instagram_profile, facebook_profile } from '@brightdata/ai-sdk'
        import { generateText, stepCountIs } from 'ai'
        import { openai } from '@ai-sdk/openai'

        const { text } = await generateText({
          model: openai('gpt-4o'),
          prompt: 'Find AI engineering jobs in San Francisco on LinkedIn',
          tools: {
            linkedin_profile: linkedin_profile(),
            linkedin_jobs: linkedin_jobs(),
            instagram_profile: instagram_profile(),
            facebook_profile: facebook_profile(),
          },
          stopWhen: stepCountIs(10),
        })
        ```
      </Tab>
    </Tabs>
  </Step>
</Steps>

## Available Tools

All tools are factory functions, call them with an optional config object (or no arguments at all to use env defaults):

| Tool                  | Import                                                   | Description                                                                              |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `scrape()`            | `import { scrape } from '@brightdata/ai-sdk'`            | Scrape any website and return clean markdown. Bypasses anti-bot protection and CAPTCHAs. |
| `search()`            | `import { search } from '@brightdata/ai-sdk'`            | Search Google, Bing, or Yandex with anti-bot bypass. Returns markdown results.           |
| `amazon_product()`    | `import { amazon_product } from '@brightdata/ai-sdk'`    | Get detailed Amazon product info: price, ratings, reviews, and specs.                    |
| `linkedin_profile()`  | `import { linkedin_profile } from '@brightdata/ai-sdk'`  | Fetch LinkedIn profile data including experience, education, and skills.                 |
| `linkedin_jobs()`     | `import { linkedin_jobs } from '@brightdata/ai-sdk'`     | Search LinkedIn job postings by location and keyword.                                    |
| `instagram_profile()` | `import { instagram_profile } from '@brightdata/ai-sdk'` | Get Instagram profile info and recent posts.                                             |
| `facebook_profile()`  | `import { facebook_profile } from '@brightdata/ai-sdk'`  | Collect Facebook profile data from a profile URL.                                        |
| `chatgpt()`           | `import { chatgpt } from '@brightdata/ai-sdk'`           | Query ChatGPT via Bright Data's dataset API with optional web search mode.               |

## How each tool works

### `scrape(options?)`

Scrape any public webpage and get back clean markdown (or HTML).

```typescript theme={null} theme={null}
import { scrape } from '@brightdata/ai-sdk'

const tool = scrape({
  api_key: 'optional — defaults to BRIGHTDATA_API_KEY env var',
  data_format: 'markdown', // or 'html'
  country: 'us',           // default proxy country (2-letter code)
})
```

**LLM input schema:**

| Parameter | Type     | Required | Description                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `url`     | `string` | Yes      | The URL to scrape                             |
| `country` | `string` | No       | 2-letter country code for the proxy exit node |

***

### `search(options?)`

Search the web via Google, Bing, or Yandex.

```typescript theme={null} theme={null}
import { search } from '@brightdata/ai-sdk'

const tool = search({
  api_key: 'optional',
  search_engine: 'google', // 'google' | 'bing' | 'yandex'
  data_format: 'markdown', // or 'html'
  country: 'us',
})
```

**LLM input schema:**

| Parameter       | Type     | Required | Description                                   |
| --------------- | -------- | -------- | --------------------------------------------- |
| `query`         | `string` | Yes      | The search query                              |
| `search_engine` | `string` | No       | `'google'` (default), `'bing'`, or `'yandex'` |
| `country`       | `string` | No       | 2-letter country code for localized results   |
| `data_format`   | `string` | No       | `'markdown'` (default) or `'html'`            |

***

### `amazon_product(options?)`

Retrieve structured Amazon product data.

```typescript theme={null} theme={null}
import { amazon_product } from '@brightdata/ai-sdk'

const tool = amazon_product({ api_key: 'optional' })
```

**LLM input schema:**

| Parameter | Type     | Required | Description                                                |
| --------- | -------- | -------- | ---------------------------------------------------------- |
| `url`     | `string` | Yes      | Amazon product URL (must include `/dp/` or `/gp/product/`) |
| `zipcode` | `string` | No       | ZIP code for location-specific pricing                     |

***

### `linkedin_profile(options?)`

Collect detailed LinkedIn profile data for one or more profiles.

```typescript theme={null} theme={null}
import { linkedin_profile } from '@brightdata/ai-sdk'

const tool = linkedin_profile({
  api_key: 'optional',
  format: 'json', // 'json' | 'jsonl'
})
```

**LLM input schema:**

| Parameter | Type       | Required | Description                            |
| --------- | ---------- | -------- | -------------------------------------- |
| `urls`    | `string[]` | Yes      | Array of LinkedIn profile URLs (min 1) |

***

### `linkedin_jobs(options?)`

Search LinkedIn job postings by location and keyword.

```typescript theme={null} theme={null}
import { linkedin_jobs } from '@brightdata/ai-sdk'

const tool = linkedin_jobs({ api_key: 'optional' })
```

**LLM input schema:**

| Parameter  | Type     | Required | Description                         |
| ---------- | -------- | -------- | ----------------------------------- |
| `location` | `string` | Yes      | Job location, e.g. `"New York, NY"` |
| `keyword`  | `string` | No       | Job title or search keyword         |
| `country`  | `string` | No       | 2-letter country code               |

***

### `instagram_profile(options?)`

Fetch Instagram profile info and recent posts.

```typescript theme={null} theme={null}
import { instagram_profile } from '@brightdata/ai-sdk'

const tool = instagram_profile({ api_key: 'optional' })
```

**LLM input schema:**

| Parameter | Type     | Required | Description           |
| --------- | -------- | -------- | --------------------- |
| `url`     | `string` | Yes      | Instagram profile URL |

***

### `facebook_profile(options?)`

Collect Facebook profile data.

```typescript theme={null} theme={null}
import { facebook_profile } from '@brightdata/ai-sdk'

const tool = facebook_profile({
  api_key: 'optional',
  format: 'json', // 'json' | 'jsonl'
})
```

**LLM input schema:**

| Parameter | Type     | Required | Description          |
| --------- | -------- | -------- | -------------------- |
| `url`     | `string` | Yes      | Facebook profile URL |

***

### `chatgpt(options?)`

Query ChatGPT via Bright Data's ChatGPT dataset API with optional web search.

```typescript theme={null} theme={null}
import { chatgpt } from '@brightdata/ai-sdk'

const tool = chatgpt({
  api_key: 'optional',
  format: 'json', // 'json' | 'jsonl'
})
```

**LLM input schema:**

| Parameter           | Type      | Required | Description                    |
| ------------------- | --------- | -------- | ------------------------------ |
| `prompt`            | `string`  | Yes      | Prompt to send to ChatGPT      |
| `additional_prompt` | `string`  | No       | Optional follow-up prompt      |
| `country`           | `string`  | No       | 2-letter country code          |
| `require_sources`   | `boolean` | No       | Fail when no sources are found |
| `web_search`        | `boolean` | No       | Enable ChatGPT web search mode |

***

## Example Output

### Example: scrape a webpage

**Prompt:** "Scrape [https://example.com](https://example.com) and tell me what it's about"

**AI Response:**

```text theme={null}
I've scraped the website. Here's what I found:

# Example Domain

This domain is for use in illustrative examples in documents. You may use this
domain in literature without prior coordination or asking for permission.

The website appears to be a placeholder domain used for documentation and
examples. It's maintained by IANA (Internet Assigned Numbers Authority) and
serves as a standard example domain that can be referenced in documentation
without needing permission.
```

### Example: run a Google search

**Prompt:** "Search for best mechanical keyboards 2025"

**AI Response:**

```text theme={null}
I found several highly-rated mechanical keyboards for 2025:

1. **Keychron Q1 Pro** — Premium 75% layout, hot-swappable switches,
   wireless. ~$200.

2. **Wooting 60HE** — Analog switches with adjustable actuation points,
   popular among gamers.

3. **GMMK Pro** — 75% gasket-mounted, extensive customization options.
```

### Amazon Product Example

**Prompt:** "Get info about [https://www.amazon.com/dp/B0D2Q9397Y](https://www.amazon.com/dp/B0D2Q9397Y)"

**AI Response:**

```text theme={null}
Product: Logitech MX Master 3S Wireless Mouse
Price: $99.99
Rating: 4.6/5 (8,234 reviews)

Key Features:
- 8K DPI sensor
- Quiet clicks
- USB-C charging
- Connects to up to 3 devices

Verdict: Excellent choice for productivity users. Premium price, but
justified by ergonomics and multi-device support.
```

## Best Practices

1. **API key management**, Use `BRIGHTDATA_API_KEY` in your environment; avoid hardcoding keys.
2. **Error handling**, All tools catch errors internally and return a descriptive string, so LLM loops won't crash.
3. **Data format**, Use `markdown` for scraping to get clean, LLM-friendly content.
4. **Multi-step agents**, Set `stopWhen: stepCountIs(N)` to let the model chain tool calls autonomously.
5. **Country targeting**, Pass a 2-letter country code to get geo-specific results or pricing.
6. **Async datasets**, For large dataset jobs (many LinkedIn profiles, etc.), consider setting `async: true` in the underlying SDK client to avoid timeouts.

## Which environment variables to set

```bash .env.local theme={null} theme={null}
BRIGHTDATA_API_KEY=your_api_key_here
```

Get your API key from the [Bright Data Dashboard](https://brightdata.com/cp).
