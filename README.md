# industrialterrorism.com

Static informational site built with **Astro 5**, **TypeScript**, **Tailwind CSS**, and **Content Collections**.

Deployed as **Cloudflare Workers Static Assets** (pure static output, no adapter).

## Features

- Fully static output (`output: 'static'`)
- Tailwind CSS for responsive, mobile-first design
- Content Collections for incidents and statistics
- Full Open Graph + Twitter Card meta
- JSON-LD structured data (Article / WebPage)
- Automatic sitemap via `@astrojs/sitemap`
- `robots.txt`
- Cloudflare Images CDN for hero/OG image
- Domain acquisition CTA in footer (`sales@desertrich.com`)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `./dist`.

## Deploy to Cloudflare Workers Static Assets

```bash
npx wrangler deploy
```

Or connect the GitHub repo to Cloudflare Pages / Workers and set the build command to `npm run build` and output directory to `dist`.

## Domain

**industrialterrorism.com** — available for acquisition. Contact: sales@desertrich.com
