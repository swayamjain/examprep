import React, { useState } from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { sendDiscordNotification } from '../config/webhook';

export default function NameModal({ isOpen, onSubmit, currentName }) {
  const [name, setName] = useState(currentName || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Please enter your name to proceed.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Dispatch Discord webhook asynchronously
      sendDiscordNotification(trimmed);
    } catch (err) {
      console.error('Webhook error:', err);
    }

    // Call onSubmit to set name in state & localStorage
    onSubmit(trimmed);
    setIsSubmitting(false);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-icon-badge">
          <Scale size={26} />
        </div>
        <h2 className="modal-title">Welcome to ExamPrep</h2>
        <p className="modal-description">
          B.A. LL.B. Semester III • Exam Companion.
          Please enter your name to unlock the curated question papers and answers.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="name-input-group">
            <label className="name-input-label" htmlFor="student-name-input">
              Your Name
            </label>
            <input
              id="student-name-input"
              type="text"
              className="name-input"
              placeholder="e.g. Arjun Sharma"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              autoFocus
              maxLength={60}
            />
            {error && (
              <p style={{ color: '#F43F5E', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="modal-submit-btn"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Entering...' : 'Access Question Papers'}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="modal-footer-note">
          Curated by Swayam Jain
        </p>
      </div>
    </div>
  );
}
