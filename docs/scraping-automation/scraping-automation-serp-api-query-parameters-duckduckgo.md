# SERP API DuckDuckGo query parameters

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/duckduckgo](https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/duckduckgo)
> **Category**: `scraping-automation`

---

Configure DuckDuckGo search queries on the Bright Data SERP API (31 languages) with parameters for localization, safe search, time range and device targeting.

## Search

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `kl`

    Country and language code used to define the country and language of search. See the [full list here](https://api.brightdata.com/serp/duckduckgo/kl_values).

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza&kl=us-en"
    ```

    ### `kad`

    Language of the search page interface: buttons, menu. See the [full list here](https://api.brightdata.com/serp/duckduckgo/kad_values)

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza"
    ```
  </Accordion>

  <Accordion title="Safe search" icon="shield">
    ### `kp`

    Removes adult content from search results.

    > **Available values are:** \
    > ` 1` - Turn on safe search \
    > `-1` - Moderate search content \
    > `-2` - Turn off safe search

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza&kp=1"
    ```
  </Accordion>

  <Accordion title="Time range" icon="calendar">
    ### `df`

    Time range to search.

    > **Available values are:** \
    > `d` - Past day \
    > `w` - Past week \
    > `m` - Past month \
    > `w` - Past year

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza&df=d"
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
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza&brd_mobile=1"
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
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://duckduckgo.com/?q=pizza&brd_browser=chrome"
    ```
  </Accordion>
</AccordionGroup>
