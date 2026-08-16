# Time range

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-trends/time-range](https://docs.brightdata.com/api-reference/serp/google-trends/time-range)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Trends Time Range parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1
```

## Parameters

<ParamField type="string">
  Time range to search.

  > **Available values are:**\
  > `now 1-H` - Past hour\
  > `now 4-H` - Past 4 hours\
  > `now 1-d` - Past day\
  > `now 7-d` - Past 7 days\
  > `today 1-m` - Past 30 days\
  > `today 3-m` - Past 90 days\
  > `today 12-m` (default) - Past 12 months\
  > `today 5-y` - Past 5 years\
  > `2020-07-01 2020-12-31` - custom date range

  ```txt wrap theme={null}
  https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1"
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
        url: 'https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1',
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
      'url': 'https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1',
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
                "time": "1771948800",
                "formattedTime": "Feb 24, 2026 at 11:00 AM",
                "formattedAxisTime": "Feb 24 at 11:00 AM",
                "value": [
                  59
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "59"
                ]
              },
              {
                "time": "1771949280",
                "formattedTime": "Feb 24, 2026 at 11:08 AM",
                "formattedAxisTime": "Feb 24 at 11:08 AM",
                "value": [
                  63
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "63"
                ]
              },
              {
                "time": "1771949760",
                "formattedTime": "Feb 24, 2026 at 11:16 AM",
                "formattedAxisTime": "Feb 24 at 11:16 AM",
                "value": [
                  61
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "61"
                ]
              },
              {
                "time": "1771950240",
                "formattedTime": "Feb 24, 2026 at 11:24 AM",
                "formattedAxisTime": "Feb 24 at 11:24 AM",
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
                "time": "1771950720",
                "formattedTime": "Feb 24, 2026 at 11:32 AM",
                "formattedAxisTime": "Feb 24 at 11:32 AM",
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
                "time": "1771951200",
                "formattedTime": "Feb 24, 2026 at 11:40 AM",
                "formattedAxisTime": "Feb 24 at 11:40 AM",
                "value": [
                  65
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "65"
                ]
              },
              {
                "time": "1771951680",
                "formattedTime": "Feb 24, 2026 at 11:48 AM",
                "formattedAxisTime": "Feb 24 at 11:48 AM",
                "value": [
                  69
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "69"
                ]
              },
              {
                "time": "1771952160",
                "formattedTime": "Feb 24, 2026 at 11:56 AM",
                "formattedAxisTime": "Feb 24 at 11:56 AM",
                "value": [
                  64
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "64"
                ]
              },
              {
                "time": "1771952640",
                "formattedTime": "Feb 24, 2026 at 12:04 PM",
                "formattedAxisTime": "Feb 24 at 12:04 PM",
                "value": [
                  86
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "86"
                ]
              },
              {
                "time": "1771953120",
                "formattedTime": "Feb 24, 2026 at 12:12 PM",
                "formattedAxisTime": "Feb 24 at 12:12 PM",
                "value": [
                  70
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "70"
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
                "geoCode": "KP",
                "geoName": "North Korea",
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
                "geoCode": "PR",
                "geoName": "Puerto Rico",
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
                "geoCode": "CK",
                "geoName": "Cook Islands",
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
                "geoCode": "GU",
                "geoName": "Guam",
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
                "geoCode": "VI",
                "geoName": "U.S. Virgin Islands",
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
                "geoCode": "US",
                "geoName": "United States",
                "value": [
                  81
                ],
                "formattedValue": [
                  "81"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "CA",
                "geoName": "Canada",
                "value": [
                  80
                ],
                "formattedValue": [
                  "80"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "AL",
                "geoName": "Albania",
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
                "geoCode": "XK",
                "geoName": "Kosovo",
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
                    "query": "pizza near me",
                    "value": 100,
                    "formattedValue": "100",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+near+me&date=now+1-d"
                  },
                  {
                    "query": "best pizza near me",
                    "value": 40,
                    "formattedValue": "40",
                    "hasData": true,
                    "link": "/trends/explore?q=best+pizza+near+me&date=now+1-d"
                  },
                  {
                    "query": "pizza hut",
                    "value": 40,
                    "formattedValue": "40",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+hut&date=now+1-d"
                  },
                  {
                    "query": "dominos",
                    "value": 18,
                    "formattedValue": "18",
                    "hasData": true,
                    "link": "/trends/explore?q=dominos&date=now+1-d"
                  },
                  {
                    "query": "dominos pizza",
                    "value": 18,
                    "formattedValue": "18",
                    "hasData": true,
                    "link": "/trends/explore?q=dominos+pizza&date=now+1-d"
                  },
                  {
                    "query": "pizza dough",
                    "value": 11,
                    "formattedValue": "11",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+dough&date=now+1-d"
                  },
                  {
                    "query": "crust pizza",
                    "value": 9,
                    "formattedValue": "9",
                    "hasData": true,
                    "link": "/trends/explore?q=crust+pizza&date=now+1-d"
                  },
                  {
                    "query": "domino's pizza",
                    "value": 8,
                    "formattedValue": "8",
                    "hasData": true,
                    "link": "/trends/explore?q=domino's+pizza&date=now+1-d"
                  },
                  {
                    "query": "pizza oven",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+oven&date=now+1-d"
                  },
                  {
                    "query": "chicago pizza",
                    "value": 6,
                    "formattedValue": "6",
                    "hasData": true,
                    "link": "/trends/explore?q=chicago+pizza&date=now+1-d"
                  },
                  {
                    "query": "pizza margherita",
                    "value": 6,
                    "formattedValue": "6",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+margherita&date=now+1-d"
                  },
                  {
                    "query": "pizza delivery",
                    "value": 6,
                    "formattedValue": "6",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+delivery&date=now+1-d"
                  },
                  {
                    "query": "deep dish pizza",
                    "value": 5,
                    "formattedValue": "5",
                    "hasData": true,
                    "link": "/trends/explore?q=deep+dish+pizza&date=now+1-d"
                  },
                  {
                    "query": "pizza house",
                    "value": 5,
                    "formattedValue": "5",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+house&date=now+1-d"
                  },
                  {
                    "query": "pizza time",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+time&date=now+1-d"
                  },
                  {
                    "query": "how to reheat pizza",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=how+to+reheat+pizza&date=now+1-d"
                  },
                  {
                    "query": "best pizza near me open now",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=best+pizza+near+me+open+now&date=now+1-d"
                  },
                  {
                    "query": "what is a pizza stone",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=what+is+a+pizza+stone&date=now+1-d"
                  },
                  {
                    "query": "how to make pizza dough at home",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=how+to+make+pizza+dough+at+home&date=now+1-d"
                  },
                  {
                    "query": "pizza calzone near me",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+calzone+near+me&date=now+1-d"
                  },
                  {
                    "query": "gluten free pizza crust recipe",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=gluten+free+pizza+crust+recipe&date=now+1-d"
                  },
                  {
                    "query": "pizza margherita near me",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+margherita+near+me&date=now+1-d"
                  },
                  {
                    "query": "best deep dish pizza in chicago",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=best+deep+dish+pizza+in+chicago&date=now+1-d"
                  },
                  {
                    "query": "pizza napoletana near me",
                    "value": 4,
                    "formattedValue": "4",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+napoletana+near+me&date=now+1-d"
                  },
                  {
                    "query": "debonairs pizza",
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=debonairs+pizza&date=now+1-d"
                  }
                ]
              },
              {
                "rankedKeyword": [
                  {
                    "query": "pizza hut all you can eat",
                    "value": 250,
                    "formattedValue": "+250%",
                    "link": "/trends/explore?q=pizza+hut+all+you+can+eat&date=now+1-d"
                  },
                  {
                    "query": "best pizza near me open now",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=best+pizza+near+me+open+now&date=now+1-d"
                  },
                  {
                    "query": "best pizza near me",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=best+pizza+near+me&date=now+1-d"
                  },
                  {
                    "query": "how to make pizza dough at home",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=how+to+make+pizza+dough+at+home&date=now+1-d"
                  },
                  {
                    "query": "what is a pizza stone",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=what+is+a+pizza+stone&date=now+1-d"
                  },
                  {
                    "query": "pizza calzone near me",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=pizza+calzone+near+me&date=now+1-d"
                  },
                  {
                    "query": "gluten free pizza crust recipe",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=gluten+free+pizza+crust+recipe&date=now+1-d"
                  },
                  {
                    "query": "pizza margherita near me",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=pizza+margherita+near+me&date=now+1-d"
                  },
                  {
                    "query": "best deep dish pizza in chicago",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=best+deep+dish+pizza+in+chicago&date=now+1-d"
                  },
                  {
                    "query": "pizza napoletana near me",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=pizza+napoletana+near+me&date=now+1-d"
                  },
                  {
                    "query": "how to reheat pizza",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=how+to+reheat+pizza&date=now+1-d"
                  },
                  {
                    "query": "licorice pizza",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=licorice+pizza&date=now+1-d"
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
