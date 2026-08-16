# Collect all reels

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-reels-collect-all](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-reels-collect-all)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect All Reels. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lyclm20il4r5helnj` to collect **all Reels** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `url_all_reels`.
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
      The URL of the Instagram profile.
    </ParamField>

    <ParamField type="number">
      The number of recent posts to collect, missing value indicates no limit.
    </ParamField>

    <ParamField type="string[]">
      Post IDs not to include
    </ParamField>

    <ParamField type="integer">
      Start date filter `MM-DD-YYYY` (should be earlier than "end\_date")
    </ParamField>

    <ParamField type="integer">
      End date filter `MM-DD-YYYY` (should be later than "start\_date")
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input":[
      {
        "url":"https://www.instagram.com/billieeilish",
        "num_of_posts":20,
        "start_date":"",
        "end_date":""
      }
    ]
  }
  ```
</ParamField>

## Response

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.instagram.com/reel/DH_cMAXRIQY/",
      "user_posted": "abracadabraboutique",
      "description": "Conjunto súper cómodo y moderno. Sólo en Abracadabra 😍🔥💣\n\n#indumentariafemenina🛍❤️ #indumentaria #calzado #calzadomujer #nuevosingresos #nuevatemporada #nuevacoleccion",
      "hashtags": [
        "#indumentariafemenina🛍❤️",
        "#indumentaria",
        "#calzado",
        "#calzadomujer",
        "#nuevosingresos",
        "#nuevatemporada",
        "#nuevacoleccion"
      ],
      "num_comments": 4,
      "date_posted": "2025-04-03T16:34:48.000Z",
      "likes": 73,
      "views": 1693,
      "video_play_count": 4080,
      "top_comments": [
        {
          "avatar": "https://scontent-atl3-3.cdninstagram.com/v/t51.2885-19/393981808_832592148654287_1960908302402060583_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MjAuYzIifQ&_nc_ht=scontent-atl3-3.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QF0G7IbSpPio3Hk0geAsBVs2gJ4jQeCifkDkpVXMic-p0t41OMEOyF50VHHXvTi6d4&_nc_ohc=N_kA__8Fo5wQ7kNvwFS6Ger&_nc_gid=pnnR8ImgSAoQzGLidPzdEw&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfwkK1Yv4wY0i8oerxqGDvXaONq8-9om9I2Z-yDsAH6DCQ&oe=69BE5B3D&_nc_sid=d885a2",
          "comment": "Muy lindo. Las zapatillas también.",
          "date_of_comment": "2025-04-14T15:10:42.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "bonaviaveronica"
        },
        {
          "avatar": "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/500977030_18047146628618941_2751835955884791848_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QF0G7IbSpPio3Hk0geAsBVs2gJ4jQeCifkDkpVXMic-p0t41OMEOyF50VHHXvTi6d4&_nc_ohc=sV0auIHjCWsQ7kNvwH_cdH2&_nc_gid=pnnR8ImgSAoQzGLidPzdEw&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzwL5BtKXDZwJm0ZT7X9FBn5oSmAh2nsfJ77cnvenymxw&oe=69BE5B0A&_nc_sid=d885a2",
          "comment": "Marca ?",
          "date_of_comment": "2025-04-03T17:16:13.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "sildiazperxes1907"
        },
        {
          "avatar": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/271473593_643386380192898_2112725622111954980_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjAuYzIifQ&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QF0G7IbSpPio3Hk0geAsBVs2gJ4jQeCifkDkpVXMic-p0t41OMEOyF50VHHXvTi6d4&_nc_ohc=wrE6O4hs60oQ7kNvwHBe6eU&_nc_gid=pnnR8ImgSAoQzGLidPzdEw&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxsNB2qldAzzK1-ksczsJBCwlZlZGpknDcrkiyrMZodrg&oe=69BE5317&_nc_sid=d885a2",
          "comment": "Precio?",
          "date_of_comment": "2025-04-03T16:41:45.000Z",
          "likes": null,
          "num_replies": 1,
          "replies": [
            {
              "date_of_comment": "2025-04-03T17:23:50.000Z",
              "likes": 0,
              "reply": "@riosjuanabeatriz Hola! Este conjunto está $348.000",
              "user_commenting": "abracadabraboutique"
            }
          ],
          "user_commenting": "riosjuanabeatriz"
        }
      ],
      "post_id": "3602722197246084120_1486153738",
      "thumbnail": "https://scontent-atl3-1.cdninstagram.com/v/t51.71878-15/488612825_1867165924020579_4916815125896091111_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjcxODc4LmRlZmF1bHRfY292ZXJfZnJhbWUuYzIifQ&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QF0G7IbSpPio3Hk0geAsBVs2gJ4jQeCifkDkpVXMic-p0t41OMEOyF50VHHXvTi6d4&_nc_ohc=RkqxlEWnOyIQ7kNvwFv_VP7&_nc_gid=pnnR8ImgSAoQzGLidPzdEw&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxcSq1X40zFDMkIhbIx9bweNxizpVgJddTQrWFQTAgGmA&oe=69BE4868&_nc_sid=d885a2",
      "shortcode": "DH_cMAXRIQY",
      "content_id": "3602722197246084120_1486153738_1486153738",
      "product_type": "clips",
      "coauthor_producers": [],
      "tagged_users": [],
      "length": "79.233",
      "video_url": "https://scontent-atl3-1.cdninstagram.com/o1/v/t2/f2/m367/AQP7aYGDohumTP89gcgkkJucB1zmpXBDI3LjFQvlbLwww5fmQdlunmM-s2TyYU77AXScuYUDuz4nexOXZHSsIHloL0OrtqyZIsblTuk.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=87WnVgH0XycQ7kNvwHaewxU&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjExNzc4Mzc4NTI3OTAwLCJhc3NldF9hZ2VfZGF5cyI6MzQ3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NzksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=cd0c2157c0c0896a&_nc_vs=HBksFQIYQGlnX2VwaGVtZXJhbC8wMjQ3QzYxRTA3NTJDRTRFNUM5QTNEQ0U1NDc2QURBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yMDE2Nzc5ODAyMTc4MjI1XzE1NzQ5MjY2Nzg1ODE0ODI5MDIubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJrjS946YmpYCFQIoAkMzLBdAU9EGJN0vGxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gdl5p0BAA&_nc_gid=pnnR8ImgSAoQzGLidPzdEw&_nc_ss=8&_nc_zt=28&oh=00_AfxgMJ-f72cLigTUYmJnGOgWUL44sVlMMgqbNbbEWwAwaA&oe=69BE3F57",
      "audio_url": "https://www.instagram.com/reels/audio/620087377687453",
      "posts_count": 2088,
      "followers": 13136,
      "following": null,
      "user_profile_url": "htt***//w***ins*********m/a*********************",
      "is_paid_partnership": false,
      "is_verified": false,
      "profile_image_link": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/68842937_227118391542205_7583241919069683712_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby40MDkuYzIifQ&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QFoakMwk_BffRbxQUziAUQhhh9xn4M_e3jy682uv2MdFhBkjMB2Xvp9Q1YHauIRl6A&_nc_ohc=ETxaEddFQGEQ7kNvwH-RMVe&_nc_gid=RePH33uhj8xbft4ltJmUeg&edm=APs17CUBAAAA&ccb=7-5&oh=00_Afx2LTpuEXBvMtLGqvSskEE87byrU1Mg8QS8q6VTeI0mEw&oe=69BE5832&_nc_sid=10d13b"
    }
  ]
  ```
</ResponseExample>
