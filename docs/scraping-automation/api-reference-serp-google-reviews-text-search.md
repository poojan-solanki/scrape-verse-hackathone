# Google Reviews text search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/text-search](https://docs.brightdata.com/api-reference/serp/google-reviews/text-search)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Google Reviews text search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80
```

## Parameters

<ParamField type="string">
  Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.

  ```txt wrap theme={null}
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80',
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
        "review_id": "ChdDSUhNMG9nS0VKeTJ0di1zNGFpLXF3RRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qczn4VDfUM6-AtEt-6oaNazFa-i9Fy6kqPVfGIlPil6vJulEYyK8t930jZwOW4hD80mzw=s120-c-br100",
          "display_name": "DLSharpsteen",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "We traveled to NYC to watch The Christmas Spectacular at the Radio City Music Hall and stayed at the Hilton for the night. We loved the location as it was within of 5 minute walking distance of literally everything there is to see at Christmas time. Our room was quite spacious and clean with two full beds and a nice view. Staff was friendly and I loved that you can get there early and check in your bags so you can go explore before check in time as we arrived to the city around noon. Also loved that there was parking on site. We used the valet so you pulled in, got everything out you would need, they give you a card with a number and you walk into the doors and right to the luggage storage area. The elevator system is insane and that's my only complaint. I've never stayed in a hotel where you have to put in your room number and can only ride a certain elevator to your room. Seemed our elevators were always the ones with tons of people waiting to get on or off. The only outside noise you could hear were horns, but I was ok with that and thankful I never heard my neighbors or anyone in the halls. I got an insane discount on my room through my employer otherwise I would never be able to stay here during Christmastime. But I understand why the rate is so high as it is a hotel that sits in the middle of all the amazing attractions NYC has to offer. Would definitely stay here again!"
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tRNFRVOXVUVE51YXpKVVdHb3laV3R5TjNScmRuYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXfHOWf_k3xFLr7N87GuvjsQHzsDSZb3FW1zjSl6LV32uKV4qI=s120-c-rp-mo-ba4-br100",
          "display_name": "Brian Ash",
          "link": "https://www.google.com/maps/contrib/109749787540014073287?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tRNFRVOXVUVE51YXpKVVdHb3laV3R5TjNScmRuYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkQ4TU9uTTNuazJUWGoyZWtyN3Rrdnc%7C0dK0Oisp5f4%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "a month ago",
        "date": "2025-12-30",
        "comment": "The staff here were friendly and helpful. Everyone was cheerful and considerate. The staff here made our experience pleasant and memorable. The rooms were nice, but the location is perfect if you want to be in thick of the hustle and bustle of the city. Conveniently located, great facilities and a room rate that won’t break the bank. I wouldn’t hesitate to book again.",
        "review_reply": "Dear Brian,\nThank you for the wonderful review. We are glad to hear our team’s friendliness and positive energy helped make your stay pleasant and memorable. It is great to know you enjoyed the room, facilities, and our convenient location, along with a rate that added value to your visit. We truly appreciate your recommendation and look forward to welcoming you back again.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "a month ago",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psEgneI8FIdEeGP0U0DKFzwPjUbeMcfWkr7I6LvoCMXzPz_f8qvhEnl6IrGg73jlvLo1xOLrtjDLM7BY9doDWY9GddvM4JckW6EY8Bi5-GN7IzokII2PtHT99mWEr3bEWjh0RBhA7KKeVk",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psP7Yx2Swd3UOEIevzruzpKAerYUdMJPXETQJt-A3SrKXcnHP4Cy0TLirJExW50cQ_kzoUUnZLHzfu-tUwtz_Kp_4yUSeqjo4Tm-BK1z9D6CmokJrkvo9QCtYAG7hjERaHOzibyBzSLaHlz",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pun-0zZPPEzWSkW_XUq8eHQSze3imSI7iMEq9_29WwJJdM82HBq3LwycenRdrTRIt70jyr3jPd4kiIABo-GdwhMJ6jd3QbOjrBuq4xfzs9OPPW_DEu52MrDQK0MnY8vgRQG8wfId5sLZtau",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvs0bS1DXsAMv1l2rUc2o5O3r07JiEVr2mXuo8_HxN-e47l0YqBxSfHQCGATeYbu059C-Gh9Om5nIuuoXGKbx-VqSFcovQuuboYcXxg9r4AOkj8y_1Atv5LieCvzZNjKt2lP_EIFUmpNIzv",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvGyxLHYBHrq2Xjc1_XkBMitY3PltgQXVrpUHliY22qm1juTnbcQM9Dppxgbb-YeCgQjzlWuEHfe22uXMf2LyAtWpiNnKrN62zNG5SeDhCZiGYwMDpp6TLNTVPWGcJgeTH7ozM12r70coMx",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptnOwAnTti7y3hrhxJ7TVOyrr9FmaGP1YvVDgo5ca-Mokl4thE-Ds1t9oaM_v6ofHs6MheZ1g02rNAsUlQqc0dRArJXKwYp8JAwhFQPOz0Cel9gu645rgw4O26EzLm1PkYHwzci7D_Wewdf",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pu4U-BFG3nJCIUa3yMRZFr2NWas-3A1PUlCsROljZC05rtJhDHjDqd50W5ucTMpu8ywsM7yFNZLywcjhgKaXWqWsIHQtWJdOhAnQlsaq30fmt-3NNu3FISJ1wB1p-TvteQ-A3kcyAVZlkHb",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pu8TqvQu_MO3rNMEH_5qVZ5fUYMHgVnS4PWsnKI2EVxPvBBiRZuwVhJLUZfKGxS6mnZMMKRfJB5KYlk2T7eZ1fNk6wqqGENrmoaYnGdqMcQm3CaV2OKSbYMAEcZRGstJI13u37JVn6_dsjI"
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
            "value": "Couple",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 3,
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
            "value": 5,
            "description": "Location"
          },
          {
            "id": "HOTELS_VIBE",
            "name": "Hotel highlights",
            "value": "Great view",
            "description": "How would you describe the hotel?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2t0eVMzWjJjbk5tUWt0TGFFcG5kVU5XWTFvMGQwRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIb_1I5stFL2E46ANU5a9D1tE37bd7z3TrcvcjeCv8jbP01sQ=s120-c-rp-mo-ba4-br100",
          "display_name": "Diana Nichols",
          "link": "https://www.google.com/maps/contrib/104268723670363283044?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t0eVMzWjJjbk5tUWt0TGFFcG5kVU5XWTFvMGQwRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOktyS3Z2cnNmQktLaEpndUNWY1o0d0E%7C0dKeRXjPbb4%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Absolutely the best stay in the world! My room was clean and quiet and had everything I needed. The room was much bigger than I expected for NYC. Shout out to housekeeping who didn’t make a peep in the hallways as they cleaned the vacant rooms. I didn’t leave until around 2pm so they were working hard. Many hotels (even the best of the best) have housekeepers who talk too loudly in the hallways and constantly slam doors. Not here! They were perfect and I didn’t even know they were there until I left. Can’t tell you how much I appreciate that. Tons of security and police presence for the upcoming celebration (New Year’s) or maybe it’s always like that here. Felt extremely safe and protected. Beautiful spacious clean sparkling lobby. Many upscale shops and stores I didn’t have time to visit. Glistening with inviting items to purchase and view. Wish I would have gone into the shops! The staff was very very friendly from the front desk to the security guard who answered all my questions last night about transportation to JFK and local things to visit near the hotel. The man mopping the floor was super friendly (this was around 1am) trying to give me directions for the subway train etc for the next day to JFK. I had the best latte from the wonderful friendly cafe near the lobby. Everything clean and welcoming and beautifully displayed. I decided to take a taxi to JFK\nand asked for a “nice” taxi driver. The gentleman supervising the taxi line immediately made way for me through the throngs of folks on the street and treated me like a celebrity as he directed me to the next available ride. He didn’t laugh at me and I did get the nicest taxi driver - Fabian!!!  I was given excellent directions to get to the airport in JFK by the transportation and show tickets desk and they explained how to take the train bus subway etc but it seemed a little more difficult than I was in the mood for. The energy out on the street was electric and I also wish I had walked around a little before I left the city. This hotel is convenient to everything! Can’t ask for anything more than the wonderful experience I had at this hotel. Thank you everyone who works there and outside and Happy New Year!!!",
        "review_reply": "Dear Diana,\nIt's an absolute pleasure to learn about the exceptional visit you had with us, and we thank you for your perfect marks. Thank you for also going out of your way to spotlight our safe, welcoming facilities and unbeatable New York location. Of course, we'll be sure our team hears they really made a difference with their outstanding service, and we look forward to seeing you again soon here at New York Hilton Midtown for another unforgettable experience.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "a month ago",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Business",
            "description": "What kind of trip was it?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Travel group",
            "value": "Solo",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 5,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_ROOMS",
            "name": "Rooms",
            "value": "My room was perfect and bigger than I expected for NYC.",
            "description": "Rooms"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_SAFETY",
            "name": "Safety",
            "value": "Lots of police officers around! Felt extremely safe.",
            "description": "Safety"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NOTEWORTHY_DETAILS",
            "name": "Noteworthy details",
            "value": "I just found everyone super friendly. Maybe because I love the people and the energy in NYC anyway.",
            "description": "Noteworthy details"
          },
          {
            "id": "HOTELS_VIBE",
            "name": "Hotel highlights",
            "value": "Luxury",
            "description": "How would you describe the hotel?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT25ReVRFUTJiV0ZNUkdVNFduaFNTMnh6VmpGSU5uYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXmcoJ3y3xhQX30wsKy5q87OD7qFUR6FDUsw_QDL8EWl8-nUSQ=s120-c-rp-mo-ba3-br100",
          "display_name": "Natiesha Wray Henry",
          "link": "https://www.google.com/maps/contrib/102270227746850983681?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25ReVRFUTJiV0ZNUkdVNFduaFNTMnh6VmpGSU5uYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOnQyTEQ2bWFMRGU4WnhSS2xzVjFINnc%7C0dKxrV3ZLWB%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "Location, Location,  Location! This hotel made adventuring in Manhattan a breeze. Central Park, Radio City, Rockefeller Center, were all so close, there was simply no excuse to not take a walk and be in all the action. We loved to food trucks and vendors near by but we also enjoyed the walkable restaurants close by as well. Staff and facilities were great. I'm so happy we stayed here.",
        "review_reply": "Dear Natiesha,\nThank you for sharing your wonderful experience with us! It's great that our prime location, close to New York's best attractions and dining options, enhanced your visit. We're also happy that our friendly service added to your experience. It was a pleasure having you as our guest, and we look forward to welcoming you back for another memorable stay.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
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
            "value": "Family",
            "description": "Who did you travel with?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 5,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_ROOMS",
            "name": "Rooms",
            "value": "Cozy and comfortable",
            "description": "Rooms"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NEARBY_ACTIVITIES",
            "name": "Nearby activities",
            "value": "Times Square is walkable from here",
            "description": "Nearby activities"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_WALKABILITY",
            "name": "Walkability",
            "value": "10 out of 10",
            "description": "Walkability"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NOTEWORTHY_DETAILS",
            "name": "Noteworthy details",
            "value": "Parking and traffic is a nightmare.",
            "description": "Noteworthy details"
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
        "review_id": "ChdDSUhNMG9nS0VQdnIyOHU1LVppVGlBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfnSFWXMd1oJu73a6IhdtgibYcjse2HKQTHeghNQd9Cyw8DYQQJZDCyh-TD68ehXuY-FA=s120-c-br100",
          "display_name": "R471LZalext",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "3/5",
        "created": "2 months ago",
        "comment": "Room was ok. For a Hilton I thought it would be better. Could do with an update with better placed plug sockets and some USB sockets. It is 2025 and people need multiple sockets to charge phones, tablets, watches etc.||Staff were underwhelming. Our flight home was cancelled and we had to find accommodation for another night. I understand they couldn’t accept us as they were fully booked. I would have appreciated some sort of effort to see if other Hilton hotels available but no, just a shrug of the shoulders pretty much and left to sort ourselves out. I understand that it is probably over there pay grade. However, a phone call or some sort of contact with other Hilton hotels would have been put our anxiety at ease. I am disappointed because i expect staff from the Hilton brand would excel at customer service, but they didn’t. They would’ve earned a decent tip from it. ||Only 2 things impressed me. The coffee machine in our room and the cleaning staff. They always did a superb job."
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2pKdk5FdHVMVW8xTjFoT2MzUjJlamQyV0hSTk4wRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKxAYr7LFV6ZMNckj3q8VKiPdMIZXgCzt920CSu2v1nYG3GzQ=s120-c-rp-mo-ba4-br100",
          "display_name": "Elia Alejandra",
          "link": "https://www.google.com/maps/contrib/107082141027365570078?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pKdk5FdHVMVW8xTjFoT2MzUjJlamQyV0hSTk4wRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOjJvNEtuLUo1N1hOc3R2ejd2WHRNN0E%7C0d6T99EL24S%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "2/5",
        "created": "3 months ago",
        "comment": "Room had a nice view. Staff was friendly.\nRoom was dirty when we walked in. There were hairs in the bathtub, and sink wasn’t very clean. Restrooms and rooms along with furniture are very old! Bedsheets had some hairs and not very clean. Room was cleaned once out of 4 days so it’s not daily. They do give you a 35$ voucher for the cafe they have and 25$ for their services. Luggage hold is free if you get there early but they charge 5$ a piece if you need to check out of your room but still have time before the airport. Elevators are nice they have a system that makes it run smoother.\nHotel seems very central so that’s a good thing. Lots of things around but that’s just New York.\nOver all because of how old rooms seems and how dirty it was 2/5. Wouldn’t stay here again .",
        "review_reply": "Dear Elia,\nThank you for taking the time to share such detailed feedback. We’re glad to hear you enjoyed the wonderful view, the fantastic location, and the friendliness of the team, but we’re truly sorry to learn that the room did not meet expectations during your stay. Your comments about cleanliness, upkeep, and service frequency are important, and they’ll be shared with the appropriate teams so we can take a closer look. We appreciate you noting the helpful amenities like the café credit, services credit, luggage storage, and elevator system as well. We’re grateful for your perspective and hope the rest of your time in New York City was wonderful.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "3 months ago",
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
            "value": 3,
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2xWbGRIaHFUblkzZFdaaFdITlNRMlZNZDE5bmNHYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUizL79_bwGWMDpI7JDM4zojb6e6Ufpryfw23XnFxFSFJMHriK_=s120-c-rp-mo-ba3-br100",
          "display_name": "Amanda Garcia",
          "link": "https://www.google.com/maps/contrib/102898602342998029792?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWbGRIaHFUblkzZFdaaFdITlNRMlZNZDE5bmNHYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOlVldHhqTnY3dWZhWHNSQ2VMd19ncGc%7C0dGM04hI_ys%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "2 months ago",
        "comment": "From the moment we arrived, our experience at this hotel was nothing short of exceptional. The property is beautiful, impeccably clean, and thoughtfully designed for comfort and relaxation. Every detail reflected true five-star quality.\nWhat truly made our stay unforgettable was the incredible staff. The team went above and beyond to make us feel welcomed and valued. Special recognition to Lek at concierge, Christina in housekeeping, Brian and Joland at front desk for their professionalism, warmth, and genuine care. Their attentiveness and willingness to assist with every request during our stay as we celebrate a birthday made a lasting impression.\nHousekeeping was flawless, the amenities were excellent, and the overall atmosphere was both luxurious and inviting. This hotel sets the standard for hospitality, and we cannot wait to return.\nHighly recommend to anyone looking for an outstanding stay! Location a huge plus.",
        "review_reply": "Dear Amanda,\nIt's an absolute pleasure to read about the exceptional celebration experience you had with us here at New York Hilton Midtown. Thank you for going out of your way to write about our gorgeous property, where comfort and charm come together perfectly, and we're delighted our team was able to make your experience that much more memorable. We'll be sure your thoughtful compliments are shared with them, and we hope to have the opportunity to welcome you back soon, whether for another special occasion or simply a relaxing New York getaway.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "2 months ago",
        "details": [
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 5,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
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
        "review_id": "ChZDSUhNMG9nS0VKdXluNURVNjR1UWJnEAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdVsxDWqDDLG62Q3M3dmLlHORJs5jz0NWRJO3cP21KtRNPfosO7RpofjnbUgpyNjOTDew=s120-c-br100",
          "display_name": "LisaO964",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "4/5",
        "created": "a month ago",
        "comment": "Spent 6 nights here with my family- arrives 9.45pm due to flight delay but on arrival rooms were not ready, the gentleman at check in was helpful and found us a room however it was interconnecting with another family which meant we were disturbed by their noise quite a lot. However, this hotel is really lovely and other than this and the elevators being slow I can’t fault it. They have installed a new elevator system and should have thought it through as during busy times they are packed and it can take quite some time to get one. |Rooms are lovely , cleaned every day, excellent location and staff all really lovely. I would recommend staying here."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VNT3NySlBUc01UbTZRRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qdvd3mFTmnQslJajBtyC7hGXBv5KKEN_7z5ZnXByEfDkAAFDmgEV3HW1P9_iXApXyf1XA=s120-c-br100",
          "display_name": "bobrobb",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045071077?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045071077?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=BF&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "2/5",
        "created": "a month ago",
        "comment": "On a positive, the location is excellent and the room was big enough for a family which I think is a rarity for such a location.  We visited from 30th Dec to 6th Jan and in all honesty the hotel is just not set up to be running at capacity.  There were queues for everything, check in, check out, restrooms, bars and the lifts.  The lifts deserve a special mention - if on a lower floor you might have to wait for 5 to 6 lifts to get one that had any capacity if heading down at a busy time.  The service at check in and check out was pretty non- existent, the $35 “destination charge” is to encourage you to spend in their bar.  If lucky enough to actually get served in the lobby bar 2 x beers is more than the $35 - it just leaves a bad taste.  There are no tea and coffee facilities in room (a given in UK), but on a positive note towels were changed daily.  When checking out this morning nobody asked us how our stay was, totally impersonal, then we got hit with the $5 per item holding fee, to hold our baggage from 12 noon to 2 pm - as we had 7 items (hand luggage also counts as a separate item) we got a $35 charge after checking out.  If anyone genuinely cared about customer experience, that would have been taken out of your destination charge, but of course that isn’t possible.    It is a shame really, a once grand hotel, living off the Hilton brand, in need of a refurb with a clear focus on revenue creation as opposed to customer experience.  The location just isn’t enough to make up for the lack of experience I’m afraid - there are much better out there."
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tObGJucGZObk5zTW01M1IzQXhkazgwUkZoclYzYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJQgX50KQ8oURrMb8SgiRyqOysMS1rNXBa0wHN1BoF7o8ORvQ=s120-c-rp-mo-br100",
          "display_name": "Olaoluwa Ajilore",
          "link": "https://www.google.com/maps/contrib/115992020596208851571?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tObGJucGZObk5zTW01M1IzQXhkazgwUkZoclYzYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkNlbnpfNnNsMm53R3Axdk80RFhrV3c%7C0d3TryOnoQy%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "3 months ago",
        "comment": "I rarely write reviews, but I felt compelled to share my experience—especially because of the outstanding room service I’ve received. I’m currently staying here, and everything has been fantastic so far. What truly sets this place apart is the incredible housekeeping team on the 34th floor.\n\nThey are, without a doubt, the most attentive and genuinely kind crew I’ve encountered in any hotel across the country. Always cheerful, always ready to help—even when I’ve had the “Do Not Disturb” sign up, they’ve gone out of their way to check in if they see me in the hallway, just to make sure I don’t need anything. That level of care and consistency is rare, and it deserves to be celebrated.\n\nThey’re simply the best.",
        "review_reply": "Dear Olaoluwa,\nThank you for taking the time to share this, especially since you mentioned you rarely write reviews. It means even more to know you felt moved to speak about your stay while you’re still here with us. We're truly thrilled to hear how well everything has been going, and your kind words about our housekeeping team on the 34th floor mean the world. They take such pride in caring for our guests with thoughtfulness and genuine warmth, and it’s wonderful to know that their efforts have made such an impression. We'll be sure to share your message with them. I know it will brighten their day and remind them just how meaningful their care is. Thank you again for recognizing their hard work and spirit. We’re grateful to have you with us here at New York Hilton Midtown and are here for anything you may need for the rest of your visit. We hope the rest of your time with us continues to feel relaxing, comfortable, and well cared for!\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_GM@hilton.com",
        "review_reply_created": "3 months ago",
        "details": [
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 5,
            "description": "Rooms"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Location",
            "value": 5,
            "description": "Location"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_ROOMS",
            "name": "Rooms",
            "value": "perfect, nice view, great ambiance",
            "description": "Rooms"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NEARBY_ACTIVITIES",
            "name": "Nearby activities",
            "value": "Alot of activities",
            "description": "Nearby activities"
          }
        ]
      }
    ]
  }
  ```
</ResponseExample>
