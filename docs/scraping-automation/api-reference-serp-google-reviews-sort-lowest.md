# Sort (lowest)

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/sort-lowest](https://docs.brightdata.com/api-reference/serp/google-reviews/sort-lowest)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Sort (Lowest) parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow
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
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingLow',
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
        "review_id": "ChdDSUhNMG9nS0VQZm1zUENtb0xMc3NRRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QcielscjLvsxs3qLg_jAt2zcU0gRqU3PrSHHU2lAuv568Mt5lG3Clk44mfbfmM4sEJa1w=s120-c-br100",
          "display_name": "Caity",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "1/10",
        "created": "5 months ago",
        "comment": "Positive: The bathroom was dirty when we arrived. The sink drain was broken and pulled out laying on the sink. The bathtub backed up and filled with water each time we showered. We repeatedly asked for this to be fixed and they did not. Negative: The lightbulb was out in the haPlay with the only mirror we called them and talked to them in person a total of 4 times. They never replaced it. Staff were rude and unhelpful."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VQcTd2ZXJSM3NmdmxBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QeAy-xp9ZrUglhBV1LZEaPGpmlbQnwJJRBzU4YC55Z65V5JcBYvtxvOT-WqxVgRv6wAOA=s120-c-br100",
          "display_name": "Alessandro",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "1/10",
        "created": "6 months ago",
        "comment": "Positive: Location Negative: I was scamed with the pricing ( the so called city tax which was never mentioned. Also one of the reasons why I booked it said he offered shuttle to the airports. The hotel lounge  literally scamed.me out of money .the bar tender was a scammer"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnTUR3ZzY2NmtBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfitSTClYz8LWcvgW5L4tnq-tcK0wDRS5KpgF4zUnjMZguvii9otIV06c_gvv3urQy3ZQ=s120-c-br100",
          "display_name": "Thea",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "1/10",
        "created": "11 months ago",
        "comment": "Positive: \"\" Negative: No microwave, rude staff and they were unwilling to help and did not seem to care. Also, HIlton customer service wouldn't help me when i told them i had issues with the staff and they told me to contact the hotel directly. What are you here for then?."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VKR2Y0b0hjb3V6WDFRRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QchhyJTr8jjr7kbZNRY9gkp3EPmuhZxKqlMWJ5peJxoA1in-DXrIhwxitaLgo-qo75Ujg=s120-c-br100",
          "display_name": "Dan",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "1/10",
        "created": "10 months ago",
        "comment": "Positive: nothing really one of the worst experiences i had staying in a hotel Negative: got to the room at 10 pm nothing went right worst ever"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnSURmdEpLdzJnRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qe1FTSCg98CZ3VrSg28YAOa76nyaQfZNd66XhsW7MF99ozoooauY0gRdjL2-kPkUfooOQ=s120-c-br100",
          "display_name": "Mary",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "1/10",
        "created": "a year ago",
        "comment": "Positive: \"\" Negative: The metalBed frames stuck out and I sliced my leg and had to get 7 stitches from mt Sinai hospital"
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tSbFJsWmxYME5KZEVsQ1lrZHZiRXd4Y21SdVptYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWR9P0hsugLdp9Oat4sxTahBKrA0gZ1C7uqw4MNisrIvLu3hy-V=s120-c-rp-mo-ba2-br100",
          "display_name": "Jennifer Wakefield",
          "link": "https://www.google.com/maps/contrib/114840974672973065687?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tSbFJsWmxYME5KZEVsQ1lrZHZiRXd4Y21SdVptYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkRlRlZlX0NJdElCYkdvbEwxcmRuZmc%7C0dI--RQ5bgo%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "Edited 2 months ago",
        "date": "2025-12-24",
        "comment": "The location is fabulous. Everything else is terrible. This hotel has severely gone downhill over the years. It is not a four star maybe a two star at best. The rooms were adequate. The bathroom was disgusting and had discolored water forcing us to brush our teeth with bottled water. The wait for the elevators was ridiculous and we ended up using the service elevators and that area was absolutely disgusting and did not feel safe.",
        "review_reply": "Dear Jennifer,\nThough we are glad you enjoyed our central location, we regret that other aspects of your visit fell below your expectations and the high standards we strive for. What you have described regarding our accommodations, amenities, and the comfort and convenience we aim to consistently provide our guests is not typical for us. Rest assured, your insights will be promptly addressed for review and correction. We hope to welcome you back in the future to change your lasting impressions. \n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "a month ago",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptLCFihq0e2Rr2xf5cBpxANMMhfDf1JNipzZV2xKzKvd-Td8Qfo806H4UwgM0apfWvMJArehhlrJbvtpuZyVzbpeBnkVhyxekIHl5lw7aRAKEy5Qw6DMp1-Ra6BPNVObzRdWeu7N9tJKFQ",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptpkESmccJfCgtjbmg66XKUKhbCM_Z8uVSsZ9a1wSHiSeaTKmsqURZ5b_UTuXuVxraFCv-MEHjqkhz10E3BsL2XiV3iQlmNEzik1QUg2tHyJVUJYF3XePBNCursMNftK2ATijYCAE3XIGk",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psDnhsuOCuRiEKmw2YqOiDUbqGeziogZ0aJj0PL8tIz4-PbpFotEiJa1hZ4reobYw54gMKgbmU-ahevtF4KefFBTpBtOs_6jB8OQBjZiQGtEXE69koipvhvJPHSG0ADdpnkNyYkf4FQxc0"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Vacation",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Family",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 1,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 1,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT213M01Ib3daVTEwZFdrNFREZG1XbVEyV0ZCQkxYYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJ2aeQdtiJkWeCyxq8wk3mwShLLZdvL3mNfhS0phcXWil15iw=s120-c-rp-mo-ba2-br100",
          "display_name": "Sarah Vertrees",
          "link": "https://www.google.com/maps/contrib/114286611919008365782?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT213M01Ib3daVTEwZFdrNFREZG1XbVEyV0ZCQkxYYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmw3MHowZU10dWk4TDdmWmQ2WFBBLXc%7C0dHofB_sbAT%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "2 months ago",
        "comment": "The only positive about this hotel is the location.\n\nWhen we arrived we were told that they were out of parking so we had to park ourselves in the parking garage across the street.\n\nWe paid over $600 a night for a room that was fair at best. It was very dated, screws missing out of the door handle, semi-clean, the bath tub wouldn’t drain-when I went to adjust the stopper it came out and the bath tub itself was pealing, the hotel staff were all less than pleasant!\n\nAs many others have mentioned the elevator stops a nightmare!",
        "review_reply": "emailed guest",
        "review_reply_created": "2 months ago",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Vacation",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Family",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 1,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 1,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          },
          {
            "id": "HOTELS_VIBE",
            "name": "Hotel highlights",
            "value": "Kid-friendly",
            "description": "How would you describe the hotel?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT25oNFUwVnVkRTB3Y1ZGM2JreHFSVEZXU0hOdFNXYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUfusV7ZUjUCOLqMSt3fppZPTMYkLGZT4DP2M1Af_cL-58ns8WggA=s120-c-rp-mo-br100",
          "display_name": "Alison McGuckin",
          "link": "https://www.google.com/maps/contrib/117751954034681560040?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25oNFUwVnVkRTB3Y1ZGM2JreHFSVEZXU0hOdFNXYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOnh4U0VudE0wcVF3bkxqRTFWSHNtSWc%7C0dC2Wfaja3C%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "2 months ago",
        "comment": "Everything about this hotel would be great if it weren’t for the horrid elevator situation. It took 30 minutes for us to get 4 people downstairs from floor 38. We had to separate as a group to put one person into an elevator every time it showed up and actually had room. While in the jam packed elevator you would stop at every single floor, only for most of them to not even have anyone getting off there or waiting. We used to love this hotel, now we’ll be looking for a different midtown stay.",
        "review_reply": "Good morning, Alison, \nThank you for providing details of your experience with us. I would love to connect with you and make things right. We are currently unable to locate a reservation in your name. Can you kindly send your reservation details to Hannah.Zipkin@hilton.com? I look forward to hearing from you.",
        "review_reply_created": "2 months ago",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Vacation",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Family",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 4,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 4,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 4,
            "description": "Location"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT201VFZHMXJXRmhRY1d4aGVFUXRTVTlxVGxwS2FXYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKFFBoM5okLNgq5lmdU_db_kYw5sStw7_b6myemC4LpgdpvYA=s120-c-rp-mo-br100",
          "display_name": "Elizabeth Hubbard",
          "link": "https://www.google.com/maps/contrib/107665312411597262592?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201VFZHMXJXRmhRY1d4aGVFUXRTVTlxVGxwS2FXYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOm5TVG1rWFhQcWxheEQtSU9qTlpKaWc%7C0dEm9J76k0S%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "2 months ago",
        "comment": "Unfortunately, this stay was a major disappointment. We were asked to pay $100 for early check-in despite being Hilton members. The hotel was extremely overcrowded, the lobby was chaotic, and the elevator wait times were outrageous—often 10–20 minutes—forcing us to take the stairs from the 7th floor.\n\nLate checkout was denied unless we paid extra, bag storage took over 45 minutes and cost $5 per bag, and there weren’t even complimentary bottles of water in the room. Overall, the experience felt focused on squeezing money out of guests rather than providing hospitality. Very disappointing, and we will never stay at this hotel again.",
        "review_reply": "Dear Elizabeth,\nThank you for being a Hilton Honors member and for taking the time to share such a detailed account of your stay. We’re genuinely sorry to hear of the issues you encountered. Long elevator wait times and missing in-room amenities are never the impression we want any of our guests to have.  Your feedback will be reviewed with the team as we continue to focus on improving comfort, clarity, and support for all our guests. We appreciate you outlining your experience so thoughtfully and hope you will consider giving us another chance to improve your lasting impression.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "2 months ago",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Vacation",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Family",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 1,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 1,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 3,
            "description": "Location"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2twRWJUSTVkVTQxTTNnNGVtTnhlVlZ3V1V0RmRsRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW0NZGbAlQzaaxlwFZWEu7-nWpfPfpd-WTTzOnIPQ4L301tf5gX=s120-c-rp-mo-ba4-br100",
          "display_name": "Langee Twentytwo",
          "link": "https://www.google.com/maps/contrib/108549160741845792792?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twRWJUSTVkVTQxTTNnNGVtTnhlVlZ3V1V0RmRsRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkpEbTI5dU41M3g4emNxeVVwWUtFdlE%7C0dJIrIshcA6%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "a month ago",
        "comment": "Great location. Terribly ran hotel. The first night they took our towels and didn’t replace them. The executive line either had no food or a line out the door. Service was dismissive in all areas. Starting with the front desk. They have convinced me to cancel my Hilton card and open a Marriott car, even as a Diamond member. Awful experience.",
        "review_reply": "Dear Langee,\nWe regret that our team's service did not meet expectations. What you've described is not the typical experience of our guests, and we will address these concerns promptly. Thank you for bringing these matters to our attention, and we hope you will consider giving us another chance to change your perceptions in the future.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "a month ago",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Vacation",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Couple",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 1,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 1,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          }
        ]
      }
    ]
  }
  ```
</ResponseExample>
