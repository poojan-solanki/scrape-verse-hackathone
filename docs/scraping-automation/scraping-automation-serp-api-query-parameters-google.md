# SERP API Google query parameters

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/google](https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/google)
> **Category**: `scraping-automation`

---

Configure the Bright Data SERP API (31 languages) for Google search, Maps, Trends, Reviews, Images, Lens, Hotels and Flights with parameters per access point.

## The Search URL

Bright Data uses advanced parsing and access logic to provide you reliable response of search results, as fast as possible. We require that your search prefix will not carry any arguments in the URL **before** the `q=` argument. Relaying arguments before the `q` argument may result in delays in response and lower success rate.

Example for correct URL with the `gl` argument appended for search results in the US:

```text theme={null}
https://www.google.com/search?q=pizza&gl=us
```

Example for **incorrect** URL, with `gl` argument preceding `q` argument.

```text theme={null}
https://www.google.com/search?gl=us&q=pizza
```

### How to search for a term comprised of multiple words?

When you issue the query, add a `+` character in between the words in your search term. So if you want to search for "pizza in paris" the search string should be: `pizza+in+paris`

```text theme={null}
https://www.google.com/search?q=pizza+in+paris
```

## Web search

### Query parameters

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    <Note>
      Google now serves all search results exclusively through `google.com` and as such, any **SERP API** request sent to a different Google TLD (e.g., `google.co.uk`, `google.ca`) will automatically be routed through `google.com`.

      **Localization** is no longer determined by the TLD and should instead be configured solely using the `gl` (country) and `hl` (language) query parameters below:
    </Note>

    ### `gl`

    Two-letter country code used to define the country of search

    ```sh gl theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>:<zone_password> "https://www.google.com/maps/search/hotels+new+york/?gl=us"
    ```

    ***

    ### `hl`

    Two-letter language code used to define the page languages

    ```sh hl theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&hl=en"
    ```
  </Accordion>

  <Accordion title="Search type" icon="magnifying-glass">
    ### `tbm`

    Define search type. For regular search there is no need to use the `tbm` parameter while other types have a unique `tbm` value.

    > #### Example:
    >
    > `tbm=nws` - news <br />`tbm=vid` - videos <br />`tbm=lcl` - Google Places (local search results)

    <Note>
      For Image search, see the [Images](#images) section.
    </Note>

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=deli&hl=en&gl=us&tbm=lcl&uule=Charleston,South+Carolina,United+States&brd_json=1"
    ```

    ### `udm`

    > #### Example:
    >
    > `udm=1` - Google Places (local search results) <br />`udm=28` - shopping <br />`udm=39` - short videos

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=28"
    ```

    ### `ibp`

    Use the `ibp` parameter for Jobs search type.

    > #### Example:
    >
    > `ibp=htl;jobs` - Jobs

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&ibp=htl%3Bjobs"
    ```

    ### `safe`

    Use the `safe` flag with values `active` or `off` to enable or disable safe search.

    > #### Example:
    >
    > `safe=active` - Safe search is ON `safe=off`    - Safe search is off

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&safe=active"
    ```
  </Accordion>

  <Accordion title="Pagination" icon="file">
    ### `start`

    Define the result offset - results to start from the selected value. Used for managing pagination.

    > #### Examples:
    >
    > `start=0` (default) - first page of results <br />`start=10` - second page of results <br />`start=20` - third page of results, etc.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&start=20"
    ```

    ***

    ### `num`

    <Warning>
      **Deprecated by Google on September 11, 2025.** The `num` parameter no longer sets how many Google results are returned.

      * Google now returns about 10 results per page. The result set size can vary.
      * Use the `start` parameter to paginate through the result set.
      * To get the top 100 results in one request, use the [Get Top 100 Google Results](/scraping-automation/serp-api/get-top-100-google-results) feature.
    </Warning>
  </Accordion>

  <Accordion title="Geo-Location" icon="location-dot">
    ### `uule`

    Stands for the encoded location you want to use for your search and will be used to change geo-location. A CSV with all available `uule` values can be [downloaded here](https://developers.google.com/adwords/api/docs/appendix/geotargeting).

    The value of column "Canonical Name" from the CSV can be used as a raw string to the API

    > #### Example:
    >
    > `&uule=New+York,New+York,United+States`

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&uule=w+CAIQICINVW5pdGVkK1N0YXRlcw"

    ```

    #### Using geographic coordinates for location <Badge>BETA</Badge>

    You can provide a set of `latitude` , `longitude` and `radius` as uule parameters, and Bright Data will compose the closest possible uule encoded location for you.

    The format is `uule=lat,lon,radius`

    > #### Example - searching pizza with Eiffel Tower coordinates: `Lat=48.8584`,  `lon=2.2945` and `radius=200`:

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&uule=48.8584,2.2945,200" 
    ```
  </Accordion>

  <Accordion title="Device" icon="mobile-screen-button">
    ### `brd_mobile`

    Define what device type to be represented in user-agent. <br />Default or `brd_mobile=0` will provide random desktop user-agent while `brd_mobile=1` will provide random mobile user-agent.

    > **For specific mobile platform provide one of the following values:** <br />`brd_mobile=ios` - iPhone user-agent (alias `brd_mobile=iphone`) <br />`brd_mobile=ipad` - iPad user-agent (alias `brd_mobile=ios_tablet`) <br />`brd_mobile=android` - Android phone <br />`brd_mobile=android_tablet` - Android tablet

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&brd_mobile=1"
    ```
  </Accordion>

  <Accordion title="Browser" icon="table-columns">
    ### `brd_browser`

    Define what browser to be represented in user-agent. <br />Can be combined with `brd_mobile` to get according mobile browser. <br />Default will provide random browser.

    > **For specific browser provide one of the following values:** <br />`brd_browser=chrome` - Google Chrome <br />`brd_browser=safari` - Safari <br />`brd_browser=firefox` - Mozilla Firefox (not compatible with `brd_mobile=1`)

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&brd_browser=chrome"
    ```
  </Accordion>

  <Accordion title="Hotel search" icon="buildings">
    ### `hotel_occupancy`

    Number of guests to book a room for (up to 4).

    <Note>
      See `brd_occupancy` parameter of Hotels which provides more flexibility.
    </Note>

    > #### Examples:
    >
    > `hotel_occupancy=1` - for 1 guest <br />`hotel_occupancy=2` (default) - for 2 guests

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&hotel_occupancy=4"
    ```

    ***

    ### `hotel_dates`

    Check-in date and check-out date, separated by comma.<br />Format: `YYYY-MM-DD,YYYY-MM-DD`

    > #### Examples:
    >
    > `hotel_dates=2022-05-01,2022-05-03` - find rooms available from 1st until 3rd of May, 2022

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&hotel_dates=2023-05-01%2C2023-05-03"
    ```
  </Accordion>

  <Accordion title="AI Overview" icon="brain">
    ### `brd_ai_overview`

    Setting `brd_ai_overview=2` will **increase** the likelihood of receiving Google's Generative AI Overviews in your SERP responses, typically appearing in \~15-20%+ of results.

    <Note>
      * Expect an extra \~5-10 seconds of latency in SERP API’s response time with this query parameter, as it launches a browser to capture the entire AI Overview content.
      * To better trigger an AI Overview, your SERP keywords must be relevant to topics that Google considers suitable for generative responses.
    </Note>

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=what+makes+the+best+pizza&brd_ai_overview=2"
    ```

    ### Parsed AI Overviews Example

    <CodeGroup>
      ```sh Request: Parsed AIO theme={null}
      curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=does+honey+ever+expire&brd_json=1&brd_ai_overview=2"
      ```

      ```json Response: AIO exists theme={null}
      {
      //Displaying AIO field snippet below from within the full parsed JSON
        "ai_overview": {
          "texts": [
            {
              "type": "paragraph",
              "snippet": "To make the best pizza, focus on a good pizza dough, high heat baking, and fresh, high-quality toppings. Start with a slow fermentation for the dough, bake on a hot surface like a pizza stone or baking steel, and use fresh, quality toppings.",
              "snippet_highlighted_words": "focus on a good pizza dough, high heat baking, and fresh, high-quality toppings",
              "reference_indexes": [4, 5, 7, 9, 11, 12, 16]
            },
            {
              "type": "paragraph",
              "snippet": "Here's a more detailed breakdown:"
            },
            {
              "type": "list",
              "list": [
                {
                  "type": "paragraph",
                  "snippet": "Slow Fermentation: . Opens in new tabAllow the dough to ferment for a longer period, ideally overnight in the refrigerator. This develops the flavor and makes the crust more chewy and crispy according to Serious Eats and Food & Wine.",
                  "reference_indexes": [2, 3, 6, 22]
                },
                {
                  "type": "paragraph",
                  "snippet": "Flour Selection: . Opens in new tabUse a combination of bread flour for strength and all-purpose flour for a nice rise.",
                  "reference_indexes": [14]
                },
                {
                  "type": "paragraph",
                  "snippet": "Dough Preparation: . Opens in new tabStretch the dough carefully to avoid overworking it, which can make it tough.",
                  "reference_indexes": [13]
                }
              ],
              "title": "1. Dough:"
            },
            {
              "type": "list",
              "list": [
                {
                  "type": "paragraph",
                  "snippet": "High Heat: Preheat your oven to the highest temperature it can reach, ideally between 450°F and 500°F (232°C and 260°C).",
                  "reference_indexes": [9, 12]
                },
                {
                  "type": "paragraph",
                  "snippet": "Hot Baking Surface: Use a pizza stone or baking steel to distribute heat evenly and create a crispy crust.",
                  "reference_indexes": [9, 11]
                },
                {
                  "type": "paragraph",
                  "snippet": "Baking Time: Monitor the pizza closely and bake for 6-15 minutes, depending on the crust thickness and toppings.",
                  "reference_indexes": [9, 12, 17, 21, 23]
                }
              ],
              "title": "2. Baking:"
            },
            {
              "type": "list",
              "list": [
                {
                  "type": "paragraph",
                  "snippet": "Layering: Start with the sauce, followed by a layer of cheese, then meats, and finally vegetables.",
                  "reference_indexes": [15]
                },
                {
                  "type": "paragraph",
                  "snippet": "Fresh Ingredients: Use fresh, high-quality ingredients for the sauce, cheese, and toppings.",
                  "reference_indexes": [0, 4, 18, 20]
                },
                {
                  "type": "paragraph",
                  "snippet": "Pre-Cooked Toppings: Pre-cook toppings like sausage and vegetables that may not cook completely in the short baking time.",
                  "reference_indexes": [10]
                },
                {
                  "type": "paragraph",
                  "snippet": "Sauce: Consider using a simple sauce made with fresh crushed tomatoes, garlic, basil, olive oil, and spices.",
                  "reference_indexes": [0, 4]
                },
                {
                  "type": "paragraph",
                  "snippet": "Cheese: Consider using a combination of low-moisture mozzarella for melting and fresh mozzarella for flavor.",
                  "reference_indexes": [4]
                }
              ],
              "title": "3. Toppings:"
            },
            {
              "type": "list",
              "list": [
                {
                  "type": "paragraph",
                  "snippet": "Dough Storage: Store the dough in a bowl, oiled to prevent sticking, and covered tightly with plastic wrap.",
                  "reference_indexes": [2]
                },
                {
                  "type": "paragraph",
                  "snippet": "Crust: Consider using a baking stone, cast-iron griddle, or perforated pizza pan for a crispier crust.",
                  "reference_indexes": [8, 11]
                },
                {
                  "type": "paragraph",
                  "snippet": "Tossing Dough: For a more professional look, consider using the dough tossing technique.",
                  "reference_indexes": [1, 19, 24]
                }
              ],
              "title": "4. Optional but Recommended:"
            },
            {
              "type": "paragraph",
              "snippet": "This video demonstrates 5 pro chef secrets to the perfect pizza: 57sBigger Bolder Baking with Gemma StaffordYouTube · Jul 18, 2019",
              "image": {
                "image": "https://i.ytimg.com/vi/0hqLSZPaThU/mqdefault.jpg?sqp=-oaymwEGCPgEEOQC&rs=AMzJL3ldq2W1-OGaL6qxskwJT0GAYMe_4w",
                "image_url": "https://i.ytimg.com/vi/0hqLSZPaThU/mqdefault.jpg?sqp=-oaymwEGCPgEEOQC&rs=AMzJL3ldq2W1-OGaL6qxskwJT0GAYMe_4w"
              }
            }
          ],
          "references": [
            {
              "href": "https://www.youtube.com/watch?v=mRx_odAj-XQ&t=147",
              "title": "The Best Pizza You'll Ever Make | Epicurious 101 - YouTube",
              "subtitle": "Apr 18, 2023 — and they have a ton of flavor as well i'm using crushed peeled tomatoes. you can use whole peeled or diced tomatoes. w...",
              "source": "YouTube · Epicurious",
              "index": 0
            }
            // ... more references follow
          ]
        }
      }
      ```

      ```js Response: AIO Doesn't exist theme={null}
      {
      //Returned within response headers, displayed when adding `-i` OR `-v` to your request

      `x-brd-warning: AI Overview did not appear on original SERP. Please ensure that you are using the brd_ai_overview=2 query parameter (https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/google#ai-overview), and that your query is relevant for triggering an AI Overview.`
      }
      ```
    </CodeGroup>
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers (session pinning, output format, rate-limit info), see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

The most useful header for Google Web search is `x-unblock-data-format: parsed_light`, which returns a parsed JSON limited to the top 10 organic results with approximately 50% lower latency than full JSON parsing.

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" "https://www.google.com/search?q=pizza"
```

## Maps

### Query parameters

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `gl`

    Two-letter country code used to define the country of search

    ```sh gl theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/hotels+new+york/?gl=us"
    ```

    ***

    ### `hl`

    Two-letter language code used to define the page languages

    ```sh hl theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/hotels+new+york/?hl=en"
    ```
  </Accordion>

  <Accordion title="Coordinates" icon="location-dot">
    ### `geo params`

    Parameters defining GPS coordinates of a search location. It should be constructed the following way: `@ + latitude + , + longitude + , + zoom`.

    > #### Example:
    >
    > `@47.30227,1.67458,14.00z`

    <Tip>
      The `zoom` parameter is optional but recommended for higher precision. It ranges from 3z, map completely zoomed out - to 21z, map completely zoomed in
    </Tip>

    ```sh theme={null}
     curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/service%20de%20transport/@47.30227,1.67458,14.00z"
    ```
  </Accordion>

  <Accordion title="Pagination [Deprecated]" icon="file">
    <Warning>
      **Pagination parameters deprecated on December, 15th 2025.**
    </Warning>

    To get all google maps information use our [Scrapers](/datasets/scrapers/scrapers-library/overview).  Our scrapers library includes a google maps scraper which covers the full data retrieved from a google maps search. Direct scraper link (requires login to Bright Data) [Google Maps Scraper API](/datasets/scrapers/scrapers-library/overview). 

    ### `start `\[deprecated]

    Define the result offset - results to start from the selected value. Used for managing pagination.

    > #### Examples:
    >
    > `start=0` (default) - first page of results <br />`start=10` - second page of results <br />`start=20` - third page of results, etc.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/hotels+new+york/?start=20"
    ```

    ***

    <Warning>
      **Deprecated by Google on September 11, 2025.** The `num` parameter no longer sets how many Google results are returned.

      * Google now returns about 10 results per page. The result set size can vary.
      * Use the `start` parameter to paginate through the result set.
      * To get the top 100 results in one request, use the [Get Top 100 Google Results](/scraping-automation/serp-api/get-top-100-google-results) feature.
    </Warning>
  </Accordion>

  <Accordion title="Maps place overview" icon="buildings">
    ### `fid`

    Get the results of a Google Maps Place by `fid`.

    Use GET request on [http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s](http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s) with the `fid` value at the end.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "http://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x89e37742d0f37093:0xbc048b8a744ff75a"
    ```
  </Accordion>

  <Accordion title="Sorting and filtering" icon="filter">
    ### `brd_accommodation_type`

    Accommodation type: Hotels or Vacation Rentals.

    > #### Examples:
    >
    > `brd_accommodation_type`=hotels (default) - search for Hotels <br />`brd_accommodation_type`=vacation\_rentals - search for Vacation Rentals

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/hotels+new+york/?brd_accommodation_type=vacation_rentals"
    ```
  </Accordion>

  <Accordion title="Output format" icon="magnifying-glass">
    ### `brd_json`

    Bright Data custom parameter allowing to return parsed JSON instead of raw HTML

    > #### Examples:
    >
    > `brd_json=1` - return results in JSON <br />`brd_json=html` - return JSON with "html" field containing raw HTML

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/maps/search/hotels+new+york/?brd_json=1"
    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

For Google Maps, set `x-unblock-data-format: parsed_light` to receive parsed JSON results with reduced latency:

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" "https://www.google.com/maps/search/hotels+new+york/"
```

## Trends

**Required Parameters**<br />`brd_json=1`: Returns parsed JSON results (Trends supports parsed results only).<br />`brd_trends=timeseries,geo_map`: Retrieves widget data with best success rates.

<Warning>
  We support only the “Trending now” tab within Google Trends. Other tabs (e.g. "Explore", "Home") are not supported as they require login access for full functionality.
</Warning>

### Query parameters

<AccordionGroup>
  <Accordion title="Widgets" icon="layer-group">
    To display specific widget data within your Google Trends results, use one of the following widget parameters:

    #### `timeseries`

    #### `geo_map`

    **For multiple widgets:** Separate them with a comma. e.g. `timeseries,geo_map`

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>

  <Accordion title="Geo" icon="map-location-dot">
    ### `geo`

    Location of interest, two-letter country code

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&geo=us&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>

  <Accordion title="Localization" icon="flag">
    ### `hl`

    Preferred language, two-letter language code

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&hl=de&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>

  <Accordion title="Time range" icon="calendar">
    ### `date`

    Time range to search.

    > **Available values are:**<br />`now 1-H` - Past hour<br />`now 4-H` - Past 4 hours<br />`now 1-d` - Past day<br />`now 7-d` - Past 7 days<br />`today 1-m` - Past 30 days<br />`today 3-m` - Past 90 days<br />`today 12-m` (default) - Past 12 months<br />`today 5-y` - Past 5 years<br />`2020-07-01 2020-12-31` - custom date range

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&date=now+1-d&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>

  <Accordion title="Category" icon="list">
    ### `cat`

    Category to search within. By default, search within all categories.<br />You can find list of all categories [here](https://trends.google.com/trends/api/explore/pickers/category?lang=en-US\&tz=240).

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&cat=3&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>

  <Accordion title="Search type" icon="magnifying-glass">
    ### `gprop`

    Google property to filter on. Defaults to web search.<br />Possible values are: `images`, `news`, `froogle` (for Google Shopping), `youtube`

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -k "https://trends.google.com/trends/explore?q=pizza&gprop=images&brd_trends=timeseries,geo_map&brd_json=1"
    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

Google Trends responses are always parsed JSON when `brd_json=1` is set, so the `x-unblock-data-format` header is not needed for this endpoint. Use `x-brd-session: <session-id>` to pin requests to the same peer when running consecutive Trends queries.

## Reviews

<Warning>
  Update: Since 22-July-2026 reviews endpoint is not supported as google stopped servicing this endpoint and requests fail with a `502` error. Our teams are working to resolve the issue. All google reviews code examples below will fail when run with Bright Data SERP
</Warning>

### Query parameters

<AccordionGroup>
  <Accordion title="Feature id" icon="stars">
    ### `fid`

    Feature id what you want to fetch reviews to. `fid` parameter can be found in `knowledge.fid` field of google search response.

    > #### For example:
    >
    > [https://www.google.com/search?q=hilton%20new%20york%20midtown](https://www.google.com/search?q=hilton%20new%20york%20midtown)

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0"
    ```
  </Accordion>

  <Accordion title="Localization" icon="flag">
    ### `hl`

    Preferred language, two-letter language code

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0&hl=de"
    ```
  </Accordion>

  <Accordion title="Sorting and filtering" icon="filter">
    ### `sort`

    The way reviews are sorted.

    > **Possible values are:**<br />`sort=qualityScore` (default) - most relevant first<br />`sort=newestFirst` - newest first<br />`sort=ratingHigh` - highest rating first<br />`sort=ratingLow` - lowest rating first

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0&sort=newestFirst"
    ```

    ### `filter`

    Filter keyword. Will respond with reviews that contain specified keyword only.

    > #### For Example:
    >
    > `filter=awesome` - search for reviews containing 'awesome' word

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0&filter=awesome"
    ```
  </Accordion>

  <Accordion title="Pagination" icon="file">
    ### `start`

    Define the result offset - results to start from the selected value. Used for managing pagination.

    > #### Examples:
    >
    > `start=0` (default) - first page of results <br />`start=10` - second page of results <br />`start=20` - third page of results, etc.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0&start=10"
    ```

    ### `num`

    <Warning>
      **Deprecated by Google on September 11, 2025.** The `num` parameter no longer sets how many Google results are returned.

      * Google now returns about 10 results per page. The result set size can vary.
      * Use the `start` parameter to paginate through the result set.
      * To get the top 100 results in one request, use the [Get Top 100 Google Results](/scraping-automation/serp-api/get-top-100-google-results) feature.
    </Warning>
  </Accordion>

  <Accordion title="Sample Response" icon="brackets-curly">
    ```json expandable theme={null}
    {
      "reviews": [
        {
          "review_id": "ChdDSUhNMG9nS0VKeTJ0di1zNGFpLXF3RRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qczn4VDfUM6-AtEt-6oaNazFa-i9Fy6kqPVfGIlPil6vJulEYyK8t930jZwOW4hD80mzw=s120-c-br100",
            "display_name": "DLSharpsteen",
            "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en"
          },
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045281816?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en",
          "source": "Tripadvisor",
          "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
          "rating": "5/5",
          "created": "a month ago",
          "comment": "We traveled to NYC to watch The Christmas Spectacular at the Radio City Music Hall and stayed at the Hilton for the night. We loved the location as it was within of 5 minute walking distance of literally everything there is to see at Christmas time. Our room was quite spacious and clean with two full beds and a nice view. Staff was friendly and I loved that you can get there early and check in your bags so you can go explore before check in time as we arrived to the city around noon. Also loved that there was parking on site. We used the valet so you pulled in, got everything out you would need, they give you a card with a number and you walk into the doors and right to the luggage storage area. The elevator system is insane and that's my only complaint. I've never stayed in a hotel where you have to put in your room number and can only ride a certain elevator to your room. Seemed our elevators were always the ones with tons of people waiting to get on or off. The only outside noise you could hear were horns, but I was ok with that and thankful I never heard my neighbors or anyone in the halls. I got an insane discount on my room through my employer otherwise I would never be able to stay here during Christmastime. But I understand why the rate is so high as it is a hotel that sits in the middle of all the amazing attractions NYC has to offer. Would definitely stay here again!"
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2tRNFRVOXVUVE51YXpKVVdHb3laV3R5TjNScmRuYxAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXfHOWf_k3xFLr7N87GuvjsQHzsDSZb3FW1zjSl6LV32uKV4qI=s120-c-rp-mo-ba4-br100",
            "display_name": "Brian Ash",
            "link": "https://www.google.com/maps/contrib/109749787540014073287?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tRNFRVOXVUVE51YXpKVVdHb3laV3R5TjNScmRuYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOkQ4TU9uTTNuazJUWGoyZWtyN3Rrdnc%7C0dK0Oisp5f4%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "4/5",
          "created": "a month ago",
          "date": "2025-12-30",
          "comment": "The staff here were friendly and helpful. Everyone was cheerful and considerate. The staff here made our experience pleasant and memorable. The rooms were nice, but the location is perfect if you want to be in thick of the hustle and bustle of the city. Conveniently located, great facilities and a room rate that won’t break the bank. I wouldn’t hesitate to book again.",
          "review_reply": "Dear Brian,\nThank you for the wonderful review. We are glad to hear our team’s friendliness and positive energy helped make your stay pleasant and memorable. It is great to know you enjoyed the room, facilities, and our convenient location, along with a rate that added value to your visit. We truly appreciate your recommendation and look forward to welcoming you back again.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "a month ago",
          "photos": [
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvvgQTSLWCQ056w1UnyiW-HQ8XlJcxFI9RPlNSPw_VjGFToRpXmZvl4zi-1EmutHol0y9EkjJNn7LOXgLtV3M-RZiUdzUcP-0K8jXXVbbJV__zujNJUalJNXk_8iiwT7XV4aLirkNDDr40",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvD_OHm_eM5-xlDtQ_JsJ2G1nFk-C6yxA8kPImAvVnoWEOpmKD-GITwiBPBKFTCXchntdML8EoT1Fwn5WTal5L6PKNOaX4qSVbDJngSeiEkpwX0AB538R2qQNNVSgWFIQ-zenCQzRf535iu",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvPerK2Ko2feiSaSqQCwOyOrUUqeaZw1UEgef_uhHDtHRf13LCTDbS75syJviepVU9D_rM6qZBaxF4PLP_2lj3Z3Mkoo20FgyLuBZeuZVfblLk1irwTk3PtYliKvi2o9do1Ny74hExGanYP",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptH2vxFE-97SR1-wApwuBbfgPUhrskiO6TB47_87hNDP_e6z7RENf90h8aOB3pOmF-FBXrEqc_PsxqKM6GnbGlDzWd3mhvdf8qHm1abUEIiE_IoFBrd5M47Yl_IOVSQauqT8ojHDdOijkKZ",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9psSapsiHkevwQyqPBj3PGj5eaFmKqzSkxJoGsW7GpJdVvaH1V-2J0vje7ebkIIc5supUOZ1p_C_TlTyBeYr4XvxyIbW-TAt5kadEwN8lTWcrmDts3XG8INb2qyC5tXiY2usAl7wLN6BaRzf",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvufCVXOTmOu11veUvZlM1SzXWm-BSGnIlpEJLfRyoD70KDQvp4R5qRY5p4jIzlmlsXRGSlvsfqeZYzrPVoO6amg1HbiDFoiXnndGaNos1MIGFC_DeN9rgIsvwKiS3MoUD-lSOx7sFZ3IEE",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9pumyMXze6Vad_DZrwdn-kb4FH_pfJ51p7a7sND0a_46CXOQLiGN0KVNC4-TU2QDjlcQOpnbCC6pggGw7uDwqSl-r6m-kvb89CaIbdY0zzQ5We8XK7EtpDO7nPMDqfbka1GWeYYNlRedBqQf",
            "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptmv7dNkFRK6-Seq0iQTzBnh5NY2ddlrAOLtHP3dpA1Txew87zOcdBFbPciTR5DRQTA_Qgh0NPSH23bSEnrw6fDOihixxEjOKaWAmcliJ2Bsq2XtaOS_j2QmkfF0OcwUnzMOWP1psei0paj"
          ],
          "details": [
            {
              "id": "HOTELS_PILOT_TRIP_TYPE",
              "name": "Trip type",
              "value": "Vacation",
              "description": "What kind of trip was it?"
            },
            {
              "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
              "name": "Travel group",
              "value": "Couple",
              "description": "Who did you travel with?"
            },
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 3,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 4,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 5,
              "description": "Location"
            },
            {
              "id": "HOTELS_VIBE",
              "name": "Hotel highlights",
              "value": "Great view",
              "description": "How would you describe the hotel?"
            }
          ]
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT205WFNsaDVRWFJUWjBsd1Yxb3pNbmhEUkdnM2EwRRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocK7OOVJIAqO_bUXJsXNClGhPiS_codAAJ_4jbQhjngD2I5VQA=s120-c-rp-mo-ba3-br100",
            "display_name": "L File",
            "link": "https://www.google.com/maps/contrib/112336634363254268566?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT205WFNsaDVRWFJUWjBsd1Yxb3pNbmhEUkdnM2EwRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOm9XSlh5QXRTZ0lwV1ozMnhDRGg3a0E%7C0dCjYvbWq6w%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "4/5",
          "created": "2 months ago",
          "comment": "Awesome location, rooms were clean and comfortable.  Bar drinks are just ok, food is meh.  But I didn’t go to NYC to eat/drinkk in my hotel.  Its location is perfect.  We walked about 5 miles a day to see what we wanted and to go where we wanted.  Subway was easy to use.  The elevators are nice, but they do need more.  Construction on one, but there is almost always a line to go up and getting down is awful.  Give yourself plenty of time and the higher the room, the easier to get “on”.  Oftentimes people had been waiting multiple stops for the elevator to get down to the lobby, if on lower floors, but it would be full.  That was the only pitfall, but could be a significant one if you are in a hurry.",
          "review_reply": "Thank you for sharing your experience with us. We are glad to hear you enjoyed the clean and comfortable rooms, as well as our convenient location, which made it easy to explore the city on foot and by subway. We appreciate your comments regarding food, beverages, and elevator availability, and we will be reviewing these concerns with our team to help improve the overall guest experience. We appreciate you staying with us and hope to have the chance to host you again.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "2 months ago",
          "details": [
            {
              "id": "HOTELS_PILOT_TRIP_TYPE",
              "name": "Trip type",
              "value": "Vacation",
              "description": "What kind of trip was it?"
            },
            {
              "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
              "name": "Travel group",
              "value": "Family",
              "description": "Who did you travel with?"
            },
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 5,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 4,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 5,
              "description": "Location"
            }
          ]
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2t0eVMzWjJjbk5tUWt0TGFFcG5kVU5XWTFvMGQwRRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIb_1I5stFL2E46ANU5a9D1tE37bd7z3TrcvcjeCv8jbP01sQ=s120-c-rp-mo-ba4-br100",
            "display_name": "Diana Nichols",
            "link": "https://www.google.com/maps/contrib/104268723670363283044?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t0eVMzWjJjbk5tUWt0TGFFcG5kVU5XWTFvMGQwRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOktyS3Z2cnNmQktLaEpndUNWY1o0d0E%7C0dKeRXjPbb4%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "5/5",
          "created": "a month ago",
          "comment": "Absolutely the best stay in the world! My room was clean and quiet and had everything I needed. The room was much bigger than I expected for NYC. Shout out to housekeeping who didn’t make a peep in the hallways as they cleaned the vacant rooms. I didn’t leave until around 2pm so they were working hard. Many hotels (even the best of the best) have housekeepers who talk too loudly in the hallways and constantly slam doors. Not here! They were perfect and I didn’t even know they were there until I left. Can’t tell you how much I appreciate that. Tons of security and police presence for the upcoming celebration (New Year’s) or maybe it’s always like that here. Felt extremely safe and protected. Beautiful spacious clean sparkling lobby. Many upscale shops and stores I didn’t have time to visit. Glistening with inviting items to purchase and view. Wish I would have gone into the shops! The staff was very very friendly from the front desk to the security guard who answered all my questions last night about transportation to JFK and local things to visit near the hotel. The man mopping the floor was super friendly (this was around 1am) trying to give me directions for the subway train etc for the next day to JFK. I had the best latte from the wonderful friendly cafe near the lobby. Everything clean and welcoming and beautifully displayed. I decided to take a taxi to JFK\nand asked for a “nice” taxi driver. The gentleman supervising the taxi line immediately made way for me through the throngs of folks on the street and treated me like a celebrity as he directed me to the next available ride. He didn’t laugh at me and I did get the nicest taxi driver - Fabian!!!  I was given excellent directions to get to the airport in JFK by the transportation and show tickets desk and they explained how to take the train bus subway etc but it seemed a little more difficult than I was in the mood for. The energy out on the street was electric and I also wish I had walked around a little before I left the city. This hotel is convenient to everything! Can’t ask for anything more than the wonderful experience I had at this hotel. Thank you everyone who works there and outside and Happy New Year!!!",
          "review_reply": "Dear Diana,\nIt's an absolute pleasure to learn about the exceptional visit you had with us, and we thank you for your perfect marks. Thank you for also going out of your way to spotlight our safe, welcoming facilities and unbeatable New York location. Of course, we'll be sure our team hears they really made a difference with their outstanding service, and we look forward to seeing you again soon here at New York Hilton Midtown for another unforgettable experience.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "a month ago",
          "details": [
            {
              "id": "HOTELS_PILOT_TRIP_TYPE",
              "name": "Trip type",
              "value": "Business",
              "description": "What kind of trip was it?"
            },
            {
              "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
              "name": "Travel group",
              "value": "Solo",
              "description": "Who did you travel with?"
            },
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 5,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 5,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 5,
              "description": "Location"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_ROOMS",
              "name": "Rooms",
              "value": "My room was perfect and bigger than I expected for NYC.",
              "description": "Rooms"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_SAFETY",
              "name": "Safety",
              "value": "Lots of police officers around! Felt extremely safe.",
              "description": "Safety"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_NOTEWORTHY_DETAILS",
              "name": "Noteworthy details",
              "value": "I just found everyone super friendly. Maybe because I love the people and the energy in NYC anyway.",
              "description": "Noteworthy details"
            },
            {
              "id": "HOTELS_VIBE",
              "name": "Hotel highlights",
              "value": "Luxury",
              "description": "How would you describe the hotel?"
            }
          ]
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT25ReVRFUTJiV0ZNUkdVNFduaFNTMnh6VmpGSU5uYxAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXmcoJ3y3xhQX30wsKy5q87OD7qFUR6FDUsw_QDL8EWl8-nUSQ=s120-c-rp-mo-ba3-br100",
            "display_name": "Natiesha Wray Henry",
            "link": "https://www.google.com/maps/contrib/102270227746850983681?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25ReVRFUTJiV0ZNUkdVNFduaFNTMnh6VmpGSU5uYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOnQyTEQ2bWFMRGU4WnhSS2xzVjFINnc%7C0dKxrV3ZLWB%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "5/5",
          "created": "a month ago",
          "comment": "Location, Location,  Location! This hotel made adventuring in Manhattan a breeze. Central Park, Radio City, Rockefeller Center, were all so close, there was simply no excuse to not take a walk and be in all the action. We loved to food trucks and vendors near by but we also enjoyed the walkable restaurants close by as well. Staff and facilities were great. I'm so happy we stayed here.",
          "review_reply": "Dear Natiesha,\nThank you for sharing your wonderful experience with us! It's great that our prime location, close to New York's best attractions and dining options, enhanced your visit. We're also happy that our friendly service added to your experience. It was a pleasure having you as our guest, and we look forward to welcoming you back for another memorable stay.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "a month ago",
          "details": [
            {
              "id": "HOTELS_PILOT_TRIP_TYPE",
              "name": "Trip type",
              "value": "Vacation",
              "description": "What kind of trip was it?"
            },
            {
              "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
              "name": "Travel group",
              "value": "Family",
              "description": "Who did you travel with?"
            },
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 5,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 5,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 5,
              "description": "Location"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_ROOMS",
              "name": "Rooms",
              "value": "Cozy and comfortable",
              "description": "Rooms"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_NEARBY_ACTIVITIES",
              "name": "Nearby activities",
              "value": "Times Square is walkable from here",
              "description": "Nearby activities"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_WALKABILITY",
              "name": "Walkability",
              "value": "10 out of 10",
              "description": "Walkability"
            },
            {
              "id": "HOTELS_TIPS_TOPICS_NOTEWORTHY_DETAILS",
              "name": "Noteworthy details",
              "value": "Parking and traffic is a nightmare.",
              "description": "Noteworthy details"
            },
            {
              "id": "HOTELS_VIBE",
              "name": "Hotel highlights",
              "value": "Kid-friendly",
              "description": "How would you describe the hotel?"
            }
          ]
        },
        {
          "review_id": "ChdDSUhNMG9nS0VQdnIyOHU1LVppVGlBRRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QfnSFWXMd1oJu73a6IhdtgibYcjse2HKQTHeghNQd9Cyw8DYQQJZDCyh-TD68ehXuY-FA=s120-c-br100",
            "display_name": "R471LZalext",
            "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en"
          },
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d1379306-r1043196288?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en",
          "source": "Tripadvisor",
          "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
          "rating": "3/5",
          "created": "2 months ago",
          "comment": "Room was ok. For a Hilton I thought it would be better. Could do with an update with better placed plug sockets and some USB sockets. It is 2025 and people need multiple sockets to charge phones, tablets, watches etc.||Staff were underwhelming. Our flight home was cancelled and we had to find accommodation for another night. I understand they couldn’t accept us as they were fully booked. I would have appreciated some sort of effort to see if other Hilton hotels available but no, just a shrug of the shoulders pretty much and left to sort ourselves out. I understand that it is probably over there pay grade. However, a phone call or some sort of contact with other Hilton hotels would have been put our anxiety at ease. I am disappointed because i expect staff from the Hilton brand would excel at customer service, but they didn’t. They would’ve earned a decent tip from it. ||Only 2 things impressed me. The coffee machine in our room and the cleaning staff. They always did a superb job."
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2pKdk5FdHVMVW8xTjFoT2MzUjJlamQyV0hSTk4wRRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKxAYr7LFV6ZMNckj3q8VKiPdMIZXgCzt920CSu2v1nYG3GzQ=s120-c-rp-mo-ba4-br100",
            "display_name": "Elia Alejandra",
            "link": "https://www.google.com/maps/contrib/107082141027365570078?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pKdk5FdHVMVW8xTjFoT2MzUjJlamQyV0hSTk4wRRAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOjJvNEtuLUo1N1hOc3R2ejd2WHRNN0E%7C0d6T99EL24S%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "2/5",
          "created": "3 months ago",
          "comment": "Room had a nice view. Staff was friendly.\nRoom was dirty when we walked in. There were hairs in the bathtub, and sink wasn’t very clean. Restrooms and rooms along with furniture are very old! Bedsheets had some hairs and not very clean. Room was cleaned once out of 4 days so it’s not daily. They do give you a 35$ voucher for the cafe they have and 25$ for their services. Luggage hold is free if you get there early but they charge 5$ a piece if you need to check out of your room but still have time before the airport. Elevators are nice they have a system that makes it run smoother.\nHotel seems very central so that’s a good thing. Lots of things around but that’s just New York.\nOver all because of how old rooms seems and how dirty it was 2/5. Wouldn’t stay here again .",
          "review_reply": "Dear Elia,\nThank you for taking the time to share such detailed feedback. We’re glad to hear you enjoyed the wonderful view, the fantastic location, and the friendliness of the team, but we’re truly sorry to learn that the room did not meet expectations during your stay. Your comments about cleanliness, upkeep, and service frequency are important, and they’ll be shared with the appropriate teams so we can take a closer look. We appreciate you noting the helpful amenities like the café credit, services credit, luggage storage, and elevator system as well. We’re grateful for your perspective and hope the rest of your time in New York City was wonderful.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "3 months ago",
          "details": [
            {
              "id": "HOTELS_PILOT_TRIP_TYPE",
              "name": "Trip type",
              "value": "Vacation",
              "description": "What kind of trip was it?"
            },
            {
              "id": "HOTELS_PILOT_TRAVEL_GROUP_TYPE",
              "name": "Travel group",
              "value": "Family",
              "description": "Who did you travel with?"
            },
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 1,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 3,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 4,
              "description": "Location"
            }
          ]
        },
        {
          "review_id": "Ci9DQUlRQUNvZENodHljRjlvT2xWbGRIaHFUblkzZFdaaFdITlNRMlZNZDE5bmNHYxAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUizL79_bwGWMDpI7JDM4zojb6e6Ufpryfw23XnFxFSFJMHriK_=s120-c-rp-mo-ba3-br100",
            "display_name": "Amanda Garcia",
            "link": "https://www.google.com/maps/contrib/102898602342998029792?hl=en"
          },
          "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWbGRIaHFUblkzZFdaaFdITlNRMlZNZDE5bmNHYxAB!2m1!1s0x0:0x2a34371cb33f3c80!3m1!1s2@1:CAIQACodChtycF9oOlVldHhqTnY3dWZhWHNSQ2VMd19ncGc%7C0dGM04hI_ys%7C?hl=en",
          "source": "Google",
          "source_logo": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
          "rating": "5/5",
          "created": "2 months ago",
          "comment": "From the moment we arrived, our experience at this hotel was nothing short of exceptional. The property is beautiful, impeccably clean, and thoughtfully designed for comfort and relaxation. Every detail reflected true five-star quality.\nWhat truly made our stay unforgettable was the incredible staff. The team went above and beyond to make us feel welcomed and valued. Special recognition to Lek at concierge, Christina in housekeeping, Brian and Joland at front desk for their professionalism, warmth, and genuine care. Their attentiveness and willingness to assist with every request during our stay as we celebrate a birthday made a lasting impression.\nHousekeeping was flawless, the amenities were excellent, and the overall atmosphere was both luxurious and inviting. This hotel sets the standard for hospitality, and we cannot wait to return.\nHighly recommend to anyone looking for an outstanding stay! Location a huge plus.",
          "review_reply": "Dear Amanda,\nIt's an absolute pleasure to read about the exceptional celebration experience you had with us here at New York Hilton Midtown. Thank you for going out of your way to write about our gorgeous property, where comfort and charm come together perfectly, and we're delighted our team was able to make your experience that much more memorable. We'll be sure your thoughtful compliments are shared with them, and we hope to have the opportunity to welcome you back soon, whether for another special occasion or simply a relaxing New York getaway.\n\nSincerely,\n\nNew York Hilton Midtown Team\n\nNYCNH_FO@hilton.com",
          "review_reply_created": "2 months ago",
          "details": [
            {
              "id": "HOTELS_ASPECT_ROOMS",
              "name": "Rooms",
              "value": 5,
              "description": "Rooms"
            },
            {
              "id": "HOTELS_ASPECT_SERVICES",
              "name": "Service",
              "value": 5,
              "description": "Service"
            },
            {
              "id": "HOTELS_ASPECT_LOCATION",
              "name": "Location",
              "value": 5,
              "description": "Location"
            }
          ]
        },
        {
          "review_id": "ChZDSUhNMG9nS0VKdXluNURVNjR1UWJnEAE",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0QdVsxDWqDDLG62Q3M3dmLlHORJs5jz0NWRJO3cP21KtRNPfosO7RpofjnbUgpyNjOTDew=s120-c-br100",
            "display_name": "LisaO964",
            "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en"
          },
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045294524?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en",
          "source": "Tripadvisor",
          "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
          "rating": "4/5",
          "created": "a month ago",
          "comment": "Spent 6 nights here with my family- arrives 9.45pm due to flight delay but on arrival rooms were not ready, the gentleman at check in was helpful and found us a room however it was interconnecting with another family which meant we were disturbed by their noise quite a lot. However, this hotel is really lovely and other than this and the elevators being slow I can’t fault it. They have installed a new elevator system and should have thought it through as during busy times they are packed and it can take quite some time to get one. |Rooms are lovely , cleaned every day, excellent location and staff all really lovely. I would recommend staying here."
        },
        {
          "review_id": "ChdDSUhNMG9nS0VNT3NySlBUc01UbTZRRRAB",
          "reviewer": {
            "profile_photo_url": "https://lh3.googleusercontent.com/local-reviews/AJMZ0Qdvd3mFTmnQslJajBtyC7hGXBv5KKEN_7z5ZnXByEfDkAAFDmgEV3HW1P9_iXApXyf1XA=s120-c-br100",
            "display_name": "bobrobb",
            "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045071077?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en"
          },
          "link": "https://www.tripadvisor.com/ShowUserReviews-g60763-d611947-r1045071077?m=68573&staydates=2026_03_08_2026_03_09&uguests=1_2_0&supdv=desktop&supuc=DE&supul=en",
          "source": "Tripadvisor",
          "source_logo": "https://www.gstatic.com/travel-hotels/branding/icon_100532569.png",
          "rating": "2/5",
          "created": "a month ago",
          "comment": "On a positive, the location is excellent and the room was big enough for a family which I think is a rarity for such a location.  We visited from 30th Dec to 6th Jan and in all honesty the hotel is just not set up to be running at capacity.  There were queues for everything, check in, check out, restrooms, bars and the lifts.  The lifts deserve a special mention - if on a lower floor you might have to wait for 5 to 6 lifts to get one that had any capacity if heading down at a busy time.  The service at check in and check out was pretty non- existent, the $35 “destination charge” is to encourage you to spend in their bar.  If lucky enough to actually get served in the lobby bar 2 x beers is more than the $35 - it just leaves a bad taste.  There are no tea and coffee facilities in room (a given in UK), but on a positive note towels were changed daily.  When checking out this morning nobody asked us how our stay was, totally impersonal, then we got hit with the $5 per item holding fee, to hold our baggage from 12 noon to 2 pm - as we had 7 items (hand luggage also counts as a separate item) we got a $35 charge after checking out.  If anyone genuinely cared about customer experience, that would have been taken out of your destination charge, but of course that isn’t possible.    It is a shame really, a once grand hotel, living off the Hilton brand, in need of a refurb with a clear focus on revenue creation as opposed to customer experience.  The location just isn’t enough to make up for the lack of experience I’m afraid - there are much better out there."
        }
      ]
    }

    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

