# Video search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/videos](https://docs.brightdata.com/api-reference/serp/google-search/videos)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Video Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&tbm=vid
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define search type. For Video search, set `tbm` value to `vid`.

  ```http theme={null}
  https://www.google.com/search?q=pizza&tbm=vid
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&tbm=vid",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&tbm=vid"
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
        url: 'https://www.google.com/search?q=pizza&tbm=vid',
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
      'url': 'https://www.google.com/search?q=pizza&tbm=vid',
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
      "results_cnt": 275000000,
      "search_time": 0.2,
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "videos",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:37:05.282Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&tbm=vid&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "All",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ0pQJegQIChAB"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQtKgLegQIDBAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ0pQJegQIDxAB"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQs6gLegQICxAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQs6gLegQIJhAB"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&q=pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQs6gLegQIJxAB"
      },
      {
        "title": "Flights",
        "href": "https://www.google.com/travel/flights?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWJgscQ2OVXNkKTqqlx9HCssMrDWQeoEQBO4dwrtGUJY4Oy-Z14dRBjPQpDok7I-4oduRsCNHRrO_G3ovy1C5_HZK3cFUgyvFUoxX8cqnfGbb7mjGvQ&ved=1t:200715&ictx=111"
      }
    ],
    "organic": [
      {
        "link": "https://www.youtube.com/watch?v=h3qO7Jii3BE",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "How To Make Frozen Pizza Bases Ready Anytime at Home",
        "description": "SUBSCRIBE https://www.youtube.com/user/maestrovitoiacopelli MY MASTER CLASS PIZZA: https://www.master-class.pizza/ Check out ,my new brand ...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "10:42",
        "duration_sec": 642,
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.youtube.com/watch?v=Bz6tlSbN_GA",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Recreating The Takeaway Pizza Of My Childhood",
        "description": "Do you think pizzas have shrunk? The takeaway pizza of my childhood was 100% better than it is now. But we have no proof!",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "13:55",
        "duration_sec": 835,
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://www.youtube.com/shorts/cpW38_oZG3Q",
        "source": "www.youtube.com › shorts",
        "display_link": "www.youtube.com › shorts",
        "title": "Taco Bell Mexican Pizza Hack",
        "description": "Level up your Taco Tuesdays with this Taco Bell Mexican Pizza! The trick here is to use this simple tortilla hack: fold the tortilla halves ...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "0:41",
        "duration_sec": 41,
        "rank": 3,
        "global_rank": 3
      },
      {
        "link": "https://www.youtube.com/watch?v=dsQGMhsvIYY",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "The Secret To Authentic Neapolitan Pizza",
        "description": "Melt-in-your mouth pizza with fresh, flavorful toppings: this is Neapolitan pizza like an Italian chef would make it. COOK the full recipe ...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "12:56",
        "duration_sec": 776,
        "rank": 4,
        "global_rank": 4
      },
      {
        "link": "https://www.youtube.com/watch?v=pT7WRxzK_Og",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Family Pizza Night at Its Most Crispy & Cheesy",
        "description": "I made this twice in the last 3 weeks. I have the Lodge 10.25\" cast iron from Amazon that I'll put on a baking steel for 18 minutes. Take the ...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "11:51",
        "duration_sec": 711,
        "rank": 5,
        "global_rank": 5
      },
      {
        "link": "https://www.youtube.com/watch?v=m2Uezalybwg",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Puff Pastry Pizza Poppers | Crispy One-Bite Party Pizza | Food ...",
        "description": "These easy-to-make, bite-sized puff pastry pizza poppers are the best way (probably the only way?) to enjoy a proper puff pastry pizza.",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "8:03",
        "duration_sec": 483,
        "rank": 6,
        "global_rank": 6
      },
      {
        "link": "https://www.youtube.com/watch?v=7iWWdSsTI0I",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Barstool Pizza Review - Flour + Water Pizzeria (San Francisco ...",
        "description": "Dave tries a pizza place with the rare exception of him like the Neapolitan more than the cheese. Download The One Bite App to see more and ...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "4:07",
        "duration_sec": 247,
        "rank": 7,
        "global_rank": 7
      },
      {
        "link": "https://www.youtube.com/watch?v=_5sYXU4QZEU",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Barstool Pizza Review - Hi Hat (San Francisco, CA) Bonus ...",
        "description": "Dave tries the highly recommended Hi Hat, and runs into an accidental chocolate chip cookie review that blows his mind.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKpcn5tEt_rbLcahdOAKkvcZFqHlaiZ1BCA5GytAUSt09nwmQpabnKQ&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKpcn5tEt_rbLcahdOAKkvcZFqHlaiZ1BCA5GytAUSt09nwmQpabnKQ&s",
        "duration": "6:58",
        "duration_sec": 418,
        "rank": 8,
        "global_rank": 8
      },
      {
        "link": "https://www.youtube.com/watch?v=wZRdDG2K_mg",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "School Cafeteria Pizza For Grown-Ups",
        "description": "Thank you Helix Sleep for sponsoring! Visit https://helixsleep.com/emmymade to take advantage of their New Year Final Hours Sale and get 20% ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5ownYLe3x_j74iBFfxZA2PgliRpMe2l3zyGhZhTkWGN-HEKmPjZRTw&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5ownYLe3x_j74iBFfxZA2PgliRpMe2l3zyGhZhTkWGN-HEKmPjZRTw&s",
        "duration": "19:18",
        "duration_sec": 1158,
        "rank": 9,
        "global_rank": 9
      },
      {
        "link": "https://www.youtube.com/watch?v=zS18jl621yk",
        "source": "www.youtube.com › watch",
        "display_link": "www.youtube.com › watch",
        "title": "Tracy Morgan, Daniel Radcliffe and Erika Alexander: The ...",
        "description": "Welcome back to The Pizza Interview, a series from The New York Times Cooking where the Q&A has a catch: Our guests have to make pizza while ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvH9JlfVXjhw-Wvd3Lh346VtdK1Az8xHEP9gcKRU8owmDuzplX243PA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvH9JlfVXjhw-Wvd3Lh346VtdK1Az8xHEP9gcKRU8owmDuzplX243PA&s",
        "duration": "12:41",
        "duration_sec": 761,
        "rank": 10,
        "global_rank": 10
      }
    ],
    "pagination": {
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&ei=sLSeaeyoGZOEp84PpOPgiQk&start=10&sa=N"
    },
    "related": [
      {
        "text": "youtube pizza",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=Youtube+Pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgdEAE",
        "rank": 1,
        "global_rank": 11
      },
      {
        "text": "pizza dough youtube",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=Pizza+dough+youtube&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgeEAE",
        "rank": 2,
        "global_rank": 12
      },
      {
        "text": "nick's kitchen pizza",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=Nick%27s+Kitchen+pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAggEAE",
        "rank": 3,
        "global_rank": 13
      },
      {
        "text": "how you make pizza",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=How+you+make+pizza&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAghEAE",
        "rank": 4,
        "global_rank": 14
      },
      {
        "text": "new york pizza youtube",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=New+York+pizza+youtube&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgjEAE",
        "rank": 5,
        "global_rank": 15
      },
      {
        "text": "neapolitan pizza dough recipe",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=Neapolitan+pizza+dough+recipe&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgiEAE",
        "rank": 6,
        "global_rank": 16
      },
      {
        "text": "nick's kitchen videos",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=Nick%27s+Kitchen+videos&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgfEAE",
        "rank": 7,
        "global_rank": 17
      },
      {
        "text": "more nick youtube",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&q=More+nick+youtube&sa=X&ved=2ahUKEwjswOPEnvSSAxUTwskDHaQxOJEQ1QJ6BAgcEAE",
        "rank": 8,
        "global_rank": 18
      }
    ]
  }
  ```
</ResponseExample>
