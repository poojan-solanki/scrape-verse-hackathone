# Input and output schema

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/input-and-output-schema](https://docs.brightdata.com/datasets/scraper-studio/input-and-output-schema)
> **Category**: `datasets-and-scrapers`

---

Define a Bright Data Scraper Studio IDE collector's input fields and structured output schema, across 18 output field types with validation and PII flags.

The input and output schema defines the data contract for a Bright Data Scraper Studio IDE collector: which fields a collection run accepts and which structured fields the collector returns.

* **Input schema** defines the fields a collection run accepts, such as `url`, `keyword`, `country`, `date`, or any custom field your interaction code reads from `input`.
* **Output schema** defines the structured fields the scraper returns, based on the data emitted by `collect()`.

Both schemas are configured in the Bright Data Scraper Studio IDE. Schema changes are applied to the production collector when you click **Save to Production**.

## What is the input schema?

The input schema defines the values your scraper can receive at runtime.

A scraper often uses a `url` input, but inputs are not limited to URLs. Depending on the collector logic, inputs can be keywords, locations, dates, IDs, countries, or any custom parameter.

Your interaction code reads input values through the `input` object:

```js theme={null}
navigate(input.url);
wait('.product-title');

const data = parse();
collect(data);
```

For a keyword-based scraper:

```js theme={null}
navigate(`https://example.com/search?q=${input.keyword}`);
wait('.search-results');

collect(parse());
```

A scraper can also run without user-provided input if the target URL or collection logic is hardcoded in the scraper code.

## Define input parameters

To define the input schema in the Bright Data Scraper Studio IDE:

1. Open your collector in the **Scraper Studio IDE**.
2. Go to the **Code** tab.
3. Click **Add input parameter**.
4. Enter a field name, for example `url`, `keyword`, `country`, or `date`.
5. Add an optional description.
6. Select the field type.
7. Mark the field as **Required** if the collector cannot run without it.
8. Click **Save**.
9. Click **Save to Production** when the collector is ready.

After a collector has already been saved, click **Edit schema** in the IDE to update its input schema.

### What are the input parameter settings?

| Setting               | Description                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| **Field name**        | The key used in code as `input.<field_name>`.                                          |
| **Description**       | Optional explanation of what value the user should provide.                            |
| **Type**              | The expected value type, such as text/string, boolean, date, or country.               |
| **Required**          | If enabled, each collection input must include this field.                             |
| **Predefined values** | Optional fixed choices, when supported by the selected type. Example: `country` type.  |
| **Case-insensitive**  | Treats matching values as case-insensitive, when supported by the field configuration. |

## What do collection inputs look like?

A URL-based collector can accept one or more URLs:

```json theme={null}
[
  { "url": "https://example.com/product/1" },
  { "url": "https://example.com/product/2" }
]
```

A collector can also accept multiple input fields:

```json theme={null}
[
  {
    "url": "https://example.com/search",
    "keyword": "standing desk",
    "country": "US"
  },
  {
    "url": "https://example.com/search",
    "keyword": "monitor arm",
    "country": "GB"
  }
]
```

Only fields marked as **Required** must be provided for every input object. Optional fields can be omitted.

## What is the output schema?

The output schema defines the data point structure and how the data is organized.

In the Bright Data Scraper Studio IDE, the output schema is usually generated from the object passed to `collect()`.

```js theme={null}
collect({
  title: $('.product-title').text_sane(),
  price: new Money(+$('.price').text().replace(/\D+/g, ''), 'USD'),
  availability: $('.stock-status').text_sane(),
});
```

This produces output fields such as:

```json theme={null}
{
  "title": "ErgoDesk Pro",
  "price": {
    "value": 349.99,
    "currency": "USD"
  },
  "availability": "In stock"
}
```

When the scraper is saved, Scraper Studio detects the collected data structure and creates or updates the output schema.

## Update the output schema

There are two ways to update the output schema: automatically from parser code or manually in the schema editor.

### Update the schema automatically

1. Add or change fields in your parser code.
2. Run a preview to confirm that required fields return as expected.
3. Click **Save to Production**.
4. If Scraper Studio detects schema changes, click **Update schema**.
5. Click **Save to Production** again.

### Update the schema manually

1. Click **Edit schema** in the IDE.
2. Add or edit fields by name and type.
3. Configure required flags, default values, formatting, validation, or PII settings.
4. Save the schema.
5. Click **Save to Production**.

## What is the Output Schema Editor?

The Output Schema Editor defines exactly which fields your collector returns and how each field is validated, formatted and delivered.

The editor has two views:

| View           | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| **Table view** | Visual list of fields with toggles and field configuration. |
| **JSON view**  | Direct JSON editing for the schema object.                  |

Clicking a field row opens the configuration side panel for that field.

## How is an output schema structured?

An output schema is a JSON object with a top-level `type` and a `fields` object:

```json theme={null}
{
  "type": "object",
  "fields": {
    "title": {
      "type": "text",
      "active": true
    },
    "price": {
      "type": "price",
      "active": true
    }
  }
}
```

## What properties can output fields have?

These properties apply to user-defined output fields.

| Property            | Type    | Description                                                              |
| ------------------- | ------- | ------------------------------------------------------------------------ |
| `type`              | string  | Field type, such as `text`, `number`, `price`, `image`, or `object`.     |
| `active`            | boolean | Whether the field is included in the output. Default: `true`.            |
| `required`          | boolean | If `true`, rows with no valid value for this field are marked as errors. |
| `default_value`     | string  | Value used when the field cannot be populated.                           |
| `description`       | string  | Human-readable explanation of the field.                                 |
| `pii`               | boolean | Marks the field as containing personally identifiable information.       |
| `custom_formatting` | object  | Custom JavaScript formatter for advanced output shaping.                 |
| `custom_validation` | object  | Define validation rules that run on every collected record.              |

## Configure a field in the side panel

The side panel contains field-specific settings.

| Setting                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| **Field name**            | The key used in the output JSON. Available for user-defined fields. |
| **Display name**          | Optional UI label, separate from the output key.                    |
| **Data type**             | The field type. Changing the type resets type-specific settings.    |
| **Active**                | Includes or excludes the field from output.                         |
| **Required**              | Marks rows as errors when this field is missing or invalid.         |
| **Default value**         | Fallback value when the field cannot be populated.                  |
| **Description**           | Optional human-readable description of the field.                   |
| **Contains PII**          | Marks the field as containing personally identifiable information.  |
| **Format**                | Type-specific output formatting. Example: price/money type.         |
| **Download**              | For media/file fields, downloads the file to configured storage.    |
| **Array values**          | Defines the item type for `array` fields.                           |
| **Subfields**             | Defines nested fields for `object` fields.                          |
| **Normalize**             | Controls empty array behavior.                                      |
| **Set as quick filter**   | Exposes the field as a filter in the dataset viewer.                |
| **Quick filter operator** | Defines the comparison operator used by the quick filter.           |

## What default values are available?

Available default values depend on the field type.

| Option      | Output behavior                   | Available for     |
| ----------- | --------------------------------- | ----------------- |
| `undefined` | Field is omitted from the output. | All types         |
| `null`      | Field is returned as `null`.      | All types         |
| `""`        | Empty string.                     | `text`            |
| `false`     | Boolean false.                    | `boolean`         |
| `0`         | Numeric zero.                     | `number`, `price` |
| `[]`        | Empty array.                      | `array`           |

## What output field types are available?

Scraper Studio supports the following user-defined output field types.

### `text`

Free-form text.

```json theme={null}
{
  "type": "text",
  "active": true,
  "required": false,
  "default_value": "null"
}
```

Example value:

```json theme={null}
"Laptop 15-inch Pro"
```

### `number`

Integer or decimal number. Numeric strings can be converted to numbers.

```json theme={null}
{
  "type": "number",
  "active": true,
  "format": {
    "decimal_places": 2
  },
  "default_value": "zero"
}
```

Example value:

```json theme={null}
11.23
```

### `url`

A URL string. Only `http://` and `https://` URLs are accepted.

```json theme={null}
{
  "type": "url",
  "active": true,
  "required": true
}
```

Example value:

```json theme={null}
"https://example.com/product/123"
```

### `price`

A monetary value represented as a numeric value and currency code.

```json theme={null}
{
  "type": "price",
  "active": true,
  "format": {
    "preset": "us_style"
  }
}
```

Example value:

```json theme={null}
{
  "value": 99.99,
  "currency": "USD"
}
```

Price format presets:

| Preset     | Description                                               | Example                                   |
| ---------- | --------------------------------------------------------- | ----------------------------------------- |
| `us_style` | US-style formatting.                                      | `$1,234.56`                               |
| `locale`   | Locale-aware formatting. Requires locale.                 | `1.234,56 €`                              |
| `number`   | Numeric value only.                                       | `1234.56`                                 |
| `raw`      | Raw object.                                               | `{ "value": 1234.56, "currency": "USD" }` |
| `custom`   | Template using `{[symbol]}`, `{[value]}`, `{[currency]}`. | `USD 1234.56`                             |

### `boolean`

A true/false value.

```json theme={null}
{
  "type": "boolean",
  "active": true,
  "default_value": "false"
}
```

Example value:

```json theme={null}
true
```

### `date`

Date or timestamp value.

```json theme={null}
{
  "type": "date",
  "active": true,
  "format": {
    "preset": "iso"
  }
}
```

Date format presets:

| Preset      | Description                     | Example                             |
| ----------- | ------------------------------- | ----------------------------------- |
| `iso`       | ISO 8601 string.                | `2024-03-15T10:30:00.000Z`          |
| `timestamp` | Unix timestamp in milliseconds. | `1710494400000`                     |
| `locale`    | Locale-aware readable date.     | `March 15, 2024 at 10:30:00 AM UTC` |

Locale formatting can include:

* Locale, for example `en-US`, `fr-FR`, `ru-RU`
* Date style: `long`, `medium`, `short`
* Time style: `long`, `medium`, `short`

### `country`

A two-letter ISO 3166-1 alpha-2 country code.

```json theme={null}
{
  "type": "country",
  "active": true
}
```

Example value:

```json theme={null}
"US"
```

### `phone`

A phone number parsed into structured components.

```json theme={null}
{
  "type": "phone",
  "active": true
}
```

Example value:

```json theme={null}
{
  "area_code": 1,
  "number": 5555555555,
  "extension": "1234"
}
```

### `image`

A downloaded or referenced image.

```json theme={null}
{
  "type": "image",
  "active": true,
  "download": true,
  "format": {
    "behavior": "object",
    "content_type": true
  }
}
```

When **Download** is enabled, the file is stored in the configured delivery destination. File downloads are billed separately from page loads where applicable.

### `video`, `pdf` and `doc`

These file types use the same download and behavior settings as `image`.

```json theme={null}
{
  "type": "video",
  "active": true,
  "download": true
}
```

Supported file field types:

| Type    | Description                             |
| ------- | --------------------------------------- |
| `video` | Downloaded or referenced video file.    |
| `pdf`   | Downloaded or referenced PDF file.      |
| `doc`   | Downloaded or referenced document file. |

## **File field output options**

For downloaded file fields, such as `image`, `video`, `pdf`, and `doc`, the output schema editor lets you control how file metadata is returned.

These settings appear when the field behavior is set to **Object**.

### **Behavior**

Use **Behavior** to choose how the file field is returned.

* **Simple**: returns only the downloaded file path or the original remote URL.
* **Object**: returns an object with file metadata, such as `file_path`, `remote_url`, `content_type`, `file_size`, and `response_headers`, depending on which options are enabled.

Use **Object** when you need more than the file path, for example when validating file type, checking file size, or debugging download headers.

### **Include content type**

Enable **Include content type** to include the file MIME type in the output.

Example:

```json theme={null}
{
  "content_type": "image/jpeg"
}
```

Use this to confirm whether the downloaded file is an image, PDF, video, or another media type.

### **Include file size**

Enable **Include file size** to include the downloaded file size in bytes.

Example:

```json theme={null}
{
  "file_size": 123456
}
```

Use this to validate file size, detect empty or unexpectedly large downloads, or troubleshoot failed media processing.

### **Include response headers**

Enable **Include response headers** to include the HTTP response headers received when Scraper Studio downloads the file.

Example:

```json theme={null}
{
  "response_headers": {
    "accept-ranges": "bytes",
    "age": "21753",
    "cache-control": "public, max-age=31557600",
    "content-type": "image/jpeg",
    "date": "Sun, 05 Jul 2026 12:43:07 GMT",
    "last-modified": "Sun, 05 Jul 2026 06:40:34 GMT",
    "source-length": "2088714",
    "source-type": "image/jpeg",
    "vary": "Accept"
  }
}
```

Response headers can help you debug file downloads, verify content type, inspect cache behavior, and troubleshoot unexpected media responses.

### **Example output**

When **Behavior** is set to **Object** and all metadata options are enabled, the output can look like this:

```json theme={null}
{
  "image": {
    "file_path": "image.jpg",
    "remote_url": "https://example.com/image",
    "content_type": "image/jpeg",
    "file_size": 123456,
    "response_headers": {
      "accept-ranges": "bytes",
      "age": "21753",
      "cache-control": "public, max-age=31557600",
      "content-type": "image/jpeg",
      "date": "Sun, 05 Jul 2026 12:43:07 GMT",
      "last-modified": "Sun, 05 Jul 2026 06:40:34 GMT",
      "source-length": "2088714",
      "source-type": "image/jpeg",
      "vary": "Accept"
    }
  }
}
```

### `array`

An ordered list of values. The element type is defined with `items`.

```json theme={null}
{
  "type": "array",
  "active": true,
  "normalize": {
    "empty": "keep"
  },
  "default_value": "empty_array",
  "items": {
    "type": "text"
  }
}
```

Empty array behavior:

| Option | Description                                             |
| ------ | ------------------------------------------------------- |
| `keep` | Keep empty arrays as `[]`.                              |
| `drop` | Replace empty arrays with the configured default value. |

Array of nested objects:

```json theme={null}
{
  "type": "array",
  "active": true,
  "items": {
    "type": "object",
    "fields": {
      "name": {
        "type": "text",
        "active": true
      },
      "price": {
        "type": "price",
        "active": true
      }
    }
  }
}
```

### `object`

A nested object with its own subfields.

```json theme={null}
{
  "type": "object",
  "active": true,
  "fields": {
    "title": {
      "type": "text",
      "active": true
    },
    "price": {
      "type": "price",
      "active": true
    },
    "in_stock": {
      "type": "boolean",
      "active": true
    }
  }
}
```

### What HTML conversion field types are available?

| Type            | Description                                         | Example value                               |
| --------------- | --------------------------------------------------- | ------------------------------------------- |
| `html2text`     | HTML converted to readable text.                    | `Product title\nDescription text`           |
| `html2markdown` | HTML converted to Markdown.                         | `## Product title`                          |
| `html2html`     | Raw HTML content.                                   | `<div class="product"><h1>Title</h1></div>` |
| `html2ldjson`   | Structured data from `application/ld+json` scripts. | `{"@type":"Product","name":"Widget"}`       |

Example:

```json theme={null}
{
  "type": "html2markdown",
  "active": true
}
```

## How do I validate field values?

Custom validation lets you define JavaScript rules that run on every collected value for a field.

Throw an error to mark the value as invalid:

```js theme={null}
function validate(v) {
  if (!v)
    throw new Error('Value is required');

  return true;
}
```

Rows that fail validation are treated as error rows when validation is configured for required output quality.

## How do I format field values?

Custom formatting lets you transform a field value before output delivery.

```js theme={null}
function process(value) {
  return value;
}
```

Use custom formatting when built-in formatting options do not match the required output shape.

## When do I use collect() vs set\_lines()?

The way records are emitted affects the output dataset.

| Function          | Behavior                                                 | Use when                                                              |
| ----------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| `collect(data)`   | Appends one record to the dataset.                       | Most scrapers.                                                        |
| `set_lines(data)` | Replaces previously emitted records with the latest set. | Progressive collection where the latest snapshot should be preserved. |

Example with `collect()`:

```js theme={null}
collect({
  title,
  price,
  availability,
});
```

Example with `set_lines()`:

```js theme={null}
set_lines(products);
```

## What system fields can I add?

System fields are generated by Scraper Studio. Their names and types are fixed. You can toggle them on or off in the output schema configuration under **Additional data**.

| Field                 | Type            | Default | Description                                                   |
| --------------------- | --------------- | ------- | ------------------------------------------------------------- |
| `input`               | string / object | On      | The input value or object that triggered the crawl.           |
| `prime_input`         | string / object | Off     | The original root input when discovery or pagination is used. |
| `error`               | string          | On      | Explanation of why collection failed for the row.             |
| `error_code`          | string          | On      | Structured error code, such as `validation` or `timeout`.     |
| `warning`             | string          | On      | System-level warning for the row.                             |
| `warning_code`        | string          | On      | Structured warning code.                                      |
| `status_code`         | number          | Off     | HTTP-like crawl result code, such as `200` or `404`.          |
| `timestamp`           | date            | Off     | Date and time the page was collected.                         |
| `requested_timestamp` | date            | Off     | Date and time the job was triggered.                          |
| `page_id`             | string          | Off     | Unique identifier for the page crawl.                         |
| `job_id`              | string          | Off     | ID of the job that produced the row.                          |
| `collector_id`        | string          | Off     | ID of the collector.                                          |
| `collector_queue`     | string          | Off     | Queue the job was submitted to.                               |
| `crawl_type`          | string          | Off     | Crawl or parser type used for the row.                        |
| `screenshot`          | file            | Off     | Screenshot of the browser page at collection time.            |
| `html`                | file            | Off     | Full HTML snapshot of the page.                               |
| `warc`                | file            | Off     | WARC archive of the page.                                     |

When `screenshot`, `html`, or `warc` are active, the files are downloaded to the configured storage destination.

## How do I add a screenshot watermark?

When the `screenshot` system field is enabled, a watermark can be added to the screenshot. Each watermark item has a label and a data source.

| Source      | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| Browser URL | URL the browser was on when the screenshot was taken.              |
| Timestamp   | Timestamp of the screenshot capture.                               |
| Input value | Value from the collector input, such as `url` or `config.country`. |

## What does a full output schema look like?

```json theme={null}
{
  "type": "object",
  "fields": {
    "url": {
      "type": "url",
      "active": true,
      "required": true
    },
    "title": {
      "type": "text",
      "active": true
    },
    "price": {
      "type": "price",
      "active": true,
      "format": {
        "preset": "us_style"
      },
      "default_value": "zero"
    },
    "rating": {
      "type": "number",
      "active": true,
      "format": {
        "decimal_places": 1
      }
    },
    "in_stock": {
      "type": "boolean",
      "active": true,
      "default_value": "false"
    },
    "listed_date": {
      "type": "date",
      "active": true,
      "format": {
        "preset": "iso"
      }
    },
    "country": {
      "type": "country",
      "active": true
    },
    "images": {
      "type": "array",
      "active": true,
      "normalize": {
        "empty": "keep"
      },
      "default_value": "empty_array",
      "items": {
        "type": "image",
        "download": true
      }
    },
    "seller": {
      "type": "object",
      "active": true,
      "fields": {
        "name": {
          "type": "text",
          "active": true
        },
        "phone": {
          "type": "phone",
          "active": true
        }
      }
    }
  }
}
```

## Related

<CardGroup>
  <Card title="Develop a scraper" icon="wrench" href="/datasets/scraper-studio/develop-a-scraper">
    Step-by-step walkthrough of building a scraper in the IDE
  </Card>

  <Card title="Functions reference" icon="code" href="/datasets/scraper-studio/functions">
    Interaction and parser functions with parameters and examples
  </Card>

  <Card title="Initiate collection and delivery" icon="paper-plane" href="/datasets/scraper-studio/initiate-collection-and-delivery-options">
    Trigger collection and deliver output to your destination
  </Card>

  <Card title="Trigger a scraper (API)" icon="bolt" href="/api-reference/scraper-studio-api/Trigger_a_scraper_for_batch_collection_method">
    Run a published collector for batch collection by API
  </Card>
</CardGroup>
