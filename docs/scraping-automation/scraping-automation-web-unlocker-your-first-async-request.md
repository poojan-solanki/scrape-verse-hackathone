# Your first async Web Unlocker API request

> **Official Source**: [https://docs.brightdata.com/scraping-automation/web-unlocker/your-first-async-request](https://docs.brightdata.com/scraping-automation/web-unlocker/your-first-async-request)
> **Category**: `scraping-automation`

---

Send asynchronous requests to the Bright Data Web Unlocker API (98% success rate) and retrieve results using a response ID and webhook delivery method.

<Accordion title="Prerequisites" icon="list-check">
  The following are required:

  * [A Bright Data account](https://brightdata.com/?hs_signup=1\&utm_source=docs)
  * [A Bright Data API key](/api-reference/authentication#how-do-i-generate-a-new-api-key)
  * [An active Web Unlocker API zone](https://brightdata.com/cp/web_access)
  * [Basic knowledge of cURL](https://curl.se/)
</Accordion>

<Steps>
  <Step title="Enable &#x22;Asynchronous requests&#x22;">
    In the Web Unlocker API [zone](https://brightdata.com/cp/web_access), under "Advanced settings", enable the "Asynchronous requests" toggle.

    <Frame>
      <img alt="Enable async requests" />
    </Frame>
  </Step>

  <Step title="Send your first async request">
    The following request submits an [asynchronous Web Unlocker API](/api-reference/rest-api/unlocker/request) job:

    <CodeGroup>
      ```bash cURL icon=rectangle-terminal theme={null}
      curl --request POST \
        --url 'https://api.brightdata.com/unblocker/req?zone=web_unlocker' \
        --header 'Authorization: Bearer <API_KEY>' \
        --header 'Content-Type: application/json' \
        --data '{
            "url": "https://geo.brdtest.com/welcome.txt"
          }'
      ```

      ```python Python theme={null}
        import requests

        url = "https://api.brightdata.com/unblocker/req?zone=web_unlocker1"

        payload = {
            "url": "https://geo.brdtest.com/welcome.txt",
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
        })
      };

      fetch('https://api.brightdata.com/unblocker/req?zone=web_unlocker1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
      ```
    </CodeGroup>

    <Callout icon="key">
      Replace `<API_KEY>` with your API key and `web_unlocker`with your Web Unlocker zone name.
    </Callout>
  </Step>

  <Step title="Wait and check status">
    We recommend to wait 20 seconds prior to the first polling request to get the response, 10 seconds for the second poll and 5 for the rest.

    Bright Data may apply rate limit for excessive poling requests without response.

    The request returns a `response_id` used to retrieve results after processing completes.

    ```json theme={null}
    {
      "response_id": "s4t7w3619285042ra9dke1m8qx"
    }
    ```

    If the request is still processing, the API returns HTTP `202`:

    ```json HTTP/202 theme={null}
    "Request is pending"
    ```

    <Callout icon="hourglass">
      Processing time is typically up to 5 minutes and may extend to 8 hours during peak periods.

      Responses are retained for up to 48 hours from submission time.
    </Callout>
  </Step>

  <Step title="Retrieve your results">
    The following [request retrieves](/api-reference/rest-api/unlocker/get-results) the completed result:

    ```sh theme={null}
    curl --silent --compressed \
      "https://api.brightdata.com/unblocker/get_result?&response_id=${RESPONSE_ID}" \
      -H "Authorization: Bearer [API_KEY]" \
      -o results.json
    ```

    <Callout icon="file-arrow-down">
      The response body is written to `results.json`.
    </Callout>
  </Step>

  <Step title="Verify the output">
    Display the saved file:

    ```sh theme={null}
      cat results.json
    ```

    The file contains structured JSON results from the Web Unlocker API. For example:

    ```json Sample Response expandable theme={null}
      {
          "status_code": 200,
          "headers": {
              "access-control-allow-origin": "*",
              "cache-control": "no-store",
              "content-type": "text/plain; charset=utf-8",
              "date": "Sun, 18 May 2025 20:01:18 GMT",
              "server": "nginx",
              "connection": "close",
              "transfer-encoding": "chunked"
          },
          "body": "\nWelcome to Bright Data! Here are your proxy details\nCountry: US\nLatitude: 37.751\nLongitude: -97.822\nTimezone: America/Chicago\nASN number: 20473\nASN Organization name: AS-VULTR\nIP version: IPv4\n\nCommon usage examples:\n\n[USERNAME]-country-us:[PASSWORD]  // US based Proxy\n[USERNAME]-country-us-state-ny:[PASSWORD]  // US proxy from NY\n[USERNAME]-asn-56386:[PASSWORD]  // proxy from ASN 56386\n[USERNAME]-ip-1.1.1.1.1:[PASSWORD]  // proxy from dedicated pool\n\nTo get a simple JSON response, use https://geo.brdtest.com/mygeo.json .\n\nMore examples on https://docs.brightdata.com/api-reference/introduction\n\n"
      }
    ```

    <Callout icon="party-horn">
      **Congratulations!** If the file contains valid JSON search results, you're done!
    </Callout>
  </Step>
</Steps>

## Can Bright Data send the response to a target which I specify?

Not the response body - you always pull that with the `response_id`. But Bright Data does send a notification to your `webhook_url` when the job is ready, so no polling loop is needed. See [Webhooks setup](/scraping-automation/web-unlocker/setup-webhooks).
