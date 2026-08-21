# Google Trends text search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-trends/text-search](https://docs.brightdata.com/api-reference/serp/google-trends/text-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Trends Google Trends text search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1
```

<Warning>
  Trends supports parsed results only i.e. `brd_json=1`
</Warning>

<Warning>
  We support only the “Trending now” tab within Google Trends. Other tabs (e.g. "Explore", "Home") are not supported as they require login access for full functionality.
</Warning>

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.

  ```Example theme={null}
  https://trends.google.com/trends/explore?q=pizza
  ```
</ParamField>

<ParamField type="string">
  To display specific widget data within your Google Trends results, use one of the following widget parameters:

  * `timeseries`: Retrieves the time series widget data.
  * `geo_map`: Retrieves the geo map widget data.

  ```txt wrap theme={null}
  https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1
  ```

  <Tip>
    **For multiple widgets:** Separate them with a comma. e.g. `timeseries,geo_map`
  </Tip>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1"
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
        url: 'https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1',
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
      'url': 'https://trends.google.com/trends/explore?q=pizza&brd_trends=timeseries,geo_map&brd_json=1',
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
                  73
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "73"
                ]
              },
              {
                "time": "1740873600",
                "formattedTime": "Mar 2 – 8, 2025",
                "formattedAxisTime": "Mar 2, 2025",
                "value": [
                  68
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "68"
                ]
              },
              {
                "time": "1741478400",
                "formattedTime": "Mar 9 – 15, 2025",
                "formattedAxisTime": "Mar 9, 2025",
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
                "time": "1742083200",
                "formattedTime": "Mar 16 – 22, 2025",
                "formattedAxisTime": "Mar 16, 2025",
                "value": [
                  70
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "70"
                ]
              },
              {
                "time": "1742688000",
                "formattedTime": "Mar 23 – 29, 2025",
                "formattedAxisTime": "Mar 23, 2025",
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
                "time": "1743292800",
                "formattedTime": "Mar 30 – Apr 5, 2025",
                "formattedAxisTime": "Mar 30, 2025",
                "value": [
                  73
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "73"
                ]
              },
              {
                "time": "1743897600",
                "formattedTime": "Apr 6 – 12, 2025",
                "formattedAxisTime": "Apr 6, 2025",
                "value": [
                  67
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "67"
                ]
              },
              {
                "time": "1744502400",
                "formattedTime": "Apr 13 – 19, 2025",
                "formattedAxisTime": "Apr 13, 2025",
                "value": [
                  71
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "71"
                ]
              },
              {
                "time": "1745107200",
                "formattedTime": "Apr 20 – 26, 2025",
                "formattedAxisTime": "Apr 20, 2025",
                "value": [
                  71
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "71"
                ]
              },
              {
                "time": "1745712000",
                "formattedTime": "Apr 27 – May 3, 2025",
                "formattedAxisTime": "Apr 27, 2025",
                "value": [
                  67
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "67"
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
                "geoCode": "IE",
                "geoName": "Ireland",
                "value": [
                  89
                ],
                "formattedValue": [
                  "89"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "MF",
                "geoName": "St. Martin",
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
                "geoCode": "CA",
                "geoName": "Canada",
                "value": [
                  78
                ],
                "formattedValue": [
                  "78"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US",
                "geoName": "United States",
                "value": [
                  73
                ],
                "formattedValue": [
                  "73"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
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
                "geoCode": "AG",
                "geoName": "Antigua & Barbuda",
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
                    "query": "pizza near me",
                    "value": 85,
                    "formattedValue": "85",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "dominos pizza",
                    "value": 31,
                    "formattedValue": "31",
                    "hasData": true,
                    "link": "/trends/explore?q=dominos+pizza&date=today+12-m"
                  },
                  {
                    "query": "dominos",
                    "value": 30,
                    "formattedValue": "30",
                    "hasData": true,
                    "link": "/trends/explore?q=dominos&date=today+12-m"
                  },
                  {
                    "query": "domino's pizza",
                    "value": 24,
                    "formattedValue": "24",
                    "hasData": true,
                    "link": "/trends/explore?q=domino's+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza oven",
                    "value": 17,
                    "formattedValue": "17",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+oven&date=today+12-m"
                  },
                  {
                    "query": "pizza dough",
                    "value": 17,
                    "formattedValue": "17",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+dough&date=today+12-m"
                  },
                  {
                    "query": "pizza delivery",
                    "value": 15,
                    "formattedValue": "15",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+delivery&date=today+12-m"
                  },
                  {
                    "query": "city pizza",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=city+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza house",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+house&date=today+12-m"
                  },
                  {
                    "query": "best pizza near me",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=best+pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "crust pizza",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=crust+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza time",
                    "value": 11,
                    "formattedValue": "11",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+time&date=today+12-m"
                  },
                  {
                    "query": "pizza place",
                    "value": 10,
                    "formattedValue": "10",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+place&date=today+12-m"
                  },
                  {
                    "query": "express pizza",
                    "value": 9,
                    "formattedValue": "9",
                    "hasData": true,
                    "link": "/trends/explore?q=express+pizza&date=today+12-m"
                  },
                  {
                    "query": "new york pizza",
                    "value": 9,
                    "formattedValue": "9",
                    "hasData": true,
                    "link": "/trends/explore?q=new+york+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza places",
                    "value": 8,
                    "formattedValue": "8",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+places&date=today+12-m"
                  },
                  {
                    "query": "chicago pizza",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=chicago+pizza&date=today+12-m"
                  },
                  {
                    "query": "boston pizza",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=boston+pizza&date=today+12-m"
                  },
                  {
                    "query": "papa johns pizza",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=papa+johns+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza hut near me",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+hut+near+me&date=today+12-m"
                  },
                  {
                    "query": "pizza sauce",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+sauce&date=today+12-m"
                  },
                  {
                    "query": "pizza shop",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+shop&date=today+12-m"
                  },
                  {
                    "query": "pizza company",
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=pizza+company&date=today+12-m"
                  },
                  {
                    "query": "little caesars pizza",
                    "value": 6,
                    "formattedValue": "6",
                    "hasData": true,
                    "link": "/trends/explore?q=little+caesars+pizza&date=today+12-m"
                  }
                ]
              },
              {
                "rankedKeyword": [
                  {
                    "query": "pentagon pizza index",
                    "value": 2650,
                    "formattedValue": "+2,650%",
                    "link": "/trends/explore?q=pentagon+pizza+index&date=today+12-m"
                  },
                  {
                    "query": "pizza napoletana near me",
                    "value": 2600,
                    "formattedValue": "+2,600%",
                    "link": "/trends/explore?q=pizza+napoletana+near+me&date=today+12-m"
                  },
                  {
                    "query": "how to make pizza dough at home",
                    "value": 2450,
                    "formattedValue": "+2,450%",
                    "link": "/trends/explore?q=how+to+make+pizza+dough+at+home&date=today+12-m"
                  },
                  {
                    "query": "what is a pizza stone",
                    "value": 1800,
                    "formattedValue": "+1,800%",
                    "link": "/trends/explore?q=what+is+a+pizza+stone&date=today+12-m"
                  },
                  {
                    "query": "best pizza near me open now",
                    "value": 1750,
                    "formattedValue": "+1,750%",
                    "link": "/trends/explore?q=best+pizza+near+me+open+now&date=today+12-m"
                  },
                  {
                    "query": "pizza calzone near me",
                    "value": 1450,
                    "formattedValue": "+1,450%",
                    "link": "/trends/explore?q=pizza+calzone+near+me&date=today+12-m"
                  },
                  {
                    "query": "gluten free pizza crust recipe",
                    "value": 1450,
                    "formattedValue": "+1,450%",
                    "link": "/trends/explore?q=gluten+free+pizza+crust+recipe&date=today+12-m"
                  },
                  {
                    "query": "pizza margherita near me",
                    "value": 1000,
                    "formattedValue": "+1,000%",
                    "link": "/trends/explore?q=pizza+margherita+near+me&date=today+12-m"
                  },
                  {
                    "query": "best deep dish pizza in chicago",
                    "value": 900,
                    "formattedValue": "+900%",
                    "link": "/trends/explore?q=best+deep+dish+pizza+in+chicago&date=today+12-m"
                  },
                  {
                    "query": "best pizza near me",
                    "value": 350,
                    "formattedValue": "+350%",
                    "link": "/trends/explore?q=best+pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "pizza delivered",
                    "value": 250,
                    "formattedValue": "+250%",
                    "link": "/trends/explore?q=pizza+delivered&date=today+12-m"
                  },
                  {
                    "query": "how to reheat pizza",
                    "value": 160,
                    "formattedValue": "+160%",
                    "link": "/trends/explore?q=how+to+reheat+pizza&date=today+12-m"
                  },
                  {
                    "query": "order pizza near me",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=order+pizza+near+me&date=today+12-m"
                  },
                  {
                    "query": "pizza time",
                    "value": 60,
                    "formattedValue": "+60%",
                    "link": "/trends/explore?q=pizza+time&date=today+12-m"
                  },
                  {
                    "query": "pizza company",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=pizza+company&date=today+12-m"
                  },
                  {
                    "query": "pizza takeaway",
                    "value": 50,
                    "formattedValue": "+50%",
                    "link": "/trends/explore?q=pizza+takeaway&date=today+12-m"
                  },
                  {
                    "query": "pepperoni pizza",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=pepperoni+pizza&date=today+12-m"
                  },
                  {
                    "query": "pizza deals near me",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=pizza+deals+near+me&date=today+12-m"
                  },
                  {
                    "query": "order pizza",
                    "value": 40,
                    "formattedValue": "+40%",
                    "link": "/trends/explore?q=order+pizza&date=today+12-m"
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
