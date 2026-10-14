// Previous Year Question Paper 2 (PRS/KS/24/12137) - Summer 2024
// Subject: Law of Torts (Paper-3 • B.A. LL.B. Sem III - CBCS NEP)
// Curated by Swayam Jain

export const paper2024_summer = {
  id: 'pyq-torts-2024-summer',
  title: 'Summer 2024 (PRS/KS/24/12137)',
  description: 'B.A. LL.B. (5 Years) Semester-III (CBCS) (NEP) Examination. Paper-3: LAW OF TORTS. Full 80 Marks Paper with all 14 questions answered (including all optionals).',
  isPredictive: false,
  questions: [
    // -------------------------------------------------------------------------
    // Q1 (a)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1a',
      qNum: 'Q1 (a)',
      marks: 5,
      question: 'Short Note: Extinguishment of liability in tort.',
      flairs: [
        { type: 'repeat', label: '🔥 Core Repeat Concept' },
        { type: 'yield', label: '⚡ Unit V High Yield' },
      ],
      answer: {
        statutoryFramework: 'Discharge of Civil Liability; Indian Limitation Act, 1963; Section 306 of Indian Succession Act, 1925; Section 11 of Civil Procedure Code (Res Judicata).',
        sections: [
          {
            heading: 'I. Meaning of Extinguishment / Discharge of Liability',
            paragraphs: [
              '<strong>Extinguishment of liability in tort</strong> means that although a valid tort was committed and a cause of action arose, the liability of the defendant has come to an end due to certain supervening events, and the plaintiff can no longer maintain a suit in court.',
              'It is also referred to as the <strong>"Discharge of Torts"</strong>.'
            ]
          },
          {
            heading: 'II. The Six Recognized Modes of Extinguishment',
            paragraphs: [
              '<strong>1. Death of the Parties:</strong> Under the common law maxim <em>"Actio personalis moritur cum persona"</em> (a personal right of action dies with the person), purely personal torts like defamation, assault, or battery extinguish upon the death of either party.<br/>' +
              '<strong>2. Accord and Satisfaction:</strong> Accord is an agreement where the victim agrees to accept some valuable consideration in place of their right to sue; Satisfaction is the actual execution of that agreement (e.g., accepting ₹50,000 as final settlement for a car scrape).<br/>' +
              '<strong>3. Release:</strong> The injured party voluntarily surrenders or gives up their right of action against the wrongdoer, usually executed by a written deed or contract.<br/>' +
              '<strong>4. Waiver:</strong> Where an injured party has more than one alternative remedy (e.g., suing in contract or suing in tort) and intentionally elects one remedy, their right to pursue the other is waived.<br/>' +
              '<strong>5. Law of Limitation:</strong> Under the Limitation Act, 1963, if a suit is not filed within the prescribed time limit (e.g., 1 year for defamation, 3 years for trespass), the legal remedy is permanently barred.<br/>' +
              '<strong>6. Res Judicata / Judgment Recovered:</strong> Once a court of competent jurisdiction has delivered a final judgment on a cause of action, no fresh suit can be filed on the same facts (Section 11, CPC).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Bird v. Randall',
            citation: '(1762) 3 Burr 1345',
            facts: 'A master sued an employee for breach of service agreement and recovered full liquidated penalty. The master then filed a second suit in tort against a competitor for seducing the employee.',
            ratio: 'The court held that having already recovered full satisfaction in the first action, the master’s cause of action was completely extinguished and the second suit could not proceed.'
          },
          {
            name: 'Fitter v. Veal',
            citation: '(1701) 12 Mod Rep 542',
            facts: 'The plaintiff was assaulted and recovered £11 damages. Years later, a piece of his skull had to be surgically removed due to the old blow, and he sued again for fresh damages.',
            ratio: 'The court held the suit barred by judgment recovered (Res Judicata). Tort liability is extinguished once a final decree is passed; you cannot bring successive actions for unexpected consequences.'
          }
        ],
        criticalAnalysis: 'While common law allowed death to extinguish all personal claims, modern Indian welfare legislation (such as Section 166 of the Motor Vehicles Act) ensures that claims for loss of dependency survive for legal heirs.',
        conclusion: 'Liability in tort is extinguished by death, accord and satisfaction, release, waiver, lapse of limitation, or a prior final judicial decree.'
      }
    },

    // -------------------------------------------------------------------------
    // Q1 (b)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1b',
      qNum: 'Q1 (b)',
      marks: 5,
      question: 'Short Note: Distinguish between Libel and Slander.',
      flairs: [
        { type: 'repeat', label: '🔥 Classic Distinction' },
        { type: 'yield', label: '⚡ Unit IV High Yield' },
      ],
      answer: {
        statutoryFramework: 'Common law of defamation; Section 499 of the Indian Penal Code, 1860; Defamation Act, 1952 (UK).',
        sections: [
          {
            heading: 'I. Meaning of Defamation',
            paragraphs: [
              'Defamation is the injury to the reputation of a person resulting from a false statement communicated to a third party. English common law divides defamation into two distinct categories: <strong>Libel</strong> and <strong>Slander</strong>.'
            ]
          },
          {
            heading: 'II. Comparison Table: Libel vs. Slander',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Key Feature</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Libel</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Slander</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>1. Representation</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Written, printed, pictures, films, or digital text.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Spoken words, gestures, sounds, or body language.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>2. Sensory Organ</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Addressed to the eye (visual).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Addressed to the ear (auditory).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>3. Actionability</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Actionable <strong>per se</strong> (without proving financial loss).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Requires proof of <strong>special (monetary) damage</strong>, subject to 4 exceptions.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>4. Permanence</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Permanent in nature; continues to inflict damage.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Transitory and fleeting in nature.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>5. Indian Position</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Civil tort and criminal offence under Sec 499 IPC.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Both civil tort (actionable per se in most High Courts) and crime under Sec 499 IPC.</td></tr>' +
              '</tbody></table>'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Monson v. Tussauds Ltd.',
            citation: '(1894) 1 QB 671',
            facts: 'Madame Tussauds placed a wax effigy of the plaintiff with a gun near the "Chamber of Horrors" after he was tried for murder and the Scottish jury returned a verdict of "not proven".',
            ratio: 'Held that libel is not limited to written books; a waxwork exhibition, statue, or caricature displayed in permanent form constitutes actionable libel.'
          },
          {
            name: 'D.P. Choudhary v. Manjulata',
            citation: 'AIR 1997 Raj 170',
            facts: 'A daily newspaper published a fabricated piece of news claiming a young college student had eloped with a boy.',
            ratio: 'The court held the publication to be defamatory libel per se. In India, false written reports destroying social standing warrant compensation without requiring proof of monetary loss.'
          }
        ],
        criticalAnalysis: 'While English law strictly distinguishes between the two, Indian civil jurisprudence regards the English distinction as artificial and treats both as actionable per se to defend human dignity.',
        conclusion: 'Libel is permanent and actionable without proof of actual loss; slander is spoken and temporary; in India, both are recognized under civil torts and Section 499 IPC.'
      }
    },

    // -------------------------------------------------------------------------
    // Q1 (c)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1c',
      qNum: 'Q1 (c)',
      marks: 5,
      question: 'Short Note: The doctrine of sovereign immunity.',
      flairs: [
        { type: 'repeat', label: '🔥 Core Constitutional Tort' },
        { type: 'yield', label: '⚡ Unit IV High Yield' },
      ],
      answer: {
        statutoryFramework: 'Feudal rule: "The King can do no wrong"; Article 300 of the Constitution of India; Article 21 (Right to Life and Personal Liberty).',
        sections: [
          {
            heading: 'I. Meaning of Sovereign Immunity',
            paragraphs: [
              '<strong>Sovereign immunity</strong> is the historical doctrine holding that the sovereign State or monarch cannot be sued in tort for wrongful acts committed by public servants.',
              'In India, <strong>Article 300(1)</strong> provides that the Government of India and State Governments can sue and be sued in the same manner as the East India Company could be sued prior to the Constitution.'
            ]
          },
          {
            heading: 'II. The Sovereign vs. Non-Sovereign Functional Test',
            paragraphs: [
              '• <strong>Sovereign Functions:</strong> Functions that can only be exercised by the sovereign State (e.g., maintaining armed forces, making war/peace, acquiring foreign territory). For these, the State historically enjoyed immunity.<br/>' +
              '• <strong>Non-Sovereign Functions:</strong> Functions that could be carried on by a private individual or corporation (e.g., public transport, commercial trade, running hospitals, building roads). For these, the State is vicariously liable.<br/>' +
              '• <strong>Modern Rejection under Article 21:</strong> The Supreme Court has ruled that sovereign immunity can NEVER be pleaded as a defence against violations of Fundamental Rights (custodial torture, fake encounters, unlawful detention).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'State of Rajasthan v. Vidhyawati',
            citation: 'AIR 1962 SC 933',
            facts: 'A government jeep driven carelessly by a state employee from a workshop to the Collector’s house killed a pedestrian on a public road.',
            ratio: 'The Supreme Court rejected sovereign immunity, holding that the State is vicariously liable like an ordinary master for the torts of its drivers.'
          },
          {
            name: 'Kasturi Lal v. State of Uttar Pradesh',
            citation: 'AIR 1965 SC 1039',
            facts: 'Police seized gold from a trader and kept it in the police malkhana. A head constable stole the gold and fled to Pakistan.',
            ratio: 'The Supreme Court held the State not liable because arrest and seizure were sovereign functions. (This case is now severely limited and disapproved in later judgments).'
          },
          {
            name: 'Rudul Sah v. State of Bihar',
            citation: '(1983) 4 SCC 141',
            facts: 'The petitioner was acquitted by a Sessions Court but remained illegally detained in jail for 14 additional years due to administrative apathy.',
            ratio: 'The Supreme Court awarded ₹35,000 compensation under Article 32, establishing that sovereign immunity is dead in public law when Fundamental Rights are infringed.'
          }
        ],
        criticalAnalysis: 'In modern India, sovereign immunity has been confined strictly to national defence and foreign affairs. The emergence of "Constitutional Torts" guarantees compensation for state excesses.',
        conclusion: 'Sovereign immunity is an obsolete feudal concept that has no application in India against violations of human rights and personal liberty.'
      }
    },

    // -------------------------------------------------------------------------
    // Q1 (d)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1d',
      qNum: 'Q1 (d)',
      marks: 5,
      question: 'Short Note: Principle of justice, equity, and good conscience.',
      flairs: [
        { type: 'repeat', label: '🔥 Jurisprudential Basis' },
        { type: 'yield', label: '⚡ Unit I Foundational' },
      ],
      answer: {
        statutoryFramework: 'Section 9 of Code of Civil Procedure, 1908; High Court Charters and Judicial Charters (1726, 1753, 1861).',
        sections: [
          {
            heading: 'I. Origin of the Principle in Indian Law',
            paragraphs: [
              'Unlike contract or criminal law, the <strong>Law of Torts is not codified</strong> into an Indian Act of Parliament. How then do Indian courts decide tort disputes?',
              'Historically, through the Royal Charters and the Civil Courts Acts, British courts were directed that where there was no specific Indian statute, custom, or personal law governing a dispute, judges must decide according to <strong>"Justice, Equity, and Good Conscience"</strong>.'
            ]
          },
          {
            heading: 'II. Application to Indian Law of Torts',
            paragraphs: [
              'The Privy Council and the Supreme Court of India interpreted "justice, equity, and good conscience" to mean the <strong>rules of English Common Law</strong>, but with a critical condition:<br/>' +
              '• English common law rules are NOT applied blindly or mechanically in India.<br/>' +
              '• They are applied only so far as they are <strong>suitable to Indian social conditions, local customs, and constitutional values</strong>.<br/>' +
              '• Archaic or harsh English rules (such as common employment, or the strict feudal defence of sovereign immunity) were rejected by Indian judges on grounds of justice and equity.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Waghela Rajsanji v. Shekh Masludin',
            citation: '(1887) 14 IA 89 (Privy Council)',
            facts: 'A guardian purported to bind an infant by a personal covenant in an agreement.',
            ratio: 'Lord Hobhouse declared that "justice, equity, and good conscience" means the application of English law, modified to suit the conditions and circumstances of Indian society.'
          },
          {
            name: 'M.C. Mehta v. Union of India',
            citation: 'AIR 1987 SC 1086',
            facts: 'Industrial disaster involving dangerous gas leak from an enterprise in Delhi.',
            ratio: 'Chief Justice Bhagwati held that Indian courts cannot be bound by 19th-century English rules (like Rylands v. Fletcher). Under justice, equity, and constitutional law, Indian courts have the duty to forge new principles suitable to modern economic conditions (Absolute Liability).'
          }
        ],
        criticalAnalysis: 'Justice, equity, and good conscience has served as an elastic judicial bridge, allowing Indian judges to import progressive tort principles while rejecting unjust colonial technicalities.',
        conclusion: 'Justice, equity, and good conscience is the foundational bedrock of Indian tort law, empowering courts to deliver fair justice adapted to Indian constitutional values.'
      }
    },

    // -------------------------------------------------------------------------
    // Q1 (e)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1e',
      qNum: 'Q1 (e)',
      marks: 5,
      question: 'Short Note: Place of motive in tort.',
      flairs: [
        { type: 'repeat', label: '🔥 Essential Concept' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
      ],
      answer: {
        statutoryFramework: 'General principles of tortious liability; Intention vs. Motive distinction.',
        sections: [
          {
            heading: 'I. The General Rule: Motive is Irrelevant in Tort',
            paragraphs: [
              '<strong>Motive</strong> is the ulterior psychological purpose or reason behind an act (e.g., jealousy, revenge, greed). <strong>Intention</strong> is the state of mind desiring the immediate act itself.',
              '<strong>The General Rule:</strong> In the law of torts, <em>motive is completely irrelevant</em>:<br/>' +
              '• A lawful act does not become unlawful merely because it is done with a bad, spiteful, or malicious motive.<br/>' +
              '• An unlawful act does not become lawful merely because it was done with an innocent, good, or charitable motive.'
            ]
          },
          {
            heading: 'II. The Recognized Exceptions Where Motive IS Relevant',
            paragraphs: [
              'In certain specific torts, malice or bad motive is an essential ingredient of liability:<br/>' +
              '<strong>1. Malicious Prosecution:</strong> The plaintiff must prove that the defendant prosecuted them without reasonable and probable cause, AND out of malice.<br/>' +
              '<strong>2. Nuisance:</strong> Doing an act purely out of malice to spite a neighbour turns ordinary conduct into an actionable nuisance (<em>Christie v. Davey</em>).<br/>' +
              '<strong>3. Qualified Privilege in Defamation:</strong> The defence of qualified privilege is defeated if the plaintiff proves the defendant acted with express malice.<br/>' +
              '<strong>4. Tort of Conspiracy:</strong> An agreement to injure a trade rival with malicious intent.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Mayor of Bradford v. Pickles',
            citation: '(1895) AC 587',
            facts: 'Pickles owned land containing subterranean percolating water that flowed to the Bradford Corporation’s reservoir. Pickles sank shafts on his own land to stop the water flow, intending to force the Corporation to buy his land at an inflated price.',
            ratio: 'The House of Lords held Pickles not liable. He was exercising his lawful property rights. A lawful act cannot be made actionable merely because it was done with a bad or malicious motive.'
          },
          {
            name: 'Christie v. Davey',
            citation: '(1893) 1 Ch 316',
            facts: 'The plaintiff was a music teacher who gave lessons at home. The neighbour (defendant), annoyed by the music, maliciously banged trays, blew whistles, and beat walls solely to disrupt the lessons.',
            ratio: 'The court granted an injunction against the defendant. Because the defendant’s noise was made purely out of spite and malice, it was held to be an unreasonable and actionable nuisance.'
          }
        ],
        criticalAnalysis: 'While Pickles confirms that malice cannot make a lawful act tortious, Christie v. Davey shows that in balancing neighbourly rights, malice demonstrates unreasonableness.',
        conclusion: 'As a general rule, motive is irrelevant in torts; however, it becomes decisive in specific torts like malicious prosecution and spiteful nuisance.'
      }
    },

    // -------------------------------------------------------------------------
    // Q1 (f)
    // -------------------------------------------------------------------------
    {
      id: 't24s-q1f',
      qNum: 'Q1 (f)',
      marks: 5,
      question: 'Short Note: Extra-judicial remedies.',
      flairs: [
        { type: 'repeat', label: '🔥 Lawful Self-Help' },
        { type: 'yield', label: '⚡ Unit V High Yield' },
      ],
      answer: {
        statutoryFramework: 'Common law doctrine of self-help; Right of private defence under penal and civil jurisprudence.',
        sections: [
          {
            heading: 'I. Meaning of Extra-Judicial Remedies',
            paragraphs: [
              '<strong>Extra-judicial remedies</strong> are lawful self-help actions that an aggrieved person is permitted by law to take directly, without approaching a court of law or waiting for a judicial trial.',
              '<strong>Golden Rule of Self-Help:</strong> The person taking self-help must not use force exceeding what is strictly reasonable and proportionate; otherwise, they become guilty of trespass or assault.'
            ]
          },
          {
            heading: 'II. Five Classic Extra-Judicial Remedies',
            paragraphs: [
              '<strong>1. Expulsion of Trespasser (Re-entry on Land):</strong> A lawful possessor of land may request a trespasser to leave, and if they refuse, may gently lay hands on them (<em>molliter manus imposuit</em>) using reasonable force to eject them.<br/>' +
              '<strong>2. Recaption of Goods:</strong> If movable goods are wrongfully taken, the true owner may peaceably retake them from the wrongdoer without breaching the peace.<br/>' +
              '<strong>3. Abatement of Nuisance:</strong> An occupier may remove or terminate a nuisance affecting their enjoyment of land (e.g., cutting overhanging branches, *Lemmon v. Webb*).<br/>' +
              '<strong>4. Distress Damage Feasant:</strong> The right of an occupier to seize and detain trespassing animals or inanimate chattel causing actual physical damage on their land until the owner pays for the harm.<br/>' +
              '<strong>5. Self-Defence:</strong> The use of reasonable, proportionate force to protect one\'s person, family, or property from imminent unlawful attack.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Lemmon v. Webb',
            citation: '(1895) AC 1',
            facts: 'The defendant’s oak and elm tree branches grew over the plaintiff’s boundary. The plaintiff trimmed the branches without entering the neighbour’s land and without prior notice.',
            ratio: 'The House of Lords held that the plaintiff was fully entitled to abate the nuisance by cutting branches projecting over his own land.'
          },
          {
            name: 'Bird v. Holbrook',
            citation: '(1828) 4 Bing 628',
            facts: 'A garden owner set hidden spring guns to protect his valuable tulips. An innocent trespasser entered to catch a stray bird and was shot.',
            ratio: 'The court held that self-help cannot involve excessive, deadly, and unannounced force. The defendant was held liable in tort for damages.'
          }
        ],
        criticalAnalysis: 'Extra-judicial remedies are practical but dangerous: courts scrutinize them strictly to prevent private vengeance from degenerating into vigilantism and breach of peace.',
        conclusion: 'Extra-judicial remedies provide immediate relief through lawful self-help, provided the force used remains strictly proportionate and reasonable.'
      }
    },

    // -------------------------------------------------------------------------
    // Q2
    // -------------------------------------------------------------------------
    {
      id: 't24s-q2',
      qNum: 'Q2',
      marks: 10,
      question: 'Explain what is meant by trespass to land. What are the defenses to the defendant in an action for trespass?',
      flairs: [
        { type: 'repeat', label: '🔥 Trespass to Land Core' },
        { type: 'yield', label: '⚡ Unit II High Yield' },
      ],
      answer: {
        statutoryFramework: 'Common law tort: "Trespass Quare Clausum Fregit"; Section 6 of Specific Relief Act, 1963; Indian Penal Code Sec 441 (Criminal Trespass).',
        sections: [
          {
            heading: 'I. Meaning of Trespass to Land',
            paragraphs: [
              '<strong>Trespass to land</strong> (known in common law as <em>trespass quare clausum fregit</em>) is the direct, unjustified, and intentional physical interference with the lawful possession of land belonging to another.',
              '<strong>Three Vital Rules to Remember:</strong><br/>' +
              '1. <strong>Possession, Not Ownership:</strong> The action protects <em>actual possession</em>. Even a tenant or lessee can sue the landlord for trespass if the landlord enters without lawful authority.<br/>' +
              '2. <strong>Direct Interference:</strong> The invasion must be direct (e.g., stepping onto land, throwing stones onto it). Indirect harm (like tree roots gradually penetrating underground or smoke blowing across) is <em>nuisance</em>, not trespass.<br/>' +
              '3. <strong>Actionable Per Se:</strong> Trespass is actionable without proving any actual physical or financial damage.'
            ]
          },
          {
            heading: 'II. Three Ways Trespass to Land is Committed',
            paragraphs: [
              '• <strong>1. Entering upon Land:</strong> Walking onto the plaintiff’s land, climbing a wall, or driving a vehicle across without permission.<br/>' +
              '• <strong>2. Remaining upon Land:</strong> Entering with lawful permission (e.g., as a guest or cinema patron) but refusing to leave after the license/permission has been revoked.<br/>' +
              '• <strong>3. Placing Objects on Land:</strong> Dumping garbage, planting a post, driving nails into a neighbour’s wall, or leaving debris on another’s property.<br/>' +
              '• <strong>Sub-surface & Airspace Trespass:</strong> Land ownership extends down to the centre of the earth and up into the sky to a reasonable height necessary for ordinary use (e.g., an overhanging crane arm or billboard is trespass, *Kelsen v. Imperial Tobacco*).'
            ]
          },
          {
            heading: 'III. The Doctrine of Trespass Ab Initio',
            paragraphs: [
              'Established in the famous <strong>Six Carpenters\' Case (1610)</strong>: If a person enters land under an authority given by law (e.g., a police officer, tax bailiff, or public inspector) and subsequently commits an active wrongful abuse of that authority, the law considers them a trespasser from the very beginning (<em>ab initio</em>).'
            ]
          },
          {
            heading: 'IV. Defences Available in an Action for Trespass to Land',
            paragraphs: [
              'A defendant can escape liability by establishing:<br/>' +
              '<strong>1. Consent / Leave and License:</strong> The plaintiff expressly or impliedly permitted the defendant to enter.<br/>' +
              '<strong>2. Lawful Authority / Statutory Power:</strong> Entry authorized by law (e.g., police executing a search warrant under CrPC, or municipal engineers reading meters).<br/>' +
              '<strong>3. Private Defence / Right of Entry:</strong> Entering to abate an urgent nuisance or retake goods wrongfully stolen.<br/>' +
              '<strong>4. Necessity:</strong> Entry to prevent a catastrophic public disaster (e.g., entering private land to extinguish a raging forest fire).<br/>' +
              '<strong>5. Easementary Right:</strong> A legal right of way established by long prescription or statute.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Six Carpenters\' Case',
            citation: '(1610) 8 Co Rep 146a',
            facts: 'Six carpenters entered a public tavern, ordered wine and bread, and paid for it. They then ordered another pot of wine, drank it, but refused to pay for the second pot.',
            ratio: 'The court held that where authority is given by law and abused by a positive misfeasance, the person becomes a trespasser ab initio. However, a mere non-payment (non-feasance) did not make them trespassers ab initio.'
          },
          {
            name: 'Entick v. Carrington',
            citation: '(1765) 19 St Tr 1029',
            facts: 'State messengers acting under a general warrant from the Secretary of State broke into the plaintiff’s home and seized his private papers.',
            ratio: 'Lord Camden held that every invasion of private property, be it ever so minute, is a trespass. In the absence of specific statutory law, state officials have no divine right to enter private homes.'
          },
          {
            name: 'Kelsen v. Imperial Tobacco Co.',
            citation: '(1957) 2 QB 334',
            facts: 'The defendant erected an advertising sign on their wall that projected 8 inches into the airspace above the plaintiff’s single-storey shop.',
            ratio: 'The court held that airspace invasion is a trespass to land, granting an injunction to remove the sign even though it caused zero actual damage.'
          }
        ],
        criticalAnalysis: 'Trespass to land safeguards the inviolability of human homes and possession. Because it is actionable per se, property owners can defend their boundaries without waiting for actual destruction.',
        conclusion: 'Trespass to land protects actual possession against direct physical invasion; defendants can justify their entry through consent, necessity, or lawful authority.'
      }
    },

    // -------------------------------------------------------------------------
    // Q3
    // -------------------------------------------------------------------------
    {
      id: 't24s-q3',
      qNum: 'Q3',
      marks: 10,
      question: '"Violation of a legal right and not the resulting damage is necessary for an action in tort". Discuss the statement in the light of two maxims relating to tortious liability.',
      flairs: [
        { type: 'repeat', label: '🔥 Foundational Maxims 10-Marker' },
        { type: 'yield', label: '⚡ Unit I Core' },
      ],
      answer: {
        statutoryFramework: 'Fundamental Maxims of Tortious Liability: "Injuria sine damno" and "Damnum sine injuria"; Maxim: "Ubi jus ibi remedium".',
        sections: [
          {
            heading: 'I. The Legal Foundation: Right vs. Damage',
            paragraphs: [
              'The central rule of tort law is that liability is not based on whether someone suffered financial or physical loss, but on <strong>whether a legally protected right was infringed</strong>.',
              'This profound distinction is explained through two classic contrasting Latin maxims:<br/>' +
              '1. <strong>Injuria Sine Damno</strong> (Legal injury WITHOUT damage) → Actionable.<br/>' +
              '2. <strong>Damnum Sine Injuria</strong> (Damage WITHOUT legal injury) → NOT Actionable.'
            ]
          },
          {
            heading: 'II. Maxim 1: Injuria Sine Damno (Actionable Per Se)',
            paragraphs: [
              '• <em>Translation:</em> "Injuria" (infringement of legal right) + "Sine" (without) + "Damno" (actual damage or loss).<br/>' +
              '• <em>Principle:</em> Whenever an absolute private legal right is infringed by the defendant, an action in tort succeeds immediately. The plaintiff does NOT have to prove that they suffered monetary loss, injury, or hardship.<br/>' +
              '• <em>Application:</em> Seen in torts like trespass to land, assault, battery, false imprisonment, and denial of voting rights. The law vindicates the sacred right itself.'
            ]
          },
          {
            heading: 'III. Maxim 2: Damnum Sine Injuria (Not Actionable)',
            paragraphs: [
              '• <em>Translation:</em> "Damnum" (actual financial loss, harm, or hardship) + "Sine" (without) + "Injuria" (infringement of legal right).<br/>' +
              '• <em>Principle:</em> Even if a plaintiff suffers catastrophic financial ruin, physical inconvenience, or business collapse due to the defendant\'s act, NO action lies in tort if the defendant\'s conduct did not violate any legal right of the plaintiff.<br/>' +
              '• <em>Application:</em> Lawful commercial competition, trade rivalry, or exercising lawful property rights (e.g., opening a new school, charging lower bus fares).'
            ]
          },
          {
            heading: 'IV. Comparative Synthesis',
            paragraphs: [
              'The law of torts does not exist to guarantee commercial profits or protect people from lawful competition. It exists solely to <strong>redress legal wrongs</strong>. Therefore, harm without violation of a right creates zero liability, while violation of a right without harm creates full liability.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Ashby v. White (Injuria Sine Damno)',
            citation: '(1703) 2 Ld. Raym. 938',
            facts: 'The returning officer maliciously refused to let the plaintiff cast his vote in a parliamentary election. The candidate the plaintiff supported won anyway, causing zero monetary harm to the plaintiff.',
            ratio: 'Chief Justice Holt established that an infringement of a legal right is actionable per se. Where there is a legal right, there is a legal remedy (Ubi jus ibi remedium).'
          },
          {
            name: 'Gloucester Grammar School Case (Damnum Sine Injuria)',
            citation: '(1410) YB 11 Hen IV, f. 47, pl. 21',
            facts: 'A schoolmaster set up a rival grammar school next door to the plaintiff\'s established school. Due to competition, the plaintiff had to slash tuition fees from 40 pence to 12 pence per student, suffering heavy financial loss.',
            ratio: 'Held that no action lies. Setting up a rival school was a lawful exercise of trade. The financial loss was Damnum sine injuria, creating no tortious liability.'
          },
          {
            name: 'Chasemore v. Richards (Damnum Sine Injuria)',
            citation: '(1859) 7 HLC 349',
            facts: 'A landowner dug an extensive well on his own land to supply water to a nearby town, drying up the underground percolation that fed the plaintiff\'s historic water mill.',
            ratio: 'The House of Lords held that a landowner has the lawful right to extract underground percolating water on their own property. The mill-owner’s financial loss was Damnum sine injuria.'
          }
        ],
        criticalAnalysis: 'These two maxims clearly define the boundaries of tort law: courts exist to uphold legal rights, not to shield individuals from the inevitable frictions and commercial rivalries of social life.',
        conclusion: 'Violation of a legal right (Injuria) is the sole test of tortious liability: Injuria sine damno is actionable, whereas Damnum sine injuria leaves the victim with no legal remedy.'
      }
    },

    // -------------------------------------------------------------------------
    // Q4
    // -------------------------------------------------------------------------
    {
      id: 't24s-q4',
      qNum: 'Q4',
      marks: 10,
      question: 'Explain the principle of vicarious liability. Under what circumstances does such liability arise?',
      flairs: [
        { type: 'repeat', label: '🔥 Master-Servant Vicarious Liability' },
        { type: 'yield', label: '⚡ Unit III High Yield' },
      ],
      answer: {
        statutoryFramework: 'Two Latin Maxims: "Qui facit per alium facit per se" and "Respondeat Superior"; Law of agency and employment.',
        sections: [
          {
            heading: 'I. Meaning and Legal Maxims of Vicarious Liability',
            paragraphs: [
              'As a general rule, a person is liable only for their own wrongful acts. <strong>Vicarious liability</strong> is an exception where the law holds one person liable for the torts committed by another person.',
              '<strong>Two Core Legal Maxims:</strong><br/>' +
              '1. <strong>Qui facit per alium facit per se:</strong> <em>"He who acts through another is deemed in law to act for himself."</em><br/>' +
              '2. <strong>Respondeat Superior:</strong> <em>"Let the superior / master be held responsible."</em> The master has a deeper pocket and selects the servant, so the master must bear the risk of business operations.'
            ]
          },
          {
            heading: 'II. Three Recognized Relationships Creating Vicarious Liability',
            paragraphs: [
              'Vicarious liability arises primarily in three specific relationships:<br/>' +
              '<strong>1. Master and Servant (Employer and Employee):</strong> The most common form.<br/>' +
              '<strong>2. Principal and Agent:</strong> Where an agent commits a tort while acting within the scope of authority granted by the principal.<br/>' +
              '<strong>3. Partners in a Firm:</strong> Under Section 26 of the Indian Partnership Act, 1932, all partners are jointly and severally liable for any tort committed by one partner in the ordinary course of business.'
            ]
          },
          {
            heading: 'III. Two Mandatory Conditions for Master\'s Liability',
            paragraphs: [
              'To hold a master vicariously liable for the tort of a servant, two essentials must be proved:<br/>' +
              '<strong>1. A Master-Servant Relationship (Contract of Service):</strong><br/>' +
              '• The wrongdoer must be a "servant" and not an "independent contractor".<br/>' +
              '• <em>The Test:</em> A servant is employed under a <em>"Contract of Service"</em> (master controls what is to be done and how it is to be done). An independent contractor is under a <em>"Contract for Services"</em> (master directs what is to be done, but contractor chooses the method). Master is generally NOT liable for independent contractors.',

              '<strong>2. Tort Committed in the "Course of Employment":</strong><br/>' +
              'The act must be done in the course of employment. An act is in the course of employment if:<br/>' +
              '• It was expressly authorized by the master; OR<br/>' +
              '• It was a wrongful and unauthorized mode of doing some act that was authorized (<em>Salmond\'s Rule</em>).<br/>' +
              '• <em>Frolic of His Own:</em> If the servant goes off on a completely independent journey of their own for personal amusement (a "frolic of his own", *Storey v. Ashton*), the master is NOT liable.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Limpus v. London General Omnibus Co.',
            citation: '(1862) 1 H & C 526',
            facts: 'An omnibus driver was expressly forbidden by his employer from racing with or obstructing rival omnibuses. The driver defied the instruction, pulled across the road to obstruct a rival, and caused a collision.',
            ratio: 'The employer was held vicariously liable. The driver was doing authorized work (driving the bus), and the express prohibition only governed the manner of performance, not the scope of employment.'
          },
          {
            name: 'Lloyd v. Grace, Smith & Co.',
            citation: '(1912) AC 716',
            facts: 'The managing clerk of a firm of solicitors fraudulently induced a widowed client to sign documents transferring her cottages and mortgage money to his own name, pocketing the funds.',
            ratio: 'The House of Lords held the solicitor firm vicariously liable. Even though the fraud was committed for the clerk’s personal benefit, it was done within the apparent authority entrusted to him by the firm.'
          },
          {
            name: 'State of Rajasthan v. Vidhyawati',
            citation: 'AIR 1962 SC 933',
            facts: 'A driver employed by the State knocked down and killed a pedestrian while driving a government jeep from a repair workshop.',
            ratio: 'The Supreme Court affirmed that the State as a master is vicariously liable for the negligent driving of its employees in the course of employment.'
          }
        ],
        criticalAnalysis: 'Vicarious liability is grounded in social justice: the employer organizes the profitable enterprise, introduces the risk to society, and has the financial insurance capacity to compensate innocent victims.',
        conclusion: 'Vicarious liability holds masters responsible for the torts of their servants committed in the course of employment under the maxims Respondeat Superior and Qui facit per alium facit per se.'
      }
    },

    // -------------------------------------------------------------------------
    // Q5
    // -------------------------------------------------------------------------
    {
      id: 't24s-q5',
      qNum: 'Q5',
      marks: 10,
      question: 'Explain: (a) Donoghue v. Stevenson (b) Rylands v. Fletcher.',
      flairs: [
        { type: 'repeat', label: '🔥 Two Greatest Landmark Cases' },
        { type: 'yield', label: '⚡ Landmark Jurisprudence' },
      ],
      answer: {
        statutoryFramework: 'House of Lords Jurisprudence; Law of Negligence (Neighbour Principle); Law of Strict Liability.',
        sections: [
          {
            heading: 'I. Part (a): Donoghue v. Stevenson (1932) AC 562',
            paragraphs: [
              '<strong>1. Facts of the Case:</strong><br/>' +
              'Mrs. Donoghue went to a café in Paisley with a friend. The friend bought her a bottle of ginger beer manufactured by Stevenson. The bottle was made of dark, opaque glass. Mrs. Donoghue drank some ginger beer. When the remainder was poured into her glass, the decomposed remains of a dead snail floated out. Mrs. Donoghue suffered severe shock and gastroenteritis.',

              '<strong>2. Legal Problem (The Privity Fallacy):</strong><br/>' +
              'Mrs. Donoghue had no contract with the manufacturer or café (her friend had paid). Under existing 19th-century law, manufacturers claimed they owed no duty of care to consumers without contractual privity.',

              '<strong>3. Ratio Decidendi (Lord Atkin’s Neighbour Principle):</strong><br/>' +
              'The House of Lords ruled in favour of Mrs. Donoghue. Lord Atkin established the foundational <strong>"Neighbour Principle"</strong>:<br/>' +
              '<em>"You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour. Who then, in law, is my neighbour? The answer seems to be—persons who are so closely and directly affected by my act that I ought reasonably to have them in contemplation."</em><br/>' +
              '<strong>Rule:</strong> A manufacturer of goods owes a direct legal duty of care to the ultimate consumer to ensure the product is free from harmful defects.'
            ]
          },
          {
            heading: 'II. Part (b): Rylands v. Fletcher (1868) LR 3 HL 330',
            paragraphs: [
              '<strong>1. Facts of the Case:</strong><br/>' +
              'Rylands, a mill-owner, wished to construct a water reservoir on his land to power his mill. He hired independent, competent engineers and contractors to build it. While excavating, the contractors uncovered old, disused coal-mining shafts filled with earth and debris, which secretly connected to Fletcher\'s active coal mines next door. The contractors negligently failed to seal these shafts. When the reservoir was filled, the water burst through the shafts and flooded Fletcher’s coal mines.',

              '<strong>2. Legal Problem:</strong><br/>' +
              'Rylands was not personally negligent (he hired licensed contractors), nor was he guilty of intentional trespass.',

              '<strong>3. Ratio Decidendi (Justice Blackburn’s Strict Liability Rule):</strong><br/>' +
              'The House of Lords affirmed the decision, laying down the rule of <strong>Strict Liability</strong>:<br/>' +
              '<em>"The person who for his own purposes brings on his lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and, if he does not do so, is prima facie answerable for all the damage which is the natural consequence of its escape."</em><br/>' +
              '<strong>Three Essentials:</strong> (1) Bringing a dangerous thing onto land, (2) Non-natural use of land, and (3) Escape of the thing causing damage.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Donoghue v. Stevenson',
            citation: '(1932) AC 562',
            facts: 'Decomposed snail in an opaque ginger beer bottle; consumer sued manufacturer without contractual privity.',
            ratio: 'Established the universal modern tort of negligence and the Neighbour Principle, imposing liability on manufacturers towards consumers.'
          },
          {
            name: 'Rylands v. Fletcher',
            citation: '(1868) LR 3 HL 330',
            facts: 'Reservoir water burst through hidden mine shafts and flooded plaintiff\'s adjoining coal mine.',
            ratio: 'Established the doctrine of Strict Liability (no-fault liability) for the escape of dangerous things brought onto land for non-natural use.'
          }
        ],
        criticalAnalysis: 'These two cases constitute the twin pillars of Anglo-Indian tort law: Donoghue v. Stevenson established fault-based liability for negligence, while Rylands v. Fletcher established no-fault liability for hazardous activities.',
        conclusion: 'Donoghue v. Stevenson created the universal duty of care in negligence, while Rylands v. Fletcher created strict liability for escaping dangerous things.'
      }
    },

    // -------------------------------------------------------------------------
    // Q6
    // -------------------------------------------------------------------------
    {
      id: 't24s-q6',
      qNum: 'Q6',
      marks: 10,
      question: 'Discuss the capacity of the following to sue and be sued in Tort: (a) A minor (b) Foreign sovereigns, ambassadors, etc. (c) A convict (d) Bankrupt or insolvent.',
      flairs: [
        { type: 'repeat', label: '🔥 Comprehensive Capacity 10-Marker' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
      ],
      answer: {
        statutoryFramework: 'Sections 84, 85, 86 of Code of Civil Procedure, 1908; Indian Majority Act, 1875; Indian Succession Act, 1925.',
        sections: [
          {
            heading: 'I. Capacity of (a) A Minor',
            paragraphs: [
              '• <strong>Capacity to Sue:</strong> A minor can sue for any tort committed against them through their <strong>"Next Friend"</strong> or legal guardian (Order XXXII, CPC). An unborn child (*en ventre sa mere*) has the right to sue for prenatal injuries upon live birth.<br/>' +
              '• <strong>Liability to be Sued:</strong> A minor is liable for their independent torts (<em>Burnard v. Haggis</em>). However, a plaintiff cannot bypass the protective barrier of contract law by converting a void contract breach into a tort (<em>Jennings v. Rundall</em>).'
            ]
          },
          {
            heading: 'II. Capacity of (b) Foreign Sovereigns and Ambassadors',
            paragraphs: [
              '• <strong>Capacity to Sue:</strong> Under Section 84 of the CPC, a recognized foreign State may sue in any Indian court to enforce private rights.<br/>' +
              '• <strong>Immunity from Being Sued:</strong> Under international diplomatic law and <strong>Section 86 of the CPC</strong>, no foreign sovereign, ambassador, or diplomatic envoy can be sued in an Indian court without the <strong>prior written consent of the Central Government</strong>.<br/>' +
              '• Diplomats enjoy absolute diplomatic immunity from civil and criminal processes.'
            ]
          },
          {
            heading: 'III. Capacity of (c) A Convict',
            paragraphs: [
              '• <strong>Historical Position:</strong> At English common law under the old doctrine of "attainder" and "civil death", a convicted felon lost all civil rights and could not sue.<br/>' +
              '• <strong>Modern Indian Law:</strong> Under Indian constitutional jurisprudence, conviction does NOT strip a human being of fundamental rights. A convict remains a person and can sue for torts committed against them (e.g., custodial violence or illegal confinement, <em>Sunil Batra v. Delhi Administration</em>).'
            ]
          },
          {
            heading: 'IV. Capacity of (d) Bankrupt or Insolvent',
            paragraphs: [
              '• <strong>Torts to Property:</strong> The right of action passes to the Official Assignee / Receiver for the benefit of creditors.<br/>' +
              '• <strong>Personal Torts (Assault, Slander, False Imprisonment):</strong> The bankrupt retains the personal right to sue, and any damages awarded belong to them personally to compensate for bodily/mental injury (<em>Rose v. Buckett</em>).<br/>' +
              '• <strong>Liability to be Sued:</strong> An insolvent remains liable for torts, but unliquidated damages cannot be claimed as a provable debt in insolvency until fixed by court judgment.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Burnard v. Haggis (Minor)',
            citation: '(1863) 14 CB (NS) 45',
            facts: 'A minor hired a horse strictly for riding, but used it for jumping over a fence, killing the horse.',
            ratio: 'Held that the minor was liable in tort. The act was a positive independent wrong outside the contract.'
          },
          {
            name: 'Mirza Ali Akbar Kashani v. United Arab Republic (Diplomat)',
            citation: 'AIR 1966 SC 230',
            facts: 'The plaintiff sued a foreign state for breach of contract without obtaining Central Government consent under Section 86 CPC.',
            ratio: 'The Supreme Court confirmed that Section 86 CPC provides absolute immunity to foreign sovereigns and states unless certified by the Central Government.'
          },
          {
            name: 'Sunil Batra v. Delhi Administration (Convict)',
            citation: 'AIR 1980 SC 1579',
            facts: 'A death-row convict challenged physical torture inflicted by jail wardens in Tihar Jail.',
            ratio: 'The Supreme Court ruled that convicts do not forfeit their fundamental human dignity; prisoners have full capacity to seek judicial redress against state torts.'
          }
        ],
        criticalAnalysis: 'Capacity rules reflect legal realism: minors and insolvents are shielded from contractual ruin while held accountable for harm; diplomats receive international protection; and convicts retain constitutional human dignity.',
        conclusion: 'Minors sue via next friends, foreign diplomats require Central Government consent to be sued, convicts retain tortious rights under Article 21, and insolvents retain personal tort claims.'
      }
    },

    // -------------------------------------------------------------------------
    // Q7
    // -------------------------------------------------------------------------
    {
      id: 't24s-q7',
      qNum: 'Q7',
      marks: 10,
      question: 'What are general defences available to a person in an action for tort?',
      flairs: [
        { type: 'repeat', label: '🔥 Classic General Defences' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
      ],
      answer: {
        statutoryFramework: 'Common law general exceptions; Maxims: "Volenti non fit injuria", "Vis major", "Ex turpi causa non oritur actio".',
        sections: [
          {
            heading: 'I. Meaning of General Defences',
            paragraphs: [
              'General defences are justifications or excuses recognized by the law of torts that completely exonerate the defendant from civil liability, even when their act has caused harm to the plaintiff.'
            ]
          },
          {
            heading: 'II. Detailed Analysis of the Seven Recognized Defences',
            paragraphs: [
              '<strong>1. Volenti Non Fit Injuria (Consent):</strong><br/>' +
              '• "To a willing person, no injury is done." Harm suffered with voluntary consent is not actionable (e.g., sports injuries, medical surgeries).<br/>' +
              '• <em>Rescue Exception:</em> Does not apply to brave individuals rescuing others from danger created by the defendant’s negligence (<em>Haynes v. Harwood</em>).',

              '<strong>2. Act of God (Vis Major):</strong><br/>' +
              '• An extraordinary, catastrophic operation of natural forces that could not have been anticipated or guarded against by reasonable human care (<em>Nichols v. Marsland</em>).',

              '<strong>3. Inevitable Accident:</strong><br/>' +
              '• An unexpected event that could not possibly have been prevented by the exercise of reasonable care, caution, and skill of a prudent person (<em>Stanley v. Powell</em>).',

              '<strong>4. Private Defence:</strong><br/>' +
              '• Using reasonable, non-excessive force to protect one’s person, family, or property against unlawful force (<em>Bird v. Holbrook</em>).',

              '<strong>5. Necessity:</strong><br/>' +
              '• An intentional act done to prevent a greater imminent evil or public disaster (e.g., throwing cargo overboard to save a sinking ship, or demolishing a house to prevent a raging fire from consuming a city).',

              '<strong>6. Statutory Authority:</strong><br/>' +
              '• Acts authorized by an Act of Parliament/Legislature are completely immune from tort actions for inevitable resulting nuisance or damage (<em>Vaughan v. Taff Vale Rly</em>).',

              '<strong>7. Plaintiff the Wrongdoer:</strong><br/>' +
              '• Grounded in the maxim <em>"Ex turpi causa non oritur actio"</em> (no action arises from an immoral cause). A person committing an illegal crime cannot recover damages for injuries resulting directly from their criminal act.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Hall v. Brooklands Auto Racing Club',
            citation: '(1933) 1 KB 205',
            facts: 'Spectator injured when a racing car crashed through railings during a race.',
            ratio: 'Held that spectators voluntarily assume the inherent, obvious risks of high-speed sporting events (Volenti non fit injuria).'
          },
          {
            name: 'Stanley v. Powell',
            citation: '(1891) 1 QB 86',
            facts: 'Pellet fired at a pheasant ricocheted off an oak tree and blinded the plaintiff.',
            ratio: 'Defendant held not liable. The injury was the result of an inevitable accident.'
          },
          {
            name: 'Vaughan v. Taff Vale Railway Co.',
            citation: '(1860) 5 H & N 679',
            facts: 'Sparks from a railway engine set fire to woods adjoining the railway track.',
            ratio: 'The railway company was held not liable. Parliament had authorized the running of steam locomotives, and all reasonable precautions were taken.'
          }
        ],
        criticalAnalysis: 'General defences prevent the law of torts from becoming a harsh system of unfair punishment. They ensure that civil liability attaches only to blameworthy or unreasonable conduct.',
        conclusion: 'General defences provide legitimate justifications—ranging from consent and inevitable accidents to statutory authority—shielding defendants from liability.'
      }
    },

    // -------------------------------------------------------------------------
    // Q8
    // -------------------------------------------------------------------------
    {
      id: 't24s-q8',
      qNum: 'Q8',
      marks: 10,
      question: 'Answer in brief: (a) Res ipsa loquitor (b) Malfeasance, misfeasance, and nonfeasance.',
      flairs: [
        { type: 'repeat', label: '🔥 Dual Short-Notes 10-Marker' },
        { type: 'yield', label: '⚡ Unit I & II High Yield' },
      ],
      answer: {
        statutoryFramework: 'Section 106 of Indian Evidence Act, 1872; Law of Negligence and Public Body Liability.',
        sections: [
          {
            heading: 'I. Part (a): Res Ipsa Loquitur ("The Thing Speaks for Itself")',
            paragraphs: [
              '<strong>1. Meaning:</strong> Normally, the burden of proving negligence lies on the plaintiff. The Latin maxim <strong>"Res Ipsa Loquitur"</strong> is an evidentiary rule that <strong>reverses the burden of proof</strong>. Where the facts of the accident speak for themselves, negligence is presumed, and the defendant must prove they were NOT negligent.',

              '<strong>2. Two Conditions for Application:</strong><br/>' +
              '• <em>Exclusive Control:</em> The object or operation causing the injury was under the exclusive management and control of the defendant.<br/>' +
              '• <em>Accident Cannot Happen Without Fault:</em> The mishap is such that in the ordinary course of human affairs, it simply does not occur without negligence.'
            ]
          },
          {
            heading: 'II. Part (b): Malfeasance, Misfeasance, and Nonfeasance',
            paragraphs: [
              'These three terms define the three ways a person or public authority can commit a wrong:<br/>' +
              '<strong>1. Malfeasance (Illegal Act):</strong><br/>' +
              '• Doing an act that is totally wrongful, unlawful, or prohibited from the outset (e.g., trespassing, committing assault, or extorting bribes).<br/>' +
              '<strong>2. Misfeasance (Improper Performance of Lawful Act):</strong><br/>' +
              '• Doing a lawful act in an improper, careless, or negligent manner (e.g., a surgeon performing surgery carelessly, or road workers digging a trench and leaving it unlit at night).<br/>' +
              '<strong>3. Nonfeasance (Omission to Perform Mandatory Duty):</strong><br/>' +
              '• Total failure to do an act that a person or authority was legally bound to perform (e.g., municipality failing to inspect an old bridge, causing it to collapse).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Byrne v. Boadle (Res Ipsa Loquitur)',
            citation: '(1863) 2 H & C 722',
            facts: 'The plaintiff was walking along a public street outside the defendant\'s shop when a heavy barrel of flour fell from a second-floor window onto his shoulder.',
            ratio: 'Baron Pollock ruled that barrels of flour do not roll out of warehouse windows on their own without negligence. The accident itself established a prima facie case of negligence (Res ipsa loquitur).'
          },
          {
            name: 'Municipal Corporation of Delhi v. Subhagwanti (Nonfeasance)',
            citation: 'AIR 1966 SC 1750',
            facts: 'The 80-year-old clock tower in Chandni Chowk collapsed and killed pedestrians due to lack of structural maintenance by MCD.',
            ratio: 'The Supreme Court held MCD liable both for nonfeasance (failure to inspect) and under Res Ipsa Loquitur, as clock towers do not fall in normal weather without negligence.'
          }
        ],
        criticalAnalysis: 'Res ipsa loquitur prevents defendants from concealing internal negligence, while the malfeasance-misfeasance-nonfeasance framework ensures complete accountability for public authorities.',
        conclusion: 'Res ipsa loquitur shifts the burden of proof when accidents speak for themselves; malfeasance is doing an illegal act, misfeasance is doing a lawful act badly, and nonfeasance is failing to act.'
      }
    },

    // -------------------------------------------------------------------------
    // Q9
    // -------------------------------------------------------------------------
    {
      id: 't24s-q9',
      qNum: 'Q9',
      marks: 10,
      question: "'A tort is an infringement of a right in rem of an individual, giving right of compensation at the suit of the injured party'. Discuss this statement and state how a tort is different from a crime and breach of contract.",
      flairs: [
        { type: 'repeat', label: '🔥 Master Comparison 10-Marker' },
        { type: 'yield', label: '⚡ Unit I Comprehensive' },
      ],
      answer: {
        statutoryFramework: 'Jurisprudential definitions by Salmond, Winfield, and Fraser; Section 2(m) of Limitation Act, 1963.',
        sections: [
          {
            heading: 'I. Meaning of "Infringement of a Right in Rem"',
            paragraphs: [
              '<strong>Right in Rem:</strong> A right available against the whole world at large (e.g., right to reputation, right to bodily safety, right to peaceful possession of property).',
              '<strong>Right in Personam:</strong> An interest available only against a specific, predetermined person (e.g., rights under a private loan agreement).',
              'When Dr. Fraser states that <em>"a tort is an infringement of a right in rem of an individual"</em>, he emphasizes that tort duties are not created by private deals. They are universal duties imposed by the state on every member of society not to assault, defame, or trespass against anyone.'
            ]
          },
          {
            heading: 'II. Distinction: Tort vs. Crime vs. Breach of Contract',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Basis</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Law of Tort</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Breach of Contract</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Crime</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>1. Nature of Wrong</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Civil wrong against an individual.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Civil wrong between contracting parties.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Public wrong against the entire society/State.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>2. Type of Right</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Right in <strong>Rem</strong> (against the world).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Right in <strong>Personam</strong> (against contracting party).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Public Right in Rem.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>3. Primary Remedy</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Unliquidated damages</strong> (assessed by court).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Liquidated/unliquidated damages or specific performance.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Punishment</strong> (imprisonment, fine, death penalty).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>4. Who Initiates Action?</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">The injured victim (plaintiff) sues.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">The aggrieved contracting party sues.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">The <strong>State</strong> prosecutes the accused.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>5. Compromise / Settlement</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Parties can freely settle or compromise out of court.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Parties can freely settle or waive obligations.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Generally non-compoundable (State controls prosecution).</td></tr>' +
              '</tbody></table>'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Ashby v. White',
            citation: '(1703) 2 Ld. Raym. 938',
            facts: 'The plaintiff was wrongfully stopped from exercising his civic right to vote by a returning officer.',
            ratio: 'A tort is an infringement of a private right in rem. The infringement is actionable per se to vindicate individual rights.'
          },
          {
            name: 'Donoghue v. Stevenson',
            citation: '(1932) AC 562',
            facts: 'Ginger beer purchaser\'s friend fell sick from snail remains; no contract existed between victim and manufacturer.',
            ratio: 'Affirmed that the tort duty of care is a duty in rem owed to persons generally, completely independent of contract privity.'
          }
        ],
        criticalAnalysis: 'While theoretically distinct, a single act can be both a tort and a crime (e.g., assault or defamation), or both a tort and a breach of contract (e.g., medical negligence), entitling the victim to pursue concurrent remedies.',
        conclusion: 'A tort is a civil wrong violating a right in rem for unliquidated damages, standing distinctly apart from private contracts and public penal crimes.'
      }
    }
  ]
};
