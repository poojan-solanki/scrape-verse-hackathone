# Dataset marketplace FAQs

> **Official Source**: [https://docs.brightdata.com/datasets/marketplace/faqs](https://docs.brightdata.com/datasets/marketplace/faqs)
> **Category**: `datasets-and-scrapers`

---

FAQs about Bright Data's Dataset Marketplace (250+ domains), including available datasets, delivery options and purchase choices for ready-to-use data.

<AccordionGroup>
  <Accordion title="What are some of the datasets available on the Dataset Marketplace?">
    The following is a partial list of datasets available for immediate download from the Datasets Marketplace:

    **Popular Datasets**

    * Amazon products
    * Crunchbase companies information
    * Facebook - Posts by group URL
    * Github repository
    * Glassdoor companies overview information
    * LinkedIn company information
    * LinkedIn people profiles
    * LinkedIn posts
    * Zillow properties listing information

    The datasets are broken up by category. Here are the main categories and some of the datasets:

    **eCommerce Data**

    * amazon.com, amazon.co.uk, amazon.de, amazon.es, amazon.fr, amazon.in, amazon.it,
    * homedepot.com, homedepot.ca
    * lazada.com.my, lazada.sg, lazada.vn

    **Real Estate Data**

    These datasets include information regarding housing data, real estate prices, rent prices etc.

    * Bayut UAE Property Listings
    * Booking.com Property Listings
    * Dubizzle UAE Property Listings
    * PropertyFinder Property Listings
    * US Consumer Property
    * ZoomProperty UAE Property Listings
    * infocasas.com.uy
    * inmuebles24.com
    * metrocuadrado.com
    * otodom.pl
    * properati.com.co
    * realestate.com.au
    * toctoc.com
    * zillow\.com
    * zonaprop.com.ar
    * zoopla.co.uk

    **Social Media Data**

    * facebook.com
    * instagram.com
    * linkedin.com
    * pinterest.com
    * reddit.com
    * tiktok.com
    * unashamedcataddicts.quora.com
    * vimeo.com
    * x.com
    * youtube.com

    **Travel Data**

    * Booking.com Hotel Room Pricing and Availability
    * Deliveroo Restaurant Listings
    * OpenTable Restaurant Listings
    * Short-Term Rental Occupancy & Pricing Dataset
    * Talabat Restaurant Listings
    * Tripadvisor Restaurant Listings
    * Zomato UAE Restaurant Listings
    * airbnb.com

    **B2B Data**

    * Business Contacts Dataset
    * Business Firmographic Data
    * Business Intelligence Dataset
    * Business Location (POI) Dataset
    * Companies Hierarchy Dataset
    * Online Intent Data
    * Politically Exposed Persons List
    * Tech Install base Data Feed
    * US B2B Employees
    * US Consumer Demographics
    * crunchbase.com
    * g2.com
    * glassdoor.com
    * google.com
    * indeed.com
    * linkedin.com
    * manta.com
    * owler.com
    * slintel.com
    * stackoverflow\.com
    * trustpilot.com
    * ventureradar.com
    * xing.com
    * yelp.com

    The datasets marketplace is continously updated with fresh datasets. For the complete list, click on "Web Data" on the sidebar, and then on "Datasets Marketplace" on the top bar.

    If the domains you need aren't exist in the Marketplace, you can request them through the Custom Dataset (CDS).
  </Accordion>

  <Accordion title="Do you offer any free datasets?">
    Yes! you can download a few free datasets:

    * espn.com - NBA data
    * goodreads.com
    * imdb.com
    * worldpopulationreview\.com

    The datasets marketplace is continously updated with fresh datasets. For the complete list, click on “Web Data” on the sidebar, and then on “Datasets Marketplace” on the top bar.
  </Accordion>

  <Accordion title="Why does the timestamp differ from the delivery date in the marketplace dataset?">
    The schedule run is designed to ensure timely delivery.

    The delivery deadline is calculated based on previous collection cycles and the estimated refresh duration.

    Therefore, the collection may start earlier than the delivery date to guarantee that the data is delivered on time.
  </Accordion>

  <Accordion title="How do I see data snapshots that are ready?">
    You can find your data snapshots under the "My datasets" tab. There, you'll see a table with information about each snapshot, including its status: ready, failed, or in building.
  </Accordion>

  <Accordion title="What do I do with the Snapshot ID?">
    A Snapshot ID is a unique identifier assigned to a specific data snapshot, formatted as "snap\_XXXXXX".

    You should use the Snapshot ID whenever there is an issue with a particular data snapshot. Including this ID in your support ticket helps the support team quickly identify the exact snapshot in question, leading to faster issue resolution.

    The Snapshot ID ensures that both you and the support team are referring to the same data set, reducing confusion and delays in addressing your problem.
  </Accordion>
</AccordionGroup>

<AccordionGroup>
  <Accordion title="How do you set the record limit?">
    You can set a record limit in two ways:

    **Using the control panel:** Before purchasing a dataset, click “Proceed to purchase.” On the “Choose delivery frequency” page, select the “Too pricey? Limit dataset records” option to specify your desired record limit.

    **Through the Filter API:** Add a parameter to limit the number of records returned by the API. For reference, see: [Dataset Filter API - records\_limit](/api-reference/marketplace-dataset-api/filter-dataset#body-records-limit).
  </Accordion>

  <Accordion title="What is a commitment cost for the Dataset (Filter) API?">
    Currently, there is no monthly commitment or minimum order of \$250 required when using the Dataset Filter API. You only pay based on your actual record consumption.
  </Accordion>

  <Accordion title="I ran a filter request and was charged before buying the data. What's going on?">
    When you submit a dataset filter API request, compute resources are used to identify records matching your filter criteria. If matching records are found, you will be charged based on the amount of these matched records. However, if no matching records are found, you will not be charged. To avoid charges while exploring your filter criteria, you can test filters through the dataset preview table in the control panel, which offers up to 10 free filters per day.
  </Accordion>

  <Accordion title="Why are some fields not fully fillable?">
    Some fields may have lower fill rates due to limitations or gaps in the publicly available source data. Fill rates vary depending on dataset type and source quality - which can result in partial coverage for specific attributes. We provide detailed fill rates and statistics for each dataset to help you evaluate completeness before purchasing.
  </Accordion>

  <Accordion title="I need datasets">
    Bright Data offers several services for accessing and managing datasets:

    1. **Dataset Marketplace**: This is a centralized platform where you can discover, customize, and purchase high-quality datasets from over 250 domains. You can browse pre-built datasets across multiple domains, examine data samples, and apply advanced filters. [Explore the Dataset Marketplace here](https://brightdata.com/cp/datasets/browse).
    2. **Dataset APIs**: These APIs allow you to request, initiate, and manage data collections. You can define parameters for new dataset collections, check the status of your requests, and download datasets using snapshot IDs. [Learn more about Dataset APIs here](https://brightdata.com/api-reference/marketplace-dataset-api/request-a-collection).
    3. **Deep Lookup**: This service provides a more granular and streamlined way to request and manage data collections, facilitating effective dataset generation according to your specific needs. [Explore Deep Lookup here](/datasets/deep-lookup/overview).

    Would you like more information on how to use any of these services?
  </Accordion>
</AccordionGroup>

<AccordionGroup>
  <Accordion title="Does the &#x22;LinkedIn People Profiles&#x22; dataset include email addresses or phone numbers?">
    * By default, standard LinkedIn profile records **do not** include email addresses or phone numbers. This information is not publicly available on LinkedIn.
    * However, Bright Data offers an **enriched business contact** solution (in partnership with RevenueBase) that adds business emails and phone numbers for many LinkedIn people profiles, fully GDPR-compliant and sourced via third-party validation.
    * Contact data coverage may vary by profile and use case.
  </Accordion>

  <Accordion title="How can I request enriched records with email and phone?">
    * In the Dataset Marketplace, after selecting "LinkedIn People Profiles", use the **Contact filters** button (on the right side of the Data sample view) to choose your contact data options:
      * **Standard LinkedIn profile data:** No contact info.
      * **Enriched business contact info:** Select “Standard Profiles + Enriched with Business Contact Info” or “Only Profiles with Business Contact Info” to receive available business emails and phone numbers (where provided via RevenueBase partnership and in accordance with GDPR/compliance).
    * Click “Apply filter” to preview and purchase the dataset with your chosen contact enrichment.
  </Accordion>

  <Accordion title="Is the enrichment GDPR-compliant?">
    Yes. All provided business contact data is sourced and processed according to GDPR and other compliance requirements, using approved partners such as RevenueBase.
  </Accordion>

  <Accordion title="Can I get contact info using Deep Lookup?">
    Yes. Bright Data’s [Deep Lookup](https://brightdata.com/cp/deep_lookup) can search for people and return available business contact details (email/phone), where legally sourced and compliant. Specify your entity and required columns in the query (e.g., email, phone).
  </Accordion>

  <Accordion title="How do I check what fields are included before purchase?">
    * Go to Control Panel → Dataset Marketplace → LinkedIn People Profiles.
    * Click “Preview sample” to review all available fields.
    * For enriched datasets, use the **Contact filters** panel as described above, and preview sample rows before placing your order.
  </Accordion>

  <Accordion title="What if I have a compliance or usage question?">
    For full details on compliance, permissible usage, and supported geographies, speak directly with your Bright Data account manager or reach out via [Support](https://brightdata.com/cp/support).

    **Summary:**

    * **Standard LinkedIn profiles** don’t include emails/phones.
    * **Enriched business contact info** (email/phone) is available: just use the Contact filters button in the Dataset Marketplace view.
    * **Deep Lookup** is another route for contact discovery.
    * **Always review** the filtered sample before purchasing, and contact support for custom requirements.

    Let me know if you want a live demo, pricing, or coverage estimate!
  </Accordion>
</AccordionGroup>

<AccordionGroup>
  <Accordion title="What is the API rate limit?">
    The Filter API rate limit is 120 requests per hour. This applies to all API calls and snapshot triggers within the specified time frame. Note: Plan your API calls accordingly to stay within the hourly limit. Consider implementing retry logic with exponential backoff for optimal performance.
  </Accordion>

  <Accordion title="What is the maximum number of values I can send to the API filters?">
    You can send up to 10,000 input lines in a single API request when using list filters or include filters. Best Practice: For large datasets, consider batching your requests to stay within the 10,000 line limit while maintaining efficient processing.
  </Accordion>

  <Accordion title="What is the maximum input file size for the API?">
    The maximum input file size is 200 MiB for any single API request. Warning: Files exceeding 200 MiB will be rejected. Compress your data or split large files into smaller chunks before submission.
  </Accordion>

  <Accordion title="What is the maximum snapshot size for single-file downloads?">
    You can download snapshots up to 5 GB as a single file.

    <Tip>
      For snapshots larger than 5 GB, the API will automatically provide chunked download options or streaming capabilities to handle the data efficiently.
    </Tip>

    ### Quick Reference

    | Limit Type        | Value    | Description                            |
    | :---------------- | :------- | :------------------------------------- |
    | Rate Limit        | 120/hour | Maximum API calls per hour             |
    | Input Lines       | 10,000   | Maximum values in list/include filters |
    | Input File Size   | 200 MiB  | Maximum size for uploaded files        |
    | Snapshot Download | 5 GB     | Maximum size for single-file download  |

    <Note>
      **Need Higher Limits?**<br />Contact our Enterprise team for custom rate limits and increased capacity options tailored to your business needs.
    </Note>
  </Accordion>
</AccordionGroup>

<AccordionGroup>
  <Accordion title="Where do I get a Snapshot ID?">
    Snapshot IDs are returned when you [Trigger Collection](/api-reference/rest-api/scraper/asynchronous-requests) (POST `/datasets/v3/trigger`), [Filter Dataset](/api-reference/marketplace-dataset-api/filter-dataset-with-csv-json-files) (POST `/datasets/filter`), or via a dataset subscription. You can also [list all your snapshots](/api-reference/marketplace-dataset-api/get-dataset-list) with GET `/datasets/v3/snapshots`.

    > See "[Before you begin](/api-reference/marketplace-dataset-api/deliver-snapshot#before-you-begin)" for more details.
  </Accordion>

  <Accordion title="What do I do with the delivery job ID in the response?">
    The `id` in the response is a delivery job ID. Use it to track delivery progress by calling GET `/datasets/v3/delivery/{delivery_id}`. Poll until status is "done".

    > See [Tracking delivery status](/api-reference/marketplace-dataset-api/deliver-snapshot#tracking-delivery-status) for more details.
  </Accordion>

  <Accordion title="Does the snapshot need to be in a specific status?">
    Yes. The snapshot must be in `ready` status. Check with GET `/datasets/snapshots/{id}` before calling deliver.

    > Possible statuses: `scheduled`, `building`, `ready`, `failed`.
  </Accordion>

  <Accordion title="Can I deliver the same snapshot to multiple destinations?">
    Yes. Call this endpoint multiple times with different delivery configurations for the same snapshot ID.
  </Accordion>

  <Accordion title="What file formats are supported?">
    json, jsonl, and csv.
  </Accordion>

  <Accordion title="How do I split large snapshots into smaller files?">
    Use the `batch_size` parameter to set the number of records per file. Each file (batch) must stay under the 5GB hard limit. Estimate `batch_size` by dividing 5GB by your average record size, then start lower and adjust based on the actual file size you get.

    For example, if your average record is \~5KB, a `batch_size` of 1,000,000 records lands right at the \~5GB limit. Start at 500,000 records (\~2.5GB) to stay safely under, then raise or lower `batch_size` based on the file size you receive.
  </Accordion>

  <Accordion title="Why did my request return a 400 error?">
    The most common cause is that your `batch_size` produces a file larger than 5GB. For example, if your average record size is \~5KB, a `batch_size` of 1,000,000 produces a \~5GB file that may exceed the limit. Lower your `batch_size` (e.g., to 100,000) and retry.
  </Accordion>

  <Accordion title="Can I compress the output?">
    Yes. Set `compress: true` to receive gzip-compressed files.
  </Accordion>

  <Accordion title="What is the maximum file size per batch?">
    5GB. This is a hard limit per delivered file. Use `batch_size` to control how many records go into each file and ensure each stays under this threshold.
  </Accordion>
</AccordionGroup>
