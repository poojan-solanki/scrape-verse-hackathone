# AI overview

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/ai-overview](https://docs.brightdata.com/api-reference/serp/google-search/ai-overview)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search AI Overview parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Setting `brd_ai_overview=2` will **increase** the likelihood of receiving Google's Generative AI Overviews in your SERP responses, typically appearing in \~15-20%+ of results.

  ```http theme={null}
  https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2
  ```

  <Note>
    * Expect an extra \~5-10 seconds of latency in SERP API’s response time with this query parameter, as it launches a browser to capture the entire AI Overview content.
    * To better trigger an AI Overview, your SERP keywords must be relevant to topics that Google considers suitable for generative responses.
  </Note>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2"
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
        url: 'https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2',
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
      'url': 'https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2',
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
  ```json 200 highlight={398-530} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "what makes the best pizza",
      "results_cnt": 701000000,
      "search_time": 0.38,
      "language": "en",
      "location": "Unknown",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "what makes the best pizza - Google Search",
      "timestamp": "2026-02-25T09:22:55.293Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=what+makes+the+best+pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&aep=1&ntc=1&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q2J8OegQIExAE"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Qs6gLegQIFhAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Qs6gLegQIFxAB"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QtKgLegQIGBAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QtKgLegQIFRAB"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=what+makes+the+best+pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q0pQJegQIehAB"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=what+makes+the+best+pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&q=what+makes+the+best+pizza&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Qs6gLegQIfBAB"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=what+makes+the+best+pizza&udm=36&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpFZYo9qIX3pM4_jubAu4b8O2J-l05bwPYHG24xCsQH1w8cvTO1NaOffwF4OfCYdQK0BdR_E7UxHc6fNpvQbyybHrDNK0mjL-uF67YhlI3z2rBnM7wvMGu_iF6p4hNJJhStr69YlW2Oj1OAOgdrMAYd4OOAVozEDRKsKFFa3-i1j7aQIzwDIZtEBmkB_W0Pu-qat6qdg&sa=X&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q0pQJegQIfRAB"
      }
    ],
    "organic": [
      {
        "link": "https://www.thekitchn.com/types-of-pizza-23665322",
        "source": "The Kitchn",
        "display_link": "https://www.thekitchn.com › ... › Main Dishes › Pizza",
        "title": "12 Best Types of Pizza Everyone Needs to Know About",
        "description": "New York-style dough frequently has sugar and oil in the recipe, which adds flavor, helps the crust brown, and makes it easier to stretch. The ...Read more",
        "snippet_highlighted_words": [
          "New York-style dough frequently has sugar and oil in the recipe"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Jun 25, 2024",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.bonappetit.com/story/best-homemade-pizza?srsltid=AfmBOoq3vbzR7ZqTK7r8PLxxSkJ0NcgOp_mhKFlgxr8mvrPvIHzsyklg",
        "source": "Bon Appétit",
        "display_link": "https://www.bonappetit.com › Cooking › Pizza",
        "title": "9 Rules for the Best Homemade Pizza OF YOUR LIFE",
        "description": "1. Store-bought Pizza Dough Is Totally Cool—If You Handle It Right · 2. You Need Two Kinds of Mozzarella · 3. Know When to Top · 4. Simple Sauce Is ...Read more",
        "snippet_highlighted_words": [
          "Store-bought Pizza Dough Is Totally Cool—If You Handle It Right"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Mar 28, 2017",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 2,
        "global_rank": 21
      },
      {
        "link": "https://www.tastingtable.com/1552373/pizza-styles-ranked-worst-best/",
        "source": "Tasting Table",
        "display_link": "https://www.tastingtable.com › Exclusives › Opinion",
        "title": "14 Pizza Styles, Ranked Worst To Best",
        "description": "The perfect pizza is crisp, not soggy, and can be eaten in a variety of settings. Above all, I want a pizza that will taste the same whether I ...Read more",
        "snippet_highlighted_words": [
          "crisp, not soggy, and can be eaten in a variety of settings"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Apr 2, 2024",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 3,
        "global_rank": 22
      },
      {
        "link": "https://www.reddit.com/r/Chattanooga/comments/1fcsux7/what_makes_a_best_pizza_the_best/",
        "source": "Reddit · r/Chattanooga",
        "display_link": "20+ comments · 1 year ago",
        "title": "What makes a “best” pizza the “best”? : r/Chattanooga",
        "description": "A good crust, thin, crispy but not too crispy, on the bottom with a good amount of air pockets on the outside ring. A savory sauce with good ...Read more",
        "snippet_highlighted_words": [
          "A good crust, thin, crispy but not too crispy, on the bottom"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 4,
        "global_rank": 26
      },
      {
        "link": "https://thefoodcharlatan.com/homemade-pizza-recipe/",
        "source": "The Food Charlatan",
        "display_link": "https://thefoodcharlatan.com › Recipes for Dinner",
        "title": "Best Homemade Pizza Recipe (1 Hour or Overnight)",
        "description": "I'll give you lots of tips, tricks, and ideas to get the best homemade pizza to ever come out of your wimpy, not-wood-fired oven!Read more",
        "snippet_highlighted_words": [
          "best homemade pizza"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 85,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 5,
        "global_rank": 27
      },
      {
        "link": "https://www.seriouseats.com/essential-tips-for-better-pizza-how-to-make-pizza-at-home",
        "source": "Serious Eats",
        "display_link": "https://www.seriouseats.com › ... › Baking Guides",
        "title": "11 Essential Tips for Better Pizza | The Food Lab",
        "description": "#1: Use a Scale! · #2: Learn How to Use the Metric System and Baker's Percentages · #3: Choose the Right Flour · #4: Pick a Style · #5: No Stand Mixer? No Problem.Read more",
        "snippet_highlighted_words": [
          "Use a Scale"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 6,
        "global_rank": 28
      },
      {
        "link": "https://www.youtube.com/watch?v=Lyh94fDNCr4",
        "source": "YouTube · Vito Iacopelli",
        "display_link": "20.4K+ views · 5 months ago",
        "title": "What Makes the Pizza, The Best!?",
        "description": "This video is about to see all the differences between pizza and pizza because they are totally different products.",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAdDLC62143Qi4sj_7Y61QvHPxjMSXzzKoko5lCNmh8sEjTCvT54pVA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAdDLC62143Qi4sj_7Y61QvHPxjMSXzzKoko5lCNmh8sEjTCvT54pVA&s",
        "duration": "16:29",
        "duration_sec": 989,
        "rank": 7,
        "global_rank": 29
      },
      {
        "link": "https://www.pizzauniversity.org/how-to-identify-good-pizza-in-8-easy-steps/",
        "source": "Pizza University & Culinary Arts Center",
        "display_link": "https://www.pizzauniversity.org › how-to-identify-good...",
        "title": "How to Identify Good Pizza in 8 Easy Steps",
        "description": "First look at the crust and the border of the pizza. If it contains a lot of air – it will be light, crisp and good.Read more",
        "snippet_highlighted_words": [
          "light, crisp and good"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Oct 25, 2019",
            "rank": 1
          }
        ],
        "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 8,
        "global_rank": 30
      }
    ],
    "perspectives": [
      {
        "title": "The 18 best pizzas in the world, ranked",
        "author": "Liv Kelly · Time Out Worldwide",
        "source": "Travel writer for Time Out",
        "date": "3 weeks ago",
        "link": "https://www.timeout.com/restaurants/worlds-best-pizzas",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
      },
      {
        "title": "The Secret To Authentic Neapolitan Pizza",
        "author": "Nick's Kitchen · YouTube",
        "source": "American chef and internet personality",
        "date": "538.8K+ views · 3 weeks ago",
        "link": "https://www.youtube.com/watch?v=dsQGMhsvIYY",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
      },
      {
        "title": "These 13 pizzerias are Pittsburgh’s best, and reflect Western Pa.’s position as a rising pizza powerhouse",
        "author": "Hal B. Klein · Pittsburgh Post-Gazette",
        "source": "Pittsburgh-based food & drinks writer",
        "date": "1 day ago",
        "link": "https://www.post-gazette.com/life/dining/2026/02/24/best-pizza-pittsburgh-1/stories/202602160047",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
      },
      {
        "title": "Best Pizza in Phoenix Popular comment · Cibo is my favorite patio + pizza date night spot",
        "author": "r/phoenix",
        "source": "Reddit",
        "date": "260+ comments · 2 weeks ago",
        "link": "https://www.reddit.com/r/phoenix/comments/1r12hok/best_pizza_in_phoenix/"
      },
      {
        "title": "Best Pizza in Sonoma County: 16 Editor-Approved Spots for Tasty PiesBest Pizza in Sonoma County: 16 Editor-Approved Spots for Tasty Pies",
        "author": "Heather Irwin · Sonoma MagazineHeather Irwin · Sonoma Magazine",
        "source": "Sonoma County dining writerSonoma County dining writer",
        "date": "3 weeks ago3 weeks ago",
        "link": "https://www.sonomamag.com/best-pizza-in-sonoma-county-favorite-restaurants-for-tasty-pies/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzKYqmgbflEzazf8g_Fnp6r4J6ZIO3t95YB0TFq11OXOKFQ8kMf2TeeEzww&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzKYqmgbflEzazf8g_Fnp6r4J6ZIO3t95YB0TFq11OXOKFQ8kMf2TeeEzww&usqp=CAI&s"
      },
      {
        "title": "Top Pizza in the Bay AreaTop Pizza in the Bay Area",
        "author": "Cesar Hernandez, Soleil HoCesar Hernandez, Soleil Ho",
        "source": "San Francisco ChronicleSan Francisco Chronicle",
        "date": "3 weeks ago3 weeks ago",
        "link": "https://www.sfchronicle.com/projects/2023/best-pizza-sf-bay-area/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGyTJpaRNE8ruXgkLdHkPFLVu5T7ykcJezvyYa07SUmrk7T0XaSntO19GBw&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGyTJpaRNE8ruXgkLdHkPFLVu5T7ykcJezvyYa07SUmrk7T0XaSntO19GBw&usqp=CAI&s"
      },
      {
        "title": "The 10 Best Pizza Chains in the USA Which pizza chain is your favorite?",
        "author": "ViralNova · Facebook",
        "source": "Curation site for clickbait",
        "date": "3 days ago",
        "link": "https://www.facebook.com/ViralNova/posts/the-10-best-pizza-chains-in-the-usawhich-pizza-chain-is-your-favorite/1241527424749017/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vgx83wQhgnudtPZ1S_caEzWEMf60_Bzx41Laou9ab1ZBtfh1CQkNjUO4zQ&usqp=CAI&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vgx83wQhgnudtPZ1S_caEzWEMf60_Bzx41Laou9ab1ZBtfh1CQkNjUO4zQ&usqp=CAI&s"
      },
      {
        "title": "Where is the best pizza in DC? Popular comment · I mean it’s subjective, but in my opinion it’s Vace (kind of their own style), Andy’s (nyc style), 2Amy’s (Neapolitan style), and Mama Lucia (kind of nyc-ish but it’s nostalgic for me and I think it’s still very good).",
        "author": "r/washingtondc",
        "source": "Reddit",
        "date": "440+ comments · 1 month ago",
        "link": "https://www.reddit.com/r/washingtondc/comments/1qfkcxp/where_is_the_best_pizza_in_dc/"
      },
      {
        "title": "I Finally Made the Perfect Pizza (After Years of Practice)I Finally Made the Perfect Pizza (After Years of Practice)",
        "author": "Wilsons BBQ · YouTubeWilsons BBQ · YouTube",
        "source": "American BBQ in the UKAmerican BBQ in the UK",
        "date": "26.3K+ views · 2 weeks ago26.3K+ views · 2 weeks ago",
        "link": "https://www.youtube.com/watch?v=g5IoSPd4Cgg",
        "image": "https://img.youtube.com/vi/g5IoSPd4Cgg/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/g5IoSPd4Cgg/hqdefault.jpg"
      },
      {
        "title": "The Best New York Style Pizza at Home 🍕The Best New York Style Pizza at Home 🍕",
        "author": "Dylan Nobert · YouTubeDylan Nobert · YouTube",
        "source": "Cooking content creatorCooking content creator",
        "date": "59.5K+ views · 3 weeks ago59.5K+ views · 3 weeks ago",
        "link": "https://www.youtube.com/shorts/bndZw1mXa7w",
        "image": "https://img.youtube.com/vi/bndZw1mXa7w/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/bndZw1mXa7w/hqdefault.jpg"
      },
      {
        "title": "Best pizza in San Jose Popular comment · It depends what you like. Slice of Homage is Detroit style. A rectangular pie with intentionally burned edges and small, but thick slices. Bibo's and Slice of New York are New York-style. A large, thin pie with an extra cooked, crispy crust.",
        "author": "r/SanJose",
        "source": "Reddit",
        "date": "220+ comments · 1 month ago",
        "link": "https://www.reddit.com/r/SanJose/comments/1qfl93o/best_pizza_in_san_jose/"
      },
      {
        "title": "We Baked 100+ Pizzas to Make 1 Perfect RecipeWe Baked 100+ Pizzas to Make 1 Perfect Recipe",
        "author": "King Arthur Baking Company · YouTubeKing Arthur Baking Company · YouTube",
        "source": "Baking products & recipe providerBaking products & recipe provider",
        "date": "154.1K+ views · 1 month ago154.1K+ views · 1 month ago",
        "link": "https://www.youtube.com/watch?v=EdZ7IO8w69o",
        "image": "https://img.youtube.com/vi/EdZ7IO8w69o/hqdefault.jpg",
        "image_url": "https://img.youtube.com/vi/EdZ7IO8w69o/hqdefault.jpg"
      }
    ],
    "pagination": {
      "pages": [
        {
          "page": 2,
          "start": 10,
          "link": "https://www.google.com/search?q=what+makes+the+best+pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=XL-eaf7LFY76wPAPwMDU8QU&start=10&sa=N&sstk=Af77f_eat-RcaJ38aKFQ2gKZ3ozXL83am_zqevXTsQauRtBUChpa7vRLEpNGFj0NQ9y_zo-1csD5TJvjHaeJp-wF6YtpzlfIWaWjsQ&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q8tMDegQIERAE"
        },
        {
          "page": 3,
          "start": 20,
          "link": "https://www.google.com/search?q=what+makes+the+best+pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=XL-eaf7LFY76wPAPwMDU8QU&start=20&sa=N&sstk=Af77f_eat-RcaJ38aKFQ2gKZ3ozXL83am_zqevXTsQauRtBUChpa7vRLEpNGFj0NQ9y_zo-1csD5TJvjHaeJp-wF6YtpzlfIWaWjsQ&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q8tMDegQIERAG"
        },
        {
          "page": 4,
          "start": 30,
          "link": "https://www.google.com/search?q=what+makes+the+best+pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=XL-eaf7LFY76wPAPwMDU8QU&start=30&sa=N&sstk=Af77f_eat-RcaJ38aKFQ2gKZ3ozXL83am_zqevXTsQauRtBUChpa7vRLEpNGFj0NQ9y_zo-1csD5TJvjHaeJp-wF6YtpzlfIWaWjsQ&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q8tMDegQIERAI"
        }
      ],
      "current_page": 1,
      "next_page": 2,
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=what+makes+the+best+pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=XL-eaf7LFY76wPAPwMDU8QU&start=10&sa=N&sstk=Af77f_eat-RcaJ38aKFQ2gKZ3ozXL83am_zqevXTsQauRtBUChpa7vRLEpNGFj0NQ9y_zo-1csD5TJvjHaeJp-wF6YtpzlfIWaWjsQ&ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4Q8tMDegQIERAE"
    },
    "related": [
      {
        "text": "What is the 3 8 rule for pizza? AI Overview The 3/8 pizza ... - FacebookJan 23, 2026 — OCR: What is the 3 8 rule for pizza? AI Overview The 3/8 pizza rule is a simple guideline for ordering pizza, suggesti...Facebook · Pizzaholics",
        "link": "https://www.facebook.com/groups/742034912983989/posts/2399634517224012/#:~:text=OCR:%20What%20is%20the%203,average%20person%20eats%203%20slices.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkm_xZBvefVGSTakfu7jK7ZbURiVQhVW8QzLQ1Rfwn-TRsIS0UkqbRs7iLA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkm_xZBvefVGSTakfu7jK7ZbURiVQhVW8QzLQ1Rfwn-TRsIS0UkqbRs7iLA&s",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 3
      },
      {
        "text": "How Many Pizzas Do You Need to Order? | Factors to ConsiderJan 29, 2025Green Lantern Pizza",
        "link": "https://greenlanternpizza.com/blog/how-many-pizzas-do-you-need/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYc__HNk2lhZK2rIW38z1fFrOdU2MpkaueFpaJPnXsKbxR-xYsBmi21PWXg&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYc__HNk2lhZK2rIW38z1fFrOdU2MpkaueFpaJPnXsKbxR-xYsBmi21PWXg&s",
        "rank": 2,
        "global_rank": 4
      },
      {
        "text": "How To Host The Perfect Pizza Party - Papa JohnsSep 23, 2025 — Each of your guests will eat 3 slices of pizza. A standard pizza has approximately 8 slices. As an example, if you had...Papa JohnsHow To Host The Perfect Pizza Party - Papa JohnsSep 23, 2025 — Each of your guests will eat 3 slices of pizza. A standard pizza has approximately 8 slices. As an example, if you had...Papa Johns",
        "link": "https://www.papajohns.co.uk/blog/how-to-host-the-perfect-pizza-party#:~:text=Each%20of%20your%20guests%20will,you%20don't%20order%20sides!",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y5_Vke6_uqYEq7uFaDV93MAiYYTgxHocRyuFRU_2Dmoih26s6dGERYIh2A&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y5_Vke6_uqYEq7uFaDV93MAiYYTgxHocRyuFRU_2Dmoih26s6dGERYIh2A&s",
        "rank": 3,
        "global_rank": 5
      }
    ],
    "people_also_ask": [
      {
        "question": "What's the secret to making the best pizza?",
        "question_link": "https://www.freethepizza.com/blog/the-secret-pro-tip-for-great-homemade-pizza-unleashing-the-beast-in-your-home-oven#:~:text=The%20secret%20to%20great%20pizza%20is%20high%20heat%20and%20thermal%20mass.&text=You%20turn%20the%20oven%20up,all%20into%20a%20crispy%20crust.",
        "question_type": "featured",
        "answer_html": "<div id=\"XL-eaf7LFY76wPAPwMDU8QU__32\"><div class=\"wDYxhc\" data-md=\"61\" style=\"clear:none\"><div class=\"LGOjhe\" data-attrid=\"wa:/description\" data-hveid=\"CC0QAA\"><span class=\"ILfuVd\" lang=\"en\"><span class=\"hgKElc pOOWX\">The secret to great pizza is <b>high heat and thermal mass</b>.<br><br> You turn the oven up high, you heat the stone or steel, and your oven begins to behave more like a commercial pizza oven. That high-heat stone or steel makes the raw pizza dough pop up, makes the water evaporate quickly, and turns it all into a crispy crust.</span></span><span class=\"kX21rb ZYHQ7e\">Feb 1, 2025</span></div></div></div><div id=\"XL-eaf7LFY76wPAPwMDU8QU__33\"><div class=\"Y6JuXb\"><div data-hveid=\"CCcQAA\" data-ved=\"2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFSgAegQIJxAA\"><div style=\"position:relative\" class=\"tF2Cxc\"><div class=\"yuRUbf\"><div class=\"b8lM7\"><span class=\"V9tjod\" jsaction=\"trigger.mLt3mc\"><a jsname=\"UWckNb\" class=\"zReHs\" href=\"https://www.freethepizza.com/blog/the-secret-pro-tip-for-great-homemade-pizza-unleashing-the-beast-in-your-home-oven#:~:text=The%20secret%20to%20great%20pizza%20is%20high%20heat%20and%20thermal%20mass.&amp;text=You%20turn%20the%20oven%20up,all%20into%20a%20crispy%20crust.\" data-ved=\"2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFnoECCcQAw\" ping=\"/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://www.freethepizza.com/blog/the-secret-pro-tip-for-great-homemade-pizza-unleashing-the-beast-in-your-home-oven%23:~:text%3DThe%2520secret%2520to%2520great%2520pizza%2520is%2520high%2520heat%2520and%2520thermal%2520mass.%26text%3DYou%2520turn%2520the%2520oven%2520up,all%2520into%2520a%2520crispy%2520crust.&amp;ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFnoECCcQAw\"><h3 class=\"LC20lb MBeuO DKV0Md\" id=\"_XL-eaf7LFY76wPAPwMDU8QU_61\">For great homemade pizza, unleash the beast in your home oven...</h3><br><div class=\"notranslate ESMNde HGLrXd ojE3Fb\"><div class=\"q0vns\"><span class=\"H9lube\"><div class=\"eqA2re NjwKYd Vwoesf\" aria-hidden=\"true\"><img class=\"XNo5Ab\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAz1BMVEWTzPmWz/6Y1f98uN1QiKdAZnpCY3k9X3ZHe5Nro8OW0f+X0/9YkLJHQTuhdUnjrXb9vou+i2BpVypDaYWMyPGDuOBLRz/Ekmr/xpWmiGVZFANqSDjXrH29l26OclHYp3BvVCdgh6Z8r9V3TB9CRyeTAA3yJymZAAvbHB3SExt/AAGJakdDTVopW2fWCw/RIyMABgTDICDrJyjpJid2AACeGh0zDQ5GEQl3FA1XEA1WAACSGh+wAACgAABDBgQAIiQAFhojS1gWO0nwGxlsmbj0bsWQAAAAqElEQVR4AVTFQQsBQRgG4Pf9NmJmxGHd5TCkWM0kWRD+vT+gXLi6qt2EGi2B5/IQ4AdygNAsAEFI5jmbfLmXeCuTJ7afI2Q1Fg5yVA1RShmjtbqHXUbErXOd5JXAbR9lgK4M/GSceO9siidJrbXeJ9OZUSjQzBPn3XCxFAAChBAxALhsA15YHY6c664Eb7K23vZifDDq2EFF40v6mxR/4oUhfqnHXGAaAOuvJMmNnImSAAAAAElFTkSuQmCC\" style=\"height:18px;width:18px\" alt=\"\"></div></span><div class=\"CA5RN\"><div><span class=\"VuuXrf\">Free The Pizza</span></div><div class=\"byrV5b\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\">https://www.freethepizza.com<span class=\"ylgVCe ob9lvb\" role=\"text\"> › blog › the-secret-pro-tip-...</span></cite></div></div></div></div></a></span><div class=\"B6fmyf byrV5b Mg1HEd\"><div class=\"HGLrXd ojE3Fb\"><div class=\"q0vns\"><span class=\"H9lube\"><div class=\"eqA2re NjwKYd\" style=\"height:18px;width:18px\"></div></span><div class=\"CA5RN\"><div><span class=\"VuuXrf\">Free The Pizza</span></div><div class=\"byrV5b\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\">https://www.freethepizza.com<span class=\"ylgVCe ob9lvb\" role=\"text\"> › blog › the-secret-pro-tip-...</span></cite></div></div></div></div></div></div></div></div></div></div></div>",
        "answers": [
          {
            "type": "answer",
            "value": {
              "text": "The secret to great pizza is high heat and thermal mass. You turn the oven up high, you heat the stone or steel, and your oven begins to behave more like a commercial pizza oven. That high-heat stone or steel makes the raw pizza dough pop up, makes the water evaporate quickly, and turns it all into a crispy crust.Feb 1, 2025"
            },
            "rank": 1
          }
        ],
        "rank": 1,
        "global_rank": 2
      },
      {
        "question": "What makes a pizza taste best?",
        "question_link": "https://feastandfield.net/read/bread-and-pasta/why-does-pizza-taste-so-good-we-investigate/article_e61d704e-7fca-11ec-8873-8b24d05c9b9f.html#:~:text=from%20the%201800s.-,Cheese%20and%20tomatoes%20have%20some%20of%20the%20highest%20natural%20levels,delicious%20char%20on%20pizza%20crust.",
        "question_type": "featured",
        "answer_html": "<div id=\"XL-eaf7LFY76wPAPwMDU8QU__41\"><div class=\"wDYxhc\" data-md=\"61\" style=\"clear:none\"><div class=\"LGOjhe\" data-attrid=\"wa:/description\" data-hveid=\"CCwQAA\"><span class=\"ILfuVd\" lang=\"en\"><span class=\"hgKElc pOOWX\">Cheese and tomatoes have some of the highest natural levels of glutamate. <b>Lactic acid developed as dough rises gives pizza a tang that complements its fattiness</b>. The Maillard reaction creates a delicious char on pizza crust.</span></span><span class=\"kX21rb ZYHQ7e\">Feb 7, 2022</span></div></div></div><div id=\"XL-eaf7LFY76wPAPwMDU8QU__42\"><div class=\"Y6JuXb\"><div data-hveid=\"CCUQAA\" data-ved=\"2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFSgAegQIJRAA\"><div style=\"position:relative\" class=\"tF2Cxc\"><div class=\"yuRUbf\"><div class=\"b8lM7\"><span class=\"V9tjod\" jsaction=\"trigger.mLt3mc\"><a jsname=\"UWckNb\" class=\"zReHs\" href=\"https://feastandfield.net/read/bread-and-pasta/why-does-pizza-taste-so-good-we-investigate/article_e61d704e-7fca-11ec-8873-8b24d05c9b9f.html#:~:text=from%20the%201800s.-,Cheese%20and%20tomatoes%20have%20some%20of%20the%20highest%20natural%20levels,delicious%20char%20on%20pizza%20crust.\" data-ved=\"2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFnoECCUQAw\" ping=\"/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://feastandfield.net/read/bread-and-pasta/why-does-pizza-taste-so-good-we-investigate/article_e61d704e-7fca-11ec-8873-8b24d05c9b9f.html%23:~:text%3Dfrom%2520the%25201800s.-,Cheese%2520and%2520tomatoes%2520have%2520some%2520of%2520the%2520highest%2520natural%2520levels,delicious%2520char%2520on%2520pizza%2520crust.&amp;ved=2ahUKEwj-6bvbqPSSAxUOPRAIHUAgNV4QFnoECCUQAw\"><h3 class=\"LC20lb MBeuO DKV0Md\" id=\"_XL-eaf7LFY76wPAPwMDU8QU_60\">Why does pizza taste so good? We investigate | Bread &amp; Pasta</h3><br><div class=\"notranslate ESMNde HGLrXd ojE3Fb\"><div class=\"q0vns\"><span class=\"H9lube\"><div class=\"eqA2re NjwKYd Vwoesf\" aria-hidden=\"true\"><img class=\"XNo5Ab\" src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgBBgkIBwEKAQkLDRYPDQEMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tJTU3Ojo6JSs/RD84Qy05OjcBCgoKDQENGg8PDjclHyU3Nzc3Nzc3LTctNzc3NzU3Kzc3NzUrLSs3NzcsLS03NTArNys1LTcrNys3NzUrLTU1Nf/AABEIABAAEAMBEQACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAACAwcA/8QAJhAAAQIEBAcBAAAAAAAAAAAAAQMRAgQGBwAIEjEFIUJhkdHwIv/EABcBAAMBAAAAAAAAAAAAAAAAAAECBQD/xAAnEQABAwIEBQUAAAAAAAAAAAABAgMRAGEEByFxEhdBUeEiMYHR8f/aAAwDAQACEQMRAD8AoPFV5q/ysQQu+jSKI2pPWxP6ZziDinHM3lEIdAHmJNV8O2jLcAqbk+J0pfDl5rLaqIlLxp1Qh1UjqJcOBy78x8+Ew7juSyvU7Ke3zGl6Z5DeaY0bhXf7rT8qMtyisKtnoripKqaoaqdmG4APl8bENDJNRlriSddrT0rMuc1gIXBAje9BJojMtEEkbLGiAYoddxSXAhHvAZRztPClqBpJsOm5/aLq+VIkuz7wL1//2Q==\" style=\"height:18px;width:18px\" alt=\"\"></div></span><div class=\"CA5RN\"><div><span class=\"VuuXrf\">Feast and Field</span></div><div class=\"byrV5b\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\">https://feastandfield.net<span class=\"ylgVCe ob9lvb\" role=\"text\"> › read › why-does-pizza-taste-so-...</span></cite></div></div></div></div></a></span><div class=\"B6fmyf byrV5b Mg1HEd\"><div class=\"HGLrXd ojE3Fb\"><div class=\"q0vns\"><span class=\"H9lube\"><div class=\"eqA2re NjwKYd\" style=\"height:18px;width:18px\"></div></span><div class=\"CA5RN\"><div><span class=\"VuuXrf\">Feast and Field</span></div><div class=\"byrV5b\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\">https://feastandfield.net<span class=\"ylgVCe ob9lvb\" role=\"text\"> › read › why-does-pizza-taste-so-...</span></cite></div></div></div></div></div></div></div></div></div></div></div>",
        "answers": [
          {
            "type": "answer",
            "value": {
              "text": "Cheese and tomatoes have some of the highest natural levels of glutamate. Lactic acid developed as dough rises gives pizza a tang that complements its fattiness. The Maillard reaction creates a delicious char on pizza crust.Feb 7, 2022"
            },
            "rank": 1
          }
        ],
        "rank": 2,
        "global_rank": 20
      }
    ],
    "ai_overview": {
      "texts": [
        {
          "type": "paragraph",
          "snippet": "A good pizza is defined by a perfectly balanced, crispy-yet-chewy crust, flavorful sauce, and high-quality cheese, all cooked at high temperatures. Key factors include proper dough fermentation, a, structural balance of toppings to avoid a soggy mess, and a slightly charred crust, creating a harmonious blend of textures and fresh ingredients. Facebook +4",
          "reference_indexes": [
            0,
            1,
            2,
            3,
            8
          ],
          "image": {
            "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
            "image_alt": "The F&W Guide to Homemade Pizza",
            "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
          }
        },
        {
          "type": "paragraph",
          "snippet": "Here are the key components of a good pizza:"
        },
        {
          "type": "list",
          "title": "Crust (The Foundation): A great pizza has a light, airy crust that is neither overcooked (burnt/dry) nor undercooked (soggy). It should have a slightly chewy, airy interior and a crisp, charred exterior.",
          "list": [
            {
              "type": "paragraph",
              "snippet": "Crust (The Foundation): A great pizza has a light, airy crust that is neither overcooked (burnt/dry) nor undercooked (soggy). It should have a slightly chewy, airy interior and a crisp, charred exterior."
            },
            {
              "type": "paragraph",
              "snippet": "Sauce (The Flavor): High-quality, balanced sauce—not too sweet or acidic—is crucial. A simple, fresh sauce allows the flavors of the cheese and dough to shine."
            },
            {
              "type": "paragraph",
              "snippet": "Cheese and Toppings (The Balance): The cheese should be melted, stretchy, and high-quality, not just added in excess. Ingredients should be fresh, and toppings must be balanced with the sauce and cheese to prevent a soggy, unmanageable slice."
            },
            {
              "type": "paragraph",
              "snippet": "Cooking Method: The best pizzas are baked at high temperatures, such as in a wood-fired oven, which provides a fast, intense bake that creates a delicious, slightly charred flavor (the Maillard reaction)."
            },
            {
              "type": "paragraph",
              "snippet": "Structure: A good pizza is not too heavy; it holds its shape when lifted. Pizza University & Culinary Arts Center +6",
              "reference_indexes": [
                0,
                1,
                2,
                3,
                4,
                6,
                7
              ],
              "image": {
                "image": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.pizzauniversity.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
                "image_alt": "Pizza University & Culinary Arts Center",
                "image_url": "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://www.pizzauniversity.org&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL"
              }
            }
          ]
        },
        {
          "type": "paragraph",
          "snippet": "Key Takeaway: A great pizza balances fresh, high-quality ingredients on a perfectly baked, light, and airy dough. YouTube +1",
          "reference_indexes": [
            0,
            5
          ],
          "image": {
            "image": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.youtube.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL",
            "image_alt": "YouTube",
            "image_url": "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.youtube.com&client=AIM&size=128&type=FAVICON&fallback_opts=TYPE,SIZE,URL"
          }
        }
      ],
      "references": [
        {
          "href": "https://www.doreenspizzeria.com/doreens-pizzeria-7-qualities-of-a-perfect-pizza-slice/",
          "title": "Doreen's Pizzeria - 7 Qualities of a Perfect Pizza Slice. Opens in new tab.",
          "source": "Doreen's Pizza",
          "index": 0
        },
        {
          "href": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/",
          "title": "What makes a great pizza? - Facebook. Opens in new tab.",
          "source": "Facebook",
          "index": 1
        },
        {
          "href": "https://www.popuppizzalv.com/the-elements-of-what-makes-pizza-taste-great/#:~:text=There%20are%20three%20fundamental%20elements%20that%20make,adds%20to%20the%20texture%20of%20the%20crust.",
          "title": "The Elements of What Makes Pizza Taste Great. Opens in new tab.",
          "source": "Pop Up Pizza",
          "index": 2
        },
        {
          "href": "https://www.doreenspizzeria.com/discover-the-top-qualities-of-the-perfect-pizza-pie/#:~:text=A%20perfect%20pizza%20is%20a%20combination%20of,a%20hot%20oven%2C%20ideally%20a%20wood%2Dfired%20oven",
          "title": "Discover the Top Qualities of the Perfect Pizza Pie - Doreen's Pizzeria. Opens in new tab.",
          "source": "Doreen's Pizza",
          "index": 3
        },
        {
          "href": "https://www.pizzauniversity.org/how-to-identify-good-pizza-in-8-easy-steps/",
          "title": "How to Identify Good Pizza in 8 Easy Steps. Opens in new tab.",
          "source": "Pizza University & Culinary Arts Center",
          "index": 4
        },
        {
          "href": "https://www.youtube.com/watch?v=mRx_odAj-XQ&t=407",
          "title": "The Best Pizza You'll Ever Make | Epicurious 101. Opens in new tab.",
          "source": "YouTube",
          "index": 5
        },
        {
          "href": "https://www.youtube.com/watch?v=9k3Ky2nn6MY&t=285",
          "title": "How to Make Restaurant Style Pizza At Home | Full Tutorial!. Opens in new tab.",
          "source": "YouTube",
          "index": 6
        },
        {
          "href": "https://thepizzapress.com/blog/pizzeria/what-makes-pizza-delicious/#:~:text=The%20Maillard%20Reaction%2C%20or%20browning%20reaction%2C%20refers,give%20foods%20like%20pizza%20a%20distinct%20flavor.",
          "title": "What Makes Pizza Delicious? - Pizzeria - The Pizza Press. Opens in new tab.",
          "source": "The Pizza Press",
          "index": 7
        },
        {
          "href": "https://www.pmq.com/doughs-and-donts-three-pizza-chefs-share-their-tips-for-achieving-a-delicious-crust/#:~:text=Fermentation%20is%20one%20of%20the%20most%20crucial,shape%2C%20texture%20and%20digestion%20of%20the%20pizza.",
          "title": "Doughs and Don'ts: Three Pizza Chefs Share Their Tips for Achieving a Delicious Crust. Opens in new tab.",
          "source": "PMQ Pizza",
          "index": 8
        }
      ]
    },
    "forums": {
      "items": [
        {
          "title": "How do you get the best pizza?How do you get the best pizza?",
          "source": "Quora",
          "subtitles": [
            "5 answers",
            "5 months ago"
          ],
          "link": "https://www.quora.com/How-do-you-get-the-best-pizza",
          "answers": [
            {
              "link": "https://www.quora.com/How-do-you-get-the-best-pizza?top_ans=1477743849516045",
              "extra": [
                "Top answer",
                "18 votes",
                "11 months ago"
              ],
              "is_top_answer": true
            },
            {
              "link": "https://www.quora.com/How-do-you-get-the-best-pizza?top_ans=1477743884716841",
              "extra": [
                "13 votes",
                "5 months ago"
              ]
            },
            {
              "link": "https://www.quora.com/How-do-you-get-the-best-pizza?top_ans=1477743884280104",
              "extra": [
                "12 votes",
                "5 months ago"
              ]
            },
            {
              "link": "https://www.quora.com/How-do-you-get-the-best-pizza?top_ans=1477743884280104",
              "extra": [
                "12 votes",
                "5 months ago"
              ]
            }
          ],
          "rank": 1,
          "global_rank": 23
        },
        {
          "title": "What makes a great pizza?What makes a great pizza?",
          "source": "Facebook",
          "subtitles": [
            "Pizzaholics",
            "260+ comments",
            "1 year ago"
          ],
          "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/",
          "answers": [
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885276641993138",
              "extra": [
                "Top answer",
                "15 votes",
                "a year ago"
              ],
              "is_top_answer": true
            },
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885330211987781",
              "extra": [
                "12 votes",
                "a year ago"
              ]
            },
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885278108659658",
              "extra": [
                "12 votes",
                "a year ago"
              ]
            },
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885278108659658",
              "extra": [
                "12 votes",
                "a year ago"
              ]
            },
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885276641993138",
              "extra": [
                "Top answer",
                "15 votes",
                "a year ago"
              ],
              "is_top_answer": true
            },
            {
              "link": "https://www.facebook.com/groups/742034912983989/posts/1885228215331314/?comment_id=1885330211987781",
              "extra": [
                "12 votes",
                "a year ago"
              ]
            }
          ],
          "rank": 2,
          "global_rank": 24
        },
        {
          "title": "What is the secret to the best pizza?What is the secret to the best pizza?",
          "source": "Quora",
          "subtitles": [
            "2 answers",
            "11 months ago"
          ],
          "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza",
          "answers": [
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=96565224",
              "extra": [
                "Top answer",
                "136 votes",
                "7 years ago"
              ],
              "is_top_answer": true
            },
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=1477743734124602",
              "extra": [
                "62 votes",
                "2 years ago"
              ]
            },
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=87669523",
              "extra": [
                "27 votes",
                "7 years ago"
              ]
            },
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=87669523",
              "extra": [
                "27 votes",
                "7 years ago"
              ]
            },
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=96565224",
              "extra": [
                "Top answer",
                "136 votes",
                "7 years ago"
              ],
              "is_top_answer": true
            },
            {
              "link": "https://www.quora.com/What-is-the-secret-to-the-best-pizza?top_ans=1477743734124602",
              "extra": [
                "62 votes",
                "2 years ago"
              ]
            }
          ],
          "rank": 3,
          "global_rank": 25
        }
      ]
    },
    "oragnic": [
      {
        "link": "https://www.thekitchn.com/types-of-pizza-23665322",
        "source": "The Kitchn",
        "display_link": "https://www.thekitchn.com › ... › Main Dishes › Pizza",
        "title": "12 Best Types of Pizza Everyone Needs to Know About",
        "description": "New York-style dough frequently has sugar and oil in the recipe, which adds flavor, helps the crust brown, and makes it easier to stretch. The ...Read more",
        "snippet_highlighted_words": [
          "New York-style dough frequently has sugar and oil in the recipe"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Jun 25, 2024",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.bonappetit.com/story/best-homemade-pizza?srsltid=AfmBOoq3vbzR7ZqTK7r8PLxxSkJ0NcgOp_mhKFlgxr8mvrPvIHzsyklg",
        "source": "Bon Appétit",
        "display_link": "https://www.bonappetit.com › Cooking › Pizza",
        "title": "9 Rules for the Best Homemade Pizza OF YOUR LIFE",
        "description": "1. Store-bought Pizza Dough Is Totally Cool—If You Handle It Right · 2. You Need Two Kinds of Mozzarella · 3. Know When to Top · 4. Simple Sauce Is ...Read more",
        "snippet_highlighted_words": [
          "Store-bought Pizza Dough Is Totally Cool—If You Handle It Right"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Mar 28, 2017",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 2,
        "global_rank": 21
      },
      {
        "link": "https://www.tastingtable.com/1552373/pizza-styles-ranked-worst-best/",
        "source": "Tasting Table",
        "display_link": "https://www.tastingtable.com › Exclusives › Opinion",
        "title": "14 Pizza Styles, Ranked Worst To Best",
        "description": "The perfect pizza is crisp, not soggy, and can be eaten in a variety of settings. Above all, I want a pizza that will taste the same whether I ...Read more",
        "snippet_highlighted_words": [
          "crisp, not soggy, and can be eaten in a variety of settings"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Apr 2, 2024",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 3,
        "global_rank": 22
      }
    ]
  }
  ```
</ResponseExample>
