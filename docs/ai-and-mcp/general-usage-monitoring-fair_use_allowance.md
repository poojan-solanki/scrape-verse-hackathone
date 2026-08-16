# Unlimited DC & ISP zones: fair use

> **Official Source**: [https://docs.brightdata.com/general/usage-monitoring/fair_use_allowance](https://docs.brightdata.com/general/usage-monitoring/fair_use_allowance)
> **Category**: `ai-and-mcp`

---

Fair use allowance limits for Bright Data Datacenter and ISP unlimited proxies. Effective 1 September 2025 with thresholds and enforcement rules listed.

<Note>
  **Fair use policy updated on 1-Sep-2025**
</Note>

## How fair use applies

Bright Data's fair use policy for unlimited zones includes a monthly allowance of 100GB per proxy (IP). The fair use allowance is the same for both shared and dedicated proxies.

### How fair use is calculated and what is its scope?

Fair use for unlimited proxies is calculated on the zone type level.

It means that all datacenter proxies are sharing their fair use, and all ISP proxies are sharing their fair use. The fair use is calculated monthly, based on the calendar date, from 1st of the month to its last day.

#### How do we calculate fair use?

We sum up all the unlimited proxies of the same zone type, and multiply by 100GB.

So if for example you have 10 proxies in zone `datacenter_zone1` and 5 proxies in `datacenter_zone2` your overall fair use will be 1,500 GB for datecenter fair use.

### Is fair use multiplier different for Datacenter and ISP?

No. Fair use is 100GB (one hundred giga bytes) per proxy (IP), datacenter or ISP.

#### Can one zones unused fair use can be accounted another zone?

Yes. You can load proxies in `zone a` and the fair use will be seen in `zone b`. However we do not recommend doing so ; as traffic will spread on less IPs which may cause performance degredation.

#### If I use shared proxies, do others' usage count towards my fair use?

Absolutely not. Only your traffic is counted towards your fair use.

#### What happens when I exceed my fair use?

We send email alerts when you reach 85% of your fair use and 100% of your fair use. We do not stop your operations, and you will be charged for the data over the fair use allowance with our current "Pay as you go" rate. We consider those charges, exceeding fair use, as "overcharges" and they are marked as such in your billing details.

#### When does the fair use recharge?

Each unlimited zone recharges with fair on the first on the calendar month.

#### How do I avoid overcharges?

In order to avoid overcharge:

1. Plan in advance your usage and purchase enough proxies to cover the fair use.
2. Track your usage and top-up your zone with additional proxies when needed to remain under the fair use.
3. Define zone limit which halts the zone on reaching some usage limit.

Bright Data offers affordable plans for unlimited proxies, we recommend having some additional allowance margins for unpredicted surges in bandwidth consumption, and avoid overcharges.

#### I already incurred overcharges, can I top-up (add proxies) my zones with proxies to reverse it?

Our fair use policy does not allow dismissal or reversal of overcharges once applied. If from some reason you think the overcharge was applied wrongfully, please contact our support and we will gladly assist.

#### I reduced the number of proxies in my zones, how does this impact my fair use allowance?

Every proxy you remove, will immediately reduce your fair use allowance by 100GB. Currently, we do not allow reductions, which will have your account charged with overcharge due to fair use allowance breach.

If you attempt to do that, our control panel will show an Error:

<Warning>
  `Error: Cannot reduce number of proxies below fair use.`
</Warning>

#### Does Bright Data offer unlimited residential proxies?

No.
