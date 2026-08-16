# Search type

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-trends/search-type](https://docs.brightdata.com/api-reference/serp/google-trends/search-type)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Trends Search Type parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Google property to filter on. Defaults to web search.\\

  Possible values are: `images`, `news`, `froogle` (for Google Shopping), `youtube`

  ```txt wrap theme={null}
  https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1"
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
        url: 'https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1',
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
      'url': 'https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1',
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
    "widgets": [
      {
        "data": {
          "default": {
            "timelineData": [
              {
                "time": "1740268800",
                "formattedTime": "Feb 23 – Mar 1, 2025",
                "formattedAxisTime": "Feb 23, 2025",
                "value": [
                  54
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "54"
                ]
              },
              {
                "time": "1740873600",
                "formattedTime": "Mar 2 – 8, 2025",
                "formattedAxisTime": "Mar 2, 2025",
                "value": [
                  54
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "54"
                ]
              },
              {
                "time": "1741478400",
                "formattedTime": "Mar 9 – 15, 2025",
                "formattedAxisTime": "Mar 9, 2025",
                "value": [
                  48
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "48"
                ]
              },
              {
                "time": "1742083200",
                "formattedTime": "Mar 16 – 22, 2025",
                "formattedAxisTime": "Mar 16, 2025",
                "value": [
                  47
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "47"
                ]
              },
              {
                "time": "1742688000",
                "formattedTime": "Mar 23 – 29, 2025",
                "formattedAxisTime": "Mar 23, 2025",
                "value": [
                  56
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "56"
                ]
              },
              {
                "time": "1743292800",
                "formattedTime": "Mar 30 – Apr 5, 2025",
                "formattedAxisTime": "Mar 30, 2025",
                "value": [
                  62
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "62"
                ]
              },
              {
                "time": "1743897600",
                "formattedTime": "Apr 6 – 12, 2025",
                "formattedAxisTime": "Apr 6, 2025",
                "value": [
                  54
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "54"
                ]
              },
              {
                "time": "1744502400",
                "formattedTime": "Apr 13 – 19, 2025",
                "formattedAxisTime": "Apr 13, 2025",
                "value": [
                  55
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "55"
                ]
              },
              {
                "time": "1745107200",
                "formattedTime": "Apr 20 – 26, 2025",
                "formattedAxisTime": "Apr 20, 2025",
                "value": [
                  60
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "60"
                ]
              },
              {
                "time": "1745712000",
                "formattedTime": "Apr 27 – May 3, 2025",
                "formattedAxisTime": "Apr 27, 2025",
                "value": [
                  48
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "48"
                ]
              }
            ],
            "averages": []
          }
        },
        "id": "TIMESERIES",
        "type": "fe_line_chart",
        "title": "Interest over time"
      },
      {
        "data": {
          "default": {
            "geoMapData": [
              {
                "geoCode": "PK",
                "geoName": "Pakistan",
                "value": [
                  100
                ],
                "formattedValue": [
                  "100"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "PR",
                "geoName": "Puerto Rico",
                "value": [
                  84
                ],
                "formattedValue": [
                  "84"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "JE",
                "geoName": "Jersey",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "GP",
                "geoName": "Guadeloupe",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "BL",
                "geoName": "St. Barthélemy",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "MP",
                "geoName": "Northern Mariana Islands",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "SX",
                "geoName": "Sint Maarten",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "MT",
                "geoName": "Malta",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "MQ",
                "geoName": "Martinique",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              },
              {
                "geoCode": "KM",
                "geoName": "Comoros",
                "value": [
                  0
                ],
                "formattedValue": [
                  ""
                ],
                "maxValueIndex": 0,
                "hasData": [
                  false
                ]
              }
            ]
          }
        },
        "id": "GEO_MAP",
        "type": "fe_geo_chart_explore",
        "title": "Interest by region"
      },
      {
        "data": {
          "default": {
            "rankedList": [
              {
                "rankedKeyword": [
                  {
                    "query": "pizza hut",
                    "value": 100,
                    "formattedValue": "100",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+hut&date=today+12-m"
                  },
                  {
                    "query": "pizza cheese",
                    "value": 50,
                    "formattedValue": "50",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+cheese&date=today+12-m"
                  },
                  {
                    "query": "chicken pizza",
                    "value": 38,
                    "formattedValue": "38",
                    "hasData": true,
                    "link": "/trends/explore?q=chicken+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza dominos",
                    "value": 36,
                    "formattedValue": "36",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+dominos&date=today+12-m"
                  },
                  {
                    "query": "dominos",
                    "value": 35,
                    "formattedValue": "35",
                    "hasData": true,
                    "link": "/trends/explore?q=dominos&date=today+12-m"
                  },
                  {
                    "query": "food",
                    "value": 32,
                    "formattedValue": "32",
                    "hasData": true,
                    "link": "/trends/explore?q=food&date=today+12-m"
                  },
                  {
                    "query": "pizza logo",
                    "value": 31,
                    "formattedValue": "31",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+logo&date=today+12-m"
                  },
                  {
                    "query": "domino's pizza",
                    "value": 29,
                    "formattedValue": "29",
                    "hasData": true,
                    "link": "/trends/explore?q=domino's+pizza&date=today+12-m"
                  },
                  {
                    "query": "burger",
                    "value": 27,
                    "formattedValue": "27",
                    "hasData": true,
                    "link": "/trends/explore?q=burger&date=today+12-m"
                  },
                  {
                    "query": "pizza burger",
                    "value": 26,
                    "formattedValue": "26",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+burger&date=today+12-m"
                  },
                  {
                    "query": "pepperoni pizza",
                    "value": 24,
                    "formattedValue": "24",
                    "hasData": true,
                    "link": "/trends/explore?q=pepperoni+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza png",
                    "value": 23,
                    "formattedValue": "23",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+png&date=today+12-m"
                  },
                  {
                    "query": "pizza tower",
                    "value": 22,
                    "formattedValue": "22",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+tower&date=today+12-m"
                  },
                  {
                    "query": "pepperoni",
                    "value": 22,
                    "formattedValue": "22",
                    "hasData": true,
                    "link": "/trends/explore?q=pepperoni&date=today+12-m"
                  },
                  {
                    "query": "pizza oven",
                    "value": 21,
                    "formattedValue": "21",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+oven&date=today+12-m"
                  },
                  {
                    "query": "pizza box",
                    "value": 20,
                    "formattedValue": "20",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+box&date=today+12-m"
                  },
                  {
                    "query": "pasta",
                    "value": 19,
                    "formattedValue": "19",
                    "hasData": true,
                    "link": "/trends/explore?q=pasta&date=today+12-m"
                  },
                  {
                    "query": "pizza slice",
                    "value": 17,
                    "formattedValue": "17",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+slice&date=today+12-m"
                  },
                  {
                    "query": "italian pizza",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=italian+pizza&date=today+12-m"
                  },
                  {
                    "query": "margherita pizza",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=margherita+pizza&date=today+12-m"
                  },
                  {
                    "query": "little caesars pizza",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=little+caesars+pizza&date=today+12-m"
                  },
                  {
                    "query": "little caesars",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=little+caesars&date=today+12-m"
                  },
                  {
                    "query": "pizza drawing",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+drawing&date=today+12-m"
                  },
                  {
                    "query": "pizza near me",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "pizza roblox",
                    "value": 13,
                    "formattedValue": "13",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+roblox&date=today+12-m"
                  }
                ]
              },
              {
                "rankedKeyword": [
                  {
                    "query": "work at a pizza place",
                    "value": 200,
                    "formattedValue": "+200%",
                    "link": "/trends/explore?q=work+at+a+pizza+place&date=today+12-m"
                  },
                  {
                    "query": "halloween pizza",
                    "value": 140,
                    "formattedValue": "+140%",
                    "link": "/trends/explore?q=halloween+pizza&date=today+12-m"
                  },
                  {
                    "query": "marco's pizza",
                    "value": 120,
                    "formattedValue": "+120%",
                    "link": "/trends/explore?q=marco's+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza hut near me",
                    "value": 120,
                    "formattedValue": "+120%",
                    "link": "/trends/explore?q=pizza+hut+near+me&date=today+12-m"
                  },
                  {
                    "query": "pizza roblox",
                    "value": 110,
                    "formattedValue": "+110%",
                    "link": "/trends/explore?q=pizza+roblox&date=today+12-m"
                  },
                  {
                    "query": "pizza near me",
                    "value": 90,
                    "formattedValue": "+90%",
                    "link": "/trends/explore?q=pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "angel's pizza",
                    "value": 80,
                    "formattedValue": "+80%",
                    "link": "/trends/explore?q=angel's+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza tarifi",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=pizza+tarifi&date=today+12-m"
                  },
                  {
                    "query": "little caesars pizza",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=little+caesars+pizza&date=today+12-m"
                  },
                  {
                    "query": "little caesars",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=little+caesars&date=today+12-m"
                  }
                ]
              }
            ]
          }
        },
        "id": "RELATED_QUERIES",
        "type": "fe_related_searches",
        "title": "Related queries"
      }
    ],
    "keywords": [
      {
        "keyword": "pizza",
        "name": "pizza",
        "type": "Search term"
      }
    ]
  }
  ```
</ResponseExample>
