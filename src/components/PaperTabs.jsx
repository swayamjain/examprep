import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

export default function PaperTabs({ papers, activePaperId, onSelectPaper }) {
  if (!papers || papers.length === 0) return null;

  return (
    <div className="paper-tabs-nav" role="tablist">
      {papers.map((paper) => {
        const isActive = paper.id === activePaperId;
        const isPredictive = paper.isPredictive;

        return (
          <button
            key={paper.id}
            role="tab"
            aria-selected={isActive}
            className={`paper-tab-btn ${isPredictive ? 'predictive' : ''} ${
              isActive ? 'active' : ''
            }`}
            onClick={() => onSelectPaper(paper.id)}
          >
            {isPredictive ? <Sparkles size={16} /> : <FileText size={16} />}
            <span>{paper.title}</span>
          </button>
        );
      })}
    </div>
  );
}
