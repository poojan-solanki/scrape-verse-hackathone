# Hotel

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/hotel](https://docs.brightdata.com/api-reference/serp/google-search/hotel)
> **Category**: `scraping-automation`

---

Reference for the Bright Data Google Search Hotel parameter. Refines queries and returns matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&hotel_occupancy=4
```

<Tip>
  See `brd_occupancy` parameter of [Hotels](/api-reference/serp/google-hotels/occupancy) which provides more flexibility.
</Tip>

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Number of guests to book a room for (maximum 6 guests)

  > **Examples:**\
  > `brd_occupancy=1` - look for a room for 1 person \
  > `brd_occupancy=2` - for 2 persons (`default`)  \
  > `brd_occupancy=3` - for 3 persons, etc.

  ```txt wrap theme={null}
  https://www.google.com/search?q=pizza&hotel_occupancy=4
  ```
</ParamField>

<ParamField type="string">
  Check-in date and check-out date, separated by comma.

  > **Format**: `YYYY-MM-DD,YYYY-MM-DD`\
  > **Example**: `2026-04-03,2026-04-10`

  ```txt wrap theme={null}
  https://www.google.com/search?q=pizza&hotel_dates=2023-05-01%2C2023-05-03
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&hotel_occupancy=4",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&hotel_occupancy=4"
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
        url: 'https://www.google.com/search?q=pizza&hotel_occupancy=4',
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
      'url': 'https://www.google.com/search?q=pizza&hotel_occupancy=4',
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
  ```json 200 highlight={13} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "language": "en",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-03-06T18:52:27.595Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&hotel_occupancy=4",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&aep=1&ntc=1&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q2J8OegQIDhAE"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4QtKgLegQIFBAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4QtKgLegQIEhAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Qs6gLegQIERAB"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Qs6gLegUI0gEQAQ"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q0pQJegUI0wEQAQ"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&q=pizza&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Qs6gLegUI2QEQAQ"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=pizza&udm=36&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_nEWDW6jSORACXpMnd172rhLzUI8cHh7a3WdrUa4STZi6DJP1PQVlodXI5fi6VycfM2fw28lhfWz323yxTcZ-fbjC5Yh0xzt6OfmbOYOjs4XIa7mEA&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q0pQJegUI1wEQAQ"
      },
      {
        "title": "Pizza",
        "href": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Restaurant&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YkRxG3oIOwBP9pqV8A9knLvLZuH8Ewms8PAcf7ea3t4NPsly-1JiYt9S6VsSRnLf-sxULmbNLebMKQgkhwHc2FSfFXQ&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Qkc0JKAB6BAgVEAE&ictx=0"
      }
    ],
    "organic": [
      {
        "link": "https://www.pizzahut.com/",
        "source": "Pizza Hut",
        "display_link": "https://www.pizzahut.com",
        "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
        "description": "$10 any pizza. Price includes Original Pan, Hand Tossed, Thin 'N Crispy. $10 ANY Large Pizza​. Up to 5 ...Read more",
        "snippet_highlighted_words": [
          "10 any pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from www.pizzahut.com",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 4
      },
      {
        "link": "https://en.wikipedia.org/wiki/Pizza",
        "source": "Wikipedia",
        "display_link": "https://en.wikipedia.org › wiki › Pizza",
        "title": "Pizza",
        "description": "Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a ...Read more",
        "snippet_highlighted_words": [
          "an Italian dish typically consisting of a flat base of leavened wheat-based dough"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from en.wikipedia.org",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 5
      },
      {
        "link": "https://www.dominos.com/",
        "source": "Domino's Pizza",
        "display_link": "https://www.dominos.com",
        "title": "Domino's: Pizza Delivery & Carryout, Pasta, Wings & More",
        "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu ... Any pizza. Any toppings. $9.99 each. Choose your crust ...Read more",
        "snippet_highlighted_words": [
          "Order pizza, pasta, sandwiches & more online for carryout or delivery"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "rank": 3,
        "global_rank": 6
      },
      {
        "link": "https://www.papajohns.com/",
        "source": "Papa John's",
        "display_link": "https://www.papajohns.com",
        "title": "Papa Johns Pizza Delivery & Carryout - Best Deals on Pizza ...",
        "description": "Enjoy the ease of ordering delicious pizza for delivery or carryout from a Papa Johns near you. Start tracking the speed of your delivery and earn rewards ...",
        "snippet_highlighted_words": [
          "Enjoy the ease of ordering delicious pizza for delivery or carryout"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 4,
        "global_rank": 7
      },
      {
        "link": "https://www.hellopizza.com/",
        "source": "Hello Pizza",
        "display_link": "https://www.hellopizza.com",
        "title": "Home | Hello Pizza in Edina, MN",
        "description": "Hello Pizza in Minneapolis offers dine in, takeaway and delivery.",
        "snippet_highlighted_words": [
          "Hello Pizza in Minneapolis"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K0fe4r_e0X_q3ijPJKuQWN-LaKhDS1ZS3q8z-c-YBKR5jV6GYSLB&usqp=CAE&s",
        "image_alt": "pizza from www.hellopizza.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K0fe4r_e0X_q3ijPJKuQWN-LaKhDS1ZS3q8z-c-YBKR5jV6GYSLB&usqp=CAE&s",
        "rank": 5,
        "global_rank": 8
      },
      {
        "link": "https://www.facebook.com/stoolpresidente/videos/i-found-great-chicago-style-pizza-in-atlanta-with-an-incredible-story-too/925930907057728/",
        "source": "Facebook · David Portnoy - El Presidente",
        "display_link": "350+ reactions · 1 hour ago",
        "title": "I Found GREAT Chicago Style Pizza In Atlanta With An ...",
        "description": "Alberta Lozi's Pizzeria. Chicago style. I already forgot. It's named after his mother. It's a tribute to my mom who passed away from cancer so ...",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c2hDx_iSKy6EZsP9xZs8QiiWeJTFvLCieUWpTGrisX2C_ftYCYejdA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c2hDx_iSKy6EZsP9xZs8QiiWeJTFvLCieUWpTGrisX2C_ftYCYejdA&s",
        "duration": "1:02",
        "duration_sec": 62,
        "rank": 6,
        "global_rank": 9
      },
      {
        "link": "https://www.nytimes.com/2026/03/03/dining/pizza-hut.html",
        "source": "The New York Times",
        "display_link": "https://www.nytimes.com › 2026/03/03 › dining › pizz...",
        "title": "Pizza Hut Take Fans on a Trip to the Past",
        "description": "The deep-dish pan pizza dates back to the beginning of Pizza Hut. The deep-dish pan pizza has been a Pizza Hut signature from the beginning.Read more",
        "snippet_highlighted_words": [
          "deep-dish pan pizza"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "3 days ago",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 7,
        "global_rank": 10
      },
      {
        "link": "https://littlecaesars.com/",
        "source": "Little Caesars",
        "display_link": "https://littlecaesars.com",
        "title": "Little Caesars® Pizza | Best Value Delivery & Carryout",
        "description": "Order HOT-N-READY® pizzas, Crazy Bread®, and more from Little Caesars® online for delivery or carryout.",
        "snippet_highlighted_words": [
          "Order HOT-N-READY® pizzas"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 8,
        "global_rank": 11
      },
      {
        "link": "https://www.reddit.com/r/AskLosAngeles/comments/1rm1wui/who_has_the_best_pizza_in_la/",
        "source": "Reddit · r/AskLosAngeles",
        "display_link": "350+ comments · 16 hours ago",
        "title": "Who has the best pizza in LA? : r/AskLosAngeles",
        "description": "Desano is good, but there is better Neapolitan pizza around (Pizzeria Sei is probably the gold standard in LA). Quarter Sheets is fantastic ...Read more",
        "snippet_highlighted_words": [
          "pizza",
          "Pizzeria"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 9,
        "global_rank": 12
      }
    ],
    "perspectives": [
      {
        "title": "Who has the best pizza in LA? Popular comment · Pizzeria Sei for Neapolitan. Then Bianco, Pizzana.",
        "author": "r/AskLosAngeles",
        "source": "Reddit",
        "date": "350+ comments · 16 hours ago",
        "link": "https://www.reddit.com/r/AskLosAngeles/comments/1rm1wui/who_has_the_best_pizza_in_la/"
      },
      {
        "title": "I Ate In America's Pizza Capital To Find The Best Pizza",
        "author": "sir yacht · YouTube",
        "source": "TikTok star & Food Network contestant",
        "date": "275.7K+ views · 4 days ago",
        "link": "https://www.youtube.com/watch?v=gCalAS4SlaM",
        "image": "https://img.youtube.com/vi/gCalAS4SlaM/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/gCalAS4SlaM/hqdefault.jpg"
      },
      {
        "title": "I Found GREAT Chicago Style Pizza In Atlanta With An Incredible Story Too",
        "author": "stoolpresidente · Facebook",
        "source": "American businessman",
        "date": "350+ reactions · 2 hours ago",
        "link": "https://www.facebook.com/stoolpresidente/videos/i-found-great-chicago-style-pizza-in-atlanta-with-an-incredible-story-too/925930907057728/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVOtYpEd8y0JpkiNMhy51ybHS8Vt_dBgXfZOghf-HYebs5Io7KC1EQIa8CQ&usqp=CAI&s=10",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVOtYpEd8y0JpkiNMhy51ybHS8Vt_dBgXfZOghf-HYebs5Io7KC1EQIa8CQ&usqp=CAI&s=10"
      },
      {
        "title": "Barstool Pizza Review - Glide Pizza (Decatur, GA)",
        "author": "One Bite Pizza Reviews · YouTube",
        "source": "Pizza reviews & rankings",
        "date": "96.8K+ views · 3 days ago",
        "link": "https://www.youtube.com/watch?v=5IVjXnV15cE",
        "image": "https://img.youtube.com/vi/5IVjXnV15cE/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/5IVjXnV15cE/hqdefault.jpg"
      },
      {
        "title": "Where can I find a pizza like this?",
        "author": "r/SanJose",
        "source": "Reddit",
        "date": "60+ comments · 19 hours ago",
        "link": "https://www.reddit.com/r/SanJose/comments/1rlxx81/where_can_i_find_a_pizza_like_this/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgiaOW0FYTVRHJqNFtVAhux6nSpnvNr6w1epX8AvZykRiZR5ZGLpje07b_g&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgiaOW0FYTVRHJqNFtVAhux6nSpnvNr6w1epX8AvZykRiZR5ZGLpje07b_g&usqp=CAI&s"
      },
      {
        "title": "Easy Homemade Pizza That Beats Takeout",
        "author": "In The Kitchen With Gina Young · YouTube",
        "source": "Cooking channel",
        "date": "490+ views · 20 hours ago",
        "link": "https://www.youtube.com/watch?v=CVFKdARKonI",
        "image": "https://img.youtube.com/vi/CVFKdARKonI/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/CVFKdARKonI/hqdefault.jpg"
      },
      {
        "title": "Best pizza in Port St Lucie Fla?",
        "author": "Pizzaholics · Facebook",
        "source": "Pizza enthusiast",
        "date": "29 minutes ago",
        "link": "https://www.facebook.com/groups/742034912983989/posts/2439433803244083/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPzkwKJX8rct5LhEtAN6p-ypb5UjDiHn0aZ8e9S6nS8tPmROY_1E2gFxXeus&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPzkwKJX8rct5LhEtAN6p-ypb5UjDiHn0aZ8e9S6nS8tPmROY_1E2gFxXeus&usqp=CAI&s"
      },
      {
        "title": "Friday pizza night",
        "author": "r/80s",
        "source": "Reddit",
        "date": "300+ comments · 7 hours ago",
        "link": "https://www.reddit.com/r/80s/comments/1rmbv8y/friday_pizza_night/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjE6TPBJKWHgNAjhsCCUJcO1rt2p_P-UcmzHUdys7bLeSQdacHm3Zs-7FIQ&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjE6TPBJKWHgNAjhsCCUJcO1rt2p_P-UcmzHUdys7bLeSQdacHm3Zs-7FIQ&usqp=CAI&s"
      },
      {
        "title": "Only the best at Krispy Pizza! 🍕💯 #KRISPYPIZZA",
        "author": "krispypizza · Instagram",
        "source": "Brooklyn-based pizza parlor",
        "date": "1.1K+ likes · 3 hours ago",
        "link": "https://www.instagram.com/reel/DVjJxy-Dt4U/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMetfUkGZYejKARlaFBojMWqZxMT-oU92H8yOzKMaTVd2dQdaohonHumBw&usqp=CAI&s=10",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMetfUkGZYejKARlaFBojMWqZxMT-oU92H8yOzKMaTVd2dQdaohonHumBw&usqp=CAI&s=10"
      },
      {
        "title": "Homemade Pepperoni Pizza Rolls That Are Ridiculously Easy",
        "author": "allthingsbbq · YouTube",
        "source": "BBQ store",
        "date": "4.8K+ views · 1 day ago",
        "link": "https://www.youtube.com/watch?v=u5cOPjwKobM",
        "image": "https://img.youtube.com/vi/u5cOPjwKobM/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/u5cOPjwKobM/hqdefault.jpg"
      },
      {
        "title": "Top Pizza in the Bay Area",
        "author": "Cesar Hernandez, Soleil Ho",
        "source": "San Francisco Chronicle",
        "date": "1 month ago",
        "link": "https://www.sfchronicle.com/projects/2023/best-pizza-sf-bay-area/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGyTJpaRNE8ruXgkLdHkPFLVu5T7ykcJezvyYa07SUmrk7T0XaSntO19GBw&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGyTJpaRNE8ruXgkLdHkPFLVu5T7ykcJezvyYa07SUmrk7T0XaSntO19GBw&usqp=CAI&s"
      },
      {
        "title": "Best Pizza in Sonoma County: 16 Editor-Approved Spots for Tasty Pies",
        "author": "Heather Irwin · Sonoma Magazine",
        "source": "Sonoma County dining writer",
        "date": "1 month ago",
        "link": "https://www.sonomamag.com/best-pizza-in-sonoma-county-favorite-restaurants-for-tasty-pies/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzKYqmgbflEzazf8g_Fnp6r4J6ZIO3t95YB0TFq11OXOKFQ8kMf2TeeEzww&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzKYqmgbflEzazf8g_Fnp6r4J6ZIO3t95YB0TFq11OXOKFQ8kMf2TeeEzww&usqp=CAI&s"
      }
    ],
    "knowledge": {
      "name": "Pizza",
      "summary": "Dish",
      "subtitle": "Dish",
      "nutrition_facts": {
        "product": "Pizza, 14\" regular crust",
        "source": "USDA",
        "source_link": "https://fdc.nal.usda.gov/food-details/173292/nutrients",
        "calories": "285 Calories",
        "portion": "1 slice (107 g)"
      }
    },
    "overview": {
      "title": "Pizza",
      "kgmid": "/m/0663v"
    },
    "snack_pack_map": {
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA...",
      "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA...",
      "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&udm=1&lsack=aSKraZ7iJK3Xxc8Pqo2U8AI&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4QtgN6BAgaEAM"
    },
    "snack_pack": [
      {
        "cid": "17310745698520163861",
        "name": "Vito Lucco Pizza Co.",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "reviews_cnt": 5,
        "type": "Pizza Takeout",
        "work_status": "Takeout·Takeout·No-contact deliveryNo-contact delivery",
        "address": "Fridley, MN",
        "rank": 1,
        "global_rank": 1
      },
      {
        "cid": "6845281105756624082",
        "name": "Market Street Pizza",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "reviews_cnt": 4,
        "type": "Pizza",
        "work_status": "Opens soon",
        "work_status_details": "11 AM",
        "address": "Spokane, WA",
        "rank": 2,
        "global_rank": 2
      },
      {
        "cid": "12478441968863339846",
        "name": "Best Pizza & Brew",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "reviews_cnt": 4,
        "type": "Pizza",
        "work_status": "Opens soon",
        "work_status_details": "11 AM",
        "address": "Oceanside, CA",
        "rank": 3,
        "global_rank": 3
      }
    ],
    "pagination": {
      "pages": [
        {
          "page": 2,
          "start": 10,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=10&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAE"
        },
        {
          "page": 3,
          "start": 20,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=20&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAG"
        },
        {
          "page": 4,
          "start": 30,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=30&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAI"
        },
        {
          "page": 5,
          "start": 40,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=40&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAK"
        },
        {
          "page": 6,
          "start": 50,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=50&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAM"
        },
        {
          "page": 7,
          "start": 60,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=60&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAO"
        },
        {
          "page": 8,
          "start": 70,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=70&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAQ"
        },
        {
          "page": 9,
          "start": 80,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=80&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAS"
        },
        {
          "page": 10,
          "start": 90,
          "link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=90&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAU"
        }
      ],
      "current_page": 1,
      "next_page": 2,
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&ei=aSKraZ7iJK3Xxc8Pqo2U8AI&start=10&sa=N&sstk=Af77f_e5v5TopL795qiozhhU5eJn4iwBi5glMnBqhjrpgSsD85n-Zjv1OCUpsxqxJjRLcAjTe6I5pFI3UdNBkjvPwf4WrFeN_AE87g&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q8tMDegQIChAE"
    },
    "related": [
      {
        "text": "Pizza wiki",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+wiki&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjHARAB",
        "rank": 1,
        "global_rank": 13
      },
      {
        "text": "Pizza Hut near me",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+Hut+near+me&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjNARAB",
        "rank": 2,
        "global_rank": 14
      },
      {
        "text": "Pizza open",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+open&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjPARAB",
        "rank": 3,
        "global_rank": 15
      },
      {
        "text": "Pizza Hut menu",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+Hut+menu&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjIARAB",
        "rank": 4,
        "global_rank": 16
      },
      {
        "text": "Pizza drawing",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+drawing&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjLARAB",
        "rank": 5,
        "global_rank": 17
      },
      {
        "text": "Pizza picture",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+picture&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjJARAB",
        "rank": 6,
        "global_rank": 18
      },
      {
        "text": "Pizza Movie",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+Movie&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjKARAB",
        "rank": 7,
        "global_rank": 19
      },
      {
        "text": "Pizza recipe",
        "link": "https://www.google.com/search?sca_esv=173855d81f8ceba4&hotel_occupancy=4&gl=us&hl=en&q=Pizza+recipe&sa=X&ved=2ahUKEwjeut_u-IuTAxWta_EDHaoGBS4Q1QJ6BQjOARAB",
        "rank": 8,
        "global_rank": 20
      }
    ]
  }
  ```
</ResponseExample>
