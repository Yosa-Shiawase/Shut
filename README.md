# SHUT — a sketchbook of stills

Portfolio of **Yosa Shiawase**: 38 frames, ink-stained field notes, skill trees
and summoning circles. Committed in the dead of night.

Built with **Next.js 16 + React 19 + Tailwind CSS 4 + Framer Motion**.
Fully static output — no database, no environment variables, no secrets.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Push to GitHub

The git history in this folder already contains one initial commit authored as
`Yosa Shiawase <Yosa-Shiawase@users.noreply.github.com>`. You only add a remote
and push:

```bash
# from inside this folder
git remote add origin https://github.com/Yosa-Shiawase/Shut.git
git push origin main
```

If the `Shut` repo already has history (the original photo files), GitHub will
reject a non-fast-forward push. Two options:

- **Replace the repo contents** (the original photos stay on your device /
  iCloud — they are only camera-named files):

  ```bash
  git push -f origin main
  ```

- **Keep both**: push this site to a new branch instead, and use that branch
  when creating the Render service:

  ```bash
  git push origin main:portfolio
  ```

## Deploy on Render

**Recommended — Static Site** (never sleeps on the free plan, unlimited
bandwidth): Render Dashboard → **New → Static Site** → pick the repo →

| Setting           | Value                     |
| ----------------- | ------------------------- |
| Build Command     | `npm ci && npm run build` |
| Publish Directory | `out`                     |
| Node version      | auto-read from `.node-version` |

Or use **New → Blueprint** — Render reads `render.yaml` and pre-fills all of it.

**Alternative — Node Web Service:** remove the `output: "export"` line from
`next.config.ts`, create a Web Service (Node) with build
`npm ci && npm run build` and start `npm run start` (no publish directory).
Note the free plan sleeps after ~15 min of inactivity on this type.

First build takes ~2 min (npm ci + Next.js compile + static export). You get a
`https://<name>.onrender.com` URL.

## Project structure

```
src/
  app/                 layout (fonts + metadata), page, favicon
  components/ink/      background (animated SVG scene), photo-card,
                       lightbox, sections (hero / gallery / about / footer)
  lib/gallery.ts       all 38 shots: slug, title, description, tags,
                       original filename as provenance
public/
  gallery/web/         the 38 optimized frames (≤1600px, ~7 MB total)
```

`npm run build` writes the deployable static site to `out/` (gitignored).
To preview it locally: `python3 -m http.server -d out` or `npx serve out`.

To rename a photo or rewrite its caption, edit `src/lib/gallery.ts` —
titles, descriptions, tags and ordering all live there.
