#!/usr/bin/env bun

import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const sourceDir = process.argv[2] ?? 'public/images';
const outputDir = join(sourceDir, 'responsive');
const widths = [360, 540, 768, 960, 1280, 1600];
const allowedExt = new Set(['.jpg', '.jpeg', '.webp', '.png']);

if (!existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

const entries = readdirSync(sourceDir, { withFileTypes: true });
const imageFiles = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => allowedExt.has(extname(name).toLowerCase()));

let generated = 0;
let skipped = 0;

for (const fileName of imageFiles) {
  const inputPath = join(sourceDir, fileName);
  const inputStat = statSync(inputPath);
  const ext = extname(fileName).toLowerCase();
  const base = basename(fileName, ext);

  for (const width of widths) {
    const outputPath = join(outputDir, `${base}-w${width}${ext}`);
    if (existsSync(outputPath) && statSync(outputPath).mtimeMs >= inputStat.mtimeMs) {
      skipped += 1;
      continue;
    }

    const result = spawnSync(
      'convert',
      [
        inputPath,
        '-auto-orient',
        '-strip',
        '-interlace',
        'Plane',
        '-sampling-factor',
        '4:2:0',
        '-filter',
        'Lanczos',
        '-resize',
        `${width}x${width}>`,
        '-quality',
        '82',
        outputPath,
      ],
      { stdio: 'pipe' }
    );

    if (result.status !== 0) {
      console.error(`Failed to generate ${outputPath}`);
      if (result.stderr.length > 0) console.error(result.stderr.toString('utf8'));
      process.exit(1);
    }
    generated += 1;
  }
}

console.log(
  `Responsive image variants complete. generated=${generated} skipped=${skipped} output=${outputDir}`
);
