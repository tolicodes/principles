export const CHAPTERS = [
  {
    id: 'preface',
    title: 'Preface',
    blurb: 'Why this project exists, the debt to Ray Dalio, and an invitation to fork these principles rather than follow them.',
  },
  {
    id: 'how-i-got-there',
    title: 'How I Got There',
    blurb: 'A silent retreat at a Buddhist monastery, a stubborn codebase left behind, and the night the pieces fell into place.',
  },
  {
    id: 'life-principles',
    title: 'Life Principles',
    blurb: 'Equanimity to outcome, unconditional self-love, no expectations — the principles I try to run my life by.',
  },
  {
    id: 'technical-principles',
    title: 'Technical Principles',
    blurb: 'KISS, plan first, one small problem at a time, small PRs — lessons from a decade of programming.',
  },
  {
    id: 'strategies-non-technical-index',
    title: 'Non-Technical Strategies',
    blurb: 'Practical techniques, step by step: listening to your intuition, quieting worries, and making hard decisions.',
  },
  {
    id: 'negative-patterns-index',
    title: 'Negative Patterns',
    blurb: 'The loops worth noticing — “I should have done…”, and why the mistakes were the curriculum all along.',
  },
];

export const REPO = 'https://github.com/tolicodes/principles';

export function romanNumeral(n: number): string {
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  return numerals[n - 1] ?? String(n);
}
