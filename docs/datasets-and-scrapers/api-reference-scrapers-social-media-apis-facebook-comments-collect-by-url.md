# Collect Facebook comments by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-comments-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-comments-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/facebook-comments-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Facebook comments by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lkay758p1eanlolqw8` to collect **Facebook comments** data.
  </Warning>
</ParamField>

<ParamField type="boolean">
  Whether to send notifications when the request is completed.
</ParamField>

<ParamField type="boolean">
  Whether to include errors in the response.
</ParamField>

## Request Body

<ParamField type="object[]">
  An array of input objects.

  <Expandable title="properties">
    <ParamField type="string">
      The URL of the Facebook post to collect comments from.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/NASA/posts/1234567890"},
      {"url": "https://www.facebook.com/Meta/posts/9876543210"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/Pagina12ok/posts/pfbid0...",
      "post_id": "1287876623560800",
      "post_url": "https://www.facebook.com/Pagina12ok/posts/pfbid0...",
      "comment_id": "Y29tbWVudDox...",
      "user_name": "Norma Ester Mercado",
      "user_id": "pfbid0...",
      "user_url": "https://www.facebook.com/normaester.mercado.1",
      "date_created": "2026-04-02T23:46:29.000Z",
      "comment_text": "Great post, thanks for sharing!",
      "num_likes": 1,
      "num_replies": 0,
      "attached_files": null,
      "type": "Comment",
      "reply": true,
      "parent_comment_id": "Y29tbWVudDox..."
    }
  ]
  ```
</ResponseExample>
