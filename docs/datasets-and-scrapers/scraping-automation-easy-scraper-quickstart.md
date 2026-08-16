# Getting started with Easy Scraper

> **Official Source**: [https://docs.brightdata.com/scraping-automation/easy-scraper/quickstart](https://docs.brightdata.com/scraping-automation/easy-scraper/quickstart)
> **Category**: `datasets-and-scrapers`

---

Get started with Bright Data Easy Scraper in 3 steps: select a prebuilt scraper, run it and download structured data from popular sites without code.

The **Easy Scraper** allows you to collect structured data from popular websites without writing code or managing scraping infrastructure. It provides prebuilt scrapers for common platforms and handles extraction, scaling, and data formatting automatically.

This guide walks you through the complete process, from selecting a scraper to downloading your data.

<Steps>
  <Step title="Access the Control Panel">
    * Log in to your Bright Data account and open the dashboard.
    * Navigate to the [**Easy Scraper**](https://brightdata.com/products/web-scraper/easy-scraper) section from the left-hand menu.
    * You will see a catalog of prebuilt scrapers designed for popular platforms such as Amazon products, Airbnb listings, Instagram posts, LinkedIn profiles, and more.
    * Each scraper is optimized to collect structured data from its specific domain.

    <Frame>
      <img alt="select-target.png" />
    </Frame>
  </Step>

  <Step title="Select a Scraper">
    * Choose the scraper that matches the website or platform you want to collect data from.
    * Click on the corresponding scraper card to open its configuration screen.
    * Selecting the correct scraper ensures accurate extraction and domain-specific data fields.
  </Step>

  <Step title="Input Parameters">
    * Provide the required input parameters for the selected scraper.
    * Inputs vary depending on the platform and may include:
      * Keywords or search terms
      * Profile URLs or post URLs
      * Listing or category page URLs
    * Enter accurate inputs to ensure relevant and complete results.

    <Frame>
      <img alt="instagram-posts.png" />
    </Frame>
  </Step>

  <Step title="Set Result Limit (Optional)">
    * Optionally, define the maximum number of records you want to collect.
    * If a limit is set, the scraper stops once the limit is reached.
    * If no limit is specified, the scraper will collect all available data based on your inputs.
    * Setting a limit is useful when testing or when you only need a sample dataset.
  </Step>

  <Step title="Run and Monitor">
    * Click the **Start Collecting** button to begin the data collection process.
    * You will be redirected to the **Logs** tab, where you can monitor the job in real time.
    * The Logs tab displays key details such as:
      * Snapshot ID
      * Dataset name
      * Timestamp
      * Job status (Running, Completed, Failed)
      * Collection time
      * Number of records collected
      * File size
      * Any errors or warnings
  </Step>

  <Step title="Retrieve Data">
    * Once the data collection is complete, your dataset will be available for download.
    * You can download the results in one of the following formats:
      1. `JSON`
      2. `CSV`
      3. `NDJSON`
      4. `JSON Lines`
    * Choose the format that best fits your analysis or integration workflow.

    <Frame>
      <img alt="retrieve-data.png" />
    </Frame>
  </Step>
</Steps>
