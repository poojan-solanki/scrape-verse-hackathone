# Job search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/jobs](https://docs.brightdata.com/api-reference/serp/google-search/jobs)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Job Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&ibp=htl%3Bjobs
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Use the `ibp` parameter for Jobs search type. i.e. `ibp=htl;jobs`

  ```http theme={null}
  https://www.google.com/search?q=pizza&ibp=htl%3Bjobs
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&ibp=htl%3Bjobs",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&ibp=htl%3Bjobs"
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
        url: 'https://www.google.com/search?q=pizza&ibp=htl%3Bjobs',
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
      'url': 'https://www.google.com/search?q=pizza&ibp=htl%3Bjobs',
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
  ```json 200 highlight={11} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "results_cnt": 0,
      "search_time": 0.31,
      "language": "en",
      "location": "Montgomery County, Texas",
      "mobile": false,
      "basic_view": false,
      "search_type": "jobs",
      "page_title": "pizza - Google Search",
      "timestamp": "2026-02-25T08:43:34.614Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&ibp=htl%3Bjobs&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "AI Mode",
        "href": "https://www.google.com/search?q=pizza&sca_esv=206cd4dd954885db&gl=US&hl=en&udm=50&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&aep=1&ntc=1&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQ2J8OegQICxAD"
      },
      {
        "title": "All",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQ0pQJegQIDBAB"
      },
      {
        "title": "Maps",
        "href": "https://maps.google.com/maps?sca_esv=206cd4dd954885db&gl=US&hl=en&output=search&q=pizza&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&entry=mc&ved=1t:200715&ictx=111"
      },
      {
        "title": "Images",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQtKgLegQIDxAB"
      },
      {
        "title": "Shopping",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=28&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&ved=1t:220175&ictx=111"
      },
      {
        "title": "News",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza&tbm=nws&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQ0pQJegQIERAB"
      },
      {
        "title": "Videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=7&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQtKgLegQIJxAB"
      },
      {
        "title": "Forums",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=18&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQs6gLegQIJRAB"
      },
      {
        "title": "Short videos",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=39&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQs6gLegQIKBAB"
      },
      {
        "title": "Web",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&udm=web&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1Tg5t_ufWNUvD2V-uX26AFlqeVA_8cCiKkQH-MFQemrtPKh5DXjDm8xDum7A4wYDWFbKVVilxndHi5Wmmk7zyv03Mys_YyBP4ugQ98ij9I0KKsP0Cu165bWlMKbYdlbOsIY961jqcRx3YqPBajY3XBKmZnjo68pJ_p3Acf3Ma5IASVQq8A&q=pizza&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQs6gLegQIJhAB"
      },
      {
        "title": "Remote",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza+remote&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YV-lRKgxbXFUKPzYPZyKeILNvm73fF0fEZBdNGAU-CIo-G2v151xiOXgGNzzbT8u0ut-v67slmYRTRP9OMBvE6aLADbcd5B0FzMBs3wPbXiTQ9cGYyEEe3yA_qDdNJCOx4BWAA&udm=8&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQxKsJKAB6BAgSEAE&ictx=0"
      },
      {
        "title": "No degree",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza+no+degree&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-T4emPHvteFlrAH19mCmukosX52MC87I2751Bq-nSNFe7KZu5GoL88oPZl2yYAEhJ5Ut6RNtgvVIk39OnIMwpuh_fG1KeQuQxDw35P9FvGPNubTFpsIhiLd_WkNV_t83o5qdj4CrIjGYdMFylvoWcqY5aT_Q&udm=8&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQxKsJKAF6BAgUEAE&ictx=0"
      },
      {
        "title": "Remote",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza+remote&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YV-lRKgxbXFUKPzYPZyKeILNvm73fF0fEZBdNGAU-CIo-G2v151xiOXgGNzzbT8u0ut-v67slmYRTRP9OMBvE6aLADbcd5B0FzMBs3wPbXiTQ9cGYyEEe3yA_qDdNJCOx4BWAA&udm=8&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQxKsJKAJ6BAgWEAE&ictx=0"
      },
      {
        "title": "No degree",
        "href": "https://www.google.com/search?sca_esv=206cd4dd954885db&gl=US&hl=en&q=pizza+no+degree&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-T4emPHvteFlrAH19mCmukosX52MC87I2751Bq-nSNFe7KZu5GoL88oPZl2yYAEhJ5Ut6RNtgvVIk39OnIMwpuh_fG1KeQuQxDw35P9FvGPNubTFpsIhiLd_WkNV_t83o5qdj4CrIjGYdMFylvoWcqY5aT_Q&udm=8&sa=X&ved=2ahUKEwiWusv4n_SSAxWR4skDHfyGN7UQxKsJKAN6BAgTEAE&ictx=0"
      }
    ],
    "jobs": {
      "items": [
        {
          "title": "Cook",
          "company": "Pizza Hut",
          "location": "Splendora, TX",
          "source": "via Pizza Hut",
          "link": "https://www.google.com/search?ibp=htl;jobs&q=pizza&htidocid=6_16nT4f27lf3OouAAAAAA%3D%3D&hl=en-US&shem=epsd1&shndl=37&shmd=H4sIAAAAAAAA_xXEsQrCMBAA0L2fUJebRRMRXHR0UJwEHdzKJR5JasyF3CmlXy--4XXfbnFkfsEaLuxACJuPwAVOzCFTf4iqVfbWimQTRFGTN57flgs5nuzITv4NErFRzag0bHebydQSlv01zTPC-aOQCtxqpvLkhiu4P36bVsuPeAAAAA&shmds=v1_ATWGeeNVkvz2LAq4sD_AMOtS0LznF37q0WDx9Hcs2z8KYOPDOQ&source=sh/x/job/li/m1/1#fpstate=tldetail&htivrt=jobs&htiq=pizza&htidocid=6_16nT4f27lf3OouAAAAAA%3D%3D",
          "postings": [
            {
              "link": "https://jobs.pizzahut.com/job/cook/splendora-TX/9ed4898e-f0bc-4748-83c7-a5f700204a97-s1/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "source": "Pizza Hut"
            },
            {
              "link": "https://www.indeed.com/viewjob?jk=ecd1a619eee2659b&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "indeed.com",
              "source": "Indeed"
            },
            {
              "link": "https://careers.sonicdrivein.com/cook/job/01789E60CB4B75CC3271CD641023DC6D?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "sonicdrivein.com",
              "source": "Sonic Careers"
            },
            {
              "link": "https://www.breakroom.cc/en-us/jobs/listing/2967571-sonic-drive-in-cook-14685-us-59-splendora-texas-77372-united?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "breakroom.cc",
              "source": "Breakroom"
            },
            {
              "link": "https://www.simplyhired.com/job/g_EzjTnQ7_MlIl5f1_sMb0Q7lqcWzZth-2Po_Xgbx0waxxOq5RQ1-Q?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "simplyhired.com",
              "source": "SimplyHired"
            },
            {
              "link": "https://earnbetter.com/app/job/01K1YHEFHJCCV87HTJ0BVTSBQN/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "earnbetter.com",
              "source": "EarnBetter"
            },
            {
              "link": "https://us.bebee.com/job/fbf20584e76c867fed8c9a86abc0838a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "bebee.com",
              "source": "BeBee"
            },
            {
              "link": "https://www.learn4good.com/jobs/texas/restaurant_and_food_service/4885221513/e/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "learn4good.com",
              "source": "Learn4Good"
            }
          ],
          "original_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnb5TyY9xtYb1GAz0Dl7oSudGQ00CkPqAgHOr&s=0",
          "date": "2 days ago",
          "employment_type": "Full-time",
          "description": "Under daily supervision of the General Manager, the position of the Cook/Dishwasher is responsible for preparing all food items in an expedient manner to specifications; and cleaning dishes, pots. pans, and public areas of the building. He/she is also responsible for keeping the floor dry and free of debris.\n\nEssential Functions:\n1. Prepare: food in accordance lo specifications.\n\n2. Keep station. stocked before, during and after shifts.\n\n3. Set up stations\n\n4. Keep floors at work area free of debris and spills.\n\nS. Maintain cleanliness in the work station.\n\n6. Wash dishes and take trash out to the dumpster.\n\n7. Prep dough and other products for upcoming shifts.\n\nRequirements\n\nPhysical Requirements:\nl. Have constant need (66%- 100% of time) to stand without the benefit of support while cooking and cleaning.\n\n2. Haw frequent need (33%-66% of time) to walk around the kitchen.\n\n3. Have frequent need (33%-66% of time) to bend/stop/squat while taking items off bottom shelves;\ncleaning floors and walls; and lading shelves.\n\n4. Have frequent need (33%-66t% of time) to push and pull equipment while performing cleaning duties.\n\n5. Have frequent need (33%-66% of time) to reach above shoulders when reaching for items stored above\nthe shoulder level and while changing light bulbs.\n\n6. Have frequent need (33%-66% of time) to grasp/grip glasses, serving plates, trays, and utensils; and while\npreparing food.\n\n7. Have frequent need (33%-66% of time) for finger dexterity for such things as writing, gripping, cleaning,\nand turning off and on lights.\n\n8. Have occasional need (1%\n• 33% of time) to operate dishwasher.\n\n9. Have occasional need (1%- 33% of time) to lift/carry object weighing between 75 and 51 pounds and\nfrequent need (33%- 66% of time) to handle objects weighing 50 pounds or less.\n\nVision Requirements:\nl . Rave frequent need (33%-66% of time) to be able to see detail while cooking and preparing food; and\nwhile cleaning dishes.\n\nl. Have constant Need (66%-100% of time) to be able to see beyond arms length in order to see personnel\nand cleaning area.\n\nHearing Requirements:\n1. Have constant need (66%\n• 100% of time) to be able to hear other personnel in order to communicate\neffectively.\n\nSpeaking Requirements:\nl. Have constant need (66%-100% of time) to be able to speak with other personnel in order to\ncommunicate effectively.",
          "highlights": [
            {
              "name": "Qualifications",
              "list": [
                "Have constant need (66%- 100% of time) to stand without the benefit of support while cooking and cleaning",
                "Have occasional need (1%",
                "frequent need (33%- 66% of time) to handle objects weighing 50 pounds or less",
                "Rave frequent need (33%-66% of time) to be able to see detail while cooking and preparing food; and",
                "Have constant Need (66%-100% of time) to be able to see beyond arms length in order to see personnel",
                "Have constant need (66%",
                "100% of time) to be able to hear other personnel in order to communicate",
                "Have constant need (66%-100% of time) to be able to speak with other personnel in order to",
                "communicate effectively"
              ]
            },
            {
              "name": "Benefits",
              "list": [
                "Set up stations"
              ]
            },
            {
              "name": "Responsibilities",
              "list": [
                "Under daily supervision of the General Manager, the position of the Cook/Dishwasher is responsible for preparing all food items in an expedient manner to specifications; and cleaning dishes, pots",
                "pans, and public areas of the building",
                "He/she is also responsible for keeping the floor dry and free of debris",
                "Prepare: food in accordance lo specifications",
                "Keep station",
                "stocked before, during and after shifts",
                "Keep floors at work area free of debris and spills",
                "Maintain cleanliness in the work station",
                "Wash dishes and take trash out to the dumpster",
                "Prep dough and other products for upcoming shifts",
                "Haw frequent need (33%-66% of time) to walk around the kitchen",
                "Have frequent need (33%-66% of time) to bend/stop/squat while taking items off bottom shelves;",
                "cleaning floors and walls; and lading shelves",
                "Have frequent need (33%-66t% of time) to push and pull equipment while performing cleaning duties",
                "Have frequent need (33%-66% of time) to reach above shoulders when reaching for items stored above",
                "the shoulder level and while changing light bulbs",
                "Have frequent need (33%-66% of time) to grasp/grip glasses, serving plates, trays, and utensils; and while",
                "preparing food",
                "Have frequent need (33%-66% of time) for finger dexterity for such things as writing, gripping, cleaning,",
                "and turning off and on lights",
                "33% of time) to operate dishwasher",
                "Have occasional need (1%- 33% of time) to lift/carry object weighing between 75 and 51 pounds and"
              ]
            }
          ],
          "tags": [
            {
              "name": "Posted",
              "value": "2 days ago"
            },
            {
              "name": "Employment Type",
              "value": "Full-time"
            },
            {
              "name": "Qualification",
              "value": "No degree mentioned"
            }
          ],
          "rank": 1,
          "global_rank": 1
        },
        {
          "title": "Pizza Crew Member",
          "company": "Marco's Pizza",
          "location": "Spring, TX",
          "source": "via Indeed",
          "link": "https://www.google.com/search?ibp=htl;jobs&q=pizza&htidocid=iaF8mrghlWO4rIUZAAAAAA%3D%3D&hl=en-US&shem=epsd1&shndl=37&shmd=H4sIAAAAAAAA_yXNsQrCMBCAYVz7CLrcpogmIrjU0UEQCoIObiUJRxJJc-EuYOnsg6u4_OP3N-9Zs7rGaTJwYnxBh4NFhi1cyIKgYReAMpyJfML5MdRapNVaJCkv1dTolKNBU0ZLo36SlV96CYaxJFOx3x92oyrZrxfdV6OlwH8XM9wKx-w3cH98AOUDRe6HAAAA&shmds=v1_ATWGeePt9xuCWrUfWX5IQQKOF5SjzMvMdpiQrvexRSN54JOBfg&source=sh/x/job/li/m1/1#fpstate=tldetail&htivrt=jobs&htiq=pizza&htidocid=iaF8mrghlWO4rIUZAAAAAA%3D%3D",
          "postings": [
            {
              "link": "https://www.indeed.com/viewjob?jk=d900ec075453de28&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "source": "Indeed"
            },
            {
              "link": "https://www.ziprecruiter.com/c/Marcos-Pizza/Job/Pizza-Crew-Member/-in-Spring,TX?jid=1368cf35ed2a0cef&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "ziprecruiter.com",
              "source": "ZipRecruiter"
            },
            {
              "link": "https://www.glassdoor.com/job-listing/pizza-crew-member-marco-s-pizza-JV_IC1140222_KO0,17_KE18,31.htm?jl=1009785317988&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "glassdoor.com",
              "source": "Glassdoor"
            },
            {
              "link": "https://www.snagajob.com/jobs/831020036?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "snagajob.com",
              "source": "Snagajob"
            },
            {
              "link": "https://www.simplyhired.com/job/aOMTcyJItD5qv5C3tmyq-Nlf19s0LADGFB387R6o4Oj8KF44Y5WkGA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "simplyhired.com",
              "source": "SimplyHired"
            },
            {
              "link": "https://www.career.com/job/sizemore-organization/pizza-crew-member/j202211141724175481797?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "career.com",
              "source": "Career.com"
            },
            {
              "link": "https://www.learn4good.com/jobs/spring/texas/restaurant_and_food_service/4848557952/e/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "learn4good.com",
              "source": "Learn4Good"
            }
          ],
          "original_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyN2IgTP8Y9A9OPucp18Spzc6bketz_KYnU8SS&s=0",
          "employment_type": "Part-time",
          "description": "Positions inside the store include:\n\nPizza Maker: In a recent poll customers stated the top three reasons they love Marco’s is quality, great taste, and great pizza. Trained by the best, you could be slapping dough and joining the best pizza makers in the business in no time. As a pizza maker you will learn how to make and stretch fresh dough, generously sauce and cheese each pizza, and add only the best, freshest possible ingredients to your great pizzas.\n\nCut Table: A key position in all Marco’s stores, the cut table keeps the whole pizza process moving with the crew counting on you. You’ll be the one to take pizzas from the oven to the cut table, slice and box them, and make sure each order gets it’s important sides and salads.\n\nCounter: As the first impression of Marco’s to walk-in and phone customers, excellent customer service delivered with a smiling attitude is key for the counter position.\n\nPrep: Because Marco’s offers only the freshest, best ingredients, we need prep employees who take pride in setting up the whole system for success. You will be trained on best practices for making fresh dough, slicing fresh, crispy veggies, and the most efficient way to stock product. Prep work sets up the store to handle “the rush” which is crucial.\n\nWhether you are looking for part-time add a little money to the budget job, or to start a career, apply now and see if you and Marco’s are a good match.\n\nThriving in fast-paced “rush” periods with an attitude of accountability are great qualities to have on at Marco’s, whether you are interested in part-time work or a career. Apply now and find out if you and Marco’s are a good match.\n\nBrand: Marco's Pizza\nAddress: 21630 Kuykendahl Rd. Suite 430 Spring, TX - 77388\nProperty Description: 1-21630 Kuykendahl Rd. Spring, TX\nProperty Number: 5136",
          "highlights": [
            {
              "name": "Qualifications",
              "list": [
                "Trained by the best, you could be slapping dough and joining the best pizza makers in the business in no time",
                "As a pizza maker you will learn how to make and stretch fresh dough, generously sauce and cheese each pizza, and add only the best, freshest possible ingredients to your great pizzas",
                "Thriving in fast-paced “rush” periods with an attitude of accountability are great qualities to have on at Marco’s, whether you are interested in part-time work or a career"
              ]
            },
            {
              "name": "Benefits"
            },
            {
              "name": "Responsibilities",
              "list": [
                "Cut Table: A key position in all Marco’s stores, the cut table keeps the whole pizza process moving with the crew counting on you",
                "You’ll be the one to take pizzas from the oven to the cut table, slice and box them, and make sure each order gets it’s important sides and salads",
                "Counter: As the first impression of Marco’s to walk-in and phone customers, excellent customer service delivered with a smiling attitude is key for the counter position",
                "You will be trained on best practices for making fresh dough, slicing fresh, crispy veggies, and the most efficient way to stock product",
                "Prep work sets up the store to handle “the rush” which is crucial"
              ]
            }
          ],
          "tags": [
            {
              "name": "Employment Type",
              "value": "Part-time"
            },
            {
              "name": "Qualification",
              "value": "No degree mentioned"
            }
          ],
          "rank": 2,
          "global_rank": 2
        },
        {
          "title": "Driver",
          "company": "Pizza Hut",
          "location": "Conroe, TX",
          "source": "via Pizza Hut",
          "link": "https://www.google.com/search?ibp=htl;jobs&q=pizza&htidocid=41Pgt-dTdcKNgdXaAAAAAA%3D%3D&hl=en-US&shem=epsd1&shndl=37&shmd=H4sIAAAAAAAA_xXEsQrCMBAA0L0_IAjCzWITEVx0VKg4OTi4lSQcSSTehdxVSr9efMPrpm5zbfmLDXq4swdB10ICJhiYY8H1OalWOVkrUkwUdZqDCfyxTOh5tm_28m-U5BrW4hTHw3E_m0pxu3rkZXFwmxQywYWpMe7g-foBKmxJ6XcAAAA&shmds=v1_ATWGeeOr095xwTHlZaGNHK27qHwwOzKgkq09Mk3fjAidMqci9g&source=sh/x/job/li/m1/1#fpstate=tldetail&htivrt=jobs&htiq=pizza&htidocid=41Pgt-dTdcKNgdXaAAAAAA%3D%3D",
          "postings": [
            {
              "link": "https://jobs.pizzahut.com/job/driver/conroe-TX/a27d3d1a-d936-4723-af1d-a5ee00cd45f6-s1/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "source": "Pizza Hut"
            },
            {
              "link": "https://www.indeed.com/viewjob?jk=65df9c4c0181032a&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "indeed.com",
              "source": "Indeed"
            },
            {
              "link": "https://careers.staffing-texas.com/jb/Driver-Jobs-in-Conroe-TX/13689519?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "staffing-texas.com",
              "source": "Staffing Texas, LLC"
            },
            {
              "link": "https://www.ziprecruiter.com/c/Four-PZ-Pizza,-Inc./Job/Driver/-in-Conroe,TX?jid=962e2c563fcb65ab&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "ziprecruiter.com",
              "source": "ZipRecruiter"
            },
            {
              "link": "https://www.glassdoor.com/job-listing/driver-frontier-waste-solutions-JV_IC1140144_KO0,6_KE7,31.htm?jl=1010020427521&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "glassdoor.com",
              "source": "Glassdoor"
            },
            {
              "link": "https://www.simplyhired.com/job/EFVGrw1yWYOKztBggb46CEoX5y1AYN5EICu-J4t8bUqr6MLANZ6icQ?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "simplyhired.com",
              "source": "SimplyHired"
            },
            {
              "link": "https://hertzrentacar.betterteam.com/driver-%2837692%29?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "betterteam.com",
              "source": "Hertz Careers"
            },
            {
              "link": "https://us.bebee.com/job/2dac24fce7790f56df6017b7ba9782f6?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              "site": "bebee.com",
              "source": "BeBee"
            }
          ],
          "original_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnb5TyY9xtYb1GAz0Dl7oSudGQ00CkPqAgHOr&s=0",
          "date": "12 days ago",
          "employment_type": "Full-time",
          "description": "Job Brief:\nUnder daily supervision of the Manager: To be hired as a Pizza Hut delivery driver in Texas, you must be at least 18 years old, have a valid driver's license, and possess a clean driving record with at least two years of driving experience. You also need a reliable vehicle, proof of insurance (where you are a listed driver), a keen sense of direction, and a friendly attitude, the position of the Driver is responsible for the safe and prompt delivery of pizzas to customers in their homes or business, must follow all traffic laws (DO NOT SPEED). He/she is also responsible for assisting in pizza preparation and clean up and taking phone orders.\n\nEssential Functions:\n1. Deliver pizza to customer and collect monies.\n\n2. Take phone orders.\n\n3. Prepare pizzas.\n\n4. Perform closing duties involving cleaning duties, e.g. washing dishes.\n\n5. Empty trash end clean the parking lot.",
          "highlights": [
            {
              "name": "Qualifications",
              "list": [
                "Under daily supervision of the Manager: To be hired as a Pizza Hut delivery driver in Texas, you must be at least 18 years old, have a valid driver's license, and possess a clean driving record with at least two years of driving experience",
                "You also need a reliable vehicle, proof of insurance (where you are a listed driver), a keen sense of direction, and a friendly attitude, the position of the Driver is responsible for the safe and prompt delivery of pizzas to customers in their homes or business, must follow all traffic laws (DO NOT SPEED)"
              ]
            },
            {
              "name": "Benefits"
            },
            {
              "name": "Responsibilities",
              "list": [
                "He/she is also responsible for assisting in pizza preparation and clean up and taking phone orders",
                "Deliver pizza to customer and collect monies",
                "Take phone orders",
                "Prepare pizzas",
                "Perform closing duties involving cleaning duties, e.g. washing dishes",
                "Empty trash end clean the parking lot"
              ]
            }
          ],
          "tags": [
            {
              "name": "Posted",
              "value": "12 days ago"
            },
            {
              "name": "Employment Type",
              "value": "Full-time"
            },
            {
              "name": "Qualification",
              "value": "No degree mentioned"
            }
          ],
          "rank": 3,
          "global_rank": 3
        }
      ]
    }
  }
  ```
</ResponseExample>
