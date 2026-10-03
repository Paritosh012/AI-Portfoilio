# Portfolio

Personal portfolio of Paritosh Jaiswal, built with Next.js (App Router), TypeScript and Tailwind CSS v4.

**Live:** _add Vercel URL here_

## Features

- Single-page dark design: hero, about, projects, experience/education tabs, skills, contact
- A statically generated detail page per project (`/projects/[slug]`); unknown slugs return 404
- All content in typed data files under `src/data/` (projects, experience, skills, site info)
- Motion with CSS only: looping hero text, scroll-driven reveals with a no-support fallback, all disabled for `prefers-reduced-motion`
- Self-hosted fonts (Montserrat, Unbounded) via `next/font/local`, so builds need no network
- Client components only where needed: active nav link, tabs, copy-email button, cursor glow
- Accessibility: skip link, ARIA tabs with arrow keys, native `<details>` for expandable cards, labelled icon links, visible focus
- 12 Jest + React Testing Library tests
- GitHub Actions CI: lint, format check, tests, build, Docker image build
- Multi-stage Dockerfile using Next.js standalone output

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script           | What it does                           |
| ---------------- | -------------------------------------- |
| `npm run build`  | Production build                       |
| `npm test`       | Jest tests                             |
| `npm run lint`   | ESLint                                 |
| `npm run format` | Prettier (also sorts Tailwind classes) |

## Run with Docker

```bash
docker compose up --build   # http://localhost:3000
```

## Project structure

```
src/
  app/            routes: /, /projects/[slug], 404; globals.css (design tokens); fonts/
  components/     Hero, About, ProjectGrid, ProjectCard, Experience, WorkTabs, Skills, Contact, ...
  data/           projects.ts, experience.ts, skills.ts, site.ts (name, links, photo, resume)
  types/          Project, TimelineEntry, SkillGroup
  __tests__/      component tests
```

Design decisions and the reasons behind them are in [docs/DECISIONS.md](docs/DECISIONS.md).

## Credits

Visual design inspired by Habib Ur Rehman's [portfolio](https://github.com/habib277672/Personal-Portfolio) (Panda Coders). No code was copied; this site is built from scratch in Next.js and Tailwind. Fonts: Montserrat and Unbounded (SIL Open Font License).
