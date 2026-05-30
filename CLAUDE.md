# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (accessible on local network via --host)
npm run build      # Type-check + Vite production build → dist/
npm run lint       # ESLint on all TS/TSX files
npm run preview    # Serve the dist/ build locally
npm run deploy     # Build + publish dist/ to GitHub Pages (gh-pages branch)
```

No test suite is configured.

## Architecture

### Tech Stack
React 18 + TypeScript + Vite, deployed to GitHub Pages at `/portfolio/`. All asset URLs must use `import.meta.env.BASE_URL` (e.g., `${base}images/foo.png`) — not relative paths — because of the non-root base.

### Render Tree
```
App.tsx
└── LoadingProvider (context)         # loading state + triggers initialFX on mount
    └── MainContainer                 # layout root, desktop/mobile branching
        ├── Cursor, Navbar, SocialIcons   # always-on UI
        ├── CharacterModel (lazy)         # desktop: fixed overlay; mobile: inside Landing
        └── page sections (Landing → About → WhatIDo → Career → Education → Certifications → TechStack → Contact)
```

`isDesktopView` (threshold: `window.innerWidth > 1024`) controls two things: where `CharacterModel` renders in the DOM, and whether `TechStack` renders at all on mobile.

### 3D Character (`src/components/Character/`)
Built with **raw Three.js** (not React Three Fiber). `Scene.tsx` imperatively sets up a `WebGLRenderer`, `PerspectiveCamera`, and animation loop inside a single `useEffect`. The GLTF character model is loaded via `character.ts`, with utilities split into:
- `lighting.ts` — point/ambient light setup and the screen-glow effect
- `animationUtils.ts` — GSAP intro sequence + idle animations
- `mouseUtils.ts` — head-tracking via mouse/touch events
- `resizeUtils.ts` — camera/renderer resize handler

WebGL unavailability is detected at mount and triggers a CSS fallback class (`character-model--fallback`).

### GSAP Scroll System
GSAP's `ScrollSmoother` instance is created in `Navbar.tsx` and exported as `smoother` — this is the only scroll engine; native scroll is replaced. `initialFX.ts` (lazily imported by `LoadingProvider`) starts the entry animations after the character loads and fires `smoother.paused(false)`. Scroll-driven animations live in `src/components/utils/GsapScroll.ts` (`setCharTimeline` for character movement, `setAllTimeline` for career/education timelines).

GSAP plugins used: `ScrollSmoother`, `ScrollTrigger`, `SplitText` — all imported from the standard `gsap` package.

### Content
All portfolio content (career history, education, certifications, tech stack) is hardcoded directly in the component files — there are no separate data files for page content. To update personal info, edit the relevant component (`Career.tsx`, `Education.tsx`, `Certifications.tsx`, `TechStack.tsx`, etc.) directly.

### Styling
Each section component has a co-located CSS file in `src/components/styles/`. There is no CSS-in-JS or utility framework.

## Deployment Notes
- `vite.config.ts` sets `base: "/portfolio/"` for GitHub Pages hosting
- `npm run deploy` uses `gh-pages` to push `dist/` to the `gh-pages` branch
- Static assets served from `public/images/` are referenced via `import.meta.env.BASE_URL`
