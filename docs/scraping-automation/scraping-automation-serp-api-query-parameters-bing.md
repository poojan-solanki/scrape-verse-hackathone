# SERP API Bing query parameters

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/bing](https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/bing)
> **Category**: `scraping-automation`

---

Configure Bing search queries on the Bright Data SERP API (31 languages) with parameters for localization, geo, pagination, device targeting and custom output.

<Warning>
  [Microsoft Bing Search APIs retiring on August 11, 2025](https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement). Bright Data SERP API for Bing domain continues to be supported.
  [Bing API to Bright Data SERP API migration guide](/scraping-automation/serp-api/parsed-json-results/bing-to-bright-data-serp-migration-guide).
</Warning>

## Search

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `setLang`

    A language to use for user interface strings. You may specify the language using either a 2-letter or 4-letter code. Using 4-letter codes is preferred.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&setLang=en-US"
    ```
  </Accordion>

  <Accordion title="Geo-Location" icon="location-dot">
    ### `location`

    A location for the search origin. Should be used together with `lat` (latitude) and `lon` (longitude) parameters.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&location=New+York%2C+New+York%2C+United+States&lat=40.7001958&lon=-74.1087142"
    ```

    ### `cc`

    A 2-character country code of the country where the results come from.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&cc=us"
    ```

    ### `mkt`

    A market where the search results come from.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&mkt=en-US"
    ```
  </Accordion>

  <Accordion title="Pagination" icon="file">
    ### `count`

    This attibute was deprecated by bing and is no longer supported.

    ### `first`

    An offset that indicates the number of search results to skip before returning results. The default value is 1.

    Use this parameter along with the `count` parameter to page results. For example, set `count` to 10 and `first` to 1 to get the first page of results.
    For each subsequent page, increment `first` by 10 (for example, 1, 11, 21).
    It is possible for multiple pages to include some overlap in results.

    > #### Examples:
    >
    > `first=1` (default) - first page of results \
    > `first=11` - second page of results \
    > `first=21` - third page of results, etc.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&first=11"
    ```
  </Accordion>

  <Accordion title="Filters" icon="filter">
    ### `safesearch`

    Used to filter webpages, images, and videos for adult content.

    > **The following are the possible filter values:** \
    > `safesearch=off`, Returns content with adult text and images but not adult videos \
    > `safesearch=moderate`, Returns webpages with adult text, but not adult images or videos \
    > `safesearch=strict`, Does not return adult text, images, or videos

    The default is Moderate.

    NOTE: If the request comes from a market that Bing's adult policy requires that safeSearch be set to Strict, Bing ignores the safesearch value and uses Strict.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&safesearch=off"
    ```
  </Accordion>

  <Accordion title="Device" icon="mobile-screen-button">
    ### `brd_mobile`

    Define what device type to be represented in user-agent

    Default or `brd_mobile=0` will provide random desktop user-agent while `brd_mobile=1` will provide random mobile user-agent.

    > **For specific mobile platform provide one of the following values:** \
    > `brd_mobile=ios` - iPhone user-agent (alias `brd_mobile=iphone`) \
    > `brd_mobile=ipad` - iPad user-agent (alias `brd_mobile=ios_tablet`) \
    > `brd_mobile=android` - Android phone \
    > `brd_mobile=android_tablet` - Android tablet

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&brd_mobile=1"
    ```
  </Accordion>

  <Accordion title="Browser" icon="table-columns">
    ### `brd_browser`

    Define what browser to be represented in user-agent. \
    Can be combined with `brd_mobile` to get according mobile browser. \
    Default will provide random browser.

    > **For specific browser provide one of the following values:** \
    > `brd_browser=chrome` - Google Chrome \
    > `brd_browser=safari` - Safari \
    > `brd_browser=firefox` - Mozilla Firefox (not compatible with `brd_mobile=1`)

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.bing.com/search?q=pizza&brd_browser=chrome"
    ```
  </Accordion>
</AccordionGroup>
