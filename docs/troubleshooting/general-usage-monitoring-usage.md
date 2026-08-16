# Usage

> **Official Source**: [https://docs.brightdata.com/general/usage-monitoring/Usage](https://docs.brightdata.com/general/usage-monitoring/Usage)
> **Category**: `troubleshooting`

---

Manage and control Bright Data account usage across 4 zones, including disabling zones to pause billing and understanding pre-commit plan behavior.

<AccordionGroup>
  <Accordion title="How can I disable zones to control my account usage and balance?">
    You can easily disable any of your active zones if you want to stop using it for a while. Our billing system will not charge for days when your zones are disabled but rather only charge for the relative time they were active and for monthly precommit if applicable. You can activate them back at any given moment from your control panel.

    * Disabling all zones will also stop the pre-commit charges. However, as long as you have at least one active zone pre-commit plan will be applied and charged for.
    * Disabling Data center zones or residential zones with dedicated IPs will release all IPs to the pool

    <Note>
      If zone or a zone feature (e.g: city or country) was enabled and disabled on the same day, the charge calculation for the day will be as if it was enabled calculated according to the list price when traffic was consumed.
    </Note>
  </Accordion>

  <Accordion title="What happens when my usage goes beyond my minimum account commitment?">
    When you have used 85% of your account balance during a given month, you will receive an email requesting that you add funds to your account. If you do not add funds to your account, your account will continue to operate until you have used 100% of your account balance. Once you have reached usage amounting to 100% of your account balance, your account will be suspended unless additional funds are added. We recommend to turn on the "auto recharge" to keep your account active and working.
  </Accordion>

  <Accordion title="Will my funds roll over to the next month?">
    If your account remains in “active” status for the entire month, your monthly commitment will not roll over to the next month, regardless of whether your usage charges fell below the minimum commitment.\
    While in 'active' status, your usage and billing calculations start over fresh on the first day of each month according to your price plan and monthly commitment.
  </Accordion>

  <Accordion title="What is the limit for free zones?">
    Bright Data customers can open up to 50 zones free of charge, any additional zone will cost \$5/month.
  </Accordion>

  <Accordion title="Can I limit my daily usage?">
    Yes, in the [Zone](https://brightdata.com/cp/zones) page under the "Usage spent limit" column it is possible to limit your daily usage in 2 ways:

    * Bandwidth(bytes)
    * Money spent(Dollars)

    When you reach your daily limit, the zone is suspended, alerted, or both, depending on your configuration.

    <Note>
      The Zone limit is calculated every 15 minutes and will not take effect immediately so a Zone might go over it's limit by 15 minutes of usage.
    </Note>

    <img alt="usage-monitor.gif" />

    <Note>
      When the load is high statistics calculation may have a delay. In order to manually update the usage-statistics in your Zone, open the Zone by clicking on its name, go to the Statistics table, and press the `recalc` button near the desired date. Wait until the red "Loading..." notification at the top of the screen will disappear, and refresh the page. The stats will then be up-to-date.
    </Note>
  </Accordion>
</AccordionGroup>
