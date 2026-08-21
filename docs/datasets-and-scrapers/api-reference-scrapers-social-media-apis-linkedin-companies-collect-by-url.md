# Collect LinkedIn companies by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-companies-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-companies-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/linkedin-companies-collect-by-url POST /datasets/v3/scrape
Collect structured LinkedIn company data by URL using the Bright Data Web Scraper API with dataset ID gd_l1vikfnt1wgvvqz95w for company profiles and metadata.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l1vikfnt1wgvvqz95w` to collect **Companies Information by URL** data.
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
      The URL of the LinkedIn company to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json theme={null}
  {
    "input":[
      {"url":"https://il.linkedin.com/company/ibm"},
      {"url":"https://www.linkedin.com/company/figueroa-real-estate/"},
      {"url":"https://www.linkedin.com/organization-guest/company/the-kraft-heinz-company"},
      {"url":"https://il.linkedin.com/company/bright-data"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "id": "zoom",
      "name": "Zoom",
      "country_code": "US,AU,GB,FR,SG,JP,NL",
      "locations": [
        "55 Almaden Blvd., 6th Floor, San Jose, CA 95113 San Jose, CA 95113, US",
        "Level 1, 9 Castlereagh St Sydney, NSW 2000, AU",
        "8000 Avalon Blvd Suite 100, space 216 Alpharetta, Georgia 30008, US",
        "7601 E Technology Way 3rd Floor Denver, Colorado 80237, US",
        "6601 College Blvd Suite 120 Overland Park, Kansas 66211, US",
        "200 E Carrillo St Suite #300 Santa Barbara, California 93101, US",
        "The Place, 4th Floor, 175 High Holborn, London WC1V 7AA, GB",
        "Zoom France, 33 Rue lafayette lafayette, Paris 75009, FR",
        "6 Temasek Boulevard Suntec Tower 5 #17-103 Singapore, SGP 038985, SG",
        "Wework Hibiya park Front 19th floor, 2-1-6 Uchisaiwai-cho Chiyoda-ku, Tokyo 100-0011, JP",
        "Wework 5th floor, Strawinskylaan 4117 Strawinskylaan, Amsterdam 1077 ZX, NL"
      ],
      "followers": 653039,
      "employees_in_linkedin": 12935,
      "about": "Bring teams together, reimagine workspaces, engage new audiences, and delight your customers –– all on the Zoom AI-first work platform you know and love. 💙 Zoomies help people stay connected so they can get more done together. We set out on a mission to make video communications frictionless and secure by building the world’s best video product for the enterprise, but we didn’t stop there. With products like AI Companion, Team Chat, Contact Center, Phone, Events, Rooms, Webinar, Contact Center and more, we bring innovation to a wide variety of customers, from the conference room to the classroom, from doctor’s offices to financial institutions to government agencies, from global brands to small businesses. We do what we do because of our core value of Care: care for our community, our customers, our company, our teammates, and ourselves. Our global employees help our customers meet happier, communicate better, and create meaningful connections the world over. Zoomies are problem-solvers and self-starters, working hard to get results and moving quickly to design solutions with our customers and users in mind. Here, you'll find room to grow with opportunities to stretch your skills and advance your career in a collaborative, growth-focused environment. Learn more about careers at Zoom by visiting our careers site: https://careers.zoom.us/home",
      "specialties": "Mobile Collaboration, Audio Conferencing, Video Conferencing, Online Meetings, Web Conferencing, Cloud Meetings, and Webinar",
      "company_size": "5,001-10,000 employees",
      "organization_type": "Public Company",
      "industries": "IT Services and IT Consulting",
      "website": "https://www.zoom.com/",
      "crunchbase_url": "https://www.crunchbase.com/organization/zoom-video-communications?utm_source=linkedin&utm_medium=referral&utm_campaign=linkedin_companies&utm_content=profile_cta_anon&trk=funding_crunchbase",
      "founded": 2013,
      "company_id": "2532259",
      "employees": [
        {
          "img": "https://media.licdn.com/dms/image/v2/D4D03AQFXMAtpcDdBAw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701307779350?e=2147483647&v=beta&t=fuYCbTPZhzeQ1Eegj-0cM4B_rLuBh6Akmmby2iH3oD0",
          "link": "https://www.linkedin.com/in/rossmayfield?trk=org-employees",
          "subtitle": "",
          "title": "Ros***ayf***d"
        },
        {
          "img": "https://media.licdn.com/dms/image/v2/D5603AQFsVNwX0nv_mw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680078275810?e=2147483647&v=beta&t=QmztFPLU-r4iis9HsY_26b-8Wz3cnxTAaycwJN9nxr0",
          "link": "https://www.linkedin.com/in/mattocko?trk=org-employees",
          "subtitle": "",
          "title": "Mat***cko***"
        },
        {
          "img": "https://media.licdn.com/dms/image/v2/D5603AQGdYkEt0wfRgw/profile-displayphoto-scale_100_100/B56Zk_fiJLHUAo-/0/1757706861118?e=2147483647&v=beta&t=STHPO2d1uvPkJUlWvtJEv2DuWtuB4jfOJcC7J6kjTTQ",
          "link": "https://www.linkedin.com/in/jscheinman?trk=org-employees",
          "subtitle": "",
          "title": "Jim***hei***n"
        },
        {
          "img": "https://media.licdn.com/dms/image/v2/C5603AQEwqlsQbHGFVQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1632693704976?e=2147483647&v=beta&t=ZTB4I2JZMy47qtiZR-p1lG9HE_HBHPrV5BRKUCqBsAI",
          "link": "https://www.linkedin.com/in/shannonmcdole?trk=org-employees",
          "subtitle": "",
          "title": "Sha***n (***d) *********"
        }
      ],
      "headquarters": "San Jose, CA",
      "image": "https://media.licdn.com/dms/image/v2/D563DAQFTYxIYJYwNmw/image-scale_191_1128/B56ZsQFMSLKEAc-/0/1765501357062/zoom_cover?e=2147483647&v=beta&t=hz1TCkzA3Z6tVTSmknd84YeQyij2Q1f5-ooc2_yZ7Co",
      "logo": "https://media.licdn.com/dms/image/v2/D560BAQHdFe3fnAvRmg/company-logo_200_200/company-logo_200_200/0/1711361750580/zoom_video_communications_logo?e=2147483647&v=beta&t=wssg0q9oOBRuuO3kWJQl1RY0c4kNP76u_RELqER9jK8",
      "similar": [
        {
          "Links": "https://www.linkedin.com/company/salesforce?trk=similar-pages",
          "location": "San Francisco, California",
          "subtitle": "Software Development",
          "title": "Salesforce"
        },
        {
          "Links": "https://www.linkedin.com/company/tiny-spec-inc?trk=similar-pages",
          "location": "San Francisco, California",
          "subtitle": "Technology, Information and Internet",
          "title": "Slack"
        },
        {
          "Links": "https://www.linkedin.com/company/google?trk=similar-pages",
          "location": "Mountain View, CA",
          "subtitle": "Software Development",
          "title": "Google"
        },
        {
          "Links": "https://au.linkedin.com/company/atlassian?trk=similar-pages",
          "location": "Sydney, NSW",
          "subtitle": "Software Development",
          "title": "Atlassian"
        },
        {
          "Links": "https://www.linkedin.com/company/microsoft?trk=similar-pages",
          "location": "Redmond, Washington",
          "subtitle": "Software Development",
          "title": "Microsoft"
        },
        {
          "Links": "https://www.linkedin.com/company/airbnb?trk=similar-pages",
          "location": "San Francisco, CA",
          "subtitle": "Software Development",
          "title": "Airbnb"
        },
        {
          "Links": "https://www.linkedin.com/company/netflix?trk=similar-pages",
          "location": "Los Gatos, CA",
          "subtitle": "Entertainment Providers",
          "title": "Netflix"
        },
        {
          "Links": "https://au.linkedin.com/company/canva?trk=similar-pages",
          "location": "Surry Hills, New South Wales",
          "subtitle": "Software Development",
          "title": "Canva"
        },
        {
          "Links": "https://www.linkedin.com/company/hubspot?trk=similar-pages",
          "location": "Cambridge, Massachusetts",
          "subtitle": "Software Development",
          "title": "HubSpot"
        },
        {
          "Links": "https://www.linkedin.com/company/stripe?trk=similar-pages",
          "location": "South San Francisco, California",
          "subtitle": "Technology, Information and Internet",
          "title": "Stripe"
        }
      ],
      "url": "https://www.linkedin.com/company/zoom",
      "updates": [
        {
          "date": "2026-03-16T19:26:02.112Z",
          "likes_count": 14,
          "post_id": "7439391547403530240",
          "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7439391547403530240/",
          "text": "#ZoomPartner Here's everything that went down with Zoom at Enterprise Connect 2026! Zoom is about way more than meetings - there are so many productivity tools within Zoom Workplace that help ease all those work pain points we experience. #ZoomAhead #JoinTheMovement",
          "text_html": "<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoompartner&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomPartner</a> Here&apos;s everything that went down with <a class=\"link\" href=\"https://www.linkedin.com/company/zoom?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Zoom</a>  at Enterprise Connect 2026! Zoom is about way more than meetings - there are so many productivity tools within Zoom Workplace that help ease all those work pain points we experience. <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoomahead&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomAhead</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fjointhemovement&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#JoinTheMovement</a>",
          "time": "3d",
          "title": "William Bowers",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D4E05AQEJYSUdboIMuQ/mp4-720p-30fp-crf28/B4EZzp1GL3IECI-/0/1773449543327?e=2147483647&v=beta&t=XLOG2RhOkVdK0WCo2csao7InOl9D_o-Up-adbU0cF7E",
            "https://dms.licdn.com/playlist/vid/v2/D4E05AQEJYSUdboIMuQ/mp4-640p-30fp-crf28/B4EZzp1GL3IEBw-/0/1773449542760?e=2147483647&v=beta&t=Eub-gs_Eia8nV9BmB0h-RLC3UKfuWYJxtpbNZ2D-LKY"
          ]
        },
        {
          "comments_count": 2,
          "date": "2026-03-16T16:37:21.224Z",
          "likes_count": 33,
          "post_id": "7439349097322524672",
          "post_url": "https://www.linkedin.com/posts/zoom_zoom-ai-companion-my-notes-activity-7439349097322524672-uOFe",
          "text": "Remember when taking notes felt like a chore? 📝 Let AI Companion My notes do the heavy lifting for you. 💪 Now your notes capture key moments, surface important actions, and help you stay organized — automatically. ✔️ Try it today 🔗 👇",
          "text_html": "Remember when taking notes felt like a chore? &#x1F4DD;\n\nLet AI Companion My notes do the heavy lifting for you. &#x1F4AA;\n\nNow your notes capture key moments, surface important actions, and help you stay organized &#x2014; automatically. &#x2714;&#xFE0F;\n\nTry it today &#x1F517; &#x1F447; ",
          "time": "17h",
          "title": "Zoom",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D5610AQFq8-Z6_G0ynA/mp4-720p-30fp-crf28/B56Zz3ghwUJ8CA-/0/1773679031499?e=2147483647&v=beta&t=tpors2KuQeHa6A91xjIZzYYuwDgZ0YTYCDo9qvBnuE8",
            "https://dms.licdn.com/playlist/vid/v2/D5610AQFq8-Z6_G0ynA/mp4-360p-30fp-crf28/B56Zz3ghwUJ8B8-/0/1773679030921?e=2147483647&v=beta&t=wX73ec8ifCfUs71QZ3IaIzJN-vVqeUdP2xJYgY3MwRA",
            "https://dms.licdn.com/playlist/vid/v2/D5610AQFq8-Z6_G0ynA/mp4-640p-30fp-crf28/B56Zz3ghwUJ8Bk-/0/1773679030920?e=2147483647&v=beta&t=6bJS4S1iuCl6PCAS7TMuaOjD68Df4ErjiDwyZbpIysM"
          ]
        },
        {
          "comments_count": 1,
          "date": "2026-03-16T14:01:13.970Z",
          "likes_count": 36,
          "post_id": "7439309808211660800",
          "post_url": "https://www.linkedin.com/posts/zoom_enterpriseconnect-activity-7439309808211660800-sS8s",
          "text": "Missed the Zoom keynote at #EnterpriseConnect ? Here's your chance to get a first look at Zoom’s latest innovations in AI and orchestration. ⚡ Work today is full of complexity: too many tools, back-to-back meetings, and endless tasks that slow meaningful progress. This friction impacts everyone: IT teams struggle to orchestrate workflows, customer-facing teams wrestle with fragmented data, and small and mid-size businesses find it hard to scale efficiently.",
          "text_html": "Missed the Zoom keynote at <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a>? Here&apos;s your chance to get a first look at Zoom&#x2019;s latest innovations in AI and orchestration. &#x26A1; \n\nWork today is full of complexity: too many tools, back-to-back meetings, and endless tasks that slow meaningful progress. This friction impacts everyone: IT teams struggle to orchestrate workflows, customer-facing teams wrestle with fragmented data, and small and mid-size businesses find it hard to scale efficiently.",
          "time": "20h",
          "title": "Zoom"
        },
        {
          "date": "2026-03-13T19:00:30.157Z",
          "likes_count": 36,
          "post_id": "7438297958321745920",
          "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7438297958321745920/",
          "text": "#ZoomPartner Mind blown by all the product features Zoom Al Companion has introduced to make work more productive #ZoomAhead #JoinTheMovement",
          "text_html": "<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoompartner&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomPartner</a> Mind blown by all the product features <a class=\"link\" href=\"https://www.linkedin.com/company/zoom?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Zoom</a> Al Companion has introduced to make work more productive <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoomahead&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomAhead</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fjointhemovement&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#JoinTheMovement</a>",
          "time": "4d",
          "title": "Jonjon Perlas",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D5605AQFX_Y-7gNo6pQ/mp4-640p-30fp-crf28/B56ZzkKvIWKMBw-/0/1773354552092?e=2147483647&v=beta&t=DpI4CxpjD6LPqV-0o8rQc6-wehwrXkLoTARZk6au0D8",
            "https://dms.licdn.com/playlist/vid/v2/D5605AQFX_Y-7gNo6pQ/mp4-720p-30fp-crf28/B56ZzkKvIWKMCI-/0/1773354550978?e=2147483647&v=beta&t=G2Joz_R3qdMHWsIvsiabC6rBn-tce7s_8lc75sfWU9c"
          ]
        },
        {
          "comments_count": 2,
          "date": "2026-03-13T16:13:15.946Z",
          "images": [
            "https://media.licdn.com/dms/image/v2/D5612AQFyetvdvO6pnQ/article-cover_image-shrink_720_1280/B56Zzlo8NsJIAI-/0/1773379247714?e=2147483647&v=beta&t=N8kACz_0w2ni-81Y4JCPGuJYbOoDpjd1bv2LLNWiyrU"
          ],
          "likes_count": 82,
          "post_id": "7438255871790460928",
          "post_url": "https://www.linkedin.com/posts/zoom_turn-lets-follow-up-into-finished-work-activity-7438255871790460928-n4kw",
          "text": "At Enterprise Connect , we unveiled new innovations for Zoom Workplace designed to help teams move from conversation to completion. In our latest newsletter, Leo Boulton , Head of Product, Solutions, and Industry Marketing at Zoom, dives into these innovations and explains what this shift looks like in practice—and how AI can help reduce the friction that slows teams down. He breaks down: 🚀 What a “system of action” means for the future of work ✨ How Zoom AI Companion can help turn discussions into deliverables 💥 Why meeting friction is holding teams back Read the full newsletter below and let us know in the comments which innovation you’re most excited about. 👇 #EnterpriseConnect",
          "text_html": "At <a class=\"link\" href=\"https://uk.linkedin.com/company/enterpriseconnect?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Enterprise Connect</a>, we unveiled new innovations for Zoom Workplace designed to help teams move from conversation to completion.\n\nIn our latest newsletter, <a class=\"link\" href=\"https://www.linkedin.com/in/leoboulton?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Leo Boulton</a>, Head of Product, Solutions, and Industry Marketing at Zoom, dives into these innovations and explains what this shift looks like in practice&#x2014;and how AI can help reduce the friction that slows teams down.\n\nHe breaks down:\n&#x1F680; What a &#x201C;system of action&#x201D; means for the future of work\n&#x2728; How Zoom AI Companion can help turn discussions into deliverables\n&#x1F4A5; Why meeting friction is holding teams back\n\nRead the full newsletter below and let us know in the comments which innovation you&#x2019;re most excited about. &#x1F447;\n\n<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a>",
          "time": "3d",
          "title": "Zoom"
        },
        {
          "date": "2026-03-12T23:20:43.792Z",
          "likes_count": 65,
          "post_id": "7438001058787868672",
          "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7438001058787868672/",
          "text": "#ZoomPartner l'm here at Enterprise Connect to see the latest innovations from the Zoom Booth. Impressed by all the product features Zoom has introduced with Al Companion to help make me more productive. #ZoomAhead #JoinTheMovement",
          "text_html": "<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoompartner&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomPartner</a> l&apos;m here at Enterprise Connect to see the latest innovations from the <a class=\"link\" href=\"https://www.linkedin.com/company/zoom?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Zoom</a>  Booth. Impressed by all the product features Zoom has introduced with Al Companion to help make me more productive. <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fzoomahead&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#ZoomAhead</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fjointhemovement&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#JoinTheMovement</a>",
          "time": "5d",
          "title": "William Bowers",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D4E05AQGCUmvQ_h-5xg/mp4-720p-30fp-crf28/B4EZzfC3UoHsCM-/0/1773268602681?e=2147483647&v=beta&t=pOf4vR8UU9URucZp8A9-nVehFDURjabY9Z9JyNfBIxk",
            "https://dms.licdn.com/playlist/vid/v2/D4E05AQGCUmvQ_h-5xg/mp4-640p-30fp-crf28/B4EZzfC3UoHsB0-/0/1773268602681?e=2147483647&v=beta&t=ogoGLE1vVNdSjLRgWv-Yk0YA-OAuAmr15hVieHHqKKw"
          ]
        },
        {
          "comments_count": 2,
          "date": "2026-03-12T18:25:13.067Z",
          "likes_count": 22,
          "post_id": "7437926690737049600",
          "post_url": "https://www.linkedin.com/posts/zoom_enterpriseconnect-activity-7437926690737049600-zWRU",
          "repost": {
            "repost_date": "202***3-1***7:1*********",
            "repost_hangtags": [
              "******",
              "******",
              "******",
              "#Ag***ic",
              "******"
            ],
            "repost_id": "743***776***610******",
            "repost_text": "Goo***nou***isn*********nou*********************es ***************************************************************************************************************************************************************************************************************",
            "repost_title": "Dav***ich***",
            "repost_url": "htt***//w***lin*********/fe*********************vit************************",
            "tagged_companies": [
              {
                "link": "htt***//w***lin*********/co*********************zat***************************************",
                "name": "******",
                "type": "company"
              }
            ],
            "tagged_users": [
              {
                "link": "htt***//w***lin*********/in*********************iza***************************************",
                "name": "Leo Boulton",
                "type": "people"
              }
            ],
            "videos": [
              "htt***//d***lic*********ayl*********************sPQ******************************************************************************************************************************",
              "htt***//d***lic*********ayl*********************sPQ******************************************************************************************************************************"
            ]
          },
          "text": "Great discussion from Dave Michels following the Enterprise Connect keynote. 🙌 As Leo Boulton , Head of Product, Solutions, and Industry Marketing at Zoom shared: 💬 “System of action is how we progress from a conversation to completion…the system of action is the framework underneath it. We talked about system of record which is more data centric...AI has been changing that. It's about the action that is performed by AI. When AI needs to capture insights, that conversation layer we're talking about needs to support and substantiate the actions that are performed. We're orchestrating the action of work.\" Check out the full conversation here. 👇 #EnterpriseConnect",
          "text_html": "Great discussion from <a class=\"link\" href=\"https://www.linkedin.com/in/davemichels?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Dave Michels</a> following the <a class=\"link\" href=\"https://uk.linkedin.com/company/enterpriseconnect?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Enterprise Connect</a> keynote. &#x1F64C;\n\nAs <a class=\"link\" href=\"https://www.linkedin.com/in/leoboulton?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Leo Boulton</a>, Head of Product, Solutions, and Industry Marketing at Zoom shared:\n\n&#x1F4AC; &#x201C;System of action is how we progress from a conversation to completion&#x2026;the system of action is the framework underneath it. We talked about system of record which is more data centric...AI has been changing that. It&apos;s about the action that is performed by AI. When AI needs to capture insights, that conversation layer we&apos;re talking about needs to support and substantiate the actions that are performed. We&apos;re orchestrating the action of work.&quot;\n\nCheck out the full conversation here. &#x1F447;\n\n<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a>",
          "time": "4d",
          "title": "Zoom",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D5605AQFTOsPQPO90LA/mp4-720p-30fp-crf28/B56Zzg50JWKUCM-/0/1773299879942?e=2147483647&v=beta&t=JorMvMOCh-nKPefhc1iYnIbPbmHQIwnshO1At-TqjZs",
            "https://dms.licdn.com/playlist/vid/v2/D5605AQFTOsPQPO90LA/mp4-640p-30fp-crf28/B56Zzg50JWKUB0-/0/1773299859947?e=2147483647&v=beta&t=Nf7fIU7mN3ipy8kFj01jCrjYZnZLXqctn9Xkz5t2Vm8"
          ]
        },
        {
          "comments_count": 1,
          "date": "2026-03-11T18:50:11.079Z",
          "likes_count": 79,
          "post_id": "7437570585989124099",
          "post_url": "https://www.linkedin.com/posts/zoom_conversation-to-completion-activity-7437570585989124099-uYtQ",
          "text": "Meetings don’t slow work down. Endless follow-ups do. 🫠 94% of employees say friction is slowing them down. 🐌 Why? Context gets lost between preparation, discussion, and follow-up. At Zoom, we focused on giving you the tools to drive Conversation ➡️ Completion. With AI Companion, tasks flow naturally, so teams spend less time chasing context and more time driving decisions forward. ✨ #EnterpriseConnect",
          "text_html": "Meetings don&#x2019;t slow work down. Endless follow-ups do. &#x1FAE0;\n\n94% of employees say friction is slowing them down. &#x1F40C;\n\nWhy? Context gets lost between preparation, discussion, and follow-up.\n\nAt Zoom, we focused on giving you the tools to drive Conversation &#x27A1;&#xFE0F; Completion. \n\nWith AI Companion, tasks flow naturally, so teams spend less time chasing context and more time driving decisions forward. &#x2728;\n\n<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a>",
          "time": "5d",
          "title": "Zoom",
          "videos": [
            "https://dms.licdn.com/playlist/vid/v2/D5610AQH5CIOh97Lpww/mp4-720p-30fp-crf28/B56ZzePBSzJkCA-/0/1773255008652?e=2147483647&v=beta&t=xm2AQU192ejkgZQNj4A3C6HVaTVzbcMwuYRUGJPON0I",
            "https://dms.licdn.com/playlist/vid/v2/D5610AQH5CIOh97Lpww/mp4-360p-30fp-crf28/B56ZzePBSzJkB8-/0/1773255008653?e=2147483647&v=beta&t=SA88DFW7pDlf5o34Pg-F4GmjeY_pL3d6ix4Uf57jQNE",
            "https://dms.licdn.com/playlist/vid/v2/D5610AQH5CIOh97Lpww/mp4-640p-30fp-crf28/B56ZzePBSzJkBk-/0/1773255008653?e=2147483647&v=beta&t=GAoyPtRISNkCJVbU_75fIG92tDcFQCoQLRLpzucaVfc"
          ]
        },
        {
          "comments_count": 2,
          "date": "2026-03-10T23:47:39.433Z",
          "images": [
            "https://media.licdn.com/dms/image/v2/D5622AQFNx1LWnmJw6A/feedshare-shrink_1280/B56ZzaJh3zGgAM-/0/1773186457356?e=2147483647&v=beta&t=4SgrmeXNZaO4bui8FQycnxbWxbEXowlnNxVmCpFBsZc",
            "https://media.licdn.com/dms/image/v2/D5622AQF4OfdDTczLIA/feedshare-shrink_800/B56ZzaJh5xHIAc-/0/1773186457499?e=2147483647&v=beta&t=AhvCx0PgZPYRKdWGtWYFIXT-VZLLsW3swwlhAU2VGqo",
            "https://media.licdn.com/dms/image/v2/D5622AQESoAZHI4VUew/feedshare-shrink_1280/B56ZzaJh8xGgAM-/0/1773186457681?e=2147483647&v=beta&t=vN9KpnNBP-9qFc1VaPTbrfUZn7vE-s7M_Mfzvw84ZXo",
            "https://media.licdn.com/dms/image/v2/D5622AQHfoDT_kvNf_w/feedshare-shrink_2048_1536/B56ZzaJh8aGQAg-/0/1773186457654?e=2147483647&v=beta&t=nlP2i-bLo6H36F9u1z8gaELFXHWNgbcLtiloMkR_mJo"
          ],
          "likes_count": 218,
          "post_id": "7437283059546284032",
          "post_url": "https://www.linkedin.com/posts/zoom_enterpriseconnect-activity-7437283059546284032-UFKx",
          "text": "At #EnterpriseConnect , we’re showcasing how Zoom is transforming the way organizations operate—by eliminating friction and connecting every part of work into one seamless system of action. Stop by our booth to experience how our unified platform turns communication into momentum.",
          "text_html": "At <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a>, we&#x2019;re showcasing how Zoom is transforming the way organizations operate&#x2014;by eliminating friction and connecting every part of work into one seamless system of action.\n\nStop by our booth to experience how our unified platform turns communication into momentum.",
          "time": "6d",
          "title": "Zoom"
        },
        {
          "comments_count": 2,
          "date": "2026-03-10T21:00:34.504Z",
          "likes_count": 151,
          "post_id": "7437241011946377216",
          "post_url": "https://www.linkedin.com/posts/zoom_zoom-innovations-from-ec-2026-activity-7437241011946377216-_rC2",
          "text": "We’re announcing major Zoom innovations at Enterprise Connect this week—and you’re getting the first look. 🚀 Swipe through for a sneak peek at what’s coming. Full details in the comments. ✨ Which of these are you most excited about? 💬 #EnterpriseConnect | Enterprise Connect",
          "text_html": "We&#x2019;re announcing major Zoom innovations at Enterprise Connect this week&#x2014;and you&#x2019;re getting the first look. &#x1F680;\n\nSwipe through for a sneak peek at what&#x2019;s coming. Full details in the comments. &#x2728;\n\nWhich of these are you most excited about? &#x1F4AC;\n\n<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fenterpriseconnect&amp;trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>#EnterpriseConnect</a> | <a class=\"link\" href=\"https://uk.linkedin.com/company/enterpriseconnect?trk=organization_guest_main-feed-card-text\" target=\"_self\" data-tracking-control-name=\"organization_guest_main-feed-card-text\" data-tracking-will-navigate>Enterprise Connect</a> ",
          "time": "6d",
          "title": "Zoom"
        }
      ],
      "slogan": "AI-First Work Platform for Human Connection ✨",
      "affiliated": [
        {
          "Links": "https://www.linkedin.com/showcase/zoom-ventures/?trk=affiliated-pages",
          "location": "San Jose, California",
          "subtitle": "Venture Capital and Private Equity Principals",
          "title": "Zoom Ventures"
        },
        {
          "Links": "https://www.linkedin.com/showcase/zoom-docs/?trk=affiliated-pages",
          "location": null,
          "subtitle": "IT Services and IT Consulting",
          "title": "Zoom Docs"
        },
        {
          "Links": "https://www.linkedin.com/showcase/zoom-revenue-accelerator/?trk=affiliated-pages",
          "location": null,
          "subtitle": "IT Services and IT Consulting",
          "title": "Zoom Revenue Accelerator"
        },
        {
          "Links": "https://www.linkedin.com/showcase/zoom-clips/?trk=affiliated-pages",
          "location": null,
          "subtitle": "IT Services and IT Consulting",
          "title": "Zoom Clips"
        },
        {
          "Links": "https://www.linkedin.com/showcase/zoom-whiteboard/?trk=affiliated-pages",
          "location": null,
          "subtitle": "IT Services and IT Consulting",
          "title": "Zoom Whiteboard"
        },
        {
          "Links": "https://www.linkedin.com/showcase/zoom-scheduler/?trk=affiliated-pages",
          "location": null,
          "subtitle": "IT Services and IT Consulting",
          "title": "Zoom Scheduler"
        }
      ],
      "funding": {
        "last_round_date": "2021-12-04T00:00:00.000Z",
        "last_round_raised": "US$ 130.0M",
        "last_round_type": "Post IPO equity",
        "rounds": 9
      },
      "investors": [
        "ARK Investment Management"
      ],
      "formatted_locations": [
        "55 Almaden Blvd., 6th Floor, San Jose, CA 95113, San Jose, CA 95113, US",
        "Level 1, 9 Castlereagh St, Sydney, NSW 2000, AU",
        "8000 Avalon Blvd, Suite 100, space 216, Alpharetta, Georgia 30008, US",
        "7601 E Technology Way, 3rd Floor, Denver, Colorado 80237, US",
        "6601 College Blvd, Suite 120, Overland Park, Kansas 66211, US",
        "200 E Carrillo St, Suite #300, Santa Barbara, California 93101, US",
        "The Place, 4th Floor, 175 High, Holborn, London WC1V 7AA, GB",
        "Zoom France, 33 Rue lafayette, lafayette, Paris 75009, FR",
        "6 Temasek Boulevard, Suntec Tower 5 #17-103, Singapore, SGP 038985, SG",
        "Wework Hibiya park Front, 19th floor, 2-1-6 Uchisaiwai-cho, Chiyoda-ku, Tokyo 100-0011, JP",
        "Wework 5th floor, Strawinskylaan 4117, Strawinskylaan, Amsterdam 1077 ZX, NL"
      ],
      "stock_info": null,
      "get_directions_url": [
        {
          "directions_url": "https://www.bing.com/maps?where=55+Almaden+Blvd.%2C+6th+Floor%2C+San+Jose%2C+CA+95113+San+Jose+95113+CA+US&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=Level+1%2C+9+Castlereagh+St+Sydney+2000+NSW+AU&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=8000+Avalon+Blvd++Suite+100%2C+space+216+Alpharetta+30008+Georgia+US&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=7601+E+Technology+Way+3rd+Floor+Denver+80237+Colorado++US&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=6601+College+Blvd+Suite+120+Overland+Park+66211+Kansas++US&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=200+E+Carrillo+St+Suite+%23300+Santa+Barbara+93101+California+US&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=The+Place%2C+4th+Floor%2C+175+High+Holborn+WC1V+7AA+London+GB&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=Zoom+France%2C+33+Rue+lafayette+lafayette+75009+Paris++FR&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=6+Temasek+Boulevard+Suntec+Tower+5+%2317-103+Singapore+038985+SGP+SG&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=Wework+Hibiya+park+Front+19th+floor%2C+2-1-6+Uchisaiwai-cho+Chiyoda-ku+100-0011+Tokyo+JP&trk=org-locations_url"
        },
        {
          "directions_url": "https://www.bing.com/maps?where=Wework+5th+floor%2C+Strawinskylaan+4117+Strawinskylaan+1077+ZX+Amsterdam++NL&trk=org-locations_url"
        }
      ],
      "description": "Zoom | 653,039 followers on LinkedIn. AI-First Work Platform for Human Connection ✨ | Bring teams together, reimagine workspaces, engage new audiences, and delight your customers –– all on the Zoom AI-first work platform you know and love. 💙\n\nZoomies help people stay connected so they can get more done together. We set out on a mission to make video communications frictionless and secure by building the world’s best video product for the enterprise, but we didn’t stop there. With products like AI Companion, Team Chat, Contact Center, Phone, Events, Rooms, Webinar, Contact Center and more, we bring innovation to a wide variety of customers, from the conference room to the classroom, from doctor’s offices to financial institutions to government agencies, from global brands to small businesses.",
      "additional_information": "Additional jobs info: Zoom (27,487 open jobs). Engineer (555,845 open jobs). Manager (1,880,925 open jobs). Analyst (694,057 open jobs). Account Executive (71,457 open jobs). Project Manager (253,048 open jobs). Account Manager (121,519 open jobs). Associate (1,091,945 open jobs). Marketing Manager (106,879 open jobs). Director (1,220,357 open jobs). Specialist (768,666 open jobs). Enterprise Account Executive (44,389 open jobs). Executive (690,514 open jobs). Developer (258,935 open jobs). Product Designer (45,389 open jobs). Scientist (48,969 open jobs). Intern (71,196 open jobs). Site Reliability Engineer (169,128 open jobs). Software Engineer (300,699 open jobs). Consultant (760,907 open jobs)",
      "country_codes_array": [
        "US",
        "AU",
        "GB",
        "FR",
        "SG",
        "JP",
        "NL"
      ],
      "alumni": null,
      "alumni_information": null,
      "website_simplified": "zoo***om",
      "unformatted_about": "\n              Bring teams together, reimagine workspaces, engage new audiences, and delight your customers –– all on the Zoom AI-first work platform you know and love. 💙\n\nZoomies help people stay connected so they can get more done together. We set out on a mission to make video communications frictionless and secure by building the world’s best video product for the enterprise, but we didn’t stop there. With products like AI Companion, Team Chat, Contact Center, Phone, Events, Rooms, Webinar, Contact Center and more, we bring innovation to a wide variety of customers, from the conference room to the classroom, from doctor’s offices to financial institutions to government agencies, from global brands to small businesses.\n\nWe do what we do because of our core value of Care: care for our community, our customers, our company, our teammates, and ourselves. Our global employees help our customers meet happier, communicate better, and create meaningful connections the world over. Zoomies are problem-solvers and self-starters, working hard to get results and moving quickly to design solutions with our customers and users in mind. Here, you'll find room to grow with opportunities to stretch your skills and advance your career in a collaborative, growth-focused environment.\n\nLearn more about careers at Zoom by visiting our careers site: https://careers.zoom.us/home\n          "
    }
  ]
  ```
</ResponseExample>
