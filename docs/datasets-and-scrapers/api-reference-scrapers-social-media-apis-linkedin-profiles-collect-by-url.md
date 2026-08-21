# Collect LinkedIn profiles by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/linkedin-profiles-collect-by-url POST /datasets/v3/scrape
Collect LinkedIn profile data by URL using the Bright Data Web Scraper API (dataset ID gd_l1viktl72bvl7bjuj0): work history, education, skills and connections.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l1viktl72bvl7bjuj0` to collect **Profiles by URL** data.
  </Warning>
</ParamField>

<ParamField type="boolean">
  Whether to send notifications when the request is completed.
</ParamField>

<ParamField type="boolean">
  Whether to include errors in the response.
</ParamField>

## Request Body

<ParamField type="object[]">
  An array of input objects.

  <Expandable title="properties">
    <ParamField type="string">
      The URL of the LinkedIn profile to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input":[
      {"url":"https://www.linkedin.com/in/elad-moshe-05a90413/"},
      {"url":"https://www.linkedin.com/in/jonathan-myrvik-3baa01109"},
      {"url":"https://www.linkedin.com/in/aviv-tal-75b81/"},
      {"url":"https://www.linkedin.com/in/bulentakar/"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "id": "bud***eie***d-a*********",
      "name": "Buddemeier **",
      "city": "Marshfield, Wisconsin, United States",
      "country_code": "US",
      "position": null,
      "about": null,
      "posts": null,
      "current_company": {
        "company_id": "marshfield-clinic-health-system",
        "link": "https://www.linkedin.com/company/marshfield-clinic-health-system?trk=public_profile_topcard-current-company",
        "location": null,
        "name": "Marshfield Clinic"
      },
      "experience": [
        {
          "company": "Marshfield Clinic",
          "company_logo_url": "https://media.licdn.com/dms/image/v2/D560BAQG-SexE0os4Kw/company-logo_100_100/company-logo_100_100/0/1726590593493/marshfield_clinic_health_system_logo?e=2147483647&v=beta&t=dHRCitimMYch4pTLvVukWXMZkhkkRszOlpMekvx9FeQ",
          "description_html": null,
          "subtitle": "************** ************",
          "title": "Marshfield Clinic"
        }
      ],
      "url": "htt***//w***lin*********/in*********************6a",
      "people_also_viewed": [
        {
          "about": "Sou***rn ***ica*********",
          "location": "2K followers Tallahassee Metropolitan Area",
          "name": "Bill D***n",
          "profile_link": "htt***//w***lin*********/in*********************"
        },
        {
          "about": "Car***vas***ar *********ts,******",
          "location": "52 followers Columbus, Ohio Metropolitan Area",
          "name": "Mobusher M****d",
          "profile_link": "htt***//w***lin*********/in*********************459***"
        },
        {
          "about": "Mem***al ***man*********Sys******",
          "location": "301 followers Houston, TX",
          "name": "Danny H*****n",
          "profile_link": "htt***//w***lin*********/in*********************78"
        },
        {
          "about": "IU ***lth***rth*********Cen******",
          "location": "232 followers Fishers, IN",
          "name": "Farooq I*****r",
          "profile_link": "htt***//w***lin*********/in*********************610***"
        },
        {
          "about": "Car***log***lin********* An******",
          "location": "216 followers San Antonio, TX",
          "name": "Jorge A*****z",
          "profile_link": "htt***//w***lin*********/in*********************7"
        },
        {
          "about": "Uni***sit***f C*********ori*********************ine***",
          "location": "141 followers United States",
          "name": "Hafiz H*****n",
          "profile_link": "htt***//w***lin*********/in*********************108***"
        },
        {
          "about": "BJC***alt***yst***",
          "location": "2K followers St Louis, MO",
          "name": "Deepak K***, *** F***, F***I",
          "profile_link": "htt***//w***lin*********/in*********************fsc************"
        },
        {
          "about": "Bap***t H***th *********",
          "location": "309 followers Lexington, KY",
          "name": "Michael S***, *** M**, F***, F***I",
          "profile_link": "htt***//w***lin*********/in*********************fac******************"
        },
        {
          "about": "Val*** Vi***Reg*********pit***",
          "location": "69 followers Glenwood Springs, CO",
          "name": "Marcus H****l",
          "profile_link": "htt***//w***lin*********/in*********************92"
        },
        {
          "about": "Dan***y H***ita***",
          "location": "204 followers Danbury, CT",
          "name": "Hal W*******n",
          "profile_link": "htt***//w***lin*********/in*********************2a"
        },
        {
          "about": "Uni***sit***f K*********ica*********",
          "location": "145 followers Leawood, KS",
          "name": "Eric H******d",
          "profile_link": "htt***//w***lin*********/in*********************62"
        },
        {
          "about": "Tuf***Med***l C******",
          "location": "564 followers Greater Boston",
          "name": "Mohamad E******, M**********M",
          "profile_link": "htt***//w***lin*********/in*********************pvi***************"
        },
        {
          "about": "Ore*** He*** Ce*********",
          "location": "93 followers Salem, OR",
          "name": "Kevin T******n",
          "profile_link": "htt***//w***lin*********/in*********************919***"
        },
        {
          "about": "NEA***pti***Cli******",
          "location": "842 followers Jonesboro, AR",
          "name": "Matthew H*******, **",
          "profile_link": "htt***//w***lin*********/in*********************363******"
        },
        {
          "about": "Adv***te ***lth******",
          "location": "56 followers Greater Chicago Area",
          "name": "Raminder S***h **",
          "profile_link": "htt***//w***lin*********/in*********************473******"
        },
        {
          "about": "Ash*** He*** & *********Cen******",
          "location": "573 followers United States",
          "name": "Farah ** K****n",
          "profile_link": "htt***//w***lin*********/in*********************951***"
        },
        {
          "about": "Met***etr*** Ca*********lar************",
          "location": "253 followers Detroit, MI",
          "name": "Nithin G****m",
          "profile_link": "htt***//w***lin*********/in*********************a6"
        },
        {
          "about": "Mai***ide***edi*********r",
          "location": "383 followers Jericho, NY",
          "name": "Bilal M***k",
          "profile_link": "htt***//w***lin*********/in*********************"
        },
        {
          "about": "Jam***a H***ita***",
          "location": "371 followers New York, NY",
          "name": "Aditya M****a",
          "profile_link": "htt***//w***lin*********/in*********************72"
        }
      ],
      "educations_details": null,
      "education": null,
      "recommendations_count": null,
      "avatar": "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2",
      "courses": null,
      "languages": null,
      "certifications": null,
      "recommendations": null,
      "volunteer_experience": null,
      "followers": 42,
      "connections": 41,
      "current_company_company_id": "marshfield-clinic-health-system",
      "current_company_name": "Marshfield Clinic",
      "publications": null,
      "patents": null,
      "projects": null,
      "organizations": null,
      "location": "Marshfield",
      "input_url": "htt***//w***lin*********/in*********************6a",
      "linkedin_id": "bud***eie***d-a*********",
      "activity": null,
      "linkedin_num_id": "245026690",
      "banner_image": "https://static.licdn.com/aero-v1/sc/h/5q92mjc5c51bjlwaj3rs9aa82",
      "honors_and_awards": null,
      "similar_profiles": [],
      "default_avatar": true,
      "memorialized_account": false,
      "bio_links": [],
      "first_name": "Bud***eie***",
      "last_name": "******",
      "influencer": false
    }
  ]
  ```
</ResponseExample>
