# How to set up Bright Data with Zapier

> **Official Source**: [https://docs.brightdata.com/integrations/zapier](https://docs.brightdata.com/integrations/zapier)
> **Category**: `general`

---

Connect Bright Data (1000+ scrapers) to Zapier to automate web data collection and route results into Google Sheets, Slack, Trello, Airtable and Salesforce.

Bright Data’s Zapier integration enables you to automate web data collection and seamlessly route structured data into apps like Google Sheets, Slack, Trello, Airtable, and Salesforce, without writing a single line of code.

## Available Zap Actions

The following actions are currently supported via the Bright Data Zapier integration:

| Actions                              | Description                                                                             |
| :----------------------------------- | :-------------------------------------------------------------------------------------- |
| Scrape Amazon                        | Create a new scraping request for Amazon data, waits for data to be received            |
| Scrape Crunchbase                    | Create a new scraping request for Crunchbase data, waits for data to be received        |
| Scrape Facebook                      | Scrape data from a Facebook Post, Comment or Reel                                       |
| Scrape Google Play Store             | Create a new scraping request for Google Play Store data, waits for data to be received |
| Scrape Instagram                     | Creates a new scraping request for Instagram data, waits for data to be received        |
| Scrape Pinterest                     | Create a new scraping request for Pinterest data, waits for data to be received         |
| Run an Web Unlocker API              | Creates an Web Unlocker API run                                                         |
| Scrape Vimeo                         | Create a new scraping request for Vimeo data, waits for data to be received             |
| Scrape Yelp                          | Create a new scraping request for Yelp data, waits for data to be received              |
| Scrape ChatGPT                       | Create a new scraping request for ChatGPT data, waits for data to be received           |
| Download Snapshot Content (Scrapers) | Download snapshot content (Scrapers)                                                    |
| Scrape Glassdoor                     | Create a new scraping request for Glassdoor data, waits for data to be received         |
| Scrape Indeed                        | Create a new scraping request for Indeed data, waits for data to be received            |
| Scrape LinkedIn                      | Create a new scraping request for LinkedIn data, waits for data to be received          |
| Scrape Pitchbook                     | Create a new scraping request for Pitchbook data, waits for data to be received         |
| Scrape TikTok                        | Create a new scraping request for TikTok data, waits for data to be received            |
| Scrape X (Twitter)                   | Create a new scraping request for X data, waits for data to be received                 |
| Scrape YouTube                       | Create a new scraping request for YouTube data, waits for data to be received           |

***

## How to Integrate Bright Data With Zapier

<Steps>
  <Step title="Prerequisites">
    Before you begin, ensure you have the following:

    * A valid Bright Data API Key
    * An active Zapier account
    * Access to the Bright Data Zapier app
    * A clear understanding of what data you want to scrape and where it should be sent
  </Step>

  <Step title="Create a Zap">
    Log in to your Zapier account, navigate to the **Zaps** section, and click **Create Zap** to start building your automation workflow.
  </Step>

  <Step title="Set Up a Trigger">
    Choose a trigger app and event that fits your use case. Common examples include:

    * **Schedule by Zapier**, run a scraper hourly, daily, or weekly
    * **New Row in Google Sheets**, trigger scraping when new input data is added
    * **Webhooks or Form Submissions**, trigger scrapers dynamically using real-time inputs
  </Step>

  <Step title="Add Bright Data as an Action">
    In the **Action** step, search for and select **Bright Data**. You will then be prompted to choose one of the available scraping or Unlocker actions.

    <Frame>
      <img alt="zapier-action-setup" />
    </Frame>
  </Step>

  <Step title="Select an Action Event">
    Choose the Bright Data action that matches your target platform.\
    For example:

    * Select **Scrape Amazon** to collect product data
    * Select **Scrape LinkedIn** to extract profile or company information
    * Select **Run an Web Unlocker API** for advanced dynamic website access
  </Step>

  <Step title="Connect Your Bright Data Account">
    Click **Sign In** next to the Bright Data connection field.\
    Enter your Bright Data API key to authorize Zapier to run scraping actions on your behalf.

    <Frame>
      <img alt="zapier-api-key" />
    </Frame>
  </Step>

  <Step title="Configure Action Parameters">
    Configure the required input fields for the selected action.\
    Depending on the scraper, this may include:

    * Target URLs or search terms
    * Country or localization settings
    * Result limits or pagination options
    * Output format preferences
  </Step>

  <Step title="Test the Action">
    Click **Test Action** to validate your configuration.\
    Zapier will execute a sample scrape and return example output so you can confirm:

    * Data is returned successfully
    * Fields are mapped correctly
    * The response matches your expectations
  </Step>

  <Step title="Add Downstream Actions (Optional)">
    After the Bright Data action, you can chain additional steps, such as:

    * Save results to Google Sheets or Airtable
    * Send alerts to Slack or Email
    * Push structured data into CRMs or internal tools
  </Step>

  <Step title="Publish and Monitor Your Zap">
    Once everything is verified, click **Publish Zap** to activate it.

    After publishing:

    * Monitor task history in Zapier
    * Adjust triggers or scraping parameters as needed
    * Scale workflows by duplicating Zaps for other platforms
  </Step>
</Steps>

***

## Best Practices

* Start with low-frequency triggers and scale gradually
* Validate output fields before sending data to production tools
* Use scheduling triggers for predictable workloads
* Monitor Zapier task usage and Bright Data API limits
* Keep API keys secure and rotate them periodically

***

## Conclusion

With Bright Data’s Zapier integration, you can automate web data collection without writing code. From scheduled scrapes to real-time triggers, this setup enables flexible, scalable workflows that seamlessly deliver structured data into your favorite tools, powering analytics, monitoring, and business operations with ease.
