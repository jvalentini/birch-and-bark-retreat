#!/usr/bin/env bun

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = process.argv[2] ?? 'dist';
const htmlPath = resolve(distDir, 'index.html');

const html = readFileSync(htmlPath, 'utf8');
const stylesheetMatch = html.match(/<link rel="stylesheet" crossorigin href="([^"]+\.css)">/);

if (!stylesheetMatch) {
  console.log('No built stylesheet link found in dist/index.html');
  process.exit(0);
}

const href = stylesheetMatch[1];
const cssPath = resolve(distDir, href.replace(/^\//, ''));
const css = readFileSync(cssPath, 'utf8');

const inlined = html.replace(
  stylesheetMatch[0],
  `<style data-inline-built-css>${css}</style>`
);

writeFileSync(htmlPath, inlined);
console.log(`Inlined ${href} into ${htmlPath}`);
