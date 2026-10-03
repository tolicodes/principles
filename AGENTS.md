# Working on Principles

This public repository is the maintained source for `principles.toli.me`. Book text belongs in `content/`; the Astro site lives in `website/`. Preserve the author's meaning and voice.

- Run `npm ci` and `npm run build` in `website/` after relevant changes. Verify the homepage, six chapter pages, local links/assets, canonical hostname and legacy `/docs/` redirects when changing publishing or routing.
- Commit task changes and push the production `master` branch when publishing is authorized. Netlify deploys it automatically using the root `netlify.toml`, base `website` and output `website/dist`.
- Keep credentials, generated builds and private wiki material out of this public repository. Preserve the existing Git history.
- Write substantive work and durable findings back to the private Toli Wiki at `/Users/toli/Documents/toli-wiki`, following its instructions. Its archived Principles writing is historical; edit the current book here.
