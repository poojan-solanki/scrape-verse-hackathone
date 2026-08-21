# Short videos

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/short-videos](https://docs.brightdata.com/api-reference/serp/google-search/short-videos)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Short Videos parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&udm=39
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  For searching short videos, use `udm=39` to get results.

  ```http theme={null}
  https://www.google.com/search?q=pizza&udm=39
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&udm=39",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&udm=39"
  ```

  ```js Node.js highlight={10} theme={null}
  (async () => {
    const response = await fetch('https://api.brightdata.com/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY'
      },
      body: JSON.stringify({
        zone: 'serp_api1',
        url: 'https://www.google.com/search?q=pizza&udm=39',
        format: 'raw'
      })
    });
    
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```python Python highlight={11} theme={null}
  import requests

  # API Configuration
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY',
  }

  payload = {
      'zone': 'serp_api1',
      'url': 'https://www.google.com/search?q=pizza&udm=39',
      'format': 'raw'
  }

  # Make the request
  response = requests.post(
      'https://api.brightdata.com/request', 
      json=payload, 
      headers=headers
  )

  print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json 200 highlight={11} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 142000000,
      "search_time": 0.26,
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "short_videos",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:40:29.129Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&udm=39&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&aep=1&ntc=1&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQ2J8OegQIERAD"
      },
      {
        "title": "All",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQ0pQJegQIFxAB"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQtKgLegQIGxAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQ0pQJegQIGRAB"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQtKgLegQIHRAB"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQs6gLegQIHxAB"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjS7Nmjn_SSAxUyQ_EDHVIbGwEQs6gLegQIHhAB"
      },
      {
        "title": "Flights",
        "href": "https://www.google.com/travel/flights?num=12&sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&ved=1t:200715&ictx=111"
      }
    ],
    "short_videos": [
      {
        "link": "https://www.youtube.com/shorts/kuqbckh8dxo",
        "title": "PIZZA RECIPE WITH BIGA🍕🔥 #pizza #adv",
        "source": "YouTube · Malati di Pizza",
        "duration": "2:26",
        "duration_sec": 146,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.youtube.com/shorts/cpW38_oZG3Q",
        "title": "Taco Bell Mexican Pizza Hack",
        "source": "YouTube · Allrecipes",
        "duration": "0:41",
        "duration_sec": 41,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://www.instagram.com/reel/DVKP3BMDUjt/",
        "title": "Rita🍝 | Let’s make pizza with potatoes and rosemary!",
        "source": "Instagram · Rita🍝",
        "duration": "2:57",
        "duration_sec": 177,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "link": "https://www.facebook.com/chefjackiebakula/videos/i-first-had-chicken-parm-pizza-qualityitalian-in-nyc-it-was-fantastic-i-learned-/851228973898172/",
        "title": "I first had chicken parm pizza @qualityitalian in NYC. It was ...",
        "source": "Facebook · Jackie Bakula",
        "duration": "1:20",
        "duration_sec": 80,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "link": "https://www.youtube.com/shorts/-A7SldGQ6vU",
        "title": "Trader Joe's NY Style Pizza",
        "source": "YouTube · Dough Guy",
        "duration": "1:30",
        "duration_sec": 90,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "link": "https://www.tiktok.com/@williamhansonetiquette/video/7601586210062093590",
        "title": "The Joy of Eating Pizza Without Utensils",
        "source": "TikTok · williamhansonetiquette",
        "duration": "0:14",
        "duration_sec": 14,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "link": "https://www.instagram.com/reel/DVHjUeNkfXT/",
        "title": "Roasted Garlic Butter Pizza Bread",
        "source": "Instagram · Sam Schnur",
        "duration": "0:36",
        "duration_sec": 36,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "link": "https://www.youtube.com/shorts/0y8KHv40K9s",
        "title": "Nothing Beats Nonna's Homemade Pizza!",
        "source": "YouTube · The Spicy Nonna",
        "duration": "2:43",
        "duration_sec": 163,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "link": "https://www.youtube.com/shorts/xTj8l8Vi7rg",
        "title": "Rating and Ranking Thin and Crispy Frozen Pizzas #Pizza ...",
        "source": "YouTube · Diff Family Reviews",
        "duration": "2:28",
        "duration_sec": 148,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 9,
        "global_rank": 9
      },
      {
        "link": "https://www.youtube.com/shorts/F7MK8uqFVF8",
        "title": "NYCS BEST PIZZA",
        "source": "YouTube · CALEB SIMPSON",
        "duration": "2:05",
        "duration_sec": 125,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 10,
        "global_rank": 10
      },
      {
        "link": "https://www.youtube.com/shorts/bndZw1mXa7w",
        "title": "The Best New York Style Pizza at Home",
        "source": "YouTube · Dylan Nobert",
        "duration": "0:45",
        "duration_sec": 45,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 11,
        "global_rank": 11
      },
      {
        "link": "https://www.youtube.com/shorts/CCawQUAJ-6Y",
        "title": "The Best Detroit Pizza is in NYC?!",
        "source": "YouTube · Jeremy Jacobowitz",
        "duration": "1:35",
        "duration_sec": 95,
        "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 12,
        "global_rank": 12
      }
    ],
    "pagination": {
      "next_page_start": 12,
      "next_page_link": "https://www.google.com/search?q=pizza&num=12&sca_esv=206cd4dd954885db&udm=39&gl=US&hl=en&ei=d7WeaZLVHbKGxc8P0rbsCA&start=12&sa=N"
    }
  }
  ```
</ResponseExample>
