// Subject Aggregator: Political Science - III
// Core Course (CC): 3.2 - B.A. LL.B. Sem III (CBCS NEP)
// Curated by Swayam Jain

import { predictivePaper } from './predictivePaper.js';
import { paper2024_summer } from './paper2024_summer.js';
import { paper2025_summer } from './paper2025_summer.js';
import { paper2024_winter } from './paper2024_winter.js';

export const politicalScience3 = {
  id: 'political-science-3',
  name: 'Political Science – III',
  code: 'CC 3.2 • B.A. LL.B. Sem III',
  courseType: 'ba-polisci',
  courseCategory: 'BA Course (Humanities)',
  stream: 'Humanities',
  description: 'Rights, Power, Authority & Legitimacy, Nation & Nationalism, Citizenship (Libertarian & Communitarian), Ideologies (Liberalism, Communism, Capitalism, Socialism, Feminism), and Democracy.',
  examStructure: {
    total: '80 Marks • 3 Hours • BA Course (Humanities)',
    part1: 'Q1 (Compulsory): Attempt any 4 of 6 Theoretical Short Notes (5M = 20M)',
    part2: 'Q2 to Q9: Attempt any 6 of 8 Conceptual Political Science Essays (10M = 60M)',
    wordTarget: '5M: 450–650 Words (2.5–3 Pages) • 10M: 950–1200 Words (4–4.5 Pages)',
  },
  papers: [
    predictivePaper,
    paper2024_summer,
    paper2025_summer,
    paper2024_winter,
  ],
};
