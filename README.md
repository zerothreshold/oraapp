# Offroad Academies

Marketing site for Offroad Academies, which runs off-road motorcycle training on Andra Dam Road outside Pune. It covers adventure clinics at ProDirt Adventure and flat track coaching at the TVS Drift-R School.

Live at [offroadacademies.com](https://offroadacademies.com).

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, and Radix UI primitives with shadcn-style components. Fonts are Barlow and Barlow Condensed through `next/font`.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm build && pnpm start
```

## Where things live

- `src/app` holds the routes: home, our story, events, contact, and the legal pages.
- `src/components` holds the blocks, layouts, and `ui` primitives.
- `src/data/site.ts` holds the site name, contact details, socials, and page titles. Metadata, the sitemap, and structured data all read from it, so edit it there.
- `public` holds images and videos.

## Targets

The site is built for mobile first, checked at 720p, 1080p, and 2K screens.

## For AI agents

See [AGENTS.md](./AGENTS.md).
