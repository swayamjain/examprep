// Paper 1 (PRS/KS/24/12139) - Q1 Short Notes (5 Marks each: 450 - 650 words target)
// Curated by Swayam Jain

export const q1ShortNotes = [
  {
    id: 'p1-q1a',
    qNum: 'Q1 (a)',
    marks: 5,
    question: 'Citizenship under Indian Constitution.',
    flairs: [
      { type: 'repeat', label: '🔥 Single Domicile & Citizenship' },
    ],
    answer: {
      statutoryFramework: 'Part II of the Constitution of India (Articles 5 to 11); Citizenship Act, 1955 (Act No. 57 of 1955 as amended in 1986, 1992, 2003, 2005, 2015, and 2019).',
      sections: [
        {
          heading: 'I. Introduction and Foundational Architecture of Part II',
          paragraphs: [
            'Citizenship denotes the legal relationship between an individual and the sovereign State, conferring full political membership, civil protection, and constitutional rights. Unlike the federal structure of the United States of America where a citizen holds dual citizenship—citizenship of the federal Union and citizenship of their individual State of residence—the Indian Constitution deliberately established a uniform, single citizenship for the entire territory of India. As Dr. B.R. Ambedkar articulated in the Constituent Assembly, the single citizenship model was forged to counteract regional divisions and build national unity in a diverse post-colonial society.',
            'Articles 5 to 10 of Part II did not create a permanent code governing citizenship for future generations. Rather, they were transitional constitutional provisions formulated specifically to resolve complex nationality problems arising out of the Partition of India on 26th January 1950. The permanent architecture was left to Parliament under Article 11.'
          ]
        },
        {
          heading: 'II. Acquisition of Citizenship at the Commencement of the Constitution (Articles 5 to 8)',
          paragraphs: [
            'At the commencement of the Constitution on 26th January 1950, citizenship was determined under four distinct categories:<br/>' +
            '<strong>1. Citizenship by Domicile (Article 5):</strong> A person who had their domicile in the territory of India and: (a) was born in India; or (b) either of whose parents was born in India; or (c) had been ordinarily resident in India for not less than 5 years immediately preceding commencement.<br/>' +
            '<strong>2. Migrants from Pakistan (Article 6):</strong> Persons who migrated from Pakistan to India became citizens if they migrated before 19th July 1948 and had ordinarily resided in India, or migrated after that date and were registered by an authorized officer after residing for 6 months.<br/>' +
            '<strong>3. Migrants to Pakistan who Returned (Article 7):</strong> A person who migrated to Pakistan after 1st March 1947 lost Indian citizenship, unless they returned to India under a permanent resettlement permit issued by law.<br/>' +
            '<strong>4. Persons of Indian Origin Residing Abroad (Article 8):</strong> Any person of Indian origin residing abroad could register as an Indian citizen through Indian diplomatic or consular representatives.'
          ]
        },
        {
          heading: 'III. Termination, Plenary Parliamentary Power, and Statutory Modes',
          paragraphs: [
            '<strong>Article 9 (Voluntary Acquisition of Foreign Citizenship):</strong> Re-affirms the single citizenship rule. If any Indian citizen voluntarily acquires the citizenship of a foreign country, their Indian citizenship terminates automatically.<br/>' +
            '<strong>Article 10 (Continuance of Rights):</strong> Every citizen continues to remain a citizen subject to any law that may be enacted by Parliament.<br/>' +
            '<strong>Article 11 (Plenary Power of Parliament):</strong> Article 11 granted full and supreme power to Parliament to regulate the acquisition, termination, and all other matters relating to citizenship. In exercise of this constitutional mandate, Parliament enacted the <strong>Citizenship Act, 1955</strong>, establishing five permanent modes of acquisition: (1) Birth, (2) Descent, (3) Registration, (4) Naturalization, and (5) Incorporation of Territory.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'State Trading Corporation of India v. Commercial Tax Officer',
          citation: 'AIR 1963 SC 1811 (9-Judge Constitution Bench)',
          facts: 'The State Trading Corporation, a government company, filed a writ petition claiming fundamental rights under Article 19 as an Indian citizen.',
          ratio: 'The Supreme Court held that nationality and citizenship are distinct concepts. A corporation is a legal entity, not a natural person. "Citizen" under Part II and the Citizenship Act, 1955 is strictly confined to natural human beings.'
        },
        {
          name: 'Pradeep Jain v. Union of India',
          citation: '(1984) 3 SCC 654',
          facts: 'State governments created wholesale regional reservation in medical colleges based on residential domicile in the State.',
          ratio: 'The Supreme Court held that there is only one citizenship and only one domicile in India—the domicile of India. There is no concept of separate State citizenship or State domicile under the Indian Constitution.'
        }
      ],
      conclusion: 'Part II of the Constitution reflects a balance between addressing post-partition migrations and granting Parliament authority under Article 11 to adapt nationality laws to evolving international and domestic demands.'
    }
  },
  {
    id: 'p1-q1b',
    qNum: 'Q1 (b)',
    marks: 5,
    question: 'Doctrine of Severability.',
    flairs: [
      { type: 'repeat', label: '🔥 Reappeared in 2025 Paper' },
    ],
    answer: {
      statutoryFramework: 'Article 13(1) and Article 13(2) of the Constitution of India; specifically anchored in the qualifying phrase "to the extent of such inconsistency".',
      sections: [
        {
          heading: 'I. Constitutional Genesis and Juristic Objective',
          paragraphs: [
            'The Doctrine of Severability (also termed the Doctrine of Separability) is an essential rule of constitutional interpretation derived directly from the qualifying words "to the extent of such inconsistency" occurring in Article 13(1) (regarding pre-constitutional laws) and Article 13(2) (regarding post-constitutional laws). The fundamental objective of this doctrine is to reconcile judicial review with legislative supremacy. When a court discovers that a statutory enactment infringes upon Fundamental Rights guaranteed in Part III, the court is not bound to strike down the statute in its entirety. Instead, the court acts like a surgeon, cutting out only the unconstitutional clause while preserving the valid and constitutional remainder of the Act.',
            'This doctrine prevents legislative paralysis by ensuring that valid, beneficial statutory provisions are not unnecessarily discarded due to the invalidity of a separable, subordinate clause.'
          ]
        },
        {
          heading: 'II. The Operational Mechanism: The Blue-Pencil Test and Legislative Intent',
          paragraphs: [
            'To determine whether the invalid portion of a statute can be severed from the valid portion, Indian constitutional courts apply the classical <strong>"Blue-Pencil Test"</strong> alongside the paramount test of <strong>Legislative Intent</strong>:<br/>' +
            '<strong>1. Test of Separability:</strong> The court mentally runs a blue pencil over the offending, unconstitutional clause. If after striking out the invalid section, what remains is an independent, coherent, and workable legal code capable of being enforced on its own, the valid portion survives.<br/>' +
            '<strong>2. Test of Legislative Intent:</strong> The court must ascertain whether the legislature would have enacted the surviving portion independently without the unconstitutional portion. If the valid and invalid provisions are so inseparably linked that the legislature intended them to operate only as an indivisible, composite whole, the entire Act must be struck down.<br/>' +
            '<strong>3. Test of Truncation:</strong> If after removing the unconstitutional section, what remains is so incomplete and unworkable that enforcing it would defeat the core purpose of the original Act, severability cannot be applied and the entire statute must fall.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'A.K. Gopalan v. State of Madras',
          citation: 'AIR 1950 SC 27',
          facts: 'Section 14 of the Preventive Detention Act, 1950 prohibited a detenu from disclosing the grounds of detention before a court of law, completely barring judicial review.',
          ratio: 'The Supreme Court struck down Section 14 as unconstitutional for violating Article 22(5) and Article 32. However, applying the Doctrine of Severability, the Court held that Section 14 was severable from the rest of the Act; its deletion did not affect the remaining sections, which continued to operate as valid law.'
        },
        {
          name: 'R.M.D.C. v. Union of India',
          citation: 'AIR 1957 SC 628',
          facts: 'The Prize Competitions Act, 1955 regulated prize competitions. The definition of "prize competition" in Section 2(d) covered both gambling competitions and competitions requiring substantial skill.',
          ratio: 'Justice Venkatarama Ayyar laid down seven definitive propositions governing severability. The Court held that gambling competitions were distinct and severable from competitions involving skill. The Act was severed and upheld as valid for gambling competitions.'
        },
        {
          name: 'Kihoto Hollohan v. Zachillhu',
          citation: '1992 Supp (2) SCC 651',
          facts: 'Paragraph 7 of the Tenth Schedule (Anti-Defection Law) excluded judicial review without being ratified by State Legislatures under Article 368(2).',
          ratio: 'The Constitution Bench held that Paragraph 7 was severable from the rest of the Tenth Schedule. The invalidity of Paragraph 7 did not affect the remaining provisions of the Tenth Schedule, which were upheld.'
        }
      ],
      conclusion: 'The Doctrine of Severability functions as a vital instrument of judicial restraint, preserving the democratic will of the legislature to the maximum extent permissible under constitutional limits.'
    }
  },
  {
    id: 'p1-q1c',
    qNum: 'Q1 (c)',
    marks: 5,
    question: 'Concept of welfare state and social justice.',
    flairs: [
      { type: 'repeat', label: '🔥 Reappeared in 2025 Paper' },
    ],
    answer: {
      statutoryFramework: 'Preamble ("JUSTICE, social, economic and political"); Part IV of the Constitution (Directive Principles of State Policy, Articles 38, 39, 39A, 41, 42, 43, 46).',
      sections: [
        {
          heading: 'I. Conceptual Evolution: From Laissez-Faire Police State to Modern Welfare State',
          paragraphs: [
            'The concept of a Welfare State marks a profound philosophical departure from the classical, colonial "Police State". While a police state operated on the negative, laissez-faire doctrine—limiting the role of the State to maintaining external defense, internal law and order, and enforcing commercial contracts—a Welfare State is rooted in the positive obligation of the State to promote the collective socio-economic well-being of its citizenry. The framers of the Indian Constitution recognized that political freedom without economic freedom is meaningless. Therefore, they dedicated Part IV of the Constitution (Directive Principles of State Policy) to establishing a socialist, democratic welfare state.',
            'As Justice Gajendragadkar observed, the concept of a welfare state is not a static dogma; it is an active, dynamic constitutional commitment to alleviate human suffering, eliminate economic exploitation, and ensure an egalitarian social order.'
          ]
        },
        {
          heading: 'II. Pillars of Social Justice under Part IV of the Constitution',
          paragraphs: [
            'Social justice is the constitutional bridge transforming formal political equality into substantive human emancipation. It encompasses several key constitutional provisions:<br/>' +
            '<strong>1. Article 38 (The Grundnorm of Welfare):</strong> Directs the State to promote the welfare of the people by securing a social order informed by justice—social, economic, and political—and to eliminate inequalities in income, status, and opportunities.<br/>' +
            '<strong>2. Distributive Justice (Article 39(b) & (c)):</strong> Mandates that the ownership and control of the material resources of the community must be distributed to subserve the common good, and that the economic system must not result in the concentration of wealth to the common detriment.<br/>' +
            '<strong>3. Labour and Human Welfare (Articles 41 to 43):</strong> Enjoins the State to secure the right to work, education, public assistance, just and humane conditions of work, maternity relief, and a living wage for all workers.<br/>' +
            '<strong>4. Protection of the Marginalized (Article 46):</strong> Commands the State to promote with special care the educational and economic interests of the weaker sections, particularly Scheduled Castes and Scheduled Tribes.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'State of Bihar v. Kameshwar Singh',
          citation: 'AIR 1952 SC 252',
          facts: 'Zamindars challenged the constitutional validity of the Bihar Land Reforms Act, 1950, which abolished feudal estates without paying commercial market compensation.',
          ratio: 'The Supreme Court upheld the legislation, ruling that the abolition of the feudal zamindari system and the redistribution of agricultural land to landless peasants is an essential mandate of the welfare state under Part IV.'
        },
        {
          name: 'Air India Statutory Corporation v. United Labour Union',
          citation: '(1997) 9 SCC 377',
          facts: 'Contract labourers employed as sweepers and cleaners at international airports sought regular absorption upon abolition of the contract labour system.',
          ratio: 'The Supreme Court ruled that social justice is a fundamental right. In a welfare state, economic empowerment is the essential foundation for realizing human rights. The Court ordered the direct absorption of contract workers.'
        }
      ],
      conclusion: 'The concept of a welfare state elevates social justice from an abstract moral sentiment into a binding constitutional imperative, providing the foundation for affirmative action, land reforms, and social security in India.'
    }
  },
  {
    id: 'p1-q1d',
    qNum: 'Q1 (d)',
    marks: 5,
    question: 'Preventive Detention under Indian Constitution.',
    flairs: [
      { type: 'repeat', label: '🔥 Appeared in All 3 Papers' },
    ],
    answer: {
      statutoryFramework: 'Article 22(3) to 22(7) of the Constitution of India; National Security Act (NSA), 1980; Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act (PITNDPS), 1988; COFEPOSA, 1974.',
      sections: [
        {
          heading: 'I. Concept and Constitutional Anomaly of Preventive Detention',
          paragraphs: [
            'Preventive detention stands in stark contrast to punitive detention. While punitive detention is intended to punish a person for an offence established through a regular judicial trial in a competent court of law, preventive detention is not punitive; it is precautionary. It involves the detention of a person without criminal charge, without investigation, and without judicial trial, purely on the subjective satisfaction of the executive to prevent them from committing acts prejudicial to state security, public order, or essential supplies in the future.',
            'India is one of the rare constitutional democracies in the world that incorporates provisions permitting preventive detention during peacetime within the chapter on Fundamental Rights (Part III). Aware of the grave potential for executive tyranny, the framers surrounded this power with strict constitutional safeguards in Article 22.'
          ]
        },
        {
          heading: 'II. Constitutional Safeguards under Article 22(4) and 22(5)',
          paragraphs: [
            'Under Article 22(3), a person detained under a preventive detention law is denied the ordinary safeguards of Article 22(1) and (2) (right to be informed of grounds immediately, right to consult legal counsel, and production before a magistrate within 24 hours). However, the Constitution provides alternative minimum safeguards:<br/>' +
            '<strong>1. Advisory Board Review (Article 22(4)):</strong> No person can be detained for a period exceeding 3 months unless an independent Advisory Board—consisting of persons qualified to be High Court judges—reports before the expiration of 3 months that there is sufficient cause for such detention.<br/>' +
            '<strong>2. Communication of Grounds (Article 22(5)):</strong> The detaining authority must communicate the grounds of detention to the detenu at the earliest possible opportunity.<br/>' +
            '<strong>3. Earliest Opportunity of Representation (Article 22(5)):</strong> The authority must afford the detenu the earliest opportunity to make a representation against the detention order.<br/>' +
            '<strong>4. Exception (Article 22(6)):</strong> The authority is not required to disclose facts which it considers against the public interest to disclose.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'A.K. Roy v. Union of India (National Security Act Case)',
          citation: '(1982) 1 SCC 271',
          facts: 'Constitutional challenge to the validity of the National Security Act, 1980 on grounds of procedural unfairness.',
          ratio: 'The Constitution Bench upheld the validity of preventive detention laws, but held that a detenu must be treated humanely, housed separately from convicts, allowed visits by family and friends, and entitled to assistance by a friend before the Advisory Board.'
        },
        {
          name: 'Rekha v. State of Tamil Nadu',
          citation: '(2011) 5 SCC 244',
          facts: 'A preventive detention order was passed under the Tamil Nadu Goondas Act while a regular bail application was already pending before the criminal court.',
          ratio: 'The Supreme Court quashed the detention order, holding that preventive detention is an extraordinary power. When ordinary criminal law is sufficient to deal with an offence, preventive detention cannot be invoked as an administrative shortcut.'
        }
      ],
      conclusion: 'Because preventive detention deprives personal liberty without a trial, the Supreme Court has consistently held that statutory safeguards must be strictly and scrupulously observed; the slightest procedural lapse renders the detention illegal.'
    }
  },
  {
    id: 'p1-q1e',
    qNum: 'Q1 (e)',
    marks: 5,
    question: 'Equality in Public Employment under Article 16.',
    flairs: [
      { type: 'repeat', label: '🔥 Affirmative Action Code' },
    ],
    answer: {
      statutoryFramework: 'Article 16 of the Constitution of India; amended by the 77th, 81st, 85th, and 103rd Constitutional Amendment Acts.',
      sections: [
        {
          heading: 'I. The General Guarantee of Equal Opportunity (Article 16(1) & (2))',
          paragraphs: [
            'Article 16 is an explicit application of the broad equality principle in Article 14, focused specifically on employment and appointment to offices under the State. Public employment in India is not merely a source of livelihood; it is a mechanism of state power and governance. Therefore, Article 16 ensures equal access to public employment for all citizens.',
            '<strong>Article 16(1)</strong> guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. This right applies to all stages of service: recruitment, selection, probation, promotion, seniority, and retrenchment.<br/>' +
            '<strong>Article 16(2)</strong> prohibits discrimination in state employment on seven specific grounds: <em>religion, race, caste, sex, descent, place of birth, residence, or any of them</em>.'
          ]
        },
        {
          heading: 'II. Enabling Exception Clauses and Substantive Equality (Article 16(3) to 16(6))',
          paragraphs: [
            'Formal equality between unequals perpetuates injustice. Therefore, Article 16 incorporates enabling clauses to secure substantive equality:<br/>' +
            '<strong>1. Residential Qualifications (Article 16(3)):</strong> Empowers Parliament (not State Legislatures) to prescribe residential requirements for appointments within a State/UT.<br/>' +
            '<strong>2. Reservation for Backward Classes (Article 16(4)):</strong> Enables the State to provide reservations for any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.<br/>' +
            '<strong>3. Promotions and Seniority (Articles 16(4A) & 16(4B)):</strong> Added by the 77th and 85th Amendments to permit reservations in promotions with consequential seniority for SCs and STs, and the carry-forward rule for unfilled vacancies.<br/>' +
            '<strong>4. Economically Weaker Sections (Article 16(6)):</strong> Inserted by the 103rd Amendment Act, 2019, permitting up to 10% reservation for EWS citizens other than SC/ST/OBCs.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'State of Kerala v. N.M. Thomas',
          citation: '(1976) 2 SCC 310',
          facts: 'Exemption granted to lower-cadre SC/ST government employees from clearing departmental tests for promotion.',
          ratio: 'The 7-Judge Bench held that Article 16(4) is not an exception to Article 16(1), but an emphatic statement of substantive equality. Equality requires affirmative classification to assist the disadvantaged.'
        },
        {
          name: 'Indra Sawhney v. Union of India (Mandal Case)',
          citation: 'AIR 1993 SC 477 (9-Judge Constitution Bench)',
          facts: 'Challenge to the implementation of the Mandal Commission report granting 27% reservations to Other Backward Classes (OBCs).',
          ratio: 'Upheld 27% OBC reservations subject to: (1) Exclusion of the "Creamy Layer"; (2) An upper ceiling of 50% on total reservations; and (3) Confinement of Article 16(4) to initial entry posts, not promotions.'
        }
      ],
      conclusion: 'Article 16 balances meritocracy with affirmative social justice, ensuring that public institutions reflect the pluralistic composition of Indian society.'
    }
  },
  {
    id: 'p1-q1f',
    qNum: 'Q1 (f)',
    marks: 5,
    question: 'Secularism under Indian Constitution.',
    flairs: [
      { type: 'repeat', label: '🔥 Basic Structure Feature' },
    ],
    answer: {
      statutoryFramework: 'Preamble (word "SECULAR" inserted by 42nd Amendment, 1976); Articles 25, 26, 27, 28, 15(1), and 16(2) of the Constitution of India.',
      sections: [
        {
          heading: 'I. The Indian Conception: Positive Secularism vs. Western Strict Separation',
          paragraphs: [
            'Secularism is one of the foundational pillars of the Indian constitutional order. However, the Indian model of secularism differs significantly from the Western, American, or French model of strict secularism. Western secularism is rooted in the doctrine of the "wall of separation" between Church and State—requiring mutual exclusion where the State takes no cognizance of religion, and religious bodies exercise no civic influence.',
            'In contrast, Indian secularism is characterized by <strong>Positive Secularism</strong> embodied in the ancient philosophical concept of <em>"Sarva Dharma Sambhava"</em> (equal respect and protection for all religions) combined with <em>"Dharma Nirpekshta"</em> (the State has no state religion and remains neutral). The Indian State does not maintain a hostile wall of separation from religion; rather, it maintains an equidistant relationship with all faiths, guaranteeing individual religious freedom while retaining the constitutional authority to intervene for social reform.'
          ]
        },
        {
          heading: 'II. Constitutional Architecture of Religious Freedom (Articles 25 to 28)',
          paragraphs: [
            'The secular framework is embedded across several provisions:<br/>' +
            '<strong>1. Individual Freedom of Conscience (Article 25):</strong> Guarantees all persons the freedom of conscience and the right freely to profess, practice, and propagate religion, subject to public order, morality, and health.<br/>' +
            '<strong>2. Collective Denominational Autonomy (Article 26):</strong> Protects the right of religious denominations to manage their own affairs in matters of religion.<br/>' +
            '<strong>3. Prohibition of Religious Taxation (Article 27):</strong> Prohibits the State from compelling any person to pay taxes where the proceeds are specifically appropriated for promoting any particular religion.<br/>' +
            '<strong>4. Ban on Religious Instruction in State Institutions (Article 28):</strong> Completely prohibits religious instruction in educational institutions wholly maintained out of State funds.'
          ]
        }
      ],
      caseLaws: [
        {
          name: 'S.R. Bommai v. Union of India',
          citation: '(1994) 3 SCC 1 (9-Judge Constitution Bench)',
          facts: 'Dismissal of State Governments following the demolition of the Babri Masjid under Article 356 for violating secular constitutional governance.',
          ratio: 'The Supreme Court ruled that Secularism is an inviolable part of the Basic Structure of the Constitution. State power cannot be aligned with any religious cause, and any political party pursuing a non-secular path is liable to constitutional action.'
        },
        {
          name: 'Aruna Roy v. Union of India',
          citation: '(2002) 7 SCC 368',
          facts: 'Challenge to NCERT curriculum teaching universal moral and value education based on comparative religions under Article 28.',
          ratio: 'The Supreme Court held that secularism does not mean anti-religion or total ignorance of religions; teaching universal moral values derived from different religions does not violate Article 28.'
        }
      ],
      conclusion: 'Indian secularism preserves religious liberty while permitting the State to enact progressive social legislation (such as opening Hindu temples to all castes and prohibiting discriminatory customs), reflecting the pluralistic ethos of the Constitution.'
    }
  }
];
