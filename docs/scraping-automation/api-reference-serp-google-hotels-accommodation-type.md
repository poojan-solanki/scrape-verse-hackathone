# Accommodation type

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-hotels/accommodation-type](https://docs.brightdata.com/api-reference/serp/google-hotels/accommodation-type)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Hotels Accommodation Type parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Accommodation type: Hotels or Vacation Rentals.

  ```txt wrap theme={null}
  https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals
  ```

  | Parameter                                 | Description                 |
  | ----------------------------------------- | --------------------------- |
  | `brd_accommodation_type=hotels`           | search for Hotels           |
  | `brd_accommodation_type=vacation_rentals` | search for Vacation Rentals |
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals"
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
        url: 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals',
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
      'url': 'https://www.google.com/travel/hotels?q=four+seasons+hotel+new+york+downtown&brd_accommodation_type=vacation_rentals',
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
        "start_date": "2026-02-27",
        "end_date": "2026-02-28",
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
        "title": "Expedia.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/ac238c97-1652-4830-8da8-bb8d8883af88.png",
        "link": "https://www.expedia.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&MDPCID=US.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.15438428.20260227.20260228.DDF.1.CID..AUDID..RRID.bex_us_desktop&mctc=10&ct=hotel&mpg=USD&mpf=1260.01&mpj=165.01&mpr=0.00&mpl=USD&exp_pg=google&langid=en&ad=2&tp=&utm_source=google&utm_medium=cpc&utm_term=15438428&utm_content=localuniversal&utm_campaign=HotelAds&langid=1033&adults=2&children=&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "LateRooms.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/10344278261224262221.png",
        "link": "https://www.laterooms.com/en-us/hotel/1137278/?ppc=true&isHotel=true&checkin=2026-02-27&checkout=2026-02-28&nights=1&rooms=%5B%7B%22adults%22:2,%22children%22:%5B%5D,%22kidsAge%22:%5B%5D%7D%5D&utm_source=GoogleHC&utm_medium=paid&utm_campaign=&utm_content=localuniversal&utm_term=1137278&pv=1772145112009&sourceToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJib29raW5nX2NvbSIsImV4cCI6MTc3MjIzMTUxMiwiaWF0IjoxNzcyMTQ1MTEyfQ.pVyEg6L6lCxv6cPRFyjNpfB0TUyXhF3nMKxMFpl5Fi4",
        "price": {
          "value": 1091,
          "currency": "USD"
        },
        "cost": {
          "value": 1091,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1255,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1255,
          "currency": "USD"
        }
      },
      {
        "title": "trivago DEALS",
        "logo": "https://www.gstatic.com/travel-hotels/branding/8670591202796644526.png",
        "link": "https://www.trivago.deals/hotels/united-states_ny_new-york/555839_four-seasons-hotel-new-york-downtown?checkIn=2026-02-27&checkOut=2026-02-28&placeId=H555839&campaignName=TrivagoDeals_Google_US&currencyCode=USD&dealKey=CAIQjQYiDAiHlIPNBhCwn6r6AipMDQBgn0QVAKCURCWkcCNDLQAAYEAwATiBA0UAYJ9ESgwI_5ODzQYQvN3ZmwFiClN0YW5kYXJkIEtoAoIBAI0BpFifRKABp7sPqAHIBjCNBji_9iFAg_EPSAFSCMmhSmr8dVChWMgG&countryCode=US&languageCode=en&rule=Google_US&site=localuniversal&ads=&origin=31&priceDisplayedTotal=1275.00&priceDisplayedTax=166.94&device=desktop&adults=2&children=0",
        "price": {
          "value": 1108,
          "currency": "USD"
        },
        "cost": {
          "value": 1108,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1275,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1275,
          "currency": "USD"
        }
      },
      {
        "title": "Priceline",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "link": "https://www.priceline.com/r/?channel=meta&product=hotel&theme=ghalistings&refid=PLGOOGLEMSS&refclickid=US_HP%7C35500803_localuniversal_1%7C20260227%7Cdesktop%7Cuserdate|public|||1%7C2%7C0|0|EN&hotelid=35500803&checkin=20260227&checkout=20260228&rooms=1&currency=USD&displayedCurr=USD&POSCountryCode=US&taxDisplayMode=BP&cityID=3000016152&adults=2&land=L&metaid=d2XxBXAt9Q75gh58g80rgqUAp7eGbPmm2lOGeL-B98Cv9eZIJL71vRkCXUhToMuWAq02eP_0wolJcn74idh9EMoMIWERkOcRirTP5N-25r3ng__yZHMGbcm8uGrcCO4rPomRx4Z8cAUu28Fm_xUCfKHpSj8kHnrkYafIS6jaKpASCgi_93tPRnCurgskNwx-KGXwRa9wFWj9UK5rKrGL-6GSRrTGxJ8QJfvC0c6_eXAx8ncHeGDHyVDixNXfc_s2O1nJn3VV5qz-nsmBeP7NYnHYgrLgnvZsvnDE3qQSvyANAjC0wjOue-ukzYsCOxsknyyZS4FBSxlxvTedFkWTGNhXiR1XwE2VGKAessLp0nRGlGlF57PIXmXHPdtwxkuMbPSNG2Fj2tsTJPU2IFDyAu5dJq0w8PzZDKqo_zz2aXQ&dblcnt=true&user_num_adults=2&hc=1&pdtax=165.01&pdf=0.00&pdt=1260.01&locale=en-us&ad-src=&numChild=0",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Booking.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_184.png",
        "link": "https://www.booking.com/searchresults.en.html?dest_id=599535&highlighted_hotels=599535&dest_type=hotel&checkin=2026-02-27&checkout=2026-02-28&group_adults=2&req_adults=2&show_room=59953503_336303630_2_0_0&lang=en&selected_currency=USD&exrt=1.00000000&ext_price_total=1260.01&ext_price_tax=165.01&xfc=USD&hca=m&group_children=0&req_children=0&&no_rooms=1&ts=1772147439&edgtid=HLaytVu3Rg63ysJnMVZ89w&efpc=EJWwChJgsBov&utm_source=metagha&utm_medium=localuniversal&utm_campaign=US&utm_term=hotel-599535&utm_content=dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-&aid=2127486&label=metagha-link-LUUS-hotel-599535_dev-desktop_los-1_bw-1_dow-Friday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260227_ppt-",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "KAYAK.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/6417d44c-c676-4b16-8ae9-f3bbeaa51899.png",
        "link": "https://www.kayak.com/semi/ha/hotel_ads/2600131/en.html?utm_source=google&utm_medium=cpc&utm_term=2600131&adType=0&utm_content=localuniversal&utm_campaign=HotelAds&ci=2026-02-27&co=2026-02-28&gs=localuniversal&l=1&pc=USD&rid=&pdtax=165.01&pdtotal=1260.01&rpid=&uc=US&ucuc=USD&d=desktop&lc=en&v=false&rrid=kayak-us&k_pc=~UFJJQ0VMSU5FQ09SRQ&k_rt=&k_sid=xfCEJfSxh5&k_kct=1772134021&k_gct=1772138420&g=2&r=1&ac=2&k_cc=us&dt=selected&cmpid=&cmptrack=",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Hotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/f358dd45-ebd1-4af8-988d-d53154b73975.png",
        "link": "https://www.hotels.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&mdpcid=HCOM-US.META.HPA.HOTEL-ORGANIC-desktop.HOTEL&MDPDTL=HTL.15438428.20260227.20260228.DDF.1.CID..AUDID.&adults=2&children=&mctc=10&mpf=1260.01&mpg=USD&mpl=USD&mpj=165.01&mpr=0.00&rffrid=sem.hcom.US.156.024.localuniversal.02.desktop-1.kwrd=GGMETA.15438428USen-20260227-N-ABW=1-camp=-aud=-N&rateplanid=208165427&mpm=24&mpn=201555591&mpo=EC&mpp=1&locale=en_US&siteid=300000001",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Tripadvisor.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7993073966338005995.png",
        "link": "https://www.tripadvisor.com/HotelHighlight?detail=10330604&m=66081&staydates=2026_02_27_2026_02_28&uguests=1_2_&supdv=desktop&supbl=localuniversal&supkl=selected&supuc=US&supul=en&supia=0&supip=0&supmb=6aNrQeoh_veGDR9dX-f0aOEdsUcZj5Q31Gw5clDcK_Fu4zF1GeGsOnOVJa9e7MR_KnfX3rKGSDeQQsmT6Fu24cI9HaGubkQHqyQ0E5ehxrVFNKk63aAjbUoCsSiqKx6927xbPPtjoyb17qFU0y7ZxcLIQ_DpkCq7fiwPuBC2ZCnZQGdlf9Q_0IvFHiZiWy&supmc=QxYxCBdEk5a3XPSaGFmqSaju7Qf6jOvQob64PgAfaVyE13Gv5RVlpLlVDuFBbHA&supts=&supey=m|108054|PL_GL_query&supcd=&suptp=XprnE0vplRKDYp2kABEBIznuo2xyToGgGWYdsvwlhP4Smi0WuliuoLoThxTL3JqLtbSyQJxLA1QMxUUTBEch6GHC8ZqA-6dtv2-0Ub-jrkdYi5y3MyZjBa2fp-IguJyBi3oewy-9R6Z0QXZlRw3BPYs4hJ-LOpTRGSB8haN2V8S4n4MCnSKxUYA50BFGm9&supas=",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Best Hotel Deals",
        "logo": "https://www.gstatic.com/travel-hotels/branding/49083cad-a022-48f3-965c-36ee20bf8352.png",
        "link": "https://besthoteldealsglobal.com/property/417372?rooms=1&currency=USD&withTaxes=&startDate=27-02-2026&endDate=28-02-2026&occupancies=[]&utm_source=google&utm_medium=HAC&utm_content=27_02_2026_1_localuniversal_417372_US_desktop_selected___2&tp=1260.01&tt=165.01&sup=36&flow=%2B4WN5O7WD7WSgzbceYIoHHX0MI7VpgxqzhbmS%2BUBYlr3dUCPq366Mn0XfkpUkrMGy6LtvIVnpJcu4oBD0QX3pQ179e1tOfEWy%2FY2hFcpGs2YITpjv2TJ8AWVYwdU72H6CHcpzR%2BsP7shBgVtu7N%2BkniytT2WXwtJfej30gGk9LdTWyBml2lBBvgxR%2BNbXllBO%2B8etQNuhz5oCCOikyFkG3EIj7FXCjYGVo3xyy5GM%2BcLvNYiW2U1ypi7jaG4%2FDky&room=M72TrTcF-z0",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Brek",
        "logo": "https://www.gstatic.com/travel-hotels/branding/5560284514445840289.png",
        "link": "https://www.brek.com/search?lat=40.713038&lng=-74.008777&checkin=2026-02-27&checkout=2026-02-28&pinned=6473b44aa1d24283bbe42fcf&utm_source=gha&ep=7f51dcbc8ed03f8df50a8a49eb0402650a92a1a8ba5dbe12a0f87c1c4f5501fd4419ca8e2e4156d66771f793703a654de6447d9afa684dd9aaf23720365ab52b&user_currency=USD&user_country=US&user_language=en&user_displayed_total=1260.01&user_displayed_tax=165.01",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "My Luxury Hotel",
        "logo": "https://www.gstatic.com/travel-hotels/branding/11153979922261788882.png",
        "link": "https://www.myluxuryhotel.com/en-us/hotel/1137278/?ppc=true&isHotel=true&checkin=2026-02-27&checkout=2026-02-28&nights=1&rooms=%5B%7B%22adults%22:2,%22children%22:%5B%5D,%22kidsAge%22:%5B%5D%7D%5D&utm_source=GoogleHC&utm_medium=paid&utm_campaign=&utm_content=localuniversal&utm_term=1137278&pv=1772145095008&sourceToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJib29raW5nX2NvbSIsImV4cCI6MTc3MjIzMTQ5NSwiaWF0IjoxNzcyMTQ1MDk1fQ.eaf9u-R2X_MoqA1wS2497dtIF5aENREAaAwjbyctIe0",
        "price": {
          "value": 1091,
          "currency": "USD"
        },
        "cost": {
          "value": 1091,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1255,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1255,
          "currency": "USD"
        }
      },
      {
        "title": "dealbase.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/1776272071000195501.png",
        "link": "https://deals.dealbase.com/?sig=d24b78db5ff27b2a7633c125e8c1eb65fcdd29bfbe8d2468da3702f8e475011131373338383435313339&turl=https%3A%2F%2Fwww.dealbase.com%2FHotel%2FSearch%3FcheckIn%3D2026-02-27%26checkOut%3D2026-02-28%26currency%3DUSD%26forceCurrencyChange%3D1%26lang%3Den%26forceLanguageChange%3D1%26rooms%3D2%3A%26utm_source%3Dgha%26utm_medium%3Dcpc%26hotelId%3D3021724%26userCountry%3DUS%26profile%3Dr2d2m73kn8%26preferredRate%3D1260.01%26label%3Dsrc%253Dgha%2526cltype%253Dhotel%2526datype%253Dselected%2526gsite%253Dlocaluniversal%2526vf%253D0%2526ucountry%253DUS%2526udevice%253Ddesktop%2526hotel%253D3021724%2526day%253D27%2526month%253D02%2526year%253D2026%2526los%253D1%2526price%253D1260.01%2526currency%253DUSD%2526cid%253D%2526listid%253D%2526rateid%253DUS_D%2526closerateid%253D%2526promo%253D0%2526isPrivateRate%253D0%2526isAudienceUser%253D0%2526isPaidClick%253D0%2526%26cp%3DyUWhQl3bpMkCgtkZC13ZklnMDRMZximlIPNBiACOLm-9_EKQhgIhtD7-c7_5MGzARC81wYg9YABKgNVU0Q",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Travelocity.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_185.png",
        "link": "https://www.travelocity.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&adults=2&children=&MDPCID=travelocity-US.META.HPA.ORGANIC.HOTEL&MDPDTL=HTL.15438428.20260227.20260228.DDF.1.CID..AUDID..localuniversal&exp_curr=USD&exp_dp=1260.01&exp_tx=165.01&mctc=10&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Clicktrip.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/3461ae67-c427-4ecf-a48f-524b530be084.png",
        "link": "https://clicktrip.com/hotels/details/eKzWHKZDZDDlDDnIV9pF8qNnAbhMcxfrOmM00LuP-WamvbZ1-jtu49IoKCbxw3Y8vVFyXMqWN5K9IYDBKxI2Jw82Ggv8qorO0tVTqMNJXoPqay9LOI44T3WIx6C5hvreAqaPxrm-U0O_6uD9w-WmOQ2?locale=en&currency=USD&pos=US&date_type=selected&taf=4VuIiZxdMhc_k7eO7eQG044Ux2a0jvNQY-a16ZfgBOwo9Q-yTXiyQYIDPE2yG5xO0&verification=false&clk_src=",
        "price": {
          "value": 1093,
          "currency": "USD"
        },
        "cost": {
          "value": 1093,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1258,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1258,
          "currency": "USD"
        }
      },
      {
        "title": "Bookhotel.direct",
        "logo": "https://www.gstatic.com/travel-hotels/branding/15717022029370921658.png",
        "link": "https://always.bookhotel.direct/119578/?checkin=2026-02-27&checkout=2026-02-28&nb_adult=2&nb_child=0&campaign=localuniversal&tracker_id=&device=desktop&currency_code=USD",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Hotwire.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_112.png",
        "link": "http://www.hotwire.com/hotel/details/direct-retail-details?startDate=02/27/2026&endDate=02/28/2026&selectedExpediaHotelId=15438428&numAdults=2&numChildren=0&sid=S537&bid=B381549&rpid=RPE15438428&mctc=10",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Halalbooking",
        "logo": "https://www.gstatic.com/travel-hotels/branding/12381662496648659742.png",
        "link": "https://halalbooking.com/en-us/p/83701?checkin=2026-02-27&checkout=2026-02-28&groups%5B%5D=2&currency=USD&US&localuniversal&&adType=0",
        "price": {
          "value": 1260,
          "currency": "USD"
        },
        "cost": {
          "value": 1260,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Orbitz.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_100640403.png",
        "link": "https://www.orbitz.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&adults=2&children=&MDPCID=ORBITZ-US.META.HPA.ORGANIC-desktop.HOTEL&MDPDTL=htl.15438428.20260227.20260228.DDF.1.CID..AUDID..localuniversal&exp_curr=USD&exp_dp=1260.01&exp_tx=165.01&mpr=0.00&mctc=10&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Hotelscombined.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b73f8d82-aa66-4ac5-861d-52bce84c9ae5.png",
        "link": "https://www.hotelscombined.com/semi/ha/hotel_ads/2600131/en.html?utm_source=google&utm_medium=cpc&utm_term=2600131&adType=0&utm_content=localuniversal&utm_campaign=HotelAds&ci=2026-02-27&co=2026-02-28&gs=localuniversal&l=1&pc=USD&rid=&pdtax=165.01&pdtotal=1260.01&rpid=&uc=US&ucuc=USD&d=desktop&lc=en&v=false&rrid=kayak-us&k_pc=~UFJJQ0VMSU5FQ09SRQ&k_rt=&k_sid=xfAER-M11F&k_kct=1772134021&k_gct=1772138413&g=2&r=1&ac=2&k_cc=us&dt=selected&cmpid=&cmptrack=",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Bluepillow.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/c770e909-af04-45dd-8ad7-335bc5055826.png",
        "link": "https://www.bluepillow.com/search/594397817c00cb0e643c3237?begin=2026-02-27&end=2026-02-28&block_id=-b,8Uf4rkAjzDRsZGMlbZ2L3P6MncHRCisqAlmPM2fDVh-MWFeydaDGybaxsDOk5RRq,-bkng-Hotel&adults=2&childs=0&infants=0&childrens=0&country=US&currency=USD&language=en&source=localuniversal&utm_campaign=hotel&prid=",
        "price": {
          "value": 1260,
          "currency": "USD"
        },
        "cost": {
          "value": 1260,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "müv AI",
        "logo": "https://www.gstatic.com/travel-hotels/branding/2710211444546704077.png",
        "link": "https://muvtravel.com/xp-hotel?hotelID=116119126&checkinDay=27&checkinMonth=02&checkinYear=2026&nights=1&num-guests=2&checkoutDay=28&checkoutMonth=02&checkoutYear=2026&PROMO-CODE=98010",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Agoda",
        "logo": "https://www.gstatic.com/travel-hotels/branding/b13642de-d476-41bd-8254-3edc2e567aa6.png",
        "link": "https://www.agoda.com/partners/partnersearch.aspx?site_id=1917614&CkInDay=27&CkInMonth=02&CkInYear=2026&CkOutDay=28&campaignid=&CkOutMonth=02&CkOutYear=2026&SearchDateType=selected&NumberOfAdults=2&LT=1&NumberOfChildren=0&childages=&NumberOfRooms=1&gsite=localuniversal&los=1&PartnerCurrency=USD&hid=206039&RoomID=11135628&masterRoomId=8697863&PriceTax=165.01&PriceTotal=1260.01&RatePlan=11c82d85-6e23-a66f-2295-8189e6e0d078&UserCountry=US&Currency=USD&UserDevice=desktop&Verif=false&rr=row_desktop&audience_list=&mcid=3038&booking_source=cpc&adType=0&mpt=RW00d0FIT1Q4ZnUzUGxyZWszcEUwZGNrOGsvL0hjN1BDK3hPT0owUXpDdndMdHM4dzZqOSt4Mis5emNGcisvOHo2SHl5QW5zQ0xkVQ&original_rr=",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Closest Hotel",
        "logo": "https://www.gstatic.com/travel-hotels/branding/15292798194442829381.png",
        "link": "https://closesthotel.com/googleRedirMainSearch.php?checkInYear=2026&checkInMonth=02&checkInDay=27&checkOutYear=2026&checkOutMonth=02&checkOutDay=28&numberOfNights=1&numberOfAdults=2&numberOfChildren=0&numberOfGuests=2&hotelID=15438428&roomID=201555590&currency=USD&deviceType=desktop",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "AsiaYo",
        "logo": "https://www.gstatic.com/travel-hotels/branding/42906b93-548c-4f41-b994-b55cb3ff88e8.png",
        "link": "https://asiayo.com/en-US/v/80171/?check_in_date=2026-02-27&check_out_date=2026-02-28&adult=2&currency=TWD&aff_id=269&utm_source=google_hotelads&utm_medium=cpc&utm_campaign=&click_source=freelinks",
        "price": {
          "value": 1096,
          "currency": "USD"
        },
        "cost": {
          "value": 1096,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1261,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1261,
          "currency": "USD"
        }
      },
      {
        "title": "BusinessHotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7e9b18f5-dcd9-46e2-8bed-33a004b33995.png",
        "link": "https://www.businesshotels.com/reservation.php?hotel-id=701383248&checkin-date=2026-02-27&checkout-date=2026-02-28&language=en&USER-CURRENCY=USD&USER-COUNTRY=US&NUM-ADULTS=2&NUM-CHILDREN=0&prid=",
        "price": {
          "value": 1099,
          "currency": "USD"
        },
        "cost": {
          "value": 1099,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "CheapTickets.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/736aa480-c3ae-4b4d-ac2a-1c658f70d17a_%5BUngrouped%5D.png",
        "link": "https://www.cheaptickets.com/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&MDPCID=CHEAPTICKETS-US.META.HPA.ORGANIC-desktop.HOTEL&langid=1033&adults=2&children=&MDPDTL=htl.15438428.20260227.20260228.DDF.1.CID..AUDID..localuniversal&exp_curr=USD&exp_dp=1260.01&exp_tx=165.01&mctc=10&rateplanid=208165426&rateplanid=208165426&mpm=24&mpn=201555590&mpo=EC&mpp=1",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "ZenHotels.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/4183134106872331441.png",
        "link": "https://www.zenhotels.com/go/rooms/8022177/?dates=27.02.2026-28.02.2026&cur=USD&lang=en&utm_source=google_hotelads&utm_medium=cpc-metasearch&partner_slug=google&guests=2&from=four_seasons_new_york_downtown.1260.USD.sr-019c9be3-1284-70eb-84e0-ed0617379557&utm_campaign=en-US&price=one&scroll=prices&partner_data=2Vk7OQ5B-Ei-a0Sd2W9UqkGcmNL7gxYoYqOF-VyfRlt7SiWA6WgSgo2l02c-potPklIapUCMvDPqPKn04VtVXU2pz-Kq0Is3J7XukRTz7QLYS1iT-EV2B5JW5SX2DCD3h7uYOw7h_OVPZnnGubJP74tO3AsP-RZJpv80eX6KeNWALHMf&utm_content=GoogleCPC&utm_term=gacid_.bw_1.los_1.dow_Friday.dtype_selected.hid_8022177.rid_109.aud_.d_desktop.ad_0.ctype_hotel.promo_0.apireqtype_deals=disabled&showed_price=1260.01&showed_taxes=0.00&member_deals=true",
        "price": {
          "value": 1260,
          "currency": "USD"
        },
        "cost": {
          "value": 1260,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "eDreams",
        "logo": "https://www.gstatic.com/travel-hotels/branding/05208793-cd83-4e8b-b76c-7ff346e093e3.png",
        "link": "https://accommodation.edreams.net/Hotel-Search?selected=15438428&startDate=2026-02-27&endDate=2026-02-28&adults=2&children=&mpf=1260.01&cur=USD&mpj=165.01&wapb3=|c.506950|l.en_US|t.meta|s.ghs&MDPCID=eDreams-US.DPS.Edreams.MetaSearch-GHA.HOTEL&mpl=USD&numberOfRooms=1&locale=en_US&rffrid=h4p.hcom.US.ghaodigeo.000.000.kwrd=&pos=EDREAMS_US&rateplanid=208165427&mctc=10&utm_medium=metasearch&utm_campaign=495029696&utm_term=hotel&utm_source=FREEBOOKING",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Amimir.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/11504568723871247728.png",
        "link": "https://www.amimir.com/en/book/?start=27%2F02%2F2026&end=28%2F02%2F2026&hotelId=84085&highlightHotel=true&hab1=2&ehab1=&metasearch&utm_content=84085&checkV=false&totalPrice=1258.07&userCountry=US&utm_source=googleMetasearch&utm_medium=organic&currency=USD",
        "price": {
          "value": 1093,
          "currency": "USD"
        },
        "cost": {
          "value": 1093,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1258,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1258,
          "currency": "USD"
        }
      },
      {
        "title": "momondo.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/icon_970163321.png",
        "link": "https://www.momondo.com/semi/ha/hotel_ads/2600131/en.html?utm_source=google&utm_medium=cpc&utm_term=2600131&adType=0&utm_content=localuniversal&utm_campaign=HotelAds&ci=2026-02-27&co=2026-02-28&gs=localuniversal&l=1&pc=USD&rid=&pdtax=165.01&pdtotal=1260.01&rpid=&uc=US&ucuc=USD&d=desktop&lc=en&v=false&rrid=kayak-us&k_pc=~UFJJQ0VMSU5FQ09SRQ&k_rt=&k_sid=xfCEA4qdZ8&k_kct=1772134021&k_gct=1772138449&g=2&r=1&ac=2&k_cc=us&dt=selected&cmpid=&cmptrack=",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Despegar",
        "logo": "https://www.gstatic.com/travel-hotels/branding/dab7f37a-3d20-4722-9e39-5eaf50330388.png",
        "link": "https://www.trackeame.com/sem-tracker-web/track?kw=2099025_201555590_localuniversal_US_en_USD_1.00000000_2026_02_27_1_1260.01_false&clt_c=HPA-US&clt_n=gh&d=c&cm=HPA_US&pr=H&campaignid=&targetid=aud-&hpa_dd=selected&hpa_ppa=0&clk_src=&u=https%3A%2F%2Fwww.us.despegar.com%2Faccommodations%2Fresults%2FCIT_5227%2F2026-02-27%2F2026-02-28%2F2%3Fchosen_accommodation%3D2099025&google_site=localuniversal&displayed_price=1260.01&country=US&lang=en&crawler=false&partner=4&hotprv=cHc6RVhQ&utm_source=HPA&utm_medium=referral&utm_term=2099025_201555590_localuniversal_US_en_USD_1.00000000_2026_02_27_1_1260.01_165.01_false&utm_content=US&utm_campaign=&cc=US&key=UT81AK9JAFEGJ4D69OVO6J673E&selected_room_pack=321060990",
        "price": {
          "value": 1095,
          "currency": "USD"
        },
        "cost": {
          "value": 1095,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1260,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1260,
          "currency": "USD"
        }
      },
      {
        "title": "Traveloka.com",
        "logo": "https://www.gstatic.com/travel-hotels/branding/cc46874d-c374-4a99-83c7-b6f79d0b19d3.png",
        "link": "https://www.traveloka.com/en-en/hotel/search?spec=27-02-2026.28-02-2026.1.1.HOTEL_GEO.4005128638.New%20York%20State.2&hotelId=1000000601517&contexts=%7B%22accessCode%22:%2290975GHAD1305desktop%22%2C%22metasearchRequestId%22%3A%22cb5f2e56-846c-4e98-ada0-3a1b1aa861ff%22%2C%22plc%22%3A%22Uz%2F51aey53IgPjFiTs8zCqt%2FEzVSVv3B37GI8CihLxgZQ4P2RnJ4vXuEz6mydh0QWSafPGCMr%2FG%2FGO8e%2BT5i%2Fg%3D%3D%22%7D&metasearchId=GoogleHotelAdsUser&metasearchRateId=desktop&metasearchRatekey=sgyUU2M0LrnnpXh1LPwoI&priceDisplay=TOTAL&metasearchRefid=12345678910abcdefghijk@-&adType=0&PPA=0&hotelCampaign=1&cur=USD",
        "price": {
          "value": 1264,
          "currency": "USD"
        },
        "cost": {
          "value": 1264,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1264,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1264,
          "currency": "USD"
        }
      },
      {
        "title": "Traveluro",
        "logo": "https://www.gstatic.com/travel-hotels/branding/aa5293d0-1acc-4289-ab28-fe6381cfbe5a.png",
        "link": "https://www.traveluro.com/hotels/united-states_ny_new-york/555839_four-seasons-hotel-new-york-downtown?checkIn=2026-02-27&checkOut=2026-02-28&placeId=H555839&campaignName=Google_US&currencyCode=USD&dealKey=CAIQqwEiDAj3k4PNBhD48pvoAipMDQBguEQVAKCURCVmJj1DLQAAYEAwATiBA0UAYLhESgwI8JODzQYQpL-FiQJiClN0YW5kYXJkIEtoAoIBAI0BmlG4RKABp7sPqAHIBjCrATi_9iFAg_EPSAFSCJRlQNrVaJT-WMgG&countryCode=US&languageCode=en&rule=Google_US&site=localuniversal&origin=31&ads=&priceDisplayedTotal=1475.00&priceDisplayedTax=192.65&device=desktop&adults=2&children=0",
        "price": {
          "value": 1282,
          "currency": "USD"
        },
        "cost": {
          "value": 1282,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 1475,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 1475,
          "currency": "USD"
        }
      },
      {
        "title": "luxuryescapes",
        "logo": "https://www.gstatic.com/travel-hotels/branding/7619586669298897040.png",
        "link": "https://luxuryescapes.com/us/metasearch/dce147fd-8580-435a-a8ad-dffadf3194e1?utm_bp=3&source=metasearch&checkIn=2026-02-27&checkOut=2026-02-28&propertyName=Four%20Seasons%20Hotel%20New%20York%20Downtown&propertyId=bedbank%3Adce147fd-8580-435a-a8ad-dffadf3194e1&roomTypeId=387f93e3-4179-4bab-bbc3-53c89c496ac3&roomRateId=387f93e3-4179-4bab-bbc3-53c89c496ac3_1_pkg&adults=2&children=none&utm_source=google&utm_medium=organic&utm_content=gha-lpp&currency=USD&priceTotal=2937.36&ruleId=B2C&userCountry=US",
        "price": {
          "value": 2555,
          "currency": "USD"
        },
        "cost": {
          "value": 2555,
          "currency": "USD"
        },
        "price_with_tax": {
          "value": 2937,
          "currency": "USD"
        },
        "cost_with_tax": {
          "value": 2937,
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
