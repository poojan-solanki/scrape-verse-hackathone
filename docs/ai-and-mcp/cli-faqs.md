# Bright Data CLI FAQs

> **Official Source**: [https://docs.brightdata.com/cli/faqs](https://docs.brightdata.com/cli/faqs)
> **Category**: `ai-and-mcp`

---

FAQs and troubleshooting for the Bright Data CLI: brightdata and bdata aliases, authentication, installation issues and common errors across 1000+ scrapers.

## Frequently asked general questions

<AccordionGroup>
  <Accordion title="What is the difference between `brightdata` and `bdata`?">
    They are identical - `bdata` is a shorthand alias installed alongside `brightdata`. Use whichever you prefer.
  </Accordion>

  <Accordion title="Do I need a Bright Data account to use the CLI?">
    Yes. The CLI connects to Bright Data's infrastructure to handle web requests. You can [sign up for free](https://brightdata.com/?hs_signup=1\&utm_source=docs) and get started with the free tier.
  </Accordion>

  <Accordion title="What platforms can I extract data from?">
    The CLI supports 40+ platforms through the `pipelines` command, including Amazon, LinkedIn, Instagram, TikTok, YouTube, Facebook, Reddit, Google Maps, Walmart, eBay, and many more. Run `brightdata pipelines list` to see the full list.
  </Accordion>

  <Accordion title="What output formats are supported?">
    * **Scrape:** `markdown` (default), `html`, `json`, `screenshot`
    * **Search:** Formatted table (default), `json`, `pretty`
    * **Pipelines:** `json` (default), `csv`, `ndjson`, `jsonl`

    All commands support `-o <path>` to write output to a file.
  </Accordion>

  <Accordion title="Can I use the CLI in scripts and CI/CD pipelines?">
    Yes. The CLI is fully pipe-friendly. When stdout is not a TTY, colors and spinners are automatically disabled. Use `--json` for machine-readable output and `BRIGHTDATA_API_KEY` environment variable for non-interactive authentication.
  </Accordion>
</AccordionGroup>

## Authentication

<AccordionGroup>
  <Accordion title="Where are my credentials stored?">
    Credentials are stored locally on your machine:

    | OS      | Path                                                            |
    | ------- | --------------------------------------------------------------- |
    | macOS   | `~/Library/Application Support/brightdata-cli/credentials.json` |
    | Linux   | `~/.config/brightdata-cli/credentials.json`                     |
    | Windows | `%APPDATA%\brightdata-cli\credentials.json`                     |

    The file is set to mode `0o600` (owner read/write only).
  </Accordion>

  <Accordion title="How do I log in on a remote server without a browser?">
    Use the device flow:

    ```bash theme={null}
    brightdata login --device
    ```

    This prints a URL and a verification code. Open the URL on any device with a browser, enter the code, and authentication completes on the server.
  </Accordion>

  <Accordion title="How do I switch between Bright Data accounts?">
    Run `brightdata logout` followed by `brightdata login` with the new account. Or pass a different API key directly:

    ```bash theme={null}
    brightdata login --api-key <new_key>
    ```
  </Accordion>
</AccordionGroup>

## Troubleshooting

<AccordionGroup>
  <Accordion title="&#x22;No Web Unlocker zone specified&#x22;">
    This means no default zone is configured. Fix it by either:

    ```bash theme={null}
    # Re-run login (auto-creates zones)
    brightdata login

    # Or set a zone manually
    brightdata config set default_zone_unlocker <zone_name>
    ```
  </Accordion>

  <Accordion title="&#x22;Invalid or expired API key&#x22;">
    Your stored API key is no longer valid. Re-authenticate:

    ```bash theme={null}
    brightdata login
    ```
  </Accordion>

  <Accordion title="&#x22;Access denied&#x22;">
    Your API key does not have permission for the requested zone or operation. Check zone permissions in the [Bright Data control panel](https://brightdata.com/cp).
  </Accordion>

  <Accordion title="&#x22;Rate limit exceeded&#x22;">
    You've hit the rate limit for your zone. Options:

    * Wait a moment and retry
    * Use `--async` for large jobs to avoid blocking
    * Contact your account manager to increase limits
  </Accordion>

  <Accordion title="Pipeline job timed out">
    The default polling timeout is 600 seconds (10 minutes). For large datasets, increase it:

    ```bash theme={null}
    # Per-command
    brightdata pipelines amazon_product "<url>" --timeout 1200

    # Via environment variable
    export BRIGHTDATA_POLLING_TIMEOUT=1200
    ```
  </Accordion>

  <Accordion title="Colors or spinners look broken in my terminal">
    The CLI auto-detects TTY support. If detection fails, pipe through `cat` to force plain output:

    ```bash theme={null}
    brightdata scrape https://example.com | cat
    ```

    Or use `--json` for clean, parseable output.
  </Accordion>
</AccordionGroup>

## Frequently asked configuration questions

<AccordionGroup>
  <Accordion title="How do I change the default output format?">
    ```bash theme={null}
    brightdata config set default_format json
    ```

    Valid values: `markdown`, `json`.
  </Accordion>

  <Accordion title="What is the configuration priority order?">
    Settings are resolved in this order (highest priority first):

    1. **CLI flags** - e.g., `--zone my_zone`
    2. **Environment variables** - e.g., `BRIGHTDATA_UNLOCKER_ZONE`
    3. **config.json** - e.g., `default_zone_unlocker`
    4. **Defaults** - built-in fallbacks
  </Accordion>

  <Accordion title="How do I reset all configuration?">
    Delete the configuration directory:

    ```bash theme={null}
    # Linux
    rm -rf ~/.config/brightdata-cli/

    # macOS
    rm -rf ~/Library/Application\ Support/brightdata-cli/
    ```

    Then run `brightdata login` to start fresh.
  </Accordion>
</AccordionGroup>
