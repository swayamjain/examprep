import React from 'react';
import { ChevronDown, BookOpen, Scale, Award, Flame, Zap, Landmark, GraduationCap } from 'lucide-react';

export default function QuestionAccordion({ questionData, isOpen, onToggle, subject }) {
  const {
    id,
    qNum,
    marks,
    question,
    flairs = [],
    answer,
  } = questionData;

  const isTenMarks = marks === 10 || marks === '10';

  // Determine subject course track (Law / LLB vs Humanities / BA)
  const courseType = subject?.courseType || (
    subject?.id === 'political-science-3'
      ? 'ba-polisci'
      : subject?.id === 'english1'
        ? 'ba-english'
        : 'llb'
  );
  const isLaw = courseType === 'llb';
  const isPolSci = courseType === 'ba-polisci';
  const isEnglish = courseType === 'ba-english';

  // Subject-tailored labels & headings
  const config = {
    courseBadge: isLaw ? (
      <span className="course-pill pill-llb">
        <Scale size={11} /> LLB • Law
      </span>
    ) : isPolSci ? (
      <span className="course-pill pill-ba-polisci">
        <Landmark size={11} /> BA • Pol Science
      </span>
    ) : (
      <span className="course-pill pill-ba-english">
        <BookOpen size={11} /> BA • English
      </span>
    ),
    examTrackLabel: isLaw ? 'LLB Course Standard' : isPolSci ? 'BA Political Science Standard' : 'BA English Literature Standard',
    frameworkTitle: isLaw
      ? 'Statutory & Constitutional Provisions'
      : isPolSci
        ? 'Theoretical Framework & Key Thinkers'
        : 'Literary Context & Reference Foundation',
    frameworkIcon: isLaw ? Scale : isPolSci ? Landmark : BookOpen,
    frameworkClass: isLaw ? 'callout-law' : isPolSci ? 'callout-polisci' : 'callout-english',
    ingredientsTitle: isLaw
      ? 'Essential Legal Elements & Principles'
      : isPolSci
        ? 'Key Dimensions & Core Concepts'
        : 'Core Thematic Elements & Highlights',
    discussionTitle: isLaw
      ? 'Detailed Legal Analysis & Application'
      : isPolSci
        ? 'In-Depth Theoretical Analysis'
        : 'Critical & Stylistic Analysis',
    caseLawsTitle: isLaw
      ? 'Landmark Cases & Judicial Precedents'
      : isPolSci
        ? 'Key Thinkers, Precedents & Case Studies'
        : 'Judicial Precedents & Legal Citations',
    caseFactsTag: isLaw ? 'Facts:' : 'Context:',
    caseRatioTag: 'Judgement:',
    criticalTitle: isLaw
      ? 'Exceptions, Defences & Practical Scope'
      : isPolSci
        ? 'Critical Appraisal & Democratic Relevance'
        : 'Critical Appreciation & Literary Significance',
    conclusionTitle: isLaw
      ? 'Exam Conclusion'
      : isPolSci
        ? 'Concluding Summary'
        : 'Concluding Takeaway',
  };

  const FrameworkIcon = config.frameworkIcon;

  // Filter out any predictive flair or unit numbers as per user instructions
  const visibleFlairs = flairs.filter(
    (f) =>
      f.type !== 'predictive' &&
      !f.label?.toLowerCase().includes('predictive') &&
      !f.label?.toLowerCase().includes('unit')
  );

  return (
    <div className={`question-accordion-card ${isOpen ? 'open' : ''} ${courseType}`}>
      <button
        className="question-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="question-trigger-content">
          <div className="question-meta-row">
            <span className="question-num-badge">{qNum}</span>

            {/* Course Stream Badge (LLB vs BA) */}
            {config.courseBadge}

            {/* Marks Tag */}
            <span
              className={`flair-badge ${isTenMarks ? 'flair-marks-10' : 'flair-marks-5'}`}
            >
              <Award size={13} />
              {marks} MARKS {isTenMarks ? '(4–4.5 Pages)' : '(2.5–3 Pages)'}
            </span>

            {/* Dynamic Flairs (Repeat / High Frequency) */}
            {visibleFlairs.map((flair, idx) => {
              let flairClass = 'flair-yield';
              let Icon = Zap;

              if (flair.type === 'repeat') {
                flairClass = 'flair-repeat';
                Icon = Flame;
              }

              return (
                <span key={idx} className={`flair-badge ${flairClass}`}>
                  <Icon size={12} />
                  {flair.label}
                </span>
              );
            })}
          </div>

          <h3 className="question-text">{question}</h3>
        </div>

        <ChevronDown size={20} className="accordion-chevron" />
      </button>

      {isOpen && (
        <div className="answer-body">
          {/* Header Stats Bar */}
          <div className="answer-header-stats">
            <span className="stat-item">
              <BookOpen size={14} />
              <strong>Exam Target:</strong>{' '}
              {isTenMarks ? '950–1200 words (4 to 4.5 pages)' : '450–650 words (2.5 to 3 pages)'}
            </span>
            <span className="stat-stream-badge">
              {config.examTrackLabel}
            </span>
          </div>

          {/* 1. Statutory / Theoretical / Literary Framework */}
          {answer.statutoryFramework && (
            <div className={`statutory-callout ${config.frameworkClass}`}>
              <div className="statutory-heading">
                <FrameworkIcon size={15} />
                {config.frameworkTitle}
              </div>
              <div className="statutory-text">{answer.statutoryFramework}</div>
            </div>
          )}

          {/* 2. Structured Sections (if provided in array format) */}
          {answer.sections && answer.sections.length > 0 && (
            <div className="answer-structured-flow">
              {answer.sections.map((sec, sIdx) => (
                <div key={sIdx} className="answer-section">
                  <div className="answer-section-title">{sec.heading}</div>
                  {sec.paragraphs ? (
                    sec.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="answer-paragraph"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))
                  ) : (
                    <p
                      className="answer-paragraph"
                      dangerouslySetInnerHTML={{ __html: sec.content }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 3. Essential Ingredients / Core Dimensions */}
          {answer.ingredients && answer.ingredients.length > 0 && (
            <div className="answer-section">
              <div className="answer-section-title">{config.ingredientsTitle}</div>
              {answer.ingredients.map((ing, i) => (
                <div key={i} className="answer-lead-point">
                  <span className="point-index">{i + 1}.</span>
                  <div
                    className="point-content"
                    dangerouslySetInnerHTML={{ __html: ing }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* 4. Substantive Discussion / Explanatory Paragraphs */}
          {answer.discussion && answer.discussion.length > 0 && (
            <div className="answer-section">
              <div className="answer-section-title">{config.discussionTitle}</div>
              {answer.discussion.map((para, i) => (
                <p
                  key={i}
                  className="answer-paragraph"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          )}

          {/* 5. Landmark & Verified Case Laws (Judgement instead of Ratio Decidendi) */}
          {answer.caseLaws && answer.caseLaws.length > 0 && (
            <div className="answer-section">
              <div className="answer-section-title">{config.caseLawsTitle}</div>
              {answer.caseLaws.map((cl, i) => (
                <div key={i} className="case-law-card">
                  <div className="case-law-title">{cl.name}</div>
                  {cl.citation && <div className="case-law-citation">{cl.citation}</div>}
                  {cl.facts && (
                    <div className="case-law-block">
                      <span className="tag">{config.caseFactsTag}</span>
                      {cl.facts}
                    </div>
                  )}
                  {cl.ratio && (
                    <div className="case-law-block">
                      <span className="tag">{config.caseRatioTag}</span>
                      {cl.ratio}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 6. Critical Analysis / Exceptions */}
          {answer.criticalAnalysis && (
            <div className="answer-section">
              <div className="answer-section-title">{config.criticalTitle}</div>
              <p
                className="answer-paragraph"
                dangerouslySetInnerHTML={{ __html: answer.criticalAnalysis }}
              />
            </div>
          )}

          {/* 7. Conclusion */}
          {answer.conclusion && (
            <div className="conclusion-box">
              <div className="conclusion-heading">{config.conclusionTitle}</div>
              <div className="conclusion-text">{answer.conclusion}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
