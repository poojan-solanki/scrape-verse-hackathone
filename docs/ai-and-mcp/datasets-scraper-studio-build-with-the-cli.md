# Build a scraper with the Bright Data CLI

> **Official Source**: [https://docs.brightdata.com/datasets/scraper-studio/build-with-the-cli](https://docs.brightdata.com/datasets/scraper-studio/build-with-the-cli)
> **Category**: `ai-and-mcp`

---

Use the Bright Data CLI to create, run and self-heal a Scraper Studio scraper from your terminal or any coding agent like Claude Code or Cursor.

The Bright Data CLI builds Bright Data Scraper Studio scrapers from your terminal in three commands: log in with `bdata login`, then `bdata scraper create` and `bdata scraper run`. Run it on demand with `npx`, so there is nothing to install. This tutorial walks you through building a Hacker News top-stories scraper end to end. The CLI runs unchanged inside the embedded terminal of any coding agent like Claude Code, Cursor or Codex.

**Time to complete:** about 10 minutes (AI generation runs in the background)

## Prerequisites

* A Bright Data account ([sign up free](https://brightdata.com/?hs_signup=1\&utm_source=docs), no card required)
* A terminal. Any embedded terminal works too: Claude Code, Cursor, Codex, VS Code

## Run the Bright Data CLI with npx

You do not install anything. Run the CLI on demand with `npx`, which fetches the latest version each time:

```bash theme={null}
npx -p @brightdata/cli bdata --version
```

To keep the rest of this tutorial's commands short, alias `bdata` for your shell session. Otherwise, prefix any `bdata` command below with `npx -p @brightdata/cli`:

```bash theme={null}
alias bdata="npx -p @brightdata/cli bdata"
```

The CLI is published as `@brightdata/cli` on npm. The `bdata` and `brightdata` commands are interchangeable. Prefer a permanent command instead of npx? Install it globally with `npm install -g @brightdata/cli`.

## Build your first scraper from the terminal

<Steps>
  <Step title="Log in">
    Run `bdata login`. The CLI opens a browser tab so you can authorize it against your Bright Data account, then stores your API key locally. You do not paste or copy a key.

    ```bash theme={null}
    bdata login
    ```

    > **Expected result:**
    >
    > ```text theme={null}
    > Opening browser for Bright Data authentication...
    > Logged in successfully. Key: 2e75****12bf
    > Checking for required zones...
    > Zone "cli_unlocker" already exists.
    > Zone "cli_browser" already exists.
    > ```

    The two zones (`cli_unlocker` and `cli_browser`) are the Web Unlocker API and Browser API endpoints the CLI uses when running scrapers. Bright Data creates them automatically on first login.
  </Step>

  <Step title="Create the scraper">
    Pass a target URL and one sentence describing the data you want. Bright Data's AI Agent generates the output schema, writes the scraper code and returns a Collector ID.

    ```bash theme={null}
    bdata scraper create https://news.ycombinator.com \
      "Extract top stories: title, url, points, author, comment count"
    ```

    The AI pipeline runs in seven stages, printed live: `user_intent_analyzer`, `planner`, `collector_maintainer`, `output_schema_generator`, `code_generator`, `input_schema_generator`, `preview_runner` and `preview_picker`. Typical wall-clock time is 5 to 15 minutes; complex targets can take up to 25 minutes.

    > **Expected result:**
    >
    > ```text theme={null}
    > Template created: c_mpohus372o5tmid1jk
    > Triggering AI generation...
    > Generating scraper...
    > Step: user_intent_analyzer — polling (attempt 1/600)
    > ...
    > Done in 280 poll attempts.
    > {"status":"done","completed_steps":[...],"step":"preview_picker"}
    > ```

    Save the Collector ID (the `c_*` string). It is the stable handle for every subsequent run, schedule or API call on this scraper.
  </Step>

  <Step title="Run the scraper">
    Pass the Collector ID and a URL. Use `--pretty` to format the JSON output.

    ```bash theme={null}
    bdata scraper run c_mpohus372o5tmid1jk https://news.ycombinator.com --pretty
    ```

    The CLI tries realtime mode first. If the scraper triggers more pages than the realtime limit allows, the CLI silently falls back to batch mode (`POST /dca/trigger` then poll `GET /dca/dataset`) and continues. No flag needed.

    > **Expected result:** a JSON array, one row per result.
    >
    > ```json theme={null}
    > [
    >   {
    >     "title": "Last.fm is now independent",
    >     "url": "https://support.last.fm/t/last-fm-is-now-independent/118591",
    >     "points": 447,
    >     "author": "twistslider",
    >     "comment_count": 131
    >   },
    >   {
    >     "title": "DuckDuckGo search saw 28% more visits after Google said people love AI mode",
    >     "url": "https://www.pcgamer.com/hardware/duckduckgos-ai-free-search-saw-nearly-28-percent-more-visits-in-the-week-following-googles-insistence-that-people-love-ai-mode/",
    >     "points": 418,
    >     "author": "HelloUsername",
    >     "comment_count": 212
    >   }
    > ]
    > ```
  </Step>
</Steps>

## How do I use this from Claude Code, Cursor or Codex?

The Bright Data CLI runs inside any embedded terminal as-is. The coding agent is not building the scraper itself; the CLI calls Bright Data's AI Agent, and the coding agent calls the CLI on your behalf.

Two integrations make the CLI feel native inside a coding agent:

**Pin the Collector ID in the agent's rules file** so the agent re-uses your scraper across sessions instead of building a fresh one every time:

```text CLAUDE.md / .cursor/rules / CODEX.md theme={null}
SCRAPER_STUDIO_COLLECTOR_ID=c_mpohus372o5tmid1jk
HACKER_NEWS_SCRAPER_USAGE="bdata scraper run $SCRAPER_STUDIO_COLLECTOR_ID <url> --pretty"
```

**Wire Bright Data's MCP server into your agent** with `brightdata add mcp`. The MCP server is separate from the Scraper Studio CLI but gives the agent additional scraping tools (`scrape_as_markdown`, `search_engine` and others) it can call directly:

```bash theme={null}
brightdata add mcp                # interactive: pick Claude Code, Cursor or Codex
```

See the [Bright Data MCP server quickstart](/ai/mcp-server-quickstart) for what the MCP exposes.

## What just happened?

Three CLI commands mapped to four Bright Data Scraper Studio API endpoints. Use this table to translate the CLI flow into raw HTTP calls when you are ready to integrate without the CLI:

| You ran                           | Bright Data API endpoint behind it                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `bdata login`                     | Local credential store. Stores the API key from [Account Settings](https://brightdata.com/cp/setting). |
| `bdata scraper create`            | `POST /dca/collector` then `POST /dca/collectors/{c_*}/automate_template`                              |
| `bdata scraper run` (small input) | `POST /dca/trigger_immediate` then `GET /dca/get_result`                                               |
| `bdata scraper run` (large input) | `POST /dca/trigger` then poll `GET /dca/dataset?id=j_*`                                                |

For a worked example of the underlying API in cURL, Python and Node.js, see the [Bright Data Scraper Studio API quickstart](/datasets/scraper-studio/quickstart). For every endpoint, see the [Scraper Studio API reference](/api-reference/scraper-studio-api/Choose_a_delivery_type_on_request_level).

## How do I fix a scraper when the site changes?

When a target site is redesigned and a scraper starts returning null or missing fields, fix it in place with `bdata scraper heal`. Self-healing keeps the same Collector ID, so every trigger, schedule and integration that references the scraper keeps working. The flow is run, inspect, heal, approve, re-run.

<Steps>
  <Step title="Heal the scraper">
    Pass the Collector ID and a plain-language description of what broke. Keep the prompt under 1,000 characters.

    ```bash theme={null}
    bdata scraper heal c_mpohus372o5tmid1jk \
      "The points and comment_count fields return null since the site redesign. Re-capture them from the new markup." \
      --url https://news.ycombinator.com
    ```

    By default, `heal` stops at an approval gate so you can review the proposed fix before it goes live.

    > **Expected result:** the command returns an envelope with `status: "awaiting_approval"` and a `preview_result` showing sample output from the proposed fix, plus a `next_step` hint with the command to run next.
  </Step>

  <Step title="Approve or reject the fix">
    Review the preview. If it looks right, approve it. The fix commits to the existing scraper and the Collector ID does not change.

    ```bash theme={null}
    bdata scraper approve c_mpohus372o5tmid1jk --url https://news.ycombinator.com
    ```

    To discard the proposed fix and try a sharper prompt instead, reject it:

    ```bash theme={null}
    bdata scraper approve c_mpohus372o5tmid1jk --reject
    ```

    > **Expected result:** on approval, `status` advances to `done`. On reject, the scraper is left unchanged so you can run `heal` again with a clearer prompt.
  </Step>

  <Step title="Re-run to verify">
    Run the healed scraper on the same URL and confirm the previously broken fields are populated.

    ```bash theme={null}
    bdata scraper run c_mpohus372o5tmid1jk https://news.ycombinator.com --pretty
    ```
  </Step>
</Steps>

<Tip>
  For unattended workflows, add `--auto-approve` to the `heal` command. It approves the fix automatically and polls through to `done` in one step. Use it only when you trust the heal without a manual review.
</Tip>

## Frequently asked questions

<AccordionGroup>
  <Accordion title="Why did `bdata scraper create` take longer than 10 minutes?">
    AI generation timing depends on target complexity. Simple single-page scrapers finish in 5 to 10 minutes. Pages with lazy-load, pagination or anti-bot challenges can take 15 to 25 minutes. The CLI polls Bright Data's AI Flow API every five seconds and prints the current stage, so you can leave it running and check back. No action is needed while you wait.
  </Accordion>

  <Accordion title="Why did the CLI switch from realtime to batch mode mid-run?">
    Realtime mode caps the number of page loads per request. When a scraper triggers more pages than the realtime limit allows, the CLI prints `Realtime page limit exceeded, switching to batch mode...`, submits the same inputs to `POST /dca/trigger`, and polls `GET /dca/dataset?id=j_*` until the snapshot is ready. The switch is automatic and the final JSON shape is identical. See [Scraper Studio specifications](/datasets/scraper-studio/specifications) for the page-load limits.
  </Accordion>

  <Accordion title="Why are some rows missing fields like `points` or `comment_count`?">
    The AI Agent's generated schema is per-row best-effort, not strict. Jobs posts, "Show HN" entries and very new submissions on Hacker News do not always have a points or comment count yet, so the scraper returns the row with those fields omitted rather than inventing a value. Treat missing fields as `null` in your own code. To enforce a stricter schema, open the scraper in [Scraper Studio](/datasets/scraper-studio/ai-agent) or rewrite the schema with the [Self-Healing tool](/datasets/scraper-studio/self-healing-tool).
  </Accordion>

  <Accordion title="Can I trigger this scraper from my own code instead of the CLI?">
    Yes. The Collector ID returned by `bdata scraper create` (the `c_*` string) is the same handle the Bright Data Scraper Studio API uses. Pass it to `POST /dca/trigger` from any HTTP client. See the [Bright Data Scraper Studio API quickstart](/datasets/scraper-studio/quickstart) for cURL, Python and Node.js examples.
  </Accordion>

  <Accordion title="How do I fix the scraper when the target site changes?">
    Fix it in place with `bdata scraper heal`, which keeps the same Collector ID. See [How do I fix a scraper when the site changes?](#how-do-i-fix-a-scraper-when-the-site-changes) above for the full run, heal, approve, re-run flow. Two alternatives:

    * **Control panel:** use the [Self-Healing tool](/datasets/scraper-studio/self-healing-tool) to describe the fix in plain language.
    * **Direct API:** the `heal` and `approve` commands wrap a three-call loop. `POST /dca/collectors/{c_*}/refactor_template` with the prompt, poll `GET .../refactor_template/progress` until `status` is `pending_answer`, then `POST .../resume_automation_job` to approve or reject. See [Trigger Self-Healing](/api-reference/scraper-studio-api/ai-flow/trigger-self-healing) and [Resume Self-Healing Job](/api-reference/scraper-studio-api/ai-flow/resume-self-healing-job). For a Node.js implementation, see the [Scraper Studio Self-Healing demo](https://github.com/anil-bd/scraper-studio-self-healing-demo).
  </Accordion>

  <Accordion title="Does `bdata login` work without a browser, for example in CI?">
    The `bdata login` command requires a browser callback. For headless environments, export your API key as `BRIGHTDATA_API_KEY` and the CLI uses it directly without a login step:

    ```bash theme={null}
    export BRIGHTDATA_API_KEY="your_api_key_here"
    bdata scraper run c_mpohus372o5tmid1jk https://news.ycombinator.com
    ```

    Copy the key from [Account Settings](https://brightdata.com/cp/setting).
  </Accordion>
</AccordionGroup>

## Related

<CardGroup>
  <Card title="Build with the AI Agent" icon="wand-magic-sparkles" href="/datasets/scraper-studio/ai-agent">
    Build the same scraper from the Bright Data control panel instead of the terminal
  </Card>

  <Card title="Scraper Studio API quickstart" icon="code" href="/datasets/scraper-studio/quickstart">
    Trigger an existing scraper from cURL, Python or Node.js
  </Card>

  <Card title="Self-Healing tool" icon="screwdriver-wrench" href="/datasets/scraper-studio/self-healing-tool">
    Fix a scraper with a plain-language prompt when a target site changes
  </Card>

  <Card title="Bright Data CLI overview" icon="terminal" href="/cli/overview">
    Every `bdata` command, with examples
  </Card>
</CardGroup>
