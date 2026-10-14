import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NameModal from './components/NameModal';
import PaperTabs from './components/PaperTabs';
import QuestionAccordion from './components/QuestionAccordion';
import { subjectsRegistry } from './data/subjects';
import { BookOpen, Sparkles, ChevronDown, ChevronUp, AlertCircle, FileText } from 'lucide-react';

export default function App() {
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('jurisprep_student_name') || '';
  });
  const [isNameModalOpen, setIsNameModalOpen] = useState(!studentName);
  
  // Subject & Paper state
  const [selectedSubject, setSelectedSubject] = useState(subjectsRegistry[0] || null);
  const [activePaperId, setActivePaperId] = useState(() => {
    return subjectsRegistry[0]?.papers[0]?.id || '';
  });

  // Track expanded question IDs (Set of IDs)
  const [expandedQuestions, setExpandedQuestions] = useState(() => {
    // Default open the first question for instant gratification
    const firstQ = subjectsRegistry[0]?.papers[0]?.questions[0]?.id;
    return new Set(firstQ ? [firstQ] : []);
  });

  const activePaper = selectedSubject?.papers?.find((p) => p.id === activePaperId) || selectedSubject?.papers?.[0];

  const handleNameSubmit = (name) => {
    setStudentName(name);
    localStorage.setItem('jurisprep_student_name', name);
    setIsNameModalOpen(false);
  };

  const handleToggleQuestion = (id) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleAll = () => {
    if (!activePaper?.questions) return;
    const allIds = activePaper.questions.map((q) => q.id);
    const allAreOpen = allIds.every((id) => expandedQuestions.has(id));

    if (allAreOpen) {
      setExpandedQuestions(new Set());
    } else {
      setExpandedQuestions(new Set(allIds));
    }
  };

  const allAreOpen = activePaper?.questions?.length > 0 &&
    activePaper.questions.every((q) => expandedQuestions.has(q.id));

  return (
    <div className="app-container">
      {/* Gatekeeper Name Modal */}
      <NameModal
        isOpen={isNameModalOpen}
        onSubmit={handleNameSubmit}
        currentName={studentName}
      />

      {/* Top Header */}
      <Header
        studentName={studentName}
        onChangeName={() => setIsNameModalOpen(true)}
      />

      {/* Main Container */}
      <main className="main-wrapper">

        {/* Subject Selector Tabs */}
        {subjectsRegistry.length > 1 && (
          <div className="subject-selector-bar">
            {subjectsRegistry.map((subj) => (
              <button
                key={subj.id}
                className={`subject-pill-btn ${selectedSubject?.id === subj.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedSubject(subj);
                  const firstPaper = subj.papers[0];
                  setActivePaperId(firstPaper?.id || '');
                  const firstQ = firstPaper?.questions?.[0]?.id;
                  setExpandedQuestions(new Set(firstQ ? [firstQ] : []));
                }}
              >
                <BookOpen size={16} />
                <span>{subj.name}</span>
                <span className="subject-code-badge">{subj.code}</span>
              </button>
            ))}
          </div>
        )}

        {/* Subject Card Banner */}
        {selectedSubject && (
          <div className="subject-banner">
            <div className="subject-info">
              <h2>
                <BookOpen size={20} style={{ color: 'var(--accent-gold)' }} />
                <span>{selectedSubject.name}</span>
                <span className="subject-code-tag">{selectedSubject.code}</span>
              </h2>
              <p className="subject-meta">{selectedSubject.description}</p>
            </div>
          </div>
        )}

        {/* Paper Tabs Navigation */}
        {selectedSubject?.papers && (
          <PaperTabs
            papers={selectedSubject.papers}
            activePaperId={activePaper?.id}
            onSelectPaper={(id) => {
              setActivePaperId(id);
              // Open first question of new paper by default
              const newPaper = selectedSubject.papers.find((p) => p.id === id);
              const first = newPaper?.questions?.[0]?.id;
              setExpandedQuestions(new Set(first ? [first] : []));
            }}
          />
        )}

        {/* University Exam Pattern & Choice Structure Banner */}
        {activePaper?.questions?.length > 0 && (
          <div className="exam-pattern-card">
            <div className="exam-pattern-header">
              <div className="exam-pattern-title">
                <FileText size={16} className="pattern-icon" />
                <span>University Examination Pattern & Options Structure</span>
              </div>
              <button className="expand-all-btn" onClick={handleToggleAll}>
                {allAreOpen ? (
                  <>
                    <ChevronUp size={15} />
                    <span>Collapse All</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={15} />
                    <span>Expand All</span>
                  </>
                )}
              </button>
            </div>
            <div className="exam-pattern-chips">
              <span className="pattern-chip">
                <strong>Paper Total:</strong> 80 Marks • 3 Hours (Attempt 7 Questions in All)
              </span>
              <span className="pattern-chip highlight">
                <strong>Q1 (Compulsory):</strong> Attempt any 4 of 6 Short Notes (5M each = 20M)
              </span>
              <span className="pattern-chip">
                <strong>Q2 to Q9:</strong> Attempt any 6 of remaining 8 Questions (10M each = 60M)
              </span>
              <span className="pattern-chip success">
                <strong>Target Length:</strong> 5M: 450–650 Words (2.5–3 Pages) • 10M: 950–1200 Words (4–4.5 Pages)
              </span>
            </div>
          </div>
        )}

        {/* Questions Accordion List */}
        {activePaper?.questions && activePaper.questions.length > 0 ? (
          <div className="questions-list">
            {activePaper.questions.map((q) => (
              <QuestionAccordion
                key={q.id}
                questionData={q}
                isOpen={expandedQuestions.has(q.id)}
                onToggle={() => handleToggleQuestion(q.id)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-subject-card">
            <AlertCircle size={40} className="empty-icon" />
            <h3 className="empty-title">Ready for Your Input</h3>
            <p className="empty-desc">
              This paper slot is primed and waiting. Once you provide the syllabus and question papers for this subject, every question and high-yield predictive answer will appear here.
            </p>
          </div>
        )}
      </main>

      {/* Sleek Site Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-curator">Curated by Swayam Jain</div>
          <div>B.A. LL.B. Semester III • UGC NEP Curriculum</div>
        </div>
      </footer>
    </div>
  );
}