For Google Reviews, set `x-unblock-data-format: parsed_light` to receive parsed JSON results. Combine with `x-brd-session: <session-id>` to pin paginated review fetches (`start`) to the same peer.

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" -H "x-brd-session: my-session-123" "https://www.google.com/reviews?fid=0x808fba02425dad8f%3A0x6c296c66619367e0"
```

## Images

Google image search uses `udm=2` (replaces deprecated `tbm=isch` since March 2026). Below are the parameters specific to image search.

### Query parameters

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `gl`

    Two-letter country code used to define the country of search

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=2&gl=us"
    ```

    ***

    ### `hl`

    Two-letter language code used to define the page languages

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=2&hl=en"
    ```
  </Accordion>

  <Accordion title="Search type" icon="magnifying-glass">
    ### `udm`

    Use `udm=2` to enter Google Image search.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=2"
    ```

    ### `safe`

    You can control the images' search with 3 modes:

    1. `off` - This will display all images, even inapproproate ones.
    2. `on` or `active` - This mode will filter out from the results in appropriate results.
    3. `images` - This mode will show a blurred version of the inappropriate images.

    Use `safe=[mode]` to get the required results.

    This is examples for blured images filter. 

    > We cannot publish inappropriate search terms in our documentation - so our default search term here will remain `pizza` . To see the actual impact, you need to modify the search term.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=2&safe=images"
    ```

    ### `tbm` \[deprecated]

    <Warning>
      `tbm=isch` is deprecated since March 2026 and now redirects to `udm=2`. Use `udm=2` instead.
    </Warning>

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&tbm=isch"
    ```
  </Accordion>

  <Accordion title="Image size" icon="image">
    ### `tbs`

    Usage: `tbs=isz:[l|m|i]` to set preferred image size filter (large, medium, small).

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/search?q=pizza&udm=2&tbs=isz:l"
    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

