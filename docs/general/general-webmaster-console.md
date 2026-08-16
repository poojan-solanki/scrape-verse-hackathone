# Webmaster console

> **Official Source**: [https://docs.brightdata.com/general/webmaster-console](https://docs.brightdata.com/general/webmaster-console)
> **Category**: `general`

---

Configure BrightBot crawl behavior for your domains with a collectors.txt file in the Bright Data Webmaster Console. Allow IP range 82.97.199.0/24 for access.

## General

<Info>
  To enable BrightBot to function with your domain, make sure your firewall allows requests from the range **82.97.199.0/24** and the **Brightbot 1.0** User-Agent.

  *Note: If your firewall blocks BrightBot requests to allowed URLs, Bright Data temporarily suspends sending the BrightBot User-Agent to your domain for 7 days.*
</Info>

<Warning>
  **Network support:** Currently, the BrightBot User-Agent and `collectors.txt` rules are only applied to traffic routed through the **Web Unlocker**. Browser API and browser-based Data Collector jobs are not currently supported.
</Warning>

| Inputs                           | Description                                                                                                                                                                                                                      | Format                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Personal Information** (`pii`) | Endpoints containing information related to an identified or identifiable natural person. BrightBot will actively block collection from these endpoints.                                                                         | `URL / Document Object` |
| **Disallow** (`disallow`)        | List interactive endpoint patterns such as ad links, likes, reviews and posts. This instruction enables BrightBot to block these endpoints, aligning with Bright Data guidelines that prohibit data collection from these areas. | `URL / Document Object` |
| **Copyright** (`copyright`)      | Endpoints containing copyrighted materials. BrightBot will actively block collection from these endpoints.                                                                                                                       | `URL / Document Object` |
| **Private** (`private`)          | Internal or private endpoints. BrightBot will actively block collection from these endpoints.                                                                                                                                    | `URL / Document Object` |

## Examples

<CodeGroup>
  ```txt collectors.txt theme={null}
  // Optional, describe domain name
  service: example.com

  // Endpoints containing information related to an identified or identifiable natural person.
  pii: /personal_info_1
  pii: /personal_info_2

  // List interactive endpoint patterns such as ad links, likes, reviews and posts.
  disallow: /disallow_1
  disallow: /disallow_2

  // Endpoints containing copyrighted materials.
  copyright: /copyright_1
  copyright: /copyright_2

  // Wildcards (*) and end-of-string ($) characters function exactly like regular expressions across all directives.
  private: /*secret
  private: /private_2
  private: /private_3/*/private$
  ```
</CodeGroup>
