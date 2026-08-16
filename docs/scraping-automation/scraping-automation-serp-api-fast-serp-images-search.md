# Fast SERP images search

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/images-search](https://docs.brightdata.com/scraping-automation/serp-api/fast-serp/images-search)
> **Category**: `scraping-automation`

---

Use Bright Data Fast SERP (31 languages) for Google Images via the native proxy interface. Receive compact JSON image results suited for real-time applications.

Bright Data offers a fast SERP service for Images. This service responds with a compact JSON to power real-time applications that need image search results. To gain access, please contact your Bright Data account manager.

## Fast Images Search Request

Fast SERP for Google Images works best with the native proxy interface. If you need a REST API interface for your architecture, one can be provided.

Both the `x-unblock-data-format: parsed_light` request header and the `brd_json=1` URL parameter are required. Omitting either will result in an unexpected response format.

### Native proxy request

```text theme={null}
curl -i --proxy fserp.brd.superproxy.io:44445 \
  --proxy-user brd-customer-<CUSTOMER>-zone-<ZONE>:<PASSWORD> \
  -k \
  -H 'x-unblock-data-format: parsed_light' \
  "https://www.google.com/search?q=pizza&udm=2&brd_json=1"
```

## Response Format

A successful response contains a single required `images` array.

### `images` array

| Field             | Type    | Required | Description                                      |
| ----------------- | ------- | -------- | ------------------------------------------------ |
| `global_rank`     | integer | Yes      | Rank position of the result on the page          |
| `title`           | string  | No       | Title or alt text of the image                   |
| `link`            | string  | No       | URL of the source page where the image was found |
| `image`           | string  | No       | Thumbnail image URL                              |
| `original_image`  | string  | No       | Full-resolution image URL                        |
| `image_width`     | integer | No       | Displayed image width in pixels                  |
| `image_height`    | integer | No       | Displayed image height in pixels                 |
| `original_width`  | integer | No       | Original image width in pixels                   |
| `original_height` | integer | No       | Original image height in pixels                  |
| `blurred`         | boolean | No       | Whether the image is blurred                     |

## Example Response

```text theme={null}
{
  "images": [
    {
      "global_rank": 1,
      "title": "Classic Margherita Pizza",
      "link": "https://www.example-recipe.com/margherita",
      "image": "https://www.example-recipe.com/images/margherita-thumb.jpg",
      "original_image": "https://www.example-recipe.com/images/margherita-full.jpg",
      "image_width": 400,
      "image_height": 300,
      "original_width": 1200,
      "original_height": 900,
      "blurred": false
    },
    {
      "global_rank": 2,
      "title": "Neapolitan Pizza with Fresh Basil",
      "link": "https://www.example-food.com/neapolitan",
      "image": "https://www.example-food.com/images/neapolitan-thumb.jpg",
      "original_image": "https://www.example-food.com/images/neapolitan-full.jpg",
      "image_width": 400,
      "image_height": 300,
      "original_width": 1600,
      "original_height": 1200,
      "blurred": false
    },
    {
      "global_rank": 3,
      "title": "New York Style Pizza Slice",
      "link": "https://www.example-pizza.com/ny-style",
      "image": "https://www.example-pizza.com/images/ny-slice-thumb.jpg",
      "original_image": "https://www.example-pizza.com/images/ny-slice-full.jpg",
      "image_width": 400,
      "image_height": 267,
      "original_width": 2000,
      "original_height": 1333,
      "blurred": false
    },
    {
      "global_rank": 4,
      "title": "Homemade Deep Dish Chicago Pizza",
      "link": "https://www.example-recipe.com/deep-dish",
      "image": "https://www.example-recipe.com/images/deep-dish-thumb.jpg",
      "original_image": "https://www.example-recipe.com/images/deep-dish-full.jpg",
      "image_width": 400,
      "image_height": 400,
      "original_width": 1500,
      "original_height": 1500,
      "blurred": false
    },
    {
      "global_rank": 5,
      "title": "Wood-Fired Pizza from Naples",
      "link": "https://www.example-travel.com/naples-pizza",
      "image": "https://www.example-travel.com/images/naples-pizza-thumb.jpg",
      "original_image": "https://www.example-travel.com/images/naples-pizza-full.jpg",
      "image_width": 400,
      "image_height": 267,
      "original_width": 3000,
      "original_height": 2000,
      "blurred": false
    }
  ]
}
```

Response schema: [https://api.brightdata.com/data\_schemas/fast\_serp/google\_search\_images.schema.json](https://api.brightdata.com/data_schemas/fast_serp/google_search_images.schema.json)

## Supported parameters

| Parameter  | Description                                | Example      | Notes                                                                             |
| ---------- | ------------------------------------------ | ------------ | --------------------------------------------------------------------------------- |
| `q`        | Search query (**must be first in URL**)    | `q=pizza`    | Query size must be under 8,000 charachters. <br />Longer queries fail with error. |
| `gl`       | Two-letter country code for search country | `gl=us`      |                                                                                   |
| `hl`       | Two-letter language code for page language | `hl=en`      |                                                                                   |
| `brd_json` | **Required.**`1` = parsed JSON             | `brd_json=1` |                                                                                   |
