# Google Reviews localization

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-reviews/localization](https://docs.brightdata.com/api-reference/serp/google-reviews/localization)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Reviews Google Reviews localization parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```txt wrap theme={null}
https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de
```

## Parameters

<ParamField type="string">
  Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.
</ParamField>

<ParamField type="string">
  Preferred language, two-letter language code

  ```txt wrap theme={null}
  https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de"
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
        url: 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de',
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
      'url': 'https://www.google.com/reviews?fid=0x89c25855c0679529:0x2a34371cb33f3c80&hl=de',
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
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2xOT2RtRlllRFJKYTBnMWFrWnhhRnBtWkVGdmFuYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjV5gtd6dYV7Lvhu20tzKXYYwMuI09-X0aFVeeZHhGHlQc15qxCD=s120-c-rp-mo-ba4-br100",
          "display_name": "N. D.",
          "link": "https://www.google.com/maps/contrib/106942246120347351039?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xOT2RtRlllRFJKYTBnMWFrWnhhRnBtWkVGdmFuYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOlNOdmFYeDRJa0g1akZxaFpmZEFvanc%7C0d8Sijb1Tmu%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "vor 3 Monaten",
        "date": "2025-11-25",
        "comment": "Hilton, wie man es kennt. Auch in seiner Preisklasse. Günstig und gut geht wo anders auch. Die Lage ist top! Zimmer leider ohne Kaffeemaschine. Im Zuge einer mehrtägigen Veranstaltung kam klar zum Vorschein, dass sich der Aufzug zu einer zeitlichen Herausforderung gestaltet...um nicht zu sagen, eine Katastrophe ist. Ein Grund, warum vereinzelt Teilnehmer ein Hotel gegenüber gebucht haben.\nGrundsätzlich ein freundlicher Empfang.\nWovon wir klar Abstand genommen haben, war der hausinterne \"Markt\". Da sind Apothekenpreise noch harmlos. Hier haben wir zwei Straßen weiter einen genialen Supermarkt entdeckt, der keine Wünsche offen läßt, um die Minibar zu füllen, welche übrigens total leer war...zu unserer leichten Enttäuschung.\nAlles in allem sieht mich NYC definiv wieder. Stadtverliebt...",
        "review_reply": "Thank you for being our guest and sharing your experience. We’re glad to hear the fantastic location and the friendliness of the team stood out during your visit. At the same time, we understand that not everything met your expectations. Your notes are helpful as we continue looking for ways to enhance comfort and ease for our guests. We appreciate your perspective and hope that on your next trip to New York, we can offer a stay that feels more in line with what you were hoping for.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "vor 2 Monaten",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvpZEDxYyKaTlHOKBSsxcgHubulSh0cH-6nZfs15bae6xs3C3nylcZDXqbo-selkWUd24v0uv4V4qtZF2al3U5D8fM323pCe1TdaJW99h9w-ew5ySoGuxFl027PwBdygbM4NArzr6YRuE4D",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puhfI4e--YHFvELu8JP1DuD0bysmpmf6sKVqIHHe9XRFda3sIUCqSSrMuseUSuCPCuk9mDwxjHpmMFCsCEVUyl2GQ7H3vtELTMz5SXnGbMhrOkUkPKBhh7b52J9m1FBJ4bp28TPEQ2jy-o8",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psL1uA4fh-0XpvIIgXgvbrfyfu8ZZFcKbLoxFH5eLfgKqQuJMwjvvTfvCFcbqjHKxvNkJWxQ4kf55NNHl2Gvg3Q3p9xPk2dyX-Q_B-OWARWyiA0ozlLXPKG8z2Go_xWaU622o_i39eeI5xx",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psB_6iJsBELQK1zS5xbnZ_LPMMPONHzb4C1ghMv0faDDWbrjmlUUkp5SiMcIKsXhn05Go0ufdZfSz77mlhLDGL3WYCiLBv8Y-FJK1dLACGANd0162Icgf3-I-DV-EHaN8tG4QwzFMASc5mr",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psWWyPJKenSWHpuhSiMDwL7YO30Zo-EhP7XUmi_ItNtoxH-cdoBC8JozSG1I0wmDFXkkqUYR29DlC1i7MRk5gldyoO1SatJi1qH6XTz92jZ9NYxPjLbgekethhpv_Jz4thE5pbcavCKbKIp",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptrEZAHF1Otczr7nZfe28InIQxJJbGJcu2_I-I36vCKuJmmy0P1LOK_wHTMF9XYtZN1ncD-98tqqajaERqMWRXNyyonDuqRY0pYhBrQbRj9FBbm42-GQzoeomcCD1H3Lg18Aby4alDGdx8o",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psE3NHBwTsHFja_pvrFIise1G49AdT_SZKL1O8hqbBcZi_7z-yZSNmVn-TDtGnWeN9dHf7hDv7lGImfQ8aI0Q3cpqB4zgN_BQxbWAhU_rLSlQkKjY8l8zLlJOGf96gWX8fPGtpV0GM7eC0",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptS7vepoKIIouTw3QI1YljuGIxlDRT9dB6KDP_XUAB3U_ZpyFAN3GxnuCAi8r8v8wkD_iP6FeGT8AA9MlHhxQjOyn-HbHHCAWXXVrS_1hCrHXA86pJISBhq9b9c2wpvVkLqftyvu9teOsk",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptplZxq6BJfuS0lHOrT1KPoqOJaVCJq4sYwmgCnmGoR_xNGtex9qchVOK1uWYOLavuGWsFnT2MWDT4jdPuzNZVJpFo0Ei20pEcikIx2HaUMeey1L-IvFQm3LLQc1__8TX17YL6N4GYaZ414",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptFFXdZjlLLduDMpWuEihSoiqDFMUCuf2C9Cra4cIfcccC8vf_YjLiZkWSKsNwj1n6YOp3E8DAAyc4bFcHNfojavHR2KUn2ZUJS613mtqvCip-QHipfMlo7iPHTS4jbXOo4_sLsds_rHeY",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvhl2Wh1brqS8bDEx4NP965YmveHI8P5Nwt3iBNbswIr3Sg5mVs32ZJWad8J3bZU10iY5hseYLpmVpfMdjgsqU_sDirBdAOGqMes7ozc3sR9orLJxFgNATJTbAr2ey6_IGyBS0OEy4mIEEG",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puVR5Y3LtcLgO0wnmgmMgqBywKUyE42S0Lpt1k8qxFdCyn6sxloTpf0YcSeM6VHxaDDLu2j13neeGsLuTbdj-odZcKbfrYIiTyXF6gK06T7Jea_yYe2Itg_Sx6-Qgtvm2Zvn3oC9J2kyLw",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ps7T-wnjBv5_slqJoxIozJaSbwMC_Sd4ISGZGA10sTsy_RWu-xk7Kl3XdAzpgxQ1vb8HhAbIC9rez74UVQ-2MK5sXeQdDS29KV8HcOhpJGOO8niRxVDbXov8FKqyY4FvcUV9v_vqOsz2ko",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puus1ZsNNi3ZCr2AE_65NRdF0vO3ryUBsNH2qORCYCA3kmXhvEZJ1pznvkIA-e-TzZwNb6EOSyzo9OOVCyAwML49PFWzYb6gDAzgC5YoZ6utY5nV6wuj8adcGSaniqTKdidhyv--3-lsF8",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvs8LdtDTe_iOCcTBcLg8H6HjLBaUghNhqm5gOBQGcTT4kHz2J4Gk1H_QExDBw_1jzuZdMBJmNbw2-KvNzWb0gMsala8N56-W2V3w378yGmx88Q2tQd05xE8JfJlzciHLXBHfsX1apJnlGj",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psclG3styp6D8_5YEskDQUVXvsPgXx81MRK05-fW-xwKohAQManSe7_c0ZBMqHcpWbs5Sca7I28Gh1QYyix31JvmwzSh12cemXFpOwcADJBqvFh9NvfY0aD0Ut7JaTBg0X2rke3vbph0NI",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvPOYSp6GVL5G-itJhCw3L_8-QOumiHAW4F_w6dYCJL0Ejmz8Rpc-akxPGIsN_HxNspYTRt1liMjI4gSpK6l43i94wb9kVVBWyeqMmv-Fi4-4scmRRUEzTLsKqJfhekfOpY5l8_CpPx-Z_b",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pubaRCKu5RRi6mU2GvpU2cB3H-Zq3uVg7hVN1wLO-IX-69mqg-xZm61P6D3e9lAr6IfGX9MucrVT_stsDGNemajfPOOcMErEt8dpjDvTPZxNlO3wRjhQeFx8CYQe9DNGfj-2iB9fTEw_MhJ",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvTiwRW5gBdU8FcfXATTeRg5S8yhXp-OewD2S_rPpViX_9DvP0ZKSXh_CDXIFDvdQlRfg3KRid2Zpk7aePImG1LIXA8xO04gPOBUh30v_4kBgCtcLZB79Yw0hGeYS95FrgX4k7ctTFpJT-Q"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Freunde",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 5,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 3,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 5,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT25sWU5uTllSRlpUZVdneU0xcGtYMnd0U1hjME5tYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUjlW4WZmDBdrEBK7d5iYy8JHcticI0r09r7TcMWUWh3H-Lak_I=s120-c-rp-mo-ba3-br100",
          "display_name": "Ismail S.",
          "link": "https://www.google.com/maps/contrib/100086937401926490816?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25sWU5uTllSRlpUZVdneU0xcGtYMnd0U1hjME5tYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOnlYNnNYRFZTeWgyM1pkX2wtSXc0Nmc%7C0cm1N412Eoc%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "Bearbeitet: vor 5 Monaten",
        "comment": "Die Einrichtung im Zimmer sind leider sehr alt. Keine Steckdosen neben dem Bett. Lampe und Fön funktionieren nicht.\nPro: gute Lage zum Central Park, Times Square und Rockerfella Center.\nServicekräfte des Hotels sehr nett.",
        "review_reply": "Thank you very much for sharing your feedback with us. We’re glad to hear you enjoyed our central location near Central Park, Times Square, and Rockefeller Center, as well as the friendliness of our service team.\n\nWe’re sorry to learn that the furnishings and in-room amenities did not meet your expectations, and we appreciate you bringing the lamp and hair dryer issues to our attention. Your comments will help us make improvements to ensure a more comfortable stay for our future guests.\n\nWe hope to have the opportunity to welcome you back again and provide an even better experience.",
        "review_reply_created": "vor 5 Monaten",
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Art der Reise",
            "value": "Urlaub",
            "description": "Welche Art von Reise hast du unternommen?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Paar",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 2,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 3,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 4,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT25VMFYzQmZjblZHU2xOa2JISnZibGRyVEMxaldrRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWV7TMK61cNjegRN1_oXpJNL31nlzqzW6d1iTTC-UsyAAozVfs=s120-c-rp-mo-ba5-br100",
          "display_name": "Sonja Dürr",
          "link": "https://www.google.com/maps/contrib/102283591874141539400?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25VMFYzQmZjblZHU2xOa2JISnZibGRyVEMxaldrRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOnU0V3BfcnVGSlNkbHJvbldrTC1jWkE%7C0d7MTqp5WU7%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "5/5",
        "created": "vor 3 Monaten",
        "date": "2025-11-22",
        "comment": "Zimmer für NY wirklich gross, die Lage ist gut.\nDie Zimmer, Einrichtung sind allerdings sehr abgenutzt.\nDie Preise im Restaurantbereich sind happig, aber Starbucks ist direkt um die Ecke.",
        "review_reply": "Dear Sonja,\nThank you for choosing New York Hilton Midtown and for sharing your valuable feedback. While we are sorry your stay wasn't quite perfect, we are happy you enjoyed our fantastic location and spacious accommodations. We are continually working to improve, and your comments help us know where to focus our efforts. We look forward to being your \"go-to\" place to stay on future trips to NYC.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "vor 3 Monaten",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pux295aI8VAKS3CWZVuHHg2iJwXdvcM3Z-Bq7QsebDsJif_XY0fBaPaGjHt649a5HPmguobH70SyvUw0ZK-FX7g5AN9rXYsGqBDoVHpTf1bSRnbibmVBKI0YGUynqe-1wDkKkcAY9J6mQJI"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Art der Reise",
            "value": "Urlaub",
            "description": "Welche Art von Reise hast du unternommen?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Paar",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 5,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 4,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 5,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "ChdDSUhNMG9nS0VKNmx3dGZHdE5tM3JnRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdCjMUwIiBikRhCLHgN_0vyGAo1GvT8DEukiKQb1ujC_eFsFjYrQ0OvLoSxPtqmCdgvFA=s120-c-br100",
          "display_name": "K4274CPbenjaminm",
          "link": "https://www.tripadvisor.de/ShowUserReviews-g60763-d611947-r1022439626?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=PH&supul=de"
        },
        "link": "https://www.tripadvisor.de/ShowUserReviews-g60763-d611947-r1022439626?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=PH&supul=de",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "1/5",
        "created": "vor 6 Monaten",
        "comment": "Hotel in schlechtem Zustand, Renovierung überfällig: musste zweimal das Zimmer wechseln, im ersten hat es furchtbar moderig gerochen, im zweiten war die Dusche defekt, es hat über eine Stunde gedauert bis ich letztlich ein drittes bekommen habe mit verschimmelten Fugen in der Dusche und altem Duschvorhang, alles in schlechtem Zustand. Hier kommt hinzu dass der Service absolut schlecht ist und sich noch nicht mal für meine Beschwerde entschuldigt hatte. Einzig die Lage ist positiv hervorzuheben. Alles in allem sportlicher Preis für ein schlechtes Hotel, das dem Markennamen Hilton absolut nicht gerecht wird."
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tSUVZsUnhaWGxvYlVWaldtTkRWQzFEYUhoNlFXYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJpSWnm_TLvPgWnG_WtYabL505Nx9JyMHMbeJn0yzk8ycarrQ=s120-c-rp-mo-ba4-br100",
          "display_name": "Katharina H.",
          "link": "https://www.google.com/maps/contrib/107438252515681568592?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tSUVZsUnhaWGxvYlVWaldtTkRWQzFEYUhoNlFXYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkRQVlRxZXlobUVjWmNDVC1DaHh6QWc%7C0cxt0oRBBtx%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "vor 4 Monaten",
        "comment": "Wir hatten ein ruhiges Zimmer. Für drei Personen groß genug. Die Zimmerbeleuchtung war ungenügend und die Fahrstuhlwartezeiten lang.\nOptimaler Ausgangspunkt für Besichtigungen in Manhatten.",
        "review_reply": "Dear Katharina,\nThank you for sharing your thoughts with us. We are glad you appreciated our spacious accommodations and peaceful environment in the city. It was a pleasure having you as a guest, and we look forward to welcoming you back for an even more exceptional visit in the future.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "vor 4 Monaten",
        "details": [
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 4,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 4,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 5,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tGalowOUdYMmxXUjI1aVh6aExPRkpRTVY5Sk9GRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVmtAB8AXA5ZvOm6ghmukAtEDbWPKD_ZXaenKTdm1xxzhvEN7Ti=s120-c-rp-mo-ba5-br100",
          "display_name": "Claudia „CW“ Winter",
          "link": "https://www.google.com/maps/contrib/101770904039323526520?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tGalowOUdYMmxXUjI1aVh6aExPRkpRTVY5Sk9GRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkFjZ09GX2lWR25iXzhLOFJQMV9JOFE%7C0cnJVHEw1wA%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "4/5",
        "created": "vor 5 Monaten",
        "comment": "Der perfekte Hotel für New York Sightseeing! Direkt am MoMA und parallel zur 5th und Broadway. Subway in allen Richtungen in der Nähe! Central Park um die Ecke. Passt.\nDas Hotel ist okay, aber top Service, sauber und ordentlich!\nGeräuschabsorbierende Fenster wären allerdings toll!!!",
        "review_reply": "Dear Claudia,\nThank you so much for your recent stay at New York Hilton Midtown. We’re delighted to have been a small part of your amazing trip. It’s wonderful to hear that our central location made it easy for you to explore the city. We know how much convenience matters when traveling. We also appreciate your kind words about our staff. Our team takes great pride in going above and beyond to provide every guest with exceptional service. With the hotel located in the heart of Manhattan, the city’s energy and vibrancy can sometimes bring extra noise, and we sincerely apologize for any inconvenience this may have caused. Thank you again for your thoughtful review, and we look forward to welcoming you back on your next visit to New York City.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "vor 5 Monaten",
        "details": [
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Familie",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 4,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 5,
            "description": "Standort"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_ROOMS",
            "name": "Zimmer",
            "value": "Okay, zu dritt machbar!\nAn Ausstattung fehlt nichts!",
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_NEARBY_ACTIVITIES",
            "name": "Aktivitäten in der Nähe",
            "value": "MoMA, Broadway, Central Park, 5 the Avenue",
            "description": "Aktivitäten in der Nähe"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_SAFETY",
            "name": "Sicherheit",
            "value": "Sehr sicher!",
            "description": "Sicherheit"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_WALKABILITY",
            "name": "Fußläufigkeit",
            "value": "Vieles s. Stadtplan",
            "description": "Fußläufigkeit"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_FOOD_AND_DRINKS",
            "name": "Speisen und Getränke",
            "value": "Ist gesorgt.",
            "description": "Speisen und Getränke"
          },
          {
            "id": "HOTELS_VIBE",
            "name": "Highlights des Hotels",
            "value": "Gutes Preis-Leistungs-Verhält.",
            "description": "Wie würdest du das Hotel beschreiben?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT21aSldraGtWVmhJVmxsNFZHVnlVa1kyZVZKa1JtYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIDHdg1hHG__X5gKEg30yEArZkJfh3U0QDEfAzBCqCWsecZcQ=s120-c-rp-mo-ba2-br100",
          "display_name": "Susanne Weber",
          "link": "https://www.google.com/maps/contrib/100391510259633012665?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21aSldraGtWVmhJVmxsNFZHVnlVa1kyZVZKa1JtYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmZJWkhkVVhIVll4VGVyUkY2eVJkRmc%7C0ckBmsSzIH4%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "vor 5 Monaten",
        "comment": "Das Zimmer ist etwas älter und herabgekommen. Der Service allerdings top.\nDie Lage ist super viele Essens Möglichkeiten und zum Times Square braucht man zu Fuß ca. 10 Minuten.",
        "review_reply": "Thank you for sharing your feedback with us. We’re happy to hear you enjoyed our convenient location with many dining options nearby and just a short walk to Times Square. We’re also especially pleased that our service team made a positive impression during your stay.\n\nWe appreciate your comments regarding the condition of the room and will certainly keep them in mind as we continue to make improvements. Your input is very valuable to us.\n\nWe hope to have the pleasure of welcoming you again on your next visit to New York.",
        "review_reply_created": "vor 5 Monaten",
        "details": [
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 2,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 5,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 4,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT21aTlFXTk9kMFZOWmxwMVUxaHpNRlYwYURORlEyYxAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjW5NjVfqYWafONdXqb_FIJQrKBgmu0EYM4mDa_Y2ajFVoGE5IQ=s120-c-rp-mo-br100",
          "display_name": "K W",
          "link": "https://www.google.com/maps/contrib/114251727041856868421?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21aTlFXTk9kMFZOWmxwMVUxaHpNRlYwYURORlEyYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOmZNQWNOd0VNZlp1U1hzMFV0aDNFQ2c%7C0d4bRMrp-ze%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "3/5",
        "created": "vor 3 Monaten",
        "date": "2025-11-14",
        "comment": "Business-Hotel in Superlage in Midtown, leider komplett abgenutzt, abgewetzte, durchgesessene Stühle in Restaurants, abgebatzte Tische, eines Hilton-Hotels nicht würdig, altes, spartanisch ausgestattetes Zimmer, weit von Hilton-Standard entfernt, freundliches Personal in Restaurants, extrem lange Wartezeiten am Lift, für einen angeblichen early Check-in ( Ankunft ca.15.00 Uhr ?!) wurden kommentarlos 62 $ liquidiert, eine Frechheit, schlechte Preis-Leistungsrelation, absolut enttäuschend, wir sind noch nie in einem derart heruntergekommenen Hilton-Hotel zu solch stolzen Preisen untergekommen,",
        "review_reply": "Thank you for sharing your feedback with us. While we are glad that our team made a positive impression with their friendliness, we are sorry that your stay did not meet your expectations. The comfort and satisfaction of our guests are extremely important to us, and we regret that the condition of the room and restaurant furnishings, as well as the elevator wait times, left you disappointed. Please be assured that your comments have been shared with our team as we strive to make improvements for the benefit of our guests. Regarding the charge you mentioned, we would like to clarify that a Daily Mandatory Destination Charge is added to the room rate. This fee includes premium guest internet access, a daily food and beverage credit for use at our hotel restaurant, bar, and lounge, and local, toll-free, and domestic long-distance phone calls. We apologize if this was not clearly communicated at check-in. We truly appreciate your feedback and hope you will consider giving us another opportunity to provide you with a significantly improved experience in the future. \n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
        "review_reply_created": "vor 3 Monaten",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psD99uhp4c6bAv0MfdVqwaMtWuBIYiDtTfsPsKEdWxseOANkyYEm8whJuoagC4sG3tzDoBaLWp8yZo-3skl7lMThHTpzJlb8DHdPqM1Y9kkEvbk122E1vgzZgT6YvieRLA9v3VoQZjDspM",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psrUoxUdtiMo4y87m0yMYNV7BwN-aKu-qfYQ61clp_ekR3ErP24zGyyvhKcK0-goSwuz6m5Acw6fGo0N5CndB7LDjD8azcs7gLXB7AjnAU7twQJ7dJQrGWWVIQ1PCWqueoS6ZjlTOX86hA"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Art der Reise",
            "value": "Urlaub",
            "description": "Welche Art von Reise hast du unternommen?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Paar",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 2,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 3,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 5,
            "description": "Standort"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_ROOMS",
            "name": "Zimmer",
            "value": "Einfach ausgestattet und verwohnt, wenig und schwaches Licht",
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_TIPS_TOPICS_FOOD_AND_DRINKS",
            "name": "Speisen und Getränke",
            "value": "Hochpreisige Selfservicetheke, einfache Speisekarte, insgesamt recht rustikales Ambiente, völlig durchgesessene, altes Sitzmobiliar",
            "description": "Speisen und Getränke"
          },
          {
            "id": "HOTELS_VIBE",
            "name": "Highlights des Hotels",
            "value": "Schöne Aussicht",
            "description": "Wie würdest du das Hotel beschreiben?"
          }
        ]
      },
      {
        "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2pKa1FVTlZRekJxYkVwMmNVRnBSRk5OZEhNMFMxRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKxgJM--MNqq2CXCjp564UgKU-0MM9ep-nva-7-XQFvAqJUWw=s120-c-rp-mo-br100",
          "display_name": "Nadina Diermann",
          "link": "https://www.google.com/maps/contrib/110667864867690310032?hl=de"
        },
        "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pKa1FVTlZRekJxYkVwMmNVRnBSRk5OZEhNMFMxRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOjJkQUNVQzBqbEp2cUFpRFNNdHM0S1E%7C0cUxAXdB9a7%7C?hl=de",
        "source": "Google",
        "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
        "rating": "1/5",
        "created": "vor 7 Monaten",
        "date": "2025-07-22",
        "comment": "Auf gar keinen Fall dieses Hotel buchen!!\nWir hatten uns dafür entschieden, weil es sehr zentral liegt (fußläufig zum Times Square und Central Park) und auf den Bildern recht großzügig geschnittene Zimmer hatte. In dieser Lage sind alle Hotels ähnlich teuer, daher dachten wir, mit einem Hilton Hotel können wir nicht viel falsch machen.\n\nOh doch. Die Zimmer sind in der Tat groß und die Klimaanlage funktionierte gut, das ist aber auch schon das einzig positive, was man über dieses Haus sagen kann.\n\nZimmer:\nDas Zimmer war nicht geputzt und wurde während der Woche, die wir da waren auch nicht geputzt, fingerdicker Staub auf den Oberflächen, fleckige Lampenschirme & Rollos, Fettflecken auf dem Fenster, ein Krümel, der mir am ersten Tag herunterfiel lag 7 Tage später immer noch auf dem Teppich. Handtücher gab es zwar täglich neu, jedoch meist in zufällig gewählter Anzahl (mal 4, mal 3 mal 5) und ALLE hatten immer schwarze Flecken, die nicht von uns kamen (siehe Fotos). Auch auf den Bettlaken fanden sich diese. Die Minibar war leer und blieb leer, der Safe ging nur auf, wenn man die Tür der Kommode mit komplett ausgerissenem Scharnier in einem bestimmten Winkel geöffnet hat (siehe Foto). Ein klebriger Föhn wird bereitgestellt, Klobürste gibt es nicht und die Wände sind so dünn, dass man die Gäste im Nachbarzimmer schnarchen hört.\n\nAb 8:30 klopft der Roomservice, ob man schon fertig sei, was wir als Urlaubsgäste schon sehr früh fanden, zumal ja offenbar nichts geputzt wurde.\n\nRestliche Räumlichkeiten:\nAuch im restlichen Hotel ist alles in die Jahre gekommen und sehr lieblos. Die Lobby hat mehr von einer Bahnhofshalle, es schieben sich ständig Massen hindurch (Tagungsgäste, Schulklassen, Einzelreisende etc.) und um einen Rezeptionisten zu sprechen muss man sich wie im Freizeitpark in ein Warteschlangen-Leitsystem aus Gurten einfädeln. Um mit dem passenden Aufzug zu unserem Zimmer zu fahren mussten wir teilweise 10-15 Minuten anstehen und warten. Die Bar im Erdgeschoss wirkt eher wie eine Sportsbar, Wellnessbereich gibt es keinen und in den Fluren hat man die abblätternde Tapete mit Klebeband geklebt (siehe Foto).\n\nPreise:\nBeim Check in wurde uns mitgeteilt, dass es erforderlich sei, eine Kaution zu hinterlegen. Soweit nicht unüblich. Aber der Mitarbeiter wollte 100$ pro Nacht! Wir waren eine Woche dort und somit wurden direkt 700$ auf der Kreditkarte belastet! Das wurde bei der Buchung mit keiner Silbe erwähnt, und wir fanden das wirklich einen unverschämten Betrag, erst recht, nachdem wir das Zimmer gesehen hatten. Sowas müssen sich Leute ggf. in ihr Reisebudget einplanen, für 14 Tage wären direkt 1.400$ belastet worden, in den ersten 10 Minuten des Aufenthalts. Nachdem die Minibar ja leer war und es zwar einen Eisspender gibt, dies aber eins der wenigen Hotels in New York zu sein scheint, das keinen Wasserspender anbietet, wollten wir im Hotel-Kiosk eine Flasche Wasser kaufen. Die günstigste 1 Liter Plastik-Flasche Wasser kostete sage und schreibe 10,30$ (!) Für Wasser. Das es in den meisten anderen Hotels gratis gibt. Eine bodenlose Unverschämtheit.\n\nAm letzten Tag waren wir auf die Gepäckaufbewahrung angewiesen, da unser Flug erst Abends ging. Kostete 5 $ pro Gepäckstück. Wir hatten jeder einen Rucksack und einen Koffer, also nochmal 20$. Und man wird nochmal freundlich darauf hingewiesen, dass trotzdem keine Haftung besteht, wenn das Gepäck am Ende weg oder beschädigt ist (siehe Foto).\nIch habe in meinem Leben noch nie als Gast für Gepäckaufbewahrung im eigenen Hotel bezahlt, schon gar nicht in einem Hilton.\n\nDer ganze Aufenthalt war wirklich eine bodenlose Unverschämtheit, schmutzige Zimmer, völlig überfüllt, Zero Service und man versucht wo es nur geht dem Gast noch weitere Hundert Dollar aus der Tasche zu ziehen, für Leistungen die eigentlich selbstverständlich sind. Ohne Worte. Und alles zu einem stolzen Preis.\n\nBitte, bitte suchen Sie sich für das gleiche Geld ein ordentliches Hotel in der Nachbarschaft mit ggf. kleineren Zimmern, das Hotel ist sein Geld absolut nicht wert!!",
        "review_reply": "Thank you for taking the time to share such detailed feedback. I am truly sorry to hear about your disappointing experience during your stay with us.\n\nPlease accept our sincerest apologies for the cleanliness issues you encountered in your room, as well as for the overall condition and upkeep that fell far short of expectations. What you described is not reflective of the standards we strive to uphold, and I regret that we did not provide the quality and comfort you rightfully anticipated from a Hilton property.\n\nWe understand how frustrating these matters must have been and are committed to addressing them to prevent recurrence.\n\nWhile we realize this does not change your experience, I do hope you will give us an opportunity to restore your confidence in the future.\n\nSincerely,",
        "review_reply_created": "vor 7 Monaten",
        "photos": [
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pv9nlsgzWSFYx5qgh248fZn_NdZ0PblXCfkvu6LJw11KEU-w67Qul8TW4ZY7nkabkwR6fWAj7co6ZXL2OzmgTGSXFLZpt4WmV4YbVG04XiHHOYsPF-1LgCbOdvlL0iKWmhZ94NyefalVpxC",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puGFHIu940jqX0WVQb_LBLN_3HZptDZm9BtZ6yHn8CO2NgZHVbeYvbNqt_Oz6avzl9Hgzbm2KVBhSFl4TycSITq4Gmf9iEejSWh6LeA7epSVwGYFZURz4URM2SzkFBBLK6gE7tN99Jzw8E",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puDhUeyGlou3_1X-o69to-J56T18QHMw9ypdvPuze9H6GxBxZ97MulCDendHg9wZmfUvVLhm-QNiROlJesv4lk34fYlbw9QlKPHOU8lWIjGpsAhZWlAAfB_azRppjXFMstUaSPgV9iP80V0",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9psyO0JBwHt8RN46oAZKM-L8KrylDSikVI3vPO6e5WrFreOG0XyyZ2n1m434xlT62kE6rvgKxKffAhrpokPDBcQoPUluGQWlw1BZOm3Bjj4U_9dMRRrtUzZdxm3UF6AGUP46-kPym_38zDgF",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptsosofwJjA-HqFhvsj94P3blZzq6GLLFKceT-o0R_TgHUkdCESNDir43DuNFC12SyLyZcx8vQbKlzBejQLOWNc8JdP_p5ZDN3T-_cAb5zizA6cBzTN_urdXLqBFfAFrz_wQnRQLgaI-AhI",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvpUH4L15r1729ydJPdoIbfie5oNq3EkL4eQXsQN-QVsvymF-FK6sWEdGldDsiNpCZspinezSelNwrQvap6WGc8Ob2tPHTvLT0MU4uLLDUWr97zGsZ5tmYb2at-z577OOioutRRMh849mtu",
          "https://lh3.googleusercontent.com/geougc-cs/ABOP9puFDADRqWtwqr2KSjqJJZV6HHujO14Sddj6i-M-GxkB8PVHQQLpnKIj_n-QubZ7WJGSnlHRaKIa4unBCt6e87rTx2xqE1PMUXh9iPlMfCf9jioxn09N33M6BMecdR0jE97XpcquyKnqxBBf"
        ],
        "details": [
          {
            "id": "HOTELS_PILOT_TRIP_TYPE",
            "name": "Art der Reise",
            "value": "Urlaub",
            "description": "Welche Art von Reise hast du unternommen?"
          },
          {
            "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
            "name": "Reisegruppe",
            "value": "Paar",
            "description": "Mit wem bist du gereist?"
          },
          {
            "id": "HOTELS_ASPECT_ROOMS",
            "name": "Zimmer",
            "value": 1,
            "description": "Zimmer"
          },
          {
            "id": "HOTELS_ASPECT_SERVICES",
            "name": "Service",
            "value": 1,
            "description": "Service"
          },
          {
            "id": "HOTELS_ASPECT_LOCATION",
            "name": "Standort",
            "value": 3,
            "description": "Standort"
          }
        ]
      },
      {
        "review_id": "ChdDSUhNMG9nS0VJQ0FnTURvNy1hYzRBRRAB",
        "reviewer": {
          "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QewvQXK08PhtQgCu1fT7TcdWcgcaXdOmFk48xW5xlmLo-Eqy0UOp2YqveGvl0etYz5BzA=s120-c-br100",
          "display_name": "Vo10",
          "link": "https://www.tripadvisor.de/ShowUserReviews-g60763-d611947-r971507489?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=PH&supul=de"
        },
        "link": "https://www.tripadvisor.de/ShowUserReviews-g60763-d611947-r971507489?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=PH&supul=de",
        "source": "Tripadvisor",
        "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
        "rating": "4/5",
        "created": "vor einem Jahr",
        "comment": "Das Hotel liegt zentral in Midtown und ist mit der U-Bahn gut zu erreichen. |Das Personal an der Rezeption war freundlich und es gab zum Glück keine lange Wartezeit. |Zimmer und Bad waren sauber und es gab genügend Handtücher. Das Zimmer war zweckmäßig eingerichtet.|Hatte das Zimmer ohne Frühstück gebucht da es genügend Möglichkeiten zum Frühstücken in der Nähe gibt."
      }
    ]
  }
  ```
</ResponseExample>
