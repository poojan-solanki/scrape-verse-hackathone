# Geo-location

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/geo-location](https://docs.brightdata.com/api-reference/serp/google-search/geo-location)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Geo-Location parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Stands for the encoded location you want to use for your search and will be used to change geo-location.

  ```http theme={null}
  https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw
  ```

  <Tip>
    A CSV with all available `uule` values can be [downloaded here](https://developers.google.com/adwords/api/docs/appendix/geotargeting).

    The value of column **Canonical Name** from the CSV can be used as a raw string to the API

    > **Example**: `&uule=New+York,New+York,United+States`
  </Tip>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw"
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
        url: 'https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw',
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
      'url': 'https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw',
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
  ```json 200 highlight={8} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 1200000000,
      "search_time": 0.46,
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:55:57.015Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&aep=1&ntc=1&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ2J8OegQIBxAE"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQtKgLegQIGxAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQtKgLegQIERAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQs6gLegQIDxAB"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ0pQJegUI0QEQAQ"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQs6gLegUI0AEQAQ"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQs6gLegUI3QEQAQ"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&udm=36&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ0pQJegUI0gEQAQ"
      },
      {
        "title": "Pizza",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Restaurant&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YkRxG3oIOwBP9pqV8A9knLvLZuH8Ewms8PAcf7ea3t4NPsly-1JiYt9S6VsSRnLf-sxULmbNLebMKQgkhwHc2FSfFXQ&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQkc0JKAB6BAgQEAE&ictx=0"
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
        "link": "https://www.dominos.com/",
        "source": "Domino's",
        "display_link": "https://www.dominos.com",
        "title": "Domino's: Pizza Delivery & Carryout, Pasta, Wings & More",
        "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu, find locations, track orders. Sign up for Domino's email ...",
        "snippet_highlighted_words": [
          "Order pizza, pasta, sandwiches & more online for carryout or delivery"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from www.dominos.com",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 5
      },
      {
        "link": "https://www.papajohns.com/",
        "source": "Papa John's",
        "display_link": "https://www.papajohns.com",
        "title": "Papa Johns Pizza Delivery & Carryout - Best Deals on Pizza ...",
        "description": "Deals · Pizza · Papadias · Papa Bites · Wings · Sides · Papa Bowls · Desserts · Drinks · Dipping Sauces · Extras. Earn Papa Dough® faster than ever, and redeem ...Read more",
        "snippet_highlighted_words": [
          "Pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 3,
        "global_rank": 10
      },
      {
        "link": "https://www.pizzamyheart.com/",
        "source": "Pizza My Heart",
        "display_link": "https://www.pizzamyheart.com",
        "title": "Pizza My Heart for pizza by the slice or whole pie",
        "description": "Pizza by the slice or whole pie with a focus on natural locally grown ingredients from California farms. Fresh salads, craft beers and a laid-back surf ...",
        "snippet_highlighted_words": [
          "Pizza by the slice or whole pie"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 4,
        "global_rank": 11
      },
      {
        "link": "https://primepizza.com/",
        "source": "Prime Pizza",
        "display_link": "https://primepizza.com",
        "title": "Prime Pizza | Authentic New York–Style Pizza in Los Angeles ...",
        "description": "Discover Prime Pizza — serving the best New York–style pizza in Los Angeles and coming soon to Orange County. Fresh ingredients, housemade dough, ...",
        "snippet_highlighted_words": [
          "serving the best New York–style pizza in Los Angeles"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 5,
        "global_rank": 12
      },
      {
        "link": "https://pagliacci.com/",
        "source": "Pagliacci Pizza",
        "display_link": "https://pagliacci.com",
        "title": "Pagliacci Pizza: Seattle Area Pizza & Delivery | Pagliacci Pizza",
        "description": "Pagliacci Pizza, serving Seattle's best pizza since 1979. Offering pizza by the slice and pizza delivery service to homes and businesses.",
        "snippet_highlighted_words": [
          "Seattle's best pizza since 1979"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 6,
        "global_rank": 13
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
        "rank": 7,
        "global_rank": 14
      },
      {
        "link": "https://www.youtube.com/watch?v=Bz6tlSbN_GA",
        "source": "YouTube · Andy Cooks",
        "display_link": "283.1K+ views · 5 days ago",
        "title": "Recreating The Takeaway Pizza Of My Childhood",
        "description": "Today I'm going to show you how to recreate at least my childhood memories of delicious bad pizza it's easily done at home.",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawToEk5MRMKlzdRutYRvfJGXtRpWQfVqXSJ2z8EdrkapJcXFUS00qnQ&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawToEk5MRMKlzdRutYRvfJGXtRpWQfVqXSJ2z8EdrkapJcXFUS00qnQ&s",
        "duration": "13:55",
        "duration_sec": 835,
        "rank": 8,
        "global_rank": 15
      },
      {
        "link": "https://www.extremepizza.com/",
        "source": "Extreme Pizza",
        "display_link": "https://www.extremepizza.com",
        "title": "Extreme Pizza | Freshly Made Gourmet Pizza | Pizza Delivery",
        "description": "Extreme Pizza is your go-to store for fresh gourmet pizzas that will satisfy your cravings. Explore our menu for our exciting flavors.",
        "snippet_highlighted_words": [
          "fresh gourmet pizzas that will satisfy your cravings"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 9,
        "global_rank": 16
      }
    ],
    "perspectives": [
      {
        "title": "Barstool Pizza Review - Casey's Pizza (San Francisco, CA)",
        "author": "One Bite Pizza Reviews · YouTube",
        "source": "Pizza reviews & rankings",
        "date": "58.9K+ views · 10 hours ago",
        "link": "https://www.youtube.com/watch?v=wj4vtZ0FR1Y",
        "image": "https://img.youtube.com/vi/wj4vtZ0FR1Y/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/wj4vtZ0FR1Y/hqdefault.jpg"
      },
      {
        "title": "Costco: Where to find most perfect slice of cheap cheese pizza. 🍕🙏🤤",
        "author": "r/Costco",
        "source": "Reddit",
        "date": "230+ comments · 7 hours ago",
        "link": "https://www.reddit.com/r/Costco/comments/1rdzzri/costco_where_to_find_most_perfect_slice_of_cheap/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56LIOT4XXriPnI8lkdNLieh_vVTIR2bkveJMrspN70Vc83Hvb7BHycWsG_g&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56LIOT4XXriPnI8lkdNLieh_vVTIR2bkveJMrspN70Vc83Hvb7BHycWsG_g&usqp=CAI&s"
      },
      {
        "title": "Barstool Pizza Review - Casey’s Pizza (San Francisco, CA)",
        "author": "stoolpresidente · Instagram",
        "source": "American businessman",
        "date": "2K+ likes · 8 hours ago",
        "link": "https://www.instagram.com/reel/DVKIeZTlJCR/?hl=en",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9LeRL2aFzRhGOpiS2hlaI-MmNlAgUW_rPSWXklkzgSsmzx7R_pbGqtuCPQ&usqp=CAI&s=10",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9LeRL2aFzRhGOpiS2hlaI-MmNlAgUW_rPSWXklkzgSsmzx7R_pbGqtuCPQ&usqp=CAI&s=10"
      }
    ],
    "knowledge": {
      "name": "Pizza",
      "summary": "Dish",
      "subtitle": "Dish",
      "description": "Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.",
      "description_source": "Wikipedia",
      "description_link": "https://en.wikipedia.org/wiki/Pizza",
      "images": [
        {
          "image": "data:image/webp;base64,UklGRrYOAABXRUJQVlA4IKoOAACQVA...",
          "image_alt": "Image of Pizza Dough Recipe",
          "image_base64": "data:image/webp;base64,UklGRrYOAABXRUJQVlA4IKoOAACQVA..."
        },
        {
          "image": "data:image/webp;base64,UklGRk4KAABXRUJQVlA4IEIKAACQNg...",
          "image_alt": "Image of Salami, Red Onion and Oregano Pizza - Tillamook",
          "image_base64": "data:image/webp;base64,UklGRk4KAABXRUJQVlA4IEIKAACQNg..."
        },
        {
          "image": "data:image/webp;base64,UklGRmgIAABXRUJQVlA4IFwIAACwMg...",
          "image_alt": "Image of Homemade Pizza Recipe: How to Make It",
          "image_base64": "data:image/webp;base64,UklGRmgIAABXRUJQVlA4IFwIAACwMg..."
        }
      ],
      "facts": [
        {
          "key": "Origin",
          "predicate": "hw:/collection/dishes:origin",
          "value": [
            {
              "text": "Italy",
              "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Italy&si=AL3DRZHmwLjWhgnaPB3UTu10R6S5qNLXiQiKMeezfKyB1FMsRgvMc15_a-XCDquvg02EcLVCDOBlFWcyGM1h_GEvApLCUHB4TbGV9DLLN_L5HXDRSM_AM0JjmkKGPEEkyRjAEOMkP_wbp9U4-YKGn63yz0_QGqKXGf1bKFT4vVVVz2XMsjUuOZt4AnSHQk-nDBQE0oBKvh4m&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQmxN6BAgNEAI"
            }
          ]
        }
      ],
      "nutrition_facts": {
        "product": "Pizza, 14\" regular crust",
        "source": "USDA",
        "source_link": "https://fdc.nal.usda.gov/food-details/173292/nutrients",
        "calories": "285 Calories",
        "portion": "1 slice (107 g)"
      }
    },
    "overview": {
      "title": "Popular Toppings",
      "kgmid": "/m/0663v"
    },
    "snack_pack_map": {
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA...",
      "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA...",
      "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=1&lsack=G7meadq9Asmxi-gPrO7dKA&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQtgN6BAg-EAM"
    },
    "snack_pack": [
      {
        "cid": "13570545686572397234",
        "name": "Sicilian Pizza",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "reviews_cnt": 3,
        "type": "Pizza",
        "work_status": "\"Pizza was prepared quickly, the products were all of high quality and fresh.\"\"Pizza was prepared quickly, the products were all of high quality and fresh.\"",
        "address": "Nashville, TN",
        "rank": 1,
        "global_rank": 1
      },
      {
        "cid": "14742264573553154910",
        "name": "327 Pizza Company",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "reviews_cnt": 3,
        "type": "Pizza",
        "work_status": "\"Ordered a gluten free, and a regular Hawaiian pizza- flavour is fantastic!\"\"Ordered a gluten free, and a regular Hawaiian pizza- flavour is fantastic!\"",
        "address": "Nashville, TN",
        "rank": 2,
        "global_rank": 2
      },
      {
        "cid": "11325640445402842264",
        "name": "PizzaForno",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "reviews_cnt": 4,
        "type": "Pizza",
        "work_status": "\"It's a fully robotic pizza machine that will bake your pizza in 4 minutes!\"\"It's a fully robotic pizza machine that will bake your pizza in 4 minutes!\"",
        "address": "Columbia, SC",
        "rank": 3,
        "global_rank": 3
      }
    ],
    "pagination": {
      "pages": [
        {
          "page": 2,
          "start": 10,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=G7meadq9Asmxi-gPrO7dKA&start=10&sa=N&sstk=Af77f_fJ7Wgh6eItfEwoCb_2t0G8CuvwOrSZ6TONEKuDyawmmNMPWUUVHKH1zLB6ENb15HPlr67qq80L4RkoL1jJrvuFJT9BhMhFdg&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ8tMDegQIFxAE"
        },
        {
          "page": 3,
          "start": 20,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=G7meadq9Asmxi-gPrO7dKA&start=20&sa=N&sstk=Af77f_fJ7Wgh6eItfEwoCb_2t0G8CuvwOrSZ6TONEKuDyawmmNMPWUUVHKH1zLB6ENb15HPlr67qq80L4RkoL1jJrvuFJT9BhMhFdg&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ8tMDegQIFxAG"
        },
        {
          "page": 4,
          "start": 30,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=G7meadq9Asmxi-gPrO7dKA&start=30&sa=N&sstk=Af77f_fJ7Wgh6eItfEwoCb_2t0G8CuvwOrSZ6TONEKuDyawmmNMPWUUVHKH1zLB6ENb15HPlr67qq80L4RkoL1jJrvuFJT9BhMhFdg&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ8tMDegQIFxAI"
        }
      ],
      "current_page": 1,
      "next_page": 2,
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=G7meadq9Asmxi-gPrO7dKA&start=10&sa=N&sstk=Af77f_fJ7Wgh6eItfEwoCb_2t0G8CuvwOrSZ6TONEKuDyawmmNMPWUUVHKH1zLB6ENb15HPlr67qq80L4RkoL1jJrvuFJT9BhMhFdg&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ8tMDegQIFxAE"
    },
    "related": [
      {
        "text": "Pizza Hut near me",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+near+me&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ1QJ6BAhiEAE",
        "rank": 1,
        "global_rank": 17
      },
      {
        "text": "Pizza Hut menu",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+menu&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ1QJ6BAhnEAE",
        "rank": 2,
        "global_rank": 18
      },
      {
        "text": "Pizza definition",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+definition&sa=X&ved=2ahUKEwiat_PfovSSAxXJ2AIHHSx3FwUQ1QJ6BAhmEAE",
        "rank": 3,
        "global_rank": 19
      }
    ],
    "people_also_ask": [
      {
        "question": "What's the 2 hour rule for pizza?",
        "question_type": "featured",
        "answer_source": "Curry Pizza House",
        "answer_link": "https://currypizzahouse.com/georgiadoubleupsocial-com/how-long-does-pizza-last/#:~:text=Pizza%20should%20NEVER%20be%20left,to%20prevent%20rapid%20bacteria%20growth.",
        "answer_display_link": "https://currypizzahouse.com › how-long-does-pizza-lasthttps://currypizzahouse.com › how-long-does-pizza-last",
        "answers": [
          {
            "type": "answer",
            "value": {
              "text": "Pizza should NEVER be left out for more than 2 hours (and just 1 hour if the room is above 90°F/32°C). Hot/Outdoor Events: When it's really warm, the safe window shrinks—refrigerate or ice your pizza within 20–60 minutes to prevent rapid bacteria growth.Jun 29, 2025"
            },
            "rank": 1
          }
        ],
        "rank": 1,
        "global_rank": 6
      }
    ],
    "oragnic": [
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
        "link": "https://www.dominos.com/",
        "source": "Domino's",
        "display_link": "https://www.dominos.com",
        "title": "Domino's: Pizza Delivery & Carryout, Pasta, Wings & More",
        "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu, find locations, track orders. Sign up for Domino's email ...",
        "snippet_highlighted_words": [
          "Order pizza, pasta, sandwiches & more online for carryout or delivery"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from www.dominos.com",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 5
      },
      {
        "link": "https://www.papajohns.com/",
        "source": "Papa John's",
        "display_link": "https://www.papajohns.com",
        "title": "Papa Johns Pizza Delivery & Carryout - Best Deals on Pizza ...",
        "description": "Deals · Pizza · Papadias · Papa Bites · Wings · Sides · Papa Bowls · Desserts · Drinks · Dipping Sauces · Extras. Earn Papa Dough® faster than ever, and redeem ...Read more",
        "snippet_highlighted_words": [
          "Pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 3,
        "global_rank": 10
      }
    ]
  }
  ```
</ResponseExample>
