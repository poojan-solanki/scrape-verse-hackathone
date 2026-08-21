# Streamed and file delivery

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/stream-and-file-delivery](https://docs.brightdata.com/datasets/scrapers/scrapers-library/stream-and-file-delivery)
> **Category**: `datasets-and-scrapers`

---

Configure streamed delivery to receive large snapshots in real-time batches across 1000+ scrapers, or file delivery to retrieve raw page files alongside data.

This guide shows you how to use two advanced delivery features for scrapers: **streamed delivery** for large snapshots and **file delivery** to retrieve raw page files with your data.

<Info>
  **Prerequisites:**

  * A Bright Data account with an active scraper
  * Delivery method set to **Storage** or **Webhook** (both features require this)
</Info>

***

## How to stream delivery in batches

When a snapshot is large, streamed delivery lets you receive results immediately as they're collected, in batches, rather than waiting for the full snapshot to complete.

### Enable streamed delivery

#### Control panel

1. Open your scraper's **Delivery settings** tab.
2. Toggle **Stream results** on.
3. Enter how many data lines each batch should contain.

<Frame>
  <img alt="Stream results toggle in Delivery settings" />
</Frame>

#### Web Scraper API parameter

Add `&stream_max_lines=1000` to your Web Scraper API (WSAPI) request:

```bash theme={null}
curl "https://api.brightdata.com/datasets/v3/trigger?dataset_id=<DATASET_ID>&stream_max_lines=1000" \
  -H "Authorization: Bearer API_KEY"
```

### Limits

| Setting            | Value         |
| ------------------ | ------------- |
| Minimum batch size | 10 lines      |
| Maximum batch size | 100,000 lines |

<Warning>
  Streamed delivery requires a **Storage** or **Webhook** delivery method. It is not compatible with API download.
</Warning>

***

## How to deliver raw page files

File delivery lets you retrieve raw page files (HTML snapshots, WARC archives, or screenshots) alongside your scraped data.

### How to enable file delivery

Add `&download_fields=` to your WSAPI request with one or more of the available file types:

```bash theme={null}
curl "https://api.brightdata.com/datasets/v3/trigger?dataset_id=<DATASET_ID>&download_fields=html" \
  -H "Authorization: Bearer API_KEY"
```

To request multiple file types, pass them as a comma-separated list:

```bash theme={null}
curl "https://api.brightdata.com/datasets/v3/trigger?dataset_id=<DATASET_ID>&download_fields=html,screenshot" \
  -H "Authorization: Bearer API_KEY"
```

### Available file types

| Type         | Availability         | Description                                      |
| ------------ | -------------------- | ------------------------------------------------ |
| `html`       | Always available     | Raw HTML of the scraped page                     |
| `warc`       | Not always available | Full WARC archive including request and response |
| `screenshot` | Not always available | Screenshot of the page at time of scraping       |

<Warning>
  File delivery works only when the delivery method is set to **Storage** or **Webhook**.
</Warning>

***

## Related

<CardGroup>
  <Card title="Delivery options" icon="truck" href="/datasets/scrapers/scrapers-library/delivery-options">
    Configure your storage destination and output format
  </Card>

  <Card title="API reference" icon="code" href="/datasets/scrapers/scrapers-library/api-reference">
    Full API parameters for triggering and managing snapshots
  </Card>
</CardGroup>
