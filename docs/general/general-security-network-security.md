# Bright Data network security

> **Official Source**: [https://docs.brightdata.com/general/security/network-security](https://docs.brightdata.com/general/security/network-security)
> **Category**: `general`

---

How Bright Data secures its virtual ISP network across 4 layers: registration requirements, DDoS prevention, domain denylisting and traffic monitoring.

Most of the traffic that goes through both a regular ISP and a virtual ISP is encrypted with an SSL tunnel so its content is not visible to the ISP. Due to this the methods to secure the network and prevent illegal activities available to ISPs are limited and are mostly targeted at large scale DDoS prevention and domain denylists. However at Bright Data we do a lot more:

| Element                                                                                             | Bright Data Virtual ISP         | Regular ISP |
| --------------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| Requires registration                                                                               | Yes                             | Yes         |
| Requires payment method                                                                             | Yes                             | Yes         |
| Methods and procedures for reporting abuse                                                          | Yes                             | Yes         |
| Online DDoS detection                                                                               | Yes                             | Yes         |
| Full block of the most popular DDoS methods <sup>[2](#myfootnote2)</sup>                            | Yes                             | No          |
| KYC procedure per customer                                                                          | Yes                             | No          |
| Compliance alert if customer starts targeting domains not reported during KYC                       | Yes                             | No          |
| Deploy active blocks for Ad frauds, fake reviews, fake likes, fake account creations, spamming, etc | Yes<sup>[1](#myfootnote1)</sup> | No          |
| Block service level abuse or attack with non web traffic <sup>[3](#myfootnote3)</sup>               | Yes                             | No          |

***

> **Bottom line**\
> Bright Data virtual ISP network is much safer and less likely to be used for attacks and abuse than a regular ISP.

<Warning>
  Bright Data does not allow using its products and systems to render any network resource unavailable to its intended users, including, without limitation, via Denial-of-Service (**DoS**) or Distributed Denial-of-Service (**DDoS**) attack
</Warning>

***

<sub><a name="myfootnote1">1</a>: Applied to 30% of the traffic and planned to reach > 90% by end of 2022</sub><br />
<sub><a name="myfootnote2">2</a>: Methods that were used in the top 90% of DDoS attacks of 2021: UDP fragmentation, DNS reflection, UDP volumetric, LDAP reflection, DNS query, NTP reflection, ICMP (volumetric),</sub><br />
<sub><a name="myfootnote3">3</a>: Non web traffic is any traffic that is not HTTP protocol or targeting ports different from the standard HTTP ports of `80/443`.</sub>
