# Discover Amazon products by category URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-category-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-discover-by-category-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Amazon products by category URL. Calls the POST /datasets/v3/scrape endpoint.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_l7q7dkf244hwjntr0` to collect **Discover by Category URL** data.
  </Warning>
</ParamField>

<ParamField type="string">
  Must be set to `discover_new`.
</ParamField>

<ParamField type="string">
  Must be set to `category_url`.
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
      The URL of the Amazon category page.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.com/s?bbn=172282&rh=n%3A172282"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "USB-C Fast Charging Cable 6ft",
      "url": "https://www.amazon.com/dp/B0B12345AB",
      "asin": "B0B12345AB",
      "price": 12.99,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 34500,
      "seller_name": "CablePro",
      "brand": "CablePro",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-category.jpg",
      "description": "Durable braided USB-C cable with fast charging support up to 100W.",
      "category": "Electronics > Accessories > Cables"
    }
  ]
  ```
</ResponseExample>
