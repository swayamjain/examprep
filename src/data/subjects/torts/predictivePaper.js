// Predictive Question Paper (2026 Examination)
// Subject: Law of Torts (Paper-3 • B.A. LL.B. Sem III - CBCS NEP)
// Pattern: Full University Examination Format (Compulsory Q1 [any 4 of 6] + 8 Long Questions [any 6 of 8] = 14 Total Questions)
// Word Count Standard: 5 Marks = 450-650 words | 10 Marks = 950-1200 words
// Curated by Swayam Jain

export const predictivePaper = {
  id: 'predictive-torts-2026',
  title: '🎯 High-Yield Predictive Paper (2026)',
  description: 'B.A. LL.B. (5 Yrs.) Semester-Third (CBCS) (NEP) Examination. Full 80 Marks University Pattern Paper with all 14 questions answered (Compulsory Q1 with 6 Short Notes + Q2 to Q9 Long Questions).',
  isPredictive: true,
  questions: [
    // =========================================================================
    // Q1 (a) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1a',
      qNum: 'Q1 (a)',
      marks: 5,
      question: 'Short Note: Application of the maxim "Injuria Sine Damno" vs. "Damnum Sine Injuria".',
      flairs: [
        { type: 'repeat', label: '🔥 Reappeared in 2024 & 2025' },
        { type: 'yield', label: '⚡ Unit I Foundational' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Meaning of Injuria and Damnum → Maxim 1: Injuria Sine Damno (Actionable Per Se) → Landmark Cases: Ashby v. White & Bhim Singh → Maxim 2: Damnum Sine Injuria (Not Actionable) → Landmark Cases: Gloucester Grammar School & Chasemore v. Richards → Comparative Synthesis Table → Examiner Takeaway.',
        statutoryFramework: 'Two Cardinal Maxims of Tortious Jurisprudence; Maxim: "Ubi jus ibi remedium" (Where there is a right, there is a remedy); Common law principles of civil liability.',
        sections: [
          {
            heading: 'I. Foundational Meaning of "Injuria" and "Damnum"',
            paragraphs: [
              'Under the law of torts, civil liability does not depend merely on whether someone suffered financial loss, hardship, or physical pain. Instead, liability is strictly determined by <strong>whether a legally recognized right has been violated</strong>.',
              'To understand this legal boundary, common law developed two fundamental contrasting Latin maxims:<br/>' +
              '• <strong>"Injuria":</strong> Infringement of an absolute private legal right recognized by law (e.g., right to vote, right to personal liberty, right to property).<br/>' +
              '• <strong>"Damnum":</strong> Substantial financial loss, physical harm, commercial damage, or material disadvantage.<br/>' +
              '• <strong>"Sine":</strong> Without.'
            ]
          },
          {
            heading: 'II. Maxim 1: Injuria Sine Damno (Actionable Per Se)',
            paragraphs: [
              '<strong>Meaning:</strong> Infringement of a legal right <em>without</em> actual financial loss or physical damage.<br/>' +
              '<strong>The Rule:</strong> It is <strong>actionable per se</strong> without proving loss. The moment a legal right is breached, the tort is complete, and courts award damages to vindicate that right.',
              '<strong>Rationale:</strong> The law protects fundamental liberties and constitutional freedoms as sacred assets. If proof of money loss were required, officials could unlawfully lock up citizens or stop lawful voters with total impunity.'
            ]
          },
          {
            heading: 'III. Maxim 2: Damnum Sine Injuria (Zero Remedy)',
            paragraphs: [
              '<strong>Meaning:</strong> Actual monetary loss or hardship <em>without</em> violation of any legal right.<br/>' +
              '<strong>The Rule:</strong> It is <strong>NOT actionable</strong>. Even if a party suffers heavy commercial losses due to the defendant\'s conduct, no action lies in tort if the defendant acted within their lawful rights.',
              '<strong>Rationale:</strong> Fair commercial competition and exercising lawful property rights inevitably cause financial loss to business rivals, but society promotes open trade.'
            ]
          },
          {
            heading: 'IV. Comparative Summary Table',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Dimension</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Injuria Sine Damno</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Damnum Sine Injuria</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Core Formula</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Legal Right Violated + Zero Loss.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Heavy Financial Loss + Zero Right Violated.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Actionability</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Actionable per se</strong> (Damages granted).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Not Actionable</strong> (Suit dismissed).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Classic Domain</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Trespass, false imprisonment, voting rights.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Commercial competition, rival schools/shops.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>Guiding Case</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><em>Ashby v. White</em> (1703)</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><em>Gloucester Grammar School</em> (1410)</td></tr>' +
              '</tbody></table>'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Ashby v. White (Injuria Sine Damno)',
            citation: '(1703) 2 Ld. Raym. 938',
            facts: 'The plaintiff was a qualified voter who was maliciously prevented from voting by the returning officer. The parliamentary candidate he supported won the election by a wide margin, so the plaintiff suffered no financial loss.',
            ratio: 'Chief Justice Holt famously declared that every injury imports damage. When an absolute legal right is violated, the law guarantees a remedy under the maxim "Ubi jus ibi remedium".'
          },
          {
            name: 'Bhim Singh v. State of Jammu & Kashmir (Injuria Sine Damno)',
            citation: 'AIR 1986 SC 494',
            facts: 'An MLA was illegally arrested and detained by police to prevent him from attending the State Assembly session. His constitutional voting right was violated.',
            ratio: 'The Supreme Court awarded ₹50,000 exemplary compensation. Infringement of a citizen\'s fundamental right of personal liberty and democratic participation is actionable per se.'
          },
          {
            name: 'Gloucester Grammar School Case (Damnum Sine Injuria)',
            citation: '(1410) YB 11 Hen IV, f. 47, pl. 21',
            facts: 'A rival schoolmaster opened a competing grammar school next door, forcing the plaintiff to slash his tuition fees from 40 pence to 12 pence per student, causing heavy financial losses.',
            ratio: 'The court dismissed the claim. Lawful commercial competition does not infringe any legal right; damages without legal injury are not actionable.'
          }
        ],
        criticalAnalysis: 'These twin maxims define the very boundary of tort law: courts exist to protect legal rights and individual freedoms, not to protect people from the inevitable financial risks of living in an open, competitive society.',
        conclusion: 'Violation of a legal right (Injuria) is the sole test of tortious liability: Injuria sine damno is actionable per se, whereas Damnum sine injuria leaves the victim without a remedy.'
      }
    },

    // =========================================================================
    // Q1 (b) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1b',
      qNum: 'Q1 (b)',
      marks: 5,
      question: 'Short Note: Malfeasance, Misfeasance, and Non-feasance.',
      flairs: [
        { type: 'repeat', label: '🔥 100% Frequency in 2024 & 2025' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning → Malfeasance (Illegal Act) → Misfeasance (Lawful Act Done Badly) → Non-feasance (Failure to Perform Legal Duty) → Public Body Accountability → Landmark Cases → Memory Peg.',
        statutoryFramework: 'Principles of Civil Liability; Public Authorities Protection and Municipal Tort Liability.',
        sections: [
          {
            heading: 'I. Meaning of the Three Classical Forms of Wrongs',
            paragraphs: [
              'Under the law of torts, wrongful conduct committed by individuals, contractors, or statutory public authorities is classified into three distinct categories based on whether the act was illegal from the beginning, performed carelessly, or completely neglected.',
              '<strong>1. Malfeasance (Doing an Illegal Act):</strong><br/>' +
              '• <em>Definition:</em> The commission of an act that is completely unlawful, wrongful, or prohibited from the very start.<br/>' +
              '• <em>Nature:</em> The person has zero legal justification or authority to do the act.<br/>' +
              '• <em>Real-Life Examples:</em> Committing trespass onto private property, assaulting an individual, extorting money, or demolishing a citizen\'s shop without any legal notice or statutory power.<br/>' +
              '• <em>Actionability:</em> Actionable <em>per se</em> upon proving the commission of the act.',

              '<strong>2. Misfeasance (Doing a Lawful Act Badly / Carelessly):</strong><br/>' +
              '• <em>Definition:</em> The improper, negligent, or careless performance of an act which the person had a lawful right to perform.<br/>' +
              '• <em>Nature:</em> The origin of the act is lawful, but the execution is defective.<br/>' +
              '• <em>Real-Life Examples:</em> A municipal team has the legal right to dig a road to repair underground water pipes, but leaves the deep trench unbarricaded and without warning lights at night, causing a motorcyclist to crash; a qualified surgeon performs a permitted surgery but carelessly leaves a cotton gauze inside the patient\'s abdomen.',

              '<strong>3. Non-feasance (Failing to Perform a Mandatory Legal Duty):</strong><br/>' +
              '• <em>Definition:</em> The total omission or failure to perform a positive, mandatory legal duty which a person or public authority was bound by law to perform.<br/>' +
              '• <em>Nature:</em> Inaction or total neglect of statutory duty.<br/>' +
              '• <em>Real-Life Examples:</em> A municipal corporation fails to maintain an old public clock tower or repair an open manhole on a sidewalk, leading to fatal accidents.'
            ]
          },
          {
            heading: 'II. Quick Memory Peg (Easy Revision Rule)',
            paragraphs: [
              '• <strong>Mal-feasance:</strong> Bad act (Doing what you MUST NOT do).<br/>' +
              '• <strong>Mis-feasance:</strong> Mistake in acting (Doing what you MAY do, but doing it BADLY).<br/>' +
              '• <strong>Non-feasance:</strong> No act (NOT doing what you MUST do).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Municipal Corporation of Delhi v. Subhagwanti',
            citation: 'AIR 1966 SC 1750',
            facts: 'The 80-year-old clock tower in the crowded market of Chandni Chowk collapsed due to internal structural deterioration, killing several pedestrians. The MCD argued it committed no active wrongful act.',
            ratio: 'The Supreme Court held the MCD liable for non-feasance. Having the statutory duty to manage and inspect public structures, its complete failure to carry out maintenance made it liable in negligence.'
          },
          {
            name: 'Calveley v. Chief Constable of Merseyside',
            citation: '(1989) AC 1228',
            facts: 'Suspended police officers claimed damages for emotional stress resulting from prolonged delays in conducting disciplinary proceedings against them.',
            ratio: 'The House of Lords clarified that misfeasance in public office requires proof of bad faith, malice, or deliberate abuse of power, not mere administrative delay or carelessness.'
          }
        ],
        criticalAnalysis: 'At early common law, public authorities enjoyed broad immunity for non-feasance. Modern Indian jurisprudence firmly rejects this immunity: whenever municipal inaction creates a deadly trap on public roads, the authority is strictly liable.',
        conclusion: 'Malfeasance is doing an illegal act, misfeasance is doing a lawful act carelessly, and non-feasance is the failure to perform a mandatory legal duty.'
      }
    },

    // =========================================================================
    // Q1 (c) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1c',
      qNum: 'Q1 (c)',
      marks: 5,
      question: 'Short Note: Tort and Breach of Contract — The Essential Differences.',
      flairs: [
        { type: 'repeat', label: '🔥 Classic Distinction' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Introduction & Core Juridical Difference → Five Fundamental Distinctions (Source, Nature of Right, Privity, Damages, Motive) → Detailed Comparative Table → The Doctrine of Concurrent Liability → Landmark Precedents → Conclusion.',
        statutoryFramework: 'Section 2(h) of the Indian Contract Act, 1872; Section 2(m) of the Limitation Act, 1963; Common law of civil obligations.',
        sections: [
          {
            heading: 'I. Meaning of the Two Branches of Civil Law',
            paragraphs: [
              'Both torts and contracts belong to the domain of civil law, and both give rise to civil actions for monetary compensation in court. However, they originate from completely distinct juridical roots and protect different societal interests:',
              '• In <strong>Contract</strong>, legal obligations are created by the <em>free mutual consent, promises, and voluntary agreement</em> of private parties who choose to bind themselves to specific reciprocal duties.<br/>' +
              '• In <strong>Tort</strong>, legal duties are <em>imposed directly by the general law of the land</em>, regardless of whether the parties agreed, consented, or even had any prior personal acquaintance.'
            ]
          },
          {
            heading: 'II. Point-by-Point Comparative Table',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Basis of Distinction</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Law of Tort</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Breach of Contract</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>1. Source of Legal Duty</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Fixed primarily by general law (e.g., duty not to assault, trespass, or defame).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Created by mutual agreement and reciprocal promises of the parties.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>2. Nature of Legal Right</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Protects a right in <strong>Rem</strong> (duty owed towards persons generally).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Protects a right in <strong>Personam</strong> (duty owed only to contracting party).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>3. Doctrine of Privity</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">No privity required. Any person injured by the breach of duty can sue.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Strict privity of contract. Third-party strangers cannot maintain a suit.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>4. Measurement of Damages</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Always <strong>Unliquidated</strong> (determined by court assessment based on facts).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Often <strong>Liquidated</strong> (fixed in advance as a stipulated sum by parties).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>5. Relevance of Motive / Malice</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Motive is relevant in specific torts (malicious prosecution, nuisance).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Motive is completely immaterial in actions for breach of contract.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>6. Minors\' Liability</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">A minor is liable for independent torts (<em>Burnard v. Haggis</em>).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">A minor\'s contract is void <em>ab initio</em> (<em>Mohori Bibee</em>).</td></tr>' +
              '</tbody></table>'
            ]
          },
          {
            heading: 'III. The Doctrine of Concurrent Liability',
            paragraphs: [
              'While tort and contract are theoretically distinct, a single real-world event can simultaneously give rise to concurrent liability in both branches of law. For instance, when a patient consults a private doctor, there is an implied contract of medical services; if the doctor is grossly careless and amputates the wrong limb, the patient can sue either for breach of contract or in tort for negligence.',
              'Similarly, in professional services, carrier transportation, and hotel management, the plaintiff is free to elect the remedy that gives them the most comprehensive compensation.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Donoghue v. Stevenson',
            citation: '(1932) AC 562',
            facts: 'A woman drank ginger beer from an opaque bottle bought by her friend. The bottle contained the decomposed remains of a snail. The woman had no contract with the manufacturer or shopkeeper.',
            ratio: 'The House of Lords established that the manufacturer owed an independent duty of care in tort to the ultimate consumer, completely demolishing the defense of absence of contractual privity.'
          },
          {
            name: 'Klaus Mittelbachert v. East India Hotels Ltd.',
            citation: 'AIR 1997 Del 201',
            facts: 'A German co-pilot suffered permanent quadriplegia when he dived into a defective swimming pool at Hotel Oberoi Intercontinental in New Delhi.',
            ratio: 'The Delhi High Court held that the plaintiff could sue concurrently both for breach of implied warranty in contract and in tort for gross negligence, awarding massive compensation.'
          }
        ],
        criticalAnalysis: 'The central line of separation is consent: contract is an instrument of private commercial planning where parties author their own duties; tort is an instrument of public policy enforcing standards of safe conduct for the community.',
        conclusion: 'Contract protects private expectations born of consent; tort protects universal rights in rem imposed by law and redressible by unliquidated damages.'
      }
    },

    // =========================================================================
    // Q1 (d) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1d',
      qNum: 'Q1 (d)',
      marks: 5,
      question: 'Short Note: Doctrine of Remoteness of Damages and the Test of Reasonable Foreseeability.',
      flairs: [
        { type: 'repeat', label: '🔥 Core Latin Maxim' },
        { type: 'yield', label: '⚡ Unit I Remoteness' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Concept of Remoteness → Maxim In Jure Non Remota → Old Test of Directness (Re Polemis) → Modern Test of Reasonable Foreseeability (Wagon Mound No. 1) → Eggshell Skull Rule Exception → Conclusion.',
        statutoryFramework: 'Maxim: "In jure non remota causa sed proxima spectatur" (In law, not the remote cause, but the proximate cause is regarded); Law of Negligence.',
        sections: [
          {
            heading: 'I. Meaning of Remoteness of Damage',
            paragraphs: [
              'When a defendant commits a wrongful act, it can trigger an infinite, cascading chain of consequences. For example, a driver negligently hits a lamppost; the power line sparks; an alarm goes off; a horse runs into a factory; the factory catches fire. Can the driver be made to pay for the entire factory?',
              '<strong>The General Rule:</strong> A defendant cannot be held liable for all endless consequences of their negligence. Under the maxim <em>"In jure non remota causa sed proxima spectatur"</em>, the law looks only to the <strong>proximate cause</strong>, and refuses to compensate for damage that is <strong>too remote</strong>.'
            ]
          },
          {
            heading: 'II. The Two Historical Tests of Remoteness',
            paragraphs: [
              '<strong>1. The Test of Directness (Older Rule):</strong><br/>' +
              '• Laid down in <em>Re Polemis (1921)</em>.<br/>' +
              '• <em>Rule:</em> If a reasonable person could foresee <em>any damage</em>, the defendant is liable for <em>all direct physical consequences</em> that follow, no matter how unusual, unexpected, or disproportionate.',

              '<strong>2. The Test of Reasonable Foreseeability (Modern Rule):</strong><br/>' +
              '• Laid down by the Privy Council in <em>The Wagon Mound No. 1 (1961)</em>, expressly <strong>overruling Re Polemis</strong>.<br/>' +
              '• <em>Rule:</em> A person is liable only for consequences of a kind or type that a reasonable, prudent person could reasonably foresee at the time of the negligent act. If the type of damage was unforeseeable, it is too remote.'
            ]
          },
          {
            heading: 'III. The "Eggshell Skull Rule" Exception',
            paragraphs: [
              'An essential qualification to the Wagon Mound rule is the <strong>"Eggshell Skull Rule"</strong> (<em>Smith v. Leech Brain & Co.</em>): If the <em>type of injury</em> was reasonably foreseeable (e.g., a physical burn), the defendant takes the victim as they find them. The defendant cannot claim that the damage was remote merely because the victim had a pre-existing medical weakness (like cancer or a thin skull) that aggravated the harm.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Re Polemis and Furness, Withy & Co. Ltd.',
            citation: '(1921) 3 KB 560',
            facts: 'Stevedores carelessly dropped a heavy wooden plank into a ship\'s hold containing petrol vapour. The plank sparked, igniting the vapour and completely destroying the ship.',
            ratio: 'The court held the defendants liable for the entire ship under the Test of Directness, even though burning down the ship was not reasonably foreseeable.'
          },
          {
            name: 'The Wagon Mound No. 1 (Overseas Tankship v. Morts Dock)',
            citation: '(1961) AC 388',
            facts: 'Oil spilled into Sydney Harbour floated to a wharf where workers were welding. Two days later, molten metal sparks ignited floating cotton waste, which set fire to the oil and burned the wharf.',
            ratio: 'The Privy Council overruled Re Polemis. It held that liability is strictly limited to consequences that were reasonably foreseeable by a prudent person.'
          }
        ],
        criticalAnalysis: 'The Wagon Mound test prevents defendants from suffering ruinous liability for freak accidents, bringing balance and predictability to civil liability.',
        conclusion: 'Under modern tort law, the test of remoteness is reasonable foreseeability: defendants are answerable only for the probable and foreseeable consequences of their acts.'
      }
    },

    // =========================================================================
    // Q1 (e) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1e',
      qNum: 'Q1 (e)',
      marks: 5,
      question: 'Short Note: Actio personalis moritur cum persona and its modern exceptions.',
      flairs: [
        { type: 'repeat', label: '🔥 Recurring Maxim' },
        { type: 'yield', label: '⚡ Unit V High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Meaning of Maxim → Historical Common Law Application → Harsh Injustices → Modern Statutory Exceptions in India → Distinction between Personal and Property Torts → Landmark Case Laws → Conclusion.',
        statutoryFramework: 'Common law maxim; Section 306 of Indian Succession Act, 1925; Fatal Accidents Act, 1855; Motor Vehicles Act, 1988.',
        sections: [
          {
            heading: 'I. Meaning and Origin of the Maxim',
            paragraphs: [
              'The Latin maxim <strong>"Actio personalis moritur cum persona"</strong> literally translates to:<br/>' +
              '<em>"A personal right of action dies with the person."</em>',
              '<strong>Application at Early Common Law:</strong><br/>' +
              'Under classical common law, if either the plaintiff (injured victim) or the defendant (wrongdoer) died before a court delivered a final judgment, the cause of action extinguished completely. The heirs of the victim could not sue, and the estate of the wrongdoer could not be sued. This ancient rule was applied strictly to all personal injuries, assault, battery, false imprisonment, and defamation.',
              'This feudal doctrine created terrible hardship. For instance, if a wealthy reckless driver ran down a pedestrian and killed them instantly, the victim\'s impoverished widow and orphans were left with zero compensation under common law because the victim\'s personal cause of action had died with him.'
            ]
          },
          {
            heading: 'II. Modern Legislative Exceptions & Dilution in India',
            paragraphs: [
              'To eliminate this shocking injustice, modern Indian statutes have dismantled the maxim through specific legislative enactments:<br/>' +
              '<strong>1. Indian Succession Act, 1925 (Section 306):</strong> All causes of action survive in favour of or against executors and administrators, <em>EXCEPT</em> purely personal causes of action like defamation, assault, or personal emotional injury.<br/>' +
              '<strong>2. Motor Vehicles Act, 1988 (Section 166):</strong> The legal representatives of a person killed in a motor vehicular accident have an absolute statutory right to claim full compensation for loss of dependency.<br/>' +
              '<strong>3. Fatal Accidents Act, 1855:</strong> Gives dependants (spouse, parents, children) a direct right of action against wrongdoers who caused the death of the breadwinner.<br/>' +
              '<strong>4. Torts against Property:</strong> Actions for damage to property, waste, trespass to goods, or conversion have always survived the death of the parties.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Prabhakara Shetty v. Gowri',
            citation: 'AIR 1981 Kant 18',
            facts: 'An injured road accident victim filed a claim for compensation. During the pendency of the proceedings, the victim died.',
            ratio: 'The court held that while the personal claim for physical pain and suffering died with the person, claims for financial expenditure, hospital bills, and loss to the estate survived for the legal heirs.'
          },
          {
            name: 'Nurani Jamal v. Natha Ram',
            citation: 'AIR 1980 MP 102',
            facts: 'The defendant in a defamation suit died while the trial was ongoing.',
            ratio: 'The suit abated completely. A personal action for defamation does not survive against the legal heirs of the deceased defendant.'
          }
        ],
        criticalAnalysis: 'Modern Indian courts treat the maxim as an outdated feudal relic. Today, it is confined strictly to purely personal reputation and emotional harm; all economic and property claims survive.',
        conclusion: 'While the maxim still applies to personal torts like defamation, statutory reforms preserve all property, economic, and motor accident claims for legal heirs.'
      }
    },

    // =========================================================================
    // Q1 (f) - 5 MARKS
    // =========================================================================
    {
      id: 'pred-t-q1f',
      qNum: 'Q1 (f)',
      marks: 5,
      question: 'Short Note: Extra-Judicial Remedies in Law of Tort (Lawful Self-Help).',
      flairs: [
        { type: 'repeat', label: '🔥 Lawful Self-Help' },
        { type: 'yield', label: '⚡ Unit V High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Concept of Extra-Judicial Remedies → Five Classic Forms → Limits on Self-Help → Landmark Precedents → Conclusion.',
        statutoryFramework: 'Common law doctrine of lawful self-help; Right of private defence under civil jurisprudence.',
        sections: [
          {
            heading: 'I. Meaning of Extra-Judicial Remedies',
            paragraphs: [
              '<strong>Extra-judicial remedies</strong> are lawful measures of self-help that an aggrieved individual is permitted by law to take directly into their own hands, without approaching a court of law or waiting for a formal judicial decree.',
              'While the judicial system remains the primary mechanism for redressing civil wrongs, the law recognizes that certain emergencies demand immediate protective intervention to prevent irreparable loss to life, bodily safety, or property.',
              '<strong>The Golden Rule of Self-Help:</strong> The person exercising self-help must use <strong>no more force than is strictly reasonable, necessary, and proportionate</strong> to the danger. If excessive, disproportionate, or unlawful force is used, the person immediately loses the protection of the law and becomes liable as a tortfeasor themselves.'
            ]
          },
          {
            heading: 'II. Five Classic Forms of Extra-Judicial Remedies',
            paragraphs: [
              '<strong>1. Expulsion of Trespasser (Re-entry on Land):</strong><br/>' +
              'A person in lawful possession of land may request a trespasser to leave, and if they refuse, may gently lay hands on them (<em>molliter manus imposuit</em>) using reasonable, non-deadly force to eject them.<br/>' +
              '<strong>2. Recaption of Goods:</strong><br/>' +
              'If movable goods are wrongfully or forcefully taken from the owner, the true owner may peaceably retake them from the wrongdoer without breaching the public peace.<br/>' +
              '<strong>3. Abatement of Nuisance:</strong><br/>' +
              'An occupier of land may lawfully remove or terminate a nuisance affecting their land without going to court (e.g., cutting off overhanging branches or root networks from a neighbour\'s tree, *Lemmon v. Webb*). Notice is required if entry onto the neighbour\'s land becomes necessary, except in emergencies.<br/>' +
              '<strong>4. Distress Damage Feasant:</strong><br/>' +
              'An occupier of land has the common law right to seize and detain straying cattle or inanimate objects causing actual physical damage on their land until the owner compensates them for the damage.<br/>' +
              '<strong>5. Self-Defence:</strong><br/>' +
              'Using reasonable, proportionate force to protect one\'s person, family members, or property against imminent unlawful violence.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Lemmon v. Webb',
            citation: '(1895) AC 1',
            facts: 'The branches of an oak tree grown on the defendant’s land hung over the boundary onto the plaintiff’s land. The plaintiff cut off the overhanging branches from his own land without entering the defendant’s property and without prior notice.',
            ratio: 'The House of Lords held that the plaintiff was fully entitled to abate the nuisance by trimming the branches encroaching onto his land from his own property without prior notice.'
          },
          {
            name: 'Bird v. Holbrook',
            citation: '(1828) 4 Bing 628',
            facts: 'A garden owner set hidden spring guns to protect his tulip garden without posting warning signs. An innocent trespasser entered to catch a stray bird and was severely shot.',
            ratio: 'Held that extra-judicial remedies cannot involve excessive, deadly, and unannounced mechanical force. The landowner was held liable in damages for inflicting unlawful bodily injury.'
          },
          {
            name: 'R. v. Hussey',
            citation: '(1924) 18 Cr App R 160',
            facts: 'The defendant fired through a door to repel armed men who were unlawfully attempting to break into his home and evict him without lawful authority.',
            ratio: 'The court affirmed that a person is entitled to use reasonable force in defence of their dwelling house, as an Englishman\'s home is his castle under common law jurisprudence.'
          }
        ],
        criticalAnalysis: 'Extra-judicial remedies provide instant relief without procedural delays, but carry high legal risks: the boundary between lawful self-help and criminal vigilante violence is razor-thin, and any excess force converts the victim into a tortfeasor.',
        conclusion: 'Extra-judicial remedies allow immediate self-help through abatement, self-defence, and distress, provided the action remains strictly reasonable and proportionate.'
      }
    },

    // =========================================================================
    // Q2 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q2',
      qNum: 'Q2',
      marks: 10,
      question: 'What is meant by Trespass to Person? Critically analyze its three forms (Assault, Battery, and False Imprisonment) with landmark cases and available defences.',
      flairs: [
        { type: 'repeat', label: '🔥 Comprehensive 10-Marker' },
        { type: 'yield', label: '⚡ Unit II High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Introduction & Core Nature → Three Essential Hallmarks → Detailed Analysis of Assault (Elements & Cases) → Detailed Analysis of Battery (Elements & Cases) → Detailed Analysis of False Imprisonment (Total Restraint & Cases) → Recognized Defences → Critical Appraisal & Conclusion.',
        statutoryFramework: 'Common law of intentional torts; Article 21 of the Constitution of India; Indian Penal Code Sections 350, 351, 339, and 340.',
        sections: [
          {
            heading: 'I. Meaning and Core Essence of Trespass to Person',
            paragraphs: [
              '<strong>Trespass to person</strong> is an intentional, direct interference with an individual’s bodily integrity, physical liberty, or personal freedom without any lawful justification.',
              'In modern civil jurisprudence, trespass to person represents the ultimate legal safeguard protecting human dignity and bodily autonomy. It is governed by three fundamental principles:<br/>' +
              '<strong>1. Direct Physical Interference:</strong> The act must be direct and immediate (e.g., striking someone with a stick or throwing water is trespass; digging a pit into which someone later falls is indirect negligence).<br/>' +
              '<strong>2. Actionable Per Se:</strong> Trespass is actionable without proving any actual physical injury, pain, or financial loss. The slightest unpermitted physical touch or threat violates personal autonomy.<br/>' +
              '<strong>3. Intentional Character:</strong> It requires intention or active recklessness; purely accidental contact without fault is not trespass.'
            ]
          },
          {
            heading: 'II. Form 1: Assault (Creating Reasonable Apprehension)',
            paragraphs: [
              '<strong>Definition:</strong> Assault is an intentional act of the defendant which causes a reasonable apprehension of an imminent battery in the mind of the plaintiff.<br/>' +
              '<strong>Essential Ingredients:</strong><br/>' +
              '• <em>1. Apparent Immediate Ability:</em> The defendant must have the apparent immediate capability to carry out the physical threat. Threatening someone over a telephone or shouting from a speeding train is generally not assault because there is no immediate capability.<br/>' +
              '• <em>2. Reasonable Apprehension:</em> The test is objective: would a reasonable person placed in the plaintiff\'s position anticipate immediate physical violence?<br/>' +
              '• <em>3. Words Alone vs. Gestures:</em> Mere words alone generally do not constitute assault unless accompanied by threatening gestures (e.g., advancing with a clenched fist, brandishing an axe, or pointing a firearm). However, words can negate an assault (e.g., <em>Tuberville v. Savage</em>: "If it were not assize-time, I would not take such language from you" was held NOT an assault because the words confirmed no violence would occur).'
            ]
          },
          {
            heading: 'III. Form 2: Battery (Application of Unlawful Force)',
            paragraphs: [
              '<strong>Definition:</strong> Battery is the intentional and direct application of unlawful physical force to the person of another without consent or legal justification.<br/>' +
              '<strong>Essential Ingredients:</strong><br/>' +
              '• <em>1. Application of Force:</em> The force need not be violent or cause physical pain. Even the slightest unpermitted physical contact qualifies. In <em>Cole v. Turner (1704)</em>, Lord Holt famously declared: <em>"The least touching of another in anger is a battery."</em> Examples include spitting on someone’s face, pulling a chair from under a person, cutting someone’s hair without consent, or throwing water.<br/>' +
              '• <em>2. Without Lawful Justification or Consent:</em> Ordinary, trivial physical contacts of crowded daily life (e.g., touching someone while passing through a crowded bus or market) are impliedly consented to and do not constitute battery.<br/>' +
              '• <em>Distinction between Assault and Battery:</em> Assault is the threat of force (the preparatory stage); Battery is the actual application of force (the completion of the act). An assault can exist without a battery (threat stopped in time), and a battery can exist without an assault (striking someone from behind without warning).'
            ]
          },
          {
            heading: 'IV. Form 3: False Imprisonment (Total Restraint of Liberty)',
            paragraphs: [
              '<strong>Definition:</strong> False imprisonment is the total restraint of a person’s bodily liberty for any period of time, without legal authority or lawful justification.<br/>' +
              '<strong>Essential Ingredients:</strong><br/>' +
              '• <em>1. Total Restraint (The Decisive Element):</em> The confinement must be <strong>complete and total</strong> in all directions. If the plaintiff has a known, reasonable means of escape, it is NOT false imprisonment (<em>Bird v. Jones</em>).<br/>' +
              '• <em>2. Physical Walls Not Required:</em> Confinement does not require prison walls, bars, or locked doors. Detaining someone in an open street through intimidation, keeping someone in a moving car, or commanding an employee not to leave an office constitutes false imprisonment.<br/>' +
              '• <em>3. Knowledge of Restraint:</em> In <em>Meering v. Grahame-White Aviation Co.</em>, it was established that a person can be falsely imprisoned even while asleep, unconscious, or unaware of the restraint, provided the restraint existed in fact.<br/>' +
              '• <em>4. Without Lawful Justification:</em> Unlawful police detention, arrests without jurisdiction, or continuing detention after court bail violate Article 21 and constitute gross false imprisonment.'
            ]
          },
          {
            heading: 'V. Recognized Defences to Trespass to Person',
            paragraphs: [
              'A defendant can escape liability by establishing:<br/>' +
              '• <strong>1. Consent (Volenti Non Fit Injuria):</strong> Voluntary participation in sports (like boxing, football) or consenting to medical surgery.<br/>' +
              '• <strong>2. Private Defence:</strong> Using reasonable, proportionate force to defend oneself, one\'s family, or property against unlawful force.<br/>' +
              '• <strong>3. Lawful Arrest / Statutory Power:</strong> Police officer executing a valid arrest warrant under CrPC.<br/>' +
              '• <strong>4. Parental / Quasi-Parental Authority:</strong> Moderate, reasonable correction exercised by parents or schoolmasters.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Stephens v. Myers (Assault)',
            citation: '(1830) 4 C & P 349',
            facts: 'During a heated parish meeting, the defendant advanced towards the chairman with a clenched fist, loudly declaring he would pull him from the chair. He was stopped by churchwardens just before reaching the chairman.',
            ratio: 'Held liable for assault. The advancing gesture with a clenched fist created a reasonable apprehension of immediate physical violence.'
          },
          {
            name: 'Bird v. Jones (False Imprisonment)',
            citation: '(1845) 7 QB 742',
            facts: 'The plaintiff wished to cross a public bridge that had been fenced off by the defendant to watch a boat race. The defendant blocked the path forward, but the plaintiff was entirely free to remain where he was or go back.',
            ratio: 'Held NOT false imprisonment. False imprisonment requires total restraint of movement in all directions; a partial obstruction is not false imprisonment.'
          },
          {
            name: 'Bhim Singh v. State of Jammu & Kashmir (False Imprisonment & Art. 21)',
            citation: 'AIR 1986 SC 494',
            facts: 'An elected MLA was unlawfully arrested by police officers while travelling to the Legislative Assembly to prevent him from attending and voting.',
            ratio: 'The Supreme Court ruled this to be gross false imprisonment and a flagrant violation of Article 21, awarding ₹50,000 as exemplary damages.'
          }
        ],
        criticalAnalysis: 'Trespass to person stands at the intersection of private tort law and constitutional human rights. In modern India, the judiciary treats false imprisonment and police custodial battery as constitutional torts, awarding exemplary damages under Article 32.',
        conclusion: 'Trespass to person defends bodily sanctity through three interrelated wrongs: assault threatens, battery touches, and false imprisonment confines.'
      }
    },

    // =========================================================================
    // Q3 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q3',
      qNum: 'Q3',
      marks: 10,
      question: "Trace the historical development of the principle of 'Strict Liability' under Rylands v. Fletcher. How has the Indian Judiciary evolved it into the indigenous doctrine of 'Absolute Liability' in M.C. Mehta v. Union of India?",
      flairs: [
        { type: 'repeat', label: '🔥 Highest Frequency 10-Marker' },
        { type: 'yield', label: '⚡ Unit III Landmark' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Introduction & Industrial Context → The English Rule in Rylands v. Fletcher → Three Essential Ingredients → The Five Traditional Exceptions → The Bhopal Gas Catastrophe & Limitations of Strict Liability → The Indian Innovation: Absolute Liability in M.C. Mehta → Key Contrasts Between Strict and Absolute Liability → Codification in Indian Law → Conclusion.',
        statutoryFramework: 'Rylands v. Fletcher (1868); Article 21 of the Constitution of India; Public Liability Insurance Act, 1991; National Green Tribunal Act, 2010.',
        sections: [
          {
            heading: 'I. Historical Context: From Fault-Based Liability to Strict Liability',
            paragraphs: [
              'Under 19th-century English common law, tort liability was strictly fault-based: an injured plaintiff had to prove either intentional wrongdoing or negligence on the part of the defendant. However, the rise of the Industrial Revolution introduced massive machines, steam boilers, chemical works, and mining operations.',
              'In 1868, the House of Lords recognized that certain industrial activities are so inherently dangerous that the person who brings them onto land must be held liable if they escape, even without any personal negligence. This gave birth to <strong>Strict Liability</strong> in <strong>Rylands v. Fletcher</strong>.'
            ]
          },
          {
            heading: 'II. The Rule in Rylands v. Fletcher and Its Three Ingredients',
            paragraphs: [
              '<strong>The Blackburn Formula:</strong> <em>"The person who for his own purposes brings on his lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and, if he does not do so, is prima facie answerable for all the damage which is the natural consequence of its escape."</em>',
              '<strong>Three Essential Ingredients:</strong><br/>' +
              '<strong>1. Bringing and Keeping a Dangerous Thing:</strong> The defendant must collect a substance likely to cause damage if it escapes (e.g., massive water reservoirs, gas, electricity, explosives, chemicals, toxic sewage).<br/>' +
              '<strong>2. Non-Natural Use of Land:</strong> The land must be used for a special, extraordinary purpose bringing increased danger to others, and not for ordinary domestic use (e.g., storing industrial quantities of water vs. domestic household water pipes).<br/>' +
              '<strong>3. Escape:</strong> The dangerous substance must escape from the defendant\'s premises to a place outside their occupation and control (<em>Read v. J. Lyons & Co.</em>: an explosion inside a munitions factory injuring an inspector was NOT strict liability because there was no escape outside the premises).'
            ]
          },
          {
            heading: 'III. The Five Traditional Exceptions (Loopholes) in Strict Liability',
            paragraphs: [
              'Strict liability was not absolute because the defendant could completely escape liability by proving any of the following five defences:<br/>' +
              '• <strong>1. Act of God (Vis Major):</strong> Unprecedented, extraordinary operation of nature that could not be anticipated (<em>Nichols v. Marsland</em>).<br/>' +
              '• <strong>2. Act of a Stranger / Third Party:</strong> Harm caused by the independent, malicious act of an unknown third party over whom the defendant had no control (<em>Box v. Jubb</em>).<br/>' +
              '• <strong>3. Consent of the Plaintiff (Volenti Non Fit Injuria):</strong> Common benefit.<br/>' +
              '• <strong>4. Default / Fault of the Plaintiff:</strong> Damage caused by the plaintiff’s own intrusion or fault.<br/>' +
              '• <strong>5. Statutory Authority:</strong> Act authorized by legislation.'
            ]
          },
          {
            heading: 'IV. The Indian Transformation: Genesis of Absolute Liability in M.C. Mehta',
            paragraphs: [
              'In December 1984, the world’s worst industrial disaster occurred in Bhopal when 40 tons of deadly methyl isocyanate (MIC) leaked from the Union Carbide pesticide plant, killing over 3,000 citizens and blinding thousands. The multinational corporation attempted to plead the <em>Rylands v. Fletcher</em> exception of sabotage by an unknown worker (Act of a stranger).',
              'Shortly thereafter, in December 1985, deadly oleum gas leaked from Shriram Foods and Fertiliser Industries in Delhi. Chief Justice <strong>P.N. Bhagwati</strong> realized that an 1868 English common law rule with multiple escape exceptions was totally incapable of protecting citizens in a densely populated developing nation.',
              'In <strong>M.C. Mehta v. Union of India (Oleum Gas Leak Case, 1987)</strong>, the Supreme Court boldly discarded the English rule and formulated the indigenous doctrine of <strong>Absolute Liability</strong>:',
              '<strong>Core Features of Absolute Liability:</strong><br/>' +
              '<strong>1. Hazardous or Inherently Dangerous Activity:</strong> Applies to any enterprise engaged in hazardous activities posing potential threat to human health and safety.<br/>' +
              '<strong>2. Absolute and Non-Delegable Duty:</strong> The enterprise owes an absolute duty to the community to ensure no harm results to anyone.<br/>' +
              '<strong>3. ZERO EXCEPTIONS:</strong> None of the five defences of <em>Rylands v. Fletcher</em> are available! Neither Act of God, sabotage by a stranger, nor statutory authority can excuse the enterprise.<br/>' +
              '<strong>4. Deep Pocket Theory of Compensation:</strong> The measure of damages is directly correlated to the financial magnitude and wealth of the enterprise to ensure effective economic deterrence.'
            ]
          },
          {
            heading: 'V. Comparative Distinction Table',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Parameter</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Strict Liability (Rylands)</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Absolute Liability (M.C. Mehta)</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>1. Scope of Activity</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Applies to any non-natural use of land.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Confined to hazardous or inherently dangerous industries.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>2. Availability of Defences</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Subject to 5 major defences (Act of God, Stranger, etc.).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>ZERO DEFENCES.</strong> Liability is total and unconditional.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>3. Requirement of Escape</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Escape outside premises is mandatory.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Applies to harm both inside and outside the premises.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>4. Measure of Damages</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Ordinary compensatory damages.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Exemplary damages scaled to the capacity of the enterprise.</td></tr>' +
              '</tbody></table>'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Rylands v. Fletcher',
            citation: '(1868) LR 3 HL 330',
            facts: 'A mill-owner employed competent independent engineers to build a water reservoir. The contractors negligently failed to seal disused mine shafts beneath, which flooded the plaintiff\'s neighbouring coal mines.',
            ratio: 'The House of Lords established Strict Liability: anyone who brings onto land a dangerous substance likely to cause mischief if it escapes is prima facie answerable for all resulting damage.'
          },
          {
            name: 'M.C. Mehta v. Union of India (Shriram Oleum Gas Leak)',
            citation: 'AIR 1987 SC 1086',
            facts: 'Oleum gas leaked from a chemical and fertilizer plant in Delhi, killing an advocate and injuring dozens of citizens shortly after the Bhopal disaster.',
            ratio: 'Chief Justice Bhagwati held that Indian courts have the constitutional power to formulate new principles suited to modern economic conditions. Enterprises engaged in hazardous activities are subject to Absolute Liability without any exceptions.'
          },
          {
            name: 'Union Carbide Corporation v. Union of India (Bhopal Settlement)',
            citation: '(1989) 1 SCC 674',
            facts: '40 tons of deadly methyl isocyanate leaked from Union Carbide’s plant in Bhopal, causing catastrophic loss of life and permanent disabilities.',
            ratio: 'The Supreme Court confirmed the doctrine of absolute liability, ordering an overall settlement of $470 million for victims.'
          }
        ],
        criticalAnalysis: 'Absolute Liability was codified by the Indian Parliament in the Public Liability Insurance Act, 1991 (mandating immediate relief insurance) and the National Green Tribunal Act, 2010. It represents India\'s greatest contribution to global environmental and tort jurisprudence.',
        conclusion: 'While strict liability under Rylands v. Fletcher permitted five escape defences, Indian absolute liability under M.C. Mehta provides zero defences, imposing total accountability on hazardous enterprises.'
      }
    },

    // =========================================================================
    // Q4 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q4',
      qNum: 'Q4',
      marks: 10,
      question: 'Critically examine the doctrine of Sovereign Immunity in India. Can the State be held vicariously liable for torts committed by its servants? Discuss the shift from Kasturi Lal to the era of Constitutional Torts under Article 32.',
      flairs: [
        { type: 'repeat', label: '🔥 Constitutional Tort 10-Marker' },
        { type: 'yield', label: '⚡ Unit IV High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Feudal Origin of Maxim "King Can Do No Wrong" → Constitutional Framework under Article 300 → The Historical Sovereign vs. Non-Sovereign Functional Test (P. & O. Case) → The Progressive High Point in Vidhyawati → The Regressive Judgment in Kasturi Lal → The Modern Revolution: Constitutional Torts & Article 21 Damages → Conclusion.',
        statutoryFramework: 'Feudal Maxim: "Rex non potest peccare"; Article 300 of the Constitution of India; Articles 21 & 32 (Constitutional Torts); Section 65 of Government of India Act, 1858.',
        sections: [
          {
            heading: 'I. Meaning and Feudal Origin of Sovereign Immunity',
            paragraphs: [
              'The doctrine of <strong>Sovereign Immunity</strong> originated from the ancient English feudal maxim <strong>"Rex non potest peccare"</strong> (<em>"The King can do no wrong"</em>). Under English common law, this meant two things:<br/>' +
              '1. The King was the fountain of justice and could never intend or commit a wrongful act.<br/>' +
              '2. The King could not be sued in his own courts because all courts derived their authority from the Crown.',
              'In India, after the Crown took over governance from the East India Company, <strong>Section 65 of the Government of India Act, 1858</strong> preserved state liability to the same extent as the East India Company was liable. This exact historical formula was carried forward into <strong>Article 300(1)</strong> of the Constitution of India.'
            ]
          },
          {
            heading: 'II. The Sovereign vs. Non-Sovereign Functional Test (P. & O. Case, 1861)',
            paragraphs: [
              'In the landmark case of <strong>P. & O. Steam Navigation Co. v. Secretary of State (1861)</strong>, Chief Justice Peacock established the foundational distinction between:<br/>' +
              '• <strong>Sovereign Functions:</strong> Acts that can only be done by a sovereign power and cannot be exercised by a private individual (e.g., maintaining armed forces, waging war, making treaties, acquiring territory). For these acts, the State enjoyed immunity.<br/>' +
              '• <strong>Non-Sovereign Functions:</strong> Acts that could be carried on by private individuals or commercial companies without sovereign power (e.g., running transport buses, running hospitals, building roads, commercial trading). For these acts, the State is vicariously liable like any ordinary private master.'
            ]
          },
          {
            heading: 'III. The Judicial Tug-of-War: Vidhyawati vs. Kasturi Lal',
            paragraphs: [
              'Following independence, the Supreme Court delivered two sharply conflicting judgments on state liability:<br/>' +
              '<strong>1. The Progressive Step in Vidhyawati (1962):</strong><br/>' +
              'A government jeep driven carelessly by an employee from a repair workshop back to the Collector\'s residence knocked down and killed a pedestrian. Chief Justice B.P. Sinha held that in a democratic republic governed by the Constitution, there is no justification for claiming feudal royal immunity. The State was held vicariously liable.<br/>' +
              '<strong>2. The Regressive Step in Kasturi Lal (1965):</strong><br/>' +
              'Police seized gold from a merchant on suspicion of theft. A head constable stole the gold and fled to Pakistan. Chief Justice Gajendragadkar reluctantly dismissed the merchant\'s claim, holding that maintaining police custody was an exercise of sovereign power. The judgment was heavily condemned as an unjust miscarriage of justice, and the Court urged Parliament to enact a comprehensive State Liability Act.'
            ]
          },
          {
            heading: 'IV. The Modern Constitutional Revolution: Creation of "Constitutional Torts"',
            paragraphs: [
              'Frustrated by the injustice of <em>Kasturi Lal</em>, the Supreme Court created the indigenous doctrine of <strong>Constitutional Torts</strong> under Articles 32 and 226:<br/>' +
              '• <strong>Rejection of Sovereign Immunity under Article 21:</strong> In <em>Rudul Sah</em>, <em>Nilabati Behera</em>, and <em>D.K. Basu</em>, the Supreme Court ruled that sovereign immunity is a purely common law defence. It has <strong>ZERO application</strong> in public law proceedings for violations of Fundamental Rights under Article 21.<br/>' +
              '• <strong>Monetary Compensation as a Public Law Remedy:</strong> Whenever the State violates life, personal liberty, bodily integrity (custodial torture, fake encounters, illegal detention, custodial rape), the Supreme Court and High Courts award exemplary monetary compensation against the State.',
              '• <strong>Statutory Liability in Commercial Enterprise:</strong> In modern times, the State operates massive railways, nationalized airlines, municipal buses, and state-run mining corporations. Under modern jurisprudence, whenever the State steps into commercial or welfare domains, its employees carry full vicarious liability.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'State of Rajasthan v. Vidhyawati',
            citation: 'AIR 1962 SC 933',
            facts: 'A driver employed by the Rajasthan government negligently knocked down a pedestrian while driving a government jeep from a repair workshop back to the Collector’s bungalow, causing his death.',
            ratio: 'Chief Justice B.P. Sinha held that in a republican welfare state, there is no justification for claiming feudal monarchical immunity. The State is vicariously liable like any ordinary employer.'
          },
          {
            name: 'Kasturi Lal Ralia Ram Jain v. State of Uttar Pradesh',
            citation: 'AIR 1965 SC 1039',
            facts: 'Police seized gold and silver from a merchant on suspicion of theft. A police constable stole the gold and fled to Pakistan. The merchant sued the State for the value of the gold.',
            ratio: 'The Supreme Court held the State not liable because arrest and seizure were sovereign functions. (This decision is now severely restricted and disapproved in subsequent rulings).'
          },
          {
            name: 'Rudul Sah v. State of Bihar',
            citation: '(1983) 4 SCC 141',
            facts: 'The petitioner was acquitted by a Sessions Court but was unlawfully kept incarcerated in jail for 14 additional years due to bureaucratic apathy.',
            ratio: 'Chief Justice Chandrachud awarded ₹35,000 compensation under Article 32, establishing that sovereign immunity cannot defeat the constitutional remedy of monetary compensation for gross infringement of Article 21.'
          },
          {
            name: 'Nilabati Behera v. State of Orissa',
            citation: 'AIR 1993 SC 1960',
            facts: 'A 22-year-old boy was taken into police custody and beaten to death; his body was found tied to railway tracks. The State pleaded sovereign immunity.',
            ratio: 'The Supreme Court firmly rejected sovereign immunity, ruling that the defence has no application in public law claims for violation of Fundamental Rights under Article 21, awarding monetary compensation.'
          },
          {
            name: 'Chairman, Railway Board v. Chandrima Das',
            citation: 'AIR 2000 SC 988',
            facts: 'A Bangladeshi woman was gang-raped by railway employees inside Yatri Niwas at Howrah railway station.',
            ratio: 'The Supreme Court awarded ₹10 lakhs compensation against the Central Government, holding that sovereign immunity cannot defeat constitutional rights guaranteed to all persons under Article 21.'
          }
        ],
        criticalAnalysis: 'As affirmed in <em>N. Nagendra Rao & Co. v. State of A.P. (1994)</em>, in a welfare state, the distinction between sovereign and non-sovereign functions has collapsed. Sovereign immunity survives only in core national defence and foreign affairs.',
        conclusion: 'The maxim "the King can do no wrong" is dead in India. The State is vicariously liable for ordinary administrative torts and strictly accountable under Article 21 for constitutional torts.'
      }
    },

    // =========================================================================
    // Q5 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q5',
      qNum: 'Q5',
      marks: 10,
      question: "Define Negligence. What are its essential ingredients? Explain the doctrine of Contributory Negligence and discuss how the rule of 'Res Ipsa Loquitur' operates to assist the plaintiff.",
      flairs: [
        { type: 'repeat', label: '🔥 Negligence Core 10-Marker' },
        { type: 'yield', label: '⚡ Unit II High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning of Negligence → Three Mandatory Ingredients (Duty, Breach, Damage) → Lord Atkin\'s Neighbour Principle → Standard of the Reasonable Man → Contributory Negligence (From Absolute Bar to Proportional Apportionment) → Last Opportunity Rule (Davies v. Mann) → The Maxim Res Ipsa Loquitur (Operation & Shifting Burden of Proof) → Landmark Case Laws → Conclusion.',
        statutoryFramework: 'Common law of negligence; Section 106 of the Indian Evidence Act, 1872; English Law Reform (Contributory Negligence) Act, 1945.',
        sections: [
          {
            heading: 'I. Definitional Meaning of Negligence as an Independent Tort',
            paragraphs: [
              'In everyday language, negligence means carelessness. But in the law of torts, negligence is a distinct, independent tort involving a specific breach of a legal duty.',
              '<strong>Winfield\'s Definition:</strong> <em>"Negligence as a tort is the breach of a legal duty to take care which results in damage, undesired by the defendant, to the plaintiff."</em>',
              '<strong>Three Essential Ingredients of Negligence:</strong><br/>' +
              '<strong>1. Legal Duty of Care:</strong> The defendant must owe a specific legal duty of care to the plaintiff. A purely moral or social duty is not enough. Governed by Lord Atkin\'s universal <strong>"Neighbour Principle"</strong> in <em>Donoghue v. Stevenson</em>: You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure persons closely and directly affected by your conduct.<br/>' +
              '<strong>2. Breach of Duty:</strong> The defendant failed to exercise the standard of care required by law. In <em>Blyth v. Birmingham Waterworks (1856)</em>, Baron Alderson defined breach as: <em>"The omission to do something which a reasonable man would do, or doing something which a prudent and reasonable man would not do."</em> The standard is objective: neither superhuman perfection nor gross recklessness, but the standard of an ordinary reasonable person.<br/>' +
              '<strong>3. Consequential Damage:</strong> The plaintiff must suffer actual harm as a direct and reasonably foreseeable consequence of that breach.'
            ]
          },
          {
            heading: 'II. Contributory Negligence: Meaning and Modern Apportionment',
            paragraphs: [
              '<strong>Meaning:</strong> Contributory negligence occurs when the plaintiff also fails to exercise reasonable care for their personal safety, directly contributing to their own injury along with the defendant’s negligence.',
              '<strong>Evolution of the Legal Rule:</strong><br/>' +
              '• <em>1. Old Common Law Rule (Butterfield v. Forrester, 1809):</em> Contributory negligence was an <strong>absolute bar</strong> to recovery. If the plaintiff was even 1% at fault, their claim was dismissed with ZERO damages!<br/>' +
              '• <em>2. The Last Opportunity Rule (Davies v. Mann, 1842):</em> Because the old rule was so cruel, courts formulated the Last Opportunity Rule: if the defendant had the last clear opportunity to avoid the mishap by ordinary care and failed to do so, the defendant remained fully liable.<br/>' +
              '• <em>3. Modern Rule of Apportionment:</em> Today, contributory negligence is NOT a complete defence. Under modern statutory principles, the court determines the respective percentage of fault of both parties and <strong>reduces the compensation proportionally</strong> (e.g., if plaintiff was 30% negligent, damages are reduced by 30%).'
            ]
          },
          {
            heading: 'III. The Maxim "Res Ipsa Loquitur": Assisting the Injured Plaintiff',
            paragraphs: [
              'The Latin maxim <strong>"Res Ipsa Loquitur"</strong> translates to <em>"The thing speaks for itself"</em>.',
              '<strong>The General Evidentiary Rule:</strong> In ordinary tort suits, the burden of proving negligence lies strictly on the plaintiff.<br/>' +
              '<strong>The Operation of the Maxim:</strong> In certain accidents, the circumstances are so glaring and self-evident that the accident could not have occurred without negligence. The maxim operates as a special rule of evidence that <strong>reverses the burden of proof</strong>:<br/>' +
              '• Negligence is prima facie presumed against the defendant.<br/>' +
              '• The defendant must actively prove that they exercised all reasonable care and that the mishap occurred without fault on their part.',
              '<strong>Two Mandatory Conditions for the Maxim to Apply:</strong><br/>' +
              '1. The apparatus, vehicle, building, or situation causing the harm was under the <strong>exclusive management and control</strong> of the defendant.<br/>' +
              '2. The accident is of such a character that in the ordinary course of human affairs, it <strong>simply does not happen without negligence</strong>.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Donoghue v. Stevenson',
            citation: '(1932) AC 562',
            facts: 'The plaintiff drank ginger beer from an opaque glass bottle manufactured by the defendant, which contained the decomposed remains of a snail, causing severe gastroenteritis and nervous shock.',
            ratio: 'Lord Atkin formulated the universal Neighbour Principle: a duty of care is owed to anyone closely and directly affected by one\'s acts, establishing modern product liability.'
          },
          {
            name: 'Butterfield v. Forrester (Contributory Negligence)',
            citation: '(1809) 11 East 60',
            facts: 'The defendant unlawfully placed a wooden pole across a road. The plaintiff, riding his horse violently at dusk, crashed into the pole and was injured.',
            ratio: 'The court held that had the plaintiff used ordinary care, he would have seen the obstruction. Under early common law, his own negligence barred him from recovering damages.'
          },
          {
            name: 'Davies v. Mann (The Fettered Donkey Case)',
            citation: '(1842) 10 M & W 546',
            facts: 'The plaintiff negligently left his donkey fettered by the feet on a public highway. The defendant’s wagon driven at high speed ran over the donkey and killed it.',
            ratio: 'The court held the defendant liable. Although the plaintiff was negligent, the defendant had the last clear opportunity to avoid running over the donkey and failed to do so.'
          },
          {
            name: 'Roe v. Minister of Health (State of the Art Defence)',
            citation: '(1954) 2 QB 66',
            facts: 'Patients were paralyzed by spinal anaesthetic stored in glass ampoules immersed in phenol. Undetectable invisible micro-cracks in the glass allowed phenol to contaminate the anaesthetic. At that time, science was unaware of such invisible micro-cracks.',
            ratio: 'The court held the hospital not liable for negligence. An act is judged by the state of medical knowledge existing at the time of the incident, not by hindsight wisdom ("We must not look at 1947 through 1954 spectacles").'
          },
          {
            name: 'Municipal Corporation of Delhi v. Subhagwanti (Res Ipsa Loquitur)',
            citation: 'AIR 1966 SC 1750',
            facts: 'The 80-year-old clock tower in Chandni Chowk suddenly collapsed in fair weather, crushing several shoppers.',
            ratio: 'The Supreme Court applied Res Ipsa Loquitur. Clock towers do not collapse on their own without gross lack of maintenance. MCD was held liable without plaintiffs having to prove specific mechanical faults.'
          }
        ],
        criticalAnalysis: 'Res ipsa loquitur is a crucial equalizer in consumer, hospital, and railway accidents where ordinary citizens cannot access internal maintenance records to demonstrate specific technical fault.',
        conclusion: 'Negligence is a breach of duty causing damage; contributory negligence reduces damages proportionally; and Res Ipsa Loquitur shifts the burden of proof when the accident speaks for itself.'
      }
    },

    // =========================================================================
    // Q6 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q6',
      qNum: 'Q6',
      marks: 10,
      question: "Explain the meaning and application of the maxim 'Volenti non fit injuria'. What are the exceptional circumstances—with special reference to Rescue Cases—where courts refuse this defence to the defendant?",
      flairs: [
        { type: 'repeat', label: '🔥 Volenti & Rescue 10-Marker' },
        { type: 'yield', label: '⚡ Unit I High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning of the Maxim → Two Essential Pillars (Scienti vs. Volenti) → Routine Applications (Sports & Medical) → The Rescue Cases Exception (Haynes v. Harwood & Baker v. Hopkins) → Spectator Sports Rules (Wooldridge v. Sumner) → Other Key Exceptions (Breach of Statutory Duty & Fraud) → Critical Synthesis & Conclusion.',
        statutoryFramework: 'Latin Maxim: "Volenti non fit injuria" (To a willing person, no injury is done); Consent under common law.',
        sections: [
          {
            heading: 'I. Meaning and Foundational Principle of the Maxim',
            paragraphs: [
              'The Latin maxim <strong>"Volenti non fit injuria"</strong> translates to:<br/>' +
              '<em>"To a willing mind, no injury is done."</em>',
              '<strong>The Legal Principle:</strong> When a person knowingly, freely, and voluntarily consents to encounter a risk of harm, they cannot subsequently maintain an action in tort if that harm actually happens. Having consented to run the risk, they cannot treat the resulting damage as a legal wrong.<br/>' +
              '• <em>Commonplace Applications:</em> Spectators purchasing tickets to watch a cricket match or motor racing, boxers stepping into a ring, or patients consenting to a surgical operation.'
            ]
          },
          {
            heading: 'II. Two Mandatory Essentials to Establish the Defence',
            paragraphs: [
              'For the defendant to successfully claim this defence, they must prove two distinct elements:<br/>' +
              '<strong>1. Full Knowledge of the Risk (Scienti):</strong> The plaintiff had full awareness of the nature and extent of the danger.<br/>' +
              '<strong>2. Free and Voluntary Consent (Volenti):</strong> The plaintiff freely and voluntarily agreed to run that specific risk.',
              '<strong>Crucial Rule: Knowledge Does NOT Mean Consent:</strong><br/>' +
              'Mere knowledge of a danger is not enough. The maxim is <em>Volenti non fit injuria</em>, NOT <em>"Scienti non fit injuria"</em>. As established in <em>Smith v. Baker (1891)</em>: A workman who continues working under a dangerous crane because he needs his job knows the risk, but has NOT voluntarily agreed to bear the consequence of the employer\'s negligence.'
            ]
          },
          {
            heading: 'III. The Leading Exception: Rescue Cases (Courts Refuse the Defence)',
            paragraphs: [
              'The most significant and celebrated exception to Volenti non fit injuria is the <strong>Rescue Cases</strong> doctrine:<br/>' +
              '• When the defendant’s negligence creates a situation of imminent peril to human life, and a brave rescuer heroically intervenes to save innocent persons from death or injury, the courts <strong>categorically REFUSE the defence of Volenti</strong> against the rescuer.<br/>' +
              '• <strong>The Moral and Legal Justification:</strong> The rescuer’s intervention is not voluntary caprice or reckless adventure; it is compelled by a high moral, social, and human duty. In the immortal words of Justice Benjamin Cardozo in <em>Wagner v. International Railway Co. (1921)</em>:<br/>' +
              '<em>"Danger invites rescue. The cry of distress is the summons to relief. The law does not ignore these reactions of the mind in tracing conduct to its consequences... The wrong that imperils life is a wrong to the imperilled victim; it is a wrong also to his rescuer."</em><br/>' +
              '• <strong>English and Indian Application:</strong> The House of Lords and Indian High Courts have unreservedly adopted this principle. In <em>Haynes v. Harwood</em>, when a police constable stopped bolted runaway horses on a crowded street, the Court held that the wrongdoer who created the risk cannot plead that the rescuer acted voluntarily.<br/>' +
              '• <em>Limits to Rescue Cases:</em> If there is no real, imminent danger to human life, or if the plaintiff intervenes foolishly or merely to protect trivial property where no life was at stake, the court may refuse the rescue exception (<em>Cutler v. United Vauxhall Collieries</em>).'
            ]
          },
          {
            heading: 'IV. Other Exceptional Circumstances Where Defence is Refused',
            paragraphs: [
              'Courts refuse to permit the defence of Volenti in three additional situations:<br/>' +
              '<strong>1. Breach of Mandatory Statutory Safety Duty:</strong> Where an Act of Parliament mandates safety measures (e.g., fencing factory machinery under the Factories Act), an employer cannot argue that the worker consented to work near the unfenced machine (*Baddeley v. Granville*).<br/>' +
              '<strong>2. Consent Obtained by Fraud, Duress, or Misrepresentation:</strong> Consent must be genuine and uncoerced. Consent extracted through fear or fraud is void.<br/>' +
              '<strong>3. Negligence of the Defendant:</strong> Consent to ordinary inherent risks (e.g., undergoing surgery) is NOT consent to subsequent negligence (e.g., surgeon amputating the wrong leg).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Hall v. Brooklands Auto Racing Club',
            citation: '(1933) 1 KB 205',
            facts: 'The plaintiff was a spectator at a motor car race. Two cars collided and one flew over the barrier into the crowd, injuring the plaintiff.',
            ratio: 'The defence of Volenti non fit injuria succeeded. Spectators voluntarily assume the inherent, obvious risks of high-speed sporting events.'
          },
          {
            name: 'Wooldridge v. Sumner',
            citation: '(1963) 2 QB 43',
            facts: 'A professional photographer standing beside a horse-jumping arena was knocked down by a galloping horse during an elite competition.',
            ratio: 'The court held that participants in lawful sports are not liable to spectators or photographers for errors of judgment made in the heat of competition, provided there was no reckless disregard for safety.'
          },
          {
            name: 'Smith v. Baker & Sons',
            citation: '(1891) AC 325',
            facts: 'A railway quarryman continued working knowing that a crane swung heavy stones over his head. A stone dropped and severely injured him.',
            ratio: 'The House of Lords held the employer liable. Mere knowledge of a danger does not amount to voluntary assumption of risk (Scienter is not volens).'
          },
          {
            name: 'Haynes v. Harwood',
            citation: '(1935) 1 KB 146',
            facts: 'A two-horse van was left unattended in a busy street. Children threw stones, causing the horses to bolt. A police officer rushed out and stopped the horses to protect women and children, suffering severe injuries.',
            ratio: 'The court rejected Volenti non fit injuria. Rescuers acting under a moral duty to save innocent lives are fully entitled to damages from the negligent party.'
          },
          {
            name: 'Baker v. T.E. Hopkins & Son Ltd.',
            citation: '(1959) 1 WLR 966',
            facts: 'Two workmen were overcome by poisonous carbon monoxide fumes down a dark well. Dr. Baker, a local physician, was lowered down to rescue them despite warnings. He was also overcome and died.',
            ratio: 'The English Court of Appeal rejected the defense of Volenti non fit injuria raised by the negligent employer. The doctor acted under an urgent moral duty to save lives; the employer was held fully liable in damages.'
          }
        ],
        criticalAnalysis: 'Volenti non fit injuria respects individual autonomy, but the rescue exception prevents wrongdoers from using the doctrine to escape liability when courageous citizens intervene to save lives.',
        conclusion: 'Volenti non fit injuria bars claims where risk was freely assumed; however, courts refuse the defence in rescue cases, statutory breaches, and fraud.'
      }
    },

    // =========================================================================
    // Q7 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q7',
      qNum: 'Q7',
      marks: 10,
      question: 'What is Trespass to Land (quare clausum fregit)? How is it committed? Explain the doctrine of Trespass Ab Initio (Six Carpenters\' Case) along with remedies and defences.',
      flairs: [
        { type: 'repeat', label: '🔥 Trespass to Land Core 10-Marker' },
        { type: 'yield', label: '⚡ Unit II High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning & Possession Protection → Actionable Per Se → Three Modes of Commission → Continuing Trespass → Subsoil and Airspace Trespass → The Doctrine of Trespass Ab Initio (Six Carpenters\' Case) → Judicial & Extra-Judicial Remedies → Recognized Defences → Landmark Precedents → Conclusion.',
        statutoryFramework: 'Common law tort: "Trespass Quare Clausum Fregit"; Section 6 of Specific Relief Act, 1963; Section 441 of IPC (Criminal Trespass).',
        sections: [
          {
            heading: 'I. Meaning and Nature of Trespass to Land',
            paragraphs: [
              '<strong>Trespass to land</strong> (known in common law as <em>trespass quare clausum fregit</em>) is the direct, unjustified, and intentional physical interference with the lawful possession of land belonging to another.',
              '<strong>Two Core Principles:</strong><br/>' +
              '<strong>1. Protection of Possession, Not Ownership:</strong> The law of trespass protects <em>actual peaceful possession</em>. A tenant, lessee, or lawful occupier can sue anyone—even the legal owner or landlord—who enters without permission or legal authority.<br/>' +
              '<strong>2. Actionable Per Se:</strong> Trespass to land is actionable without proof of actual damage. The law protects boundaries: walking across an empty lawn without causing harm is still an actionable trespass.'
            ]
          },
          {
            heading: 'II. Three Ways Trespass to Land is Committed',
            paragraphs: [
              '• <strong>1. Entering upon Land:</strong> Walking, stepping, driving a vehicle, or jumping a fence onto the plaintiff’s land without permission.<br/>' +
              '• <strong>2. Remaining on Land:</strong> Lawfully entering with permission (as a licensee, guest, or cinema customer) but refusing to leave after the permission has been revoked.<br/>' +
              '• <strong>3. Placing Objects on Land:</strong> Dumping garbage, driving a nail into a neighbour’s wall, erecting a post, or leaving building debris on another’s land.<br/>' +
              '• <strong>Continuing Trespass:</strong> Every day that a wrongful structure or dumped material remains on another\'s land constitutes a fresh, continuing trespass giving rise to successive actions for damages until it is removed.<br/>' +
              '• <strong>Airspace and Subsoil Trespass:</strong> Land ownership extends upwards into the sky and downwards into the earth. Operating an overhanging crane arm or erecting an overhanging billboard over a neighbour\'s property constitutes trespass (*Kelsen v. Imperial Tobacco*). In <em>Star Energy Weald Basin Ltd. v. Bocardo SA (2010)</em>, the UK Supreme Court held that directional oil drilling 800 feet beneath the plaintiff\'s surface was an actionable trespass to subsoil. However, high-altitude flights by commercial aircraft do not constitute trespass (*Bernstein of Leigh v. Skyviews*).'
            ]
          },
          {
            heading: 'III. The Doctrine of Trespass Ab Initio (Six Carpenters\' Case)',
            paragraphs: [
              'The doctrine of <strong>Trespass Ab Initio</strong> (trespass from the beginning) is a special common law rule governing public officials:<br/>' +
              '• <strong>The Rule:</strong> When an individual enters land under an <em>authority given by law</em> (such as a police officer, tax bailiff, or meter reader) and subsequently commits an <strong>active abuse of that authority (a positive misfeasance)</strong>, the law treats them as a trespasser from the very moment they first entered!<br/>' +
              '• <strong>Limitation:</strong> As established in the famous <em>Six Carpenters\' Case (1610)</em>, the doctrine applies ONLY to active <strong>misfeasance</strong> (doing an unlawful positive act). Mere <strong>non-feasance</strong> (such as refusing to pay a bill) does NOT make a person a trespasser ab initio.'
            ]
          },
          {
            heading: 'IV. Remedies Available to the Plaintiff',
            paragraphs: [
              '• <strong>Judicial Remedies:</strong> (1) Damages (compensatory, nominal, or exemplary), (2) Injunction (restraining ongoing or threatened intrusion), (3) Recovery of Possession under Section 6 of the Specific Relief Act, 1963.<br/>' +
              '• <strong>Extra-Judicial Remedies:</strong> (1) Expulsion of the trespasser using reasonable, proportionate force (<em>molliter manus imposuit</em>), (2) Distress Damage Feasant (detaining stray animals causing damage).'
            ]
          },
          {
            heading: 'V. Defences Available to the Defendant',
            paragraphs: [
              'A defendant can escape liability by establishing:<br/>' +
              '• <strong>1. Leave and License (Consent):</strong> Express or implied permission granted by the possessor.<br/>' +
              '• <strong>2. Statutory Authority / Lawful Warrant:</strong> Entry authorized by law (e.g., search warrant under CrPC or meter inspection).<br/>' +
              '• <strong>3. Necessity:</strong> Entry to prevent a public catastrophe (e.g., pulling down a house to stop a raging conflagration).<br/>' +
              '• <strong>4. Abatement of Nuisance / Retaking Goods:</strong> Lawful self-help exercised reasonably without breach of peace.'
            ]
          },
          {
            heading: 'VI. Vital Distinction: Trespass to Land vs. Nuisance',
            paragraphs: [
              'Examiners frequently test the boundary between Trespass and Nuisance:<br/>' +
              '• <strong>Direct vs. Consequential Interference:</strong> Trespass is a direct physical invasion of the plaintiff’s land (e.g., planting a tree on the plaintiff’s land). Nuisance is an indirect, consequential interference with the enjoyment of land (e.g., roots or branches from a tree on the defendant’s land encroaching onto the neighbour).<br/>' +
              '• <strong>Requirement of Actual Damage:</strong> Trespass to land is actionable <em>per se</em> without proof of damage. Nuisance, being an indirect injury, almost always requires proof of tangible physical damage or substantial sensory discomfort.<br/>' +
              '• <strong>Interest Protected:</strong> Trespass protects <em>exclusive possession</em>; Nuisance protects <em>use, quiet enjoyment, and health</em>.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Six Carpenters\' Case',
            citation: '(1610) 8 Co Rep 146a',
            facts: 'Six carpenters entered a public tavern, ordered wine and bread, and paid for it. They then ordered another pot of wine, drank it, but refused to pay for the second pot.',
            ratio: 'Established the rule of Trespass Ab Initio: entry under authority of law followed by positive misfeasance makes the person a trespasser from the beginning. However, mere non-payment (non-feasance) did not make them trespassers ab initio.'
          },
          {
            name: 'Entick v. Carrington',
            citation: '(1765) 19 St Tr 1029',
            facts: 'State messengers acting under a general warrant issued by the Secretary of State broke into the plaintiff’s private house and searched his papers.',
            ratio: 'Lord Camden held that every invasion of private property, be it ever so minute, is a trespass. In the absence of clear statutory authority, state officials have no right to enter private premises.'
          },
          {
            name: 'Star Energy Weald Basin Ltd. v. Bocardo SA',
            citation: '(2010) UKSC 35',
            facts: 'An oil extraction company drilled diagonal wells deep underground beneath Bocardo\'s land at depths of 800 to 2,800 feet without the landowner’s permission.',
            ratio: 'The UK Supreme Court held that the owner of the surface owns the strata beneath it down to the point where physical features make ownership absurd. The subsurface drilling constituted an actionable trespass to land.'
          },
          {
            name: 'Kelsen v. Imperial Tobacco Co.',
            citation: '(1957) 2 QB 334',
            facts: 'The defendant erected an advertising sign that projected 8 inches into the airspace above the plaintiff’s single-storey shop.',
            ratio: 'Held that invasion of airspace above land is trespass to land, granting an injunction to remove the sign even though it caused zero actual damage.'
          },
          {
            name: 'Bernstein of Leigh v. Skyviews & General Ltd.',
            citation: '(1978) QB 479',
            facts: 'The defendants flew an aircraft over Lord Bernstein\'s country estate at a high altitude to take an aerial photograph of the house.',
            ratio: 'The court held this was NOT a trespass. An owner\'s rights in airspace are restricted to such height as is necessary for the ordinary use and enjoyment of the land and structures.'
          }
        ],
        criticalAnalysis: 'Trespass to land protects the inviolability of private homes. Because it is actionable per se, property owners can defend their boundaries against arbitrary private or state intrusion.',
        conclusion: 'Trespass to land protects actual possession against direct physical invasion; remedied by damages and injunctions, and defended by consent, necessity, or statutory power.'
      }
    },

    // =========================================================================
    // Q8 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q8',
      qNum: 'Q8',
      marks: 10,
      question: 'Define Nuisance. Distinguish between Public Nuisance and Private Nuisance. Under what circumstances can an individual sue for Public Nuisance, and what remedies are available?',
      flairs: [
        { type: 'repeat', label: '🔥 Nuisance Core 10-Marker' },
        { type: 'yield', label: '⚡ Unit III High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning of Nuisance → Nuisance vs. Trespass → Public Nuisance (Crime & Special Damage Rule) → Private Nuisance (Unreasonable Interference with Land) → Essential Ingredients → Ineffective Defences in Nuisance (Coming to Nuisance) → Remedies (Injunction, Damages, Abatement) → Landmark Cases → Conclusion.',
        statutoryFramework: 'Section 268 of the Indian Penal Code, 1860 (Public Nuisance); Specific Relief Act, 1963; Common law of private nuisance.',
        sections: [
          {
            heading: 'I. Meaning and Origin of Nuisance',
            paragraphs: [
              'The word <strong>"Nuisance"</strong> is derived from the French word <em>"Nuire"</em> and Latin word <em>"Nocere"</em>, which means "to annoy", "to hurt", or "to injure".',
              '<strong>Winfield\'s Definition:</strong> <em>"Nuisance as a tort means an unlawful interference with a person\'s use or enjoyment of land, or of some right over, or in connection with it."</em>',
              '<strong>Distinction between Trespass and Nuisance:</strong><br/>' +
              '• <em>Trespass:</em> Direct, physical entry upon the plaintiff’s land (e.g., stepping onto land, planting a post). Actionable per se without proof of damage.<br/>' +
              '• <em>Nuisance:</em> Indirect, consequential interference with the comfort or enjoyment of land (e.g., emitting industrial noise, vibrations, chemical smoke, foul sewage smells, or allowing tree roots to undermine foundations). Requires proof of actual substantial discomfort or tangible damage.'
            ]
          },
          {
            heading: 'II. Public Nuisance vs. Private Nuisance',
            paragraphs: [
              '<strong>1. Public Nuisance (Crime & Tort):</strong><br/>' +
              '• An unreasonable act or omission that materially affects the reasonable comfort, health, safety, and convenience of the general public or a local community (e.g., digging an unlit trench across a public highway, polluting a town drinking river, or obstructing a public canal).<br/>' +
              '• Under Section 268 of IPC, public nuisance is primarily a <strong>crime</strong> prosecuted by the State.<br/>' +
              '• <strong>When can an individual citizen sue in tort for Public Nuisance?</strong> A private individual can maintain a civil tort action for public nuisance ONLY if they satisfy two conditions:<br/>' +
              '  (a) <em>Special Damage:</em> The plaintiff suffered direct personal injury, financial loss, or property damage <strong>over and above</strong> that suffered by the general public.<br/>' +
              '  (b) <em>Direct Injury:</em> The injury must be direct and substantial, not merely a minor inconvenience shared with the rest of the community (<em>Rose v. Miles</em>).',

              '<strong>2. Private Nuisance (Pure Civil Tort):</strong><br/>' +
              '• Continuous, unlawful interference with the use, comfort, or enjoyment of private land.<br/>' +
              '• <em>Two Classes of Private Nuisance:</em><br/>' +
              '  (a) <em>Injury to Property:</em> Tangible physical damage to land or buildings (e.g., noxious chemical fumes killing trees or vibrations cracking walls, *St. Helen\'s Smelting Co. v. Tipping*).<br/>' +
              '  (b) <em>Injury to Comfort and Health:</em> Substantial interference with physical comfort and peace of mind (e.g., unbearable factory noise, foul odours, continuous barking of dogs, ringing loud bells at midnight).'
            ]
          },
          {
            heading: 'III. Essential Elements to Establish Private Nuisance',
            paragraphs: [
              '1. <strong>Unreasonable Interference:</strong> The interference must exceed the ordinary trivial annoyances of daily social life. Governed by the standard of a reasonable, ordinary person, not a hypersensitive person (*Robinson v. Kilvert*).<br/>' +
              '2. <strong>Continuous / Repetitive Nature:</strong> A single momentary sound or brief smell is rarely a nuisance; it must be ongoing and continuous.<br/>' +
              '3. <strong>Substantial Damage:</strong> Must cause tangible physical injury to property or substantial physical discomfort affecting health and ordinary comfort.'
            ]
          },
          {
            heading: 'IV. Defences That Are NOT Valid in Nuisance',
            paragraphs: [
              'The courts have firmly rejected three common excuses raised by defendants:<br/>' +
              '• <strong>1. "Coming to the Nuisance" is NO Defence:</strong> It is no defence for the defendant to argue that the plaintiff arrived after the nuisance was already in full operation. In <em>Sturges v. Bridgman</em>, a doctor built a consulting room next to a confectioner’s noisy mortars that had operated for 20 years; the court granted an injunction against the confectioner.<br/>' +
              '• <strong>2. Public Benefit is NO Defence:</strong> It is no defence that the defendant’s trade is beneficial to the public or generates substantial employment (e.g., an industrial brick kiln or noisy factory).<br/>' +
              '• <strong>3. Care and Skill is NO Defence:</strong> The fact that the defendant took all possible precautions and used the best modern machinery is no defence if the nuisance still continues in fact.'
            ]
          },
          {
            heading: 'V. Remedies Available in an Action for Nuisance',
            paragraphs: [
              '• <strong>1. Injunction (Primary Remedy):</strong> A prohibitory court order directing the defendant to stop or modify the noisy or smelly activity; or a mandatory injunction to remove the offending structure.<br/>' +
              '• <strong>2. Damages:</strong> Monetary compensation for property damage or loss of enjoyment.<br/>' +
              '• <strong>3. Abatement of Nuisance (Extra-Judicial Self-Help):</strong> Lawful removal of the nuisance by the occupier themselves without going to court (e.g., trimming overhanging branches under *Lemmon v. Webb*).'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'Rose v. Miles (Public Nuisance & Special Damage)',
            citation: '(1815) 4 M & S 101',
            facts: 'The defendant wrongfully obstructed a public navigable canal by mooring a large barge across it. The plaintiff, transporting commercial goods on barges, was forced to unload his cargo and transport it by horses and wagons at substantial personal expense.',
            ratio: 'The court held the defendant liable in tort. While obstructing the public canal was a public nuisance, the plaintiff suffered direct, personal financial loss over and above the general public, constituting actionable Special Damage.'
          },
          {
            name: 'St. Helen\'s Smelting Co. v. Tipping',
            citation: '(1865) 11 HLC 642',
            facts: 'The defendant’s copper smelting factory emitted noxious sulphur fumes and vapours that damaged the trees and crops on the plaintiff’s adjacent estate.',
            ratio: 'The House of Lords established that where nuisance causes actual physical damage to property, the character of the locality is irrelevant; the defendant is strictly liable.'
          },
          {
            name: 'Hollywood Silver Fox Farm Ltd. v. Emmett',
            citation: '(1936) 2 KB 468',
            facts: 'The plaintiff bred silver foxes, which are notoriously sensitive during breeding season. The defendant, out of spite, repeatedly fired shotguns near the boundary to frighten the vixens into eating their cubs.',
            ratio: 'The court held the defendant liable for private nuisance. Even though firing a gun on one\'s own land is normally lawful, the malicious motive turned it into an actionable nuisance.'
          },
          {
            name: 'Robinson v. Kilvert',
            citation: '(1889) 41 Ch D 88',
            facts: 'The defendant manufactured paper boxes in a basement, using gentle heat. The heat dried out the exceptionally delicate brown paper stored by the plaintiff upstairs.',
            ratio: 'Held not liable. The law does not protect hypersensitive individuals or delicate goods. An act is a nuisance only if it affects ordinary normal use.'
          }
        ],
        criticalAnalysis: 'Nuisance balances the competing rights of neighbours: "Sic utere tuo ut alienum non laedas" (Use your property so as not to injure your neighbour). Courts weigh locality, duration, and social utility.',
        conclusion: 'Nuisance is an unlawful interference with land enjoyment; public nuisance affects the community, while private nuisance affects individuals; remedied by injunctions, damages, or lawful abatement.'
      }
    },

    // =========================================================================
    // Q9 - 10 MARKS
    // =========================================================================
    {
      id: 'pred-t-q9',
      qNum: 'Q9',
      marks: 10,
      question: 'What is Defamation? Critically distinguish between Libel and Slander with examples. Discuss the Indian legal position and the constitutional validity of Criminal Defamation under Sections 499 & 500 IPC.',
      flairs: [
        { type: 'repeat', label: '🔥 Defamation Master 10-Marker' },
        { type: 'yield', label: '⚡ Unit IV High Yield' },
        { type: 'predictive', label: '🎯 Predictive 2026' },
      ],
      answer: {
        synopsis: 'Definitional Meaning of Defamation → Three Essential Ingredients → The Doctrine of Innuendo → Libel vs. Slander Distinction Table → Slander Exceptions Actionable Per Se → Indian Civil Position → Criminal Defamation under Section 499 & 500 IPC → The 10 Statutory Exceptions → Constitutional Validity in Subramanian Swamy → Conclusion.',
        statutoryFramework: 'Sections 499 & 500 of the Indian Penal Code, 1860 / Section 356 of BNS; Article 19(1)(a) & Article 19(2) of Constitution of India; Article 21 (Right to Reputation).',
        sections: [
          {
            heading: 'I. Definitional Meaning and Three Essential Elements',
            paragraphs: [
              '<strong>Defamation</strong> is the injury to the reputation of a person caused by a false and unprivileged statement published to a third party, tending to lower them in the estimation of right-thinking members of society.',
              'As defined by Lord Atkin in <em>Sim v. Stretch (1936)</em>: <em>"Would the words tend to lower the plaintiff in the estimation of right-thinking members of society generally?"</em>',
              '<strong>Three Essential Ingredients of Defamation:</strong><br/>' +
              '<strong>1. The Statement Must Be Defamatory:</strong> It must expose the plaintiff to hatred, contempt, ridicule, or cause them to be shunned or avoided in society.<br/>' +
              '<strong>2. The Statement Must Refer to the Plaintiff:</strong> A reasonable person knowing the plaintiff must understand that the words refer to them, even if the defendant did not intend to defame them (<em>Hulton & Co. v. Jones</em>).<br/>' +
              '<strong>3. The Statement Must Be Published:</strong> It must be communicated to at least one third person other than the plaintiff. Speaking words to the plaintiff in private without third parties present is NOT defamation.',
              '<strong>The Doctrine of Innuendo:</strong> Sometimes words are innocent, harmless, or polite on their face (natural meaning), but carry a hidden, secondary defamatory meaning because of extrinsic facts known to the listeners. This latent defamatory sting is called an <strong>innuendo</strong> (<em>Cassidy v. Daily Mirror</em>).'
            ]
          },
          {
            heading: 'II. Fundamental Differences: Libel vs. Slander',
            paragraphs: [
              '<table style="width:100%; border-collapse:collapse; margin-top:8px;">' +
              '<thead><tr style="background:rgba(255,255,255,0.08); text-align:left;">' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Parameter</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Libel</th>' +
              '<th style="padding:8px; border:1px solid rgba(255,255,255,0.15);">Slander</th>' +
              '</tr></thead><tbody>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>1. Representation Form</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Written, printed, pictures, films, statues, online posts.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Spoken words, gestures, sighs, or transitory sounds.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>2. Sensory Appeal</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Addressed to the eye (visual).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Addressed to the ear (auditory).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>3. Actionability</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Actionable <strong>per se</strong> (without proof of actual loss).</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Requires proof of <strong>special (monetary) damage</strong> (4 exceptions).</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>4. Permanence</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Permanent; wide circulation; implies premeditation.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Temporary; often uttered in sudden heat of passion.</td></tr>' +
              '<tr><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);"><strong>5. Indian Legal Status</strong></td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Civil tort and criminal offence under Sec 499 IPC.</td><td style="padding:8px; border:1px solid rgba(255,255,255,0.1);">Civil tort (actionable per se) and criminal offence under Sec 499 IPC.</td></tr>' +
              '</tbody></table>',
              '<strong>The 4 Exceptions where Slander is Actionable Per Se (Without Proof of Loss):</strong><br/>' +
              '1. Imputation of a criminal offence punishable by imprisonment.<br/>' +
              '2. Imputation of a contagious or infectious disease (like leprosy or venereal disease).<br/>' +
              '3. Imputation of unchastity or adultery to a woman or girl.<br/>' +
              '4. Imputation of incompetence or dishonesty in any office, profession, trade, or business.'
            ]
          },
          {
            heading: 'III. The Indian Position and Constitutional Validity of Criminal Defamation',
            paragraphs: [
              'In India, defamation enjoys a dual character: it is both a <strong>Civil Tort</strong> and a <strong>Criminal Offence</strong>:<br/>' +
              '• <strong>Civil Remedy:</strong> The victim files a civil suit in court claiming unliquidated monetary damages to repair their damaged reputation.<br/>' +
              '• <strong>Criminal Offence (Sections 499 & 500 IPC):</strong><br/>' +
              '  - Section 499 defines criminal defamation with 10 statutory exceptions (truth for public good, fair comment, privileged reports, censure passed in good faith by lawful authority).<br/>' +
              '  - Section 500 punishes defamation with simple imprisonment up to 2 years, or fine, or both.<br/>' +
              '• <strong>Constitutional Validity (Subramanian Swamy v. Union of India, 2016):</strong><br/>' +
              'The Supreme Court unanimously upheld the constitutional validity of Sections 499 and 500 IPC, ruling that:<br/>' +
              '1. The right to reputation is an inseparable component of life and personal dignity under <strong>Article 21</strong>.<br/>' +
              '2. Freedom of speech under Article 19(1)(a) is subject to reasonable restrictions under <strong>Article 19(2)</strong>, which expressly lists "defamation".<br/>' +
              '3. One citizen\'s right to free speech cannot be exercised to assassinate another citizen\'s dignity and reputation.'
            ]
          }
        ],
        caseLaws: [
          {
            name: 'D.P. Choudhary v. Manjulata',
            citation: 'AIR 1997 Raj 170',
            facts: 'A local daily newspaper published a fabricated news report falsely alleging that Manjulata, a 17-year-old college girl from a respectable family, had run away with a boy. Her reputation was ruined.',
            ratio: 'The Rajasthan High Court held the publication to be defamatory libel per se, awarding ₹10,000 as general damages without requiring proof of actual monetary loss.'
          },
          {
            name: 'Hulton & Co. v. Jones',
            citation: '(1910) AC 20',
            facts: 'A newspaper published a humorous fictitious article about a fictional character named "Artemus Jones" behaving wildly in France. Unknown to the writer, there was a real barrister named Artemus Jones whose friends believed the article was about him.',
            ratio: 'The House of Lords held the publishers liable. In defamation, liability depends not on the intention of the publisher, but on what right-thinking readers reasonably understood.'
          },
          {
            name: 'Cassidy v. Daily Mirror Newspapers Ltd.',
            citation: '(1929) 2 KB 331',
            facts: 'A newspaper published a photograph of Mr. Corrigan with a young lady, captioned that their engagement had been announced. In fact, Mr. Corrigan was already married to Mrs. Cassidy. Her neighbours assumed she was living with him in sin as an unmarried mistress.',
            ratio: 'The court held the newspaper liable for innuendo. Even though the words were completely innocent on their face, they carried a defamatory imputation to persons knowing the extrinsic fact that she was his lawful wife.'
          },
          {
            name: 'Subramanian Swamy v. Union of India',
            citation: '(2016) 7 SCC 221',
            facts: 'Writ petitions challenged the constitutional validity of criminal defamation (Sections 499 and 500 IPC) as an unreasonable restriction on freedom of speech and expression.',
            ratio: 'The Supreme Court upheld criminal defamation, ruling that the right to reputation under Article 21 cannot be sacrificed at the altar of unbridled free speech.'
          }
        ],
        criticalAnalysis: 'While English law maintains historical distinctions between libel and slander, Indian jurisprudence protects reputation holistically: civil damages compensate for injury, while criminal sanctions deter character assassination.',
        conclusion: 'Libel is permanent and actionable per se; slander is spoken; in India, both are civil wrongs and punishable as criminal offences under Section 499/500 IPC.'
      }
    }
  ]
};

