# Data validation for customers

> **Official Source**: [https://docs.brightdata.com/datasets/data-validation/data-validation-for-customers](https://docs.brightdata.com/datasets/data-validation/data-validation-for-customers)
> **Category**: `datasets-and-scrapers`

---

How Bright Data's automated dataset validation works across 250+ domains for customers: verification checks, error handling and approval flow before delivery.

## Overview

Bright Data’s automated dataset creation platform consists of a verification and approval phase before the dataset delivery. Bright Data facilitates error handling, validation checks, and customization, ensuring data accuracy and reliability. These validation checks are crucial in saving time, reducing errors in the data, and keeping the data quality at the desired level.

<img alt="flow-chart.png" />

## How does it work?

Once the dataset snapshot is ready:

<Tabs>
  <Tab title="✅ If all validation tests pass">
    The user will get the dataset with an indication in the Bright Data Control Panel that all tests passed.
  </Tab>

  <Tab title="❌ If all/some of the validation tests fail">
    The developer reviews the issues and will decide whether to:

    1. Fix the dataset according to the failed tests.
    2. Deliver the dataset to the user, explaining why the validation test failed but was overridden.

    The user can then decide to:

    1. Approve the snapshot.
    2. Approve the snapshot for this time frame only.
    3. Reject the snapshot, and we will fix the scraper accordingly.
  </Tab>
</Tabs>

When the user approves the dataset snapshot, they proceed to the delivery phase.

## Which validation rules apply

<AccordionGroup>
  <Accordion title="Uniqueness">
    The dataset must contain a certain percentage of unique values.

    * Example: In the LinkedIn company profiles dataset, each company's LinkedIn URL should be unique. If duplicate URLs exist, the same company is listed more than once, violating the uniqueness rule.
  </Accordion>

  <Accordion title="Filling Rate">
    The dataset must contain a minimum percentage of filled values.

    * Example: In a LinkedIn company profiles dataset, at least 90% of the profiles must have the 'Industry' field filled. If more than 10% of the profiles are missing this information (leaving the 'Industry' field blank), the dataset does not meet the required filling rate.
  </Accordion>

  <Accordion title="Required fields">
    Certain fields must be filled; an error will occur if they remain empty.

    * Example: Fields like 'Company Name' and 'Headquarters Location' might be mandatory in the LinkedIn dataset. Any profile lacking this information is flagged as an error.
  </Accordion>

  <Accordion title="Data Stability">
    Compared to previous values collected, the number value must not change by more than X.

    * Example: If the dataset is updated regularly, the number of employees for a company shouldn’t drastically change between updates (e.g., a sudden jump from 50 to 5000 employees) unless there's a known reason (like a merger).
  </Accordion>

  <Accordion title="Type Verification">
    Verifies each entry's data type against its field type (e.g., string, number, date) and flags mismatches for correction.

    * Example: The dataset should only accept date formats in the 'Foundation Date' field. If a text string like 'unknown' is entered, it should be flagged for correction.
  </Accordion>

  <Accordion title="Schema and Field Custom Validation">
    Create a custom rule to validate whether a field exists and its value is valid, such as requiring the size string to be 'S,' 'M,' or 'L.'

    * Example: The dataset might have a field for 'Company Size' with accepted values like 'Small,' 'Medium,' and 'Large.' A record must be flagged if it has a value outside these options.
  </Accordion>

  <Accordion title="Minimum Records Threshold">
    The dataset must have X records (each URL should have X records from the total URL inputs).

    * Example: If the dataset aims to represent companies in a specific sector, like technology, it must have a minimum number of company profiles from this sector to be considered complete and representative.
  </Accordion>

  <Accordion title="Data Size Fluctuation Threshold">
    Determines whether dataset size fluctuations are within a +/- X% range.

    * Example: For datasets updated monthly, the total number of companies listed shouldn’t fluctuate wildly (e.g., more than 10% increase or decrease) from one month to the next unless a specific event or trend is affecting the industry.
  </Accordion>

  <Accordion title="Record Completeness Validation">
    Checks each individual record in the dataset to ensure it doesn't have a high percentage of empty or null fields. If a record has more than a predetermined threshold (e.g., 70%) of its fields empty or null, it triggers an error.

    * Example: In the LinkedIn company profiles dataset, if a specific company's profile has more than 70% of its fields (like industry, size, location, description) empty, this rule would flag it as incomplete.
  </Accordion>

  <Accordion title="Unique Identity and Duplicates Validation">
    Detects and resolves issues that lead to multiple duplicate records in the dataset due to improper identity assignment or entry errors. It ensures each record is distinct and accurately represents a unique data point.

    * Example: In the LinkedIn dataset, this rule would identify cases where the same company is listed multiple times due to errors in assigning unique identifiers. For instance, if slight variations in company profiles (like different spellings of a company name) result in the same company appearing as separate entries, this rule would flag them for correction.
  </Accordion>
</AccordionGroup>

## Main components and functionality

<Frame>
  <img alt="overall-view.png" />
</Frame>

### Evaluating the validation test results

<Frame>
  <img alt="evaluate.png" />
</Frame>

Once the dataset snapshot validation errors are handled, the user is notified to evaluate and choose whether to:

1. Approve
2. Approve temporarily
3. Reject the snapshot.

### How to act on evaluation results

For each failed validation test, the user has three options:

1. **Set a new threshold**
   1. Set custom values - If the developer doesn't reach the default set value, the user can choose a new threshold. The snapshot is returned to the developer once a new threshold is set.
   2. Set for X% - Accept the success rate the developer reached and set the threshold to the value the developer managed to extract.
2. **Ignore test (one time only)** - Accept the value that the developer extracted just once (the default value will not change for the next dataset snapshot)
3. **Reject** - The user doesn’t accept the adjustments to the failed tests; the issues will be returned to the developer to fix. The status will be marked as “Rejected” for additional fixes and will later on be re-send to the customer for approval.

<Frame>
  <img alt="evaluate-options.png" />
</Frame>

In case all issues are ignored/approved, click on “Deliver dataset” to deliver the snapshot.

<Note>A snapshot delivery will be automatically delivered when pending customer approval for 14 days.</Note>

<Frame>
  <img alt="validations-results.png" />
</Frame>

In case all/some issues are rejected, click on “send back to the developer” to send it back for additional fixes.

<Frame>
  <img alt="failed-results.png" />
</Frame>

## Communications and notifications

Users are notified of status updates through their account in the control panel and via email.
