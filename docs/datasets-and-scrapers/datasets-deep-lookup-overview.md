# Deep Lookup documentation

> **Official Source**: [https://docs.brightdata.com/datasets/deep-lookup/overview](https://docs.brightdata.com/datasets/deep-lookup/overview)
> **Category**: `datasets-and-scrapers`

---

Deep Lookup is an AI-powered research tool for finding companies, professionals, and entities from 1,000+ public sources with 95%+ accuracy.

## Introduction

Deep Lookup is an AI-powered research tool that allows you to search the public web like a database. Find any set of companies or professionals with precision and get table-ready structured data. With Deep Lookup, you can quickly identify real-world entities such as professionals, companies, products, news and articles, locations, and events that meet specific filters and criteria.

## Why Deep Lookup?

<CardGroup>
  <Card title="Lightning Fast Research" icon="bolt-lightning">
    Turn weeks of manual research into minutes. Deep Lookup searches 1,000+ sources simultaneously, delivering comprehensive results instantly.
  </Card>

  <Card title="95%+ Accuracy" icon="check">
    Our advanced AI models validate data across multiple sources, ensuring the highest quality results for critical business decisions.
  </Card>

  <Card title="Natural Language Queries" icon="language">
    No complex query builders or SQL knowledge needed. Simply describe what you're looking for in plain English, starting with "Find all..."
  </Card>

  <Card title="Pay Only for Value" icon="sparkles">
    Never pay for unmatched results. Our transparent pricing means you only pay for the verified data you receive, not for skipped or filtered-out records.
  </Card>
</CardGroup>

## Key Features

**Universal Entity Search**\
Find companies, professionals, products, news, locations, and events using specific, measurable criteria.

**Smart Data Enrichment**\
Automatically add valuable data points to your results:

* Contact information and emails
* Revenue and employee counts
* Technology stacks and funding data
* Social profiles and company details

**Preview Mode**\
Get 10 free sample records to validate your approach before running the full research.

**Post-Run Enhancement**\
Add new data columns even after your initial research is complete.

**Source Transparency**\
See exactly where each data point comes from with full source attribution.

**Real-Time Extraction**\
Access the most current data available from the public web, not outdated databases.

## How Deep Lookup Works

<Steps>
  <Step title="Start Your Query">
    Begin with "Find all" followed by what you're looking for.
  </Step>

  <Step title="Be Specific">
    The more specific your query, the better your results. Deep Lookup works best when you provide clear, measurable criteria.
  </Step>

  <Step title="Preview & Refine">
    Get 10 free sample records to validate your approach before running the full research.
  </Step>
</Steps>

## Understanding Column Types

When building your research in Preview Mode, you'll work with two types of columns:

### How enrich columns work

**Purpose:** Add new attributes to each result using data from the public web.

These columns provide additional information about your entities without filtering results. For example:

* CEO name for a company
* Revenue figures
* Contact information
* Social media profiles
* Technology stack used

### How filter columns work

**Purpose:** Limit results by applying specific conditions to your query.

These columns determine which records are included in your dataset. For example:

* Companies with revenue greater than \$10 million
* Professionals with 5+ years experience
* Products priced under \$100
* Articles published in the last 30 days

## Understanding "Skipped" Results

When you see "skipped" in a cell, it means the candidate entity did not match at least one of your filter criteria. This is how Deep Lookup ensures precision in your results.

### Important Points About Skipped Results:

* **More filters = fewer results**: The more filters you apply, the more precise your results become, but you may get fewer total matches
* **Each filter must be satisfied**: All filter conditions must be met for an entity to be included
* **Optimization tip**: If you're getting too many skipped results, consider removing some filters to broaden your search
* **Quality over quantity**: Skipped results ensure you only pay for data that exactly matches your criteria

### Example:

If you search for "Find all SaaS companies in California with >100 employees AND revenue >\$10M AND founded after 2020":

* A company with 150 employees and \$15M revenue but founded in 2019 would be skipped
* Only companies meeting ALL criteria appear in your final results

## Deep Lookup Modes

### Preview Mode (Recommended)

The best way to ensure accurate results before spending credits:

* **Free preview results** - Get up to 10 sample records at no cost to understand expected outcomes
* **Query refinement** - Deep Lookup's AI assistant helps you refine and improve query accuracy
* **Column customization** - Review and adjust column names, types, and specifications before running
* **Specs panel control** - Tweak column settings, reorder fields, change types, or add new columns
* **Runtime estimates** - See processing time and cost estimates before committing

### When to use Instant Mode

For fast, one-shot results when you know exactly what you need:

* Run queries immediately for simple, well-defined searches
* Best for repeat queries with proven parameters
* Skip the preview step when you're confident in your criteria

### When to use Advanced Mode

For complex, multi-step research:

* Build sophisticated queries with multiple refinement steps
* Perfect for deep market research or complex data gathering
* Combine multiple data sources and relationships

## Writing Effective Queries

### The Basic Structure

Start every query with "Find all" and describe exactly what you need:

```text theme={null}
Find all B2B SaaS companies in Texas with revenue greater 
than $10 million and less than 100 employees founded after 2020
```

### Key Success Tips

**1. Use Natural Language Comparisons**

* "greater than 50 employees"
* "less than \$5 million in revenue"
* "between 100 and 500 employees"

**2. Specify Geographic Boundaries**

* "in California"
* "headquartered in London"
* "operating in Southeast Asia"

**3. Add Revenue or Size Constraints**

* "with annual revenue greater than \$20 million"
* "having between 50 and 200 employees"

**4. Combine 2-4 Specific Criteria**
The sweet spot for queries is combining a few specific requirements

**5. Include Industry-Specific Terms**

* For tech: "SaaS", "API-first", "cloud-native"
* For finance: "Series B funded", "EBITDA positive"
* For retail: "D2C", "omnichannel", "subscription-based"

## Popular Use Cases

### Sales & Lead Generation

**B2B Decision Maker Targeting** - 100% match rate

```text theme={null}
Find all VPs of Sales at fintech companies in New York with 
50-200 employees including their verified email addresses
```

### How to research competitors

**Competitor Pricing Research** - 97% match rate

```text theme={null}
Find all project management software with pricing between 
$10-100 per user that offer kanban board features
```

### Recruitment & Talent Acquisition

**Executive Search** - 96% match rate

```text theme={null}
Find all Chief Technology Officers at healthcare companies 
in California with more than 500 employees
```

### How to run market research

**Industry Analysis** - 95% match rate

```text theme={null}
Find all electric vehicle manufacturers in the United States 
with manufacturing facilities and more than 500 employees
```

### How to research investments

**Deal Flow Discovery** - 90% match rate

```text theme={null}
Find all Series A fintech startups in Europe that raised 
between $5M and $20M in the last 18 months
```

## What success looks like

| Metric           | Value             | Impact                                   |
| :--------------- | :---------------- | :--------------------------------------- |
| **Time Saved**   | 20-30 min/record  | Weeks of research completed in minutes   |
| **Data Sources** | 1,000+ per result | Comprehensive validation                 |
| **Match Rates**  | 90-100%           | Industry-leading accuracy                |
| **ROI**          | 10-20x            | Each lead worth \$10-20 in research time |

## What to Avoid

### Overly Broad Queries

**Avoid:** "Find all companies"\
**Better:** "Find all software companies in Boston with 50 to 200 employees"

### Too Many Constraints

**Avoid:** Queries with more than 5-6 different criteria\
**Better:** Focus on 2-4 most important criteria

### Avoid vague terms

**Avoid:** "Find all big companies"\
**Better:** "Find all companies with revenue greater than \$100 million"

### Individual Person Searches Without Context

**Avoid:** "Find all people named John"\
**Better:** "Find all executives named John at Fortune 500 companies"

## FAQ

<AccordionGroup>
  <Accordion title="How is Deep Lookup different from Google or ChatGPT?">
    Deep Lookup provides structured, table-ready data from 1,000+ sources. Unlike search engines that give you links or AI that generates text, we deliver verified, actionable business data you can immediately use.
  </Accordion>

  <Accordion title="What happens if I get too many skipped results?">
    Skipped results indicate entities that don't match all your filter criteria. To get more results, try removing some filters or making your criteria less restrictive. Remember, you only pay for matched results, not skipped ones.
  </Accordion>

  <Accordion title="Can I change column types after preview?">
    Yes! In Preview Mode, you can adjust column types, add new columns, and modify specifications before running your full research.
  </Accordion>

  <Accordion title="How accurate is the data?">
    95%+ accuracy with full source transparency. Every data point is validated across multiple sources before delivery.
  </Accordion>

  <Accordion title="Can I test before buying?">
    Yes! Preview Mode gives you 10 free sample records for any query to validate quality before running a full research project.
  </Accordion>
</AccordionGroup>

## Ready to Start Your Research?

Start with 5 free queries to experience the power of Deep Lookup. No credit card required.

[Get Started Free](https://brightdata.com/products/deep-lookup) | [View Pricing](/datasets/deep-lookup/pricing) | [API Documentation](/api-reference/deep-lookup)
