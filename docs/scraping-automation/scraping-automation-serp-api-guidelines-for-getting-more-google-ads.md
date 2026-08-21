# Guidelines for getting more Google ads

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/guidelines-for-getting-more-google-ads](https://docs.brightdata.com/scraping-automation/serp-api/guidelines-for-getting-more-google-ads)
> **Category**: `scraping-automation`

---

Structure Bright Data SERP API requests across 31 languages to maximize paid-ad coverage. Tune query intent, vertical, geo and device for higher ad density.

This document covers the key strategies for structuring Google SERP requests so that more paid ads appear in the response. This is relevant for use cases like competitive intelligence, ad monitoring, ad verification, PPC research, and SERP data collection at scale.

Google's SERP is dynamic, not every query returns ads. Getting more ads in your SERP results requires understanding what triggers them.

This article quotes data and information from studies and knowledge we have collected: since ad presentation logic and strategy may change, those guidelines are provided as heuristics and initial direction for investigationa and implementation and may change over time.

***

## Understanding the Context

Not all Google searches return ads. Google only serves paid results when it determines that the user's query has purchasing or commercial intent. This means the way a query is phrased, the niche it targets, the geography it is served in, and the technical setup of the request all play a role in how many ads appear. Optimizing each of these layers will consistently increase the number of ads returned per SERP request.

***

## Part 1. Query-Level Triggers: What Types of Queries Return More Ads

### Use Commercial and Transactional Intent Keywords

The single most reliable way to get ads in a SERP is to use commercial or transactional-intent queries. Google serves ads when users are perceived as likely to purchase. The following table shows how different intent types affect ad density:

| Intent Type   | Example Modifiers                   | Ad Rate   |
| ------------- | ----------------------------------- | --------- |
| Transactional | buy, shop, price, affordable, order | Very High |
| Commercial    | best, top, reviews, compare, deals  | High      |
| Informational | how to, what is, why                | Low       |
| Navigational  | Brand names alone                   | Low       |

Transactional "buy" keywords return shopping boxes in over 80% of SERPs. "Affordable" returns shopping results in over 73% of cases.

***

### Target High-Ad-Density Niches

Certain niches are heavily monetized and nearly always show ads. Prioritizing keywords from these verticals will produce higher ad yield per request:

| Niche                | Approximate Ad Presence |
| -------------------- | ----------------------- |
| Fashion and Beauty   | 83%                     |
| Pets                 | 80%                     |
| Ecommerce and Retail | 78%                     |
| Healthcare           | 65%                     |
| Insurance            | 42%                     |
| Legal                | High                    |
| Finance              | High                    |

***

### Use 3 to 4 Word Middle-Tail Queries

Query length significantly affects whether ads appear. Research across over 100,000 keywords shows that 3-word and 4-word queries produce the highest rate of ad appearances, at approximately 15.75% and 15.54% respectively. Single-word or very long queries produce significantly fewer ads.

Middle-tail queries strike a balance between specificity and search volume, making them ideal for triggering advertiser competition. An example would be "buy running shoes online" rather than just "shoes" or "what are the best minimalist running shoes for flat feet and knee problems."

***

### Append Proven Commercial Modifiers to Base Keywords

To systematically trigger ads, append intent modifiers to core product or service keywords.

Transactional modifiers with the highest ad density:

* buy, shop, order, purchase, cheap, affordable, discount, deals, free shipping, coupon

Commercial modifiers with strong ad density:

* best, top, reviews, compare, vs, price, cost, rated

For example, instead of using "running shoes," use "buy running shoes cheap" or "best running shoes price 2025."

***

## Part 2. Request Configuration: Technical Setup for More Ads

### Set the Right Geo-Location

Ads are far more concentrated in certain markets. Google's ad inventory is densest in the United States, followed by the United Kingdom, Australia, and Canada. When configuring SERP requests, setting the country parameter to the US and the language to English will produce maximum ad yield. Localized markets in developing regions will return significantly fewer or no ads.

***

### Use Desktop Device Emulation

There is a significant difference in ad rates between desktop and mobile. Desktop SERPs return higher ad volumes, with up to four text ads at the top and additional shopping carousels. Mobile SERPs, particularly when AI Overviews are present, return ads in only a small fraction of queries. For collecting more ads, desktop results should be the default target.

***

### Avoid Personalized or Logged-In Sessions

Personalized Google sessions can suppress ads if the user's history suggests a purchase has already been made or if behavioral targeting has deprioritized certain ad categories. For consistent and maximum ad results, use clean sessions with no browsing history, disable personalization where possible, and rotate session cookies when operating at scale.

***

### Avoid Queries That Trigger AI Overviews

Research shows that 87% of SERPs that contain an AI Overview show no ads at all. Since AI Overviews expanded significantly in 2024 and 2025, they have become a major suppressor of ad display. To avoid this, prefer queries that are clearly commercial or transactional, as AI Overviews rarely appear for purchase-intent searches. Purely informational queries such as "how to" or "what is" are the most likely to trigger AI Overviews and the least likely to return ads.

***

## Part 3. Ad Types and How to Trigger Each

### How to trigger text ads

Text ads appear at the top and bottom of search results and are the most common ad format. They are triggered by keyword searches with commercial or transactional intent. High-CPC categories such as legal, insurance, and finance almost always return text ads, with up to four appearing at the top of the page.

### How to trigger shopping ads

Shopping ads appear as visual product carousels with images, prices, and merchant information. They are triggered by product-specific searches that include terms like buy, shop, price, or deals. Including a brand name alongside the product type produces the best results. For example: "Nike running shoes buy."

### Local Services Ads

Local Services Ads are triggered by local combined with service-category queries, such as "plumber near me" or "lawyer in New York." Appending a city name or the phrase "near me" to a service keyword is the most reliable way to trigger this format.

***

## Part 4. Targeting High-CPC Keywords for Maximum Ad Slots

High-CPC keywords attract more advertisers, which fills more ad slots on the SERP. The following categories consistently produce the highest ad density:

| Category                   | Typical CPC Range |
| -------------------------- | ----------------- |
| Legal (lawyers, attorneys) | \$50 to \$100+    |
| Insurance                  | \$30 to \$60      |
| Finance, Loans, Credit     | \$20 to \$50      |
| Healthcare and Medical     | \$15 to \$40      |
| Real Estate                | \$10 to \$25      |
| SaaS and B2B Software      | \$10 to \$50      |

Searching for "personal injury lawyer \[city]" or "business insurance quote" will almost always return three to four text ads at the top of the page.

***

## Part 5. Scaling Tips for Systematic Ad Collection

***

### Use Standard Result Sets

As of early 2025, Google removed support for the num=100 parameter that previously allowed 100 results per page. The most stable approach is to use the default 10-result page. Standard result pages reliably return up to four text ads at the top, up to three text ads at the bottom, and shopping carousels where applicable.

***

### Target Queries at Peak Advertiser Hours

Ad auctions are dynamic and advertiser budgets fluctuate throughout the day. More advertisers compete during business hours, particularly on weekdays. The best windows for returning a full set of ads are Tuesday through Thursday between 9am and 5pm in the target geography. Weekends and late-night queries often return fewer ads as daily budgets exhaust or campaigns are paused.

***

## Part 6. Ad Position Reference

The following breakdown shows where ads typically appear in a standard non-AI Overview SERP:

| Ad Position             | Trigger                           | Notes                        |
| ----------------------- | --------------------------------- | ---------------------------- |
| Text ads at the top     | High-competition commercial terms | Up to 4 ads                  |
| Shopping carousels      | Product-specific queries          | Appear above organic results |
| Text ads at the bottom  | Most commercial queries           | Up to 3 ads                  |
| Text ads top and bottom | Highly commercial queries         | Maximum coverage             |

***

## Part 7. Example Queries Designed to Return Maximum Ads

The following query structures are designed to reliably produce high ad density across different formats:

* "buy car insurance online cheap", text ads and shopping
* "best personal injury lawyer New York", four top text ads
* "compare health insurance plans 2025", text ads and shopping
* "affordable running shoes free shipping", shopping carousel and text ads
* "online MBA program cost", text ads in a high-CPC education category
* "best CRM software for small business", text and shopping ads
* "deals on laptops buy now", heavy shopping ads
* "home loan rates today", text ads in a high-CPC finance category

***

## What to remember

Getting more ads in Google SERP results is primarily a function of query intent, niche selection, geography, and technical configuration. Commercial and transactional queries in high-value niches, targeted at US audiences on desktop devices, using clean sessions and residential proxies through a reliable SERP API, will consistently return the highest number of paid results per request. Avoiding informational queries, AI Overview triggers, and personalized sessions are equally important in ensuring maximum ad yield.
