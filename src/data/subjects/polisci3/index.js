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
  description: 'Rights, Power, Authority & Legitimacy, Nation & Nationalism, Citizenship (Libertarian & Communitarian), Ideologies (Liberalism, Communism, Capitalism, Socialism, Feminism), and Democracy.',
  papers: [
    predictivePaper,
    paper2024_summer,
    paper2025_summer,
    paper2024_winter,
  ],
};
