import { startAnalytics } from './analytics-policy.js';

if (import.meta.env.PROD) {
  startAnalytics({ projectId: 'zb5fa2mqgu', site: 'principles.toli.me', allowedHosts: ['principles.toli.me', 'principles.tolicodes.com'], win: window, doc: document });
}
