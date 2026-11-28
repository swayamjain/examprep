import { predictivePaper } from '../src/data/subjects/polisci3/predictivePaper.js';
import { paper2024_summer } from '../src/data/subjects/polisci3/paper2024_summer.js';
import { paper2025_summer } from '../src/data/subjects/polisci3/paper2025_summer.js';
import { paper2024_winter } from '../src/data/subjects/polisci3/paper2024_winter.js';

function countWords(str) {
  if (!str) return 0;
  const clean = str.replace(/<[^>]*>/g, ' ').replace(/[#*_`]/g, ' ');
  return clean.trim().split(/\s+/).filter(Boolean).length;
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
  if (ans.criticalAnalysis) total += countWords(ans.criticalAnalysis);
  if (ans.conclusion) total += countWords(ans.conclusion);
  return total;
}

const papers = [
  { name: 'Predictive 2025-26', data: predictivePaper },
  { name: 'Summer 2024', data: paper2024_summer },
  { name: 'Summer 2025', data: paper2025_summer },
  { name: 'Winter 2024', data: paper2024_winter },
];

console.log('===============================================================');
console.log('      POLITICAL SCIENCE - III WORD COUNT AUDIT REPORT          ');
console.log('===============================================================');

let totalQuestions = 0;
let passedQuestions = 0;
let warningQuestions = 0;

for (const p of papers) {
  console.log(`\n--- ${p.name} (${p.data.questions.length} Questions) ---`);
  for (const q of p.data.questions) {
    totalQuestions++;
    const marks = q.marks || 10;
    const words = calculateQuestionWords(q);
    const minWords = marks === 5 ? 450 : 950;
    const maxWords = marks === 5 ? 650 : 1200;
    const isPass = words >= minWords && words <= maxWords;
    const status = isPass ? 'PASS' : (words < minWords ? 'UNDER' : 'OVER');
    if (isPass) passedQuestions++;
    else warningQuestions++;
    const badge = isPass ? '✅' : '⚠️';
    console.log(`${badge} [${status.padEnd(5)}] ${q.qNum.padEnd(8)} (${marks}M): ${words} words (Target: ${minWords}-${maxWords}) - ${q.question.slice(0, 45)}...`);
  }
}
console.log('\n===============================================================');
console.log(`SUMMARY: ${passedQuestions}/${totalQuestions} Passed Target Range.`);
if (warningQuestions > 0) {
  console.log(`⚠️  ${warningQuestions} questions deviated from the target range.`);
}
console.log('===============================================================');
