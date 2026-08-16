# Discover new LinkedIn profiles

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-people-discover-new-profiles](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-people-discover-new-profiles)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Discover new LinkedIn profiles by first and last name using the Bright Data Web Scraper API with dataset ID gd_m8d03he47z8nwb5xc for prospect research.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_m8d03he47z8nwb5xc` to collect **Discover New Profiles** data.
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
      Must be set to `https://www.linkedin.com`.
    </ParamField>

    <ParamField type="string">
      First name to search by
    </ParamField>

    <ParamField type="string">
      Last name to search by
    </ParamField>
  </Expandable>

  #### Example

  ```json theme={null}
  {
    "input":[
      {
        "url":"https://www.linkedin.com",
        "first_name":"james",
        "last_name":"smith"
      },
      {
        "url":"https://www.linkedin.com",
        "first_name":"Lisa",
        "last_name":"Ledger"
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "url": "https://linkedin.com/in/muge-ozlutiras",
      "name": "Muge O*******s",
      "subtitle": null,
      "location": "Netherlands",
      "experience": null,
      "education": "ETH Zurich",
      "avatar": "htt***//m***a.l*********dms*********************6XV******************************************************************************************************************************************************************"
    }
  ]
  ```
</ResponseExample>
