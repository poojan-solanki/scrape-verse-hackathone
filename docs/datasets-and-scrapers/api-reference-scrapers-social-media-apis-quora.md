# Quora API scrapers

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/quora](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/quora)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data Web Scraper API (1000+ scrapers) for Quora. Submit the request and retrieve the data as structured JSON records once the job completes.

## Overview

<CardGroup>
  <Card title="Posts API" icon="images" href="/api-reference/scrapers/social-media-apis/quora#posts-api">
    This API allows users to collect multiple posts based on a single input URL.

    <br />

    *   **Discovery functionality**:

    *   N/A

    <br />

    *   **Interesting Columns**:

    *   `author_name`, `title`, `over_all_answers`, `shares`.
  </Card>
</CardGroup>

## Posts API

### Collect by URL

This API allows users to collect detailed information about a specific Quora post using the provided post URL.

**Input Parameters**

<ParamField type="string">
  The URL of the Quora post.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Post Details**:\
  `url`, `post_id`, `title`, `post_date`, `originally_answered`, `over_all_answers`, `post_text`, `header`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lvz1rbj81afv3m6n5y?tab=overview).

* **Media & Links**:\
  `pictures_urls`, `videos_urls`, `external_urls`.

* **Engagement & Metrics**:\
  `upvotes`, `shares`, `views`, `author_content_views`.

* **Author Details**:\
  `author_name`, `author_active_spaces`, `author_joined_date`, `author_about`, `author_education`.

* **Top Comments**:\
  `top_comments`.

This API provides detailed insights into a Quora post, including content, media, author information, and engagement metrics, enabling efficient post analysis and content tracking.
