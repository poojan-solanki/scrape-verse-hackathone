# Send your first Google API request

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/google/send-first-request](https://docs.brightdata.com/datasets/scrapers/google/send-first-request)
> **Category**: `datasets-and-scrapers`

---

Send synchronous requests to every Bright Data Google Scraper API endpoint with copy-paste examples for Maps, Trends, reviews and Play Store across 4 surfaces.

This tutorial walks you through sending a synchronous request to each Bright Data Google Scraper API endpoint. By the end, you'll have working examples for Maps, Reviews, Shopping, SERP, AI Mode, Flights and Hotels.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an active API key
* Completed the [Quickstart](/datasets/scrapers/google/quickstart)

## Request structure

Every synchronous request follows the same pattern:

```http theme={null}
POST https://api.brightdata.com/datasets/v3/scrape?dataset_id={DATASET_ID}&format=json
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

[{"url": "https://www.google.com/..."}]
```

The only things that change between endpoints are the `dataset_id`, the optional discovery query parameters and the input shape.

<Note>
  Synchronous requests support up to 20 inputs and have a 1-minute timeout. If the request takes longer, the API automatically returns a `snapshot_id` instead. See [async requests](/datasets/scrapers/google/async-requests).
</Note>

## Google Maps, Collect by URL

Scrape a specific Google Maps place by its URL.

**Dataset ID:** `gd_m8ebnr0q2qlklc02fz`

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.google.com/maps/place/Empire+State+Building"}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={"dataset_id": "gd_m8ebnr0q2qlklc02fz", "format": "json"},
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"url": "https://www.google.com/maps/place/Empire+State+Building"}],
  )

  print(response.json())
  ```

  ```javascript Node.js theme={null}
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { url: "https://www.google.com/maps/place/Empire+State+Building" }
      ]),
    }
  );

  const data = await response.json();
  console.log(data);
  ```
</CodeGroup>

[Full schema](/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url)

## Google Maps, Discover by CID

Find a Google Maps place using its Customer ID (CID) value.

**Dataset ID:** `gd_m8ebnr0q2qlklc02fz`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&type=discover_new&discover_by=cid" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"CID": "14408248692727049506"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-maps-discover-by-cid)

## Google Maps, Discover by place\_id

Find a place using its Google Maps place ID.

**Dataset ID:** `gd_m8ebnr0q2qlklc02fz`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&type=discover_new&discover_by=place_id" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"place_id": "ChIJS5WVcqWh9YgRHU08rJqLNsQ"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-maps-discover-by-place-id)

## Google Maps, Discover by location

Find places near a geographic point using latitude, longitude, zoom level and a search keyword.

**Dataset ID:** `gd_m8ebnr0q2qlklc02fz`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m8ebnr0q2qlklc02fz&format=json&type=discover_new&discover_by=location" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"country": "US", "lat": 40.7484, "long": -73.9857, "zoom_level": 14, "keyword": "coffee shop"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-maps-discover-by-location)

## Google Maps Reviews, Collect by URL

Scrape reviews for a Google Maps place, optionally limiting to reviews posted within the last N days.

**Dataset ID:** `gd_luzfs1dn2oa0teb81`

<CodeGroup>
  ```bash cURL theme={null}
  curl -X POST \
    "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_luzfs1dn2oa0teb81&format=json" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '[{"url": "https://www.google.com/maps/place/Empire+State+Building", "days_limit": 30}]'
  ```

  ```python Python theme={null}
  import requests

  response = requests.post(
      "https://api.brightdata.com/datasets/v3/scrape",
      params={"dataset_id": "gd_luzfs1dn2oa0teb81", "format": "json"},
      headers={
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
      },
      json=[{"url": "https://www.google.com/maps/place/Empire+State+Building", "days_limit": 30}],
  )

  print(response.json())
  ```
</CodeGroup>

[Full schema](/api-reference/scrapers/search-engines-apis/google-maps-reviews-collect-by-url)

## Google Shopping, Collect by URL

Scrape a Google Shopping product page by its URL, with optional country targeting.

**Dataset ID:** `gd_ltppk50q18kdw67omz`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_ltppk50q18kdw67omz&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.google.com/shopping/product/12345", "country": "US"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-shopping-collect-by-url)

## Google Shopping, Discover by keyword

Find Google Shopping products matching a search term, with optional country targeting.

**Dataset ID:** `gd_ltppk50q18kdw67omz`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_ltppk50q18kdw67omz&format=json&type=discover_new&discover_by=keyword" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"keyword": "wireless headphones", "country": "US"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-shopping-discover-by-keyword)

## Google Shopping Products Search US, Collect by URL

US-focused Google Shopping search result scraper.

**Dataset ID:** `gd_m31f2k0d2m1bah4f3b`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_m31f2k0d2m1bah4f3b&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.google.com/search?tbm=shop&q=wireless+headphones"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-shopping-products-search-us-collect-by-url)

## Google SERP 100 Results, Collect by URL

Scrape up to 100 organic results from a Google Search URL with fine-grained targeting.

**Dataset ID:** `gd_mfz5x93lmsjjjylob`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mfz5x93lmsjjjylob&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{
    "url": "https://www.google.com/search?q=best+coffee+nyc",
    "keyword": "best coffee nyc",
    "tbm": "",
    "language": "en",
    "uule": "",
    "brd_mobile": "",
    "tbs": "",
    "nfpr": "",
    "index": ""
  }]'
```

