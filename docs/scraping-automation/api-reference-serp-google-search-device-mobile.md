# Device (mobile/desktop)

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/device-mobile](https://docs.brightdata.com/api-reference/serp/google-search/device-mobile)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Device (Mobile/Desktop) parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&brd_mobile=1
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define what device type to be represented in user-agent.

  | Value | Description                           | Usage          |
  | :---- | :------------------------------------ | :------------- |
  | `0`   | Random desktop user agent (`Default`) | `brd_mobile=0` |
  | `1`   | Random mobile user agent              | `brd_mobile=1` |

  ```http theme={null}
  https://www.google.com/search?q=pizza&brd_mobile=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&brd_mobile=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&brd_mobile=1"
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
        url: 'https://www.google.com/search?q=pizza&brd_mobile=1',
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
      'url': 'https://www.google.com/search?q=pizza&brd_mobile=1',
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
  ```json 200 highlight={7} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "language": "en",
      "location": "United States",
      "mobile": true,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T09:08:20.763Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&brd_mobile=1&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&aep=1&ntc=1&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ2J8OegQIBBAX"
      },
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&aep=1&ntc=1&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ2J8OegQIDRAE"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQtKgLegQIExAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQtKgLegQIEBAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQs6gLegQIDxAB"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ0pQJegUIzwIQAQ"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQs6gLegUI0AIQAQ"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&q=pizza&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQs6gLegUI7AIQAQ"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&udm=36&source=lnms&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ0pQJegUI6AIQAQ"
      },
      {
        "title": "Flights",
        "href": "https://www.google.com/travel/flights?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&ved=1t:200715&ictx=111"
      },
      {
        "title": "Finance",
        "href": "https://www.google.com/finance?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-bZnt6jMmErT-KRarIgXyuyEbgLVbVrL19D752u5Zq1JxsknUc6k2WnAYdF3IRSWkTH3pdQosATZjd3_wJT0jcn1ZGvea0l_Pe81RHnOCa9zKvy8rYGCOaVH6HKJ-v0Fbf3M4pWfq-1w08PlFYboBjESgVjCWuPSKS93yTwhvPbs5RLCAIhZYAj5yDun18lG7HGkbSgcdz0s_2rVuotT_RFlq9E6vh4gSWXTpD9fiMHs21DAcw&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ0pQJegUI5AIQAQ"
      }
    ],
    "organic": [
      {
        "link": "https://www.pizzahut.com/",
        "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
        "description": "$10 any pizza. Price includes Original Pan, Hand Tossed, Thin 'N Crispy. $10 ANY Large Pizza​. Up to 5 ...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.dominos.com/",
        "title": "Domino's: Pizza Delivery & Carryout, Pasta, Wings & More",
        "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu, find locations, track orders. Sign up for Domino's email ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMgmhIihdzXKJSaNX2FtUC1cunqgi_Yg-BMi2gscWl4SHC4Zx2-NXdro&usqp=CAE&s",
        "image_alt": "pizza from www.dominos.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMgmhIihdzXKJSaNX2FtUC1cunqgi_Yg-BMi2gscWl4SHC4Zx2-NXdro&usqp=CAE&s",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://www.papajohns.com/",
        "title": "Papa Johns Pizza Delivery & Carryout - Best Deals on Pizza, Sides & More",
        "description": "Deals · Pizza · Papadias · Papa Bites · Wings · Sides · Papa Bowls · Desserts · Drinks · Dipping Sauces · Extras. Earn Papa Dough® faster than ever, and redeem ...",
        "rank": 3,
        "global_rank": 7
      },
      {
        "link": "https://www.pizzamyheart.com/",
        "title": "Pizza My Heart for pizza by the slice or whole pie",
        "description": "Pizza by the slice or whole pie with a focus on natural locally grown ingredients from California farms. Fresh salads, craft beers and a laid-back surf ...",
        "rank": 4,
        "global_rank": 8
      },
      {
        "link": "https://www.spinatospizzeria.com/",
        "title": "Spinato's Pizzeria: Best Restaurant Near Me - Spinato's Pizzeria",
        "description": "Savor classic Italian flavors at Spinato's Pizzeria, the best restaurant near me. Family-owned, offering delicious pizzas, pastas, and more!",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnCOkZk6SizIss5cuiBfaISZqSMGuq_6Yb-XzMxkxS9g9gMXnrRI2jHk&usqp=CAE&s",
        "image_alt": "pizza from www.spinatospizzeria.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnCOkZk6SizIss5cuiBfaISZqSMGuq_6Yb-XzMxkxS9g9gMXnrRI2jHk&usqp=CAE&s",
        "rank": 5,
        "global_rank": 19
      },
      {
        "link": "https://www.thekitchn.com/trader-joes-pizza-trick-podcast-23768950",
        "title": "The Rule-Breaking Tip That Makes Frozen Pizza Taste 10x Better",
        "description": "Why You Should Thaw Your Pizza Before Heating It in the Oven. That's right. The key to making frozen pizzas taste like they just came out of a wood-fired oven ...",
        "rank": 6,
        "global_rank": 20
      },
      {
        "link": "https://primepizza.com/",
        "title": "Prime Pizza | Authentic New York–Style Pizza in Los Angeles & Orange County",
        "description": "Discover Prime Pizza — serving the best New York–style pizza in Los Angeles and coming soon to Orange County. Fresh ingredients, housemade dough, ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc78x5sSE2Dq_n5R8zvr0QJw2AWoxBLBQFLnXxUtPUhb0C_asv7_Xv-WE&usqp=CAE&s",
        "image_alt": "pizza from primepizza.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc78x5sSE2Dq_n5R8zvr0QJw2AWoxBLBQFLnXxUtPUhb0C_asv7_Xv-WE&usqp=CAE&s",
        "rank": 7,
        "global_rank": 21
      }
    ],
    "videos": [
      {
        "link": "https://www.youtube.com/watch?v=Bz6tlSbN_GA",
        "title": "Recreating The Takeaway Pizza Of My Childhood",
        "author": "5 days ago",
        "rank": 1,
        "global_rank": 15
      },
      {
        "link": "https://www.youtube.com/watch?v=h3qO7Jii3BE",
        "title": "How To Make Frozen Pizza Bases Ready Anytime at Home",
        "author": "3 days ago",
        "rank": 2,
        "global_rank": 16
      },
      {
        "link": "https://www.youtube.com/watch?v=jO3oFY_oxOA",
        "title": "I make these mini pizza almost daily! Delicious, inexpensive, and hardly anyone knows about it!",
        "author": "1 day ago",
        "rank": 3,
        "global_rank": 17
      },
      {
        "link": "https://www.youtube.com/watch?v=TB5JPppUZpY",
        "title": "LEFTOVER PIZZA WILL NEVER BE THE SAME...",
        "author": "1 day ago",
        "rank": 4,
        "global_rank": 18
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1N_u02vK54QYnMTrSSw2WUdR7skvRIYksS2HIZTJHxF7UxHkOK_roqVZhA&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1N_u02vK54QYnMTrSSw2WUdR7skvRIYksS2HIZTJHxF7UxHkOK_roqVZhA&usqp=CAI&s"
      }
    ],
    "overview": {
      "title": "Pizza",
      "kgmid": "/m/0663v"
    },
    "pagination": {
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&prmd=misvn&ei=vrueaZ-OCZXl0PEP7ciciAY&start=10&sa=N"
    },
    "related": [
      {
        "text": "Pizza Hut near me",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+near+me&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ1QJ6BQiyAhAB",
        "rank": 1,
        "global_rank": 9
      },
      {
        "text": "Pizza Hut menu",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+menu&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ1QJ6BQi4AhAB",
        "rank": 2,
        "global_rank": 10
      },
      {
        "text": "Pizza definition",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+definition&sa=X&ved=2ahUKEwif5eihpfSSAxWVMjQIHW0kB2EQ1QJ6BQi-AhAB",
        "rank": 3,
        "global_rank": 11
      }
    ],
    "people_also_ask": [
      {
        "question": "What's the 2 hour rule for pizza?",
        "question_type": "featured",
        "answer_link": "https://currypizzahouse.com/georgiadoubleupsocial-com/how-long-does-pizza-last/#:~:text=Pizza%20should%20NEVER%20be%20left,to%20prevent%20rapid%20bacteria%20growth.",
        "answer_display_link": "https://currypizzahouse.com",
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
        "global_rank": 3
      },
      {
        "question": "Who has the $4.99 pizza deal?",
        "question_type": "ai_overview",
        "answers": [
          {
            "texts": [
              {
                "type": "paragraph",
                "snippet": "Little Caesars frequently offers $4.99 pizza deals, often for two large one-topping pizzas or their Detroit-Style Slices-N-Stix combo, available for limited times with online codes like \"PIZZAPIZZA,\" so check their deals page or app for current offers.",
                "snippet_highlighted_words": "Little Caesars"
              },
              {
                "type": "list",
                "list": [
                  {
                    "type": "paragraph",
                    "snippet": "Check Little Caesars' Website/App: Look for limited-time offers and deals sections."
                  },
                  {
                    "type": "paragraph",
                    "snippet": "Look for Codes: They often use codes like \"PIZZAPIZZA\" for online orders."
                  },
                  {
                    "type": "list",
                    "title": "Specific Promotions: Recent examples include:",
                    "list": [
                      {
                        "type": "paragraph",
                        "snippet": "2 Large 1-Topping Pizzas: for $4.99 each (online deal)."
                      },
                      {
                        "type": "paragraph",
                        "snippet": "Detroit-Style Slices-N-Stix Combo: (2 pepperoni slices + Crazy Bread) for $4.99 (lunch special)."
                      },
                      {
                        "type": "paragraph",
                        "snippet": "Sicilian Style Pizza: for $4.99."
                      }
                    ]
                  }
                ],
                "title": "How to find current deals:"
              },
              {
                "type": "list",
                "list": [
                  {
                    "type": "paragraph",
                    "snippet": "These are often limited-time offers and prices can vary by location."
                  },
                  {
                    "type": "paragraph",
                    "snippet": "Some deals require online ordering or specific promo codes."
                  }
                ],
                "title": "Keep in mind:"
              }
            ],
            "references": [
              {
                "href": "https://littlecaesars.com/en-us/deals/#:~:text=Little%20Caesars%C2%AE,Limited%2DTime%20Pizza%20Deals",
                "title": "Little Caesars®| Limited-Time Pizza Deals",
                "subtitle": "Little Caesars® | Limited-Time Pizza Deals.",
                "source": "Little Caesarshttps://littlecaesars.com",
                "index": 0
              },
              {
                "href": "https://www.facebook.com/LittleCaesars/posts/get-2-large-pizzas-for-499-each-online-only-with-promo-code-pizzapizza/1187325250106928/#:~:text=get%202%20large%20pizzas%20for%204.99%20each%20online%20only%20with%20promo%20code%20PIZZAPIZZA",
                "title": "get 2 large pizzas for 4.99 each online only with promo code ...",
                "subtitle": "Aug 26, 2025 — get 2 large pizzas for 4.99 each online only with promo code PIZZAPIZZA.",
                "source": "Facebookhttps://www.facebook.com",
                "index": 1
              },
              {
                "href": "https://www.facebook.com/LittleCaesars/posts/double-the-pizzas-twice-the-yum-get-2-large-1-topping-pizzas-for-just-499-little/1302966938542758/#:~:text=2%20pizzas%20for%20$4.99%20each%20from%20Little%20Caesars%20Code:%20PIZZAPIZZA",
                "title": "Little Caesars - Facebook",
                "subtitle": "Jan 13, 2026 — 2 pizzas for $4.99 each from Little Caesars Code: PIZZAPIZZA.",
                "source": "Facebook · Little Caesarshttps://www.facebook.com",
                "index": 2
              },
              {
                "href": "https://littlecaesars.com/en-us/deals/8389/#:~:text=Little%20Caesars%C2%AE%20%7C%20Limited%2DTime%20Pizza%20Promos",
                "title": "search for local deals! - Little Caesars® Pizza",
                "subtitle": "Little Caesars® | Limited-Time Pizza Promos.",
                "source": "Little Caesarshttps://littlecaesars.com",
                "index": 3
              },
              {
                "href": "https://www.facebook.com/LittleCaesars/posts/double-the-pizzas-twice-the-yum-get-2-large-1-topping-pizzas-for-just-499-little/1286902870149165/",
                "title": "Double the pizzas, twice the yum! Get 2 large 1-topping pizzas for just $4.99 Little Caesars® limited time Pizza!Pizza! Deal!",
                "source": "Facebook · Little Caesarshttps://www.facebook.com",
                "index": 4
              },
              {
                "href": "https://www.youtube.com/watch?v=eKx39t79o2I&t=7",
                "title": "NEW Little Caesars $4.99 Detroit-Style Slices-N-Stix Review!",
                "subtitle": "Jan 14, 2026 — you a little butt cheek laughter y'all was like \"Damn when you going to stop playing games. and pull up on that newoo at Little C's. are they even a...",
                "source": "YouTube · Daym Dropshttps://www.youtube.com",
                "index": 5
              },
              {
                "href": "https://www.instagram.com/reel/DTOGL8bgSLa/#:~:text=OCR,to%20be%20split%20half%20&%20half%20.",
                "title": "$10 will get you 2 LARGE 1-topping pizzas at Little Caesar's ... - Instagram",
                "subtitle": "Jan 7, 2026 — OCR. 2 PIZZAS FOR $10 AT LITTLE CAESAR'S . 2 PIZZAS FOR $10 AT LITTLE CAESAR'S . Get 2 large 1-topping pizzas for $4.99 each online until 1/18 with c...",
                "source": "Instagram · tayloreatsnychttps://www.instagram.com",
                "index": 6
              },
              {
                "href": "https://www.facebook.com/LittleCaesars/videos/new-sicilian-style-pizza-only-499/647195651659750/#:~:text=For%20only%20$4.99?!,4",
                "title": "For only $4.99?! Check out the Sicilian Style Pizza | Little Caesars",
                "subtitle": "Oct 29, 2025 — For only $4.99?! Check out the Sicilian Style Pizza | Little Caesars | Facebook. Video. 󱡘 Little Caesars. Oct 29, 2025󰞋󱘚 New! Sicilian Style Pizza,",
                "source": "Facebook · Little Caesarshttps://www.facebook.com",
                "index": 7
              },
              {
                "href": "https://www.facebook.com/LittleCaesars/posts/double-the-pizzas-twice-the-yum-get-2-large-1-topping-pizzas-for-just-499-little/1302965878542864/#:~:text=Double%20the%20pizzas%2C%20twice%20the,Deal!",
                "title": "Little Caesars - Facebook",
                "subtitle": "Jan 13, 2026 — Double the pizzas, twice the yum! Get 2 large 1-topping pizzas for just $4.99 Little Caesars® limited time Pizza! Pizza! Deal!",
                "source": "Facebookhttps://www.facebook.com",
                "index": 8
              }
            ]
          }
        ],
        "rank": 2,
        "global_rank": 4
      }
    ],
    "oragnic": [
      {
        "link": "https://www.pizzahut.com/",
        "title": "Pizza Hut | Delivery & Carryout - No One OutPizzas The Hut!",
        "description": "$10 any pizza. Price includes Original Pan, Hand Tossed, Thin 'N Crispy. $10 ANY Large Pizza​. Up to 5 ...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.dominos.com/",
        "title": "Domino's: Pizza Delivery & Carryout, Pasta, Wings & More",
        "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Domino's. View menu, find locations, track orders. Sign up for Domino's email ...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMgmhIihdzXKJSaNX2FtUC1cunqgi_Yg-BMi2gscWl4SHC4Zx2-NXdro&usqp=CAE&s",
        "image_alt": "pizza from www.dominos.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMgmhIihdzXKJSaNX2FtUC1cunqgi_Yg-BMi2gscWl4SHC4Zx2-NXdro&usqp=CAE&s",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://www.papajohns.com/",
        "title": "Papa Johns Pizza Delivery & Carryout - Best Deals on Pizza, Sides & More",
        "description": "Deals · Pizza · Papadias · Papa Bites · Wings · Sides · Papa Bowls · Desserts · Drinks · Dipping Sauces · Extras. Earn Papa Dough® faster than ever, and redeem ...",
        "rank": 3,
        "global_rank": 7
      }
    ]
  }
  ```
</ResponseExample>
