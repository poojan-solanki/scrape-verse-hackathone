# Build a daily Amazon price monitor

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/tutorials/amazon-price-monitor](https://docs.brightdata.com/datasets/scrapers/tutorials/amazon-price-monitor)
> **Category**: `datasets-and-scrapers`

---

Schedule a daily Amazon SKU scrape with the Bright Data Amazon Scraper API, delivered to S3 and orchestrated by a GitHub Actions cron workflow.

You track prices and stock on a list of Amazon SKUs and you need fresh numbers every morning before your team starts work. You don't want to run a server just for this. You don't want to babysit a cron job on a laptop.

In this tutorial we'll build exactly that pipeline. You'll commit a SKU list to a GitHub repo, write a small Python script that triggers the Bright Data Amazon Scraper API against it, wrap the script in a GitHub Actions workflow that runs on a daily cron, and configure Bright Data to deliver the results directly to an S3 bucket. Each morning a fresh JSON file lands in S3, keyed by snapshot ID, ready for your BI pipeline to pick up.

No servers, no webhook handlers, no glue code. Just a workflow file, a script and a delivery config.

## What you'll build

A GitHub repository containing:

1. A `skus.json` file listing the Amazon product URLs to monitor
2. A Python script that POSTs the SKU list to the Bright Data Amazon Scraper API
3. A GitHub Actions workflow that runs the script on a daily schedule
4. Bright Data configured to deliver each snapshot to your S3 bucket

By the end, you'll see a new JSON file in S3 every day, each containing fresh price, rating and availability data for every SKU on the list.

**Estimated time:** 30 minutes.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an API key ([get your key](https://brightdata.com/cp/setting/users))
* An S3 bucket with Bright Data delivery already configured. Follow [Amazon to S3 delivery](/datasets/scrapers/amazon/data-delivery/amazon-s3) once, then come back. This tutorial assumes the delivery destination is already saved in your Amazon scraper's settings.
* A [GitHub account](https://github.com/signup) and a new (empty) repository
* Python 3.9+ installed locally
* Git installed locally

## Part 1: Create the SKU list

Clone your empty GitHub repo locally and create a `skus.json` file at the repo root:

```json skus.json theme={null}
[
  "https://www.amazon.com/dp/B0D1XD1ZV3",
  "https://www.amazon.com/dp/B0863TXGM3",
  "https://www.amazon.com/dp/B09V3KXJPB"
]
```

These are three real product URLs (AirPods Pro 2, Sony WH-1000XM4 headphones and iPad Air M1). Swap them for your own SKUs later.

<Tip>
  Keeping the SKU list in the repo means every edit is version-controlled and every change ships through normal pull-request review. Large SKU lists can live in a CSV loaded by the script instead, we'll mention that in "Next steps."
</Tip>

## Part 2: Write the trigger script

Create `trigger_scrape.py` at the repo root:

```python trigger_scrape.py theme={null}
import json
import os
import sys

import requests

DATASET_ID = "gd_l7q7dkf244hwjntr0"  # Amazon products by URL
TRIGGER_URL = "https://api.brightdata.com/datasets/v3/trigger"


def main() -> int:
    api_key = os.environ.get("BRIGHT_DATA_API_KEY")
    if not api_key:
        print("BRIGHT_DATA_API_KEY environment variable is not set.")
        return 1

    with open("skus.json") as f:
        urls = json.load(f)

    payload = [{"url": url} for url in urls]

    response = requests.post(
        TRIGGER_URL,
        params={"dataset_id": DATASET_ID, "format": "json"},
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json=payload,
        timeout=30,
    )
    response.raise_for_status()

    snapshot_id = response.json().get("snapshot_id")
    print(f"Triggered scrape for {len(urls)} SKUs. Snapshot: {snapshot_id}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

Then create `requirements.txt`:

```text theme={null}
requests==2.32.3
```

Two things worth noticing:

* **The script does not wait for results.** It fires the trigger and exits. Bright Data runs the scrape asynchronously and delivers the results directly to S3 via the delivery config you saved in your scraper settings. That's the whole point: the script is a cheap, stateless trigger.
* **The API key comes from an environment variable.** Never commit keys to a repo. We'll wire this to GitHub Actions Secrets in Part 4.

## Part 3: Run it locally

Install the dependency and run the script with your key:

```bash theme={null}
pip install -r requirements.txt
export BRIGHT_DATA_API_KEY=your_actual_key_here
python trigger_scrape.py
```

You should see output like:

```text theme={null}
Triggered scrape for 3 SKUs. Snapshot: sd_mntfmunq1yy7gi201q
```

Wait 60 to 90 seconds, then check your S3 bucket:

```bash theme={null}
aws s3 ls s3://your-bucket-name/amazon/products/
```

You should see a new file named with the snapshot ID:

```text theme={null}
2026-04-10 09:14:22   14382 sd_mntfmunq1yy7gi201q.json
```

Download it and inspect one record:

```bash theme={null}
aws s3 cp s3://your-bucket-name/amazon/products/sd_mntfmunq1yy7gi201q.json ./latest.json
python -m json.tool latest.json | head -30
```

You should see structured product data for each SKU:

```json theme={null}
[
  {
    "title": "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones",
    "asin": "B0863TXGM3",
    "brand": "Sony",
    "final_price": 209.99,
    "currency": "USD",
    "rating": 4.6,
    "reviews_count": 62492,
    "availability": "Only 1 left in stock - order soon.",
    "url": "https://www.amazon.com/dp/B0863TXGM3"
  }
]
```

<Note>
  The price field is `final_price`, and it can be `null` for products that are out of stock or currency-ambiguous listings. Your BI pipeline should handle that case explicitly rather than crashing on a missing key.
</Note>

Notice that the file is keyed by `snapshot_id`, not by date. That's deliberate: each snapshot is immutable, and you can walk the bucket chronologically by listing creation timestamps or by enabling versioning. We'll discuss naming conventions in "Next steps."

## Part 4: Schedule the workflow on GitHub Actions

Now let's move the trigger off your laptop and onto a daily schedule.

Create `.github/workflows/daily-scrape.yml`:

```yaml .github/workflows/daily-scrape.yml theme={null}
name: Daily Amazon price scrape

on:
  schedule:
    - cron: "0 6 * * *"   # 06:00 UTC every day
  workflow_dispatch:        # Allows manual runs from the Actions tab

jobs:
  trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Trigger Bright Data scrape
        env:
          BRIGHT_DATA_API_KEY: ${{ secrets.BRIGHT_DATA_API_KEY }}
        run: python trigger_scrape.py
```

Two key elements:

* **`schedule: cron: "0 6 * * *"`** runs the job at 06:00 UTC every day. Adjust the cron expression for your timezone. GitHub's scheduled workflows have no guaranteed precision, but daily runs typically fire within a few minutes of the scheduled time.
* **`workflow_dispatch`** adds a **Run workflow** button in the Actions tab so you can kick off the job on demand without waiting for the schedule.

Now add your Bright Data key as a repo secret:

1. In your GitHub repo, go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Name it `BRIGHT_DATA_API_KEY` and paste your key
4. Click **Add secret**

<Warning>
  Treat your Bright Data API key like a password. Never commit it to the repo, never paste it into workflow logs, and rotate it if you suspect it's been exposed.
</Warning>

## Part 5: Push and verify

Commit everything and push:

```bash theme={null}
git add skus.json trigger_scrape.py requirements.txt .github/workflows/daily-scrape.yml
git commit -m "Add daily Amazon price monitor"
git push
```

Open your repo on GitHub and go to the **Actions** tab. You should see the **Daily Amazon price scrape** workflow listed.

Click **Run workflow** > **Run workflow** to kick it off manually. Within a few seconds a new run appears. Click into it and watch the steps execute. The final step should log:

```text theme={null}
Triggered scrape for 3 SKUs. Snapshot: sd_mntfn4abcdefghij
```

Wait a minute, then check S3 again:

```bash theme={null}
aws s3 ls s3://your-bucket-name/amazon/products/
```

You should now see two snapshot files, the one from Part 3 and the one from the workflow run.

From here, GitHub Actions will run the workflow every day at the scheduled time, and a fresh file will appear in S3 each morning. No server, no cron job, no babysitting.

## Congratulations

You've built a fully automated daily price monitor:

* A **SKU list** version-controlled in GitHub
* A **Python trigger script** that fires the Bright Data scrape and exits
* A **GitHub Actions workflow** that runs on a daily cron and authenticates via a repo secret
* **Bright Data S3 delivery** that drops each snapshot into your bucket asynchronously

Every moving part is declarative and in the repo. Editing the SKU list, the cron schedule or the destination is a one-line pull request.

## Next steps

<CardGroup>
  <Card title="Stream large snapshots" icon="arrow-down-to-line" href="/datasets/scrapers/scrapers-library/stream-and-file-delivery">
    Use `stream_max_lines` to start receiving batches as soon as the first records are ready.
  </Card>

  <Card title="Amazon async reference" icon="layer-group" href="/datasets/scrapers/amazon/async-requests">
    Full parameter list for the async trigger endpoint, including `include_errors` and `limit_per_input`.
  </Card>

  <Card title="Monitor delivery status" icon="magnifying-glass-chart" href="/api-reference/scrapers/management-apis/monitor-delivery">
    Programmatically check snapshot status and delivery result from inside the workflow.
  </Card>

  <Card title="All delivery options" icon="truck" href="/datasets/scrapers/scrapers-library/delivery-options">
    Swap S3 for GCS, Azure, Snowflake or SFTP with the same trigger call.
  </Card>
</CardGroup>
