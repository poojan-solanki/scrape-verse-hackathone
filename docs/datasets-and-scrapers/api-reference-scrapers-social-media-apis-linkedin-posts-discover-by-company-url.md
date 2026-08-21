# Discover LinkedIn posts by company URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-posts-discover-by-company-url](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-posts-discover-by-company-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Discover LinkedIn posts from a company URL using the Bright Data Web Scraper API with dataset ID gd_lyy3tktm25m4avu764 for company feed monitoring.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lyy3tktm25m4avu764` to collect **Discover Posts by Company URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `company_url`.
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
      LinkedIn company url
    </ParamField>

    <ParamField type="string">
      The start\_date input should be in ISO format (`YYYY-MM-DDTHH:MM:SS.sssZ`),

      > For example: `2025-02-12T14:37:05.932Z`
    </ParamField>

    <ParamField type="string">
      The end\_date input should be in ISO format (`YYYY-MM-DDTHH:MM:SS.sssZ`),

      > For example: `2025-02-12T14:37:05.932Z`.
    </ParamField>
  </Expandable>

  #### Example

  ```json theme={null}
  {
    "input":[
      {"url":"https://www.linkedin.com/company/lanieri"},
      {"url":"https://www.linkedin.com/company/effortel"},
      {"url":"https://www.linkedin.com/company/green-philly"}
    ]
  }
  ```
</ParamField>

