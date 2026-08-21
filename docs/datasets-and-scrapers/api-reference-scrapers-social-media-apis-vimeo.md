# Vimeo API scrapers

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/vimeo](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/vimeo)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data Web Scraper API (1000+ scrapers) for Vimeo. Submit the request and retrieve the data as structured JSON records once the job completes.

## Overview

The Vimeo API Suite offers multiple types of APIs, each designed for specific data collection needs from Vimeo. Below is an overview of how these APIs connect and interact, based on the available features:

<CardGroup>
  <Card title="Posts API" icon="images" href="/api-reference/scrapers/social-media-apis/vimeo#posts-api">
    This API allows users to collect multiple posts based on a single input URL.

    <br />

    *   **Discovery functionality**:

    *   Discover by profile URL.

    *   Discover by Keywords and License.

    <br />

    *   **Interesting Columns**:

    *   `title`, `video_length`, `views`, `likes`.
  </Card>
</CardGroup>

## Posts API

### Collect by URL

This API allows users to collect detailed information about a specific Vimeo video using the provided video URL.

**Input Parameters**

<ParamField type="string">
  The URL of the Vimeo video.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Video Details**\
  `video_id`, `title`, `url`, `video_url`, `video_length`, `description`, `data_posted`, `transcript`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lxk88z3v1ketji4pn?tab=overview).

* **Engagement & Metrics**\
  `views`, `likes`, `comments`, `collections`.

* **Uploader Details**\
  `uploader`, `uploader_url`, `uploader_id`, `avatar_img_uploader`.

* **Video Media & Content**\
  `preview_image`, `related_videos`, `music_track`.

* **License & Quality**\
  `license`, `license_info`, `video_quality`.

* **Dimensions**\
  `height`, `width`.

This API provides detailed insights into a Vimeo video, including video content, uploader information, media links, engagement metrics, and more, enabling efficient video analysis and content tracking.

### Discover by URL

This API allows users to discover Vimeo videos based on a specific URL and associated keywords, providing detailed video information and insights.

**Input Parameters**

<ParamField type="string">
  The URL of the Vimeo post.
</ParamField>

<ParamField type="string">
  The keyword to search for within the video's content.
</ParamField>

<ParamField type="number">
  The number of pages of results to collect.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Video Details**\
  `video_id`, `title`, `url`, `video_url`, `video_length`, `description`, `data_posted`, `transcript`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lxk88z3v1ketji4pn/url?tab=overview).

* **Engagement & Metrics**\
  `views`, `likes`, `comments`, `collections`.

* **Uploader Details**\
  `uploader`, `uploader_url`, `uploader_id`, `avatar_img_uploader`.

* **Video Media & Content**\
  `preview_image`, `related_videos`, `music_track`.

* **License & Quality**\
  `license`, `license_info`, `video_quality`.

* **Dimensions**\
  `height`, `width`.

This API allows users to discover Vimeo videos by URL and keyword, offering detailed insights into video content, uploader information, and engagement metrics.

### Discover by Keywords and License

This API allows users to discover Vimeo videos based on specific keywords and license types, providing detailed video information and insights.

**Input Parameters**

<ParamField type="string">
  The keyword to search for in the video content.
</ParamField>

<ParamField type="string">
  The license type to filter the videos by (e.g., Creative Commons, Standard License).
</ParamField>

<ParamField type="number">
  The number of pages of results to collect.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Video Details**\
  `video_id`, `title`,`url`, `video_url`, `video_length`, `description`, `data_posted`, `transcript`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lxk88z3v1ketji4pn/keyword_and_license?tab=overview).

* **Engagement & Metrics**\
  `views`, `likes`, `comments`, `collections`.

* **Uploader Details**\
  `uploader`, `uploader_url`, `uploader_id`, `avatar_img_uploader`.

* **Video Media & Content**\
  `preview_image`, `related_videos`, `music_track`.

* **License & Quality**\
  `license`, `license_info`, `video_quality`.

* **Dimensions**\
  `height`, `width`.

This API allows users to discover Vimeo videos based on specific keywords and license types, offering detailed insights into video content, uploader information, and engagement metrics.
