# Google Search pagination

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/pagination](https://docs.brightdata.com/api-reference/serp/google-search/pagination)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Google Search pagination parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/search?q=pizza&start=20
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define the result offset - results to start from the selected value. Used for managing pagination.

  ```http theme={null}
  https://www.google.com/search?q=pizza&start=20
  ```
</ParamField>

<ParamField type="string">
  <Warning>
    **Deprecated As of September 11, 2025 by Google**

    * The Number of results to return is usually 10, results' set size may vary.
    * The `start` parameters can be used to paginate within results' set. 
    * To get top 100 results, Bright Data offes a Web Scraping API. Read more here: [Get top google 100 results in one API call](/scraping-automation/serp-api/get-top-100-google-results)
  </Warning>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&start=20",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&start=20"
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
        url: 'https://www.google.com/search?q=pizza&start=20',
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
      'url': 'https://www.google.com/search?q=pizza&start=20',
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
  ```json 200 highlight={16} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 1190000000,
      "search_time": 0.44,
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "text",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:51:55.402Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&start=20&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&aep=1&ntc=1&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDYnw56BAgJEAQ"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBC0qAt6BAgLEAE"
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
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBC0qAt6BAgQEAE"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBCzqAt6BAgOEAE"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDSlAl6BAg_EAE"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBCzqAt6BAg-EAE"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&q=pizza&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBCzqAt6BAhJEAE"
      },
      {
        "title": "Books",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&udm=36&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-4Dki9dynYvfwBVZUSUkihwf6Po1X8vgm-4XqAkWV_U_mSmFfDrYQ3JJnT9pFVWyBg4AncR4kUgE3P9Dn8YQ2qpg4mGYZH3cN0xQoqqXY3iPBHuF6UXBhWnU9Lvfw4ijII1Eq0jCo7w_teMvuVi1Ne_ekoSug&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDSlAl6BAhKEAE"
      },
      {
        "title": "Pizza",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Restaurant&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YkRxG3oIOwBP9pqV8A9knLvLZuH8Ewms8PAcf7ea3t7vBPQw4wVHVJjcROFSOKtHXRR2H_BfQe33fsQJwZ7aPDC6-ok&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBCRzQkoAHoECCYQAQ&ictx=0"
      },
      {
        "title": "Open now",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza+open+now&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-ECkonaxdRgZHsQ3XflvCSBiBCh_HbnzwOVJT-6OwuTvkFnr4XZJ6m8RkC2Fm5NGv2sorw8NbG_kFTWumCMT5jNTI_TVBcLXVF_mk39-SWhfTOYHMWr9FknOPOs0q-crIBxIW9i8mduwjXgtuXbqR1QMCgDOg&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoAHoECBkQAQ&ictx=0"
      },
      {
        "title": "Top rated",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=top+rated+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-FC0ik9p7W40OH-Q3jP-vf-5Mtff03iEnPSzoqB-QNRky0asQGe19T-rLo3j4dKwg9K03-l4Y0aGnO5tf1a_6vVc4NodbwRxARhOPxmdDeRSTUQeoqj_oWiIGPXSF5xIVnZgbShI3syWAnARvf5cPjQCB4EzA&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoAXoECBoQAQ&ictx=0"
      },
      {
        "title": "Cheap",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=cheap+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-FwR7YC2iiNfesR7EhVUJV4xMiq-wqZuzQNTXo-ei19eUztSjfyDI5PzqsPvQFzzonTDVZ-bd4RknDhFOA54OC2GPMi_GEtlOI7zpzC12JGNdw2XWsoCTtJOYv0RTO-jC4snE34&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoAnoECB0QAQ&ictx=0"
      },
      {
        "title": "Upscale",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=upscale+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-GyVBFHuURJ5r9dsjmlxShj9gOY566k6M_Z8ryTQ2ujcSQU4pktDVdWE_wWsXLjwuvZZ8TWpZWz2H8h3MebldMJbySKoSw54dGEJ1i9mqukLXDANGElFaJbH8b4tFukAHLOpOGZjycO5ZBmhnbyEiUxIH9eqw&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoA3oECCUQAQ&ictx=0"
      },
      {
        "title": "Beer",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=beer+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-GvIbMixB_SE227_SwtA5frifagUSkZ0lE6Js6dSDDrQTmZhal5fHlZ1KJQ-Mp1q-L4mcOVynCgmIxX1fMQA9L4RmDQ8bsKHxOYOmHoM4hZveKOVn6PPiwDEUaV7aVpawvkplCMkqhe4z9Yzjko4u_mzkySyvO0VyUpykyhmgMk2t4r7aOjg94bn4YtOsJvg8NW3_Zb&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoBHoECCIQAQ&ictx=0"
      },
      {
        "title": "Wine",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=wine+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-Et6sGWmPCsL1NN9TXZF-w4uoXfsF7BGyzoGjhtHxEjJ4rXzxPV3_hCOKn2gcAgKmc_ErzdSBd0areMK5vdiDTt66NSCYOVInN9iNM_T0WxY-J6lQ78Inc5bxYMwpY-xfsdrGuy-BxJc0GPHDESJONClZg0qOkkmSh3jLXVu2QrbUdkyoizZd-qhlWfr2WhaPQtq9yr&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoBXoECEgQAQ&ictx=0"
      },
      {
        "title": "Recently opened",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=recently+opened+pizza&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-wuWIuHbR2VDKv6da3f4aDvN8AZxA4LGRgSO9dgIm2PykXMFDjhzUYFwURhZ_B2a58YFCPUHvqd_5dUYo1wRb0NtooGKtRpGUYuY9zpbRZ-GJ7jIxfTxsLLGw6QUgqkQg1iOvOgLdeSbCK8T9BCWkfYPhP7j3SncII5eeAhM_kso9Q4KSoodhFrjRhpUF01tWJi3v4rElzOAjlMX6CiXuc4UaAvR2BDnWaiT0WsBCdl1PaZc3cX1O_HgkpAqTviw7NVj_aQ&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDEqwkoBnoECEQQAQ&ictx=0"
      }
    ],
    "organic": [
      {
        "link": "https://www.reddit.com/r/Pizza/comments/1rbx2ud/day_97_of_making_pizza_every_day/",
        "source": "Reddit · r/Pizza",
        "display_link": "90+ comments · 2 days ago",
        "title": "Day 97 of making pizza every day. : r/Pizza",
        "description": "The home of pizza on reddit. An educational community devoted to the art of pizza making. 173K Weekly visitors 4.6K ...",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "0:40",
        "duration_sec": 40,
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.youtube.com/watch?v=h3qO7Jii3BE",
        "source": "YouTube · Vito Iacopelli",
        "display_link": "10.3K+ views · 3 days ago",
        "title": "How To Make Frozen Pizza Bases Ready Anytime at Home",
        "description": "We got frozen bases and we made this lovely pizza in 5 minutes and a home oven. It's soft it's crunchy it's lovely.",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "10:42",
        "duration_sec": 642,
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://deweyspizza.com/",
        "source": "Dewey's Pizza",
        "display_link": "https://deweyspizza.com",
        "title": "Dewey's Pizza: Home",
        "description": "Bobby Boucher. Cajun Red Sauce, Mozzarella, Caramelized Red Onions, Diced Green Bell Peppers, Andouille Sausage, Blackened Chicken, Celery, Cajun Seasoning, and ...Read more",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "link": "https://www.instagram.com/reel/DVJmnFYke-i/",
        "source": "Instagram · calebwsimpson",
        "display_link": "54K+ likes · 1 hour ago",
        "title": "Pizza Review #39 @iansomerhalder",
        "description": "And favorite pizza in New York? I'm going to happier grocery. It is ridiculous. Oh yeah? Could I buy you a slice right now?",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "2:04",
        "duration_sec": 124,
        "rank": 4,
        "global_rank": 4
      },
      {
        "link": "https://www.reddit.com/r/Costco/comments/1rdzzri/costco_where_to_find_most_perfect_slice_of_cheap/",
        "source": "Reddit · r/Costco",
        "display_link": "230+ comments · 6 hours ago",
        "title": "Costco: Where to find most perfect slice of cheap cheese ...",
        "description": "$1.99 slice of Costco pepperoni pizza is my go-to guilty pleasure lunch. Usually shared with my kids.Read more",
        "snippet_highlighted_words": [
          "Costco pepperoni pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "link": "https://businessinthornton.com/best-of/pizza-restaurants/",
        "source": "businessinthornton.com",
        "display_link": "https://businessinthornton.com › Best of Thornton",
        "title": "Where to get good pizza in Thornton",
        "description": "Whether you're looking for NY-style pizza to go, personalized pan pizzas or specialty pizza with a beer in a pub setting, Thornton has enough variety to let ...Read more",
        "snippet_highlighted_words": [
          "NY-style pizza to go, personalized pan pizzas or specialty pizza with a beer in a pub setting"
        ],
        "extensions": [
          {
            "inline": true,
            "type": "text",
            "text": "Nov 19, 2019",
            "rank": 1
          }
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "link": "https://pizzaluce.com/",
        "source": "Pizza Luce",
        "display_link": "https://pizzaluce.com",
        "title": "Pizza Luce: Minnesota's Best Pizza",
        "description": "Handmade gourmet pizza made from fresh ingredients. Vegan, Vegetarian and Gluten Free options. Free Pizza luce delivery, curbside pickup and online ordering ...",
        "snippet_highlighted_words": [
          "Handmade gourmet pizza made from fresh ingredients"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "link": "https://professorpizza.com/",
        "source": "Professor Pizza",
        "display_link": "https://professorpizza.com",
        "title": "Professor Pizza | Chicago's Award Winning Pizza",
        "description": "Professor Pizza brings authentic, chef-crafted Chicago Pizza to life with bold flavors, creative toppings, and classic styles you'll love.",
        "snippet_highlighted_words": [
          "Pizza",
          "Pizza"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "link": "https://pizzarocklasvegas.com/",
        "source": "Pizza Rock Las Vegas",
        "display_link": "https://pizzarocklasvegas.com",
        "title": "Pizza Rock Las Vegas – Gourmet pizzas, hand-crafted artisan ...",
        "description": "Pizza Rock Las Vegas restaurant pairs delicious gourmet pizzas with specialty cocktails from our full-service bar, and an extensive beer & wine menu to ...",
        "snippet_highlighted_words": [
          "Pizza Rock Las Vegas restaurant"
        ],
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "rank": 9,
        "global_rank": 9
      }
    ],
    "images": [
      {
        "original_image": "https://cdn.jwplayer.com/v2/media/1znN8BBx/thumbnails/WmRQ08C1.jpg?width=1280",
        "link": "https://www.allrecipes.com/recipe/20171/quick-and-easy-pizza-crust/",
        "title": "Easy Homemade Pizza Dough",
        "source": "Allrecipes",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAA...",
        "recipe": {
          "rating": 4.7,
          "reviews_cnt": 4141,
          "title": "Easy Homemade Pizza Dough",
          "ingredients": [
            "1 cup warm water (110 degrees F/45 degrees C)",
            "1 (.25 ounce) package active dry yeast",
            "1 teaspoon white sugar",
            "2.5 cups bread flour",
            "2 tablespoons olive oil"
          ],
          "summary": "An easy pizza crust recipe that will hold all your favorite toppings is  simple to make with basic ...",
          "duration": "45 min",
          "duration_sec": 2700,
          "volume": "8"
        },
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Easy Homemade Pizza Dough",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 10
      },
      {
        "original_image": "https://www.recipetineats.com/tachyon/2023/05/Garlic-cheese-pizza_9.jpg",
        "link": "https://www.recipetineats.com/garlic-cheese-pizza/",
        "title": "Garlic cheese pizza",
        "source": "RecipeTin Eats",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAA...",
        "recipe": {
          "rating": 5,
          "reviews_cnt": 10,
          "title": "Garlic cheese pizza",
          "ingredients": [
            "1 classic pizza dough ((wood-fired Italian style))",
            "1 fast no-yeast pizza dough ((this is excellent!))",
            "1 Store bought",
            "2 tbsp extra virgin olive oil",
            "2 tsp garlic ((2 - 3 large cloves), crushed using garlic press or make  paste using side of knife - Note 2))"
          ],
          "summary": "Recipe video above. No visit to your favourite pizzeria start without  garlic cheese pizza! My best ...",
          "duration": "18 min",
          "duration_sec": 1080,
          "volume": "1"
        },
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Garlic cheese pizza",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 11
      },
      {
        "original_image": "https://i1.wp.com/colorfulrecipes.com/wp-content/uploads/2020/08/best-pepperoni-pizza-recipe-10.jpg?fit=1200%2C1800&ssl=1",
        "link": "https://colorfulrecipes.com/classic-pepperoni-pizza-recipe/",
        "title": "Classic Pepperoni Pizza Recipe",
        "source": "Colorful Recipes",
        "source_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "recipe": {
          "title": "Classic Pepperoni Pizza Recipe",
          "ingredients": [
            "Pizza dough",
            "Pizza sauce, 1/2 cup",
            "Mozzarella cheese, 2/3 cup",
            "Dried basil, 1 tsp",
            "Dried oregano, 1 tsp"
          ],
          "summary": "We made this classic pepperoni pizza recipe for the first time a couple of  days ago. Everyone loved ...",
          "duration": "19 min",
          "duration_sec": 1140,
          "volume": "8"
        },
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_alt": "Classic Pepperoni Pizza Recipe",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 12
      }
    ],
    "pagination": {
      "pages": [
        {
          "page": 1,
          "start": 0,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=KrieaYrdEcXMp84P0cSbyQw&start=0&sa=N&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDy0wN6BAgMEAQ"
        },
        {
          "page": 2,
          "start": 10,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=KrieaYrdEcXMp84P0cSbyQw&start=10&sa=N&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDy0wN6BAgMEAY"
        },
        {
          "page": 4,
          "start": 30,
          "link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=KrieaYrdEcXMp84P0cSbyQw&start=30&sa=N&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDy0wN6BAgMEAk"
        }
      ],
      "current_page": 3,
      "next_page": 4,
      "next_page_start": 30,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&ei=KrieaYrdEcXMp84P0cSbyQw&start=30&sa=N&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDy0wN6BAgMEAk"
    },
    "related": [
      {
        "text": "Pizza Hut near me",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+near+me&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDEQAQ",
        "rank": 1,
        "global_rank": 13
      },
      {
        "text": "Pizza Hut menu",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Hut+menu&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDYQAQ",
        "rank": 2,
        "global_rank": 14
      },
      {
        "text": "Pizza definition",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+definition&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDUQAQ",
        "rank": 3,
        "global_rank": 15
      },
      {
        "text": "Pizza open",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+open&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDAQAQ",
        "rank": 4,
        "global_rank": 16
      },
      {
        "text": "Pizza Boys",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Boys&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDQQAQ",
        "rank": 5,
        "global_rank": 17
      },
      {
        "text": "Pizza delivery",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+delivery&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDIQAQ",
        "rank": 6,
        "global_rank": 18
      },
      {
        "text": "Pizza Papa Johns",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Papa+Johns&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECDMQAQ",
        "rank": 7,
        "global_rank": 19
      },
      {
        "text": "Pizza Marco's",
        "link": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=Pizza+Marco%27s&sa=X&ved=2ahUKEwiKmo3tofSSAxVF5skDHVHiJsk4FBDVAnoECC8QAQ",
        "rank": 8,
        "global_rank": 20
      }
    ],
    "oragnic": [
      {
        "link": "https://www.reddit.com/r/Pizza/comments/1rbx2ud/day_97_of_making_pizza_every_day/",
        "source": "Reddit · r/Pizza",
        "display_link": "90+ comments · 2 days ago",
        "title": "Day 97 of making pizza every day. : r/Pizza",
        "description": "The home of pizza on reddit. An educational community devoted to the art of pizza making. 173K Weekly visitors 4.6K ...",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "0:40",
        "duration_sec": 40,
        "rank": 1,
        "global_rank": 1
      },
      {
        "link": "https://www.youtube.com/watch?v=h3qO7Jii3BE",
        "source": "YouTube · Vito Iacopelli",
        "display_link": "10.3K+ views · 3 days ago",
        "title": "How To Make Frozen Pizza Bases Ready Anytime at Home",
        "description": "We got frozen bases and we made this lovely pizza in 5 minutes and a home oven. It's soft it's crunchy it's lovely.",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA...",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "duration": "10:42",
        "duration_sec": 642,
        "rank": 2,
        "global_rank": 2
      },
      {
        "link": "https://deweyspizza.com/",
        "source": "Dewey's Pizza",
        "display_link": "https://deweyspizza.com",
        "title": "Dewey's Pizza: Home",
        "description": "Bobby Boucher. Cajun Red Sauce, Mozzarella, Caramelized Red Onions, Diced Green Bell Peppers, Andouille Sausage, Blackened Chicken, Celery, Cajun Seasoning, and ...Read more",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "rank": 3,
        "global_rank": 3
      }
    ]
  }
  ```
</ResponseExample>
