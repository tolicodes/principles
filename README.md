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
