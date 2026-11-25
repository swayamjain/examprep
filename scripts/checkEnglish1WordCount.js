import { paper2025_1 } from '../src/data/subjects/english1/paper2025_1.js';
import { paper2024_2 } from '../src/data/subjects/english1/paper2024_2.js';
import { paper2024_3 } from '../src/data/subjects/english1/paper2024_3.js';
import { predictivePaper } from '../src/data/subjects/english1/predictivePaper.js';

function countWords(str) {
  if (!str) return 0;
  const clean = str.replace(/<[^>]*>/g, ' ').replace(/[#*_`]/g, ' ');
  return clean.trim().split(/\s+/).filter(Boolean).length;
}

function calculateQuestionWords(q) {
  const ans = q.answer || {};
  let total = 0;
  if (ans.synopsis) total += countWords(ans.synopsis);
  if (ans.statutoryFramework) total += countWords(ans.statutoryFramework);
  if (ans.sections) {
    for (const sec of ans.sections) {
      if (sec.heading) total += countWords(sec.heading);
      if (sec.paragraphs) {
        for (const p of sec.paragraphs) total += countWords(p);
      }
      if (sec.content) total += countWords(sec.content);
    }
  }
  if (ans.caseLaws) {
    for (const c of ans.caseLaws) {
      if (c.name) total += countWords(c.name);
      if (c.citation) total += countWords(c.citation);
      if (c.facts) total += countWords(c.facts);
      if (c.ratio) total += countWords(c.ratio);
    }
  }
  if (ans.criticalAnalysis) total += countWords(ans.criticalAnalysis);
  if (ans.conclusion) total += countWords(ans.conclusion);
  return total;
}

const papers = [
  { name: 'Paper 2025 (11495)', data: paper2025_1 },
  { name: 'Paper 2024 (12135)', data: paper2024_2 },
  { name: 'Paper 2024 (11495)', data: paper2024_3 },
  { name: 'Predictive 2026', data: predictivePaper },
];

console.log('===============================================================');
console.log('      ENGLISH & LEGAL WRITING - I WORD COUNT AUDIT REPORT      ');
console.log('===============================================================');

let totalQuestions = 0;
for (const p of papers) {
  console.log(`\n--- ${p.name} (${p.data.questions.length} Questions) ---`);
  for (const q of p.data.questions) {
    totalQuestions++;
    const words = calculateQuestionWords(q);
    const marks = q.marks || 10;
    console.log(`${q.qNum} (${marks}M): ${words} words - ${q.question.slice(0, 50)}...`);
  }
}
console.log(`\nTotal Questions: ${totalQuestions}`);
