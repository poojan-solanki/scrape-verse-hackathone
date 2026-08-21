# Occupancy

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/occupancy](https://docs.brightdata.com/api-reference/serp/google-hotels/occupancy)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Occupancy parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Number of guests to book a room for (maximum 6 guests)

  > **Examples:**\
  > `brd_occupancy=1` - look for a room for 1 person \
  > `brd_occupancy=2` - for 2 persons (`default`)  \
  > `brd_occupancy=3` - for 3 persons, etc.

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_occupancy=4',
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
  ```json 200 highlight={8} theme={null}
  {
    "overview": {
      "type": "hotels",
      "title": "Four Seasons Hotel New York Downtown",
      "requested": {
        "start_date": "2026-02-27",
        "end_date": "2026-02-28",
        "occupancy": 4,
        "number_of_adults": 4
      },
      "available": true,
      "currency": "USD",
      "coordinates": {
        "latitude": 40.712633,
        "longitude": -74.0092141
      },
      "address": "27 Barclay St, New York, NY 10007",
      "phone": "(646) 880-1999",
      "fid": "0x89c25a18e3553f8b:0x1337dae5edaabaa2"
    },
    "prices": [
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQARoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYASABEgKFTfD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_3BwF5zkVM4yFnjzLkJe3yZ4LIyng&adurl=",
        "price": {
          "value": 2755,
          "currency": "USD"
        },
        "cost": {
          "value": 3167,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 3167,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQAhoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYASACEgLW2vD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_1qIIPYxKKm7b-KBtAnQD0jNESHyg&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 2755,
              "currency": "USD"
            },
            "cost": {
              "value": 3167,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 3167,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Priceline",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQBBoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYAiABEgJ5oPD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_3vAW6Wlrj7Rvy2jGGZZ6pL34wsVQ&adurl=",
        "price": {
          "value": 2755,
          "currency": "USD"
        },
        "cost": {
          "value": 3167,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 3167,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Liberty Suite - Non-Refundable",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQBRoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYAiACEgKRnvD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_1XxpKPh0u6KGRVipGp7q3p9amoFg&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 2755,
              "currency": "USD"
            },
            "cost": {
              "value": 3167,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 3167,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Vio.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/297592521974050080.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQBxoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYAyABEgJh9vD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_2CX8l_iwFjmkflD-t9Z7gieK67mQ&adurl=",
        "price": {
          "value": 2190,
          "currency": "USD"
        },
        "cost": {
          "value": 2520,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 2520,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Standard Room",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQCBoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYAyACEgIMUPD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_0nv1YpOB69DWGzx2lByFVSC_ivyg&adurl=",
            "extensions": [
              "4 guests"
            ],
            "price": {
              "value": 2190,
              "currency": "USD"
            },
            "cost": {
              "value": 2520,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2520,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Agoda",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b13642de-d476-41bd-8254-3edc2e567aa6.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQChoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYBCABEgI4tPD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_3NNqDK7Rkm1NGU2m-irDhU4bHmcA&adurl=",
        "price": {
          "value": 2190,
          "currency": "USD"
        },
        "cost": {
          "value": 2520,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 2520,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Cheapest combo rooms",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zFEWEw3P5LJ7DtpU5VZk-6S6290T43IYWTz_h9ZHdy2WeJ2vEnEa8_Iy3d0ZZkGaxyflvduFfgDrYPFqMBc4-m_i7PhfXt96n6-zCVUW9xJtMm9uVrPup4AiuB04E66RdOrEa3Ve8YGw6858gktvrq927g-DpC2dqXeQ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwijm_uwofiSAxXccn8AHX8pBPEYACICCAEQCxoCb2E&co=1&gclid=EAIaIQobChMIo5v7sKH4kgMV3HJ_AB1_KQTxEAoYBCACEgLu5PD_BwE&cid=CAASuwHkaHvrNFePLzN1GKdqRyRfUekwmG14uq0FowVTwkztlO6UtkzyhkK67lIMIeWSFk-8obkOW1y125TcPEIQCX25GBIPP7tiKKZwZ88fC0bGYXRdVCqww4zsDwj6wS5sEG-XwaUZHFe7akV-ZmK-hfWe__Kf9UBc_xEKsKP4KmpeaWk_tjrIwl6WMhlqTHsQuHcrvPddIlKTpLv5sbAfVUO2Ggc7tFda9t9cKzpzxT0I3IzVlw7yL1IsND82&sig=AOD64_0bI6JJitSd-AaPRLu9KNec0ySscg&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 2190,
              "currency": "USD"
            },
            "cost": {
              "value": 2520,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2520,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Priceline",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "link": "https://www.priceline.com/r/?channel=meta&product=hotel&theme=ghalistings&refid=PLGOOGLEMSS&refclickid=US_HP%7C35500803_localuniversal_1%7C20260227%7Cdesktop%7Cuserdate|public|||1%7C4%7C0|0|EN&hotelid=35500803&checkin=20260227&checkout=20260228&rooms=1&currency=USD&displayedCurr=USD&POSCountryCode=US&taxDisplayMode=BP&cityID=3000016152&adults=4&land=L&metaid=TZPY09t6i2r8eviYUv_ZZBhFokmqUcwjlhUz2OZhFpKJ_rcUR08v4V943zEFapC_d6iKdC2tfSjcdj31xM0zJyhOMHSWV-drRvv2NC7o90epTYWMpaY76kUc-CtZXTvPvntFnxKdY1xxaFkVPijMdJOtLubvNu35SROPjECv-OOtf4RMjpRUAs_LFggabmF5pYZaSn24vTxdKcO1T2D0sB53EF1l-Y40Aze_QDOGr57T9Crjb5YfW7ZF2lfuE6WRJ7ZCEdRglTx2nkLKmQXBkbToGwYa5PApnnoctK8mTKN2Cb-ua0kwaHsTQLTqwY8jSfg73Izv1NynJnRvBtfj4jSZSjECfwjffvVSkOQbeofOpqIu1YyBbYuNf9XXdGG_z6UaIjPvCApalSXVl9jYWMj33qOd9LB2LHv1qw0jE60&dblcnt=true&user_num_adults=4&hc=1&pdtax=411.86&pdf=0.00&pdt=3166.86&locale=en-us&ad-src=&numChild=0",
        "extensions": [
          "4 guests"
        ],
        "price": {
          "value": 2755,
          "currency": "USD"
        },
        "cost": {
          "value": 2755,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 3167,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 3167,
          "currency": "USD"
        }
      },
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.booking.com/searchresults.en.html?dest_id=599535&highlighted_hotels=599535&dest_type=hotel&checkin=2026-02-27&checkout=2026-02-28&group_adults=4&req_adults=4&show_room=59953509_336303630_4_0_0&lang=en&selected_currency=USD&exrt=1.00000000&ext_price_total=3166.86&ext_price_tax=411.86&xfc=USD&hca=m&group_children=0&req_children=0&&no_rooms=1&ts=1772143929&&utm_source=metagha&utm_medium=localuniversal&utm_campaign=US&utm_term=hotel-599535&utm_content=dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-4_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-&aid=2127486&label=metagha-link-LUUS-hotel-599535_dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-4_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-",
        "extensions": [
          "4 guests"
        ],
        "price": {
          "value": 2755,
          "currency": "USD"
        },
        "cost": {
          "value": 2755,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 3167,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 3167,
          "currency": "USD"
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
