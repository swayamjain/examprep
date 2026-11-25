// English & Legal Writing - I: Skeletal Formats Guide
// Covers Job Application, Boxed C.V., Interview Prep, Notice, Agenda, Minutes, Resolutions, and Report Writing
// Incorporates College Textbook Reference (Notice, Agenda, Minutes & Specimens)
// Curated by Swayam Jain

export const skeletalFormatsPaper = {
  id: 'eng-skeletal-formats',
  title: '📐 Writing Formats (Skeletal Guide)',
  description: 'Complete exam-ready skeletal templates and rules for all English writing topics: Job Applications, Boxed CV, Interviews, Notices, Agenda, Minutes, Resolutions, and Official / Newspaper / Legal Case Reports.',
  isPredictive: false,
  questions: [
    {
      id: 'eng-skel-1',
      qNum: 'Format 1',
      marks: 10,
      question: 'Job Application, Boxed Curriculum Vitae (C.V.), and Facing an Interview — Complete Skeletal Formats & Rules',
      flairs: [
        { type: 'repeat', label: '📐 Skeletal Format • Career Writing' },
      ],
      answer: {
        sections: [
          {
            heading: 'I. Skeletal Format of a Formal Job Application (Cover Letter)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head"><div class="format-doc-badge">JOB APPLICATION (COVER LETTER — BLOCK FORMAT)</div></div>' +
                '<strong>From:</strong><br/>' +
                '<span class="format-placeholder">[Your Full Name]</span><br/>' +
                '<span class="format-placeholder">[House / Flat No., Street, City – PIN Code]</span><br/>' +
                '<span class="format-placeholder">[Email ID] | [Mobile Number]</span><br/><br/>' +
                '<strong>Date:</strong> <span class="format-placeholder">[DD Month YYYY]</span><br/><br/>' +
                '<strong>To:</strong><br/>' +
                '<span class="format-placeholder">[Designation: The Managing Partner / HR Manager / Senior Advocate]</span>,<br/>' +
                '<span class="format-placeholder">[Name of Law Firm / Organisation / Chamber]</span>,<br/>' +
                '<span class="format-placeholder">[Office Address, City – PIN Code]</span>.<br/><br/>' +
                '<strong>Subject:</strong> Application for the post of <span class="format-placeholder">[Post Name, e.g., Legal Associate / Legal Advisor]</span>.<br/>' +
                '<strong>Reference:</strong> <span class="format-placeholder">[Advertisement / Portal Name & Date, if applicable]</span>.<br/><br/>' +
                'Respected Sir / Madam,<br/><br/>' +
                '<strong>[Paragraph 1 — Opening & Purpose]:</strong> With reference to your advertisement in <span class="format-placeholder">[Source]</span> dated <span class="format-placeholder">[Date]</span>, I wish to apply for the post of <span class="format-placeholder">[Position]</span> in your esteemed firm/organisation.<br/><br/>' +
                '<strong>[Paragraph 2 — Qualifications & Experience]:</strong> I have completed my <span class="format-placeholder">[Degree, e.g., B.A. LL.B. (Hons.)]</span> from <span class="format-placeholder">[University]</span> with <span class="format-placeholder">[Grade/Percentage]</span>, and I am enrolled with <span class="format-placeholder">[Bar Council Name]</span>. I have <span class="format-placeholder">[X years/months]</span> of practical experience/internships in <span class="format-placeholder">[Key Areas: drafting, research, corporate compliance, litigation]</span>.<br/><br/>' +
                '<strong>[Paragraph 3 — Closing & Interview Request]:</strong> I assure you of my sincere dedication and hard work if given an opportunity. My detailed Curriculum Vitae is enclosed herewith for your kind perusal. I look forward to discussing my candidature in a personal interview.<br/><br/>' +
                'Thanking you.<br/><br/>' +
                'Yours sincerely,<br/>' +
                '<em>(Sd/-)</em><br/>' +
                '<strong><span class="format-placeholder">[Your Full Name]</span></strong><br/><br/>' +
                '<strong>Encl.:</strong> Curriculum Vitae (C.V.) & copies of testimonials.' +
              '</div>'
            ]
          },
          {
            heading: 'II. Skeletal Format of a Boxed Curriculum Vitae (C.V.)',
            paragraphs: [
              '<div class="cv-box">' +
                '<div class="cv-title-bar">' +
                  '<div class="cv-title-main">CURRICULUM VITAE</div>' +
                  '<div class="cv-name-sub"><span class="format-placeholder">[YOUR FULL NAME]</span></div>' +
                  '<div class="cv-contact-line"><span class="format-placeholder">[City, State] | [Mobile Number] | [Professional Email ID]</span></div>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">1. Personal Details</div>' +
                  '<div class="cv-kv-grid">' +
                    '<div class="cv-kv-label">Full Name:</div><div class="cv-kv-value"><span class="format-placeholder">[Full Name]</span></div>' +
                    '<div class="cv-kv-label">Date of Birth & Age:</div><div class="cv-kv-value"><span class="format-placeholder">[DD/MM/YYYY (Age in Years)]</span></div>' +
                    '<div class="cv-kv-label">Gender & Nationality:</div><div class="cv-kv-value"><span class="format-placeholder">[Gender] | Indian</span></div>' +
                    '<div class="cv-kv-label">Bar Enrollment (if any):</div><div class="cv-kv-value"><span class="format-placeholder">[State Bar Council & Enrollment No.]</span></div>' +
                    '<div class="cv-kv-label">Permanent Address:</div><div class="cv-kv-value"><span class="format-placeholder">[Full Residential Address]</span></div>' +
                    '<div class="cv-kv-label">Languages Known:</div><div class="cv-kv-value"><span class="format-placeholder">[English, Hindi, Marathi, etc.]</span></div>' +
                  '</div>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">2. Career Objective</div>' +
                  '<div class="cv-text"><span class="format-placeholder">[2–3 concise lines stating your career goal, core legal skills, and how you will contribute to the organisation.]</span></div>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">3. Educational Qualifications (Reverse Chronological Order)</div>' +
                  '<div class="cv-table-wrap">' +
                    '<table class="cv-table">' +
                      '<thead><tr><th>Exam / Degree</th><th>Board / University</th><th>Year</th><th>% / CGPA / Division</th></tr></thead>' +
                      '<tbody>' +
                        '<tr><td><span class="format-placeholder">[LL.M. / Diploma]</span></td><td><span class="format-placeholder">[University]</span></td><td><span class="format-placeholder">[Year]</span></td><td><span class="format-placeholder">[% / CGPA]</span></td></tr>' +
                        '<tr><td><span class="format-placeholder">[B.A. LL.B. (5 Yrs)]</span></td><td><span class="format-placeholder">[University]</span></td><td><span class="format-placeholder">[Year]</span></td><td><span class="format-placeholder">[% / CGPA]</span></td></tr>' +
                        '<tr><td><span class="format-placeholder">[H.S.C. (12th)]</span></td><td><span class="format-placeholder">[State / CBSE Board]</span></td><td><span class="format-placeholder">[Year]</span></td><td><span class="format-placeholder">[%]</span></td></tr>' +
                        '<tr><td><span class="format-placeholder">[S.S.C. (10th)]</span></td><td><span class="format-placeholder">[State / CBSE Board]</span></td><td><span class="format-placeholder">[Year]</span></td><td><span class="format-placeholder">[%]</span></td></tr>' +
                      '</tbody>' +
                    '</table>' +
                  '</div>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">4. Work Experience / Legal Internships</div>' +
                  '<ul class="cv-list">' +
                    '<li><strong><span class="format-placeholder">[Role & Firm/Chamber Name]</span> (<span class="format-placeholder">[Month Year – Month Year]</span>):</strong> <span class="format-placeholder">[2–3 bullet points of tasks performed: drafting, research, court visits.]</span></li>' +
                  '</ul>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">5. Skills, Achievements & References</div>' +
                  '<ul class="cv-list">' +
                    '<li><strong>Key Skills:</strong> <span class="format-placeholder">[Legal Drafting, SCC Online/Manupatra Research, MS Office, Communication]</span></li>' +
                    '<li><strong>Co-Curricular / Moot Courts:</strong> <span class="format-placeholder">[Moot Court awards, publications, legal aid camps]</span></li>' +
                    '<li><strong>References:</strong> 1. <span class="format-placeholder">[Name, Designation, Contact]</span> | 2. <span class="format-placeholder">[Name, Designation, Contact]</span></li>' +
                  '</ul>' +
                '</div>' +

                '<div class="cv-block">' +
                  '<div class="cv-block-heading">6. Declaration</div>' +
                  '<div class="cv-text">I hereby declare that all the details mentioned above are true and correct to the best of my knowledge and belief.</div>' +
                  '<div class="cv-sign-row">' +
                    '<div><strong>Date:</strong> <span class="format-placeholder">[DD/MM/YYYY]</span><br/><strong>Place:</strong> <span class="format-placeholder">[City]</span></div>' +
                    '<div style="text-align: right;"><em>(Sd/-)</em><br/><strong><span class="format-placeholder">[Your Name]</span></strong></div>' +
                  '</div>' +
                '</div>' +
              '</div>'
            ]
          },
          {
            heading: 'III. Skeletal Framework for Facing a Job Interview',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head"><div class="format-doc-badge">FACING A JOB INTERVIEW — 3-PHASE SKELETON</div></div>' +
                '<strong>Phase 1: Before the Interview (Preparation)</strong><br/>' +
                '• <strong>Company / Firm Research:</strong> Study practice areas, recent landmark cases, clients, and work culture.<br/>' +
                '• <strong>Know Your C.V.:</strong> Be ready to explain every internship, moot court, research paper, and gap.<br/>' +
                '• <strong>Subject Revision:</strong> Revise core bare acts, recent amendments, and current legal news.<br/>' +
                '• <strong>Document Folder:</strong> Carry extra copies of C.V., certificates, ID proof, and passport photos neatly.<br/><br/>' +
                '<strong>Phase 2: During the Interview (Performance)</strong><br/>' +
                '• <strong>Dress & Grooming:</strong> Formal conservative attire (dark suit/blazer, white shirt, polished shoes, neat hair).<br/>' +
                '• <strong>Body Language:</strong> Arrive 20 minutes early, knock/ask permission before entering, greet politely, sit upright, maintain natural eye contact.<br/>' +
                '• <strong>Answering Technique (STAR Method):</strong> Structure behavioral answers using <strong>S</strong>ituation → <strong>T</strong>ask → <strong>A</strong>ction → <strong>R</strong>esult.<br/>' +
                '• <strong>Honesty:</strong> Never bluff if you do not know a law; politely state you will check and learn it.<br/>' +
                '• <strong>Closing Question:</strong> Ask 1 thoughtful question about the role or team when invited.<br/><br/>' +
                '<strong>Phase 3: After the Interview (Follow-Up)</strong><br/>' +
                '• Thank the panel before leaving and send a polite, brief "Thank You" email within 24 hours.' +
              '</div>'
            ]
          }
        ],
        conclusion: 'Using a clear 3-paragraph cover letter, a clean boxed C.V. with a qualifications table, and the 3-phase interview structure guarantees maximum clarity and full marks in exam drafting.'
      }
    },
    {
      id: 'eng-skel-2',
      qNum: 'Format 2',
      marks: 10,
      question: 'General Notice, Agenda, Minutes, and Resolutions — Complete Skeletal Formats (As Per College Textbook)',
      flairs: [
        { type: 'repeat', label: '📐 Textbook Reference • Corporate Drafting' },
      ],
      answer: {
        sections: [
          {
            heading: 'I. Essential Rules for Notice, Agenda & Minutes (College Reference Summary)',
            paragraphs: [
              '<strong>1. Notice of Meeting (Section 18.2):</strong> A written advance intimation sent to every person entitled to attend (members/shareholders, directors, auditors). It must specify: (a) Date, time, and place; (b) Serial agenda of business; (c) Date of issue; (d) Signature of competent authority (<em>"By the order of the Board / Sd/- Secretary"</em>); (e) Enclosures (Directors\' Report, Balance Sheet, Proxy Form); and (f) Proxy note & Explanatory Statement for special business.<br/>' +
              '<strong>2. Agenda:</strong> A serial list of topics to be discussed. Routine business comes first, followed by special business. The last item is usually <em>"Any other matter with the permission of the Chair"</em>. It can be written either as brief one-line items or as draft-minutes wording.<br/>' +
              '<strong>3. Minutes (Section 18.3):</strong> The official, permanent record of business transacted. Style must be <strong>impersonal, objective, matter-of-fact, concise, and in the past tense</strong>—never emotional. Follow the exact serial numbering of the Agenda, list members present/absent, and end with the signatures of the Chairman and Secretary.'
            ]
          },
          {
            heading: 'II. Skeletal Format 1: Notice of General / Annual General Meeting (With Agenda)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head">' +
                  '<div class="format-org-title"><span class="format-placeholder">[NAME OF THE COMPANY / ORGANISATION LTD.]</span></div>' +
                  '<div><span class="format-placeholder">[Registered Office Address, Street, City]</span></div>' +
                '</div>' +
                '<div class="format-right">Dated: <span class="format-placeholder">[DD Month YYYY]</span></div>' +
                '<div class="format-center-head"><div class="format-doc-badge">NOTICE</div></div>' +
                '<p>Notice is hereby given that the <span class="format-placeholder">[Ordinal, e.g., Twelfth Annual General / Extraordinary General]</span> Meeting of the shareholders/members of the company will be held at <span class="format-placeholder">[Venue / Hall Name, Full Address]</span> on <span class="format-placeholder">[Day, e.g., Monday]</span>, the <span class="format-placeholder">[Date, e.g., 15th July, 20XX]</span> at <span class="format-placeholder">[Time, e.g., 10.00 a.m.]</span> to transact the following business:</p>' +
                '<br/><strong>Agenda</strong>' +
                '<ol class="cv-list">' +
                  '<li>To read the notice convening the meeting.</li>' +
                  '<li>To read and approve the minutes of the previous meeting.</li>' +
                  '<li>Chairman\'s Speech.</li>' +
                  '<li>To consider and adopt the Directors\' Report, audited Balance Sheet, and Profit &amp; Loss Account for the year ended 31st March, <span class="format-placeholder">[20XX]</span>.</li>' +
                  '<li>To declare dividend <span class="format-placeholder">[or transact routine business]</span>.</li>' +
                  '<li>To appoint / re-appoint directors retiring by rotation.</li>' +
                  '<li>To appoint auditors for the next year and fix their remuneration.</li>' +
                  '<li><span class="format-placeholder">[Special Business item, if any]</span>.</li>' +
                  '<li>Vote of thanks.</li>' +
                '</ol>' +
                '<div class="format-right">' +
                  'By the order of the Board<br/>' +
                  '<em>Sd/-</em><br/>' +
                  '<strong>Secretary</strong>' +
                '</div>' +
                '<div class="format-note-box">' +
                  '<strong>Notes:</strong><br/>' +
                  '1. A member entitled to attend and vote at the General Meeting may appoint a proxy, who need not be a member, to attend and vote on a poll.<br/>' +
                  '2. A proxy form is attached herewith.<br/>' +
                  '3. The Register of Members will remain closed from <span class="format-placeholder">[Start Date]</span> to <span class="format-placeholder">[End Date]</span>, both days inclusive.' +
                '</div>' +
              '</div>'
            ]
          },
          {
            heading: 'III. Skeletal Format 2: Agenda (Detailed Motion / Draft-Minutes Style)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head"><div class="format-doc-badge">AGENDA OF MEETING</div></div>' +
                '<strong>Agenda of the <span class="format-placeholder">[Ordinal]</span> <span class="format-placeholder">[Annual General / Board]</span> Meeting of <span class="format-placeholder">[Company Name]</span> to be held at <span class="format-placeholder">[Venue]</span> on <span class="format-placeholder">[Day & Date]</span> at <span class="format-placeholder">[Time]</span>.</strong>' +
                '<ol class="cv-list" style="margin-top: 0.6rem;">' +
                  '<li>Election of Chairman (if required).</li>' +
                  '<li>The Secretary to read the notice convening the meeting.</li>' +
                  '<li>The Secretary to read the Auditors\' Report on the Accounts for the year ended <span class="format-placeholder">[Date]</span>.</li>' +
                  '<li>The Chairman to move that the Directors\' Report and Accounts, as printed and circulated, be taken as read.</li>' +
                  '<li>The Chairman\'s Speech.<br/>The Chairman to propose: <em>"That the Balance Sheet as at [Date] and Profit &amp; Loss A/c thereon be and are hereby approved and adopted."</em><br/>To second the motion • To invite discussion • To put the motion to the meeting and declare the result.</li>' +
                  '<li><span class="format-placeholder">[Routine / Special Business Motions — Proposer, Seconder, Vote & Result]</span>.</li>' +
                  '<li>Any other matter with the permission of the Chair.</li>' +
                  '<li>Vote of thanks.</li>' +
                '</ol>' +
                '<div class="format-right">By the order of the Board<br/><em>Sd/-</em><br/><strong>Secretary</strong></div>' +
              '</div>'
            ]
          },
          {
            heading: 'IV. Skeletal Format 3: Minutes of Meeting (Board / General Meeting)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head"><div class="format-doc-badge">MINUTES OF THE MEETING</div></div>' +
                '<p>The <span class="format-placeholder">[Ordinal, e.g., Seventh]</span> meeting of the <span class="format-placeholder">[Board of Directors / Shareholders]</span> of <span class="format-placeholder">[Company Name]</span> was held at <span class="format-placeholder">[Registered Office / Venue]</span> on <span class="format-placeholder">[Day, Date]</span> at <span class="format-placeholder">[Time]</span>.</p>' +
                '<div class="cv-kv-grid" style="margin-top: 0.65rem;">' +
                  '<div class="cv-kv-label">1. <span class="format-placeholder">[Chairman Name]</span></div><div class="cv-kv-value" style="text-align: right;"><strong>Present (In the Chair)</strong></div>' +
                  '<div class="cv-kv-label">2. <span class="format-placeholder">[Director Names]</span></div><div class="cv-kv-value" style="text-align: right;"><strong>Directors</strong></div>' +
                  '<div class="cv-kv-label">In Attendance: <span class="format-placeholder">[Names]</span></div><div class="cv-kv-value" style="text-align: right;"><strong>Secretary / Finance Controller</strong></div>' +
                  '<div class="cv-kv-label">Absent (Leave Granted):</div><div class="cv-kv-value" style="text-align: right;"><span class="format-placeholder">[Name, if any]</span></div>' +
                '</div>' +
                '<ol class="cv-list" style="margin-top: 0.75rem;">' +
                  '<li><strong>Confirmation of Minutes:</strong> The minutes of the last meeting held on <span class="format-placeholder">[Previous Date]</span> were read, approved as correct, and signed by the Chairman.</li>' +
                  '<li><strong><span class="format-placeholder">[Routine Item, e.g., Payments / Notice]</span>:</strong> <span class="format-placeholder">[Objective summary in past tense of discussion and decision taken.]</span></li>' +
                  '<li><strong><span class="format-placeholder">[Special Business / Committee Report]</span>:</strong> <span class="format-placeholder">[Record of resolution passed: "It was resolved that..."]</span></li>' +
                  '<li><strong>Next Meeting:</strong> The next meeting shall be held at the Company\'s registered office on <span class="format-placeholder">[Day, Date, Time]</span>.</li>' +
                '</ol>' +
                '<div class="format-split-row">' +
                  '<div><strong>Dated:</strong> <span class="format-placeholder">[DD/MM/YYYY]</span></div>' +
                  '<div style="text-align: right;"><em>Sd/-</em><br/><strong>Chairman</strong></div>' +
                '</div>' +
              '</div>'
            ]
          },
          {
            heading: 'V. Skeletal Format 4: Company Resolutions (Ordinary & Special)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head"><div class="format-doc-badge">RESOLUTION FORMAT</div></div>' +
                '<p><strong>CERTIFIED TRUE COPY OF THE <span class="format-placeholder">[ORDINARY / SPECIAL / BOARD]</span> RESOLUTION PASSED AT THE MEETING OF <span class="format-placeholder">[BOARD OF DIRECTORS / SHAREHOLDERS]</span> OF <span class="format-placeholder">[COMPANY NAME]</span> HELD ON <span class="format-placeholder">[DATE]</span> AT <span class="format-placeholder">[TIME]</span> AT <span class="format-placeholder">[VENUE]</span>.</strong></p>' +
                '<p style="margin-top: 0.5rem;"><strong>Item No. <span class="format-placeholder">[X]</span>: <span class="format-placeholder">[Subject Heading of Resolution]</span></strong></p>' +
                '<p style="margin-top: 0.4rem;"><em>"<strong>RESOLVED THAT</strong> pursuant to Section <span class="format-placeholder">[Section No.]</span> of the Companies Act, 2013 and other applicable provisions, approval be and is hereby accorded to <span class="format-placeholder">[state exact action / decision clearly]</span>."</em></p>' +
                '<p style="margin-top: 0.4rem;"><em>"<strong>RESOLVED FURTHER THAT</strong> Mr./Ms. <span class="format-placeholder">[Name & Designation]</span> be and is hereby authorised to sign, execute, and file all necessary documents and forms with the Registrar of Companies and to do all acts necessary to give effect to this resolution."</em></p>' +
                '<div class="format-split-row">' +
                  '<div><strong>Proposed by:</strong> <span class="format-placeholder">[Name]</span><br/><strong>Seconded by:</strong> <span class="format-placeholder">[Name]</span><br/><strong>Result:</strong> Carried unanimously / by requisite majority.</div>' +
                  '<div style="text-align: right;">By Order of the Board<br/><em>Sd/-</em><br/><strong>Director / Company Secretary</strong></div>' +
                '</div>' +
              '</div>'
            ]
          }
        ],
        conclusion: 'Remember the golden exam rule: Notice is written in future tense ("will be held"), Agenda uses infinitives ("To approve..."), Minutes are always written in impersonal past tense ("were read and approved"), and Resolutions use formal legal wording ("RESOLVED THAT...").'
      }
    },
    {
      id: 'eng-skel-3',
      qNum: 'Format 3',
      marks: 10,
      question: 'Report Writing — Official Reports, Newspaper Reports, and Legal Reports (Case Law Based) — Skeletal Formats',
      flairs: [
        { type: 'repeat', label: '📐 Skeletal Format • Report Writing' },
      ],
      answer: {
        sections: [
          {
            heading: 'I. Skeletal Format 1: Official Report (Schematic / Committee Format)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head">' +
                  '<div class="format-doc-badge">OFFICIAL / COMMITTEE REPORT</div>' +
                  '<div class="format-org-title" style="margin-top: 0.4rem;"><span class="format-placeholder">[REPORT ON SUBJECT / INCIDENT / INQUIRY]</span></div>' +
                '</div>' +
                '<div class="cv-kv-grid">' +
                  '<div class="cv-kv-label">To:</div><div class="cv-kv-value"><span class="format-placeholder">[Appointing Authority, e.g., The Managing Director / State Government]</span></div>' +
                  '<div class="cv-kv-label">From:</div><div class="cv-kv-value"><span class="format-placeholder">[Inquiry Committee / Officer Name & Designation]</span></div>' +
                  '<div class="cv-kv-label">Date & Ref. No.:</div><div class="cv-kv-value"><span class="format-placeholder">[DD Month YYYY] | Ref: [XX/20XX]</span></div>' +
                '</div>' +
                '<ol class="cv-list" style="margin-top: 0.75rem;">' +
                  '<li><strong>Terms of Reference:</strong> <span class="format-placeholder">[State why the committee was appointed, order number, and exact scope of inquiry.]</span></li>' +
                  '<li><strong>Procedure / Investigation Followed:</strong> <span class="format-placeholder">[Site inspection, witness statements recorded, documents & forensic records examined.]</span></li>' +
                  '<li><strong>Findings of Fact:</strong> <span class="format-placeholder">[Objective, numbered factual findings discovered during the inquiry without personal bias.]</span></li>' +
                  '<li><strong>Conclusions:</strong> <span class="format-placeholder">[Clear summary identifying root cause, lapses, or accountability.]</span></li>' +
                  '<li><strong>Recommendations:</strong> <span class="format-placeholder">[Practical steps suggested to prevent recurrence and compensate/remedy harm.]</span></li>' +
                '</ol>' +
                '<div class="format-right" style="margin-top: 0.75rem;">' +
                  'Submitted respectfully,<br/>' +
                  '<em>Sd/-</em><br/>' +
                  '<strong><span class="format-placeholder">[Chairperson / Officer Name & Designation]</span></strong>' +
                '</div>' +
              '</div>'
            ]
          },
          {
            heading: 'II. Skeletal Format 2: Newspaper Report (Inverted Pyramid Format)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head">' +
                  '<div class="format-doc-badge">NEWSPAPER REPORT</div>' +
                  '<div class="format-org-title" style="margin-top: 0.45rem;"><span class="format-placeholder">[CATCHY HEADLINE IN BOLD CAPS: WHAT HAPPENED + KEY OUTCOME]</span></div>' +
                  '<div style="font-style: italic; color: var(--text-muted); margin-top: 0.2rem;">By <span class="format-placeholder">[Staff Reporter / Special Correspondent]</span></div>' +
                '</div>' +
                '<p><strong><span class="format-placeholder">[CITY, Month Day]</span>:</strong> <strong>[Lead Paragraph — The 5 Ws]:</strong> <span class="format-placeholder">[Who, What, Where, When, and Why summarised in 3–4 crisp lines giving the core news first.]</span></p>' +
                '<p style="margin-top: 0.5rem;"><strong>[Body Paragraph 1 — Background & Sequence of Events]:</strong> <span class="format-placeholder">[How the incident began, chronological timeline, rescue/police/fire response.]</span></p>' +
                '<p style="margin-top: 0.5rem;"><strong>[Body Paragraph 2 — Official & Eyewitness Quotes]:</strong> <span class="format-placeholder">[Direct quote from Police Officer / Doctor / Official: "..." and eyewitness account.]</span></p>' +
                '<p style="margin-top: 0.5rem;"><strong>[Concluding Paragraph — Current Status & Legal Action]:</strong> <span class="format-placeholder">[FIR sections registered, compensation/inquiry ordered, present situation.]</span></p>' +
              '</div>'
            ]
          },
          {
            heading: 'III. Skeletal Format 3: Legal Report (Case Law Based / Court Report)',
            paragraphs: [
              '<div class="format-box">' +
                '<div class="format-center-head">' +
                  '<div class="format-doc-badge">LEGAL / CASE LAW REPORT</div>' +
                  '<div class="format-org-title" style="margin-top: 0.45rem;"><span class="format-placeholder">[CASE HEADLINE: KEY LEGAL PRINCIPLE SETTLED BY COURT]</span></div>' +
                  '<div style="font-style: italic; color: var(--text-muted); margin-top: 0.2rem;">By <span class="format-placeholder">[Law Reporter]</span> | <span class="format-placeholder">[NEW DELHI / MUMBAI, Date]</span></div>' +
                '</div>' +
                '<div class="cv-kv-grid">' +
                  '<div class="cv-kv-label">Case Title:</div><div class="cv-kv-value"><span class="format-placeholder">[Appellant / Petitioner Name] v. [Respondent Name]</span></div>' +
                  '<div class="cv-kv-label">Court & Bench:</div><div class="cv-kv-value"><span class="format-placeholder">[Supreme Court / High Court] | [Coram: Hon\'ble Justices...]</span></div>' +
                  '<div class="cv-kv-label">Citation & Date:</div><div class="cv-kv-value"><span class="format-placeholder">[AIR / SCC Citation] | Decided on [DD Month YYYY]</span></div>' +
                  '<div class="cv-kv-label">Provisions Involved:</div><div class="cv-kv-value"><span class="format-placeholder">[Articles / Sections of Constitution or Statute]</span></div>' +
                '</div>' +
                '<ol class="cv-list" style="margin-top: 0.75rem;">' +
                  '<li><strong>Material Facts:</strong> <span class="format-placeholder">[Brief, clear chronological background leading to the dispute and lower court orders.]</span></li>' +
                  '<li><strong>Issues Framed:</strong> <span class="format-placeholder">[1. Whether... ? 2. Whether... ?]</span></li>' +
                  '<li><strong>Arguments of Counsel:</strong> <span class="format-placeholder">[Petitioner\'s submissions vs. Respondent\'s submissions.]</span></li>' +
                  '<li><strong>Judgment &amp; Ratio Decidendi:</strong> <span class="format-placeholder">[Core legal reasoning of the Court, interpretation of statute/Constitution, and precedents cited.]</span></li>' +
                  '<li><strong>Final Order / Disposition:</strong> <span class="format-placeholder">[Appeal allowed/dismissed, specific directions or relief granted.]</span></li>' +
                '</ol>' +
              '</div>'
            ]
          }
        ],
        conclusion: 'These skeletal formats cover every single writing question in English and Legal Writing – I. Memorize the exact headings, tense rules, and box layouts to write fast, structured, high-scoring answers.'
      }
    }
  ]
};
