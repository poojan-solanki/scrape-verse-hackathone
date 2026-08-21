# Products

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-lens/products](https://docs.brightdata.com/api-reference/serp/google-lens/products)
> **Category**: `scraping-automation`

---

Reference for the Bright Data Google Lens Products parameter. Refines queries and returns matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products
```

## Parameters

<ParamField type="query">
  URL of image you want to search
</ParamField>

<ParamField type="string">
  The `brd_lens` parameter in your request fetches specific Google Lens **tab results** by specifying a tab value (e.g. `products`, `homework`, `visual_matches`, `exact_matches`).

  ```txt wrap theme={null}
  https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products"
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
        url: 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products',
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
      'url': 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=products',
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
  ```json 200 theme={null}
  {
    "general": {
      "language": "en-AR",
      "mode": "search",
      "type": "all"
    },
    "tabs": [
      {
        "name": "AI Mode",
        "link": "https://www.google.com/search?sca_esv=2dc65c8cbd5d287b&lns_surface=26&hl=en&udm=50&vsrid=CMKUncyTyreC-QEQAhgBIiRkODk3MGI4MC1jMTMzLTRjOTEtYjE4My1mYWMzMjdjMWFhOTMyBiICY2coCjjV7f7D9vySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=iyuSUvhA6gPxqXtV7-kWdx271odwkq52yC_ZQadCLcsOiJt-udofqA&lsessionid=j-5aVB4uWbzMVnMov8kPD0zsJOqrvTRbwGvIZDr4E-UxmI7_r6L2NA&fbs=ADc_l-Yv0YTTwuvIVYRVntg99Yl4C2siJayzZyC50sFnWwRH6ow_bxUxJgqfeyXucYwXL8BodgQvcQKf4r6af6eJrUBEJPcPla2xArZ4O2zHdIqqQ1YVgeUF-eZ8YfKEFkJDuGVjK7bY&q=&aep=1&ntc=1&sa=X&ved=2ahUKEwiRuIDF9vySAxU7npUCHcrTGNsQ2J8OegQIDxAD"
      },
      {
        "name": "All",
        "type": "all",
        "selected": true
      },
      {
        "name": "Exact matches",
        "type": "exact_matches",
        "link": "https://www.google.com/search?sca_esv=2dc65c8cbd5d287b&lns_surface=26&hl=en&udm=48&vsrid=CMKUncyTyreC-QEQAhgBIiRkODk3MGI4MC1jMTMzLTRjOTEtYjE4My1mYWMzMjdjMWFhOTMyBiICY2coCjjV7f7D9vySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=iyuSUvhA6gPxqXtV7-kWdx271odwkq52yC_ZQadCLcsOiJt-udofqA&lsessionid=j-5aVB4uWbzMVnMov8kPD0zsJOqrvTRbwGvIZDr4E-UxmI7_r6L2NA&vsrid=CMKUncyTyreC-QEQAhgBIiQ3ZTEzNGQ4Zi1hMTU2LTQ5ZmEtYmJiZC0zZWY2Yzc0MGMxNjQyBiICY2coCjjV7f7D9vySA1AA&q=&sa=X&ved=2ahUKEwiRuIDF9vySAxU7npUCHcrTGNsQs6gLegQIEhAB"
      },
      {
        "name": "Visual matches",
        "type": "visual_matches",
        "link": "https://www.google.com/search?sca_esv=2dc65c8cbd5d287b&lns_surface=26&hl=en&udm=44&vsrid=CMKUncyTyreC-QEQAhgBIiRkODk3MGI4MC1jMTMzLTRjOTEtYjE4My1mYWMzMjdjMWFhOTMyBiICY2coCjjV7f7D9vySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=iyuSUvhA6gPxqXtV7-kWdx271odwkq52yC_ZQadCLcsOiJt-udofqA&lsessionid=j-5aVB4uWbzMVnMov8kPD0zsJOqrvTRbwGvIZDr4E-UxmI7_r6L2NA&q=&sa=X&ved=2ahUKEwiRuIDF9vySAxU7npUCHcrTGNsQs6gLegQIERAB"
      },
      {
        "name": "About this image",
        "type": "about",
        "link": "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAAFMALP_IkoKSAjClJ3Mk8q3gvkBEAIYASIkZDg5NzBiODAtYzEzMy00YzkxLWIxODMtZmFjMzI3YzFhYTkzMgYiAmNnKAo41e3-w_b8kgNQAP3h16dMAAAA&sa=X&ved=2ahUKEwiRuIDF9vySAxU7npUCHcrTGNsQs6gLegQIExAB"
      },
      {
        "name": "Feedback",
        "link": "https://www.google.com#"
      }
    ],
    "images": [
      {
        "title": "YouTube | Memespedia | Fandom",
        "link": "https://meme.fandom.com/es/wiki/YouTube",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Fandom",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAA...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "title": "App YouTube - App Store",
        "link": "https://apps.apple.com/us/app/youtube/id544007664?l=es-MX&platform=tv",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Apple",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAA...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "title": "Archivo:YouTube Logo (2013-2017).svg - Wikipedia, la ...",
        "link": "https://es.wikipedia.org/wiki/Archivo:YouTube_Logo_(2013-2017).svg",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Wikipedia",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAA...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "title": "YouTube se actualiza - YouTube",
        "link": "https://www.youtube.com/watch?v=F1nq3JfbFgQ",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "YouTube",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAA...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "title": "Universidad del Cine",
        "link": "https://ucine.edu.ar/actividades/youtube-summer-camp-2020",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAA...",
        "source": "Universidad del Cine",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAA...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "title": "Qué logo de YouTube es mejor? : r/youtube",
        "link": "https://www.reddit.com/r/youtube/comments/1d4y2s0/which_youtube_logo_is_better/?tl=es-es",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Reddit",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd0AAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd0AAA...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "title": "El nuevo negocio de YouTube",
        "link": "https://www.clarin.com/tecnologia/nuevo-negocio-youtube_0_BJVX94-cz.html",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Clarin.com",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAA...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "title": "YouTube Latinoamérica - YouTube",
        "link": "https://www.youtube.com/channel/UCBrGE6cmFbcwzlwAyIDMGpw",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "YouTube",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAA...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "title": "2020 | Wiki YouTube Pedia | Fandom",
        "link": "https://youtube.fandom.com/es/wiki/2020",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Fandom",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 9,
        "global_rank": 9
      },
      {
        "title": "YouTube now second only to BBC as most popular media ...",
        "link": "https://www.bbc.co.uk/news/articles/c4gzvee78eqo",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "BBC",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 10,
        "global_rank": 10
      },
      {
        "title": "Cómo usar y publicar los Cortos de YouTube con su beta, la ...",
        "link": "https://www.xataka.com/basics/como-usar-publicar-cortos-youtube-alternativa-a-tiktok",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Xataka",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAA...",
        "rank": 11,
        "global_rank": 11
      },
      {
        "title": "YouTube prueba los videos de calidad superior",
        "link": "https://www.iprofesional.com/tecnologia/278517-4k-internet-video-YouTube-prueba-los-videos-de-calidad-superior",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "iProfesional",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 12,
        "global_rank": 12
      },
      {
        "title": "Diseño del logo de YouTube: historia y evolución | Turbologo",
        "link": "https://turbologo.com/es/blog/logotipo-de-youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcR6tUu-mAbS6Kcb50kBPqLT98Mp3NtABDtMpKcwLAfhbn1T5xdZLM64whLYXwy2bw2P60gTc7zIAhcjk6cfQA2RW3jRZeFq8_AwdrwVOIIXWp0A",
        "source": "Turbologo logo maker",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN1CN7mcicZ-Uo5-OaUBUNJNB9F1E2h1okTubW7Q0-KLVWEAaH",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN1CN7mcicZ-Uo5-OaUBUNJNB9F1E2h1okTubW7Q0-KLVWEAaH",
        "rank": 13,
        "global_rank": 13
      },
      {
        "title": "Últimas noticias de Videos virales | TN",
        "link": "https://tn.com.ar/tags/%2Fvideos-virales/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSJbU5ugKLEVJpAJhKG-Kpo0ZqLVY2ON4Wm5ybBFA5621Bgmq_nKNqPV_RJj9v6V_22fldVB78-4r1aW0t2r0iBRco8sthKzCKBqp9xlF4",
        "source": "TN",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiA-hAINFCOeRB5x02QlA03ByvJb3X6DUGkU9TBb3ymCl1EhT2",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiA-hAINFCOeRB5x02QlA03ByvJb3X6DUGkU9TBb3ymCl1EhT2",
        "rank": 14,
        "global_rank": 14
      },
      {
        "title": "A 20 años de la llegada de YouTube: la plataforma que ...",
        "link": "https://www.conclusion.com.ar/info-general/a-20-anos-de-la-llegada-de-youtube-la-plataforma-que-transformo-los-videos-caseros-en-una-profesion/02/2025/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQa-eLJd9_jHp81mqzGDa0ycAFBH9np6w9cd_qzY8ZwzNkXtPjg9RB02q8DHs5bvH-Hl9xkYc9PMeTGCb8tGrV7TWbF7fiivnn4L49H3ZC50Y-2Tx6vbrLz7Ys",
        "source": "Diario Digital Conclusión",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf6tQ43gFnFLiqCk3k28LJCpFPdNcUCffhp97v5Ekn9zkAlWSI",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf6tQ43gFnFLiqCk3k28LJCpFPdNcUCffhp97v5Ekn9zkAlWSI",
        "rank": 15,
        "global_rank": 15
      },
      {
        "title": "YouTube presenta su nuevo logotipo y un profundo rediseño de ...",
        "link": "https://www.outono.net/elentir/2017/08/29/youtube-presenta-su-nuevo-logotipo-y-un-profundo-rediseno-de-su-portal/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcTOvB0_qpvIfTOqAnMDcCvH2Lc7LhVX0xg18uwBryjiPTd7iaXQs3WcgYY5nXHW01ApiD06O2FX82Qju-FCkt5WFXRrtmpk09eYCiGvEai1KiA_Ig",
        "source": "Contando Estrelas",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT1uIGMKDvU8vJCs3gdq4AZ2H-CdD9xkEZI_jLwCsZjnyDVjuM",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT1uIGMKDvU8vJCs3gdq4AZ2H-CdD9xkEZI_jLwCsZjnyDVjuM",
        "rank": 16,
        "global_rank": 16
      },
      {
        "title": "Qué tan grande es YouTube? Nadie lo sabe - The New York Times",
        "link": "https://www.nytimes.com/es/2019/07/28/espanol/youtube-ganancias-google.html",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRszyNSCYR04WGtSoefBwhwwe0NZDJ2NRax9ELrHGpQtwbG2FlJEx0ypzELo9V6Wpi6bcLEWpUcrMTLpkhIptbuYuWkKpaRsx-z4E6t7l8zAoUPsCc",
        "source": "The New York Times",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUrEBqelGhE2yFiY8Ndcoa4wMUkfjMt6iRo7yDD_MpIsB6S8jU",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUrEBqelGhE2yFiY8Ndcoa4wMUkfjMt6iRo7yDD_MpIsB6S8jU",
        "rank": 17,
        "global_rank": 17
      },
      {
        "title": "Streaming: qué es esta nueva moda y con qué plataformas se hace",
        "link": "https://www.lacapital.com.ar/informacion-general/streaming-que-es-esta-nueva-moda-y-que-plataformas-se-hace-n2629027.html",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRvjD9C8f1iRqlUM1tJLrVPgl_PPIIWkoEF07zoIMN5LpLiEaxDbVtC-xVQFSdv4R-fIvM2s1O1jBU8tcef0o8vFk5TsZN1CNQox-kgBM-IycO8Jak7Jxs7JQ",
        "source": "La Capital",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8uRHP8tWztYzrUUFVoj3wbSZMpkc9mvnaY2ajphoiOfz6h86",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ8uRHP8tWztYzrUUFVoj3wbSZMpkc9mvnaY2ajphoiOfz6h86",
        "rank": 18,
        "global_rank": 18
      },
      {
        "title": "Hype, la nueva herramienta de Youtube para Creadores de ...",
        "link": "https://www.a24.com/trends/youtube-lanza-una-nueva-herramienta-ayudar-los-creadores-contenido-pocos-seguidores-n1359433",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcTNEcleeClkxVsgUZPqJalPF5C8B8W1QZ8C5ISiFMBneB3QVAH8gVIE7oeepN3M0YwNftP9a2WWndJXtA1wioUcNrQ4FuOEHZ33VDa9sHQqBw",
        "source": "a24.com",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkdwfP5dHc06cUX4Blh36d_hB2UWA74ekM1TC8r0rjr6hHUyhv",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkdwfP5dHc06cUX4Blh36d_hB2UWA74ekM1TC8r0rjr6hHUyhv",
        "rank": 19,
        "global_rank": 19
      },
      {
        "title": "Noticias de Youtube - El Destape",
        "link": "https://www.eldestapeweb.com/tag/youtube",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcT5tjXlL4a6_N6iDYuOuEOCT7-QaFXti9GFgpdxTjI4bgP7wngjc4FtUeCTozmraUbLLmBPlzgnksXM3dghB4kUuOCn5zUWGVG2bOMlqXLzLzafhzluL5b8PA",
        "source": "El Destape",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA5_xQbWxlIeUWBe2g7YEIOYPwA2Ka10qMnusOqyQXedUtEEeB",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA5_xQbWxlIeUWBe2g7YEIOYPwA2Ka10qMnusOqyQXedUtEEeB",
        "rank": 20,
        "global_rank": 20
      },
      {
        "title": "File:YouTube logo upside down.jpg - Wikipedia",
        "link": "https://en.wikipedia.org/wiki/File:YouTube_logo_upside_down.jpg",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRLIcgPlYxOaoBg0MnSobLYyflrgF_RLdwAY09AXHWGy2jqWQnuIBNCY5I1BuzY7jeAJga0y0b9htBHe94i3Pg4B0NhHMNDVsmS-FVRKL014d-Xf6sX",
        "source": "Wikipedia",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfrQHl2V53W7OwOig95s00ICt1v4hY4a7lZNd0b-uyTTtj5cGV",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfrQHl2V53W7OwOig95s00ICt1v4hY4a7lZNd0b-uyTTtj5cGV",
        "rank": 21,
        "global_rank": 21
      },
      {
        "title": "La caída de YouTube: ¿qué pasó y por qué te quedaste sin videos?",
        "link": "https://www.iprofesional.com/tecnologia/448363-el-fin-de-youtube-que-paso-y-por-que-te-quedaste-sin-videos",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQIY5tthJUk2HFe1X82Pc1B0p_xyfdGPejRT2hGeDXEDFRAuF8RVCRWPQt5nrBwptU1dRzDJgBPte6yFOPjtsvuy7XouJ8-B2k67KhrpfvD6r0Fbme2qD3nDg",
        "source": "iProfesional",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj_K55WxnGboVPK_VFDwHDF9MZ0FNYD0p9Q2vYUSJfRCJybbz",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj_K55WxnGboVPK_VFDwHDF9MZ0FNYD0p9Q2vYUSJfRCJybbz",
        "rank": 22,
        "global_rank": 22
      },
      {
        "title": "20.000 suscriptores en YouTube y el cambio que vi en la ...",
        "link": "https://www.sirchandler.com.ar/2018/07/20-000-suscriptores-en-youtube-y-el-cambio-que-vi-en-la-plataforma/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQqyKc2GXt9Z8xgsjkPfcOvc-GGQ3Qm3sHdlU3-J5pYeDXwujlJfHlvXEr3ywQ9s9GOzHVtQ30LV-C9y1hZlbllIv59UL8c16K06k541VDTY-ShRCnzJQQMwVmf",
        "source": "Sir Chandler",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScbSRfuTNQ8N4vsN7i2r6ppN6SQ7gweiPa5reRISkXwxsGBHZ7",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScbSRfuTNQ8N4vsN7i2r6ppN6SQ7gweiPa5reRISkXwxsGBHZ7",
        "rank": 23,
        "global_rank": 23
      },
      {
        "title": "Cuánto paga YouTube por un video que supera las 1.000 ...",
        "link": "https://www.lagaceta.com.ar/nota/1060541/sociedad/cuanto-paga-youtube-video-supera-1000-visualizaciones.html",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTuu44DyXS2om-cU2I3lzPmu90_4SScET0wWBL2Qdk5if5Ya545htgXwr7K__IJu5FA6Nid52A8QjMIQt0UmPy0o-HRf5_G0sSEFsdyxJNlB0UE7pIOgwt2",
        "source": "La Gaceta",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNm9sZXv7dm8ucLqShCSrLwD6f0MP4FTzqwIqv_7D5pBsSctWu",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNm9sZXv7dm8ucLqShCSrLwD6f0MP4FTzqwIqv_7D5pBsSctWu",
        "rank": 24,
        "global_rank": 24
      },
      {
        "title": "YouTube: el truco viral para resumir los videos y que es ...",
        "link": "https://www.ambito.com/tecnologia/youtube-el-truco-viral-resumir-los-videos-y-que-es-completamente-gratis-n6078103",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRrvz5bLnZhSkk0pRUzYwvsBlv97yjyOcjNpDbJK1Ykl-rOWXS5YVVbeGarqUUFe8eN7Xb8Z7o_lPiwC8Ca6AexPxXuPeZPgeOuzRYgqHnpEf036g",
        "source": "Ambito",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWj2v-hwFsJMx6lS8l19J1TVP03QB5rqRwZpBngX8MisOnyvAM",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWj2v-hwFsJMx6lS8l19J1TVP03QB5rqRwZpBngX8MisOnyvAM",
        "rank": 25,
        "global_rank": 25
      },
      {
        "title": "21 ANIVERSARIO DE:\"YOUTUBE\" 14 de febrero de 2005, se lanzó ...",
        "link": "https://www.instagram.com/p/DUvidwzj0wh/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSpoKX-MM8KwYvjLm-JRx4G0Kwl8RLkE48NjkNQo2Gq3SC32GSp-nb0Bv1Gwdg0bIZuT7qIQcsQnlAbeKhfDsUARVp1OzzHay_AKGuFGTR9Of3S2pacaw",
        "source": "Instagram",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQT4N8A_ZfJasQcFUwjMciAzoSf7lVsH1hJ9oNLqks1Mi6Psbvr",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQT4N8A_ZfJasQcFUwjMciAzoSf7lVsH1hJ9oNLqks1Mi6Psbvr",
        "rank": 26,
        "global_rank": 26
      },
      {
        "title": "What is YouTube?",
        "link": "https://www.webwise.ie/parents/what-is-youtube/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcSbLBrYqX4Z0t1sT5T5OU0dU6Fvo9atHPiaH8iMCrSjf5T6HovbHsmdOsi0EyUarD3VOBf91gWcD9zD6UooW24U6P9v-9hAL7DI5HNE9UQ5lM_Xvw",
        "source": "Webwise - Internet Safety",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwO8Vfju8uGEWjkvVBJbZ-TFwjll0_nwfouGH5ZX0GP62kXokW",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwO8Vfju8uGEWjkvVBJbZ-TFwjll0_nwfouGH5ZX0GP62kXokW",
        "rank": 27,
        "global_rank": 27
      },
      {
        "title": "Historia del logo de YouTube: evolución desde el 2005 hasta hoy",
        "link": "https://www.imprentaonline.net/blog/logo-youtube/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcT1eWyufUIDauJkbZXSRQ1XN83wJwy0lqzrCCTC6XuIYz8x5rlXAOtKFwAWjroj04nnlbYVyVoCuZsyZ9-REe_y91pZVyFVgQgJBf-PToAm_dsNBE6zm_e_S470",
        "source": "Imprenta Online",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg97a8CdqdCZmA0_cEVZ0yufqqkyJ4q4NI8dkPRjiLZ5q5767T",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg97a8CdqdCZmA0_cEVZ0yufqqkyJ4q4NI8dkPRjiLZ5q5767T",
        "rank": 28,
        "global_rank": 28
      },
      {
        "title": "Últimas noticias de YouTube | TN",
        "link": "https://tn.com.ar/tags/youtube/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSJbU5ugKLEVJpAJhKG-Kpo0ZqLVY2ON4Wm5ybBFA5621Bgmq_nKNqPV_RJj9v6V_22fldVB78-4r1aW0t2r0iBRco8sthKzCKBqp9xlF4",
        "source": "TN",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpQLoWP-Z8oXD4avRfZQh7PhGIQYWS-37zNUdfSf_A9ePF3eBh",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpQLoWP-Z8oXD4avRfZQh7PhGIQYWS-37zNUdfSf_A9ePF3eBh",
        "rank": 29,
        "global_rank": 29
      },
      {
        "title": "Se cayó YouTube: qué pasó y cuándo vuelve - TyC Sports",
        "link": "https://www.tycsports.com/interes-general/se-cayo-youtube-que-paso-y-cuando-vuelve-id704724.html",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQWBz2_p1S6liAJwp3r1Ghs4-CVkJ7uWrq2SN__qyJc0tZEaPV44tv2Y6mwXYKtx2_yVs4Bjk4yjKde1GcPDfxZu9DhPp6oKoZlx0-UOEFa3M4POWSZpw",
        "source": "TyC Sports",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlq2yLRIJW5dykvjMHhoMGErZf-Rf4EwrMKi01OUM9fWirAgF_",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlq2yLRIJW5dykvjMHhoMGErZf-Rf4EwrMKi01OUM9fWirAgF_",
        "rank": 30,
        "global_rank": 30
      },
      {
        "title": "YouTube para Nintendo Switch - Sitio Oficial de Nintendo ...",
        "link": "https://www.nintendo.com/es-ar/store/products/youtube-switch/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcToBGjo96GmUCHevYIGmN-UpS53MeR2ZhzA3_OkIOo1c13GKN_eBvJl9QW6mzxeD5hTpJ-y6aDxlz1ebw2zFTwvBQpumpCdgwqbY9MRx5lDJF5Ae_Qe",
        "source": "Nintendo",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTAm2QK0oWNamFEEaSAGn-YXfdVX2J0FgPq402JWb5mitzKB24",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTAm2QK0oWNamFEEaSAGn-YXfdVX2J0FgPq402JWb5mitzKB24",
        "rank": 31,
        "global_rank": 31
      },
      {
        "title": "YouTube Creators (@YouTubeCreators) / Posts / X",
        "link": "https://x.com/YouTubeCreators",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSofvqtbDtdUTZsANJSe_PTSgsuDSmzMNykD5ePbsMk3EyTY0EoF56jNp_rHuufm9BtNpZYsFhp9M6u-DLxqcg2x-FRa41-OCrNmA",
        "source": "X",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpYm0h48xaRTDWgjq-VmSTCs-T0tZlf-TYLWaEkUFI6qXpuNBd",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpYm0h48xaRTDWgjq-VmSTCs-T0tZlf-TYLWaEkUFI6qXpuNBd",
        "rank": 32,
        "global_rank": 32
      },
      {
        "title": "YouTube",
        "link": "https://www.youtube.com/watch?v=2rjtpWxRSP8",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG8oSJsLuYZ6VU_Eza7vyti1F9pMnaPAiH3dGZTFw31zOVole",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG8oSJsLuYZ6VU_Eza7vyti1F9pMnaPAiH3dGZTFw31zOVole",
        "rank": 33,
        "global_rank": 33
      },
      {
        "title": "Microcurso: Aprendé a usar YouTube | Educ.ar, portal ...",
        "link": "https://www.educ.ar/recursos/157416/microcurso-aprende-a-usar-youtube",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSOVQrKfBshEiz9Z856_AfmPDmFagGCjiOzhCABq_tWARw_V3Swe9UQ--NEMhYE9svYtsxkj7uMF6_da5l-Wv2u7D31b6g9mX46zIx5gRTFlQ",
        "source": "Educ.ar",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNFmvKVVqq7JAl6MKlh4tGJtUa9FKIFVuvY-nezCYqplh8zK8",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNFmvKVVqq7JAl6MKlh4tGJtUa9FKIFVuvY-nezCYqplh8zK8",
        "rank": 34,
        "global_rank": 34
      },
      {
        "title": "Youtube se cayó a nivel mundial: miles de usuarios ...",
        "link": "https://radiomitre.cienradios.com/mundo/youtube-se-cayo-a-nivel-mundial-miles-de-usuarios-reportaron-fallas-al-momento-de-utilizarlo/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRYud675uvJsE28w3xxp10rd9pH7gOnuLTTYzU4dGi6lCdPNYwND4rGytlEzec5Q-y_8iQJqlU-60XvQlS3h9eU4IfTGrtm0UP0lfajo9JpcKRTQViwduGXdBVDh3VE",
        "source": "Cienradios",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC-OEaaBPYm-qsL_CPOkxHCZfzFGjA4K20GSOBWBCTPWvPLDZw",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC-OEaaBPYm-qsL_CPOkxHCZfzFGjA4K20GSOBWBCTPWvPLDZw",
        "rank": 35,
        "global_rank": 35
      },
      {
        "title": "Por qué YouTube impulsa las herramientas de IA para ...",
        "link": "https://www.rionegro.com.ar/tecnologia/por-que-youtube-impulsa-las-herramientas-de-ia-para-creadores-de-videos/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQPXtmlbUUF-TvlAH5Rh72QkGVUM6wECTPLuYKur6oe3mcp55McLFWNN_jkc-nlmBnY2MWhf2DzSGRlAixfY1-avuOpHVRZwzHDt-MUJ25TD1t6UyR4Jg64",
        "source": "Diario Río Negro",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2hujQa-2w3xZ-MMU9sDTVzjXj0cf5p3qoHmSU2sikaZCCDndk",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2hujQa-2w3xZ-MMU9sDTVzjXj0cf5p3qoHmSU2sikaZCCDndk",
        "rank": 36,
        "global_rank": 36
      },
      {
        "title": "YouTube celebra su 20° Aniversario | PORTAL INFOBRANDSEN",
        "link": "https://www.infobrandsen.com.ar/2025/04/23/youtube-celebra-su-20-aniversario/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRiNs6yRqD0TYtn9LAUaMaY1Zy1t7g5VxE-BXsHy6RS6m-C-_4y6R7v11lvrpTDqeZCZySRpYVNK0gVd9y-gW7NCUuzwHRE03Jz2ZIuUAX5dlgSv3gN-DSXws6AyQ",
        "source": "Infobrandsen",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMsPGpEn62QA4Mbp5b1w1BukB0845GFcxnabPIa_NNOti8mwbY",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMsPGpEn62QA4Mbp5b1w1BukB0845GFcxnabPIa_NNOti8mwbY",
        "rank": 37,
        "global_rank": 37
      },
      {
        "title": "YouTube Recap 2025 en Argentina revela cuáles son los videos ...",
        "link": "https://www.clarin.com/tecnologia/youtube-recap-2025-argentina-revela-videos-creadores-vistos-viste_0_fANqjYaTe5.html",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcTjJ58r7L5G0jSZyHd6tQ8oeizM_cAj-DHZy-SaoLLYhvAQDSIqECAy16IlRKF3xQT5UZusZY-YYCzt7M2jBY3EmvAm6btP8u2jHqGK8NXvKUs8sA",
        "source": "Clarin.com",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRo-xxKoMUsaHCMxUjR952ic5dSOBDsfzbMy8gZZ5SZYSqs2RKU",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRo-xxKoMUsaHCMxUjR952ic5dSOBDsfzbMy8gZZ5SZYSqs2RKU",
        "rank": 38,
        "global_rank": 38
      },
      {
        "title": "Descubre vídeos de YouTube adecuados para familias ...",
        "link": "https://www.youtube.com/intl/ALL_es/kids/familyfriendly-videos/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREjZAOHqN4ntQCHnWupART1zemHPNxT-K6Vkhxa9GMMuNOZ9ER",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREjZAOHqN4ntQCHnWupART1zemHPNxT-K6Vkhxa9GMMuNOZ9ER",
        "rank": 39,
        "global_rank": 39
      },
      {
        "title": "YouTube actualizará tus videos antiguos a 4k usando IA: un ...",
        "link": "https://www.infobae.com/tecno/2025/10/30/youtube-actualizara-tus-videos-antiguos-a-4k-usando-ia-un-cambio-muy-favorable/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQDJSoti_tDfiR_vuZSDA_MJ_IjYOOlEmN7SbCZfohWPjZ_7d8VVr2r2xFglMDSqxYoST6tmoMREWvo1ShnVcRLcth-da1-O4UZ7xomdiLQCc_YdRs",
        "source": "Infobae",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUThi_9UBd0ItPQTIKnvkraVPx_BE1UR5XoWu3TZ2EtF7-xb6B",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTUThi_9UBd0ItPQTIKnvkraVPx_BE1UR5XoWu3TZ2EtF7-xb6B",
        "rank": 40,
        "global_rank": 40
      },
      {
        "title": "Vector de Stock Youtube logo on a white background | Adobe Stock",
        "link": "https://stock.adobe.com/ar/images/youtube-logo-on-a-white-background/300389025",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRmO_8sjV79Lvr80yZ9v1mjcRZDN1hZFi-kX0mYgHFcDxvZ4OuuaYwV5sxiW05Fr2yEjvT8RYkmpSI3x9KzYnAoAOZc8ty6wCgzyZMh0u3JrhgGpag",
        "source": "Adobe",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtKyF0z1Hck78_jgdXgYKBeedGXV1jWUKglS7pNRJlYkDBhrW",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtKyF0z1Hck78_jgdXgYKBeedGXV1jWUKglS7pNRJlYkDBhrW",
        "rank": 41,
        "global_rank": 41
      },
      {
        "title": "FM ALTAVOZ – FM 94.1",
        "link": "https://fmaltavozclasicos.ar/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcSn4fhxjdfhpn6Du5HX7oa-73KWVr9C70IQjc0i7KwTi2IJ6ZHtb3oo0r_MFE16hjwiusvELJ2dXuTNA5h9Z7vuDdppuyueLD2mGgidraS3II1oKu9C-xVY5A",
        "source": "fm altavoz",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFuO2Irn3aJOPN7atMv-J4SSfjdOYSMuNsNvO91ax44iaeRvlo",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFuO2Irn3aJOPN7atMv-J4SSfjdOYSMuNsNvO91ax44iaeRvlo",
        "rank": 42,
        "global_rank": 42
      },
      {
        "title": "YouTube Premium - YouTube",
        "link": "https://www.youtube.com/premium?app=desktop&gl=MX&hl=es-419",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoA3XLRLlSu7GDeIM4mOo8n2IsC2MMXJTUWuPEhLl8-H8UQjAV",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoA3XLRLlSu7GDeIM4mOo8n2IsC2MMXJTUWuPEhLl8-H8UQjAV",
        "rank": 43,
        "global_rank": 43
      },
      {
        "title": "Bienvenidos a nuestro nuevo canal de Youtube",
        "link": "https://convivir.org/2022/08/bienvenidos-a-nuestro-nuevo-canal-de-youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcRuyJeitZ-_zbSuk7V0aMlEZz31ZLzke2G4kPWJ3dGfy9aY3Mw4PGMgmJjtzOQgJUW0Z7yM6ZqhCJgu-rAVI2he9Jy3txyZttHqdhymeAlJj0Q",
        "source": "convivir.org",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPTuiwSU2bu7guekjPAgE39vAcduX2aMm85k5GrZANTU4P-Xa6",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPTuiwSU2bu7guekjPAgE39vAcduX2aMm85k5GrZANTU4P-Xa6",
        "rank": 44,
        "global_rank": 44
      },
      {
        "title": "Cómo superar a tu competencia en Youtube 2025 🚀",
        "link": "https://comprarvisitas.net/como-superar-a-tu-competencia-en-youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ7ZL0TitorxOOVxwsDP3WXZyeHp4FAZqSJnbUe8b_V9-QNUwp-0DR2Ad-bOKcpryp-10NC_Ae5quhY-mkQgZ7sfPTjxk2X4W-rLmYSrwNWD8FFHj__nNg",
        "source": "Comprarvisitas.net",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF2iyk4oG4zMb1WHxp6EUGPGUHL2UYktp6XSPjs2x_Ucui_Or",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF2iyk4oG4zMb1WHxp6EUGPGUHL2UYktp6XSPjs2x_Ucui_Or",
        "rank": 45,
        "global_rank": 45
      },
      {
        "title": "Ocho de cada diez argentinos afirman que YouTube es el ...",
        "link": "https://www.eltribuno.com/tecnologia/2024-1-6-17-1-0-ocho-de-cada-diez-argentinos-afirman-que-youtube-es-el-servicio-de-videos-que-mas-miran",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTFlGm6kDo__eMV3uQ7Fl4TO20X1SIfFb8jDeOzXx7JFU_4sDnVnPwempbQsfLHzC57jbACV8HqopmZTUZRDXErYUhL9_Bw0lt9vE8Y-oZpQgx_4Zi6TQ",
        "source": "El Tribuno",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAL4bCogkWpDQobugDeI1QMf0D3x_Bq6c9699iK3oWR_TO1FiQ",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAL4bCogkWpDQobugDeI1QMf0D3x_Bq6c9699iK3oWR_TO1FiQ",
        "rank": 46,
        "global_rank": 46
      },
      {
        "title": "YouTube is giving you better control over what videos are on ...",
        "link": "https://www.xda-developers.com/youtube-better-control-over-what-videos-are-on-your-homepage/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRAME90RmDvZ7n5QF-g_fXA6hrG1UpK1yFStismLE2bPsvQ8NDeM_419lGa-XTsXWEQ7-TMRilzLDBgbo39QRarJ_dIvrWYKxo3Lc1KDOvngg4HxOqxV7yDSBqR",
        "source": "XDA",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQic49NGU9caQSmutaO1b9OICmJ1yA74nHS4EBDblaazX9dnyE",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQic49NGU9caQSmutaO1b9OICmJ1yA74nHS4EBDblaazX9dnyE",
        "rank": 47,
        "global_rank": 47
      },
      {
        "title": "Logotipo de YouTube YouTube es un sitio web para compartir ...",
        "link": "https://www.freepik.es/vector-premium/logotipo-youtube-youtube-es-sitio-web-compartir-videos_30873446.htm",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQjfDgOxQ9diXs3nHxnVm0cOXUeN2KLO4fzw6694xmC8tFwgYIZ1Ukmss0xzHh9FeA4GBpeeiHWbiDUrO2skF2b_zaY-B9AW_w0lq9idE-UcYKVCQ",
        "source": "Freepik",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFIr7apuuUboNA9BNNRXvFmDCqDqnq6y9Ns4jZl4gdHv2Xx39C",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFIr7apuuUboNA9BNNRXvFmDCqDqnq6y9Ns4jZl4gdHv2Xx39C",
        "rank": 48,
        "global_rank": 48
      },
      {
        "title": "Shannon Ong - Product Lead at YouTube (Google) | Ex-Amazon ...",
        "link": "https://www.linkedin.com/in/shannon-ong-44887053",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcTFMvFisG5Yfyq07VS0hk1otTr6uQvufSrlgYLzmBkZlxd7MQh66ZmKRUOdwfXrertN7RslYSLWGQCDyxLn3JsHLob5z5LPzTRUUQlVmSHaBnVJlJa8",
        "source": "LinkedIn",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHV_Rg6Zrd0YDIQ2z9jIc_bujs7QKmKxjUMoDk6jXc_c9S5XVv",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHV_Rg6Zrd0YDIQ2z9jIc_bujs7QKmKxjUMoDk6jXc_c9S5XVv",
        "rank": 49,
        "global_rank": 49
      },
      {
        "title": "Tienda Online de Mates Imperio Verde - YOUTUBE",
        "link": "https://matesimperioverde.com.ar/youtube/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcR5Trf_oqul8xGk_4jZQfKCZ-lk2734NX87Uwm_GxwlN_lbvnhhXrpdFv50y6oLusQg9dlOc7xvbLBAiHfF4uLxvUcIoFH8zsPoaUft1Hnt21uI4B_GSdBh8iTtyoI",
        "source": "Mates Imperio Verde",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRY6VMEnyET4gl4llMs0eN_sbvlU-ykjoPYVR34W_9AejsMhW_s",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRY6VMEnyET4gl4llMs0eN_sbvlU-ykjoPYVR34W_9AejsMhW_s",
        "rank": 50,
        "global_rank": 50
      },
      {
        "title": "YouTube como herramienta educativa | Revista Cabal",
        "link": "https://www.revistacabal.coop/tecnologia/youtube-como-herramienta-educativa",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ5dtjoI0FQNrhM5bawPCCVj0-38LAVb5pM2MpzMjqJGHl0jV-LWq1DwpI7ISWMXzGJ1OE78u26weDllx5NWpJvXmAifXPi-nqfsMURD32bGRij_X0ncqxkahM",
        "source": "Revista Cabal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNylW048lm1-5LdJclgNpW9DfUVYU_5tiMdDo7OrW2DKK7v74",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNylW048lm1-5LdJclgNpW9DfUVYU_5tiMdDo7OrW2DKK7v74",
        "rank": 51,
        "global_rank": 51
      },
      {
        "title": "Best Free YouTube Video Downloader for Windows 2025",
        "link": "https://www.donemax.com/video-download/top-4-free-youtube-video-downloader.html",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcT42ycJdf2UKgzoluI34OleyFF20kCMoM4nCVIyKw6nZHeVCEEYZRNkNzQOSdCzqTsMJC0veLw3rjdZkoJJJb57F_FMNM63E8_laLInHR0Vxvk-wSQ",
        "source": "Donemax",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNHWLmtSnUSexb14Iegqe3ZtC3-TjRAiHzoLmjzm2dhr9a8fc",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNHWLmtSnUSexb14Iegqe3ZtC3-TjRAiHzoLmjzm2dhr9a8fc",
        "rank": 52,
        "global_rank": 52
      },
      {
        "title": "Me at the Zoo: el primer video de YouTube cumple 17 años y ...",
        "link": "https://www.lacapital.com.ar/informacion-general/me-at-the-zoo-el-primer-video-youtube-cumple-17-anos-y-sigue-sumando-clicks-n10013748.html",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRvjD9C8f1iRqlUM1tJLrVPgl_PPIIWkoEF07zoIMN5LpLiEaxDbVtC-xVQFSdv4R-fIvM2s1O1jBU8tcef0o8vFk5TsZN1CNQox-kgBM-IycO8Jak7Jxs7JQ",
        "source": "La Capital",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDgcQDY8awAQt18xCSFVORK9VD5KCPes_loy4eE5nTE-zZ03Nz",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDgcQDY8awAQt18xCSFVORK9VD5KCPes_loy4eE5nTE-zZ03Nz",
        "rank": 53,
        "global_rank": 53
      },
      {
        "title": "Comparte tu pasión por la cocina y únete a nuestra comunidad ...",
        "link": "https://www.facebook.com/hoyquecomemosblog/posts/comparte-tu-pasi%C3%B3n-por-la-cocina-y-%C3%BAnete-a-nuestra-comunidad-de-youtube-gratis-c/884788059910526/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcRv794zBOQO02ChHD5K_TnlJwwf8PThFmn58OZAhQnomqvb1XKnHGAk8BQDBcyXho53FvXtsB2eVFSimUAzH3zcBAPC_yfttm2gkn07x3UumIdkepR5",
        "source": "Facebook",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmsFe8ViO8t8SNMFkStD6BhROxgG9kDif5gAZngEiWrUSYahIK",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmsFe8ViO8t8SNMFkStD6BhROxgG9kDif5gAZngEiWrUSYahIK",
        "rank": 54,
        "global_rank": 54
      },
      {
        "title": "Ya puedes descargar la aplicación de YouTube en Nintendo ...",
        "link": "https://www.3djuegos.com/nintendo-switch/noticias/ya-puedes-descargar-la-aplicacion-de-youtube-en-nintendo-181108-87335",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcSKZlwlNGXQBQKkw2pg-KrPUZxAksUOqKO1ZdE0lJO-0YI4-YZJjm9P3LU5coiCkfrI0iYvMeBJIor0-yoKl7hpjYnvqmThha4uqv_qpcrByskNvvW1",
        "source": "3DJuegos",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5LV_hdWzY-suftbx6omDTvx21lflPXeIRtc5HjJs9OqZd3J-2",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5LV_hdWzY-suftbx6omDTvx21lflPXeIRtc5HjJs9OqZd3J-2",
        "rank": 55,
        "global_rank": 55
      },
      {
        "title": "¿Cuánto dinero genera Youtube? Por primera vez desde que ...",
        "link": "https://www.infobae.com/economia/2020/02/04/cuanto-dinero-genera-youtube-por-primera-vez-desde-que-compro-la-empresa-google-dio-cifras-de-su-sitio-de-videos-estrella/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQDJSoti_tDfiR_vuZSDA_MJ_IjYOOlEmN7SbCZfohWPjZ_7d8VVr2r2xFglMDSqxYoST6tmoMREWvo1ShnVcRLcth-da1-O4UZ7xomdiLQCc_YdRs",
        "source": "Infobae",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQINP_FiwMrIzkRSoE_zj6e0foYKcekJ6zxWiL5EKcwIRUxvwtV",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQINP_FiwMrIzkRSoE_zj6e0foYKcekJ6zxWiL5EKcwIRUxvwtV",
        "rank": 56,
        "global_rank": 56
      },
      {
        "title": "Tutorial: ¿Cómo hacer para que YouTube siempre me avise ...",
        "link": "https://www.youtube.com/watch?v=Dcl7XDJeFdw",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIr-THYZRUQIpMuyoK0WjonB4jWMFW9YXOH5WuCpUqc5dm9k7",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIr-THYZRUQIpMuyoK0WjonB4jWMFW9YXOH5WuCpUqc5dm9k7",
        "rank": 57,
        "global_rank": 57
      },
      {
        "title": "Videos - Springdale FWB - Springdale Free Will Baptist Church",
        "link": "https://www.springdalefwb.org/videos.html",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRqfiy0VdOS4lUakqCu5N8oAxk1lHi2UaYOIXQHAKeXimo0wfiqsUhsC8W74MzgM1uVP4A1OfEYMAxluM5HZzWfyPpD_RblP2GNnRHVxUFnREbuqPZT2UY4gw4",
        "source": "Springdale Free Will Baptist Church",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnoUBdcMizJv-JxXxIQAVVUTuZKps3gGr-K2riQiHI58po0zMW",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnoUBdcMizJv-JxXxIQAVVUTuZKps3gGr-K2riQiHI58po0zMW",
        "rank": 58,
        "global_rank": 58
      },
      {
        "title": "Youtube Live Streaming – Varvid",
        "link": "https://varvid.com/broadcast-platforms/youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcRt9iyy-3-IW5iqOAYPaXafEUkma3FFNpyZ975Llg6NySgv6jDhL0aC_yGcYyedQxEPrACxZiQcVikTSGJKfEPFpCr0bG55riarTKeEvAGH",
        "source": "varvid.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA-6rv6huR7t2LS2ELkPJV7iQ2AM5sC6GCwWtvL37ACe-Sm9T",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA-6rv6huR7t2LS2ELkPJV7iQ2AM5sC6GCwWtvL37ACe-Sm9T",
        "rank": 59,
        "global_rank": 59
      },
      {
        "title": "How to Make a YouTube API Call? - DEV Community",
        "link": "https://dev.to/cyanspray/how-to-make-a-youtube-api-call-13nn",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSQRYRjo6rRDeEwOaYrr8zfImMVmlI3BXXupnqDJb9APJUNVXQUR_ECPJEd7MrgNMDi2ZkWz2U7Ukg8DNNNK2HaNLsmHqhhaPiKpi4",
        "source": "DEV Community",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTtMgLcdFtkbexCqPOGOD6z8hnKY18bw5PNXmFT4mXItLYMVfw",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTtMgLcdFtkbexCqPOGOD6z8hnKY18bw5PNXmFT4mXItLYMVfw",
        "rank": 60,
        "global_rank": 60
      }
    ]
  }
  ```
</ResponseExample>
