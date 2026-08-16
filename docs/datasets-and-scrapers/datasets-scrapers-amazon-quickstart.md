# Amazon scraper quickstart

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/amazon/quickstart](https://docs.brightdata.com/datasets/scrapers/amazon/quickstart)
> **Category**: `datasets-and-scrapers`

---

Set up the Bright Data Amazon Scraper API and collect your first product, review or seller record as structured JSON in under 5 minutes from the Control Panel.

This tutorial shows you how to scrape an Amazon product and get structured JSON data using the Bright Data Amazon Scraper API.

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
    We'll use the **Products endpoint** with a synchronous request. Replace `YOUR_API_KEY` with your actual token:

    <CodeGroup>
      ```bash cURL theme={null}
      curl -X POST \
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l7q7dkf244hwjntr0&format=json" \
        -H "Authorization: Bearer YOUR_API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://www.amazon.com/dp/B0CHHSFMRL"}]'
      ```

      ```python Python theme={null}
      import requests

      response = requests.post(
          "https://api.brightdata.com/datasets/v3/scrape",
          params={"dataset_id": "gd_l7q7dkf244hwjntr0", "format": "json"},
          headers={
              "Authorization": "Bearer YOUR_API_KEY",
              "Content-Type": "application/json",
          },
          json=[{"url": "https://www.amazon.com/dp/B0CHHSFMRL"}],
      )

      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l7q7dkf244hwjntr0&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer YOUR_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://www.amazon.com/dp/B0CHHSFMRL" }
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
    The Bright Data Amazon Scraper API returns a JSON array with structured product data:

    ```json theme={null}
    [
      {
        "title": "Apple AirPods Pro (2nd Generation)",
        "asin": "B0CHHSFMRL",
        "price": 189.99,
        "currency": "USD",
        "rating": 4.7,
        "reviews_count": 85420,
        "seller_name": "Amazon.com",
        "brand": "Apple",
        "availability": "In Stock",
        "url": "https://www.amazon.com/dp/B0CHHSFMRL"
      }
    ]
    ```

    Each product object includes fields covering pricing, ratings, seller info, and more. See the [full response schema](/api-reference/scrapers/e-commerce-apis/amazon-products-collect-by-url).
  </Step>
</Steps>

You've successfully scraped your first Amazon product using the Bright Data Amazon Scraper API.

## Common questions

<Accordion title="Can I scrape multiple products in one request?">
  Yes. Add more objects to the input array. Synchronous requests support up to 20 URLs. For larger batches, use the [async `/trigger` endpoint](/datasets/scrapers/amazon/async-requests).

  ```json theme={null}
  [
    {"url": "https://www.amazon.com/dp/B0CHHSFMRL"},
    {"url": "https://www.amazon.com/dp/B09V3KXJPB"},
    {"url": "https://www.amazon.com/dp/B0BDJ279KF"}
  ]
  ```
</Accordion>

<Accordion title="Getting a 401 or 403 error?">
  Verify your API key is correct and hasn't expired. Generate a new token from [Account settings](https://brightdata.com/cp/setting/users). See the [authentication guide](/api-reference/authentication) for details.
</Accordion>

<Accordion title="Request is timing out?">
  Synchronous requests have a 1-minute timeout. If the request exceeds this limit, it automatically switches to async and returns a `snapshot_id`. Use the [async workflow](/datasets/scrapers/amazon/async-requests) for large batches.
</Accordion>

<Accordion title="Empty or partial response data?">
  Verify the Amazon product URL is publicly accessible and correctly formatted. The URL should follow the pattern `https://www.amazon.com/dp/{ASIN}`.
</Accordion>

## Next steps

<CardGroup>
  <Card title="Send your first request" icon="bolt" href="/datasets/scrapers/amazon/send-first-request">
    Explore all five endpoint types with full examples.
  </Card>

  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/amazon/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="Set up webhooks" icon="webhook" href="/datasets/scrapers/amazon/data-delivery/webhooks">
    Receive results automatically when scraping completes.
  </Card>
</CardGroup>
