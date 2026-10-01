// Builds the deployable site into dist/: the v2 home mockup as index.html plus only the images it uses.
// Older drafts, design-exploration pages and docs stay in the repo but are never published.
import { cpSync, mkdirSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SRC = 'mockups/v2', OUT = 'dist';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const html = readFileSync(join(SRC, 'home.html'), 'utf8');
cpSync(join(SRC, 'home.html'), join(OUT, 'index.html'));

// copy every local asset the page references (assets/...png|jpg|webp|svg)
const refs = new Set(html.match(/assets\/[\w\-/.]+\.(?:png|jpe?g|webp|svg|avif)/g) ?? []);
for (const ref of refs) {
  const from = join(SRC, ref);
  if (!existsSync(from)) { console.warn(`skip (missing): ${ref}`); continue; }
  mkdirSync(join(OUT, dirname(ref)), { recursive: true });
  cpSync(from, join(OUT, ref));
}
console.log(`dist/index.html + ${refs.size} assets`);
