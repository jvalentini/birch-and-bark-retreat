#!/usr/bin/env bun

import { RobotsGenerator } from '@valentini/seo-tools';

const baseUrl = process.env.SITE_URL || 'https://www.birchandbarkretreat.com';
const outputPath = process.argv[2] || 'public/robots.txt';

const generator = new RobotsGenerator({
  userAgents: ['*'],
  allow: ['/'],
  disallow: ['/api/', '/_next/', '/admin/', '/.env', '/.git/', '/*.json$'],
  sitemap: `${baseUrl}/sitemap.xml`,
});

await generator.save(outputPath);
console.log('✅ Robots.txt generated');
