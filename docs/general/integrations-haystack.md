# How to set up Bright Data with Haystack

> **Official Source**: [https://docs.brightdata.com/integrations/haystack](https://docs.brightdata.com/integrations/haystack)
> **Category**: `general`

---

Integrate Bright Data with Haystack to enhance RAG pipelines and AI applications with reliable, scalable web data extraction. Covers 45+ datasets.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Integrating Bright Data with Haystack enhances your RAG pipelines and AI applications with reliable, scalable web data extraction for real-world use cases.

The `haystack-brightdata` Python package is the official Haystack integration for Bright Data, including support for:

* **Bright Data Web Scraper** - Extract structured data from 45+ supported websites including Amazon, LinkedIn, Instagram, Facebook, TikTok, YouTube, and more using Bright Data's Dataset API.
* **Bright Data SERP** - Query search engines (Google, Bing, Yahoo) with geo-targeting and language customization for real-time search results.
* **Bright Data Unlocker** - Access geo-restricted and bot-protected websites, bypass CAPTCHAs and anti-bot measures to extract content in multiple formats.

## How to Integrate Bright Data With Haystack

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Integration">
    Install the Bright Data integration package for Haystack by running the following command:

    ```bash theme={null}
    pip install haystack-brightdata
    ```
  </Step>

  <Step title="Set the environment variable">
    Set your Bright Data API key as an environment variable:

    ```python theme={null}
    import os
    os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"
    ```
  </Step>

  <Step title="Select your preferred Bright Data component">
    The Bright Data + Haystack integration currently supports:

    <Tabs>
      <Tab title="BrightDataWebScraper">
        <Tip>
          **API reference**: [Scrapers Documentation](/datasets/scrapers/scrapers-library/overview)
        </Tip>

        Extract structured data from 45+ supported websites, including e-commerce, social media, and business intelligence platforms.

        <CodeGroup>
          ```python Basic Usage theme={null}
          from haystack_brightdata import BrightDataWebScraper
          import os

          # Set your API key
          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          # Initialize the scraper
          scraper = BrightDataWebScraper()

          # Extract Amazon product data
          result = scraper.run(
              dataset="amazon_product",
              url="https://www.amazon.com/dp/B08N5WRWNW"
          )
          print(result["data"])
          ```

          ```python Advanced Usage - LinkedIn Profile theme={null}
          from haystack_brightdata import BrightDataWebScraper
          import os

          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          scraper = BrightDataWebScraper()

          # Extract LinkedIn profile data
          result = scraper.run(
              dataset="linkedin_person_profile",
              url="https://www.linkedin.com/in/example-profile/"
          )
          print(result["data"])

          # Extract Instagram profile data
          result = scraper.run(
              dataset="instagram_profiles",
              url="https://www.instagram.com/username/"
          )
          print(result["data"])
          ```

          ```python List Supported Datasets theme={null}
          from haystack_brightdata import BrightDataWebScraper

          # Get all supported datasets
          datasets = BrightDataWebScraper.get_supported_datasets()
          for dataset in datasets:
              print(f"{dataset['id']}: {dataset['description']}")

          # Get info about a specific dataset
          info = BrightDataWebScraper.get_dataset_info("amazon_product")
          print(f"Description: {info['description']}")
          print(f"Required inputs: {info['inputs']}")
          ```
        </CodeGroup>
      </Tab>

      <Tab title="BrightDataSERP">
        <Tip>
          **API reference**: [SERP API Documentation](/scraping-automation/serp-api/introduction)
        </Tip>

        Collect search engine results with geo-targeting and language customization.

        <CodeGroup>
          ```python Basic Usage theme={null}
          from haystack_brightdata import BrightDataSERP
          import os

          # Set your API key
          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          # Initialize SERP component
          serp = BrightDataSERP(
              default_search_engine="google",
              default_country="us",
              default_language="en"
          )

          # Execute a search query
          result = serp.run(
              query="machine learning tutorials",
              num_results=20,
              search_type="web"
          )
          print(result)
          ```

          ```python Advanced Usage with Geo-targeting theme={null}
          from haystack_brightdata import BrightDataSERP
          import os

          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          serp = BrightDataSERP()

          # Search from a different country with different language
          result = serp.run(
              query="inteligencia artificial",
              country="es",
              language="es",
              num_results=10
          )
          print(result)
          ```
        </CodeGroup>
      </Tab>

      <Tab title="BrightDataUnlocker">
        <Tip>
          **API reference**: [Web Unlocker Documentation](/scraping-automation/web-unlocker/introduction)
        </Tip>

        Access any public website, even if it's bot-protected or geo-restricted.

        <CodeGroup>
          ```python Basic Usage theme={null}
          from haystack_brightdata import BrightDataUnlocker
          import os

          # Set your API key
          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          # Initialize Web Unlocker
          unlocker = BrightDataUnlocker(default_output_format="markdown")

          # Access a website and get content as markdown
          result = unlocker.run(
              url="https://example.com/restricted-content",
              output_format="markdown"
          )
          print(result["content"])
          ```

          ```python Advanced Usage with Geo-targeting theme={null}
          from haystack_brightdata import BrightDataUnlocker
          import os

          os.environ["BRIGHT_DATA_API_KEY"] = "your-api-key"

          unlocker = BrightDataUnlocker()

          # Access from a specific country
          result = unlocker.run(
              url="https://example.com",
              country="gb",
              output_format="html"
          )
          print(result)

          # Get a screenshot
          result = unlocker.run(
              url="https://example.com",
              output_format="screenshot"
          )
          # result contains base64-encoded screenshot
          ```
        </CodeGroup>
      </Tab>
    </Tabs>
  </Step>
</Steps>

## RAG Pipeline Examples

### Product Data RAG Pipeline

Build a Retrieval-Augmented Generation (RAG) pipeline using Bright Data to extract product data from Amazon and answer questions about products:

```python theme={null}
import os
from haystack import Pipeline, Document
from haystack.components.builders import ChatPromptBuilder
from haystack.components.generators.chat import OpenAIChatGenerator
from haystack.components.embedders import OpenAIDocumentEmbedder, OpenAITextEmbedder
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever
from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack.dataclasses import ChatMessage
from haystack_brightdata import BrightDataWebScraper
import json

# Set API keys
os.environ["BRIGHT_DATA_API_KEY"] = "your-brightdata-api-key"
os.environ["OPENAI_API_KEY"] = "your-openai-api-key"

# Initialize components
scraper = BrightDataWebScraper()
document_store = InMemoryDocumentStore()
docs_embedder = OpenAIDocumentEmbedder()
text_embedder = OpenAITextEmbedder()
retriever = InMemoryEmbeddingRetriever(document_store)
generator = OpenAIChatGenerator()

# Scrape product data from multiple Amazon products
product_urls = [
    "https://www.amazon.com/dp/B0DRWBJDLJ",
    "https://www.amazon.com/dp/B08B8M5JGN",
    "https://www.amazon.com/dp/B09WTTWH1R",
]

documents = []
for url in product_urls:
    result = scraper.run(dataset="amazon_product", url=url)

    # Parse the response
    if isinstance(result["data"], str):
        product_data = json.loads(result["data"])
    else:
        product_data = result["data"]

    if not isinstance(product_data, list):
        product_data = [product_data]

    for product in product_data:
        content_parts = [
            f"Product: {product.get('title', 'N/A')}",
            f"Brand: {product.get('brand', 'N/A')}",
            f"Price: ${product.get('final_price', 'N/A')} {product.get('currency', '')}",
            f"Rating: {product.get('rating', 0)}/5",
            f"Reviews Count: {product.get('reviews_count', 0)}",
        ]

        if product.get('description'):
            content_parts.append(f"Description: {product.get('description')}")

        if product.get('features'):
            features_text = '\n  - '.join(product.get('features', []))
            content_parts.append(f"Features:\n  - {features_text}")

        content = '\n'.join(content_parts)

        documents.append(Document(
            content=content,
            meta={
                "url": product.get('url', url),
                "title": product.get('title', ''),
                "price": product.get('final_price', 0),
                "rating": product.get('rating', 0),
            }
        ))

# Embed and store documents
embeddings = docs_embedder.run(documents)
document_store.write_documents(embeddings["documents"])

# Create RAG pipeline with ChatPromptBuilder
messages = [
    ChatMessage.from_system("You are a helpful shopping assistant."),
    ChatMessage.from_user("""
Context:
{% for document in documents %}
    {{ document.content }}
{% endfor %}

Question: {{question}}
""")
]

prompt_builder = ChatPromptBuilder(template=messages)

# Build and connect pipeline
pipe = Pipeline()
pipe.add_component("embedder", text_embedder)
pipe.add_component("retriever", retriever)
pipe.add_component("prompt_builder", prompt_builder)
pipe.add_component("llm", generator)

pipe.connect("embedder.embedding", "retriever.query_embedding")
pipe.connect("retriever", "prompt_builder.documents")
pipe.connect("prompt_builder", "llm")

# Ask questions about the products
question = "Which product has the best rating?"
response = pipe.run({
    "embedder": {"text": question},
    "prompt_builder": {"question": question}
})

print(f"Answer: {response['llm']['replies'][0].text}")
```

### SERP + Web Content RAG Pipeline

Use SERP API to find relevant web pages, then use Web Unlocker to extract content for a RAG pipeline:

```python theme={null}
import os
from haystack import Pipeline, Document
from haystack.components.builders import ChatPromptBuilder
from haystack.components.generators.chat import OpenAIChatGenerator
from haystack.components.embedders import OpenAIDocumentEmbedder, OpenAITextEmbedder
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever
from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack.dataclasses import ChatMessage
from haystack_brightdata import BrightDataSERP, BrightDataUnlocker
import json

# Set API keys
os.environ["BRIGHT_DATA_API_KEY"] = "your-brightdata-api-key"
os.environ["OPENAI_API_KEY"] = "your-openai-api-key"

# Initialize components
serp = BrightDataSERP()
unlocker = BrightDataUnlocker(default_output_format="markdown", zone="unblocker")
document_store = InMemoryDocumentStore()
docs_embedder = OpenAIDocumentEmbedder()
text_embedder = OpenAITextEmbedder()
retriever = InMemoryEmbeddingRetriever(document_store)
generator = OpenAIChatGenerator(model="gpt-4")

# Search for information
search_query = "best practices for machine learning in production"
search_result = serp.run(query=search_query, num_results=5)
search_data = json.loads(search_result["results"])

# Extract URLs from search results
urls = []
for result in search_data.get("organic", [])[:5]:
    url = result.get("url") or result.get("link")
    if url:
        urls.append(url)

# Fetch content from each URL
documents = []
for url in urls:
    try:
        result = unlocker.run(url=url, output_format="markdown")
        content = result["content"]
        documents.append(Document(
            content=content,
            meta={"url": url}
        ))
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")

# Embed and store documents
embeddings = docs_embedder.run(documents)
document_store.write_documents(embeddings["documents"])

# Create RAG pipeline
messages = [
    ChatMessage.from_system("You are a knowledgeable AI assistant."),
    ChatMessage.from_user("""
Context from web sources:
{% for document in documents %}
    Source: {{ document.meta.url }}
    {{ document.content }}
{% endfor %}

Question: {{question}}
""")
]

prompt_builder = ChatPromptBuilder(template=messages)

pipe = Pipeline()
pipe.add_component("embedder", text_embedder)
pipe.add_component("retriever", retriever)
pipe.add_component("prompt_builder", prompt_builder)
pipe.add_component("llm", generator)

pipe.connect("embedder.embedding", "retriever.query_embedding")
pipe.connect("retriever", "prompt_builder.documents")
pipe.connect("prompt_builder", "llm")

# Ask questions
question = "What are the main challenges of deploying ML models in production?"
response = pipe.run({
    "embedder": {"text": question},
    "prompt_builder": {"question": question}
})

print(f"Answer: {response['llm']['replies'][0].text}")
```

## Which datasets are supported

The `BrightDataWebScraper` component supports 45+ datasets across multiple categories:

| Category                  | Datasets                                                                                                                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **E-commerce**            | amazon\_product, amazon\_product\_reviews, amazon\_product\_search, walmart\_product, walmart\_seller, ebay\_product, homedepot\_products, zara\_products, etsy\_products, bestbuy\_products |
| **LinkedIn**              | linkedin\_person\_profile, linkedin\_company\_profile, linkedin\_job\_listings, linkedin\_posts, linkedin\_people\_search                                                                    |
| **Instagram**             | instagram\_profiles, instagram\_posts, instagram\_reels, instagram\_comments                                                                                                                 |
| **Facebook**              | facebook\_posts, facebook\_marketplace\_listings, facebook\_company\_reviews, facebook\_events                                                                                               |
| **TikTok**                | tiktok\_profiles, tiktok\_posts, tiktok\_shop, tiktok\_comments                                                                                                                              |
| **YouTube**               | youtube\_profiles, youtube\_videos, youtube\_comments                                                                                                                                        |
| **Search & Commerce**     | google\_maps\_reviews, google\_shopping, google\_play\_store, apple\_app\_store, zillow\_properties\_listing, booking\_hotel\_listings                                                       |
| **Business Intelligence** | crunchbase\_company, zoominfo\_company\_profile                                                                                                                                              |
| **Other**                 | github\_repository\_file, yahoo\_finance\_business, x\_posts, reddit\_posts                                                                                                                  |

<Tip>
  For detailed information about each dataset and its required parameters:

  ```python theme={null}
  from haystack_brightdata import BrightDataWebScraper

  # List all datasets
  datasets = BrightDataWebScraper.get_supported_datasets()
  for dataset in datasets:
      print(f"{dataset['id']}: {dataset['description']}")
  ```
</Tip>

## Use Cases

Bright Data's Haystack integration enables powerful use cases:

* **E-commerce Intelligence**: Price monitoring, product data extraction, and competitive analysis
* **Social Media Analytics**: Content monitoring and engagement analysis across platforms
* **Business Intelligence**: Company research and competitive landscape analysis
* **Search Analysis**: SEO/SEM research with geo-targeted search results
* **Content Aggregation**: Building RAG pipelines with real-time web data
* **Market Research**: Accessing geo-restricted content for global research
