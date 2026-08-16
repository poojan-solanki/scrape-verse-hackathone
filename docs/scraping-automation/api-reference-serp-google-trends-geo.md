# Geo

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-trends/geo](https://docs.brightdata.com/api-reference/serp/google-trends/geo)
> **Category**: `scraping-automation`

---

Reference for the Bright Data Google Trends Geo parameter. Refines queries and returns matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Location of interest, two-letter country code

  ```txt wrap theme={null}
  https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1"
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
        url: 'https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1',
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
      'url': 'https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1',
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
                  80
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "80"
                ]
              },
              {
                "time": "1740873600",
                "formattedTime": "Mar 2 – 8, 2025",
                "formattedAxisTime": "Mar 2, 2025",
                "value": [
                  75
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "75"
                ]
              },
              {
                "time": "1741478400",
                "formattedTime": "Mar 9 – 15, 2025",
                "formattedAxisTime": "Mar 9, 2025",
                "value": [
                  83
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "83"
                ]
              },
              {
                "time": "1742083200",
                "formattedTime": "Mar 16 – 22, 2025",
                "formattedAxisTime": "Mar 16, 2025",
                "value": [
                  79
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "79"
                ]
              },
              {
                "time": "1742688000",
                "formattedTime": "Mar 23 – 29, 2025",
                "formattedAxisTime": "Mar 23, 2025",
                "value": [
                  79
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "79"
                ]
              },
              {
                "time": "1743292800",
                "formattedTime": "Mar 30 – Apr 5, 2025",
                "formattedAxisTime": "Mar 30, 2025",
                "value": [
                  81
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "81"
                ]
              },
              {
                "time": "1743897600",
                "formattedTime": "Apr 6 – 12, 2025",
                "formattedAxisTime": "Apr 6, 2025",
                "value": [
                  76
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "76"
                ]
              },
              {
                "time": "1744502400",
                "formattedTime": "Apr 13 – 19, 2025",
                "formattedAxisTime": "Apr 13, 2025",
                "value": [
                  79
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "79"
                ]
              },
              {
                "time": "1745107200",
                "formattedTime": "Apr 20 – 26, 2025",
                "formattedAxisTime": "Apr 20, 2025",
                "value": [
                  76
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "76"
                ]
              },
              {
                "time": "1745712000",
                "formattedTime": "Apr 27 – May 3, 2025",
                "formattedAxisTime": "Apr 27, 2025",
                "value": [
                  77
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "77"
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
                "geoCode": "US-RI",
                "geoName": "Rhode Island",
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
                "geoCode": "US-CT",
                "geoName": "Connecticut",
                "value": [
                  99
                ],
                "formattedValue": [
                  "99"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-DE",
                "geoName": "Delaware",
                "value": [
                  99
                ],
                "formattedValue": [
                  "99"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-PA",
                "geoName": "Pennsylvania",
                "value": [
                  96
                ],
                "formattedValue": [
                  "96"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-MA",
                "geoName": "Massachusetts",
                "value": [
                  93
                ],
                "formattedValue": [
                  "93"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-OH",
                "geoName": "Ohio",
                "value": [
                  91
                ],
                "formattedValue": [
                  "91"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-NH",
                "geoName": "New Hampshire",
                "value": [
                  91
                ],
                "formattedValue": [
                  "91"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-MI",
                "geoName": "Michigan",
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
                "geoCode": "US-IN",
                "geoName": "Indiana",
                "value": [
                  82
                ],
                "formattedValue": [
                  "82"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              },
              {
                "geoCode": "US-WV",
                "geoName": "West Virginia",
                "value": [
                  79
                ],
                "formattedValue": [
                  "79"
                ],
                "maxValueIndex": 0,
                "hasData": [
                  true
                ]
              }
            ]
          }
        },
        "id": "GEO_MAP",
        "type": "fe_geo_chart_explore",
        "title": "Interest by subregion"
      },
      {
        "data": {
          "default": {
            "rankedList": [
              {
                "rankedKeyword": []
              },
              {
                "rankedKeyword": []
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
