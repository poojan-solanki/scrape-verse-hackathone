# Visual matches

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-lens/visual-matches](https://docs.brightdata.com/api-reference/serp/google-lens/visual-matches)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Lens Visual Matches parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches
```

## Parameters

<ParamField type="query">
  URL of image you want to search
</ParamField>

<ParamField type="string">
  The `brd_lens` parameter in your request fetches specific Google Lens **tab results** by specifying a tab value (e.g. `products`, `homework`, `visual_matches`, `exact_matches`).

  ```txt wrap theme={null}
  https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches"
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
        url: 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches',
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
      'url': 'https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&brd_lens=visual_matches',
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
      "type": "visual_matches"
    },
    "tabs": [
      {
        "name": "AI Mode",
        "link": "https://www.google.com/search?sa=X&sca_esv=71ffffd766b5380a&lns_surface=26&biw=987&bih=1097&hl=en&gl=us&udm=50&vsrid=CKienZejr5684gEQAhgBIiQzNWFmNzM5NS0zM2Y4LTRkNmEtOThjYi01NjliM2E2Mjc2ZDIyBiICc2QoBTi4ueOU8PySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=hitd2dN0jyWqgFfGjP_XnQPIvavy1d_VkxyabwBmHYuXXOL8cfIoFg&lsessionid=v7TCxI5b8d12uRO4bCJNRxNbkUm0dXpFWrm7z_WkPK3J6NVN2VpjMg&fbs=ADc_l-Yv0YTTwuvIVYRVntg99Yl4C2siJayzZyC50sFnWwRH6ow_bxUxJgqfeyXucYwXL8BodgQvcQKf4r6af6eJrUBEJPcPla2xArZ4O2zHdIqqQ1YVgeUF-eZ8YfKEFkJDuGVjK7bY&q=&aep=1&ntc=1&ved=2ahUKEwjXpfmV8PySAxVOUGwGHXIbGt4Q2J8OegQIDBAD"
      },
      {
        "name": "All",
        "type": "all",
        "link": "https://www.google.com/search?sa=X&sca_esv=71ffffd766b5380a&lns_surface=26&biw=987&bih=1097&hl=en&gl=us&udm=26&vsrid=CKienZejr5684gEQAhgBIiQzNWFmNzM5NS0zM2Y4LTRkNmEtOThjYi01NjliM2E2Mjc2ZDIyBiICc2QoBTi4ueOU8PySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=hitd2dN0jyWqgFfGjP_XnQPIvavy1d_VkxyabwBmHYuXXOL8cfIoFg&lsessionid=v7TCxI5b8d12uRO4bCJNRxNbkUm0dXpFWrm7z_WkPK3J6NVN2VpjMg&q=&ved=2ahUKEwjXpfmV8PySAxVOUGwGHXIbGt4Qs6gLegQIDxAB"
      },
      {
        "name": "Exact matches",
        "type": "exact_matches",
        "link": "https://www.google.com/search?sa=X&sca_esv=71ffffd766b5380a&lns_surface=26&biw=987&bih=1097&hl=en&gl=us&udm=48&vsrid=CKienZejr5684gEQAhgBIiQzNWFmNzM5NS0zM2Y4LTRkNmEtOThjYi01NjliM2E2Mjc2ZDIyBiICc2QoBTi4ueOU8PySAw&vsint=CAIqDAoCCAcSAggKGAEgATojChYNAAAAPxUAAAA_HQAAgD8lAACAPzABEIAIGIAIJQAAgD8&lns_mode=un&source=lns.web.gsbubu&vsdim=1024,1024&gsessionid=hitd2dN0jyWqgFfGjP_XnQPIvavy1d_VkxyabwBmHYuXXOL8cfIoFg&lsessionid=v7TCxI5b8d12uRO4bCJNRxNbkUm0dXpFWrm7z_WkPK3J6NVN2VpjMg&vsrid=CKienZejr5684gEQAhgBIiQzODQ1Zjk3YS1kYjM0LTRlMDQtODMwNi1jNmYxYTM2Yzg4ODcyBiICc2QoBTi4ueOU8PySA1AA&q=&ved=2ahUKEwjXpfmV8PySAxVOUGwGHXIbGt4Qs6gLegQIDRAB"
      },
      {
        "name": "Visual matches",
        "type": "visual_matches",
        "selected": true
      },
      {
        "name": "About this image",
        "type": "about",
        "link": "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAAFMALP_IkoKSAionp2Xo6-evOIBEAIYASIkMzVhZjczOTUtMzNmOC00ZDZhLTk4Y2ItNTY5YjNhNjI3NmQyMgYiAnNkKAU4uLnjlPD8kgNQAJs_T4BMAAAA&sa=X&ved=2ahUKEwjXpfmV8PySAxVOUGwGHXIbGt4Qs6gLegQIEBAB"
      }
    ],
    "images": [
      {
        "title": "YouTube gets a brand new logo and a new look for both mobile and desktop",
        "link": "https://www.androidauthority.com/youtube-new-logo-796482/",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "Android Authority",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAA...",
        "image_base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAA...",
        "rank": 1,
        "global_rank": 2
      }
    ],
    "exact_matches": [
      {
        "title": "Find Out Who Posts the Most Comments on Your YouTube Videos",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "source": "vidIQ",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      }
    ]
  }
  ```
</ResponseExample>