## Response

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://de.linkedin.com/posts/bathildisheim_sport-inklusion-sportf%C3%BCralle-activity-7439619065922625537-K5QL",
      "id": "7439619065922625537",
      "user_id": "bat***dis***m",
      "use_url": "https://de.linkedin.com/company/bathildisheim?trk=public_post_feed-actor-image",
      "title": "#sp*** #i***usi*********für*********************weg************************",
      "headline": "Aus***chn*** fü********* Vi******************",
      "post_text": "Auszeichnung für gelebte Vielfalt im #Sport . Das Projekt Miteinander bewegt ist gemeinsam mit dem VfL Bad Wildungen mit dem Sonderpreis „Ländlicher Raum“ der Demokratie-Verstärker:innen ausgezeichnet worden. Verliehen wurde der Preis im Rahmen der Initiative „Offen für Vielfalt – Geschlossen gegen Ausgrenzung“ im Regierungspräsidium Kassel. Gewürdigt wurde das gemeinsame Projekt „Boxen ist für alle da“, das seit knapp einem Jahr im Landkreis Waldeck-Frankenberg angeboten wird. Die Auszeichnung macht sichtbar, was das Projekt in der Praxis zeigt: Sport ist weit mehr als Bewegung. Sport schafft Begegnung, stärkt Selbstvertrauen und verbindet Menschen mit unterschiedlichen Voraussetzungen. Gerade deshalb ist es wichtig, dass sportliche Angebote allen offenstehen. Bei „Boxen ist für alle da“ trainieren Menschen mit und ohne Behinderung gemeinsam. So entstehen nicht nur sportliche Erfahrungen, sondern auch Teilhabe, Zusammenhalt und ein selbstverständliches Miteinander. Dass dieses Engagement nun besonders für den ländlichen Raum gewürdigt wird, ist ein starkes Zeichen. Die Freude über den Preis ist groß. Denn er würdigt den gemeinsamen Einsatz für Inklusion, Vielfalt und demokratisches Miteinander im Sport. Ein herzlicher Dank gilt allen Beteiligten, Unterstützer:innen und natürlich den Teilnehmenden, die dieses Projekt mit Leben füllen. #Inklusion #SportFürAlle #bathildisheimbewegt Sebastian Gleim",
      "date_posted": "2026-03-17T10:30:06.724Z",
      "hashtags": [
        "#Sport",
        "#Inklusion",
        "#SportFürAlle",
        "#bathildisheimbewegt"
      ],
      "embedded_links": [
        "https://www.linkedin.com/feed/hashtag/sport",
        "https://www.linkedin.com/feed/hashtag/inklusion",
        "https://www.linkedin.com/feed/hashtag/sportfAeSralle",
        "https://www.linkedin.com/feed/hashtag/bathildisheimbewegt",
        "https://de.linkedin.com/in/sebastian-gleim-47063430a?trk=public_post-text"
      ],
      "images": [
        "https://media.licdn.com/dms/image/v2/D4D22AQGI_ALONwR9og/feedshare-shrink_800/B4DZz7WHjuKQAg-/0/1773743405596?e=2147483647&v=beta&t=dXPqg2rYvo3UwNHHx-irACA7lQ7GWovL4egJ3smyH3o"
      ],
      "videos": null,
      "num_likes": 2,
      "num_comments": 0,
      "more_articles_by_user": null,
      "more_relevant_posts": null,
      "top_visible_comments": null,
      "user_followers": 412,
      "user_posts": 0,
      "user_articles": 0,
      "post_type": "post",
      "account_type": "Organization",
      "post_text_html": "Auszeichnung für gelebte Vielfalt im <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fsport&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#Sport</a>. Das Projekt Miteinander bewegt ist gemeinsam mit dem VfL Bad Wildungen mit dem Sonderpreis „Ländlicher Raum“ der Demokratie-Verstärker:innen ausgezeichnet worden. Verliehen wurde der Preis im Rahmen der Initiative „Offen für Vielfalt – Geschlossen gegen Ausgrenzung“ im Regierungspräsidium Kassel.<br/>Gewürdigt wurde das gemeinsame Projekt „Boxen ist für alle da“, das seit knapp einem Jahr im Landkreis Waldeck-Frankenberg angeboten wird.<br/><br/>Die Auszeichnung macht sichtbar, was das Projekt in der Praxis zeigt: Sport ist weit mehr als Bewegung. Sport schafft Begegnung, stärkt Selbstvertrauen und verbindet Menschen mit unterschiedlichen Voraussetzungen. Gerade deshalb ist es wichtig, dass sportliche Angebote allen offenstehen.<br/><br/>Bei „Boxen ist für alle da“ trainieren Menschen mit und ohne Behinderung gemeinsam. So entstehen nicht nur sportliche Erfahrungen, sondern auch Teilhabe, Zusammenhalt und ein selbstverständliches Miteinander. Dass dieses Engagement nun besonders für den ländlichen Raum gewürdigt wird, ist ein starkes Zeichen.<br/>Die Freude über den Preis ist groß. Denn er würdigt den gemeinsamen Einsatz für Inklusion, Vielfalt und demokratisches Miteinander im Sport.<br/>Ein herzlicher Dank gilt allen Beteiligten, Unterstützer:innen und natürlich den Teilnehmenden, die dieses Projekt mit Leben füllen.<br/><br/><a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Finklusion&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#Inklusion</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2FsportfAeSralle&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#SportFürAlle</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fbathildisheimbewegt&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#bathildisheimbewegt</a> <a class=\"link\" href=\"https://de.linkedin.com/in/sebastian-gleim-47063430a?trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>Sebastian Gleim</a>",
      "repost": null,
      "tagged_companies": [],
      "tagged_people": [
        {
          "link": "https://de.linkedin.com/in/sebastian-gleim-47063430a?trk=public_post-text",
          "name": "Sebastian G***m",
          "type": "people"
        }
      ],
      "user_title": null,
      "author_profile_pic": "htt***//m***a.l*********dms*********************mzL************************************************************************************************************************************************************",
      "num_connections": null,
      "video_duration": null,
      "external_link_data": null,
      "video_thumbnail": null,
      "document_cover_image": null,
      "document_page_count": null,
      "original_post_text": "Auszeichnung für gelebte Vielfalt im <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fsport&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#Sport</a>. Das Projekt Miteinander bewegt ist gemeinsam mit dem VfL Bad Wildungen mit dem Sonderpreis „Ländlicher Raum“ der Demokratie-Verstärker:innen ausgezeichnet worden. Verliehen wurde der Preis im Rahmen der Initiative „Offen für Vielfalt – Geschlossen gegen Ausgrenzung“ im Regierungspräsidium Kassel.\nGewürdigt wurde das gemeinsame Projekt „Boxen ist für alle da“, das seit knapp einem Jahr im Landkreis Waldeck-Frankenberg angeboten wird.\n\nDie Auszeichnung macht sichtbar, was das Projekt in der Praxis zeigt: Sport ist weit mehr als Bewegung. Sport schafft Begegnung, stärkt Selbstvertrauen und verbindet Menschen mit unterschiedlichen Voraussetzungen. Gerade deshalb ist es wichtig, dass sportliche Angebote allen offenstehen.\n\nBei „Boxen ist für alle da“ trainieren Menschen mit und ohne Behinderung gemeinsam. So entstehen nicht nur sportliche Erfahrungen, sondern auch Teilhabe, Zusammenhalt und ein selbstverständliches Miteinander. Dass dieses Engagement nun besonders für den ländlichen Raum gewürdigt wird, ist ein starkes Zeichen.\nDie Freude über den Preis ist groß. Denn er würdigt den gemeinsamen Einsatz für Inklusion, Vielfalt und demokratisches Miteinander im Sport.\nEin herzlicher Dank gilt allen Beteiligten, Unterstützer:innen und natürlich den Teilnehmenden, die dieses Projekt mit Leben füllen.\n\n<a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Finklusion&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#Inklusion</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2FsportfAeSralle&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#SportFürAlle</a> <a class=\"link\" href=\"https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2Fhashtag%2Fbathildisheimbewegt&amp;trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>#bathildisheimbewegt</a> <a class=\"link\" href=\"https://de.linkedin.com/in/sebastian-gleim-47063430a?trk=public_post-text\" target=\"_self\" data-tracking-control-name=\"public_post-text\" data-tracking-will-navigate>Sebastian Gleim</a>"
    }
  ]
  ```
</ResponseExample>
