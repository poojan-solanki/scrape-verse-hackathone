# Google Hotels currency

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/currency](https://docs.brightdata.com/api-reference/serp/google-hotels/currency)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Google Hotels currency parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Currency to show prices at (3-letter code).

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR
  ```

  | Parameter          | Description           |
  | ------------------ | --------------------- |
  | `brd_currency=USD` | United States Dollars |
  | `brd_currency=EUR` | Euro                  |
  | `brd_currency=INR` | Indian Rupees         |
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_currency=EUR',
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
  ```json 200 highlight={12} theme={null}
  {
    "overview": {
      "type": "hotels",
      "title": "Four Seasons Hotel New York Downtown",
      "requested": {
        "start_date": "2026-02-27",
        "end_date": "2026-02-28",
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
        "title": "trivago.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/1922649917165881388.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQAxoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYASABEgIMmPD_BwE&category=acrcp_v1_48&sig=AOD64_0a1P9Yt88LhcGZJx58EjOh4fTiVQ&adurl=",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "Tripadvisor.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7993073966338005995.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQDhoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYAiABEgJjdvD_BwE&category=acrcp_v1_48&sig=AOD64_2x9Ta0FB6YBsRCvcIyd_qLExGNhg&adurl=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Bluepillow.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/c770e909-af04-45dd-8ad7-335bc5055826.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQARoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYAyABEgLOGfD_BwE&category=acrcp_v1_48&sig=AOD64_215l665ommkn4MPu9h1G6vz_UrQg&adurl=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQBRoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCABEgL5ovD_BwE&category=acrcp_v1_48&sig=AOD64_2-wbT67uRZ3dpG-n84czp3pFidvw&adurl=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "rooms": [
          {
            "title": "Accessible Manhattan Room with King Bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_ySiIEbCWYVgsWXAcT9P6GEaGc7OIZTLS03_DwOCK8IfvGbD_qIjGfPO3Eqe2ujdp686Jxaub2fQPluNbPelOp1hXNH1wTqhWRTw5yvK3qB_eDVgGDDZjnm-Y8JdMbrXO8mvoFY9XldhKGW0xzs8vHzPlebVX5jVqIXrZZrBft7bw1oadabdwy0BcKwTI-5__z5UG9mhDZhf8RBL3tbtlCP7ltZNmSUmDI"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQBhoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCACEgI7h_D_BwE&category=acrcp_v1_48&sig=AOD64_0rd_VmXo7-De_CV-0ExmLlkshY3w&adurl=",
            "extensions": [
              "1 king bed Suite"
            ],
            "price": {
              "value": 1068,
              "currency": "EUR"
            },
            "cost": {
              "value": 1068,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1068,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with king bed",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQBxoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCADEgJQuvD_BwE&category=acrcp_v1_48&sig=AOD64_06FeYrVdQVj2GCjqiw5cSL3W2EqA&adurl=",
            "extensions": [
              "1 king bed"
            ],
            "price": {
              "value": 1068,
              "currency": "EUR"
            },
            "cost": {
              "value": 1068,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1068,
              "currency": "EUR"
            }
          },
          {
            "title": "Manhattan Room with Double Beds",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_x0k4J54-9hPcjZD7dI7EPSPf0jTgUSjiBzg_tByN6hA54CETEg-NP6EA5YePboKLIbBc9zfFEJI8qMPNEkn_Dg4x6PZmLFAguh18RWhPqnEe7F0MXgyquSdIau9nfZMj1Jp6XO7lXEbcdWhWTf4fBGzfHV-xO01KiviU2RG-oP3o4kVsl08GcV8X6JTEI3qBUCHdelt_CbLOIdsouRqf00MT5QTTiDYw"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQCBoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCAEEgJFAfD_BwE&category=acrcp_v1_48&sig=AOD64_3lylte3x_RmGQW44vvQhE6qAvZtg&adurl=",
            "extensions": [
              "2 double beds"
            ],
            "price": {
              "value": 1136,
              "currency": "EUR"
            },
            "cost": {
              "value": 1136,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 1136,
              "currency": "EUR"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQCRoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCAFEgL_o_D_BwE&category=acrcp_v1_48&sig=AOD64_3df6i4XI55YVbJvdWR__d5rEYfCg&adurl=",
            "extensions": [
              "Suite 3 guests Suite"
            ],
            "price": {
              "value": 2587,
              "currency": "EUR"
            },
            "cost": {
              "value": 2587,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2587,
              "currency": "EUR"
            }
          },
          {
            "title": "Liberty Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_zWFS0CdMRk4l9ZyD2WEhENua_lhcl151tKXdiyVEd3df2rCS_OT9oNo1z9ucWUFbu9qUa-2e94u9qYlLAEhP2kfhc2eC1XuqvQIkVleTmhE-GpsCtZ8W7Z6F9iEH-ksjoYLDTXJpWop7XJncxvLfeaoL8HQBbNlYfm9MGirHA9P__hgBbv44tBBEX614hpQmQ4vIL1OrS_55SiEINCqyNKvzxnZ4mSkSo"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQChoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCAGEgLXVPD_BwE&category=acrcp_v1_48&sig=AOD64_0dw_Q6x9sTC-35v0n_kmxtedJHvg&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 2685,
              "currency": "EUR"
            },
            "cost": {
              "value": 2685,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 2685,
              "currency": "EUR"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xLdqHwg-K7pMN18a6KDqVtRcOabuwWmRDA9Ri89kjhhMaoUIFccHAFXxdPlbGIrmAFrFEwTYVNMlTko89AmvqhuKF6AzR_Zm2bR3SKvfMn0z3CW6TofCz--cn3CxsVtGwx3SBS_v65LF2ZmOok40URqrq4dSUDR5Am6tvGc80Q_36-CwXtqCle7Spq_JTdhla34xp125Rh6E1uUredhS0dwj-hO6-8yfU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQCxoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCAHEgJIjfD_BwE&category=acrcp_v1_48&sig=AOD64_1nBZEah-EtAFDiTpoMosV0xSc5cg&adurl=",
            "extensions": [
              "Suite 3 guests Suite"
            ],
            "price": {
              "value": 3312,
              "currency": "EUR"
            },
            "cost": {
              "value": 3312,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3312,
              "currency": "EUR"
            }
          },
          {
            "title": "Oculus Suite",
            "pictures": [
              "https://lh3.googleusercontent.com/hrppk/ANjXD_xLdqHwg-K7pMN18a6KDqVtRcOabuwWmRDA9Ri89kjhhMaoUIFccHAFXxdPlbGIrmAFrFEwTYVNMlTko89AmvqhuKF6AzR_Zm2bR3SKvfMn0z3CW6TofCz--cn3CxsVtGwx3SBS_v65LF2ZmOok40URqrq4dSUDR5Am6tvGc80Q_36-CwXtqCle7Spq_JTdhla34xp125Rh6E1uUredhS0dwj-hO6-8yfU"
            ],
            "link": "https://www.google.com/aclk?sa=l&ai=DChsSEwi_sZGVpviSAxVnmFAGHYDeBe8YACICCAEQDBoCZGc&co=1&ase=2&gclid=EAIaIQobChMIv7GRlab4kgMVZ5hQBh2A3gXvEAoYBCAIEgLL8vD_BwE&category=acrcp_v1_48&sig=AOD64_3zx3DbaGC1ciFl6mLJhqLWgWQJQw&adurl=",
            "extensions": [
              "Suite 4 guests Suite"
            ],
            "price": {
              "value": 3409,
              "currency": "EUR"
            },
            "cost": {
              "value": 3409,
              "currency": "EUR"
            },
            "price_with_tax": {
              "value": 3409,
              "currency": "EUR"
            }
          }
        ]
      },
      {
        "title": "Super.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/cfa60c4a-13cd-46d3-9354-ec90c89ec855.png",
        "link": "https://www.super.com/travel/transition/?data=price=1017.4%26total_price=1170.89%26request_id=956ec49d-d194-4af5-b758-2a58b74df765%26ps=2178426524%26pp=MgpT26Ar_fcoyoSJr1OvFQ%26pb=J7O9V0FK0H7qVJjJTsKzWF5_O0c5XWr3ek5m89szLIEMFJC5Zxe8VDWcig3FYaBJx82ChZgnnEaEKIED4H1cTPfPJ24SjAKYEXQkaH-YIcnnjpAh23C7mZfjHcN7sssiZPdvWay6qRjU27cO8gpEQVdcujXFJsXAsQsmspk_MWUMq1NtVdg6hHJC6SWR302ZUzvKG4tCBXKzrkXNELop4dLQfw2gxlPp1aF42o5m9tU8pS0LG3dORQDmpQjlUU3vDVda4nVQax6lTNBAULvH-aGSfRQcIcp0ghvVAuCCILpIO4b3lrtg6obiJ9Ukj2r-2JPCoi52ZR0MZWq-wluUI6-p4MpbUEP4XxV5oP4407O-p_XSpzHYPZ0YM2tcjdbpRAvcW6QNh7LdFnKjr7UHnw%253D%253D%26gha_pull_request=True%26rtp=SdTUqdR7wIew8aRS9esAtw%253D%253D%26risk_lk_1=true%26alwd_risk=false%26alwd_rand=false%26gt=1772146882%26sg=1vDpD%26sid=GHA_MD7%26cmab_id=11%26ttl_bkt=none%26all_inclusive=false&utm_source=gha&utm_content=localuniversal&currency=USD&user_country=DE&verification=false&rate_rule_ids=&date_type=selected&rate_rule_id=signedout_desktop&display_currency=EUR&display_all_inclusive_price=992.56&checkin_at=2026-02-27&checkout_at=2026-02-28&provider_hotel_id=10007072903&provider=ean&num_adults=2&children=[]&hotel_campaign=&utm_campaign=&user_locale=en-DE&user_list_id=&utm_medium=organic&utm_id=gha_organic",
        "price": {
          "value": 993,
          "currency": "EUR"
        },
        "cost": {
          "value": 993,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 993,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 993,
          "currency": "EUR"
        }
      },
      {
        "title": "Expedia.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.expedia.de/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&MDPCID=DE.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.15438428.20260227.20260228.DDF.1.CID..AUDID..RRID.bex_eu_desktop&adults=2&children=&mctc=10&ct=hotel&mpg=EUR&mpf=1066.47&mpj=139.66&mpr=0.00&mpl=EUR&exp_pg=google&langid=2057&ad=2&tp=&utm_source=google&utm_medium=cpc&utm_term=15438428&utm_content=localuniversal&utm_campaign=HotelAds&rateplanid=208165427&mpm=24&mpn=201555591&mpo=EC&mpp=1",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "Tripadvisor.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7993073966338005995.png",
        "link": "https://www.tripadvisor.com/HotelHighlight?detail=10330604&m=66081&staydates=2026_02_27_2026_02_28&uguests=1_2_&supdv=desktop&supbl=localuniversal&supkl=selected&supuc=DE&supul=en&supia=0&supip=0&supmb=LawyZOnHWGTi5JureKez05Ux_4uzRfucwiwJO0Ur-EOZAGR2VATUEkIrCrQmFAl6hKCwChiBRN0oO91ccMkG_5Xt3rg_8uf1vJvHQcDHTGAGj6_NTAPi53B-zGoLJ5jYqfI-EEMFqC5i2g8cKPdPK-RErau2lMGv8CDvCDdShYpeP-VlWp3KAopc1dhACy&supmc=nQ4PpqcyHrfWrlYWf-P2yA5Xf3Hy9me7nAbFI2-lfjQWuqBigm4pDvLJVQzDnk3btwQ&supts=&supey=m|110581|PL_PCE_query&supcd=&suptp=5n6zb51uz_KcZX6CABEBIznuo2xyToGgGWYdsvwlhBJQAQy77vvUy3X-i-Eq_4YDS6M7mCE36on5ok897M9AgVDe4FIBYuYhfwBLNsxEfgBPBfBdZd0gDtIPUCyQUdXqBXYdjaelpCzNDb92k-_tAy2dyFs9LQsl7W1iPhYjSz6Bq1KLu6gfsm1AaND5hw&supas=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "trivago DEALS",
        "logo": "https://www.gstatic.com/travel-hotels/branding/8670591202796644526.png",
        "link": "https://www.trivago.deals/hotels/united-states_ny_new-york/555839_four-seasons-hotel-new-york-downtown?checkIn=2026-02-27&checkOut=2026-02-28&placeId=H555839&campaignName=TrivagoDeals_Google_DE&currencyCode=EUR&dealKey=CAIQtwYiDAjToIPNBhDgh_r8AipJDQCAgkQVAMCURCVczwVDLXsUPkAwATiBA0UAgIJESgwIzqCDzQYQyNKakgJiClN0YW5kYXJkIEtoAo0B4YKCRKABp7sPqAHIBjDHBji_9iFAg_EPSAFSCCC2jaeiJp5SWNIH&countryCode=DE&languageCode=en&rule=Google_DE&site=localuniversal&ads=&origin=31&priceDisplayedTotal=1044.00&priceDisplayedTax=136.78&device=desktop&adults=2&children=0",
        "price": {
          "value": 1044,
          "currency": "EUR"
        },
        "cost": {
          "value": 1044,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1044,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1044,
          "currency": "EUR"
        }
      },
      {
        "title": "Priceline",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "link": "https://www.priceline.com/r/?channel=meta&product=hotel&theme=ghalistings&refid=PLGOOGLEMSS&refclickid=DE_HP%7C35500803_localuniversal_1%7C20260227%7Cdesktop%7Cuserdate|public|||1%7C2%7C0|0|EN&hotelid=35500803&checkin=20260227&checkout=20260228&rooms=1&currency=USD&displayedCurr=EUR&POSCountryCode=DE&taxDisplayMode=BP&cityID=3000016152&adults=2&land=L&metaid=d2XxBXAt9Q75gh58g80rgqUAp7eGbPmm2lOGeL-B98Cv9eZIJL71vRkCXUhToMuWAq02eP_0wolJcn74idh9EMoMIWERkOcRirTP5N-25r3ng__yZHMGbcm8uGrcCO4rPomRx4Z8cAUu28Fm_xUCfKHpSj8kHnrkYafIS6jaKpASCgi_93tPRnCurgskNwx-KGXwRa9wFWj9UK5rKrGL-6GSRrTGxJ8QJfvC0c6_eXAx8ncHeGDHyVDixNXfc_s2O1nJn3VV5qz-nsmBeP7NYnHYgrLgnvZsvnDE3qQSvyANAjC0wjOue-ukzYsCOxsknyyZS4FBSxlxvTedFkWTGNhXiR1XwE2VGKAessLp0nRGlGlF57PIXmXHPdtwxkuMbPSNG2Fj2tsTJPU2IFDyAu5dJq0w8PzZDKqo_zz2aXQ&dblcnt=true&user_num_adults=2&hc=1&pdtax=139.88&pdf=0.00&pdt=1068.11&locale=en-us&ad-src=&numChild=0",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.booking.com/searchresults.en.html?dest_id=599535&highlighted_hotels=599535&dest_type=hotel&checkin=2026-02-27&checkout=2026-02-28&group_adults=2&req_adults=2&show_room=59953503_336303630_2_0_0&lang=en&selected_currency=EUR&exrt=0.84770000&ext_price_total=1068.11&ext_price_tax=139.88&xfc=USD&hca=m&group_children=0&req_children=0&&no_rooms=1&ts=1772146193&edgtid=fdRhqzYPRM2f0oYH7k-AUA&efpc=EJWwChJgsBov&utm_source=metagha&utm_medium=localuniversal&utm_campaign=DE&utm_term=hotel-599535&utm_content=dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-&aid=2127499&label=metagha-link-LUDE-hotel-599535_dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Agoda",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b13642de-d476-41bd-8254-3edc2e567aa6.png",
        "link": "https://www.agoda.com/partners/partnersearch.aspx?site_id=1917614&CkInDay=27&CkInMonth=02&CkInYear=2026&CkOutDay=28&campaignid=&CkOutMonth=02&CkOutYear=2026&SearchDateType=selected&NumberOfAdults=2&LT=1&NumberOfChildren=0&childages=&NumberOfRooms=1&gsite=localuniversal&los=1&PartnerCurrency=USD&hid=206039&RoomID=11135628&masterRoomId=8697863&PriceTax=139.88&PriceTotal=1068.11&RatePlan=11c82d85-6e23-a66f-2295-8189e6e0d078&UserCountry=DE&Currency=EUR&UserDevice=desktop&Verif=false&rr=row_desktop&audience_list=&mcid=3038&booking_source=cpc&adType=0&mpt=TE9pb2F1RGhrNWtaeFZrU2c1M1NzQ2gxZzR0NnZkTnB0VlQ5TVNlWGVzQ25tR0NpY1VFa1dwRzhoOGRJeWFPcGwvWEVvVlZ4dGZSQQ&original_rr=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Hotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/f358dd45-ebd1-4af8-988d-d53154b73975.png",
        "link": "https://de.hotels.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&mdpcid=HCOM-DE.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.15438428.20260227.20260228.DDF.1.CID..AUDID.&adults=2&children=&mctc=10&mpf=1066.47&mpg=EUR&mpl=EUR&mpj=139.66&mpr=0.00&rffrid=sem.hcom.DE.156.024.localuniversal.02.desktop-1.kwrd=GGMETA.15438428DEen-20260227-N-ABW=1-camp=-aud=-N&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "HolidayCheck.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/def67e1e-fba6-4e51-96c0-40a281bca824.png",
        "link": "https://www.holidaycheck.de/ho/angebote-/7767066c-094e-47fe-afc1-439d930a6a84/hotelonly?_offer=adults:2,departureDate:2026-02-27,duration:1,returnDate:2026-02-28,tourOperator:~eec21a06-f64e-3130-9dba-d57216c6e98e,travelkind:hotelonly&utm_source=google_hotel_ads&utm_medium=metasearch&utm_campaign=gha_&utm_content=-&utm_term=uuid_7767066c-094e-47fe-afc1-439d930a6a84_en_DE&trv_dp=1066.00",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "Bookhotel.direct",
        "logo": "https://www.gstatic.com/travel-hotels/branding/15717022029370921658.png",
        "link": "https://always.bookhotel.direct/119578/?checkin=2026-02-27&checkout=2026-02-28&nb_adult=2&nb_child=0&campaign=localuniversal&tracker_id=&device=desktop&currency_code=EUR",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Hotwire.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_112.png",
        "link": "http://www.hotwire.com/hotel/details/direct-retail-details?startDate=02/27/2026&endDate=02/28/2026&selectedExpediaHotelId=15438428&numAdults=2&numChildren=0&sid=S537&bid=B381549&rpid=RPE15438428&mctc=10",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "My Luxury Hotel",
        "logo": "https://www.gstatic.com/travel-hotels/branding/11153979922261788882.png",
        "link": "https://www.myluxuryhotel.com/hotel/1137278/?ppc=true&isHotel=true&checkin=2026-02-27&checkout=2026-02-28&nights=1&rooms=%5B%7B%22adults%22:2,%22children%22:%5B%5D,%22kidsAge%22:%5B%5D%7D%5D&utm_source=GoogleHC&utm_medium=paid&utm_campaign=&utm_content=localuniversal&utm_term=1137278&pv=1772146086550&sourceToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJib29raW5nX2NvbSIsImV4cCI6MTc3MjIzMjQ4NiwiaWF0IjoxNzcyMTQ2MDg2fQ.dhzFWTAvfp_DtzfgUmMtG8ice2_BZN0gYKpIYb4QzTU",
        "price": {
          "value": 1064,
          "currency": "EUR"
        },
        "cost": {
          "value": 1064,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1064,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1064,
          "currency": "EUR"
        }
      },
      {
        "title": "LateRooms.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/10344278261224262221.png",
        "link": "https://www.laterooms.com/hotel/1137278/?ppc=true&isHotel=true&checkin=2026-02-27&checkout=2026-02-28&nights=1&rooms=%5B%7B%22adults%22:2,%22children%22:%5B%5D,%22kidsAge%22:%5B%5D%7D%5D&utm_source=GoogleHC&utm_medium=paid&utm_campaign=&utm_content=localuniversal&utm_term=1137278&pv=1772146675006&sourceToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJib29raW5nX2NvbSIsImV4cCI6MTc3MjIzMzA3NSwiaWF0IjoxNzcyMTQ2Njc1fQ.5tkEiOILQzpUsLdU3JOYYb9XbD8lzYIapq2unhu_S-Q",
        "price": {
          "value": 1064,
          "currency": "EUR"
        },
        "cost": {
          "value": 1064,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1064,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1064,
          "currency": "EUR"
        }
      },
      {
        "title": "BusinessHotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7e9b18f5-dcd9-46e2-8bed-33a004b33995.png",
        "link": "https://www.businesshotels.com/reservation.php?hotel-id=701383248&checkin-date=2026-02-27&checkout-date=2026-02-28&language=en&USER-CURRENCY=EUR&USER-COUNTRY=DE&NUM-ADULTS=2&NUM-CHILDREN=0&prid=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Bluepillow.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/c770e909-af04-45dd-8ad7-335bc5055826.png",
        "link": "https://www.bluepillow.de/search/594397817c00cb0e643c3237?begin=2026-02-27&end=2026-02-28&block_id=-b,8Uf4rkAjzDRsZGMlbZ2L3P6MncHRCisqAlmPM2fDVh-MWFeydaDGybaxsDOk5RRq,-bkng-Hotel&adults=2&childs=0&infants=0&childrens=0&country=DE&currency=EUR&language=en&source=localuniversal&utm_campaign=hotel&prid=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "AsiaYo",
        "logo": "https://www.gstatic.com/travel-hotels/branding/42906b93-548c-4f41-b994-b55cb3ff88e8.png",
        "link": "https://asiayo.com/en-DE/v/80171/?check_in_date=2026-02-27&check_out_date=2026-02-28&adult=2&currency=TWD&aff_id=269&utm_source=google_hotelads&utm_medium=cpc&utm_campaign=&click_source=freelinks",
        "price": {
          "value": 1069,
          "currency": "EUR"
        },
        "cost": {
          "value": 1069,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1069,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1069,
          "currency": "EUR"
        }
      },
      {
        "title": "Brek",
        "logo": "https://www.gstatic.com/travel-hotels/branding/5560284514445840289.png",
        "link": "https://www.brek.com/search?lat=40.713038&lng=-74.008777&checkin=2026-02-27&checkout=2026-02-28&pinned=6473b44aa1d24283bbe42fcf&utm_source=gha&ep=7f51dcbc8ed03f8df50a8a49eb0402650a92a1a8ba5dbe12a0f87c1c4f5501fd4419ca8e2e4156d66771f793703a654de6447d9afa684dd9aaf23720365ab52b&user_currency=EUR&user_country=DE&user_language=en&user_displayed_total=1068.11&user_displayed_tax=139.88",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "ZenHotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/4183134106872331441.png",
        "link": "https://www.zenhotels.com/go/rooms/8022177/?dates=27.02.2026-28.02.2026&cur=EUR&lang=en&utm_source=google_hotelads&utm_medium=cpc-metasearch&partner_slug=google&guests=2&from=four_seasons_new_york_downtown.1067.EUR.sr-019c9c2b-d68d-7c78-a6af-a6a06163fcdd&utm_campaign=en-DE&price=one&scroll=prices&partner_data=nZGSckkwDkOfgcLWqWv2vcv-UTDCi5daH71o5pjK7W-OzZMzCZLp3aLSboujat6T5cu61-6i62Ah2ooiUUoZpf65pHtjki-p9YAD_GjgK_nRtZ1HzDTdS08OoMnk7rlBgK9jjkI6KA4aB_pKCqXwzVI2vJ2Kp-nvQyoR1uUIWv7Ymeozew==&utm_content=GoogleCPC&utm_term=gacid_.bw_1.los_1.dow_Friday.dtype_selected.hid_8022177.rid_37368388.aud_.d_desktop.ad_0.ctype_hotel.promo_0.apireqtype_deals=disabled&showed_price=1067.00&showed_taxes=0.00&member_deals=true",
        "price": {
          "value": 1067,
          "currency": "EUR"
        },
        "cost": {
          "value": 1067,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1067,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1067,
          "currency": "EUR"
        }
      },
      {
        "title": "Clicktrip.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/3461ae67-c427-4ecf-a48f-524b530be084.png",
        "link": "https://clicktrip.com/hotels/details/eKzWHKZDZDDlDDnIV9pF8qNnAbhMcxfrOmM00LuP-WZM-OlC0YiY6C3Plhnh2GOzrDGz7YA8Ka7_uXd3G7xRkW1AOKukELWkE81NmUW9dkVer-LVrgdZ43GtxvmQKGMW5svx0yisY_dCqx09i4Xz7g2?locale=en&currency=EUR&pos=DE&date_type=selected&taf=4VuIiZxdMhc_k7eO7eQG044Ux2a0jvNQY-a16ZfgBOwo9Q-yTXiyQYIDPE2yG5xO0&verification=false&clk_src=",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "Opodo",
        "logo": "https://www.gstatic.com/travel-hotels/branding/05208793-cd83-4e8b-b76c-7ff346e093e3.png",
        "link": "https://accommodation.opodo.de/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&adults=2&children=&mpf=1066.47&cur=EUR&mpj=139.66&wapb3=|c.506940|l.de_DE|t.meta|s.ghs&MDPCID=Opodo-DE.DPS.Opodo.MetaSearch-GHA.HOTEL&mpl=EUR&numberOfRooms=1&locale=de_DE&rffrid=h4p.hcom.DE.ghaodigeo.000.000.kwrd=&pos=OPODO_DE&rateplanid=208165427&mctc=10&utm_medium=metasearch&utm_campaign=495029696&utm_term=hotel&utm_source=FREEBOOKING",
        "price": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost": {
          "value": 1066,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1066,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1066,
          "currency": "EUR"
        }
      },
      {
        "title": "Hotelscombined.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b73f8d82-aa66-4ac5-861d-52bce84c9ae5.png",
        "link": "https://www.hotelscombined.de/semi/ha/hotel_ads/2600131/en.html?utm_source=google&utm_medium=cpc&utm_term=2600131&adType=0&utm_content=localuniversal&utm_campaign=HotelAds&ci=2026-02-27&co=2026-02-28&gs=localuniversal&l=1&pc=USD&rid=&pdtax=139.88&pdtotal=1068.11&rpid=&uc=DE&ucuc=EUR&d=desktop&lc=en&v=false&rrid=&k_pc=~QUdPREFIUEE&k_rt=&k_sid=xfAER-M11F&k_kct=1772137603&k_gct=1772138413&g=2&r=1&ac=2&k_cc=de&dt=selected&cmpid=&cmptrack=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "momondo.de",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_970163321.png",
        "link": "https://www.momondo.de/semi/ha/hotel_ads/2600131/de.html?utm_source=google&utm_medium=cpc&utm_term=2600131&adType=0&utm_content=localuniversal&utm_campaign=HotelAds&ci=2026-02-27&co=2026-02-28&gs=localuniversal&l=1&pc=USD&rid=&pdtax=139.88&pdtotal=1068.11&rpid=&uc=DE&ucuc=EUR&d=desktop&lc=en&v=false&rrid=&k_pc=~QUdPREFIUEE&k_rt=&k_sid=xfCEA4qdZ8&k_kct=1772137603&k_gct=1772138449&g=2&r=1&ac=2&k_cc=de&dt=selected&cmpid=&cmptrack=",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "müv AI",
        "logo": "https://www.gstatic.com/travel-hotels/branding/2710211444546704077.png",
        "link": "https://muvtravel.com/xp-hotel?hotelID=116119126&checkinDay=27&checkinMonth=02&checkinYear=2026&nights=1&num-guests=2&checkoutDay=28&checkoutMonth=02&checkoutYear=2026&PROMO-CODE=98010",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Closest Hotel",
        "logo": "https://www.gstatic.com/travel-hotels/branding/15292798194442829381.png",
        "link": "https://closesthotel.com/googleRedirMainSearch.php?checkInYear=2026&checkInMonth=02&checkInDay=27&checkOutYear=2026&checkOutMonth=02&checkOutDay=28&numberOfNights=1&numberOfAdults=2&numberOfChildren=0&numberOfGuests=2&hotelID=15438428&roomID=201555590&currency=EUR&deviceType=desktop",
        "price": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost": {
          "value": 1068,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1068,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1068,
          "currency": "EUR"
        }
      },
      {
        "title": "Traveloka.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/cc46874d-c374-4a99-83c7-b6f79d0b19d3.png",
        "link": "https://www.traveloka.com/en-en/hotel/search?spec=27-02-2026.28-02-2026.1.1.HOTEL_GEO.4005128638.New%20York%20State.2&hotelId=1000000601517&contexts=%7B%22accessCode%22:%2290975GHAD1305desktop%22%2C%22metasearchRequestId%22%3A%22cb5f2e56-846c-4e98-ada0-3a1b1aa861ff%22%2C%22plc%22%3A%22Uz%2F51aey53IgPjFiTs8zCqt%2FEzVSVv3B37GI8CihLxgZQ4P2RnJ4vXuEz6mydh0QWSafPGCMr%2FG%2FGO8e%2BT5i%2Fg%3D%3D%22%7D&metasearchId=GoogleHotelAdsUser&metasearchRateId=desktop&metasearchRatekey=sgyUU2M0LrnnpXh1LPwoI&priceDisplay=TOTAL&metasearchRefid=12345678910abcdefghijk@-&adType=0&PPA=0&hotelCampaign=1&cur=EUR",
        "price": {
          "value": 1071,
          "currency": "EUR"
        },
        "cost": {
          "value": 1071,
          "currency": "EUR"
        },
        "price_with_tax": {
          "value": 1071,
          "currency": "EUR"
        },
        "cost_with_tax": {
          "value": 1071,
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
