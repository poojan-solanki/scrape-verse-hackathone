# Google Search localization

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/localization](https://docs.brightdata.com/api-reference/serp/google-search/localization)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Google Search localization parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&gl=fr&hl=fr
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Two-letter country code used to define the country of search

  ```http theme={null}
  https://www.google.com/search?q=pizza&gl=fr
  ```
</ParamField>

<ParamField type="string">
  Two-letter language code used to define the page languages

  ```http theme={null}
  https://www.google.com/search?q=pizza&hl=fr
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&gl=fr&hl=fr",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&gl=fr&hl=fr"
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
        url: 'https://www.google.com/search?q=pizza&gl=fr&hl=fr',
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
      'url': 'https://www.google.com/search?q=pizza&gl=fr&hl=fr',
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
  ```json 200 highlight={7, 8} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 973000000,
      "search_time": 0.41,
      "language": "fr",
      "country": "France",
      "country_code": "FR",
      "location": "France",
      "gl": "FR",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Recherche Google",
      "timestamp": "2026-02-24T20:23:18.752Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&brd_json=1&gl=fr&hl=fr",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQtKgLegQIFhAB"
      },
      {
        "title": "Vidéos",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=7&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQtKgLegQIGBAB"
      },
      {
        "title": "Vidéos courtes",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=39&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQs6gLegQIERAB"
      },
      {
        "title": "Lieux",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=1&lsack=tAieafGYHf-c1sQP7tzSkA4&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQs6gLegQIExAB"
      },
      {
        "title": "Sites de lieux",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=11&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQs6gLegQIEBAB"
      },
      {
        "title": "Actualités",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQ0pQJegQIDhAB"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&udm=web&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&q=pizza&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQs6gLegUIhgEQAQ"
      },
      {
        "title": "Livres",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&q=pizza&udm=36&source=lnms&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpnHC5OJXXTJvmMu2n9YYx-G8xzgQk24aW1N_FyIND5zVDd4bb14119C8nZHL5l4Fe3xClku41MXRAvxO93q4ubY1l9Hk1FiCr1bfzSXqh4O7o8B1sqrSvZ-w516qcDYmxC9v7HcBaL83oJPMyLdm5H5rNhNEUKI9qKs2vP6Ws5dn2NWKQ4EexSa_t63AI4j321NjMYlQ&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQ0pQJegUIhwEQAQ"
      }
    ],
    "organic": [
      {
        "link": "https://fr.wikipedia.org/wiki/Pizza",
        "source": "Wikipédia",
        "display_link": "https://fr.wikipedia.org › wiki › Pizza",
        "title": "Pizza",
        "description": "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile ...",
        "snippet_highlighted_words": [
          "une recette de cuisine traditionnelle de la cuisine italienne"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LHIkhBM9Js037FoYdKk9hSCK8Lz1EB0RxeyS6EExOQjLb9qLPsZ3&usqp=CAE&s",
        "image_alt": "pizza sur fr.wikipedia.org",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LHIkhBM9Js037FoYdKk9hSCK8Lz1EB0RxeyS6EExOQjLb9qLPsZ3&usqp=CAE&s",
        "rank": 1,
        "global_rank": 18
      },
      {
        "link": "https://www.marmiton.org/recettes/recette_pizza-maison_313213.aspx",
        "source": "Marmiton",
        "display_link": "https://www.marmiton.org › ... › pizza",
        "title": "Recette de Pizza maison",
        "description": "Préparation de la pizza. Mettez votre four à préchauffer à 220°C. Sur votre plan de travail, étalez un peu de farine afin que la boule de colle pas.",
        "snippet_highlighted_words": [
          "Mettez votre four à préchauffer à 220°C"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 23,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNL56si-nVFxs_zeTO6q7XwUjiet_MAnn7sKNYYmjYzDOYxYm7WIc&usqp=CAE&s",
        "image_alt": "pizza sur www.marmiton.org",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNL56si-nVFxs_zeTO6q7XwUjiet_MAnn7sKNYYmjYzDOYxYm7WIc&usqp=CAE&s",
        "rank": 2,
        "global_rank": 19
      },
      {
        "link": "https://www.dominos.fr/",
        "source": "Domino's Pizza",
        "display_link": "https://www.dominos.fr",
        "title": "Domino's Pizza, livraison et à emporter, commande en ligne",
        "description": "Commandez vos pizzas en ligne en livraison ou à emporter dans votre pizzeria Domino's la plus proche et dégustez-les en famille ou avec vos amis.",
        "snippet_highlighted_words": [
          "Commandez vos pizzas en ligne en livraison ou à emporter"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "image_alt": "pizza sur www.dominos.fr",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "rank": 3,
        "global_rank": 20
      },
      {
        "link": "https://www.youtube.com/watch?v=WVrdUC-92-w",
        "source": "YouTube · Julie Andrieu - Chaîne officielle",
        "display_link": "Plus de 60 k vues · il y a 2 ans",
        "title": "Pizza maison - 10 leçons pour la réussir",
        "description": "00:00 - Introduction 00:30 - Leçon 1 : Choisir les bons ingrédients : farine, eau, levure fraîche 01:57 - Leçon 2 : Préparez un levain ...",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNUtVRdhbjy1RctOwPWDoIcBixJcr0uIZ585eJyl0lkTLyhUXGt7gXA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNUtVRdhbjy1RctOwPWDoIcBixJcr0uIZ585eJyl0lkTLyhUXGt7gXA&s",
        "duration": "8:51",
        "duration_sec": 531,
        "rank": 4,
        "global_rank": 24
      },
      {
        "link": "https://cuisine.journaldesfemmes.fr/recette-pizza",
        "source": "Journal des Femmes",
        "display_link": "https://cuisine.journaldesfemmes.fr › recette-pizza",
        "title": "Pizza maison : recettes faciles et savoureuses",
        "description": "Pizza : Meilleures recettes · Pizza chèvre, figues, pistaches et miel · Pizza blanche au saumon fumé et à la cancoillotte · Pizza au salami de Milano et chorizo.",
        "snippet_highlighted_words": [
          "Pizza : Meilleures recettes"
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
        "rank": 5,
        "global_rank": 25
      },
      {
        "link": "https://www.pizzahut.fr/",
        "source": "Pizza Hut",
        "display_link": "https://www.pizzahut.fr",
        "title": "Pizza Hut Livraison, vente à emporter | Commande en ligne ...",
        "description": "Pizza Hut Livraison, vente à emporter | Commande en ligne | Coupons, Promos.",
        "snippet_highlighted_words": [
          "Pizza Hut Livraison, vente à emporter"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 6,
        "global_rank": 26
      },
      {
        "link": "https://www.youtube.com/@lafrenchpizza",
        "source": "YouTube · La French Pizza",
        "display_link": "Plus de 39,6 k abonnés",
        "title": "La French Pizza",
        "description": "Recette · HOW TO MAKE NEAPOLITAN PIZZA DOUGH? | Special for beginners and without equipment · HOW TO ROLL OUT PIZZA DOUGH? By hand, without a rolling pin!",
        "snippet_highlighted_words": [
          "HOW TO MAKE NEAPOLITAN PIZZA DOUGH"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "rank": 7,
        "global_rank": 27
      },
      {
        "link": "https://www.picard.fr/rayons/pizzas-et-tartes",
        "source": "Picard",
        "display_link": "https://www.picard.fr › rayons › pizzas-et-tartes",
        "title": "Pizzas et tartes",
        "description": "Picard vous propose un assortiment de pizzas et de tartes salées pour toute la famille. Elles se déclinent en formats ronds, carrés, individuels ou à partager.",
        "snippet_highlighted_words": [
          "Picard vous propose un assortiment de pizzas et de tartes salées pour toute la famille"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 8,
        "global_rank": 28
      },
      {
        "link": "https://www.la-bella-pizza.fr/",
        "source": "LA BELLA PIZZA MARSEILLE",
        "display_link": "https://www.la-bella-pizza.fr",
        "title": "LA BELLA PIZZA MARSEILLE",
        "description": "26, PLACE NOTRE-DAME-DU-MONT MARSEILLE 6E ... C'EST LE GOÛT AUTHENTIQUE DE LA PIZZA AU FEU DE BOIS D'ANTAN, À LA TOMATE FRAÎCHE AU HACHOIR, À L'AIL ET À L'ORIGAN.",
        "snippet_highlighted_words": [
          "26, PLACE NOTRE-DAME-DU-MONT MARSEILLE 6E"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-I-7kBDNQ_svH12luxlkSyqHjYidZJcEsTO9qcE3nFKWsFZU9vS&usqp=CAE&s",
        "image_alt": "pizza sur www.la-bella-pizza.fr",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-I-7kBDNQ_svH12luxlkSyqHjYidZJcEsTO9qcE3nFKWsFZU9vS&usqp=CAE&s",
        "rank": 9,
        "global_rank": 29
      },
      {
        "link": "https://www.hervecuisine.com/recette/recette-de-pizzas-facile/",
        "source": "Hervé Cuisine",
        "display_link": "https://www.hervecuisine.com › Recettes",
        "title": "Recette de pizza italienne maison facile en vidéo",
        "description": "Liste des ingrédients · 2 Oignons · 2 gousses d'ail · 300 ml de passata ou coulis de tomate · 1 cuil. à café d'herbes de Provence (thym, origan, ...",
        "snippet_highlighted_words": [
          "Liste des ingrédients"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "24 mars 2020",
            "rank": 1
          },
          {
            "type": "rating",
            "rating": 4.5,
            "reviews_cnt": 122,
            "rank": 2
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPFVxX3bZycyrJXnGa-6STq-fY-jdqukKprM7EZCuJgEIq1Cm7CvS&usqp=CAE&s",
        "image_alt": "pizza sur www.hervecuisine.com",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPFVxX3bZycyrJXnGa-6STq-fY-jdqukKprM7EZCuJgEIq1Cm7CvS&usqp=CAE&s",
        "rank": 10,
        "global_rank": 30
      }
    ],
    "knowledge": {
      "name": "Pizza",
      "summary": "Pain",
      "subtitle": "Pain",
      "description": "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four.",
      "description_source": "Wikipédia",
      "description_link": "https://fr.wikipedia.org/wiki/Pizza",
      "images": [
        {
          "image": "data:image/webp;base64,UklGRuQWAABXRUJQVlA4INgWAACwag...",
          "image_alt": "Image de Pizza maison à la friteuse à air – Parfaitement ...",
          "image_base64": "data:image/webp;base64,UklGRuQWAABXRUJQVlA4INgWAACwag..."
        },
        {
          "image": "data:image/webp;base64,UklGRkAIAABXRUJQVlA4IDQIAAAwLw...",
          "image_alt": "Image de Pizza Parma",
          "image_base64": "data:image/webp;base64,UklGRkAIAABXRUJQVlA4IDQIAAAwLw..."
        },
        {
          "image": "data:image/webp;base64,UklGRgoKAABXRUJQVlA4IP4JAADwNg...",
          "image_alt": "Image de Pizza Piccante | Oil & Vinegar",
          "image_base64": "data:image/webp;base64,UklGRgoKAABXRUJQVlA4IP4JAADwNg..."
        }
      ],
      "facts": [
        {
          "key": "Origine",
          "predicate": "hw:/collection/dishes:origin",
          "value": [
            {
              "text": "Italie",
              "link": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&q=Italie&si=AL3DRZHmwLjWhgnaPB3UTu10R6S5qNLXiQiKMeezfKyB1FMsRh4OGAJvOSklPiUalZSIgao4QqW76hqPIFuzQ7v7azf6k5fxmXNe-rtMqCs_t8NhvbAYJTVcpsAfehVTA_xRncYUE2DOj4YepnYp33la15xAXe361JXX31pqgLu0p6tOh_lc4hCW414ZieHhjAACQXtdol9-&sa=X&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQmxN6BAgbEAI"
            }
          ]
        }
      ],
      "nutrition_facts": {
        "product": "Pizza, 36 cm, pâte moyenne",
        "source": "USDA",
        "source_link": "https://fdc.nal.usda.gov/food-details/173292/nutrients",
        "calories": "266 Calories",
        "portion": "100 grammes"
      }
    },
    "overview": {
      "title": "Pizza",
      "kgmid": "/m/0663v"
    },
    "snack_pack_map": {
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA...",
      "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAA..."
    },
    "snack_pack": [
      {
        "name": "Pizza Time® Amiens",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAA...",
        "reviews_cnt": 45,
        "type": "Pizza",
        "address": "Repas sur place ⋅ Vente à emporter ⋅ Livraison sans contact ⋅ Site Web",
        "tags": [
          "Amiens"
        ],
        "site": "https://pizzatime.fr/",
        "rank": 1,
        "global_rank": 1
      },
      {
        "name": "La Maison des Pizzas",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "reviews_cnt": 44,
        "type": "Pizza",
        "address": "Repas sur place ⋅ Vente à emporter ⋅ Pas de livraison ⋅ Site Web",
        "tags": [
          "Saint-Florent"
        ],
        "site": "https://webshop.fulleapps.io/s/maison-des-pizzas/mja1ntcyxzy2ngm",
        "rank": 2,
        "global_rank": 2
      },
      {
        "name": "Allo Pizza",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4Q...",
        "reviews_cnt": 47,
        "type": "Pizza",
        "address": "Repas sur place ⋅ Vente à emporter ⋅ Livraison ⋅ Site Web",
        "tags": [
          "Gannat"
        ],
        "site": "https://allo-pizza-gannat.fr/",
        "rank": 3,
        "global_rank": 3
      },
      {
        "name": "La Casa Del Pizz 🍕",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepv8l9gqqDsx5bJ1Yk4RjzllN-XMC5FlN5EV88fS4WI1lp9VQwuWKl9lNNWy-UOv8ui5DMS7t3klKtc1yiEUrIcny1EJ-sv1CFKZhQczZEW8AelbUOs3w8frO5pTKzZ_PMZCUFTndzLsC0=w92-h92-n-k-no",
        "image_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepv8l9gqqDsx5bJ1Yk4RjzllN-XMC5FlN5EV88fS4WI1lp9VQwuWKl9lNNWy-UOv8ui5DMS7t3klKtc1yiEUrIcny1EJ-sv1CFKZhQczZEW8AelbUOs3w8frO5pTKzZ_PMZCUFTndzLsC0=w92-h92-n-k-no",
        "reviews_cnt": 50,
        "type": "Pizza",
        "work_status": "Ferme bientôt",
        "work_status_details": "21:30",
        "address": "Saint-Julien-le-Pèlerin",
        "rank": 4,
        "global_rank": 21
      },
      {
        "name": "Pizzeria \"The Giorgi's\"",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerlK7DGPIKCqOf0elgQc9JiIsxJeCtJVaFt-gOZ2zSlfivqjQAcszTvwu6XgBo88huXlmG9tfzAE69IA2ENFTjT0hGzZzd51EAGe7xqa6E9PrmPohuS10jw_e1_iSPkBbYBdss=w92-h92-n-k-no",
        "image_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerlK7DGPIKCqOf0elgQc9JiIsxJeCtJVaFt-gOZ2zSlfivqjQAcszTvwu6XgBo88huXlmG9tfzAE69IA2ENFTjT0hGzZzd51EAGe7xqa6E9PrmPohuS10jw_e1_iSPkBbYBdss=w92-h92-n-k-no",
        "reviews_cnt": 49,
        "type": "Pizza",
        "work_status": "Ferme bientôt",
        "work_status_details": "22:00",
        "address": "La Bourboule, Repas sur place ⋅ Vente à emporter ⋅ Pas de livraison ⋅ Site Web",
        "site": "https://m.facebook.com/p/The-Giorgis-100079622973292/",
        "rank": 5,
        "global_rank": 22
      },
      {
        "name": "Mister Pizza -Nice Barla",
        "image": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepbbc8H391PfVftgmxxarUE5zevNpL3rBmT7PR1qqdlj9SS51tirt2LfZ-m6_kWnFxPOL81twrspJ1to64UUyv5FrofE4qFT20rXLa3VjH8IIgfJ_ej9LHxF4JYfNM4n9ESf9Q=w92-h92-n-k-no",
        "image_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepbbc8H391PfVftgmxxarUE5zevNpL3rBmT7PR1qqdlj9SS51tirt2LfZ-m6_kWnFxPOL81twrspJ1to64UUyv5FrofE4qFT20rXLa3VjH8IIgfJ_ej9LHxF4JYfNM4n9ESf9Q=w92-h92-n-k-no",
        "reviews_cnt": 40,
        "type": "Pizza",
        "address": "Repas sur place ⋅ Vente à emporter ⋅ Livraison ⋅ Site Web",
        "tags": [
          "Nice"
        ],
        "site": "http://www.mister-pizza.com/",
        "rank": 6,
        "global_rank": 23
      }
    ],
    "pagination": [
      {
        "page": 2,
        "start": 10,
        "link": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&ei=tAieafGYHf-c1sQP7tzSkA4&start=10&sa=N&sstk=Af77f_cmD63hekmmnSSJPoXn1kdGehHJb1HbjLnOhIejeXAmILfZ4CiNxm-7n1A1lx7ZmrOJOMny3zsTqoN1okjJiF0_OWJ7ioddcg&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQ8tMDegQICRAE"
      },
      {
        "page": 3,
        "start": 20,
        "link": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&ei=tAieafGYHf-c1sQP7tzSkA4&start=20&sa=N&sstk=Af77f_cmD63hekmmnSSJPoXn1kdGehHJb1HbjLnOhIejeXAmILfZ4CiNxm-7n1A1lx7ZmrOJOMny3zsTqoN1okjJiF0_OWJ7ioddcg&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQ8tMDegQICRAG"
      },
      {
        "page": 4,
        "start": 30,
        "link": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&gl=fr&hl=fr&ei=tAieafGYHf-c1sQP7tzSkA4&start=30&sa=N&sstk=Af77f_cmD63hekmmnSSJPoXn1kdGehHJb1HbjLnOhIejeXAmILfZ4CiNxm-7n1A1lx7ZmrOJOMny3zsTqoN1okjJiF0_OWJ7ioddcg&ved=2ahUKEwjxws_C-vKSAxV_jpUCHW6uFOIQ8tMDegQICRAI"
      }
    ],
    "related": [
      {
        "text": "Pizzas : Pizzas, Quiches et Tartes pas cher en Livraison et Drive",
        "link": "https://www.carrefour.fr/r/surgeles/pizzas-quiches-tartes/pizzas",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 4
      },
      {
        "text": "Super Recettes. . Pizza maison aux petits pains : recette facile pour ne plus en acheter",
        "link": "https://www.facebook.com/superrecettess/videos/pizza-maison-aux-petits-pains-recette-facile-pour-ne-plus-en-acheter/919698497110327/",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 5
      },
      {
        "text": "Pizzas à Emporter et en Livraison à Domicile à Saint-Étienne",
        "link": "https://www.ubereats.com/fr/category/saint-%C3%A9tienne-ara/pizza",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 6
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
        "global_rank": 14
      },
      {
        "question": "Quelle est la pizza la plus digeste ?",
        "question_type": "featured",
        "answer_source": "Ducreux",
        "answer_link": "https://www.ducreux-cfi.com/quest-ce-que-la-pinsa-romana/#:~:text=Pourquoi%20la%20pinsa%20est%2Delle,rendant%20la%20p%C3%A2te%20plus%20tol%C3%A9rable.",
        "answer_display_link": "https://www.ducreux-cfi.com › quest-ce-que-la-pinsa-ro...https://www.ducreux-cfi.com › quest-ce-que-la-pinsa-ro...",
        "answers": [
          {
            "type": "exact_answer",
            "title": "pinsa",
            "rank": 1
          },
          {
            "type": "answer",
            "value": {
              "text": "Pourquoi la pinsa est-elle plus digeste que la pizza traditionnelle ? La haute digestibilité de la pinsa repose sur plusieurs facteurs : La fermentation longue permet de prédigérer les sucres complexes, rendant la pâte plus tolérable."
            },
            "rank": 2
          }
        ],
        "rank": 2,
        "global_rank": 15
      },
      {
        "question": "Quel ordre pour garnir une pizza ?",
        "question_type": "featured",
        "answer_source": "Envie de Bien Manger",
        "answer_link": "https://www.enviedebienmanger.fr/conseils-cuisine/comment-faire-les-pizzas-maison-de-la-pate-a-la-cuisson-de-la-pizza#:~:text=Quelques%20conseils%20pour%20garnir%20votre%20pizza%20%3A&text=Prenez%20%C3%A9galement%20soin%20de%20respecter,et%20ensuite%20les%20autres%20ingr%C3%A9dients.",
        "answer_display_link": "https://www.enviedebienmanger.fr › conseils-cuisine › c...https://www.enviedebienmanger.fr › conseils-cuisine › c...",
        "answers": [
          {
            "type": "answer",
            "value": {
              "text": "Quelques conseils pour garnir votre pizza : Prenez également soin de respecter l'ordre des ingrédients : d'abord la base (coulis de tomates, crème fraiche, ou huile d'olive) puis la mozzarella (de vache) ou du provolone, et ensuite les autres ingrédients."
            },
            "rank": 1
          }
        ],
        "rank": 3,
        "global_rank": 16
      },
      {
        "question": "Quelle est la meilleure pâte pour faire une pizza ?",
        "question_type": "featured",
        "answer_source": "Pizza Papa",
        "answer_link": "https://www.pizzapapa.fr/blog/quelle-pate-a-pizza-choisir/#:~:text=La%20p%C3%A2te%20feuillet%C3%A9e%20pour%20innover,pizzas%20pour%20un%20ap%C3%A9ritif%20dinatoire.",
        "answer_display_link": "https://www.pizzapapa.fr › blog › quelle-pate-a-pizza-ch...https://www.pizzapapa.fr › blog › quelle-pate-a-pizza-ch...",
        "answers": [
          {
            "type": "answer",
            "value": {
              "text": "La pâte feuilletée pour innover La pâte feuilletée est idéale pour réaliser une pizza plus originale. Elle apporte une touche de légèreté et croustille bien. Elle est recommandée si vous préparez des pizzas pour un apéritif dinatoire.11 juil. 2025"
            },
            "rank": 1
          }
        ],
        "rank": 4,
        "global_rank": 17
      }
    ],
    "oragnic": [
      {
        "link": "https://fr.wikipedia.org/wiki/Pizza",
        "source": "Wikipédia",
        "display_link": "https://fr.wikipedia.org › wiki › Pizza",
        "title": "Pizza",
        "description": "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'huile ...",
        "snippet_highlighted_words": [
          "une recette de cuisine traditionnelle de la cuisine italienne"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LHIkhBM9Js037FoYdKk9hSCK8Lz1EB0RxeyS6EExOQjLb9qLPsZ3&usqp=CAE&s",
        "image_alt": "pizza sur fr.wikipedia.org",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LHIkhBM9Js037FoYdKk9hSCK8Lz1EB0RxeyS6EExOQjLb9qLPsZ3&usqp=CAE&s",
        "rank": 1,
        "global_rank": 18
      },
      {
        "link": "https://www.marmiton.org/recettes/recette_pizza-maison_313213.aspx",
        "source": "Marmiton",
        "display_link": "https://www.marmiton.org › ... › pizza",
        "title": "Recette de Pizza maison",
        "description": "Préparation de la pizza. Mettez votre four à préchauffer à 220°C. Sur votre plan de travail, étalez un peu de farine afin que la boule de colle pas.",
        "snippet_highlighted_words": [
          "Mettez votre four à préchauffer à 220°C"
        ],
        "extensions": [
          {
            "type": "rating",
            "rating": 5,
            "reviews_cnt": 23,
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNL56si-nVFxs_zeTO6q7XwUjiet_MAnn7sKNYYmjYzDOYxYm7WIc&usqp=CAE&s",
        "image_alt": "pizza sur www.marmiton.org",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNL56si-nVFxs_zeTO6q7XwUjiet_MAnn7sKNYYmjYzDOYxYm7WIc&usqp=CAE&s",
        "rank": 2,
        "global_rank": 19
      },
      {
        "link": "https://www.dominos.fr/",
        "source": "Domino's Pizza",
        "display_link": "https://www.dominos.fr",
        "title": "Domino's Pizza, livraison et à emporter, commande en ligne",
        "description": "Commandez vos pizzas en ligne en livraison ou à emporter dans votre pizzeria Domino's la plus proche et dégustez-les en famille ou avec vos amis.",
        "snippet_highlighted_words": [
          "Commandez vos pizzas en ligne en livraison ou à emporter"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "image_alt": "pizza sur www.dominos.fr",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf5qNZRvb7AOasK4bkZVf43P-y-6lDa_eBaxgXGw3BuqKmU5ictBb&usqp=CAE&s",
        "rank": 3,
        "global_rank": 20
      }
    ]
  }
  ```
</ResponseExample>
