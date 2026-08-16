# How to use Bright Data with BeautifulSoup

> **Official Source**: [https://docs.brightdata.com/integrations/beautifulsoup](https://docs.brightdata.com/integrations/beautifulsoup)
> **Category**: `general`

---

Step-by-step guide to configuring Bright Data proxies in Python BeautifulSoup scripts for reliable, anonymous web scraping. Spans 195 countries.

<Accordion title="Expand to get your Bright Data Proxy Access Information">
  ### Your proxy access information

  Bright Data proxies are grouped in "Proxy zones". Each zone holds the configuration for the proxies it holds.

  To get access to the proxy zone:

  1. Login to Bright Data control panel
  2. Select the proxy zone or setup a new one
  3. Click on the new zone name, and select the **Overview** tab.
  4. In the overview tab, under **Access details** you can find the proxy access details, and copy them to clipboard on click.
  5. You will need: Proxy Host, Proxy Port, Proxy Zone username and Proxy Zone password.
  6. Click on the copy icons to copy the text to your clipboard and paste in your tool's proxy configuration.

  ### Access Details Section Example

  <img alt="" />

  ### Residential proxy access

  To access Bright Data's **Residential Proxies** you must be a KYC-verified business account. Complete KYC verification with the Bright Data compliance team; there is no automatic or no-KYC path. Without KYC, use ISP or Datacenter proxies. [Read more...](/proxy-networks/residential/network-access)

  ### Targeting search engines?

  If you target a search engine like google, bing or yandex, you need a special Search Engine Results Page (**SERP**) proxy API. Use Bright Data SERP API to target search engines.
  [Click here to read more about Bright Data SERP proxy API.](/scraping-automation/serp-api/introduction)

  ### Correct setup of proxy test to avoid "PROXY ERROR"

  In many tools you will see a "test proxy" function, which performs a conncectivity test to your proxy, and some add a geolocation test as well, to identify the location of the proxy.
  To correctly test your proxy you should target those search queries to:
  `https://geo.brdtest.com/welcome.txt` .

  Some tools use popular search engines (like google.com) as a default test target. Bright Data will block those requests and you tool will show **proxy error** although your proxy is perfectly fine.

  If your proxy test fails, this is probably the reason. Make sure that your test domain is not a search engine (this is done in the tool configuration, and not controlled by Bright Data).
</Accordion>

## What is BeautifulSoup?

BeautifulSoup is a Python library that simplifies the process of extracting and organizing data from HTML and XML documents. Combined with Bright Data proxies, it enables you to scrape data securely and anonymously while reducing the risk of detection and blocking.

## How to Integrate Bright Data with BeautifulSoup

**Step 0. Prerequisites**

Before you start:

* Download the latest Python version from [python.org](https://www.python.org/).

* Install BeautifulSoup and the `requests` library:

```bash theme={null}
     pip install beautifulsoup4 requests
```

**Step 1. Set Up the Proxy**

Login to bright data account, and select the proxy zone you with to use. In the **Overview,** under **Access details**, you can find the required information to get your access information. \*\*\*\*&#x20;

1. Log in to your [Bright Data account](https://brightdata.com/cp/zones) and retrieve your proxy credentials:

   * **Host**: [`http://brd.superproxy.io/`](http://brd.superproxy.io/)

   * **Port**: 44445

   * **Username**: Your Bright Data username. Modify it for geo-specific proxies if needed (e.g., `your-username-country-US`).

   * **Password**: Your Bright Data proxy zone password.

2. Define your proxy details in your script:

```python theme={null}
proxy = {
  "http": "http://[USERNAME]:[PASSWORD]@[HOST]:[PORT]"
}
```

**Step 2. Implement Proxy Settings with requests and Parse Data Using BeautifulSoup**

Here’s a comprehensive script that demonstrates how to integrate Bright Data with BeautifulSoup for secure data retrieval and parsing:

```python theme={null}
import requests
from bs4 import BeautifulSoup

# Bright Data Proxy Configuration
proxy = {
    "http": "http://[USERNAME]:[PASSWORD]@[HOST]:[PORT]",
    "https": "http://[USERNAME]:[PASSWORD]@[HOST]:[PORT]"
}

# Target URL to verify the proxy
url = "https://httpbin.org/ip" 

try:
    # Send the request using the proxy
    response = requests.get(url, proxies=proxy, timeout=10)
    response.raise_for_status()  # Handle HTTP errors

    # Parse the HTML content
    soup = BeautifulSoup(response.text, "html.parser")

    # Print the formatted page content
    print("Response Content (IP Address):")
    print(soup.prettify())

except requests.exceptions.RequestException as e:
    print("Error occurred while using the proxy:", e)

```

**Step 3. Verify the Output**

If the Bright Data proxy is configured correctly, you should see the IP address of the proxy displayed in the output:

```json theme={null}
{
  "origin": "123.45.67.89"
}
```

Integrating Bright Data proxies with BeautifulSoup allows you to scrape data securely, anonymously, and efficiently. Whether you’re extracting structured data, accessing geo-restricted content, or managing large-scale scraping tasks, Bright Data ensures reliability and privacy for all your scraping needs. Start scraping smarter with Bright Data and BeautifulSoup today!
