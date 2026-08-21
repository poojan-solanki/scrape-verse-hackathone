# Shopping search

> **Official Source**: [https://docs.brightdata.com/api-reference/serp/google-search/shopping](https://docs.brightdata.com/api-reference/serp/google-search/shopping)
> **Category**: `scraping-automation`

---

Configure the Bright Data Google Search Shopping Search parameter to refine queries and return matching results as JSON or HTML. On port 44445.

```http theme={null}
https://www.google.com/search?q=pizza&tbm=shop
```

## Parameters

<ParamField type="string">
  The search query parameter. Specifies the keyword or phrase you want to search for on Google.
</ParamField>

<ParamField type="string">
  Define search type. For Shopping search, set `tbm` value to `shop`.

  ```http theme={null}
  https://www.google.com/search?q=pizza&tbm=shop
  ```
</ParamField>

<RequestExample>
  ```shell cURL highlight={6} theme={null}
    curl -X POST https://api.brightdata.com/request \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer API_KEY" \
    --data '{
      "zone": "serp_api1",
      "url": "https://www.google.com/search?q=pizza&tbm=shop",
      "format": "raw"
    }'
  ```

  ```shell Native proxy highlight={4} theme={null}
  curl --proxy brd.superproxy.io:44445 \
    --proxy-user CUSTOMER_USERNAME:CUSTOMER_PASSWORD \
    --ssl-no-revoke \
    "https://www.google.com/search?q=pizza&tbm=shop"
  ```

  ```js Node.js highlight={10} theme={null}
  (async () => {
    const response = await fetch('https://api.brightdata.com/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY'
      },
      body: JSON.stringify({
        zone: 'serp_api1',
        url: 'https://www.google.com/search?q=pizza&tbm=shop',
        format: 'raw'
      })
    });
    
    const data = await response.text();
    console.log(data);
  })();
  ```

  ```python Python highlight={11} theme={null}
  import requests

  # API Configuration
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY',
  }

  payload = {
      'zone': 'serp_api1',
      'url': 'https://www.google.com/search?q=pizza&tbm=shop',
      'format': 'raw'
  }

  # Make the request
  response = requests.post(
      'https://api.brightdata.com/request', 
      json=payload, 
      headers=headers
  )

  print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json 200 highlight={9} theme={null}
  {
    "general": {
      "search_engine": "google",
      "query": "pizza",
      "language": "en",
      "location": "United States",
      "mobile": false,
      "basic_view": false,
      "search_type": "shopping",
      "page_title": "pizza - Google Shopping",
      "timestamp": "2026-02-24T20:34:04.313Z"
    },
    "input": {
      "original_url": "https://www.google.com/search?q=pizza&tbm=shop&brd_json=1",
      "request_id": "hl_xxxxxxxxxxxxxxx"
    },
    "navigation": [
      {
        "title": "Nearby",
        "href": "https://www.google.com/search?q=pizza+nearby&gl=US&hl=en&udm=28&shoprs=CAEYAyoFcGl6emEyDAgDEgZOZWFyYnkYAli7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEAQ"
      },
      {
        "title": "On sale",
        "href": "https://www.google.com/search?q=pizza+sale&gl=US&hl=en&udm=28&shoprs=CAESBEoCGAEYBioFcGl6emEyEwgGEgdPbiBzYWxlGAIiBEoCGAFYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEAU"
      },
      {
        "title": "Get it fast",
        "href": "https://www.google.com/search?q=pizza&gl=US&hl=en&udm=28&shoprs=CAESDZoBCgoIEAM4AUAFSAEYFCoFcGl6emEyJAgUEgtHZXQgaXQgZmFzdCINmgEKCggQAzgBQAVIASoEEAEYAWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXEAY"
      },
      {
        "title": "Small business",
        "href": "https://www.google.com/search?q=pizza&gl=US&hl=en&udm=28&shoprs=CAESAmoAGBYqBXBpenphMhwIFhIOU21hbGwgYnVzaW5lc3MiAmoAKgQQARgBYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXEAc"
      },
      {
        "title": "Bread & Pastry Dough",
        "href": "https://www.google.com/search?q=bread+%26+pastry+dough+pizza&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyGAgJEhRCcmVhZCAmIFBhc3RyeSBEb3VnaGAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEAs"
      },
      {
        "title": "Pizza Sauce",
        "href": "https://www.google.com/search?q=pizza+sauce+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyDwgJEgtQaXp6YSBTYXVjZWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEAw"
      },
      {
        "title": "Cheese",
        "href": "https://www.google.com/search?q=cheese+pizza&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyCggJEgZDaGVlc2VgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXEA0"
      },
      {
        "title": "Pizza Pans & Stones",
        "href": "https://www.google.com/search?q=pizza+pans+%26+stones+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyFwgJEhNQaXp6YSBQYW5zICYgU3RvbmVzYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXEA4"
      },
      {
        "title": "Pizza Crust Mixes",
        "href": "https://www.google.com/search?q=pizza+crust+mixes+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyFQgJEhFQaXp6YSBDcnVzdCBNaXhlc2AC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAR6BAgXEA8"
      },
      {
        "title": "4 and up",
        "href": "https://www.google.com/search?q=pizza&gl=US&hl=en&udm=28&shoprs=CAESBWIDCJADGB4qBXBpenphMhUIHhIINCBhbmQgdXAiBWIDCJADQARgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEBM"
      },
      {
        "title": "Chicken",
        "href": "https://www.google.com/search?q=chicken+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEgdDaGlja2VuOgwImM-mAhCaz6YCMAJYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEBg"
      },
      {
        "title": "Turkey",
        "href": "https://www.google.com/search?q=turkey+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEgZUdXJrZXk6DAiYz6YCEJ_PpgIwAli7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEBk"
      },
      {
        "title": "Fish",
        "href": "https://www.google.com/search?q=fish+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFggBEgRGaXNoOgwImM-mAhCbz6YCMAJYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXEBo"
      },
      {
        "title": "Vegetable Protein",
        "href": "https://www.google.com/search?q=vegetable+protein+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyIwgBEhFWZWdldGFibGUgUHJvdGVpbjoMCJjPpgIQoM-mAjACWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXEBs"
      },
      {
        "title": "Walmart",
        "href": "https://www.google.com/search?q=walmart+pizza&gl=US&hl=en&udm=28&shoprs=CAEYAioFcGl6emEyCwgCEgdXYWxtYXJ0WLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEB8"
      },
      {
        "title": "Target",
        "href": "https://www.google.com/search?q=target+pizza&gl=US&hl=en&udm=28&shoprs=CAEYAioFcGl6emEyCggCEgZUYXJnZXRYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXECA"
      },
      {
        "title": "Home Depot",
        "href": "https://www.google.com/search?q=home+depot+pizza&gl=US&hl=en&udm=28&shoprs=CAEYAioFcGl6emEyDggCEgpIb21lIERlcG90WLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXECE"
      },
      {
        "title": "Food Depot",
        "href": "https://www.google.com/search?q=food+depot+pizza&gl=US&hl=en&udm=28&shoprs=CAEYAioFcGl6emEyDggCEgpGb29kIERlcG90WLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXECI"
      },
      {
        "title": "Under $5",
        "href": "https://www.google.com/search?q=pizza+under+$5&gl=US&hl=en&udm=28&shoprs=CAESDRILEQAAAADQElNBGAEYBSoFcGl6emEyIQgFEghVbmRlciAkNRgCIg0SCxEAAAAA0BJTQRgBKgIYAVi7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXECg"
      },
      {
        "title": "$5 - $9",
        "href": "https://www.google.com/search?q=pizza+between+$5+and+$9&gl=US&hl=en&udm=28&shoprs=CAESFhIUCQAAAADQElNBEQAAAACIKmFBGAEYBSoFcGl6emEyKQgFEgckNSAtICQ5GAIiFhIUCQAAAADQElNBEQAAAACIKmFBGAEqAhgBWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXECk"
      },
      {
        "title": "$9 - $20",
        "href": "https://www.google.com/search?q=pizza+between+$9+and+$20&gl=US&hl=en&udm=28&shoprs=CAESFhIUCQAAAACIKmFBEQAAAADQEnNBGAEYBSoFcGl6emEyKggFEggkOSAtICQyMBgCIhYSFAkAAAAAiCphQREAAAAA0BJzQRgBKgIYAVi7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXECo"
      },
      {
        "title": "Over $20",
        "href": "https://www.google.com/search?q=pizza+over+$20&gl=US&hl=en&udm=28&shoprs=CAESDRILCQAAAADQEnNBGAEYBSoFcGl6emEyIQgFEghPdmVyICQyMBgCIg0SCwkAAAAA0BJzQRgBKgIYAVi7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXECs"
      },
      {
        "title": "Lunch",
        "href": "https://www.google.com/search?q=lunch+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgVMdW5jaDoMCI3PpgIQj8-mAjACWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEDI"
      },
      {
        "title": "Breakfast",
        "href": "https://www.google.com/search?q=breakfast+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGwgBEglCcmVha2Zhc3Q6DAiNz6YCEI7PpgIwAli7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEDM"
      },
      {
        "title": "Entree",
        "href": "https://www.google.com/search?q=entree+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEgZFbnRyZWU6DAiJz6YCEIvPpgIwAli7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEDc"
      },
      {
        "title": "Appetizer",
        "href": "https://www.google.com/search?q=appetizer+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGwgBEglBcHBldGl6ZXI6DAiJz6YCEIrPpgIwAli7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEDg"
      },
      {
        "title": "Kosher",
        "href": "https://www.google.com/search?q=kosher+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEgZLb3NoZXI6DAjx34cBEPLfhwEwA1i7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEDw"
      },
      {
        "title": "Organic",
        "href": "https://www.google.com/search?q=organic+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEgdPcmdhbmljOgwIvvmHARC_-YcBMANYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXED0"
      },
      {
        "title": "Low Carb",
        "href": "https://www.google.com/search?q=low+carb+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGggBEghMb3cgQ2FyYjoMCLr4hwEQu_iHATADWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXED4"
      },
      {
        "title": "Pasta",
        "href": "https://www.google.com/search?q=pasta+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgVQYXN0YToMCPWzxAIQ9rPEAjAAWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEEI"
      },
      {
        "title": "Rice",
        "href": "https://www.google.com/search?q=rice+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFggBEgRSaWNlOgwI9bPEAhDrrMYCMABYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEEM"
      },
      {
        "title": "Free shipping",
        "href": "https://www.google.com/search?q=pizza+free+shipping&gl=US&hl=en&udm=28&shoprs=CAESBFICEAEYGSoFcGl6emEyFwgZEg1GcmVlIHNoaXBwaW5nIgRSAhABYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEEc"
      },
      {
        "title": "DiGiorno",
        "href": "https://www.google.com/search?q=digiorno+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEghEaUdpb3JubzoKCIPzPBDS5UgwAVi7miFgAg&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAB6BAgXEEs"
      },
      {
        "title": "Red Baron",
        "href": "https://www.google.com/search?q=red+baron+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEglSZWQgQmFyb246CgiD8zwQ1uJIMAFYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAF6BAgXEEw"
      },
      {
        "title": "Jack's",
        "href": "https://www.google.com/search?q=jack's+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgZKYWNrJ3M6CwiD8zwQmp6YAjABWLuaIWAC&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAJ6BAgXEE0"
      },
      {
        "title": "TombStone",
        "href": "https://www.google.com/search?q=tombstone+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEglUb21iU3RvbmU6CgiD8zwQ0eZIMAFYu5ohYAI&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQ268JKAN6BAgXEE4"
      },
      {
        "title": "Nearby",
        "href": "https://www.google.com/search?q=pizza+nearby&gl=US&hl=en&udm=28&shoprs=CAEYAyoFcGl6emEyDAgDEgZOZWFyYnkYAli7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAJ6BAgXEFc"
      },
      {
        "title": "Bread & Pastry Dough",
        "href": "https://www.google.com/search?q=bread+%26+pastry+dough+pizza&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyGAgJEhRCcmVhZCAmIFBhc3RyeSBEb3VnaGAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAR6BAgXEFk"
      },
      {
        "title": "School",
        "href": "https://www.google.com/search?q=school+pizza&gl=US&hl=en&udm=28&shoprs=CAEYEioFcGl6emEyCggSEgZTY2hvb2xgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAZ6BAgXEFs"
      },
      {
        "title": "Chicken",
        "href": "https://www.google.com/search?q=chicken+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEgdDaGlja2VuOgwImM-mAhCaz6YCMAJYu5ohYAE&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAh6BAgXEF0"
      },
      {
        "title": "On sale",
        "href": "https://www.google.com/search?q=pizza+sale&gl=US&hl=en&udm=28&shoprs=CAESBEoCGAEYBioFcGl6emEyEwgGEgdPbiBzYWxlGAIiBEoCGAFYu5ohYAE&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAp6BAgXEF8"
      },
      {
        "title": "Pizza Sauce",
        "href": "https://www.google.com/search?q=pizza+sauce+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyDwgJEgtQaXp6YSBTYXVjZWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKAx6BAgXEGE"
      },
      {
        "title": "Get it fast",
        "href": "https://www.google.com/search?q=pizza&gl=US&hl=en&udm=28&shoprs=CAESDZoBCgoIEAM4AUAFSAEYFCoFcGl6emEyJAgUEgtHZXQgaXQgZmFzdCINmgEKCggQAzgBQAVIASoEEAEYAWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKA56BAgXEGM"
      },
      {
        "title": "Cheese",
        "href": "https://www.google.com/search?q=cheese+pizza&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyCggJEgZDaGVlc2VgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBB6BAgXEGU"
      },
      {
        "title": "Frozen",
        "href": "https://www.google.com/search?q=frozen+pizza&gl=US&hl=en&udm=28&shoprs=CAEYEioFcGl6emEyCggSEgZGcm96ZW5gAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBR6BAgXEGo"
      },
      {
        "title": "Under $5",
        "href": "https://www.google.com/search?q=pizza+under+$5&gl=US&hl=en&udm=28&shoprs=CAESDRILEQAAAADQElNBGAEYBSoFcGl6emEyIQgFEghVbmRlciAkNRgCIg0SCxEAAAAA0BJTQRgBKgIYAVi7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBZ6BAgXEGw"
      },
      {
        "title": "Pizza Crust",
        "href": "https://www.google.com/search?q=pizza+crust+&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGwgBEgtQaXp6YSBDcnVzdDoKCIXhORCM4TkwAFi7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBh6BAgXEG4"
      },
      {
        "title": "Pizza Pans & Stones",
        "href": "https://www.google.com/search?q=pizza+pans+%26+stones+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyFwgJEhNQaXp6YSBQYW5zICYgU3RvbmVzYAE&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBp6BAgXEHA"
      },
      {
        "title": "Lunch",
        "href": "https://www.google.com/search?q=lunch+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgVMdW5jaDoMCI3PpgIQj8-mAjACWLuaIWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKBx6BAgXEHI"
      },
      {
        "title": "Entree",
        "href": "https://www.google.com/search?q=entree+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEgZFbnRyZWU6DAiJz6YCEIvPpgIwAli7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKB56BAgXEHQ"
      },
      {
        "title": "Pizza Crust Mixes",
        "href": "https://www.google.com/search?q=pizza+crust+mixes+&gl=US&hl=en&udm=28&shoprs=CAEYCSoFcGl6emEyFQgJEhFQaXp6YSBDcnVzdCBNaXhlc2AB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKCJ6BAgXEHk"
      },
      {
        "title": "Small",
        "href": "https://www.google.com/search?q=small+pizza&gl=US&hl=en&udm=28&shoprs=CAEYEioFcGl6emEyCQgSEgVTbWFsbGAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKCR6BAgXEHs"
      },
      {
        "title": "Large",
        "href": "https://www.google.com/search?q=large+pizza&gl=US&hl=en&udm=28&shoprs=CAEYEioFcGl6emEyCQgSEgVMYXJnZWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKCZ6BAgXEH0"
      },
      {
        "title": "Breakfast",
        "href": "https://www.google.com/search?q=breakfast+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGwgBEglCcmVha2Zhc3Q6DAiNz6YCEI7PpgIwAli7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKCh6BAgXEH8"
      },
      {
        "title": "Fresh",
        "href": "https://www.google.com/search?q=fresh+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgVGcmVzaDoMCNCTiAEQ0ZOIATACWLuaIWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKCx6BQgXEIQB"
      },
      {
        "title": "Kosher",
        "href": "https://www.google.com/search?q=kosher+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGAgBEgZLb3NoZXI6DAjx34cBEPLfhwEwA1i7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKC56BQgXEIYB"
      },
      {
        "title": "Pasta",
        "href": "https://www.google.com/search?q=pasta+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyFwgBEgVQYXN0YToMCPWzxAIQ9rPEAjAAWLuaIWAB&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKDB6BQgXEIgB"
      },
      {
        "title": "Appetizer",
        "href": "https://www.google.com/search?q=appetizer+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGwgBEglBcHBldGl6ZXI6DAiJz6YCEIrPpgIwAli7miFgAQ&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKDJ6BQgXEIoB"
      },
      {
        "title": "Organic",
        "href": "https://www.google.com/search?q=organic+pizza&gl=US&hl=en&udm=28&shoprs=CAEYASoFcGl6emEyGQgBEgdPcmdhbmljOgwIvvmHARC_-YcBMANYu5ohYAE&sa=X&ved=2ahUKEwjF6IXp_PKSAxU6GLkGHan3NQgQip4GKDR6BQgXEIwB"
      }
    ],
    "shopping": [
      {
        "title": "Red Baron Classic Crust Pepperoni Pizza",
        "price": "$6.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "walgreens.com",
        "rating": 4.5,
        "reviews_cnt": 2100,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 1,
        "global_rank": 1
      },
      {
        "title": "Screamin' Sicilian Supremus Maximus Supreme Pizza",
        "price": "$5.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "Giant Food",
        "shipping": "Free delivery by Sat",
        "rating": 4.4,
        "reviews_cnt": 548,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 2,
        "global_rank": 2
      },
      {
        "title": "DiGiorno Original Rising Crust Pizza",
        "price": "$7.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "CVS Pharmacy",
        "shipping": "Free delivery on $35+",
        "rating": 4.4,
        "reviews_cnt": 9800,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 3,
        "global_rank": 3
      },
      {
        "title": "Giordano's Stuffed Chicago Deep Dish Frozen Pizza 10",
        "price": "$84.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "Walmart - Giordanos",
        "shipping": "Free delivery",
        "rating": 1,
        "reviews_cnt": 3,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 4,
        "global_rank": 4
      },
      {
        "title": "Jack's Original Thin Crust Pepperoni Pizza",
        "price": "$3.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "walgreens.com",
        "rating": 4.3,
        "reviews_cnt": 3400,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 5,
        "global_rank": 5
      },
      {
        "title": "Totino's Party Pepperoni Pizza",
        "price": "$2.14",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "Food Depot",
        "rating": 4.4,
        "reviews_cnt": 5700,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 6,
        "global_rank": 6
      },
      {
        "title": "Red Baron Pepperoni Deep Dish Personal Pizza",
        "price": "$42.99",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "WebstaurantStore.com",
        "rating": 4.6,
        "reviews_cnt": 1400,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 7,
        "global_rank": 7
      },
      {
        "title": "Red Baron Deep Dish Pepperoni Pizza",
        "price": "$4.29",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAA...",
        "shop": "Busch's Fresh Food Market",
        "rating": 4.3,
        "reviews_cnt": 1000,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 8,
        "global_rank": 8
      },
      {
        "title": "Capone Foods Pepperino Pizza",
        "price": "$8.95",
        "shop_logo": "https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn%3AANd9GcRDy4dgbuTUCJn7ipuj_V6Dxf3kw1R4G9oH29ofpdUzcdMld70VNTNuTPBV8ifFe8Wo1B-xiXMT8nCw1lqGZJRSEkjm-ONXbVg",
        "shop": "Capone Foods",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 9,
        "global_rank": 9
      },
      {
        "title": "Tombstone Original Crust Pizza",
        "price": "$2.00",
        "shop_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAA...",
        "shop": "Food Rite",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w...",
        "rank": 10,
        "global_rank": 10
      }
    ],
    "pagination": {
      "next_page_start": 10,
      "next_page_link": "https://www.google.com/search?q=pizza&sca_esv=62b03b7345eac9c6&gl=US&hl=en&udm=28&prmd=ivnsmb&ei=HQueaYXmOLqw5OUPqe_XQQ&start=10&sa=N"
    }
  }
  ```
</ResponseExample>
