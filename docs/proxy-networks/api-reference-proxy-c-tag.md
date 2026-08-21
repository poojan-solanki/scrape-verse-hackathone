# Request and response C-Tag

> **Official Source**: [https://docs.brightdata.com/api-reference/proxy/c-tag](https://docs.brightdata.com/api-reference/proxy/c-tag)
> **Category**: `proxy-networks`

---

Configure the Bright Data Proxy REST API Request and Response C-Tag to control request behavior on port 44445, with reference for parameters and fields.

When you're dealing with a massive volume of requests, keeping track of individual responses can be challenging. Enter C-Tag, a simple yet powerful solution that improves request tracking.

With C-Tag, users include a unique `c_tag` flag in their requests. In response, businesses echo back the same tag in the header. This seamless exchange ensures that each response is bound to its corresponding request, eliminating confusion and streamlining data management.

Add any C-Tag text in your request and get the identical sting in your response header:

<CodeGroup>
  ```sh Sample Request theme={null}
  curl "http://target.site" --proxy brd.superproxy.io:44445 --proxy-user brd-customer-<customer_id>-zone-<zone_name>-c_tag-<C_TAG_VALUE>:<zone_password>
  ```

  ```js Output headers theme={null}
  x-brd-c_tag: <C_TAG_VALUE>
  ```
</CodeGroup>
