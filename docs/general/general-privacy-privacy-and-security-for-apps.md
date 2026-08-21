# App privacy and security

> **Official Source**: [https://docs.brightdata.com/general/privacy/privacy-and-security-for-apps](https://docs.brightdata.com/general/privacy/privacy-and-security-for-apps)
> **Category**: `general`

---

How Bright Data ensures the privacy and security of users who install its apps across 3 protections: open-source SDK, sandboxing and user controls.

Bright Data takes the privacy and security of its users very seriously and has internal procedures and tests aimed specifically at this area that run 24/7. Aside from this we do several external audits a year that include all security and privacy aspects of the software running on the user's devices. However this wasn't enough for us. We want the security and privacy of our users to be clear, transparent and self-evident. We are working on these drastic steps that will be completed by the end of 2021:

* Making the Bright Peer SDK open source. Anyone can look at the code, breakdown our production releases and compare the code and validate it's identical. Every internal release we do is pushed out to open source for the public eye.
* Running the Bright SDK in a sandbox environment. No matter what privileges the user installs the Bright App with, it will always be constrained by the sandbox it's running in. So even if given root access it will not be able to actually collect anything from the user\`s private data.
* Adding full user control. Bright app users can now fully control when their devices will be available as peers on the network, what bandwidth will be allocated to it, resource levels and even low level control over the target domains that are allowed through the device. Everything is transparent and configurable.
* Collaboration with a known security company to secure the network traffic going through the residential network. Every target domain goes through real time updated denylists and sites that are marked as malicious, containing malware or any other illegal content are blocked before any traffic can be sent through the user\`s device
