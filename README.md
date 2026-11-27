# SHUT — a sketchbook of stills

Portfolio of **Yosa Shiawase**: 27 frames, ink-stained field notes, skill trees
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

**Easiest (Blueprint):** Render Dashboard → **New → Blueprint** → pick the repo.
Render reads `render.yaml` and pre-fills everything.

**Manual:** Render Dashboard → **New → Web Service** → pick the repo →

| Setting       | Value                    |
| ------------- | ------------------------ |
| Runtime       | Node                     |
| Build Command | `npm ci && npm run build`|
| Start Command | `npm run start`          |
| Node version  | 22 (auto-read from `.node-version`) |

Free plan works fine. First build takes ~2–3 min (Next.js compiles, then
prerenders the single page). You get a `https://<name>.onrender.com` URL.

> Note: on Render's free plan the service sleeps after ~15 min of inactivity,
> so the first visit after a pause takes a few extra seconds to boot.

## Project structure

```
src/
  app/                 layout (fonts + metadata), page, favicon
  components/ink/      background (animated SVG scene), photo-card,
                       lightbox, sections (hero / gallery / about / footer)
  lib/gallery.ts       all 27 shots: slug, title, description, tags,
                       original filename as provenance
public/
  gallery/web/         the 27 optimized frames (≤1600px, ~5 MB total)
```

To rename a photo or rewrite its caption, edit `src/lib/gallery.ts` —
titles, descriptions, tags and ordering all live there.
