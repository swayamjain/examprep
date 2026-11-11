// Subject Aggregator: Law of Contract - II
// CC 3.4 • B.A. LL.B. (5 Years) Sem III (CBCS NEP)
// Curated by Swayam Jain

import { predictivePaper } from './predictivePaper.js';
import { paper2025_summer } from './paper2025_summer.js';
import { paper2024_summer } from './paper2024_summer.js';
import { paper2024_winter } from './paper2024_winter.js';

export const lawOfContract2 = {
  id: 'contract-2',
  name: 'Law of Contract – II',
  code: 'CC 3.4 • B.A. LL.B. Sem III',
  courseType: 'llb',
  courseCategory: 'LLB Course (Law)',
  stream: 'Law',
  description: 'Special Contracts: Indemnity & Guarantee (Surety Rights & Discharge), Bailment & Pledge (Finder of Goods & Possessory Liens), Agency (Relation Back, Delegatus Non Potest Delegare), Indian Partnership Act 1932 (Mutual Agency, Dissolution, Registration), Limited Liability Partnership Act 2008, Sale of Goods Act 1930 (Conditions, Warranties, Caveat Emptor, Unpaid Seller), and Government Contracts under Article 299.',
  examStructure: {
    total: '80 Marks • 3 Hours • LLB Course (Law)',
    part1: 'Q1 (Compulsory): Attempt any 4 of 6 Short Notes (5M = 20M)',
    part2: 'Q2 to Q9: Attempt any 6 of 8 Analytical Questions (10M = 60M)',
    wordTarget: '5M: 450–650 Words (2.5–3 Pages) • 10M: 950–1200 Words (4–4.5 Pages)',
  },
  papers: [
    predictivePaper,
    paper2025_summer,
    paper2024_summer,
    paper2024_winter,
  ],
};
