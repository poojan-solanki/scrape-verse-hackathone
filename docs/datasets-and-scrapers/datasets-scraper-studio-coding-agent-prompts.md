# Scraper Studio coding agent prompts

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/coding-agent-prompts](https://docs.brightdata.com/datasets/scraper-studio/coding-agent-prompts)
> **Category**: `datasets-and-scrapers`

---

Copy-pasteable Claude Code, Cursor and Codex prompts to build a Bright Data Scraper Studio scraper: a simple build-and-run prompt plus a full self-heal loop.

Use these copy-pasteable prompts to build a Bright Data Scraper Studio scraper through Claude Code, Cursor or Codex. Start with the one-prompt build-and-run if you just want a scraper fast: swap in your URL and the fields you want, paste, done. The longer flows below add the full build, run, heal, approve, re-run loop for when you need to extend a scraper's schema in place.

## Prerequisites

* A Bright Data account ([sign up free](https://brightdata.com/?hs_signup=1\&utm_source=docs), no card required).
* A coding agent with terminal access: Claude Code, Cursor or Codex.

You do not install the Bright Data CLI ahead of time. The prompts below run it through `npx`, which fetches the latest version on demand, so there is no global dependency to maintain.

## Build a scraper in one prompt

If you just want a scraper fast, paste this prompt and replace the two values in angle brackets: the target URL and the fields you want. The agent runs the Bright Data CLI through `npx`, builds the scraper and runs it once. No self-healing.

```text Prompt theme={null}
Build and run a Bright Data scraper. Run every Bright Data CLI command through `npx -p @brightdata/cli` so nothing is installed globally. Replace <TARGET_URL> and <FIELDS TO EXTRACT>, then do each step in order and stop if a step fails:

1. Authenticate by running `npx -p @brightdata/cli bdata login`. npx fetches the CLI on demand, so there is nothing to install.
2. Create a Bright Data scraper for <TARGET_URL> that extracts: <FIELDS TO EXTRACT>. Report the Collector ID.
3. Run that scraper on the same URL and pretty-print the result.
```

For example, to scrape a product page, the filled-in second step reads:

```text Prompt theme={null}
2. Create a Bright Data scraper for https://shopalto.xyz/product/aurora-wireless-headphones that extracts: product name, price, description and rating. Report the Collector ID.
```

> **Expected result:** the agent reports a Collector ID like `c_mpohus372o5tmid1jk`, then prints a JSON array with one row containing the fields you asked for.

<Tip>
  Save the Collector ID. Reuse it to run the scraper on new URLs, or to extend its schema later with the self-heal flow below.
</Tip>

## Build, run and self-heal in one prompt

To run the full build, run, heal, approve, re-run loop in action, paste this single prompt and let the agent work through every step. The pattern is deliberate: build a minimal scraper first, then heal it to extend the schema, so the heal envelope's `preview_result` is easier to verify against a known-good baseline. The agent runs every Bright Data CLI command through `npx`, so nothing is installed globally.

```text Prompt theme={null}
Build, run, heal and verify a Bright Data scraper end to end. Run every Bright Data CLI command through `npx -p @brightdata/cli` so nothing is installed globally. Do every step in order and stop if a step fails:

1. Authenticate by running `npx -p @brightdata/cli bdata login`. npx fetches the CLI on demand, so there is nothing to install.
2. Create a Bright Data scraper for https://shopalto.xyz/product/aurora-wireless-headphones that extracts two fields: product name and price. Report the Collector ID.
3. Run that scraper on the same URL and pretty-print the result. Expect one row with name and price.
4. Heal the scraper in place to also capture description, image url and rating alongside the existing name and price. Keep the same Collector ID, anchor the heal on the same URL and show the approval envelope.
5. When the preview shows all five fields, approve the fix anchored on the same URL.
6. Run the scraper on the same URL again and confirm all five fields come back: name, price, description, image_url and rating.
```

> **Expected result:** the agent ends with a JSON row containing `name`, `price`, `description`, `image_url` and `rating`, and the Collector ID is unchanged from step 2.

## Run the flow step by step

Work through the prompts below one at a time when you want to inspect each Collector ID, run result and heal envelope before moving on.

<Steps>
  <Step title="Prompt the agent to authenticate the CLI">
    ```text Prompt theme={null}
    Run every Bright Data CLI command through `npx -p @brightdata/cli` so nothing is installed globally. Authenticate by running `npx -p @brightdata/cli bdata login`, then confirm the version with `npx -p @brightdata/cli bdata --version` before continuing.
    ```

    > **Expected result:** the agent prints a `bdata` version and confirms it is authenticated. npx fetches the CLI on demand, so nothing is installed globally.
  </Step>

  <Step title="Prompt the agent to build a minimal scraper">
    ```text Prompt theme={null}
    Create a Bright Data scraper for https://shopalto.xyz/product/aurora-wireless-headphones that extracts just two fields: product name and price. Show me the Collector ID when it is done.
    ```

    > **Expected result:** the agent reports a Collector ID like `c_mpohus372o5tmid1jk`. Hold onto it; the rest of the prompts reuse the same ID.
  </Step>

  <Step title="Prompt the agent to run it">
    ```text Prompt theme={null}
    Run that scraper on https://shopalto.xyz/product/aurora-wireless-headphones and pretty-print the result.
    ```

    > **Expected result:** a JSON array with one row, populated with `name` and `price` only.
  </Step>

  <Step title="Prompt the agent to heal and add more fields">
    ```text Prompt theme={null}
    Extend the scraper in place. Heal it to also capture description, image url and rating alongside the existing name and price. Keep the same Collector ID. Anchor the heal on https://shopalto.xyz/product/aurora-wireless-headphones and show me the approval envelope when it is ready.
    ```

    > **Expected result:** the agent reports `status: "awaiting_approval"` with a `preview_result` row that now shows five fields.
  </Step>

  <Step title="Prompt the agent to approve the fix">
    ```text Prompt theme={null}
    The preview looks good. Approve the fix, anchored on https://shopalto.xyz/product/aurora-wireless-headphones.
    ```

    > **Expected result:** `status` advances to `done`. The Collector ID is unchanged.
  </Step>

  <Step title="Prompt the agent to verify the expanded schema">
    ```text Prompt theme={null}
    Run the scraper on https://shopalto.xyz/product/aurora-wireless-headphones again and confirm all five fields now come back: name, price, description, image_url and rating.
    ```

    > **Expected result:** the same JSON shape as the earlier run, now with three additional fields per row.
  </Step>
</Steps>

<Tip>
  For an unattended variant, ask the agent to add `--auto-approve` to the heal call. The agent skips the approval gate and polls through to `done` in one step. Use it only when you trust the heal without a manual review.
</Tip>

## Related

<CardGroup>
  <Card title="Build with the Bright Data CLI" icon="terminal" href="/datasets/scraper-studio/build-with-the-cli">
    The canonical CLI tutorial: install, log in, create, run, heal
  </Card>

  <Card title="Self-Healing tool" icon="screwdriver-wrench" href="/datasets/scraper-studio/self-healing-tool">
    Fix a scraper from the Bright Data control panel
  </Card>

  <Card title="Scraper Studio API quickstart" icon="code" href="/datasets/scraper-studio/quickstart">
    Trigger an existing scraper from cURL, Python or Node.js
  </Card>

  <Card title="Bright Data CLI commands" icon="book" href="/cli/commands">
    Flag reference for scraper create, heal and approve
  </Card>
</CardGroup>
