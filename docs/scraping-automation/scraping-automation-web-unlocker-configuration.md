# Web Unlocker API configuration

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/configuration](https://docs.brightdata.com/scraping-automation/web-unlocker/configuration)
> **Category**: `scraping-automation`

---

Configure the Bright Data Web Unlocker API (98% success rate): premium domains, async processing, custom headers, cookies and auto-throttling controls.

## When to use premium domains

Some websites employ more advanced anti-bot and traffic filtering mechanisms that require additional resources to unblock successfully. To support these targets, Bright Data offers a **separate premium pricing tier** for a predefined list of domains.

You can review the current list of premium domains here: [Current list of premium domains](/scraping-automation/web-unlocker/features#current-list-of-premium-domains)

When premium domains are enabled:

* Requests to listed domains are charged at the premium rate
* The estimated cost is reflected in the **Estimated cost** section of your zone

<Note>
  Enabling premium domains does **not** affect all traffic.

  Only requests made to domains on the premium list are billed at the higher rate. Requests to all other domains continue to use the standard pricing tier.
</Note>

## How to configure Advanced settings

Advanced settings allow you to fine-tune how the Web Unlocker API processes requests, handles failures, and optimizes success rates.

### How to enable asynchronous requests

By default, requests are processed synchronously, returning a response immediately.<br />For long-running or high-volume workloads, you can enable **asynchronous requests**.

With asynchronous processing:

* Requests are handled in the background
* Responses can be retrieved later via a designated endpoint
* Overall stability and throughput are improved for large-scale jobs

This mode is recommended when:

* Target websites respond slowly
* You are processing large batches of URLs
* You want to decouple request submission from response handling

Learn more about asynchronous workflows here: [Asynchronous requests](/scraping-automation/web-unlocker/your-first-async-request)

### Custom Web Unlocker API (Custom Headers & Cookies)

By default, the Web Unlocker API automatically generates optimal headers and cookies for each request. In some advanced scenarios, you may need full control over these values to access a **specific site version or user flow**.

Enabling **Custom Headers & Cookies** allows you to override the automated behavior and provide your own values.

<Note>
  Enabling **Custom Headers & Cookies** introduces the following changes:

  <AccordionGroup>
    <Accordion title="Access to a Pre-approved List of Headers and Cookies">
      You gain access to a pre-approved list of supported headers and cookies. This list allows you to verify whether the values you need are already approved for use with your target website.
    </Accordion>

    <Accordion title="Send Request for New Headers/Cookies">
      If your required headers or cookies are not listed, you can submit an approval request to Bright Data’s compliance team. The request must include details about the header/cookie and its purpose. Once reviewed, you will be notified when approval is granted.
    </Accordion>

    <Accordion title="Charging for All Requests">
      Unlike the regular Web Unlocker API logic, which only charges for successful requests, enabling this feature means you’ll be charged for 100% of the requests (both successful and failed). This change is due to Bright Data not having full control over the process and its performance.
    </Accordion>
  </AccordionGroup>
</Note>

#### Enable custom headers & cookies

To enable this feature:

1. Log in to the **Bright Data Control Panel**
2. Select the relevant **Web Unlocker API zone**
3. Open **Advanced Settings** and enable **Custom headers & cookies**.
4. Once enabled, start sending custom headers and cookies with your requests.

Once enabled, you can begin sending custom headers and cookies with your requests.

### Control over auto-throttling

The Web Unlocker API includes an intelligent **auto-throttling mechanism** designed to protect performance and reduce unnecessary costs.

Auto-throttling dynamically adjusts request behavior based on real-time success rates.

<Tabs>
  <Tab title="Automatic optimization">
    The system continuously evaluates request performance and automatically applies better-performing configurations when available.
  </Tab>

  <Tab title="Low success-rate protection">
    If the success rate for a target site drops below a defined threshold, the system begins throttling requests. This prevents repeated failures and conserves resources.
  </Tab>

  <Tab title="Customizable success threshold">
    By default, the throttling threshold is set to **70% success rate**.

    When **Custom Headers & Cookies** are enabled, you can customize this threshold to any value that fits your workload. This is especially useful when all requests are billable and tighter control is required.
  </Tab>
</Tabs>

### How to set usage limits

**Usage limits** let you cap spending or traffic on a zone, so a runaway job or an unexpected traffic spike cannot exceed your budget.

To enable this feature:

1. Log in to the [Bright Data Control Panel](https://brightdata.com/cp/web_access)
2. Select the relevant **Web Unlocker API zone**
3. Open **Advanced settings** and enable **Usage limit**
4. Set a **daily** or **monthly** cap on spending or traffic, and choose what happens when the cap is reached
