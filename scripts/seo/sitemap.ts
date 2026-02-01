#!/usr/bin/env bun

import { SitemapGenerator } from '@valentini/seo-tools';

const baseUrl = process.env.SITE_URL || 'https://www.birchandbarkretreat.com';
const outputPath = process.argv[2] || 'public/sitemap.xml';

const generator = new SitemapGenerator(baseUrl);
const today = new Date().toISOString().split('T')[0];

const pages = [
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/photos', priority: 0.8, changefreq: 'monthly' },
  { loc: '/availability', priority: 0.7, changefreq: 'weekly' },
  { loc: '/reviews', priority: 0.6, changefreq: 'monthly' },
  { loc: '/location', priority: 0.7, changefreq: 'monthly' },
  { loc: '/book', priority: 0.9, changefreq: 'weekly' },
] as const;

generator.addUrls(
  pages.map((page) => ({
    ...page,
    lastmod: today,
  }))
);

await generator.save(outputPath);
console.log(`✅ Sitemap generated: ${outputPath}`);
console.log(`📄 Generated sitemap with ${generator.count} URLs`);
