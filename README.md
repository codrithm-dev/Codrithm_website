# Codrithm — Where Coders Make History

<p align="center">
  <img src="public/codrithm-logo.png" alt="Codrithm logo" width="120" />
</p>

<p align="center">
  A responsive, server-rendered website for a values-driven student technology community that helps junior developers learn, lead, and build together.
</p>

<p align="center">
  <a href="https://codrithm-website.vercel.app/"><strong>View the live website</strong></a>
</p>

## Overview

Codrithm's website presents the community's mission, values, services, milestones, project showcases, events, and team through an interactive dark interface. It is built with React 19 and TanStack Start, rendered on the server, and packaged for Vercel through Nitro.

The landing page intentionally features the first seven members from a shared ten-member team dataset. The dedicated team page renders every member.

## Highlights

- Responsive landing page with smooth section navigation
- Dedicated full-team directory
- Animated SVG hero illustration
- Deferred WebGL fluid cursor effect
- Framer Motion reveals, card interactions, and project modal
- Six visual project showcases with stacks and metrics
- Ten optimized WebP team portraits totaling approximately 1 MB
- Per-member portrait focal position and scaling controls
- Accessible skip navigation, focus styles, and reduced-motion handling
- Custom 404, client error boundary, and server-side fallback page
- Open Graph, X/Twitter, canonical, robots, and XML sitemap metadata
- Client and server bundles configured for Vercel deployment

## Routes

| Route        | Purpose                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| /            | Main landing page with community content and seven featured team members |
| /team        | Complete ten-member team directory                                       |
| /sitemap.xml | Server-generated XML sitemap                                             |

Most landing-page navigation uses section anchors such as #about, #services, #projects, #community, #team, and #contact.

## Technology

| Area                     | Technology                               |
| ------------------------ | ---------------------------------------- |
| UI                       | React 19, TypeScript                     |
| Framework                | TanStack Start                           |
| Routing                  | TanStack Router file-based routing       |
| Client state and caching | TanStack Query                           |
| Styling                  | Tailwind CSS 4, custom CSS design tokens |
| Animation                | Framer Motion, CSS animations            |
| Interactive graphics     | SVG and WebGL                            |
| Tooling                  | Vite 8, ESLint 9, Prettier 3             |
| Server runtime           | Nitro                                    |
| Deployment target        | Vercel                                   |

## Architecture

```text
Browser request
      |
      v
Nitro / Vercel server entry
      |
      +-- catastrophic SSR response normalization
      +-- TanStack Start request middleware
                |
                v
        TanStack Router
                |
        +-------+--------+
        |                |
     Root shell      File routes
        |           /, /team,
        |           /sitemap.xml
        v
React Query provider, navigation,
background effects, page outlet,
footer, error and not-found states
```

The heavier hero and cursor components are loaded lazily. The cursor controller waits until the browser is idle before mounting the WebGL effect.

## Project structure

