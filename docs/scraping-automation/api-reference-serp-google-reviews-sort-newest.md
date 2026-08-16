# Sort (newest)

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/sort-newest](https://docs.brightdata.com/api-reference/serp/google-reviews/sort-newest)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Sort (Newest) parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst
```

## Parameters

<ParamField type="string">
  Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.
</ParamField>

<ParamField type="string">
  The way reviews are sorted.

  | value               | description                     |
  | ------------------- | ------------------------------- |
  | `sort=qualityScore` | most relevant first (`default`) |
  | `sort=newestFirst`  | newest first                    |
  | `sort=ratingHigh`   | highest rating first            |
  | `sort=ratingLow`    | lowest rating first             |

  ```txt wrap theme={null}
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=newestFirst',
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
    "reviews": [
      {
        "review_id": "ChZDSUhNMG9nS0VMbUVrYktvcXRqRlBREAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QeYuXGoFc9HnT35lAJ46cKDIsHY7nNIKUKz_f8yINNlqyrU48jCx-4ctPzihRKgde030w=s120-c-br100",
          "display_name": "Curiosity572892",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046632270?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046632270?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "3/5",
        "created": "a month ago",
        "comment": "Hotel is getting very dated. Overall staff was mediocre however I need to give a shout out to Jesus at the front desk. He was super helpful in finding a room that was ready. He really cared about getting my family and I a room after we were waiting a long time. He had a joyful attitude and was even great interacting with my kids while he worked on our problem. He was amazing! Thanks Jesus!"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VLLUVvZFgtdXFEeXVnRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QchZeuqqdsc2mxTzAL46o1Zp-eQpx0fXItgIlFx_-eADsDQzpyjY9GuirM6XH9EgCdepg=s120-c-br100",
          "display_name": "dennisdel",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046213388?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046213388?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Mei at the front desk was the friendliest, most helpful person I’ve ever met who works at a Hilton Hotel!"
      },
      {
        "review_id": "ChZDSUhNMG9nS0VPYS16UFdEX0liYmZ3EAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdHDxxyBDO6igPA51sqxYAI1TTeuGvapT1sWSCJfPSgzOZltNlMhWmUDpj2A3v7zAw89g=s120-c-br100",
          "display_name": "GlobalCitizen426",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046073220?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1046073220?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "2/5",
        "created": "a month ago",
        "comment": "We've been visiting the city every year for 25 years for a conference. |In the past 5 years since we've all come back to our lives post Covid pandemic, it's just got worse at this property.||We travel extensively and while other properties around the country seem to be making improvements this property just gets worse.||Hey, Hilton - it's time for a renovation and you should get after it!  |You have the finances, so you should not delay this another year.||The housekeeping and customer service staff were 5 star!||This year we were not able to control our room thermostat - to run the AC, b/c wen we arrived it was sweltering hot in parts of the hotel b/c the outside temps were not that cold. We heard others complaining about the same.|The room thermostat stayed at 72-73 the entire time - with the windows cracked, which I've appreciated this feature at this hotel.|72 or 73 may work for some ppl in their homes,  but not in a high rise hotel.||The elevator system was new and completely inefficient - we were riding the service elevator most of the time.||If you're reading this Hilton, room 2737 needs a new bathroom door - there was obviously a water issue in the bathroom and the wood composite was buckling and coming through on the bottom of the door. The wallpaper was peeling and the tub and sink were both very old and worn, there black mold on the shower and sink."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VKNndnb3FIa3N5d3J3RRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdCjMUwIiBikRhCLHgN_0vyGAo1GvT8DEukiKQb1ujC_eFsFjYrQ0OvLoSxPtqmCdgvFA=s120-c-br100",
          "display_name": "KimmyStephenson",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045867123?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045867123?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "3/5",
        "created": "a month ago",
        "comment": "Hgv owners reception not helpful and rooms not ready for 2hours after check in time  and a 35 minute wait for elevator at busy times"
      },
      {
        "review_id": "ChZDSUhNMG9nS0VKUHY3SWZTeWUtQll3EAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qczn4VDfUM6-AtEt-6oaNazFa-i9Fy6kqPVfGIlPil6vJulEYyK8t930jZwOW4hD80mzw=s120-c-br100",
          "display_name": "Drinehart",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045764208?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045764208?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Check-in was easy and staff were friendly. They were very accommodating, clean rooms and the location was perfect. We had a great trip."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VPTEVnZi1EbnI2VW5RRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qc_hSEOVyYt90T8jEI1lbdGPaVqSrwdtGLOma43xF2tT-AGCQEDWJCQ3qq81gsm_HjiWg=s120-c-br100",
          "display_name": "Y2952BWaprilg",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045763042?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045763042?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Hanna and Jesús were great- appreciate their humanity and gracious attitudes when I needed help pushing past a bureaucratic bottleneck"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VKeTJ0di1zNGFpLXF3RRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qczn4VDfUM6-AtEt-6oaNazFa-i9Fy6kqPVfGIlPil6vJulEYyK8t930jZwOW4hD80mzw=s120-c-br100",
          "display_name": "DLSharpsteen",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "We traveled to NYC to watch The Christmas Spectacular at the Radio City Music Hall and stayed at the Hilton for the night. We loved the location as it was within of 5 minute walking distance of literally everything there is to see at Christmas time. Our room was quite spacious and clean with two full beds and a nice view. Staff was friendly and I loved that you can get there early and check in your bags so you can go explore before check in time as we arrived to the city around noon. Also loved that there was parking on site. We used the valet so you pulled in, got everything out you would need, they give you a card with a number and you walk into the doors and right to the luggage storage area. The elevator system is insane and that's my only complaint. I've never stayed in a hotel where you have to put in your room number and can only ride a certain elevator to your room. Seemed our elevators were always the ones with tons of people waiting to get on or off. The only outside noise you could hear were horns, but I was ok with that and thankful I never heard my neighbors or anyone in the halls. I got an insane discount on my room through my employer otherwise I would never be able to stay here during Christmastime. But I understand why the rate is so high as it is a hotel that sits in the middle of all the amazing attractions NYC has to offer. Would definitely stay here again!"
      },
      {
        "review_id": "ChZDSUhNMG9nS0VKdXluNURVNjR1UWJnEAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdVsxDWqDDLG62Q3M3dmLlHORJs5jz0NWRJO3cP21KtRNPfosO7RpofjnbUgpyNjOTDew=s120-c-br100",
          "display_name": "LisaO964",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "4/5",
        "created": "a month ago",
        "comment": "Spent 6 nights here with my family- arrives 9.45pm due to flight delay but on arrival rooms were not ready, the gentleman at check in was helpful and found us a room however it was interconnecting with another family which meant we were disturbed by their noise quite a lot. However, this hotel is really lovely and other than this and the elevators being slow I can’t fault it. They have installed a new elevator system and should have thought it through as during busy times they are packed and it can take quite some time to get one. |Rooms are lovely , cleaned every day, excellent location and staff all really lovely. I would recommend staying here."
      },
      {
        "review_id": "ChZDSUhNMG9nS0VPM084Tl9JazlHa0J3EAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfzjVLsS8e-67WTk0n2dtmoLvjFzQd1pnSZl8AzVxF0EXF41tQWWb2Gu3UnsT1rmBrWdQ=s120-c-br100",
          "display_name": "paultW1290QF",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045304354?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045304354?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=EG&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Luis M was the best person ever!|He took care of us like we were family!|He made our special trip. Fantastic!|My wife and I came into the city for the holiday weekend! Luis was able to navigate and inform us with what to do.|He made the accommodations just perfect!"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VQZkNuSlc0X3ZMdDRBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfP3vr22Hqep_LgQRKpenb6hspMso2yBvcYnK0_hQDygjr_RJAumA99e80czV94otF4IDs=s120-c-br100",
          "display_name": "\"\"",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "7/10",
        "created": "a month ago",
        "comment": "Positive: Convenient location. Negative: The elevator wait times/ lines could be very long. The room was cold and we couldn’t control the temperature which is particularly difficult to come back to after a day outside in the winter."
      }
    ]
  }
  ```
</ResponseExample>
