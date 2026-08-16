# Exact matches

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-lens/exact-matches](https://docs.brightdata.com/api-reference/serp/google-lens/exact-matches)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Lens Exact Matches parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches
```

## Parameters

<ParamField type="query">
  URL of image you want to search
</ParamField>

<ParamField type="string">
  The `brd_lens` parameter in your request fetches specific Google Lens **tab results** by specifying a tab value (e.g. `products`, `homework`, `visual_matches`, `exact_matches`).

  ```txt wrap theme={null}
  https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches"
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
        url: 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches',
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
      'url': 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=exact_matches',
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
  ```json 200 highlight={5} theme={null}
  {
    "general": {
      "language": "en",
      "mode": "search",
      "type": "exact_matches"
    },
    "tabs": [
      {
        "name": "AI Mode",
        "link": "https://www.google.com/search?sa=X&sca_esv=2dc65c8cbd5d287b&lns_surface=26&biw=1060&bih=1095&hl=en&gl=us&udm=50&vsrid=CNeD0ePDsf-PugEQAhgBIiRiYmRjMDRlOC04YzcwLTRjZDAtYWUzNi1iMzAyYWQyMGY0M2MyBiICcHcoHDiYp4b09PySA1AA&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=fEUg-2t0DWAPdWWQnNYlwye88VeRdG-Q3ryaW-kJC7VZkm8UN79RVQ&lsessionid=LpJLEfXiJ2BaHlGUfp7QHwMAzKrkYM_GI7nGrYtEkxI3UVsA6QtSGA&fbs=ADc_l-Yv0YTTwuvIVYRVntg99Yl4C2siJayzZyC50sFnWwRH6ow_bxUxJgqfeyXucYwXL8BodgQvcQKf4r6af6eJrUBEJPcPla2xArZ4O2zHdIqqQ1YVgeUF-eZ8YfKEFkJDuGVjK7bY&q=&aep=1&ntc=1&ved=2ahUKEwiixqr19PySAxXrETQIHYm2EFEQ2J8OegQIBBAD"
      },
      {
        "name": "All",
        "type": "all",
        "link": "https://www.google.com/search?sa=X&sca_esv=2dc65c8cbd5d287b&lns_surface=26&biw=1060&bih=1095&hl=en&gl=us&udm=26&vsrid=CNeD0ePDsf-PugEQAhgBIiRiYmRjMDRlOC04YzcwLTRjZDAtYWUzNi1iMzAyYWQyMGY0M2MyBiICcHcoHDiYp4b09PySA1AA&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=fEUg-2t0DWAPdWWQnNYlwye88VeRdG-Q3ryaW-kJC7VZkm8UN79RVQ&lsessionid=LpJLEfXiJ2BaHlGUfp7QHwMAzKrkYM_GI7nGrYtEkxI3UVsA6QtSGA&q=&ved=2ahUKEwiixqr19PySAxXrETQIHYm2EFEQs6gLegQICBAB"
      },
      {
        "name": "Exact matches",
        "type": "exact_matches",
        "selected": true
      },
      {
        "name": "Visual matches",
        "type": "visual_matches",
        "link": "https://www.google.com/search?sa=X&sca_esv=2dc65c8cbd5d287b&lns_surface=26&biw=1060&bih=1095&hl=en&gl=us&udm=44&vsrid=CNeD0ePDsf-PugEQAhgBIiRiYmRjMDRlOC04YzcwLTRjZDAtYWUzNi1iMzAyYWQyMGY0M2MyBiICcHcoHDiYp4b09PySA1AA&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=fEUg-2t0DWAPdWWQnNYlwye88VeRdG-Q3ryaW-kJC7VZkm8UN79RVQ&lsessionid=LpJLEfXiJ2BaHlGUfp7QHwMAzKrkYM_GI7nGrYtEkxI3UVsA6QtSGA&q=&ved=2ahUKEwiixqr19PySAxXrETQIHYm2EFEQs6gLegQIBhAB"
      },
      {
        "name": "About this image",
        "type": "about",
        "link": "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAFPy4vLguN588fHhjf_7dzEKMEkwKqkkJaUkG5ikWuhaJJsb6JokpxjoJqYam-kmGRsYJaYYGaSZGCcbsSkxFZRryFjMWN725cufScwBDACKWlZTTAAAAA&sa=X&ved=2ahUKEwiixqr19PySAxXrETQIHYm2EFEQs6gLegQIBxAB"
      }
    ],
    "exact_matches": [
      {
        "title": "MRU's YouTube Channel - Emissions Analyzers",
        "link": "https://mru-instruments.com/inthenews/mrus-youtube-channel/",
        "extensions": [
          "Sep 14, 2020",
          "1,140x500"
        ],
        "source": "MRU Instruments",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAA...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "title": "Subscribe to out YouTube Channel - Connected Community Schools",
        "link": "https://connectedcommunityschools.org/subscribe-to-out-youtube-channel/",
        "extensions": [
          "980x595"
        ],
        "source": "Connected Community Schools",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "title": "YouTube | Nintendo Switch download software | Games",
        "link": "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/YouTube-1467860.html",
        "extensions": [
          "Aug 11, 2018",
          "2,000x1,000"
        ],
        "source": "Nintendo",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAA...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "title": "YouTube says that music is now 25% of its global watch time",
        "link": "https://musically.com/2021/09/16/youtube-says-that-music-is-now-25-of-its-global-watch-time/",
        "extensions": [
          "Sep 16, 2021",
          "780x260"
        ],
        "source": "Music Ally",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "title": "YouTube Music gets background listening for free users in Canada",
        "link": "https://musically.com/2021/10/05/youtube-music-gets-background-listening-for-free-users-in-canada/",
        "extensions": [
          "Oct 5, 2021",
          "780x260"
        ],
        "source": "Music Ally",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "title": "Industry figures hail YouTube Music's 50m-subscribers milestone",
        "link": "https://musically.com/2021/09/03/industry-hail-youtube-subscribers/",
        "extensions": [
          "Sep 3, 2021",
          "780x260"
        ],
        "source": "Music Ally",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAA...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "title": "Social Media Tutorials - Visual One Law",
        "link": "https://visualonelaw.com/social-media-tutorials/",
        "extensions": [
          "1,730x580"
        ],
        "source": "Visualonelaw",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAA...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "title": "How to restore Dislikes in Youtube - Hardware Busters",
        "link": "https://hwbusters.com/news/how-to-restore-dislikes-in-youtube/",
        "extensions": [
          "Aug 26, 2022",
          "1,920x720"
        ],
        "source": "Hardware Busters",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAA...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "title": "Adverts On Youtube - Can You Avoid Them On Your Video?",
        "link": "https://www.media2u.co.uk/adverts-on-youtube-can-you-avoid-them-on-your-video/",
        "extensions": [
          "Apr 20, 2022",
          "867x266"
        ],
        "source": "Media2u",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAA...",
        "rank": 9,
        "global_rank": 9
      },
      {
        "title": "AI Overviews Are Coming To YouTube In New Test",
        "link": "https://www.tulsamarketingonline.com/ai-overviews-are-coming-to-youtube-in-new-test/",
        "extensions": [
          "Apr 25, 2025",
          "707x190"
        ],
        "source": "Tulsa Marketing Online",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 10,
        "global_rank": 10
      },
      {
        "title": "YouTube | Hitler Parody Wiki - Fandom",
        "link": "https://hitlerparody.fandom.com/wiki/YouTube",
        "extensions": [
          "1,200x393"
        ],
        "source": "Hitler Parody Wiki",
        "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAA...",
        "rank": 11,
        "global_rank": 11
      },
      {
        "title": "Subscribe to our YouTube channel - Tataylino.com",
        "link": "https://tataylino.com/subscribe-to-our-youtube-channel/",
        "extensions": [
          "Apr 16, 2019",
          "640x164"
        ],
        "source": "Tataylino.com",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_psUGnh3vZ3sXlJw7jVAYoSuR71ZdDi4qIbGUb0Mro34k51pRhFgRIZ0&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_psUGnh3vZ3sXlJw7jVAYoSuR71ZdDi4qIbGUb0Mro34k51pRhFgRIZ0&s",
        "rank": 12,
        "global_rank": 12
      },
      {
        "title": "In the Asian Evening, Singapore, Jakarta, Manila and North. On ...",
        "link": "https://x.com/tomkeene/status/1821308177930969460",
        "extensions": [
          "Aug 7, 2024",
          "1,200x300"
        ],
        "source": "X",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4GOC0vgtX2GCD65XyX5eT2urI45FymFw1Uhdwathjbw3GKVDaw8QEto&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4GOC0vgtX2GCD65XyX5eT2urI45FymFw1Uhdwathjbw3GKVDaw8QEto&s",
        "rank": 13,
        "global_rank": 13
      },
      {
        "title": "How to: YouTube Marketing - Snob Monkey",
        "link": "https://snobmonkey.com/how-to-youtube-marketing/",
        "extensions": [
          "Jul 12, 2021",
          "1,920x720"
        ],
        "source": "Snob Monkey",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRMnxh88z62FES3D7rsZSN2WmKodtzDXtKPnF8veHWW0EnOGZDIFnOkut&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRMnxh88z62FES3D7rsZSN2WmKodtzDXtKPnF8veHWW0EnOGZDIFnOkut&s",
        "rank": 14,
        "global_rank": 14
      },
      {
        "title": "The differences between RTK and PPK. Which method is best for ...",
        "link": "https://www.ardusimple.com/ppk-vs-rtk/",
        "extensions": [
          "1,000x400"
        ],
        "source": "ArduSimple",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSOfaprHZdVN8UCo8I3KGyyCdaDUgKmETI7BVYwD8EnDpTH2304GR6ic9&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSOfaprHZdVN8UCo8I3KGyyCdaDUgKmETI7BVYwD8EnDpTH2304GR6ic9&s",
        "rank": 15,
        "global_rank": 15
      },
      {
        "title": "YouTube Logo and the history of the company - LogoMyWay",
        "link": "https://blog.logomyway.com/youtube-logo/",
        "extensions": [
          "707x190"
        ],
        "source": "LogoMyWay",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3L_1DMIwi0fIZCfLDMfL7RIVAXgCx6_y7OhadkHjSkbYZxY0xjirBAA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3L_1DMIwi0fIZCfLDMfL7RIVAXgCx6_y7OhadkHjSkbYZxY0xjirBAA&s",
        "rank": 16,
        "global_rank": 16
      },
      {
        "title": "Some of My Favorite YouTube Channels - The \"Make Do\" Homemaker",
        "link": "http://makedohomemaker.blogspot.com/2024/04/some-of-my-favorite-youtube-channels.html",
        "extensions": [
          "Apr 16, 2024",
          "1,125x360"
        ],
        "source": "The \"Make Do\" Homemaker",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywszzbKDZNevDZGLNeU9tv7P4y8wFTXWt_WF17cZxi9O7H_TFXrx4RsA&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywszzbKDZNevDZGLNeU9tv7P4y8wFTXWt_WF17cZxi9O7H_TFXrx4RsA&s",
        "rank": 17,
        "global_rank": 17
      },
      {
        "title": "Others - Tataylino.com",
        "link": "https://tataylino.com/category/others/",
        "extensions": [
          "Sep 30, 2020",
          "640x164"
        ],
        "source": "Tataylino.com",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_psUGnh3vZ3sXlJw7jVAYoSuR71ZdDi4qIbGUb0Mro34k51pRhFgRIZ0&s",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_psUGnh3vZ3sXlJw7jVAYoSuR71ZdDi4qIbGUb0Mro34k51pRhFgRIZ0&s",
        "rank": 18,
        "global_rank": 18
      }
    ]
  }
  ```
</ResponseExample>
