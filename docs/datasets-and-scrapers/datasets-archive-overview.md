# Web Archive overview

> **Official Source**: [https://docs.brightdata.com/datasets/archive/overview](https://docs.brightdata.com/datasets/archive/overview)
> **Category**: `datasets-and-scrapers`

---

The Web Archive gives access to Bright Data's stored web traffic (380M+ domains), a growing repository of pages collected through Unlocker and SERP APIs.

## What it does

Instead of running your own crawlers, you search the archive, filter what you need (by time range, domain, URL patterns, language, blocking signals), and export ready-to-use datasets as HTML files + metadata.

## Common use cases

* **LLM training and RAG pipelines**: Build or refresh training corpora from targeted web segments
* **Search and indexing**: Backfill indexes with historical content across large domain sets
* **Search product augmentation**: Improve coverage for sites with advanced blocking, supporting reliable page retrieval at scale

## How it works

<Card title="Run a search" icon="search" href="/api-reference/archive-api/run-a-search">
  Filter by time range, domains, URL patterns, language, or signals (CAPTCHA, robots blocks, etc.)
</Card>

<Card title="Review the estimate" icon="clipboard-list" href="/api-reference/archive-api/get-search-status">
  See matched file count, snapshot size, expected duration, and cost
</Card>

<Card title="Create and deliver a dump" icon="file-export" href="/api-reference/archive-api/deliver-to-cloud">
  Export the snapshot as HTML files + metadata (URL, timestamp, collection attributes) to Amazon S3, Azure Blob Storage, or via webhook
</Card>
