# Collect products global by URL

> **Official Source**: [https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-collect-by-url](https://docs.brightdata.com/api-reference/scrapers/e-commerce-apis/amazon-products-global-collect-by-url)
> **Category**: `datasets-and-scrapers`

---

POST https://api.brightdata.com/datasets/v3/scrape
Use the Bright Data Web Scraper API to collect Products Global by URL. POST /datasets/v3/scrape starts a job that returns structured product records as JSON.

## Query Parameters

<ParamField type="string">
  The dataset ID used for this request.

  <Warning>
    Must be set to `gd_lwhideng15g8jg63s7` to collect **Products Global by URL** data.
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
      The URL of the Amazon product from any country domain.
    </ParamField>

    <ParamField type="number">
      Filter by the number of units bought in the past month.
    </ParamField>
  </Expandable>

  #### Example

  ```json wrap theme={null}
  {
    "input": [
      {"url": "https://www.amazon.de/-/en/dp/B078TNNZK3"},
      {"url": "https://www.amazon.co.jp/dp/B0CWV9YTLV"}
    ]
  }
  ```
</ParamField>

<ResponseExample>
  ```json 200 theme={null}
  [
    {
      "title": "Bluetooth Portable Speaker Waterproof",
      "url": "https://www.amazon.de/-/en/dp/B078TNNZK3",
      "asin": "B078TNNZK3",
      "price": 59.99,
      "currency": "EUR",
      "rating": 4.5,
      "reviews_count": 23400,
      "seller_name": "AudioWorld DE",
      "brand": "SoundMax",
      "availability": "In Stock",
      "main_image": "https://m.media-amazon.com/images/I/example-global.jpg",
      "description": "Waterproof portable speaker with 360-degree sound and 12-hour battery.",
      "category": "Electronics > Audio > Speakers",
      "country_domain": "amazon.de"
    }
  ]
  ```
</ResponseExample>
