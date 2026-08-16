# Training data for AI models

> **Official Source**: [https://docs.brightdata.com/ai/training](https://docs.brightdata.com/ai/training)
> **Category**: `ai-and-mcp`

---

Technical overview of Bright Data infrastructure (1000+ scrapers) for building AI training data pipelines: large-scale acquisition, extraction and delivery.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

## Training Data for AI Models: A Technical Guide

Acquiring high-quality, large-scale training data is a critical challenge for AI engineers. This guide provides a comprehensive technical overview of Bright Data's infrastructure for building and managing data acquisition pipelines, designed to help you make informed decisions and get started quickly.

## Technical Quick Reference

| Feature             | Specification                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data Formats**    | `JSON`, `NDJSON`, `CSV`, `XLSX`, and `Parquet`. Specify your desired format in the API request.                                                              |
| **Authentication**  | All API requests are authenticated using a bearer token. Include your API key in the `Authorization` header.                                                 |
| **Data Freshness**  | **Archive:** Historical. **Pre-collected:** Updated daily, weekly, or monthly. **Custom:** On-demand, near real-time.                                        |
| **Compliance**      | GDPR, CCPA, and SOC2 compliant. We adhere to a strict ethical framework for all data collection. See our [Trust Center](https://brightdata.com/trustcenter). |
| **Developer Tools** | We provide SDKs for [**Python**](/api-reference/SDK-PY) and [**Javascript**](/api-reference/SDK-JS).                                                         |
| **Free Trial**      | Sign up and receive a credit to test Bright Data. Download data samples for any dataset before purchasing.                                                   |

## Data Acquisition Strategies

Your strategy for data acquisition depends on your model's needs. Choose the method that best fits your use case, from foundational training to specialized, real-time data collection.

<Tabs>
  <Tab title="Web Archive">
    **Best for:** Foundational, large-scale model training.

    The Web Archive provides access to a petabyte-scale repository of historical web data, making it the ideal source for training large language and diffusion models that require a comprehensive understanding of the digital world.

    * **Use Case:** Pre-training LLMs, historical analysis, building base models.
    * **Next Step:** [Contact our data experts](https://brightdata.com/ai/video-data#popup-170970) for access and pricing.
    * **Learn More:** [Web Archive Documentation](/datasets/archive/overview)
  </Tab>

  <Tab title="Pre-collected Datasets">
    **Best for:** Fine-tuning models on specific domains.

    Our curated datasets provide structured, high-quality data across numerous industries, allowing you to efficiently specialize your model for specific tasks without the overhead of data collection.

    * **Use Case:** Fine-tuning, industry-specific models, market research.
    * **Pricing:** Starts from **\$250 per 100,000 records**.
    * **Quality:** Rigorously validated. Free samples are available for evaluation.
    * **Next Step:** [Explore Datasets](/datasets/marketplace/dataset-view)
  </Tab>

  <Tab title="Custom Collection">
    **Best for:** Fresh, on-demand data from specific sources.

    Initiate programmatic data collection jobs to get real-time, structured data from any public URL. This gives you complete control over the freshness and specificity of your training data.

    * **Use Case:** Real-time applications, tracking dynamic data, custom knowledge bases.
    * **Pricing:** Based on the complexity and scale of the request.
    * **Next Step:** [Contact us for a custom quote](https://brightdata.com/ai/video-data#popup-170970).
    * **Learn More:** [Custom Dataset API Documentation](/datasets/scrapers/custom-scrapers/custom-dataset-api)

    **API Example:**

    ```bash theme={null}
    curl "https://api.brightdata.com/datasets/initiate?dataset_id=YOUR_DATASET_ID&type=url_collection&view=YOUR_VIEW_ID" \
      -H "Authorization: Bearer YOUR_API_KEY" \
      -H "Content-Type: application/json" \
      -d '[{"url":"https://example.com"}]'
    ```
  </Tab>

  <Tab title="Video & Media">
    **Best for:** Training multimodal models at scale.

    Overcome the limitations of tools like `yt-dlp` by using our resilient infrastructure. The Web Unlocker API handles rate limits, geo-restrictions, and bot detection to ensure a reliable video data pipeline.

    * **Use Case:** Training video, audio, and image models.
    * **KYC Required:** Access requires a Know Your Customer process to ensure ethical and compliant data sourcing due to the sensitive nature of media content.
    * **Next Step:** [Book a meeting with our data experts](https://brightdata.com/ai/video-data#popup-170970) to begin the approval process.
    * **API Reference:** [Media Data API](/api-reference/media-data-api/media-data-api), download video, audio, captions, thumbnails, and storyboards from YouTube, Vimeo, TikTok, and Bilibili.
  </Tab>
</Tabs>

## How data is delivered

Once your data is collected, it can be delivered to a variety of destinations to seamlessly integrate with your existing cloud infrastructure.

**Supported Delivery Options:**

* Amazon S3
* Google Cloud Storage
* Microsoft Azure Storage
* Webhook
* SFTP/FTP
* Snowflake
* API Download

For detailed instructions on setting up your preferred delivery method, please see our [Delivery Options documentation](/datasets/scrapers/scrapers-library/delivery-options).
