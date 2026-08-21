# FAQ: Scraping automation products

> **Official Source**: [https://docs.brightdata.com/scraping-automation/faqs](https://docs.brightdata.com/scraping-automation/faqs)
> **Category**: `scraping-automation`

---

FAQs on integrating, configuring and using Bright Data's Scraping Automation products (1000+ scrapers), including IP types, geotargeting and error codes.

<AccordionGroup>
  <Accordion title="How can I avoid getting blocked by Cloudflare or Cloudflare Turnstile?">
    To scrape data from sites that use Cloudflare or Cloudflare Turnstile, we recommend using our [Web Unlocker API](/scraping-automation/web-unlocker/introduction) or [Browser API](/scraping-automation/scraping-browser/introduction) solutions.

    Both solutions use different methods such as CAPTCHA solving, custom fingerprints and headers and can easily overcome cloud flare.

    [Web Unlocker API](/scraping-automation/web-unlocker/introduction) is recommended if you simply need to `GET` HTML from a website, without doing any interactions on the page.

    [Browser API](/scraping-automation/scraping-browser/introduction) is recommended if you need to interact with the page (for example, fill forms, click buttons et cetera)

    In both cases, you will be able to access the information you need on the page, even if it uses Cloudflare or Cloudflare Turnstile.
  </Accordion>

  <Accordion title="How can I avoid getting blocked by Datadome?">
    To scrape data from sites that use Datadome, we recommend using our [Web Unlocker API](/scraping-automation/web-unlocker/introduction) or [Browser API](/scraping-automation/scraping-browser/introduction) solutions.

    Both solutions use different methods such as CAPTCHA solving, custom fingerprints and headers and can easily overcome cloud flare.

    [Web Unlocker API](/scraping-automation/web-unlocker/introduction) is recommended if you simply need to `GET` HTML from a website, without doing any interactions on the page.

    [Browser API](/scraping-automation/scraping-browser/introduction) is recommended if you need to interact with the page (for example, fill forms, click buttons et cetera)

    In both cases, you will be able to access the information you need on the page, even if it uses Datadome.
  </Accordion>

  <Accordion title="Which websites are classified as Premium Domains?">
    Premium domains are websites that require additional Web Unlocker API resources due to their complexity in unblocking. See more details on [premium domains and pricing](/scraping-automation/web-unlocker/features#web-unlocker-api-premium-domains).

    ### List of Premium Domains

    <Note> The premium domains list is updated quarterly using our website classification logic and we’ll notify you via email 30 days in advance of any changes to your domains. You can always access the most up-to-date list in your Web Unlocker API zone.</Note>

    |                        |                      |                           |
    | ---------------------- | -------------------- | ------------------------- |
    | advanceautoparts.com   | giantfoodstores.com  | realcanadiansuperstore.ca |
    | affitto.it             | gopuff.com           | realestate.com.au         |
    | agoda.cn               | gplay.bg             | restaurantguru.com        |
    | albertsons.com         | hermes.com           | searchpeoplefree.com      |
    | allpeople.com          | hyatt.com            | shopee.cl                 |
    | autozone.com           | idealo.de            | shopee.co.id              |
    | bestbuy.com            | immobilienscout24.de | shopee.co.th              |
    | bestwestern.com        | ingatlan.com         | shopee.com.br             |
    | billiger.de            | instacart.com        | shopee.com.co             |
    | bottlerover.com        | intersport.fr        | shopee.com.mx             |
    | carousell.com          | joann.com            | shopee.com.my             |
    | carousell.com.hk       | kroger.com           | shopee.ph                 |
    | carousell.com.my       | lazada.co.id         | shopee.sg                 |
    | carousell.ph           | lazada.co.th         | shopee.tw                 |
    | carousell.sg           | lazada.com.my        | shopee.vn                 |
    | carsales.com.au        | lazada.com.ph        | similarweb.com            |
    | cdiscount.com          | lazada.sg            | skyscanner.co.kr          |
    | chewy.com              | lazada.vn            | skyscanner.net            |
    | costco.com             | lowes.ca             | stopandshop.com           |
    | cvs.com                | lowes.com            | target.com                |
    | despegar.com.mx        | mcmaster.com         | temu.com                  |
    | dickssportinggoods.com | mediamarkt.de        | ticketmaster.com          |
    | dynos.es               | mediamarkt.es        | totalwine.com             |
    | emaxme.com             | medline.com          | tractorsupply.com         |
    | familytreenow\.com     | mscdirect.com        | walmart.com.mx            |
    | feuvert.fr             | napaonline.com       | wayfair.com               |
    | flooranddecor.com      | nofrills.ca          | weismarkets.com           |
    | foodlion.com           | peoplefinders.com    | wizzair.com               |
    | footlocker.co.uk       | platt.com            | worten.pt                 |
    | footlocker.com         | publicdatausa.com    |                           |
  </Accordion>

  <Accordion title="How to enable JavaScript rendering with the Web Unlocker API?">
    If you require the Web Unlocker API to render a page using JavaScript, you should utilize the following feature: [Manual Expect Elements](/scraping-automation/web-unlocker/features#manual-'expect'-elements)

    This will ensure that the response that is returned by the Web Unlocker API includes the part of the page you require to be rendered.

    If your use case requires interactions within the page (click, scroll, hover, etc.), you should instead use [Browser API](/scraping-automation/scraping-browser/introduction)
  </Accordion>

  <Accordion title="Where can I find my public IP when using Web Unlocker API, SERP API, or Browser API?">
    The public IPs used by these "Web Unlocker API" products are not visible to customers. Web Unlocker API, SERP API, and Browser API use a dynamic IP pool that include real-world residential IPs. For compliance and privacy reasons, these IPs are intentionally hidden and constantly rotated to ensure anonymity and optimal unblocking of your target site.

    You can view other metadata surrounding your IP, such as country, ASN, and city by sending a request to the following test URL: `http://brdtest.com/myip.json`

    **Note:** The IP field will not be included in the response.
  </Accordion>

  <Accordion title="Is there a rate limit for the Web Unlocker API or SERP API?">
    Unfunded accounts are restricted to a default rate limit of 1,000 requests per minute. You can check the specific rate limit applied to your zone in the Control Panel, under the zone's Overview tab > Access details. This default limit is removed once funds are added to your account.
  </Accordion>

  <Accordion title="How do I scrape specific sites?">
    To scrape specific sites, follow these steps:

    1. **Select the Right Product for you:** Bright Data offers various tools like the **Web Scraper IDE**, **Scrapers**, and **Managed Services**. Choose the one that best suits your needs for scraping the target site.

    2. **Search for Target Site Templates:** If you're using the Scrapers, browse or search for pre-built scraping templates for popular websites. These templates make it easier to start scraping without building a scraper from scratch.

    3. **Customize or Build Your Scraper:**

       * If your target site isn't available as a pre-built option, use the **Web Scraper IDE** to build a custom scraper tailored to the specific site or the **Managed Services** option if you want us to build it for you

       * Write your script using the provided editor and tools, or modify an existing template to match your requirements.

    4. **Test and Execute Your Scraper:** Run the scraper within the Bright Data platform to collect the desired data. Use the debugging tools available in the IDE to refine the process if needed.

    5. **Export and Use the Data:** Once the scrape is complete, download or export the collected data in your preferred format, such as JSON, CSV, or Excel, for analysis or integration into your systems.

    If you're looking for a no-code solution or need assistance, Bright Data's support team can help, or you can request a custom dataset tailored to your needs.
  </Accordion>
</AccordionGroup>
