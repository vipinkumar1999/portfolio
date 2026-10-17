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
React 18 + TypeScript + Vite, deployed to GitHub Pages at `/portfolio/`. Asset URLs that live in `public/` must use `import.meta.env.BASE_URL` (see `profile.resume` in `content.ts`); `index.html` and `manifest.json` use relative paths. No animation or 3D libraries: native scroll, CSS transitions, and IntersectionObserver only.

### Design: "The Analyst's Brief"
Single-page editorial report: ruled hairlines, numbered section margin ("§01 Summary"), tabular numerals, one accent colour. Avoid gradients, glows, shadows, centered heroes and identical card grids.

### Content
All copy lives in `src/content.ts` (profile, about, stats, experience, projectsResearch, capabilities, skills, education, certifications, `sections`). Components only present it. Edit copy there, not in components. Experience `points` are bullets; figures like $65.2M, 99.9%, 500K+ are auto-highlighted by a regex in `Experience.tsx`.

### Render tree
```
App.tsx: skip link, Masthead, <main> (Summary, Experience, Capabilities, Skills, Education, Contact), Footer
```
- `components/Section.tsx` wraps every section: top hairline, sticky mono margin label (cols 1-2), body (cols 3-12), h2, and reveal-on-scroll.
- `Masthead.tsx`: sticky header, active-section nav, mobile sheet (focus trap, Esc, scroll lock).
- `Experience.tsx` contains the SVG-free CSS timeline (with a visually hidden table); `Contact.tsx` composes a `mailto:` from the form.
- Hooks in `src/hooks/`: `useReveal`, `useActiveSection`.

### Styling
Plain CSS, no frameworks. `src/styles/global.css` holds tokens (`--paper`, `--paper-2`, `--ink`, `--ink-2`, `--rule`, `--signal`, `--positive`, with a `prefers-color-scheme: dark` override), reset, typography, buttons, section grid. Each component has a co-located file in `src/styles/`. `fonts.css` declares latin-only @font-face from @fontsource packages (Fraunces, Outfit, IBM Plex Mono). Theme is "Olive Field"; `--radius` sets button/input corners. `main.tsx` must import global.css before the App so component CSS can override it.

Reveal animations only hide content when `<html>` has the `js` class (set by an inline script in `index.html`) and are disabled under `prefers-reduced-motion`.

## Deployment Notes
- `vite.config.ts` sets `base: "/portfolio/"` for GitHub Pages hosting
- `npm run deploy` uses `gh-pages` to push `dist/` to the `gh-pages` branch
- Keep `public/resume.pdf`, favicons, manifest.