For Google Image search, set `x-unblock-data-format: parsed_light` to receive parsed JSON results:

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" "https://www.google.com/search?q=pizza&udm=2"
```

## Lens

### Query parameters

<AccordionGroup>
  <Accordion title="Image URL" icon="image">
    ### `url`

    URL of image you want to search

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png"
    ```
  </Accordion>

  <Accordion title="Localization" icon="flag">
    ### `hl`

    Preferred language, two-letter language code

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png&hl=de"
    ```
  </Accordion>

  <Accordion title="Upload image as file" icon="arrow-up-from-bracket">
    ### `upload`

    Upload an image named `cat.jpg` located in a current directory (not supported on async zones)

    ```sh theme={null}
    curl -F "encoded_image=@cat.jpg" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://lens.google.com/v3/upload"
    ```
  </Accordion>

  <Accordion title="Get exact matches" icon="expand">
    ### `brd_lens`

    The `brd_lens` parameter in your request fetches specific Google Lens **tab results** by specifying a tab value (e.g. `products`, `homework`, `visual_matches`, `exact_matches`). <img alt="brd_lens" />

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://lens.google.com/uploadbyurl?url=https%3A//cdn.shopify.com/s/files/1/0243/303[…]6-05d7-4eb6-bf06-8e0c143f4f00.png%3Fv%3D1693159120&brd_json=1&brd_lens=visual_matches"
    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

For Google Lens, set `x-unblock-data-format: parsed_light` to receive parsed JSON results. When uploading an image as a file (`POST` to `/v3/upload`), `x-brd-session: <session-id>` is required to keep the upload and result fetch on the same peer.

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" "https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png"
```

