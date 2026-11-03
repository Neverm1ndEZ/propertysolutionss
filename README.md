# Property Solutions — two sites, one codebase

Two public websites are built from this single repository. `NEXT_PUBLIC_SITE`
decides which one a given build is.

| | Site A | Site B |
|---|---|---|
| Domain | `propertyssolution.com` (ss in the middle) | `propertysolutionss.com` (ss at the end) |
| `NEXT_PUBLIC_SITE` | `greater-noida` | `yamuna` |
| Keyword focus | Greater Noida | Yamuna Expressway / YEIDA |
| Home page | `components/gn/HomeGreaterNoida` | `components/ym/HomeYamuna` |
| Header | `components/SiteHeader` | `components/ym/HeaderYamuna` |
| Maps listed | all 176 | all 176 (Yamuna ordered first) |
| Local port | 3000 | 3001 |

Both sites list every map. They differ in design, headline, keywords and the
order regions appear in.

## Running locally

```bash
pnpm install
pnpm dev:gn     # Greater Noida  -> http://localhost:3000
pnpm dev:ym     # Yamuna         -> http://localhost:3001
```

Run them in two terminals to see both at once. Each site builds into its own
directory (`.next-greater-noida`, `.next-yamuna`) so they never collide.

```bash
pnpm build:gn && pnpm start:gn
pnpm build:ym && pnpm start:ym
```

Copy `.env.local` values from the EmailJS dashboard before the forms will send.

## Deploying

Create **two Vercel projects from this same GitHub repo**. Everything is
identical except the environment variables and the build command.

**Project A — Greater Noida**

| Setting | Value |
|---|---|
| Build Command | `pnpm build:gn` |
| Output Directory | `.next-greater-noida` |
| Domain | `propertyssolution.com` |

Environment variables:

```
NEXT_PUBLIC_SITE=greater-noida
NEXT_PUBLIC_SITE_URL=https://propertyssolution.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gjki8za
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ruKaOoyl7AVlWVPt9
NEXT_PUBLIC_EMAILJS_TEMPLATE_ONE_ID=template_m3t2hnl
NEXT_PUBLIC_EMAILJS_TEMPLATE_TWO_ID=template_u9vo8t9
```

**Project B — Yamuna**

| Setting | Value |
|---|---|
| Build Command | `pnpm build:ym` |
| Output Directory | `.next-yamuna` |
| Domain | `propertysolutionss.com` |

Same variables, except:

```
NEXT_PUBLIC_SITE=yamuna
NEXT_PUBLIC_SITE_URL=https://propertysolutionss.com
```

Pushing to `main` redeploys both projects.

`NEXT_PUBLIC_*` values are inlined at build time, so **changing any of them
requires a redeploy**, not just a save. `NEXT_PUBLIC_SITE_URL` drives canonical
tags, `sitemap.xml`, `robots.txt` and OG image URLs — if it is wrong or missing,
the site tells Google the wrong address.

## Maps

`public/maps/<area>/<NAME>.jpg` are the downloadable plans (2400px), and
`public/thumbs/<area>/<NAME>.webp` the 480px grid thumbnails. Both are generated
from the client's original scans, which live in `MAPS/` and are gitignored — that folder
is 3.2 GB and must never be committed.

```bash
pnpm img      # regenerate thumbnails + hero + og image
pnpm check    # validate map data, images and related-map links
```

`pnpm check` reads `NEXT_PUBLIC_SITE`, so run it once per site.

## Commands

| Command | Does |
|---|---|
| `pnpm dev:gn` / `dev:ym` | dev server for one site |
| `pnpm build:gn` / `build:ym` | production build for one site |
| `pnpm start:gn` / `start:ym` | serve a built site |
| `pnpm lint` / `pnpm typecheck` | static checks |
| `pnpm check` | map data validation |
| `pnpm img` | regenerate images |
