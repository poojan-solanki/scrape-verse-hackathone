# Fast SERP shopping search

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/shopping-search](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/shopping-search)
> **Category**: `scraping-automation`

---

Use Bright Data's Fast SERP service (31 languages) to retrieve compact Shopping search results in real time via a native proxy interface.

## Fast SERP: Google Shopping endpoints

Google Shopping offers two types of pages that Fast SERP supports:

* **Shopping search results**, a listing of products for a given search query, via `https://www.google.com/search?q=[searchTerm]&udm=28`
* **Product detail page (PDP)**, a full product page with offers, specifications, and reviews, via a Google Shopping product URL

Both endpoints require the `x-unblock-data-format: parsed_light` request header and the `brd_json=1` URL parameter. Omitting either will result in an unexpected response format.

## Fast Shopping Search Request

Fast SERP for Google Shopping works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

### Shopping search results

Use the `udm=28` parameter to retrieve the Google Shopping search results listing page.

```text theme={null}
curl -v --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user username:password \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/search?q=iphone&udm=28&brd_json=1"
```

### Response Format

A successful shopping search response contains a `shopping` array.

#### `shopping` array

| Field         | Type    | Required | Description                                   |
| ------------- | ------- | -------- | --------------------------------------------- |
| `price`       | string  | Yes      | Displayed price of the product                |
| `link`        | string  | Yes      | URL to the product listing or merchant page   |
| `global_rank` | integer | Yes      | Rank position of the result on the page       |
| `title`       | string  | No       | Product name                                  |
| `shop`        | string  | No       | Name of the merchant or seller                |
| `image`       | string  | No       | URL of the product thumbnail image            |
| `rating`      | number  | No       | Average customer rating                       |
| `reviews_cnt` | integer | No       | Number of customer reviews                    |
| `old_price`   | string  | No       | Original price before discount, if applicable |

#### Example response, shopping search results

```text theme={null}
{
  "shopping": [
    {
      "title": "Apple iPhone 16 128GB Black",
      "link": "https://www.example-store.com/iphone-16-black",
      "price": "$799.00",
      "old_price": "$899.00",
      "shop": "Example Store",
      "rating": 4.8,
      "reviews_cnt": 3240,
      "image": "https://www.example-store.com/images/iphone-16.jpg",
      "global_rank": 1
    },
    {
      "title": "Apple iPhone 16 256GB White",
      "link": "https://www.another-store.com/iphone-16-white",
      "price": "$899.00",
      "shop": "Another Store",
      "rating": 4.7,
      "reviews_cnt": 1850,
      "image": "https://www.another-store.com/images/iphone-16-white.jpg",
      "global_rank": 2
    }
  ]
}
```

Response schema: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_shopping.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_shopping.schema.json)

## Fast Shopping Product Request

Fast SERP for Google Shopping product pages works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

For Fast SERP, both the `x-unblock-data-format: parsed_light` request header and the `brd_json=1` URL parameter are required. Omitting either will result in an unexpected response format.

<Note>
  Google Shopping product (PDP) URLs are short-lived. They carry an encoded `prds=` payload that Google rotates frequently, so a copied URL stops resolving after a short window. Do not hardcode a product URL. Instead, use whatever URL Google routes to when you open a product from a shopping search result tile, then append `&brd_json=1`.
</Note>

### Native proxy request

```shell theme={null}
curl -v --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user username:password \
  -k \
  "<GOOGLE_SHOPPING_PRODUCT_URL>&brd_json=1" \
  -H 'x-unblock-data-format: parsed_light'
```

## Response Format

A successful response is structured around three top-level fields: `product`, `product_offers`, and `product_spec`.

### `product` object

Top-level product information.

| Field         | Type             | Description                      |
| :------------ | :--------------- | :------------------------------- |
| `title`       | string           | Name of the product              |
| `description` | string           | Full product description         |
| `images`      | array of strings | List of product image URLs       |
| `rating`      | number \| null   | Average customer rating          |
| `reviews_cnt` | integer          | Total number of customer reviews |
| `ai_images`   | array of strings | Links to images in ai segment    |

### `product_offers` array

List of individual seller offers for the product.