## Hotels

### Query parameters

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `gl`

    Two-letter country code used to define the country of search

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&gl=us"
    ```

    ### `hl`

    Two-letter language code used to define the page language

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&hl=en"
    ```
  </Accordion>

  <Accordion title="Booking dates and options" icon="calendar">
    ### `brd_dates`

    Check-in date and check-out date, separated by comma.

    > #### Format:
    >
    > `YYYY-MM-DD,YYYY-MM-DD`
    >
    > #### Example:
    >
    > `2022-01-20,2022-02-05`

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_dates=2022-04-03%2C2022-04-10"
    ```

    ### `brd_occupancy`

    Number of guests to book a room for (maximum 6 guests).

    > #### Examples:
    >
    > `brd_occupancy=1` - look for a room for 1 person <br />`brd_occupancy=2` (default) - for 2 persons <br />`brd_occupancy=3` - for 3 persons, etc.

    Also supports a comma-separated list of integers where:

    * first value is a number of adult guests
    * subsequent values are ages of children

    > #### Format:
    >
    > `brd_occupancy=<number of adults>,<child 1 age>,<child 2 age>,...,<child N age>`
    >
    > #### Examples:
    >
    > `brd_occupancy=1,5,7,12` - for 1 adult and 3 children (5, 7 and 12 years old) <br />`brd_occupancy=2,1,3` - for 2 adults and 2 children (1 and 3 years old)

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_occupancy=4"
    ```

    ### `brd_free_cancellation`

    Show only offers with free cancellation.

    > #### Examples:
    >
    > `brd_free_cancellation=true` - with free cancellation <br />`brd_free_cancellation=false` (default) - show any offers

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_free_cancellation=true"
    ```

    ### `brd_accommodation_type`

    Accommodation type: Hotels or Vacation Rentals.

    > #### Examples:
    >
    > `brd_accommodation_type=hotels` (default) - search for Hotels <br />`brd_accommodation_type=vacation_rentals` - search for Vacation Rentals

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_accommodation_type=vacation_rentals"
    ```

    ### `brd_currency`

    Currency to show prices at (3-letter code).

    > #### Examples:
    >
    > `brd_currency=USD` - United States Dollars <br />`brd_currency=EUR` - Euro <br />`brd_currency=INR` - Indian Rupees

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_currency=USD"
    ```
  </Accordion>

  <Accordion title="Output format" icon="magnifying-glass">
    ### `brd_mobile`

    Define what device type to be represented in user-agent

    Default or `brd_mobile=0` will provide random desktop user-agent while `brd_mobile=1` will provide random mobile user-agent.

    > **For specific mobile platform provide one of the following values:** <br />`brd_mobile=ios` - iPhone user-agent (alias `brd_mobile=iphone`) <br />`brd_mobile=ipad` - iPad user-agent (alias `brd_mobile=ios_tablet`) <br />`brd_mobile=android` - Android phone <br />`brd_mobile=android_tablet` - Android tablet

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_mobile=1"
    ```

    ### `brd_json`

    Bright Data custom parameter allowing to return parsed JSON instead of raw HTML

    > #### Examples:
    >
    > `brd_json=1` - return results in JSON <br />`brd_json=html` - return JSON with "html" field containing raw HTML

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4401769,4429192,4518326,4597339,4640247,4647135,4649665,4680677,4718357,4721475,4722435,4722900,4723331,4726607,4733969,4734960,4736008,4738608,4741664,4743499&ssta=1&q=four+seasons+hotel+new+york+downtown&grf=EmQKLAgOEigSJnIkKiIKBwjmDxADGB4SBwjmDxAEGAcYAjAeQMoCSgcI5g8QAxgcCjQIDBIwEi6yASsSKQonCiUweDg5YzI1YTE4ZTM1NTNmOGI6MHgxMzM3ZGFlNWVkYWFiYWEy&rp=EKL1qu3e3PabExCi9art3tz2mxM4AkAASAHAAQI&ictx=1&brd_json=1"
    ```
  </Accordion>
</AccordionGroup>

### Headers

For the full list of SERP API request headers, see [SERP API features](/scraping-automation/serp-api/features#request-headers-summary).

For Google Hotels, set `x-unblock-data-format: parsed_light` to receive parsed JSON results. Combine with `x-brd-session: <session-id>` to keep `brd_dates` and `brd_occupancy` queries pinned to a stable peer.

```sh theme={null}
curl -k --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> -H "x-unblock-data-format: parsed_light" "https://www.google.com/travel/hotels/four%20seasons%20hotel%20new%20york%20downtown/entity/CgoIovWq7d7c9psTEAE/prices"
```

## Flights

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `gl`

    Two-letter country code used to define the country of search

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/flights/search?tfs=CBwQAhoiEgoyMDI0LTA1LTI5agsIAhIHL20vMGszcHIHCAESA1hSSkABSAFwAYIBCwj___________8BmAEC&gl=us"
    ```

    ### `hl`

    Two-letter language code used to define the page language

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/flights/search?tfs=CBwQAhoiEgoyMDI0LTA1LTI5agsIAhIHL20vMGszcHIHCAESA1hSSkABSAFwAYIBCwj___________8BmAEC&hl=en"
    ```
  </Accordion>

  <Accordion title="Flight details" icon="plane-departure">
    ### `tfs`

    String representing flight search parameters

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/flights/search?tfs=CBwQAhoiEgoyMDI0LTA1LTI5agsIAhIHL20vMGszcHIHCAESA1hSSkABSAFwAYIBCwj___________8BmAEC"
    ```

    ### `curr`

    Defines the currency of returned prices

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.google.com/travel/flights/search?tfs=CBwQAhoiEgoyMDI0LTA1LTI5agsIAhIHL20vMGszcHIHCAESA1hSSkABSAFwAYIBCwj___________8BmAEC&curr=USD"
    ```
  </Accordion>
</AccordionGroup>
