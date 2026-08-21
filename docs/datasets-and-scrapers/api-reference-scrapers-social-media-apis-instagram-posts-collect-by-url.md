# Collect Instagram posts by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-posts-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/instagram-posts-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

api-reference/sdk-specs/instagram-posts-collect-by-url POST /datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Instagram posts by URL. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lk5ns7kz21pck8jpis` to collect **Posts by URL** data.
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
      The URL of the Instagram posts to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url":"https://www.instagram.com/p/Cuf4s0MNqNr"},
      {"url":"https://www.instagram.com/p/DP861NijuwE"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://www.instagram.com/p/DIWPWGpsUQX",
      "user_posted": "limabijus",
      "description": "Coleção Laços 💝 Argolinhas cravejadas com micro zircônias em cores R$35,00\n\nParcelamos suas compras em até 12x no cartão \n\nFRETE FIXO PARA TODO PARÁ R$13,00 FRETE FIXO PARA TODO O BRASIL R$27,00\n\nCatálogo no link da bio.\n\n*Aceitamos todos os cartões\n*Pix\n\nLoja aberta das 08:00 as 18:30 Trav. Oriental do mercado. Rua ao lado da antiga Big Ben\n\n#açoinoxidável #açocirurgico #colarfolheado #joia",
      "hashtags": [
        "#a",
        "#a",
        "#colarfolheado",
        "#joia"
      ],
      "num_comments": 0,
      "date_posted": "2025-04-12T13:03:14.000Z",
      "likes": 51,
      "photos": [
        "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/489610375_18494864488028192_2686112351885091669_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=0MufbR7woQgQ7kNvwFygZL-&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzNULCN5FUuEctA0H8JoRjWCeySVi7on4V_3tyVANwEgA&oe=69BD2DFE&_nc_sid=d885a2",
        "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/490407159_18494864497028192_459288836599671444_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=8c3OWbQMg_UQ7kNvwGA-4tO&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzoD8Lfn2JLSIGWOpgggWRS0lM_Nq-kBOJbsWniZW1-Pg&oe=69BD36E2&_nc_sid=d885a2",
        "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/489022963_18494864506028192_5811983443590937317_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=dmtlFzwSrRAQ7kNvwF3cFW1&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxkO5-J0PJ3blG-0l-j2FfZ8JbfvEFMNlkjuFfGyTcbDw&oe=69BD411D&_nc_sid=d885a2",
        "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/490092032_18494864515028192_1690521244685472282_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=qBpqqD5ZCl0Q7kNvwEDczAS&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxTqMfbDWwQY0NuZGyko_XxDlqKSGGZhgNQiSpZOjQnTA&oe=69BD3BB2&_nc_sid=d885a2"
      ],
      "videos": null,
      "location": [
        "Capanema",
        "Pará",
        "Brasil"
      ],
      "latest_comments": null,
      "post_id": "3609139641052120087",
      "discovery_input": null,
      "has_handshake": null,
      "shortcode": "DIWPWGpsUQX",
      "content_type": "Carousel",
      "pk": "3609139641052120087",
      "content_id": "DIWPWGpsUQX",
      "engagement_score_view": null,
      "thumbnail": "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/489610375_18494864488028192_2686112351885091669_n.jpg?stp=c0.147.1284.1284a_dst-jpg_e35_s640x640_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=0MufbR7woQgQ7kNvwFygZL-&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxVSxvfL2zQbtGYyRFK9C75gO2TcK0jY6bsl6Xo1WM0dA&oe=69BD2DFE&_nc_sid=d885a2",
      "video_view_count": null,
      "product_type": null,
      "coauthor_producers": null,
      "tagged_users": null,
      "video_play_count": null,
      "followers": 20674,
      "posts_count": 9676,
      "profile_image_link": "https://scontent-dfw5-2.cdninstagram.com/v/t51.82787-19/637167000_18562755475028192_7282452674783054648_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=w2D-l-4t3yAQ7kNvwG5fhmo&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfwK9IApnYM8GUqE3WY6EC9TiyKRaRbL6JS9314NMLywrQ&oe=69BD3DFE&_nc_sid=d885a2",
      "is_verified": true,
      "is_paid_partnership": false,
      "partnership_details": {
        "profile_id": null,
        "profile_url": null,
        "username": null
      },
      "user_posted_id": "312860191",
      "post_content": [
        {
          "alt_text": "Photo by Lima Bijus on April 12, 2025.",
          "id": "3609139634257469948",
          "index": 0,
          "type": "Photo",
          "url": "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/489610375_18494864488028192_2686112351885091669_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=0MufbR7woQgQ7kNvwFygZL-&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzNULCN5FUuEctA0H8JoRjWCeySVi7on4V_3tyVANwEgA&oe=69BD2DFE&_nc_sid=d885a2"
        },
        {
          "alt_text": "Photo by Lima Bijus on April 12, 2025.",
          "id": "3609139634265835747",
          "index": 1,
          "type": "Photo",
          "url": "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/490407159_18494864497028192_459288836599671444_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=8c3OWbQMg_UQ7kNvwGA-4tO&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfzoD8Lfn2JLSIGWOpgggWRS0lM_Nq-kBOJbsWniZW1-Pg&oe=69BD36E2&_nc_sid=d885a2"
        },
        {
          "alt_text": "Photo by Lima Bijus on April 12, 2025.",
          "id": "3609139634257389672",
          "index": 2,
          "type": "Photo",
          "url": "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/489022963_18494864506028192_5811983443590937317_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=dmtlFzwSrRAQ7kNvwF3cFW1&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxkO5-J0PJ3blG-0l-j2FfZ8JbfvEFMNlkjuFfGyTcbDw&oe=69BD411D&_nc_sid=d885a2"
        },
        {
          "alt_text": "Photo by Lima Bijus on April 12, 2025.",
          "id": "3609139634257475832",
          "index": 3,
          "type": "Photo",
          "url": "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/490092032_18494864515028192_1690521244685472282_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGaMKgfOzjq0wPKSDzaCmtVKzedbmcC6K7R8nhooYRtxVg3ff27v7SxrDXsxdo2W7k&_nc_ohc=qBpqqD5ZCl0Q7kNvwEDczAS&_nc_gid=nqIS79fttxt1Dm7FA1KvtA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfxTqMfbDWwQY0NuZGyko_XxDlqKSGGZhgNQiSpZOjQnTA&oe=69BD3BB2&_nc_sid=d885a2"
        }
      ],
      "audio": {
        "audio_asset_id": null,
        "ig_artist_id": null,
        "ig_artist_username": null,
        "original_audio_title": null
      },
      "profile_url": "https://www.instagram.com/limabijus",
      "videos_duration": null,
      "images": [
        {
          "id": "360***963***746******",
          "url": "htt***//s***ten*********cdn*********************885************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************"
        },
        {
          "id": "360***963***583******",
          "url": "htt***//s***ten*********cdn*********************885************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************"
        },
        {
          "id": "360***963***738******",
          "url": "htt***//s***ten*********cdn*********************885************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************"
        },
        {
          "id": "360***963***747******",
          "url": "htt***//s***ten*********cdn*********************885************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************"
        }
      ],
      "alt_text": "Photo by Lima Bijus on April 12, 2025.",
      "photos_number": 4,
      "audio_url": null
    }
  ]
  ```
</ResponseExample>
