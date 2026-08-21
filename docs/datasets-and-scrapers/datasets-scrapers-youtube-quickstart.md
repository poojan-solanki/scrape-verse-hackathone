# YouTube scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/youtube/quickstart](https://docs.brightdata.com/datasets/scrapers/youtube/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data YouTube Scraper API and collect your first channel, video or comment as structured JSON in under 5 minutes from the Control Panel.

This tutorial shows you how to scrape a YouTube channel and get structured JSON data using the Bright Data YouTube Scraper API.

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
    We'll use the **Channels endpoint** with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

    <CodeGroup>
      ```bash cURL theme={null}
      curl -X POST \
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk538t2k2p1k3oos71&format=json" \
        -H "Authorization: Bearer YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://www.youtube.com/@MrBeast"}]'
      ```

      ```python Python theme={null}
      import requests

      response = requests.post(
          "https://api.brightdata.com/datasets/v3/scrape",
          params={"dataset_id": "gd_lk538t2k2p1k3oos71", "format": "json"},
          headers={
              "Authorization": "Bearer YOUR_API_KEY",
              "Content-Type": "application/json",
          },
          json=[{"url": "https://www.youtube.com/@MrBeast"}],
      )

      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_lk538t2k2p1k3oos71&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://www.youtube.com/@MrBeast" }
          ]),
        }
      );

      const data = await response.json();
      console.log(data);
      ```
    </CodeGroup>

    You should see a `200` status code. This takes 10-30 seconds.
  </Step>

  <Step title="Review the response">
    The Bright Data YouTube Scraper API returns a JSON array with structured channel data:

    ```json theme={null}
    [
      {
        "channel_name": "MrBeast",
        "channel_url": "https://www.youtube.com/@MrBeast",
        "subscribers": 358000000,
        "total_videos": 850,
        "total_views": 50000000000,
        "description": "...",
        "is_verified": true
      }
    ]
    ```

    Each channel object includes fields covering subscriber counts, video counts, description, and more. See the [full response schema](/api-reference/scrapers/social-media-apis/youtube-channels-collect-by-url).
  </Step>
</Steps>

You've successfully scraped your first YouTube channel using the Bright Data YouTube Scraper API.

## Common questions

<Accordion title="Can I scrape multiple channels in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 URLs. For larger batches, use the [async `/trigger` endpoint](/datasets/scrapers/youtube/async-requests).

  ```json theme={null}
  [
    {"url": "https://www.youtube.com/@MrBeast"},
    {"url": "https://www.youtube.com/@PewDiePie"},
    {"url": "https://www.youtube.com/@mkbhd"}
  ]
  ```
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/youtube/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify the YouTube channel URL is publicly accessible and correctly formatted. The URL should follow the pattern `https://www.youtube.com/@handle`.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/youtube/send-first-request">
    Explore all three endpoint types with full examples.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/youtube/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/youtube/data-delivery/webhooks">
    Receive results automatically when scraping completes.
  </Card>
</CardGroup>
