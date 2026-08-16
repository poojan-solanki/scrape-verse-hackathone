# Residential network access policy

> **Official Source**: [https://docs.brightdata.com/proxy-networks/residential/network-access](https://docs.brightdata.com/proxy-networks/residential/network-access)
> **Category**: `proxy-networks`

---

Bright Data Residential proxies require KYC review by the compliance team and are available to verified companies only. No automatic or instant access.

Bright Data Residential proxies are available only to verified companies that pass a human-reviewed KYC (Know Your Customer) check by the Bright Data compliance team. There is no automatic, instant or self-serve path to the Residential network.

<Note>
  **Existing zones are unaffected.** Residential zones created on or before July 7, 2026 continue to work as expected. The KYC requirement applies only to new Residential zones created after July 7, 2026. Customers already verified for Residential access keep it and nothing changes.
</Note>

## Who can access the Residential network?

Residential access is granted only to registered companies, and only after the Bright Data compliance team reviews and approves your KYC submission.

* **Verified companies only.** You must sign up on behalf of a registered company and verify a corporate email domain. Accounts on a personal email (for example Gmail or Outlook) are not eligible for Residential access.
* **Human-reviewed KYC.** Every Residential request is reviewed by the Bright Data compliance team. Approval is never automatic, instant or self-serve.
* **All Residential proxy types.** For new Residential zones created after July 7, 2026, KYC approval is required for every proxy type: shared rotating IPv4, the IPv4 and IPv6 "Mega Pool", IPv6 and dedicated Residential proxies.
* **Existing zones keep working.** Residential zones created on or before July 7, 2026 continue as usual. The KYC requirement applies only to new Residential zones created after July 7, 2026, and customers already verified for Residential access do not need to reapply.

<Warning>
  Some restrictions also apply on the Datacenter and ISP networks. For example, government websites are blocked across all networks. See the [proxy errors catalog](/proxy-networks/errorCatalog) for the specific errors.
</Warning>

## What can I use without KYC?

If you have not completed KYC, or your use case does not need Residential IPs, use one of these alternatives. None of them require KYC:

* **[ISP proxies](/proxy-networks/isp/introduction)** give you static, residential-registered IPs with datacenter speed and stability. Use them for ad verification, QA and long-session workloads.
* **[Datacenter proxies](/proxy-networks/data-center/introduction)** give you fast, low-cost shared or dedicated IPs. Use them for high-volume requests to sites without strict anti-bot defenses.
* **[Web Unlocker API](/scraping-automation/web-unlocker/introduction)** is a fully managed unblocking product that handles headers, cookies, CAPTCHAs and retries automatically, billed per successful request.

These are alternatives to Residential proxies. They are not a limited or trial Residential mode.

## Residential proxy network policy

Bright Data monitors Residential network traffic 24/7 to keep the network compliant with its [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy). Because Residential IPs come from real people who opted in, access is scoped to the use case the compliance team approved during KYC.

* Requests to domains or categories outside your approved use case are blocked and return an `Access denied` error with the classified category.
* Restricted HTTP methods and targets that are not part of your approved use case are also blocked.
* To widen the sites and methods you can target, keep your KYC use case current with the compliance team.

## KYC verification

KYC (Know Your Customer) is the mandatory, human-reviewed verification step for Residential network access. The Bright Data compliance team validates your company and use case before granting access. Because a person reviews every submission, access is never granted instantly.

### How to request Residential access

1. Sign in to your Bright Data account and add a user with a **company email domain**. KYC applications are accepted only from registered businesses.

2. Add funds to your account balance. KYC is not available in [Playground](/general/faqs#what-is-playground-mode) or [Limited Trial](/general/faqs#what-is-limited-trial-mode) modes.

3. Submit the KYC form with details about your business and scraping use case, plus a company registration document.

   [Start KYC verification](https://brightdata.com/cp/kyc)

4. The Bright Data compliance team reviews your submission. You will receive a decision by email, and can track the status in your control panel under **Account Settings > Profile**.

<AccordionGroup>
  <Accordion title="Why do I need KYC for Residential proxies?">
    Residential IP addresses are linked to 100% real people who opted in to the Bright Data network. KYC (Know Your Customer) lets the Bright Data compliance team verify your business and use case before you route traffic through those real peers. This keeps the network compliant with the highest ethics and compliance standards and protects the people behind the IPs. Residential access is granted only after this human review, so there is no automatic or instant approval.
  </Accordion>

  <Accordion title="I signed up with a personal email. Can I use Residential?">
    No. Residential proxies are available only to verified companies. KYC applications are accepted only from registered businesses with a corporate email domain, so a personal-email account (for example Gmail, Outlook or iCloud) cannot be approved for Residential access. Add a user with your company email domain, then submit KYC. Without KYC you can still use [ISP proxies](/proxy-networks/isp/introduction), [Datacenter proxies](/proxy-networks/data-center/introduction) and the [Web Unlocker API](/scraping-automation/web-unlocker/introduction).
  </Accordion>

  <Accordion title="Can I switch my existing ISP or Datacenter zone to Residential?">
    Only after KYC approval. Converting or creating a Residential zone is blocked until the Bright Data compliance team approves your KYC submission. Your existing ISP and Datacenter zones keep working as usual while your KYC is under review.
  </Accordion>

  <Accordion title="What is the process for KYC verification?">
    Submit details about yourself and your scraping use case so the Bright Data compliance team can verify your eligibility. Start the KYC process below:

    [Start KYC verification](https://brightdata.com/cp/kyc)

    <Warning>
      The KYC process is not available in [Playground](/general/faqs#what-is-playground-mode) or [Limited Trial](/general/faqs#what-is-limited-trial-mode) modes. It can be started only after adding real funds to the account balance.
    </Warning>
  </Accordion>

  <Accordion title="How long does KYC approval take?">
    Filling in the form takes a few minutes. Approval is not automatic: the Bright Data compliance team reviews every submission. Once submitted, the review runs through the compliance process, and you can see the status in your control panel under **Account Settings > Profile**. You will be updated on your KYC status within 48 hours of completing the process.
  </Accordion>

  <Accordion title="How do I know that my KYC has been approved?">
    You can check the status of your KYC at any time in your control panel under **Settings > Profile**, shown as "Account verification status". A notification about the submission and the approval or decline of your request is also sent to your email once the review is complete.
  </Accordion>

  <Accordion title="Do I have to complete KYC to use the Residential network?">
    Yes. KYC approval is required for all Residential network access, and it is reviewed by the Bright Data compliance team. There is no automatic or no-KYC path to any Residential proxy. Without KYC, use [ISP proxies](/proxy-networks/isp/introduction), [Datacenter proxies](/proxy-networks/data-center/introduction) or the [Web Unlocker API](/scraping-automation/web-unlocker/introduction).
  </Accordion>

  <Accordion title="Is this a one-time process?">
    The KYC information is documented in Bright Data systems so the compliance team can review your use case again if needed. Bright Data monitors its network 24/7 and may reach out for additional clarification or information to keep the network safe.
  </Accordion>

  <Accordion title="Who is eligible for the KYC process?">
    Bright Data accepts KYC applications from registered businesses with a company domain. To submit a KYC request, verify a company email address on your account.
  </Accordion>

  <Accordion title="What information will I need to share?">
    The KYC process requires basic information about your business, such as a description of your use case and general contact information. The more detail you share about your business and use case, the easier it is for the Bright Data Compliance and Ethics team to evaluate and approve your request. Further clarification, validation or identification may be requested as a follow-up.
  </Accordion>

  <Accordion title="Why might I need to provide identification?">
    As part of verification, the Bright Data compliance team may request a valid government-issued ID, such as a driver's license or passport, to verify the identity of the point of contact. Because Bright Data IP addresses are linked to 100% real peers, verifying identities is an essential part of keeping the network secure and reliable.
  </Accordion>

  <Accordion title="Do I need to set up a video call?">
    The Bright Data compliance team may request a brief video call to verify additional information about your business or intended use case. This step ensures compliance with policy and ethical standards during the review.
  </Accordion>

  <Accordion title="What is a company registration form or certificate of incorporation?">
    A company registration form (also called a "Certificate of incorporation") is used by government offices as proof of registering a new business. It usually contains the company's official information, including the formal name, registered office address and company registration identifier. It is typically available to the company's legal counsel or finance department and can be shared as proof of registration.
  </Accordion>

  <Accordion title="Can I use Bright Data services while my KYC is being reviewed?">
    Yes. You can use all other Bright Data products and services, including [ISP proxies](/proxy-networks/isp/introduction), [Datacenter proxies](/proxy-networks/data-center/introduction) and the [Web Unlocker API](/scraping-automation/web-unlocker/introduction), while your KYC request is being processed.
  </Accordion>

  <Accordion title="Can I still use Datacenter and ISP if my Residential KYC was declined?">
    Yes. If your KYC was not approved, you can still use the other Bright Data products and services according to the Bright Data [license](https://brightdata.com/license).
  </Accordion>

  <Accordion title="What happens during the KYC video call?">
    On the call, the Bright Data compliance team learns more about your company and activities, confirms your use case and specific requirements, and may view relevant systems and workflow, so Bright Data can support your needs as accurately as possible.
  </Accordion>

  <Accordion title="What if I don't have a LinkedIn or website?">
    The verification process requires vetting a company website and an active online presence. If you have another form of online presence besides LinkedIn (such as a portfolio, GitHub or an alternative business profile), share it when submitting your application.
  </Accordion>

  <Accordion title="What if I don't want to do a video call?">
    If you were asked to do a video call, it is a mandatory step. It helps the Bright Data compliance team verify your identity and understand your use case. Without completing the call, Residential network access cannot be granted.
  </Accordion>

  <Accordion title="Can I use Bright Data for personal projects?">
    No. Bright Data is a B2B platform and supports business-related use cases only. Personal projects, such as scraping for a hobby or a side project, are not approved.
  </Accordion>

  <Accordion title="What kind of use cases are not allowed?">
    See the Bright Data [Acceptable Use Policy](https://brightdata.com/acceptable-use-policy).
  </Accordion>

  <Accordion title="I submitted my KYC but haven't heard back. What should I do?">
    Expect an update within 48 hours of submitting your KYC. If it has been longer, check the status in your control panel under **Account Settings > Profile**, or contact your account manager or the Bright Data support team.
  </Accordion>
</AccordionGroup>
