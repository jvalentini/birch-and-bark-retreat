# Birch & Bark Retreat

Marketing site for the Birch & Bark Retreat vacation rental. Built as a fast, image-forward experience with OwnerRez booking widgets and SEO tooling.

## Stack

- Vite + React
- Tailwind CSS
- Cloudflare Pages (deployment)
- @valentini/seo-tools (sitemap, robots, schema validation, Lighthouse compare)

## Local Development

```bash
bun install
bun run dev
```

## Key Scripts

```bash
# Build / preview
bun run build
bun run preview

# Quality
bun run lint
bun run typecheck

# SEO tooling
bun run seo:sitemap
bun run seo:robots
bun run seo:validate

# Lighthouse compare (new vs old)
CHROME_PATH=/usr/bin/google-chrome USE_LOCAL_LIGHTHOUSE=1 \
bun run seo:lighthouse-compare \
https://birch-and-bark-retreats.pages.dev/ \
https://www.birchandbarkretreat.com/
```

## Staging Mode (current)

- Canonical domain: `https://www.birchandbarkretreat.com/`
- Staging domain: `https://birch-and-bark-retreats.pages.dev/`
- `index.html` includes `noindex, nofollow` so the preview isn’t indexed.
- OG/Twitter images are served from pages.dev for preview.

## Go-Live TODO (when client approves)

- [ ] Remove `noindex, nofollow` from `index.html`.
- [ ] Set `SITE_URL=https://www.birchandbarkretreat.com` and re-run:
      `bun run seo:sitemap` and `bun run seo:robots`.
- [ ] Update OG/Twitter image URLs to the `.com` domain.
- [ ] Configure Cloudflare Pages custom domain:
      `birchandbarkretreat.com` + `www` → production.
- [ ] 301 redirect `pages.dev` → `.com` (or block indexing).
- [ ] Submit sitemap in Google Search Console.
- [ ] Add GA4 (or GTM) once domain is approved.
- [ ] Re-run Lighthouse compare and refresh report bundle.

## OwnerRez Integration Plan (when approved)

**Preferred path: OwnerRez widgets**

OwnerRez provides widgets for Book Now, Availability, and Reviews that can be embedded directly with their widget script. This keeps checkout and pricing in OwnerRez while allowing a custom front end.

**Prepopulate booking fields**

OwnerRez widgets support URL parameters like `or_arrival`, `or_departure`, `or_guests`, etc. This lets the date/guest selector on the marketing site feed the booking widget on `/book`.
Important: avoid “double iframe” embedding so the widget can read URL params.

**Deeper integration (optional)**

If you need custom availability/search pages or advanced quoting, OwnerRez’s API supports:

- **Personal Access Tokens** for a single account (private use).
- **OAuth Apps** if you ever need multi-account access.
- **Webhooks** are available for OAuth apps only.

For security, API credentials should be stored server-side (not in the client).

## Reports

The Lighthouse comparison hub is published at:

```
/reports/lighthouse/
```

It includes:
- `lighthouse-comparison.html`
- `lighthouse-new.report.html`
- `lighthouse-old.report.html`
