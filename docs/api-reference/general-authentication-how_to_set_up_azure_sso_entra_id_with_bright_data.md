# Azure Entra ID SSO setup

> **Official Source**: [https://docs.brightdata.com/general/authentication/How_to_set_up_Azure_SSO_Entra_ID_with_Bright_Data](https://docs.brightdata.com/general/authentication/How_to_set_up_Azure_SSO_Entra_ID_with_Bright_Data)
> **Category**: `api-reference`

---

Step-by-step guide to configuring Azure Entra ID (formerly Azure Active Directory) SSO and SCIM provisioning with Bright Data in 6 steps.

* Prepare application

* Setup SSO

* Setup SCIM provisioning

## How to prepare the application

* Go to [https://entra.microsoft.com/](https://entra.microsoft.com/) and log in to your account.

* Create Enterprise application:

<img alt="Microsoft Entra admin center with the Create Enterprise application button" />

* Click “Create your own application”

* Enter name of your application

* Select “Integrate any other application you don't find in the gallery (Non-gallery)”

* Click “Create”

<img alt="Entra Create your own application dialog with non-gallery option selected" />

## How to set up SSO

<Warning>
  **Enforced Entra SSO disables password-based login.**

  When Entra SSO is enforced for your organization, password-based login and password reset emails are disabled for all users on the account. Users must sign in via Microsoft Entra.

  * Entering an email address on the Bright Data login page automatically redirects the user to the Entra sign-in page.
  * After a successful Entra sign-in, the user is redirected back to Bright Data.
  * Password reset requests will **not** generate an email.
</Warning>

* Go to [https://brightdata.com](https://brightdata.com) and log in to your account.

* Choose Settings->Account settings->Passwords & authentication in left side menu and toggle Microsoft Entra ID (Azur AD) switch

<img alt="Bright Data Passwords and authentication settings with the Microsoft Entra ID toggle" />

* From “App registrations” view select your application.

* Copy “Application (client) ID” to “Client ID”

* Copy “Directory (tenant) ID” to “OAuth2 issuer (tenant)”

* Go to “Add a certificate or secret”

<img alt="Entra App registrations overview showing Application client ID and Directory tenant ID" />

* At secrets screen click “New client secret”

* Fill Description

* Click “Add”

<img alt="Entra Add a client secret dialog with Description and Add button" />

* Once secret is created copy secret value to “Client secret”.

* Copy “Sign-in redirect URI” to be used at next step

<img alt="Bright Data Entra ID dialog with Sign-in redirect URI to copy" />

* At “Authentication” screen click “Add platform” and select “Web”

<img alt="Entra Authentication screen with Add platform dialog and Web option" />

* Paste previously copied “Sign-in redirect URI” to the “Redirect URIs” and save settings by clicking “Configure”:

<img alt="Entra Configure Web platform dialog with Sign-in redirect URI pasted in" />

* Activate EntraID integration at BrighData control panel and test login:

<img alt="Bright Data Entra ID integration activated and ready for test login" />

## Setup SCIM provisioning

* Copy “Auth token” from SCIM section of BrightData EntraID settings:

<img alt="Bright Data Entra ID SCIM section showing the Auth token to copy" />

* Select your application from “Enterprise Applications” view and go to “Provisioning” settings:

<img alt="Entra Enterprise Applications view with Bright Data application selected" />

* Select “Provisioning” under “Manage” menu:

<img alt="Entra Manage menu with Provisioning option highlighted" />

* Select “Automatic” Provisioning Mode

* Fill “Tenant URL” with [https://brightdata.com/users/auth/scim](https://brightdata.com/users/auth/scim) value

* Fill “Secret Token” with previously copied value from BrightData control panel settings

* Test Connection. You should see successful message in top right corner
  Save Settings

<img alt="Entra Provisioning settings with Tenant URL and Secret Token fields filled in" />

* Return to “Overview” tab and click “Start provisioning”.

* You can test provisioning at “Provision on demand” page, but first assign your users to BrightData application at “Users and groups” page:

<img alt="Entra Users and groups page with users assigned to the Bright Data application" />

## Troubleshooting

<AccordionGroup>
  <Accordion title="What should a user do if they are not receiving a password reset email?">
    If your organization has enabled **enforced Entra SSO**, password reset emails are not sent, because password-based authentication is disabled on accounts with enforced SSO.

    To sign in:

    1. Go to the [Bright Data sign-in page](https://brightdata.com/cp).
    2. Enter the user's email address.
    3. The user will be automatically redirected to the Microsoft Entra sign-in page.
    4. After a successful Entra sign-in, the user is redirected back to Bright Data.

    If access issues persist, contact your organization's IT / Entra administrator. They manage the Entra SSO configuration on your company's side.
  </Accordion>

  <Accordion title="Why is a user redirected to a Microsoft login page they do not recognize?">
    This is expected behavior when Entra SSO is enforced. The Bright Data login page detects the email domain associated with your organization's Entra tenant and redirects the user to your configured Microsoft Entra sign-in page.
  </Accordion>
</AccordionGroup>
