# Filter by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/filter-keyword](https://docs.brightdata.com/api-reference/serp/google-reviews/filter-keyword)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Filter by Keyword parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome
```

## Parameters

<ParamField type="string">
  Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.
</ParamField>

<ParamField type="string">
  Filter keyword. Will respond with reviews that contain specified keyword only.

  > **For Example:**\
  > `filter=awesome` - search for reviews containing 'awesome' word

  ```txt wrap theme={null}
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&filter=awesome',
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
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tOQ2RVOWthRFZwVWtGMFgxTmFSakpqUjBOaVRWRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLCd6QVG_vE1DlQTKcKWG5vfq92wigYd3HhKhqbNu3lwOeJag=s120-c-rp-mo-ba2-br100",
          "display_name": "Christine Yacoub",
          "link": "https://www.google.com/maps/contrib/101475921371619109061?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tOQ2RVOWthRFZwVWtGMFgxTmFSakpqUjBOaVRWRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkNCdU9kaDVpUkF0X1NaRjJjR0NiTVE%7C0dEkCa75rer%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "2 months ago",
        "comment": "Awesome location in the city, but outdated rooms, zero amenities, and the elevator situation was an absolute nightmare. We had to tack on at least 10+ minutes to account for the elevator ride alone, sometimes having to ride the elevator up to other floors just to catch it back down. Rooms were insanely hot at night with no way to bring down the temperature. Terrible experience, unfortunately. I expected more from a Hilton in such a prime location",
        "review_reply": "Dear Christine,\nThank you for sharing your experience. We are truly sorry that your stay didn’t meet your expectations. Your comments have been shared with our team to help improve the guest experience, and we appreciate you taking the time to provide this detailed feedback.\n\nSincerely,\n\nNew York Hilton Midtown Team\nNYCNH_FO@hilton.com",
        "review_reply_created": "2 months ago",
        "details": [
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
        "review_id": "ChdDSUhNMG9nS0VJQ0FnTUNJc2R5czdRRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUX4Awz4I21tTfDxKx-yJXmRLbBhffYdzezsAe7EFE7BXRxSDa2AQ=s120-c-rp-mo-ba5-br100",
          "display_name": "Jonna Pantelis",
          "link": "https://www.google.com/maps/contrib/107822826899657610772?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNJc2R5czdRRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgMCIsdys7QE%7C0cXD2lhpDph%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "Edited 6 months ago",
        "comment": "The difference in reviews on this hotel are just wild. I stayed on the 30th floor and found my room to be great. It was larger than what I typically expect from a hotel room in NYC and was so happy to see a couch!  Everything was clean, with exception of some rust stains around the shower drain.\nNo, the hotel rooms do not have coffee makers, however there's a coffee shop located in the lobby that was open at 5:30am.\nCheck in was a breeze, I checked in online and then visited the front desk to pick up a physical card. Service was fast and easy.\nThe hotel itself is in an awesome location!\n\nEdit to add: my most recent stay is wildly different.\nMy room on 32nd floor really needs refurbishment. The elevators have been absolutely horrible. Only 1 in my floor bank worked and on day 2 that even stopped, I ended up having to take the service elevator down.",
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
            "value": 3,
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
        "review_id": "ChdDSUhNMG9nS0VNZXFqTWlOd2MtVWdBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qe1FTSCg98CZ3VrSg28YAOa76nyaQfZNd66XhsW7MF99ozoooauY0gRdjL2-kPkUfooOQ=s120-c-br100",
          "display_name": "Maureen",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "10/10",
        "created": "9 months ago",
        "comment": "Positive: The staff was awesome.  On the check-in Kathleen went out of her way to make sure the room worked for us.  It was just the first of many experiences with attentive staff.  Friendly and responsive.  Location was great. Negative: \"\""
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnSUNfLUpybzRnRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdygWaVcJ3ItdBHng2W3iaFRVWQH1rVo2JLZNRPvIK0yuW9fy8TZEHD74TDScrP3xIW2Q=s120-c-br100",
          "display_name": "Kimberly",
          "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532"
        },
        "link": "http://www.priceline.com/r/?channel=meta&product=hotel&theme=reviews&refid=PLGOOGLEHARV&refclickid=HARV_39532&hotel_id=39532",
        "source": "Priceline",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_220.png",
        "rating": "10/10",
        "created": "a year ago",
        "comment": "Positive: The location & staff were awesome! Reminder to spend your daily credit. See Hotel employee in the bar and order a ?Lazarus? if you?re a fan of espresso martinis! Negative: It is getting a bit tired in the hallway and bathrooms. Especially the wallpaper but the other things outweigh so I wasn?t bothered."
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnSURlN05XUHhBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjU54My1PEEpcJ07il9yu48emyyENeicNVgsx7mPTtono7URPdXf=s120-c-rp-mo-ba3-br100",
          "display_name": "Caroline Hipple",
          "link": "https://www.google.com/maps/contrib/110997671651209094064?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURlN05XUHhBRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgIDe7NWPxAE%7C0YvRSCodSVV%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "Edited 3 years ago",
        "comment": "We enjoyed our stay at the Hilton Midtown and would definitely consider it again for a future NYC trip. The location is fabulous, easy walk to anywhere.  Staff were friendly and helpful, got us checked in very quickly despite our early arrival time.  The room was a good size by NYC standards and although a little older, it was clean and comfortable.  Awesome large windows with a great view.  Enjoyed hanging out in the Executive Lounge for coffee and a bit of peace and quiet!",
        "review_reply": "Dear Caroline,\nWe're so happy to hear that our amazing location and friendly team members impressed you at New York Hilton Midtown and that you had a great time overall. It would be an absolute pleasure to host you again the next time you come to the Big Apple, so hurry back!\n\nSincerely,\n\nNew York Hilton Midtown Team\nNYCNH_FO@hilton.com",
        "review_reply_created": "3 years ago",
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
        "review_id": "ChdDSUhNMG9nS0VJQ0FnSUR3ME8tSHJBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUuDalG7UAbNUpgMrJxdadLrrH_HRlGdnbh3KGWLjKogCERxLA=s120-c-rp-mo-ba4-br100",
          "display_name": "William Purcell",
          "link": "https://www.google.com/maps/contrib/111518848845096895914?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR3ME8tSHJBRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgIDw0O-HrAE%7C0YxW5al_xXs%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "Edited 3 years ago",
        "comment": "I have stayed here many times and the location cannot be beat.  The executive lounge is awesome for breakfast with caring staff.  The service at this hotel overall is excellent.   The rooms are very nice too.\n\nI love that you are an 8 min walk to so many things like Broadway theaters and Central Park too.  You can walk to so many places, take a rest in the executive lounge, and go out some more.\n\nMy family highly recommends this New York property."
      },
      {
        "review_id": "ChZDSUhNMG9nS0VJQ0FnSUNEbUxYb2VBEAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUG0JejyKmnmkKjKsXv3Zqzr53W2a6F95lt-dqtlETw65cW3sY=s120-c-rp-mo-br100",
          "display_name": "Jaxson Karn",
          "link": "https://www.google.com/maps/contrib/115116250847951428621?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNEbUxYb2VBEAE!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgICDmLXoeA%7C0_zuQCkZ3Fc%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "a year ago",
        "comment": "First Time to New York and I was a little nervous but Midtown Hilton is a super chill hotel that is easy to relax in and take a break from the hectic but fun city. The vibe is good and the rooms are nice. Special shout out to Willie who was working at the Bridges Bar in the lobby. Willie you are the reason I am writing this review. You are the most friendly and down to Earth guy I have met. You make Midtown Hilton awesome, keep it up! Willie is a solid 100/10.",
        "review_reply": "Dear Jaxson,\nThank you for staying with us at New York Hilton Midtown and for your fantastic review. Willie will be pleased when we share your kind words with him. Thank you for choosing to visit us during your trip to the city, and we look forward to seeing you again soon for another relaxing break.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "a year ago",
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
            "value": "Friends",
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
            "id": "HOTELS_TIPS_TOPICS_NOTEWORTHY_DETAILS",
            "name": "Noteworthy details",
            "value": "Willie is a solid guy.",
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
        "review_id": "ChZDSUhNMG9nS0VJQ0FnSURNOXM2NEFnEAE",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUhkHISOyI-Hj1pC-_kkDRTzjZw8J_EcPXjWpX3rsTfVAG0s2CS0A=s120-c-rp-mo-ba4-br100",
          "display_name": "Becci Dougherty",
          "link": "https://www.google.com/maps/contrib/106862988338556860792?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURNOXM2NEFnEAE!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgIDM9s64Ag%7C0YxUl92CLoc%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "Edited 3 years ago",
        "comment": "Great location, clean, staff friendly, executive club staff AWESOME.  THE Herb'N'Kitchen has no place being in any Hilton property though.  Food is good sometimes but usually just Okay.  Most of the staff there is very abrupt.  Every where else in the hotel is great..... Except... We were there over Christmas & even with the fan \"on\" constantly & the windows open..... It was very hot in our room. Housekeeping, security, concierge were all fantastic though!",
        "review_reply": "Becci, I'm happy to know that our executive lounge team left you with a great impression! We'll always make sure to be as helpful as we can when you're here. Additionally, we appreciate your patience while you were here. We will always try our best to be accommodating to your needs, but we take note when our guests go above and beyond to make themselves feel at home. We take your feedback to heart as we use any information to improve the overall experience of our guests. -Andrew Verburg, Director of Front Office Operations",
        "review_reply_created": "6 years ago"
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnSUMwMG91QXh3RRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUFy0ZwQ2ZKM0j0haGOcdBh3u2sxTgJYH1l1tMxwOCaf98Yrus=s120-c-rp-mo-ba2-br100",
          "display_name": "Caleb noiles",
          "link": "https://www.google.com/maps/contrib/114781757379111938014?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMwMG91QXh3RRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CIHM0ogKEICAgIC00ouAxwE%7C0YxUtk-RQok%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "Edited 3 years ago",
        "comment": "I am a Hilton diamond member and was quite excited to see what it would give me in New York. But I was dissatisfied with the \"perks\" we had reserved a standard king room knowing we would be upgraded. But that was a total failure, they upgraded us to a premium king room with an accessible bathroom. Which wasn't the issue. The issue was the room was damp and could smell the mold. So we called down to get switched into another room but they had sold our original room and down graded us to a double room...\n\nThe double room was clean but very outdated, the wall paper was curling and the fridge wasn't working.\n\nThe cleaning lady gets 5 stars though she was awesome, she went above and beyond for us.\n\nThe breakfast lobby was just a typical continental breakfast no warm foods. Nothing like any other hilton I had stayed at.\n\nI am just not sure how the hotel has a 4 star rating. It's an easy 3 star in my mind had they made the diamond experience better and put us in a king room of some kind.",
        "review_reply": "Caleb, thank you for taking the time to share your experience. We try our best to maintain our rooms as best as we can, but we're always receptive to our guests' feedback. We'll use this information to improve. We greatly appreciate your review, as we use it as a means to improve. We hope to have the opportunity to welcome you back soon and Make it Right. -Andrew Verburg, Director of Front Office Operations",
        "review_reply_created": "6 years ago",
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
            "value": 2,
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
