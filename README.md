# HCM

The HCM brand site — one shell, six divisions: Tech, AI, Travel, Games,
Music, and Motion Pictures. Built with React, Vite, Tailwind v4, and
React Router, so every division is its own page and adding a new one
is a small, contained change.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Project structure

```
src/
  data/divisions.js     ← single source of truth: name, tagline, color, path
                           for every division. Nav, footer, and the homepage
                           orbit diagram all read from here.
  components/
    NavHeader.jsx        ← sticky top nav
    Footer.jsx           ← footer with X + TikTok links
    OrbitDiagram.jsx      ← homepage hub-and-spoke diagram
    DivisionHero.jsx      ← shared hero used by every division page
  pages/
    Home.jsx
    Tech.jsx  Ai.jsx  Travel.jsx  Games.jsx  Music.jsx  Film.jsx
```

## Adding a new division

1. Add one entry to `src/data/divisions.js` (name, tagline, color, path).
2. Add a `--color-<name>` token in `src/index.css` if it needs its own hue.
3. Create `src/pages/<Name>.jsx` using `DivisionHero` for the top section.
4. Add the route in `src/App.jsx`.

Nav, footer, and the homepage diagram update automatically.

## Things to swap in before launch

- `src/pages/Tech.jsx` — the GitHub org link and the Cake Creation project
  link are placeholders. Update both once the repo and that site are live.
- `src/data/divisions.js` — the X and TikTok URLs at the bottom point to
  `@hcm` placeholders; update to the real handles.
- Division copy in `src/pages/*.jsx` is a first draft — refine per division
  before launch.

## Deploying to GitHub Pages

```bash
npm run build        # outputs to dist/
```

This project uses `HashRouter` and a relative Vite `base`, so the
`dist/` folder works as-is when pushed to a `gh-pages` branch or served
from GitHub Pages — no extra 404 redirect or base-path config needed,
even from a project subpath like `username.github.io/hcm`.

Simplest path with the `gh-pages` package:

```bash
npm install -D gh-pages
# add to package.json "scripts": { "deploy": "vite build && gh-pages -d dist" }
npm run deploy
```
