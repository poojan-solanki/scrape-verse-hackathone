# Occupancy (children)

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/occupancy-children](https://docs.brightdata.com/api-reference/serp/google-hotels/occupancy-children)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Occupancy (children) parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Number of guests to book a room for (maximum 6 guests)

  Also supports a comma-separated list of integers where:

  * first value is a number of adult guests
  * subsequent values are ages of children

  > **Format:**\
  > `brd_occupancy=<number of adults>,<child 1 age>,<child 2 age>,...,<child N age>`

  > **Examples:**\
  > `brd_occupancy=1,5,7,12` - for 1 adult and 3 children (5, 7 and 12 years old) \
  > `brd_occupancy=2,1,3` - for 2 adults and 2 children (1 and 3 years old)

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=2,1,3',
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
  ```json 200 highlight={8-14} theme={null}
  {
    "overview": {
      "type": "hotels",
      "title": "Four Seasons Hotel New York Downtown",
      "requested": {
        "start_date": "2026-02-27",
        "end_date": "2026-02-28",
        "occupancy": 4,
        "number_of_adults": 2,
        "children_ages": [
          [1],
          [3]
        ]
      },
      "available": true,
      "currency": "NOK",
      "coordinates": {
        "latitude": 40.712633,
        "longitude": -74.0092141
      },
      "address": "27 Barclay St, New York, NY 10007, United States",
      "phone": "+1 646-880-1999",
      "fid": "0x89c25a18e3553f8b:0x1337dae5edaabaa2"
    },
    "prices": [
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiU2KzSoviSAxWcEKIDHSotINgYACICCAEQBhoCbGU&co=1&ase=2&gclid=EAIaIQobChMIlNis0qL4kgMVnBCiAx0qLSDYEAoYASABEgIHBvD_BwE&category=acrcp_v1_48&sig=AOD64_2OB6sX_jfTYCYLnlSGgBhU8g-6Hw&adurl=",
        "price": {
          "value": 30258,
          "currency": "NOK"
        },
        "cost": {
          "value": 30258,
          "currency": "NOK"
        },
        "price_with_tax": {
          "value": 30258,
          "currency": "NOK"
        },
        "rooms": [
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiU2KzSoviSAxWcEKIDHSotINgYACICCAEQBxoCbGU&co=1&ase=2&gclid=EAIaIQobChMIlNis0qL4kgMVnBCiAx0qLSDYEAoYASACEgIMKfD_BwE&category=acrcp_v1_48&sig=AOD64_2F6JXEmahBZuiRR9EpMxhKpGEH7Q&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 30258,
              "currency": "NOK"
            },
            "cost": {
              "value": 30258,
              "currency": "NOK"
            },
            "price_with_tax": {
              "value": 30258,
              "currency": "NOK"
            }
          }
        ]
      },
      {
        "title": "Agoda",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b13642de-d476-41bd-8254-3edc2e567aa6.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiU2KzSoviSAxWcEKIDHSotINgYACICCAEQARoCbGU&co=1&ase=2&gclid=EAIaIQobChMIlNis0qL4kgMVnBCiAx0qLSDYEAoYAiABEgKpjfD_BwE&category=acrcp_v1_48&sig=AOD64_2r-7jD4nxhXD_rMhMHuUypocs3CQ&adurl=",
        "price": {
          "value": 24078,
          "currency": "NOK"
        },
        "cost": {
          "value": 24078,
          "currency": "NOK"
        },
        "price_with_tax": {
          "value": 24078,
          "currency": "NOK"
        },
        "rooms": [
          {
            "title": "Cheapest combo rooms",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zFEWEw3P5LJ7DtpU5VZk-6S6290T43IYWTz_h9ZHdy2WeJ2vEnEa8_Iy3d0ZZkGaxyflvduFfgDrYPFqMBc4-m_i7PhfXt96n6-zCVUW9xJtMm9uVrPup4AiuB04E66RdOrEa3Ve8YGw6858gktvrq927g-DpC2dqXeQ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiU2KzSoviSAxWcEKIDHSotINgYACICCAEQAhoCbGU&co=1&ase=2&gclid=EAIaIQobChMIlNis0qL4kgMVnBCiAx0qLSDYEAoYAiACEgIE0fD_BwE&category=acrcp_v1_48&sig=AOD64_2MHXW3CYo5b3mUtWJvns6jar4Ytg&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 24078,
              "currency": "NOK"
            },
            "cost": {
              "value": 24078,
              "currency": "NOK"
            },
            "price_with_tax": {
              "value": 24078,
              "currency": "NOK"
            }
          }
        ]
      },
      {
        "title": "Bluepillow.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/c770e909-af04-45dd-8ad7-335bc5055826.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiU2KzSoviSAxWcEKIDHSotINgYACICCAEQBBoCbGU&co=1&ase=2&gclid=EAIaIQobChMIlNis0qL4kgMVnBCiAx0qLSDYEAoYAyABEgK6BvD_BwE&category=acrcp_v1_48&sig=AOD64_3VR2PGCT6ktb9oob8TiCSCYOczrg&adurl=",
        "price": {
          "value": 30258,
          "currency": "NOK"
        },
        "cost": {
          "value": 30258,
          "currency": "NOK"
        },
        "price_with_tax": {
          "value": 30258,
          "currency": "NOK"
        }
      },
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.booking.com/searchresults.en.html?dest_id=599535&highlighted_hotels=599535&dest_type=hotel&checkin=2026-02-27&checkout=2026-02-28&group_adults=2&req_adults=2&show_room=59953509_336303630_4_0_0&lang=en&selected_currency=NOK&exrt=9.55452061&ext_price_total=30257.85&ext_price_tax=3935.15&xfc=USD&hca=m&group_children=2&req_children=2&&age=1&req_age=1&age=3&req_age=3&no_rooms=1&ts=1772145314&edgtid=CWkbcNRxSWWiPwBRRdWNjA&efpc=J1WwCjFmuGov&utm_source=metagha&utm_medium=localuniversal&utm_campaign=NO&utm_term=hotel-599535&utm_content=dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-2_checkin-20260227_ppt-&aid=2127633&label=metagha-link-LUNO-hotel-599535_dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-2_checkin-20260227_ppt-",
        "extensions": [
          "4 guests"
        ],
        "price": {
          "value": 30258,
          "currency": "NOK"
        },
        "cost": {
          "value": 30258,
          "currency": "NOK"
        },
        "price_with_tax": {
          "value": 30258,
          "currency": "NOK"
        },
        "cost_with_tax": {
          "value": 30258,
          "currency": "NOK"
        }
      }
    ],
    "reviews": {
      "rating": 4.7,
      "reviews_cnt": 1280,
      "reviews_by_stars": {
        "5 star": "1%"
      }
    }
  }
  ```
</ResponseExample>
