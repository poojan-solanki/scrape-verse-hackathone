# Introduction to Bright Data’s Browser API

> **Official Source**: [https://docs.brightdata.com/scraping-automation/scraping-browser/introduction](https://docs.brightdata.com/scraping-automation/scraping-browser/introduction)
> **Category**: `scraping-automation`

---

Learn how Bright Data's Browser API (60+ tools) enables large-scale browser-based data collection with automation, proxy management and built-in unblocking.

## Overview

Bright Data’s **Browser API** is designed for **browser-based data collection workflows** that require full page rendering, user-like interactions, and advanced unblocking capabilities.

As part of Bright Data’s **Unlocker Scraping Suite**, the Browser API allows you to run your scraping logic directly on **fully managed cloud browsers**, eliminating the need to maintain your own browser infrastructure, proxy networks, or anti-bot handling logic.

Instead of running browsers locally or managing complex proxy configurations, your code executes on Bright Data’s dedicated browser environment, automatically optimized to bypass modern anti-bot systems at scale.

## How the Browser API works

With the Browser API, your scraping scripts run inside **real, hosted browsers** that are pre-configured for high success rates and stability.

Behind the scenes, Bright Data handles:

* Automatic proxy rotation across multiple networks, including residential IPs
* Browser fingerprint management to emulate real-user behavior
* Custom headers and session handling
* CAPTCHA detection and solving
* Intelligent retries and session recovery

This allows you to focus entirely on **writing scraping logic**, while Bright Data manages the full browser execution and unblocking lifecycle.

## Supported browser automation frameworks

The Browser API integrates seamlessly with standard browser automation tools, including:

* **Puppeteer**
* **Playwright**
* **Selenium**

These integrations allow you to reuse existing scripts and tooling while instantly gaining access to scalable, production-ready browser infrastructure.

> See the full list of supported integrations in our [Integrations documentation](/integrations).

## Why use the Browser API

The Browser API is ideal when static HTTP requests are not enough and full browser interaction is required.

Use the Browser API when you need to:

* Navigate multi-step user flows
* Fill out forms and submit inputs
* Click buttons, links, and menus
* Scroll and load dynamically rendered content
* Interact with JavaScript-heavy websites
* Handle login flows and authenticated sessions
* Bypass advanced bot detection and CAPTCHAs

## Best suited for

The Browser API is best suited for:

* Websites that rely heavily on JavaScript rendering
* Complex workflows requiring real-user interactions
* Large-scale browser automation with unpredictable anti-bot behavior
* Teams without a scalable in-house browser and proxy infrastructure
* Teams that need built-in CAPTCHA solving without integrating or maintaining a separate solver
* Use cases requiring **unlimited concurrent browser sessions**

## How to get started

To get started with the Browser API, follow the **Quick Start** guide to create your Browser API zone and run your first automated browser session in minutes.
