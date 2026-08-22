# Project Status Report: Codrithm Website

**Updated:** 22 August 2026  
**Status:** Active development

## Overview

Codrithm is a values-driven student technology community rooted in Islamic principles. The website introduces the community, its mission, services, projects, events, and team.

## Implemented routes

- `/` — landing page with seven featured team members
- `/team` — full team directory
- `/sitemap.xml` — XML sitemap for public routes

## Technology

- React 19 and TypeScript
- TanStack Start and Router
- Tailwind CSS 4
- Framer Motion
- Vite and Nitro with a Vercel deployment preset

## Current health

- TypeScript validation passes.
- The production Vercel build passes.
- Server-side and client-side error boundaries are present.
- Responsive navigation and accessible skip navigation are implemented.
- The hero renders immediately while the heavier WebGL cursor is loaded after browser idle time.
- The WebGL cursor is skipped on reduced-motion and coarse-pointer devices.
- Below-the-fold sections defer layout and paint work until they approach the viewport.

## Known limitations

- Contact, newsletter, and RSVP controls are currently presentation-only and have no delivery backend.
- There is no automated test suite.
- Several team photographs should be resized and converted to WebP or AVIF.
- Team data and landing-page content are stored directly in source files rather than a CMS.

## Team display rule

The landing page intentionally shows the first seven members from the shared team dataset. The `/team` route intentionally shows every member.
