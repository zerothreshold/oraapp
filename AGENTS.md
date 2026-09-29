# AGENTS.md

Marketing site for Offroad Academies. Next.js 16 (App Router), React 19, Tailwind CSS 4, Radix UI.

## Commands

Use pnpm.

- `pnpm dev` starts the dev server on http://localhost:3000.
- `pnpm lint` runs ESLint. Run it before you call a change done.
- `pnpm build` runs a production build and type check. Run it after changes to routes, metadata, or config.

There is no test suite.

## Target devices

This app targets mobile screens at three resolutions:

- 720p (720 x 1280)
- 1080p (1080 x 1920)
- 2K (1440 x 2560)

Design mobile first. Check every UI change in device emulation at all three sizes. Desktop layouts must not break, but mobile decides whether a change is right.

## Project layout

- `src/app` has the routes. `src/app/layout.tsx` sets fonts and site-wide metadata.
- `src/components/blocks` has the header, footer, and home sections. `src/components/ui` has the shadcn-style primitives.
- `src/data/site.ts` is the single source for name, contact details, socials, and page titles. Metadata, the sitemap, and JSON-LD read from it. Change values there, not in each page.
- Import with the `@/` alias (`@/components/...`).

## Design rules

- The page background is white. The footer is the only dark block. Do not add dark sections.
- Every inner page opens with `src/components/layouts/page-intro.tsx`: a full-width photo with the page title over it. Do not replace it with a text-only heading.
- Use existing `ui` components and Tailwind classes before writing custom CSS.

## Delegating to subagents

Subagents are optional. Use one when a task is large, self-contained, and can run without the rest of the conversation. Do small edits and single-file lookups yourself.

- Spawn at most three subagents in one session. Count every spawn, finished or not.
- Subagents cannot spawn subagents. Only the main agent delegates. If a subagent decides it needs help, it reports back and the main agent decides.
- Give each subagent one task with a clear end. Include the goal, the files or folders involved, the constraints above, and the shape of the answer you want back.
- Subagents start with no memory of the conversation. Put in the brief everything they need.
- Run independent subagents in parallel. Do not run two that edit the same file.
- Read-only work (searching, auditing, reviewing) suits subagents best. When one edits files, list which files it owns.
- Check what a subagent returns before you rely on it. Its report says what it meant to do, not always what it did.

## Boundaries

- Ask before adding a dependency, changing `next.config.mjs`, or touching the lockfiles. The repo has both `pnpm-lock.yaml` and `package-lock.json`, so do not regenerate either without asking.
- Do not commit or push unless asked.
- Never commit secrets or `.env` files.
