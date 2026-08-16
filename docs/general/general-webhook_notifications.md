# Webhook notifications

> **Official Source**: [https://docs.brightdata.com/general/webhook_notifications](https://docs.brightdata.com/general/webhook_notifications)
> **Category**: `general`

---

Reference for every webhook notification event sent by Bright Data across 4 products, including event codes, categories and payload structure.

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Subject</th>
      <th>Product</th>
      <th>Body</th>
      <th>Event code</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Billing</td>
      <td>Account suspension due to insufficient funds</td>
      <td>N/A</td>
      <td>Your Bright Data account was suspended due to insufficient funds.</td>
      <td>1000 - Insufficient funds</td>
    </tr>

    <tr>
      <td>Billing</td>
      <td>Low balance</td>
      <td>N/A</td>
      <td>Your account balance is \$X and nearing its limit. Please recharge your account to avoid account suspension.</td>
      <td>1001 - Low balance</td>
    </tr>

    <tr>
      <td>Billing</td>
      <td>Auto recharge failed</td>
      <td>N/A</td>
      <td>Your payment method was declined and we were unable to add funds to your account using Auto-recharge. Please try again or use a different payment method.</td>
      <td>1002 - Auto recharge failed</td>
    </tr>

    <tr>
      <td>Compliance</td>
      <td>Account disabled due to TOS violation</td>
      <td>N/A</td>
      <td>We detected that your account has violated our TOS (Terms of Service). Please contact our Compliance team for more information: [compliance@brightdata.com](mailto:compliance@brightdata.com)</td>
      <td>2000 - Account disabled</td>
    </tr>

    <tr>
      <td>Compliance</td>
      <td>Account suspension due to validation fail</td>
      <td>N/A</td>
      <td>Your account has been suspended because it could not be validated. Contact your account manager for more information email.</td>
      <td>2001 - Account suspension due to validation fail</td>
    </tr>

    <tr>
      <td>Compliance</td>
      <td>New denylisted IPs</td>
      <td>N/A</td>
      <td>We have detected requests from suspicious IP addresses that are running through your zones. We have added these IPs to your Denylist.</td>
      <td>2002 - Denylisted IPs</td>
    </tr>

    <tr>
      <td>Network Health</td>
      <td>Web Unlocker API service disruption started</td>
      <td>Web Unlocker API</td>
      <td>Web Unlocker API is currently performing at a lower success rate for your targeted domains.</td>
      <td>4000 - Web Unlocker API service disruption start</td>
    </tr>

    <tr>
      <td>Network Health</td>
      <td>Web Unlocker API service disruption ended</td>
      <td>Web Unlocker API</td>
      <td>We have resolved the issue and Web Unlocker API is now showing high performance for your target domains.</td>
      <td>4001 - Web Unlocker API service disruption end</td>
    </tr>

    <tr>
      <td>Network Health</td>
      <td>Service disruption started</td>
      <td>Network</td>
      <td>Our network network is down. We are working on a fix and we will let you know as soon as it is up again.</td>
      <td>4002 - Outage start</td>
    </tr>

    <tr>
      <td>Network Health</td>
      <td>Service disruption ended</td>
      <td>Network</td>
      <td>We have fixed the issue and the insert network network is back up.</td>
      <td>4003 - Outage end</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>Scheduled IP replacement</td>
      <td>DC/ISP</td>
      <td>We are scheduling a change in the range of IPs in our DC and ISP networks on insert date and time add link to affected list (same as in email)</td>
      <td>5000 - Future IP replacement</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>IP replacement completed</td>
      <td>DC/ISP</td>
      <td>IP replacement was completed. add link to affected list (same as in email)</td>
      <td>5001 - IP replacement completed</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>Gips were released</td>
      <td>Residential/Mobile</td>
      <td>The following gips were released from your zone add link to affected list</td>
      <td>5004 - gips released</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>Gips were replaced</td>
      <td>Residential/Mobile</td>
      <td>The following gips were released from your zone and replaced with new ones add link to affected list</td>
      <td>5005 - gips were changed</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>Planned maintenance</td>
      <td>Any</td>
      <td>We are performing maintenance on XYZ that is scheduled for insert date and time.</td>
      <td>5002 - Future maintenance</td>
    </tr>

    <tr>
      <td>Maintenance</td>
      <td>Maintenance completed</td>
      <td>Any</td>
      <td>The maintenance on XYZ was completed.</td>
      <td>5003 - Maintenance completed</td>
    </tr>

    <tr>
      <td>TEST</td>
      <td>Test notification</td>
      <td>N/A</td>
      <td>This notification was sent from your control panel in order to test your webhook URL. If you can see this message it means it is working as expected</td>
      <td>9000 - Test notification</td>
    </tr>
  </tbody>
</table>
