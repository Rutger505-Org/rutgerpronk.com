# rutgerpronk.com

Rutger's portfolio (single page, en + nl). Based on Rutger505-Org/nextjs-template: same CI/K3s deploy, branch/PR rules and pitfalls, see that repo's AGENTS.md. Below only what differs.

## Differences from the template
- **No DB, no auth, no tRPC, no `src/env.ts`**; Tailwind v3 (`tailwind.config.ts`)
- Checks: `bun run lint`, `bun run typecheck`. Dev: `cp .env.example .env` (dummy values fine), `bun run dev`
- Prod: `https://rutgerpronk.com`, previews `https://pr-<N>.rutgerpronk.com`, namespace prefix `portfolio` (`APPLICATION_NAME`)

## Content
- **i18n**: next-intl, `messages/en.json` + `messages/nl.json` (keep both in sync), routing in `src/i18n/`. Default `en`; `/` → `/en` permanent redirect in `next.config.ts`; `localeDetection` and `alternateLinks` off on purpose (canonical/hreflang, see comments in `src/i18n/routing.ts`)
- Projects: `src/lib/projects.ts`, screenshots in `public/projects/<project>/` (webp); experience `src/lib/experience.ts`, stack `src/lib/stack.ts`
- `public/llms.txt`: update when the site's content changes meaningfully
- Fonts self-hosted in `src/fonts/` via `next/font/local` (Google Fonts fetch broke CI builds); keep the OFL license files

## Contact form
- Server action `src/app/[locale]/actions.ts` + `src/lib/email.ts`, sends via Gmail SMTP
- Env: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `RECIPIENT_EMAIL` (repo `DEPLOYMENT_GMAIL_USER`, `DEPLOYMENT_RECIPIENT_EMAIL` vars, `DEPLOYMENT_GMAIL_APP_PASSWORD` secret). Missing → throws at module load (can 500 the page), not a zod error

## Pitfalls
- `act/*.example` event files are from the old tag-based deploy; prod now deploys on push to main
