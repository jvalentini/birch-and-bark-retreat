#!/usr/bin/env bun

import { validateHtmlJsonLd } from '@valentini/seo-tools';

const filePath = process.argv[2] || 'index.html';

const file = Bun.file(filePath);
if (!(await file.exists())) {
  console.error(`❌ File not found: ${filePath}`);
  process.exit(2);
}

const html = await file.text();
const result = validateHtmlJsonLd(html);

if (result.issues.length === 0) {
  console.log(`✅ Schema validation passed for ${filePath}`);
  process.exit(0);
}

console.log(`⚠️ Schema validation issues for ${filePath}:`);
for (const issue of result.issues) {
  console.log(`- [${issue.type}] ${issue.message}`);
}

process.exit(result.issues.some((issue) => issue.type === 'error') ? 1 : 0);
