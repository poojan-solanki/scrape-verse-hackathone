# Build a keyword social listener

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/tutorials/social-listener](https://docs.brightdata.com/datasets/scrapers/tutorials/social-listener)
> **Category**: `datasets-and-scrapers`

---

Build a keyword social listener with Bright Data SERP API (31 languages) and social scrapers. Discover Instagram, TikTok and X posts, then collect full data.

You want to know when a keyword (a brand name, a product, a competitor) shows up in a post on Instagram, TikTok or X. You don't have the URLs in advance, so you can't just hand a list to a scraper. You need a discovery step first.

In this tutorial we'll build that discovery pipeline with one Python script. You'll use the Bright Data **SERP API** in `parsed_light` mode to run `site:instagram.com "your keyword"` style queries, take the top 10 organic links from each response, classify them by platform and fire the matching social scraper asynchronously. At the end you'll have one snapshot per platform, ready to be delivered to S3 or a webhook.

We stop at the trigger step. Routing the snapshots into storage is a delivery-config change that the other two tutorials in this series already cover.

## What you'll build

A single Python script that:

1. Runs three SERP API queries, one per platform, for your keyword
2. Reads the top 10 organic results from each `parsed_light` response
3. Classifies each link as an Instagram post, a TikTok video or an X post
4. Triggers the matching Bright Data social scraper for each platform's URL list
5. Prints one snapshot ID per platform

Run it once, get three snapshot IDs. Wire the same script into GitHub Actions later and you've got a daily mention monitor.

**Estimated time:** 25 minutes.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an API key ([get your key](https://brightdata.com/cp/setting/users))
* A **SERP API zone** created in the control panel. Follow the [SERP API introduction](/scraping-automation/serp-api/introduction) once, then come back with the zone name
* Python 3.9+ installed locally

## Part 1: Set up the project

Create a new folder and drop in a `requirements.txt`:

```bash theme={null}
mkdir social-listener && cd social-listener
```

```text requirements.txt theme={null}
requests==2.32.3
```

Install the dependency:

```bash theme={null}
pip install -r requirements.txt
```

Export the credentials the script will read from the environment. The API key authenticates both the SERP API and the social scraper triggers; the zone name tells the SERP API which SERP zone to route the request through:

```bash theme={null}
export BRIGHT_DATA_API_KEY=your_api_key
export BRIGHT_DATA_SERP_ZONE=your_serp_zone_name
```

## Part 2: Discover mentions with the SERP API

The SERP API is a single REST endpoint: `POST https://api.brightdata.com/request`. You hand it a zone name and a Google Search URL, and it returns the SERP for that query. Pass `data_format: "parsed_light"` and you get back a compact JSON payload with just the top 10 organic results, no ads, no knowledge panels, no parsing to do on your side.

Create `listen.py` and start with the discovery step:

```python listen.py theme={null}
import os
import sys
import urllib.parse

import requests

SERP_URL = "https://api.brightdata.com/request"
TRIGGER_URL = "https://api.brightdata.com/datasets/v3/trigger"

PLATFORMS = ["instagram.com", "tiktok.com", "x.com"]


def discover(keyword: str, api_key: str, zone: str) -> dict[str, list[dict]]:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    results_by_platform: dict[str, list[dict]] = {}

    for site in PLATFORMS:
        query = f'site:{site} "{keyword}"'
        google_url = (
            "https://www.google.com/search"
            f"?q={urllib.parse.quote_plus(query)}&hl=en&gl=us"
        )

        response = requests.post(
            SERP_URL,
            headers=headers,
            json={
                "zone": zone,
                "url": google_url,
                "format": "raw",
                "data_format": "parsed_light",
            },
            timeout=180,
        )
        response.raise_for_status()
        organic = response.json().get("organic", [])
        results_by_platform[site] = organic

    return results_by_platform
```

Three things worth noticing:

* **`data_format: "parsed_light"`** is the key. It tells the SERP API to return only the top 10 organic results in a compact `organic` array, skipping ads and knowledge panels. Faster response, less data to classify.
* **`format: "raw"`** is required alongside `data_format`. It refers to the outer HTTP response envelope, not the parsed payload. The SERP API docs [spell this out](/scraping-automation/serp-api/introduction#get-only-top-10-results-faster-response).
* **`timeout=180`** is generous on purpose. Most SERP API calls return in well under a second, but a single query can occasionally take longer during Google rate-limiting. Three seconds of budget each keeps the script robust without being wasteful.

## Part 3: Classify the URLs by platform

Each SERP response gives you an `organic` array, and each entry has a `link` field pointing to a real post URL. You need to bucket those links so each scraper gets only the URLs it understands.

Add these helpers to `listen.py`:

```python listen.py theme={null}
import re

INSTAGRAM_POST_RE = re.compile(r"https://(?:www\.)?instagram\.com/(?:p|reel)/[^/?#]+")
TIKTOK_POST_RE    = re.compile(r"https://(?:www\.)?tiktok\.com/@[^/]+/video/\d+")
X_POST_RE         = re.compile(r"https://(?:www\.)?x\.com/[^/]+/status/\d+")


def classify(results_by_platform: dict[str, list[dict]]) -> dict[str, list[str]]:
    buckets: dict[str, list[str]] = {"instagram": [], "tiktok": [], "x": []}

    for organic in results_by_platform.values():
        for result in organic:
            link = result.get("link", "")
            if INSTAGRAM_POST_RE.match(link):
                buckets["instagram"].append(link)
            elif TIKTOK_POST_RE.match(link):
                buckets["tiktok"].append(link)
            elif X_POST_RE.match(link):
                buckets["x"].append(link)

    for platform in buckets:
        buckets[platform] = list(dict.fromkeys(buckets[platform]))

    return buckets
```

Notice the regexes match only **post-shaped `https://` URLs**, not profile pages or topic pages. A profile URL like `instagram.com/tiktok` is rejected because this tutorial's scrapers only take post URLs as input. The `https://` prefix is strict on purpose: the social scrapers reject plain `http://` URLs at validation time, so dropping them here avoids a `400 validation_error` from the trigger step later. The `dict.fromkeys` trick de-duplicates while preserving order.

## Part 4: Trigger the social scrapers

You now have three lists of post URLs. Fire them at the matching social scrapers with async triggers so each scraper can run on its own schedule without blocking the script:

```python listen.py theme={null}
SOCIAL_DATASETS = {
    "instagram": "gd_lk5ns7kz21pck8jpis",  # Instagram posts
    "tiktok":    "gd_lu702nij2f790tmv9h",  # TikTok posts
    "x":         "gd_lwxkxvnf1cynvib9co",  # X posts
}


def trigger(platform: str, urls: list[str], api_key: str) -> str | None:
    if not urls:
        print(f"  {platform}: no URLs to trigger")
        return None

    response = requests.post(
        TRIGGER_URL,
        params={"dataset_id": SOCIAL_DATASETS[platform], "format": "json"},
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json=[{"url": url} for url in urls],
        timeout=30,
    )
    response.raise_for_status()
    snapshot_id = response.json().get("snapshot_id")
    print(f"  {platform}: {len(urls)} URLs -> snapshot {snapshot_id}")
    return snapshot_id
```

Two things worth noticing:

* **Discovery is synchronous, scraping is async.** The SERP API returns in under a second per query, so you loop over three queries inline. The social scrapers can take several minutes each, so you trigger and exit. Bright Data runs them in the background.
* **The script returns snapshot IDs, not data.** The actual posts land wherever your scraper's delivery config points (API download, webhook, or S3/GCS/Azure). See the two companion tutorials for [webhook delivery](/datasets/scrapers/tutorials/linkedin-to-crm) and [S3 delivery](/datasets/scrapers/tutorials/amazon-price-monitor).

## Part 5: Wire it together and run

Add a `main` block that glues the three steps:

```python listen.py theme={null}
def main() -> int:
    api_key = os.environ.get("BRIGHT_DATA_API_KEY")
    zone = os.environ.get("BRIGHT_DATA_SERP_ZONE")

    if not (api_key and zone):
        print("Set BRIGHT_DATA_API_KEY and BRIGHT_DATA_SERP_ZONE before running.")
        return 1

    if len(sys.argv) < 2:
        print("Usage: python listen.py \"your keyword\"")
        return 1

    keyword = sys.argv[1]
    print(f"Discovering mentions of: {keyword}")

    results_by_platform = discover(keyword, api_key, zone)
    buckets = classify(results_by_platform)

    print("Classified URLs:")
    for platform, urls in buckets.items():
        print(f"  {platform}: {len(urls)}")

    print("Triggering scrapers:")
    for platform, urls in buckets.items():
        trigger(platform, urls, api_key)

    return 0


if __name__ == "__main__":
    sys.exit(main())
```

Run it with a keyword that is likely to show up on all three platforms:

```bash theme={null}
python listen.py "bright data"
```

You should see output like:

```text theme={null}
Discovering mentions of: bright data
Classified URLs:
  instagram: 9
  tiktok: 10
  x: 10
Triggering scrapers:
  instagram: 9 URLs -> snapshot sd_mnte2pbv16riike0ao
  tiktok: 10 URLs -> snapshot sd_mnte2q1nw3g36l4z1
  x: 10 URLs -> snapshot sd_mnte2qt91ga85uuq8r
```

Three snapshot IDs, one per platform. Each is now running asynchronously at Bright Data and will deliver results to wherever you've configured that scraper's delivery destination.

## Congratulations

You've built a keyword social listener that:

* Uses the **SERP API** in `parsed_light` mode as a compact, sub-second discovery engine
* Takes the **top 10 organic results** per query and classifies them by platform with post-shape regexes
* **Triggers** the Instagram, TikTok and X scrapers in parallel on the discovered URLs
* Exits immediately after trigger, leaving the heavy work to Bright Data

The whole pipeline is one Python file. No proxy setup, no glue services and no batch jobs.

## Next steps

<CardGroup>
  <Card title="Deliver to a webhook" icon="webhook" href="/datasets/scrapers/tutorials/linkedin-to-crm">
    Point each social scraper at a webhook handler (like the Next.js one in the LinkedIn tutorial) to get mapped post records back in real time.
  </Card>

  <Card title="Deliver to S3" icon="bucket" href="/datasets/scrapers/tutorials/amazon-price-monitor">
    Configure S3 delivery on each scraper and schedule this script with GitHub Actions for a daily mention report.
  </Card>

  <Card title="Narrow the search" icon="filter" href="/scraping-automation/serp-api/query-parameters/google">
    Full list of Google-specific query parameters you can add to the search URL, including `gl`, `hl`, `uule` and time filters.
  </Card>

  <Card title="SERP API reference" icon="bolt" href="/scraping-automation/serp-api/introduction">
    All supported engines, parsed output schema and async request mode for large volumes.
  </Card>
</CardGroup>
