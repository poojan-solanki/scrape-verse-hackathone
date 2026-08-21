# Google Workspace SSO setup

> **Official Source**: [https://docs.brightdata.com/general/authentication/How_to_set_up_SSO_with_Google_Workspace_in_Bright_Data](https://docs.brightdata.com/general/authentication/How_to_set_up_SSO_with_Google_Workspace_in_Bright_Data)
> **Category**: `api-reference`

---

Configure Google Workspace OIDC SSO for Bright Data via a Google Cloud Console OAuth 2.0 client ID. Manual provisioning, hd-claim domain enforcement.

This guide explains how to set up Google Workspace SSO for Bright Data using OIDC, with the OAuth client ID created in the Google Cloud Console and users provisioned manually in the Bright Data Control Panel.

<Note>
  Google Workspace SSO for Bright Data is configured in the **Google Cloud Console** (`console.cloud.google.com`), not the Google Workspace Admin console. This is a separate feature from the public **Continue with Google** sign-in button.
</Note>

**Requirements**

* A Google Cloud project linked to your Google Workspace organization, with permission to configure the OAuth consent screen and create OAuth client IDs (typically a project owner or editor)
* A Bright Data account with admin permission
* All Bright Data users who will sign in via SSO must already exist in the Bright Data Control Panel under **Account Settings → Users**. Bright Data Google Workspace SSO uses manual provisioning. There is no SCIM or JIT provisioning.

<Warning>
  **Enforced Google Workspace SSO disables password-based login.**

  When Google Workspace SSO is enforced for your organization, password-based login and password reset emails are disabled for all users on the account. Users must sign in via Google. Contact your IT / Workspace administrator if access issues arise.
</Warning>

## Configure the OAuth consent screen

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/) with an account that has access to your Google Workspace organization's project.
2. In the left navigation, go to **APIs & Services → OAuth consent screen**.
3. Set **User type** to **Internal** so only members of your Workspace can sign in.
4. Fill in the required fields (app name, user support email, developer contact information).
5. Save.

## Create the OAuth client ID

6. In the Google Cloud Console, go to **APIs & Services → Credentials**.
7. Click **Create Credentials → OAuth client ID**.
8. Set **Application type** to **Web application**.
9. Name the client. We recommend `Bright Data Control Panel`.
10. Leave **Authorized redirect URIs** empty for now. You will paste in the Bright Data redirect URI in the next section.
11. Click **Create**. Google displays a dialog with your **Client ID** and **Client Secret**. Copy both values.

## Configure Bright Data

12. In a new tab, open the Bright Data [Control Panel](https://brightdata.com/cp/setting) and go to **Account Settings → Passwords & authentication**.
13. Under **Configure Single Sign-On**, click **Google Workspace**.
14. In the dialog, paste:
    * **Client ID** from step 11
    * **Client Secret** from step 11
    * **Workspace Domain**. The primary domain of your Google Workspace (for example, `yourcompany.com`).
15. Copy the read-only **Sign-in redirect URI** displayed in the dialog. It has the form `https://brightdata.com/users/auth/google_workspace/<customer_id>/done`.

## Paste the redirect URI back into Google

16. Return to the Google Cloud Console OAuth client ID you created in step 7.
17. Under **Authorized redirect URIs**, click **Add URI** and paste the **Sign-in redirect URI** from step 15.
18. Click **Save**.

## Activate and test

19. Return to the Bright Data Control Panel **Google Workspace** dialog.
20. Click **Activate**.
21. Test by signing out of Bright Data and signing back in via Google Workspace SSO. Use an account whose email is present in **both** your Google Workspace **and** the Bright Data Control Panel (**Account Settings → Users**).

## Add users for SSO sign-in

Bright Data Google Workspace SSO uses **manual provisioning**. There is no SCIM or JIT user creation. Before a user can sign in:

1. In the Bright Data Control Panel, go to **Account Settings → Users**.
2. Add the user's email address. The email must match the user's primary Google Workspace email.
3. Set the user's role.

When that user signs in via Google Workspace SSO for the first time, Bright Data creates the user record using the pre-added email.

## What else to know

* The OAuth consent screen **must** be set to **Internal** user type. An **External** consent screen would allow any Google account to attempt sign-in.
* The **Workspace Domain** field enforces the OIDC `hd` (hosted domain) claim. Only users whose Google account belongs to the configured Workspace Domain will succeed.
* Google Workspace SSO is a **separate feature** from the public **Continue with Google** sign-in button. They use different client IDs, redirect URIs, and provisioning flows. See [Google OAuth 2.0](/general/authentication/How_to_set_up_SSO_with_Okta_in_Bright_Data#google-oauth-20).
* If you rotate the Client Secret in Google Cloud Console, update it in the Bright Data dialog as well. Otherwise sign-in fails with an `invalid_client` error.
* The Sign-in redirect URI must match exactly between the Bright Data dialog and the Authorized redirect URIs list in Google Cloud Console. Mismatches return a `redirect_uri_mismatch` error.

***

## SSO technical reference

For the full enterprise SSO technical reference, including OIDC parameters and a comparison of provisioning methods across all supported identity providers, see the [SSO technical reference](/general/authentication/How_to_set_up_SSO_with_Okta_in_Bright_Data#sso-technical-reference) on the Okta SSO page.

### Google Workspace-specific parameters

| Parameter                 | Value                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Protocol                  | OpenID Connect (OIDC)                                                                                      |
| Application type          | Web application, created in Google Cloud Console → APIs & Services → Credentials                           |
| Required scopes           | `openid profile email`                                                                                     |
| User identifier           | `email` claim                                                                                              |
| Hosted domain enforcement | The `hd` claim is validated on every callback. Only emails from the configured Workspace Domain succeed.   |
| OAuth consent screen      | Must be **Internal** user type                                                                             |
| Provisioning              | Manual. Pre-add the user in Bright Data Control Panel (**Account Settings → Users**) before first sign-in. |
