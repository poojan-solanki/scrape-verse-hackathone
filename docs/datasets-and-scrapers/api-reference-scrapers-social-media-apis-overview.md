# Social media scraper APIs

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/overview](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/overview)
> **Category**: `datasets-and-scrapers`

---

Bright Data Social Media Scraper APIs collect profiles, posts and comments from 10 platforms across 68 dedicated endpoints, including Facebook and LinkedIn.

The Bright Data Social Media Scraper APIs collect profiles, posts, reels, jobs, events and comments from 10 social platforms through 67 dedicated endpoints, with one endpoint per data type and input method.

## Supported platforms

<CardGroup>
  <Card title="Facebook" icon="facebook" href="/api-reference/scrapers/social-media-apis/facebook-pages-posts-collect-by-url" />

  <Card title="Instagram" icon="instagram" href="/api-reference/scrapers/social-media-apis/instagram-profiles-collect-by-url" />

  <Card title="LinkedIn" icon="linkedin" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url" />

  <Card title="TikTok" icon="tiktok" href="/api-reference/scrapers/social-media-apis/tiktok-profiles-collect-by-url" />

  <Card title="Reddit" icon="reddit" href="/api-reference/scrapers/social-media-apis/reddit-posts-collect-by-url" />

  <Card title="X (Twitter)" icon="x-twitter" href="/api-reference/scrapers/social-media-apis/twitter-posts-collect-by-url" />

  <Card title="YouTube" icon="youtube" href="/api-reference/scrapers/social-media-apis/youtube-videos-collect-by-url" />

  <Card title="Pinterest" icon="pinterest" href="/api-reference/scrapers/social-media-apis/pinterest" />

  <Card title="Quora" icon="quora" href="/api-reference/scrapers/social-media-apis/quora" />

  <Card title="Vimeo" icon="vimeo" href="/api-reference/scrapers/social-media-apis/vimeo" />
</CardGroup>

## How the endpoints are organized

Each Social Media Scraper API endpoint is dedicated to a single data type and a single input method. Endpoint names follow the pattern `{platform}-{object}-{action}-by-{input}`, for example `instagram-posts-collect-by-url` or `reddit-posts-discover-by-keyword`.

Two action types cover every endpoint:

* **Collect by URL**: you pass one or more canonical URLs and receive the structured record for each target (profile, post, video, job, listing). Use this when you already know what you want.
* **Discover by keyword, username, category or hashtag**: you pass a query and the endpoint returns the matching set of URLs and records. Use this when you need to find items before collecting them.

You can chain the two. Run a `discover` endpoint first to build a URL list, then feed that list into the matching `collect-by-url` endpoint on the same platform.

## Endpoint coverage by platform

| Platform    | Endpoints | What you can collect                                                                   |
| ----------- | --------- | -------------------------------------------------------------------------------------- |
| Facebook    | 15        | Pages, posts, comments, profiles, events, reels, marketplace listings, company reviews |
| Instagram   | 8         | Profiles, posts, reels, comments                                                       |
| LinkedIn    | 10        | Profiles, companies, posts, jobs, people discovery                                     |
| TikTok      | 12        | Profiles, posts, comments, TikTok Shop products                                        |
| Reddit      | 4         | Posts by URL, subreddit or keyword and post comments                                   |
| X (Twitter) | 5         | Posts and profiles by URL, username or profile array                                   |
| YouTube     | 10        | Videos, channels and comments by URL, keyword, hashtag or podcast                      |
| Pinterest   | 1         | Profiles and pins                                                                      |
| Quora       | 1         | Posts and answers                                                                      |
| Vimeo       | 1         | Videos and channels                                                                    |

## Data types each platform exposes

The endpoints map to three data types that are interconnected, so the output of one can be the input to another:

* **Profiles**: user, page, channel or company data, with metrics such as followers, subscribers and post counts.
* **Posts**: individual posts, reels, videos, jobs or listings, with engagement metrics such as likes, views, comments and hashtags.
* **Comments**: replies and reactions attached to a specific post or video.

### Example: end-to-end YouTube collection

1. Call `youtube-channels-discover-by-keyword` with a search term to find channels.
2. Pass the channel URLs to `youtube-channels-collect-by-url` for channel metadata.
3. Pass the same channel URLs to `youtube-videos-collect-by-url` to fetch videos.
4. Pass the resulting video URLs to `youtube-comments-collect-by-url` to fetch comments.

The same chain pattern applies to every other supported platform.

## Next steps

Pick a platform above to see its dedicated endpoints. If you are new to the Web Scraper API request model, review [Synchronous requests](/api-reference/scrapers/synchronous-requests) and [Asynchronous requests](/api-reference/rest-api/scraper/asynchronous-requests) first.
