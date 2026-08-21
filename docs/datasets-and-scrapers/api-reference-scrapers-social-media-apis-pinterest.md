# Pinterest API scrapers

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/pinterest](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/pinterest)
> **Category**: `datasets-and-scrapers`

---

Use the Bright Data Web Scraper API (1000+ scrapers) for Pinterest. Submit the request and retrieve the data as structured JSON records once the job completes.

## Overview

The Pinterest API Suite offers multiple types of APIs, each designed for specific data collection needs from Pinterest. Below is an overview of how these APIs connect and interact, based on the available features:

<CardGroup>
  <Card title="Profiles API" icon="user" href="/api-reference/scrapers/social-media-apis/pinterest#profiles-api">
    This API allows users to collect profile details based on a single input: profile URL.

    <br />

    *   **Discovery functionality**:

    *   Discover by Keywords.

    <br />

    *   **Interesting Columns**:

    *   `name`, `following_count`, `website`, `follower_count`.
  </Card>

  <Card title="Posts API" icon="images" href="/api-reference/scrapers/social-media-apis/pinterest#posts-api">
    This API allows users to collect multiple posts based on a single input.

    <br />

    *   **Discovery functionality**:

      *   - Discover by profile URL.

      *   - Discover by Keywords.

    <br />

    *   **Interesting Columns**:

    *   `title`, `content`, `user_name`, `likes`.
  </Card>
</CardGroup>

## Profiles API

### Collect by URL

This API allows users to retrieve detailed Pinterest profile information using the provided profile URL.

**Input Parameters**:

<ParamField type="string">
  The Pinterest profile URL.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Profile Details**:\
  `url`, `profile_picture`, `name`, `nickname`, `website`, `bio`, `country_code`, `profile_id`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lk0zv93c2m9qdph46z?tab=overview).

* **Engagement & Metrics**:\
  `following_count`, `follower_count`, `boards_num`, `saved`.

* **Additional Information**:\
  `last_updated`, `posts_page_url`, `discovery_input`.

This API allows users to collect detailed insights into a Pinterest profile, including user statistics, engagement metrics, and profile information.

### Discover by Keywords

This API allows users to discover Pinterest profiles based on a specified keyword.

**Input Parameters**:

<ParamField type="string">
  The keyword to search for profiles.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Profile Details**:\
  `url`, `profile_picture`, `name`, `nickname`, `website`, `bio`, `country_code`, `profile_id`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lk0zv93c2m9qdph46z/keyword?tab=overview).

* **Engagement & Metric**s:\
  `following_count`, `follower_count`, `boards_num`, saved.

* **Additional Information**:\
  `last_updated`, `posts_page_url`, `discovery_input`.

This API enables users to find Pinterest profiles related to a specific keyword, offering insights into user statistics, engagement, and profile details.

## Posts API

### Collect by URL

This API allows users to collect detailed post data from a specific Pinterest post using the provided post URL.

**Input Parameters**:

<ParamField type="string">
  The Pinterest post URL.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Post Details**:\
  `url`, `post_id`, `title`, `content`, `date_posted`, `post_type`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lk0sjs4d21kdr7cnlv?tab=overview).

* **User Details**:\
  `user_name`, `user_url`, `user_id`, `followers`.

* **Post Metrics**:\
  `likes`, `comments_num`, `comments`, `categories`.

* **Media & Attachments**:\
  `image_video_url`, `video_length`, `attached_files`.

* **Hashtags & Discovery**:\
  `hashtags`, `discovery_input`.

This API allows users to retrieve detailed insights into a specific Pinterest post, including user engagement, post content, media, and other related information.

### Discover by Profile URL

This API allows users to retrieve posts from a specific Pinterest profile based on the provided profile URL.

**Input Parameters**:

<ParamField type="string">
  The Pinterest profile URL from which to collect posts.
</ParamField>

<ParamField type="number">
  The number of posts to collect. If omitted, there is no limit.
</ParamField>

<ParamField type="array">
  An array of post IDs to exclude from the results.
</ParamField>

<ParamField type="string">
  Start date for filtering posts in `MM-DD-YYYY` format (should be earlier than `end_date`).
</ParamField>

<ParamField type="string">
  End date for filtering posts in `MM-DD-YYYY` format (should be later than `start_date`).
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Post Details**:\
  `url`, `post_id`, `title`, `content`, `date_posted`, `user_name`, `user_url`, `user_id`, `followers`, `likes`, `categories`, `source`, `attached_files`, `image_video_url`, `video_length`, `hashtags`, `comments_num`, `comments`, `post_type`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lk0sjs4d21kdr7cnlv/profile_url?tab=overview).

* **Engagement & Metrics**:\
  `followers`, `likes`, `comments_num`.

* **Media & Attachments**:\
  `image_video_url`, `video_length`, `attached_files`.

* **Additional Information**:\
  `discovery_input`.

This API enables users tso collect posts from a specific Pinterest profile, allowing for filtering by date, exclusion of specific posts, and retrieval of detailed post data including media, comments, and engagement metrics.

### Discover by Keywords

This API allows users to discover Pinterest posts based on a specific keyword, enabling efficient content discovery.

**Input Parameters**:

<ParamField type="string">
  The keyword to search for posts, such as "food" or any other relevant term.
</ParamField>

**Output Structure**:\
Includes comprehensive data points:

* **Post Details**:\
  `url`, `post_id`, `title`, `content`, `date_posted`, `user_name`, `user_url`, `user_id`, `followers`, `likes`, `categories`, `source`, `attached_files`, `image_video_url`, `video_length`, `hashtags`, `comments_num`, `comments`, `post_type`.

  > For all data points, [click here](https://brightdata.com/cp/scrapers/gd_lk0zv93c2m9qdph46z/keyword?tab=overview).

* **Engagement & Metrics**:\
  `followers`, `likes`, `comments_num`.

* **Media & Attachments**:\
  `image_video_url`, `video_length`, `attached_files`.

* **Additional Information**:\
  `discovery_input`.

This API enables users to search for Pinterest posts based on a specific keyword, providing detailed insights into the content, engagement, media, and associated metrics for efficient discovery.
