// Renders meme.html to meme.png at 1080x1080 with the cached headless Chromium.
// Usage: node scripts/render.mjs
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chrome = join(
  homedir(),
  '.cache/ms-playwright/chromium-1248/chrome-linux64/chrome'
);

const result = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1080,1080',
    '--virtual-time-budget=5000',
    `--screenshot=${join(root, 'meme.png')}`,
    `file://${join(root, 'meme.html')}`,
  ],
  { stdio: 'inherit' }
);

if (result.status !== 0) {
  console.error('render failed');
  process.exit(1);
}
console.log('wrote meme.png');
