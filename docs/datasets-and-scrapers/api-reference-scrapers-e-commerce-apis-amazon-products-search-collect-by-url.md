# Collect products search by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-search-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-search-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Products Search by URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwdb4vjm1ehb499uxs` to collect **Products Search by URL** data.
  </Warning>
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
        "keyword": "X-box",
        "url": "https://www.amazon.com",
        "pages_to_search": 2
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Wireless Gaming Controller for Console",
      "url": "https://www.amazon.com/dp/B0D22334IJ",
      "asin": "B0D22334IJ",
      "price": 59.99,
      "currency": "USD",
      "rating": 4.6,
      "reviews_count": 28400,
      "seller_name": "GameTech Store",
      "brand": "GameTech",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-controller.jpg",
      "description": "Ergonomic wireless controller with custom button mapping and vibration feedback.",
      "category": "Video Games > Accessories > Controllers"
    }
  ]
  ```
</ResponseExample>
