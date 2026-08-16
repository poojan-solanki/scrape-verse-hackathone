# Image search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/images](https://docs.brightdata.com/api-reference/serp/google-search/images)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Image Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&tbm=isch
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define search type. For Image search, set `tbm` value to `isch`

  ```http theme={null}
  https://www.google.com/search?q=pizza&tbm=isch
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&tbm=isch",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&tbm=isch"
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
        url: 'https://www.google.com/search?q=pizza&tbm=isch',
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
      'url': 'https://www.google.com/search?q=pizza&tbm=isch',
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
  ```json 200 highlight={14} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 656000000,
      "search_time": 0.28,
      "language": "en-CO",
      "country": "Colombia",
      "country_code": "CO",
      "location": "United States",
      "gl": "CO",
      "mobile": false,
      "basic_view": false,
      "search_type": "image_output",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-24T20:28:05.271Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&tbm=isch&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&aep=1&ntc=1&sa=X&ved=2ahUKEwi9pfzK-_KSAxVOe_UHHXz3CLAQ2J8OegQICRAD"
      },
      {
        "title": "All",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&hl=en&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&sa=X&ved=2ahUKEwi9pfzK-_KSAxVOe_UHHXz3CLAQ0pQJegQICxAB"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=62b03b7345eac9c6&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&q=pizza&sa=X&ved=2ahUKEwi9pfzK-_KSAxVOe_UHHXz3CLAQtKgLegQIDxAB"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=62b03b7345eac9c6&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFmzd3PgOqQPiZGQbkKtfgZKjRVM-fWbSp27mOZd-VNrvsbfJifTcov-iKLq_qwKGsmICHQsDRnG2LrYhoqkYhIypqPFo4FOivgbAwMhEGvaBpiHBPZ7uoGgmnRvbGb63LsPIFEs5NpsiXI1a_RIDq28fxm4tQ&sa=X&ved=2ahUKEwi9pfzK-_KSAxVOe_UHHXz3CLAQ0pQJegQIDhAB"
      }
    ],
    "images": [
      {
        "link": "https://www.tasteofhome.com/recipes/homemade-pizza/",
        "original_image": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg",
        "title": "Homemade Pizza Recipe: How to Make It",
        "source": "Taste of Home",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Homemade Pizza Recipe: How to Make It",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://en.wikipedia.org/wiki/Pizza",
        "original_image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
        "title": "Pizza - Wikipedia",
        "source": "Wikipedia",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Pizza - Wikipedia",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://www.tillamook.com/recipes/salami-red-onion-and-oregano-pizza",
        "original_image": "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg",
        "title": "Red Onion and Oregano Pizza - Tillamook",
        "source": "Tillamook",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Red Onion and Oregano Pizza - Tillamook",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "link": "https://www.sortirambnens.com/es/recetas/que-hacemos-en-casa/cocinar-con-ninos/segundos-platos/la-receta-de-la-pizza-de-pepperoni/",
        "original_image": "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg",
        "title": "LA RECETA DE LA PIZZA DE PEPPERONI ...",
        "source": "Sortir amb nens",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "LA RECETA DE LA PIZZA DE PEPPERONI ...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "link": "https://www.surlatable.com/recipe/perfect-pizza-dough/REC-283110?srsltid=AfmBOoqF1hpSQid6DabYdImjWsYMX5hG3GgUcdnDPSK7X0qP9Wtu-c7y",
        "original_image": "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza-jpg",
        "title": "Perfect Pizza Dough | Sur La Table",
        "source": "Sur La table",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Perfect Pizza Dough | Sur La Table",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 5,
        "global_rank": 5
      }
    ],
    "pagination": {
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&hl=en&udm=2&ei=0gmeab30Gc721e8P_O6jgAs&start=10&sa=N"
    }
  }
  ```
</ResponseExample>
