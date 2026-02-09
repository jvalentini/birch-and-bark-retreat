#!/usr/bin/env bun

import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const sourceDir = process.argv[2] ?? 'public/images';
const outputDir = join(sourceDir, 'responsive');
const widths = [320, 360, 480, 540, 640, 768, 960, 1280, 1600, 1920];
const allowedExt = new Set(['.jpg', '.jpeg', '.webp', '.png']);
const baseQuality = '74';
const webpQuality = '72';
const avifQuality = '50';

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
let optionalGenerated = 0;
let optionalSkipped = 0;

const formatsResult = spawnSync('convert', ['-list', 'format'], { stdio: 'pipe' });
const formatsOutput = formatsResult.stdout.toString('utf8');
const supportsWebp = /\bWEBP\b/.test(formatsOutput);
const supportsAvif = /\bAVIF\b/.test(formatsOutput);

const runConvert = (
  inputPath: string,
  width: number,
  outputPath: string,
  quality: string
) =>
  spawnSync(
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
      quality,
      outputPath,
    ],
    { stdio: 'pipe' }
  );

for (const fileName of imageFiles) {
  const inputPath = join(sourceDir, fileName);
  const inputStat = statSync(inputPath);
  const ext = extname(fileName).toLowerCase();
  const base = basename(fileName, ext);
  const shouldGenerateModern =
    ext === '.jpg' || ext === '.jpeg' || ext === '.png';

  for (const width of widths) {
    const outputPath = join(outputDir, `${base}-w${width}${ext}`);
    if (existsSync(outputPath) && statSync(outputPath).mtimeMs >= inputStat.mtimeMs) {
      skipped += 1;
    } else {
      const result = runConvert(inputPath, width, outputPath, baseQuality);
      if (result.status !== 0) {
        console.error(`Failed to generate ${outputPath}`);
        if (result.stderr.length > 0) console.error(result.stderr.toString('utf8'));
        process.exit(1);
      }
      generated += 1;
    }

    if (shouldGenerateModern && supportsWebp) {
      const webpOutputPath = join(outputDir, `${base}-w${width}.webp`);
      if (existsSync(webpOutputPath) && statSync(webpOutputPath).mtimeMs >= inputStat.mtimeMs) {
        optionalSkipped += 1;
      } else {
        const webpResult = runConvert(inputPath, width, webpOutputPath, webpQuality);
        if (webpResult.status !== 0) {
          console.error(`Failed to generate ${webpOutputPath}`);
          if (webpResult.stderr.length > 0) console.error(webpResult.stderr.toString('utf8'));
          process.exit(1);
        }
        optionalGenerated += 1;
      }
    }

    if (shouldGenerateModern && supportsAvif) {
      const avifOutputPath = join(outputDir, `${base}-w${width}.avif`);
      if (existsSync(avifOutputPath) && statSync(avifOutputPath).mtimeMs >= inputStat.mtimeMs) {
        optionalSkipped += 1;
      } else {
        const avifResult = runConvert(inputPath, width, avifOutputPath, avifQuality);
        if (avifResult.status !== 0) {
          console.error(`Failed to generate ${avifOutputPath}`);
          if (avifResult.stderr.length > 0) console.error(avifResult.stderr.toString('utf8'));
          process.exit(1);
        }
        optionalGenerated += 1;
      }
    }
  }
}

console.log(
  `Responsive image variants complete. generated=${generated} skipped=${skipped} modernGenerated=${optionalGenerated} modernSkipped=${optionalSkipped} webp=${supportsWebp} avif=${supportsAvif} output=${outputDir}`
);
