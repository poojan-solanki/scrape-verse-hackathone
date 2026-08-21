# Installation & setup

> **Official Source**: [https://docs.brightdata.com/cli/installation](https://docs.brightdata.com/cli/installation)
> **Category**: `ai-and-mcp`

---

Install the Bright Data CLI (1000+ scrapers) via npm or curl and authenticate your account with an API key in 1 minute. Includes setup verification commands.

## Install the CLI

The fastest way to run the Bright Data CLI is `npx`, which executes the latest version with no global install:

```bash theme={null}
npx -p @brightdata/cli brightdata --version
```

Prefix any command in these docs with `npx -p @brightdata/cli` to run it the same way, with no global dependency to maintain. The Bright Data CLI requires Node.js 20 or later.

For a persistent `brightdata` command and faster startup, install the CLI globally instead:

<CodeGroup>
  ```bash npm (recommended) theme={null}
  npm install -g @brightdata/cli
  ```

  ```bash yarn theme={null}
  yarn global add @brightdata/cli
  ```

  ```bash pnpm theme={null}
  pnpm add -g @brightdata/cli
  ```
</CodeGroup>

Verify a global install:

```bash theme={null}
brightdata --version
```

<Tip>
  The shorthand alias `bdata` is also available, both with `npx -p @brightdata/cli bdata` and after a global install - use whichever you prefer.
</Tip>

## Update the CLI

Upgrade to the latest version with the same package manager you installed with:

<CodeGroup>
  ```bash npm theme={null}
  npm install -g @brightdata/cli@latest
  ```

  ```bash yarn theme={null}
  yarn global add @brightdata/cli@latest
  ```

  ```bash pnpm theme={null}
  pnpm add -g @brightdata/cli@latest
  ```
</CodeGroup>

Check your installed version against the latest published version:

```bash theme={null}
brightdata --version           # your installed version
npm view @brightdata/cli version   # latest version on npm
```

<Tip>
  New commands ship in CLI releases. For example, `scraper heal` and `scraper approve` were added in v0.3.1. Run the update command above to pick them up. See the [release notes](https://github.com/brightdata/cli/releases) for what changed in each version.
</Tip>

## Authenticate

Run the login command to connect your Bright Data account:

```bash theme={null}
brightdata login
```

This opens your browser for secure OAuth authentication. Once complete, the CLI:

1. Validates and stores your API key locally
2. Auto-creates required proxy zones (`cli_unlocker`, `cli_browser`)
3. Sets sensible defaults so you can start immediately

<Check>
  You only need to log in **once**. All subsequent commands authenticate automatically.
</Check>

### Alternative authentication methods

<AccordionGroup>
  <Accordion title="Headless / SSH environments" icon="server">
    When no browser is available, use the device flow:

    ```bash theme={null}
    brightdata login --device
    ```

    This prints a URL and a code. Open the URL on any device, enter the code, and the CLI completes authentication.
  </Accordion>

  <Accordion title="Direct API key" icon="key">
    For CI/CD pipelines or non-interactive environments, pass your API key directly:

    ```bash theme={null}
    brightdata login --api-key YOUR_API_KEY
    ```

    You can find your API key in the [Bright Data control panel](https://brightdata.com/cp/setting).
  </Accordion>

  <Accordion title="Environment variable" icon="leaf">
    Set the `BRIGHTDATA_API_KEY` environment variable to skip login entirely:

    ```bash theme={null}
    export BRIGHTDATA_API_KEY=YOUR_API_KEY
    ```

    This is useful for Docker containers, GitHub Actions, and other automated environments.
  </Accordion>
</AccordionGroup>

## Interactive setup wizard

For a guided first-time experience, use the init command:

```bash theme={null}
brightdata init
```

This walks you through authentication, zone selection, and default configuration step by step.

| Flag                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| `--skip-auth`         | Skip the authentication step (if already logged in) |
| `-k, --api-key <key>` | Provide API key directly                            |

## Verify your setup

After logging in, confirm everything is working:

```bash theme={null}
# Check your configuration
brightdata config

# Verify API connectivity
brightdata budget

# Try a quick scrape
brightdata scrape https://example.com
```

## Where configuration is stored

The CLI stores credentials and configuration locally:

| OS      | Path                                            |
| ------- | ----------------------------------------------- |
| macOS   | `~/Library/Application Support/brightdata-cli/` |
| Linux   | `~/.config/brightdata-cli/`                     |
| Windows | `%APPDATA%\brightdata-cli\`                     |

Two files are created:

| File               | Purpose                           | Permissions          |
| ------------------ | --------------------------------- | -------------------- |
| `credentials.json` | API key                           | `0o600` (owner-only) |
| `config.json`      | Zones, output format, preferences | Standard             |

<Tip>
  **Priority order for configuration:** CLI flags → Environment variables → `config.json` → Defaults. You can always override any setting on a per-command basis.
</Tip>

## Next steps

<CardGroup>
  <Card title="Commands" icon="code" href="/cli/commands">
    Explore the full command reference.
  </Card>

  <Card title="Usage Examples" icon="book-open" href="/cli/examples">
    Jump into real-world workflows and recipes.
  </Card>
</CardGroup>
