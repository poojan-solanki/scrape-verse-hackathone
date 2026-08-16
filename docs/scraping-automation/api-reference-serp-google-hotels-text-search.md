# Google Hotels text search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/text-search](https://docs.brightdata.com/api-reference/serp/google-hotels/text-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Google Hotels text search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown',
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
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQGRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYASABEgKkQPD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_3WZxVwX7M7SdQk8bv9GVdk2wUCRA&adurl=",
        "price": {
          "value": 935,
          "currency": "USD"
        },
        "cost": {
          "value": 1076,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1076,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xnOTripjyZxILxkGgM1cYmQNCrIY1AgC49RisFNimj2Fshwx2QGIQcEqMKtGUPMMgiTEEzO4iBsB7TbE47tH61of_7vI_YBVxRVepXz1HrN4BiNtYi4Ah55Rj-ClCQiYnxdsj2Tpfv5eCDvZZSbZZLfUosmTOb06MxTGypuYoqum1sM7IVOBEd69gXyVDP61aNCFq1_pfxvUA6hH4zIOqsaudDn5pkTw"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQHBoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYASAEEgLuCvD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_0cXRg9LtSvb94BUoXNgy8J04C5QQ&adurl=",
            "extensions": [
              "2 double beds Free cancellation until Feb 27"
            ],
            "price": {
              "value": 935,
              "currency": "USD"
            },
            "cost": {
              "value": 1076,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1076,
              "currency": "USD"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQHRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYASAFEgLqhPD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_1ar70DInUs8eU0WRh2f8RzL1QKww&adurl=",
            "extensions": [
              "Suite 3 guests Free cancellation until Feb 27 Suite"
            ],
            "price": {
              "value": 2440,
              "currency": "USD"
            },
            "cost": {
              "value": 2805,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2805,
              "currency": "USD"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQHhoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYASAGEgKKYfD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_3Tw83cHkve-fjPnlHEu96gRaGYag&adurl=",
            "extensions": [
              "Suite 4 guests Free cancellation until Feb 27 Suite"
            ],
            "price": {
              "value": 2540,
              "currency": "USD"
            },
            "cost": {
              "value": 2920,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2920,
              "currency": "USD"
            }
          }
        ]
      },
      {
        "title": "Hotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/f358dd45-ebd1-4af8-988d-d53154b73975.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQIBoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiABEgLFyPD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_0Uc0x_tn6Dpzw1hNIA3bvO-V8XeQ&adurl=",
        "price": {
          "value": 935,
          "currency": "USD"
        },
        "cost": {
          "value": 1076,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1076,
          "currency": "USD"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQIRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiACEgLJMfD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_1-IaI3Wc2iZiz04F2g0iO4omJcxw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 935,
              "currency": "USD"
            },
            "cost": {
              "value": 1076,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1076,
              "currency": "USD"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zBdES1oKIM8aMTINPz_t2xtu2KC-uSe_oOKzsl9YklwJYFM1GwO-qFi8swCpTQ_KV9p47-tkiSad2to48uKImdUBLBvt6mhp6Hs8Q18Gxe3ss20foBlRPuXa_2vk47r8GRUWFd23wok1KV0TIGM9U2NVIgJ0V74PeZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQIhoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiADEgJLvPD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_1l9E4tRWWXqZXljR31RIHW1CjIRg&adurl=",
            "extensions": [
              "2 double beds Free cancellation until Feb 28"
            ],
            "price": {
              "value": 935,
              "currency": "USD"
            },
            "cost": {
              "value": 1076,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1076,
              "currency": "USD"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zirGqnNUV3bUkVZ6Yq4QzaxzMTFw8S7BL88YG2xqf5qarRKkr50s-PfillUJkRvSl7KQqXwV9-bVLeYtBRigMpPPejfmFNDLX3qXcjydhC3sIHQL6X9_KcnnQtD_1b8kFPT_gkxt3Bjoif3Alols11Pq0yWqW6dkvZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQIxoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAEEgL_UvD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_2kR-kPDdNnb1lcBUNkpM5s-Q_yLw&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 935,
              "currency": "USD"
            },
            "cost": {
              "value": 1076,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1076,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xfIleTKUi_ePsxGkSstGASzo99qNFBpB94rAAtcEI1C-ZLD4XATuPdh4hGG4RUio3DvonDRyOo7dGZScl55LMBJ7ZEgdijCjGdglXAmtBG3qRZGZdrm-Uggx1OjUAheXtRIDPT0atuWFPccAbkfddjQ7vp6ud3UM4"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQJBoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAFEgKVwPD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_0ZrJRz7IXgFt5CcI54GIb2V_aOEA&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1035,
              "currency": "USD"
            },
            "cost": {
              "value": 1191,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1191,
              "currency": "USD"
            }
          },
          {
            "title": "SoHo Premier King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wuMW97qyG0dgi5Gj5Nob9SzWQ170RVssqu5Fios_swsegU93lsHLoiTo_9hPSttkpklB0QBmU3t8wNPCQgylOL-NJIgsqbtdxI9d0gUE0XKG75M-LzpdyK3M_cTzH8nIl8lL0Sg42N7pxz2ygDzoP-qsR7LH3Hj-q4"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQJRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAGEgLyS_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_0iD3vQeRSxwkBcCu0F0NEdbpHPBQ&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1035,
              "currency": "USD"
            },
            "cost": {
              "value": 1191,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1191,
              "currency": "USD"
            }
          },
          {
            "title": "SoHo Premier Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_yWbtP4vz4gyFOxx-uO3-5Qz-n7oPrXCYz5CjsOYpGwfd4vSy9B9DmddpQ72H1LjiPhk20d5mt6c1lijronkH7FfBq_eJpzEc5CHGZ7teq5zP3sV-Qv2c7VwXXrPvClVawgmkgAWf80sXLQrVzreBLAZ8lA7k1Ud8YY"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQJhoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAHEgJD9_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_1-qvLSoH3qtZl1Jzkpvr6iRQtDug&adurl=",
            "extensions": [
              "1 double bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1070,
              "currency": "USD"
            },
            "cost": {
              "value": 1231,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1231,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner King",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xh7ZruI7-cODN5bzF1IWAG3PEIQADDGgw0sWtDDRk-TbV4EPtEVYDEJewJgMRtl6Zejine24V66DGiU5FlqCq-EMgShWDmqhjLyVs9FERHWG0QxGnFxW7LN7-HGl4UrF7-s8XcAj7YDUQ5xjlaAX-v836WgUq0svU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQJxoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAIEgK2a_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_1zUSId1nUwCQq7yh4XLKuB1Ohivg&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1135,
              "currency": "USD"
            },
            "cost": {
              "value": 1306,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1306,
              "currency": "USD"
            }
          },
          {
            "title": "Hudson Corner Double",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zBdES1oKIM8aMTINPz_t2xtu2KC-uSe_oOKzsl9YklwJYFM1GwO-qFi8swCpTQ_KV9p47-tkiSad2to48uKImdUBLBvt6mhp6Hs8Q18Gxe3ss20foBlRPuXa_2vk47r8GRUWFd23wok1KV0TIGM9U2NVIgJ0V74PeZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQKBoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAJEgJde_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_22y9VcsfNpoGEERdBgj2VqhrAopg&adurl=",
            "extensions": [
              "1 double bed Free cancellation until Feb 28"
            ],
            "price": {
              "value": 1170,
              "currency": "USD"
            },
            "cost": {
              "value": 1346,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 1346,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_ww5DsjCN4YmZZyFdZwwPcaACASJul2NHBc33CJI6PmL57ABgizbEjzHfF-mdnm5fxu6htw4H8-uYg1_Hp4qVlRby0MErfZfndCcURjMKhkg1-H-L9fnoCjiJ7eBmFoggT1Yxbr1qxMmBTH5lSeBZGEPtjpj86vT0g"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQKRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAKEgJvsfD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_2U0x0rvKUK5FsuuDInhoRPaeosTQ&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 2340,
              "currency": "USD"
            },
            "cost": {
              "value": 2691,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2691,
              "currency": "USD"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wzZm0OmUCedgu3fTY7PUUPLbLCV5zcQfVDJeHlIBCvk_avmplnbY5FYHLBDZKrSL5xDNRYIn5kBNf-pTzMl2LYIG88MTku07E2_2upUCMIEmY5ZBgeEaPLdgYIcJi5ZTmfLknhkRwQxfF_ZBA8n0mDClKJ3zKe-XUZ"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQKhoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiALEgIye_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_34I7FZ_rEBXGJThi3NhYqDuWYI3A&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 2340,
              "currency": "USD"
            },
            "cost": {
              "value": 2691,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 2691,
              "currency": "USD"
            }
          },
          {
            "title": "Accessible Oculus Suite",
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQKxoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAMEgIFE_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_3ti3aEDih8ZhM7xCfbWZFN0AcKQg&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3370,
              "currency": "USD"
            },
            "cost": {
              "value": 3873,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 3873,
              "currency": "USD"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_y4BiOX0ESx2hQ7R1AbK80n3kIom2QrPE77qx5wQvFyLUGAipd0VVxl3bzztdN3u3e0coud9niym1jM0s4UhuNUWRzj21SpdUKFbMiimNpy6v_iUqVvWpe-e3YUNId8uEmwiUehwTzNU9zmegcaboD_rrmY0mNts-tK"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQLBoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiANEgLNU_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_0LHnRl4WLtqnzsap0aQqFfKg1BbQ&adurl=",
            "extensions": [
              "Suite Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3370,
              "currency": "USD"
            },
            "cost": {
              "value": 3873,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 3873,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQLRoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAOEgJKvvD_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_2S_jbXgWlzoU8K7yog2CEpOluqOg&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 3870,
              "currency": "USD"
            },
            "cost": {
              "value": 4446,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 4446,
              "currency": "USD"
            }
          },
          {
            "title": "Suite, 1 King Bed, Non Smoking, Terrace (Gotham)",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_wa3n-lr_eOJ0aPzXtn0Ebx66AFv4U7oXLWeRazx5Mx2o6WFFtgTe3EqZEunp1KCnoJm_wvXijwQ2Myh3MWvnXHxGeOfrUrPAcH16zjLtwHUkWaD5QHJID78QeK4jwRmpjx-VH9LUNu1xj7yJce1r__ZvucnvWD0Zc"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi93-zwnPiSAxXyBwYAHWE7FUMYACICCAEQLhoCd3M&co=1&ase=2&gclid=EAIaIQobChMIvd_s8Jz4kgMV8gcGAB1hOxVDEAoYAiAPEgKOW_D_BwE&cid=CAASuwHkaL1egiUkcaDPYynZOvPq_V1EjqjtDp-9Z46FQkOyBpyfhHc-NUCl9yq3u7QyCAXmMfG7WgM0eJL-m6ffngDwqurgSL9-kC6NPHZDup2xReT7bDxa38ybswFsaU4B_G16xz9HcBlehtT01ctyXGnH2nDuDzIOE0RQGHNLuEE8c-jZ7vZkqreNfIZPxM-8E2BBF9MBAV42LwdqX2MhImKoMRZiXJ2W1Kk1zYceNVQugE8uJgtuFPUBLOmW&category=acrcp_v1_48&sig=AOD64_2C1L5MfDLw9PVpTdVQNSYIu3EKvA&adurl=",
            "extensions": [
              "1 king bed Free cancellation until Feb 28 Suite"
            ],
            "price": {
              "value": 4070,
              "currency": "USD"
            },
            "cost": {
              "value": 4676,
              "currency": "USD"
            },
            "price_with_tax": {
              "value": 4676,
              "currency": "USD"
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
