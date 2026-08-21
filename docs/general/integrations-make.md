# How to set up Bright Data with Make.com

> **Official Source**: [https://docs.brightdata.com/integrations/make](https://docs.brightdata.com/integrations/make)
> **Category**: `general`

---

Connect Bright Data (1000+ scrapers) to Make.com for no-code data workflows: trigger scrapers, deliver to Google Sheets, Notion or any HTTP webhook.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## What is Make.com?

[Make](https://www.make.com/en/integrations/brightdata) (formerly Integromat) is a visual automation platform that lets you connect various apps and services to create powerful workflows, without writing any code.

Bright Data's integration with Make enables seamless web data collection and processing. With this integration, you can automate tasks like scraping websites, retrieving datasets, and making API calls.

Bright Data offers the following six modules in Make:

1. **Run an Web Unlocker API** – Access and extract data from sites that block bots.
2. **Download a Snapshot Content** – Retrieve the full content of a previously captured dataset.
3. **Filter a Dataset** – Apply filters to datasets and generate refined snapshots.
4. **Get a Snapshot Metadata** – Fetch detailed metadata for a snapshot.
5. **Get a Snapshot Part** – Retrieve a specific section of a snapshot.
6. **Make an API Call** – Execute any authorized request to Bright Data’s API.

## Why Use Bright Data With Make.com?

Integrating Bright Data with [Make](https://www.make.com/en/integrations/brightdata) allows you to build sophisticated web data pipelines, without writing a single line of code.

You can visually design and automate workflows that connect Bright Data with over 2,000 other apps and services. For example, you can:

* Extract data from websites using **Web Unlocker API**.
* Download and store snapshot content.
* Apply filters to datasets dynamically.
* Retrieve snapshot metadata or specific parts.
* Trigger authorized Bright Data API calls.

These capabilities let you build end-to-end data flows that connect Bright Data with tools like Google Sheets, Airtable, Notion, Slack, or your internal systems.

## How to Integrate Bright Data With Make.com

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already.
  </Step>

  <Step title="Create a New Scenario">
    * Log in to your Make.com account.
    * Click **Create a new scenario** in the top-left corner.
    * Choose the **Build from scratch** option.
  </Step>

  <Step title="Add the Bright Data Module to the Scenario">
    * Click the **+** button to add a module.
    * Search for and select **Bright Data** from the list.
  </Step>

  <Step title="Configure the 'Run an Web Unlocker API' Module">
    * Select the **Run an Web Unlocker API** module.
    * Click **Create a connection**.
    * Enter a descriptive connection name.
    * Paste your Bright Data API key into the **API Token** field.
    * Set parameters such as `zone`, `url`, `format`, `method`, `country`, and `async`.
    * Click **Save**.
  </Step>

  <Step title="Wait for Task Completion">
    * Add a delay or use a scheduling mechanism to allow the Web Unlocker API task to finish before proceeding.
  </Step>

  <Step title="Download the Snapshot Content">
    * Add the **Download a Snapshot Content** module.
    * Configure it to fetch the results of the completed Web Unlocker API task.
  </Step>

  <Step title="Store Data in Google Sheets">
    * Add a **Google Sheets** module.
    * Use it to insert the extracted data into your spreadsheet.
  </Step>
</Steps>

This setup builds a no-code data extraction pipeline that automates the process of collecting and storing data, perfect for use cases like price monitoring or competitor tracking.
