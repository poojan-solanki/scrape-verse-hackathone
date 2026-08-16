# Sort (highest)

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/sort-highest](https://docs.brightdata.com/api-reference/serp/google-reviews/sort-highest)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Sort (Highest) parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh
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
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&sort=ratingHigh',
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
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=MU&supul=en"
        },
        "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=MU&supul=en",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "5/5",
        "created": "a month ago",
        "comment": "We traveled to NYC to watch The Christmas Spectacular at the Radio City Music Hall and stayed at the Hilton for the night. We loved the location as it was within of 5 minute walking distance of literally everything there is to see at Christmas time. Our room was quite spacious and clean with two full beds and a nice view. Staff was friendly and I loved that you can get there early and check in your bags so you can go explore before check in time as we arrived to the city around noon. Also loved that there was parking on site. We used the valet so you pulled in, got everything out you would need, they give you a card with a number and you walk into the doors and right to the luggage storage area. The elevator system is insane and that's my only complaint. I've never stayed in a hotel where you have to put in your room number and can only ride a certain elevator to your room. Seemed our elevators were always the ones with tons of people waiting to get on or off. The only outside noise you could hear were horns, but I was ok with that and thankful I never heard my neighbors or anyone in the halls. I got an insane discount on my room through my employer otherwise I would never be able to stay here during Christmastime. But I understand why the rate is so high as it is a hotel that sits in the middle of all the amazing attractions NYC has to offer. Would definitely stay here again!"
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2pKQllqQm5SSE5qYnpaTmRrbEdZMGMyTTBjNWJIYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVW7IQQa1I-xPbiSjPFgq_yV38xEaaWp2c0eMF_rjbXydFynAgZ=s120-c-rp-mo-br100",
          "display_name": "Letícia Niquelatti",
          "link": "https://www.google.com/maps/contrib/106373021198817194762?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pKQllqQm5SSE5qYnpaTmRrbEdZMGMyTTBjNWJIYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOjJBYjBnRHNjbzZNdklGY0c2M0c5bHc%7C0d8CZSE5EIx%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "3 months ago",
        "comment": "I had a great experience at the New York Hilton Midtown. The location is excellent, allowing you to walk to many attractions. The hotel is well organized, the rooms are comfortable, and the staff was always polite and helpful. It’s a large property, but everything ran smoothly — fast check-in and no issues during my stay. I highly recommend it for its convenience and safety.",
        "review_reply": "Dear Letícia,\nThank you for sharing such a thoughtful review with us. It is wonderful that you enjoyed the convenience of the location and the ability to reach so many nearby attractions on foot. We're glad that the room felt comfortable, the property operated smoothly, and that our team treated you with consistent courtesy paints a picture of a stay that unfolded just as it should. A seamless check-in and a sense of safety in a large property can make travel feel effortless, and it is great that was your experience. We appreciated having you with us, and we hope your travels bring you back again.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2xkSlZ6ZHRkalZIU2pSaFVWbDRVMnhLZGpoSlFVRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocK9GUmz3QdZCvkPYxAkURvSbS2BhSQZKA7dSq0aBC9gzYk3SA=s120-c-rp-mo-ba4-br100",
          "display_name": "Alison N",
          "link": "https://www.google.com/maps/contrib/114280676597674102522?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xkSlZ6ZHRkalZIU2pSaFVWbDRVMnhLZGpoSlFVRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOldJVzdtdjVHSjRhUVl4U2xKdjhJQUE%7C0cmFqFJatJu%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "5 months ago",
        "comment": "I had a great stay at the Hilton Midtown. Check-in, room upgrade, and check-out were all very smooth and easy. The rooms are spacious, clean, and comfortable, and the staff is very friendly.\nThere can be a bit of a wait for the elevators, which is slightly inconvenient, but nothing too bothersome. The location is perfect, right in the center of New York, with taxis always available and plenty of restaurants and shops around.\nA nice extra perk: $35 per day to spend at the hotel’s restaurants. Overall, a very good experience. Highly recommend!",
        "review_reply": "Dear Alison,\nThank you for your wonderful review! We’re delighted that you enjoyed your stay at New York Hilton Midtown, from our smooth check-in and room upgrade to the comfort and cleanliness of our accommodations. It’s great that our central location and daily dining credit added to your experience. We appreciate your patience with the elevator wait times and are always working to improve convenience for our guests. Your recommendation means so much to us, and we look forward to welcoming you back for another unforgettable getaway in the future.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "5 months ago",
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
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2pOQmVEWnBZMGRHY1ROMlUxQnplRTFKU20wNVptYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVq8BGEqL10iiXMHjAAkzBnco5rg50LjBZJg1lY604ktQnnVDxUUA=s120-c-rp-mo-ba5-br100",
          "display_name": "Brad Woodruff",
          "link": "https://www.google.com/maps/contrib/110607930004076171319?hl=en"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pOQmVEWnBZMGRHY1ROMlUxQnplRTFKU20wNVptYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOjNBeDZpY0dGcTN2U1BzeE1JSm05Zmc%7C0d6dIFB_rJH%7C?hl=en",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "3 months ago",
        "comment": "The hotel is basic at best. If you want the NYC experience, stay in Times Square or on the rivers.\n\nWhere this hotel excels is location. It's in the heart of Midtown, convenient to Central Park and a host of subway holes to get to the rest of the city.  A good home base for your stay.\n\nIt's a huge hotel with a lot of rooms, so be prepared to wait to check in/out.\n\nThe room (queen, city view, 27th floor) was a normal room with little amenities included, and that was an upgrade. But again, it's location, location, location.\n\nThe Executive Lounge is also basic, but the staff is too notch. Super friendly and attentive. Plus it's a good place to stock up on waters and fruit before your daily excursions. Or to stop in for Happy Hour to grab a snack before a proper dinner.\n\nThe gym is massive. So many bikes, treadmills, ellipticals and stations. Honestly one of the biggest gyms I have seen in a hotel.",
        "review_reply": "Dear Brad,\nThank you for sharing your review. It’s great to know that our central setting served as a convenient starting point for exploring the city, along with our well-equipped fitness center. Our Executive Lounge team will be thrilled to hear that they made a meaningful impression. At the same time, it’s understood that certain aspects of the room and overall experience didn’t meet your expectations, and your perspective is invaluable as enhancements are continually evaluated. Your insights help guide us, and it would be a pleasure to welcome you back to New York Hilton Midtown again soon.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
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
            "value": "Couple",
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
            "value": "Great value",
            "description": "How would you describe the hotel?"
          }
        ]
      }
    ]
  }
  ```
</ResponseExample>
