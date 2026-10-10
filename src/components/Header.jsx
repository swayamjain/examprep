import React from 'react';
import { Scale, User, Edit3 } from 'lucide-react';

export default function Header({ studentName, onChangeName }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-title-wrap">
            <Scale className="header-logo-icon" />
            <span className="header-title">ExamPrep</span>
          </div>
          <span className="header-tagline">Curated by Swayam Jain</span>
        </div>

        <div className="header-actions">
          {studentName && (
            <button
              className="user-badge"
              onClick={onChangeName}
              title="Click to edit name"
            >
              <span className="user-badge-dot"></span>
              <User size={14} />
              <span>{studentName}</span>
              <Edit3 size={12} style={{ opacity: 0.6 }} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
