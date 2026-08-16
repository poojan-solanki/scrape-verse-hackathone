# TOON format

> **Official Source**: [https://docs.brightdata.com/ai/mcp-server/toon](https://docs.brightdata.com/ai/mcp-server/toon)
> **Category**: `ai-and-mcp`

---

Use Token-Oriented Object Notation (TOON) with the Bright Data MCP server (60+ tools) to cut token usage on large web data payloads without losing structure.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## What is TOON?

**Token-Oriented Object Notation (TOON)** is a compact, human-readable encoding of the JSON data model designed specifically for LLM input. It minimizes token usage while maintaining full data fidelity, making it an excellent choice for reducing costs when processing large amounts of structured data.

TOON combines YAML's indentation-based structure with a CSV-style tabular layout for uniform arrays, achieving **30-60% token reduction** compared to standard JSON.

<Info>
  TOON is a **translation layer** - use JSON programmatically in your code, and encode it as TOON when passing data to LLMs.
</Info>

***

## How TOON Works

### The Problem with JSON

Standard JSON repeats field names for every record, which is token-expensive:

```json theme={null}
{
  "products": [
    { "id": 1, "name": "Laptop", "price": 999 },
    { "id": 2, "name": "Mouse", "price": 29 },
    { "id": 3, "name": "Keyboard", "price": 79 }
  ]
}
```

### The TOON Solution

TOON declares fields once and streams data as compact rows:

```yaml theme={null}
products[3]{id,name,price}:
  1,Laptop,999
  2,Mouse,29
  3,Keyboard,79
```

* `[3]` declares the array length (helps detect truncation)
* `{id,name,price}` declares field names once
* Each row contains comma-separated values

***

## Token Savings Example

<CardGroup>
  <Card title="JSON" icon="file-code">
    **235 tokens**

    Verbose with repeated keys
  </Card>

  <Card title="TOON" icon="compress">
    **106 tokens**

    \~55% reduction
  </Card>
</CardGroup>

```json JSON (235 tokens) theme={null}
{
  "context": {
    "task": "Product catalog",
    "category": "Electronics"
  },
  "items": [
    { "id": 1, "name": "Laptop", "price": 999, "stock": 50, "active": true },
    { "id": 2, "name": "Mouse", "price": 29, "stock": 200, "active": true },
    { "id": 3, "name": "Keyboard", "price": 79, "stock": 150, "active": false }
  ]
}
```

```yaml TOON (106 tokens) theme={null}
context:
  task: Product catalog
  category: Electronics
items[3]{id,name,price,stock,active}:
  1,Laptop,999,50,true
  2,Mouse,29,200,true
  3,Keyboard,79,150,false
```

***

## When to Use TOON

<Check>
  **TOON excels with flat, uniform arrays of objects** - data where items share the same structure across all records.
</Check>

### Ideal Use Cases

| Data Type        | Example               | Token Savings |
| ---------------- | --------------------- | ------------- |
| Product listings | E-commerce catalogs   | 40-60%        |
| User records     | Flat profile data     | 35-55%        |
| Log entries      | Structured logs       | 45-60%        |
| Search results   | SERP data (flat)      | 40-55%        |
| Simple tables    | Spreadsheet-like data | 50-65%        |

***

## When NOT to Use TOON

<Warning>
  **TOON performs poorly on deeply nested or non-uniform data structures.** This is particularly relevant for Bright Data MCP responses.
</Warning>

### Avoid TOON When:

<AccordionGroup>
  <Accordion title="Data is deeply nested" icon="sitemap">
    Complex objects with multiple nesting levels don't benefit from TOON's tabular format. JSON-compact often uses fewer tokens for such structures.

    **Example:** LinkedIn profiles with nested experience, education, and skills objects.
  </Accordion>

  <Accordion title="Data is non-uniform" icon="shuffle">
    When array items have different fields or optional properties, TOON's header-based approach breaks down.

    **Example:** Mixed product types with varying attributes.
  </Accordion>

  <Accordion title="Using Bright Data MCP structured endpoints" icon="database">
    Most Bright Data web data endpoints return **richly nested JSON** with hierarchical relationships. TOON won't provide meaningful savings here.

    **Example:** `web_data_amazon_product`, `web_data_linkedin_person_profile`, etc.
  </Accordion>
</AccordionGroup>

***

## TOON with Bright Data MCP

### Understanding the Limitation

Bright Data's MCP server returns structured data from platforms like Amazon, LinkedIn, Instagram, and more. This data is typically **nested and hierarchical**, making it unsuitable for TOON optimization.

<Tabs>
  <Tab title="Remote MCP (SSE)">
    Connect via Server-Sent Events:

    ```http theme={null}
    https://mcp.brightdata.com/mcp?token=YOUR_API_TOKEN
    ```
  </Tab>

  <Tab title="Local MCP (STDIO)">
    Configure in your MCP client:

    ```json theme={null}
    {
      "mcpServers": {
        "Bright Data": {
          "command": "npx",
          "args": ["@brightdata/mcp"],
          "env": {
            "API_TOKEN": "<insert-your-api-token-here>",
            "WEB_UNLOCKER_ZONE": "my_zone_name",
            "BROWSER_ZONE": "my_browser_zone",
            "PRO_MODE": "true",
            "GROUPS": "browser,advanced_scraping",
            "TOOLS": "web_data_linkedin_person_profile,web_data_amazon_product"
          }
        }
      }
    }
    ```
  </Tab>
</Tabs>

### When TOON Can Help

While most Bright Data endpoints return nested data, there are scenarios where TOON can be beneficial:

<Steps>
  <Step title="Flatten the data first">
    Post-process MCP responses to extract flat arrays before encoding to TOON.
  </Step>

  <Step title="Use for batch results">
    When using `scrape_batch` or `search_engine_batch`, the URL/content pairs can be flattened.
  </Step>

  <Step title="Custom extraction">
    Use the `extract` tool with a prompt that requests flat, tabular data.
  </Step>
</Steps>

***

## Quick Start with TOON

### How to install TOON

<CodeGroup>
  ```bash npm theme={null}
  npm install @toon-format/toon
  ```

  ```bash pnpm theme={null}
  pnpm add @toon-format/toon
  ```

  ```bash yarn theme={null}
  yarn add @toon-format/toon
  ```
</CodeGroup>

### How to encode and decode data

```typescript theme={null}
import { encode, decode } from '@toon-format/toon'

// Your flat data (ideal for TOON)
const data = {
  products: [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 79 }
  ]
}

// Encode to TOON for LLM input
const toonData = encode(data)
console.log(toonData)
// Output:
// products[3]{id,name,price}:
//   1,Laptop,999
//   2,Mouse,29
//   3,Keyboard,79

// Decode back to JSON (lossless round-trip)
const jsonData = decode(toonData)
```

### How to use the CLI

```bash theme={null}
# Convert JSON to TOON
npx @toon-format/cli input.json -o output.toon

# Convert TOON back to JSON
npx @toon-format/cli input.toon -o output.json
```

***

## Practical Example: Using TOON with MCP Client

This example demonstrates a complete workflow: connecting to Bright Data's MCP server, fetching data, flattening the nested response, and converting it to TOON format for token-efficient LLM processing.

### Full MCP Client Example

```typescript theme={null}
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js'
import { encode } from '@toon-format/toon'

// Initialize MCP client with Bright Data (ecommerce group for Amazon tools)
const transport = new SSEClientTransport(
  new URL('https://mcp.brightdata.com/sse?token=YOUR_API_TOKEN&groups=ecommerce')
)

const client = new Client({
  name: 'toon-example-client',
  version: '1.0.0'
})

await client.connect(transport)

// Fetch Amazon product data using MCP (with timeout for slow responses)
const result = await client.callTool(
  {
    name: 'web_data_amazon_product',
    arguments: {
      url: 'https://www.amazon.com/dp/B0EXAMPLE123'
    }
  },
  undefined,
  { timeout: 120000 } // 2 minutes timeout
)

// The MCP response is an array with nested product data
const mcpResponse = JSON.parse(result.content[0].text)
console.log('Raw MCP Response:', JSON.stringify(mcpResponse, null, 2))
// [
//   {
//     "title": "Ceramic Vase Set of 3...",
//     "final_price": 29.99,
//     "initial_price": 29.99,
//     "currency": "USD",
//     "rating": 4.5,
//     "reviews_count": 1250,
//     "seller_name": "HomeDecorStore",
//     "brand": "Lyeec",
//     "is_available": true,
//     "asin": "B0G13HFJNB",
//     ...
//   }
// ]

// Flatten the nested data for TOON optimization
// Map actual MCP field names to flat structure
function flattenProduct(product: any) {
  return {
    title: product.title,
    price: product.final_price,
    original_price: product.initial_price,
    currency: product.currency,
    rating: product.rating,
    reviews: product.reviews_count,
    seller: product.seller_name,
    brand: product.brand,
    in_stock: product.is_available
  }
}

// Response is an array - flatten all products
const flatProducts = mcpResponse.map(flattenProduct)

// Encode to TOON - now it's efficient!
const toonOutput = encode({ products: flatProducts })
console.log('TOON Output:', toonOutput)
// products[1]{title,price,original_price,currency,rating,reviews,seller,brand,in_stock}:
//   Ceramic Vase Set of 3...,29.99,29.99,USD,4.5,1250,HomeDecorStore,Lyeec,true

// Use the TOON-encoded data in your LLM prompt
const prompt = `Analyze this product data and suggest pricing strategy:\n\n${toonOutput}`
```

### Batch Processing Multiple Products

For larger datasets, the token savings become even more significant:

```typescript theme={null}
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js'
import { encode } from '@toon-format/toon'

const transport = new SSEClientTransport(
  new URL('https://mcp.brightdata.com/sse?token=YOUR_API_TOKEN&groups=ecommerce')
)

const client = new Client({ name: 'batch-example', version: '1.0.0' })
await client.connect(transport)

// Fetch multiple products
const productUrls = [
  'https://www.amazon.com/dp/B0EXAMPLE1',
  'https://www.amazon.com/dp/B0EXAMPLE2',
  'https://www.amazon.com/dp/B0EXAMPLE3'
]

const results = await Promise.all(
  productUrls.map(async (url) => {
    const result = await client.callTool(
      { name: 'web_data_amazon_product', arguments: { url } },
      undefined,
      { timeout: 120000 }
    )
    // MCP returns an array, get the first item
    return JSON.parse(result.content[0].text)[0]
  })
)

// Flatten all products for TOON using actual MCP field names
const flattenedProducts = results.map(p => ({
  title: p.title,
  price: p.final_price,
  currency: p.currency,
  rating: p.rating,
  reviews: p.reviews_count,
  seller: p.seller_name,
  brand: p.brand,
  in_stock: p.is_available
}))

// Convert to TOON - massive token savings with multiple items!
const toonData = encode({ products: flattenedProducts })
console.log(toonData)
// products[3]{title,price,currency,rating,reviews,seller,brand,in_stock}:
//   Wireless Mouse,29.99,USD,4.5,1250,TechGear,Logitech,true
//   Gaming Keyboard,89.99,USD,4.7,890,KeyMaster,Razer,true
//   USB Hub,19.99,USD,4.2,2100,PortPlus,Anker,false

// Token comparison for 3 products:
// - JSON: ~180 tokens
// - TOON: ~65 tokens (64% savings!)
```

### Creating a Reusable Flattener

For production use, create a reusable utility with the correct MCP field mappings:

```typescript theme={null}
import { encode } from '@toon-format/toon'

// Generic flattener for common MCP data structures
// These map the actual field names returned by Bright Data MCP
const flatteners = {
  amazon_product: (p: any) => ({
    title: p.title,
    price: p.final_price,
    original_price: p.initial_price,
    currency: p.currency,
    rating: p.rating,
    reviews: p.reviews_count,
    seller: p.seller_name,
    brand: p.brand,
    in_stock: p.is_available
  }),

  linkedin_profile: (p: any) => ({
    name: p.full_name,
    headline: p.headline,
    location: p.city,
    country: p.country,
    connections: p.connections_count,
    followers: p.followers_count,
    company: p.current_company_name,
    position: p.position
  }),

  instagram_post: (p: any) => ({
    caption: p.description?.substring(0, 100),
    likes: p.likes,
    comments: p.comments,
    posted: p.upload_date,
    author: p.channel
  })
}

// Helper to process MCP response and convert to TOON
function mcpToToon<T>(
  data: T | T[],
  flattener: (item: T) => Record<string, any>,
  key: string = 'items'
): string {
  const items = Array.isArray(data) ? data : [data]
  const flattened = items.map(flattener)
  return encode({ [key]: flattened })
}

// Usage example
const result = await client.callTool(
  { name: 'web_data_amazon_product', arguments: { url: '...' } },
  undefined,
  { timeout: 120000 }
)
const mcpData = JSON.parse(result.content[0].text)
const toonOutput = mcpToToon(mcpData, flatteners.amazon_product, 'products')
```

***

## Summary

<CardGroup>
  <Card title="Use TOON For" icon="check">
    * Flat, uniform arrays
    * Tabular data structures
    * Large datasets with repeated schemas
    * Post-processed, flattened MCP data
  </Card>

  <Card title="Avoid TOON For" icon="xmark">
    * Deeply nested objects
    * Non-uniform data structures
    * Direct MCP endpoint responses
    * Complex hierarchical data
  </Card>
</CardGroup>

<Info>
  **Bottom Line:** TOON is a powerful tool for token optimization, but it's designed for flat, uniform data. Bright Data MCP responses are typically nested, so apply TOON only after flattening the data to a tabular structure.
</Info>

***

## Where to learn more

<CardGroup>
  <Card title="TOON Specification" icon="book" href="https://github.com/toon-format/spec">
    Official format specification
  </Card>

  <Card title="TypeScript SDK" icon="npm" href="https://www.npmjs.com/package/@toon-format/toon">
    NPM package documentation
  </Card>

  <Card title="TOON Website" icon="globe" href="https://toonformat.dev">
    Interactive playground and docs
  </Card>
</CardGroup>
