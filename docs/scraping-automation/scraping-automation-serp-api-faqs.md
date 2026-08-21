# SERP API FAQs

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/faqs](https://docs.brightdata.com/scraping-automation/serp-api/faqs)
> **Category**: `scraping-automation`

---

FAQs about the Bright Data SERP API (31 languages): setup, troubleshooting, Google Image and Hotels scraping and advanced search techniques.

<AccordionGroup>
  <Accordion title="Why should I use Bright Data's SERP API?">
    The Bright Data SERP API solution allows you to focus on what matters most, the data. It provides you with a 3-in-1 proxy unlocking solution that autonomously takes care of the **proxy management** (which proxy to use and when), **unlocking logic** (captcha solving, fingerprinting, retries, best headers, etc), and **scraping** functionality. 

    <Tab title="Easy to integrate">
      In your code its as easy as swapping out the 1 line of your regular proxy network request with this 1 line SERP API request
    </Tab>

    <Tab title="Pay only for success">
      You only pay for successful requests.
    </Tab>

    <Tab title="Stable and predictable Billing">
      Because pricing is done according to number of pages (price per 1k requests), the bandwidth of your request doesn't matter.
    </Tab>

    <Tab title="Accuracy">
      Use real user devices with laser-focused geotargeting (including city-level) to collect accurate Search Engine Result Pages (SERPs) from major search engines as a real user.
    </Tab>

    <Tab title="Built for volume and scale">
      Bright Data can support your growing traffic needs and peak periods with high success rates and exceptional response time (under 5 seconds), regardless of your request volume.
    </Tab>

    <Tab title="Reduce costs">
      Save money on data extraction engineers and IT professionals, without worrying about server maintenance.
    </Tab>

    <Tab title="Avoid operational headaches">
      Each request is sent from a different IP ensuring no IP is flagged or banned.
    </Tab>

    <Tab title="Structured data response">
      Get parsed or unparsed responses in JSON or HTML format for easy integration with any system.
    </Tab>

    <Tab title="Highly customized">
      Bright Data supports a wide variety of tailored parameters to answer your search requirements including different search types, different devices, results per page, etc.
    </Tab>

    <Tab title="Real Residential IPs">
      Access 400M+ monthly residential IPs in all geolocations.
    </Tab>
  </Accordion>

  <Accordion title="How to use SERP API for &#x22;Google Search By Image&#x22;?">
    With Bright Data’s SERP API, it’s easy to collect Google Search by Image data.

    Google reverse image search (officially "Google Search by Image"), is a service provided by Google that allows users to search for images **using an image as the starting point**, rather than a written or spoken search query.

    <Note>
      The JSON response includes the image in base64 encoding.
    </Note>

    <CodeGroup>
      ```sh Search by image URL theme={null}
      curl -v --compressed --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> "https://www.google.com/searchbyimage?image_url={TARGET_IMAGE_URL}"
      ```

      ```sh Search by an image stored locally theme={null}
      curl -v --compressed --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> 'http://www.google.com/searchbyimage/upload' -o results_page.html -F 'encoded_image=@{FULL_IMAGE_FILE_PATH}'
      ```
    </CodeGroup>

    See the rest of our [Google Image SERP features.](/scraping-automation/serp-api/query-parameters/google#lens)
  </Accordion>

  <Accordion title="How to collect hotel data with SERP API?">
    Bright Data's SERP API makes it easy to collect hotel data, like prices, availability, reviews, and more.

    **There are two ways to collect hotel data:**

    <Tabs>
      <Tab title="Google Search Hotel Knowledge">
        **Provides limited info per specific hotel on pricing and dates**

        When you search for a specific hotel using Google Search, its details and reviews appear in the knowledge graph/widget that you can see on the right side below:

        <img alt="hotels-html.png" />

        You can set arrival and departure dates, the number of guests, and compare pricing..

        With SERP API, you can set these fields to collect different price combinations using dedicated parameters. See the full set of hotel parameters and features in our [Google Hotels query parameters documentation](/scraping-automation/serp-api/query-parameters/google#hotels).

        <img alt="hotels-availability.png" />
      </Tab>

      <Tab title="Google Travel Hotel page">
        **Provides full details on hotels, pricing, and dates**

        SERP API also lets you target the hotel page in Google Travel (Google.\*/travel/hotels/…), where you can find more prices and search by additional parameters (including arrival and departure dates, the number of adults and children, the children’s ages, and whether or not it has free cancellation) to collect more price combinations.

        <Note>
          Only //Google.\*/travel/hotels/… URLs are supported.
        </Note>

        Go to the control panel [API Guide](https://brightdata.com/cp/serp_api/api/google/hotels) for an explanation of how to target this page and the dedicated parameters you can use, or see our [Google Hotels query parameters documentation](/scraping-automation/serp-api/query-parameters/google#hotels).

        <img alt="hotel-info.png" />
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="How to send SERP API HTTPS requests without SSL Certificate?">
    When targeting HTTPS, URL data is encrypted. Therefore, for SERP API to decrypt the data and return the result, you will need to download and install the [Bright Data Certificate](/general/account/ssl-certificate).

    Here are sample code on how to send HTTPS requests:

    <CodeGroup>
      ```sh Shell theme={null}
      curl "https://www.google.com/search?q=pizza&brd_json=1" -v --insecure --compressed --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>
      ```

      ```js NodeJS theme={null}
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
      ```

      ```java Java theme={null}
      -Dcom.sun.net.ssl.checkRevocation=false
      ```

      ```cs C# theme={null}
      ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;
      ```

      ```python Python theme={null}
      # for native `request` library:
      import ssl
      ssl._create_default_https_context = ssl._create_unverified_context

      # for `requests` library, disable the ssl check directly in the .get() method:
      # requests.get(url, proxies=proxies, verify=False)
      ```
    </CodeGroup>
  </Accordion>

  <Accordion title="How to send HTTPS requests with SSL validation?">
    <Tabs>
      <Tab title="Shell">
        Use the `cacert` flag followed by the certificate file path:

        ```sh Shell theme={null}
        curl -v --compressed "https://www.google.com/search?q=pizza&brd_json=1" --cacert "{cert file path}" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password>

        ```
      </Tab>

      <Tab title="Java">
        Please import the certificate to the Java Keystore. Here's an example using Java keytool to import the certificate:

        <CodeGroup>
          ```java Java theme={null}
          %JAVA_HOME% Keystore (mostly the cacerts file in ..\lib\security\).
          ```

          ```sh Keytool Command Example theme={null}
          keytool -import -alias <cert alias> -file <cert name>.cer -keystore <keystore filename> -storepass <keystore password>

          # After running the keytool command you will be prompted to trust the certificate: answer ‘y’
          ```
        </CodeGroup>
      </Tab>

      <Tab title="Other Programming Languages">
        Follow the instructions in the following article on [how to download and Install the Bright Data certificate](/general/account/ssl-certificate) to your local machine's Trusted Root Certification Authorities.

        ```sh Shell theme={null}
        T_ID&zone={ASYNC_ZONE}&output={output_fomat_html/json}&response_id={response_id} -H "Authorization: Bearer {API_KEY}" -o {Your_result_ouput_file}
        ```
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="How to parse JSON with SERP API?">
    Please refer to this article: [Parsing Search Results](/scraping-automation/serp-api/parsed-json-results/parsing-search-results)
  </Accordion>

  <Accordion title="How to send multiple queries in an identical API request? (DEPRECATED)">
    <Warning>
      The `multi` parameter was deprecated on December 7, 2025, and is no longer supported. Requests that include `multi` return only the first result. Do not use `multi` to send parallel SERP requests. Send each search as a separate SERP API request instead.
    </Warning>
  </Accordion>

  <Accordion title="I saw that Google recently stopped supporting the `num` parameter in requests. Are you working on an alternative solution?">
    Indeed, as of September 10, 2025, Google has started phasing out the `num` parameter feature.

    Due to this change, we recommend that customers requiring additional Google SERP pages (beyond the first) transition to use Bright Data’s Scrapers endpoint (Google SERP – 100 Results) to get positions 1–100 in a single call, no manual pagination, while controlling depth with start\_page/end\_page (1..10 ≈ Top 100).

    Learn more on how to [get top 100 results in 1 call](/scraping-automation/serp-api/get-top-100-google-results).
  </Accordion>

  <Accordion title="What are common use cases for SERP API?">
    <Tab title="Organic Keyword Tracking">
      Mapping a company's ranking for various keywords in different locations
    </Tab>

    <Tab title="Brand Protection">
      Track top results for company brands and trademarks
    </Tab>

    <Tab title="Price Comparison">
      Search for products on online shopping websites and compare prices between different vendors
    </Tab>

    <Tab title="Market Research">
      Collect information about companies, contacts, locations, and more
    </Tab>

    <Tab title="Detect Copyright Infringements">
      Search for images or other copyright-protected content
    </Tab>

    <Tab title="Ad Intelligence">
      See which ads are showing for keywords in different countries, including double-click & Google ad services
    </Tab>
  </Accordion>

  <Accordion title="How to query Microsoft Bing with dates filter?">
    In the following article, we will analyze the different options for date-specific search queries on Bing and how to use them effectively

    ## Types of Date Filter Queries

    <Tabs>
      <Tab title="All dates">
        No date filter applied

        * URL: [https://www.bing.com/search?q=YOUR\_QUERY](https://www.bing.com/search?q=YOUR_QUERY)
      </Tab>

      <Tab title="Past 24 hours">
        Add `filters=ex1%3a"ez1"` to the URL

        * URL: [https://www.bing.com/search?q=YOUR\_QUERY\&filters=ex1%3a"ez1](https://www.bing.com/search?q=YOUR_QUERY\&filters=ex1%3a"ez1)"
      </Tab>

      <Tab title="Past week">
        Add `filters=ex1%3a"ez2"` to the URL

        * URL: [https://www.bing.com/search?q=YOUR\_QUERY\&filters=ex1%3a"ez2](https://www.bing.com/search?q=YOUR_QUERY\&filters=ex1%3a"ez2)"
      </Tab>

      <Tab title="Past year">
        Add `filters=ex1%3a"ez3"` to the URL

        * URL: [https://www.bing.com/search?q=YOUR\_QUERY\&filters=ex1%3a"ez3](https://www.bing.com/search?q=YOUR_QUERY\&filters=ex1%3a"ez3)"
      </Tab>

      <Tab title="Exact Match">
        Specify the exact date range by adding `filters=ex1:"ez5_StartDateSequence_EndDateSequence”` to the URL

        * URL: [https://www.bing.com/search?q=YOUR\_QUERY\&filters=ex1:"ez5\_StartDateSequence\_EndDateSequence”](https://www.bing.com/search?q=YOUR_QUERY\&filters=ex1:"ez5_StartDateSequence_EndDateSequence”)

        <Tip>
          `StartDateSequence` and `EndDateSequence` can be calculated using the logic below.
        </Tip>
      </Tab>
    </Tabs>

    ***

    ## Determining the Sequence String for “Exact Match” Query

    To perform an Exact match date search, you need to calculate the sequence string for your desired date range. Follow these steps to determine the sequence string.

    <Steps>
      <Step title="Use known sequence as a “Starting Point”">
        Use January 1, 2024 as the starting point with known sequence: `19723`
      </Step>

      <Step title="Calculate StartDateSequence">
        * Count the days from January 1 to your desired starting date.
        * Add the number of days counted to the sequence number of January 1 to get the `StartDateSequence`.
          <Tip>
            Counting starts from “**0**”. e.g. 0, 1, 2, 3 ...
          </Tip>

        > #### Example:
        >
        > To calculate the sequence number for February 4, 2024:
        >
        > * Total days from January 1 to February 4: 35 days
        > * 35 - 1 (counting starts at “0”) = 34
        > * February 4, 2024: 19723 (Jan1) + 34 = 19757 (`StartDateSequence`)
      </Step>

      <Step title="Calculate EndDateSequence">
        Add the number of days in your date range to the `StartDateSequence` to get the `EndDateSequence`.

        > #### Example:
        >
        > To calculate the sequence number for February 20, 2024:
        >
        > * February 4, 2024: 19757
        > * Days from February 4 to February 20: 17 days
        > * 17 - 1 (counting starts at “0”) = 16
        > * February 20, 2024: 19757 + 16 = 19773 (`EndDateSequence`)
      </Step>

      <Step title="Form the Sequence String">
        * Use the format `ez5_StartDateSequence_EndDateSequence`
        * Replace `StartDateSequence` with the sequence number calculated above for the starting date.
        * Replace `EndDateSequence` with the sequence number calculated above for the ending date.

        > #### Example: For February 4, 2024, to February 20, 2024:
        >
        > * Calculated `StartDateSequence`: 19757
        > * Calculated `EndDateSequence`: 19773
        > * Sequence string: `ez5_19757_19773`
        > * URL for query `pizza`: <br />[https://www.bing.com/search?q=pizza\&filters=ex1:"ez5\_19757\_19773](https://www.bing.com/search?q=pizza\&filters=ex1:"ez5_19757_19773)"

        <Frame>
          <img alt="bing-exact-date-filter.png" />
        </Frame>
      </Step>
    </Steps>

    With the above, you can construct URLs to query Bing for any specific date range.
  </Accordion>

  <Accordion title="Why am I getting the error: &#x22;400 this endpoint is not supported&#x22;?">
    SERP API supports a select number of generic domains/endpoints related to search engines, some specific subdomains or endpoints, may not be supported -  example: `https://trends.google.com/trends` Is not supported while `https://trends.google.com/trends/explore` Is supported.

    To see a list of working examples of domains and paths that are supported, we highly recommend that you check the [SERP Playground](https://brightdata.com/cp/zones/serp_playground) and the [SERP Documentation](/scraping-automation/serp-api/query-parameters).
  </Accordion>

  <Accordion title="How can I get faster SERP API response times?">
    Use `"data_format": "parsed_light"` for [faster top 10 results](/scraping-automation/serp-api/introduction#get-only-top-10-results-faster-response), or contact [sales@brightdata.com](mailto:sales@brightdata.com) for [sub-1-second premium routing](/scraping-automation/serp-api/introduction#sub-1-second-response-time).
  </Accordion>
</AccordionGroup>
