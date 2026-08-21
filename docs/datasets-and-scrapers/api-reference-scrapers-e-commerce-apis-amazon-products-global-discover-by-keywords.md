# Discover by keywords

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-keywords](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-keywords)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover by Keywords. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwhideng15g8jg63s7` to collect **Discover by Keywords** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `keyword`.
</ParamField>

<ParamField type="boolean">
  Whether to send notifications when the request is completed.
</ParamField>

<ParamField type="boolean">
  Whether to include errors in the response.
</ParamField>

## Request Body

<ParamField type="object[]">
  An array of input objects.

  <Expandable title="properties">
    <ParamField type="string">
      The keyword to search for products.
    </ParamField>

    <ParamField type="string">
      The Amazon domain to search on (e.g. [https://www.amazon.com](https://www.amazon.com)).
    </ParamField>

    <ParamField type="number">
      The number of search result pages to collect.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "keyword": "laptop stand",
        "url": "https://www.amazon.com",
        "pages_to_search": 3
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Adjustable Laptop Stand for Desk",
      "url": "https://www.amazon.com/dp/B0B77889EF",
      "asin": "B0B77889EF",
      "price": 34.99,
      "currency": "USD",
      "rating": 4.7,
      "reviews_count": 15200,
      "seller_name": "DeskPro Accessories",
      "brand": "DeskPro",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-stand.jpg",
      "description": "Ergonomic aluminum laptop stand with adjustable height and angle.",
      "category": "Office Products > Desk Accessories > Laptop Stands",
      "country_domain": "amazon.com"
    }
  ]
  ```
</ResponseExample>
