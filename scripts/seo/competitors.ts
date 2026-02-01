#!/usr/bin/env bun

import { CompetitorAnalyzer } from '@valentini/seo-tools';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
if (!apiKey) {
  console.error('❌ Error: GOOGLE_PLACES_API_KEY environment variable is required');
  process.exit(1);
}

const keyword = process.argv[2] || 'vacation rental';
const location = process.argv[3] || 'Petoskey, Michigan';
const limit = Number.parseInt(process.argv[4] || '10', 10);

const analyzer = new CompetitorAnalyzer(apiKey);

try {
  const competitors = await analyzer.analyzeCompetitors(keyword, location, limit);
  analyzer.printResults(competitors);

  if (process.argv.includes('--json')) {
    const outputPath = 'competitor-analysis.json';
    await Bun.write(outputPath, JSON.stringify(competitors, null, 2));
    console.log(`\n💾 Results saved to ${outputPath}`);
  }
} catch (error) {
  console.error('❌ Analysis failed:', error);
  process.exit(1);
}
