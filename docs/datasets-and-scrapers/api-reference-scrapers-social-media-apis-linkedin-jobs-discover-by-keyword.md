# Discover LinkedIn jobs by keyword

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-jobs-discover-by-keyword](https://docs.brightdata.com/api-reference/scrapers/social-media-apis/linkedin-jobs-discover-by-keyword)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover LinkedIn Jobs by Keyword. Calls the POST /datasets/v3/scrape endpoint and returns a snapshot ID.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lpfll7v5hcqtkxl6l` to collect **Discover Jobs by Keyword** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `keyword`.
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
      Collect jobs in a specific location
    </ParamField>

    <ParamField type="string">
      Collect new jobs by keyword search like the job title, for example: Product Manager. Utilize quotation marks around specific words or phrases to ensure an exact match.
    </ParamField>

    <ParamField type="string">
      Use country code with 2 letters like `US` or `FR`
    </ParamField>

    <ParamField type="string">
      Time range of the job posting
    </ParamField>

    <ParamField type="string">
      Collect jobs from specific type like Full-time or Part-time
    </ParamField>

    <ParamField type="string">
      Collect jobs from a specific experience level
    </ParamField>

    <ParamField type="string">
      Specify if you want to collect only "Remote", "On-site" or "Hybrid" jobs
    </ParamField>

    <ParamField type="string">
      Collect jobs from a specific company
    </ParamField>

    <ParamField type="boolean">
      When set to true, the filter will exclude titles that do not contain the specified keywords
    </ParamField>

    <ParamField type="string[]">
      Jobs IDs to exclude
    </ParamField>

    <ParamField type="string" />
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input":[
      {
        "location":"paris",
        "keyword":"product manager",
        "country":"FR",
        "time_range":"Past month",
        "job_type":"Full-time",
        "experience_level":"Internship",
        "remote":"On-site",
        "company":"",
        "location_radius":""
      },
      {
        "location":"New York",
        "keyword":"\"python developer\"",
        "experience_level":"Executive",
        "country":"",
        "time_range":"",
        "job_type":"",
        "remote":"",
        "company":"",
        "location_radius":""
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
      "url": "https://www.linkedin.com/jobs/view/pharmacy-technician-at-walmart-4385163817?_l=en",
      "job_posting_id": "4385163817",
      "job_title": "Pharmacy Technician",
      "company_name": "Walmart",
      "company_id": "2646",
      "job_location": "Fayetteville, NC",
      "job_summary": "Hourly Wage: $16 - $29 per/hour The actual hourly rate will equal or exceed the required minimum wage applicable to the job location. Additional Compensation Includes Annual Or Quarterly Performance Incentives. Additional compensation in the form of premiums may be paid in amounts ranging from $0.35 per hour to $3.00 per hour in specific circumstances. Premiums may be based on schedule, facility, season, or specific work performed. Multiple premiums may apply if applicable criteria are met. Employment Type: Part-Time Available shifts: Mid-Shift, Closing Location Walmart Supercenter #3595 7701 S RAEFORD RD, FAYETTEVILLE, NC, 28304, US Job Overview Pharmacy associates focus on the needs of our customers as they entrust us with their prescriptions and health needs. They are responsible for inputting and processing prescriptions, supporting patients with product information, and providing customer service in our store pharmacies. Benefits & perks At Walmart, we offer competitive pay as well as performance-based incentive awards and other great benefits for a happier mind, body, and wallet. Health benefits include medical, vision and dental coverage. Financial benefits include 401(k), stock purchase and company-paid life insurance. Paid time off benefits include parental leave, family care leave, bereavement, jury duty, and voting. Other benefits include short-term and long-term disability, company discounts, Military Leave Pay, adoption and surrogacy expense reimbursement, and more. You will also receive PTO and/or PPTO that can be used for vacation, sick leave, holidays, or other purposes. The amount you receive depends on your job classification and length of employment. It will meet or exceed the requirements of paid sick leave laws, where applicable. For information about PTO, see Smart Guide page Live Better U is a Walmart-paid education benefit program for full-time and part-time associates in Walmart and Sam's Club facilities. Programs range from high school completion to bachelor's degrees, including English Language Learning and short-form certificates. Tuition, books, and fees are completely paid for by Walmart. Eligibility requirements apply to some benefits and may depend on your job classification and length of employment. Benefits are subject to change and may be subject to a specific plan or program terms. For information about benefits and eligibility, see One.Walmart.com. Walmart is committed to maintaining a drug-free workplace and has a no tolerance policy regarding the use of illegal drugs and alcohol on the job. This policy applies to all employees and aims to create a safe and productive work environment. Show more Show less",
      "job_seniority_level": "Entry level",
      "job_function": "Health Care Provider",
      "job_employment_type": "Part-time",
      "job_industries": "Retail",
      "job_base_pay_range": "$16.00/hr - $29.00/hr",
      "company_url": "https://www.linkedin.com/company/walmart?trk=public_jobs_topcard-org-name",
      "job_posted_time": "4 days ago",
      "job_num_applicants": 25,
      "discovery_input": {
        "experience_level": null,
        "job_type": null,
        "remote": null,
        "selective_search": null,
        "time_range": null
      },
      "apply_link": null,
      "country_code": "US",
      "title_id": "1062",
      "company_logo": "https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_100_100/company-logo_100_100/0/1736779000209/walmart_logo?e=2147483647&v=beta&t=tWcWIFSyHtICTzTLIPiYeKCp21XucI-HWijZdWwYR-A",
      "job_posted_date": "2026-03-13T09:48:59.171Z",
      "job_poster": {
        "name": null,
        "title": null,
        "url": null
      },
      "application_availability": true,
      "job_description_formatted": "<section class=\"show-more-less-html\" data-max-lines=\"5\">\n        <div class=\"show-more-less-html__markup show-more-less-html__markup--clamp-after-5\n            relative overflow-hidden\">\n          Hourly Wage: <strong>$16 - $29 per/hour<br><br></strong><ul><li>The actual hourly rate will equal or exceed the required minimum wage applicable to the job location.<br><br></li></ul><strong>Additional Compensation Includes Annual Or Quarterly Performance Incentives.<br><br></strong>Additional compensation in the form of premiums may be paid in amounts ranging from $0.35 per hour to $3.00 per hour in specific circumstances. Premiums may be based on schedule, facility, season, or specific work performed. Multiple premiums may apply if applicable criteria are met.<br><br>Employment Type: <strong>Part-Time<br><br></strong>Available shifts: <strong>Mid-Shift, Closing<br><br></strong>Location<br><br><strong>Walmart Supercenter #3595<br><br></strong>7701 S RAEFORD RD, FAYETTEVILLE, NC, 28304, US<br><br><strong>Job Overview<br><br></strong>Pharmacy associates focus on the needs of our customers as they entrust us with their prescriptions and health needs. They are responsible for inputting and processing prescriptions, supporting patients with product information, and providing customer service in our store pharmacies.<br><br>Benefits &amp; perks<br><br>At Walmart, we offer competitive pay as well as performance-based incentive awards and other great benefits for a happier mind, body, and wallet. Health benefits include medical, vision and dental coverage. Financial benefits include 401(k), stock purchase and company-paid life insurance. Paid time off benefits include parental leave, family care leave, bereavement, jury duty, and voting. Other benefits include short-term and long-term disability, company discounts, Military Leave Pay, adoption and surrogacy expense reimbursement, and more.<br><br>You will also receive PTO and/or PPTO that can be used for vacation, sick leave, holidays, or other purposes. The amount you receive depends on your job classification and length of employment. It will meet or exceed the requirements of paid sick leave laws, where applicable. For information about PTO, see Smart Guide page<br><br>Live Better U is a Walmart-paid education benefit program for full-time and part-time associates in Walmart and Sam&apos;s Club facilities. Programs range from high school completion to bachelor&apos;s degrees, including English Language Learning and short-form certificates. Tuition, books, and fees are completely paid for by Walmart.<br><br>Eligibility requirements apply to some benefits and may depend on your job classification and length of employment. Benefits are subject to change and may be subject to a specific plan or program terms. For information about benefits and eligibility, see One.Walmart.com.<br><br>Walmart is committed to maintaining a drug-free workplace and has a no tolerance policy regarding the use of illegal drugs and alcohol on the job. This policy applies to all employees and aims to create a safe and productive work environment.\n        </div>\n\n        \n\n    \n    \n    \n\n    <button class=\"show-more-less-html__button show-more-less-button\n        show-more-less-html__button--more\n        ml-0.5\" data-tracking-control-name=\"public_jobs_show-more-html-btn\" aria-label=\"Show more\" aria-expanded=\"false\">\n<!---->\n        \n            Show more\n          \n\n          <icon class=\"show-more-less-html__button-icon show-more-less-button-icon\" data-delayed-url=\"https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo\"></icon>\n    </button>\n  \n\n        \n\n    \n    \n    \n\n    <button class=\"show-more-less-html__button show-more-less-button\n        show-more-less-html__button--less\n        ml-0.5\" data-tracking-control-name=\"public_jobs_show-less-html-btn\" aria-label=\"Show less\" aria-expanded=\"true\">\n<!---->\n        \n            Show less\n          \n\n          <icon class=\"show-more-less-html__button-icon show-more-less-button-icon\" data-delayed-url=\"https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg\"></icon>\n    </button>\n  \n<!---->    </section>",
      "base_salary": {
        "currency": "$",
        "max_amount": 29,
        "min_amount": 16,
        "payment_period": "hr"
      },
      "salary_standards": "This range is provided by Walmart. Your actual pay will be based on your skills and experience — talk with your recruiter to learn more.",
      "is_easy_apply": false
    }
  ]
  ```
</ResponseExample>
