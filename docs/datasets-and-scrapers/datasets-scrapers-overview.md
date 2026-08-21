# Scrapers

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/overview](https://docs.brightdata.com/datasets/scrapers/overview)
> **Category**: `datasets-and-scrapers`

---

Browse Bright Data Web Scraper APIs for Amazon, LinkedIn, Google, Instagram, TikTok and 1000+ other sites. Pre-built scrapers return structured JSON on demand.

<Note>
  [Start now](https://brightdata.com/?hs_signup=1\&utm_source=docs) with **5,000 free credits per month**. No credit card required. See the [free tier](/general/account/billing-and-pricing/free-tier).

  We’ll also match your **first account deposit up to \$500**.
</Note>

<div>
  <div>
    <div>
      <div>
        <span>Scrapers</span>

        <h1>Structured data from any website</h1>

        <p>
          Send a URL, receive structured JSON/CSV. No proxies, browsers, anti-bot systems or parsing to manage. 1000+ pre-built scrapers cover LinkedIn, Instagram, TikTok, Amazon, Google Maps and more.
        </p>

        <div>
          <a href="/datasets/scrapers/linkedin/quickstart">Start building</a>
        </div>
      </div>

      <div>
        <img alt="Bright Data Web Scraper API overview illustration" />
      </div>
    </div>

    <div>
      <span>💡</span>
      <span>Not ready for a full integration? Run any scraper from the <a href="https://brightdata.com/cp/scrapers/browse">no-code dashboard</a>.</span>
    </div>

    ## Your first request

    Replace `API_KEY` with a key from your [account settings](https://brightdata.com/cp/setting/users). You'll receive a JSON record with 200+ fields. The same request pattern works for every scraper in the library.

    <CodeGroup>
      ```bash cURL theme={null}
      curl "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1viktl72bvl7bjuj0&format=json" \
        -H "Authorization: Bearer API_KEY" \
        -H "Content-Type: application/json" \
        -d '[{"url": "https://www.linkedin.com/in/elad-moshe-05a90413/"}]'
      ```

      ```python Python theme={null}
      import requests

      url = "https://api.brightdata.com/datasets/v3/scrape"
      headers = {
          "Authorization": "Bearer API_KEY",
          "Content-Type": "application/json",
      }
      params = {"dataset_id": "gd_l1viktl72bvl7bjuj0", "format": "json"}
      payload = [{"url": "https://www.linkedin.com/in/elad-moshe-05a90413/"}]

      response = requests.post(url, headers=headers, params=params, json=payload)
      print(response.json())
      ```

      ```javascript Node.js theme={null}
      const response = await fetch(
        "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_l1viktl72bvl7bjuj0&format=json",
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { url: "https://www.linkedin.com/in/elad-moshe-05a90413/" },
          ]),
        }
      );

      const data = await response.json();
      console.log(data);
      ```
    </CodeGroup>

    ## Which scrapers are most popular

    <div>
      <span>Most popular</span>
    </div>

    <CardGroup>
      <Card title="LinkedIn" icon="linkedin" href="/datasets/scrapers/linkedin/quickstart">
        Profiles, companies, jobs, posts.
      </Card>

      <Card title="Instagram" icon="instagram" href="/datasets/scrapers/instagram/quickstart">
        Profiles, posts, reels, comments.
      </Card>

      <Card title="TikTok" icon="tiktok" href="/datasets/scrapers/tiktok/quickstart">
        Profiles, posts, comments, shop.
      </Card>

      <Card title="Amazon" icon="amazon" href="/datasets/scrapers/amazon/quickstart">
        Products, reviews, sellers, search.
      </Card>
    </CardGroup>

    <h3>Social</h3>

    <CardGroup>
      <Card title="Facebook" icon="facebook" href="/datasets/scrapers/facebook/quickstart">
        Pages, posts, events.
      </Card>

      <Card title="X / Twitter" icon="x-twitter" href="/datasets/scrapers/twitter/quickstart">
        Profiles and posts.
      </Card>

      <Card title="YouTube" icon="youtube" href="/datasets/scrapers/youtube/quickstart">
        Channels, videos, comments.
      </Card>

      <Card title="Reddit" icon="reddit" href="/datasets/scrapers/reddit/introduction">
        Subreddits, posts, comments.
      </Card>
    </CardGroup>

    <h3>AI & Search</h3>

    <CardGroup>
      <Card title="ChatGPT" icon="comments" href="/datasets/scrapers/chatgpt/quickstart">
        Conversations and prompts.
      </Card>

      <Card title="Google Search" icon="magnifying-glass" href="/datasets/scrapers/google/quickstart">
        SERPs, snippets, featured results.
      </Card>

      <Card title="Google Maps" icon="location-dot" href="/datasets/scrapers/google/quickstart">
        Places, reviews, hours.
      </Card>
    </CardGroup>

    <a href="https://brightdata.com/cp/scrapers/browse">Browse all 1000+ scrapers →</a>

    <div>
      <span>🛠️</span>
      <span>Can't find the site you need? Build a custom scraper in minutes with AI-powered <a href="/datasets/scraper-studio/overview">Scraper Studio</a>.</span>
    </div>

    ## How it works

    Pick a request mode, then pick how you want the data delivered.

    ### Request modes

    <CardGroup>
      <Card title="Synchronous" icon="bolt" href="/datasets/scrapers/concepts/sync-vs-async">
        One request, one response. Best for single URLs and real-time use cases.
      </Card>

      <Card title="Asynchronous" icon="layer-group" href="/datasets/scrapers/linkedin/async-requests">
        Trigger a job, retrieve later. Handles thousands of URLs per request.
      </Card>

      <Card title="Discovery" icon="magnifying-glass" href="/datasets/scrapers/scrapers-library/working-with-sources">
        Find records by keyword or category when you don't have specific URLs.
      </Card>
    </CardGroup>

    ### Which delivery options to use

    <CardGroup>
      <Card title="API download" icon="download" href="/api-reference/scrapers/delivery-apis/download-snapshot">
        Pull results from the API once a job completes.
      </Card>

      <Card title="Webhooks" icon="webhook" href="/datasets/scrapers/linkedin/data-delivery/webhooks">
        Push results to your endpoint as soon as a snapshot is ready.
      </Card>

      <Card title="Cloud storage" icon="cloud" href="/datasets/scrapers/linkedin/data-delivery/amazon-s3">
        Deliver to S3, GCS, Azure, or Snowflake.
      </Card>

      <Card title="Streaming" icon="stream" href="/datasets/scrapers/scrapers-library/stream-and-file-delivery">
        Receive results in batches as they are scraped.
      </Card>
    </CardGroup>

    ## Beyond pre-built scrapers

    <CardGroup>
      <Card title="Custom scrapers" icon="code" href="/datasets/scraper-studio/overview">
        Build a scraper for any site using Scraper Studio. Pass a URL and describe the data you need.
      </Card>

      <Card title="Managed services" icon="screwdriver-wrench" href="/datasets/scrapers/managed-services">
        Bright Data's team builds and operates custom scrapers for your targets. **No code required.**
      </Card>

      <Card title="Datasets marketplace" icon="store" href="/datasets/marketplace">
        Skip scraping entirely. Buy ready-made datasets refreshed on a schedule. **No code required.**
      </Card>
    </CardGroup>

    ## How to combine scrapers and delivery

    End-to-end tutorials that combine a scraper with a delivery option and a target system.

    <CardGroup>
      <Card title="LinkedIn profiles → your CRM" icon="user-magnifying-glass" href="/datasets/scrapers/tutorials/linkedin-to-crm">
        Pull profiles and company data with the LinkedIn scraper, then push them via webhook into HubSpot or Salesforce.
      </Card>

      <Card title="Amazon price monitor" icon="tag" href="/datasets/scrapers/tutorials/amazon-price-monitor">
        Schedule an async job over your SKU list and stream results into S3 for daily price and stock tracking.
      </Card>

      <Card title="Social listener" icon="bell" href="/datasets/scrapers/tutorials/social-listener">
        Use Google SERP as a discovery engine, then fan out to Instagram, TikTok and X scrapers to track mentions by keyword.
      </Card>
    </CardGroup>

    ## What you can build

    <CardGroup>
      <Card title="Lead enrichment" icon="user-magnifying-glass" href="/datasets/scrapers/linkedin/quickstart">
        Pull LinkedIn profiles and company data into your CRM or sales pipeline.
      </Card>

      <Card title="Price monitoring" icon="tag" href="/datasets/scrapers/amazon/quickstart">
        Track product prices, stock, and reviews across e-commerce sites.
      </Card>

      <Card title="Market research" icon="chart-line" href="/datasets/scrapers/instagram/quickstart">
        Aggregate social signals, competitor activity, and trending content.
      </Card>

      <Card title="AI training data" icon="robot" href="/datasets/scrapers/concepts/web-scraper-api-vs-diy">
        Build large, structured datasets to train and fine-tune models.
      </Card>

      <Card title="Job aggregation" icon="briefcase" href="/datasets/scrapers/linkedin/quickstart">
        Collect job listings from LinkedIn and other boards into a single feed.
      </Card>

      <Card title="Brand monitoring" icon="bell" href="/datasets/scrapers/twitter/quickstart">
        Track mentions, hashtags, and sentiment across social platforms.
      </Card>
    </CardGroup>

    ## Where to learn more

    <CardGroup>
      <Card title="Concepts" icon="lightbulb">
        [Sync vs async](/datasets/scrapers/concepts/sync-vs-async)

        [Web Scraper API vs DIY](/datasets/scrapers/concepts/web-scraper-api-vs-diy)
      </Card>

      <Card title="Library reference" icon="book">
        [Library overview](/datasets/scrapers/scrapers-library/overview)

        [Custom inputs](/datasets/scrapers/scrapers-library/custom-inputs)

        [Working with sources](/datasets/scrapers/scrapers-library/working-with-sources)
      </Card>

      <Card title="API basics" icon="code-branch">
        [API reference](/api-reference/rest-api/scraper/asynchronous-requests)

        [Error catalog](/datasets/scrapers/scrapers-library/error-list-by-endpoint)

        [FAQs](/datasets/scrapers/scrapers-library/faqs)
      </Card>

      <Card title="Operations" icon="gauge-high">
        [Delivery options](/datasets/scrapers/scrapers-library/delivery-options)

        [Stream and file delivery](/datasets/scrapers/scrapers-library/stream-and-file-delivery)

        [Deadline feature](/datasets/scrapers/scrapers-library/deadline-feature)
      </Card>
    </CardGroup>
  </div>
</div>
