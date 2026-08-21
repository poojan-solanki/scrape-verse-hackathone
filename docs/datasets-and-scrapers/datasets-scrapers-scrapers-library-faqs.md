# Scrapers FAQs

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/faqs](https://docs.brightdata.com/datasets/scrapers/scrapers-library/faqs)
> **Category**: `datasets-and-scrapers`

---

FAQs about Bright Data Scrapers (1000+ pre-built scrapers) covering setup, authentication, data formats, pricing and large-scale data extraction.

<AccordionGroup>
  <Accordion title="What is the Scrapers?">
    The Scrapers allows users to extract fresh data on demand from websites using pre-built scrapers. It can be used to automate data collection and integrate with other systems.
  </Accordion>

  <Accordion title="Who can benefit from using the Scrapers?">
    Data analysts, scientists, engineers, and developers or individuals seeking efficient methods to collect and analyze web data for AI, ML, big data applications, and more with no scraping development efforts will find Scraper APIs particularly beneficial.
  </Accordion>

  <Accordion title="How do I get started with the Scrapers?">
    Getting started with Scraper APIs is straightforward, once you open your Bright Data account, you will need to [generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) from your account settings. Once you have your key, you can refer to our [API documentation](/datasets/scrapers/scrapers-library/overview) for detailed instructions on making your first API call.

    <iframe title="Watch a demo video" />
  </Accordion>

  <Accordion title="What is the difference between the scrapers?">
    Each scraper can require different inputs. There are 2 main types of scrapers:

    1. **PDP** <br />These scrapers require URLs as inputs. A PDP scraper extracts detailed product information like specifications, pricing, and features from web pages
    2. **Discovery/ Discovery+PDP** <br />Discovery scrapers allow you to explore and find new entities/products through search, categories, Keywords and more.

    <Frame>
      <img alt="delivery-pdp.png" />
    </Frame>
  </Accordion>

  <Accordion title="Why are there different discovery APIs for the same domain?">
    Each discovery API allow you to find the desired data using a different method, it can by keyword, category URL or even location
  </Accordion>

  <Accordion title="How do I authenticate with the Scrapers?">
    Authentication is done using an API key. Include the API key in the `Authorization` header of your requests as follows: `Authorization: Bearer YOUR_API_KEY`.
  </Accordion>

  <Accordion title="How do I customize my request and trigger it?">
    Once picking the API you want to run, you can customize your request using our [detailed API parameters documentation](/api-reference/rest-api/scraper/asynchronous-requests), specifying the different types and expected inputs and responses.
  </Accordion>

  <Accordion title="Do you offer a free trial?">
    You’ll get a \$2 credit to explore and test our services.
  </Accordion>

  <Accordion title="How do I test the API?">
    You can quickly test the product by customizing the code on the control panel ([Demo video](https://app.arcade.software/flows/BPGoTdRmf89Ip1EQuIOW/view))

    <Steps>
      <Step title="Pick your desired API from the variety of APIs" />

      <Step title="Enter your inputs">
        <Frame>
          <img alt="trigger-a-collection.png" />
        </Frame>
      </Step>

      <Step title="Enter your API key">
        <Frame>
          <img alt="enter-api-token.png" />
        </Frame>
      </Step>

      <Step title="Select your preferred delivery method">
        <Frame>
          <img alt="delivery-method.png" />
        </Frame>

        Using a webhook - update the webhook URL and copy paste the “trigger data collection” code using and run the code on your client.

        Using an API - fill out the needed credentials and information based on the specific setting you chose (`S3`, `GCP`, `pubsub` and more) and copy the code and run the code after collection ends
      </Step>

      <Step title="Copy the code and run it on your client">
        <img alt="code.png" />

        All of the above can also be done by free tools such as [Webhook-site](https://webhook.site/) and [Postman](https://web.postman.co/)

        We also offer additional management APIs to acquire information about the collection status and fetch a list of all the snapshots under **Management APIs** tab
      </Step>
    </Steps>
  </Accordion>

  <Accordion title="What data formats does the Scrapers support?">
    The Scrapers supports data extraction in various formats including `JSON`, `NDJSON`, `JSONL` and `CSV`. Specify your desired format in the request parameters.
  </Accordion>

  <Accordion title="What are the rates for the Scrapers?">
    We charge based on the number of records we delivered, you only pay for what you get, do note that unsuccessful attempts resulting from incorrect inputs by the user will still be billed. Since the failure to retrieve data was due to user input rather than Bright Data’s performance, resources were still consumed in processing the request. The rate per record depends on your subscription plan (starting from 0.7\$ per 1000 records). Check our [pricing plans](https://brightdata.com/pricing/web-scraper) or your account details for specific rates.
  </Accordion>

  <Accordion title="What should I do if my API key expires?">
    For account admins: If your API key expires, you need to create a new one in your account settings.

    <Frame>
      <img alt="no-api-token.png" />
    </Frame>

    For account users: If your API key expires, please contact your account admin to issue a new API key.

    <Frame>
      <img alt="no-api-token-user.png" />
    </Frame>
  </Accordion>

  <Accordion title="How does Scraper APIs manage large-scale data extraction tasks?">
    Featuring capabilities for high concurrency and batch processing, Scraper APIs excel in large-scale data extraction scenarios. This ensures developers can scale their scraping operations efficiently, accommodating massive volumes of requests with high throughput.
  </Accordion>

  <Accordion title="How can I upgrade my subscription plan?">
    To upgrade your subscription plan, visit the billing section on your dashboard account and select the desired plan. For further assistance, contact our support team.
  </Accordion>

  <Accordion title="What specific use cases are Scraper APIs optimized for?">
    The Scraperss support a vast range of Use cases including competitive benchmarking, market trend analysis, dynamic pricing algorithms, sentiment extraction, and feeding data into machine learning pipelines. Essential for e-commerce, fintech, and social media analytics, these APIs empower developers to implement data-driven strategies effectively.
  </Accordion>

  <Accordion title="How fast is the Scrapers?">
    We offer real-time support for scrapers using URLs as inputs, with up to 20 URL inputs, and batch support for more than 20 inputs, regardless of the scraper type.

    The Scrapers delivers real-time data for up to 20 inputs per call, with response times varying by domain, ensuring fresh data without relying on cached information.

    Scrapers that discover new records (e.g., "Discover by keyword," "Discover by hashtag") generally take longer and use batch support, as the actual response times can be influenced by several factors, including the target URL’s load time and the execution duration of user-defined Page Interactions. An indication of the average response time for each scraper can be found on the specific Scraper page.
  </Accordion>

  <Accordion title=" How do I cancel an API call?">
    You can cancel a run using the following endpoint:

    ```sh theme={null}
    curl -H "Authorization: Bearer <Token>" -H "Content-Type: application/json" -k "https://api.brightdata.com/datasets/v3/snapshot/SNAPSHOT_ID/cancel" -X POST
    ```

    Make sure the snapshot id is the one you want to cancel.

    Note: If you cancel the run no data will be delivered to you and a snapshot can't be canceled after it finished collecting
  </Accordion>

  <Accordion title=" What is the difference between a notify URL and a webhook URL configurations? ">
    The key difference between a notify URL and a webhook URL in API configurations lies in their purpose and usage:

    Notify URL:

    Typically used for asynchronous communication. The system sends a notification to the specified URL when a task is completed or when an event occurs. The notification is often lightweight and doesn't include detailed data but may provide a reference or status for further action (e.g., "Job completed, check logs for details").

    Webhook URL:

    Also used for asynchronous communication but is more data-centric. The system pushes detailed, real-time data payloads to the specified URL when a specific event occurs. Webhooks provide direct, actionable information without requiring the client to poll the system.

    Example Use Case:

    A notify URL might be used to inform you that a scraping job is finished. A webhook URL could send the actual scraped data or detailed metadata about the completion directly to you.
  </Accordion>

  <Accordion title=" For how long a snapshot is available after i triggered a collection?">
    The snapshot is available for 30 days, you can retrieve the snapshot during this time period via [delivery API](/api-reference/scrapers/delivery-apis/download-snapshot) options and the snapshot ID
  </Accordion>

  <Accordion title="Are there any limitations for specific scrapers or domains?">
    There are certain limitations on these platforms:

    <AccordionGroup>
      <Accordion title="Facebook" icon="facebook">
        |                        |   |
        | ---------------------- | - |
        | Posts (by profile URL) |   |
        | Comments               |   |
        | Reels                  |   |
      </Accordion>

      <Accordion title="Instagram" icon="instagram">
        |                        |   |
        | ---------------------- | - |
        | Posts (by keyword)     |   |
        | Posts (by profile URL) |   |
        | Comments               |   |
        | Reels                  |   |

        <Warning>
          Media Links expiring after 24 hours.
        </Warning>
      </Accordion>

      <Accordion title="Pinterest" icon="pinterest">
        |                        |   |
        | ---------------------- | - |
        | Profiles               |   |
        | Posts (by keyword)     |   |
        | Posts (by profile URL) |   |
      </Accordion>

      <Accordion title="Reddit" icon="reddit">
        |                    |   |
        | ------------------ | - |
        | Posts (by keyword) |   |
        | Comments           |   |
      </Accordion>

      <Accordion title="TikTok" icon="tiktok">
        |                          |   |
        | ------------------------ | - |
        | Profiles (by search URL) |   |
        | Comments                 |   |
        | Posts (by keyword)       |   |
        | Posts (by profile URL)   |   |
      </Accordion>

      <Accordion title="Quora" icon="quora">
        |       |   |
        | ----- | - |
        | Posts |   |
      </Accordion>

      <Accordion title="Vimeo" icon="vimeo">
        |                   |   |
        | ----------------- | - |
        | Posts(by keyword) |   |
        | Posts(by URL)     |   |
      </Accordion>

      <Accordion title="X (Twitter)" icon="twitter">
        |       |   |
        | ----- | - |
        | Posts |   |
      </Accordion>

      <Accordion title="YouTube" icon="YouTube">
        |                           |   |
        | ------------------------- | - |
        | Profiles                  |   |
        | Posts (by keyword)        |   |
        | Posts (by URL)            |   |
        | Posts (by search filters) |   |
      </Accordion>

      <Accordion title="TikTok" icon="TikTok">
        Media only accessible with a generated token in the same session.
      </Accordion>

      <Accordion title="Linkedin" icon="Linkedin">
        Posts are limited to amount that is shown publicly on profile (e.g. **10**)
      </Accordion>
    </AccordionGroup>
  </Accordion>

  <Accordion title="What does it mean when a snapshot is marked as empty?">
    When a snapshot is marked as empty, it means there are no valid or usable records in the snapshot. However, this does not imply the snapshot is completely devoid of content. In most cases, it contains information such as errors or dead pages:

    * **Errors**: Issues encountered during the data collection process, such as invalid inputs, system errors, or access restrictions.
    * **Dead Pages**: Pages that could not be accessed for reasons like 404 errors (page not found), removed content (e.g., unavailable products), or restricted access.

    To view these details, you can use the parameter `include_errors=true` in your request, which will display the errors and information about the dead pages in the snapshot. This helps you diagnose and understand the issues within the snapshot.
  </Accordion>

  <Accordion title="How to stop a web scraper task?">
    You can stop a running collection by utilizing the following API call: [https://docs.brightdata.com/api-reference/scrapers/management-apis/cancel-snapshot](https://docs.brightdata.com/api-reference/scrapers/management-apis/cancel-snapshot)
  </Accordion>

  <Accordion title="Which domains do you provide scrapers for?">
    ae.com

    airbnb.com

    amazon.com

    apps.apple.com

    ashleyfurniture.com

    asos.com

    balenciaga.com

    bbc.com

    berluti.com

    bestbuy.com

    booking.com

    bottegaveneta.com

    bsky.app

    carsales.com.au

    carters.com

    celine.com

    chanel.com

    chileautos.cl

    crateandbarrel.com

    creativecommons.org

    crunchbase.com

    delvaux.com

    digikey.com

    dior.com

    ebay.com

    edition.cnn.com

    en.wikipedia.org

    enricheddata.com

    espn.com

    etsy.com

    example.com

    facebook.com

    fanatics.com

    fendi.com

    finance.yahoo.com

    g2.com

    github.com

    glassdoor.com

    global.llbean.com

    goodreads.com

    google.com

    hermes.com

    homedepot.ca

    homedepot.com

    ikea.com

    imdb.com

    indeed.com

    infocasas.com.uy

    inmuebles24.com

    instagram.com

    la-z-boy.com

    lazada.com.my

    lazada.sg

    lazada.vn

    lego.com

    linkedin.com

    loewe.com

    lowes.com

    manta.com

    martindale.com

    massimodutti.com

    mattressfirm.com

    mediamarkt.de

    metrocuadrado.com

    montblanc.com

    mouser.com

    moynat.com

    mybobs.com

    myntra.com

    news.google.com

    nordstrom.com

    olx.com

    otodom.pl

    owler.com

    ozon.ru

    pinterest.com

    pitchbook.com

    play.google.com

    prada.com

    properati.com.co

    raymourflanigan.com

    realestate.com.au

    reddit.com

    revenuebase.ai

    sephora.fr

    shop.mango.com

    shopee.co.id

    sleepnumber.com

    slintel.com

    target.com

    tiktok.com

    toctoc.com

    tokopedia.com

    toysrus.com

    trustpilot.com

    trustradius.com

    unashamedcataddicts.quora.com

    us.shein.com

    ventureradar.com

    vimeo.com

    walmart.com

    wayfair.com

    webmotors.com.br

    wildberries.ru

    worldpopulationreview\.com

    worldpostalcode.com

    www2.hm.com

    x.com

    xing.com

    yapo.cl

    yelp.com

    youtube.com

    ysl.com

    zalando.de

    zara.com

    zarahome.com

    zillow\.com

    zonaprop.com.ar

    zoominfo.com

    zoopla.co.uk

    If your target domain is not on this list, we can develop a custom scraper specifically for you
  </Accordion>

  <Accordion title="How can I use Bright Data to access hotel data through an API?">
    We don’t provide dedicated scrapers specifically for hotels, but we do offer a Booking.com scraper and the option to create a custom scraper tailored to your specific requirements.
  </Accordion>

  <Accordion title="How do I get the data I need?">
    Here’s a quick guide to help you get started and choose the right solution for your needs:

    * Option 1: Enriched, Pre-Collected Data – Explore Our Datasets Marketplace

    If you’re looking for ready-to-use, high-quality data, our Datasets Marketplace is the perfect place to start. We’ve already done the heavy lifting by collecting and enriching vast amounts of data from a variety of sources. These datasets are designed to save you time and effort, so you can focus on analyzing the data and making smarter decisions.

    Simply browse our marketplace, find the dataset that fits your needs, and start using it right away.

    Option 2: Web Scrapers for Fresh and Real-Time Data

    If your project requires fresh data or highly specific information that isn’t available in our Datasets Marketplace, we offer powerful tools to help you collect fresh and real-time data directly from the web. Here’s how you can get started:

    **Pre-Built Web Scrapers** We offer a wide range of [pre-built web scrapers for popular websites](/datasets/scrapers/scrapers-library/overview), allowing you to collect data quickly and efficiently. These scrapers are ready to use and require minimal setup, making them a great choice for users who want to hit the ground running.

    Managed Services

    Can’t find your target website in our list of pre-built scrapers? No problem\\! We can create a [Managed Services tailored specifically to your needs](/datasets/scrapers/managed-services). The Bright Data team of experts will work with you to design a solution that collects the exact data you’re looking for.

    Build Your Own Scraper

    For users with JavaScript knowledge or access to developer resources, we also offer the option to build your own scraper using our [Integrated Development Environment (IDE)](/datasets/scraper-studio/introduction). This gives you full control and flexibility to create a scraper that meets your unique requirements.

    Have questions or need assistance? The Bright Data team of experts is always here to help. Let’s get started\\!
  </Accordion>

  <Accordion title="How do I scrape data from google maps?">
    1. Find the "Google Maps reviews" scraper on the dashboard and choose if you want to run it as an API request or initiate it using the "No code" option from the control panel
    2. Enter the input parameters (The place page URL and, Number of days to retrieve reviews from)
    3. Configure the needed request parameters if using an API
    4. Initiate the run and collect the data
  </Accordion>

  <Accordion title="How do I cancel a running snapshot?">
    To cancel a running snapshot, use one of the following methods:

    1. **API Request:**
       * Send a `POST` request to the endpoint: POST /datasets/v3/snapshot//cancel ([playground](/api-reference/scrapers/management-apis/cancel-snapshot))
       * Replace `{snapshot_id}` with the ID of the snapshot you want to cancel.
    2. **Control Panel:**
       * Go to the **Logs** tab of the scraper.
       * Locate the running snapshot.
       * Hover over the specific run and click the **"X"** to cancel it.

    Both methods will stop the snapshot process if it is currently running.
  </Accordion>

  <Accordion title="Does the chatGPT scraper works with “SearchGPT” active? ">
    Yes, Bright Data GPT scraper always works with the “Search” function active.
  </Accordion>

  <Accordion title="Can I view the code behind the scraper?">
    Scrapers available in the Web Scrapers Library are pre-built solutions, and their underlying code is not accessible for modification or viewing.<br />For those interested in seeing how scrapers work, the Web Scraper IDE provides several example templates when you create a new scraper. These examples serve as practical references to help you understand scraping techniques and build your own custom solutions.
  </Accordion>

  <Accordion title="Can i get the results directly to my machine or software while using the Scrapers?">
    Yes, using the Scrapers you can return the scrape data to the request point<br />Using the following endpoint - `POST api.brightdata.com/datasets/v3/scrape`<br />This endpoint allows you to fetch data efficiently and ensures seamless integration with your applications or workflows.<br /><br />**How does it works?**<br />The API enables you to send a scraping request and receive the results directly at the request point. This eliminates the need for data retrieval or the need to send to external storage, streamlines your data collection process.<br /><br />**Limitations**

    * For long collection operations the best practice is to use our [tigger/ ](/api-reference/rest-api/scraper/asynchronous-requests)endpoing (In case the collection request is taking too long while using /scrape endpoint, you will get the <br />snapshot ID, which you will use to [download](/api-reference/scrapers/delivery-apis/download-snapshot) the data once ready)
  </Accordion>

  <Accordion title="What is a dataset id and where can I find it?">
    A Dataset ID is a unique identifier used in Scrapers requests. It's included in the request URL to specify which particular Web Scraper you want to access. This ID ensures that your API call retrieves data from the correct scraper in Bright Data. Here is how it is used: `https://api.brightdata.com/datasets/v3/trigger?dataset_id=DATASET_ID_HERE`

    A dataset id will look like: `gd_XXXXXXXXXXXXXXXXX` For example: `gd_l1viktl72bvl7bjuj0`

    You can find the exact dataset ID in two places:

    1. In the **browser URL bar** when viewing a scraper page, it appears as `/cp/scrapers/gd_xxx`
    2. In the **Code examples** panel on the scraper's **Configuration** tab, it is pre-filled in the curl command, ready to copy.

    Note: An id that looks like `s_XXXXXXXXXXXXXXXXXX`for example: `s_m7hm4et0141r2rhojq` is not a dataset ID, it is a snapshot id - a snapshot is a collection of data that is collected from a single Scrapers request.
  </Accordion>

  <Accordion title="What is 'Discovery only' mode?">
    In Discovery-only mode, the results obtained during the discovery phase are returned as the final output and do not proceed to the PDP (Product Detail Page) stage.

    <br />For example, if an Amazon product discovery scraper is initiated in Discovery-only mode, it will return only the product URLs found during the discovery phase. When this mode is turned off, the scraper will continue to visit and extract data from each individual product page identified during discovery.
  </Accordion>

  <Accordion title="Is there an option to rerun failed snapshots?">
    Yes - you can rerun a snapshot using the rerun API.

    ﻿Example:

    ﻿curl --request POST --url [https://api.brightdata.com/datasets/v3/snapshot/\{snapshot\_id}/rerun](https://api.brightdata.com/datasets/v3/snapshot/\{snapshot_id}/rerun) --header 'Authorization: Bearer '
  </Accordion>

  <Accordion title="How to retrieve your original inputs?">
    You can use the following API call to get your input data back:

    ```bash theme={null}
    curl -H "Authorization: Bearer TOKEN API" -H "Content-Type: application/json" "https://api.brightdata.com/datasets/v3/snapshot/sd_XXXX/input" -k
    ```

    Simply replace:

    * `YOUR_API_KEY` with your actual API key
    * `sd_XXXX` with your snapshot ID
  </Accordion>

  <Accordion title="What is the difference between 'Synchronous (Real-time)' and 'Asynchronous' in the UI?">
    The Control Panel uses two UI labels that map directly to API endpoints:

    | UI Label                    | API Endpoint                | Use when                                                        |
    | --------------------------- | --------------------------- | --------------------------------------------------------------- |
    | **Synchronous (Real-time)** | `POST /datasets/v3/scrape`  | You need instant results for 1–20 URLs                          |
    | **Asynchronous**            | `POST /datasets/v3/trigger` | You're processing bulk URLs, discovery tasks, or large datasets |
  </Accordion>

  <Accordion title="Where do I get a Snapshot ID?">
    Snapshot IDs are returned when you trigger a collection (POST `/datasets/v3/trigger`), filter a dataset (POST `/datasets/filter`), or via a dataset subscription. You can also list all your snapshots with GET `/datasets/v3/snapshots`.
  </Accordion>

  <Accordion title="What do I do with the delivery job ID in the response?">
    The `id` in the response is a delivery job ID. Use it to track delivery progress by calling GET `/datasets/v3/delivery/{delivery\_id}`. Poll until status is "done".
  </Accordion>

  <Accordion title="Does the snapshot need to be in a specific status?">
    Yes. The snapshot must be in `ready` status. Check with GET `/datasets/v3/progress/{snapshot_id}` before calling deliver. Possible statuses: `scheduled`, `building`, `ready`, `failed`.
  </Accordion>

  <Accordion title="Can I deliver the same snapshot to multiple destinations?">
    Yes. Call this endpoint multiple times with different delivery configurations for the same snapshot ID.
  </Accordion>

  <Accordion title="What file formats are supported?">
    `json`, `jsonl`, and `csv`.
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
