import { paper2024_summer } from '../src/data/subjects/contract2/paper2024_summer.js';
import { paper2024_winter } from '../src/data/subjects/contract2/paper2024_winter.js';
import { paper2025_summer } from '../src/data/subjects/contract2/paper2025_summer.js';
import { predictivePaper } from '../src/data/subjects/contract2/predictivePaper.js';

function countWords(str) {
  if (!str) return 0;
  const clean = str.replace(/<[^>]*>/g, ' ').replace(/[#*_`]/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function calculateQuestionWords(q) {
  const ans = q.answer || {};
  let total = 0;

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
  if (ans.ingredients) {
    for (const ing of ans.ingredients) total += countWords(ing);
  }
  if (ans.discussion) {
    for (const d of ans.discussion) total += countWords(d);
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
  { name: 'Summer 2024', paper: paper2024_summer },
  { name: 'Winter 2024', paper: paper2024_winter },
  { name: 'Summer 2025', paper: paper2025_summer },
  { name: 'Predictive 2026', paper: predictivePaper },
];

console.log('===============================================================');
console.log('       LAW OF CONTRACT - II WORD COUNT AUDIT REPORT             ');
console.log('===============================================================\n');

let totalQuestions = 0;
let passedQuestions = 0;
let warningQuestions = 0;

for (const { name, paper } of papers) {
  console.log(`\n--- ${name} (${paper.questions?.length || 0} Questions) ---`);
  for (const q of paper.questions || []) {
    totalQuestions++;
    const words = calculateQuestionWords(q);
    const marks = Number(q.marks) || 10;
    const minWords = marks === 5 ? 450 : 950;
    const maxWords = marks === 5 ? 650 : 1200;

    const isPass = words >= minWords && words <= maxWords;
    const status = isPass ? 'PASS' : (words < minWords ? 'UNDER' : 'OVER');

    if (isPass) {
      passedQuestions++;
    } else {
      warningQuestions++;
    }

    const badge = isPass ? '✅' : '⚠️';
    console.log(`${badge} [${status.padEnd(5)}] ${q.qNum.padEnd(8)} (${marks}M): ${words} words (Target: ${minWords}-${maxWords}) - ${q.question.slice(0, 45)}...`);
  }
}

console.log('\n===============================================================');
console.log(`SUMMARY: ${passedQuestions}/${totalQuestions} Passed Target Range.`);
if (warningQuestions > 0) {
  console.log(`⚠️  ${warningQuestions} questions deviated from the target range.`);
} else {
  console.log('🎉 100% of questions are in the optimal word count range!');
}
console.log('===============================================================');
