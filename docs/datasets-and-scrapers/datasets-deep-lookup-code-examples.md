# Code examples

> **Official Source**: [https://docs.brightdata.com/datasets/deep-lookup/code-examples](https://docs.brightdata.com/datasets/deep-lookup/code-examples)
> **Category**: `datasets-and-scrapers`

---

Python, Node.js and shell examples for the Bright Data Deep Lookup API: submit a query, poll for results and parse the structured response end-to-end.

<CodeGroup>
  ```python Python - Complete Research Flow theme={null}
  import requests
  import time

  class DeepLookupAPI:
      def __init__(self, api_key):
          self.api_key = api_key
          self.base_url = "https://api.brightdata.com/datasets/deep_lookup/v1"
          self.headers = {"Authorization": f"Bearer {api_key}"}
      
      def research_with_spec(self, query, columns, limit=100):
          # Create detailed specification
          spec = {
              "name": "companies",
              "query": query,
              "title": query.replace("Find all ", ""),
              "columns": columns
          }
          
          # Trigger research
          trigger_response = requests.post(
              f"{self.base_url}/trigger",
              headers=self.headers,
              json={
                  "query": query,
                  "spec": spec,
                  "result_limit": limit
              }
          ).json()
          
          request_id = trigger_response["request_id"]
          
          # Poll for completion
          while True:
              status_response = requests.get(
                  f"{self.base_url}/request/{request_id}/status",
                  headers=self.headers
              ).json()
              
              print(f"Progress: {status_response.get('progress', 0)}%")
              
              if status_response["status"] == "completed":
                  break
              elif status_response["status"] == "failed":
                  raise Exception("Research failed")
              
              time.sleep(5)
          
          # Get results
          results = requests.get(
              f"{self.base_url}/request/{request_id}",
              headers=self.headers
          ).json()
          
          return results
      
      def monitor_progress(self, request_id):
          """Monitor detailed progress of a research request"""
          while True:
              result = requests.get(
                  f"{self.base_url}/request/{request_id}",
                  headers=self.headers
              ).json()
              
              step = result.get('step', 'unknown')
              
              if step == 'identifying':
                  print("Analyzing your query...")
              elif step == 'generating_schema':
                  print("Creating data structure...")
              elif step == 'generating':
                  pages = result.get('pages_read', 0)
                  matched = result.get('matched_records', 0)
                  print(f"Processing data: {pages} pages read, {matched} matches found")
              elif step == 'done':
                  print("Research completed!")
                  return result
              
              time.sleep(3)

  # Usage
  api = DeepLookupAPI("YOUR_API_KEY")

  columns = [
      {
          "name": "company_name",
          "description": "Name of the company",
          "type": "enrichment"
      },
      {
          "name": "is_ai_company",
          "description": "Must be an AI/ML focused company",
          "type": "constraint"
      },
      {
          "name": "employee_count",
          "description": "Number of employees",
          "type": "enrichment"
      },
      {
          "name": "min_50_employees",
          "description": "Must have at least 50 employees",
          "type": "constraint"
      }
  ]

  results = api.research_with_spec(
      "Find all AI companies in Israel with more than 50 employees",
      columns,
      limit=100
  )

  print(f"Found {results['matched_records']} companies")
  print(f"Skipped {results['skipped_records']} companies (didn't match all criteria)")
  print(f"Total cost: {results['total_cost']}")

  ```

  ```javascript Node.js - Preview and Execute with Progress Monitoring theme={null}
  const axios = require('axios');

  class DeepLookupAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseURL = 'https://api.brightdata.com/datasets/deep_lookup/v1';
      this.headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      };
    }

    async previewAndExecute(query, limit = 100) {
      // Create preview
      const previewResponse = await axios.post(
        `${this.baseURL}/preview`,
        { query },
        { headers: this.headers }
      );
      
      const previewId = previewResponse.data.preview_id;
      
      // Wait for preview to complete
      let previewData;
      do {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get(
          `${this.baseURL}/preview/${previewId}`,
          { headers: this.headers }
        );
        previewData = response.data;
      } while (previewData.status !== 'completed');
      
      console.log('Preview ready with', previewData.sample_data.length, 'samples');
      
      // Trigger full research
      const triggerResponse = await axios.post(
        `${this.baseURL}/trigger`,
        {
          preview_id: previewId,
          result_limit: limit
        },
        { headers: this.headers }
      );
      
      const requestId = triggerResponse.data.request_id;
      
      // Monitor detailed progress
      let lastStep = '';
      let result;
      
      do {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await axios.get(
          `${this.baseURL}/request/${requestId}`,
          { headers: this.headers }
        );
        
        result = response.data;
        
        if (result.step !== lastStep) {
          lastStep = result.step;
          switch(result.step) {
            case 'identifying':
              console.log('Analyzing query...');
              break;
            case 'generating_schema':
              console.log('Creating data structure...');
              break;
            case 'generating':
              console.log('Collecting data from sources...');
              break;
            case 'done':
              console.log('Research completed!');
              break;
          }
        }
        
        if (result.step === 'generating' && result.matched_records) {
          console.log(`   Found ${result.matched_records} matches so far...`);
        }
        
      } while (result.step !== 'done' && result.status !== 'failed');
      
      return result;
    }

    async enrichResults(requestId, columnName, columnQuery) {
      // Add enrichment column
      const enrichResponse = await axios.post(
        `${this.baseURL}/request/${requestId}/enrich`,
        {
          column_name: columnName,
          query: columnQuery
        },
        { headers: this.headers }
      );
      
      console.log(`Adding "${columnName}" column...`);
      console.log(`Maximum additional cost: ${enrichResponse.data.max_additional_cost}`);
      
      // Wait for enrichment to complete
      // (Implementation would depend on actual API behavior)
      
      return enrichResponse.data;
    }
  }

  // Usage
  const api = new DeepLookupAPI('YOUR_API_KEY');

  async function runResearch() {
    const results = await api.previewAndExecute(
      'Find all B2B marketplaces in Europe', 
      50
    );
    
    console.log(`Found ${results.matched_records} marketplaces`);
    console.log(`Skipped ${results.skipped_records} that didn't match criteria`);
    console.log(`Cost: ${results.total_cost}`);
    
    // Add an enrichment column
    await api.enrichResults(
      results.request_id,
      'ceo_name',
      'CEO or founder name'
    );
  }

  runResearch();
  ```
</CodeGroup>
