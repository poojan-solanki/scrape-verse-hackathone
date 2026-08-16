# News search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/news](https://docs.brightdata.com/api-reference/serp/google-search/news)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search News Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&tbm=nws
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define search type. For News search, set `tbm` value to `nws`.

  ```http theme={null}
  https://www.google.com/search?q=pizza&tbm=nws
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&tbm=nws",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&tbm=nws"
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
        url: 'https://www.google.com/search?q=pizza&tbm=nws',
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
      'url': 'https://www.google.com/search?q=pizza&tbm=nws',
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
      "results_cnt": 1110000,
      "search_time": 0.25,
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "news",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:21:53.400Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&tbm=nws&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "All",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&source=lnms&sa=X&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ0pQJegQIAhAE"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&source=lnms&sa=X&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ0pQJegQIAhAG"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&source=lnms&sa=X&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ0pQJegQIAhAI"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&source=lnms&ved=1t:200715&ictx=111"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?q=pizza&gl=US&hl=en&um=1&ie=UTF-8&ved=1t:200715&ictx=111"
      }
    ],
    "news": [
      {
        "title": "Hegseth says he’ll order random pizzas to throw off monitoring app",
        "link": "https://thehill.com/policy/defense/5750716-pentagon-pizza-report-hegseth/",
        "source": "The Hill",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "title": "Pentagon Pizza Index ties pizza spikes to military action",
        "link": "https://www.jpost.com/international/article-887543",
        "source": "The Jerusalem Post",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "date": "2 days ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "title": "Domino's Pizza® Announces Fourth Quarter and Fiscal 2025 Financial Results",
        "link": "https://ir.dominos.com/news-releases/news-release-details/dominos-pizzar-announces-fourth-quarter-and-fiscal-2025",
        "source": "Domino's Pizza",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "Global retail sales growth (excluding foreign currency impact) of 4.9% for the fourth quarter; 5.4% growth for fiscal 2025.",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "title": "How Domino's is trying to double its business during a rough patch for big pizza rivals",
        "link": "https://www.cnbc.com/2026/02/23/dominos-ceo-i-think-we-can-double-this-business.html",
        "source": "CNBC",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "On the heels of a better-than-expected quarter, Domino's Pizza shares rose on Monday. CEO Russell Weiner told CNBC in an interview Monday...",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "title": "These 13 pizzerias are Pittsburgh’s best, and reflect Western Pa.’s position as a rising pizza powerhouse",
        "link": "https://www.post-gazette.com/life/dining/2026/02/24/best-pizza-pittsburgh-1/stories/202602160047",
        "source": "Pittsburgh Post-Gazette",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "Pittsburgh is in the midst of its most consequential pizza boom since the mass market expansion of the now all-American staple in the...",
        "date": "23 hours ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "title": "Domino's Responds After US Family Orders Pizza At Airport Terminal To Save Money",
        "link": "https://www.ndtv.com/offbeat/dominos-responds-after-us-family-orders-pizza-at-airport-terminal-to-save-money-11132755",
        "source": "NDTV",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "The video of the family receiving their Domino's order at the airport sparked debate on bringing food to the flight.",
        "date": "6 hours ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "title": "Savvy Sliders, Fat Boy’s Pizza co-branded restaurant set to open this week",
        "link": "https://www.21alivenews.com/2026/02/24/savvy-sliders-fat-boys-pizza-co-branded-restaurant-set-open-this-week/",
        "source": "WPTA | 21Alive | Fort Wayne, IN",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "A new co-branded restaurant, featuring Savvy Sliders and Fat Boy's Pizza, is coming to Fort Wayne soon.",
        "date": "9 hours ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "title": "Tasting Table names top 15 pizzerias in Connecticut. Seven of them are in New Haven.",
        "link": "https://www.ctinsider.com/food/article/tasting-table-connecticut-pizza-new-haven-21849051.php",
        "source": "CT Insider",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "Frank Pepe's, Zuppardi's Apizza, Sally's Apizza, Modern Apizza and The Little Rendezvous all made Tasting Table's list of the top 15 pizza...",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 9,
        "global_rank": 9
      },
      {
        "title": "Lakewood pizza shop closes for good",
        "link": "https://fox8.com/news/lakewood-pizza-shop-closes-for-good/",
        "source": "FOX 8 News",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "LAKEWOOD, Ohio (WJW) – Another Lakewood restaurant has closed shop. Roman Fountain Pizza announced they had served up customers' last slice...",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 10,
        "global_rank": 10
      },
      {
        "title": "Big Oven Pizza restaurant in Kearny Mesa shot up three times in one week",
        "link": "https://www.10news.com/news/local-news/big-oven-pizza-shot-up-three-times-in-one-week",
        "source": "10News.com",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "description": "SAN DIEGO (KGTV) — Two doors at the front of Big Oven Pizza are boarded up and conspicuous duct tape patches are stuck over bullet holes in...",
        "date": "1 day ago",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 11,
        "global_rank": 11
      }
    ],
    "pagination": {
      "pages": [
        {
          "page": 2,
          "start": 10,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=10&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAE"
        },
        {
          "page": 3,
          "start": 20,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=20&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAG"
        },
        {
          "page": 4,
          "start": 30,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=30&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAI"
        },
        {
          "page": 5,
          "start": 40,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=40&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAK"
        },
        {
          "page": 6,
          "start": 50,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=50&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAM"
        },
        {
          "page": 7,
          "start": 60,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=60&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAO"
        },
        {
          "page": 8,
          "start": 70,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=70&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAQ"
        },
        {
          "page": 9,
          "start": 80,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=80&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAS"
        },
        {
          "page": 10,
          "start": 90,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=90&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAU"
        }
      ],
      "current_page": 1,
      "next_page": 2,
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&tbm=nws&ei=ELGeab2oNPqq1sQPupiliQs&start=10&sa=N&ved=2ahUKEwi98L2Km_SSAxV6lZUCHTpMKbEQ8tMDegQIBRAE"
    }
  }
  ```
</ResponseExample>
