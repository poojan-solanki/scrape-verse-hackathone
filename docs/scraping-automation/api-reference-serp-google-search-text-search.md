# Google Search text search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/text-search](https://docs.brightdata.com/api-reference/serp/google-search/text-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Google Search text search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```Example theme={null}
https://www.google.com/search?q=pizza
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.

  ```Example theme={null}
  https://www.google.com/search?q=pizza
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza"
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
        url: 'https://www.google.com/search?q=pizza',
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
      'url': 'https://www.google.com/search?q=pizza',
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
  ```json 200 highlight={4} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 973000000,
      "search_time": 0.46,
      "language": "en-FR",
      "country": "France",
      "country_code": "FR",
      "location": "United States",
      "gl": "FR",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-24T20:05:07.171Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&q=pizza&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQtKgLegQIHxAB"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&q=pizza&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQtKgLegQIHhAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&q=pizza&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQs6gLegQIGhAB"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ0pQJegQIGBAB"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&q=pizza&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQs6gLegQIFxAB"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=pizza&udm=36&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ0pQJegQIFhAB"
      },
      {
        "title": "Finance",
        "href": "https://www.google.com/finance?sca_esv=016f34706b28a015&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3vWUtYx0DZdicpfE1faGYenqWn-q4MFiFFtvJjTKeAVxZj_-zzAfU38gMel7zJW-zoNwHG-ArsO6TrTEJcFsob0pdGO2ABo8o_HC5yJWwFB_-GDw4ME9hn952oqoD4-m1e6t3rE&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ0pQJegQIexAB"
      }
    ],
    "organic": [
      {
        "link": "https://fr.wikipedia.org/wiki/Pizza",
        "source": "Wikipédia",
        "display_link": "https://fr.wikipedia.org › wiki › Pi...",
        "title": "Pizza",
        "description": "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement ...Read more",
        "snippet_highlighted_words": [
          "pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from fr.wikipedia.org",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.marmiton.org/recettes/recette_pizza-maison_313213.aspx",
        "source": "Marmiton",
        "display_link": "https://www.marmiton.org › recettes",
        "title": "Recette de Pizza maison",
        "description": "Partager la recette · Étape 1. Dans un saladier, placez les 300 g de farine, puis la levure, puis le bicarbonate de soude, la pincée de sel et celle de poivre.Read more",
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 23,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://cuisine.journaldesfemmes.fr/recette-pizza",
        "source": "Journal des Femmes",
        "display_link": "https://cuisine.journaldesfemmes.fr › ...",
        "title": "Pizza maison : recettes faciles et savoureuses",
        "description": "Pizza : Meilleures recettes · Pizza chèvre, figues, pistaches et miel · Pizza blanche au saumon fumé et à la cancoillotte · Pizza au salami de Milano et chorizo.Read more",
        "snippet_highlighted_words": [
          "Pizza",
          "Pizza",
          "Pizza",
          "Pizza"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 4.3,
            "reviews_cnt": 96,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "link": "https://www.pizzahut.fr/",
        "source": "Pizza Hut",
        "display_link": "https://www.pizzahut.fr",
        "title": "Pizza Hut Livraison, vente à emporter | Commande en ligne ...",
        "description": "Pizza Hut Livraison, vente à emporter | Commande en ligne | Coupons, Promos.",
        "snippet_highlighted_words": [
          "Pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "link": "https://www.dominos.fr/",
        "source": "Domino's Pizza",
        "display_link": "https://www.dominos.fr",
        "title": "Domino's Pizza, livraison et à emporter, commande en ligne",
        "description": "Commandez vos pizzas en ligne en livraison ou à emporter dans votre pizzeria Domino's la plus proche et dégustez-les en famille ou avec vos amis.",
        "snippet_highlighted_words": [
          "pizzas",
          "pizzeria"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "image_alt": "pizza from www.dominos.fr",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "rank": 5,
        "global_rank": 9
      },
      {
        "link": "https://www.galbani.fr/recettes/pizza",
        "source": "Galbani",
        "display_link": "https://www.galbani.fr › recettes",
        "title": "Recettes de Pizza à l'italienne et revisitées",
        "description": "Choisissez parmi nos nombreuses recettes de pizza vos préférées et savourez en famille ou entre amis de délicieux plat à l'italienne. Simple, rapide et bon ...",
        "snippet_highlighted_words": [
          "pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 6,
        "global_rank": 10
      },
      {
        "link": "https://www.pizzapapa.fr/blog/origine-pizza/",
        "source": "pizzapapa.fr",
        "display_link": "https://www.pizzapapa.fr › blog",
        "title": "Qui a inventé la pizza ? Histoire & origine de la pizza",
        "description": "Actuellement, la pizza est une recette emblématique de la cuisine italienne qui s'est internationalisée avec l'immigration.Read more",
        "snippet_highlighted_words": [
          "pizza"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "26 Sept 2025",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 7,
        "global_rank": 11
      },
      {
        "link": "https://lacuisinedannie.20minutes.fr/recette-pate-a-pizza-234.html",
        "source": "La Cuisine d'Annie",
        "display_link": "https://lacuisinedannie.20minutes.fr › ...",
        "title": "Recette Pâte à pizza",
        "description": "Recette Pâte à pizza. Recette de Pains et pâtes de base, Pâtes de base pour 6 personnes. Le temps de préparation est de 15 min. La Cuisine d'Annie regroupe ...",
        "snippet_highlighted_words": [
          "pizza"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 381,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 8,
        "global_rank": 12
      },
      {
        "link": "https://www.picard.fr/rayons/pizzas-et-tartes/pizzas",
        "source": "Picard",
        "display_link": "https://www.picard.fr › rayons › p...",
        "title": "Livraison de Pizzas surgelées à domicile",
        "description": "Découvrez toutes nos pizzas surgelées Picard : les pizzas traditionnelles, bio ou végétariennes sont disponibles dans tous les magasins Picard, ...",
        "snippet_highlighted_words": [
          "pizzas",
          "pizzas"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 9,
        "global_rank": 13
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
          "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
          "image_alt": "Image of Homemade Pizza Recipe: How to Make It",
          "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
        },
        {
          "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
          "image_alt": "Image of Pizza maison à la friteuse à air – Parfaitement ...",
          "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
        },
        {
          "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
          "image_alt": "Image of Tomato and Mozzarella Pizza Recipe",
          "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w..."
        }
      ],
      "facts": [
        {
          "key": "Origin",
          "predicate": "hw:/collection/dishes:origin",
          "value": [
            {
              "text": "Italy",
              "link": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=Italy&si=AL3DRZHmwLjWhgnaPB3UTu10R6S5qNLXiQiKMeezfKyB1FMsRgvMc15_a-XCDquvg02EcLVCDOBlFWcyGM1h_GEvApLCUHB4TbGV9DLLN_L5HXDRSM_AM0JjmkKGPEEkyRjAEOMkP_wbp9U4-YKGn63yz0_QGqKXGf1bKFT4vVVVz2XMsjUuOZt4AnSHQk-nDBQE0oBKvh4m&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQmxN6BAgQEAI"
            }
          ]
        }
      ],
      "nutrition_facts": {
        "product": "Pizza, 14\" regular crust",
        "source": "USDA",
        "source_link": "https://fdc.nal.usda.gov/food-details/173292/nutrients",
        "calories": "266 Calories",
        "portion": "100 grams"
      }
    },
    "overview": {
      "title": "Pizza",
      "kgmid": "/m/0663v"
    },
    "pagination": [
      {
        "page": 2,
        "start": 10,
        "link": "https://www.google.com/search?q=pizza&sca_esv=016f34706b28a015&hl=en&ei=bgSeaeHvJ_jYkdUP3e2DiAs&start=10&sa=N&sstk=Af77f_f_V2-MUys3284KigNlKSrRMuK2FycXBqPmoWealtPGblbQ6fG6nmOOnuTsIXX5La3IjQVKZgmp72693C-TVdrhH0fPkJks7A&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ8tMDegQICBAE"
      },
      {
        "page": 3,
        "start": 20,
        "link": "https://www.google.com/search?q=pizza&sca_esv=016f34706b28a015&hl=en&ei=bgSeaeHvJ_jYkdUP3e2DiAs&start=20&sa=N&sstk=Af77f_f_V2-MUys3284KigNlKSrRMuK2FycXBqPmoWealtPGblbQ6fG6nmOOnuTsIXX5La3IjQVKZgmp72693C-TVdrhH0fPkJks7A&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ8tMDegQICBAG"
      },
      {
        "page": 4,
        "start": 30,
        "link": "https://www.google.com/search?q=pizza&sca_esv=016f34706b28a015&hl=en&ei=bgSeaeHvJ_jYkdUP3e2DiAs&start=30&sa=N&sstk=Af77f_f_V2-MUys3284KigNlKSrRMuK2FycXBqPmoWealtPGblbQ6fG6nmOOnuTsIXX5La3IjQVKZgmp72693C-TVdrhH0fPkJks7A&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ8tMDegQICBAI"
      }
    ],
    "related": [
      {
        "text": "Pizza recette",
        "link": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=Pizza+recette&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ1QJ6BAhLEAE",
        "rank": 1,
        "global_rank": 14
      },
      {
        "text": "Pizza Hut",
        "link": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=Pizza+Hut&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ1QJ6BAhhEAE",
        "rank": 2,
        "global_rank": 15
      },
      {
        "text": "Pizza Yolo",
        "link": "https://www.google.com/search?sca_esv=016f34706b28a015&hl=en&q=Pizza+Yolo&sa=X&ved=2ahUKEwjh3oW59vKSAxV4bKQEHd32ALEQ1QJ6BAhgEAE",
        "rank": 3,
        "global_rank": 16
      }
    ],
    "people_also_ask": [
      {
        "question": "Quel ingrédient mettre sur une pizza ?",
        "question_link": "https://www.jesuisgastronome.fr/actu/273/la-liste-des-quinze-meilleurs-ingredients-pour-une-pizza",
        "question_type": "featured",
        "answer_source": "JeSuisGastronome.fr",
        "answer_link": "https://www.jesuisgastronome.fr/actu/273/la-liste-des-quinze-meilleurs-ingredients-pour-une-pizza",
        "answer_display_link": "https://www.jesuisgastronome.fr › actu › la-liste-des-quin...https://www.jesuisgastronome.fr › actu › la-liste-des-quin...",
        "answers": [
          {
            "type": "unordered_list",
            "title": "La liste des quinze meilleurs ingrédients pour une pizza",
            "items": [
              {
                "value": "- Le mozzarella fondant.",
                "rank": 1
              },
              {
                "value": "- La fraîcheur du basilic.",
                "rank": 2
              },
              {
                "value": "- L'authentique jambon de Parme.",
                "rank": 3
              },
              {
                "value": "- Le piquant des olives noires.",
                "rank": 4
              },
              {
                "value": "- Apprécier l'anchois salé",
                "rank": 5
              },
              {
                "value": "- Déguster les champignons frais.",
                "rank": 6
              },
              {
                "value": "- Aimer la roquette croquante.",
                "rank": 7
              },
              {
                "value": "- Savourer le saucisson épicé",
                "rank": 8
              }
            ],
            "rank": 1
          }
        ],
        "rank": 1,
        "global_rank": 5
      }
    ],
    "oragnic": [
      {
        "link": "https://fr.wikipedia.org/wiki/Pizza",
        "source": "Wikipédia",
        "display_link": "https://fr.wikipedia.org › wiki › Pi...",
        "title": "Pizza",
        "description": "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement ...Read more",
        "snippet_highlighted_words": [
          "pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "pizza from fr.wikipedia.org",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.marmiton.org/recettes/recette_pizza-maison_313213.aspx",
        "source": "Marmiton",
        "display_link": "https://www.marmiton.org › recettes",
        "title": "Recette de Pizza maison",
        "description": "Partager la recette · Étape 1. Dans un saladier, placez les 300 g de farine, puis la levure, puis le bicarbonate de soude, la pincée de sel et celle de poivre.Read more",
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 23,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://cuisine.journaldesfemmes.fr/recette-pizza",
        "source": "Journal des Femmes",
        "display_link": "https://cuisine.journaldesfemmes.fr › ...",
        "title": "Pizza maison : recettes faciles et savoureuses",
        "description": "Pizza : Meilleures recettes · Pizza chèvre, figues, pistaches et miel · Pizza blanche au saumon fumé et à la cancoillotte · Pizza au salami de Milano et chorizo.Read more",
        "snippet_highlighted_words": [
          "Pizza",
          "Pizza",
          "Pizza",
          "Pizza"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 4.3,
            "reviews_cnt": 96,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 3,
        "global_rank": 3
      }
    ]
  }
  ```
</ResponseExample>
