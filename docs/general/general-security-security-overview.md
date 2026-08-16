# Security & compliance

> **Official Source**: [https://docs.brightdata.com/general/security/security-overview](https://docs.brightdata.com/general/security/security-overview)
> **Category**: `general`

---

Bright Data security and compliance: ISO 27001, SOC 2, regular penetration testing and encryption, covering MCP server, Browser API and all Bright Data APIs.

<Note>
  All three ISO certifications are explicitly scoped to *"a public web data collection platform designed for high-scale collection, automation, and AI agent / RAG systems for web data access."* This directly covers use of Bright Data's MCP Server, Browser API, and all APIs in agentic workflows.
</Note>

## Certifications at a Glance

<CardGroup>
  <Card title="ISO/IEC 27001:2022" icon="certificate">
    Information Security Management System (ISMS)
    **Valid until:** Aug 11, 2028
    **No.** 1126059 - SII–QCD (ANAB Accredited)
  </Card>

  <Card title="ISO/IEC 27017:2015" icon="cloud">
    Cloud Security Controls
    **Valid until:** Jul 13, 2028
    **No.** 1125290 - SII–QCD
  </Card>

  <Card title="ISO/IEC 27018:2019" icon="user-shield">
    Protection of PII in Public Clouds
    **Valid until:** Jul 13, 2028
    **No.** 1125291 - SII–QCD
  </Card>

  <Card title="SOC 2 Type II" icon="file-shield">
    Available under NDA
    **Period:** Jun 1, 2024 – May 31, 2025
    Audited by Deloitte Global Network
  </Card>

  <Card title="SOC 3" icon="file-check">
    Publicly downloadable
    **Period:** Jun 1, 2024 – May 31, 2025
    Audited by Brightman Almagor Zohar & Co.
  </Card>

  <Card title="CSA STAR" icon="star">
    Cloud Security Alliance Registry
    [View listing →](https://cloudsecurityalliance.org/star/registry/bright-data/)
  </Card>
</CardGroup>

***

## How independent audits work

### SOC 3 Report - Deloitte

Conducted by **Brightman Almagor Zohar & Co., a firm in the Deloitte Global Network**, covering **June 1, 2024 – May 31, 2025**.

The audit examined controls across four trust service criteria:

<CardGroup>
  <Card title="Security" icon="lock">
    Protection against unauthorized access to systems and data
  </Card>

  <Card title="Availability" icon="signal">
    Uptime commitments and disaster recovery readiness
  </Card>

  <Card title="Confidentiality" icon="eye-slash">
    Data classification, encryption, and access controls
  </Card>

  <Card title="Privacy" icon="user-lock">
    GDPR/CCPA compliance and PII handling procedures
  </Card>
</CardGroup>

> *"In our opinion, management's assertion that the controls within the Service Organization's system were effective... to provide reasonable assurance that Bright Data's service commitments and system requirements were achieved based on the applicable trust services criteria is fairly stated, in all material respects."*
>
> * Brightman Almagor Zohar & Co. (Deloitte Global Network)

<Card title="Download SOC 3 Report (PDF)" icon="download" href="https://brightdata.com/static/Bright_Data_SOC_3_June_1_2024_May_31_2025_Updated.pdf">
  Full SOC 3 report covering June 1, 2024 – May 31, 2025
</Card>

***

### Penetration Test - Skylight Cyber Security

An independent penetration test and source code review was conducted by **Skylight Cyber Security Pty Ltd** (May–June 2025), covering the full Bright Data product surface.

**Products tested:**

| Product                                          | Coverage |
| ------------------------------------------------ | -------- |
| Control Panel & Public APIs                      | Full     |
| Datacenter, Residential, Mobile, and ISP Proxies | Full     |
| SERP API and Web Unlocker API                    | Full     |
| Web Scraper IDE, Marketplace, and API            | Full     |
| Web Archive API                                  | Full     |
| Dataset Marketplace and Custom Dataset API       | Full     |

**Three threat scenarios were in scope:**

1. Unauthenticated attacker attempting to compromise the entire platform
2. Malicious administrator attempting internal compromise
3. Unauthorized account access or proxy misuse

<Info>
  **Result:** All Critical and High severity findings were remediated. Skylight re-tested to confirm the findings were addressed and the risk was mitigated.
</Info>

<Card title="Download Penetration Test Attestation" icon="file-shield" href="https://brightdata.com/trustcenter">
  Attestation letter from Skylight Cyber Security Pty Ltd
</Card>

***

## How data encryption works

| Layer                | Standard                                           |
| -------------------- | -------------------------------------------------- |
| **Data in transit**  | TLS 1.3 (minimum TLS 1.2) with modern cipher suite |
| **Data at rest**     | AES-256 or better across all infrastructure        |
| **Credentials**      | Hashed and salted using a modern hash function     |
| **Database backups** | Encrypted; daily full backups, monthly snapshots   |
| **Backup storage**   | AWS Backup; snapshots distributed across locations |

***

## Infrastructure & Availability

<CardGroup>
  <Card title="Cloud Provider" icon="aws">
    Amazon Web Services (AWS), multi-Availability Zone deployment
  </Card>

  <Card title="Disaster Recovery" icon="rotate">
    DR site on AWS EU; annual large-scale DR drills; RCA for all high-severity incidents
  </Card>

  <Card title="Backup Frequency" icon="database">
    Full database backup every 5 minutes; daily AWS snapshots; critical backups on Microsoft Azure
  </Card>

  <Card title="DDoS & Monitoring" icon="shield">
    Active DDoS mitigation and rate limiting; continuous firewall monitoring by dedicated InfoSec team
  </Card>
</CardGroup>

***

## Access Control & Identity

| Control                     | Implementation                                                   |
| --------------------------- | ---------------------------------------------------------------- |
| **Least privilege**         | All IAM roles scoped to minimum required permissions             |
| **MFA**                     | Required for all AWS platform access by employees                |
| **Customer authentication** | Strong password (min. 8 chars) + email verification              |
| **RBAC**                    | Role-Based Access Control with regular user access reviews       |
| **Third-party access**      | Re-authorized annually; requires signed NDA and InfoSec approval |
| **Remote access**           | VPN with encryption required; host-check enforced                |

***

## Application & Development Security

* **CI/CD pipeline** - Controlled pipeline with end-to-end and unit testing, including authorization testing
* **Secure SDLC** - Based on the OWASP Top 10 framework; security requirements defined before development begins; annual developer security training
* **Change management** - Formal review and approval process for all infrastructure and application changes, including security risk evaluation at R\&D review stage
* **Third-party risk (TPRM)** - All vendors mapped and classified by risk tier; high-risk suppliers require security questionnaire and InfoSec sign-off before contract
* **Bug bounty** - Managed private program for responsible disclosure by independent security researchers

***

## Privacy & Regulatory Compliance

| Regulation / Standard                 | Status                                                 |
| ------------------------------------- | ------------------------------------------------------ |
| GDPR (EU)                             | ✅ Compliant - DPIAs conducted as part of product flows |
| CCPA (California)                     | ✅ Compliant                                            |
| UK Data Protection Act                | ✅ Compliant                                            |
| Virginia Privacy Law                  | ✅ Compliant                                            |
| Israeli Privacy Protection Law (1981) | ✅ Compliant                                            |
| ISO 27001:2022                        | ✅ Certified                                            |
| CSA STAR                              | ✅ Listed                                               |
| PCI DSS                               | ✅ Working compliance                                   |

* **Privacy policy** reviewed and updated annually - [brightdata.com/privacy](https://brightdata.com/privacy)
* **Customer data deletion** available at any time upon request
* **Data selling** - Bright Data does not sell or license customer data to any third party

***

## Information Security Policy

Bright Data maintains a formal, board-approved Information Security Policy aligned with **NIST, ISO 27001:2022, ISO 27017, and ISO 27018**.

<AccordionGroup>
  <Accordion title="Identity & Access Management">
    IAM policies enforcing least-privilege access across all systems, with regular audits and annual reviews.
  </Accordion>

  <Accordion title="Network & Encryption">
    Network segmentation, TLS 1.3 in transit, AES-256 at rest, and modern cipher suites throughout.
  </Accordion>

  <Accordion title="Endpoint & Server Hardening">
    CIS Benchmarks applied to all endpoints and servers.
  </Accordion>

  <Accordion title="Secure SDLC">
    Security requirements defined before development begins; OWASP Top 10 framework; annual developer training.
  </Accordion>

  <Accordion title="Third-Party & Vendor Security">
    All vendors classified by risk tier; high-risk suppliers require security questionnaire and InfoSec sign-off.
  </Accordion>

  <Accordion title="Data Classification">
    Three-tier classification: Sensitive, PII, and Public - with controls applied per tier.
  </Accordion>

  <Accordion title="Incident Response & Business Continuity">
    Incident reporting, RCA for high-severity events, annual DR drills, and a formal BCP.
  </Accordion>
</AccordionGroup>

***

## Security for AI Agents & MCP Users

Bright Data's MCP Server and Browser API operate under the same certified security infrastructure described on this page.

<Warning>
  Always treat scraped web content as **untrusted input**. Validate and filter data before passing it to an LLM prompt to mitigate prompt injection risks.
</Warning>

**Recommended practices when using Bright Data in agentic workflows:**

<Steps>
  <Step title="Treat web content as untrusted">
    Validate and filter web data before passing it to an LLM prompt - this mitigates prompt injection attacks.
  </Step>

  <Step title="Use structured extraction tools">
    Prefer `web_data_*` tools where available - they return pre-validated, schema-consistent data.
  </Step>

  <Step title="Store credentials securely">
    Store API keys as environment variables. Never hardcode credentials in agent code or prompts.
  </Step>

  <Step title="Scope API key permissions">
    Use API key permission scoping (five levels available) to enforce least-privilege access from your agent.
  </Step>
</Steps>

***

## Certifications & Reports

<CardGroup>
  <Card title="ISO 27001 + 27017 + 27018 Certificates" icon="certificate" href="https://brightdata.com/static/ISO-270012022_ISO-27017_ISO-27018.pdf">
    All three ISO certificates in a single PDF
  </Card>

  <Card title="SOC 3 Report" icon="file-check" href="https://brightdata.com/static/Bright_Data_SOC_3_June_1_2024_May_31_2025_Updated.pdf">
    Public SOC 3 - Jun 1, 2024 – May 31, 2025
  </Card>

  <Card title="SOC 2 Type II Report" icon="file-shield" href="mailto:security@brightdata.com">
    Available under NDA upon request
  </Card>

  <Card title="Trust Center" icon="shield-check" href="https://brightdata.com/trustcenter">
    Penetration test attestation and live trust documentation
  </Card>

  <Card title="Privacy Policy" icon="user-shield" href="https://brightdata.com/privacy">
    Updated annually; GDPR & CCPA aligned
  </Card>

  <Card title="Security Vulnerability Reward Program" icon="bug" href="https://brightdata.com/security-vulnerabilities-reward-program">
    Responsible disclosure program for security researchers
  </Card>
</CardGroup>

***

## Frequently Asked Questions

<AccordionGroup>
  <Accordion title="Is Bright Data ISO 27001 certified?">
    Yes. Bright Data holds **ISO/IEC 27001:2022, ISO 27017, and ISO 27018** certifications, valid until August 11–13, 2028, issued by SII–QCD (ANAB Accredited, IAF & IQNET member).
  </Accordion>

  <Accordion title="Does Bright Data have a SOC 2 report?">
    Yes. Bright Data has a **SOC 2 Type II** report available under NDA, and a publicly downloadable **SOC 3** report audited by the Deloitte firm (Brightman Almagor Zohar & Co.).
  </Accordion>

  <Accordion title="Is Bright Data GDPR compliant?">
    Yes. Bright Data has undergone a comprehensive GDPR and CCPA compliance program, conducts Data Privacy Impact Assessments (DPIAs) as part of all product flows, and maintains a publicly available privacy policy updated annually.
  </Accordion>

  <Accordion title="Does Bright Data do penetration testing?">
    Yes. Annual penetration tests and source code reviews are performed by independent third-party security firms. The most recent test (Skylight Cyber Security, May–June 2025) left no Critical or High severity findings unresolved.
  </Accordion>

  <Accordion title="Is Bright Data's infrastructure encrypted?">
    Yes. All data is encrypted in transit (**TLS 1.3**) and at rest (**AES-256**). Database backups are encrypted and distributed across multiple cloud locations.
  </Accordion>

  <Accordion title="Is Bright Data safe for enterprise deployments?">
    Yes. Bright Data is trusted by Fortune 500 companies, academic institutions, and 15,000+ organizations worldwide. Its security posture is independently validated through ISO 27001/27017/27018 certification and an annual Deloitte SOC 2 Type II audit.
  </Accordion>

  <Accordion title="Is Bright Data's MCP Server covered by these certifications?">
    Yes. All ISO certifications are explicitly scoped to include AI agent and RAG system use cases for web data access, which covers the MCP Server, Browser API, and related products.
  </Accordion>
</AccordionGroup>

***

*For security inquiries: [security@brightdata.com](mailto:security@brightdata.com)*
*For enterprise compliance reviews: [Contact sales](https://brightdata.com/contact)*
