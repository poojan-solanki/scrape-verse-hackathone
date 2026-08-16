# Google scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/google/quickstart](https://docs.brightdata.com/datasets/scrapers/google/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data Google Scraper API and collect your first Google Maps place as structured JSON in under 5 minutes from the Control Panel.

This tutorial shows you how to scrape a Google Maps place and get structured JSON data using the Bright Data Google Scraper API.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start)
* cURL, Python 3 or Node.js 18+ installed

<Steps>
  <Step title="Get your API key">
    Go to the [user settings page](https://brightdata.com/cp/setting/users) in your Bright Data account and copy your API key.

    If you don't have an account yet, [sign up at brightdata.com](https://brightdata.com/cp/start). New users get \$2 free credit for testing.

    <Warning>
      Your API key is shown only once when created. Copy and store it securely.
    </Warning>
  </Step>

  <Step title="Send a request">
    We'll use the **Google Maps, Collect by URL** endpoint with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

    <CodeGroup>
      ```bash cURL theme={null}
      curl -X POST \
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json" \
        -H "Authorization: Bearer YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://www.google.com/maps/place/Empire+State+Building"}]'
      ```

      ```python Python theme={null}
      import requests

      response = requests.post(
          "https://api.brightdata.com/datasets/v3/scrape",
          params={"dataset_id": "gd_m8ebnr0q2qlklc02fz", "format": "json"},
          headers={
              "Authorization": "Bearer YOUR_API_KEY",
              "Content-Type": "application/json",
          },
          json=[{"url": "https://www.google.com/maps/place/Empire+State+Building"}],
      )

      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://www.google.com/maps/place/Empire+State+Building" }
          ]),
        }
      );

      const data = await response.json();
      console.log(data);
      ```
    </CodeGroup>

    You should see a `200` status code. This takes 10 to 30 seconds.
  </Step>

  <Step title="Review the response">
    The Bright Data Google Scraper API returns a JSON array with structured place data:

    ```json theme={null}
    [
      {
        "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
        "name": "Empire State Building",
        "address": "20 W 34th St., New York, NY 10001",
        "category": "Observation deck",
        "rating": 4.7,
        "reviews_count": 98500,
        "phone": "+1 212-736-3100",
        "website": "https://www.esbnyc.com/",
        "latitude": 40.7484405,
        "longitude": -73.9856644,
        "open_hours": {},
        "photos": [],
        "url": "https://www.google.com/maps/place/Empire+State+Building"
      }
    ]
    ```

    Each place object includes location details, ratings, hours, photos and contact info. See the [full response schema](/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url).
  </Step>
</Steps>

You've successfully scraped your first Google Maps place using the Bright Data Google Scraper API.

## Common questions

<Accordion title="Can I scrape multiple places in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 inputs. For larger batches or for discovery by keyword, CID or location, use the [async `/trigger` endpoint](/datasets/scrapers/google/async-requests).

  ```json theme={null}
  [
    {"url": "https://www.google.com/maps/place/Empire+State+Building"},
    {"url": "https://www.google.com/maps/place/Central+Park"},
    {"url": "https://www.google.com/maps/place/Times+Square"}
  ]
  ```
</Accordion>

<Accordion title="Can I scrape Google Shopping or SERP instead?">
  Yes. Swap the `dataset_id` for the product you need. For example, Google Shopping Collect by URL uses `gd_ltppk50q18kdw67omz`, and Google SERP 100 uses `gd_mfz5x93lmsjjjylob`. See [Send your first request](/datasets/scrapers/google/send-first-request) for working examples of every endpoint.
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/google/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify the Google URL is publicly accessible and correctly formatted. For Google Maps, the URL should follow the pattern `https://www.google.com/maps/place/...`. For Shopping and SERP, verify the URL works in an incognito browser window.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/google/send-first-request">
    Explore every endpoint with full examples in cURL, Python and Node.js.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/google/async-requests">
    Scrape thousands of places or run discovery in a single batch job.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url">
    Endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
