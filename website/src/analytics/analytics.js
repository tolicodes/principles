import { startAnalytics } from './analytics-policy.js';

if (import.meta.env.PROD) {
  startAnalytics({ projectId: 'zb5fa2mqgu', site: 'principles.toli.me', win: window, doc: document });
}
