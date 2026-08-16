# Collect events by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-events-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/facebook-events-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Events by URL. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m14sd0to1jz48ppm51` to collect **Facebook events** data.
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
      The URL of the Facebook event to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.facebook.com/events/1546764716269782"},
      {"url": "https://www.facebook.com/events/9876543210123456"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.facebook.com/events/1546764716269782",
      "event_id": "1546764716269782",
      "name": "Tech Innovation Summit 2026",
      "description": "Join us for a day of innovation and networking...",
      "start_date": "2026-06-15T09:00:00.000Z",
      "end_date": "2026-06-15T17:00:00.000Z",
      "location": "San Francisco Convention Center",
      "address": "747 Howard St, San Francisco, CA 94103",
      "organizer": "TechEvents Inc.",
      "organizer_url": "https://www.facebook.com/techevents",
      "attendees_count": 1250,
      "interested_count": 3400,
      "is_online": false,
      "ticket_url": "https://techsummit2026.eventbrite.com",
      "cover_photo": "https://...",
      "category": "Science & Technology"
    }
  ]
  ```
</ResponseExample>
