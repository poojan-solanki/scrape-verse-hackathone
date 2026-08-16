# Collect reels by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-reels-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-reels-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/instagram-reels-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Reels by URL. POST /datasets/v3/scrape starts a scraping job that returns the data as structured JSON records.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lyclm20il4r5helnj` to collect **Reels by URL** data.
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
      The URL of the Instagram reels to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input":[
      {"url":"https://www.instagram.com/reel/C5Rdyj_q7YN/"},
      {"url":"https://www.instagram.com/reel/C85BZjeSHuO"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.instagram.com/reel/DVNLU52gCAP/",
      "user_posted": "lanceoca",
      "description": "clingy naman ng bebe na yan 😂😂",
      "hashtags": null,
      "num_comments": 6,
      "date_posted": "2026-02-26T03:23:20.000Z",
      "likes": 3,
      "views": 388,
      "video_play_count": 1890,
      "top_comments": [
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.2885-19/365460701_613557573974169_4246269411584735337_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NTcuYzIifQ&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=1sksn4DLF60Q7kNvwGVdyy-&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfznARNQ0EpZxuYD13_j-z1x5gVSXJzuDNLf27ksGkq9Gg&oe=69BD27FC&_nc_sid=d885a2",
          "comment": "So handsome😍😍😍😍",
          "date_of_comment": "2026-03-05T03:12:12.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "jgmagboo"
        },
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.82787-19/604381380_17846853735621432_1417364464978583437_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=wxn_bgzeNMoQ7kNvwGZZc1t&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzilHku95q5GuC9yL0SW82MZL569Zijwn6C6K-V26ohaA&oe=69BD2DE4&_nc_sid=d885a2",
          "comment": "😢hello handsome",
          "date_of_comment": "2026-03-02T22:51:50.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "mavic6620"
        },
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.2885-19/487313612_1015621063797112_1603884341697763156_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=FDBy91MOg4AQ7kNvwFSG43x&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_Afw_I5Ji5g_FizTfUahhtB2N5dlEHBfF785jDNFXxxLPzw&oe=69BD245E&_nc_sid=d885a2",
          "comment": "Hi there..😍😍🔥",
          "date_of_comment": "2026-02-28T02:47:21.000Z",
          "likes": "1",
          "num_replies": 0,
          "replies": [],
          "user_commenting": "lajas621"
        },
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.82787-19/589404006_17927065818169590_4230007312536318761_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MjAuYzIifQ&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=3cCCnbM9pjkQ7kNvwFuVke7&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfyMahn5ck5AEFFmQUrEH1I7VIWpWjok0AU4EwOZtOwpuw&oe=69BD1C6F&_nc_sid=d885a2",
          "comment": "Wow❤️❤️❤️",
          "date_of_comment": "2026-02-26T08:15:44.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "jennalyn294"
        },
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.82787-19/643610031_18394067647195478_6467437205157259761_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=R1RL_k362XwQ7kNvwHO8U39&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxLuxMSr1rcvJEsa2UrMoP8Lz-wVzC72xQZ1W3-1byjSA&oe=69BD02EE&_nc_sid=d885a2",
          "comment": "iloveyou ❤️❤️❤️😘",
          "date_of_comment": "2026-02-26T06:42:50.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "mhat.memoracion"
        },
        {
          "avatar": "https://scontent-phl2-1.cdninstagram.com/v/t51.82787-19/611627622_18554417668038304_6341390296922072598_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=AJwRgGMf_coQ7kNvwHWBhko&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_Afy9MgvDJ_Jv-SVLKAiJVtHaCVrfqmpEtjYOoBCyj_OKjA&oe=69BD0E87&_nc_sid=d885a2",
          "comment": "Kennyyyyy! 😍😍",
          "date_of_comment": "2026-02-26T03:55:43.000Z",
          "likes": null,
          "num_replies": 0,
          "replies": [],
          "user_commenting": "thatsellengayle"
        }
      ],
      "post_id": "3840775872235708431_497234441",
      "thumbnail": "https://scontent-phl2-1.cdninstagram.com/v/t51.71878-15/642489697_931785695971440_3837333144664180149_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjcxODc4Lm5mcmFtZV9jb3Zlcl9mcmFtZS5jMiJ9&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2QH2Km-HWtG_kFjSkWI-wtXI14TUgdgZN3CffFjRE0mZMwRZwsr6ISXIttcetnv45fU&_nc_ohc=ld-onItfzFIQ7kNvwEGAIZT&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_Afz7i42LKF1TExXZOoZv8OQ6YEd-kZEdzAyk_rUMlaztEw&oe=69BD27F2&_nc_sid=d885a2",
      "shortcode": "DVNLU52gCAP",
      "content_id": "3840775872235708431_497234441_497234441",
      "product_type": "clips",
      "coauthor_producers": [],
      "tagged_users": [],
      "length": "15.033",
      "video_url": "https://scontent-phl2-1.cdninstagram.com/o1/v/t16/f2/m69/AQO1SuMyUcs1QWW58Fau44ndzK-6SmNd445DizWdt8WagvA2o9UAYpZcn6CfH_Wp3E9pH-k4PDImZiE6IJf87aVm.mp4?strext=1&_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-phl2-1.cdninstagram.com&_nc_ohc=fra74Acli5UQ7kNvwG-BbIe&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc5NDkxMzUwMjQxMDE5MjYsImFzc2V0X2FnZV9kYXlzIjoxNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2267dea350fbd465&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSFE0LXlXa1JiMzJYa3dEQU9yaEtYTkZyOHRxYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0ZDNENBQjg2Q0VFNTU3RkU5NDZBQUYzNTNGNDFGNkI3X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbM6JiSlaniPxUCKAJDMywXQC4Q5WBBiTcYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=1nVoOKHoCkOl8-av4Iwgkg&_nc_ss=8&_nc_zt=28&oh=00_Afws7Cm4DuKLxHAjheCqUW1fe2al52lZbgUNRHbiXa_H0g&oe=69BD1196",
      "audio_url": "https://www.instagram.com/reels/audio/613780965138542",
      "posts_count": 2319,
      "followers": 94671,
      "following": null,
      "user_profile_url": "htt***//w***ins*********m/l*********",
      "is_paid_partnership": false,
      "is_verified": true,
      "profile_image_link": "https://scontent-mia5-1.cdninstagram.com/v/t51.82787-19/523513088_18520152235018442_1378657946459904137_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QEI4iViNi0YUmtNR4gwjlifNoniCz1nfEs1XGRXQW5VtoNDlwCKdVe_ayxZrKVC3JI&_nc_ohc=jOf5V5nROFYQ7kNvwFvWJah&_nc_gid=2ag63x5Aw5-NL2Fq6v6jhw&edm=APs17CUBAAAA&ccb=7-5&oh=00_Afy_XwPZFp_gUapVcrmQwXkvlRmt0xThqroTeB2ERmWtBQ&oe=69BD0AE6&_nc_sid=10d13b"
    }
  ]
  ```
</ResponseExample>
