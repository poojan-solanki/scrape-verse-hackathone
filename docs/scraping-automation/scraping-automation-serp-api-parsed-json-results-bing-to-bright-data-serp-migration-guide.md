# Bing to Bright Data SERP migration guide

> **Official Source**: [https://docs.brightdata.com/scraping-automation/serp-api/parsed-json-results/bing-to-bright-data-serp-migration-guide](https://docs.brightdata.com/scraping-automation/serp-api/parsed-json-results/bing-to-bright-data-serp-migration-guide)
> **Category**: `scraping-automation`

---

Migrate from the retired Microsoft Bing Search API to the Bright Data SERP API (31 languages) for Bing. Step-by-step request mapping and response examples.

<Warning>
  [Microsoft Bing Search APIs retiring on August 11, 2025](https://learn.microsoft.com/en-us/lifecycle/announcements/bing-search-api-retirement). Bright Data SERP API for Bing domain continues to be supported.
</Warning>

<Info>
  **Migration benefits**

  * Drop-in replacement with minimal code changes
  * 1:1 compatible JSON response schema
  * Enhanced request flexibility supporting both query-based and URL-based requests
</Info>

## Quick start migration (5 Minutes)

<Steps>
  <Step title="Get your API Key">
    [Sign up for Bright Data](https://brightdata.com/?hs_signup=1\&utm_source=docs) and get your API key from the dashboard.
  </Step>

  <Step title="Update your endpoint">
    Replace `api.bing.microsoft.com` with `api.brightdata.com/request`
  </Step>

  <Step title="Add parameters in body & test your first request">
    ```bash theme={null}
    curl -X POST 'https://api.brightdata.com/request' \
      -H "Authorization: Bearer YOUR_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "search_engine": "bing",
        "query": "test search",
        "data_format": "parsed_bing_api",
        "format": "json",
        "zone": "your_zone_name_"
      }'
    ```
  </Step>
</Steps>

## Step-by-step migration guide

### Step 1: Account setup

<AccordionGroup>
  <Accordion title="1.1 Create Bright Data account">
    1. Visit [brightdata.com/signup](https://brightdata.com/?hs_signup=1\&utm_source=docs)
    2. Navigate to **Zones** → **Create Zone** → **SERP API**
    3. Copy your API key credentials
  </Accordion>

  <Accordion title="1.2 Configure Authentication">
    Replace your Bing API key with Bright Data credentials:

    **Before (Bing):**

    ```http theme={null}
    Ocp-Apim-Subscription-Key: YOUR_BING_KEY
    ```

    **After (Bright Data):**

    ```http theme={null}
    Authorization: Bearer YOUR_BRIGHTDATA_API_KEY
    ```
  </Accordion>
</AccordionGroup>

### Step 2: Update request format

<Tabs>
  <Tab title="cURL">
    **Before (Bing API):**

    ```bash theme={null}
    curl -X GET "https://api.bing.microsoft.com/v7.0/search?q=openai" \
      -H "Ocp-Apim-Subscription-Key: YOUR_BING_KEY"
    ```

    **After (Bright Data):**

    ```bash theme={null}
    curl -X POST "https://api.brightdata.com/request" \
      -H "Authorization: Bearer YOUR_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "search_engine": "bing",
        "query": "openai",
        "data_format": "parsed_bing_api",
        "format": "json",
        "zone": "your_zone_name"
      }'
    ```
  </Tab>

  <Tab title="Python">
    **Before (Bing API):**

    ```python theme={null}
    import requests

    headers = {
        'Ocp-Apim-Subscription-Key': 'YOUR_BING_KEY'
    }

    response = requests.get(
        'https://api.bing.microsoft.com/v7.0/search',
        headers=headers,
        params={'q': 'openai'}
    )
    ```

    **After (Bright Data):**

    ```python theme={null}
    import requests

    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }

    payload = {
        'search_engine': 'bing',
        'query': 'openai',
        'data_format': 'parsed_bing_api',
        'format': 'json',
        'zone': 'your_zone_name'
    }

    response = requests.post(
        'https://api.brightdata.com/request',
        headers=headers,
        json=payload
    )
    ```
  </Tab>

  <Tab title="Node.js">
    **Before (Bing API):**

    ```javascript theme={null}
    const axios = require('axios');

    const response = await axios.get(
        'https://api.bing.microsoft.com/v7.0/search',
        {
            headers: {
                'Ocp-Apim-Subscription-Key': 'YOUR_BING_KEY'
            },
            params: { q: 'openai' }
        }
    );
    ```

    **After (Bright Data):**

    ```javascript theme={null}
    const axios = require('axios');

    const response = await axios.post(
        'https://api.brightdata.com/request',
        {
            search_engine: 'bing',
            query: 'openai',
            data_format: 'parsed_bing_api',
            format: 'json',
            zone: 'your_zone_name'
        },
        {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json'
            }
        }
    );
    ```
  </Tab>
</Tabs>

### Step 3: Handle response format

The response format remains identical to Bing's API when using `data_format: "parsed_bing_api"`:

<CodeGroup>
  ```json Response Structure theme={null}
  {
    "_type": "SearchResponse",
    "queryContext": {
      "originalQuery": "openai"
    },
    "webPages": {
      "totalEstimatedMatches": 12300000,
      "value": [
        {
          "name": "OpenAI",
          "url": "https://openai.com/",
          "displayUrl": "openai.com",
          "snippet": "OpenAI is an AI research and deployment company..."
        }
      ]
    },
    "images": { "value": [...] },
    "videos": { "value": [...] },
    "relatedSearches": { "value": [...] }
  }
  ```

  ```python Parse Results theme={null}
  # Your existing Bing API parsing code works unchanged
  data = response.json()

  # Extract web results
  web_results = data.get('webPages', {}).get('value', [])
  for result in web_results:
      print(f"Title: {result['name']}")
      print(f"URL: {result['url']}")
      print(f"Snippet: {result['snippet']}")

  # Extract images
  images = data.get('images', {}).get('value', [])
  for image in images:
      print(f"Image: {image['thumbnailUrl']}")
  ```
</CodeGroup>
