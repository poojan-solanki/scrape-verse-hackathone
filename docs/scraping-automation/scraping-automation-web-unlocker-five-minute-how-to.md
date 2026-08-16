# Unlock your first website

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/five-minute-how-to](https://docs.brightdata.com/scraping-automation/web-unlocker/five-minute-how-to)
> **Category**: `scraping-automation`

---

Unlock your first website with the Bright Data Web Unlocker API in under 5 minutes. Validate your setup with a minimal request before moving to advanced config.

This guide helps you unlock your **first website in under 5 minutes** using the Bright Data Web Unlocker API.\
It is designed for developers who want to validate their setup quickly and see real results without diving into advanced configuration.

By the end of this guide, you will:

* Verify your Web Unlocker API setup
* Send a live unlock request
* Receive clean HTML or JSON content from a target website

## What you need before starting (1 minute)

Make sure you already have:

* A Bright Data account
* An active **Web Unlocker API zone**
* An [**API key**](https://brightdata.com/cp/setting/users)

You can find your **zone name** and **API key** in the **Overview** tab of your Web Unlocker API in the [Bright Data Control Panel](https://brightdata.com/cp/web_access).

If you haven’t created an Web Unlocker API yet, follow **Create Your First Web Unlocker API** before continuing.

## Step 1: Choose a test website (30 seconds)

Select a public URL to test your first unlock request.

Good examples:

* [https://example.com](https://example.com)
* [https://httpbin.org/html](https://httpbin.org/html)

Make sure the URL:

* Is publicly accessible
* Starts with `https://` or `http://`

## Step 2: Understand what you’re about to send (30 seconds)

The Web Unlocker API works through a **single REST endpoint**.

You will send:

* Your API key (for authentication)
* Your Web Unlocker API zone name
* The target URL you want to unlock

Bright Data will automatically:

* Select the best proxy network
* Handle anti-bot protections
* Retry failed attempts if needed

## Step 3: Send your first unlock request (2 minutes)

Replace the placeholders below with your actual values:

* YOUR\_API\_KEY
* YOUR\_ZONE\_NAME
* YOUR\_TARGET\_URL

Example request:

`POST https://api.brightdata.com/request`

**Headers:**

* Authorization: `Bearer YOUR_API_KEY`
* Content-Type: `application/json`

Body:

```json theme={null}
{
  "zone": "YOUR_ZONE_NAME",
  "url": "YOUR_TARGET_URL",
  "format": "raw"
}
```

This request asks the Web Unlocker API to fetch the target page and return the unlocked response as raw HTML.

## Step 4: Review the response (30 seconds)

If the request is successful, you will receive:

* HTTP status: 200 OK
* A response body containing unlocked content
* HTML or JSON, depending on the format you requested

If you can see the page content, your Web Unlocker API is working correctly.

## Common issues and quick fixes (30 seconds)

* **401 Unauthorized**\
  Authentication is missing or invalid\
  → Verify the Authorization header and API key

* **400 Bad Request**\
  Request payload is invalid\
  → Ensure `zone`, `url`, and `format` are present

* **Content looks incomplete**\
  → Try another public URL or review Configuration options

## What you just accomplished

In under 5 minutes, you:

* Authenticated with the Web Unlocker API
* Sent a real unlock request
* Retrieved clean, usable content from a website

This confirms your setup is correct and ready for real workloads.

## Where to go next

Once your first request works, you can:

* Enable **geolocation** for region-specific content
* Use **asynchronous requests** for large batches
* Configure **premium domains** for harder targets
* Explore **Send Your First Request** for advanced examples
* Review **Troubleshooting** if you encounter errors
