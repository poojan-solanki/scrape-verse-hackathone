# Set up webhooks for Web Unlocker API

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/setup-webhooks](https://docs.brightdata.com/scraping-automation/web-unlocker/setup-webhooks)
> **Category**: `scraping-automation`

---

Configure webhooks for the Bright Data Web Unlocker API (98% success rate) to receive HTTP callbacks when async jobs complete, instead of polling for results.

<AccordionGroup>
  <Accordion title="Understand how webhooks work" icon="lightbulb">
    When using [asynchronous requests](/api-reference/rest-api/unlocker/request), the Web Unlocker API processes jobs in the background.

    Instead of polling for results, you can configure a webhook. A webhook is an HTTP endpoint that Bright Data calls when your job is completed.

    The flow looks like this:

    1. Send async request
    2. Receive `response_id`
    3. Bright Data processes the request
    4. Bright Data sends a notification to your `webhook_url`
    5. Use the `response_id` to retrieve the result

    <Tip>
      Webhooks notify you when a job is ready, they do not include the full response body.
    </Tip>
  </Accordion>

  <Accordion title="Prerequisites" icon="list-check">
    The following are required:

    * [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs)
    * [A Bright Data API key](/api-reference/authentication#how-do-i-generate-a-new-api-key)
    * [An active Web Unlocker API zone](https://brightdata.com/cp/web_access)
    * [Basic knowledge of cURL](https://curl.se/)
    * [A working asynchronous request setup using the Web Unlocker API](/scraping-automation/web-unlocker/your-first-async-request)
  </Accordion>
</AccordionGroup>

<Steps>
  <Step title="Create a webhook endpoint">
    You need a publicly accessible URL to receive webhook notifications.

    <Tip>
      For demonstration purposes, we'll use [webhook.site](https://webhook.site).

      It instantly generates a temporary webhook URL and lets you inspect incoming requests in real time, including headers, query parameters, and payloads.
    </Tip>
  </Step>

  <Step title="Send an async request with webhook">
    Add the `webhook_url` parameter to your request:

    <CodeGroup>
      ```bash cURL theme={null}
      curl --request POST \
        --url 'https://api.brightdata.com/unblocker/req?zone=<unlocker-zone-name>' \
        --header 'Authorization: Bearer <API_KEY>' \
        --header 'Content-Type: application/json' \
        --data '{
          "url": "https://geo.brdtest.com/welcome.txt",
          "webhook_url": "https://webhook.site/<webhook-url-id>"
        }'
      ```

      ```python Python theme={null}
        import requests

        url = "https://api.brightdata.com/unblocker/req?zone=<unlocker-zone-name>"

        payload = {
            "url": "https://geo.brdtest.com/welcome.txt",
            "webhook_url": "https://webhook.site/<webhook-url-id>",
        }
        headers = {
            "Authorization": "Bearer <API_KEY>",
            "Content-Type": "application/json"
        }

        response = requests.post(url, json=payload, headers=headers)

        print(response.text)
      ```

      ```js Node.js theme={null}
      const options = {
        method: 'POST',
        headers: {Authorization: 'Bearer <API_KEY>', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          url: 'https://geo.brdtest.com/welcome.txt',
          webhook_url: 'https://webhook.site/<webhook-url-id>',
        })
      };

      fetch('https://api.brightdata.com/unblocker/req?zone=<unlocker-zone-name>', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
      ```
    </CodeGroup>

    <Callout icon="key">
      Replace `<API_KEY>`, `<unlocker-zone-name>`, `<webhook-url-id>` with your actual values.
    </Callout>
  </Step>

  <Step title="Receive webhook notification">
    Once the request is processed, Bright Data sends a POST request to your `webhook_url`.

    ```json theme={null}
    // A typical webhook request includes:
    {
      "status": 200,
      "response_id": "<RESPONSE_ID>",
      "request_url": "https://geo.brdtest.com/welcome.txt"
    }
    ```

    If you're using webhook.site, you can inspect the incoming request, including payload fields and headers (e.g., `user-agent`).

    <Tip>
      This webhook notifies you that the request has completed.
    </Tip>
  </Step>

  <Step title={<>Retrieve the result using <code>response_id</code></>}>
    Use the `response_id` from the webhook to fetch the actual result:

    ```sh wrap theme={null}
    curl --silent --compressed \
      "https://api.brightdata.com/unblocker/get_result?response_id=<RESPONSE_ID>" \
      -H "Authorization: Bearer <API_KEY>" \
      -o results.json
    ```

    Then inspect the output:

    ```sh theme={null}
    cat results.json
    ```

    The file will contain the full response, including headers and body.
  </Step>

  <Step title={<><Badge>Optional</Badge> Attach custom data to webhook</>}>
    You can include custom metadata using `webhook_data`. When using `webhook_method` as `POST`, this data will be sent in the request body of the webhook notification.

    ```bash wrap theme={null}
    curl --request POST \
      --url 'https://api.brightdata.com/unblocker/req?zone=web_unlocker3' \
      --header 'Authorization: Bearer <API_KEY>' \
      --header 'Content-Type: application/json' \
      --data '{
        "url": "https://geo.brdtest.com/welcome.txt",
        "webhook_url": "https://webhook.site/a14a55b3-c3cc-4890-84f2-eeebe4b264a4",
        "webhook_method": "POST",
        "webhook_data": "{\"job_id\": \"my_job_123\", \"source\": \"test_script\"}"
      }'
    ```

    The `webhook_data` field is returned unchanged in the webhook notification. This allows you to attach identifiers such as job IDs or metadata, making it easier to map responses to your internal workflows.
  </Step>

  <Step title="Congratulations" icon="party-horn">
    You’ve successfully set up webhooks with the Web Unlocker API. You can now receive real-time notifications for completed jobs and build more efficient, event-driven scraping workflows.
  </Step>
</Steps>
