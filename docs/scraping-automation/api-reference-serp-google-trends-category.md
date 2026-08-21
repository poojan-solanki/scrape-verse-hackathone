# Category

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-trends/category](https://docs.brightdata.com/api-reference/serp/google-trends/category)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Trends Category parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Category to search within. By default, search within all categories.\
  You can find list of all categories [here](https://trends.google.com/trends/api/explore/pickers/category?lang=en-US\&tz=240).

  ```txt wrap theme={null}
  https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1"
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
        url: 'https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1',
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
      'url': 'https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1',
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
                  72
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "72"
                ]
              },
              {
                "time": "1740873600",
                "formattedTime": "Mar 2 – 8, 2025",
                "formattedAxisTime": "Mar 2, 2025",
                "value": [
                  74
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "74"
                ]
              },
              {
                "time": "1741478400",
                "formattedTime": "Mar 9 – 15, 2025",
                "formattedAxisTime": "Mar 9, 2025",
                "value": [
                  74
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "74"
                ]
              },
              {
                "time": "1742083200",
                "formattedTime": "Mar 16 – 22, 2025",
                "formattedAxisTime": "Mar 16, 2025",
                "value": [
                  74
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "74"
                ]
              },
              {
                "time": "1742688000",
                "formattedTime": "Mar 23 – 29, 2025",
                "formattedAxisTime": "Mar 23, 2025",
                "value": [
                  74
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "74"
                ]
              },
              {
                "time": "1743292800",
                "formattedTime": "Mar 30 – Apr 5, 2025",
                "formattedAxisTime": "Mar 30, 2025",
                "value": [
                  78
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "78"
                ]
              },
              {
                "time": "1743897600",
                "formattedTime": "Apr 6 – 12, 2025",
                "formattedAxisTime": "Apr 6, 2025",
                "value": [
                  77
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "77"
                ]
              },
              {
                "time": "1744502400",
                "formattedTime": "Apr 13 – 19, 2025",
                "formattedAxisTime": "Apr 13, 2025",
                "value": [
                  77
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "77"
                ]
              },
              {
                "time": "1745107200",
                "formattedTime": "Apr 20 – 26, 2025",
                "formattedAxisTime": "Apr 20, 2025",
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
                "time": "1745712000",
                "formattedTime": "Apr 27 – May 3, 2025",
                "formattedAxisTime": "Apr 27, 2025",
                "value": [
                  79
                ],
                "hasData": [
                  true
                ],
                "formattedValue": [
                  "79"
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
                "geoCode": "AS",
                "geoName": "American Samoa",
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
                "geoCode": "GF",
                "geoName": "French Guiana",
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
                "geoCode": "SK",
                "geoName": "Slovakia",
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
                "geoCode": "YT",
                "geoName": "Mayotte",
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
                "geoCode": "BM",
                "geoName": "Bermuda",
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
                "geoCode": "SM",
                "geoName": "San Marino",
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