[Full schema](/scraping-automation/serp-api/get-top-100-google-results)

## Google AI Mode Search, Collect by URL

Scrape answers and citations from Google's AI Mode Search.

**Dataset ID:** `gd_mcswdt6z2elth3zqr2`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mcswdt6z2elth3zqr2&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{
    "url": "https://www.google.com/search?udm=50&q=how+to+train+for+a+marathon",
    "prompt": "how to train for a marathon",
    "country": "US"
  }]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-ai-mode-search-collect-by-url)

## Google Flights, Collect by URL

Scrape flight options, pricing and itineraries from a Google Flights URL.

**Dataset ID:** `gd_mhng7wen1rw0a3gvpf`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mhng7wen1rw0a3gvpf&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.google.com/travel/flights?tfs=..."}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-flights-collect-by-url)

## Google Flights, Discover by input filters

Find flights by origin, destination, dates and passenger counts.

**Dataset ID:** `gd_mhng7wen1rw0a3gvpf`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mhng7wen1rw0a3gvpf&format=json&type=discover_new&discover_by=input_filters" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{
    "origin": "JFK",
    "destination": "LAX",
    "departure": "2026-06-15",
    "return": "2026-06-22",
    "trip_type": "round_trip",
    "adults": 1,
    "children": 0,
    "infants_in_seat": 0,
    "infants_on_lap": 0,
    "cabin": "economy"
  }]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-flights-discover-by-input-filters)

## Google Hotels, Collect by URL

Scrape a Google Hotels listing by its URL, with optional country targeting.

**Dataset ID:** `gd_mg3gjfmg12tc2n5d4d`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mg3gjfmg12tc2n5d4d&format=json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.google.com/travel/hotels/entity/...", "country": "US"}]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-hotel-collect-by-url)

## Google Hotels, Discover by filter URL

Discover hotels from a filtered Google Hotels URL.

**Dataset ID:** `gd_mg3gjfmg12tc2n5d4d`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mg3gjfmg12tc2n5d4d&format=json&type=discover_new&discover_by=filter_url" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{
    "url": "https://www.google.com/travel/hotels/New+York?...",
    "country": "US",
    "currency": "USD"
  }]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-filter-url)

## Google Hotels, Discover by search

Discover hotels by destination, dates and guest count.

**Dataset ID:** `gd_mg3gjfmg12tc2n5d4d`

```bash cURL theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/scrape?dataset_id=gd_mg3gjfmg12tc2n5d4d&format=json&type=discover_new&discover_by=search" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{
    "search_term": "New York",
    "check_in_date": "2026-06-15",
    "check_out_date": "2026-06-18",
    "guest_number": 2,
    "country": "US",
    "currency": "USD"
  }]'
```

[Full schema](/api-reference/scrapers/search-engines-apis/google-hotel-discover-by-search)

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/google/async-requests">
    Scrape thousands of records or run discovery jobs in a single async request.
  </Card>

  <Card title="API reference" icon="code" href="/api-reference/scrapers/search-engines-apis/google-maps-collect-by-url">
    Full endpoint specs, parameters and response schemas.
  </Card>
</CardGroup>
