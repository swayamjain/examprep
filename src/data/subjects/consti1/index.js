// Subject Aggregator: Indian Constitutional Law - I
// Curated by Swayam Jain

import { predictivePaper } from './predictivePaper.js';
import { paper2024_1 } from './paper2024_1.js';
import { paper2025_2 } from './paper2025_2.js';
import { paper2024_3 } from './paper2024_3.js';

export const constiLaw1 = {
  id: 'consti-law-1',
  name: 'Indian Constitutional Law – I',
  code: 'B.A. LL.B. Sem III (CBCS NEP)',
  courseType: 'llb',
  courseCategory: 'LLB Course (Law)',
  stream: 'Law',
  description: 'Historical Background, Preamble, Citizenship, Fundamental Rights (Articles 12-35), Directive Principles of State Policy & Fundamental Duties.',
  examStructure: {
    total: '80 Marks • 3 Hours • LLB Course (Law)',
    part1: 'Q1 (Compulsory): Attempt any 4 of 6 Short Notes (5M = 20M)',
    part2: 'Q2 to Q9: Attempt any 6 of 8 Long Legal Analytical Questions (10M = 60M)',
    wordTarget: '5M: 450–650 Words (2.5–3 Pages) • 10M: 950–1200 Words (4–4.5 Pages)',
  },
  papers: [
    predictivePaper,
    paper2024_1,
    paper2025_2,
    paper2024_3,
  ],
};
