# Billing and pricing FAQs

> **Official Source**: [https://docs.brightdata.com/general/account/billing-and-pricing/faqs](https://docs.brightdata.com/general/account/billing-and-pricing/faqs)
> **Category**: `general`

---

FAQs about billing for Bright Data accounts, including credentials, cost structure and API management across 4 proxy network products.

<AccordionGroup>
  <Accordion title="Where can I find my credentials like host name, username and password?">
    Your credentials can be found in the "Overview" tab in each zone that you created.

    1. In the sidebar, click on "Proxies and Scraping" and
    2. You will see a table of all the existing products you have created.
    3. Click on each line to see the credentials for each product.
    4. Click the "Overview" tab and you will see the username and password that you need to access that product.
  </Accordion>

  <Accordion title="Does the cost structure differ by country?">
    No, all countries are charged the same rate per GB.
  </Accordion>

  <Accordion title="Am I been charged differently for different domains?">
    Some domains require special permissions or products.

    In case you are not sure which product to use for your use case, it's best to get your dedicated account manager or support team for a integration session.
  </Accordion>

  <Accordion title="Can I limit my daily usage?">
    Yes.

    In the [Zone](https://brightdata.com/cp/zones) page under the "Usage spent limit" column it is possible to limit your daily usage in 2 ways:

    * Bandwidth(bytes)
    * Money spent(Dollars)

    When you reach your daily limit, the zone is suspended, alerted, or both, depending on your configuration.

    <Frame>
      <img alt="limit-daily-usage.gif" />
    </Frame>

    <Tip>
      The Zone limit is calculated every 15 minutes and will not take effect immediately so a Zone might go over it's limit by 15 minutes of usage.
    </Tip>

    <Note>
      When the load is high statistics calculation may have a delay. In order to manually update the usage-statistics in your Zone, open the Zone by clicking on its name, go to the Statistics table, and press the `recalc` button near the desired date. Wait until the red "Loading..." notification at the top of the screen will disappear, and refresh the page. The stats will then be up-to-date.
    </Note>
  </Accordion>

  <Accordion title="Can I use Bright Data without monthly commitment?">
    Absolutely!

    You can use Bright Data datacenter, ISP, residential, and mobile networks without monthly commitment.\
    Simply click the pencil next to the zone name and adjust the plan to 'Pay-As-You-Go'

    <Note>
      In case the ip type is pay per ip/dedicated type or gips, you will be charged for the ips allocated to the zone.
    </Note>
  </Accordion>

  <Accordion title="Who is eligible for a Free Trial?">
    Everyone who signs up to Bright Data automatically gets a free trial, which can be used for all Bright Data products. Every new account also gets a recurring [free tier](/general/account/billing-and-pricing/free-tier) of 5,000 credits per month for the Web Unlocker API, SERP API, Web Scraper API and Scraper Studio, which renews monthly.

    For additional details, see [here](/general/faqs#what-is-playground-mode).

    <Info>
      to help with trial configurations.
    </Info>
  </Accordion>

  <Accordion title="Why can't I create a Proxy zone or Web Unlocker API?">
    If you signed up with a personal email and are using the free credit without a payment method on file, access to **Proxy Networks** and **Web Unlocker API** is restricted.

    To unlock these products, [add a payment method](https://brightdata.com/cp/billing_flow). You will **not** be charged, this is for verification only and earns you a **\$5 bonus credit**.

    For full details, see [Payment Verification](/general/account/billing-and-pricing/payment-verification).
  </Accordion>

  <Accordion title="Do you have any Advanced Pricing plans?">
    Yes, our datacenter and ISP plans cover unlimited data volume.

    <Info>
      Contact your account manager for unlimited traffic per month plan information
    </Info>
  </Accordion>

  <Accordion title="How do I manage my billing details?">
    To manage your billing details, visit [https://brightdata.com/cp/billing/settings](https://brightdata.com/cp/billing/settings). There, you can add new payment methods, delete existing ones, set a primary payment method for your account, and configure alerts for your balance.
  </Accordion>

  <Accordion title="What payment methods are supported?">
    Brightdata supports payment through the following methods:

    * PayPal
    * AliPay
    * Payoneer
    * Credit Card: VISA, MasterCard, American Express
    * Wire transfer
    * Amazon Marketplace

    We do **not** support payment through cryptocurrencies.
  </Accordion>

  <Accordion title="How is bandwidth calculated? ">
    Bandwidth is calculated based on the data transmitted through the proxy peer. For instance, if a webpage has a size of 100 KB, the billed bandwidth will include this 100 KB along with a minimal additional amount to account for network overhead, such as the TCP handshake and other related operations. Billing is precise and measured down to the megabyte (MB), with no rounding up of bandwidth usage. To see a detailed breakdown of your costs consumption, please see: [Billing Overview](https://brightdata.com/cp/billing/overview) and there click on the 'breakdown' link.

    <Note>
      If a request is passed through the super proxy it will not be billed
    </Note>
  </Accordion>

  <Accordion title="Why am I getting &#x22;payment failed&#x22; errors? ">
    The payment failed error could occur due to several reasons, to see the exact cause in your case you should check your [transactions table](https://brightdata.com/cp/billing/transactions), there you will find instructions on how to resolve your issue.  If you require any further assistance, you can contact or sales department at [sales@brightdata.com](mailto:sales@brightdata.com)
  </Accordion>

  <Accordion title="Why does my promo code does not apply getting &#x22;Reached maximum number of activations&#x22; error?">
    This means that there were too many activations of that promo code. Wait till the next day and try again or contact our support.
  </Accordion>
</AccordionGroup>
