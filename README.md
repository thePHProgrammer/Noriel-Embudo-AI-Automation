# Noriel Embudo — AI Automation Portfolio

A freelance portfolio site for Noriel Joy Embudo, an AI Automation & Agentic
Systems engineer. Built to lead with **services offered** and real
**problem → solution → impact case studies**, not a resume dump.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion,
deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, for the contact form to send email | [Resend](https://resend.com) API key |
| `CONTACT_TO_EMAIL` | No | Where form submissions land (defaults to the email in `src/content/site.ts`) |
| `RESEND_FROM_EMAIL` | No | Sender address. Defaults to `onboarding@resend.dev`, which works immediately with no domain setup. Switch to a verified-domain address once you have one, for better deliverability. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL, used in metadata/OG tags and the sitemap |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Your real Calendly (or other scheduling) link, used by the "Book a call" buttons. Falls back to a placeholder if unset. |

Without `RESEND_API_KEY` set, the contact form will show a friendly error
and fall back to a direct `mailto:` link — it won't crash the site.

## Before you launch

- **Calendly link**: set `NEXT_PUBLIC_CALENDLY_URL` (see above) to your
  real scheduling link. Without it, the site falls back to a placeholder
  defined in `src/content/site.ts`.
- **Site content**: everything shown on the site (services, case studies,
  process steps, stats, tech stack, socials) lives in typed files under
  `src/content/`. Edit those, not the components, to update copy.
- **Resend sender domain**: once you verify a domain with Resend, set
  `RESEND_FROM_EMAIL` to an address on that domain for better inbox
  placement.

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add the environment variables above in **Project Settings → Environment
   Variables**.
4. Deploy — no other configuration is needed (zero-config Next.js App
   Router build).

## Project structure

```
src/
  app/            Routes, layout, and Next.js metadata files (icons, OG image, sitemap, robots)
  components/     UI primitives, layout, motion, and page sections
  content/        Editable site copy: services, case studies, stats, tech stack
  lib/            Types, utilities, the NE monogram mark, and form validation
```

## Design notes

- Dark-only "automation-core" theme (no light/dark toggle) — navy
  background with a blue→violet accent gradient.
- Mobile-first: every section is laid out for small screens first, then
  enhanced at `sm:`/`md:`/`lg:` breakpoints.
- The favicon/logo is a hand-authored "NE" monogram
  (`src/lib/ne-mark.tsx`), reused across the on-page logo, favicon,
  apple-icon, and Open Graph image.
