import React from 'react';

export default function ScoreBoard({ score, bestScore, level, combo }) {
  return (
    <div className="score-board" aria-label="Placar">
      <div className="score-item score-main">
        <span>Pontuação</span>
        <strong>{String(score).padStart(3, '0')}</strong>
      </div>
      <div className="score-item">
        <span>Recorde</span>
        <strong>{String(bestScore).padStart(3, '0')}</strong>
      </div>
      <div className="score-item">
        <span>Nível</span>
        <strong>{String(level).padStart(2, '0')}</strong>
      </div>
      <div className="score-item score-combo">
        <span>Combo</span>
        <strong>{combo > 0 ? `x${combo}` : '—'}</strong>
      </div>
    </div>
  );
}
