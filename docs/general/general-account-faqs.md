# Account management FAQs

> **Official Source**: [https://docs.brightdata.com/general/account/faqs](https://docs.brightdata.com/general/account/faqs)
> **Category**: `general`

---

FAQs on Bright Data account management across 4 topics: how to re-verify, delete your account, and manage subscriptions on the platform.

<AccordionGroup>
  <Accordion title="How do I re-verify my account to clear a billing issue?">
    There are certain requirements that must be met before you’re allowed to deactivate or delete your Bright Data account. If you are unable to deactivate your account, please make sure all of the following conditions are satisfied:

    * **You must be the account owner:** Only the person who originally opened the account (the "owner") has the ability to delete it.
    * **It is not a Bright Data internal account:** (This is mostly relevant to internal use and not regular customers.)
    * **All bills must be paid:** Your account must have no outstanding payments or unpaid invoices.
    * **Real balance is exactly zero:** Your account’s real balance should be exactly \$0, no positive or negative balances. Note: Bonuses are not counted toward your real balance. Credits, often considered as a "loan" in some cases, may be treated differently; ensure your real balance is zero according to your billing section.
    * **No active long-term subscriptions (LTS):** If you have an ongoing LTS, you must cancel or complete it before deactivating your account.
    * **No monthly commitments:** Any monthly service commitments must be completed or canceled.
    * **No pending costs:** Your account should have no pending or unbilled usage ("pending costs"). For clarification of what qualifies as pending costs, please check your billing section or contact our support.

    If you are the account owner and you have met all the above criteria but still cannot deactivate your account, please contact our support team for further assistance.If your account was blocked, you will immediately receive an email explaining how to resolve the issue. Contact your dedicated account manager or Bright Data's compliance team at [compliance@brightdata.com](mailto:compliance@brightdata.com). To reinstate your blocked account, you will need to provide the following:

    <Tabs>
      <Tab title="Registered Companies">
        * A company registration form
        * A photo of the flagged payment method
      </Tab>

      <Tab title="Non Registered Companies">
        * Photo ID, driver's license, or passport
        * A photo of the flagged payment method
      </Tab>
    </Tabs>
  </Accordion>

  <Accordion title="Why was my account is suspended due to billing issues?">
    Bright Data may suspend your account (which prevents access to any zones in it) due to billing issues for one of the following reasons:

    * A discrepancy between payment method and personal details
    * The user has logged in from a country that differs from where the credit card is from
    * Too many attempts to process a declined payment
    * Failure to authenticate a credit card payment using 3D secure

    To enable your account again and exit the suspension state, review your billing details and fix missing or incorrect information. Once billing is resumed, your account will be active again automatically. If from some reason it doesn't - contact your account manager.
  </Accordion>

  <Accordion title="Why was my account is disabled?">
    Bright Data disables (note: disabled account differs from a suspended account) accounts that have been idle for 12 months. To re-enable your account you need to reach out to our staff, either through the Help & Support section in the control panel.
  </Accordion>

  <Accordion title="How can I set up a password for my account?">
    * Visit [https://brightdata.com/cp/setting/auth](https://brightdata.com/cp/setting/auth).
    * In the "Setup a password" section, enter your desired password.
    * Ensure your password includes digits, uppercase and lowercase letters, and at least one special character.
    * Confirm your password by re-entering it.
    * Click "Save password."
    * If prompted, enter your 2FA code to verify the action.
  </Accordion>

  <Accordion title="Why am I not receiving a password reset email?">
    <Note>
      If your organization has configured **enforced SSO** (via Microsoft Entra ID, Okta, or Google Workspace), password reset emails are **not** sent. Password-based authentication is disabled for accounts with enforced SSO.

      Sign in through your organization's identity provider instead:

      * **Microsoft Entra ID**: enter your email on the Bright Data login page; you'll be redirected to Entra automatically.
      * **Okta**: sign in via your Okta dashboard or the Bright Data Okta tile.
      * **Google Workspace**: use the "Sign in with Google" option on the Bright Data login page.

      Contact your account administrator if you need access restored. See also:

      * [Set up Azure SSO (Entra ID) with Bright Data](/general/authentication/How_to_set_up_Azure_SSO_Entra_ID_with_Bright_Data)
      * [Set up Okta SSO with Bright Data](/general/authentication/How_to_set_up_SSO_with_Okta_in_Bright_Data)
      * [Set up SSO with Google Workspace in Bright Data](/general/authentication/How_to_set_up_SSO_with_Google_Workspace_in_Bright_Data)
    </Note>

    If your account does **not** have enforced SSO and you're still not receiving a reset email:

    * Check your spam/junk folder.
    * Verify the email address on file at [Account settings → Profile](https://brightdata.com/cp/setting/customer_details).
    * Make sure your email provider isn't rate-limiting or blocking mail from `sendgrid.net` / Bright Data domains.
    * Contact [Bright Data support](https://brightdata.com/contact) if the issue persists.
  </Accordion>

  <Accordion title="How to add users to the invoice recipients list?">
    To add an email address to invoice recipients list, please follow the below guide

    <Steps>
      <Step title="Click the &#x22;Billing&#x22; button on the Control Panel sidebar" />

      <Step title="Click on &#x22;More ...&#x22; button on the top" />

      <Step title="In the opened menu, select &#x22;Invoice recipients&#x22;">
        <Frame>
          <img alt="invoice_recipients_1.png" />
        </Frame>
      </Step>

      <Step title="Inside the opened &#x22;Invoice recipients&#x22; screen, click on the &#x22;+ Add new recipient&#x22; button button">
        <Frame>
          <img alt="invoice_recipients_2.png" />
        </Frame>
      </Step>

      <Step title="Add name and email address" />

      <Step title="Click on the &#x22;Add&#x22; button">
        <Frame>
          <img alt="invoice_recipients_3.png" />
        </Frame>
      </Step>
    </Steps>
  </Accordion>

  <Accordion title="What if my account is not in “active” status for the entire month?">
    If you have remaining funds in your balance during a month in which you were inactive, you will not lose your balance, but will be charged to bring that balance up to the minimum monthly commitment on the 1st day of the next month.

    <Frame>
      <img alt="suspend-account.gif" />
    </Frame>
  </Accordion>

  <Accordion title="How can I prevent suspension of my account?">
    If your account suspended due to insuffecient funds, you can always charge funds to your account and the suspension will be removed immediately.

    To ensure that your account is never suspended, we highly recommend that you use our automatic recharging option. It can be activated in the “billing” section of your account and ensures uninterrupted service. Auto recharge starts to work when your available balance drops below 85% of the total account balance. The amount set is entirely up to you and can be of any denomination. You can find the auto recharge section [here](https://brightdata.com/cp/billing/settings).

    <Frame>
      <img alt="billing.png" />

      <img alt="payment-settings.png" />

      <img alt="confirm.png" />
    </Frame>
  </Accordion>

  <Accordion title="How can I invite users to my account?">
    To add users to your account follow the instructions:

    1. Navigate to the [Settings page](https://brightdata.com/cp/setting/users)
    2. Click the "New User" button to initiate the user addition process.
    3. Enter the details of the user you want to invite, such as their name and email address.
    4. Choose a permission level for the user from the following options:
       * Admin: Grants access to the entire account, including all settings and configurations.
       * Finance: Limits access to billing and financial pages only.
       * Ops: Provides access to the products but restricts billing access.
       * Limit: Allows the user to modify zone passwords and manage IP allowlists/denylists.
       * User: Grants API usage access without access to billing or product pages.
    5. Confirm and Send Invite: Review the details, confirm the permissions, and send the invite.

    The invitee will receive an email with instructions to join and access the account according to their permission level.

    Once added, the new user will have access to the account according to the granted permission. You can also edit the permissions later if needed.
  </Accordion>

  <Accordion title="Why can't I deactivate my account?">
    There are certain requirements that must be met before you’re allowed to deactivate or delete your Bright Data account. If you are unable to deactivate your account, please make sure all of the following conditions are satisfied:

    * **You must be the account owner:** Only the person who originally opened the account (the "owner") has the ability to delete it.
    * **All bills must be paid:** Your account must have no outstanding payments or unpaid invoices.
    * **Real balance is exactly zero:** Your account’s real balance should be exactly \$0, no positive or negative balances. Note: Bonuses are not counted toward your real balance. Credits, often considered as a "loan" in some cases, may be treated differently; ensure your real balance is zero according to your billing section.
    * **No active long-term subscriptions (LTS):** If you have an ongoing LTS, you must cancel or complete it before deactivating your account.
    * **No monthly commitments:** Any monthly service commitments must be completed or canceled.
    * **No pending costs:** Your account should have no pending or unbilled usage ("pending costs"). For clarification of what qualifies as pending costs, please check your billing section or contact our support.

    If you are the account owner and you have met all the above criteria but still cannot deactivate your account, please contact our support team for further assistance.
  </Accordion>
</AccordionGroup>