| Field                | Type             | Description                                  |
| :------------------- | :--------------- | :------------------------------------------- |
| `seller`             | string           | Name of the seller or merchant               |
| `link`               | string           | URL to the seller's product page             |
| `logo`               | string           | URL of the seller's logo image               |
| `item_price`         | array of strings | Current price(s) displayed for the offer     |
| `item_old_price`     | array of strings | Previous/crossed-out price(s), if applicable |
| `shipping`           | string           | Shipping cost or delivery information        |
| `rating`             | number           | Seller or offer rating                       |
| `reviews_cnt`        | integer          | Number of reviews for this offer             |
| `details`            | array of strings | List of offer detail highlights              |
| `details_and_offers` | string           | Combined details and promotional offer text  |
| `payment_methods`    | string           | Accepted payment methods                     |

### `product_spec` object

Technical specifications grouped into sections.

| Field                  | Type   | Description                                |
| :--------------------- | :----- | :----------------------------------------- |
| `specs`                | array  | List of specification sections             |
| `specs[].data`         | array  | List of spec items within the section      |
| `specs[].data[].name`  | string | Specification label, e.g. `"Display size"` |
| `specs[].data[].value` | string | Specification value, e.g. `"6.1 inches"`   |

## Example Response

```shell theme={null}
{
  "product": {
    "title": "Apple iPhone 17 Pro Max",
    "description": "The Apple iPhone 17 Pro Max features the latest A-series chip, a pro camera system, and all-day battery life in a titanium design.",
    "images": [
      "https://www.example-store.com/images/iphone-17-pro-max-front.jpg",
      "https://www.example-store.com/images/iphone-17-pro-max-back.jpg"
    ],
    "ai_images": [
      "https://www.example-store.com/images/iphone-17-pro-max-ai-1.jpg",
      "https://www.example-store.com/images/iphone-17-pro-max-ai-2.jpg"
    ],
    "rating": 4.9,
    "reviews_cnt": 5120
  },
  "product_offers": [
    {
      "seller": "Example Store",
      "link": "https://www.example-store.com/iphone-17-pro-max",
      "logo": "https://www.example-store.com/logo.png",
      "item_price": ["$1,199.00"],
      "item_old_price": ["$1,299.00"],
      "shipping": "Free shipping",
      "rating": 4.9,
      "reviews_cnt": 2100,
      "details": ["In stock", "Ships within 24 hours"],
      "details_and_offers": "In stock. Ships within 24 hours. 10% off with code SAVE10.",
      "payment_methods": "Visa, Mastercard, PayPal"
    },
    {
      "seller": "Another Store",
      "link": "https://www.another-store.com/iphone-17-pro-max",
      "logo": "https://www.another-store.com/logo.png",
      "item_price": ["$1,209.00"],
      "item_old_price": [],
      "shipping": "$5.99 shipping",
      "rating": 4.7,
      "reviews_cnt": 980,
      "details": ["In stock"],
      "details_and_offers": "In stock. Standard delivery 3-5 days.",
      "payment_methods": "Visa, Mastercard"
    }
  ],
  "product_spec": {
    "specs": [
      {
        "data": [
          { "name": "Display size", "value": "6.9 inches" },
          { "name": "Display type", "value": "Super Retina XDR OLED" }
        ]
      },
      {
        "data": [
          { "name": "Storage", "value": "256GB" },
          { "name": "RAM", "value": "12GB" },
          { "name": "Processor", "value": "Apple A19 Pro" }
        ]
      },
      {
        "data": [
          { "name": "Main camera", "value": "48MP" },
          { "name": "Battery capacity", "value": "4685 mAh" }
        ]
      }
    ]
  }
}
```

Response schema: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_shopping\_product.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_shopping_product.schema.json)

## Supported parameters

| Parameter  | Description                                | Example      | Notes                                                                             |
| ---------- | ------------------------------------------ | ------------ | --------------------------------------------------------------------------------- |
| `q`        | Search query (**must be first in URL**)    | `q=iphone`   | Query size must be under 8,000 charachters. <br />Longer queries fail with error. |
| `gl`       | Two-letter country code for search country | `gl=us`      |                                                                                   |
| `hl`       | Two-letter language code for page language | `hl=en`      |                                                                                   |
| `brd_json` | **Required.**`1` = parsed JSON             | `brd_json=1` |                                                                                   |

***
