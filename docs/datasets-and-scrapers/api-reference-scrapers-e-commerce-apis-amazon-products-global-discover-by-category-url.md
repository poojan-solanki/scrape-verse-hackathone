# Discover Amazon global by category URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-category-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-discover-by-category-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to discover Amazon global by category URL. Calls the POST /datasets/v3/scrape endpoint.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwhideng15g8jg63s7` to collect **Discover by Category URL** data.
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

    <ParamField type="number">
      The number of products to collect. Missing value indicates no limit.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {
        "category_url": "https://www.amazon.de/-/en/b?node=340843031",
        "num_of_products": 25
      }
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Mechanical Gaming Keyboard RGB Backlit",
      "url": "https://www.amazon.de/dp/B0C44556CD",
      "asin": "B0C44556CD",
      "price": 79.99,
      "currency": "EUR",
      "rating": 4.6,
      "reviews_count": 5600,
      "seller_name": "GamerGear EU",
      "brand": "KeyMaster",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-keyboard.jpg",
      "description": "Full-size mechanical keyboard with customizable RGB and hot-swappable switches.",
      "category": "Computers & Accessories > Keyboards",
      "country_domain": "amazon.de"
    }
  ]
  ```
</ResponseExample>
