# Disable CAPTCHA solver

> **Official Source**: [https://docs.brightdata.com/scraping-automation/scraping-browser/features/captcha-solver](https://docs.brightdata.com/scraping-automation/scraping-browser/features/captcha-solver)
> **Category**: `scraping-automation`

---

By default, as part of our full proxy unblocking solution, Browser API also solves CAPTCHAs that are encountered while returning your proxy request.

When disabling CAPTCHA solver, our unlocker algorithm still takes care of the entire ever-changing flow of finding the best proxy network, customizing headers, fingerprinting, and more, but intentionally does not solve CAPTCHAs automatically, giving your team a lightweight, streamlined solution, that broadens the scope of your potential scraping opportunities.

Best for:

* Scraping data from websites without getting blocked
* Emulating real-user web behavior

<Accordion title="How can I get started?">
  To disable automated CAPTCHA solving, navigate to your Browser API zone and open the Configuration tab. Locate the CAPTCHA Solver setting in the main configuration area and switch the toggle off.
</Accordion>

<Note>
  If you would like to manually configure our default CAPTCHA solver through CDP commands on your own, see [custom CDP functions](/scraping-automation/scraping-browser/cdp-functions/custom)
</Note>
