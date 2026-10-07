# Principles

A collaborative book about approaching life's obstacles, with life and technical principles, practical strategies, and the stories behind them.

Read it at **[principles.toli.me](https://principles.toli.me)**.

- `content/` contains the chapter Markdown and supporting outlines.
- `website/` contains the Astro site, styles and assets.
- `netlify.toml` configures production builds and redirects for older `/docs/` URLs.

## Development

```sh
cd website
npm ci
npm run dev
```

Run `npm run build` in `website/` to generate the static site in `website/dist/`.

## Publishing

Netlify builds the production `master` branch of `tolicodes/principles`. The base directory is `website`, the command is `npm run build`, and the publish directory is `dist` relative to the base. The primary hostname is `principles.toli.me`; `principles.tolicodes.com` is retained as an alias.

On October 3, 2026, Toli requested a standalone repository after a temporary deployment from the private Toli Wiki. This original public repository is again the maintained source, with its existing history retained. The wiki keeps historical writing and project context; make future book and site changes here.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contributions.

## Public session replay — October 7, 2026

PostHog project 651591 (US), pinned posthog-js 1.438.2, loads asynchronously only on the production canonical hostname. Each session is labeled with `site`. Localhost, preview hosts, Do Not Track and Global Privacy Control skip initialization. Publishable client token is source configuration; no personal API credential is included.

Inputs are masked; private-marked elements are blocked; console logs and network headers/bodies are excluded. Analytics URL properties remove queries, credentials and unknown fragments; this is not a guarantee of redaction of every replay snapshot URL. Public book/page text and images remain visible. No user identification or person profiles are created. Analytics failure does not interrupt rendering.

The production build and all four analytics privacy-policy checks passed before committing. Deployment is verified below. Receipt/playback of a real recording is tracked separately in the Wiki/rollout evidence. Existing content, hosting and redirects are preserved.

October 7 deployment verification: The Netlify production build is live: homepage and all six chapters match the tested HTML byte for byte over trusted HTTPS. This documentation commit does not republish application code.
