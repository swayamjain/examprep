import React from 'react';
import { ChevronDown, BookOpen, Scale, Award, Flame, Zap } from 'lucide-react';

export default function QuestionAccordion({ questionData, isOpen, onToggle }) {
  const {
    id,
    qNum,
    marks,
    question,
    flairs = [],
    answer,
  } = questionData;

  const isTenMarks = marks === 10 || marks === '10';

  // Filter out any predictive flair or unit numbers as per user instructions
  const visibleFlairs = flairs.filter(
    (f) =>
      f.type !== 'predictive' &&
      !f.label?.toLowerCase().includes('predictive') &&
      !f.label?.toLowerCase().includes('unit')
  );

  return (
    <div className={`question-accordion-card ${isOpen ? 'open' : ''}`}>
      <button
        className="question-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="question-trigger-content">
          <div className="question-meta-row">
            <span className="question-num-badge">{qNum}</span>

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
          </div>

          {/* 1. Statutory Framework / Bare Act Foundation */}
          {answer.statutoryFramework && (
            <div className="statutory-callout">
              <div className="statutory-heading">
                <Scale size={15} />
                Statutory Provisions & Constitutional Foundation
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

          {/* 3. Essential Ingredients / Substantive Doctrine */}
          {answer.ingredients && answer.ingredients.length > 0 && (
            <div className="answer-section">
              <div className="answer-section-title">Essential Ingredients & Substantive Legal Doctrine</div>
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
              <div className="answer-section-title">Detailed Legal Analysis</div>
              {answer.discussion.map((para, i) => (
                <p
                  key={i}
                  className="answer-paragraph"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          )}

          {/* 5. Landmark & Verified Case Laws */}
          {answer.caseLaws && answer.caseLaws.length > 0 && (
            <div className="answer-section">
              <div className="answer-section-title">Authoritative Case Law Jurisprudence</div>
              {answer.caseLaws.map((cl, i) => (
                <div key={i} className="case-law-card">
                  <div className="case-law-title">{cl.name}</div>
                  {cl.citation && <div className="case-law-citation">{cl.citation}</div>}
                  {cl.facts && (
                    <div className="case-law-block">
                      <span className="tag">Facts:</span>
                      {cl.facts}
                    </div>
                  )}
                  {cl.ratio && (
                    <div className="case-law-block">
                      <span className="tag">Ratio Decidendi:</span>
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
              <div className="answer-section-title">Exceptions, Limitations & Critical Appraisal</div>
              <p
                className="answer-paragraph"
                dangerouslySetInnerHTML={{ __html: answer.criticalAnalysis }}
              />
            </div>
          )}

          {/* 7. Conclusion */}
          {answer.conclusion && (
            <div className="conclusion-box">
              <div className="conclusion-heading">Conclusion</div>
              <div className="conclusion-text">{answer.conclusion}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
