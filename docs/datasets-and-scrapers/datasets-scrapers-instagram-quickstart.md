# Instagram scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/instagram/quickstart](https://docs.brightdata.com/datasets/scrapers/instagram/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data Instagram Scraper API and collect your first profile, post or reel as structured JSON in under 5 minutes from the Control Panel.

This tutorial shows you how to scrape an Instagram profile and get structured JSON data using the Bright Data Instagram Scraper API.

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
    We'll use the **Profiles endpoint** with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

    <CodeGroup>
      ```bash cURL theme={null}
      curl -X POST \
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json" \
        -H "Authorization: Bearer YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://www.instagram.com/instagram"}]'
      ```

      ```python Python theme={null}
      import requests

      response = requests.post(
          "https://api.brightdata.com/datasets/v3/scrape",
          params={"dataset_id": "gd_l1vikfch901nx3by4", "format": "json"},
          headers={
              "Authorization": "Bearer YOUR_API_KEY",
              "Content-Type": "application/json",
          },
          json=[{"url": "https://www.instagram.com/instagram"}],
      )

      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1vikfch901nx3by4&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://www.instagram.com/instagram" }
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
    The Bright Data Instagram Scraper API returns a JSON array with structured profile data:

    ```json theme={null}
    [
      {
        "user_name": "instagram",
        "full_name": "Instagram",
        "biography": "Discover what's next. ✨",
        "followers": 676000000,
        "following": 500,
        "posts_count": 7800,
        "is_verified": true,
        "url": "https://www.instagram.com/instagram"
      }
    ]
    ```

    Each profile object includes fields covering follower counts, bio, verification status, and more. See the [full response schema](/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url).
  </Step>
</Steps>

You've successfully scraped your first Instagram profile using the Bright Data Instagram Scraper API.

## Common questions

<Accordion title="Can I scrape multiple profiles in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 URLs. For larger batches, use the [async `/trigger` endpoint](/datasets/scrapers/instagram/async-requests).

  ```json theme={null}
  [
    {"url": "https://www.instagram.com/instagram"},
    {"url": "https://www.instagram.com/natgeo"},
    {"url": "https://www.instagram.com/nasa"}
  ]
  ```
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/instagram/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify the Instagram profile URL is publicly accessible and correctly formatted. The URL should follow the pattern `https://www.instagram.com/username`.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/instagram/send-first-request">
    Explore all four endpoint types with full examples.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/instagram/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/instagram/data-delivery/webhooks">
    Receive results automatically when scraping completes.
  </Card>
</CardGroup>
