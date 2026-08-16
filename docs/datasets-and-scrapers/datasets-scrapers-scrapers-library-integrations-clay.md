# Clay integration

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/scrapers-library/integrations/clay](https://docs.brightdata.com/datasets/scrapers/scrapers-library/integrations/clay)
> **Category**: `datasets-and-scrapers`

---

Integrate Bright Data's Web Scraper API (1000+ pre-built scrapers) with Clay to automate data collection and enrich workflows with structured web data.

This article will provide you with information on integrating Clay to Bright Data web scrapes APIs, Clay is a powerful tool for managing and automating workflows. By integrating your Scrapers into Clay, you can:

* Automate data scraping from targeted websites.

* Process and generate insights on the collected data in Clay workflows.

* Streamline the delivery of web-scraped data into other tools or services via Clay.

***

## Prerequisites

Before you begin, ensure the following:

1. Access to Clay: You must have a Clay account with administrator privileges.

2. Scrapers Access: You should have your Bright Data API key including authentication details, the needed endpoints, and request/response structures in place.

***

## How to integrate with Clay

### Step 1: Set Up the Scrapers

1. Choose the target website from our variety of Bright data API offerings

2. Pick the specific scraper you need

3. Update the desired list of Inputs via JSON or CSV

4. Enable the “Include errors report with the results” toggle button

5. Enable the “Deliver results to external storage” toggle OR the “Send to webhook” toggle button according to your preference

***

### Step 2: Create an API Request Workflow in Clay

Clay allows you to create automated workflows using its user-friendly interface. To call your Scrapers, follow these steps:

1. **Log in to Clay**:

   * Log into your Clay account.

   * Navigate to the Workflows section.

2. **Set Up a Trigger**:

   * Choose how you'd like to trigger the workflow (e.g., manually, scheduled, or based on an event in another service integrated with Clay).

3. **Add an HTTP Request Action**:

   * Add an HTTP request block to your workflow.

   * Select the HTTP method supported by your Scrapers (POST "[Trigger a collection](/api-reference/scrapers/delivery-apis/download-snapshot)").

4. **Configure the Request**:

   * In the HTTP request block, input the following:

   * URL: Enter the API endpoint (e.g., [https://api.brightdata.com/datasets/v3/trigger](/api-reference/rest-api/scraper/asynchronous-requests)).

   * Headers: Include any required headers, such as:

   ```JSON theme={null}
     {
         "Authorization": "Bearer YOUR_API_KEY",
         "Content-Type": "application/json"
     }
   ```

   * Body (if required): Add any parameters required in the body as JSON.

5. **Test the Request**:

   * Send a test request using Clay's testing tools to ensure that the Scrapers responds with the expected data.

***

### Step 3: Process the Response in Clay

Once you’ve successfully connected to the Scrapers, you can process the response data:

1. **Integrate with Other Services**:

   * Use Clay to send the data to a database, Google Sheets, email, or any other service.

2. **Add Conditions/Logic**:

   * Create conditions or filters in your workflow. For example, only process items with a price above a certain threshold.

***

### Step 4: Schedule or Deploy Your Workflow

Configure your workflow to run automatically based on your preferred schedule (e.g., every hour or daily) or trigger it manually when needed.
