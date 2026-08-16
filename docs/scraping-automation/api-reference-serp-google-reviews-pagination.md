# Google Reviews pagination

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/pagination](https://docs.brightdata.com/api-reference/serp/google-reviews/pagination)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Google Reviews pagination parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10
```

## Parameters

<ParamField type="string">
  Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.
</ParamField>

<ParamField type="string">
  Define the result offset - results to start from the selected value. Used for managing pagination.

  > **Examples:**\
  > `start=0` (default) - first page of results \
  > `start=10` - second page of results \
  > `start=20` - third page of results, etc.

  ```txt wrap theme={null}
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10
  ```
</ParamField>

<ParamField type="string">
  <Warning>
    **Deprecated As of September 11, 2025 by Google**

    * The Number of results to return is usually 10, results' set size may vary.
    * The `start` parameters can be used to paginate within results' set. 
    * To get top 100 results, Bright Data offers a Web Scraping API. Read more here: [Get top google 100 results in one API call](/scraping-automation/serp-api/get-top-100-google-results)
  </Warning>
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&start=10',
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT214TVYwUnBkeTB4YVVSUFdXVmpkRVF5YUdWNU5VRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocL3C36IqORKTyGT30AEfavKkHg-QKtec5fuvyfp5frlqqNi8A=s120-c-rp-mo-br100",
          "display_name": "Rose Vu",
          "link": "https://www.google.com/maps/contrib/104779998134668984454?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT214TVYwUnBkeTB4YVVSUFdXVmpkRVF5YUdWNU5VRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmxMV0Rpdy0xaURPWWVjdEQyaGV5NUE%7C0d4z-lTsbDt%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "3 months ago",
        "comment": "Great location. Double room with city view was very spacious. Nice gym. Helpful staff all throughout the hotel. Nice random free wine hour one evening. It’s a very large hotel.\n\nMy only two complaints are:\n\nWaiting for the elevator can be very annoying in the mornings and evenings. We ended up using the alternative elevator one morning because the normal ones came by already packed.\n\nThe hot water situation. In order for us to get hot water, we had to run the faucet for 5-7 mins. This was something I had never encountered in any hotel I’ve ever stayed at and was a disappointment considering this hotel is a 4-star hotel. I had to repeat this for each person in the room who planned to shower. It was also an inconvenience during a colder week to not have hot water immediately available.",
        "review_reply": "Dear Rose,\nThank you for staying with us and for sharing these thoughtful details. Hearing that the city view room felt spacious, the gym supported your routine, our team was genuinely helpful, and the surprise wine hour added a nice touch means a great deal. However, we regret the elevator congestion during peak times and the delay before hot water reached the tap. We'll be sure to share your comments with maintenance to improve speed and consistency. Your stay should feel seamless from elevator timing to a comfortable shower, and we hope to welcome you back for a seamless experience down the line.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "3 months ago",
        "details": [
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Rooms",
            "value": 4,
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT21OV1RXdDZRME5yYm01RU9UVXpiMDVEU25kcU5VRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJw2qrSfWVwpVjOvixKQwrktL_cVaBt27i66c8B0MoldFk_n8QQ=s120-c-rp-mo-ba3-br100",
          "display_name": "megan zhang",
          "link": "https://www.google.com/maps/contrib/114757865199967482135?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21OV1RXdDZRME5yYm01RU9UVXpiMDVEU25kcU5VRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmNWTWt6Q0Nrbm5EOTUzb05DSndqNUE%7C0d7PxGL8OrX%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "3 months ago",
        "date": "2025-11-22",
        "comment": "We visit NYC at least once a year. The Hilton Midtown is well located. Hotel lobby has no sitting area for guest to rest. We waited 30 mins to check in, November 21st Friday, so prepared long waiting time. Booked a room with two beds, end up given one king and a pull out couch, the hotel is totally sold out. The front desk lady was not very friendly. She was exhausted and not  very patient. I am in hospitality business, it’s understandable but not acceptable. It didn’t bother me . Management team should either train your employees better or schedule more employees to work. The hotel room is spacious for NYC, but the pull out couch is stained. I will have to call at late night to request sheets to cover it. Hotel Gym is big and well equipped. I also just read they charge $5 per luggage to store your luggage after check out which I will need this service when we check out on Monday. I travel everywhere in the world. First time see a nice hotel charging luggage storage.  Hilton should know you are not Handling hostels guests. Your guests need only couple of  hours to be hands free before catching their flight.",
        "review_reply": "Dear Megan,\nThank you for sharing your comments about your recent stay. It is disappointing to hear about the long check-in wait, the room type not matching your reservation, and the condition of the sofa bed. The experience at the front desk should feel patient and professional, and it is regrettable that this interaction felt otherwise. Your points regarding service are important and will be reviewed internally. It is good to know that the room size and gym were positive aspects, and we hope to welcome you back for a visit that feels far more comfortable and well-supported.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "Edited 3 months ago",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psfevwStQ-CTLagO0LNX5SdjuBX4sQ0xD8ifxyabsqHgHEkdSBa3R0r8B7aAHNfXI_hhxx8XcM_c8lmQbEaZfBxSJsQvf_2eLf08e3FNs-vyZFLOcDx1-0ARxiAwW2SpSBXRyE0gbyQOrl_",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptxi7ADgZPrCMkqepy6MhIITVdd_bCbN3TdsOhsck0m2G149zwbxnEbp2P_VfJmTt03vzpViQR8SYYQmbai7Lt4PpTBERH9sROcDVadqZNvEQn96vxxZ2rsmVSnIAu2GZ9SIuwi7Ex344yp"
        ],
        "details": [
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
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT205UVowMVZTbTF2V25aVVNsWm5PVTlSTUVrNVgyYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIgaHv0uz4qb1IAWCes4xZmxRX7BTldk_Dk5zU0797PEdLoSA=s120-c-rp-mo-ba3-br100",
          "display_name": "John S",
          "link": "https://www.google.com/maps/contrib/104471260898528618969?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT205UVowMVZTbTF2V25aVVNsWm5PVTlSTUVrNVgyYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOm9QZ01VSm1vWnZUSlZnOU9RMEk5X2c%7C0dI4AoZafdG%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "2 months ago",
        "comment": "Great hotel in Downtown NYC.  Perfect location for Christmas Season as we could walk everywhere with young kids.  Would definitely stay there again.  Service was very responsive, from checking bags on arrival to room requests.  Clean rooms although old, but no complaints.  Elevators are going through an upgrade process so some delays there, but just had to give yourself an extra 2-5 minutes incase they were delayed or crowded.\nI would definitely stay here again.",
        "review_reply": "Dear John,\nThank you for sharing your experience. We’re delighted to hear that our downtown location worked so well for your family and that our team provided responsive service from start to finish. We appreciate your understanding regarding our elevators during the enhancement process and are glad our room cleanliness and overall stay met your expectations. Your kind words mean a lot, and we look forward to welcoming you back to New York Hilton Midtown for another enjoyable visit.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
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
            "value": 4,
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
            "value": "Rooms were a little dated and lights were dim, but felt clean, comfortable beds, and quiet.",
            "description": "Rooms"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NEARBY_ACTIVITIES",
            "name": "Nearby activities",
            "value": "Great location and easy walk to Rockefeller Center, Bryant Park, Time Square, & Central Park",
            "description": "Nearby activities"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_SAFETY",
            "name": "Safety",
            "value": "Always felt safe and secure",
            "description": "Safety"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_WALKABILITY",
            "name": "Walkability",
            "value": "Very walkable for everything we wanted to do",
            "description": "Walkability"
          }
        ]
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT21Wc2JWWjJhVlpuZVcxWmVrVllVMFZSYzNBd1JrRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXCL-8vEvUDz822rsEmwqB79dYFIjQbHiK1dnR4PV9_VvfzFXTB=s120-c-rp-mo-br100",
          "display_name": "Sandi Butler Hughes",
          "link": "https://www.google.com/maps/contrib/118216174767304514343?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21Wc2JWWjJhVlpuZVcxWmVrVllVMFZSYzNBd1JrRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmVsbVZ2aVZneW1ZekVYU0VRc3AwRkE%7C0dDjnmf81ZY%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "2 months ago",
        "date": "2025-12-11",
        "comment": "We stayed here for the Macy’s Thanksgiving Day Parade. The elevators were crowded and the line could be long - but it was overall a great experience and I highly recommend staying here. Room service was fast and good. Staff was helpful. Great, central location!",
        "review_reply": "Dear Sandi,\nThank you for choosing us for your Thanksgiving parade stay and for sharing these thoughtful highlights! It is wonderful to hear that the central setting worked well, room service arrived quickly and hit the spot, and that our team provided helpful care throughout. We recognize that elevator demand can surge during major events, and we are committed to seeking ways to keep things moving more smoothly. It was a pleasure having you here, and we hope to welcome you back for another festive visit.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "2 months ago",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psih2_1OOcMpwE2s3oVDJsT3YU-z52F9_knHdLNoArRhctk8qSKNiZfebnmWcA4a2l9uILAIVTXWa0nJpv7vdFrXZVyVPyZgvz5gOjmU1QKE9wCuI64Fd8ojOo157ZUIP2EKx6tVOsVKikX"
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
            "id": "HOTELS_VIBE",
            "name": "Hotel highlights",
            "value": "Great view",
            "description": "How would you describe the hotel?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tGVU9XbEhha3RHZDFKNWFsRkVXbEJWTjJKVWVHYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUEYov0tioO-gi58kZLHwZ7jHvkGkquiLm9YYLfq7ZPZFhuYLpQ=s120-c-rp-mo-ba4-br100",
          "display_name": "Paula Januszkiewicz",
          "link": "https://www.google.com/maps/contrib/108960975385810447306?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tGVU9XbEhha3RHZDFKNWFsRkVXbEJWTjJKVWVHYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkFUOWlHaktGd1J5alFEWlBVN2JUeGc%7C0d2miwB-5in%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "3 months ago",
        "date": "2025-11-08",
        "comment": "The reliable favorite! With great, relatively peaceful location, which I appreciate.\n\nI’ve stayed here a few times already - it’s always such a good and reliable hotel. But this time you really surprised me with the yogurt selection: one with a taste of rose and the other matcha - omg, thank you! That little detail truly made my day. So delicious!",
        "review_reply": "Dear Paula,\nThank you for staying with us at New York Hilton Midtown. It means a lot that we’re your go-to when you are in the city. We also love that the new yogurt flavors were a hit, and our team will be so happy that the little touch stood out to you. We appreciate your loyalty and look forward to welcoming you back.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "3 months ago",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psjBORXqPHXaA8lWVYVBmJZG9vNFgZadE2xV7IIBNmMrZYD-cGjNPlD5g8QZfocFZHbG0vrwkPt_mwVMQJqew7JhEdJycvA7kxGjvVCOIoJQjhFVXrOTTLWJcswEKDpSp550TagX22ZUSIP"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Trip type",
            "value": "Business",
            "description": "What kind of trip was it?"
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
            "id": "HOTELS_VIBE",
            "name": "Hotel highlights",
            "value": "Luxury",
            "description": "How would you describe the hotel?"
          }
        ]
      },
      {
        "review_id": "ChdDSUhNMG9nS0VQdnIyOHU1LVppVGlBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfnSFWXMd1oJu73a6IhdtgibYcjse2HKQTHeghNQd9Cyw8DYQQJZDCyh-TD68ehXuY-FA=s120-c-br100",
          "display_name": "R471LZalext",
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=KZ&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=KZ&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "3/5",
        "created": "2 months ago",
        "comment": "Room was ok. For a Hilton I thought it would be better. Could do with an update with better placed plug sockets and some USB sockets. It is 2025 and people need multiple sockets to charge phones, tablets, watches etc.||Staff were underwhelming. Our flight home was cancelled and we had to find accommodation for another night. I understand they couldn’t accept us as they were fully booked. I would have appreciated some sort of effort to see if other Hilton hotels available but no, just a shrug of the shoulders pretty much and left to sort ourselves out. I understand that it is probably over there pay grade. However, a phone call or some sort of contact with other Hilton hotels would have been put our anxiety at ease. I am disappointed because i expect staff from the Hilton brand would excel at customer service, but they didn’t. They would’ve earned a decent tip from it. ||Only 2 things impressed me. The coffee machine in our room and the cleaning staff. They always did a superb job."
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT205WFNsaDVRWFJUWjBsd1Yxb3pNbmhEUkdnM2EwRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocK7OOVJIAqO_bUXJsXNClGhPiS_codAAJ_4jbQhjngD2I5VQA=s120-c-rp-mo-ba3-br100",
          "display_name": "L File",
          "link": "https://www.google.com/maps/contrib/112336634363254268566?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT205WFNsaDVRWFJUWjBsd1Yxb3pNbmhEUkdnM2EwRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOm9XSlh5QXRTZ0lwV1ozMnhDRGg3a0E%7C0dCjYvbWq6w%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "2 months ago",
        "comment": "Awesome location, rooms were clean and comfortable.  Bar drinks are just ok, food is meh.  But I didn’t go to NYC to eat/drinkk in my hotel.  Its location is perfect.  We walked about 5 miles a day to see what we wanted and to go where we wanted.  Subway was easy to use.  The elevators are nice, but they do need more.  Construction on one, but there is almost always a line to go up and getting down is awful.  Give yourself plenty of time and the higher the room, the easier to get “on”.  Oftentimes people had been waiting multiple stops for the elevator to get down to the lobby, if on lower floors, but it would be full.  That was the only pitfall, but could be a significant one if you are in a hurry.",
        "review_reply": "Thank you for sharing your experience with us. We are glad to hear you enjoyed the clean and comfortable rooms, as well as our convenient location, which made it easy to explore the city on foot and by subway. We appreciate your comments regarding food, beverages, and elevator availability, and we will be reviewing these concerns with our team to help improve the overall guest experience. We appreciate you staying with us and hope to have the chance to host you again.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
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
            "value": 5,
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
          }
        ]
      }
    ]
  }
  ```
</ResponseExample>
