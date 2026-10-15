// Subject Aggregator: Law of Torts
// Paper-3 • B.A. LL.B. Sem III (CBCS NEP)
// Curated by Swayam Jain

import { predictivePaper } from './predictivePaper.js';
import { paper2025_summer } from './paper2025_summer.js';
import { paper2024_summer } from './paper2024_summer.js';
import { paper2024_winter } from './paper2024_winter.js';

export const lawOfTorts = {
  id: 'law-of-torts',
  name: 'Law of Torts',
  code: 'Paper-3 • B.A. LL.B. Sem III',
  courseType: 'llb',
  courseCategory: 'LLB Course (Law)',
  stream: 'Law',
  description: 'Definitions & Essentials, General Defences (Volenti, Act of God), Trespass to Person & Land, Strict & Absolute Liability, Vicarious Liability, Sovereign Immunity, Negligence & Res Ipsa Loquitur, Nuisance, Defamation (Libel & Slander), and Remedies.',
  examStructure: {
    total: '80 Marks • 3 Hours • LLB Course (Law)',
    part1: 'Q1 (Compulsory): Attempt any 4 of 6 Short Notes (5M = 20M)',
    part2: 'Q2 to Q9: Attempt any 6 of 8 Long Tort Jurisprudence Questions (10M = 60M)',
    wordTarget: '5M: 450–650 Words (2.5–3 Pages) • 10M: 950–1200 Words (4–4.5 Pages)',
  },
  papers: [
    predictivePaper,
    paper2025_summer,
    paper2024_summer,
    paper2024_winter,
  ],
};
