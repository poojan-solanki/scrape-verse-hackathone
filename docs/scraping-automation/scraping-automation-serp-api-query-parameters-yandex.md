# SERP API Yandex query parameters

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/yandex](https://docs.brightdata.com/scraping-automation/serp-api/query-parameters/yandex)
> **Category**: `scraping-automation`

---

Explore Yandex query parameters for the Bright Data SERP API (31 languages), including localization, pagination, time range and device targeting for results.

## Search

<AccordionGroup>
  <Accordion title="Localization" icon="flag">
    ### `lr`

    Region or country to search.

    > #### Examples:
    >
    > `1` - Berlin \
    > `2` - London \
    > `84` - USA \
    > `95` - Canada \
    > `134` - China

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&lr=84"
    ```

    ### `lang`

    Two-letter language code used to define the page language

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&lang=en"
    ```
  </Accordion>

  <Accordion title="Pagination" icon="file">
    ### `p`

    Define the result page - results to start from the selected value. Used for managing pagination.

    > #### Examples:
    >
    > `p=1` (default) - first page of results \
    > `p=2` - second page of results \
    > `p=4` - fourth page of results, etc.

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&p=1"
    ```
  </Accordion>

  <Accordion title="Time range" icon="calendar">
    ### `within`

    Time range to search.

    > **Available values are:** \
    > `77` - Past 24 hours \
    > `1` - Past 2 weeks \
    > `[%pm]` - Past month

    ```sh theme={null}
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&within=1"
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
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&brd_mobile=1"
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
    curl --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer-id>-zone-<zone-name>:<zone-password> "https://www.yandex.com/search/?text=pizza&brd_browser=chrome"
    ```
  </Accordion>
</AccordionGroup>
