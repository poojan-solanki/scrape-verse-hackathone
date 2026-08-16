# Bright Data's Scraping Shield

> **Official Source**: [https://docs.brightdata.com/scraping-automation/bright-shield/scraping-shield](https://docs.brightdata.com/scraping-automation/bright-shield/scraping-shield)
> **Category**: `scraping-automation`

---

Control outgoing proxy traffic with Scraping Shield across 4 steps: classify domains, set rules, block requests and receive alerts to secure data flow.

Scraping shield provides data about the outgoing proxy traffic of the customers so they can have better control on their traffic, additionally, it also allows to trigger predefined actions when certain conditions are met, such as: send email alerts, block requests, etc.

## Scraping shield features

### How domains are classified

The domain classification feature categorizes outgoing traffic from the customer's proxy operations into groups like Shopping, Social Media, and Travel. Customers can see how much traffic goes to each category and drill down to see specific domains. They can also set rules to block specific categories or domains from proxy usage, and alert designated users when there is an access attempt.

<Accordion title="What can I see in the Domain Classification page?">
  On the domain classification page, you can view a chart that displays all outgoing proxy traffic from your account. This chart can be broken down by classification, domain, or zone.

  <Frame>
    <img alt="Traffic Chart" />
  </Frame>

  Additionally, there is a table that shows all traffic broken down by classification. Customers can expand each row of this table to see the specific domains or zones used, along with the number of requests and the amount of traffic to these domains/zones.

  <Frame>
    <img alt="Classification Table" />
  </Frame>

  Customers can also add rules to perform specific actions when a specific class/domain is targeted.
</Accordion>

### Adding and using rules

Rules provide the ability for the customer to set specific actions or alerts based on the classification or domains of outgoing traffic. These rules include the ability to block requests to certain classifications or domains and to set alerts when a specific class or domain has been targeted.

There are 2 ways to add rules:

<Tabs>
  <Tab title="Create rule from scratch">
    * Login to your account and go to Domain Classification page.
    * Choose the 'Rules' tab in the top of the page.
    * Click on 'Add rule'
    * Choose if the rule should apply to an entire classification or a specific domain
    * The “Block requests” checkbox will block all requests to the chosen classification/domain when enabled.
    * The “Notify..” checkbox will allow you to send alerts to designated users when a minimum number of requests have been sent to the chosen classification/domain.

    <Frame>
      <img alt="Create rule from Scratch" />
    </Frame>
  </Tab>

  <Tab title="Create rule from stats table">
    * Login to your account and go to Domain Classification page.
    * Review the table below the graph, and choose a classification or domain you want to add a rule to
    * Hover the mouse over the rules cell in the chosen class/domain and click the + icon
    * The “Block requests” checkbox will block all requests to the chosen classification/domain when enabled.
    * The “Notify..” checkbox will allow you to send alerts to designated users when a minimum number of requests have been sent to the chosen classification/domain.

    <Frame>
      <img alt="Create rule from stats table" />
    </Frame>
  </Tab>
</Tabs>

***

<Accordion title="Downloading sample requests">
  You can view sample requests sent from your account to the chosen domain, which include the timestamp of the request, origin IP, zone, bandwidth (in bytes), and the total duration of the request.
</Accordion>

## Scraping Shield - Billing

Scraping Shields pricing is \$10k/month at the minimum. The price for customers with usage costs of more than \$200k/month will be an additional 5% of their usage costs instead. (Actual usage costs, not the monthly commitment itself).

For example, a customer with usage costs of \$150k/month will pay the minimum \$10k/month, but a customer with \$220k/month will pay \$11k/month.

The usage cost is the total amount of money that was utilized by using the service, and only for products that are relevant for Scraping Shield usage are taken into account: All proxy products, Web-Scraper IDE and Custom Datasets. (all products but marketplace datasets)

<Tip>
  [Click here](/api-reference/scraping-shield-api/all-classification-data) to learn about Scraping Shield API Reference
</Tip>
