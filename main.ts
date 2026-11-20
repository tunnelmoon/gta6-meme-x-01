// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The entry itself is the X post: an agent-made GTA 6 meme, posted from a
// public X account with make.fun and the play code in its text. This program
// does the one mechanical job the gate needs: it copies POST.json from the
// repository root into the output directory, where the gate reads the post's
// address from it. Nothing else is written, nothing is fetched, no clock is
// read, so two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
