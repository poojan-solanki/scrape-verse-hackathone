# ChatGPT scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/chatgpt/quickstart](https://docs.brightdata.com/datasets/scrapers/chatgpt/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data ChatGPT Scraper API and send your first prompt to receive structured JSON with search results and citations in under 5 minutes.

This tutorial shows you how to send a search prompt to ChatGPT and get structured JSON data using the Bright Data ChatGPT Scraper API.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start)
* cURL, Python 3, or Node.js 18+ installed

<Steps>
  <Step title="Get your API key">
    Go to the [user settings page](https://brightdata.com/cp/setting/users) in your Bright Data account and copy your API key.

    If you don't have an account yet, [sign up at brightdata.com](https://brightdata.com/cp/start). New users get \$2 free credit for testing.

    <Warning>
      Your API key is shown only once when created. Copy and store it securely.
    </Warning>
  </Step>

  <Step title="Send a request">
    We'll use the **ChatGPT Search endpoint** with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

    <CodeGroup>
      ```bash cURL theme={null}
      curl -X POST \
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json" \
        -H "Authorization: Bearer YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"}]'
      ```

      ```python Python theme={null}
      import requests

      response = requests.post(
          "https://api.brightdata.com/datasets/v3/scrape",
          params={"dataset_id": "gd_m7aof0k82r803d5bjm", "format": "json"},
          headers={
              "Authorization": "Bearer YOUR_API_KEY",
              "Content-Type": "application/json",
          },
          json=[{"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"}],
      )

      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m7aof0k82r803d5bjm&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://chatgpt.com/", prompt: "Top hotels in New York" }
          ]),
        }
      );

      const data = await response.json();
      console.log(data);
      ```
    </CodeGroup>

    You should see a `200` status code. This takes 15-45 seconds.
  </Step>

  <Step title="Review the response">
    The Bright Data ChatGPT Scraper API returns a JSON array with structured search data:

    ```json theme={null}
    [
      {
        "url": "https://chatgpt.com/",
        "prompt": "Top hotels in New York",
        "answer_text": "Here are some of the top-rated hotels in New York City...",
        "model": "gpt-4o",
        "web_search_triggered": true,
        "citations": [
          {
            "title": "Best Hotels in NYC - Travel Guide",
            "url": "https://example.com/nyc-hotels",
            "position": 1
          }
        ],
        "search_sources": [
          {
            "url": "https://example.com/nyc-hotels",
            "title": "Best Hotels in NYC - Travel Guide"
          }
        ],
        "prompt_sent_at": "2026-04-08T12:00:00.000Z"
      }
    ]
    ```

    Each result object includes the answer text, citations with source URLs, and metadata. See the [full response schema](/api-reference/scrapers/ai-search-apis/chatgpt-search-by-prompt).
  </Step>
</Steps>

You've successfully searched ChatGPT with your first prompt using the Bright Data ChatGPT Scraper API.

## Common questions

<Accordion title="Can I send multiple prompts in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 inputs. For larger batches, use the [async `/trigger` endpoint](/datasets/scrapers/chatgpt/async-requests).

  ```json theme={null}
  [
    {"url": "https://chatgpt.com/", "prompt": "Top hotels in New York"},
    {"url": "https://chatgpt.com/", "prompt": "Best restaurants in Paris"},
    {"url": "https://chatgpt.com/", "prompt": "Things to do in Tokyo"}
  ]
  ```
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/chatgpt/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify that the `url` field is set to `https://chatgpt.com/` and the `prompt` field is not empty. Prompts must be 4,096 characters or fewer.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/chatgpt/send-first-request">
    Explore input options with full code examples.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/chatgpt/async-requests">
    Search ChatGPT with hundreds of prompts in a single batch job.
  </Card>

  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/chatgpt/data-delivery/webhooks">
    Receive results automatically when scraping completes.
  </Card>
</CardGroup>
