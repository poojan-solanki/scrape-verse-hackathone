# FAQ: Archive API

> **Official Source**: [https://docs.brightdata.com/datasets/archive/faqs](https://docs.brightdata.com/datasets/archive/faqs)
> **Category**: `datasets-and-scrapers`

---

FAQs about the Bright Data Archive API: 90 PB of archived data, 4 delivery destinations and CPM pricing of $0.2 to $1 per thousand pages.

<AccordionGroup>
  <Accordion title="What is Archive API?">
    Archive API is a massive, continuously expanding, cached repository by Bright Data, designed to capture and deliver public web data at scale.

    It provides full web pages and metadata, making it ideal for AI training, machine learning, and large-scale data analysis.

    Unlike traditional web crawls, Archive API prioritizes **relevance**, **freshness**, and **usability**, giving you access to the most important parts of the internet as they are scraped daily.
  </Accordion>

  <Accordion title="How much data is available?">
    Bright Data’s Archive API has already collected \~90 PB of data, covering \~500 billion+ unique URLs from \~380 million domains.

    We continue to add \~1 PB of new data every week, alongside \~2 billion unique URLs, making Archive the **largest**, up-to-date, web data repository available - perfect for AI and data-driven applications.
  </Accordion>

  <Accordion title="How quickly can I access the data?">
    You can start accessing data immediately through our [Archive API](/datasets/archive/overview). The API allows you to search, retrieve and filter data snapshots from Archive seamlessly and efficiently.

    * Data from the last 24 hours: Will take from within minutes and up to a few hours to deliver (depending on snapshot size)
    * Data older than 24 hours: Will take up to 72 hours to process and deliver (depending on snapshot size)
  </Accordion>

  <Accordion title="How much does Archive API cost?">
    Archive API is priced by data age and billed per CPM, meaning cost per thousand pages.

    | Data age            | Price       |
    | ------------------- | ----------- |
    | Last 24 hours       | \$0.2 / CPM |
    | Older than 24 hours | \$1 / CPM   |

    Before you run a dump, `GET /webarchive/search/{search_id}` returns `dump_cost_usd` for that search, plus a `cost_breakdown` object splitting the estimate between cache pages and archive pages.
  </Accordion>

  <Accordion title="How can my data be delivered?">
    Archive API offers four delivery destinations:

    * **Amazon S3 bucket:** Have your Data Snapshot delivered directly to your S3 bucket.
    * **Azure Blob Storage:** Deliver the data snapshot directly to your Azure Blob container.
    * **Google Cloud Storage:** Deliver the data snapshot directly to your GCS bucket.
    * **Webhook:** Retrieved via webhook for real-time integration into your systems.

    Webhook delivery is not suitable for large dumps, which can reach 1 GB. See [Deliver to cloud](/api-reference/archive-api/deliver-to-cloud) for the settings each destination requires.
  </Accordion>

  <Accordion title="Can I filter Archive's data to get only what I need?">
    Absolutely! Archive API allows filtering by category, domains, date, languages, and country before retrieving data, ensuring you only get what you need.
  </Accordion>

  <Accordion title="How does Bright Data's Archive compare to Common Crawl?">
    When working with large-scale web data, **freshness**, **relevance**, and **accessibility** are key. While Common Crawl provides a broad historical snapshot of the web, Bright Data’s Archive API offers real-time, continuously updated data with advanced filtering and delivery options. Here’s how they compare:

    | **Feature**                      | **Bright Data’s Archive**                                                                                                                                              | **Common Crawl**                                                                          |
    | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
    | **Data Collection**              | Continuously captures public web data in real time, providing results as recent as “now.”                                                                              | Periodic web crawling (not real-time), updated monthly or bimonthly. Data can be outdated |
    | **Data Volume**                  | over \~110 PB collected in a few years, covering over \~800 billion pages across \~380M domains. Adds \~1.5 PB and \~2 billion unique URLs/week.                       | 250b pages collected over 18 years.                                                       |
    | **Website Coverage & Relevance** | Focuses on high-value, relevant website data based on real scraping business needs.                                                                                    | Crawls indiscriminately, including outdated or low-quality pages.                         |
    | **Data Types**                   | Full web pages (JS-rendered)                                                                                                                                           | 98.6% HTML and text                                                                       |
    | **Filtering & Delivery**         | Full discovery and delivery platform- filtering by category, domain, language, date etc. Delivered via Amazon S3, Azure Blob Storage, Google Cloud Storage or webhook. | No built-in filtering or delivery. Need to manually process huge raw WARC files.          |
  </Accordion>
</AccordionGroup>
