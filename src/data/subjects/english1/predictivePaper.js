// High-Yield Predictive Question Paper (2026 Examination)
// Subject: English and Legal Writing - I (B.A. LL.B. Sem III - CBCS NEP)
// Calculated from weighted recurrence analysis of 2022, 2023 & 2024 papers.
// Curated by Swayam Jain

import { sectionA_predictive } from './predictive/sectionA.js';
import { sectionB_C_predictive } from './predictive/sectionB_C.js';

export const predictivePaper = {
  id: 'eng-predictive-2026',
  title: 'Predictive Paper (High-Yield 2026)',
  description: 'Calculated from weighted recurrence analysis across previous university papers and UGC NEP syllabus. Full 80 Marks Paper with all questions answered in complete 950–1200 word depth.',
  isPredictive: true,
  questions: [
    ...sectionA_predictive,
    ...sectionB_C_predictive,
  ],
};
