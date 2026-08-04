#!/usr/bin/env node
// Bundles every frontend-facing dependency into dist/js/, mirroring how
// build:css produces dist/css/. Each entry is either an already-built
// browser file from node_modules (htmx, preline, apexcharts, alpinejs,
// lucide all ship one) or a custom source file that re-exports just the
// bindings this app uses, for esbuild to tree-shake (CKEditor5 only —
// its npm package has no pre-built browser file at all).
import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'dist/js');

const entries = [
  {
    name: 'htmx',
    entryPoint: path.join(ROOT, 'node_modules/htmx.org/dist/htmx.min.js'),
  },
  {
    name: 'preline',
    entryPoint: path.join(ROOT, 'node_modules/preline/dist/preline.js'),
  },
];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const entry of entries) {
    await build({
      entryPoints: [entry.entryPoint],
      bundle: true,
      minify: true,
      format: entry.format || 'iife',
      globalName: entry.globalName,
      outfile: path.join(OUT_DIR, `${entry.name}.js`),
      logLevel: 'info',
    });
    console.log(`✅ dist/js/${entry.name}.js`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
