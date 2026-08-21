# Send LinkedIn profiles to your CRM

> **Official Source**: [https://docs.brightdata.com/datasets/scrapers/tutorials/linkedin-to-crm](https://docs.brightdata.com/datasets/scrapers/tutorials/linkedin-to-crm)
> **Category**: `datasets-and-scrapers`

---

Build a pipeline that scrapes LinkedIn profiles with Bright Data and delivers CRM-ready contact records to a Next.js 14 webhook handler deployed on Vercel.

You want to enrich inbound leads automatically. A signup form gives you a LinkedIn URL, and a minute later a contact record with job title, company, location and follower count lands in your CRM. No manual copy-paste, no Zapier-style glue code.

In this tutorial we'll build that pipeline end-to-end. You'll deploy a tiny Next.js webhook handler to Vercel, trigger the Bright Data LinkedIn Scraper API against a handful of profile URLs and watch mapped contact records appear in your Vercel logs within a minute.

We stop at the mapped object. Sending it to a specific CRM is a one-line fetch call we'll sketch out at the end.

## What you'll build

A Next.js API route deployed on Vercel that:

1. Accepts a POST from Bright Data containing a JSON array of scraped LinkedIn profiles
2. Maps each profile into a normalized CRM-shaped contact record
3. Logs the mapped records so you can inspect them in the Vercel dashboard

You'll then trigger a scrape from your terminal pointed at your deployed Vercel URL, and see two profiles get mapped and logged end-to-end.

**Estimated time:** 25 minutes.

## Prerequisites

* A [Bright Data account](https://brightdata.com/cp/start) with an API key ([get your key](https://brightdata.com/cp/setting/users))
* A free [Vercel account](https://vercel.com/signup)
* Node.js 18+ installed locally
* The [Vercel CLI](https://vercel.com/docs/cli) installed: `npm install -g vercel`

## Part 1: Scaffold the Next.js project

In a new terminal, create a minimal Next.js project:

```bash theme={null}
npx create-next-app@latest linkedin-to-crm
```

Accept all defaults. You'll get a working Next.js 14+ project with the App Router. Then move into it:

```bash theme={null}
cd linkedin-to-crm
```

## Part 2: Add the webhook route

Create the file `app/api/webhook/linkedin/route.ts`:

```typescript app/api/webhook/linkedin/route.ts theme={null}
export async function POST(request: Request) {
  const profiles = await request.json();
  console.log(`Received ${profiles.length} profiles from Bright Data`);

  for (const profile of profiles) {
    console.log(`- ${profile.name} (${profile.position})`);
  }

  return Response.json({ received: profiles.length });
}
```

That's the whole receiver. Next.js App Router treats any `route.ts` file as an API endpoint, so this file alone gives you a working `POST /api/webhook/linkedin` route once deployed.

## Part 3: Deploy to Vercel

From the project root:

```bash theme={null}
vercel
```

The first run walks you through login and project creation. Accept the defaults. After a minute you should see output ending with:

```text theme={null}
Production: https://linkedin-to-crm-<hash>.vercel.app
```

Copy that URL. Your webhook endpoint is:

```http theme={null}
https://linkedin-to-crm-<hash>.vercel.app/api/webhook/linkedin
```

<Tip>
  Open your project in the [Vercel dashboard](https://vercel.com/dashboard) and keep the **Logs** tab visible. That's where your `console.log` output will appear when Bright Data POSTs to the endpoint.
</Tip>

## Part 4: Trigger the scrape

Open a second terminal and trigger the Bright Data LinkedIn scraper, pointing it at your Vercel URL:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1viktl72bvl7bjuj0&format=json&uncompressed_webhook=true&endpoint=https://linkedin-to-crm-<hash>.vercel.app/api/webhook/linkedin" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[
    {"url": "https://www.linkedin.com/in/satyanadella"},
    {"url": "https://www.linkedin.com/in/jeffweiner08"}
  ]'
```

Replace `YOUR_API_KEY` with your Bright Data API key and `linkedin-to-crm-<hash>` with your actual Vercel URL.

You should see a response like this immediately:

```json theme={null}
{"snapshot_id":"sd_mntfn0zq7xj0zeay"}
```

The scrape runs asynchronously. You don't need to do anything with the `snapshot_id`. Bright Data POSTs the results to your Vercel endpoint when the job finishes. For two profiles, that usually takes 30 to 60 seconds.

Switch to the Vercel **Logs** tab. Within a minute you should see something like:

```text theme={null}
Received 2 profiles from Bright Data
- Satya Nadella (Chairman and CEO at Microsoft)
- Jeff Weiner (Executive Chairman at LinkedIn)
```

Notice that both profiles arrive in a single POST. Bright Data delivers the whole snapshot in one request, not one profile at a time.

## Part 5: Map profiles to a CRM shape

Right now the handler just logs names and positions. Real CRMs expect contact records with specific field names: `full_name`, `job_title`, `company`, and so on. Let's normalize the Bright Data payload into that shape.

Replace `app/api/webhook/linkedin/route.ts` with:

```typescript app/api/webhook/linkedin/route.ts theme={null}
type BrightDataProfile = {
  name?: string;
  position?: string;
  current_company?: { name?: string };
  country_code?: string;
  city?: string;
  followers?: number;
  url: string;
};

type CrmContact = {
  full_name: string | null;
  job_title: string | null;
  company: string | null;
  country: string | null;
  city: string | null;
  linkedin_url: string;
  follower_count: number;
};

function mapToCrmContact(profile: BrightDataProfile): CrmContact {
  return {
    full_name: profile.name ?? null,
    job_title: profile.position ?? null,
    company: profile.current_company?.name ?? null,
    country: profile.country_code ?? null,
    city: profile.city ?? null,
    linkedin_url: profile.url,
    follower_count: profile.followers ?? 0,
  };
}

export async function POST(request: Request) {
  const profiles: BrightDataProfile[] = await request.json();
  console.log(`Received ${profiles.length} profiles from Bright Data`);

  const contacts = profiles.map(mapToCrmContact);

  for (const contact of contacts) {
    console.log(JSON.stringify(contact, null, 2));
  }

  // Next step: POST each contact to your CRM.
  // Example for HubSpot:
  //   await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ properties: contact }),
  //   });

  return Response.json({ received: contacts.length });
}
```

Redeploy:

```bash theme={null}
vercel --prod
```

Re-run the same curl command from Part 4. This time your Vercel logs should show two complete mapped contacts:

```json theme={null}
Received 2 profiles from Bright Data
{
  "full_name": "Satya Nadella",
  "job_title": "Chairman and CEO at Microsoft",
  "company": "Microsoft",
  "country": "US",
  "city": "Redmond",
  "linkedin_url": "https://www.linkedin.com/in/satyanadella",
  "follower_count": 10842560
}
{
  "full_name": "Jeff Weiner",
  "job_title": "Executive Chairman at LinkedIn",
  "company": "Next Chapter",
  "country": "US",
  "city": "San Francisco Bay Area",
  "linkedin_url": "https://www.linkedin.com/in/jeffweiner08",
  "follower_count": 1200000
}
```

Each object in that log is a complete CRM-ready contact. Sending it to your CRM is a single fetch call. The commented-out block in the handler sketches the HubSpot version. Swap the URL and header for Salesforce, Pipedrive or whatever you use.

## Securing the webhook

Right now anyone who guesses your Vercel URL could POST fake profile data to it. Before you pipe live data into a real CRM, lock down the endpoint.

Bright Data's trigger call accepts a `webhook_header_Authorization` query parameter, which gets forwarded as the `Authorization` header on the webhook POST:

```bash theme={null}
curl -X POST \
  "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l1viktl72bvl7bjuj0&format=json&uncompressed_webhook=true&endpoint=https://linkedin-to-crm-<hash>.vercel.app/api/webhook/linkedin&webhook_header_Authorization=Bearer+YOUR_SHARED_SECRET" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '[{"url": "https://www.linkedin.com/in/satyanadella"}]'
```

Then verify that header in the handler before processing:

```typescript theme={null}
export async function POST(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.WEBHOOK_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const profiles = await request.json();
  // ...rest of the handler
}
```

Set `WEBHOOK_SECRET` as an environment variable in your Vercel project settings, then redeploy.

<Note>
  Bright Data also publishes a list of webhook source IPs you can allowlist. See [Allowlist webhook IPs](/datasets/scrapers/linkedin/data-delivery/webhooks#allowlist-webhook-ips) in the webhook reference.
</Note>

## Congratulations

You've built an end-to-end pipeline that scrapes LinkedIn profiles and delivers CRM-ready contact records to your own server:

* A **Next.js API route** deployed on Vercel that receives Bright Data webhooks
* A **mapper function** that normalizes Bright Data's profile schema into a CRM-shaped contact
* A **trigger call** that fires the scrape asynchronously and tells Bright Data exactly where to send the results

The final hop, POSTing each mapped contact to HubSpot, Salesforce or your own CRM, is a single fetch call that the commented-out block in `route.ts` sketches.

## Next steps

<CardGroup>
  <Card title="Async batch requests" icon="layer-group" href="/datasets/scrapers/linkedin/async-requests">
    Scrape hundreds of URLs in a single batch job.
  </Card>

  <Card title="Amazon S3 delivery" icon="bucket" href="/datasets/scrapers/linkedin/data-delivery/amazon-s3">
    Swap the webhook for an S3 bucket when payloads exceed Vercel's 4.5 MB body limit.
  </Card>

  <Card title="Webhook reference" icon="webhook" href="/datasets/scrapers/linkedin/data-delivery/webhooks">
    Full parameter list, auth headers and IP allowlist.
  </Card>

  <Card title="HubSpot Contacts API" icon="hubspot" href="https://developers.hubspot.com/docs/api/crm/contacts">
    Drop-in replacement for the commented POST in the handler.
  </Card>
</CardGroup>