```text
.
├── public/
│   ├── codrithm-logo.png
│   ├── favicon-180.png
│   ├── favicon-round.png
│   └── robots.txt
├── src/
│   ├── assets/                    Optimized portraits and project images
│   ├── components/
│   │   ├── BackgroundFX.tsx       Global decorative background
│   │   ├── ContactCard.tsx        Footer contact details
│   │   ├── Footer.tsx             Footer, links, and newsletter UI
│   │   ├── HeroIllustration.tsx   Animated SVG hero graphic
│   │   ├── Navbar.tsx             Responsive section navigation
│   │   ├── SplashCursor.tsx       WebGL fluid cursor implementation
│   │   ├── SplashCursorController.tsx
│   │   ├── TeamCard.tsx           Team dataset and interactive cards
│   │   └── ui.tsx                 Shared section, reveal, card, and stat UI
│   ├── lib/
│   │   ├── error-capture.ts       Out-of-band server error capture
│   │   └── error-page.ts          Standalone server error document
│   ├── routes/
│   │   ├── __root.tsx             App shell, metadata, and error boundaries
│   │   ├── index.tsx              Landing page and page content
│   │   ├── team.tsx               Full team page
│   │   └── sitemap[.]xml.ts       Sitemap response handler
│   ├── router.tsx                 Router and Query Client setup
│   ├── routeTree.gen.ts           Generated TanStack route tree
│   ├── server.ts                  Custom server entry
│   ├── start.ts                   Request middleware
│   └── styles.css                 Global theme and component styles
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> src/routeTree.gen.ts is generated by TanStack Router and should not be edited manually.

## Getting started

### Prerequisites

- A current LTS version of Node.js
- npm

No environment variables are required for the current presentation-only implementation.

### Installation

```bash
git clone <repository-url>
cd website
npm install
```

### Development

```bash
npm run dev
```

Vite prints the local development URL after startup.

### Production preview

```bash
npm run build
npm run preview
```

## Available scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| npm run dev       | Start the Vite development server                      |
| npm run build     | Create client, SSR, and Vercel/Nitro production output |
| npm run build:dev | Create a development-mode build                        |
| npm run preview   | Preview the production build locally                   |
| npm run lint      | Run ESLint and Prettier checks                         |
| npm run format    | Format the repository with Prettier                    |
| npx tsc --noEmit  | Run strict TypeScript validation                       |

## Content maintenance

### Team

Team profiles are defined in src/components/TeamCard.tsx.

- The landing page uses TEAM.slice(0, LANDING_TEAM_LIMIT).
- LANDING_TEAM_LIMIT is currently 7.
- The /team route renders the complete TEAM array.
- Optional imagePosition and imageScale values adjust individual portrait framing.

Portraits are stored as WebP files in src/assets/.

### Landing-page content

Services, projects, milestones, events, and community statistics are currently maintained as static arrays in src/routes/index.tsx.

### Metadata

- Global metadata and canonical links: src/routes/__root.tsx
- Team-page metadata: src/routes/team.tsx
- Sitemap entries: src/routes/sitemap[.]xml.ts
- Crawler directives: public/robots.txt

Production metadata currently targets:

```text
https://codrithm-website.vercel.app
```

## Accessibility and performance

- Semantic headings and section structure
- Keyboard-visible focus styles
- Skip-to-content link
- Accessible labels for team social controls
- Reduced-motion CSS fallback
- Responsive mobile navigation
- Lazy-loaded hero and WebGL effects
- Idle-time cursor initialization
- Optimized WebP team portraits
- Manual client chunking for React, TanStack, and Framer Motion

## Validation status

The current repository passes:

```bash
npx eslint src vite.config.ts
npx tsc --noEmit
npm run build
```

There is currently no automated unit, component, or end-to-end test suite.

## Known limitations

- The contact form only updates local UI state; it does not send or persist submissions.
- Newsletter subscribe controls are presentation-only.
- Event RSVP buttons are presentation-only.
- Several team social links still use placeholder # URLs.
- Content is maintained directly in source code rather than through a CMS.
- No dedicated Open Graph preview image is configured.
- Automated tests have not yet been added.

## Recommended next steps

1. Connect contact, newsletter, and RSVP actions to a real delivery service or backend.
2. Replace placeholder social URLs with verified profiles.
3. Add a branded Open Graph preview image.
4. Introduce Vitest and React Testing Library for component coverage.
5. Add browser-level tests for navigation, the project modal, and team rendering.
6. Move frequently updated content to a CMS or structured content layer if non-developers will maintain it.

## Deployment

The production build uses Nitro's Vercel preset:

```bash
npm run build
```

The deployable output is generated under:

```text
.vercel/output
```

Live deployment: [https://codrithm-website.vercel.app/](https://codrithm-website.vercel.app/)

## License

Proprietary software. All rights reserved by Codrithm.
