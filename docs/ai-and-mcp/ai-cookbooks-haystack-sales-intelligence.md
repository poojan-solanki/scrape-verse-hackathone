# Sales intelligence with Haystack

> **Official Source**: [https://docs.brightdata.com/ai/cookbooks/haystack-sales-intelligence](https://docs.brightdata.com/ai/cookbooks/haystack-sales-intelligence)
> **Category**: `ai-and-mcp`

---

Build an AI sales research assistant in 5 stages with Haystack, MongoDB Atlas and Bright Data. Pulls live data from LinkedIn, Crunchbase and news for RAG Q&A.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Build an AI-powered sales research assistant that extracts live data from LinkedIn, Crunchbase, and news sources, stores it in MongoDB Atlas for semantic search, and answers complex sales questions using [Haystack](https://haystack.deepset.ai/) and [Bright Data](https://brightdata.com/).

<Info>
  This cookbook walks you through building a complete lead intelligence pipeline - from scraping to RAG-powered Q\&A.
</Info>

## What You'll Build

An AI sales research assistant that:

1. **Finds companies** matching your Ideal Customer Profile (ICP) criteria
2. **Identifies decision makers** and researches their backgrounds
3. **Extracts pain points** from job postings, news articles, and company data
4. **Generates personalized outreach** angles based on comprehensive company intelligence

**The Tech Stack:**

* **Bright Data**: Web scraping for 45+ data sources (LinkedIn, Crunchbase, news, job boards)
* **MongoDB Atlas**: Vector database for semantic search + structured metadata filtering
* **Haystack**: Open-source LLM framework for building RAG pipelines
* **Google Gemini 2.5**: Generate actionable sales intelligence from raw data

## How the architecture works

<img alt="Haystack Sales Intelligence Architecture" />

### How each component fits in

**1. Bright Data Layer** (Data Collection)

* **Scrapers**: Extracts structured data from 45+ sources
  * `linkedin_company_profile`: Company size, industry, description, location
  * `linkedin_person_profile`: Decision maker titles, backgrounds, experience
  * `crunchbase_company`: Funding rounds, investors, employee count
* **SERP API**: Real-time search results from Google/Bing
  * Company news and press releases
  * Job postings (signal for pain points)
  * Industry trends and mentions

**2. MongoDB Atlas** (Storage & Retrieval)

* **Vector Search**: Semantic similarity matching on embedded company/person descriptions
* **Metadata Filtering**: Hybrid search combining vectors with structured filters (industry, funding stage, location, company size, job titles)
* **Document Storage**: Stores raw scraped data + embeddings + metadata

**3. Haystack Pipeline** (Orchestration)

* **Embedder**: Converts queries and documents to vector representations using Google's text-embedding-004
* **Retriever**: Finds most relevant leads from MongoDB based on semantic + metadata match
* **Prompt Builder**: Constructs context-rich prompts with retrieved lead data
* **LLM Generator**: Gemini 2.5 Flash synthesizes insights and generates actionable intelligence

## Prerequisites

* A [Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs) with API key from the [dashboard](https://brightdata.com/cp/setting/users)
* A [MongoDB Atlas cluster](https://www.mongodb.com/docs/atlas/getting-started/) (M0 free tier is sufficient for testing)
* A [Google API Key](https://aistudio.google.com/) for Gemini access
* Python 3.10+

***

## Step 1: Install Dependencies

```bash theme={null}
pip install haystack-ai haystack-brightdata mongodb-atlas-haystack google-genai-haystack dotenv
```

***

## Step 2: Set Environment Variables

Get your API keys:

* [Bright Data API Key](/api-reference/authentication#how-do-i-generate-a-new-api-key) - Generate from your dashboard
* [MongoDB Connection String](https://www.mongodb.com/docs/atlas/getting-started/) - From your Atlas cluster
* [Google API Key](https://aistudio.google.com/) - For Gemini access

```python theme={null}
import os
from dotenv import load_dotenv

load_dotenv(override=True)

if not os.environ.get("GOOGLE_API_KEY") and os.environ.get("GOOGLE_AI_API_KEY"):
    os.environ["GOOGLE_API_KEY"] = os.environ["GOOGLE_AI_API_KEY"]

# Verify all required keys are loaded
required_keys = ["BRIGHT_DATA_API_KEY", "MONGO_CONNECTION_STRING", "GOOGLE_API_KEY"]
missing_keys = [key for key in required_keys if not os.environ.get(key)]

if missing_keys:
    raise ValueError(f"Please add {', '.join(missing_keys)} to your .env file")
else:
    print("All environment variables loaded successfully")
```

### Bright Data Datasets Reference

* [Crunchbase Company](https://brightdata.com/products/datasets/crunchbase)
* [LinkedIn Company Profile](https://brightdata.com/products/datasets/linkedin/company)
* [LinkedIn Person Profile](https://brightdata.com/products/datasets/linkedin/profiles)
* [Google SERP API](https://brightdata.com/products/serp-api/google-search)

***

## Step 3: Initialize Components

### List Available Datasets

```python theme={null}
from haystack_brightdata import BrightDataWebScraper

datasets = BrightDataWebScraper.get_supported_datasets()

print(f"Total available datasets: {len(datasets)}\n")
print("Sales research relevant datasets:")
print("-" * 50)

relevant_keywords = ["linkedin", "crunchbase", "company", "profile"]
for dataset in datasets:
    if any(keyword in dataset['id'].lower() for keyword in relevant_keywords):
        print(f"  {dataset['id']}")
        print(f"    {dataset['description']}\n")
```

### MongoDB Atlas Setup

MongoDB Atlas serves as the vector database for storing embedded lead data and enabling semantic search.

**1. Create a MongoDB Atlas Cluster**

Follow the [Get Started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/) guide to:

* Create a free cluster (M0 tier is sufficient for testing)
* Set up database access credentials
* Configure network access (allow your IP or use 0.0.0.0/0 for testing)
* Get your connection string

**2. Create Vector Search Index**

1. Go to your cluster in the Atlas UI

2. Click the **"Search"** tab → "Create Search Index"

3. Select "Atlas Vector Search" → "JSON Editor"

4. Configure:
   * Index name: `lead_vector_index`
   * Database: `sales_intelligence`
   * Collection: `leads`

5. Paste this configuration:

```json theme={null}
{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 768,
      "similarity": "cosine"
    }
  ]
}
```

6. Wait for the index status to change from "Building" to "Active"

### Initialize the Document Store

```python theme={null}
from haystack_integrations.document_stores.mongodb_atlas import MongoDBAtlasDocumentStore

# Initialize MongoDB Atlas Document Store
# Note: It automatically reads from MONGO_CONNECTION_STRING environment variable
document_store = MongoDBAtlasDocumentStore(
    database_name="sales_intelligence",
    collection_name="leads",
    vector_search_index="lead_vector_index",
    full_text_search_index="lead_fulltext_index"
)

print("MongoDB Atlas DocumentStore initialized")
print(f"  Database: sales_intelligence")
print(f"  Collection: leads")
print(f"  Vector Search Index: lead_vector_index")
```

### Initialize the Retriever and Scraper

```python theme={null}
from haystack_integrations.components.retrievers.mongodb_atlas import MongoDBAtlasEmbeddingRetriever

retriever = MongoDBAtlasEmbeddingRetriever(document_store=document_store)
```

```python theme={null}
from haystack_brightdata import BrightDataWebScraper

# Initialize the Web Scraper
# Note: Automatically uses BRIGHT_DATA_API_KEY from environment
scraper = BrightDataWebScraper()
```

***

## Step 4: Scrape Data from Multiple Sources

### Example 1: Scraping Crunchbase Company Data

Extract company intelligence from Crunchbase - funding information, investors, employee count, and more.

```python theme={null}
import json

company_url = "https://www.crunchbase.com/organization/openai"

def coalesce(data, *keys, default="N/A"):
    for key in keys:
        value = data.get(key)
        if value not in (None, "", [], {}):
            return value
    return default

def format_industries(industries):
    if not industries:
        return "N/A"
    if isinstance(industries, list):
        values = []
        for item in industries:
            if isinstance(item, dict):
                value = item.get("value") or item.get("name") or item.get("id")
                if value:
                    values.append(value)
            else:
                values.append(str(item))
        return ", ".join(values) if values else "N/A"
    return industries

def parse_company(result):
    raw = result.get("data", result)
    if isinstance(raw, str):
        raw = json.loads(raw)
    if isinstance(raw, list):
        return raw[0] if raw else {}
    if isinstance(raw, dict):
        return raw
    return {}

result = scraper.run(
    dataset="crunchbase_company",
    url=company_url
)

company_data = parse_company(result)
industries = format_industries(company_data.get("industries"))

print(f"Company: {coalesce(company_data, 'name', 'legal_name')}")
print(f"Overview: {coalesce(company_data, 'about', 'company_overview')}")
print(f"Industries: {industries}")
print(f"Operating Status: {coalesce(company_data, 'operating_status')}")
print(f"Website: {coalesce(company_data, 'website', 'url')}")
print(f"Employees: {coalesce(company_data, 'num_employees', 'number_of_employee_profiles')}")
```

**Expected output:**

```text theme={null}
Company: OpenAI
Overview: OpenAI is an AI research and deployment company that develops advanced AI models, including ChatGPT.
Industries: Agentic AI, Artificial Intelligence (AI), Generative AI, Machine Learning, SaaS
Operating Status: active
Website: https://www.openai.com
Employees: 1001-5000
```

### Example 2: Scraping LinkedIn Company Data

Extract broader company information from LinkedIn.

```python theme={null}
import json

linkedin_url = "https://www.linkedin.com/company/openai/"

result = scraper.run(
    dataset="linkedin_company_profile",
    url=linkedin_url
)

if isinstance(result["data"], str):
    company_data = json.loads(result["data"])
else:
    company_data = result["data"]

if isinstance(company_data, list):
    company_data = company_data[0] if company_data else {}

print(f"Company: {company_data.get('name', 'N/A')}")
print(f"Description: {company_data.get('description', 'N/A')[:200]}...")
print(f"Industry: {company_data.get('industry', 'N/A')}")
print(f"Company Size: {company_data.get('company_size', 'N/A')}")
print(f"Headquarters: {company_data.get('headquarters', 'N/A')}")
print(f"Website: {company_data.get('website', 'N/A')}")
```

### Example 3: Scraping LinkedIn Person Profile

Extract decision maker profiles from LinkedIn - key contacts, their backgrounds, and experience.

```python theme={null}
import json

person_url = "https://www.linkedin.com/in/satyanadella/"

result = scraper.run(
    dataset="linkedin_person_profile",
    url=person_url
)

if isinstance(result["data"], str):
    person_data = json.loads(result["data"])
else:
    person_data = result["data"]

if isinstance(person_data, list):
    person_data = person_data[0] if person_data else {}

print(f"Name: {person_data.get('name', 'N/A')}")
print(f"Position: {person_data.get('position', 'N/A')}")
print(f"Location: {person_data.get('city', 'N/A')}, {person_data.get('country_code', 'N/A')}")

current_company = person_data.get('current_company', {})
if current_company:
    print(f"Current Company: {current_company.get('name', 'N/A')}")

print(f"Followers: {person_data.get('followers', 'N/A')}")
print(f"Connections: {person_data.get('connections', 'N/A')}")

about = person_data.get('about')
if about:
    print(f"\nAbout: {about[:200]}...")

experience = person_data.get('experience', [])
if experience:
    print(f"\nExperience ({len(experience)} roles):")
    for i, exp in enumerate(experience[:3]):
        company = exp.get('company', 'N/A')
        title = exp.get('title', 'N/A')
        duration = exp.get('duration', 'N/A')
        print(f"  {i+1}. {title} at {company} ({duration})")
```

**Expected output:**

```text theme={null}
Name: Satya Nadella
Position: Chairman and CEO at Microsoft
Location: Redmond, Washington, United States, US
Current Company: Microsoft
Followers: 11816477
Connections: 500

Experience (5 roles):
  1. Chairman and CEO at Microsoft (N/A)
  2. Member Board Of Trustees at University of Chicago (N/A)
  3. Board Member at Starbucks (N/A)
```

***

## Step 5: SERP API for Market Signals

Bright Data's SERP API lets you gather market signals through search results - hiring signals, news, and pain points.

### Example SERP Queries for Sales Research

```python theme={null}
# Hiring signals
query = 'site:linkedin.com/jobs "Company Name" engineering'

# Funding news
query = '"Company Name" funding Series A announcement'

# Recent news
query = '"Company Name" news (2024 OR 2025)'
```

### Search for Company News

```python theme={null}
import json
from haystack_brightdata import BrightDataSERP

serp = BrightDataSERP()

company_name = "OpenAI"
search_query = f'"{company_name}" news funding OR announcement OR launch 2025 OR 2026'

result = serp.run(
    query=search_query,
    num_results=10
)

if isinstance(result["results"], str):
    serp_data = json.loads(result["results"])
else:
    serp_data = result["results"]

organic_results = serp_data.get("organic", [])
if not organic_results and "results" in serp_data:
    organic_results = serp_data.get("results", [])

print(f"Found {len(organic_results)} results\n")

for i, item in enumerate(organic_results[:5], 1):
    title = item.get("title", "N/A")
    link = item.get("link", item.get("url", "N/A"))
    snippet = item.get("snippet", item.get("description", "N/A"))

    print(f"{i}. {title}")
    print(f"   URL: {link}")
    print(f"   Snippet: {snippet[:150]}...")
    print()
```

***

## Step 6: Data Processing & Indexing Pipeline

Process and index scraped data into MongoDB Atlas for semantic search.

```text theme={null}
Raw Scraped Data → Document Creation → Embedding Generation → MongoDB Storage
     (JSON)            (Haystack)         (Gemini 768d)         (Vector DB)
```

### Helper Functions: Transform Scraped Data into Haystack Documents

```python theme={null}
import json
from datetime import datetime
from haystack import Document

def create_company_documents(scraper_result, source_url, dataset_type):
    """
    Transform company data from Crunchbase or LinkedIn into Haystack Documents.
    """
    if isinstance(scraper_result["data"], str):
        data = json.loads(scraper_result["data"])
    else:
        data = scraper_result["data"]

    if not isinstance(data, list):
        data = [data]

    documents = []
    scraped_date = datetime.now().strftime("%Y-%m-%d")

    for item in data:
        if dataset_type == "crunchbase_company":
            content = f"""Company: {item.get('name', 'N/A')}
Overview: {item.get('about', 'N/A')}
Industries: {item.get('industries', 'N/A')}
Operating Status: {item.get('operating_status', 'N/A')}
Location: {item.get('headquarters', 'N/A')}
Founded: {item.get('founded_year') or item.get('founded_date', 'N/A')}
Employees: {item.get('num_employees', 'N/A')}
Website: {item.get('website', 'N/A')}"""

        elif dataset_type == "linkedin_company_profile":
            content = f"""Company: {item.get('name', 'N/A')}
About: {item.get('about') or item.get('description', 'N/A')}
Industries: {item.get('industries', 'N/A')}
Company Size: {item.get('company_size', 'N/A')}
Headquarters: {item.get('headquarters', 'N/A')}
Founded: {item.get('founded', 'N/A')}
Website: {item.get('website', 'N/A')}
Followers: {item.get('followers', 'N/A')}
Employees on LinkedIn: {item.get('employees_in_linkedin', 'N/A')}"""

        else:
            content = f"Company: {item.get('name', 'N/A')}"

        industries = item.get('industries', item.get('industry', ''))
        if isinstance(industries, list):
            industries = ', '.join([
                ind.get('value', ind) if isinstance(ind, dict) else str(ind)
                for ind in industries
            ])

        documents.append(Document(
            content=content,
            meta={
                "source_url": source_url,
                "dataset_type": dataset_type,
                "company_name": item.get('name', ''),
                "industry": industries,
                "location": item.get('headquarters') or item.get('location', ''),
                "scraped_date": scraped_date
            }
        ))

    return documents
```

```python theme={null}
def create_person_documents(scraper_result, source_url):
    """
    Transform LinkedIn person profile data into Haystack Documents.
    """
    if isinstance(scraper_result["data"], str):
        data = json.loads(scraper_result["data"])
    else:
        data = scraper_result["data"]

    if not isinstance(data, list):
        data = [data]

    documents = []
    scraped_date = datetime.now().strftime("%Y-%m-%d")

    for person in data:
        experience = person.get('experience', [])
        experience_summary = []
        for exp in experience[:3]:
            company = exp.get('company', 'N/A')
            title = exp.get('title', 'N/A')
            duration = exp.get('duration', 'N/A')
            experience_summary.append(f"{title} at {company} ({duration})")
        experience_text = '\n'.join(experience_summary) if experience_summary else 'N/A'

        education = person.get('education', [])
        education_summary = []
        for edu in education[:2]:
            title = edu.get('title', 'N/A')
            years = f"{edu.get('start_year', '')}-{edu.get('end_year', '')}"
            education_summary.append(f"{title} ({years})")
        education_text = '\n'.join(education_summary) if education_summary else 'N/A'

        current_company = person.get('current_company', {})
        current_company_name = current_company.get('name', 'N/A') if current_company else 'N/A'

        content = f"""Name: {person.get('name', 'N/A')}
Position: {person.get('position', 'N/A')}
Current Company: {current_company_name}
Location: {person.get('city', 'N/A')}, {person.get('country_code', 'N/A')}
About: {person.get('about', 'N/A')}
Followers: {person.get('followers', 'N/A')}
Connections: {person.get('connections', 'N/A')}

Recent Experience:
{experience_text}

Education:
{education_text}"""

        documents.append(Document(
            content=content,
            meta={
                "source_url": source_url,
                "dataset_type": "linkedin_person_profile",
                "person_name": person.get('name', ''),
                "person_title": person.get('position', ''),
                "company": current_company_name,
                "location": f"{person.get('city', '')}, {person.get('country_code', '')}",
                "scraped_date": scraped_date
            }
        ))

    return documents
```

### Build the Indexing Pipeline

Create a Haystack pipeline that automatically generates embeddings and writes to MongoDB Atlas.

```python theme={null}
from haystack import Pipeline
from haystack.components.writers import DocumentWriter
from haystack_integrations.components.embedders.google_genai import GoogleGenAIDocumentEmbedder

indexing_pipeline = Pipeline()

indexing_pipeline.add_component("embedder", GoogleGenAIDocumentEmbedder(model="text-embedding-004"))
indexing_pipeline.add_component("writer", DocumentWriter(document_store=document_store))

indexing_pipeline.connect("embedder.documents", "writer.documents")

print("Indexing pipeline created")
print("  Documents → Embedder (Gemini text-embedding-004) → Writer (MongoDB)")
```

### Index Sample Companies

Test the complete indexing flow by scraping a company and indexing it into MongoDB Atlas.

```python theme={null}
from pymongo import MongoClient

client = MongoClient(os.environ.get("MONGO_CONNECTION_STRING"))
db = client[document_store.database_name]

if document_store.collection_name not in db.list_collection_names():
    db.create_collection(document_store.collection_name)
    print(f"Created collection '{document_store.collection_name}'")
else:
    print(f"Collection '{document_store.collection_name}' already exists")

collection = db[document_store.collection_name]
doc_count = collection.count_documents({})
print(f"  Current document count: {doc_count}")
```

```python theme={null}
# Scrape and index a company from Crunchbase
company_url = "https://www.crunchbase.com/organization/openai"

# Step 1: Scrape the company
scraper_result = scraper.run(
    dataset="crunchbase_company",
    url=company_url
)

# Step 2: Transform into Haystack Documents
documents = create_company_documents(
    scraper_result=scraper_result,
    source_url=company_url,
    dataset_type="crunchbase_company"
)

print(f"Created {len(documents)} document(s)")
print(f"Content (first 200 chars): {documents[0].content[:200]}...")
print(f"Metadata: {documents[0].meta}")

# Step 3: Generate embeddings and index into MongoDB
result = indexing_pipeline.run({"embedder": {"documents": documents}})

print(f"Indexed {result['writer']['documents_written']} document(s) into MongoDB")
```

***

## Step 7: RAG Pipeline for Sales Intelligence

RAG combines **retrieval** (finding relevant documents) with **generation** (LLM synthesis) to answer questions based on your indexed data.

```text theme={null}
User Question → Text Embedder → Retriever → Prompt Builder → Generator → Answer
```

### Which components to use

* [GoogleGenAITextEmbedder](https://docs.haystack.deepset.ai/docs/googlegenaitextembedder)
* [MongoDBAtlasEmbeddingRetriever](https://docs.haystack.deepset.ai/docs/mongodbatlasembeddingretriever)
* [ChatPromptBuilder](https://docs.haystack.deepset.ai/docs/chatpromptbuilder)
* [GoogleGenAIChatGenerator](https://docs.haystack.deepset.ai/docs/googlegenaichatgenerator)

### Build the RAG Pipeline

```python theme={null}
from haystack import Pipeline
from haystack.components.builders import ChatPromptBuilder
from haystack.dataclasses import ChatMessage
from haystack_integrations.components.embedders.google_genai import GoogleGenAITextEmbedder
from haystack_integrations.components.generators.google_genai import GoogleGenAIChatGenerator

system_message = ChatMessage.from_system("""
You are a sales intelligence assistant. Your role is to analyze company and people data to provide actionable sales intelligence.

When answering queries:
- Cite specific company names and details from the data
- Provide insights relevant for sales outreach
- Highlight key information like funding, company size, location, recent news
- Suggest talking points for personalized outreach
""")

user_template = """
Based on the following company/person data, answer the user's question.

Context:
{% for document in documents %}
{{ document.content }}
---
{% endfor %}

Question: {{ question }}

Provide a detailed, actionable answer based on the retrieved data.
"""

user_message = ChatMessage.from_user(user_template)

rag_pipeline = Pipeline()

rag_pipeline.add_component("text_embedder", GoogleGenAITextEmbedder(model="text-embedding-004"))
rag_pipeline.add_component("retriever", MongoDBAtlasEmbeddingRetriever(document_store=document_store, top_k=5))
rag_pipeline.add_component("prompt_builder", ChatPromptBuilder(template=[system_message, user_message]))
rag_pipeline.add_component("generator", GoogleGenAIChatGenerator(model="gemini-2.5-flash"))

rag_pipeline.connect("text_embedder.embedding", "retriever.query_embedding")
rag_pipeline.connect("retriever.documents", "prompt_builder.documents")
rag_pipeline.connect("prompt_builder.prompt", "generator.messages")

print("RAG pipeline created")
print("  Question → Text Embedder → Retriever → Prompt Builder → Generator → Answer")
```

***

## Step 8: Query the Sales Research Assistant

```python theme={null}
question = "What can you tell me about OpenAI? Include details about their industry, products, and any relevant information for sales outreach."

result = rag_pipeline.run(
    data={
        "text_embedder": {"text": question},
        "prompt_builder": {"question": question}
    },
    include_outputs_from={"retriever"}
)

answer = result["generator"]["replies"][0].text
print(answer)

# Show retrieved documents
if "retriever" in result:
    retrieved_docs = result["retriever"]["documents"]
    print(f"\nRetrieved {len(retrieved_docs)} relevant documents from MongoDB")

    for i, doc in enumerate(retrieved_docs, 1):
        print(f"\nDocument {i}:")
        print(f"  Company: {doc.meta.get('company_name', 'N/A')}")
        print(f"  Source: {doc.meta.get('dataset_type', 'N/A')}")
        print(f"  Location: {doc.meta.get('location', 'N/A')}")
        print(f"  Industry: {doc.meta.get('industry', 'N/A')}")
        print(f"  Content: {doc.content[:300]}...")
```

***

## Data Model Design

The lead intelligence database uses a flexible schema that accommodates data from multiple sources while enabling powerful hybrid search capabilities.

This structure enables three search modes:

1. **Semantic Search**: Find similar companies/people based on meaning
   * Query: "AI startups focused on enterprise automation"
   * Matches: Companies with similar descriptions, even if wording differs

2. **Metadata Filtering**: Exact match on structured fields
   * Filter: `funding_stage = "Series A" AND location = "New York, NY"`
   * Returns: Only companies meeting exact criteria

3. **Hybrid Search**: Combine both approaches
   * Semantic query: "Companies building developer tools"
   * * Filters: `funding_stage = "Series A"` AND `location = "San Francisco, CA"`
   * Result: Semantically relevant companies that also match exact criteria

### Example Documents

Each document has three components: `content` (human-readable text for LLM context), `embedding` (768-dim vector from text-embedding-004 for semantic search), and `meta` (structured fields for filtering).

**Company Document (Crunchbase):**

```python theme={null}
{
  "content": "Company: Acme AI\nIndustry: Artificial Intelligence\nFunding: $15M Series A...",
  "embedding": [0.123, -0.456, ...],  # 768 dimensions
  "meta": {
    "source_url": "https://www.crunchbase.com/organization/acme-ai",
    "dataset_type": "crunchbase_company",
    "company_name": "Acme AI",
    "industry": "AI/ML",
    "funding_stage": "Series A",
    "location": "San Francisco, CA",
    "scraped_date": "2026-01-19"
  }
}
```

**Person Document (LinkedIn):**

```python theme={null}
{
  "content": "Name: Jane Smith\nTitle: VP of Engineering\nCompany: Acme AI\nExperience: 10+ years...",
  "embedding": [0.234, -0.567, ...],  # 768 dimensions
  "meta": {
    "source_url": "https://www.linkedin.com/in/janesmith",
    "dataset_type": "linkedin_person",
    "person_name": "Jane Smith",
    "person_title": "VP of Engineering",
    "company": "Acme AI",
    "location": "San Francisco, CA",
    "scraped_date": "2026-01-19"
  }
}
```

**News Signal Document (SERP):**

```python theme={null}
{
  "content": "News: Acme AI raises $15M Series A\nSource: TechCrunch\nSnippet: AI startup...",
  "embedding": [0.345, -0.678, ...],  # 768 dimensions
  "meta": {
    "source_url": "https://techcrunch.com/...",
    "dataset_type": "news",
    "company_name": "Acme AI",
    "scraped_date": "2026-01-19"
  }
}
```

***

## Next Steps

<CardGroup>
  <Card title="LinkedIn Scraping" icon="linkedin" href="/api-reference/scrapers/social-media-apis/linkedin-profiles-collect-by-url">
    Add LinkedIn profile enrichment
  </Card>

  <Card title="Haystack Integration" icon="link" href="/integrations/haystack">
    Full haystack-brightdata documentation
  </Card>

  <Card title="SERP API" icon="magnifying-glass" href="/api-reference/rest-api/serp/serp-api">
    Explore the full SERP API reference
  </Card>

  <Card title="Scrapers" icon="globe" href="/api-reference/scrapers">
    Browse all 45+ supported datasets
  </Card>
</CardGroup>

<Check>
  You now have an AI-powered sales research assistant! Customize the pipeline to scrape additional data sources, add more metadata filters, or adjust the RAG prompts for your specific sales workflow.
</Check>
