#!/usr/bin/env bun

/**
 * Assumptions:
 * - URLs are public and reachable.
 * - Chrome is installed when USE_LOCAL_LIGHTHOUSE=1.
 *
 * This wrapper keeps Birch & Bark reports local while delegating logic to @valentini/seo-tools.
 */

import { runLighthouseCompare } from '@valentini/seo-tools';

const args = process.argv.slice(2);
const newUrl = args[0];
const oldUrl = args[1];

if (!newUrl || !oldUrl) {
  console.error(
    '\nUsage:\n  bun run seo:lighthouse-compare <newUrl> <oldUrl>\n\nExample:\n  bun run seo:lighthouse-compare https://birch-and-bark-retreats.pages.dev https://www.birchandbarkretreat.com\n'
  );
  process.exit(2);
}

const outDir = process.env.LIGHTHOUSE_OUT_DIR ?? 'public/reports/lighthouse';

const result = await runLighthouseCompare({
  newUrl,
  oldUrl,
  outDir,
});

console.log('\n--- Summary ---');
console.log(`Reports written to ${result.outDir}`);
console.log(`  ${result.newReportPath}`);
console.log(`  ${result.oldReportPath}`);
console.log(`  ${result.comparisonPath}`);
