# Payment method verification

> **Official Source**: [https://docs.brightdata.com/general/account/billing-and-pricing/payment-verification](https://docs.brightdata.com/general/account/billing-and-pricing/payment-verification)
> **Category**: `general`

---

Why a payment method is required to access Proxy Networks on a free trial across 4 product lines, and how to add one in 2 steps.

## Overview

When you sign up for Bright Data with a **personal email address** you receive a **free credit** to explore Bright Data. Certain products require you to **add a valid payment method** before you can create or use them.

<Note>
  Adding a payment method **does not trigger a charge**. It is used solely for identity verification and to unlock full product access.
</Note>

## Who is affected?

This requirement applies if **all** of the following are true:

| Condition          | Detail                                                                  |
| ------------------ | ----------------------------------------------------------------------- |
| **Email type**     | You signed up with a personal / freemail domain                         |
| **Payment status** | No valid payment method is on file, you are using the free credit only. |

<Tip>
  Users who signed up with a **business email** or who already have a payment method on file are **not** affected and can use all products immediately.
</Tip>

## Which products are gated?

| Gated products (payment method required) | Available on free credit |
| ---------------------------------------- | ------------------------ |
| Residential Proxy                        | SERP API                 |
| Mobile Proxy                             | Web Unlocker API         |
| ISP Proxy                                | Browser API              |
| Datacenter Proxy                         | Scrapers                 |
|                                          | Datasets Marketplace     |
|                                          | Scraper Studio           |

## What you will see in the Control Panel

### Zone Creation Wizard - Create Proxy

When creating a **Proxy zone**, the wizard includes an additional step:

<Steps>
  <Step title="Configure your zone">
    Choose your product type and assign a name as usual.
  </Step>

  <Step title="Set zone options">
    Configure any additional settings (geolocation, IP type, etc.).
  </Step>

  <Step title="Add payment method">
    Instead of the usual **Create Proxy** button, you will see **Add payment method**. Clicking it opens the payment method form.
  </Step>

  <Step title="Finalize creation">
    Once a valid payment method is saved, your zone is created automatically. If you leave the payment flow without completing it, the zone is **not** created, but your configuration is saved so you can resume later.
  </Step>
</Steps>

<Warning>
  Your zone will **not** be created until a payment method is successfully added.
</Warning>

### Network Dropdown - SERP API / Browser API configuration

If you are configuring an **allowed** product (SERP API or Browser API) and attempt to switch the underlying network to a gated product, the restricted networks appear **grayed out** in the dropdown:

* Residential
* Mobile
* ISP
* Datacenter

Hovering over a grayed-out option displays a tooltip:

> **"Add a payment method to unlock this product."**

The tooltip includes a link that opens the payment method form directly.

### Trial Credit Modal - "See Details"

In the credit breakdown modal, gated products display a **"Payment method required"** badge next to:

* **Proxy Networks** (covers Residential, Mobile, Datacenter, ISP)

The modal footer includes an **"Add payment method"** button (primary style) alongside the existing "Got it" button.

## How to add a payment method

<Steps>
  <Step title="Go to the Billing page">
    Navigate to [Billing Settings](https://brightdata.com/cp/billing/settings) or click **Add payment method** from any of the prompts described above.
  </Step>

  <Step title="Choose a payment method">
    Select one of the supported methods: **Credit Card**, **PayPal**, **AliPay**, or **Payoneer**. For details, see [Accepted Payment Methods](/general/account/billing-and-pricing/payment-methods).
  </Step>

  <Step title="Complete verification">
    Follow the on-screen steps. A temporary pre-authorization may appear on your statement, this is **not** a charge and will be released by your bank within 1–14 business days.
  </Step>

  <Step title="Access unlocked">
    After verification you will:

    * Have full access to **all** Bright Data products
    * Receive a **\$5 bonus credit**
    * Be upgraded to the **30-day Limited Trial**
  </Step>
</Steps>

## FAQs

<AccordionGroup>
  <Accordion title="Will I be charged when I add a payment method?">
    No. Adding a payment method triggers a temporary pre-authorization only. You are not charged until you actively add funds or set up auto-recharge.
  </Accordion>

  <Accordion title="I signed up with Gmail, can I change to a business email?">
    Yes. Go to **Account Settings** and update your email. Once verified with a business domain, the gating restriction is removed even without a payment method.
  </Accordion>

  <Accordion title="What happens to my free credit after I add a payment method?">
    Your existing free credit remains available **plus** you receive an additional \$5 verification bonus. Your trial is also extended to 30 days.
  </Accordion>

  <Accordion title="I started creating a zone but didn't finish adding payment, is my config lost?">
    No. Your zone configuration is saved. When you return and successfully add a payment method, the zone creation completes automatically.
  </Accordion>
</AccordionGroup>
