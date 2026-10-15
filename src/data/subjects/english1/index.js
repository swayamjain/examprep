// English and Legal Writing - I (Subject Aggregator)
// B.A. LL.B. III Semester (CBCS NEP)
// Curated by Swayam Jain

import { paper2025_1 } from './paper2025_1.js';
import { paper2024_2 } from './paper2024_2.js';
import { paper2024_3 } from './paper2024_3.js';
import { predictivePaper } from './predictivePaper.js';

export const english1 = {
  id: 'english1',
  name: 'English and Legal Writing – I',
  code: 'CC 3.1 • B.A. LL.B. Sem III',
  semester: 'Semester III',
  courseType: 'ba-english',
  courseCategory: 'BA Course (Humanities)',
  stream: 'Humanities',
  description: 'Literature & Prose Analysis (Gandhi, Shaw, Bennett, O\' Henry), Professional Legal Correspondence & Drafting, Comprehension, and 1000-Word Legal Essays.',
  examStructure: {
    total: '80 Marks • 3 Hours • BA Course (Humanities)',
    part1: 'Section A: Literature & Prose Analysis (Q1 to Q4 = 40 Marks)',
    part2: 'Section B & C: Professional Legal Drafting, Translation & 1000-Word Essay (Q5 to Q10 = 40 Marks)',
    wordTarget: 'Short Questions: ~500 Words • Long Essays & Court Reports: 950–1200 Words',
  },
  papers: [
    predictivePaper,
    paper2025_1,
    paper2024_2,
    paper2024_3,
  ],
};
