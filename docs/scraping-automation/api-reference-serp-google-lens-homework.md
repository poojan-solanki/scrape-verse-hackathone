# Homework

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-lens/homework](https://docs.brightdata.com/api-reference/serp/google-lens/homework)
> **Category**: `scraping-automation`

---

Reference for the Bright Data Google Lens Homework parameter. Refines queries and returns matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework
```

## Parameters

<ParamField type="query">
  URL of image you want to search
</ParamField>

<ParamField type="string">
  The `brd_lens` parameter in your request fetches specific Google Lens **tab results** by specifying a tab value (e.g. `products`, `homework`, `visual_matches`, `exact_matches`).

  ```txt wrap theme={null}
  https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework"
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
        url: 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework',
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
      'url': 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=homework',
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
      "language": "en-IT",
      "mode": "search",
      "type": "all"
    },
    "tabs": [
      {
        "name": "All",
        "type": "all",
        "selected": true
      },
      {
        "name": "Exact matches",
        "type": "exact_matches",
        "link": "https://www.google.com/search?newwindow=1&sca_esv=2dc65c8cbd5d287b&lns_surface=26&hl=en&udm=48&vsrid=CNOUvZmOpL2mwgEQAhgBIiRmM2MwMDIwOC1iNWQ3LTRlYzYtOGM0MS04MmUyODY1NzYyYmIyBiICbHUoGTiiwvzx9fySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=199BB_yGai7OYftshUcQc_T1bixm7iSCOlobtaK0eHMeUJZrpcZ5Ng&lsessionid=YplFE6xNV5NtX7HzSrAuqm7Dy9VcsV2Jk_HtsKDahzJkkw0tHtBl1g&vsrid=CNOUvZmOpL2mwgEQAhgBIiQwZTFkYzdjMS0xNDdkLTRmN2QtYmE0Mi1iOTY5MDdjZWEyMzgyBiICbHUoGTiiwvzx9fySA1AA&q=&sa=X&ved=2ahUKEwjapK_z9fySAxWVDxAIHXA9KdsQs6gLegQIExAB"
      },
      {
        "name": "Visual matches",
        "type": "visual_matches",
        "link": "https://www.google.com/search?newwindow=1&sca_esv=2dc65c8cbd5d287b&lns_surface=26&hl=en&udm=44&vsrid=CNOUvZmOpL2mwgEQAhgBIiRmM2MwMDIwOC1iNWQ3LTRlYzYtOGM0MS04MmUyODY1NzYyYmIyBiICbHUoGTiiwvzx9fySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=199BB_yGai7OYftshUcQc_T1bixm7iSCOlobtaK0eHMeUJZrpcZ5Ng&lsessionid=YplFE6xNV5NtX7HzSrAuqm7Dy9VcsV2Jk_HtsKDahzJkkw0tHtBl1g&q=&sa=X&ved=2ahUKEwjapK_z9fySAxWVDxAIHXA9KdsQs6gLegQIEhAB"
      },
      {
        "name": "About this image",
        "type": "about",
        "link": "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAAFMALP_IkoKSAjTlL2ZjqS9psIBEAIYASIkZjNjMDAyMDgtYjVkNy00ZWM2LThjNDEtODJlMjg2NTc2MmJiMgYiAmx1KBk4osL88fX8kgNQAOdfoXtMAAAA&sa=X&ved=2ahUKEwjapK_z9fySAxWVDxAIHXA9KdsQs6gLegQIERAB"
      }
    ],
    "images": [
      {
        "title": "File:YouTube Logo 2017.svg - Wikipedia",
        "link": "https://it.wikipedia.org/wiki/File:YouTube_Logo_2017.svg",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Wikipedia",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAA...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "title": "YouTube-Nuovo-Logo – Parrocchia Ss. Rufina e Seconda ...",
        "link": "https://www.santerufinaeseconda.it/youtube-nuovo-logo/",
        "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "source": "Parrocchia Sante Rufina e Seconda",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "title": "L'alternativa a Youtube? I nuovi social video | Webhero",
        "link": "https://www.webhero.it/alternativa-a-youtube/",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "webhero.it",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAA...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "title": "File:YouTube Logo (2013-2017).svg - Wikipedia",
        "link": "https://it.wikipedia.org/wiki/File:YouTube_Logo.svg",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Wikipedia",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAA...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "title": "Social",
        "link": "https://www.volleylivorno.com/social.htm",
        "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "source": "Volley Livorno",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAA...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "title": "Youtube logo per popolare in linea media soddisfare ...",
        "link": "https://it.vecteezy.com/png/22721714-youtube-logo-per-popolare-in-linea-media-soddisfare-creazione-sito-web-e-applicazione",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Vecteezy",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAA...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "title": "Abbonamenti YouTube come funziona | by Michele Maccini | Medium",
        "link": "https://medium.com/@michelemaccini/abbonamenti-youtube-come-funziona-343d2314b1b2",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Medium",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbUAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbUAAA...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "title": "YouTube Creators Italia - YouTube",
        "link": "https://www.youtube.com/@YouTubeCreatorsItalia/shorts",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "YouTube",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAA...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "title": "YouTube (Website) - SteamGridDB",
        "link": "https://www.steamgriddb.com/game/36663",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "SteamGridDB",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAA...",
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
        "title": "Social Unipv | Università di Pavia",
        "link": "https://portale.unipv.it/it/social-unipv",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "source": "Università di Pavia",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 11,
        "global_rank": 11
      },
      {
        "title": "YouTube",
        "link": "https://www.youtube.com/watch?v=2rjtpWxRSP8",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "YouTube",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAA...",
        "rank": 12,
        "global_rank": 12
      },
      {
        "title": "YouTube: app su Amazon Appstore",
        "link": "https://www.amazon.it/Google-LLC-YouTube/dp/B07T771SPH",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcRrWOi-uC3lC6i4Y5BR23l1r_krEzq6-XeaA-OmOUDcF7MinJfzKPpK8BLim4sdIhs1McRYibNwWRyVuUwqb9-s6vvkCfbv-XG6KQuPTpYyLOt2",
        "source": "Amazon.it",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6m6YWsWrwK0xLxwV3BwaFdz-2ShM4ZmwbBHxiaB1psVHSuGY",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6m6YWsWrwK0xLxwV3BwaFdz-2ShM4ZmwbBHxiaB1psVHSuGY",
        "rank": 13,
        "global_rank": 13
      },
      {
        "title": "Cos'è Recap di YouTube, il riassunto del tuo 2025 come ...",
        "link": "https://www.fastweb.it/fastweb-plus/digital-marketing-social/cose-recap-di-youtube-il-riassunto-del-tuo-2025-come-wrapped-di-spotify/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQibqeiTf2oFFIN3s6727bZSB4Eh1lvb2OvJmpGdkfR7-S__vUDUXK7ZtPlN5Zxn6s9VhgIQQeesoWmdXjq4U3aaUFd4J5NvcsORecUJ1teM-PwvQ",
        "source": "Fastweb",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVH2dSLC7vGH3Y1yHXjdN1813MLPK5CK-TfI2qcTc4Zb32IXy7",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVH2dSLC7vGH3Y1yHXjdN1813MLPK5CK-TfI2qcTc4Zb32IXy7",
        "rank": 14,
        "global_rank": 14
      },
      {
        "title": "YouTube debuts new Recap feature. Here's how to get your ...",
        "link": "https://www.independent.co.uk/arts-entertainment/music/news/youtube-recap-2025-music-video-wrapped-how-to-get-b2877770.html",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcSrV5qFXK4MrrpmF-qGRuGZ3XvO58kiXpkOWX91Kx8-eTpm--qUCQciIk1KfIFiK7-tBEP0myCykgJYy4NHLoay0SMKqJd_ci1MQXzy391HtuxldxaIDbUucMM",
        "source": "The Independent",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuzg2v7alS0tL2thS_clhgpAbur9kGjuALPI12kLuwKXZiu9at",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuzg2v7alS0tL2thS_clhgpAbur9kGjuALPI12kLuwKXZiu9at",
        "rank": 15,
        "global_rank": 15
      },
      {
        "title": "File:YouTube icon (2013-2017).svg - Wikipedia",
        "link": "https://it.wikipedia.org/wiki/File:YouTube_icon_(2013-2017).svg",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcT2KN4_0uNdyYsmuqBnsfNd2oA3qDagOJceNJq4UmjB5HJYGxbH-XBIhG9cB-OPNzK4-NViS9Rx5Qbhckroz79jN-qc9tfJZGFIkiBOLs0yqgITnKC4",
        "source": "Wikipedia",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTM9jPouDIip3ZBRP4KSYlnrmN6mbKLej1iYljENHlNRMKZANkH",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTM9jPouDIip3ZBRP4KSYlnrmN6mbKLej1iYljENHlNRMKZANkH",
        "rank": 16,
        "global_rank": 16
      },
      {
        "title": "What is YouTube?",
        "link": "https://www.webwise.ie/parents/what-is-youtube/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcSbLBrYqX4Z0t1sT5T5OU0dU6Fvo9atHPiaH8iMCrSjf5T6HovbHsmdOsi0EyUarD3VOBf91gWcD9zD6UooW24U6P9v-9hAL7DI5HNE9UQ5lM_Xvw",
        "source": "Webwise - Internet Safety",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwO8Vfju8uGEWjkvVBJbZ-TFwjll0_nwfouGH5ZX0GP62kXokW",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwO8Vfju8uGEWjkvVBJbZ-TFwjll0_nwfouGH5ZX0GP62kXokW",
        "rank": 17,
        "global_rank": 17
      },
      {
        "title": "YouTube compie 20 anni, ecco come ha fatto la storia | Wired ...",
        "link": "https://www.wired.it/article/youtube-20-anni-storia/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcTNZPRbDNIzqnpXEHf9D7gMsMgswNoc6Ai37G-l1N3pvkacWcLbUEyoW3tsBvzel43K6dUNlJ40GxqCQU2KUizIP64IQ5ws8e6N-8Q1-MLHtG8",
        "source": "Wired",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHkhjtx-2zs48nSm64xwXgqqAp2ZaOPOWgiKlg1Cg5fyaQpt0R",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHkhjtx-2zs48nSm64xwXgqqAp2ZaOPOWgiKlg1Cg5fyaQpt0R",
        "rank": 18,
        "global_rank": 18
      },
      {
        "title": "Installare APP di YOUTUBE su Windows10 - YouTube",
        "link": "https://www.youtube.com/watch?v=0sk3XWTRKCY",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjTW3p5Nd9g_MBrLsKVgg4xCEp5tfcDUn0JX1zuLVhshjygn2N",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjTW3p5Nd9g_MBrLsKVgg4xCEp5tfcDUn0JX1zuLVhshjygn2N",
        "rank": 19,
        "global_rank": 19
      },
      {
        "title": "I canali YouTube da seguire per imparare la storia ...",
        "link": "https://www.focusjunior.it/scuola/storia/canali-youtube-storia/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ_Ztb3_R87Lu4TAwYlJh4eQS2DFxwc6Hjy4fNTmHj2WcpOY0JSBg6M93uVJtSZglgzTMPO9IhAlk9MfCnR0guQtlhZcSFpDMH-ui_8UPNmO0CifGa7f_U",
        "source": "FocusJunior.it",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLmZSLFh9nZYcFeAHEk9gKYx4UhtbsLA6iyHLPlvvUg5qCYZK",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLmZSLFh9nZYcFeAHEk9gKYx4UhtbsLA6iyHLPlvvUg5qCYZK",
        "rank": 20,
        "global_rank": 20
      },
      {
        "title": "Canali Video | Dipartimento di Chirurgia",
        "link": "https://chirurgia.web.uniroma1.it/it/canali-video",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSfJxpEqOXXBiVDlt5IZlpYGoN3lzKbj6vD6YsAucBIwVBD4ehjMyaNuN7_c0Ha9bvVpJ1mXWPN-EgqIMnO7Nl0L4kX-d2jyPymqjipoKfh9McdVzu0jL_hTldPD-sF",
        "source": "Sapienza Università di Roma",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQN41rEo-ELHGSR8uZak6deN5MHa258xeZNO2zerFebjzL8yCz0",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQN41rEo-ELHGSR8uZak6deN5MHa258xeZNO2zerFebjzL8yCz0",
        "rank": 21,
        "global_rank": 21
      },
      {
        "title": "Youtube Live Streaming – Varvid",
        "link": "https://varvid.com/broadcast-platforms/youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcRt9iyy-3-IW5iqOAYPaXafEUkma3FFNpyZ975Llg6NySgv6jDhL0aC_yGcYyedQxEPrACxZiQcVikTSGJKfEPFpCr0bG55riarTKeEvAGH",
        "source": "varvid.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA-6rv6huR7t2LS2ELkPJV7iQ2AM5sC6GCwWtvL37ACe-Sm9T",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA-6rv6huR7t2LS2ELkPJV7iQ2AM5sC6GCwWtvL37ACe-Sm9T",
        "rank": 22,
        "global_rank": 22
      },
      {
        "title": "How to share a YouTube video starting at a specific time ...",
        "link": "https://www.foxnews.com/tech/how-share-youtube-video-starting-specific-time",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQVx4PNOkwyIKigtzRRkbJhhFkJHqN_SRMlPVlAq-1o8H9-VoeLnReotGS2Fkrg1KkJqFas-T4SuJ0YVKtQx5MZEu0ladHVFErrMwzVLr1-aon-6FI",
        "source": "Fox News",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOoImdEyesSvClzoCpQvmbJmAsN7lfIbIRVsGNHsWXWkRGzNaC",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOoImdEyesSvClzoCpQvmbJmAsN7lfIbIRVsGNHsWXWkRGzNaC",
        "rank": 23,
        "global_rank": 23
      },
      {
        "title": "Storia di YouTube - FASTWEBPLUS",
        "link": "https://www.fastweb.it/fastweb-plus/digital-marketing-social/youtube-la-storia/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQibqeiTf2oFFIN3s6727bZSB4Eh1lvb2OvJmpGdkfR7-S__vUDUXK7ZtPlN5Zxn6s9VhgIQQeesoWmdXjq4U3aaUFd4J5NvcsORecUJ1teM-PwvQ",
        "source": "Fastweb",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzv_0opRJ0u9J_Lcbbr0LY_4PGj6MNzNnsobq6-mGou5-hIezj",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzv_0opRJ0u9J_Lcbbr0LY_4PGj6MNzNnsobq6-mGou5-hIezj",
        "rank": 24,
        "global_rank": 24
      },
      {
        "title": "Pubblicità su YouTube: quanto costa e come farla | Italiaonline",
        "link": "https://www.italiaonline.it/risorse/pubblicita-su-youtube-costi-e-consigli-pratici-per-iniziare-2704",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQzG707t-UnUkkRWg4KMLn7GIjexYOv4o7xwM0Uz-g7WVQ3rQpAIATR55SpSz1V1Tq4xeIqHIlpKwjI9J__AWDdoelelTtfCfGsmJusO-yRD8fAEk_HWwlW",
        "source": "Italiaonline",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ24gfzQMiyMHQCrMxA_AVhoU_T4Z2VKliwWYRjUY5WpwMkLw36",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ24gfzQMiyMHQCrMxA_AVhoU_T4Z2VKliwWYRjUY5WpwMkLw36",
        "rank": 25,
        "global_rank": 25
      },
      {
        "title": "YouTube Creators (@YouTubeCreators) / Posts / X",
        "link": "https://x.com/YouTubeCreators",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSofvqtbDtdUTZsANJSe_PTSgsuDSmzMNykD5ePbsMk3EyTY0EoF56jNp_rHuufm9BtNpZYsFhp9M6u-DLxqcg2x-FRa41-OCrNmA",
        "source": "X",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpYm0h48xaRTDWgjq-VmSTCs-T0tZlf-TYLWaEkUFI6qXpuNBd",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpYm0h48xaRTDWgjq-VmSTCs-T0tZlf-TYLWaEkUFI6qXpuNBd",
        "rank": 26,
        "global_rank": 26
      },
      {
        "title": "YouTube Premium Hiking Prices On Family Plan Service Just ...",
        "link": "https://www.imdb.com/it/news/ni63800513/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTFehdJYsJGaKRE9UV-IK0kaOc0dNWXVGr3XLPVFUGvc-sssumlm-DVVWDCahNCXEbCcS9XnW6yhTAYAjfCH8kiJvjjmg2R3XCq5d_cl1CJe0c",
        "source": "IMDb",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUdwMKaMRwijquPGu_ZMr2yIh-lfejdvzeXEUCGNwG_2n-tIZk",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUdwMKaMRwijquPGu_ZMr2yIh-lfejdvzeXEUCGNwG_2n-tIZk",
        "rank": 27,
        "global_rank": 27
      },
      {
        "title": "Cost of Living in Italy | Italian Cell Phone and Home Internet",
        "link": "http://www.rafaeldifuria.com/2-cost-of-living-in-italy/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcSSG0TUm1VLSIjW78ktClbDJulZat6eOZP3TJxOP1PdHL6PZTGop5ECoMjdHNN0lecB0JDj8uJj_1kkM9Q87mOfPdABhegUSEWpxq9Fj3M59_GRYPRszlFA_A",
        "source": "Rafael Di Furia",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdy8ZDbQmGHV96HohESFUmKVQINpBGorhyafzXgCcIOYhx5_oJ",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdy8ZDbQmGHV96HohESFUmKVQINpBGorhyafzXgCcIOYhx5_oJ",
        "rank": 28,
        "global_rank": 28
      },
      {
        "title": "Lo youtuber: un lavoro di fatto o solo hobby? - CMW lab",
        "link": "https://www.cmwlab.it/talks/lo-youtuber-un-lavoro-di-fatto-o-solo-hobby/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQDS40iZ9iFdwM0TimYwq-JoKczfwRWm7IX1qzwu9jMmVA-my1r6OLC2qkLZhlbHtP-q15MSAARchruDzl5d4M5yJDz_k6LvWmgW7jDh3uBUfVt",
        "source": "cmwlab.it",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRixio63NO9jA1g35ur5-MbGRcXPbkfdB19_NshxJmHXFiCuORW",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRixio63NO9jA1g35ur5-MbGRcXPbkfdB19_NshxJmHXFiCuORW",
        "rank": 29,
        "global_rank": 29
      },
      {
        "title": "Come funziona l'algoritmo di YouTube | Salvatore Aranzulla",
        "link": "https://www.aranzulla.it/come-funziona-lalgoritmo-di-youtube-1546586.html",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRUu0vV7VyqmAzB58l9-BV8KO7uXEv-d4K9t-cRarNgGwxsjyslQbkplYUCIfAsXtpEqzxxgl_ZfX3bkWztATTed0jsqb74J0Ua-KH4cV7BS6-i8oVS",
        "source": "Salvatore Aranzulla",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYMrxHzP3aoUB_2mrdV54z20x_HgJPjhXuUw4eA53yc11D6hNY",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYMrxHzP3aoUB_2mrdV54z20x_HgJPjhXuUw4eA53yc11D6hNY",
        "rank": 30,
        "global_rank": 30
      },
      {
        "title": "YouTube Is Getting Two New Smart Features",
        "link": "https://www.howtogeek.com/youtube-is-getting-two-new-smart-features/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQi7d7OE3tYYpQ0K0N2YmwhwaeJDpQia9z8E5mUUGmYuXveM7Jc79TKGAwew0HGVw8nR3bhm6JDzDYTfw9UOl8rmynEx6jiQgFI18MGyTgd52tKjiLMwQ",
        "source": "How-To Geek",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5aAPiqqU_t-jR1gLb3Fs8bPIaW2N7eKjZlmGEZUU8MP0N-sP_",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5aAPiqqU_t-jR1gLb3Fs8bPIaW2N7eKjZlmGEZUU8MP0N-sP_",
        "rank": 31,
        "global_rank": 31
      },
      {
        "title": "YouTube Music Review | PCMag",
        "link": "https://www.pcmag.com/reviews/youtube-music",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQT2SxtS9PqiMpEW2DDJLdjuVqHzsB-BQ_R7sUFdvjuE3SMmj4UDrJTT0vpXgXFeSKQtj3idX4xCu9G5dm0yLJ9c45ktlpBDPBKR2kVTtday3EF",
        "source": "PCMag",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuf5sF-d6UFF8UNcLGO-duPlx_Ir1i4MoSICNnH8NU08ifkakF",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuf5sF-d6UFF8UNcLGO-duPlx_Ir1i4MoSICNnH8NU08ifkakF",
        "rank": 32,
        "global_rank": 32
      },
      {
        "title": "File:YouTube logo upside down.jpg - Wikipedia",
        "link": "https://en.wikipedia.org/wiki/File:YouTube_logo_upside_down.jpg",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRLIcgPlYxOaoBg0MnSobLYyflrgF_RLdwAY09AXHWGy2jqWQnuIBNCY5I1BuzY7jeAJga0y0b9htBHe94i3Pg4B0NhHMNDVsmS-FVRKL014d-Xf6sX",
        "source": "Wikipedia",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfrQHl2V53W7OwOig95s00ICt1v4hY4a7lZNd0b-uyTTtj5cGV",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfrQHl2V53W7OwOig95s00ICt1v4hY4a7lZNd0b-uyTTtj5cGV",
        "rank": 33,
        "global_rank": 33
      },
      {
        "title": "Come funziona il sistema dei video consigliati su YouTube",
        "link": "https://www.franzrusso.it/condividere-comunicare/come-funziona-sistema-video-consigliati-youtube/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQaF0FSE7PxA7btowNW0WI4eDj_FIKEI_8408re2-q1-EWHUjS5AQVoTTaJ-RakzjGMdUBAvUq-zSLlGEqkkpNnEcOtOky24fZQuUa_IiOj565m9k0KBw",
        "source": "Franz Russo",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-1SdNMHWAPCiQEx-PaXPiQgbyeVdsltTbQ1JQ2wYMJqxu4kPJ",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-1SdNMHWAPCiQEx-PaXPiQgbyeVdsltTbQ1JQ2wYMJqxu4kPJ",
        "rank": 34,
        "global_rank": 34
      },
      {
        "title": "I 10 video di YouTube più visti di sempre | Wired Italia",
        "link": "https://www.wired.it/article/video-youtube-piu-visti-di-sempre/",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcTNZPRbDNIzqnpXEHf9D7gMsMgswNoc6Ai37G-l1N3pvkacWcLbUEyoW3tsBvzel43K6dUNlJ40GxqCQU2KUizIP64IQ5ws8e6N-8Q1-MLHtG8",
        "source": "Wired",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM76n1BuaKDNQ68GXp_7gBquBqhONk5FYIlzrpM8FOTfAqKlXv",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM76n1BuaKDNQ68GXp_7gBquBqhONk5FYIlzrpM8FOTfAqKlXv",
        "rank": 35,
        "global_rank": 35
      },
      {
        "title": "Shannon Ong - Product Lead at YouTube (Google) | Ex-Amazon ...",
        "link": "https://www.linkedin.com/in/shannon-ong-44887053",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcTFMvFisG5Yfyq07VS0hk1otTr6uQvufSrlgYLzmBkZlxd7MQh66ZmKRUOdwfXrertN7RslYSLWGQCDyxLn3JsHLob5z5LPzTRUUQlVmSHaBnVJlJa8",
        "source": "LinkedIn",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHV_Rg6Zrd0YDIQ2z9jIc_bujs7QKmKxjUMoDk6jXc_c9S5XVv",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHV_Rg6Zrd0YDIQ2z9jIc_bujs7QKmKxjUMoDk6jXc_c9S5XVv",
        "rank": 36,
        "global_rank": 36
      },
      {
        "title": "YouTube for Android TV - Download APK per Android | Aptoide",
        "link": "https://atv-smart-youtube-tv-bridge.it.aptoide.com/app",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRmou9huBiGuvQ21o1_oHca9pNgDLkKfBV39Ymzeqzl9bVNgBcQESX4EAfJATbcbQY7S7GQuJO1Ou6Jc24MdGEl8WlzAqg5TJjUSdBlq3Ukq0yLY5PpixNL4RUL2kJVtac3Fo67G2BmBOCHfCB5okQ",
        "source": "Aptoide",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbFb_Z78oKP5XSvEuouNwS_eTmOoVZjJsJNzdvHMokFARfQcCI",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbFb_Z78oKP5XSvEuouNwS_eTmOoVZjJsJNzdvHMokFARfQcCI",
        "rank": 37,
        "global_rank": 37
      },
      {
        "title": "YouTube | Giochi scaricabili per Nintendo Switch | Giochi ...",
        "link": "https://www.nintendo.com/it-it/Giochi/Giochi-scaricabili-per-Nintendo-Switch/YouTube-1467860.html",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcToBGjo96GmUCHevYIGmN-UpS53MeR2ZhzA3_OkIOo1c13GKN_eBvJl9QW6mzxeD5hTpJ-y6aDxlz1ebw2zFTwvBQpumpCdgwqbY9MRx5lDJF5Ae_Qe",
        "source": "Nintendo",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPcmAj_Iyu7oeyUAs0i72rjbHTIqZRXvIAVCd2qhICSr95odw4",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPcmAj_Iyu7oeyUAs0i72rjbHTIqZRXvIAVCd2qhICSr95odw4",
        "rank": 38,
        "global_rank": 38
      },
      {
        "title": "Videos - Springdale FWB - Springdale Free Will Baptist Church",
        "link": "https://www.springdalefwb.org/videos.html",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRqfiy0VdOS4lUakqCu5N8oAxk1lHi2UaYOIXQHAKeXimo0wfiqsUhsC8W74MzgM1uVP4A1OfEYMAxluM5HZzWfyPpD_RblP2GNnRHVxUFnREbuqPZT2UY4gw4",
        "source": "Springdale Free Will Baptist Church",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnoUBdcMizJv-JxXxIQAVVUTuZKps3gGr-K2riQiHI58po0zMW",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnoUBdcMizJv-JxXxIQAVVUTuZKps3gGr-K2riQiHI58po0zMW",
        "rank": 39,
        "global_rank": 39
      },
      {
        "title": "Come scaricare un immagine copertina di un video YouTube ...",
        "link": "https://webalquadrato.it/come-scaricare-un-immagine-copertina-di-un-video-youtube/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQqQLHtVtIDCM4p5M9cKyfWvs5oDIfpFJfHM-vRxjW2lSZ2fiShFZO5qOTXBiu0qgA_-nJOD15TpD_-4orPtUBnc5n-PMslDq5f983xndy1DgwZmzob",
        "source": "Web al quadrato",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMsPGpEn62QA4Mbp5b1w1BukB0845GFcxnabPIa_NNOti8mwbY",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMsPGpEn62QA4Mbp5b1w1BukB0845GFcxnabPIa_NNOti8mwbY",
        "rank": 40,
        "global_rank": 40
      },
      {
        "title": "List of YouTube Premium original programming - Wikipedia",
        "link": "https://en.wikipedia.org/wiki/List_of_YouTube_Premium_original_programming",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRLIcgPlYxOaoBg0MnSobLYyflrgF_RLdwAY09AXHWGy2jqWQnuIBNCY5I1BuzY7jeAJga0y0b9htBHe94i3Pg4B0NhHMNDVsmS-FVRKL014d-Xf6sX",
        "source": "Wikipedia",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCdjg8v5Sy3YsUUJ7-QKrqKVv26GF2AbrlVv_rQrpC5kdTfq9_",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCdjg8v5Sy3YsUUJ7-QKrqKVv26GF2AbrlVv_rQrpC5kdTfq9_",
        "rank": 41,
        "global_rank": 41
      },
      {
        "title": "YouTube come mezzo di comunicazione. I canali diventano ...",
        "link": "https://www.ecommerceguru.it/youtube-come-mezzo-di-comunicazione/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTlXC0HckJlOMKsilif9KELjOHd62VYSJFK0mmewDY9MDAHHi5mGbZATgwf9k581dMWeh1F_DidSh11JvqMsWzelPmDvArMyJnlogBFKOkDzeu6xgKiikhvpw",
        "source": "ecommerceguru.it",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4WRq8HcvOsFshqR-1_Mqnh8S8nyW5vqEc7U0mQsCAMAQZvXva",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4WRq8HcvOsFshqR-1_Mqnh8S8nyW5vqEc7U0mQsCAMAQZvXva",
        "rank": 42,
        "global_rank": 42
      },
      {
        "title": "AI Overviews Are Coming To YouTube In New Test",
        "link": "https://www.tulsamarketingonline.com/ai-overviews-are-coming-to-youtube-in-new-test/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQdlX-huMkuAXP9QrJWUVbCax_aXdhGZO9qhv8aeHvTCCjnHzWOfuNp56fCD5n-lQFo2UOXmqvBrWv1EP-Y3kRZL70kqvASoG3GGaVXHP1FDF_9UrN2663TziCS-bzqD4Hw",
        "source": "Tulsa Marketing Online",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrAt7rOPRTZ3ARkL-YGWskDIZZrBNHNFU8hu07vmAdCxPSDyOH",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrAt7rOPRTZ3ARkL-YGWskDIZZrBNHNFU8hu07vmAdCxPSDyOH",
        "rank": 43,
        "global_rank": 43
      },
      {
        "title": "youtubelogo.tiny - Piccola Università Italiana",
        "link": "https://piccolauniversitaitaliana.com/blog/youtube-channel-of-our-school/attachment/youtubelogo-tiny-2/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcR_uujiZj-c2T9IQGsi6RNDQA89V4tPPS5KRIxQZ9N88MXVOjUm4UoW-68H-wX87kpvdGQooJKCi1audgBArGeKR1a8zRH9D8hYgcR6mwH7nciS06nMb8nanUXoewto4NcU9g",
        "source": "Piccola Università Italiana",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WIniCTAf1KvBtx0SgYqJnVbcv2-_Ss44mQt0Z6xqtFZ27oAx",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WIniCTAf1KvBtx0SgYqJnVbcv2-_Ss44mQt0Z6xqtFZ27oAx",
        "rank": 44,
        "global_rank": 44
      },
      {
        "title": "Watching YouTube Videos in Whonix",
        "link": "https://www.whonix.org/wiki/YouTube",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcR7RCT4r1ULdXFpOWV7360X_4uHe_tgQD8LjRH_CH1PdrUaVhIVyar26V_7gxFFa3iH8Oy21z9GPKAYnBLMmPWgbGAmEwYkn8RSAqv6Zzv0OcuUFQ",
        "source": "Whonix",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYvXSyyCilfbT9uHBSCn_f8N0EHl1BJIvVnTlaimF1YfRaHUK",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYvXSyyCilfbT9uHBSCn_f8N0EHl1BJIvVnTlaimF1YfRaHUK",
        "rank": 45,
        "global_rank": 45
      },
      {
        "title": "Città di Ponte San Pietro : Canale YouTube: aggiornamenti video",
        "link": "https://www.comune.pontesanpietro.bg.it/novita/comunicati/dettaglio-notizia/Canale-YouTube-aggiornamenti-video/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQYy6M3JjkX0X8LPbEOZE4CKd12ng6JUKdWNiyzTNZJ6sQl3rJtN7USDPjLsV-quvoQfua6PHHUlDqm9DlYGTlNZOwqt2JsjYxjLCzBzofYZHBnh5TLsWLRhLBSIP2wNx3BaZpR",
        "source": "pontesanpietro.bg.it",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuKDi6F0Pi_otuJXdsJk3LoL3vUdYphDcle31ckVsg5tR1ce_3",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuKDi6F0Pi_otuJXdsJk3LoL3vUdYphDcle31ckVsg5tR1ce_3",
        "rank": 46,
        "global_rank": 46
      },
      {
        "title": "Press",
        "link": "https://www.iiha.org/press.html",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRhW5srReDyH4_Ak-Tx9sMmSq-Dbpveb62oLnH4KmiLq3WFl3jmpv0iPDENzO-MoVm8mduSVpKp_WebkoCPBxhk8dFAXXiZwVYRfIxPXJ5JWro",
        "source": "Irish Ice Hockey Association",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hEDNlncUZyS8U3J6dUD1-BxhSq1amS3ffxckJGdzzilKYXsJ",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hEDNlncUZyS8U3J6dUD1-BxhSq1amS3ffxckJGdzzilKYXsJ",
        "rank": 47,
        "global_rank": 47
      },
      {
        "title": "YouTube su Switch: un'accoppiata che funziona",
        "link": "https://it.ign.com/nintendo-switch/147290/feature/youtube-su-switch-unaccoppiata-che-funziona",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcSSV2SvwjCHocUU61DsiGPk_xEyElRFvCIpM_4xYZbvJZt60dCBPEDxcQG_Btpd1nXTXg3O6C2K0d7Knb8SZOxPols7I1RBKwjo2DG8czqG",
        "source": "IGN",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4guUHpb7PpQ0iB6vnGeBIVPaKrwBMErmLOxQYBGwoWW434KJK",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4guUHpb7PpQ0iB6vnGeBIVPaKrwBMErmLOxQYBGwoWW434KJK",
        "rank": 48,
        "global_rank": 48
      },
      {
        "title": "Second chances on YouTube - YouTube Blog",
        "link": "https://blog.youtube/inside-youtube/second-chances-on-youtube/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ6knNVKlTZXHba4AvgwcPeP1LSOT0TtO_nBtUHwAPuP-HGZD_UR3N4CIuTBLH014pjXkVi8F1RBibCJPxLvsuH6kqD7AxlkWJpv5mcAAer2BE",
        "source": "blog.youtube",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTf5i3EODOl4b32sCP5Yhgj4hNmvVPWgwZTD5YDT0OncItqKCO",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTf5i3EODOl4b32sCP5Yhgj4hNmvVPWgwZTD5YDT0OncItqKCO",
        "rank": 49,
        "global_rank": 49
      },
      {
        "title": "Talking Socks – Yarndale",
        "link": "https://yarndale.co.uk/yarndale-hub/talking-socks/",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRW-jDkjydIsMxsIswJAjXKYPgAGHbi5frCW_wkxIlJVsn_RX57VXne-KKjHK3yL5mtffPfYwTcrfJuXw4HXZ2YD6jOEsMhuRORN8GTa40qsyq_Ww",
        "source": "Yarndale",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdYWY7pF-cjaLg7cqkh-bus_51jAvae90N7h3ieGK14aqKSA1G",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdYWY7pF-cjaLg7cqkh-bus_51jAvae90N7h3ieGK14aqKSA1G",
        "rank": 50,
        "global_rank": 50
      },
      {
        "title": "Best Free YouTube Video Downloader for Windows 2025",
        "link": "https://www.donemax.com/video-download/top-4-free-youtube-video-downloader.html",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcT42ycJdf2UKgzoluI34OleyFF20kCMoM4nCVIyKw6nZHeVCEEYZRNkNzQOSdCzqTsMJC0veLw3rjdZkoJJJb57F_FMNM63E8_laLInHR0Vxvk-wSQ",
        "source": "Donemax",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNHWLmtSnUSexb14Iegqe3ZtC3-TjRAiHzoLmjzm2dhr9a8fc",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNHWLmtSnUSexb14Iegqe3ZtC3-TjRAiHzoLmjzm2dhr9a8fc",
        "rank": 51,
        "global_rank": 51
      },
      {
        "title": "Testimonianze - Clau, voglio diventare ingegnere",
        "link": "https://clauqsi.com/it/testimonianze",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRq0bWaYnFKSUlL5Bqc42G56ZVCx7Wxy_brTzlvm8n1DqzAznp8xdso2ZwOv9R8lwFL3Xf5cxBfFkRPmOhpcPSP4WUhlU4W4W4idiHKRyFIWA",
        "source": "Clau, quiero ser ingeniera",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRu0KyScoMFSBoE16gLVu9g7A3WpgVOkFi4H13bzbIvW_ZzC7y",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRu0KyScoMFSBoE16gLVu9g7A3WpgVOkFi4H13bzbIvW_ZzC7y",
        "rank": 52,
        "global_rank": 52
      },
      {
        "title": "Modello youtube logo | PosterMyWall",
        "link": "https://it.postermywall.com/index.php/art/template/7f67c7b6e98d694318172f5e604754bf/youtube-logo-design-template",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcRpQxOSkKstTyAFbJHW7rFZ432-A3RYGcUNLv2-07rCPWsOoVu086hoXkahUhaXtmu30niar0mQHpOfVbOLQTutltborWpYq9eh-eAnQWpzodI5tEtf8uW_",
        "source": "PosterMyWall",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0BRHf0T2mCd0w0aZdoBUQJdUm1Ln9AeKzH_-Jla64YK6_3TBU",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0BRHf0T2mCd0w0aZdoBUQJdUm1Ln9AeKzH_-Jla64YK6_3TBU",
        "rank": 53,
        "global_rank": 53
      },
      {
        "title": "Rob Pratley",
        "link": "https://luc.devroye.org/fonts-87321.html",
        "logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQWUq4levL2IJLit-bQYDm4o9U35ZP1zDILK4M6PZ6IXNLyCCfM8mN-Dbup_Cpy009Pdqs1OO4W0vRc2OyGIu5EkE4SHxrmzXIh0JQo5KSeh2hI2HA",
        "source": "devroye.org",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVwnQjv1TrJlbyTjSQfLesOC8dVjEjXQlEF08KnM-2HdN1g0po",
        "image_url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVwnQjv1TrJlbyTjSQfLesOC8dVjEjXQlEF08KnM-2HdN1g0po",
        "rank": 54,
        "global_rank": 54
      },
      {
        "title": "YouTube ha cambiato logo e grafica",
        "link": "https://www.ilpost.it/2017/08/29/youtube-nuovo-logo-grafica/",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQp-snfKZuufR_iAZB397tN-BNRwouvNzxo8dSsZEupR4RNui_AX8ap7B4vsR34kj0V10xUWUWoXUN0aPkZ68w3plXZyyzZHsJZPopGufKBbFE7",
        "source": "Il Post",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfUtY8fn-_Pip0clNa2qDhwz2rDmxTB3sESP0I7OO3TmQw5Co8",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfUtY8fn-_Pip0clNa2qDhwz2rDmxTB3sESP0I7OO3TmQw5Co8",
        "rank": 55,
        "global_rank": 55
      },
      {
        "title": "Come guadagnare su YouTube - EuroFormation Formazione ...",
        "link": "https://www.euroformation.it/elenco-corsi/come-guadagnare-su-youtube/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcQ4trsmZFzYn4QUE3VmVGhk133-S5_qpuEytq7ujFk4NGhIqk5hig3XfNYZU5Wqmatsqq94VuU1nNR1_eyw6nWrAdifa1y5jb622URJ_0XMNHbSSt3SMzHrGw",
        "source": "EuroFormation",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwSNRvPPOe3Lr4tNIW3KEAag8zcgL6tDmrwQmG4rVtEvak75lI",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwSNRvPPOe3Lr4tNIW3KEAag8zcgL6tDmrwQmG4rVtEvak75lI",
        "rank": 56,
        "global_rank": 56
      },
      {
        "title": "How to Copy YouTube Video URL Link from YouTube App on Phone ...",
        "link": "https://www.youtube.com/watch?v=QCwoGxArIsY",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmetLJpEeBZIkBH8iY9Hl9Zmg6FyRiNKggrlH2TYUydoK_WFTm",
        "image_url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmetLJpEeBZIkBH8iY9Hl9Zmg6FyRiNKggrlH2TYUydoK_WFTm",
        "rank": 57,
        "global_rank": 57
      },
      {
        "title": "Youtube Immagini - Sfoglia 139,903 foto, vettoriali e video ...",
        "link": "https://stock.adobe.com/it/search?k=youtube",
        "logo": "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcRmO_8sjV79Lvr80yZ9v1mjcRZDN1hZFi-kX0mYgHFcDxvZ4OuuaYwV5sxiW05Fr2yEjvT8RYkmpSI3x9KzYnAoAOZc8ty6wCgzyZMh0u3JrhgGpag",
        "source": "Adobe",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtKyF0z1Hck78_jgdXgYKBeedGXV1jWUKglS7pNRJlYkDBhrW",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtKyF0z1Hck78_jgdXgYKBeedGXV1jWUKglS7pNRJlYkDBhrW",
        "rank": 58,
        "global_rank": 58
      },
      {
        "title": "YouTube says that music is now 25% of its global watch time",
        "link": "https://musically.com/2021/09/16/youtube-says-that-music-is-now-25-of-its-global-watch-time/",
        "logo": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSFAxZpnQqFaA4qoNqYk_NlH7wPwpNpjN3Fyh-p6wfFTc-IhE0-Ufkg2aomh1NFcGdcunSi9BYOB0RK6mkP7VVvlBlxdcQcbJILVSRsFGTY83Gj",
        "source": "Music Ally",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjPmybg3_wHprlJf2gIX5GjEPxEsB51OyF42VDXiKkYjYF2oTr",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjPmybg3_wHprlJf2gIX5GjEPxEsB51OyF42VDXiKkYjYF2oTr",
        "rank": 59,
        "global_rank": 59
      },
      {
        "title": "Come mandare un messaggio privato su YouTube - YouTube",
        "link": "https://www.youtube.com/watch?v=KmU-csRfCW0",
        "logo": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHQslzHLLyLc_qne5jxn7JocidlmUPyegZ8ojX3WVlorFk8BxW9a3vJWjDzN99UHVTqSaNBj_-6XykhxuVQfF3Ye7xScSWSuc2QHXi0a12CkVwBmo",
        "source": "YouTube",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRljGzaUycjQb5RmqkBcRwZeuHns3XuLgI69iBQQSFnPijyMXBd",
        "image_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRljGzaUycjQb5RmqkBcRwZeuHns3XuLgI69iBQQSFnPijyMXBd",
        "rank": 60,
        "global_rank": 60
      }
    ]
  }
  ```
</ResponseExample>
