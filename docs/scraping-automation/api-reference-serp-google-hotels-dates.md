# Dates

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/dates](https://docs.brightdata.com/api-reference/serp/google-hotels/dates)
> **Category**: `scraping-automation`

---

Reference for the Bright Data Google Hotels Dates parameter. Refines queries and returns matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Check-in date and check-out date, separated by comma.

  > **Format**: `YYYY-MM-DD,YYYY-MM-DD`\
  > **Example**: `2026-04-03,2026-04-10`

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_dates=2026-04-03%2C2026-04-10',
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
  ```json 200 highlight={6, 7} theme={null}
  {
    "overview": {
      "type": "hotels",
      "title": "Four Seasons Hotel New York Downtown",
      "requested": {
        "start_date": "2026-04-03",
        "end_date": "2026-04-10",
        "occupancy": 2,
        "number_of_adults": 2
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
        "title": "trivago.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/1922649917165881388.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQYhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYASABEgKs-_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3jDDsBoF49LIv8h7JRGXfK4c5Uww&adurl=",
        "price": {
          "value": 1124,
          "currency": "USD"
        },
        "cost": {
          "value": 1293,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 9050,
          "currency": "USD"
        }
      },
      {
        "title": "Expedia.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQJxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiABEgLxsfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2RzSq4ZRGsbtHfccg0CuwNIFISNA&adurl=",
        "price": {
          "value": 1124,
          "currency": "USD"
        },
        "cost": {
          "value": 1293,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 9050,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQKBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiACEgIOq_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2rCy4EYmKS2PUI9JAQ9iBIiHXP_Q&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1124,
              "currency": "USD"
            },
            "cost": {
              "value": 1293,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 9050,
              "currency": "USD"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQKRoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiADEgLQIvD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_386Mob3v3Ipa3e9j021h28EfMVYQ&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1249,
              "currency": "USD"
            },
            "cost": {
              "value": 1437,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10059,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQKhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAEEgJnmvD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_0X-AFfOUFcldJAaKV13FPIALqrPQ&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1125,
              "currency": "USD"
            },
            "cost": {
              "value": 1294,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 9061,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQKxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAFEgKdmvD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2wpGSEisyf_IWUsUFISzSTkwBUzA&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1248,
              "currency": "USD"
            },
            "cost": {
              "value": 1435,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10048,
              "currency": "USD"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQLBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAGEgKYYfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_0wS0Svfjeq-MnN6F99D_VI7aOw7A&adurl=",
            "extensions": [
              "2 double beds"
            ],
            "price": {
              "value": 1146,
              "currency": "USD"
            },
            "cost": {
              "value": 1318,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 9227,
              "currency": "USD"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQLRoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAHEgKkBvD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1oppsT2mirszsp7yZIW9tl8SuNMA&adurl=",
            "extensions": [
              "2 double beds Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1274,
              "currency": "USD"
            },
            "cost": {
              "value": 1466,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10260,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xfIleTKUi_ePsxGkSstGASzo99qNFBpB94rAAtcEI1C-ZLD4XATuPdh4hGG4RUio3DvonDRyOo7dGZScl55LMBJ7ZEgdijCjGdglXAmtBG3qRZGZdrm-Uggx1OjUAheXtRIDPT0atuWFPccAbkfddjQ7vp6ud3UM4"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQLhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAIEgKijfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_37Lkq_ienAtTYTVCGEIS4cPfurNQ&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1187,
              "currency": "USD"
            },
            "cost": {
              "value": 1366,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 9560,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xfIleTKUi_ePsxGkSstGASzo99qNFBpB94rAAtcEI1C-ZLD4XATuPdh4hGG4RUio3DvonDRyOo7dGZScl55LMBJ7ZEgdijCjGdglXAmtBG3qRZGZdrm-Uggx1OjUAheXtRIDPT0atuWFPccAbkfddjQ7vp6ud3UM4"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQLxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAJEgISofD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1RlcWyNv6LCkw-i5pbb4Ojmfu9cg&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1348,
              "currency": "USD"
            },
            "cost": {
              "value": 1550,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10851,
              "currency": "USD"
            }
          },
          {
            "title": "SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_x6Z4f55TyGgXgPaK-luUCFyHuULMAS-fnt2cgI_EjYzlVobLpV_HI_PaCiSXVq4GJt7GYYLs7gCr3Wj__EOYfq-W6hB87lXPWt24y5G_yEfds77WaqbxUytFauHjPoQYygsMPkPfJ2uhm751bN0EKKLGimw0u0n8_t"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQMBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAKEgIXxfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3VADlw1bl5GUpQsLgFAPQ2lA_njQ&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1187,
              "currency": "USD"
            },
            "cost": {
              "value": 1366,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 9560,
              "currency": "USD"
            }
          },
          {
            "title": "SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_x6Z4f55TyGgXgPaK-luUCFyHuULMAS-fnt2cgI_EjYzlVobLpV_HI_PaCiSXVq4GJt7GYYLs7gCr3Wj__EOYfq-W6hB87lXPWt24y5G_yEfds77WaqbxUytFauHjPoQYygsMPkPfJ2uhm751bN0EKKLGimw0u0n8_t"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQMRoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiALEgLmDvD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3PVRjIxlUJRDk-AxBe6ZxGBGA-Uw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1349,
              "currency": "USD"
            },
            "cost": {
              "value": 1552,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10863,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xh7ZruI7-cODN5bzF1IWAG3PEIQADDGgw0sWtDDRk-TbV4EPtEVYDEJewJgMRtl6Zejine24V66DGiU5FlqCq-EMgShWDmqhjLyVs9FERHWG0QxGnFxW7LN7-HGl4UrF7-s8XcAj7YDUQ5xjlaAX-v836WgUq0svU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQMhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAMEgJYkfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_04kbwDw1x6JmAHL0r4OdUwRUbb8A&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1261,
              "currency": "USD"
            },
            "cost": {
              "value": 1451,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10157,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xh7ZruI7-cODN5bzF1IWAG3PEIQADDGgw0sWtDDRk-TbV4EPtEVYDEJewJgMRtl6Zejine24V66DGiU5FlqCq-EMgShWDmqhjLyVs9FERHWG0QxGnFxW7LN7-HGl4UrF7-s8XcAj7YDUQ5xjlaAX-v836WgUq0svU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQMxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiANEgIGd_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3GCNlPvXpoYzJ6vAMnK3A5zrL9Vw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1449,
              "currency": "USD"
            },
            "cost": {
              "value": 1667,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 11666,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQNBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAOEgIWafD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_0TzRN_pmTs1r0B3wHg2bQnvTsl6g&adurl=",
            "extensions": [
              "1 double bed"
            ],
            "price": {
              "value": 1300,
              "currency": "USD"
            },
            "cost": {
              "value": 1495,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 10467,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQNRoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAPEgIV3fD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1bV54iwzggMCJtCAFW9FlAzXCmtQ&adurl=",
            "extensions": [
              "1 double bed Free cancellation until Apr 1"
            ],
            "price": {
              "value": 1494,
              "currency": "USD"
            },
            "cost": {
              "value": 1718,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 12027,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_ww5DsjCN4YmZZyFdZwwPcaACASJul2NHBc33CJI6PmL57ABgizbEjzHfF-mdnm5fxu6htw4H8-uYg1_Hp4qVlRby0MErfZfndCcURjMKhkg1-H-L9fnoCjiJ7eBmFoggT1Yxbr1qxMmBTH5lSeBZGEPtjpj86vT0g"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQNhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAQEgKVfPD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3PWv0VrClvPzIw_0iDkVeb4Nlp9w&adurl=",
            "extensions": [
              "Suite Suite"
            ],
            "price": {
              "value": 2479,
              "currency": "USD"
            },
            "cost": {
              "value": 2850,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 19948,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_ww5DsjCN4YmZZyFdZwwPcaACASJul2NHBc33CJI6PmL57ABgizbEjzHfF-mdnm5fxu6htw4H8-uYg1_Hp4qVlRby0MErfZfndCcURjMKhkg1-H-L9fnoCjiJ7eBmFoggT1Yxbr1qxMmBTH5lSeBZGEPtjpj86vT0g"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQNxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAREgKUgfD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2Rv3GNQFgW0x0r4ahWOX682F_zJw&adurl=",
            "extensions": [
              "Suite Free cancellation until Apr 1 Suite"
            ],
            "price": {
              "value": 2849,
              "currency": "USD"
            },
            "cost": {
              "value": 3274,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 22920,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Oculus Suite",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQOBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiASEgLh3vD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2qKm4LfiTTnR-nRv3y-iZqfa1cdg&adurl=",
            "extensions": [
              "Suite Suite"
            ],
            "price": {
              "value": 3101,
              "currency": "USD"
            },
            "cost": {
              "value": 3564,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 24945,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Oculus Suite",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQORoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiATEgJN-_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1eRD9Eco_DcVHAhPHY_0QfasH2kw&adurl=",
            "extensions": [
              "Suite Free cancellation until Apr 1 Suite"
            ],
            "price": {
              "value": 3564,
              "currency": "USD"
            },
            "cost": {
              "value": 4095,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 28663,
              "currency": "USD"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wUo6BPQW7nrkfgpTzJi_nQA8xpSw312DpP20wbOYdpEfOmvds9VLU7L_ibu_895NqpjU5kLib0DfsImWRp7v19NjwaSBrUJ6TUGTFABEDUUB7vOgVyyP0W54B-SH86pi457VRBGPvK7ykAT93UU9whEXLD7fMb9jLf"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQOhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAUEgK5ovD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_0XiU4_Z0oklRKJqzexvctPXFKt-g&adurl=",
            "extensions": [
              "Suite Suite"
            ],
            "price": {
              "value": 3101,
              "currency": "USD"
            },
            "cost": {
              "value": 3564,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 24945,
              "currency": "USD"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wUo6BPQW7nrkfgpTzJi_nQA8xpSw312DpP20wbOYdpEfOmvds9VLU7L_ibu_895NqpjU5kLib0DfsImWRp7v19NjwaSBrUJ6TUGTFABEDUUB7vOgVyyP0W54B-SH86pi457VRBGPvK7ykAT93UU9whEXLD7fMb9jLf"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQOxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAVEgLHXPD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3ouuw5q8p31JUMJKilpDV_aSkvRA&adurl=",
            "extensions": [
              "Suite Free cancellation until Apr 1 Suite"
            ],
            "price": {
              "value": 3564,
              "currency": "USD"
            },
            "cost": {
              "value": 4095,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 28663,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQPBoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAWEgLvyPD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_2MHQFYAZKUNaBDWT3pjpYRohDeSQ&adurl=",
            "extensions": [
              "1 king bed Suite"
            ],
            "price": {
              "value": 3536,
              "currency": "USD"
            },
            "cost": {
              "value": 4063,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 28439,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQPRoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAXEgIs9vD_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1FEr5MAu7-2NzDuwUyCyvJ6M8F9A&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1 Suite"
            ],
            "price": {
              "value": 4064,
              "currency": "USD"
            },
            "cost": {
              "value": 4668,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 32679,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking, Terrace (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQPhoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAYEgLa0_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_1oXpUWuzpVIRL06jaFs0DqEeZibg&adurl=",
            "extensions": [
              "1 king bed Suite"
            ],
            "price": {
              "value": 3926,
              "currency": "USD"
            },
            "cost": {
              "value": 4511,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 31578,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking, Terrace (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjCoPbrn_iSAxVGUn8AHdd8DsoYACICCAEQPxoCb2E&co=1&ase=2&gclid=EAIaIQobChMIwqD265_4kgMVRlJ_AB3XfA7KEAoYAiAZEgIUV_D_BwE&cid=CAASuwHkaOl2NLS5wDy6GKMRdyxNZjSVEWrmSsf6RKRBnUgVhiZOlox1MbkBncfXuNV2KEaH7m6BCeu7UtSPKhdBVddQpQLWDK60Lm_9zP48inYjhuoy8cCjJRO0fIwJZvWIIwnTsJ5b7XsSgxO1mgLBH1XvNaB5VuZZa-54QO3_3b1xl8jw76lYwiPs0-tRaCQoyvY36jEZOV2oU43o72VaW1uLuKFnrNu4xj1-08RFzgDhK_G9-OqBlzR54CHk&category=acrcp_v1_48&sig=AOD64_3qFKdDJlHKmMAX2OieB_S2hOCXCw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Apr 1 Suite"
            ],
            "price": {
              "value": 4514,
              "currency": "USD"
            },
            "cost": {
              "value": 5185,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 36294,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Long Stay Discounts",
        "logo": "https://www.gstatic.com/travel-hotels/branding/6131123071209883889.png",
        "link": "https://www.longstaydiscounts.com/transition/?data=price=8108.07%26total_price=9331.3%26request_id=5de6faf4-bed6-41a0-a5a8-5ebaf17a5be8%26ps=296306%26pp=vxdXzMnczXSybIIfpW80fQ%26pb=SU5vEhldOC6H9K1kZwIQ4d2JfI1zkfnZXwyokA87-W87qcyTm0x9pLysiqwybwIaoISHLs_aO-FLzJI9HWNwc4Az8Kp362gI5poRjGihPDGa6gyLdZv4SGyT0fDxBpTs0gO6FAaspQv93s-Ff827uDIM8eXlEoPVbEzQ43RDO1ZQvMuXOCNR9FE4gD0yvzTRg8wwIWyBaUgTMNt_J1VoXblRWLTWMg90CtvM02z5E8AVnyZHCfvTbgcmmVzBj7v2MAyFceNkLFXpKcBs1K7ThvCCvlYui8YZp8mNotBGRlNuRZ3OxUhwm8-aMbKCkUXB8Bv8zWi8FoV94w40p7CHx0U__fHEIribv5GxVjCcA-4%253D%26gha_lsd_pull_request=True%26rtp=SdTUqdR7wIew8aRS9esAtw%253D%253D%26risk_lk_1=false%26alwd_risk=false%26alwd_rand=false%26gt=1772137197%26sg=YDhbN%26ttl_bkt=none%26all_inclusive=false&utm_source=gha_lsd&utm_content=localuniversal&currency=USD&user_country=US&verification=false&rate_rule_ids=&date_type=selected&rate_rule_id=signedout_desktop&utm_campaign=&display_currency=USD&display_all_inclusive_price=9331.29&checkin_at=2026-04-03&checkout_at=2026-04-10&provider_hotel_id=10007072903&provider=ean&num_adults=2&children=[]&user_locale=en-US&user_list_id=&utm_medium=organic&utm_id=gha_lsd_organic",
        "price": {
          "value": 1158,
          "currency": "USD"
        },
        "cost": {
          "value": 1158,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1333,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 9331,
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
