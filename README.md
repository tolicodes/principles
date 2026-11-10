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

Netlify builds the production `master` branch of `tolicodes/principles`. The base directory is `website`, the command is `npm run build`, and the publish directory is `dist` relative to the base. The primary hostname is `principles.toli.me`; `principles.tolicodes.com` is retained as an alias. Both explicit public hosts share the same masked Clarity capture policy; previews remain excluded.

On October 3, 2026, Toli requested a standalone repository after a temporary deployment from the private Toli Wiki. This original public repository is again the maintained source, with its existing history retained. The wiki keeps historical writing and project context; make future book and site changes here.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contributions.


## Website and interaction analytics

The Astro site in `website/` publishes this book at `principles.toli.me`.
Netlify builds the production `master` branch using `netlify.toml`.
Microsoft Clarity project `zb5fa2mqgu` replaces the PostHog collector. The official
async tag runs only on the production canonical host, skips DNT/GPC and URL or
referrer query strings/fragments, and prevents duplicate startup. Inputs and
private-marked elements are masked; the project uses Strict text masking. Both
advertising and analytics storage consent are denied. No custom identity or
content is supplied. Analytics failures cannot prevent reading. Existing PostHog
recordings remain historical; its SDK is no longer imported by the application.
Source/build checks, deployment and actual recording playback are verified
separately in the cross-app rollout receipt.
