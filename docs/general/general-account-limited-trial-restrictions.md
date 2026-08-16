# Limited trial account restrictions

> **Official Source**: [https://docs.brightdata.com/general/account/limited-trial-restrictions](https://docs.brightdata.com/general/account/limited-trial-restrictions)
> **Category**: `general`

---

How rate limits and balance restrictions apply to Bright Data accounts in Limited Trial mode across 4 products, and how to remove them with verification.

## Overview

Accounts in Limited Trial mode are subject to certain restrictions to prevent abuse and ensure compliance with Bright Data's policies. These restrictions are automatically applied to accounts flagged or operating in Limited Trial mode and can be removed by completing the account verification process.

<Note>
  The "Limited Trial Account Restrictions" described on this page are **not the same as KYC (Know Your Customer) verification**.
  These restrictions only apply to accounts in Limited Trial mode.
</Note>

## Rate limiting restrictions

### Request rate limits

Accounts in Limited Trial mode are restricted to a maximum of **100 requests per minute** across all products.

#### What happens when you exceed the rate limit?

If you exceed this rate limit, your requests will be rejected with an **HTTP 429** error response:

```http theme={null}
HTTP/1.1 429 Too Many Requests
x-brd-err-code: client_10110
x-brd-error: Requests rate from account is too high
x-brd-err-msg: Your limited trial mode account exceeded the allowed rate limits. Reduce requests rate and try again or complete the verification process to remove rate limits.
```

<Warning>
  **You will not be charged for requests that are rejected due to rate limiting.**
</Warning>

#### How to resolve rate limit errors

<Steps>
  <Step title="Reduce your request rate">
    Temporarily reduce your requests to stay under 100 requests per minute while in trial mode.
  </Step>

  <Step title="Complete account verification">
    [Complete the account verification process](https://brightdata.com/cp/account_verification) to remove all rate limiting restrictions.
  </Step>
</Steps>

## Balance addition limits

### Maximum balance top-up

Accounts in Limited Trial mode can only add up to **\$100 to their balance at a time** until verification is completed.

<Info>
  This restriction applies per transaction. After completing verification, you can add any amount to your account balance.
</Info>

### Why this limit exists

The balance addition limit is in place to:

* Prevent fraudulent activity
* Ensure compliance with financial regulations
* Protect Bright Data from potential abuse

## How to remove these restrictions

All Limited Trial restrictions can be removed by completing the account verification process.

<Card title="Complete Account Verification" icon="shield-check" href="https://brightdata.com/cp/account_verification">
  Verify your account to unlock:

  * Unlimited request rates
  * No balance addition restrictions
  * Full access to all Bright Data products
  * Priority support
  * Add more than \$100 payments
</Card>

### Verification process steps

<Steps>
  <Step title="Navigate to Account Verification">
    Visit [https://brightdata.com/cp/account\_verification](https://brightdata.com/cp/account_verification)
  </Step>

  <Step title="Complete identity verification">
    Depending on your use case, you may be asked to provide additional information about your intended usage.
  </Step>

  <Step title="Wait for approval">
    Most verifications are completed instantly, but some may require manual review (1-2 business days).
  </Step>
</Steps>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="How long does account verification take?">
    Most account verifications are instant. In some cases, manual review may be required, which typically takes 1-2 business days.
  </Accordion>

  <Accordion title="Can I use Bright Data while waiting for verification?">
    Yes! You can continue using Bright Data services in Limited Trial mode while your verification is being processed, subject to the rate and balance limits described above.
  </Accordion>

  <Accordion title="What if I receive a 429 error after verification?">
    If you continue to receive HTTP 429 errors after completing verification, it may be due to:

    * Domain-specific rate limits (error code: policy\_20220)
    * IP-specific rate limits (error code: policy\_20222)

    Contact [support@brightdata.com](mailto:support@brightdata.com) for assistance.
  </Accordion>
</AccordionGroup>

## Where to read more

* [Account Billing and Pricing FAQs](/general/account/billing-and-pricing/faqs)
