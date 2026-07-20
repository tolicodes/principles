import { defineConfig } from 'astro/config';
import { CHAPTERS, REPO } from './src/chapters.ts';

// Routes for chapter files; anything else .md points at the repo.
const ROUTES = Object.fromEntries(CHAPTERS.map((c) => [c.id, `/${c.id}/`]));

/** Rewrite relative .md links in content to site routes (or GitHub). */
function remarkContentLinks() {
  const rewrite = (node) => {
    if (node.type === 'link' && !/^(https?:|mailto:|#|\/)/.test(node.url)) {
      const m = node.url.match(/^(?:\.\/)?([\w-]+?)(?:\.md)?(#[\w-]*)?$/);
      if (m) {
        node.url = ROUTES[m[1]]
          ? ROUTES[m[1]] + (m[2] ?? '')
          : `${REPO}/blob/master/content/${m[1]}.md`;
      }
    }
    node.children?.forEach(rewrite);
  };
  return rewrite;
}

export default defineConfig({
  site: 'https://principles.tolicodes.com',
  markdown: {
    remarkPlugins: [remarkContentLinks],
  },
});
