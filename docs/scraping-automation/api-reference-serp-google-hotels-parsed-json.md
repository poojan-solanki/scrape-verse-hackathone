# Google Hotels parsed JSON

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/parsed-json](https://docs.brightdata.com/api-reference/serp/google-hotels/parsed-json)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Google Hotels parsed JSON parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_json=json
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Set the `brd_json` parameter to `json` to get the results in JSON format.

  ```txt wrap theme={null}
  https://www.google.com/maps/search/hotels+new+york/?brd_json=json
  ```

  | value            | description                                                                                                         |
  | ---------------- | ------------------------------------------------------------------------------------------------------------------- |
  | `html` (default) | Returns the standard HTML response from Google Maps.                                                                |
  | `json`           | Returns the search results in a structured JSON format, making it easier to parse and extract specific data points. |
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_json=json",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_json=json"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_json=json',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_json=json',
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
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQExoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYASABEgLsBvD_BwE&sig=AOD64_0M7LSslBABYjrcuHz7043HM6Gk0A&adurl=",
        "price": {
          "value": 912,
          "currency": "EUR"
        },
        "cost": {
          "value": 912,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 912,
          "currency": "EUR"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_ySiIEbCWYVgsWXAcT9P6GEaGc7OIZTLS03_DwOCK8IfvGbD_qIjGfPO3Eqe2ujdp686Jxaub2fQPluNbPelOp1hXNH1wTqhWRTw5yvK3qB_eDVgGDDZjnm-Y8JdMbrXO8mvoFY9XldhKGW0xzs8vHzPlebVX5jVqIXrZZrBft7bw1oadabdwy0BcKwTI-5__z5UG9mhDZhf8RBL3tbtlCP7ltZNmSUmDI"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQFxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYASAFEgJzD_D_BwE&sig=AOD64_2e1w7gdEW072SImBtdJlNKkhT9mg&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 27 Suite"
            ],
            "price": {
              "value": 912,
              "currency": "EUR"
            },
            "cost": {
              "value": 912,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 912,
              "currency": "EUR"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_y-KJSTcZEDdQDB_yrI3W9M4YdQouODBZz7TiHG3QmpZ0OqLVH1OJBAZE0HVvZijUgVuHuZMs_mfmpjomUOTS8lqsUND0wquBfjTjHcaUg8n5X_8L3vRdpu48DbpVXIbsL1KelRaLGYW4onvYiIoxH7fOQHdwDF7ZAM0UYPuH2HW1iFj-WaCvMkKc3Depo1fg5GQ5a_BRyAo1kCPl3-XxL8vmd8KJT1xBg"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQGBoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYASAGEgKPq_D_BwE&sig=AOD64_0J2K_vmz2GLmSU03WXOCMRhoBlHQ&adurl=",
            "extensions": [
              "Suite 3 guests Free cancellation until Feb 27 Suite"
            ],
            "price": {
              "value": 2378,
              "currency": "EUR"
            },
            "cost": {
              "value": 2378,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2378,
              "currency": "EUR"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_y-KJSTcZEDdQDB_yrI3W9M4YdQouODBZz7TiHG3QmpZ0OqLVH1OJBAZE0HVvZijUgVuHuZMs_mfmpjomUOTS8lqsUND0wquBfjTjHcaUg8n5X_8L3vRdpu48DbpVXIbsL1KelRaLGYW4onvYiIoxH7fOQHdwDF7ZAM0UYPuH2HW1iFj-WaCvMkKc3Depo1fg5GQ5a_BRyAo1kCPl3-XxL8vmd8KJT1xBg"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQGRoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYASAHEgLD0vD_BwE&sig=AOD64_3S34MlYvIksxmVX7QUZTbYSlmV-g&adurl=",
            "extensions": [
              "Suite 4 guests Free cancellation until Feb 27 Suite"
            ],
            "price": {
              "value": 2475,
              "currency": "EUR"
            },
            "cost": {
              "value": 2475,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2475,
              "currency": "EUR"
            }
          }
        ]
      },
      {
        "title": "Expedia.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQARoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiABEgJB9_D_BwE&sig=AOD64_1kUnuX6YdD_AOE7R0KHjsKNHzHtA&adurl=",
        "price": {
          "value": 911,
          "currency": "EUR"
        },
        "cost": {
          "value": 911,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 911,
          "currency": "EUR"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zYFNVKMsbaLNMZ-gh_Vbck_EkR8kV2OMjj3OtbYpSHjv2_txZgd66NC_oCCHrpeS9cogHDn_k13nqZzaZFFSkCGm0EHjsEAI0GI55NP4BBX0xBq3_Uji01c2RQdjeRwUWYKQw8avPS9WzOhaV1-bo2nq-ut_Yev3lE"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQAhoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiACEgIYZPD_BwE&sig=AOD64_31Yv_SBh0jcVaEnpTo_sphgYd8zQ&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 911,
              "currency": "EUR"
            },
            "cost": {
              "value": 911,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 911,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQAxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiADEgIyB_D_BwE&sig=AOD64_0aALGynTChUuX8X4JGHzzFv63uEA&adurl=",
            "extensions": [
              "2 double beds Free cancellation until Feb 28"
            ],
            "price": {
              "value": 911,
              "currency": "EUR"
            },
            "cost": {
              "value": 911,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 911,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zYFNVKMsbaLNMZ-gh_Vbck_EkR8kV2OMjj3OtbYpSHjv2_txZgd66NC_oCCHrpeS9cogHDn_k13nqZzaZFFSkCGm0EHjsEAI0GI55NP4BBX0xBq3_Uji01c2RQdjeRwUWYKQw8avPS9WzOhaV1-bo2nq-ut_Yev3lE"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQBBoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAEEgIyi_D_BwE&sig=AOD64_1WCiGga8oG95r2jdwkVTbeYeey6w&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 911,
              "currency": "EUR"
            },
            "cost": {
              "value": 911,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 911,
              "currency": "EUR"
            }
          },
          {
            "title": "Accessible SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wds_0O4X_fvybSRinVrg9UstYEgU4qlouU4v-lNTqXPUsLuEGHK_CkIuB034caQMwQ19oFDkJOXz9wRrpy2gUDf3Egip9BJS2H3OgYoesDW7QwJb_47iLzahGhE99F8YjZI-n30IIO4j4Lbfcx1oSboErOa9DVzJg"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQBRoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAFEgLrFPD_BwE&sig=AOD64_1QEZ4cu5k9E6lseKW11ciAm-J3Hw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1008,
              "currency": "EUR"
            },
            "cost": {
              "value": 1008,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1008,
              "currency": "EUR"
            }
          },
          {
            "title": "SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_x6Z4f55TyGgXgPaK-luUCFyHuULMAS-fnt2cgI_EjYzlVobLpV_HI_PaCiSXVq4GJt7GYYLs7gCr3Wj__EOYfq-W6hB87lXPWt24y5G_yEfds77WaqbxUytFauHjPoQYygsMPkPfJ2uhm751bN0EKKLGimw0u0n8_t"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQBhoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAGEgK67vD_BwE&sig=AOD64_3xtc8VbYzfm2iEB2RXKgqK9wikUQ&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1008,
              "currency": "EUR"
            },
            "cost": {
              "value": 1008,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1008,
              "currency": "EUR"
            }
          },
          {
            "title": "SoHo Premier Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yv0AxYLP4aAQwN6J8XDZbtkYY1_0Nvgv2ZYCVK0dBpzNv3fyOhcZ5TokalUILoZ3r3_zQCPCeiwcYq64hCMNh58fXCXCVgKapWEA2_oGjJ0J5SG5BF2ui0ZLXtk7VtHRKqqc3k-WtT17r0KAJGpqnXX6tKm6gHYbRz"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQBxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAHEgKDn_D_BwE&sig=AOD64_1iuHdiaZaL4jNVIKcfH6RhD7xnDA&adurl=",
            "extensions": [
              "1 double bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1042,
              "currency": "EUR"
            },
            "cost": {
              "value": 1042,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1042,
              "currency": "EUR"
            }
          },
          {
            "title": "Hudson Corner King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xh7ZruI7-cODN5bzF1IWAG3PEIQADDGgw0sWtDDRk-TbV4EPtEVYDEJewJgMRtl6Zejine24V66DGiU5FlqCq-EMgShWDmqhjLyVs9FERHWG0QxGnFxW7LN7-HGl4UrF7-s8XcAj7YDUQ5xjlaAX-v836WgUq0svU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQCBoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAIEgJFSfD_BwE&sig=AOD64_3YXLgnD1EZ2At_PacM0-00UUNKUg&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1105,
              "currency": "EUR"
            },
            "cost": {
              "value": 1105,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1105,
              "currency": "EUR"
            }
          },
          {
            "title": "Hudson Corner Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yeBfSgeyblSeisek8ZI4YEHLCIbbXrCJxgyCdZUamkH5oV5DdlJoKUakDV53Z7p-BDS0E8rJ62m6QZMrFqObi9meM30tA-IA6SocR49mzpLbxLgLGE-3-aodZ0vOxTfpmcX440cUjJEe1Ngv3iSw2LSIyNpQLwWUtZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQCRoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAJEgJfmfD_BwE&sig=AOD64_1DTRq-qsUqhPdcqeYLHg35iQxssg&adurl=",
            "extensions": [
              "1 double bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1139,
              "currency": "EUR"
            },
            "cost": {
              "value": 1139,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1139,
              "currency": "EUR"
            }
          },
          {
            "title": "Accessible Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_y1iwF2gynru2fHktFEUS_8KfNtswHyO__zLmmGruUe4Ex1i3-2bce9c4ZsKDg_FUp82xUBdJK6t2v_2LrUVEYneXqLJ_XzfxddpaZh0GK7zS7WDWI2M7HCeVS-wBrT2vpSFn7exa2XIrZ0TfHXz6MHq1IlxpCExlE"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQChoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAKEgII2_D_BwE&sig=AOD64_17Z2jIYpTclspi0DhcDa9qSX5jxg&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 2277,
              "currency": "EUR"
            },
            "cost": {
              "value": 2277,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2277,
              "currency": "EUR"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_x0PMpt7VzEy6A83OymvL5l9KvaUZ0rKRlPgI6PsNAzDGi6YSr7mFOEw18HHxDv_YswU22MN7u6e33RiFrmuC8vFWme_o-Mx4il9gSTGbOQGiKBhloGENHQHdRJO041_DbIaeWEkvvh4SI7ghnbeMUXrlekMq1DGb16"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQCxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiALEgKY9_D_BwE&sig=AOD64_3W6o-NofXoJKH-U9PQOfT3GF-QsA&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 2277,
              "currency": "EUR"
            },
            "cost": {
              "value": 2277,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2277,
              "currency": "EUR"
            }
          },
          {
            "title": "Accessible Oculus Suite",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQDBoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAMEgJKQPD_BwE&sig=AOD64_1A2Bj9M8g_-exQBUM2i7-TbfOKwg&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3278,
              "currency": "EUR"
            },
            "cost": {
              "value": 3278,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3278,
              "currency": "EUR"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wUo6BPQW7nrkfgpTzJi_nQA8xpSw312DpP20wbOYdpEfOmvds9VLU7L_ibu_895NqpjU5kLib0DfsImWRp7v19NjwaSBrUJ6TUGTFABEDUUB7vOgVyyP0W54B-SH86pi457VRBGPvK7ykAT93UU9whEXLD7fMb9jLf"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQDRoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiANEgI97PD_BwE&sig=AOD64_3BbzIs9pAmbIiAOwG-ebVejU-r4A&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3278,
              "currency": "EUR"
            },
            "cost": {
              "value": 3278,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3278,
              "currency": "EUR"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQDhoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAOEgJgyfD_BwE&sig=AOD64_0DhmqCAFUP4PJ897doHPRo-DoXUw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3763,
              "currency": "EUR"
            },
            "cost": {
              "value": 3763,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3763,
              "currency": "EUR"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking, Terrace (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQDxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAiAPEgLxivD_BwE&sig=AOD64_36lE-tVjg-zTEHTsq2iii5UCC-mA&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3958,
              "currency": "EUR"
            },
            "cost": {
              "value": 3958,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3958,
              "currency": "EUR"
            }
          }
        ]
      },
      {
        "title": "trivago.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/1922649917165881388.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQGxoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYAyABEgInWPD_BwE&sig=AOD64_39CkAu5QatiC1HqSk9jCdelh03mw&adurl=",
        "price": {
          "value": 911,
          "currency": "EUR"
        },
        "cost": {
          "value": 911,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 911,
          "currency": "EUR"
        }
      },
      {
        "title": "Tripadvisor.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7993073966338005995.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwjk_sbYqPiSAxWECAYAHQhZFt4YACICCAEQERoCd3M&co=1&gclid=EAIaIQobChMI5P7G2Kj4kgMVhAgGAB0IWRbeEAoYBCABEgLrBfD_BwE&sig=AOD64_1DG7E3wUl5ZY2x3EFZRgwHazLXXw&adurl=",
        "price": {
          "value": 912,
          "currency": "EUR"
        },
        "cost": {
          "value": 912,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 912,
          "currency": "EUR"
        }
      },
      {
        "title": "Expedia.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.expedia.de/Hotel-Search?selected=15438428&startDate=2026-03-06&endDate=2026-03-07&MDPCID=DE.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.15438428.20260306.20260307.DDT.8.CID..AUDID..RRID.bex_eu_desktop&adults=2&children=&mctc=10&ct=hotel&mpg=EUR&mpf=881.94&mpj=115.95&mpr=0.00&mpl=EUR&exp_pg=google&langid=2057&ad=2&tp=&utm_source=google&utm_medium=cpc&utm_term=15438428&utm_content=localuniversal&utm_campaign=HotelAds&rateplanid=381382188&mpm=24&mpn=201555591&mpo=EC&mpp=1",
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
        "cost_with_tax": {
          "value": 882,
          "currency": "EUR"
        }
      },
      {
        "title": "Vio.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/297592521974050080.png",
        "link": "https://deals.vio.com/?sig=73aca13c7f952d2641c156f3e69125e1eb497c325f122828ee5aa8797168b9a12d32303331333438363233&turl=https%3A%2F%2Fwww.vio.com%2FHotel%2FSearch%3FcheckIn%3D2026-03-06%26checkOut%3D2026-03-07%26currency%3DEUR%26forceCurrencyChange%3D1%26lang%3Den%26forceLanguageChange%3D1%26rooms%3D2%3A%26utm_source%3Dgha%26utm_medium%3Dcpc%26hotelId%3D3021724%26userCountry%3DDE%26profile%3Dr2d2m73kn8%26preferredRate%3D877.78%26label%3Dsrc%253Dgha%2526cltype%253Dhotel%2526datype%253Ddefault%2526gsite%253Dlocaluniversal%2526vf%253D0%2526ucountry%253DDE%2526udevice%253Ddesktop%2526hotel%253D3021724%2526day%253D06%2526month%253D03%2526year%253D2026%2526los%253D1%2526price%253D877.78%2526currency%253DEUR%2526cid%253D%2526listid%253D%2526rateid%253DZZ_D%2526closerateid%253D%2526promo%253D0%2526isPrivateRate%253D0%2526isAudienceUser%253D0%2526isPaidClick%253D0%2526%26cp%3DJe1RbssPiD0CgtNYlhfM0Vja2J2bxiPlYPNBiACOKb4juINQhcIq4mL-_S42PLVARD-vwUgi2kqA1VTRA",
        "price": {
          "value": 878,
          "currency": "EUR"
        },
        "cost": {
          "value": 878,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 878,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 878,
          "currency": "EUR"
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
