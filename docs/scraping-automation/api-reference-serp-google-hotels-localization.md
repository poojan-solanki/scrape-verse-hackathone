# Google Hotels localization

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/localization](https://docs.brightdata.com/api-reference/serp/google-hotels/localization)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Google Hotels localization parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us&hl=en
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Two-letter country code used to define the country of search

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us
  ```
</ParamField>

<ParamField type="string">
  Two-letter language code used to define the page language

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&hl=en
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us&hl=en",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us&hl=en"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us&hl=en',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&gl=us&hl=en',
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
    "overview": {
      "type": "hotels",
      "title": "Four Seasons Hotel New York Downtown",
      "requested": {
        "start_date": "2026-03-06",
        "end_date": "2026-03-07",
        "occupancy": 2,
        "number_of_adults": 2
      },
      "available": true,
      "currency": "EUR",
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
        "title": "Hotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/f358dd45-ebd1-4af8-988d-d53154b73975.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQJRoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASABEgJ0ovD_BwE&sig=AOD64_2xUs_hsdCl_zU3kgXMXw3f79lqbw&adurl=",
        "price": {
          "value": 882,
          "currency": "EUR"
        },
        "cost": {
          "value": 882,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 882,
          "currency": "EUR"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQJxoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASADEgJb_PD_BwE&sig=AOD64_0u3wzhI7DSTTRfNJImHIhxC8FYPg&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 882,
              "currency": "EUR"
            },
            "cost": {
              "value": 882,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 882,
              "currency": "EUR"
            }
          },
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQKBoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASAEEgIXafD_BwE&sig=AOD64_1z6iOdmqqGcdTUr4_N8XFNisvhww&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Mar 4"
            ],
            "price": {
              "value": 926,
              "currency": "EUR"
            },
            "cost": {
              "value": 926,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 926,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQKRoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASAFEgJxRfD_BwE&sig=AOD64_0UidsBGdOCi_Oa_7eEz6o80GUt1w&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 882,
              "currency": "EUR"
            },
            "cost": {
              "value": 882,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 882,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQKhoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASAGEgJ8APD_BwE&sig=AOD64_20A3O9tWCNcRNrw_BrNXgkH38Nbw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Mar 4"
            ],
            "price": {
              "value": 926,
              "currency": "EUR"
            },
            "cost": {
              "value": 926,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 926,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zBdES1oKIM8aMTINPz_t2xtu2KC-uSe_oOKzsl9YklwJYFM1GwO-qFi8swCpTQ_KV9p47-tkiSad2to48uKImdUBLBvt6mhp6Hs8Q18Gxe3ss20foBlRPuXa_2vk47r8GRUWFd23wok1KV0TIGM9U2NVIgJ0V74PeZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQKxoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYASAHEgJQpvD_BwE&sig=AOD64_1dTQ4X378diHkUNs9NBwVXjny3ag&adurl=",
            "extensions": [
              "2 double beds"
            ],
            "price": {
              "value": 945,
              "currency": "EUR"
            },
            "cost": {
              "value": 945,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 945,
              "currency": "EUR"
            }
          }
        ]
      },
      {
        "title": "Expedia.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQCRoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYAiABEgIgp_D_BwE&sig=AOD64_0QKaGVbKXETl3s7roYBRtGwR6hOQ&adurl=",
        "price": {
          "value": 882,
          "currency": "EUR"
        },
        "cost": {
          "value": 882,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 882,
          "currency": "EUR"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQChoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYAiACEgKSHfD_BwE&sig=AOD64_0Zi_mSfTuClXGJFuovQHRjOf2edw&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 882,
              "currency": "EUR"
            },
            "cost": {
              "value": 882,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 882,
              "currency": "EUR"
            }
          },
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQCxoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYAiADEgITtvD_BwE&sig=AOD64_2l_wXdqXc6uv4FMfC3B0_IhD2KBQ&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Mar 4"
            ],
            "price": {
              "value": 926,
              "currency": "EUR"
            },
            "cost": {
              "value": 926,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 926,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQDBoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYAiAEEgIm4fD_BwE&sig=AOD64_1eOpLFyXNrye4TPF3McvFl7Vpy8Q&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 882,
              "currency": "EUR"
            },
            "cost": {
              "value": 882,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 882,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwiQlc6wmfiSAxX8j1AGHcmwMM0YACICCAEQDRoCZGc&co=1&gclid=EAIaIQobChMIkJXOsJn4kgMV_I9QBh3JsDDNEAoYAiAFEgKBqfD_BwE&sig=AOD64_3VJtgFzXWgbLHeDJPz66MfCv181A&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Mar 4"
            ],
            "price": {
              "value": 926,
              "currency": "EUR"
            },
            "cost": {
              "value": 926,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 926,
              "currency": "EUR"
            }
          }
        ]
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
